// Here you can create your extractors
const extractors = [
  {
    name: "divs",
    extract: (document) => {
      return Array.from(
        document.querySelectorAll("ytd-mini-guide-entry-renderer")
      );
    },
  },
];

module.exports = extractors;
