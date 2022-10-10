// Write here the code challenge solution

class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const p = new Node(1);
const pTwo = new Node(2);
const pThree = new Node(3);
p.left = pTwo
p.right = pThree

const q = new Node(1);
const qTwo = new Node(2);
const qThree = new Node(3);
q.left = qTwo;
q.right = qThree;

console.log('Q>>>>>>>>>>>>>',q);
console.log('P>>>>>>>>>>>>>',p);

 function isSame(tree1, tree2) {
    if(tree1.left && tree2.left && tree1.right && tree2.right){
        
    }    

}