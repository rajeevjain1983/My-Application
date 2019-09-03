import React from 'react';
import Classes from './Logo.css';
import ImagePath from '../../Assets/Images/burger-logo.png';

const logo = ()=>{

    return (
        <div className={Classes.Logo}>
        <img  src={ImagePath}  alt='Burger'></img>
        </div>
    )
}
export default logo;