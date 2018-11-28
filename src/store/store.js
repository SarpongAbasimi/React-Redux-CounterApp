import {createStore} from 'redux';

const increment = 'Increment';
const decrement = 'Decrement';

const initialState = {
    count:0
}
const reducer = (state=initialState,action)=> {
        switch (action.type){
            case increment:
                return {count : state.count +1 }
            break
            case decrement:
                return {count : state.count -1}
            break
            default:
                return state
        }
}

const actionCreator = ()=> {
    return {
        type:increment
    }
}

const store = createStore(reducer);


export default store