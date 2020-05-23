import axios from "axios";

const axiosNews = axios.create({
  baseURL: "http://hn.algolia.com/api/v1",
});

export default axiosNews;
