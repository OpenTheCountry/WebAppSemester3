import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
state = {
  todos: [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 12,
      title: 'Dinner with wife',
      completed: false
    },
    {
      id: 1,
      title: 'Meeting with boss',
      completed: false
    }
  ]
}
  render(){
  return (
    <div className="App">
      <Todos />
    </div>
  );
  }
}

export default App;