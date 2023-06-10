// var counter_ha = 1;

// // Функция, которая превращает текст в поле ввода
// function convertToInput(event) {
//   var text = event.target.textContent;
//   var input = document.createElement("input");
//   input.value = text;
//   input.addEventListener("blur", convertToText);
//   event.target.parentNode.replaceChild(input, event.target);
//   input.focus();
// }

// // Функция, которая превращает поле ввода обратно в текст
// function convertToText(event) {
//   var input = event.target;
//   var text = input.value;
//   var textElement = document.createElement("span");
//   textElement.textContent = text;
//   textElement.addEventListener("click", convertToInput);
//   input.parentNode.replaceChild(textElement, input);
// }

// // Функция для добавления нового текста
// function addText() {
//   var container = document.getElementById("container");
//   var textCount = container.getElementsByTagName("span").length;
//   var textToAdd = textCount % 3 === 0 ? 3 : 1;

//   for (var i = 0; i < textToAdd; i++) {
//     var textElement = document.createElement("span");

//     if ((textCount + i) % 3 === 0) {
//       textElement.textContent = counter_ha + ".Новый текст";
//       counter_ha++; // Увеличиваем счетчик только для новых строк
//     } else {
//       textElement.textContent = "Новый текст";
//     }

//     textElement.addEventListener("click", convertToInput);
//     container.appendChild(textElement);

//     // Добавляем отступ в 5 пикселей между текстами
//     textElement.style.marginRight = "35px";

//     // Добавляем <br> для новой строки
//     if ((textCount + i + 1) % 3 === 0) {
//       container.appendChild(document.createElement("br"));
//     }
//   }
// }

// // Обработчик события нажатия на кнопку "Добавить текст"
// var addButton = document.getElementById("addButton");
// addButton.addEventListener("click", addText);


