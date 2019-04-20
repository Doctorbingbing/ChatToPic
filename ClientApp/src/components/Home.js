import React from 'react';
import { connect } from 'react-redux';
import {SketchField, Tools} from 'react-sketch';
import "./interface.css";

const sketchBoxStyle = {
  borderStyle: 'dashed'
};
const Home = props => (
  <div style={sketchBoxStyle}>
    <SketchField 
      height='600px'
      width='800px'
      tool={Tools.Pencil} 
      lineColor='black'
      lineWidth={3}/>
  </div>
);

export default connect()(Home);
