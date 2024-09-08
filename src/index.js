const { extract } = require("beautify-dev");
const extractors = require("./extractors");

const results = extract(extractors);

console.log(results);

results.shorts?.forEach((icon) => {
  icon.remove();
});
