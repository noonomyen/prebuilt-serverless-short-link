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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`PSSL server running at port ${PORT}`);
});

module.exports = app;
