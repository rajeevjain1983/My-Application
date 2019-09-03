import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem';
import Classes from './NavigationItems.css';

const navigationItems = ()=>{
    return (
        <ul className={Classes.NavigationItems}>
            <NavigationItem active={true} link='/'>BurgerBuilder</NavigationItem>
            <NavigationItem link='/checkout'>Checkout</NavigationItem>
        </ul>
    )
}
export default navigationItems;