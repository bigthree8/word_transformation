const expect = require("expect.js");
const wt = require("./index");
// process.env.DEBUG = "word_transformation*"
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
  it("should count levenshtein distance kitten, sitting", () => {
    expect(wt.levenshtein("kitten", "sitting"), 3);
  });

  it("should count levenshtein distance humid, humic", () => {
    expect(wt.levenshtein("humid", "humic"), 1);
  });

  it("should count levenshtein distance humid, humid", () => {
    expect(wt.levenshtein("humid", "humid"), 0);
  });

  it("should find humid in dictionary", () => {
    expect(wt.findNode("humid", dict), 1);
  });

  it("should not find foobar in dictionary", () => {
    expect(wt.findNode("foobar", dict), -1);
  });

  it("should create graph", () => {
    const graph = wt.createGraph(dict.slice(0, 3));
    expect(graph).to.eql([[0, 1], [0, 1], [2]]);
  });

  it("should find path for same word", () => {
    expect(wt.path(dict[0], dict[0], dict), 0);
  });

  it("should find not path", () => {
    expect(wt.path("foobar", dict[0], dict), -1);
  });

  it("should find not path", () => {
    expect(wt.path(dict[0], "fooo", dict), -1);
  });

  it("should find not path", () => {
    expect(wt.path("barrsa", "fooo", dict), -1);
  });

  it("should find not path", () => {
    expect(wt.path("slug", "gate", dict), -1);
  });

  it("should find path", () => {
    expect(wt.path("mist", "wary", dict), 11);
  });

  it("should find path", () => {
    expect(wt.path("wait", "doll", dict), 11);
  });
})
