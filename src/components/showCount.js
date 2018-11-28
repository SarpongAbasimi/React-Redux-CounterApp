import React from 'react';
import { connect } from 'react-redux';
import '../css/counter.css'
import PropTypes from 'prop-types';



const Counter = (props)=> {
    return(
         <div className='counter'> 
            <span id='counterSpan' className="badge badge-secondary">{props.count}</span>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}

Counter.PropTypes={
    count:PropTypes.number
}


export default connect(mapStateToProps)(Counter)