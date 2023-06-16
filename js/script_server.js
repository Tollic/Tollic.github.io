// let counter = 1;
// let previousTextBlock = null;
// let previousIndentedTextBlock = null;

// function addText() {
//     const content = document.getElementById('content').value;
//     const counterElement = document.getElementById('cyp_bon');

//     const textBlock = document.createElement('div');
//     textBlock.classList.add('text-block', 'text-block-left');

//     const numberedContent = counter + '. ' + content;
//     textBlock.textContent = numberedContent;

//     const textContainer_left = document.getElementById('textContainer_left');
//     textContainer_left.appendChild(textBlock);

//     document.getElementById('content').value = '';

//     counterElement.textContent = counter;
   

//     textBlock.style.background = '#3d74b8';

//     if (previousTextBlock !== null) {
//         previousTextBlock.style.background = '';
//     }

//     previousTextBlock = textBlock;

//     counter++;
// }

// function addIndentedText() {
//     const contentIndented = document.getElementById('contentIndented').value;

//     const textBlockIndented = document.createElement('div');
//     textBlockIndented.classList.add('text-block', 'text-block-indented');

//     const numberedContent = contentIndented;
//     textBlockIndented.textContent = numberedContent;

//     const textContainer_rignt = document.getElementById('textContainer_rignt');
//     textContainer_rignt.appendChild(textBlockIndented);

//     document.getElementById('contentIndented').value = '';

//     textBlockIndented.style.background = '#3d74b8';

//     if (previousIndentedTextBlock !== null) {
//         previousIndentedTextBlock.style.background = '';
//     }

//     previousIndentedTextBlock = textBlockIndented;
// }
// ававававаававвввввввввввввввввввввввввввввввввввввввввввввввввввв
// let counter = 1;
// let previousTextBlock = null;
// let previousIndentedTextBlock = null;
// let total = 0;
// let sum = 0;

// function addText() {
//   const content = document.getElementById('content').value;
//   const counterElement = document.getElementById('cyp_bon');

//   const textBlock = document.createElement('div');
//   textBlock.classList.add('text-block', 'text-block-left');
//   textBlock.textContent = content;

//   textBlock.addEventListener('click', function () {
//     if (!textBlock.isEditing) {
//       const input = document.createElement('input');
//       input.type = 'text';
//       input.value = textBlock.textContent;
//       textBlock.textContent = '';
//       textBlock.appendChild(input);
//       input.focus();
//       textBlock.isEditing = true;
//       textBlock.style.fontSize = '23px';

//       input.addEventListener('blur', function () {
//         textBlock.textContent = input.value;
//         textBlock.isEditing = false;
//       });
//     }
//   });

//   const deleteButton = document.createElement('span');
//   deleteButton.addEventListener('click', function () {
//     textBlock.remove();
//   });

//   textBlock.appendChild(deleteButton);

//   const textContainer_left = document.getElementById('textContainer_left');
//   textContainer_left.appendChild(textBlock);

//   document.getElementById('content').value = '';

//   if (previousTextBlock !== null) {
//     previousTextBlock.style.marginBottom = '10px';
//     previousTextBlock.style.background = '';
//   }

//   previousTextBlock = textBlock;
// }


// function addIndentedText() {
//   const contentIndented = document.getElementById('contentIndented').value;

//   const textBlockIndented = document.createElement('div');
//   textBlockIndented.classList.add('text-block', 'text-block-indented');
//   textBlockIndented.textContent = contentIndented;

//   textBlockIndented.addEventListener('click', function () {
//     if (!textBlockIndented.isEditing) {
//       const input = document.createElement('input');
//       input.type = 'text';
//       input.value = textBlockIndented.textContent;
//       textBlockIndented.textContent = '';
//       textBlockIndented.appendChild(input);
//       input.focus();
//       textBlockIndented.isEditing = true;

//       input.addEventListener('blur', function () {
//         textBlockIndented.textContent = input.value;
//         textBlockIndented.isEditing = false;
//         updateSum();
//       });
//     }
//   });

//   const deleteButton = document.createElement('span');
//   deleteButton.addEventListener('click', function () {
//     textBlockIndented.remove();
//     updateSum();
//   });

//   textBlockIndented.appendChild(deleteButton);

//   const textContainer_rignt = document.getElementById('textContainer_rignt');
//   textContainer_rignt.appendChild(textBlockIndented);

//   document.getElementById('contentIndented').value = '';

//   // textBlockIndented.style.background = '#3d74b8';

//   if (previousIndentedTextBlock !== null) {
//     previousIndentedTextBlock.style.marginBottom = '10px';
//     previousIndentedTextBlock.style.background = '';
//   }

//   previousIndentedTextBlock = textBlockIndented;

//   updateSum();
// }

