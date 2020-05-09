import { fromJS } from "immutable";
import { OrderHistoryConstants } from "../../../common/constants";

const initialState = fromJS({
  orderHistory: null,
});

const OrderHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderHistoryConstants.SetOrderHistory:
      return state.set("orderHistory", action.payload);
    default:
      if (state instanceof Object) {
        return fromJS(state);
      }
      return state;
  }
};

export default OrderHistoryReducer;
