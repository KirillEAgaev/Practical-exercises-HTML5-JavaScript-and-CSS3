(function () {
    "use strict"
    // Функция для вычисления чисел Фибоначчи
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // Обработка входящих сообщений
    self.onmessage = function(event) {
        const num = event.data; // Получаем число от основного потока
        const result = fibonacci(num); // Вычисляем число Фибоначчи
        self.postMessage(result); // Отправляем результат обратно в основной поток
    };
}());