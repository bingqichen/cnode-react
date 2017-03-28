import moment from './moment.js';

const formatTime = (time) => {
  const momentTime = moment(time).fromNow();
  return momentTime;
};

export {
  formatTime
};
