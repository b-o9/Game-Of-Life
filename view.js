function renderGrid() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = ''; // Clear previous grid

    grid.forEach((row, x) => {
        row.forEach((cell, y) => {
            const div = document.createElement('div');
            div.className = 'cell' + (cell ? ' alive' : '');
            div.dataset.x = x;
            div.dataset.y = y;
            gridElement.appendChild(div);
        });
    });
}

function updateGenerationCount(count) {
    document.getElementById('generationCount').textContent = `Generations: ${count}`;
}
