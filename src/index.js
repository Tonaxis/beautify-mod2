const { extract } = require("beautify-dev");
const extractors = require("./extractors");

const results = extract(extractors);

results.divs.forEach((div) => {
  div.style.background =
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";
});
