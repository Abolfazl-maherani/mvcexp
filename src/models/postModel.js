var db = require('../config/connectdb');

// get  post title 
async function getPostTitle(id = null) {
    let query = (!id) ? "SELECT (title) FROM exppost" : `SELECT (title) FROM exppost WHERE id = $ { id }`;

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
async function getPostCaption(id = null) {
    let query = (!id) ? "SELECT (caption) FROM exppost" : `SELECT(caption) FROM exppost WHERE id = $ { id }`;

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
async function getPost(id = null) {

    let query = (!id) ? "SELECT id,caption,title FROM exppost " : `SELECT id,caption, title FROM exppost WHERE id = ${id}`;


    try {
        const res = await db.many(query);
        if (res) {

            return res;

        }

    } catch (e) {
        throw new Error("cant get post post")
    }

}
module.exports = {
    getPostTitle: getPostTitle,
    getPostCaption: getPostCaption,
    getPost: getPost,

}