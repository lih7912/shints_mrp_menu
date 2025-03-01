const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");
const cookieParser = require("cookie-parser"); // 쿠키 처리
const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config(); // .env 파일 로드
const axios = require('axios');

const app = express();
const httpApp = express();

// 쿠키 사용 설정
app.use(cookieParser());

// SSL 인증서 로드
const options = {
  key: fs.readFileSync(process.env.KEY),
  cert: fs.readFileSync(process.env.CERT)
};

async function getPublicIP() {
  try {
      const response = await axios.get('https://api64.ipify.org?format=json');
      return response.data.ip;
  } catch (error) {
      console.error('IP 주소 조회 중 오류 발생:', error);
      return null;
  }
}

// HTTP -> HTTPS 리디렉션
httpApp.use((req, res, next) => {
  const httpsUrl = `https://${req.hostname}:3211${req.url}`;
  res.redirect(301, httpsUrl);
});

// HTTP 서버 실행 (포트 3210에서 HTTPS 3211로 리디렉션)
http.createServer(httpApp).listen(3210, () => {
  console.log("🔄 HTTP Server running on port 3210 and redirecting to HTTPS 3211");
});

// 클라이언트 IP 가져와서 쿠키에 저장하는 미들웨어
app.use(async (req, res, next) => {
  let clientIP = await getPublicIP();

  console.log(`Client IP: ${clientIP}`);

  // 쿠키에 저장 (유효기간 1일)
  res.cookie('client_ip', clientIP, {
    maxAge: 24 * 60 * 60 * 1000, // 1일
    httpOnly: false, // 클라이언트에서 접근 가능하도록 설정
    secure: true, // HTTPS에서만 쿠키 저장
    sameSite: 'Strict'
  });

  next();
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
