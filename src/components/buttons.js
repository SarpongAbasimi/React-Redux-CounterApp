import React from 'react';
import ReactDOM from 'react-dom';
import '../css/buttons.css'
import { connect } from 'react-redux';
import incrementAction  from '../actions/incrementAction'
import '../css/counter.css'
import PropTypes from 'prop-types';


class Button extends React.Component{
    constructor(props){
        super(props)
    }
      handleIncrement = ()=>{
        this.props.dispatch({type:'Increment'})
    }

    handleDecrement = ()=>{
        this.props.dispatch({type:'Decrement'})
    }

    render(){
        return(
        <div id='buttons' className='flex'>

            <button onClick={this.handleIncrement} type='button' className='btn btn-primary btn-block'><i className="fas fa-plus"></i></button>
            <button onClick={this.handleDecrement} type='button' className='btn btn-primary btn-block'><i className="fas fa-minus"></i></button>
            </div>
        );
    }
}

Button.PropTypes ={
    onClick:PropTypes.func.isRequired
}

export default connect()(Button)