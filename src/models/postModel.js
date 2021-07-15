var db = require('../config/connectdb');

// get  post title 
async function getPostTitle() {

    try {
        const res = await db.any("SELECT * FROM exppost");
        if (res) {
            return res;
        }

    } catch (e) {
        throw new Error("cant get post title")
    }

}

module.exports = {
    getPostTitle: getPostTitle,

}