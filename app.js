
var express = require("express"),
    app     = express(),
    // Custom Middleware
    PostData = require("./api/middleware/PostData.js"),
    RouteHandler = require("./api/middleware/RouteHandler.js");

var secret = "82d14146de312d02c8245b4af5719702";

app.use(cookieParser());
app.use(session({
  secret: secret,
  resave: false,
  saveuninitialized: false
}));
app.use(PostData);
app.use(RouteHandler);

app.listen(7000, function () {
  console.log("Started server: http://localhost:7000");
});
