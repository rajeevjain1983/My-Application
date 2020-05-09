import { OrderHistoryConstants } from "../../../common/constants";

export const getOrderHistory = (payload) => {
  return {
    type: OrderHistoryConstants.GetOrderHistory,
    payload,
  };
};

export const setOrderHistory = (payload) => {
  return {
    type: OrderHistoryConstants.SetOrderHistory,
    payload,
  };
};
