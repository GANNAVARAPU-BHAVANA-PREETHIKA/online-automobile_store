var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/tyretypes');
var ctrloils = require('../controllers/oils');
var ctrlparts = require('../controllers/spareparts');
var ctrlReviews = require('../controllers/reviews');

router.post('/tyretypes', ctrlLocations.tyretypesCreate);
router.get('/tyretypes/:locationid', ctrlLocations.tyretypesReadOne);
router.put('/tyretypess/:locationid', ctrlLocations.tyretypesUpdateOne);
router.delete('/tyretypes/:locationid', ctrlLocations.tyretypesDeleteOne);

router.post('/spareparts', ctrlparts.sparepartsCreate);
router.get('/spareparts/:locationid', ctrlparts.sparepartsReadOne);
router.put('/spareparts/:locationid', ctrlparts.sparepartsUpdateOne);
router.delete('/spareparts/:locationid', ctrlparts.sparepartsDeleteOne);

router.post('/oils', ctrloils.oilsCreate);
router.get('/oils/:locationid', ctrloils.oilsReadOne);
router.put('/oils/:locationid', ctrloils.oilsUpdateOne);
router.delete('/oils/:locationid', ctrloils.oilsDeleteOne);

router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid',ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid',ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid',ctrlReviews.reviewsDeleteOne);


module.exports = router;