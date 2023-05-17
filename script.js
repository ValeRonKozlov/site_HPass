const burger = document.getElementById('burger');
const menu = document.querySelector('.nav__list');
const burgerClose = document.getElementById('burger-close');
const menuLinks = document.querySelectorAll('.nav__link');
const tel = document.querySelector('.nav__tel');
// открываем бургер
burger.addEventListener('click', () => {
	menu.classList.add('burger--active');
	burgerClose.classList.add('burger--active');
	tel.classList.add('burger--active');
	document.body.classList.add('stop-scroll');
})
// закрываем бургер
burgerClose.addEventListener('click', () => {
	menu.classList.remove('burger--active');
	burgerClose.classList.remove('burger--active');
	tel.classList.remove('burger--active');
	document.body.classList.remove('stop-scroll');
})
// по нажатию на ссылку закрываем бургер
menuLinks.forEach(function (el) {
	el.addEventListener('click', () => {
		menu.classList.remove('burger--active');
		burgerClose.classList.remove('burger--active');
		tel.classList.remove('burger--active');
		document.body.classList.remove('stop-scroll');
	})
})

    // карта
		ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.767803, 37.632233],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });
				var myPlacemark = new ymaps.Placemark([55.768998, 37.638988], {}, {
					iconLayout: 'default#image',
					iconImageHref: 'img/mappin.svg',
					iconImageSize: [12, 12],
					iconImageOffset: [],
				});
				// Размещение геообъекта на карте.
				myMap.geoObjects.add(myPlacemark);
    }

    // modal window
    const closeModal = document.getElementById('close-modal');
    const modal = document.getElementById('modal');
    const body = document.getElementById('contacts');
  
    closeModal.addEventListener('click', () => {
      modal.classList.add('modal--hidden');
    })

    body.addEventListener('mouseleave', (e) => {
      modal.classList.remove('modal--hidden');
    })
const search = document.getElementById('header-search');
const form = document.querySelector('.search-form');
const close = document.querySelector('.search-form__close');
const input = document.querySelector('.search-form__input')
// по клику на кнопку открываем строку поиска
search.addEventListener('click', () => {
	form.classList.add('search-form--active');
	search.classList.add('hidden');
})
// закрываем строку поиска
form.addEventListener('click', (e) => {
	e.preventDefault();
})
close.addEventListener('click', () => {
	form.classList.remove('search-form--active');
	search.classList.remove('hidden');
	input.value = ''
})

