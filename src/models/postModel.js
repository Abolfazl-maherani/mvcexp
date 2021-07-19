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
    let query = (!id) ? "SELECT (caption) FROM exppost" : `SELECT(caption) FROM exppost WHERE id = ${id}`;

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

    let query = (!id) ? "SELECT * FROM exppost " : `SELECT * FROM exppost WHERE id = $1`;


    try {
        const res = await db.many(query, id);
        if (res) {

            return res;

        }

    } catch (e) {
        throw new Error("cant get post post")
    }

}

async function nextpost(postid) {

    let { max } = await minidpost();
    if (postid <= max) {
        return false;
    }

    let query = `SELECT * FROM exppost WHERE id =  (select min(id) from exppost where id > $1 ) `;
    try {
        const res = await db.many(query, postid);
        if (res) {
            return res
        }

    } catch {
        throw new Error("cant get next post")

    }
}
async function lengthpost() {
    let query = `SELECT COUNT(*) from exppost `;
    try {
        const res = await db.many(query);
        if (res) {
            return res
        }

    } catch {
        throw new Error("cant get length post")

    }


}
async function prevpost(postid) {
    let { min } = await maxidpost();
    if (postid <= min) {
        return false;
    }

    let query = `SELECT * FROM exppost WHERE id = (select max(id) from exppost where id < $1 ) `;
    try {
        const res = await db.many(query, postid);
        if (res) {
            return res
        }

    } catch {
        throw new Error("cant get prev post")

    }

}
async function minidpost(postid) {

    let query = `SELECT min(id) FROM exppost  `;
    try {
        const res = await db.many(query);
        if (res) {
            return res[0]
        }

    } catch {
        throw new Error("cant get min post")

    }

}
async function maxidpost() {

    let query = `SELECT max(id) FROM exppost  `;
    try {
        const res = await db.many(query);
        if (res) {
            return res[0]
        }

    } catch {
        throw new Error("cant get max id post")

    }

}

module.exports = {
    getPostTitle: getPostTitle,
    getPostCaption: getPostCaption,
    getPost: getPost,
    maxidpost: maxidpost,
    prevpost: prevpost,
    nextpost: nextpost,
    lengthpost: lengthpost,

}