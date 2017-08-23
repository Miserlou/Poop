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

function filterURL(requestDetails) {
  for (let domain of bad_domains) {

    // Filter the Poop.
    if (requestDetails.url.includes(domain)){
        browser.tabs.executeScript({
          file: "page-eater.js",
          runAt: "document_end"
        });
    }
  }
}

browser.webRequest.onBeforeRequest.addListener(
  filterURL, {
    urls: ["<all_urls>"]
  }
);
