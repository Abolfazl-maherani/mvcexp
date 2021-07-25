var db = require('../config/connectdb');
async function getmenuitem(id = null) {
    let query = (!id) ? "SELECT * FROM menu" : `SELECT (menuname, menuurl) FROM menu WHERE id = ${id}`;

    try {
        const res = await db.any("SELECT * FROM menu");
        if (res) {
            return res;
        }

    } catch (e) {
        throw new Error("cant get menu item")
    }

}
async function lengthmenu() {
    let query = `SELECT COUNT(*) from menu`;
    try {
        const res = await db.many(query);
        if (res) {
            return res
        }

    } catch {
        throw new Error("cant get length menu")

    }





}
async function addmenu(name, url) {


    return await db.any(`INSERT INTO menu(menuname, menuurl) VALUES ('${name}', '${url}') RETURNING id`);


}

module.exports = {
    getmenuitem: getmenuitem,
    lengthmenu: lengthmenu,
    addmenu: addmenu
}