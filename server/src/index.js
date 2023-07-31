const http = require("http");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const hostname = "127.0.0.1";
const port = 3200;

const server = http.createServer((req, res) => {
    //Set up CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    // Handle other requests
    if (req.method === "GET" && req.url === "/api/books") {
        fs.readFile("json-database/db.json", "utf8", (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
