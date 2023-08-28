
// Вставка портфолио карточек
function createPortfolioItem() {
	const dataPortfolioCardItem = [
		{
			lottieFile: './src/lottie/rabbit.json',
			title: 'Комфорт в салоне',
			subtitle: 'У нас удобный кабинет, комфортная обстановка, вкусный кофе и дружелюбный персонал',
		},
		{
			lottieFile: './src/lottie/clock.json',
			title: 'Качество превыше всего',
			subtitle: 'Переделываем работу, если вас не устроит результат',
		},
		{
			lottieFile: './src/lottie/emoji.json',
			title: 'Четкая работа',
			subtitle: 'Вы всегда получите ту, услугу, которую запланировали в нужное вам время. У нас всегда в наличии все косметические продукты для работы',
		},
		{
			lottieFile: './src/lottie/dollar.json',
			title: 'Прозрачные цены',
			subtitle: 'В нашей студии вам никогда не придется переплачивать. Стоимость зависит от категории мастера',
		},

		{
			lottieFile: './src/lottie/onlybest.json',
			title: 'Только лучшее',
			subtitle: 'Наши мастера работают только на качественных материалах премиум класса',
		},
		{
			lottieFile: './src/lottie/people.json',
			title: 'Каждому своё',
			subtitle: 'Индивидуальный подход к каждому клиенту',
		},
		{
			lottieFile: './src/lottie/services.json',
			title: 'Широкий спектр услуг',
			subtitle: 'Мы предлагаем разнообразные услуги, чтобы удовлетворить все ваши потребности - от классического образа до смелых и творческих решений',
		},
		{
			lottieFile: './src/lottie/experience.json',
			title: 'Профессиональный опыт',
			subtitle: 'Наши мастера следят за последними тенденциями и техниками, чтобы предоставлять вам самые современные и стильные услуги',
		},

	];

	let item = "";
	let projectsWrapper = document.getElementById("reasons-why-wrap");

	dataPortfolioCardItem.forEach((data, index) => {
		item += `
      <div class="col-lg-3 col-md-4 col-sm-6">
<div class="reasons-why__list">
	<div class="reasons-why__item reasons-why-item">
		<div class="reasons-why-item__image">
			<lottie-player src="${data.lottieFile}" background="transparent"
				speed="1" style="width: 200px; height: 200px;" loop
				autoplay></lottie-player>
		</div>
		<div class="reasons-why-item__title">${data.title}</div>
		<div class="reasons-why-item__subtitle">${data.subtitle}</div>
	</div>
</div>
							</div >
    `;
	});

	projectsWrapper.innerHTML = item; // Вставляем карточки в контейнер
}
createPortfolioItem();

