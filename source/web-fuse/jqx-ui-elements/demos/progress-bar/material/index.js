window.onload = function () {
    let hoverArea = document.getElementById('hover-area'),
        linearProgressBar1 = document.getElementsByClassName('determinate')[0],
        linearProgressBar2 = document.getElementsByClassName('determinate')[1],
        linearProgressBar3 = document.getElementsByClassName('determinate')[2],
        circularProgressBar1 = document.getElementsByClassName('determinate')[3],
        circularProgressBar2 = document.getElementsByClassName('determinate')[4],
        mouseHoverArea = document.getElementsByClassName('page-refresh-progress')[0],
        uploadButton = document.getElementById('toggleUploadButton'),
        value, isPaused;

    mouseHoverArea.addEventListener('mouseenter', function () {
        document.getElementById('refreshing').$.removeClass('smart-visibility-hidden');
    });

    mouseHoverArea.addEventListener('mouseleave', function () {
        document.getElementById('refreshing').$.addClass('smart-visibility-hidden');
    });

    uploadButton.addEventListener('change', function (event) {
        const circularProgressBar1 = document.getElementsByClassName('uploading')[0];

        if (uploadButton.disabled || (circularProgressBar1.value > 0 && circularProgressBar1.value < circularProgressBar1.max)) {
            return;
        }

        if (event.detail.value) {
            circularProgressBar1.readonly = true;
            circularProgressBar1.$.addClass('start');
            circularProgressBar1.$.addClass('animation');
            let uploading = setInterval(function () {
                circularProgressBar1.value += 25;

                if (circularProgressBar1.value > circularProgressBar1.max) {
                    clearInterval(uploading);
                    circularProgressBar1.$.addClass('finish');
                    circularProgressBar1.$.removeClass('animation');
                    circularProgressBar1.$.removeClass('start');

                    setTimeout(function () {
                        uploadButton.$.button.style.backgroundColor = '#F47B12';
                        uploadButton.$.button.innerHTML = '<i class="material-icons">done</i>';
                        circularProgressBar1.readonly = false;
                        circularProgressBar1.$.removeClass('finish');
                    }, 250);
                }
            }, 750);
        }
        else {
            circularProgressBar1.value = circularProgressBar1.min;
            uploadButton.$.button.style.backgroundColor = '';
            uploadButton.$.button.innerHTML = '<i class="material-icons">cloud_upload</i>';
        }
    });

    setInterval(function () {
        if (isPaused) {
            return;
        }

        value = Math.random() * 15;
        linearProgressBar1.value += value;
        linearProgressBar2.value += value;
        circularProgressBar1.value += value;
        circularProgressBar2.value += value;

        if (linearProgressBar1.value >= linearProgressBar1.max) {
            isPaused = true;
            linearProgressBar1.$.addClass('finished');
            linearProgressBar1.$.removeClass('animation');
            linearProgressBar2.$.addClass('finished');
            linearProgressBar2.$.removeClass('animation');
            circularProgressBar1.$.addClass('finished');
            circularProgressBar1.$.removeClass('animation');
            circularProgressBar2.$.addClass('finished');
            circularProgressBar2.$.removeClass('animation');

            setTimeout(function () {
                linearProgressBar1.value = linearProgressBar1.min;
                linearProgressBar2.value = linearProgressBar2.min;
                circularProgressBar1.value = circularProgressBar1.min;
                circularProgressBar2.value = circularProgressBar2.min;
                linearProgressBar1.$.removeClass('finished');
                linearProgressBar1.$.addClass('animation');
                linearProgressBar2.$.removeClass('finished');
                linearProgressBar2.$.addClass('animation');
                circularProgressBar1.$.removeClass('finished');
                circularProgressBar1.$.addClass('animation');
                circularProgressBar2.$.removeClass('finished');
                circularProgressBar2.$.addClass('animation');
                isPaused = false;
            }, 1500);
        }
    }, 500);
}