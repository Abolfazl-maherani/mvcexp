var db = require('../config/connectdb');
async function getmenuitem(id = null) {
    let query = (!id) ? "SELECT * FROM menu" : `SELECT (menuname, menuurl) FROM menu WHERE id = ${id}`;

    try {
        const res = await db.any("SELECT * FROM menu");
        if (res) {
            return (res);
        }

    } catch (e) {
        throw new Error("cant get menu item")
    }

}

module.exports = {
    getmenuitem: getmenuitem,
}