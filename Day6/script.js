var loaderContainer = document.getElementById('loader-container');
var mainContainer = document.getElementById('main-container');

setTimeout(function() {
  loaderContainer.style.display = 'none';
  mainContainer.style.display = 'flex';
}, 6000);