$(document).ready(function () {
	var nav = $('#doc');
	var top = nav.offset().top;
	$(document).scroll(function () {
		if ($(this).scrollTop() > top) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}
	});
});
