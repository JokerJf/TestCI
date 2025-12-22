const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Простые маршруты для тестирования
app.get('/', (req, res) => {
  res.json({
    message: 'Добро пожаловать в простой REST API!',
    endpoints: {
      hello: 'GET /api/hello',
      users: 'GET /api/users',
      echo: 'POST /api/echo'
    }
  });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Привет от сервера!', timestamp: new Date().toISOString() });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Иван', email: 'ivan@example.com' },
    { id: 2, name: 'Мария', email: 'maria@example.com' },
    { id: 3, name: 'Алексей', email: 'alex@example.com' }
  ];
  res.json(users);
});

app.post('/api/echo', (req, res) => {
  res.json({
    received: req.body,
    timestamp: new Date().toISOString(),
    message: 'Ваши данные успешно получены!'
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Доступен по адресу: http://localhost:${PORT}`);
});
