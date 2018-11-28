import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './css/index.css'
import store from './store/store'
import {Provider} from 'react-redux';

console.log(store.getState())


ReactDOM.render(<Provider store = {store}><App/></Provider>,document.getElementById('root'))

