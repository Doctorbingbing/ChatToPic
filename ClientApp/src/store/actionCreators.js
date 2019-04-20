export function canvasChange(event){
    console.log('TCL: canvasChange -> event', event);
    return {type: 'canvasChange', payload: event}
    
};
export function setSketch(sketch){
    console.log('TCL: setSketch -> sketch', sketch);
    return {type: 'setSketch', payload: sketch}
};