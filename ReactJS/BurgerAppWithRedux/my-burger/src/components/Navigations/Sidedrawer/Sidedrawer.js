import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './Sidedrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sidedrawer = (props) => {
    let attachedClasses = [Classes.Sidedrawer, Classes.Close];
    if(props.show)
    {
        attachedClasses = [Classes.Sidedrawer, Classes.Open];
    }
    // console.log(attachedClasses, props.show);
    return(
        <Aux>
            <Backdrop clicked={props.closedSidedrawer} show={props.show} />
            <div className={attachedClasses.join(' ')}>
                <div className={Classes.Logo}>
                    <Logo />
                </div>    
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}
export default sidedrawer;