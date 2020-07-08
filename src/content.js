const colors = ['#ebedf0', '#e2aee1', '#de93dc', '#ce59ca', '#b319ae']
window.onload = function() {
  const graph = document.getElementsByClassName('js-calendar-graph-svg')
  if (graph.length === 0) return
  const lawn = graph[0].children[0].children
  for (let i = 0; i < lawn.length; i++) {
    if (lawn[i].getAttribute('transform')) {
      let rects = lawn[i].children
      for (let j = 0; j < rects.length; j++) {
        let fill = rects[j].getAttribute('fill')
        if (fill == '#216e39') {
          rects[j].setAttribute('fill', colors[4])
        }
        if (fill == '#30a14e') {
          rects[j].setAttribute('fill', colors[3])
        }
        if (fill == '#40c463') {
          rects[j].setAttribute('fill', colors[2])
        }
        if (fill == '#9be9a8') {
          rects[j].setAttribute('fill', colors[1])
        }
      }
    }
  }
  const legend = document.getElementsByClassName('legend')[0]
  for (let i = 0; i < legend.children.length; i++) {
    legend.children[i].style.backgroundColor = colors[i]
  }
}
