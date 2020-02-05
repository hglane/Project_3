import React, { Component } from 'react';
import TaskBank from "./components/TaskBank";
// import TaskList from "./components/TaskList";
import './App.css';

class App extends Component {
  
  
  // state information

  constructor(props){
    super(props);
    this.state = {
      ToDoList= false
    //  add state variables
      }
  }
  
  render() {
    return (
  
      <Wrapper>
          
          <div className="container">
              {this.state.ToDoList === true ? 
                  <TaskBank
                  //  data={this.state.data} write data function
                  // remove={write remove function} 
                  />
              :
              
                <Default
                // Empty wrapper or other default
                />
              
            }
            
          </div>
        </Wrapper>
  
  );
}}


export default App;

