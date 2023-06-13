<?php
$file = 'scrol.txt'; // Имя файла для записи данных

if (isset($_POST['value'])) {
  $value = $_POST['value'];

  // Открытие файла в режиме записи
  $handle = fopen($file, 'w');
  if ($handle) {
    fwrite($handle, $value); // Запись значения в файл
    fclose($handle); // Закрытие файла
    echo 'Запись успешно выполнена.';
  } else {
    echo 'Ошибка при открытии файла для записи.';
  }
}
?>
