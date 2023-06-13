<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Получаем значения из POST запроса
  $values = $_POST['values'];

  // Создаем новый файл или открываем существующий для записи
  $file = fopen('data_sum.txt', 'w');

  // Записываем значения в файл
  foreach ($values as $value) {
    fwrite($file, $value . PHP_EOL);
  }

  // Закрываем файл
  fclose($file);

  // Возвращаем ответ на запрос
  echo 'Данные успешно сохранены';
} else {
  // Если запрос не POST, возвращаем ошибку
  http_response_code(400);
  echo 'Неверный запрос';
}
?>
