module.exports = function (req, res, next) {
  var headers = req.headers;
  var contentLen = parseInt(headers["content-length"]);

  if(contentLen && contentLen !== null && !isNaN(contentLen) && contentLen > 0) {
    var data = "";

    req.on('data', function (chunk) {
      data += chunk;
    });

    req.on('end', function () {
      req.body = JSON.parse(data);
      next();
    });
  } else {
    next();
  }
};
