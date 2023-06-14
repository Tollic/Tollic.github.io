function getTextAndSetContainer(containerId, filename) {
  $.ajax({
    url: filename,
    success: function(response) {
      $(containerId).text(response);
    }
  });
}

function getAllValues() {
  getTextAndSetContainer('#sum', 'sum.txt');
  getTextAndSetContainer('#lider_1', 'slot_1.txt');
  getTextAndSetContainer('#ix_1', 'ics_1.txt');
  getTextAndSetContainer('#sum_v_1', 'vin_1.txt');
  getTextAndSetContainer('#lider_2', 'slot_2.txt');
  getTextAndSetContainer('#ix_2', 'ics_2.txt');
  getTextAndSetContainer('#sum_v_2', 'vin_2.txt');
  getTextAndSetContainer('#lider_3', 'slot_3.txt');
  getTextAndSetContainer('#ix_3', 'ics_3.txt');
  getTextAndSetContainer('#sum_v_3', 'vin_3.txt');
}

getAllValues();

setInterval(getAllValues, 1000);

// $(document).ready(function() {
//   function updateDisplay() {
//     $.ajax({
//       url: 'get_data.php',
//       method: 'GET',
//       dataType: 'json',
//       success: function(response) {
//         $('#textContainer_left').empty();

//         response.forEach(function(value) {
//           const displayBlock = $('<div id="textContainer_left"></div>').text(value);
//           $('#textContainer_left').append(displayBlock);
//         });
//       },
//       error: function() {
//         console.error('Ошибка при получении данных');
//       }
//     });
//   }
//   updateDisplay();
//   setInterval(updateDisplay, 5000);
// });

$(document).ready(function() {
  let counter = 0;
  let previousTextCount = 0;

  function updateDisplay() {
    $.ajax({
      url: 'get_data.php',
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        $('#textContainer_left').empty();

        response.forEach(function(value, index) {
          const displayBlock = $('<div id="textContainer_left"></div>').text((index + 1 + '.' + ' ' + value));
          $('#textContainer_left').append(displayBlock);
        });

        const newTextCount = response.length;
        if (newTextCount > previousTextCount) {
          counter += newTextCount - previousTextCount;
        }
        previousTextCount = newTextCount;

        $('#cyp_bon').text(counter);
      },
      error: function() {
        console.error('Ошибка при получении данных');
      }
    });
  }

  updateDisplay();
  setInterval(updateDisplay, 1000);
});


$(document).ready(function() {
  function updateDisplay() {
    $.ajax({
      url: 'get_data_sum.php',
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        $('#textContainer_rignt').empty();

        response.forEach(function(value) {
          const displayBlock = $('<div id="textContainer_rignt"></div>').text(value);
          $('#textContainer_rignt').append(displayBlock);
        });
      },
      error: function() {
        console.error('Ошибка при получении данных');
      }
    });
  }

  updateDisplay();
  setInterval(updateDisplay, 1000);
});
