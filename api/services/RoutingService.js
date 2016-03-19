module.exports = {
  addRoute: function (routeStr) {
    var route       = routeStr.split(" "),
        verb        = route[0].toLowerCase(),
        path        = route[1].toLowerCase(),
        callbackArr = route[2].split("."),
        controller  = callbackArr[0],
        method      = callbackArr[1],
        ctrl        = require(global.base + "/api/controllers/" + controller + ".js"),
        callback    = ctrl[method];

    app[verb](path, function (req, res, next) {
      if(PolicyService.check(req.session, controller, method)) {
        callback(req, res, next);
      } else {
        console.log("Unauthorized request for:", req.path);
        res.status(401).end("Unauthorized");
      }
    });
  },

  loadRoutes: function (routesArray) {
    var len = routesArray.length,
        i = 0;

    console.info("LOADING ROUTE STACK");
    for(i; i < len; i += 1) {
      this.addRoute(routesArray[i]);
    }
  }
};
