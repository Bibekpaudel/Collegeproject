const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('Home'));
router.get('/home', (req, res) => res.render('Home'));
router.get('/account', (req, res) => res.render('Account'));
router.get('/contact', (req, res) => res.render('Contact'));
router.get('/product', (req, res) => res.render('Product'));
router.get('/latest', (req, res) => res.render('Latest'));
router.get('/offer', (req, res) => res.render('Offer'));



module.exports = router;