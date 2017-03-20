'use strict';

const Router = require('express').Router;
const controller = require('./page.controller');
// const auth = require('../../auth/auth.service');
const router = new Router();

router.get('/',  controller.home);
router.get('/about',  controller.about);
router.get('/contact',  controller.contact);
router.post('/contact',  controller.submitContactMessage);


module.exports = router;
