import { axios } from '../utils';

export const getDetailData = ({ id }) => (
  axios.get(`/topic/${id}`)
    .then(res => res.data)
);
