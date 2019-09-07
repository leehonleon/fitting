export default {
  /**
   * @description 配置sortable基本配置
   */
  options: {
    group: "stage",
    filter: ".drag-ignore",
    ghostClass: "sortable-ghost", // Class name for the drop placeholder
    chosenClass: "sortable-chosen", // Class name for the chosen item
    dragClass: "sortable-drag", // Class name for the dragging item
    animation: 150,
    swapThreshold: 0.04, // 交叉区域阀值
    invertSwap: true, // 本意是交换阀值区域。这里设置为碰到内部边沿
  },
  listOptions: {
    group: {
      name: "stage",
      pull: 'clone',
      put: false
    },
    sort: false,
    animation: 150
  },
  stageOptions: {
    group: "stage",
    filter: ".drag-ignore",
    ghostClass: "sortable-ghost", // Class name for the drop placeholder
    chosenClass: "sortable-chosen", // Class name for the chosen item
    dragClass: "sortable-drag", // Class name for the dragging item
    animation: 150,
    swapThreshold: 0.04, // 交叉区域阀值
    invertSwap: true, // 本意是交换阀值区域。这里设置为碰到内部边沿
  }


}