let postController = require("../controllers/postController");


exports.appRoute = router => {
    router.get("/title", postController.getTitle);

};