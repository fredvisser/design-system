window.onload = function () {
    const modal = document.getElementById('modal'),
        formWindow = document.getElementById('formWindow');

    function cancelHandler() {
        this.closest('jqx-window') === modal ? modal.close() : formWindow.close();
    }

    function agreeHandler() {
        if (this.closest('jqx-window') === modal) {
            formWindow.close();
            modal.close();
        }
        else {
            modal.open();
        }
    }

    document.getElementsByClassName('cancel')[0].addEventListener('click', cancelHandler);
    document.getElementsByClassName('cancel')[1].addEventListener('click', cancelHandler);

    document.getElementsByClassName('agree')[0].addEventListener('click', agreeHandler);
    document.getElementsByClassName('agree')[1].addEventListener('click', agreeHandler);

    document.getElementById('openButton').addEventListener('click', function () {
        formWindow.opened ? formWindow.close() : formWindow.open();
    });

    modal.getElementsByClassName('cancel')[0].innerHTML = 'No';
    modal.getElementsByClassName('agree')[0].innerHTML = 'Yes';
}