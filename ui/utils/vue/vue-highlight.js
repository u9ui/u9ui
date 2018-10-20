/** directive highlight.js */
import Vue from "vue"
import highlight from "highlight.js"
let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive("highlight", function (el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      highlight.highlightBlock(block)
    })
  })
}
export default Highlight