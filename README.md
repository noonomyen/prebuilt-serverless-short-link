# Prebuilt Serverless Short Link

Designed to host a short link server without the need for a database, suitable for long-term redirects that will not change in the future.

Example Usage: I use it on Vercel to redirect complex and lengthy "link to highlight" URLs.

Just edit `src/list.json` and run with `node src/index.js`

## Run

If LISTEN_PORT is not set, it will not listen on port but will return http.Server instead.

```sh
LISTEN_PORT=3000 npm run start
```
