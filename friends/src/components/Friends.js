import React from 'react';

class Friends extends React.Component {
    constructor(props){
        super();
        this.state = {
            friends: props.friend,
        }
    }

    deleteItemPassed = e => {
        e.preventDefault();
        this.props.deleteItem(this.state.friends.id);
    };

    render(){
        return(
            <div>
                <h1>{this.state.friends.name}</h1>
                <h5>{this.state.friends.age}</h5>
                <h3>{this.state.friends.email}</h3>
                <button onClick={this.deleteItemPassed}>Delete</button>
            </div>
        )
    }
}

export default Friends;