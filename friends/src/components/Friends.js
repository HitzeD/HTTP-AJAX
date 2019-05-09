import React from 'react';

class Friends extends React.Component {
    constructor(props){
        super();
    }

    deleteItemPassed = e => {
        e.preventDefault();
        this.props.deleteItem(this.props.friend.id);
    };

    render(){
        return(
            <div>
                <h1>{this.props.friend.name}</h1>
                <h5>{this.props.friend.age}</h5>
                <h3>{this.props.friend.email}</h3>
                <button onClick={this.deleteItemPassed}>Delete</button>
            </div>
        )
    }
}

export default Friends;