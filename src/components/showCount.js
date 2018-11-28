import React from 'react';
import { connect } from 'react-redux';



const Counter = (props)=> {
    return(
         <div  className='counter'> 
            <span className="badge badge-secondary">{props.count}</span>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}



export default connect(mapStateToProps)(Counter)