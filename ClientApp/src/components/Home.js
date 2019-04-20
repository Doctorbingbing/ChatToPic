import React from 'react';
import { connect } from 'react-redux';
import {SketchField, Tools} from 'react-sketch';
import "./interface.css";
import TextForm from './text.js';

const HEIGHT = '600px';
const WIDTH = '800px';

const sketchBoxStyle = {
  borderStyle: 'dashed',
  width: WIDTH,
  height: HEIGHT
};

const Home = props => (
  <div style={sketchBoxStyle}>
    <SketchField 
      height={HEIGHT}
      width={WIDTH}
      tool={Tools.Pencil} 
      lineColor='black'
      lineWidth={3}/>
    <TextForm/>
  </div>
);

export default connect()(Home);
