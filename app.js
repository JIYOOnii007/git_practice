const express = require('express');
const app = express();
const mysql = require('mysql');

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kjy3573!@',
  database: 'firstdatabase'
});

// MySQL 연결
db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류: ' + err.message);
  } else {
    console.log('MySQL 연결 성공');
  }
});

// Express 라우팅 및 미들웨어 설정
app.get('/', (req, res) => {
  res.send('안녕하세요, Node.js와 MySQL을 사용한 웹 애플리케이션입니다.');
});

// 웹 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});