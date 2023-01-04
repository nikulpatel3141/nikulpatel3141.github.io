const outputURL = "https://raw.githubusercontent.com/nikulpatel3141/UK-Short-Tracker/master/output/output.json?"
const secTrackerDiv = document.getElementById("secShortTracker");
const fundTrackerDiv = document.getElementById("fundShortTracker");

async function getShortData(){
  return fetch(outputURL)
  .then(res => res.json())
}

function fmtShortData(data){
  fundData = data['fund']
  secData = data['sec']
  return [secData, fundData]
}

getShortData().then(
md => fmtShortData(md)
).then(
out => {
      secTrackerDiv.innerHTML = out[0];
      fundTrackerDiv.innerHTML = out[1];
    }
);

