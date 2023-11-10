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


// activeColoProp and inactiveColorProp for the all the buttons
let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

// FOR BOLD TEXT STYLING AND BOLD BUTTON STYLING ->
// Application of two-way binding
// Attach property listeners
bold.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    // Modification
    cellProp.bold = !cellProp.bold; //Data change
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // Basically when we click on Bold button, it should make the font inside the cell as Bold.
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; // Basically when we click on Bold button, we also want that the bold button should glow up too, signifying it as bold, so we add activeColorProp property.
})


// FOR ITALIC TEXT STYLING AND ITALIC BUTTON STYLING ->
// Application of two-way binding
// Attach property listeners
italic.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    // Modification
    cellProp.italic = !cellProp.italic; //Data change
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; // Basically when we click on italic button, it should make the font inside the cell as italic.
    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; // Basically when we click on italic button, we also want that the italic button should glow up too, signifying it as italic, so we add activeColorProp property.
})




function activecell(address) {
    let [rid, cid] = decodeRIDCIDFromAddress(address);
    // Access cell and storage object
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp];
}

function decodeRIDCIDFromAddress(address){
    // address -> "A1", here A means column ID and 1 means row ID which is in string format
    let rid = Number(address.slice(1)-1); // "1" -> 0th row
    let cid = Number(address.charCodeAt(0)) - 65; // "A" -> 65
    return [rid, cid];
}