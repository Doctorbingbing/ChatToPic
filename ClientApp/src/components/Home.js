import React from 'react';
import { connect } from 'react-redux';
import SketchCanvas from './SketchCanvas';
import {SketchField, Tools} from 'react-sketch';
import "./interface.css";

const sketchBoxStyle = {
  borderStyle: 'dashed'
};
const Home = props => (
  <div style={sketchBoxStyle}>
    {<SketchCanvas height={1000} />}
  </div>
);

export default connect()(Home);
