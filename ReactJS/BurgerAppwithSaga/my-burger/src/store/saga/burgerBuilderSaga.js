
import axios from '../../axios';
import { put } from 'redux-saga/effects';
import { setIngredients, fetchIngredientFailed} from '../actions/burgerBuilderActions';

export function* initIngredientsSaga(action){
    try{
        console.log('initIngredients');
        const response = yield axios.get('/ingredients.json');
        console.log(response.data);
         yield put(setIngredients(response.data));
    }
    catch(error){
        yield put(fetchIngredientFailed());
    } 
}   
