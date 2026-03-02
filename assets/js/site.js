
(function(){
  var button = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (button && nav) {
    button.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  }
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
