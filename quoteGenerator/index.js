// const quote = document.querySelectorAll(".quote");
// quote.forEach(quote => trim(quote))

// console.log(quote.quoteDetails);

const quoteP = document.getElementById("text");
const authorText = document.getElementById("author");
const button = document.getElementById("new-quote");
const body = document.querySelector("body");
const twitterLink = document.getElementById("tweet-quote");

let colorOptions = [
  "#006450",
  "#00026e",
  "#432ba3",
  "#004964",
  "#442c87",
  "#45058a",
];

function getQuote() {
  fetch("https://api.quotable.io/random?maxLength=50")
    .then((response) => response.json())
    .then((data) => {
      quoteP.innerText = data.content;
      authorText.innerText = `-${data.author}`;
    });
}

window.addEventListener("load", getQuote);

button.addEventListener("click", getQuote);
button.addEventListener("click", () => {
  let randomize = Math.floor(Math.random() * colorOptions.length);
  body.style.backgroundColor = colorOptions[randomize];
});

twitterLink.addEventListener("click", () => {
  twitterLink.href = `https://twitter.com/intent/tweet?hashtags=quotes&text= + ${encodeURIComponent(
    '"' + quoteP.innerText + '" ' + authorText.innerText
  )}`;
});
