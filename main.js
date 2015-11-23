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

  // bounding
  canvas.on('object:modified', function (e) {
    var obj = e.target;
 
    if (obj.getLeft() < 0
      || obj.getTop() < 0
      || obj.getLeft() + obj.getWidth() > canvas.getWidth()
      || obj.getTop() + obj.getHeight() > canvas.getHeight()) {
      if (obj.getAngle() != obj.originalState.angle) {
        obj.setAngle(obj.originalState.angle);
      }
      else {
        alert('out of bounds');
        obj.setTop(obj.originalState.top);
        obj.setLeft(obj.originalState.left);
        obj.setScaleX(obj.originalState.scaleX);
        obj.setScaleY(obj.originalState.scaleY);
      }
      obj.setCoords();
    }
  });


/*
  canvas.on('mouse:up', function (e) {
    mouseDownOutsideObject = false;
    getBackground().selectable = false;
  });
*/

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


  $( "#draggable" ).draggable({ scroll: true, scrollSensitivity: 100, scrollSpeed: 100 });
  $( "#draggable2" ).draggable();

  $( "#load" ).click(function() {
    canvas.loadFromJSON(localStorage.state);
    canvas.renderAll();
    alert('loaded');
  });

  $( "#save" ).click(function() {
    localStorage.state = JSON.stringify(canvas);
    alert( 'saved');
  });

  var events = require('./events');
  events.object_moving(canvas, document.getElementById('draggable'));

});



// Zoom
globscale=1;

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
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"
if (document.attachEvent) document.attachEvent("on"+mousewheelevt, displaywheel) 
else if (document.addEventListener) document.addEventListener(mousewheelevt, displaywheel, false)


