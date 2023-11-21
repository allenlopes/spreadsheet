for (let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++){
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur", (e) => { // I have took the 'blur' eventlistener, there are two event listener of this kind, one is 'blur' and another is 'focused'(If more info. is required, google it)
             let address = addressBar.value; // Whenever we click on different cell, it will take the value inside address of the cell which we were on before clicking on to different cell.
             let [activeCell, cellProp] = activecell(address); // After getting the address, we will access he object inside the cell.
             let enteredData = activeCell.innerText; // whatever the modified data is done by user, we take it in 'enteredData'.

             cellProp.value = enteredData; // cell ki object mai value store hogi jo bhi ham cell mai dalenge
             // console.log(cellProp);
        })
    }
}


let formulaBar = document.querySelector(".formula-bar"); // formula-bar access from index.html

formulaBar.addEventListener("keydown", (e) => {
        let inputFormula = formula.value;
    if(e.key === "Enter" && inputFormula) {
        let evaluatedValue = evaluateFormula(inputFormula);

        // To Update UI and cellProp in DB
        setCellUIAndCellProp(evaluatedValue, inputFormula);
    }
})

function evaluateFormula(formula) {
    return eval(formula);
}

function setCellUIAndCellProp(evaluatedValue, formula) {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    // UI Update
    cell.innerText= evaluatedValue;
    // DB Update
    cellProp.value = evaluatedValue;
    cellProp.formula = formula;
}