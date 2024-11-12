const character = "#";

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function buildPyramid() {
  const rowCount = parseInt(document.getElementById("rowCount").value);
  
  if (isNaN(rowCount) || rowCount < 1) {
    alert("Please enter a valid number of rows.");
    return;

  }

  let rows = [];
  for (let i = 1; i <= rowCount; i++) {
    rows.push(padRow(i, rowCount));
  }

  document.getElementById("pyramidOutput").textContent = rows.join("\n");
  document.getElementById("pyramidOutput").style.animation = "none";
setTimeout(() => {
  document.getElementById("pyramidOutput").style.animation = "";
}, 0);

}
