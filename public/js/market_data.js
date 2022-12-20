const dataLine  = document.getElementById("marketData");
const dataBarStyle = "flex flex-1 items-center justify-between py-1 md:ml-12 font-small"

function getMarketData(){
  return {"FTSE100": 0.111, "Gold": -0.2123, "GBPUSD": 0.04564, "Oil": 0.123121};
}

function fmtData(inst, ret){
  var retStr = (ret*100).toFixed(1) + '%';
  
  var retStyle = "px-1 border-2 "

  if (ret >= 0) {
    retStyle += "text-green"
  } else {
    retStyle += "text-red"
  }

  retHTML = `<span class="${retStyle}" id="posreturn"> ${retStr} </span>`
  //return `<div class="${retStyle}"> ${inst}: ${retHTML} </div>`
  return  inst + ": " + retHTML;
}

function formatMarketData(marketData){
  var retsHTML = ""
  for( const [inst, ret] of Object.entries(marketData) ) {
    retsHTML += `<li> ${fmtData(inst, ret)} </li> `
  }
  return `<ul class="${dataBarStyle}"> ${retsHTML} </ul>`
}
  
md = getMarketData()
md_html = formatMarketData(md)
dataLine.innerHTML = md_html;

