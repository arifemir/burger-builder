import axios from 'axios';

const instance = axios.create({
  baseURL:'https://burger-67864.firebaseio.com/'
})

export default instance;
