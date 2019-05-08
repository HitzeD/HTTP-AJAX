import React from 'react';

const Friends = props => {
    console.log(props)
    return(
        <div>
            <h1>{props.friend.name}</h1>
            <h5>{props.friend.age}</h5>
            <h3>{props.friend.email}</h3>
        </div>
    )
}

export default Friends;