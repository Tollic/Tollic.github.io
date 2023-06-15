var scrollInterval;

function startAutoScroll() {
  var container = document.querySelector('.scrollable-container');
  var textContainer = document.querySelector('.text-container');

  scrollInterval = setInterval(function() {
    container.scrollTop += 1;
    if (container.scrollTop >= textContainer.scrollHeight - container.clientHeight) {
      container.scrollTop = 0; 
    }
  }, 30); // Интервал прокрутки - каждые 10 миллисекунд (можете настроить под свои нужды)
}

function stopAutoScroll() {
  clearInterval(scrollInterval);
}
  