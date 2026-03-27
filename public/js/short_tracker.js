
function fmtShortData(data) {
  fundData = data['fund']
  secData = data['sec']
  return [secData, fundData]
}

function runGetShortData() {
  const outputURL = "https://raw.githubusercontent.com/nikulpatel3141/UK-Short-Tracker/master/output/output.json?"
  const secTrackerDiv = document.getElementById("secShortTracker");
  const fundTrackerDiv = document.getElementById("fundShortTracker");

  fetch(outputURL)
    .then(x => x.json())
    .then(
      md => fmtShortData(md)
    ).then(
      out => {
        secTrackerDiv.innerHTML = out[0];
        fundTrackerDiv.innerHTML = out[1];
      }
    );
}


