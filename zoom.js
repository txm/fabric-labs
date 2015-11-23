(function () {
  "use strict";

/*
  var displaywheel = function displaywheel(canvas, element_id) {
function displaywheel(e){
  var SCALE_FACTOR = 1.1;
  var evt=window.event || e
  var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta
  var objects = canvas.getObjects();
  var dd = 1;
  if (delta == 120) dd=SCALE_FACTOR;
  if (delta == -120) dd=1/SCALE_FACTOR;
  globscale = globscale * dd;
  for (var i in objects) {
    objects[i].scaleX = globscale;
    objects[i].scaleY = globscale;
    objects[i].left = objects[i].left * dd;
    objects[i].top = objects[i].top * dd;
    objects[i].setCoords();
  }
  canvas.renderAll();
  canvas.calcOffset();
}

  module.exports = {
    displaywheel: displaywheel
  };

*/
}());
