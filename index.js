const math = require("mathjs");
const _ = require("lodash");
const debug = (fn = "") => require("debug")(`word_transformation:index:${fn}`);

const levenshtein = (...words) => {
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

const createGraph = (dictionary) =>
  _.map(dictionary, (wordA) =>
    _.filter(
      _.map(dictionary, (wordB, index) => {
        if (levenshtein(wordA, wordB) < 2) {
          debug("createGraph")(wordA, wordB, levenshtein(wordA, wordB));

          return index;
        }

        return void 0;
      }),
      _.negate(_.isUndefined)
    )
  );


const findNode = (startWord, dictionary) => {
  debug("findNode")(startWord, dictionary);

  return _.findIndex(dictionary, startWord);
}

const path = (startWord, endWord, dictionary) => {
  const startIndex = findNode(startWord, dictionary);
  const endIndex = findNode(endWord, dictionary);

  if (startIndex === -1 || endIndex === -1) {
    return -1
  }

  const graph = createGraph(dictionary);
  const toVisit = [startIndex];
  const paths = [0];
  const visited = new Set();
  let current = null;
  let currentPath = null;
  while (!_.isEmpty(toVisit)) {
    current = toVisit.shift();
    currentPath = paths.shift();
    if (_.isEqual(current, endIndex)) {
      return currentPath;
    }
    if (!visited.has(current)){
      visited.add(current);
      toVisit.concat(graph[current]);
      paths.concat(
        _.range(
          currentPath,
          currentPath + _.length(graph[current]),
          0
        )
      );
    }
  }

  return -1;
}

module.exports = {
  levenshtein,
  createGraph,
  findNode,
  path
}
