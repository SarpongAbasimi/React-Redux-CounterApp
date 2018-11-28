import React from 'react';
import { connect } from 'react-redux';
import '../css/counter.css'



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



export default connect(mapStateToProps)(Counter)