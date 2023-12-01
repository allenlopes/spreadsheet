for (let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++){
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur", (e) => { // I have took the 'blur' eventlistener, there are two event listener of this kind, one is 'blur' and another is 'focused'(If more info. is required, google it)
             let address = addressBar.value; // Whenever we click on different cell, it will take the value inside address of the cell which we were on before clicking on to different cell.
             let [activeCell, cellProp] = getCellAndCellProp(address); // After getting the address, we will access he object inside the cell.
             let enteredData = activeCell.innerText; // whatever the modified data is done by user, we take it in 'enteredData'.

             cellProp.value = enteredData; // cell ki object mai value store hogi jo bhi ham cell mai dalenge
             // console.log(cellProp);
        })
    }
}


let formulaBar = document.querySelector(".formula-bar"); // formula-bar access from index.html

formulaBar.addEventListener("keydown", (e) => {
    let inputFormula = formulaBar.value;
    if(e.key === "Enter" && inputFormula) {


        // If change in formula, break old Parent Child Relation, evaluate new formula, add new Parent Child Relation.
        let address = addressBar.value;
        let [cell, cellProp] = getCellAndCellProp(address);
        if (inputFormula !== cellProp.formula) removeChildFromParent(cellProp.formula);

        let evaluatedValue = evaluateFormula(inputFormula);

        // To Update UI and cellProp in DB
        setCellUIAndCellProp(evaluatedValue, inputFormula);
        addChildToParent(inputFormula); // Parent cell ki relationship
        // console.log(sheetDB);
    }
})


function addChildToParent(formula) {
    let childAddress = addressBar.value;
    let encodedFormula = formula.split(" "); // formula must be space seperated
    for (let i = 0; i < encodedFormula.length; i++){
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if (asciiValue >= 65 && asciiValue <= 90){
            let [parentCell, parentCellProp] = getCellAndCellProp(encodedFormula[i]);
            parentCellProp.children.push(childAddress);
        }
    }
}

function removeChildFromParent(formula) {
    let childAddress = addressBar.value;
    let encodedFormula = formula.split(" "); // formula must be space seperated
    for (let i = 0; i < encodedFormula.length; i++){
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if (asciiValue >= 65 && asciiValue <= 90){
            let [parentCell, parentCellProp] = getCellAndCellProp(encodedFormula[i]);
            let idx = parentCellProp.children.indexOf(childAddress);
            parentCellProp.childAddress.splice(idx,);
        }
    }
}

function evaluateFormula(formula) {
    let encodedFormula = formula.split(" "); // formula must be space seperated
    for( let i = 0; i < encodedFormula.length; i++){
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if(asciiValue >= 65 && asciiValue <= 90){ // since ascii value start from 65 i.e at 65th position the character is A, and at 90th position the character is Z.
            let [cell, cellProp] = getCellAndCellProp(encodedFormula[i]);
            encodedFormula[i] = cellProp.value;
        }
    }
    let decodedFormula = encodedFormula.join(" ");
    return eval(decodedFormula);
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
