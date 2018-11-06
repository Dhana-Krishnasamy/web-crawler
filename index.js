const parallelly = require("./parallelly");
const util = require("./util");

async function start(root) {
  const result = {
    visited: new Set(),
    toVisit: new Set([root]),
    images: new Set()
  };
  console.log("working on ", root);
  do {
    const urlsToVisit = [...result.toVisit];
    await parallelly(
      async i => {
        const url = urlsToVisit[i];
        if (!url) return;
        const links = await util.visit(url);
        result.visited.add(url);
        links.urls.filter(u => !result.visited.has(u)).forEach(u => {
          if (u.indexOf(root) > -1) result.toVisit.add(u);
          else result.visited.add(u);
        });
        links.images.forEach(img => result.images.add(img));
        result.toVisit.delete(url);
      },
      urlsToVisit.length,
      10
    );
    console.log(
      `Visited :${result.visited.size}, ToBeVisited:${result.toVisit.size}`
    );
  } while (result.toVisit.size > 0);
  return result;
}

start(process.argv[2] || "https://wiprodigital.com").then(result => {
  console.log({ urls: [...result.visited], images: [...result.images] });
  console.log(
    `Extracted ${result.visited.size} links and ${result.images.size} images`
  );
});
module.exports = { start };
