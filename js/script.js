var coin = document.getElementById('coin');
var court = document.getElementById('court');
var xix = document.getElementById('xix');
var money = document.getElementById('money');

// var x = 0;

// function addInput() {
//     var str = '<input type="text" class="name_st" placeholder="Название"> <input type="text" class="col_po" placeholder="сколько купленно"> <input type="text" class="sum_d" placeholder="всего денег"> <input type="text" class="col_x" placeholder="сколько х"><div id="input' + (x + 1) + '"></div>';
//     document.getElementById('input' + x).innerHTML = str;
//     x++;
// }

// var addTime = document.getElementById('add');

// addTime.addEventListener('click', getN);

// function getN() {
//   var getNum = document.getElementById('get_num').value;
//   document.getElementById('obs').innerHTML = getNum
// }

// function addEl() {
//     let inputs = document.querySelectorAll('input[type="text"]')
//     let lastNum = ((inputs[inputs.length-1]).getAttribute('name'));
//     let nextNum = Number(lastNum) + 1;
  
//     let elem = document.createElement("p");
//     elem.innerHTML = `${nextNum} <input type="text" id="in${nextNum}" name="${nextNum}" />`;
  
//     let parentGuest = document.getElementById("in"+lastNum);
//     parentGuest.parentNode.insertBefore(elem, parentGuest.nextSibling);
// }


// Получаем ссылки на кнопки и контейнеры
var addInputButton = document.getElementById("add-input-button");
var calculateButton = document.getElementById("calculate-button");
var inputsContainer = document.getElementById("inputs-container");
var resultContainer = document.getElementById("result-container");

// Добавляем обработчик события для кнопки "Добавить ещё один Textarea"
addInputButton.addEventListener("click", function() {
  var newInput = document.createElement("textarea");
  newInput.className = "text-input";
  inputsContainer.appendChild(newInput);
});

// Добавляем обработчик события для кнопки "Рассчитать"
calculateButton.addEventListener("click", function() {
  var textInputs = document.getElementsByClassName("text-input");
  var sum = 0;
  for (var i = 0; i < textInputs.length; i++) {
    var text = textInputs[i].value;
    var numbers = extractNumbers(text);
    if (numbers) {
      for (var j = 0; j < numbers.length; j++) {
        sum += parseInt(numbers[j]);
      }
    }
  }
  resultContainer.textContent = "Сумма цифр: " + sum;
});

// Функция для извлечения чисел из текста
function extractNumbers(text) {
  var numberRegex = /\d+/g;
  return text.match(numberRegex);
}

