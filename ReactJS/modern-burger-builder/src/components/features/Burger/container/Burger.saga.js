import { takeLatest, put } from "redux-saga/effects";
import axios from "../../../../service/axios_order";
import { BurgerConstants } from "../../../common/constants";
import { setBurgerIngredients } from "../../Burger/container/Burger.actions";

export function* getIngredients() {
  try {
    const response = yield axios.get("/ingredients.json");
    yield put(setBurgerIngredients(response.data));
  } catch (ex) {
    console.log("Error", ex);
  }
}

export function* BurgerIngredients() {
  yield takeLatest(BurgerConstants.GetBurgerIngredients, getIngredients);
}

export default BurgerIngredients;
