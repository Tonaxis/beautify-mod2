// Here you can create your extractors
const extractors = [
  {
    name: "sidebarIcons",
    extract: (document) => {
      return Array.from(
        document.getElementsByClassName("ytd-mini-guide-renderer")
      );
    },
  },
];

module.exports = extractors;
