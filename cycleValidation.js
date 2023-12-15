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
function isGraphCyclic(graphComponentMatrix) {
    // Dependency -> Visited, dfsVisited (2D array)
    let visited = []; // Node Visited trace
    let dfsVisited = []; // Stack visited trace

    for(let i = 0; i < rows; i++) {
        let visitedRow = [];
        let dfsVisitedRow = [];
        for(let j = 0; j < cols; j++){
            visitedRow.push(false);
            dfsVisited.push(false);
        }
    }

    for (let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            dfsCycleDetection(graphComponentMatrix, i, j, visited, dfsVisited);
        }
    }
}


// Start -> visited(True) then, dfsVisited(True)
// End -> dfsVisited(False)
// If visited[i][j] -> True, i.e already explored path, then go back, since no use to explore again
// Cycle Detection condition -> if (visited[i][j] == true && dfsVisited[i][j] == true) -> cycle
function dfsCycleDetection(graphComponentMatrix, srcr, srcc, visited, dfsVisited) { // srcr -> source row, srcc -> source column
    visited[srcr][srcc] = true;
    dfsVisited[srcr][srcc] = true;

    dfsVisited[srcr][srcc] = false;
}