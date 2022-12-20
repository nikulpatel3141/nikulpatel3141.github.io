const marketDataURL = "https://raw.githubusercontent.com/nikulpatel3141/FT-Scraper/master/output.json"
const dataLine  = document.getElementById("marketData");
const dataBarStyle = "flex flex-1 items-center justify-between py-1 text-sm"
const sourceHTML = `(Source: <a href="https://www.ft.com">FT</a>)`

async function getMarketData(){
  return fetch(marketDataURL)
  .then(res => res.json())
//  return {"FTSE100": 0.111, "Gold": -0.2123, "GBPUSD": 0.04564, "Oil": 0.123121};
}

function fmtData(inst, ret){
  var retStr = (ret).toFixed(2) + '%';
  var retStyle = "px-1 border-2"
  var retId = ""

  if (ret >= 0) {
    retId += "posreturn"
    retStr = "+" + retStr
  } else {
    retId += "negreturn"
  }
  retHTML = `<span class="${retStyle}" id="${retId}"> ${retStr} </span>`
  return  inst + ": " + retHTML;
}

function formatMarketData(marketData){
  var retsHTML = ""
  for( const [inst, ret] of Object.entries(marketData) ) {
    retsHTML += `<li class="text-sm"> ${fmtData(inst, ret)} </li> `
  }
  return `<ul class="${dataBarStyle}"> ${retsHTML} <li"> ${sourceHTML} </li> </ul>`
}
  
getMarketData().then(
md => formatMarketData(md)
).then(
out => {dataLine.innerHTML = out;}
);

