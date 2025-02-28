const express = require("express");
const https = require("https");
const fs = require("fs");
const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config(); // .env 파일 로드

const app = express();

// SSL 인증서 로드
const options = {
  key: fs.readFileSync(process.env.KEY),
  cert: fs.readFileSync(process.env.CERT)
};

app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:4210",
    changeOrigin: true,
    ws: true, // WebSocket 지원
  })
);

// HTTPS 서버 실행
https.createServer(options, app).listen(3210, () => {
  console.log("✅ HTTPS Proxy Server running on port 3210");
});