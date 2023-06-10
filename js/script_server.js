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

let counter = 1;
let previousTextBlock = null;
let previousIndentedTextBlock = null;

function addText() {
    const content = document.getElementById('content').value;
    const counterElement = document.getElementById('cyp_bon');
  
    const textBlock = document.createElement('div');
    textBlock.classList.add('text-block', 'text-block-left');
  
    const numberedContent = content;
    textBlock.textContent = numberedContent;
  
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = '✖';
  
    deleteButton.addEventListener('click', function() {
      textBlock.remove();
    });
  
    textBlock.appendChild(deleteButton);
  
    const textContainer_left = document.getElementById('textContainer_left');
    textContainer_left.appendChild(textBlock);
  
    document.getElementById('content').value = '';
  
    textBlock.style.background = '#3d74b8';
  
    if (previousTextBlock !== null) {
      previousTextBlock.style.background = '';
    }
  
    previousTextBlock = textBlock;
  }
  

function addIndentedText() {
    const contentIndented = document.getElementById('contentIndented').value;
  
    const textBlockIndented = document.createElement('div');
    textBlockIndented.classList.add('text-block', 'text-block-indented');
  
    const numberedContent = contentIndented;
    textBlockIndented.textContent = numberedContent;
  
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = '✖';
  
    deleteButton.addEventListener('click', function() {
      textBlockIndented.remove();
    });
  
    textBlockIndented.appendChild(deleteButton);
  
    const textContainer_rignt = document.getElementById('textContainer_rignt');
    textContainer_rignt.appendChild(textBlockIndented);
  
    document.getElementById('contentIndented').value = '';
  
    textBlockIndented.style.background = '#3d74b8';
  
    if (previousIndentedTextBlock !== null) {
      previousIndentedTextBlock.style.background = '';
    }
  
    previousIndentedTextBlock = textBlockIndented;
}
  