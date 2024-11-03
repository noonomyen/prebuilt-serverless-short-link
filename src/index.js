const http = require("http");
const url = require("url");

const list = require("./list.json");

const app = http.createServer((req, res) => {
    res.setHeader("Cache-Control", "public, max-age=0");

    if (req.method === "GET") {
        const path = url.parse(req.url).path;
        if (list[path]) res.writeHead(302, { Location: list[path] });
        else res.writeHead(404);
    }

    res.end();
});

const LISTEN_PORT = process.env.LISTEN_PORT;

if (process.env.NODE_ENV === "development" || LISTEN_PORT) {
    app.listen(LISTEN_PORT, () => {
        console.log(`PSSL server running at port ${LISTEN_PORT}`);
    });
} else {
    module.exports = app;
}
