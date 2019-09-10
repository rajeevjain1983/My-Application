import * as actionTypes from './actionTypes';


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
    return {
        type:actionTypes.SAVE_ORDER,
        orderData:orderData
    }
}

