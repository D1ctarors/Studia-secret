// // Скрытие шапки при скролле
// const header = document.querySelector('.header');
// let body = document.querySelector('body');
// // let prevScrollPos = body.scrollTop;
// const modal = document.querySelector('.modal');


// (function ($) {
// 	// получаем доступ к элементу слайдера на странице
// 	var $dragMe = $(".dragme"),
// 		// к слайдеру
// 		$container = $(".sl-container"),
// 		// и картинке слева
// 		$viewAfter = $(".view-after");
// 	// используем свойство draggable из библиотеки с интерфейсом, чтобы получить координаты сдвига слайдера
// 	$dragMe.draggable({
// 		containment: "parent",
// 		drag: function () {
// 			// при перемещении слайдера меняем ширину картинки слева в стилях
// 			$viewAfter.css({
// 				width: parseFloat($(this).css('left')) + 5
// 			});
// 		}
// 	});
// 	// добавляем реакцию на клик по картинке
// 	$container.on("click", function (event) {
// 		// получаем координаты клика, чтобы сместить туда слайдер
// 		var eventLeft = event.pageX - $container.offset().left - 15;
// 		// плавно сдвигаем слайдер
// 		animateTo(eventLeft);
// 	});
// 	// функция сдвига слайдера при клике, на входе получаем новые координаты границы картинок
// 	function animateTo(_left) {
// 		// анимируем сдвиг слайдера
// 		$dragMe.animate({
// 			left: _left
// 		}, 'slow', 'linear');
// 		// и картинки
// 		$viewAfter.animate({
// 			width: _left
// 		}, 'slow', 'linear');
// 	}
// })(jQuery);

// slider = new juxtapose.JXSlider('#foo',
	
// 	{
// 		animate: true,
// 		showLabels: true,
// 		showCredits: true,
// 		startingPosition: "50%",
// 		makeResponsive: true
// 	});

// function SwitcherTheme() {
// 	const btn = document.querySelector(".btn-toggle-theme");
// 	const currentTheme = localStorage.getItem("theme");

// 	if (currentTheme === "dark") {
// 		document.body.classList.add("light-theme");
// 		btn.innerHTML = '<i class="fa-solid fa-moon"></i>';

// 	} else {
// 		btn.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
// 	}

// 	btn.addEventListener("click", function () {
// 		document.body.classList.toggle("light-theme");
// 		let theme = "light";

// 		if (document.body.classList.contains("light-theme")) {
// 			theme = "dark";
// 			btn.innerHTML = '<i class="fa-solid fa-moon"></i>';

// 		} else {
// 			btn.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
// 		}

// 		localStorage.setItem("theme", theme);
// 	});
// }

// SwitcherTheme();




// // Скрытие шапки при скролле
// let prevScrollPos = document.body.scrollTop || document.documentElement.scrollTop;
// function handleScroll() {
// 	const currentScrollPos = document.body.scrollTop || document.documentElement.scrollTop;
// 	if (modal.classList.contains('show')) {
// 		// Если модальное окно открыто, добавляем класс header_hidden
// 		header.classList.add('header_hidden');
// 	} else if (prevScrollPos > currentScrollPos) {
// 		// Если скроллируем вверх и модальное окно закрыто, удаляем класс header_hidden
// 		header.classList.remove('header_hidden');
// 	} else {
// 		// Если скроллируем вниз и модальное окно закрыто, добавляем класс header_hidden
// 		header.classList.add('header_hidden');
// 	}

// 	prevScrollPos = currentScrollPos;
// }

// body.addEventListener('scroll', handleScroll);



// // Паралакс
// document.addEventListener("mousemove", parallax);
// function parallax(event) {
// 	this.querySelectorAll(".parallax-wrap li").forEach((shift) => {
// 		const position = shift.getAttribute("value");
// 		const x = (window.innerWidth - event.pageX * position) / 90;
// 		const y = (window.innerHeight - event.pageY * position) / 90;

