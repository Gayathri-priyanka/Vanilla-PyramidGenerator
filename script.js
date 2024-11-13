let character = "!";
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function buildPyramid() {
  const rowCount = parseInt(document.getElementById("rowCount").value);
  
  if (isNaN(rowCount) || rowCount < 1) {
    alert("Please enter a valid number of rows.");
    return;
  }

  const rows = [];
  for (let i = 1; i <= rowCount; i++) {
    if (inverted) {
      rows.unshift(padRow(i, rowCount));
    } else {
      rows.push(padRow(i, rowCount));
    }
  }

  document.getElementById("pyramidOutput").textContent = rows.join("\n");
}

function toggleInvert() {
  inverted = !inverted; 
  buildPyramid(); 
}
