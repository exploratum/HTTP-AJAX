import React from 'react'
import Friend from './Friend';
import PropTypes from 'prop-types';

const FriendList = (props) => {

    return (
        props.friends.map(friend => <Friend friend={friend} key={friend.id} />)
    )

}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    }))
}


export default FriendList;