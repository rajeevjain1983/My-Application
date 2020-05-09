import axios from "axios";

const axiosOrder = axios.create({
  baseURL: "https://my-burger-22130.firebaseio.com",
});

export default axiosOrder;
