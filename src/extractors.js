// Here you can create your extractors
const extractors = [
  {
    name: "shorts",
    extract: (document) => {
      return document.querySelectorAll('[aria-label="Shorts"]');
    },
  },
];

module.exports = extractors;
