import React, { Component } from 'react';
import PhoneFile from './components/PhoneFile';
import PhoneInfoList from './components/PhoneInfoList';
import LifeCycle from './components/playground/LifeCycle';

class App extends Component {
  
  
  // we need to get this out of state
  // because it is not related to the rendering.
  
  id = 3;

  state = {
    
      information: [
        
        { 
          id: 0,
          name: 'Joon',
          number: '010-885-8888'         
        },
        { 
            id: 1,
            name: 'James',
            number: '010-885-7799'         
        },
        {
            id: 2, 
            name: 'David',
            number: '010-889-0088'         
        }

      ],

      keyword: ''
  
  };
  
  // Add Info
  handleControl = (data) => {

    const { information } = this.state;

    this.setState({

        information: information.concat(
         
          // spread!!!!!!!!!! important 
          {  
            
            ...data, 
            id: this.id++

          })
    });
  
  };

  // Remove Info
  handleRemove = (id) => {

    const { information } = this.state;

    this.setState({

      information: information.filter(info => (info.id !== id))

    });

  }

  // Update Info
  handleUpdate = (id, data) => {

    const { information } = this.state;

    this.setState({

      information: information.map(

        info => {

          if(info.id === id) {

            return {

              id,
              ...data

            };

          }

          return info;

        }

      )

    });

  }

  handleChange = (e) => {

    this.setState({

        keyword: e.target.value

    });

  }
  
  render() {

    //console.log('information: ', this.state.information);
    
    return (

      <div>

        <PhoneFile data = { this.handleControl } />
        
        <input 
          
          onChange = { this.handleChange }
          value = { this.state.keyword }
          placeholder = 'searching...'

        />
          
        <PhoneInfoList 

          info = {

            this.state.information.filter(

              // it returns info groups indexOf >= 0!!!!!!!
              info => info.name.indexOf(this.state.keyword) > -1

            )
          
          }
          onRemove = { this.handleRemove }
          onUpdate = { this.handleUpdate }        
        
        />

        <LifeCycle />

      </div>
    
    );
  
  }

}

export default App;