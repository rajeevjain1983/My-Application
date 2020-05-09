import { OrderHistoryConstants } from "../../../common/constants";
import { takeLatest, put } from "redux-saga/effects";
import axios from "../../../../service/axios_order";
import { setOrderHistory } from "../container/OrderHistory.actions";

export function* getOrderHistory({ payload }) {
  console.log("getOrderHistory saga 2");
  try {
    const response = yield axios.get("/orders.json");
    yield put(setOrderHistory(response.data));
  } catch (ex) {
    console.log("Error:", ex);
  }
}

export function* OrderHistory() {
  console.log("getOrderHistory saga");
  yield takeLatest(OrderHistoryConstants.GetOrderHistory, getOrderHistory);
}

export default OrderHistory;
