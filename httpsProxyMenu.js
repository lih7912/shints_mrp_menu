const express = require("express");
const https = require("https");
const http = require('http');
const fs = require("fs");
const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config(); // .env 파일 로드

const HTTPS_PORT = 3211; // HTTPS 포트
const HTTP_PORT = 3210;  // HTTP 포트 (리디렉션 용)

const app = express();

// SSL 인증서 로드
const options = {
  key: fs.readFileSync(process.env.KEY),
  cert: fs.readFileSync(process.env.CERT)
};

const redirectApp = express();
redirectApp.use((req, res, next) => {
    if (!req.secure) {
        return res.redirect(`https://${req.hostname}:${HTTPS_PORT}${req.url}`);
    }
    next();
});

// HTTP 서버 (리디렉션 전용)
http.createServer(redirectApp).listen(HTTP_PORT, () => {
  console.log(`🚀 HTTP 서버가 포트 ${HTTP_PORT}에서 실행 중 (HTTPS로 리디렉션)`);
});


app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:4210",
    changeOrigin: true,
    ws: true, // WebSocket 지원
  })
);

// HTTPS 서버 실행
https.createServer(options, app).listen(HTTPS_PORT, () => {
  console.log(`✅ HTTPS Proxy Server running on port ${HTTPS_PORT}`);
});