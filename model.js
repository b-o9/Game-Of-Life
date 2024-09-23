let gridSize = 25;
let grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(false)); // Initialize a 2D array

function updateGridStyles() {
    const gridElement = document.getElementById('grid');
    gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 25px)`; 
    gridElement.style.gridTemplateRows = `repeat(${gridSize}, 25px)`; 
}

updateGridStyles();


function countNeighbors(x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue; // Skip the cell itself
            const newX = x + i;
            const newY = y + j;
            if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize && grid[newX][newY]) {
                count++;
            }
        }
    }
    return count;
}


function nextGeneration() {
    const newGrid = grid.map(arr => arr.slice());
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const neighbors = countNeighbors(x, y);
            if (grid[x][y]) {
                newGrid[x][y] = neighbors === 2 || neighbors === 3; // Live cell survival
            } else {
                newGrid[x][y] = neighbors === 3; // Dead cell revival
            }
        }
    }
    grid = newGrid;
}

function clearGrid() {
    grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(false));
}

function randomizeCells() {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            // Only change the cell if it's currently dead
            if (!grid[x][y]) {
                grid[x][y] = Math.random() < 0.2; // Set to alive with a 20% chance
            }
        }
    }
}