// 		shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
// 	});
// }

// Плавный скролл
function scrollTo() {
	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');

			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	};
}
scrollTo();

// // работа фильтров портфолио
// function WorkFilter() {
// 	$('.filter__item').click(function (event) {
// 		let dataFilter = $(this).data('filter');
// 		if (dataFilter == 'all') {
// 			$('.portfolio__card').show();
// 		} else {
// 			$('.portfolio__card').hide();
// 			$('.portfolio__card.f_' + dataFilter).show();
// 		}
// 		$('.filter__item').removeClass('active');
// 		$(this).addClass('active');

// 		// Получаем количество оставшихся карточек после фильтрации
// 		const filteredCardsCount = $('.portfolio__card:visible').length;

// 		// Проверяем, осталось ли меньше 4х карточек
// 		if (filteredCardsCount < 4) {
// 			// Изменяем размеры карточек на маленькие
// 			$('.grid .wide').removeClass('wide').addClass('no-width');
// 			$('.grid .tall').removeClass('tall').addClass('no-height');
// 			$('.grid .big').removeClass('big').addClass('no-width no-height');
// 		} else {
// 			// Возвращаем обычные размеры карточек
// 			$('.grid .no-width').removeClass('no-width').addClass('wide');
// 			$('.grid .no-height').removeClass('no-height').addClass('tall');
// 			$('.grid .no-width.no-height').removeClass('no-width no-height').addClass('big');
// 		}

// 		return false;
// 	});
// }
// WorkFilter();

// добавление active - НАВИГАЦИЯ
function giveActiveForNavigation() {
	document.addEventListener("DOMContentLoaded", function () {
		const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

		navLinks.forEach(function (link) {
			link.addEventListener("click", function (event) {
				event.preventDefault();

				// Удалить класс "active" у всех ссылок
				navLinks.forEach(function (navLink) {
					navLink.classList.remove("active");
				});

				// Добавить класс "active" к текущей ссылке
				link.classList.add("active");

				// Прокрутить до якорной ссылки
				const target = document.querySelector(link.getAttribute("href"));
				target.scrollIntoView({ behavior: "smooth" });
			});
		});
	});
}
giveActiveForNavigation();

// Табы скилов
class ItcTabs {
	constructor(target, config) {
		const defaultConfig = {};
		this._config = Object.assign(defaultConfig, config);
		this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
		this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
		this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
		this._eventShow = new Event('tab.itc.change');
		this._init();
		this._events();
	}
	_init() {
		this._elTabs.setAttribute('role', 'tablist');
		this._elButtons.forEach((el, index) => {
			el.dataset.index = index;
			el.setAttribute('role', 'tab');
			this._elPanes[index].setAttribute('role', 'tabpanel');
		});
	}
	show(elLinkTarget) {
		const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
		const elLinkActive = this._elTabs.querySelector('.tabs__btn-active');
		const elPaneShow = this._elTabs.querySelector('.tabs__pane-show');
		if (elLinkTarget === elLinkActive) {
			return;
		}
		elLinkActive ? elLinkActive.classList.remove('tabs__btn-active') : null;
		elPaneShow ? elPaneShow.classList.remove('tabs__pane-show') : null;
		elLinkTarget.classList.add('tabs__btn-active');
		elPaneTarget.classList.add('tabs__pane-show');
		this._elTabs.dispatchEvent(this._eventShow);
		elLinkTarget.focus();
	}
	showByIndex(index) {
		const elLinkTarget = this._elButtons[index];
		elLinkTarget ? this.show(elLinkTarget) : null;
	};
	_events() {
		this._elTabs.addEventListener('click', (e) => {
			const target = e.target.closest('.tabs__btn');
			if (target) {
				e.preventDefault();
				this.show(target);
			}
		});
	}
}
new ItcTabs('.tabs');



