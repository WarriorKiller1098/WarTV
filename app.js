const url = require("url") 
const http = require("http") 
const port = 10000
const fs = require("fs") 

http.createServer(function(req, res) {
    const urlpath = url.parse(req.url, true) 
    const parsedpath = urlpath.path
    let query = urlpath.query
    const path = parsedpath.split("?")[0]
    if (path.charAt(path.length - 1) == "?") {
        query = parsedpath.split("?")[1].replace("?", "")
    }
    console.log("Method requested: " + req.method + ", with endpoint " + path);
    if (path == "/") {
        sendf(res, "index.html");
    }
}).listen(port);

function sendf(res, file) {
    res.write(fs.readFileSync(__dirname + "/" + file));
    res.end();
}
