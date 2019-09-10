import React, { Component} from 'react'
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios';
import {connect} from 'react-redux';
import {saveOrder} from '../../../store/actions/index';
import withErrorHandler from '../../../hoc/WithErrorHandler/WithErrorHander';

class ContactData extends Component{
    
        OrderHandler =(event)=>{
            event.preventDefault();

            const order ={
                ingredients: this.props.ingr,
                totalPrice: this.props.price,
                deliveryMethod:'Fastest',
                customer:{
                    name: 'Rajeev Jain',
                    Mobile:'999999999',
                    email:'test@test.com',
                    address:{
                        area:'Sector 135',
                        city:'Noida',
                        state:'UP',
                        pincode:'201304'
                    }
                }
            }
            this.props.onSaveOrder(order);
           // this.props.history.push('/')

             
        }

        

        render(){
            let form = <Spinner />
            if(!this.props.loading){
                form =(
                    <form>
                        <input className={Classes.input} type="text" name="name" placeholder="Your Name" />
                        <input className={Classes.input} type="text" name="email" placeholder="Your Email" />
                        <input className={Classes.input} type="text" name="street" placeholder="Your Street" />
                        <input className={Classes.input} type="text" name="pincode" placeholder="Your Pincode" />
                        <Button clicked={this.OrderHandler} btnType="Success">Order</Button>
                    </form>
                )
            }
            return(
                <div className={Classes.ContactData}>
                    <h3>Enter your Contact Data</h3>
                    {form}
                </div>
            )
        }
}
const mapStateToProps = state =>{
    return {
        ingr: state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        loading:state.order.loading
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onSaveOrder:(orderData)=> dispatch(saveOrder(orderData))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));