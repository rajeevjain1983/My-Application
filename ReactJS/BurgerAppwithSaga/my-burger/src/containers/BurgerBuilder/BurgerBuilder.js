import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHander';
import {connect} from 'react-redux';
import {addIngredients,removeIngredients, initIngredients} from '../../store/actions/index';


class BurgerBuilder extends Component{

    
    state={
        purchasing:false,
        loading:false,
    }

    orderNowhandler =()=>{
        this.setState({purchasing:true});
    }
    updatePurchable=(ingredients)=>{
        const sum= Object.keys(ingredients).map(igkey=>{
            return ingredients[igkey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0)
        
        return sum>0;
    }
    // addIngredientsHandler=(type)=>{
    //     const oldCount= this.props.ings[type];
    //     const updatedCount= oldCount+1;
    //     const updatedIngredients={...this.state.ingredients};
    //     updatedIngredients[type]=updatedCount;
    //     const oldPrice=this.state.totalPrice;
    //     const updatedPrice=oldPrice+INGREDIENTS_PRICE[type];
    //     this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients})
    //     this.updatePurchable(updatedIngredients);
    // }

    // removeIngredientsHandler=(type)=>{
    //     const oldCount= this.state.ingredients[type];

    //     if(oldCount<=0)
    //         return;
    //     const updatedCount= oldCount-1;
    //     const updatedIngredients={...this.state.ingredients};
    //     updatedIngredients[type]=updatedCount;
    //     const oldPrice=this.state.totalPrice;
    //     const updatedPrice=oldPrice-INGREDIENTS_PRICE[type];
    //     this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients})
    //     this.updatePurchable(updatedIngredients);
    // }
    ModalClosedHandler = ()=>{
        this.setState({purchasing:false});
    }
    ContinueOrderHandler=()=>{
        const quryParams =[];
        for(let i in this.props.ings){
            quryParams.push(encodeURIComponent(i) + '='+ encodeURIComponent(this.props.ings[i]));
        }
        quryParams.push('price='+this.state.totalPrice);
        const queryString = quryParams.join('&');
        // console.log(queryString);
       this.props.history.push({
           pathname:'/checkout',
           search: '?'+queryString
        });
        
    }
    componentDidMount(){ 
        this.props.loadIngredients();
    }
    render(){
        const disabledInfo={...this.props.ings};
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }

        let burger=<Spinner />
        let orderSummery=null;
        //console.log('ingr',this.props.ings)
        if(this.props.ings){
            burger=(
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls orderedNow={this.orderNowhandler} purchasable={this.updatePurchable(this.props.ings)} price={this.props.price} disabledInfo={disabledInfo}  addedIngredients={this.props.onIngredientAdded} removeIngredients={this.props.onIngredientRemoved} />
                </Aux>
            )
            orderSummery= <OrderSummery totalPrice={this.props.price} cancelHander={this.ModalClosedHandler} continueHander={this.ContinueOrderHandler} ingredients={this.props.ings}></OrderSummery>
        }
        if(this.props.error){
            burger=<p>ingredients are not loaded...</p>
        }
        if(this.state.loading){
            orderSummery =<Spinner />
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.ModalClosedHandler}>
                    {orderSummery}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ings :state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        onIngredientAdded:(ingrName)=>dispatch(addIngredients(ingrName)),
        onIngredientRemoved:(ingrName)=>dispatch(removeIngredients(ingrName)),
        loadIngredients:()=>dispatch(initIngredients())
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios));