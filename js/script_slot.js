let counter = 1;
let previousTextBlock = null;
let previousIndentedTextBlock = null;
let total = 0;
let sum = 0;
 
function addText() {
  const content = document.getElementById('content').value;
  const counterElement = document.getElementById('cyp_bon');
 
  if (!counterElement.textContent) {
    counterElement.textContent = '0';
  }
 
  const textBlock = document.createElement('div');
  textBlock.classList.add('text-block-left');
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
      textBlock.style.fontSize = '30px';
 
      input.addEventListener('blur', function () {
        textBlock.textContent = input.value;
        textBlock.isEditing = false;
      });
    }
  });
 
  const textContainer_left = document.getElementById('textContainer_left');
  textContainer_left.appendChild(textBlock);
 
  document.getElementById('content').value = '';
 
  if (previousTextBlock !== null) {
    previousTextBlock.style.marginBottom = '10px';
    previousTextBlock.style.background = '';
  }
 
  previousTextBlock = textBlock;
 
  const counter = parseInt(counterElement.textContent) + 1;
 
  counterElement.textContent = counter.toString(); 
}
 
function addIndentedText() {
  const contentIndented = document.getElementById('contentIndented').value;
 
  const textBlockIndented = document.createElement('div');
  textBlockIndented.classList.add('textContainer_right');
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
 
  const textContainer_rignt = document.getElementById('textContainer_rignt');
  textContainer_rignt.appendChild(textBlockIndented);
 
  document.getElementById('contentIndented').value = '';
 
  if (previousIndentedTextBlock !== null) {
    previousIndentedTextBlock.style.marginBottom = '10px';
    previousIndentedTextBlock.style.background = '';
  }
 
  previousIndentedTextBlock = textBlockIndented;
 
  updateSum();
}
 
function updateSum() {
  let sum = 0;
 
  const textBlocks = document.querySelectorAll('.textContainer_right');
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
 
  const sumElement = document.getElementById('sum');
  const sumValue = parseFloat(sumElement.textContent);
  if (!isNaN(sumValue)) {
    sum -= sumValue;
  }
 
  const playedElement = document.getElementById('played');
  playedElement.textContent = isNaN(sum) ? '0' : sum.toString();
}
 
var currentBackgroundPosition = -1;
 
function moveBackground() {
  const textBlocksLeft = document.querySelectorAll('.text-wrapper #textContainer_left .text-block-left');
  const textBlocksRight = document.querySelectorAll('.text-wrapper #textContainer_rignt .textContainer_right');
  const numTextBlocks = Math.max(textBlocksLeft.length, textBlocksRight.length);

  if (numTextBlocks === 0) {
    return;
  }

  currentBackgroundPosition++;

  if (currentBackgroundPosition >= numTextBlocks) {
    currentBackgroundPosition = 0;
  }

  textBlocksLeft.forEach(function (textBlockLeft) {
    textBlockLeft.style.marginBottom = '10px';
    textBlockLeft.style.background = '';
  });

  textBlocksRight.forEach(function (textBlockRight) {
    textBlockRight.style.marginBottom = '10px';
    textBlockRight.style.background = '';
  });

  if (currentBackgroundPosition < textBlocksLeft.length) {
    textBlocksLeft[currentBackgroundPosition].style.marginBottom = '0';
    textBlocksLeft[currentBackgroundPosition].style.background = 'blue';
    textBlocksLeft[currentBackgroundPosition].style.width = '100%';
    textBlocksLeft[currentBackgroundPosition].style.borderRadius = '5px';
  }

  if (currentBackgroundPosition < textBlocksRight.length) {
    textBlocksRight[currentBackgroundPosition].style.marginBottom = '0';
    textBlocksRight[currentBackgroundPosition].style.background = 'blue';
    textBlocksRight[currentBackgroundPosition].style.borderRadius = '5px';
  }

  const containerLeft = document.getElementById('textContainer_left');
  const containerRight = document.getElementById('textContainer_rignt');

  if (currentBackgroundPosition < textBlocksLeft.length) {
    containerLeft.scrollTo({
      top: textBlocksLeft[currentBackgroundPosition].offsetTop - 150,
      behavior: 'smooth'
    });
  }
  

  if (currentBackgroundPosition < textBlocksRight.length) {
    containerRight.scrollTo({
      top: textBlocksRight[currentBackgroundPosition].offsetTop - 150,
      behavior: 'smooth'
    });
  }
}
