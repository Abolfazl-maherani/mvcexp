route = require("./routes");
admin = require("./admin/routes")
module.exports.appboot = (app, router) => {
    route.appRoute(router);
};
module.exports.adminboot = (app, router) => {
    admin.adminRoute(router);
}