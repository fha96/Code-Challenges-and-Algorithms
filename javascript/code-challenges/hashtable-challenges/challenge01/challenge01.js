'use strict';


// by creating and check the copmliment of each element we are going to test arr,sum function


const array = [7,2,9,1,5,null,14]; 
const k = 3;

function isSumEqual(arr, value) {
    const compliments = {};
    for(let i = 0 ; i <arr.length ; i++ ) {
        if(arr[i] <= value){
            let compHolder = value - arr[i];
            compliments[compHolder] = arr[i];
        }    
            if(compliments[arr[i+1]]){
                return true;
            }
    }
    return false;
}


console.log(isSumEqual(array, k));


// function isSumEqual2(arr, value) {
//     const compliments = {};
//     for(let i = 0 ; i <arr.length ; i++ ) {
//         if(arr[i] <= value){
//             let compHolder = value - arr[i];
//             compliments[compHolder] = arr[i];
//         }
//         let keys = Object.keys(compliments);    
//             if(compliments.hasOwnProperty(arr[i+1])){
//                 return true;
//             }
//     }
//     return false;
// }


// console.log(isSumEqual2(array, k));