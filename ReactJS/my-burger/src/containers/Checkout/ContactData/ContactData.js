import React, { Component} from 'react'
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css';

class ContactData extends Component{

        state ={

        }
        render(){
            return(
                <div className={Classes.ContactData}>
                    <h3>Enter your Contact Data</h3>
                    <form>
                        <input className={Classes.input} type="text" name="name" placeholder="Your Name" />
                        <input className={Classes.input} type="text" name="email" placeholder="Your Email" />
                        <input className={Classes.input} type="text" name="street" placeholder="Your Street" />
                        <input className={Classes.input} type="text" name="pincode" placeholder="Your Pincode" />
                        <Button btnType="Success">Order</Button>
                    </form>
                </div>
            )
        }
}
export default ContactData;