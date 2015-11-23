(function () {
  "use strict";

  var object_moving = function object_moving(canvas, element_id) {
    canvas.on('object:moving', function(e) {
      var activeObject = e.target;
      var line = document.createElement('div');
      line.innerHTML = Math.round( activeObject.get('left') ) + ' : ' + Math.round( activeObject.get('top') );
      document.getElementById('draggable').appendChild(line);
      console.log(activeObject.get('left'), activeObject.get('top'));
    });
  }

  module.exports = {
    object_moving: object_moving
  };

}());
