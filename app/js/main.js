$(function () {
	//авто-закрытие мобильного меню
	$(".burger, .menu__item a").on("click", function () {
		$(".menu").toggleClass("menu--active"),
			$(".burger").toggleClass("burger--active");
	});

	$(".scroll").click(function (event) {
		console.log(11111);
		event.preventDefault();
		$("html").animate({ scrollTop: 0 }, 1500);
	});

	$(".menu a, header a").on("click", function (e) {
		e.preventDefault();
		const id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({ scrollTop: top }, 1500);
	});
});
