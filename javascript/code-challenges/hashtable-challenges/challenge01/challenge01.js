"use strict";

// by creating and check the copmliment of each element we are going to test arr,sum function

class HashTable {
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  set(key,value) {
    let data = { [key]: value} ;

    if(this.storage[key]){
        let tempBucket = this.storage[key] ;
        tempBucket.append(data);
    }else {
        const bucket = new LinkedList();
        bucket.append(data);
        this.storage[key] = bucket;
    }
  }

  get(key){
    if(this.storage[key]){
        let temp = this.storage[key];
        return temp;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let tempPointer = this.head;
      while (tempPointer.next) {
        tempPointer = tempPointer.next;
      }
    }
  }

  getByValue(value) {
    if (!this.head) {
      console.log("bucket is empty");
    } else {
      let tempPointer = this.head;

      while (tempPointer) {
        if (tempPointer.value === value) {
          return tempPointer.value;
        }
        tempPointer = tempPointer.next;
      }
    }
    return false;
  }
}

function isSumEqualHash(arr, value) {
    const compliments = new HashTable(200);
    for (let i = 0; i < arr.length; i++){
      if (arr[i] <= value) {
        let compHolder = value - arr[i];
        compliments.set(compHolder, arr[i]);
      }
      if (compliments.get(arr[i+1])) {
        return true;
      }
    }
    return false;
  }

function isSumEqual(arr, value) {
  const compliments = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= value) {
      let compHolder = value - arr[i];
      compliments[compHolder] = arr[i];
    }
    if (compliments[arr[i + 1]]) {
      return true;
    }
  }
  return false;
}

function isSumEqual3(array, value) {
  for (let i = 0; i < array.length; i++) {
    let tempElement = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (tempElement + array[j] === value) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  isSumEqual,
  isSumEqual3,
  isSumEqualHash,
  HashTable
};

// function isSumEqual2(arr, value) {
//     const compliments = {};
//     for(let i = 0 ; i <arr.length ; i++ ) {
//         if(arr[i] <= value){
//             let compHolder = value - arr[i];
//             compliments[compHolder] = arr[i];
//         }
//             if(compliments.hasOwnProperty(arr[i+1])){
//                 return true;
//             }
//     }
//     return false;
// }

// console.log(isSumEqual2(array, k));
