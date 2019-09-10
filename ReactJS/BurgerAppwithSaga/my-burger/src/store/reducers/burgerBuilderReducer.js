import * as actionTypes from '../actions/actionTypes';

const INGREDIENTS_PRICE={
    salad:5,
    bacon:6,
    cheese:7,
    meat:10
};

const initialState = {
    ingredients:{
        bacon:0,
        cheese:0,
        meat:0,
        salad:0
    },
    totalPrice:0,
    error:false
}
const burgerBuilderReducer = (state=initialState, action)=>{
console.log(action);
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: 
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]:state.ingredients[action.ingredientName] + 1
            },
            totalPrice:state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
        };
        case actionTypes.REMOVE_INGREDIENT: 
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]:state.ingredients[action.ingredientName] - 1
            },
            totalPrice:state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
        };
        case actionTypes.SET_INGREDIENT: 
        return {
            ...state,
            ingredients: action.ingredients
        };
        case actionTypes.FETCH_INGREDIENT_FAILED: 
        return {
            ...state,
            error: true
        };

        default: return state;
    }
    
}
export default burgerBuilderReducer;