// function updateSum() {
//   sum = 0;
//   const textBlocks = document.querySelectorAll('.text-block-indented');
//   textBlocks.forEach(function (textBlock) {
//     const content = textBlock.textContent.trim();
//     const regex = /=\s*(\d+)/;
//     const match = regex.exec(content);
//     if (match) {
//       const number = parseInt(match[1]);
//       if (!isNaN(number)) {
//         sum += number;
//       }
//     }
//   });

//   const playedElement = document.getElementById('played');
//   playedElement.textContent = isNaN(sum) ? '0' : sum.toString();
// }

// ввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввв

let counter = 1;
let previousTextBlock = null;
let previousIndentedTextBlock = null;
let total = 0;
let sum = 0;

function addText() {
  const content = document.getElementById('content').value;
  const counterElement = document.getElementById('cyp_bon');

  const textBlock = document.createElement('div');
  textBlock.classList.add('text-block', 'text-block-left');
  textBlock.textContent = content;

  textBlock.addEventListener('click', function () {
    if (!textBlock.isEditing) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = textBlock.textContent;
      textBlock.textContent = '';
      textBlock.appendChild(input);
      input.focus();
      textBlock.isEditing = true;
      textBlock.style.fontSize = '23px';

      input.addEventListener('blur', function () {
        textBlock.textContent = input.value;
        textBlock.isEditing = false;
      });
    }
  });

  const deleteButton = document.createElement('span');
  deleteButton.addEventListener('click', function () {
    textBlock.remove();
  });

  textBlock.appendChild(deleteButton);

  const textContainer_left = document.getElementById('textContainer_left');
  textContainer_left.appendChild(textBlock);

  document.getElementById('content').value = '';

  if (previousTextBlock !== null) {
    previousTextBlock.style.marginBottom = '10px';
    previousTextBlock.style.background = '';
  }

  previousTextBlock = textBlock;

  // Добавление синего заднего фона на первый добавленный текст
  if (textContainer_left.getElementsByClassName('text-block').length === 1) {
    textBlock.classList.add('first-text-block');
  }
}

function moveBackground() {
  const activeTextBlock = document.querySelector('.text-block.active');
  if (activeTextBlock) {
    const nextTextBlock = activeTextBlock.nextElementSibling;
    if (nextTextBlock) {
      activeTextBlock.classList.remove('active');
      nextTextBlock.classList.add('active');
    } else {
      activeTextBlock.classList.remove('active');
      const firstTextBlock = document.querySelector('.text-block.first-text-block');
      if (firstTextBlock) {
        firstTextBlock.classList.add('active');
      }
    }
  } else {
    const firstTextBlock = document.querySelector('.text-block.first-text-block');
    if (firstTextBlock) {
      firstTextBlock.classList.add('active');
    }
  }
}





function addIndentedText() {
  const contentIndented = document.getElementById('contentIndented').value;

  const textBlockIndented = document.createElement('div');
  textBlockIndented.classList.add('text-block', 'text-block-indented');
  textBlockIndented.textContent = contentIndented;

  textBlockIndented.addEventListener('click', function () {
    if (!textBlockIndented.isEditing) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = textBlockIndented.textContent;
      textBlockIndented.textContent = '';
      textBlockIndented.appendChild(input);
      input.focus();
      textBlockIndented.isEditing = true;

      input.addEventListener('blur', function () {
        textBlockIndented.textContent = input.value;
        textBlockIndented.isEditing = false;
        updateSum();
      });
    }
  });

  const deleteButton = document.createElement('span');
  deleteButton.addEventListener('click', function () {
    textBlockIndented.remove();
    updateSum();
  });

  textBlockIndented.appendChild(deleteButton);

  const textContainer_rignt = document.getElementById('textContainer_rignt');
  textContainer_rignt.appendChild(textBlockIndented);

  document.getElementById('contentIndented').value = '';

  // textBlockIndented.style.background = '#3d74b8';

  if (previousIndentedTextBlock !== null) {
    previousIndentedTextBlock.style.marginBottom = '10px';
    previousIndentedTextBlock.style.background = '';
  }

  previousIndentedTextBlock = textBlockIndented;

  updateSum();
}

function updateSum() {
  sum = 0;
  const textBlocks = document.querySelectorAll('.text-block-indented');
  textBlocks.forEach(function (textBlock) {
    const content = textBlock.textContent.trim();
    const regex = /=\s*(\d+)/;
    const match = regex.exec(content);
    if (match) {
      const number = parseInt(match[1]);
      if (!isNaN(number)) {
        sum += number;
      }
    }
  });

  const playedElement = document.getElementById('played');
  playedElement.textContent = isNaN(sum) ? '0' : sum.toString();
}

// function moveFocus() {
//   const activeTextBlock = document.querySelector('.text-block.active');
//   if (activeTextBlock) {
//     const nextTextBlock = activeTextBlock.nextElementSibling;
//     if (nextTextBlock && nextTextBlock.classList.contains('text-block')) {
//       activeTextBlock.classList.remove('active');
//       nextTextBlock.classList.add('active');
//       nextTextBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }
// }