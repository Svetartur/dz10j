const textBlock = document.getElementById('text-block');
const cells = document.querySelectorAll('.palette-cell');

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        const selectedColor = this.getAttribute('data-color');
        textBlock.style.color = selectedColor;
    });
});