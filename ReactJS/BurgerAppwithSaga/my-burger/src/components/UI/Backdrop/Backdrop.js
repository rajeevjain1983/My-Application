import React from 'react';
import Classes from './BackDrop.css';

const backDrop = (props) =>{
    return(
        props.show ? <div onClick={props.clicked} className={Classes.BackDrop}></div> : null
    )
}
export default backDrop;