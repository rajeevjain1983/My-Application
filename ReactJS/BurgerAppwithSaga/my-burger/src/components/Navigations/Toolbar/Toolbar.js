import React from 'react';
import Classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar =(props)=>{
    return(
        <header className={Classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo />
            <nav className={Classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}
export default toolbar;