/**
 * Script used for the Styleguide structure only
 */

 $( ".navigation__link_m" ).click(function() {
  $(".AnyVan-iframe-wrapper .AnyVan-sidebar__nav ul").toggleClass( "act" );
});

$( ".AnyVan-iframe-wrapper .AnyVan-sidebar__nav ul a" ).click(function() {
  $(".AnyVan-iframe-wrapper .AnyVan-sidebar__nav ul").removeClass( "act" );
});

var body = $('body');
var sidebarContent = $('.AnyVan-sidebar__content');
var sidebarLinks = $('.AnyVan-sidebar__nav__item__link');
var sidebarToggle = $('[class*="AnyVan-sidebar__toggle"]');
var sidebarOpenedClass = 'opened';

function sidebarOpen() {
  body.addClass('opened');
}

function sidebarClose() {
  body.removeClass('opened');
}

sidebarToggle.click(function(e) {
  e.preventDefault();
  body.toggleClass(sidebarOpenedClass);
});

$(document).ready(function() {
	$('#content .AnyVan-sidebar__nav a').on('click', function(e) {
		e.preventDefault(); // prevent hard jump, the default behavior

		var target = $(this).attr("href"); // Set the target as variable

		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function() {
			location.hash = target; //attach the hash (#jumptarget) to the pageurl
		});

		return false;
	});

	var sticky = new Sticky('.AnyVan-iframe-wrapper .AnyVan-sidebar__nav ul');

	$(".l-controls span").on('click',function() {

		var control = $(this).closest("ul").attr('id');
        var term = $(this).data('colour');

       	$("#"+control + "-example").attr('class', 'sixteen');
       	$("#"+control + "-example").addClass(term);
     });
});


$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();

	// Assign active class to nav links while scolling
	$('.main__content > section').each(function(i) {

		if ($(this).position().top <= scrollDistance) {

			var heading = $(this).find('h2').html();

			$('.AnyVan-iframe-wrapper .AnyVan-sidebar__nav a.active').removeClass('active');
			$('.AnyVan-iframe-wrapper .AnyVan-sidebar__nav a').eq(i).addClass('active');

			$("#current-section").text(heading);
		}
	});
}).scroll();