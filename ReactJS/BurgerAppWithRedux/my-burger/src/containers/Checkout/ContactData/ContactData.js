import React, { Component} from 'react'
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios';

class ContactData extends Component{
    constructor(props){
        super(props);
        this.state ={
            loading:false,
        }
    }
        

        OrderHandler =(event)=>{
            event.preventDefault();
             console.log(this.props);
               this.setState({loading:true});
                const order ={
                    ingredients: this.props.ingredients,
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
                
            //    console.log(this.state.loading);
                axios.post('/orders.json',order).then(response => {
                   this.setState({loading:false});
                    this.props.history.push('/')
                    
                  })
                  .catch(err=>{
                    this.setState({loading:false});
                  })
        }

        // componentWillUnmount() {
        //     this.signal.cancel('Api is being canceled');
        //   }

        render(){
            let form = <Spinner />
            if(!this.state.loading){
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
export default ContactData;