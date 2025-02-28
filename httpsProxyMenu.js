const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");
const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config(); // .env 파일 로드

const app = express();
const httpApp = express();

// SSL 인증서 로드
const options = {
  key: fs.readFileSync(process.env.KEY),
  cert: fs.readFileSync(process.env.CERT)
};

// HTTP -> HTTPS 리디렉션
httpApp.use((req, res, next) => {
  const host = req.headers.host.split(":")[0]; // 도메인만 추출 (포트 제거)
  const httpsUrl = `https://${host}:3211${req.url}`;
  res.redirect(301, httpsUrl);
});

// HTTP 서버 실행 (포트 3210에서 HTTPS 3211로 리디렉션)
http.createServer(httpApp).listen(3210, () => {
  console.log("🔄 HTTP Server running on port 3210 and redirecting to HTTPS 3211");
});

// HTTPS 프록시 서버 설정
app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:4210",
    changeOrigin: true,
    ws: true, // WebSocket 지원
  })
);

// HTTPS 서버 실행
https.createServer(options, app).listen(3211, () => {
  console.log("✅ HTTPS Proxy Server running on port 3211");
});
