const path = require("path");
const app = require("../../app");


let configApp = {
    appname: "Express MVC",
    appversion: "1.0.0",
    auth: "abolfazl maherani",
    host: "\localhost:3000"
}
let urlPage = {
    blog: path.join("/blog", path.sep),
    singlepost: path.join("/blog", "post", path.sep),

    admin: {
        index: path.join("/admin", path.sep),
        editPost: path.join("/admin?editpost="),
    }
}


module.exports = {
    app: configApp,
    url: urlPage

}