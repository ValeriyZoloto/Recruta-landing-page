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

	$(".header__btn").on("click", function () {
		$(".form").addClass("form--active");
	});

	$(".header__tel-img").on("click", function () {
		console.log("клик по кнопке");
		$(".form").addClass("form--active");
	});

	$(".form__close").on("click", function () {
		$(".form").removeClass("form--active");
	});
});
