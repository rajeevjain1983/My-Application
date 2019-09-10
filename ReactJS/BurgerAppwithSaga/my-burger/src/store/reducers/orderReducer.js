import * as actionTypes from '../actions/actionTypes';
const initialState = {
    orders:[],
    loading:false
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.PURCHASE_ORDER :
            return {
                ...state,
                orders: state.orders.concat(action.orderData),
                loading:false
            }
        case actionTypes.Loading:
            return{
                ...state,
                loading:action.loading
            }
            case actionTypes.ORDER_FETCH_SUCCEEDED:
            return{
                ...state,
                orders: state.orders.concat(action.orderData)
            }
        default : return state;

    }
}
export default reducer;