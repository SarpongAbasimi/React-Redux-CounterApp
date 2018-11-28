import React from 'react';
import  Button from './components/buttons';
import Counter from './components/showCount';

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='appContainer flex'>
            <Counter/>
            <Button/>
            </div>
        );
    }

}

export default App 