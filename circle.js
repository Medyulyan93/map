ymaps.ready(function(){
    //тут ваш код

ymaps.ready(hint);
ymaps.ready(circle);

var myMap = new ymaps.Map("map", {
            center: [45.035469, 38.975309],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });



//Рисуем метки на карте

function hint () {
    
    // Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
        HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
            "<b>{{ properties.object }}</b><br />" +
            "{{ properties.address }}" +
            "</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );

    var myPlacemark1 = new ymaps.Placemark([45.087746, 39.000888], {
        address: "Краснодар, ул. Московская д.111",
        object: "Центр современного искусства"
    }, {
        hintLayout: HintLayout
    });
var myPlacemark2 = new ymaps.Placemark([45.072802, 39.016150], {
        address: "Краснодар, ул. Российская д.288",
        object: "Центр современного искусства"
    }, {
        hintLayout: HintLayout
    });
var myPlacemark3 = new ymaps.Placemark([45.093314, 38.992686], {
        address: "Краснодар, ул. Автомобильная д.3",
        object: "Центр современного искусства"
    }, {
        hintLayout: HintLayout
    });
var myPlacemark4 = new ymaps.Placemark([45.050806, 39.019905], {
        address: "Краснодар, ул. Весенняя д.10",
        object: "Центр современного искусства"
    }, {
        hintLayout: HintLayout
    });
var myPlacemark5 = new ymaps.Placemark([45.013581, 39.063869], {
        address: "Краснодар, ул. Мочуги д.5 к.1",
        object: "Центр современного искусства"
    }, {
        hintLayout: HintLayout
    });

    myMap.geoObjects.add(myPlacemark1);
myMap.geoObjects.add(myPlacemark2);
myMap.geoObjects.add(myPlacemark3);
myMap.geoObjects.add(myPlacemark4);
myMap.geoObjects.add(myPlacemark5);
};

//Рисуем круги

function circle() {
    // Создаем карту.
    

    // Создаем круг.
    // Московская 111
    var myCircle1 = new ymaps.Circle([
        // Координаты центра круга.
        [45.087746, 39.000888],
        // Радиус круга в метрах.
        5000
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        //balloonContent: "Радиус круга - 5 км",
        // Содержимое хинта.
        hintContent: "Московская 111"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#733a9088",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 2
    });

    //адрес российская 288
     var myCircle2 = new ymaps.Circle([
        // Координаты центра круга.
        [45.072802, 39.016150],
        // Радиус круга в метрах.
        5000
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        //balloonContent: "Радиус круга - 5 км",
        // Содержимое хинта.
        hintContent: "российская 288"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#2a3cad88",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 2
    });

    //адрес Автомобильная 3
     var myCircle3 = new ymaps.Circle([
        // Координаты центра круга.
        [45.093314, 38.992686],
        // Радиус круга в метрах.
        5000
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        //balloonContent: "Радиус круга - 5 км",
        // Содержимое хинта.
        hintContent: "Автомобильная 3"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#2f567788",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 2
    });

    //адрес Весенняя 10
     var myCircle4 = new ymaps.Circle([
        // Координаты центра круга.
        [45.050806, 39.019905],
        // Радиус круга в метрах.
        5000
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        //balloonContent: "Радиус круга - 5 км",
        // Содержимое хинта.
        hintContent: "Весенняя 10"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#1be25c88",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 2
    });
    //адрес Мочуги 5.1
     var myCircle5 = new ymaps.Circle([
        // Координаты центра круга.
        [45.013581, 39.063869],
        // Радиус круга в метрах.
        5000
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        //balloonContent: "Радиус круга - 5 км",
        // Содержимое хинта.
        hintContent: "Мочуги 5/1"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#b5d41288",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 2
    });
    
    // Добавляем круг на карту.
    myMap.geoObjects.add(myCircle1);
    myMap.geoObjects.add(myCircle2);
    myMap.geoObjects.add(myCircle3);
    myMap.geoObjects.add(myCircle4);
    myMap.geoObjects.add(myCircle5);
};
});
