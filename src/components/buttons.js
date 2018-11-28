import React from 'react';
import ReactDOM from 'react-dom';
import '../css/buttons.css'


class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='buttons' className='flex'>
            <button type='button' className='btn btn-primary btn-block'><i className="fas fa-plus"></i></button>
            <button type='button' className='btn btn-primary btn-block'><i className="fas fa-minus"></i></button>
            </div>
        );
    }
}

export default Button