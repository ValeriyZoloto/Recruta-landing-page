$(function () {
	//авто-закрытие мобильного меню
	$(".burger, .menu__item a").on("click", function () {
		$(".menu").toggleClass("menu--active"),
			$(".burger").toggleClass("burger--active");
	});
});
