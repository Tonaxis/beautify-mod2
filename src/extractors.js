// Here you can create your extractors
const extractors = [
  {
    name: "shorts",
    extract: (document) => {
      return document.querySelectorAll("ytd-mini-guide-entry-renderer");
    },
  },
];

module.exports = extractors;
