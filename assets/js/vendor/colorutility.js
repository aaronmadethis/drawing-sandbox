'use strict';

function clamp(value, min, max){
    return Math.min(Math.max(value, Math.min(min, max)),Math.max(min, max));
}

function rgba(r, g, b, a) {
    if (g == undefined) {
        return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(r),0,255)+', '+clamp(Math.round(r),0,255)+')';
    } else if (b == undefined) {
        return 'rgba('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(r),0,255)+', '+clamp(Math.round(r),0,255)+', '+clamp(g,0,1)+')';
    } else if (a == undefined){
        return 'rgba('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+', 1)';
    } else {
        return 'rgba('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+', '+clamp(a,0,1)+')';
    }
};