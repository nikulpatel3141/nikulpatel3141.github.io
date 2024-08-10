import React, { useEffect, useState } from 'react';
import { ReactTyped } from "react-typed";

const fileName = "/quotes.csv";
const delim = "|";

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
    if (line == null) return ["", ""];

    let [quote, author, work] = line.split(delim);
  
    if (work) {
      author += ", ";
    }    
    return {quote, author};
  }
  


function RandomQuote() {
    const [parsedQuote, setParsedQuote] = useState(null);
    useEffect(() => {
        const fetchQuote = async () => {
            const quote_str = await getRandomQuote();
            const parsedQuote_ = parseQuote(quote_str);
            setParsedQuote(parsedQuote_);
        };
        fetchQuote();
    }, []);

    return (
    <blockquote>
        <ReactTyped strings={[parsedQuote?.quote ?? '']}></ReactTyped>
        <div><i>- {parsedQuote?.author ?? ''}</i></div>
    </blockquote>)
}

export default RandomQuote;
