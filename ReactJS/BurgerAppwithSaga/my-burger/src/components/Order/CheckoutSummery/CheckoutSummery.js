import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Classes from './CheckoutSummery.css';

const  checkoutSummery = (props) =>{
    return (
        <div className={Classes.CheckoutSummery}>
            <h1>I am sure you would like to this delicious Burger</h1>
            <div style={{width:'100%', margin:'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger' clicked={props.canceledHandler}>Cancel!</Button>
            <Button btnType='Success' clicked={props.continuedHandler}>Continue!</Button>
           
        </div>
    )
}
export default checkoutSummery;