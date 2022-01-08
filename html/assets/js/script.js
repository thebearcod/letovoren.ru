ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [51.834, 55.165],
            zoom: 15.5
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [51.833874, 55.166467]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'LETOVOREN',
                hintContent: 'Запишись и будь неотразимой!'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });
        myMap.geoObjects.add(myGeoObject);
		// 	document.getElementById('destroyButton').onclick = function () {
		// 	 // Для уничтожения используется метод destroy.
		// 	 myMap.destroy();
	 // };
};
