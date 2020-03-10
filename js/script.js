
$(document).ready(function() {
  $(".mobile-menu-icon.fa-bars").click(function(){
        $(".hidden-mobile").slideDown();
    });

    $(".mobile-menu-icon.fa-times").click(function(){
        $(".hidden-mobile").slideUp();
    });
    
      $("#owl-demo").owlCarousel({

      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0;
      itemsMobile : [480,1] // itemsMobile disabled - inherit from itemsTablet option

      });

      $(function() {
          var Accordion = function(el, multiple) {
              this.el = el || {};
              this.multiple = multiple || false;

              // Variables privadas
              var links = this.el.find('.link2');
              // Evento
              links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
          }

          Accordion.prototype.dropdown = function(e) {
              var $el = e.data.el;
              $this = $(this),
                  $next = $this.next();

              $next.slideToggle();
              $this.parent().toggleClass('open');

              if (!e.data.multiple) {
                  $el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
              };
          }

          var accordion = new Accordion($('#accordion'), false);
      });

      $(".feature1").hover(function(){
      $(".feature-span").addClass("feature-span-bg1");
      })
      $(".feature2").hover(function(){
      $(".feature-span").addClass("feature-span-bg2");
      })
      $(".feature3").hover(function(){
      $(".feature-span").addClass("feature-span-bg3");
      })
      $(".feature4").hover(function(){
      $(".feature-span").addClass("feature-span-bg4");
      })
      $(".feature5").hover(function(){
      $(".feature-span").addClass("feature-span-bg5");
      })
      $(".feature6").hover(function(){
      $(".feature-span").addClass("feature-span-bg6");
      })

      $(window).scroll(function(){
              var scroll = $(window).scrollTop();
              if (scroll > 50) {
                  $(".navigation-wrapper").css("background" , "black");
              }

              else{
                  $(".navigation-wrapper").css("background" , "transparent");
              }
      })

    });

// number count for stats, using jQuery animate

$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });


});

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


// Hide #MagicMenu on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#MagicMenu').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 50);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .MagicMenu-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#MagicMenu').fadeOut(700);
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#MagicMenu').fadeIn(300);
        }
    }

    lastScrollTop = st;
}

// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});

			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();

				$('html, body').animate({scrollTop: 0}, 300);
			})


      new WOW().init();
