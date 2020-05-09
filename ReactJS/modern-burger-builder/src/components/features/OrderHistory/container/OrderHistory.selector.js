import { createSelector } from "reselect";
import { OrderHistoryConstants } from "../../../common/constants";

const getState = (state) => state[OrderHistoryConstants.OrderHistoryReducerKey];

export const getOrderHistoryData = createSelector(
  getState,
  (state) => state && state.get("orderHistory")
);
