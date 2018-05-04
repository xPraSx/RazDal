$(document).ready(function() {

	


	var w = $(window).width(); // Получаем ширину окна
    if (w <= 970) { // Если ширина окна меньше, либо равна 600
		$(".owl-carousel").owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				768:{
					items:3
				}
			}
		});
    }
	
});