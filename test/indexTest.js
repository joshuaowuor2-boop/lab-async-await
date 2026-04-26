// test/indexTest.js
require("whatwg-fetch");
const { JSDOM } = require("jsdom");
const fetchData = require("../index");

describe("Asynchronous Fetching", function () {
  it("should fetch external API and add information to page", async function () {
    const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    const { document } = dom.window;

    await fetchData(document);

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");

    if (!h1 || !p) throw new Error("Elements not appended");
    if (!h1.textContent.includes("sunt aut")) {
      throw new Error(`Expected title to include 'sunt aut', got '${h1.textContent}'`);
    }
  });
});
