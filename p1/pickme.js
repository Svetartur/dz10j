const counterInput = document.getElementById('counter-input');
const btnDecrease = document.getElementById('btn-decrease');
const btnIncrease = document.getElementById('btn-increase');

btnDecrease.addEventListener('click', function() {
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue - 1;
});

btnIncrease.addEventListener('click', function() {
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue + 1;
});