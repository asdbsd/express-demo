const router = require('express').Router();
const { indexAction, createAction, saveAction, deleteAction } = require('../controllers/catalogController');

router.get('/', indexAction);
router.get('/create', createAction);
router.post('/create', saveAction);
router.get('/delete/:id', deleteAction);


module.exports = router;