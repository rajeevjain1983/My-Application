import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummery = (props) =>{
const ingredientsDetails = Object.keys(props.ingredients).map(igkey=>{
    return <li key={igkey}><strong style={{textTransform:'capitalize'}}>{igkey} : </strong>{props.ingredients[igkey]}</li>
})
    return(
        <Aux>
            <h3>Your Order detail!</h3>
            <p>Your delicious burger is ready with following ingredients</p>
            <ul>
                {ingredientsDetails}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>You want to continue</p>
            <Button clicked={props.cancelHander} btnType={'Danger'}>Cancel</Button>
            <Button clicked={props.continueHander} btnType={'Success'}>Continue</Button>

        </Aux>
    )
}
export default orderSummery;