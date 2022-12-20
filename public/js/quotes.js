// static/quotes.js

const fileName = "/quotes.csv";
const delim = "|";

const randomQuote = document.getElementById("randomQuote");
const randomAuthor = document.getElementById("randomAuthor");
const randomWork = document.getElementById("randomWork");
const reader = new FileReader();

fetch(fileName)
  .then(function (response) {
    return response.text();
  })
  .then(function (csv) {
    return getRandomQuote(csv);
  })
  .then(function (quote) {
    setQuote(quote);
  });

async function getRandomQuote(data) {
  const readMe = data.split(/\r?\n/);
  const lineCount = readMe.length;
  const randomLineNumber = Math.floor(Math.random() * lineCount);
  return readMe[randomLineNumber];
}

function setQuote(line) {
  let [quote, author, work] = line.split(delim);

  if (work) {
    author += ", ";
  }

  var options = {
    strings: [quote],
    stringsElement: "randomQuote",
    typeSpeed: 20
  };

  var typed = new Typed('#randomQuote', options);

  randomAuthor.innerText = author;
  randomWork.innerText = work;
}
