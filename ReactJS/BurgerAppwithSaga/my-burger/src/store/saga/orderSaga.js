import { put} from 'redux-saga/effects';
import axios from '../../axios';
import * as actionTypes from '../actions/actionTypes';
import {loading,purchaseOrder} from '../actions/orderAction';

export function* fetchOrder(action) {
   try {
        const response = yield axios.get('/orders.json');
        const fetchOrder =[];
        for(let key in response.data){
                        fetchOrder.push(
                            {
                                ...response.data[key],
                                id:key
                            }
                        )
                    }
        yield put({type: actionTypes.ORDER_FETCH_SUCCEEDED, orderData: fetchOrder});
   } catch (e) {
      yield put({type: actionTypes.ORDER_FETCH_FAILED, message: e.message});
   }
}


export function* saveOrder(action){
    try{
        yield put(loading(true));
        const response = yield axios.post('/orders.json',action.orderData);
        let newOrder={
            id:response.data,
            orderData:action.orderData
        };
        yield put(purchaseOrder(newOrder))
    }catch(error){
        yield put(loading(false));
    }
}