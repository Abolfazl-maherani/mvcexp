let adminController = require("../../controllers/adminController");
exports.adminRoute = route => {
    route.get("/admin", adminController.index)
}