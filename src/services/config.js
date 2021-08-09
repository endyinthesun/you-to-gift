import axios from 'axios';

export default axios.create({
  baseURL: 'https://youtogift.com/api',
  responseType: 'json',
});
