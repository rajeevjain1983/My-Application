import * as actionTypes from './actionTypes';

export const addIngredients = (name)=>{
    return {
            type:actionTypes.ADD_INGREDIENT,
            ingredientName:name
    }
}

export const removeIngredients = (name)=>{
    return {
            type:actionTypes.REMOVE_INGREDIENT,
            ingredientName:name
    }
}

export const setIngredients = (ingredients)=>{
    return {
            type:actionTypes.SET_INGREDIENT,
            ingredients:ingredients
    }
}

export const fetchIngredientFailed = ()=>{
    return {
            type:actionTypes.FETCH_INGREDIENT_FAILED
    }
}

export const initIngredients = ()=>{
    return{
        type:actionTypes.INIT_INGREDIENT
    }
}