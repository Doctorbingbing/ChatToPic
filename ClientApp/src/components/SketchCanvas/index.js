import SketchCanvas from './SketchCanvas';
import { connect } from 'react-redux';
import { canvasChange, setSketch } from '../../store/actionCreators';

const mapStateToProps = (state) => {
    
    return {thing: {
        "version": "2.4.3",
        "objects": [
          {
            "type": "path",
            "version": "2.4.3",
            "originX": "left",
            "originY": "top",
            "left": 43.49000000000001,
            "top": 180.99,
            "width": 262.02,
            "height": 8.01,
            "fill": null,
            "stroke": "black",
            "strokeWidth": 10,
            "strokeDashArray": null,
            "strokeLineCap": "round",
            "strokeLineJoin": "round",
            "strokeMiterLimit": 10,
            "scaleX": 1,
            "scaleY": 1,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "clipTo": null,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "fill",
            "globalCompositeOperation": "source-over",
            "transformMatrix": null,
            "skewX": 0,
            "skewY": 0,
            "path": [
              [
                "M",
                48.49,
                194
              ],
              [
                "Q",
                48.5,
                194,
                53,
                194
              ],
              [
                "Q",
                57.5,
                194,
                70,
                192.5
              ],
              [
                "Q",
                82.5,
                191,
                108.5,
                189.5
              ],
              [
                "Q",
                134.5,
                188,
                183,
                187.5
              ],
              [
                "Q",
                231.5,
                187,
                271,
                186.5
              ],
              [
                "L",
                310.51,
                185.99
              ]
            ]
          }
        ],
        "background": "transparent"
      }};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event) => dispatch(canvasChange(event)),
        setSketch: (sketch) => dispatch(setSketch(sketch))
    }
};


export default connect( mapStateToProps, mapDispatchToProps )(SketchCanvas);