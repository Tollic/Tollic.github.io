$(document).ready(function() {
  // Функция для обновления содержимого страницы
  function updateDisplay() {
    // Запрашиваем данные с сервера
    $.ajax({
      url: 'get_data.php', // Замените на адрес обработчика на сервере
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        // Очищаем содержимое контейнера от предыдущих данных
        $('#displayContainer').empty();

        // Выводим данные в отдельные блоки
        response.forEach(function(value) {
          const displayBlock = $('<div></div>').text(value);
          $('#displayContainer').append(displayBlock);
        });
      },
      error: function() {
        console.error('Ошибка при получении данных');
      }
    });
  }

  // Обновляем содержимое на странице при загрузке и каждые 5 секунд
  updateDisplay();
  setInterval(updateDisplay, 5000);
});