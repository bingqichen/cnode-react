const axios = require('axios');

axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
axios.interceptors.response.use(res => res.data);

module.exports = {
  axios
};
