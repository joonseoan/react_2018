import React, { Component } from 'react';

class PhoneFile extends Component {

    //1)
    // input = null;

    //2) 16.3 only
    input = React.createRef();

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

    handleSubmit = (e) => {

        e.preventDefault();
        
        // this.props.data(e.targe);
        this.props.data(this.state);

        // this.props.data(this.state.name  + '  ' + this.state.number);
        // console.log(e.target.name)
        this.setState({

            name: '',
            number: ''

        });

        // this.input.focus();

        //2) // defines focus after submitting data
        this.input.current.focus();

    }

    render() {

        return (

            <div>
            
                <form onSubmit = { this.handleSubmit }>
                    
                    <input placeholder = "name"
                        name = "name"
                        onChange = { this.handleInput }
                        value = { this.state.name }
                        // ref = { ref => this.input = ref }
                        //2)
                        ref = { this.input }
                    />
                    
                    <input placeholder = "phone"
                        name = 'number' 
                        onChange = { this.handleInput }
                        value = { this.state.number }
                    />
                    
                    <button type = 'submit'>Submit</button>
    
                </form>
                
                { //<div>

                    //  { this.state.name }          
                    //  { this.state.number }
                    
                    //</div>
                }

            </div>

        );

    }

}

export default PhoneFile;