// Вставка табов
function createTabsItems() {
	const data = [
		{
			tab1: [
				{
					title: 'Наращивание (1D или Классика)',
					text: 'Классическое наращивание ресниц – популярная процедура, при которой один искусственный волосок приклеивается к одному натуральному. Идеально для любителей натурального макияжа, повторяют естественный рост ресниц и подчеркивают их густоту.',
					time: '3 часа',
					image: './src/img/services/eyelashes/01.jpg',
					price: '1300',
					link: 'https://mst.link/kolesnikova_dina/times?cid=f8abddkbqn0pn1t0vm4ljvmmj1',
				},
				{
					title: 'Наращивание (2D)',
					text: 'Наращивание ресниц 2D – техника, позволяющая добиться максимально выразительного и соблазнительно яркого взгляда без ущерба естественности. Этот вариант обладает всеми достоинствами классики, но делает при этом реснички более густыми, объемными и пушистыми.',
					time: '3 часа',
					image: './src/img/services/eyelashes/02.jpg',
					price: '1600',
					link: 'https://mst.link/kolesnikova_dina/times?cid=f8abddkbqn0pn1t0vm4ljvmmj1',
				},
				// {
				// 	title: 'Экспресс-наращивание (2D, 3D)',
				// 	text: 'Экспресс-метод наращивания ресниц сегодня очень популярен. Услуга востребована и интересует современных девушек, которые ценят собственное свободное время.',
				// 	time: '1 час 30 минут',
				// 	image: './src/img/services/eyelashes/03.jpg',
				// 	price: '900',
				// 	link: 'https://mst.link/kolesnikova_dina/times?cid=f8abddkbqn0pn1t0vm4ljvmmj1',
				// },
				{
					title: 'Наращивание (3D)',
					text: 'Визуальным эффектом от этой процедуры является кардинальное изменение внешнего вида ресничек – придание роскошного объема, густоты и соблазнительного изгиба с сохранением естественности.',
					time: '3 часа',
					image: './src/img/services/eyelashes/04.jpg',
					price: '1800',
					link: 'https://mst.link/kolesnikova_dina/times?cid=f8abddkbqn0pn1t0vm4ljvmmj1',
				},
				{
					title: 'Снятие без наращивания',
					text: 'Если возникло желание изменить образ и отказаться от искусственного, но такого эффектного дополнения образа.',
					time: '20 минут',
					image: './src/img/services/eyelashes/05.jpg',
					price: '250',
					link: 'https://mst.link/kolesnikova_dina/times?cid=f8abddkbqn0pn1t0vm4ljvmmj1',
				},
				{
					title: 'Мокрый (эффект накрашенных тушью ресниц)',
					text: 'Этот стиль придает ресницам более яркий и глянцевый вид, что добавляет красоты и привлекательности взгляду. Мокрый эффект достигается за счет использования специальных материалов и техник нанесения, которые придают ресницам эффект недавно прошедшей намокания.',
					time: '3 часа',
					image: './src/img/services/eyelashes/06.jpg',
					price: '1550',
					link: 'https://mst.link/kolesnikova_dina/times?cid=f8abddkbqn0pn1t0vm4ljvmmj1',
				},

			]
		},
		{
			tab2: [
				{
					title: 'Аппаратный маникюр',
					text: 'Руки и ноги – это зеркало вашей заботы о себе. Наши опытные мастера сделают ваше касание нежным и ухоженным, используя передовые технологии и материалы.',
					time: '',
					image: './src/img/services/nails/01.jpg',
					price: '999',
					link: 'https://wa.link/lc88g9',
				},
				{
					title: 'Аппаратный педикюр',
					text: 'Руки и ноги – это зеркало вашей заботы о себе. Наши опытные мастера сделают ваше касание нежным и ухоженным, используя передовые технологии и материалы.',
					time: '',
					image: './src/img/services/nails/09.jpg',
					price: '999',
					link: 'https://wa.link/lc88g9',
				},
				{
					title: 'Установка титановой нити',
					text: 'Позвольте вашим ногтям заговорить. Мы используем титановую нить, чтобы придать вашим ногтям изысканность и элегантность. Наши специалисты уверенно создадут утонченные контуры, подчеркивая вашу естественную красоту.',
					time: '',
					image: './src/img/services/nails/03.jpg',
					price: '-',
					link: 'https://wa.link/lc88g9',
				},
				{
					title: 'Удаление вросшего ногтя',
					text: 'Забудьте о боли и дискомфорте. Мы освободим вас от неприятных проблем, восстановим комфорт и уверенность в каждом вашем шаге.',
					time: '',
					image: './src/img/services/nails/04.jpg',
					price: '-',
					link: 'https://wa.link/lc88g9',
				},
				{
					title: 'Удаление шипицы',
					text: 'Забудьте о боли и дискомфорте. Мы освободим вас от неприятных проблем, восстановим комфорт и уверенность в каждом вашем шаге.',
					time: '',
					image: './src/img/services/nails/05.jpg',
					price: '-',
					link: 'https://wa.link/lc88g9',
				},
				{
					title: 'Протезирование',
					text: 'Если вашим ногтям нужна поддержка и восстановление, мы предлагаем уникальное решение. Наши мастера создадут протезы, которые не только вернут вашим ногтям прежний вид, но и добавят им изысканности и шарма.',
					time: '',
					image: './src/img/services/nails/06.jpg',
					price: '-',
					link: 'https://wa.link/lc88g9',
				},
				{
					title: 'Покрытие гель лаком',
					text: 'Гель-лак не только придает ногтям изысканный вид, но и обеспечивает долговременное покрытие без сколов и выцветания. Ваши руки будут словно ювелирными произведениями искусства, всегда готовыми украсить каждый ваш жест.',
					time: '',
					image: './src/img/services/nails/07.jpg',
					price: '-',
					link: 'https://wa.link/lc88g9',
				},
				{
					title: 'Обработка стопы, натоптышей, трещин, гиперкератоза, мозолей',
					text: 'Вашим ногам также необходима забота и внимание, и именно этим мы занимаемся с особым вдохновением и профессионализмом. Мы эффективно справимся с натоптышами, трещинами и гиперкератозом, восстановив мягкость и гладкость вашей кожи.',
					time: '',
					image: './src/img/services/nails/08.jpg',
					price: '-',
					link: 'https://wa.link/lc88g9',
				},

			]
		},
	];

	let progressWrap = null;

	// Функция для создания элементов DOM и вставки данных
	function createServiceCard(tabId, data) {
		let item = ''; // Объявление переменной item внутри функции

		progressWrap = document.getElementById(tabId + '-wrap');
		progressWrap.innerHTML = '';

		data.forEach(function (dataItem) {
			item += `
      <div class="col-xl-6 col-lg-12 service-item">
										<div class="service-item__image"><img src="${dataItem.image}"
												alt=""></div>
										<div class="service-item__content">
											<div class="service-item__title">${dataItem.title}</div>
											<div class="service-item__text">${dataItem.text}</div>
											<div class="service-item__info">
												<div class="service-item__time">${dataItem.time}</div>
												<div class="service-item__price">${dataItem.price} ₽</div>
											</div>
											<a class="prm-btn nav-btn" href="${dataItem.link}" download="Resume" target="_blank">Хочу
												такие</a>
										</div>
									</div>
    `;
		});

		progressWrap.insertAdjacentHTML('afterbegin', item);
	}

	// Вызов функции для каждого таба
	createServiceCard('eyelashes', data[0].tab1);
	createServiceCard('nails', data[1].tab2);
}
createTabsItems();