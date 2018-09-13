import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {

        editing: false,
        name: '',
        number: ''

    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if(this.state !== nextState) return true;
        return this.props.customerInfo !== nextProps.customerInfo;

    }
    
    handleRemove = () => {

        const { customerInfo, onRemove } = this.props;
        onRemove(customerInfo.id);

    }
    
    handleToggleEdit = () =>{
        
        const { customerInfo, onUpdate } = this.props;

        if(this.state.editing){

            onUpdate(customerInfo.id, 
                
                {
                    name : this.state.name,
                    number : this.state.number
                }
            
            );
        
        } else {

            this.setState({

                name: customerInfo.name,
                number: customerInfo.number

            });
        }

        this.setState({

            // editing: this.state.editing === false ? true : false 
            editing: !this.state.editing

        });
    }

    handleInput = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        });

    }

    render() {
    
        const { name, number } = this.props.customerInfo;
        const { editing } = this.state;

        const style = {

            border: '1px solid black',
            padding: '8px',
            margin: '8px'

        }

        return (
        
            <div style = { style }>
            
                {/*<div> { name } </div>
                <div> { number } </div>
                */}
            
                {

                    editing ?
                    <Fragment>

                        <div>
                            <input 
                                name='name'
                                onChange = { this.handleInput }
                                value = { this.state.name }
                            />
                        </div>
                        <div>
                            <input 
                                name='number'
                                onChange = { this.handleInput }
                                value = { this.state.number }
                            />
                        </div>
                    
                    </Fragment>  
                    :
                    <Fragment>

                        <div> { name } </div>
                        <div> { number } </div>
                
                    </Fragment> 

                }
                
                <button onClick={ this.handleToggleEdit }>
                
                    {
                        editing ? 'Enter' : 'Edit'
                    }
                
                </button>
                <button onClick = { this.handleRemove }>Delete</button>
            
            </div>
        
        );

    }

}

export default PhoneInfo;