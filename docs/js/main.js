$(function () {
	$(".fairy-tail__slider").slick({
		prevArrow:
			' <button type="button" class=" slick-btn slick-prev"><img src="./images/arows/arrow-prev.svg" alt="prewArrow"></button>',
		nextArrow:
			'<button type="button" class=" slick-btn slick-next"><img src="./images/arows/arrow-next.svg" alt="nextArrow"></button>',
		autoplay: true,
		fade: true,
		responsive: [
			{
				breakpoint: 601,
				settings: {
					arrows: false,
				},
			},
		],
	});

	$(".our-trip__slider").slick({
		prevArrow:
			' <button type="button" class=" slick-btn slick-prev"><img src="./images/arows/arrow-prev.svg" alt="prewArrow"></button>',
		nextArrow:
			'<button type="button" class=" slick-btn slick-next"><img src="./images/arows/arrow-next.svg" alt="nextArrow"></button>',
		autoplay: true,
		fade: true,
		responsive: [
			{
				breakpoint: 601,
				settings: {
					arrows: false,
				},
			},
		],
	});
});
