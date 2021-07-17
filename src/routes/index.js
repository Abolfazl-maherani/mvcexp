let postController = require("../controllers/postController");


exports.appRoute = router => {
    router.get("/postController/Showtitle", postController.Showtitle);
    router.get("/postController", postController.Showpost);

};