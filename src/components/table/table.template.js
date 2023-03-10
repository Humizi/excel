const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return /*html*/ `<div class="cell" contenteditable="true"></div>`;
}

function toColumn(col) {
  return /*html*/ ` <div class="column">${col}</div> `;
}

function createRow(content, index = "") {
  return /*html*/ `
    <div class="row">
      <div class="row__info">${index}</div>
      <div class="row__data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount).fill("").map(toChar).map(toColumn).join("");

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill("").map(createCell).join("");
    rows.push(createRow(cells, i + 1));
  }

  return rows.join("");
}
