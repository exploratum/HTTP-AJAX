import React from 'react'
import Friend from './Friend';

const FriendList = (props) => {

    console.log(props)

        return(
            props.friends.map(friend => <Friend friend={friend} key={friend.id}/>)
        )
    
}

export default FriendList;