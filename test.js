const expect = require("expect.js");
const wt = require("./index");
const dict = [
  "humic",
  "humid",
  "wane",
  "jade",
  "molt",
  "moll",
  "want",
  "slag",
  "wade",
  "mist",
  "dolt",
  "doll",
  "mate",
  "fade",
  "maze",
  "wart",
  "jake",
  "wary",
  "mitt",
  "wake",
  "gate",
  "mite",
  "wait",
  "faze",
  "malt",
  "hemic",
  "male"
]


describe("Word Transformation", () => {
  it("should compare words", () => {
    wt.compareWords(dict[0], dict[1]);
  })
})
