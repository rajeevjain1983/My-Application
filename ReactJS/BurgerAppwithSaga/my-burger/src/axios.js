import axios from 'axios'

const instance = axios.create({
    baseURL:'https://my-burger-22130.firebaseio.com/'
})
export default instance;