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
        visited.push(visitedRow);
        dfsVisited.push(dfsVisitedRow);
    }

    for (let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let response = dfsCycleDetection(graphComponentMatrix, i, j, visited, dfsVisited);
            if ( response == true) return true; // Found cycle so return immediately, no need to explore more path.
        }
    }

    return false;
}


// Start -> visited(True) then, dfsVisited(True)
// End -> dfsVisited(False)
// If visited[i][j] -> True, i.e already explored path, then go back, since no use to explore again
// Cycle Detection condition -> if (visited[i][j] == true && dfsVisited[i][j] == true) -> cycle
// Return -> True/False
// True -> Cyclic, False -> Not Cyclic
function dfsCycleDetection(graphComponentMatrix, srcr, srcc, visited, dfsVisited) { // srcr -> source row, srcc -> source column
    visited[srcr][srcc] = true;
    dfsVisited[srcr][srcc] = true;

    // A1 -> [ [0, 1], [1, 0], [5, 10], ..... ]
    for (let children = 0; children < graphComponentMatrix[srcr][srcc].length; children++) {
        let [nbrr, nbrc] = graphComponentMatrix[srcr][srcc][children]; // nbrr -> neighbour row, nbrc -> neighbour column

        if (visited[nbrr][nbrc] === false) {
            let response = dfsCycleDetection(graphComponentMatrix, nbrr, nbrc, visited, dfsVisited);
            if (response === true) return true; // Found cycle so return immediately, no need to explore more path.
        }

        else if (visited[nbrr][nbrc] === true && dfsVisited[nbrr][nbrc] === true) {
          // Found cycle so return immediately, no need to explore more path.
          return true;
        }
    }

    dfsVisited[srcr][srcc] = false;
    return false;
}