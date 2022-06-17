import quotes from "./actually_good_quotes.js";



let totalTime
let RQuotes = quotes.map(quote => {
  return quote.quote
})
getInspQuote = () => {
    let randomIndex = Math.floor(Math.random() * RQuotes.length);
    return RQuotes[randomIndex];
}

chrome.storage.local.get('totalTime', function(result) {
    if (result.totalTime >= 0) {
    totalTime = result.totalTime;
    } else {
      totalTime = 0
    }
    console.log('Value currently is ' + totalTime);
})
let alarmName = "sessionTimer"
chrome.runtime.onInstalled.addListener(() => {
  
  startup(true)
});

function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours   = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
function getMessage() {
  //messages is an array of inspirational messages
  let messages = [
    "good luck!",
    getInspQuote()
  ]
  let message = messages[Math.floor(Math.random() * messages.length)]
  return message

}

function notify() {
  
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'devid.jpg',
    title: 'Session Started',
    message: getMessage()
  });
}

function createAlarm() {
  chrome.alarms.create(alarmName, {
    delayInMinutes: 0, periodInMinutes: 1});
}
function startup(string) {
 //Store totalTime in local storage
  chrome.storage.local.set({totalTime: totalTime});
  createAlarm();
  notify()
}

chrome.alarms.onAlarm.addListener(function( alarm ) {
  if (alarm.name === alarmName) {
    chrome.storage.local.get(['totalTime'], function(result) {
    
      totalTime = result.totalTime;
      if (!(totalTime >= 0)) {
        totalTime = 0;
        chrome.storage.local.set({ totalTime:totalTime });
        return
      }
      totalTime += 60;
      chrome.storage.local.set({ totalTime:totalTime });
  })
  
  } else {
    console.log("Unknown alarm");	// Should never happen
  }
});


chrome.runtime.onStartup.addListener(startup)