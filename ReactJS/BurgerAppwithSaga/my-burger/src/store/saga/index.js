import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {initIngredientsSaga} from './burgerBuilderSaga';
import {fetchOrder, saveOrder} from './orderSaga';

export  function* watchBurgerBuilder(){
    yield takeEvery(actionTypes.INIT_INGREDIENT,initIngredientsSaga);
}

export function* watchOrder() {
  yield takeEvery("ORDER_FETCH_REQUESTED", fetchOrder);
  yield takeEvery(actionTypes.SAVE_ORDER, saveOrder);
}