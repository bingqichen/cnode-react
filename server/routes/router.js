const Router = require('koa-router');
const ctrl = require('../controllers');

const router = new Router();

router.get('/', ctrl.index);
router.get('/topicslist', ctrl.topicslist);
router.get('/topicdetail', ctrl.topicdetail);

module.exports = router;
