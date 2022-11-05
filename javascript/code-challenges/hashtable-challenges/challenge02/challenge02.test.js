'use strict';

const { repeatedValue } = require("./challenge02");


describe('Test Challenge 02', () => {

    it('Test repeatedValue', () => {
        const value = repeatedValue('Fahad ABDEL KAREEM DARWEESH ZIDAN');

        expect(value).toEqual('No repitition');
    });

    it('Test repeatedValue', () => {
        const value = repeatedValue('Fahad ABDEL KAREEM FAHAD ABDEL KAREEM');
        expect(value).toEqual('ABDEL');
    });
});