// красим бордер при вводе
input.addEventListener('input', () => {
	if(input.value !== '') {
		input.classList.add('input--active')
	} else {
		input.classList.remove('input--active')
	}
})
const validation = new window.JustValidate('#about-form',
  {
    errorLabelCssClass: 'is-label-invalid',
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

validation

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);

	// contacts 

	const validationContacts = new JustValidate('#contacts-form',
  {
    errorLabelCssClass: 'is-label-invalid',
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

validationContacts

  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
		{
			rule: 'customRegexp',
			value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
			errorMessage: 'Недопустимый формат',
		},
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsIm1hcHAuanMiLCJzZWFyY2hib3guanMiLCJ2YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XG5jb25zdCBidXJnZXJDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItY2xvc2UnKTtcbmNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKTtcbmNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX3RlbCcpO1xuLy8g0L7RgtC60YDRi9Cy0LDQtdC8INCx0YPRgNCz0LXRgFxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRtZW51LmNsYXNzTGlzdC5hZGQoJ2J1cmdlci0tYWN0aXZlJyk7XG5cdGJ1cmdlckNsb3NlLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci0tYWN0aXZlJyk7XG5cdHRlbC5jbGFzc0xpc3QuYWRkKCdidXJnZXItLWFjdGl2ZScpO1xuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG59KVxuLy8g0LfQsNC60YDRi9Cy0LDQtdC8INCx0YPRgNCz0LXRgFxuYnVyZ2VyQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLS1hY3RpdmUnKTtcblx0YnVyZ2VyQ2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLS1hY3RpdmUnKTtcblx0dGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci0tYWN0aXZlJyk7XG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbn0pXG4vLyDQv9C+INC90LDQttCw0YLQuNGOINC90LAg0YHRgdGL0LvQutGDINC30LDQutGA0YvQstCw0LXQvCDQsdGD0YDQs9C10YBcbm1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuXHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci0tYWN0aXZlJyk7XG5cdFx0YnVyZ2VyQ2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLS1hY3RpdmUnKTtcblx0XHR0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLS1hY3RpdmUnKTtcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsJyk7XG5cdH0pXG59KVxuIiwiICAgIC8vINC60LDRgNGC0LBcclxuXHRcdHltYXBzLnJlYWR5KGluaXQpO1xyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLRiy5cclxuICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Ysg0YbQtdC90YLRgNCwINC60LDRgNGC0YsuXHJcbiAgICAgICAgICAgIC8vINCf0L7RgNGP0LTQvtC6INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOOiDCq9GI0LjRgNC+0YLQsCwg0LTQvtC70LPQvtGC0LDCuy5cclxuICAgICAgICAgICAgLy8g0KfRgtC+0LHRiyDQvdC1INC+0L/RgNC10LTQtdC70Y/RgtGMINC60L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQutCw0YDRgtGLINCy0YDRg9GH0L3Rg9GOLFxyXG4gICAgICAgICAgICAvLyDQstC+0YHQv9C+0LvRjNC30YPQudGC0LXRgdGMINC40L3RgdGC0YDRg9C80LXQvdGC0L7QvCDQntC/0YDQtdC00LXQu9C10L3QuNC1INC60L7QvtGA0LTQuNC90LDRgi5cclxuICAgICAgICAgICAgY2VudGVyOiBbNTUuNzY3ODAzLCAzNy42MzIyMzNdLFxyXG4gICAgICAgICAgICAvLyDQo9GA0L7QstC10L3RjCDQvNCw0YHRiNGC0LDQsdC40YDQvtCy0LDQvdC40Y8uINCU0L7Qv9GD0YHRgtC40LzRi9C1INC30L3QsNGH0LXQvdC40Y86XHJcbiAgICAgICAgICAgIC8vINC+0YIgMCAo0LLQtdGB0Ywg0LzQuNGAKSDQtNC+IDE5LlxyXG4gICAgICAgICAgICB6b29tOiAxNVxyXG4gICAgICAgIH0pO1xyXG5cdFx0XHRcdHZhciBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc2ODk5OCwgMzcuNjM4OTg4XSwge30sIHtcclxuXHRcdFx0XHRcdGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuXHRcdFx0XHRcdGljb25JbWFnZUhyZWY6ICdpbWcvbWFwcGluLnN2ZycsXHJcblx0XHRcdFx0XHRpY29uSW1hZ2VTaXplOiBbMTIsIDEyXSxcclxuXHRcdFx0XHRcdGljb25JbWFnZU9mZnNldDogW10sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8g0KDQsNC30LzQtdGJ0LXQvdC40LUg0LPQtdC+0L7QsdGK0LXQutGC0LAg0L3QsCDQutCw0YDRgtC1LlxyXG5cdFx0XHRcdG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtb2RhbCB3aW5kb3dcclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtbW9kYWwnKTtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzJyk7XHJcbiAgXHJcbiAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0taGlkZGVuJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XHJcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1oaWRkZW4nKTtcclxuICAgIH0pIiwiY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1zZWFyY2gnKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpO1xyXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybV9fY2xvc2UnKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm1fX2lucHV0JylcclxuLy8g0L/QviDQutC70LjQutGDINC90LAg0LrQvdC+0L/QutGDINC+0YLQutGA0YvQstCw0LXQvCDRgdGC0YDQvtC60YMg0L/QvtC40YHQutCwXHJcbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRmb3JtLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1mb3JtLS1hY3RpdmUnKTtcclxuXHRzZWFyY2guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn0pXHJcbi8vINC30LDQutGA0YvQstCw0LXQvCDRgdGC0YDQvtC60YMg0L/QvtC40YHQutCwXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtZm9ybS0tYWN0aXZlJyk7XHJcblx0c2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdGlucHV0LnZhbHVlID0gJydcclxufSlcclxuXHJcbi8vINC60YDQsNGB0LjQvCDQsdC+0YDQtNC10YAg0L/RgNC4INCy0LLQvtC00LVcclxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblx0aWYoaW5wdXQudmFsdWUgIT09ICcnKSB7XHJcblx0XHRpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC0tYWN0aXZlJylcclxuXHR9IGVsc2Uge1xyXG5cdFx0aW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtLWFjdGl2ZScpXHJcblx0fVxyXG59KSIsImNvbnN0IHZhbGlkYXRpb24gPSBuZXcgd2luZG93Lkp1c3RWYWxpZGF0ZSgnI2Fib3V0LWZvcm0nLFxyXG4gIHtcclxuICAgIGVycm9yTGFiZWxDc3NDbGFzczogJ2lzLWxhYmVsLWludmFsaWQnLFxyXG4gICAgZm9jdXNJbnZhbGlkRmllbGQ6IHRydWUsXHJcbiAgICBsb2NrRm9ybTogdHJ1ZSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgfSxcclxuICB9LFxyXG4pO1xyXG5cclxudmFsaWRhdGlvblxyXG5cclxuICAuYWRkRmllbGQoJyNlbWFpbCcsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQvdC1INCy0LLQtdC70LggZS1tYWlsJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdlbWFpbCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcblx0Ly8gY29udGFjdHMgXHJcblxyXG5cdGNvbnN0IHZhbGlkYXRpb25Db250YWN0cyA9IG5ldyBKdXN0VmFsaWRhdGUoJyNjb250YWN0cy1mb3JtJyxcclxuICB7XHJcbiAgICBlcnJvckxhYmVsQ3NzQ2xhc3M6ICdpcy1sYWJlbC1pbnZhbGlkJyxcclxuICAgIGZvY3VzSW52YWxpZEZpZWxkOiB0cnVlLFxyXG4gICAgbG9ja0Zvcm06IHRydWUsXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgIH0sXHJcbiAgfSxcclxuKTtcclxuXHJcbnZhbGlkYXRpb25Db250YWN0c1xyXG5cclxuICAuYWRkRmllbGQoJyNuYW1lJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDQuNC80Y8nLFxyXG4gICAgfSxcclxuXHRcdHtcclxuXHRcdFx0cnVsZTogJ2N1c3RvbVJlZ2V4cCcsXHJcblx0XHRcdHZhbHVlOiAvXihb0JAt0K9dezF9W9CwLdGP0ZFdezEsMjN9fFtBLVpdezF9W2Etel17MSwyM30pJC8sXHJcblx0XHRcdGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG5cdFx0fSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDQuNC80Y8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21heExlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAzMCxcclxuICAgIH0sXHJcbiAgXSlcclxuXHJcbiAgLmFkZEZpZWxkKCcjZW1haWwnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CS0Ysg0L3QtSDQstCy0LXQu9C4IGUtbWFpbCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnZW1haWwnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiJdfQ==
