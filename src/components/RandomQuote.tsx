import React, { useEffect, useState } from 'react';
import { ReactTyped } from "react-typed";

const fileName = "/quotes.csv";
const delim = "|";

const reader = new FileReader();

async function _getRandomQuote(data) {
    const readMe = data.split(/\r?\n/);
    const lineCount = readMe.length;
    var dtNow = new Date();
    var intDay = Math.floor(dtNow.getTime() / 86400000);
    const randomLineNumber = intDay % lineCount;
    return readMe[randomLineNumber];
}

async function getRandomQuote() {
    return fetch(fileName)
        .then(response => response.text())
        .then(_getRandomQuote);
}

function parseQuote(line) {
    if (line === undefined) return ["", ""];

    let [quote, author, work] = line.split(delim);
  
    if (work) {
      author += ", ";
    }    
    return [quote, author];
  }
  


function RandomQuote(props) {
    const [data, setData] = useState();

    useEffect(async () => {
        const quote = await getRandomQuote();
        setData({quote: quote});
    }, []);
    
    const [quote, author] = parseQuote(data?.quote);

    return (
    <blockquote>
        <ReactTyped strings={[quote]}></ReactTyped>
        <div><i>- {author}</i></div>
    </blockquote>)
}

export default RandomQuote;
