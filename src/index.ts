export type Options = {
    ignoreId: boolean
};

const defaultOptions: Options = {
    ignoreId: false
};

const isNodeAvailable = typeof Node !== 'undefined';

const NodeTypes = {
    ELEMENT_NODE        : isNodeAvailable ? Node.ELEMENT_NODE       : 1,
    TEXT_NODE           : isNodeAvailable ? Node.TEXT_NODE          : 3,
    DOCUMENT_TYPE_NODE  : isNodeAvailable ? Node.DOCUMENT_TYPE_NODE : 10
};


export default function getXPath( el: any, customOptions?: Partial< Options > ): string {
    const options = { ...defaultOptions, ...customOptions };
    let nodeElem = el;
    if ( nodeElem && nodeElem.id && ! options.ignoreId ) {
        return "//*[@id=\"" + nodeElem.id + "\"]";
    }
    let parts: string[] = [];
    while ( nodeElem && ( NodeTypes.ELEMENT_NODE === nodeElem.nodeType || NodeTypes.TEXT_NODE === nodeElem.nodeType ) ) {
        let numberOfPreviousSiblings = 0;
        let hasNextSiblings = false;
        let sibling = nodeElem.previousSibling;
        while ( sibling ) {
            if ( sibling.nodeType !== NodeTypes.DOCUMENT_TYPE_NODE &&
                sibling.nodeName === nodeElem.nodeName
            ) {
                numberOfPreviousSiblings++;
            }
            sibling = sibling.previousSibling;
        }
        sibling = nodeElem.nextSibling;
        while ( sibling ) {
            if ( sibling.nodeName === nodeElem.nodeName ) {
                hasNextSiblings = true;
                break;
            }
            sibling = sibling.nextSibling;
        }
        let prefix = nodeElem.prefix ? nodeElem.prefix + ":" : "";
        let nth = numberOfPreviousSiblings || hasNextSiblings
            ? "[" + ( numberOfPreviousSiblings + 1 ) + "]"
            : "";
        let piece = ( nodeElem.nodeType != NodeTypes.TEXT_NODE )
            ? prefix + nodeElem.localName + nth
            : 'text()' + ( nth || '[1]' );

        parts.push( piece );
        nodeElem = nodeElem.parentNode;
    }
    return parts.length ? "/" + parts.reverse().join( "/" ) : "";
}
