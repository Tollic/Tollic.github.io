<?php

$data = [
  "sum" => $_POST,
  "slot_1" => $_POST,
  "ics_1" => $_POST,
  "vin_1" => $_POST,
  "slot_2" => $_POST,
  "ics_2" => $_POST,
  "vin_2" => $_POST,
  "slot_3" => $_POST,
  "ics_3" => $_POST,
  "vin_3" => $_POST
];

$connection = new PDO('mysql:host=db4free.net;dbname=musqlite', 'nicita18', '87654321');
var_dump($connection);

// var_dump($_POST)
// $host = 'localhost'; // Хост базы данных
// $username = 'nicita18'; // Имя пользователя базы данных
// $password = '87654321'; // Пароль пользователя базы данных
// $database = 'musqlite'; // Имя базы данных

// $connection = mysqli_connect($host, $username, $password, $database);

// // Проверка соединения
// if (!$connection) {
//   die('Ошибка подключения к базе данных: ' . mysqli_connect_error());
// }
?>
