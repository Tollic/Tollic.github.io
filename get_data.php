<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Читаем содержимое файла
  $file = file('data.txt');

  // Удаляем символы новой строки из каждой строки
  $data = array_map('trim', $file);

  // Возвращаем данные в виде JSON ответа
  header('Content-Type: application/json');
  echo json_encode($data);
} else {
  // Если запрос не GET, возвращаем ошибку
  http_response_code(400);
  echo 'Неверный запрос';
}
?>
