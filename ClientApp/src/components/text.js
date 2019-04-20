import React from 'react'
import { connect } from 'react-redux'





const ADD = 'ADD';

const addMessage = (text) => {
    return {
        type: ADD,
        text: text
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state,action.message];
        default:
            return state;
    }
};

export default class TextForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {input: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    }

    handleChange(event) { 
        this.setState({
            input: event.target.value
        });
    }

    submitMessage() {
        const currentMessage = this.state.input;
        //Send the message to the sketch box as an element
    };

    render() {
        return ( 
            <div>
                <input value = {this.state.input} onChange={this.handleChange}/>
                <button onClick={this.submitMessage}>Send</button>
            </div>
        )
        }
}

const mapStateToProps = (state) => {
    return {messages: state }
};

const mapDispatchToProps = (dispatch) => {
    return{
        submitNewMessage: (newMessage) => {
            dispatch(addMessage(newMessage))
        }
    }
};



    