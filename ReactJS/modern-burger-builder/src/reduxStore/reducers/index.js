import { combineReducers } from "redux";
import {
  OrderHistoryConstants,
  BurgerConstants,
} from "../../components/common/constants";
import OrderHistoryReducer from "../../components/features/OrderHistory/container/OrderHistory.reducer";
import BurgerReducer from "../../components/features/Burger/container/Burger.Reducer";

export default combineReducers({
  [OrderHistoryConstants.OrderHistoryReducerKey]: OrderHistoryReducer,
  [BurgerConstants.BurgerReducerKey]: BurgerReducer,
});
