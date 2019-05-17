import React from 'react';
import './form.css';

class Form extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            search: {
                name: '',
                age: '',
                email: '',
            }
        }
        console.log(this.props)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.search);
    };

    submitInfo = (e) => {
        this.setState({
            search: {
                ...this.state.search,
                [e.target.name]: e.target.value,
            }
            
        })
    };

    render(){
    return(
        <form className="form">
            <input className="input" onChange={this.submitInfo} name="name" type="text" placeholder="Enter Name" value={this.state.search.name}/>
            <input className="input" onChange={this.submitInfo} name="age" type="number" placeholder="Enter Age" value={this.state.search.age} />
            <input className="input" onChange={this.submitInfo} name="email" type="email" placeholder="Enter Email" value={this.state.search.email} />
            <button onClick={this.handleSubmit} className="subBtn">Submit</button>
            <button className="subBtn">Update</button>
        </form>
    )}
}

export default Form;