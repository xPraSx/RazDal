$(document).ready(function() {

	$('.ads-slider').slick({
		centerMode: true,
		slidesToShow: 2,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				centerMode: false,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 1
			  }
			}
		  ]
	});
});