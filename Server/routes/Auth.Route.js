const { Signup, Login } = require('../controllers/AuthController')
const { userVerification } = require('../utils/AuthUser');
const router = require('express').Router();

router.post('/', userVerification);
router.post("/signup", Signup);
router.post("/login", Login)

module.exports = router;