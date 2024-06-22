$(function () {
  $(document).scroll(function () {
	  var $nav = $(".head");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});