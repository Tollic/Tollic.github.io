let serverData = ""; // Временное хранилище на сервере

exports.handler = async function(event, context) {
  const newData = JSON.parse(event.body);

  // Сохранение данных во временном хранилище на сервере
  serverData = newData;

  // Ответ клиенту с кодом 200, чтобы показать успешное обновление данных
  return {
    statusCode: 200,
    body: "Данные успешно обновлены"
  };
};
