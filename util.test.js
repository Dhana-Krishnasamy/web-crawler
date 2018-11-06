const util = require("./util");
test("extractLinks should return all the links in the dom string", () => {
  const links = util.extractLinks(
    `<div> 
         <a href="http://www.google.com">Google</a>
    </div>`,
    "http://www.yahoo.com"
  );
  expect(links).toEqual({ images: [], urls: ["http://www.google.com"] });
});

test("extractLinks should return all the links and images in the dom string", () => {
  const links = util.extractLinks(
    `<div> 
      <a href="http://www.google.com">
        <img src="http://www.google.com/a/img/logo.png">
        Google
      </a>
      </div>`,
    "http://www.yahoo.com"
  );
  expect(links).toEqual({
    images: ["http://www.google.com/a/img/logo.png"],
    urls: ["http://www.google.com"]
  });
});

test("visit should extract all the links  and images on the page", async done => {
  const links = await util.visit("https://www.google.com/");
  expect(links.urls.length).toBe(20);
  expect(links.images.length).toBe(1);
  done();
});
