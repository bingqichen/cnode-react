import axios from 'axios';

import { requestBaseURL } from '../config';

axios.defaults.baseURL = requestBaseURL;
axios.interceptors.response.use(res => res.data);

export default axios;
