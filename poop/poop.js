let bad_domains = [
    "admob.com",
    "adsense.com",
    "adsense.net",
    "adwords-select.com",
    "adwords.be",
    "adwords.com",
    "adwords.net",
    "adwords.nl",
    "adwords.org",
    "adwordselect.com",
    "adwordsexample.com",
    "adwordsselect.com",
    "adwordsselect.net",
    "adwordsselect.org",
    "doubleclick.com",
    "doubleclick.net",
    "googleadservices.com",
    "wwwadwords-select.com",
    "wwwadwordsselect.com"
];

var blockPoop = true;

function filterURL(requestDetails) {
  for (let domain of bad_domains) {

    // Filter the Poop.
    if (requestDetails.url.includes(domain) && blockPoop){
        browser.tabs.executeScript({
          file: "page-eater.js",
          runAt: "document_end"
        });
    }
  }
}

// function listener(details) {
//   console.log("onBeforeNavigate to: " + details.url);
// }

browser.webRequest.onBeforeRequest.addListener(
  filterURL, {
    urls: ["<all_urls>"]
  }
);

// browser.webNavigation.onCompleted.addListener(evt => {

//     // Filter out any sub-frame related navigation event
//     // if (evt.frameId !== 0) {
//     //   return;
//     // }

//     console.log("ONCOMPLETED");
//     const url = new URL(evt.url);
//     console.log(url.hostname);

//     // hostNavigationStats[url.hostname] = hostNavigationStats[url.hostname] || 0;
//     // hostNavigationStats[url.hostname]++;

//     // // Persist the updated stats.
//     // browser.storage.local.set(results);
//   }, {
//     url: ["<all_urls>"]
// });

function handleUpdated(tabId, changeInfo, tabInfo) {
  // console.log("Updated tab: " + tabId);
  // console.log("Changed attributes: ");
  // console.log(changeInfo);
  // console.log("New tab Info: ");
  // console.log(tabInfo);

  if (changeInfo.url) {
    if(changeInfo.url.includes("#showpoop")){
        blockPoop = false;
    } else{
        blockPoop = true;
    }
  }

}

browser.tabs.onUpdated.addListener(handleUpdated);


// browser.webNavigation.onBeforeNavigate.addListener(
//   listener, {
//     urls: ["<all_urls>"]
//   }                      // optional object
// )
