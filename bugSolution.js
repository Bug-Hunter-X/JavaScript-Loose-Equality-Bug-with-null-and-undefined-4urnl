function foo(a) {
  if (a === null || a === undefined) {
    return 0;
  } else {
    return a + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(5)); // Output: 6