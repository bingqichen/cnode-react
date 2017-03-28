import axios from 'axios';

axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
axios.interceptors.response.use(res => res.data);

const tabTypes = {
  all: '全部',
  ask: '问答',
  share: '分享',
  job: '招聘',
  good: '精华'
};

export {
  axios,
  tabTypes
};
