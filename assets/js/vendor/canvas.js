'use strict';

// allows me global access to canvas and it’s width and height properties
var w, width, h, height;
var canvas;

// this enables me to have many canvases all positioned on top of eachother at 100% width and height of page


function resize(){
	var c = document.getElementsByTagName('canvas');
	width = w = window.innerWidth;
	height = h = window.innerHeight;
	for(var i = 0; i < c.length; i++) {
		c[i].width = width;
		c[i].height = height;

	}
};

var mouseSpeedX = 0,
    mouseSpeedY = 0,
    mouseX = 0,
    mouseY = 0,
    lastMouseX = 0,
    lastMouseY = 0,
    oldMouseX = 0,
    oldMouseY = 0,
    frameRate = 60,
    frameNumber = 0,
    frameCount = 0,
    lastUpdate = Date.now(),
    mouseMoved = false,
    mouseReleased = 0,
    mouseDown = false;


const amtCanvas = {
    createCanvas: function(canvas_name){
        canvas = document.createElement('canvas');
        var body = document.querySelector('body');
        canvas.setAttribute("id", canvas_name);
        canvas.style.position = "absolute";
        canvas.style.left = "0px";
        canvas.style.top = "0px";
        body.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        resize();
        window.addEventListener("resize", resize, false);
        return ctx;
    },

    init: function(){
        window.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            mouseMoved = true;
        });
          
        window.addEventListener('mousedown', function(e){mouseDown =true; if(typeof onMouseDown == 'function') onMouseDown() ;});
        window.addEventListener('mouseup', function(e){mouseDown = false;if(typeof onMouseUp == 'function') onMouseUp()  ;});
        window.addEventListener('keydown', function(e){if(typeof onKeyDown == 'function') onKeyDown(e);});
        window.addEventListener('keyup', function(e){if(typeof onKeyUp == 'function') onKeyUp(e);});
        if(typeof window.setup == 'function') window.setup();
        amtCanvas.standardLoop();
    },

    standardLoop: function(){
        var now = Date.now();
        var elapsedMils = now - lastUpdate;
       
        if((typeof window.draw == 'function') && (elapsedMils>=(1000/window.frameRate))) {
            window.draw();
            frameCount++;
            frameNumber++;
            lastUpdate = now - elapsedMils % (1000/window.frameRate );
            mouseSpeedX = mouseX - oldMouseX;
            mouseSpeedY = mouseX - oldMouseX;
            lastMouseX = oldMouseX = mouseX;
            lastMouseY = oldMouseY = mouseY;
            mouseReleased = 0;
            mouseMoved = 0;
        }
        requestAnimationFrame(amtCanvas.standardLoop);
    }

};

// requestAnimationFrame
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
})();