import { FlashcardDeck } from '../types';

export const sampleDeck: FlashcardDeck = {
  name: "JavaScript Fundamentals",
  description: "Basic concepts in JavaScript",
  cards: [
    {
      id: "1",
      front: {
        title: "What is a closure?",
        content: "Define what a closure is in JavaScript"
      },
      back: {
        title: "Closure Definition",
        content: "A closure is the combination of a function and the lexical environment within which that function was declared. It allows a function to access variables in its outer scope even after the outer function has returned."
      },
      category: "Functions"
    },
    {
      id: "2",
      front: {
        title: "What is hoisting?",
        content: "Explain the concept of hoisting in JavaScript"
      },
      back: {
        title: "Hoisting Explanation",
        content: "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. Variables declared with 'var' are hoisted (initialized with undefined), while 'let' and 'const' are hoisted but not initialized (temporal dead zone)."
      },
      category: "Variables"
    }
  ]
};