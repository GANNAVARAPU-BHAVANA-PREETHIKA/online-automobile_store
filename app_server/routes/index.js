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
router.get('/register',ctrlOthers.register);
router.get('/signin',ctrlOthers.signin);
router.get('/about',ctrlOthers.about);

module.exports = router;