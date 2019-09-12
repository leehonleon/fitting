import Sortable from "sortablejs";
import { insertNodeAt, camelize, console, removeNode } from "./util/helper";

function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }
  object = object || {};
  object[propName] = value;
  return object;
}

// 得到vm中对象的索引
function computeVmIndex(vnodes, element) {
  return vnodes.map(elt => elt.elm).indexOf(element);
}

// 计算组件索引
function computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  const elmFromNodes = slots.map(elt => elt.elm);
  const footerIndex = children.length - footerOffset;
  // 为了适应动态component加载之前没有根节点的问题，这里简单修改一下。
  // const rawIndexes = [...children].map((elt, idx) =>
  //   idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt)
  // );
  const rawIndexes = [...elmFromNodes].map((elt, idx) =>
    idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt)
  );
  return isTransition ? rawIndexes.filter(ind => ind !== -1) : rawIndexes;
}

function emit(evtName, evtData) {
  this.$nextTick(() => this.$emit(evtName.toLowerCase(), evtData));
}

function delegateAndEmit(evtName) {
  return evtData => {
    if (this.realList !== null) {
      this["onDrag" + evtName](evtData);
    }
    emit.call(this, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }
  const [{ componentOptions }] = slots;
  if (!componentOptions) {
    return false;
  }
  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  let headerOffset = 0;
  let footerOffset = 0;
  const header = getSlot(slot, scopedSlot, "header");
  if (header) {
    headerOffset = header.length;
    children = children ? [...header, ...children] : [...header];
  }
  const footer = getSlot(slot, scopedSlot, "footer");
  if (footer) {
    footerOffset = footer.length;
    children = children ? [...children, ...footer] : [...footer];
  }
  return {
    children,
    headerOffset,
    footerOffset
  };
}

function bindAttributes(attributes, bind) {
  const update = (name, value) => {
    attributes = buildAttribute(attributes, name, value);
  };

  update("on", bind);
  return attributes;
}

function getComponentAttributes($attrs, componentData) {
  let attributes = null;
  const update = (name, value) => {
    attributes = buildAttribute(attributes, name, value);
  };
  const attrs = Object.keys($attrs)
    .filter(key => key === "id" || key.startsWith("data-"))
    .reduce((res, key) => {
      res[key] = $attrs[key];
      return res;
    }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }
  const { on, props, attrs: componentDataAttrs } = componentData;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

const eventsListened = ["Start", "Add", "Remove", "Update", "End"];
const eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
const readonlyProperties = ["Move", ...eventsListened, ...eventsToEmit].map(
  evt => "on" + evt
);
var draggingElement = null;

const props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: original => {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};

const draggableComponent = {
  name: "draggable",

  inheritAttrs: false,

  props,

  data() {
    return {
      optionset: ""
    };
  },

  render(h) {
    const slots = this.$slots.default;
    this.transitionMode = isTransition(slots);
    const { children, headerOffset, footerOffset } = computeChildrenAndOffsets(
      slots,
      this.$slots,
      this.$scopedSlots
    );
    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    const attributes = getComponentAttributes(this.$attrs, this.componentData);
    bindAttributes(attributes, this.bindEvent());
    return h(this.getTag(), attributes, children);
  },

  created() {
    if (this.list !== null && this.value !== null) {
      console.error(
        "Value and list props are mutually exclusive! Please set one or another."
      );
    }

    if (this.element !== "div") {
      console.warn(
        "Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props"
      );
    }

    if (this.options !== undefined) {
      console.warn(
        "Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props"
      );
    }
  },

  mounted() {
    this.noneFunctionalComponentMode =
      this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() &&
      !this.getIsFunctional();
    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error(
        `Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ${this.getTag()}`
      );
    }
    // 将组件的事件响应function绑定到sortable
    var optionsAdded = {};
    eventsListened.forEach(elt => {
      optionsAdded["on" + elt] = delegateAndEmit.call(this, elt);
    });

    eventsToEmit.forEach(elt => {
      optionsAdded["on" + elt] = emit.bind(this, elt);
    });

    // 等到所有组件属性，并配装成对象，应该是用作sortable的option
    const attributes = Object.keys(this.$attrs).reduce((res, key) => {
      res[camelize(key)] = this.$attrs[key];
      return res;
    }, {});

    // 组装所有option
    const options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: (evt, originalEvent) => {
        return this.onDragMove(evt, originalEvent);
      }
    });

    // draggable没被设定则设定为">*"
    !("draggable" in options) && (options.draggable = ">*");

    // 注册sortable
    this._sortable = new Sortable(this.rootContainer, options);
    this.computeIndexes();
  },

  beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },

  computed: {
    rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },

    realList() {
      return this.list ? this.list : this.value;
    }
  },

  watch: {
    options: {
      handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },

    $attrs: {
      handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },

    realList() {
      this.computeIndexes();
    }
  },

  methods: {
    bindEvent() {
      return {
        // 绑定VUE操作
        dragenter: this.dragEnter
      };
    },
    dragEnter(evt) {
      if (evt.target.attributes.dragarea && evt.target) {
        evt.target.style.background = "purple";
        // 等到所有组件属性，并配装成对象，应该是用作sortable的option
        const attributes = Object.keys(this.$attrs).reduce((res, key) => {
          res[camelize(key)] = this.$attrs[key];
          return res;
        }, {});

        // 组装所有option
        const options = Object.assign({}, this.options, attributes, {
          onMove: (evt, originalEvent) => {
            return this.onDragMove(evt, originalEvent);
          },
          onStart: evt => {
            this.context = this.getUnderlyingVm(evt.item);
            evt.item._underlying_vm_ = this.clone(this.context.element);
            draggingElement = evt.item;
          },

          onAdd: evt => {
            const element = evt.item._underlying_vm_;
            if (element === undefined) {
              return;
            }
            removeNode(evt.item); // 删除原生事件添加的节点。
            // 获取当前节点位置
            if (
              evt.target.attributes.dragarea != undefined &&
              evt.target.attributes.dragarea.value === "" &&
              evt.target.attributes.originel == undefined
            ) {
              let slotname =
                evt.target.attributes.slotname == undefined
                  ? "default"
                  : evt.target.attributes.slotname.value;
              window.console.log(slotname);
              const to = evt.target.__vue__;
              const path = this.getRealPath(to);
              const component = this.getRealBaseComponent(to);
              window.console.log(path);
              let node = {};
              node[slotname] = [element];
              let { ...o } = component.list[path[0]];
              o.slots = Object.assign(o.slots || {}, node);
              // const newIndex = this.getVmIndex(evt.newIndex);
              const newIndex = path[0];
              component.spliceList(path[0], 0, o);
              // component.computeIndexes();
              // let newIndex = 0;
              const added = {
                o,
                newIndex
              };
              component.emitChanges({
                added
              });
            }
          }
        });
        new Sortable(evt.target, options);
      }
    },
    // 用于判断是否是组件类
    getIsFunctional() {
      const { fnOptions } = this._vnode;
      return fnOptions && fnOptions.functional;
    },

    // 得到标签名
    getTag() {
      return this.tag || this.element;
    },

    // 更新sortable的option，用于监听options属性变化
    updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        const value = camelize(property);
        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },

    getChildrenNodes() {
      // 如果不是组件节点，则返回slots
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }
      // 否则返回该组件slots
      const rawNodes = this.$slots.default;
      // 如果是过渡模式，则返回子节点的slots
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },

    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = computeIndexes(
          this.getChildrenNodes(),
          this.rootContainer.children,
          this.transitionMode,
          this.footerOffset
        );
      });
    },

    // 返回真实对象列表及index
    getUnderlyingVm(htmlElt) {
      const index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);
      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }
      const element = this.realList[index];
      return {
        index,
        element
      };
    },

    getUnderlyingPotencialDraggableComponent({ __vue__: vue }) {
      if (
        !vue ||
        !vue.$options ||
        !isTransitionName(vue.$options._componentTag)
      ) {
        if (
          !("realList" in vue) &&
          vue.$children.length === 1 &&
          "realList" in vue.$children[0]
        )
          return vue.$children[0];

        return vue;
      }
      return vue.$parent;
    },

    getRealBaseComponent(vue) {
      if (!(!vue || !vue.$options)) {
        if ("realList" in vue) {
          return vue;
        }
      }
      return this.getRealBaseComponent(vue.$parent);
    },

    getRealPath(vue) {
      let path = [0];
      if (vue) {
        if (
          vue.$vnode.tag != undefined &&
          vue.$vnode.tag.split("-").pop() === "StageComponentBridge"
        ) {
          path = vue.path;
          return path;
        } else {
          return this.getRealPath(vue.$parent);
        }
      } else {
        return path;
      }
    },

    // DOM更新后再出发Change时间
    emitChanges(evt) {
      // 将回调延迟到下次 DOM 更新循环之后执行。
      this.$nextTick(() => {
        // 触发当前实例上的事件。附加参数都会传给监听器回调。
        this.$emit("change", evt);
      });
    },

    // 更改组件的list属性
    alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }
      const newList = [...this.value];
      onList(newList);
      this.$emit("input", newList);
    },

    // 更改组件的list属性
    spliceList() {
      const spliceList = list => list.splice(...arguments); // arguments 调用该函数时的所有参数。 用意就是调用spliceList和splice的参数一致。
      this.alterList(spliceList);
    },

    // 更改组件的list属性
    updatePosition(oldIndex, newIndex) {
      const updatePosition = list =>
        list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]); // 更新位置，用法 再$1位置，删除$2个数据，插入$3~（一个或多个）的数据,调用对象发生变化，返回删除的元素
      this.alterList(updatePosition);
    },

    getRelatedContextFromMoveEvent({ to, related }) {
      const component = this.getUnderlyingPotencialDraggableComponent(to);
      if (!component) {
        return {
          component
        };
      }
      const list = component.realList;
      const context = {
        list,
        component
      };
      if (to !== related && list && component.getUnderlyingVm) {
        const destination = component.getUnderlyingVm(related);
        if (destination) {
          return Object.assign(destination, context);
        }
      }
      return context;
    },

    getVmIndex(domIndex) {
      const indexes = this.visibleIndexes;
      const numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },

    getComponent() {
      return this.$slots.default[0].componentInstance;
    },

    resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }
      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      const transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },

    onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },

    onDragAdd(evt) {
      const element = evt.item._underlying_vm_;
      if (element === undefined) {
        return;
      }
      removeNode(evt.item);
      const newIndex = this.getVmIndex(evt.newIndex);
      // const newIndex = evt.newIndex;
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      const added = {
        element,
        newIndex
      };
      this.emitChanges({
        added
      });
    },

    onDragRemove(evt) {
      insertNodeAt(this.rootContainer, evt.item, evt.oldIndex);
      if (evt.pullMode === "clone") {
        removeNode(evt.clone);
        return;
      }
      const oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      const removed = {
        element: this.context.element,
        oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed
      });
    },

    onDragUpdate(evt) {
      removeNode(evt.item);
      insertNodeAt(evt.from, evt.item, evt.oldIndex);
      const oldIndex = this.context.index;
      const newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      const moved = {
        element: this.context.element,
        oldIndex,
        newIndex
      };
      this.emitChanges({
        moved
      });
    },

    updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) &&
        (evt[propertyName] += this.headerOffset);
    },

    computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }
      const domChildren = [...evt.to.children].filter(
        el => el.style["display"] !== "none"
      );
      const currentDOMIndex = domChildren.indexOf(evt.related);
      const currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      const draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter
        ? currentIndex
        : currentIndex + 1;
    },

    onDragMove(evt, originalEvent) {
      const onMove = this.move;
      if (!onMove || !this.realList) {
        return true;
      }

      const relatedContext = this.getRelatedContextFromMoveEvent(evt);
      const draggedContext = this.context;
      const futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex
      });
      const sendEvt = Object.assign({}, evt, {
        relatedContext,
        draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },

    onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

export default draggableComponent;
