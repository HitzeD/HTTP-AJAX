import React from 'react';
import './App.css';
import axios from 'axios';

import Friends from './components/Friends';
import Form from './components/form/Form';
import Scroll from './components/Scroll';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(res => { this.setState({ friends: res.data}) })
      .catch(err => { console.log(err) })
  }

  addItem = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  updateFriend = item => {
    axios.put('http://localhost:5000/friends', item)
      .then(res => console.log('1'))
  }

  deleteItem = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };


  render(){
    return (
      <div className="App">
        <Scroll>
          {this.state.friends.map(friend => {
            return <Friends deleteItem={this.deleteItem} friend={friend} key={friend.id} />
          })}
        </Scroll>
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
