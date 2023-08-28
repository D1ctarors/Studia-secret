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