(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = extract;
function extract(extractors) {
    const extracted = {};
    for (const extractor of extractors) {
        if (extractor.name && extractor.extract) {
            const elements = extractor.extract(document);
            extracted[extractor.name] = elements;
        }
    }
    return extracted;
}

},{}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
var extractor_1 = require("./functions/extractor");
Object.defineProperty(exports, "extract", { enumerable: true, get: function () { return __importDefault(extractor_1).default; } });

},{"./functions/extractor":1}],3:[function(require,module,exports){
// Here you can create your extractors
const extractors = [
  {
    name: "short",
    extract: (document) => {
      return document.querySelectorAll('[aria-label="Shorts"]');
    },
  },
];

module.exports = extractors;

},{}],4:[function(require,module,exports){
const { extract } = require("beautify-dev");
const extractors = require("./extractors");

const results = extract(extractors);

console.log(results);

results.sidebarIcons.forEach((icon) => {
  icon.remove();
});

},{"./extractors":3,"beautify-dev":2}]},{},[4]);
