// Here you can create your extractors
const extractors = [
  {
    name: "short",
    extract: (document) => {
      return document.querySelectorAll('[aria-label="Short"]');
    },
  },
];

module.exports = extractors;
