import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHander';

const INGREDIENTS_PRICE={
    salad:5,
    bacon:6,
    cheese:7,
    meat:10
};
class BurgerBuilder extends Component{

    
    state={
        ingredients:null,
        totalPrice:10,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false
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
        
        this.setState({purchasable:sum>0})
    }
    addIngredientsHandler=(type)=>{
        const oldCount= this.state.ingredients[type];
        const updatedCount= oldCount+1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updatedCount;
        const oldPrice=this.state.totalPrice;
        const updatedPrice=oldPrice+INGREDIENTS_PRICE[type];
        this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients})
        this.updatePurchable(updatedIngredients);
    }
    removeIngredientsHandler=(type)=>{
        const oldCount= this.state.ingredients[type];

        if(oldCount<=0)
            return;
        const updatedCount= oldCount-1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updatedCount;
        const oldPrice=this.state.totalPrice;
        const updatedPrice=oldPrice-INGREDIENTS_PRICE[type];
        this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients})
        this.updatePurchable(updatedIngredients);
    }
    ModalClosedHandler = ()=>{
        this.setState({purchasing:false});
    }
    ContinueOrderHandler=()=>{
        const quryParams =[];
        for(let i in this.state.ingredients){
            quryParams.push(encodeURIComponent(i) + '='+ encodeURIComponent(this.state.ingredients[i]));
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
        // console.log(this.props);
        axios.get('/ingredients.json')
        .then(res=>{
            console.log(res.data);
            this.setState({ingredients:res.data})
        })
        .catch(error=>{
            console.log(error);
            this.setState({error:true});
        })
    }
    render(){
        const disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }

        let burger=<Spinner />
        let orderSummery=null;
        if(this.state.ingredients){
            burger=(
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls orderedNow={this.orderNowhandler} purchasable={this.state.purchasable} price={this.state.totalPrice} disabledInfo={disabledInfo}  addedIngredients={this.addIngredientsHandler} removeIngredients={this.removeIngredientsHandler} />
                </Aux>
            )
            orderSummery= <OrderSummery totalPrice={this.state.totalPrice} cancelHander={this.ModalClosedHandler} continueHander={this.ContinueOrderHandler} ingredients={this.state.ingredients}></OrderSummery>
        }
        if(this.state.error){
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
export default WithErrorHandler(BurgerBuilder,axios);