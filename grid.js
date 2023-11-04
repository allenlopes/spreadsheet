/* ################ This grid.js file is just for the grid's javascript ################# */

let rows = 100;
let cols = 26; // there are total 26 alphabets


// for column numbers ->
let addressColCont = document.querySelector(".address-col-cont");


// for row container alphabets ->
let addressRowCont = document.querySelector(".address-row-cont");


// for the grid's inside cells ->
let cellsCont = document.querySelector(".cells-cont");

// for displaying into the address bar which cell is selected currently, like C1, F12, B36, etc..
let addressBar = document.querySelector(".address-bar");


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


// This nested for loop is for the grid's inside cells, in which we are going to type the values.
/* Here first what happens is, for i's 1st iteration of for loop row is created, like suppose for row no. 1 which will have 1 to 26 cells,
and then it goes to j's 1st iteration of for loop where columns blocks are created from 1 to 26 cells, then it goes to iteration no. 2, and likewise
the same goes on until the last row i.e 100th row is reached and finished and i's for loop is completed. */
for(let i = 0; i < rows; i++){  //this is outer for loop for row, which will create new cells from 1 to 100.
  let rowCont = document.createElement("div"); // it will create a new row element.
  rowCont.setAttribute("class", "row-cont"); // it is for styling the row i.e the border to the row cells in the style.css.
  for (let j = 0; j < cols; j++) { // this is inner for loop for columns, which will create new rows from 1 to 26.
    let cell = document.createElement("div"); // it will add 26 cells inside the rows.
    cell.setAttribute("class", "cell"); // it is for styling the columns i.e the border to the column cells in the style.css
    cell.setAttribute("contenteditable", "true"); // it is so that we can type the data inside the cells.

    cell.setAttribute("spellcheck", "false"); // it is for not checking spelling mistakes in whatever sentences user writes in the cells.
    cell.setAttribute("rid", i); // attributes for cell and storage identification for each and every cell
    cell.setAttribute("cid", j); // attributes for cell and storage identification for each and every cell

    rowCont.appendChild(cell); // it will append the 26 cells inside the created row Container
    addListenerForAddressBarDisplay(cell, i, j); // this is function which we are going to call later on, it contains cell which is fetching, it's rowth position, and it's column position
  }
  cellsCont.appendChild(rowCont); // it will append the cells created iteration by iteration inside our cells-cont which we have created in index.html
}


function addListenerForAddressBarDisplay(cell, i, j) { // we have called this function.
  cell.addEventListener("click", (e) => { // basically when we click on cell it will call the addEventListener method.
    let rowID = i+1; // it will select the row no.
    let colID = String.fromCharCode(65 + j); // it will basically select the column name in ascii value
    addressBar.value = `${colID}${rowID}`; // it will display the colID and rowID inside the addressBar
  })
};


// By default click on first cell via DOM
let firstCell = document.querySelector(".cell");
firstCell.click();

