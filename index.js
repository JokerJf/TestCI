const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`Приложение работает! Версия: ${process.env.APP_VERSION || '1.0.0'} XD1`);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
