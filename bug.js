function foo(a) {
  if (a == null) {
    return 0;
  } else {
    return a + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: NaN