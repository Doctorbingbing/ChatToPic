import React from 'react';
import {SketchField, Tools} from 'react-sketch';
 
export default class SketchFieldDemo extends React.Component {
    render() {
        return (
            <SketchField name="sketch" width={this.props.width} height={this.props.height} tool={this.props.tool} lineColor={this.props.lineColor} lineWidth={this.props.lineWidth}
            fillColor={this.props.fillColor} backgroundColor={this.props.backgroundColor} undoSteps={this.props.undoSteps} value={this.props.value}
            onChange={() => {}} ref={c => {this.sketch = c;}}/>
        )
    }

    save() {
        this.props.save(this.sketch.toJSON())
    }
    addText(text) {
        this.sketch.addText(text);

    }
}