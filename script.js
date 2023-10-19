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

// This for loop is for the grid's first row which has various columns from A to Z.
for(let i = 0; i < cols; i++) {
  let addressRow = document.createElement("div"); // it will create a new div for every new row no. added
  addressRow.setAttribute("class", "address-row"); // this line will work as class name which will add styling i.e the border to the row nums.
  addressRow.innerText = String.fromCharCode(65 + i); // The String.fromCharCode() method converts Unicode values to characters. So here Unicode value which starts from 1 so character 1st is A so, we have defined (65 + i) so that in each new column box it increments to next character, like 65 + 0 = 65, so A then i++ so now i = 1, so 65 + 1 = 66, so we have B, so this goes on upto 26th character i.e Z.
  addressRowCont.appendChild(addressRow);
}