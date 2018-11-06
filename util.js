const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require("axios");
function extractLinks(htmlString, root) {
  const links = new Set();
  const images = [];
  const dom = new JSDOM(htmlString, { url: root });
  for (let a of dom.window.document.querySelectorAll("a")) {
    if (a.href.startsWith("http")) {
      links.add(a.href.replace(a.hash, "").replace(/\/$/, ""));
    }
  }
  for (let a of dom.window.document.querySelectorAll("img")) {
    images.push(a.src);
  }
  return {
    urls: [...links],
    images
  };
}
function visit(url) {
  //console.log("visiting: ", url);
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => resolve(extractLinks(response.data, url)))
      .catch(err => {
        console.log("Error while visiting:" + url);
        resolve({ urls: [], images: [] });
      });
  });
}
module.exports = {
  extractLinks,
  visit
};
