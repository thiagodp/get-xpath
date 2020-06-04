// "use strict";
function getXPath(el) {
    var nodeElem = el;
    if (nodeElem && nodeElem.id) {
        return "//*[@id=\"" + nodeElem.id + "\"]";
    }
    var parts: string[] = [];
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

/*
// Loader
(function () {
    var debug = false;
    var show = console.log.bind( console );
    var g = globalThis || window || self;
    var loader = function (name, dependencies, definition ) {
        var deps = dependencies || [];
        // AMD
        if ( "function" === typeof g.define && g.define ) {
            debug && show( 'AMD' );
            g.define( deps, definition );
        }
        // CommonJS
        else if ( "object" === typeof g.module && g.module && g.module.exports ) {
            debug && show( 'CommonJS' );
            // Require all the dependencies
            if ( "function" === typeof g.require && g.require ) {
                for ( var i = 0, len = deps.length; i < len; ++i ) {
                    g.require( deps[ i ] );
                }
            }
            g.module.exports = definition;
        }
        // Direct browser usage
        else if ( "object" === typeof window ) {
            debug && show( 'browser' );
            window[name] = definition[name];
        }
        // None of above
        else {
            debug && show( 'Could not export the library.' );
        }
    };
    return loader( "getXPath", [], { getXPath: getXPath } );
})();
*/

export { getXPath };
