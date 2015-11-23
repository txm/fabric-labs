// Place script tags at the bottom of the page.
// That way progressive page rendering and
// downloads are not blocked.

// Run only when HTML is loaded and
// DOM properly initialized (courtesy jquery)

$(function () {
  "use strict";

  // Obtain a canvas drawing surface from fabric.js
  var canvas = new fabric.Canvas('c');

  // resize on init
  var layout = require('./layout');
  layout.resizeCanvas(canvas);

  // Create a text object.
  // Does not display it-the canvas doesn't
  // know about it yet.
  var hi = new fabric.Text('hello world.', {
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2
  });

  // Attach it to the canvas object, then (re)display
  // the canvas.
  canvas.add(hi);

});
