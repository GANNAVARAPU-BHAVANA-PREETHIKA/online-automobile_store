var express = require('express');
var router = express.Router();
var ctrlautomobiles = require('../controllers/automobiles');
var ctrlOthers = require('../controllers/others');
/* LOCATIONS.js */

router.get('/',ctrlautomobiles.main);
router.get('/home', ctrlautomobiles.homelist);
router.get('/home/location',ctrlautomobiles.tyresinfo);
router.get('/home/engine',ctrlautomobiles.oilsinfo);
router.get('/home/spare',ctrlautomobiles.spareinfo);
router.get('/home/location/review/new',ctrlautomobiles.addReview);
router.get('/home/engine/review/new',ctrlautomobiles.addReview1);
router.get('/home/spare/review/new',ctrlautomobiles.addReview2);
router.get('/home/location/purchase/new',ctrlautomobiles.purchase);
router.get('/home/engine/purchase/new',ctrlautomobiles.purchase1);
router.get('/home/spare/purchase/new',ctrlautomobiles.purchase2);
router.get('/register',ctrlOthers.register);
router.get('/signin',ctrlOthers.signin);

router.get('/about',ctrlOthers.about);

module.exports = router;