(function () {
  "use strict";

  var resizeCanvas = function resizeCanvas(canvas) {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
  }

  module.exports = {
    resizeCanvas: resizeCanvas
  };

}());
