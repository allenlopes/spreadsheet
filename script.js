let rows = 100;
let cols = 26; // there are total 26 alphabets


// for column numbers ->
let addressColCont = document.querySelector(".address-col-cont");

// for row container alphabets ->
let addressRowCont = document.querySelector(".address-row-cont");

for (let i = 0; i < rows; i++) { // here we have set i = 0, 0 < 100,
    let addressCol = document.createElement("div"); // it will create a new div for every new row no. added
    addressCol.setAttribute("class", "address-col"); // this line will work as class name which will add styling i.e the border to the row nums.
    addressCol.innerText = i+1; // since i= 0, it will start from i+1 i.e 0+1 which is 1
    addressColCont.appendChild(addressCol);
}

for(let i = 0; i < cols; i++) {
    let addressRow = document.createElement("div"); // it will create a new div for every new row no. added
    addressRow.setAttribute("class", "address-row"); // this line will work as class name which will add styling i.e the border to the row nums.
    addressRow.innerText = i + 1; // since i= 0, it will start from i+1 i.e 0+1 which is 1
    addressRowCont.appendChild(addressRow);
}