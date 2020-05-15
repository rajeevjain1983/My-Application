import { CustomerConstants } from "../../../common/constants";

export const fetchCustomerDetails = () => {
  return {
    type: CustomerConstants.FetchCustomerDetails,
  };
};

export const setCustomerDetails = (payload) => {
  return {
    type: CustomerConstants.SetCustomerDetails,
    payload,
  };
};

export const saveCustomerDetails = (payload) => {
  return {
    type: CustomerConstants.SaveCustomerDetails,
    payload,
  };
};
