let generationCount = 0;

document.getElementById('clear').addEventListener('click', () => {
    clearGrid();
    renderGrid();
    generationCount = 0;
    updateGenerationCount(generationCount);
});

document.getElementById('randomize').addEventListener('click', () => {
    randomizeCells();
    renderGrid();
});

function startGame() {
    setInterval(() => {
        nextGeneration();
        renderGrid();
        
        // Check for live cells before incrementing the count
        if (hasAliveCells()) {
            generationCount++;
            updateGenerationCount(generationCount);
        }
    }, 500); // Update every half a second
}

// Function to check if there are any live cells in the grid
function hasAliveCells() {
    return grid.some(row => row.some(cell => cell)); // Check if any cell is true (alive)
}

startGame();
