const WebSocket = require('ws');

// Создаем WebSocket-сервер на порту 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Клиент подключен');

    ws.on('message', (message) => {
        console.log(`Получено сообщение: ${message}`);
        // Отправляем обратно сообщение клиенту
        ws.send(`Вы написали: ${message}`);
    });

    ws.on('close', () => {
        console.log('Клиент отключен');
    });
});

console.log('Сервер запущен на ws://localhost:8080');