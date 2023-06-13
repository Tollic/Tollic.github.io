<?php
  // Получение значений из запроса
  $sum = $_POST['sum'];
  $slot_1 = $_POST['slot_1'];
  $ics_1 = $_POST['ics_1'];
  $vin_1 = $_POST['vin_1'];
  $slot_2 = $_POST['slot_2'];
  $ics_2 = $_POST['ics_2'];
  $vin_2 = $_POST['vin_2'];
  $slot_3 = $_POST['slot_3'];
  $ics_3 = $_POST['ics_3'];
  $vin_3 = $_POST['vin_3'];

  // Функция для сохранения значения в файле
  function saveToFile($value, $filename) {
    $file = fopen($filename, 'w');
    fwrite($file, $value);
    fclose($file);
  }

  // Сохранение значений в разных файлах
  saveToFile($sum, 'sum.txt');
  saveToFile($slot_1, 'slot_1.txt');
  saveToFile($ics_1, 'ics_1.txt');
  saveToFile($vin_1, 'vin_1.txt');
  saveToFile($slot_2, 'slot_2.txt');
  saveToFile($ics_2, 'ics_2.txt');
  saveToFile($vin_2, 'vin_2.txt');
  saveToFile($slot_3, 'slot_3.txt');
  saveToFile($ics_3, 'ics_3.txt');
  saveToFile($vin_3, 'vin_3.txt');
  
  // // Получение текста из отправленной формы
  // $sum = $_POST['sum'];

  // // Сохранение текста в файле
  // $file = 'data.txt';
  // file_put_contents($file, $sum);
?>

