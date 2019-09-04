import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component{
    // state ={
    //     ingredients:{},
    //     totalPrice:0
    // }
    constructor(props){
        super(props);
        
       
        const query = new URLSearchParams(this.props.location.search);
        let ingredients ={};
        let price =0;
        for(let param of query.entries()){
            if(param[0]==='price'){
                price=param[1];
            }
            else{
            ingredients[param[0]]=+param[1];
            }
            
        }
        this.state ={
            ingredients:ingredients,
            totalPrice:price
        }
        // this.setState({ingredients:ingredients})
    }
    
    // componentWillMount(){
    //     // console.log('componentDidMount');
    //     //console.log(this.props);
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients ={};
    //     for(let param of query.entries()){
    //         if(param[0]==='price'){
    //             this.setState({totalPrice:param[1]});
    //         }
    //         else{
    //         ingredients[param[0]]=+param[1];
    //         }
            
    //     }
    //     //console.log(ingredients);
    //     this.setState({ingredients:ingredients})
    // }
    canceledHandler =()=>{
        this.props.history.goBack();
    }
    continuedHandler = ()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        // console.log(this.props.match.path);
        return(
            <div>
                <CheckoutSummery canceledHandler={this.canceledHandler} continuedHandler={this.continuedHandler}  ingredients={this.state.ingredients} />
                <Route path={this.props.match.path+'/contact-data'} 
                    render={()=> (<ContactData ingredients={this.state.ingredients} history={this.props.history} price={this.state.totalPrice} />)}
                 />
            </div>
        )
    }
}
export default Checkout;