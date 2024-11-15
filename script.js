let inverted = false;

function padRow(rowNumber, rowCount, character) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function buildPyramid() {
  const rowCount = parseInt(document.getElementById("rowCount").value);
  const character = document.getElementById("charInput").value || "*";
  
  if (isNaN(rowCount) || rowCount < 1) {
    alert("Please enter a valid number of rows.");
    return;
  }

  const rows = [];
  for (let i = 1; i <= rowCount; i++) {
    if (inverted) {
      rows.unshift(padRow(i, rowCount, character));
    } else {
      rows.push(padRow(i, rowCount, character));
    }
  }

  document.getElementById("pyramidOutput").textContent = rows.join("\n");
}

function toggleInvert() {
  inverted = !inverted; 
  buildPyramid(); 
}
