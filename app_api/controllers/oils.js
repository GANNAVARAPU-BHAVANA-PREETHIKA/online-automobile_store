var mongoose=require('mongoose');
var eo=mongoose.model('EngineOil')

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.oilsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.oilsReadOne =async function (req, res) {
    try{
        const location=await
        eo.findById(req.params.locationid).exec();
        sendJsonResponse(res,200,location);
        console.log(location)

    }catch (err){
        //handle the error
        sendJsonResponse(res,500, {error : 'An error occurred'});
    }
    
};
module.exports.oilsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.oilsDeleteOne = async function (req, res) {
    const locationId = req.params.locationid;
  
    try {
      // Find the location by ID and remove it
      const location = await eo.findByIdAndRemove(locationId).exec();
  
      if (!location) {
        // If the location is not found, return a 404 response
        sendJsonResponse(res, 404, { error: 'Location not found' });
        return;
      }
  
      // If the location was successfully deleted, return a success response
      sendJsonResponse(res, 200, { status: 'success' });
    } catch (err) {
      // Handle the error
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
};