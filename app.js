global.base = __dirname;

global.express = require("express");
global.app     = express();

var CookieParser   = require("cookie-parser"),
    Session        = require("express-session"),

    // Custom Middleware
    PostData       = require("./api/middleware/PostData.js"),
    RouteHandler   = require("./api/middleware/RouteHandler.js"),

    // Routing Stuff
    routes         = require("./api/routes.js"),
    RoutingService = require("./api/services/RoutingService.js");

var secret = "82d14146de312d02c8245b4af5719702";

app.use(CookieParser());
app.use(Session({
  secret: secret,
  resave: false,
  saveuninitialized: false
}));
app.use(PostData);
app.use(RouteHandler);

RoutingService.loadRoutes(routes);

app.listen(7000, function () {
  console.log("Started server: http://localhost:7000");
});
