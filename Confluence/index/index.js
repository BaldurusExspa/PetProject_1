/* Ф-ция появления меню регистрации */ 
function menuRegistr() {
    document.getElementById("menuRegistr").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.button-sign')) {
      var dropdowns = document.getElementsByClassName("menuRegistr");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
/* / Ф-ция появления меню регистрации / */

/* Прокрутка страницы */
  $('.flowing-scroll').on('click', function() {
    var el = $(this);
    var dest = el.attr('href');
    if (dest !== undefined && dest !== '') {
      $('html, body, main').animate({
          scrollTop: $(dest).offset().top
        }, 500
      );
    }
    return false;
  });
  /* / Прокрутка страницы / */