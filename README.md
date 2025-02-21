# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug related to loose equality (==) when dealing with null and undefined values.  The bug arises from the fact that null and undefined are not strictly equal (===), but are loosely equal (==).  This difference in behavior can lead to unexpected results, especially in functions that handle potentially null or undefined arguments.

## Bug Description

The provided JavaScript code defines a function `foo` that attempts to check for null input and return 0 if the input is null, otherwise adding 1 to the input. When the input is undefined, the loose equality `==` results in `NaN` instead of the expected 0. This is because `undefined == null` evaluates to `true`, but `undefined + 1` evaluates to `NaN`.

## Solution

The solution uses strict equality (===) to distinguish between null, undefined, and other values. The strict equality operator checks for both value and type equality, thus avoiding the ambiguity of loose equality.

## How to reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Open `bug.js` to see the buggy code.
4. Open `bugSolution.js` to see the corrected code.
5. Run the JavaScript files using a Node.js runtime or a browser's developer console.