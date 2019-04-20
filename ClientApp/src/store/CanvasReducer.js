import { CANVAS_CHANGE, SET_SKETCH } from './actionTypes';

const INITIAL_STATE = {picture: {
    version: "2.4.3",
    objects: []
  }};

export const reducer = (state, action) => {
    state = state || INITIAL_STATE;
  
    if (action.type === CANVAS_CHANGE) {
        
        console.log('TCL: reducer -> action.payload', action.payload);
      if (action.payload.objects.toString() === state.picture.objects.toString()) {
          return state;
      }
      return { ...state, picture: { objects: [...action.payload.objects] } };
    }
  
    if (action.type === SET_SKETCH) {
      return { ...state, sketch: {...action.payload} };
    }
  
    return state;
  };