import React from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))
  }

  render() {

    if (this.state.friends.length === 0)
      return "List of Friends Still Loading";
    else {
      return (
        <div className="App">
          <header className="App-header">
            List of My Friends
          </header>
          <div className="friends">
            <FriendList friends={this.state.friends}/>
          </div>
        </div>
      );
    }
    }
    
  
}

export default App;
