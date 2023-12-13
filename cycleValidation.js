// Storage -> 2D array (Basic needed)
let graphComponentMatrix = [];

for (let i = 0; i < rows; i++){
    let row = [];
    for(let j = 0; j < cols; j++){
        // Why array? ->More than 1 child relation(dependency)
        row.push([]);
    }
    graphComponentMatrix.push(row);
}

// True -> Cyclic, False -> Not Cyclic
function isGraphCyclic() {
    // Dependency -> Visited, dfsVisited (2D array)
    let visited = [];
    let dfsVisited = [];

    for(let i = 0; i < rows; i++) {
        let visitedRow = [];
        let dfsVisitedRow = [];
        for(let j = 0; j < cols; j++){
            visitedRow.push(false);
            dfsVisited.push(false);
        }
    }


}