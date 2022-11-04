const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { page: 'Home' });
});

router.get('/apply', (req, res, next) => {
  res.render('apply', { page: 'Apply' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { page: 'About' });
});

router.get('/login', (req, res, next) => {
  res.render('login', { page: 'Login' });
});

router.get('/createlogin', (req, res, next) => {
  res.render('createlogin', { page: 'Create Login' });
});

module.exports = router;