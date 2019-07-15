'use strict';

var p = CanvasRenderingContext2D.prototype;

p.fillEllipse = function(x, y, width, height) {
    if (height == undefined) height = width;
    this.ellipse(x,y,width, height, Math.PI / 4, 0, 2 * Math.PI);
    this.fill();
    this.beginPath();
};