import React from 'react';

const Form = props => {
    console.log(props)
    return(
        <form>
            <input onChange={props.onSearch} name="name" type="text" placeholder="Enter Name" value={props.search.name}/>
            <input onChange={props.onSearch} name="age" type="number" placeholder="Enter Age" value={props.search.age} />
            <input onChange={props.onSearch} name="email" type="email" placeholder="Enter Email" value={props.search.email} />
            <button>Submit</button>
        </form>
    )
}

export default Form;