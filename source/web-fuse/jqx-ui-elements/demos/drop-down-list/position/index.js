window.onload = function () {
    document.querySelector('jqx-drop-down-list').dataSource =
        [
            "Affogato",
            "Americano",
            "Bicerin",
            "Breve",
            "Café Bombón",
            "Café au lait",
            "Caffé Corretto",
            "Café Crema",
            "Caffé Latte",
            "Caffé macchiato",
            "Café mélange",
            "Coffee milk",
            "Cafe mocha",
            "Cappuccino",
            "Carajillo",
            "Cortado",
            "Cuban espresso",
            "Espresso",
            "Eiskaffee",
            "The Flat White",
            "Frappuccino",
            "Galao",
            "Greek frappé coffee",
            "Alabala",
            "Indian filter coffee",
            "Instant coffee",
            "Irish coffee",
            "Liqueur coffee"
        ];

    document.getElementsByTagName('jqx-radio-button')[0].addEventListener('change', function () {
        document.querySelector('jqx-drop-down-list').dropDownPosition = 'auto';
    });

    document.getElementsByTagName('jqx-radio-button')[1].addEventListener('change', function () {
        document.querySelector('jqx-drop-down-list').dropDownPosition = 'bottom';
    });

    document.getElementsByTagName('jqx-radio-button')[2].addEventListener('change', function () {
        document.querySelector('jqx-drop-down-list').dropDownPosition = 'overlay-bottom';
    });

    document.getElementsByTagName('jqx-radio-button')[3].addEventListener('change', function () {
        document.querySelector('jqx-drop-down-list').dropDownPosition = 'overlay-center';
    });

    document.getElementsByTagName('jqx-radio-button')[4].addEventListener('change', function () {
        document.querySelector('jqx-drop-down-list').dropDownPosition = 'overlay-top';
    });

    document.getElementsByTagName('jqx-radio-button')[5].addEventListener('change', function () {
        document.querySelector('jqx-drop-down-list').dropDownPosition = 'top';
    });

    document.getElementsByTagName('jqx-radio-button')[6].addEventListener('change', function () {
        document.querySelector('jqx-drop-down-list').dropDownPosition = 'center-bottom';
    });

    document.getElementsByTagName('jqx-radio-button')[7].addEventListener('change', function () {
        document.querySelector('jqx-drop-down-list').dropDownPosition = 'center-top';
    });
}