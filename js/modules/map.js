ymaps.ready(function () {
	var mapexMap = new ymaps.Map('mapexMap', {
		center: [53.89063752803102, 27.52623526574704], // центр карты
		zoom: 14, // масштаб 
		controls: ['zoomControl']
	}),


		myPlacemark = new ymaps.Placemark(
			[53.89063752803102, 27.52623526574704], // координаты маркера
			{ "iconContent": "", "balloonContentBody": "г. Минск, ул. Ваша улица, д. 22", "balloonContentHeader": "«Профремонт»" }, // контент маркера
			{
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'images/marker.png',
				// Размеры метки.
				iconImageSize: [30, 42],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-5, -38]
			});
	mapexMap.behaviors.disable('scrollZoom');
	mapexMap.geoObjects.add(myPlacemark);


});