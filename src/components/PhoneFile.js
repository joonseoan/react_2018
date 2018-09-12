import React, { Component } from 'react';

class PhoneFile extends Component {

    state = {

        name: '',
        number: ''
    }

    handleInput = (e) => {

        this.setState({
            
            //Property name:***
            [e.target.name]: e.target.value

        });
        
    }

    render() {
        return (
            <div>
                <form>
                    
                    <input placeholder = "name"
                        name = "name"
                        onChange = { this.handleInput }
                        value = { this.state.name }
                     />
                    
                    <input placeholder = "phone"
                        name = 'number' 
                        onChange = { this.handleInput }
                        value = { this.state.number }
                    />

                   
                </form>
                <div>

                 { this.state.name }         
                 { this.state.number }
                
                </div>
                
            </div>
        );
    }
}

export default PhoneFile;