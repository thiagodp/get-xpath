(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getXPath = void 0;
    // "use strict";
    function getXPath(el) {
        var nodeElem = el;
        if (nodeElem && nodeElem.id) {
            return "//*[@id=\"" + nodeElem.id + "\"]";
        }
        var parts = [];
        while (nodeElem && Node.ELEMENT_NODE === nodeElem.nodeType) {
            var nbOfPreviousSiblings = 0;
            var hasNextSiblings = false;
            var sibling = nodeElem.previousSibling;
            while (sibling) {
                if (sibling.nodeType !== Node.DOCUMENT_TYPE_NODE &&
                    sibling.nodeName === nodeElem.nodeName) {
                    nbOfPreviousSiblings++;
                }
                sibling = sibling.previousSibling;
            }
            sibling = nodeElem.nextSibling;
            while (sibling) {
                if (sibling.nodeName === nodeElem.nodeName) {
                    hasNextSiblings = true;
                    break;
                }
                sibling = sibling.nextSibling;
            }
            var prefix = nodeElem.prefix ? nodeElem.prefix + ":" : "";
            var nth = nbOfPreviousSiblings || hasNextSiblings
                ? "[" + (nbOfPreviousSiblings + 1) + "]"
                : "";
            parts.push(prefix + nodeElem.localName + nth);
            nodeElem = nodeElem.parentNode;
        }
        return parts.length ? "/" + parts.reverse().join("/") : "";
    }
    exports.getXPath = getXPath;
});
