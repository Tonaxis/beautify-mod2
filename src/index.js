const { extract } = require("beautify-dev");
const extractors = require("./extractors");

const results = extract(extractors);

results.shorts?.forEach((icon) => {
  icon.remove();
});
