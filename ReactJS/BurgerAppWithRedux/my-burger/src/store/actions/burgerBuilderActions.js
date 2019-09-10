import * as actionTypes from './actionTypes';
import axios from '../../axios';

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

const setIngredients = (ingredients)=>{
    return {
            type:actionTypes.SET_INGREDIENT,
            ingredients:ingredients
    }
}

const fetchIngredientFailed = ()=>{
    return {
            type:actionTypes.FETCH_INGREDIENT_FAILED
    }
}

export const initIngredients = ()=>{
    return dispatch =>{
        axios.get('/ingredients.json')
        .then(res=>{
            dispatch(setIngredients(res.data))
        })
        .catch(error=>{
            dispatch(fetchIngredientFailed())
        })
    };
}