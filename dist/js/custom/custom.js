(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var use_classlist = false;
var skywalker;

if (Modernizr.touchevents) {
  console.log('The test touchevents passed!', Modernizr.touchevents);
} else {
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

function start() {
  skywalker = amtCanvas.createCanvas('something');
  window.addEventListener('load', amtCanvas.init);
}

ready(start);

window.draw = function () {
  // console.log(lastMouseY);
  skywalker.fillStyle = rgba(255, 0, 0, 0.1);
  skywalker.fillEllipse(mouseX, mouseY, 20, 20);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvY3VzdG9tL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksYUFBYSxHQUFHLEtBQXBCO0FBQ0EsSUFBSSxTQUFKOztBQUVBLElBQUksU0FBUyxDQUFDLFdBQWQsRUFBMkI7QUFDdkIsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLDhCQUFaLEVBQTRDLFNBQVMsQ0FBQyxXQUF0RDtBQUNILENBRkQsTUFFSztBQUNELEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQyxTQUFTLENBQUMsV0FBckQ7QUFDSDs7QUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFkLEVBQXlCO0FBQ3JCLEVBQUEsYUFBYSxHQUFHLElBQWhCO0FBQ0g7O0FBRUQsU0FBUyxLQUFULENBQWUsRUFBZixFQUFtQjtBQUNmLE1BQUksUUFBUSxDQUFDLFdBQVQsR0FBdUIsUUFBUSxDQUFDLFVBQVQsS0FBd0IsVUFBL0MsR0FBNEQsUUFBUSxDQUFDLFVBQVQsS0FBd0IsU0FBeEYsRUFBbUc7QUFDL0YsSUFBQSxFQUFFO0FBQ0wsR0FGRCxNQUVPO0FBQ0gsSUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLEVBQTlDO0FBQ0g7QUFDSjs7QUFFRCxTQUFTLEtBQVQsR0FBZ0I7QUFDWixFQUFBLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBVixDQUF1QixXQUF2QixDQUFaO0FBQ0EsRUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsU0FBUyxDQUFDLElBQTFDO0FBRUg7O0FBQ0QsS0FBSyxDQUFDLEtBQUQsQ0FBTDs7QUFHQSxNQUFNLENBQUMsSUFBUCxHQUFjLFlBQVU7QUFDcEI7QUFDQSxFQUFBLFNBQVMsQ0FBQyxTQUFWLEdBQXNCLElBQUksQ0FBQyxHQUFELEVBQU0sQ0FBTixFQUFTLENBQVQsRUFBWSxHQUFaLENBQTFCO0FBQ0EsRUFBQSxTQUFTLENBQUMsV0FBVixDQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxFQUF0QyxFQUEwQyxFQUExQztBQUNILENBSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1c2VfY2xhc3NsaXN0ID0gZmFsc2U7XG52YXIgc2t5d2Fsa2VyO1xuXG5pZiAoTW9kZXJuaXpyLnRvdWNoZXZlbnRzKSB7IFxuICAgIGNvbnNvbGUubG9nKCdUaGUgdGVzdCB0b3VjaGV2ZW50cyBwYXNzZWQhJywgTW9kZXJuaXpyLnRvdWNoZXZlbnRzKTtcbn1lbHNle1xuICAgIGNvbnNvbGUubG9nKCdUaGUgdGVzdCB0b3VjaGV2ZW50cyBmYWlsZCEnLCBNb2Rlcm5penIudG91Y2hldmVudHMpO1xufVxuaWYgKE1vZGVybml6ci5jbGFzc2xpc3QpIHtcbiAgICB1c2VfY2xhc3NsaXN0ID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIikge1xuICAgICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdGFydCgpe1xuICAgIHNreXdhbGtlciA9IGFtdENhbnZhcy5jcmVhdGVDYW52YXMoJ3NvbWV0aGluZycpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYW10Q2FudmFzLmluaXQpO1xuICAgIFxufVxucmVhZHkoc3RhcnQpO1xuXG5cbndpbmRvdy5kcmF3ID0gZnVuY3Rpb24oKXtcbiAgICAvLyBjb25zb2xlLmxvZyhsYXN0TW91c2VZKTtcbiAgICBza3l3YWxrZXIuZmlsbFN0eWxlID0gcmdiYSgyNTUsIDAsIDAsIDAuMSk7XG4gICAgc2t5d2Fsa2VyLmZpbGxFbGxpcHNlKG1vdXNlWCwgbW91c2VZLCAyMCwgMjApO1xufVxuXG5cbiJdfQ==
