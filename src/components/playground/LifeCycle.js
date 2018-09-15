import React, { Component } from 'react';
import MyComponent from './MyComponent';

class LifeCycle extends Component {

    state = {

        counter: 1,
        error: false
        
    };
    
    constructor(props) {

        super(props)
        console.log('constructor');

    }

    componentDidCatch(error, info) {
        
        console.log(error);
        console.log(info);

        this.setState({

            error: true

        });

    }
    

    componentDidMount() {
        console.log('componentDidMount');
    }
    
    increaseNumber = () => {

        this.setState({

            counter: this.state.counter + 1

        });
        
    }

    
    componentWillMount() {
        
        console.log('Bye!!')
    }
    
   
    render() {

        if(this.state.error) return <div>Working on Update...</div>

        return (
            <div>
               
                {this.state.counter < 10 && <MyComponent value = { this.state.counter }/>}
                <button onClick = { this.increaseNumber }>Click me</button>                
            
            </div>
        );
    }
}

export default LifeCycle;