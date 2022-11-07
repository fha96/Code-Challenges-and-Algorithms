'use strict';

const { isSumEqual, isSumEqual3, HashTable, isSumEqualHash } = require("./challenge01");




describe('Test challenge01', () => {


    it('Test isSumEqual function', () => {
        const array = [7,2,9,1,5,null,14]; 
        const k = 3;
        const result = isSumEqual(array, 3);
        expect(result).toBe(true);

    });
    // it('Test isSumEqual3 function', () => {
    //     const array = [7,2,9,1,5,null,14]; 
    //     const k = 3;
    //     const result = isSumEqual3(array, 22);
    //     expect(result).toBe(false);
    // });
    it('Test isSumEqualHash function', () => {
        const array = [7,2,9,1,5,null,14]; 
        const k = 3;
        const result = isSumEqualHash(array, k);
        expect(result).toBe(true);
    });
});
