import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component{

    state ={
        ingredients:{}
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients ={};
        for(let param of query.entries()){
            ingredients[param[0]]=+param[1];
        }
        // console.log(ingredients);
        this.setState({ingredients:ingredients})
    }
    canceledHandler =()=>{
        this.props.history.goBack();
    }
    continuedHandler = ()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        console.log(this.props.match.path);
        return(
            <div>
                <CheckoutSummery canceledHandler={this.canceledHandler} continuedHandler={this.continuedHandler}  ingredients={this.state.ingredients} />
                <Route path={this.props.match.path+'/contact-data'}  component={ContactData} />
            </div>
        )
    }
}
export default Checkout;