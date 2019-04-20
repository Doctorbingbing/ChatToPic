import { CANVAS_CHANGE, SET_SKETCH } from './actionTypes';

export function canvasChange(event){
    console.log('TCL: canvasChange -> event', event);
    return {type: CANVAS_CHANGE, payload: event}
    
};
export function setSketch(sketch){
    console.log('TCL: setSketch -> sketch', sketch);
    return {type: SET_SKETCH, payload: sketch}
};