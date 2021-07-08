const router = require('express').Router();
const { auth } = require('../middlewares/auth');
const { validateUserId, validateUserInfo } = require('../middlewares/celebrate');

const {
  createUser, getUser, getUserId, patchUser, patchAvatar,
} = require('../controllers/users');

router.post('/users', createUser);
router.get('/users', auth, getUser);
router.get('/users/:userId', validateUserId, getUserId);
router.patch('/users/me', validateUserInfo, patchUser);
router.patch('/users/me/avatar', validateUserInfo, patchAvatar);

module.exports = router;
