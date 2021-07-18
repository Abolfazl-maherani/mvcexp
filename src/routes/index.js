let postController = require("../controllers/pageController");


exports.appRoute = router => {
    router.get("/blog/post/:postname", postController.post);
    router.get("/blog", postController.blog);

};