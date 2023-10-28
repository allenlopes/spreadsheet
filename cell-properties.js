/* ################ This cell-properties.js file is just for the cell properties javascript ################# */

// Storage
let sheetDB = [];


for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for(let j = 0; j < cols; j++){
        let cellProp = {

        }
        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}