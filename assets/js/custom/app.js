'use strict';

var use_classlist = false;
var skywalker;

if (Modernizr.touchevents) { 
    console.log('The test touchevents passed!', Modernizr.touchevents);
}else{
    console.log('The test touchevents faild!', Modernizr.touchevents);
}
if (Modernizr.classlist) {
    use_classlist = true;
}

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function start(){
    skywalker = amtCanvas.createCanvas('something');
    window.addEventListener('load', amtCanvas.init);
    
}
ready(start);


window.draw = function(){
    // console.log(lastMouseY);
    skywalker.fillStyle = rgba(255, 0, 0, 0.1);
    skywalker.fillEllipse(mouseX, mouseY, 20, 20);
}


