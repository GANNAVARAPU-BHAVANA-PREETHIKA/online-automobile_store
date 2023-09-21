var express = require('express');
var router = express.Router();
var ctrlautomobiles = require('../controllers/automobiles');
var ctrlOthers = require('../controllers/others');
/* LOCATIONS.js */
router.get('/', ctrlautomobiles.homelist);
router.get('/location',ctrlautomobiles.tyresinfo);
router.get('/engine',ctrlautomobiles.oilsinfo);
router.get('/spare',ctrlautomobiles.spareinfo);
router.get('/about',ctrlOthers.about);

module.exports = router;