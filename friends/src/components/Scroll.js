import React from 'react';


const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', margin: '5px', border: '3px solid black', width: '49.5%', height: '100vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;