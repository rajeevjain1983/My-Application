import React, {Component} from 'react';
import Order from '../../components/Order/order';
import axios from '../../axios';


class Orders extends Component{
    state ={
        orders:null
    }
    componentDidMount(){
        const fetchOrder =[];
        axios.get('/orders.json')
        .then((res)=>{
            for(let key in res.data){
                fetchOrder.push(
                    {
                        ...res.data[key],
                        id:key
                    }
                )
            }
            //console.log(fetchOrder);
            this.setState({orders:fetchOrder});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){

        let orders = null;
        //console.log(this.state.orders);
        if(this.state.orders){
        orders =this.state.orders.map(order=>{
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
export default Orders;
