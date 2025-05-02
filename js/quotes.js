const quotes = [
  {
    quote: "Plans are nothing; planning is everything.",
    author: "Dwight D. Eisenhower",
  },
  {
    quote: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    quote:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee",
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    quote: "You may delay, but time will not.",
    author: "Benjamin Franklin",
  },
  {
    quote: "It is not the mountain we conquer, but ourselves.",
    author: "Sir Edmund Hillary",
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot.",
    author: "Micheal Altshuler",
  },
  {
    quote:
      "Realize that now, in this moment of time, you are creating. You are creating your next moment, that is what's real.",
    author: "Sara Paddison",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
