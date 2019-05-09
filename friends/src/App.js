import React from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import NewFriend from './components/NewFriend';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      index: 7,
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))

  }

  postNewFriend = friend => {
    console.log(friend);
    axios
      .post('http://localhost:5000/friends', {id: this.state.id, ...friend})
      .then(res => this.setState({index: this.state.index + 1}))
      .catch(err => console.log(err));

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
          <div className="new-friend">
            <h2>New Friend</h2>
            <NewFriend postNewFriend={this.postNewFriend} 
            />
          </div>
        </div>
      );
    }
  }
    
  
}

export default App;
