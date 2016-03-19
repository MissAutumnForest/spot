// Path of our web root
var www = global.base + "/.tmp/";

// Checks if path is that of an endpoint.
var isEndpoint = function (path) {
  var item = "";
      stack = app._router.stack;

  for(item in stack) {
    var reg = stack[item].regexp;
    var route = stack[item].route;

    if(path.match(reg) && route !== null && typeof route !== 'undefined') {
      return true;
    }
  };

  return false;
};

// Checks is path is that of a file.
var isFile = function (path) {
  return (path.indexOf('.') > -1) ? true : false;
};

// The routing middleware.
module.exports = function (req, res, next) {
  var path = req.path;

  if(isFile(path)) {
    res.sendFile(path, { root: www });

  } else if (isEndpoint(path)) {
    next();

  } else {
    try {
      res.sendFile("app.html", { root: www });
    } catch (e) {
      res.status(404).end();
    }

  }
};
