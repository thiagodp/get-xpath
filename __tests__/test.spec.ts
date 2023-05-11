import getXPath from "../src";
import { JSDOM } from "jsdom";

// const getXPath = X.getXPath;

describe( 'getXPath', () => {

    let document;

    const html = `
<html>
    <body>
    </body>
</html>
`;

    beforeEach( () => {
        const jsdom = new JSDOM( html );
        const { window } = jsdom;

        // Make Node object constants available to the global object
        // @see https://github.com/enzymejs/enzyme/blob/master/docs/guides/jsdom.md#using-enzyme-with-jsdom
        if ( globalThis ) {
            globalThis.Node = window.Node;
        // @ts-ignore
        } else if ( global ) {
            // @ts-ignore
            global.Node = window.Node;
        }

        document = window.document;
        // console.log( document );
    } );

    afterEach( () => {
        document = null;
    } );

    it( 'empty element', () => {
        const e = document.createElement( 'div' );
        document.body.appendChild( e );
        const r = getXPath( e );
        expect( r ).toEqual( '/html/body/div' );
    } );

    it( 'element with id', () => {
        const e = document.createElement( 'span' );
        e.id = 'foo'
        document.body.appendChild( e );
        const r = getXPath( e );
        expect( r ).toEqual( '//*[@id="foo"]' );
    } );

    it( 'element with id and ignoreId options is on', () => {
        const e = document.createElement( 'span' );
        e.id = 'foo'
        document.body.appendChild( e );
        const r = getXPath( e , { ignoreId: true } );
        expect( r ).toEqual( '/html/body/span' );
    } );

    it( 'single leaf element', () => {
        const e1 = document.createElement( 'div' );
        const e2 = document.createElement( 'span' );
        const e3 = document.createElement( 'button' );
        e1.appendChild( e2 );
        e2.appendChild( e3 );
        document.body.appendChild( e1 );

        const r = getXPath( e3 );
        expect( r ).toEqual( '/html/body/div/span/button' );
    } );

    it( 'leaf elements', () => {
        const e1 = document.createElement( 'div' );
        const e2 = document.createElement( 'span' );
        const e3 = document.createElement( 'button' );
        const e4 = document.createElement( 'button' );
        e1.appendChild( e2 );
        e2.appendChild( e3 );
        e2.appendChild( e4 );
        document.body.appendChild( e1 );

        const r = getXPath( e3 );
        expect( r ).toEqual( '/html/body/div/span/button[1]' );

        const r2 = getXPath( e4 );
        expect( r2 ).toEqual( '/html/body/div/span/button[2]' );
    } );

    it( 'leaf elements inside parent with elements', () => {
        const div = document.createElement( 'div' );
        const span1 = document.createElement( 'span' );
        const span1button1 = document.createElement( 'button' );
        const span1button2 = document.createElement( 'button' );
        const span2 = document.createElement( 'span' );
        const span2button = document.createElement( 'button' );
        div.appendChild( span1 );
        div.appendChild( span2 );
        span1.appendChild( span1button1 );
        span1.appendChild( span1button2 );
        span2.appendChild( span2button );
        document.body.appendChild( div );

        const rA = getXPath( span1button2 );
        expect( rA ).toEqual( '/html/body/div/span[1]/button[2]' );

        const rB = getXPath( span2button );
        expect( rB ).toEqual( '/html/body/div/span[2]/button' );
    } );

} );
