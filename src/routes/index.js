let postController = require("../controllers/postController");


exports.appRoute = router => {
    router.get("/Post/title", postController.getTitle);
    router.get("/Post", postController.getPost);

};