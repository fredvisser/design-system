window.onload = function () {
    const cpuTank = document.getElementById('cpuTank'),
        batteryTank = document.getElementById('powerSaverTank');

    function setTemperature() {
        let color = '#0C9F59';

        if (this.value === '0') {
            color = '';
        }
        else if (this.value < this.max * 0.25) {
            color = '#DB4534';
        }
        else if (this.value > this.max * 0.2 && this.value < this.max * 0.70) {
            color = '#FFEB3B';
        }

        this.getElementsByClassName('jqx-thumb')[0].style.backgroundColor = this.getElementsByClassName('jqx-value')[0].style.backgroundColor = color;
        document.getElementById('powerSaver').innerHTML = this.value;
    }

    cpuTank.labelFormatFunction = ((label) => { return label + '%' });

    powerSaverTank.addEventListener('change', setTemperature);

    const cpu = document.getElementById('cpu');

    setInterval(function () {
        cpuTank.value = Math.random() * 100;
        cpu.textContent = cpuTank.value;
    }, 1500);
}