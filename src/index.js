const { extract } = require("beautify-dev");
const extractors = require("./extractors");

const results = extract(extractors);

console.log(results);

results.sidebarIcons?.forEach((icon) => {
  icon.remove();
});
