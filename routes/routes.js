const express = require('express');
const { LoginController, SignUpController, TaskController } = require('../controller/index');

const router = express.Router();

// 1. Sign up routers
router.post('/signup/create', SignUpController.create_signup);
router.get('/signup/get/:id', SignUpController.fetch_signup);
router.put('/signup/put/:id', SignUpController.update_signup);
router.delete('/signup/delete/:id', SignUpController.delete_signup);

// 2. Log in routers
router.post('/login/create', LoginController.create_login);
router.get('/login/get/:id', LoginController.fetch_login);
router.put('/login/put/:id', LoginController.update_login);
router.delete('/login/delete/:id', LoginController.delete_login);

// 3. Task routers
router.post('/task/create', TaskController.create_task);
router.get('/task/get', TaskController.fetch_task);
router.put('/task/put/:id', TaskController.update_task);
router.delete('/task/delete/:id', TaskController.delete_task);

module.exports = router;
