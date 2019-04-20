import SketchCanvas from './SketchCanvas';
import { connect } from 'react-redux';
import { canvasChange, setSketch } from '../../store/actionCreators';

const mapStateToProps = (state, ownProps) => {
	console.log('TCL: mapStateToProps -> ownProps', ownProps);
    const value = state.canvas.picture || {
        "version": "2.4.3",
        "objects": []
      };
    return {...ownProps, value};
};

const mapDispatchToProps = (dispatch) => {
    return {
        save: (event) => dispatch(canvasChange(event)),
        setSketch: (sketch) => dispatch(setSketch(sketch))
    }
};


export default connect( mapStateToProps, mapDispatchToProps )(SketchCanvas);