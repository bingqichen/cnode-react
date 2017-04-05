import { axios } from '../utils';

export const getListData = ({ params }) => (
  axios.get('/topics', { params })
    .then(res => res.data)
);
