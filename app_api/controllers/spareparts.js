var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.sparepartsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.sparepartsReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.sparepartsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
 module.exports.sparepartsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};