function updateData(newData) {
    // Отправка асинхронного AJAX запроса на сервер
    fetch("/.netlify/functions/updateData", {
      method: "POST",
      body: JSON.stringify(newData)
    })
      .then(response => response.text())
      .then(message => {
        console.log(message);
        // Можно выполнить другие действия после успешного обновления данных
        // ...
      })
      .catch(error => {
        console.error("Ошибка при отправке запроса:", error);
      });
  }
  