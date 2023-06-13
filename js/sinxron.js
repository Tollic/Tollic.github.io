// $(document).ready(function() {
//   let inputCount = 1;

//   $('#addInput').on('click', function() {
//     const newInput = $('<input type="text" class="inputField" placeholder="Добавить поле слота">');
//     $('#inputContainer').append(newInput);
//     inputCount++;
//   });

//   $('#myForm').on('submit', function(event) {
//     event.preventDefault();

//     const formData = [];

//     $('.inputField').each(function() {
//       const inputValue = $(this).val();
//       formData.push(inputValue);
//     });

//     $('.inputField_sum').each(function() {
//       const inputValue = $(this).val();
//       formData.push(inputValue);
//     });

//     $.ajax({
//       url: 'save_data.php',
//       method: 'POST',
//       data: { values: formData },
//       success: function() {
//         console.log('Данные успешно сохранены');
//       },
//       error: function() {
//         console.error('Ошибка при сохранении данных');
//       }
//     });
//   });
  
//   $('#myForm').submit(function(event) {
//     event.preventDefault();

//     var sum = $('#sum').val();
//     var slot_1 = $('#slot_1').val();
//     var ics_1 = $('#ics_1').val();
//     var vin_1 = $('#vin_1').val();
//     var slot_2 = $('#slot_2').val();
//     var ics_2 = $('#ics_2').val();
//     var vin_2 = $('#vin_2').val();
//     var slot_3 = $('#slot_3').val();
//     var ics_3 = $('#ics_3').val();
//     var vin_3 = $('#vin_3').val();

//     $.ajax({
//       type: 'POST',
//       url: 'index.php',
//       data: {
//         sum: sum,
//         slot_1: slot_1,
//         ics_1: ics_1,
//         vin_1: vin_1,
//         slot_2: slot_2,
//         ics_2: ics_2,
//         vin_2: vin_2,
//         slot_3: slot_3,
//         ics_3: ics_3,
//         vin_3: vin_3
//       },
//       success: function(response) {
//         console.log('Данные успешно сохранены');
//       },
//       error: function() {
//         console.log('Произошла ошибка при сохранении данных');
//       }
//     });
//   });
// });

//   let inputCount_sum = 1;

//   $('#addInput_sum').on('click', function() {
//     const newInput = $('<input type="text" class="inputField_sum" placeholder="Добавить поле суммы">');
//     $('#inputContainer_sum').append(newInput);
//     inputCount_sum++;
//   });

//   $('#myForm').on('submit', function(event) {
//     event.preventDefault();

//     const formData = [];

//     $('.inputField_sum').each(function() {
//       const inputValue = $(this).val();
//       formData.push(inputValue);
//     });

//     $.ajax({
//       url: 'save_data_sum.php',
//       method: 'POST',
//       data: { values: formData },
//       success: function() {
//         console.log('Данные успешно сохранены');
//       },
//       error: function() {
//         console.error('Ошибка при сохранении данных');
//       }
//     });
//   });

$(document).ready(function() {
  let inputCount = 1;
  let inputCount_sum = 1;

  // $('#addInput').on('click', function() {
  //   const newInput = $('<input type="text" class="inputField" placeholder="Добавить поле слота">');
  //   $('#inputContainer').append(newInput);
  //   inputCount++;
  // });

  // $('#addInput_sum').on('click', function() {
  //   const newInput = $('<input type="text" class="inputField_sum" placeholder="Добавить поле суммы">');
  //   $('#inputContainer_sum').append(newInput);
  //   inputCount_sum++;
  // });

  $('#addInput').on('click', function() {
    const newInputContainer = $('<div></div>').addClass('inputContainer');
    const label = $('<label></label>').text('Поле для слота: ');
    const newInput = $('<input type="text" class="inputField" placeholder="Добавить поле слота">');
    newInput.css('margin-bottom', '5px');
    
    newInputContainer.append(label);
    newInputContainer.append(newInput);
    $('#inputContainer').append(newInputContainer);
    inputCount++;
});

  $('#addInput_sum').on('click', function() {
      const newInputContainer = $('<div></div>').addClass('inputContainer');
      const label = $('<label></label>').text('Поле для суммы: ');
      const newInput = $('<input type="text" class="inputField_sum" placeholder="Добавить поле суммы">');
      newInput.css('margin-bottom', '5px');
      
      newInputContainer.append(label);
      newInputContainer.append(newInput);
      $('#inputContainer_sum').append(newInputContainer);
      inputCount_sum++;
  });


  $('#myForm').on('submit', function(event) {
    event.preventDefault();

    const formData = [];

    $('.inputField').each(function() {
      const inputValue = $(this).val();
      formData.push(inputValue);
    });

    $.ajax({
      url: 'save_data.php',
      method: 'POST',
      data: { values: formData },
      success: function() {
        console.log('Данные успешно сохранены');
      },
      error: function() {
        console.error('Ошибка при сохранении данных');
      }
    });
  });

  $('#myForm').on('submit', function(event) {
    event.preventDefault();

    const formData = [];

    $('.inputField_sum').each(function() {
      const inputValue = $(this).val();
      formData.push(inputValue);
    });
    

    $.ajax({
      url: 'save_data_sum.php',
      method: 'POST',
      data: { values: formData },
      success: function() {
        console.log('Данные успешно сохранены');
      },
      error: function() {
        console.error('Ошибка при сохранении данных');
      }
    });
  });
  
  $('#myForm').submit(function(event) {
    event.preventDefault();

    var sum = $('#sum').val();
    var slot_1 = $('#slot_1').val();
    var ics_1 = $('#ics_1').val();
    var vin_1 = $('#vin_1').val();
    var slot_2 = $('#slot_2').val();
    var ics_2 = $('#ics_2').val();
    var vin_2 = $('#vin_2').val();
    var slot_3 = $('#slot_3').val();
    var ics_3 = $('#ics_3').val();
    var vin_3 = $('#vin_3').val();

    $.ajax({
      type: 'POST',
      url: 'index.php',
      data: {
        sum: sum,
        slot_1: slot_1,
        ics_1: ics_1,
        vin_1: vin_1,
        slot_2: slot_2,
        ics_2: ics_2,
        vin_2: vin_2,
        slot_3: slot_3,
        ics_3: ics_3,
        vin_3: vin_3
      },
      success: function(response) {
        console.log('Данные успешно сохранены');
      },
      error: function() {
        console.log('Произошла ошибка при сохранении данных');
      }
    });
  });
});

  