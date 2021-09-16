import axios from 'axios';
import { baseURL } from 'constants/endpoints';
import { request, response, errors } from './interceptor';

const instance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(request);
instance.interceptors.response.use(response, errors);

export default instance;
