import React, {Component} from 'react';
import Order from '../../components/Order/order';
import { connect} from 'react-redux';
//import axios from '../../axios';


class Orders extends Component{
    state ={
        orders:null
    }
    componentDidMount(){
        this.props.fetchOrder();
    }
    render(){

        let orders = null;
        if(this.props.orders){
        orders =this.props.orders.map(order=>{
            return <Order key={order.id} ingredients={order.ingredients} totalprice={+order.totalPrice} />
        })
    }
        return(
            <div>
                <h3>Order List</h3>
                {orders}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        orders:state.order.orders
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchOrder: ()=>dispatch({type: 'ORDER_FETCH_REQUESTED'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders);
