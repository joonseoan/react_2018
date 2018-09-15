import React, { Component } from 'react';

class MyComponent extends Component {

    state = { 
        value : 0 
    };


    static getDerivedStateFromProps(nextProps, prevState) {
        
        if(prevState.value !== nextProps.value) {

            return {

                value: nextProps.value
            
            };

        }

        return null;
    
    }

    componentDidUpdate(prevProps, prevState) {
        
        if(this.props !== prevProps) {

            console.log('props is updated');
        
        }
          
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if(nextState.value === 10) return false;
        return true;

    }
    
    
    render() {
        return (
            <div>
                 { this.state.counter }
                <p>props: { this.props.value }</p>
                <p>state: { this.state.value }</p>                
            </div>
        );
    }
}

export default MyComponent;