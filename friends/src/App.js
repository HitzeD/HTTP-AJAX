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
      search: {
        name: '',
        age: '',
        email: '',
      }
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(res => { this.setState({ friends: res.data}) })
      .catch(err => { console.log(err) })
  }

  submitInfo = (e) => {
    this.setState({
      search: {
        ...this.state.friends,
        [e.target.name]: e.target.value,
      }
    })
  }


  render(){
    return (
      <div className="App">
        <Scroll>
          {this.state.friends.map(friend => {
            return <Friends friend={friend} key={friend.id} />
          })}
        </Scroll>
        <Form search={this.state.search} onSearch={this.submitInfo} />
      </div>
    );
  }
}

export default App;
