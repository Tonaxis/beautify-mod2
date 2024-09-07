// Here you can create your extractors
const extractors = [
  {
    name: "divs",
    extract: (document) => {
      return Array.from(
        document.getElementsByClassName("ytd-mini-guide-renderer")
      );
    },
  },
];

module.exports = extractors;
