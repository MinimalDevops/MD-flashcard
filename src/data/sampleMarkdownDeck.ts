export const sampleMarkdownDeck = `# JavaScript Fundamentals
_Basic concepts in JavaScript programming_

## Card: Closures [Category: Functions]

### Front

What is a closure in JavaScript and how does it work?

### Back

A closure is the combination of a function and the lexical environment within which that function was declared. It allows a function to access variables in its outer scope even after the outer function has returned.

Example:
\`\`\`js
function outer(x) {
  return function(y) {
    return x + y;
  }
}
\`\`\`

## Card: Hoisting [Category: Variables]

### Front

Explain the concept of hoisting in JavaScript.

### Back

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. Variables declared with 'var' are hoisted (initialized with undefined), while 'let' and 'const' are hoisted but not initialized (temporal dead zone).`;