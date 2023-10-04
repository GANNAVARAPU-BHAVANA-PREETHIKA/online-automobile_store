var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.tyretypesCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.tyretypesReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.tyretypesUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
 module.exports.tyretypesDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};