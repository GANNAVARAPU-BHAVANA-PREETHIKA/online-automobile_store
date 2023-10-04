var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.oilsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.oilsReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.oilsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
 module.exports.oilsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};