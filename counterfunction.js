var n = 0;
document.getElementById("count").innerText = n;
function increment() {
  n = n + 1;
  document.getElementById("count").innerText = n;
}
function decrement() {
  if (n < 1) {
    document.getElementById("count").disabled = true;
  } else {
    n = n - 1;
    document.getElementById("count").innerText = n;
  }
}
function reset() {
  n = 0;
  document.getElementById("count").innerText = n;
}
