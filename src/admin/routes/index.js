let adminController = require("../../controllers/adminController");
exports.adminRoute = route => {
    route.get("/admin", adminController.index);
    route.post("/admin", adminController.index);
    route.post("/admin/addpost", adminController.addpost);
}