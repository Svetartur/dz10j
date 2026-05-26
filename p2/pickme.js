const addBlockBtn = document.getElementById('add-block-btn');
const blocksContainer = document.getElementById('blocks-container');

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', '#33FFF0', '#FFAF33'];
    return colors[Math.floor(Math.random() * colors.length)];
}

addBlockBtn.addEventListener('click', function() {
    const newBlock = document.createElement('div');
    newBlock.className = 'color-block';
    newBlock.style.backgroundColor = getRandomColor();

    newBlock.addEventListener('click', function() {
        newBlock.remove();
    });

    blocksContainer.append(newBlock);
});