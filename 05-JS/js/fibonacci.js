var memo = {};

function calculateFibonacci() {
  var n = parseInt(document.getElementById("num").value);
  var val = fibonacci(n);
  document.getElementById("fibonacciLbl").textContent = "Fibonacci(" + n + ") = " + val;
}

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  if (memo.hasOwnProperty(n)) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}
