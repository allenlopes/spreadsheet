for (let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++){
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener('blur', (e) => { // I have took the 'blur' eventlistener, there are two event listener of this kind, one is 'blur' and another is 'focused'(If more info. is required, google it)
             let address = addressBar.value; // Whenever we click on different cell, it will take the value inside address of the cell which we were on before clicking on to different cell.
             let [activecell, cellProp] = activecell(address); // After getting the address, we will access he object inside the cell.
             let enteredData = activecell.innerText; // whatever the modified data is done by user, we take it in 'enteredData'.

             cellProp.value = enteredData; // cell ki object mai value store hogi jo bhi ham cell mai dalenge
             console.log(cellProp);
        })
    }
}