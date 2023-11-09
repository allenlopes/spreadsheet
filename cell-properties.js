/* ################ This cell-properties.js file is just for the cell properties javascript ################# */

// Storage
let sheetDB = [];


for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for(let j = 0; j < cols; j++){
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "monospace",
            fontSize: "14",
            fontColor: "#000000",
            BGcolor: "#000000", // Just for indication purpose
        }
        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}


// Selectors for cell properties
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector(".font-family-prop");
let fontColor = document.querySelector(".font-color-prop");
let BGcolor = document.querySelector(".BGcolor-prop");

let addressBar = document.querySelector(".address-bar");

// Application of two-way binding
// Attach property listeners
bold.addEventListener("click", (e) => {
    let address = addressBar.value;
    activecell(address)
})

function activecell(address) {

}

function decodeRIDCIDFromAddress(address){
    // address -> "A1", here A means column ID and 1 means row ID which is in string format
    let rid = Number(address.slice(1)); // "1"
}