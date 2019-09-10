import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const loading = (purchaseStart)=>{
    return {
        type:actionTypes.Loading,
        loading:purchaseStart

    }
}
export const purchaseOrder = (orderData)=>{
    return {
        type:actionTypes.PURCHASE_ORDER,
        orderData:orderData
    }
}

export const saveOrder = (orderData)=>{
    return dispatch =>{
        dispatch(loading(true));
        axios.post('/orders',orderData).then(response => {
            let newOrder={
                id:response.data,
                orderData
            }
            dispatch(purchaseOrder(newOrder));
          })
          .catch(err=>{
            dispatch(loading(false));
          })
    }
}

