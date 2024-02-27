import React, { useEffect, useState } from 'react';

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

function RandomQuote(props) {
    const [data, setData] = useState();

    useEffect({
        const quote = await getRandomQuote();
        setData(quote);
    }, []);
    
    return <div>{quote}</div>;
}

export default RandomQuote;
