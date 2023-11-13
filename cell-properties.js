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
let fct = document.querySelector(".fct"); // This selector is added by me
let BGcolor = document.querySelector(".BGcolor-prop");
let bgf = document.querySelector(".bgf"); // This selector is added by me


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


// FOR UNDERLINE TEXT STYLING AND UNDERLINE BUTTON STYLING ->
// Application of two-way binding
// Attach property listeners
underline.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    // Modification
    cellProp.underline = !cellProp.underline; // Data change
    cell.style.textDecoration = cellProp.underline ? "underline" : "none"; // Basically when we click on underline button, it should underline the font inside the cell.
    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; // Basically when we click on underline button, we also want that the underline button should glow up too, signifying it as underline, so we add activeColorProp property.
})


// FOR CHANGING OF FONT SIZE WHENEVER CLICKED ON FONT SIZE DROP DOWN ->
fontSize.addEventListener("change", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);

  // Modification
  cellProp.fontSize = fontSize.value; // Data change
  cell.style.fontSize = cellProp.fontSize + "px"; // (UI Change) Basically when we want to change the font size, it will change the font's size inside the cell.
  fontSize.value = cellProp.fontSize; // Basically when we want to change font size we click on font size dropdown, we also want that the font size we are changing should show up in the dropdown too, signifying it as correct font size changed, so we add cellProp.fontSize property.
})


// FOR CHANGING OF FONT FAMILY WHENEVER CLICKED ON FONT FAMILY DROP DOWN ->
fontFamily.addEventListener("change", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);

  // Modification
  cellProp.fontFamily = fontFamily.value; // Data change
  cell.style.fontFamily = cellProp.fontFamily; // (UI Change) Basically when we want to change the font family, it will change the font's famoly inside the cell.
  fontFamily.value = cellProp.fontFamily; // Basically when we want to change font family we click on font family dropdown, we also want that the font family we are changing should show up in the dropdown too, signifying it as correct font family changed, so we add cellProp.fontFamily property.
})


// FOR CHANGING OF FONT COLOR WHENEVER CLICKED ON FONT COLOR ICON ->
fontColor.addEventListener("change", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);

  // Modification
  cellProp.fontColor = fontColor.value; // Data change
  cell.style.color = cellProp.fontColor; // (UI Change) Basically when we want to change the font color, it will change the font's color inside the cell.
  fontColor.value = cellProp.fontColor; // Basically when we want to change font color we click on font color icon, we also want that the font color we are changing should show up in the icon too, signifying it as correct font color changed, so we add cellProp.fontColor property.
  fct.style.color = cellProp.fontColor; // This property for icon styling is added by me.
})


// FOR CHANGING OF FONT's BACKGROUND COLOR WHENEVER CLICKED ON BG COLOR ICON ->
BGcolor.addEventListener("change", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);

  // Modification
  cellProp.BGcolor = BGcolor.value; // Data change
  cell.style.backgroundColor = cellProp.BGcolor; // (UI Change) Basically when we want to change the font's background color, it will change the font's background color inside the cell.
  BGcolor.value = cellProp.BGcolor; // Basically when we want to change font's background color we click on BG color icon, we also want that the font's background color we are changing should show up in the icon too, signifying it as correct font's BG color changed, so we add cellProp.BGColor property.
  bgf.style.color = cellProp.BGcolor; // This property for icon styling is added by me.
});


// FOR CHANGING OF FONT's ALIGNMENT(either left, right, or center) WHENEVER CLICKED ON ALIGNMENT BUTTONS(Left, Right, Center) ->
alignment.forEach((alignElem) => {
    alignElem.addEventListener("click", (e) => {
      let address = addressBar.value;
      let [cell, cellProp] = activecell(address);

      let alignValue = e.target.classList[0];
      cellProp.alignment = alignValue; // Data Change
      cell.style.textAlign = cellProp.alignment; // (UI Change- 1) Basically when we want to align the text inside the cell, it will change the text inside the cell.

      switch (alignValue) // (UI Change- 2) Basically when we click on any alignment button(right, left, center), we also want that the alignment button which we've clicked should glow up too, signifying it as alignment(left, right or center), so we add activeColorProp property for each alignment buttons.
        {
        case "left": // here the case is left, so whenever we click on left align button it will glow up using activeColorProp property and rest other buttons will not glow up according to inactiveColorProp
          leftAlign.style.backgroundColor = activeColorProp;
          centerAlign.style.backgroundColor = inactiveColorProp;
          rightAlign.style.backgroundColor = inactiveColorProp;
          break;

        case "center": // here the case is center, so whenever we click on center align button it will glow up using activeColorProp property and rest other buttons will not glow up according to inactiveColorProp
          centerAlign.style.backgroundColor = activeColorProp;
          leftAlign.style.backgroundColor = inactiveColorProp;
          rightAlign.style.backgroundColor = inactiveColorProp;
          break;

        case "right": // here the case is right, so whenever we click on right align button it will glow up using activeColorProp property and rest other buttons will not glow up according to inactiveColorProp
          rightAlign.style.backgroundColor = activeColorProp;
          leftAlign.style.backgroundColor = inactiveColorProp;
          centerAlign.style.backgroundColor = inactiveColorProp;
          break;
        }
    })
})


let allCells = document.querySelectorAll(".cell");
for(let i = 0; i < allCells.length; i++) {
    addListenerToAttachCellProperties(allCells[i]);
}

function addListenerToAttachCellProperties(cell) {
    // Work
    cell.addEventListener(".click", (e) => {
        let address = addressBar.value;
        let [rid, cid] = decodeRIDCIDFromAddress(address);
        let cellProp = sheetDB[rid, cid];


        // Apply cell Properties
        cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
        cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
        cell.style.textDecoration = cellProp.underline ? "underline" : "none";
        cell.style.fontSize = cellProp.fontSize + "px";
        cell.style.fontFamily = cellProp.fontFamily;
        cell.style.color = cellProp.fontColor;
        cell.style.backgroundColor = cellProp.BGcolor;
        switch (cellProp.alignment) // (UI Change- 2) Basically when we click on any alignment button(right, left, center), we also want that the alignment button which we've clicked should glow up too, signifying it as alignment(left, right or center), so we add activeColorProp property for each alignment buttons.
        {
            case "left": // here the case is left, so whenever we click on left align button it will glow up using activeColorProp property and rest other buttons will not glow up according to inactiveColorProp
            leftAlign.style.backgroundColor = activeColorProp;
            centerAlign.style.backgroundColor = inactiveColorProp;
            rightAlign.style.backgroundColor = inactiveColorProp;
            break;

            case "center": // here the case is center, so whenever we click on center align button it will glow up using activeColorProp property and rest other buttons will not glow up according to inactiveColorProp
            centerAlign.style.backgroundColor = activeColorProp;
            leftAlign.style.backgroundColor = inactiveColorProp;
            rightAlign.style.backgroundColor = inactiveColorProp;
            break;

            case "right": // here the case is right, so whenever we click on right align button it will glow up using activeColorProp property and rest other buttons will not glow up according to inactiveColorProp
            rightAlign.style.backgroundColor = activeColorProp;
            leftAlign.style.backgroundColor = inactiveColorProp;
            centerAlign.style.backgroundColor = inactiveColorProp;
            break;
        }
    })
}



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