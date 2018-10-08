import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    
    static defaultProps = {
        
        information : []

    }

    render() {

        // if(this.props) return <div>Loading...</div>;

        const { info, onRemove, onUpdate } = this.props;

        // display value from info of props from App.js 
        const list = info.map(

            info => (

                <PhoneInfo 
                
                    onRemove = { onRemove } 
                    customerInfo = { info }
                    onUpdate = { onUpdate } 
                    key = { info.id }
            
                />

            )
                
        );

        return (

            <div>

                { list }     
    
            </div>
        );
    }
}

export default PhoneInfoList;