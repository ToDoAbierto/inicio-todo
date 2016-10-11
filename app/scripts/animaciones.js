// HABILITA LOS TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


//MENÚ CIRCULAR CON ROTACIÓN DEL SUBMENÚ
$(document).ready(function() {
  $('.trigger').click(function() {
    $('.menu').toggleClass('active');
  });

  $('.trigger1').click(function() {
    $('#boton1').toggleClass('active');
  });

  $('.trigger2').click(function() {
    $('#boton2').toggleClass('active');
  });
});

// BOTONES CIRCULARES DEL PIE

$('.btn-triger').click(function(){
  $(this).closest('.float-btn-group').toggleClass('open');
});

// LISTA DESPLEGABLE
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);

  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case 'true':
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case 'false':
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');

  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();
// FIN DE LA LISTA DESPLEGABLE
// PLUGIN DE FACEBOOK

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.5';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// ======= botón del menú oculto
      $('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
      burgerTime();
    });

//    function burgerTime() {
//      if (isClosed == true) {
//        trigger.removeClass('is-open');
//        trigger.addClass('is-closed');
//        isClosed = false;
//      } else {
//        trigger.removeClass('is-closed');
//        trigger.addClass('is-open');
//        isClosed = true;
//      }
//    }
 function burgerTime() {
      if (isClosed == false) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = true;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = false;
      }
    }


  });

  // FUNCIONES BOTONES href
  
