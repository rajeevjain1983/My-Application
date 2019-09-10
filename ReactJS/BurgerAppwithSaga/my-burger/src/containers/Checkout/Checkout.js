import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component{
    
    canceledHandler =()=>{
        this.props.history.goBack();
    }
    continuedHandler = ()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){

        return(
            <div>
                <CheckoutSummery canceledHandler={this.canceledHandler} continuedHandler={this.continuedHandler}  ingredients={this.props.ingr} />
                <Route path={this.props.match.path+'/contact-data'} 
                    render={()=> (<ContactData history={this.props.history} />)}
                 />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ingr: state.burgerBuilder.ingredients
    }
}
export default connect(mapStateToProps)(Checkout);