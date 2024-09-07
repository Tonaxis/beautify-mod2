// Here you can create your extractors
const extractors = [
  {
    name: "divs",
    extract: (document) => {
      return document.querySelectorAll("div");
    },
  },
];

module.exports = extractors;
