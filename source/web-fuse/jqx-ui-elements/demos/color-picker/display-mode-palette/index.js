window.onload = function () {
    const colorPanel = document.querySelector('jqx-color-picker');

    document.addEventListener('change', function (event) {
        const target = event.target;

        //Set new Grid Item size
        if (target.groupName === 'applyValueMode') {
            colorPanel.applyValueMode = event.target.innerHTML;
            return;
        }

        if (target.id.indexOf('hide') === 0) {
            colorPanel[target.id] = event.detail.value;
            return;
        }
    });
}