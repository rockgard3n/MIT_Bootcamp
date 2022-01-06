const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function transpose(A) {
  // we need only swap upper triangle with lower
  let N = A.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      swap(A, i, j, j, i);
    }
  }
  refreshGrid(A);
}
function swap(A, i, j, k, l) {
  let temp = A[j][i];
  A[j][i] = A[l][k];
  A[l][k] = temp;
}
function exchangeCols(A) {
  // work in from outside
  let N = A.length; // we need only swap N/2 (rounded down)
  let n = Math.floor(N / 2); // round down to integer
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < N; row++) {
      swap(A, col, row, N - 1 - col, row);
    }
  }
  refreshGrid(A);
}
function rotateMatrix(A) {
  transpose(A);
  exchangeCols(A);
}
// transpose(A);
// exchangeCols(A);
// console.log(JSON.stringify(A));


// functions to make grid


// Creates a default grid sized 16x16
function createGrid() {
    let n = A.length;
    let m = A[0].length;
    makeRows(n, m);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rows, cols, A) {
  const container = document.getElementById("container");
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = "";
    container.appendChild(cell).className = "grid-item";
  };
  const node = container.childNodes[4];
  console.log(node);
};

function refreshGrid(A) {
  const container = document.getElementById("container")
  let count = 1;
  for (n = 0; n < A.length; n++) {
    for (m = 0; m < A[0].length; m++) {
      container.childNodes[count].innerText = A[n][m];
      count++;
    }
  }
}