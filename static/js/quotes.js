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
    getRandomQuote(csv);
  });

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

async function getRandomQuote(data) {
  const readMe = data.split(/\r?\n/);
  const lineCount = readMe.length;
  const randomLineNumber = Math.floor(Math.random() * lineCount);
  const randomLine = readMe[randomLineNumber].split(delim); // quote|author|work

  let author = randomLine[1];
  let work = randomLine[2];

  if (work) {
    author += ", ";
  }

  randomQuote.innerText = randomLine[0];
  randomAuthor.innerText = author;
  randomWork.innerText = work;
}
