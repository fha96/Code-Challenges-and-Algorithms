'use strict';


const st = 'ASAC is a department at LTUC. ASAC teaches programming in LTUC.';

function repeatedValue(sentence) {
    const temp = sentence.split(' ');
    const words ={};
    for(let index in temp) {
      if(words[temp[index]]){
        return temp[index];
      }else{
        words[temp[index]] = temp[index];
      }
    }
    console.log(words);
    return 'No repitition';
}

console.log(repeatedValue(st));


module.exports = {
    repeatedValue
}