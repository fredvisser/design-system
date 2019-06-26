window.onload = function () {
    const menu = document.getElementById('menu');

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    document.addEventListener('mouseup', function (event) {
        if (event.which === 3 && !menu.contains(event.target)) {
            menu.open(event.pageX, event.pageY);
        }
    });
}