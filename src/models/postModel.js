var db = require('../config/connectdb');

// get  post title 
async function getPostTitle() {

    try {
        const res = await db.any("SELECT (title) FROM exppost");
        if (res) {
            return res;
        }

    } catch (e) {
        throw new Error("can't get post title")
    }

}


// get post caption
async function getPostCaption() {

    try {
        const res = await db.any("SELECT (caption) FROM exppost");
        if (res) {
            return res;
        }

    } catch (e) {
        throw new Error("cant get post caption")
    }

}

// get post
async function getPost() {

    try {
        const res = await db.many("SELECT caption,title FROM exppost");
        if (res) {

            return res;
        }

    } catch (e) {
        throw new Error("cant get post post")
    }

}
getPost();


module.exports = {
    getPostTitle: getPostTitle,
    getPostCaption: getPostCaption,
    getPost: getPost,

}