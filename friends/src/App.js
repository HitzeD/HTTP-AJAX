import React from 'react';
import './App.css';
import axios from 'axios';

import Friends from './components/Friends';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(res => { this.setState({ friends: res.data}) })
      .catch(err => { console.log(err) })
  }
  render(){
    console.log(this.state.friends)
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return <Friends friend={friend} key={friend.id} />
        })}
      </div>
    );
  }
}

export default App;
