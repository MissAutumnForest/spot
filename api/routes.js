module.exports = [
  "get /api/user/:username UserController.get",
  "post /api/user/ UserController.new",

  "post /api/login UserController.login",
  "get /api/logout UserController.logout",
  "get /api/authenticated UserController.authenticated"
];
