const math = require("mathjs");
const _ = require("lodash");
const debug = (fn = "") => require("debug")(`word_transformation:index:${fn}`);

module.exports.levenshtein = (...words) => {
  debug("levenshtein")(words);
  const [wordA, wordB] = words;
  let d = math.zeros(wordA.length + 1, wordB.length + 1);
  d.subset(math.index(math.range(0, wordA.length + 1), 0), math.range(0, wordA.length + 1));
  d.subset(math.index(0, math.range(0, wordB.length + 1)), math.range(0, wordB.length + 1));
  _.each(wordA, (letterA, iA) => {
    iA += 1;
    _.each(wordB, (letterB, iB) => {
      iB += 1;
      d.subset(
        math.index(iA, iB),
        Math.min(
          d.subset(math.index(iA - 1, iB)) + 1,
          d.subset(math.index(iA, iB - 1)) + 1,
          d.subset(math.index(iA - 1, iB - 1)) + (_.isEqual(letterA, letterB) ? 0 : 1)
        )
      )
    })
  })
  debug("levenshtein")(d);

  return d.subset(math.index(wordA.length, wordB.length));
}
