const index = require("./index");
test("web crawler should visit all the pages on given site and list them with images", async done => {
  const links = await index.start("https://try-puppeteer.appspot.com/");
  expect(links.visited.size).toBe(4);
  expect(links.images.size).toBe(2);
  expect(links.toVisit.size).toBe(0);
  done();
});
