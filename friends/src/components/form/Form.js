import React from 'react';
import './form.css';

const Form = props => {
    return(
        <form className="form">
            <input className="input" onChange={props.onSearch} name="name" type="text" placeholder="Enter Name" value={props.search.name}/>
            <input className="input" onChange={props.onSearch} name="age" type="number" placeholder="Enter Age" value={props.search.age} />
            <input className="input" onChange={props.onSearch} name="email" type="email" placeholder="Enter Email" value={props.search.email} />
            <button className="subBtn">Submit</button>
        </form>
    )
}

export default Form;