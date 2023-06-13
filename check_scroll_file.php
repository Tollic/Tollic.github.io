<?php
$file = 'scrol.txt'; // Имя файла для чтения данных

// Чтение содержимого файла
$content = file_get_contents($file);
if ($content !== false) {
  echo $content;
} else {
  echo 'Ошибка при чтении файла.';
}
?>