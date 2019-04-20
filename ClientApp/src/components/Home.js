import React from 'react';
import { connect } from 'react-redux';
import SketchCanvas from './SketchCanvas';
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
    {<SketchCanvas height={1000} value={props.value} />}
  </div>
);

export default connect()(Home);
