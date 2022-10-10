// Write your test here

const {Node, isSame} = require("./challenge02");

let p = null;
let pTwo = null;
let pThree = null;
let q = null;
let qTwo = null;
let qThree = null;

describe("test challenge 02", () => {
    beforeAll(() => {
       p = new Node(1);
       pTwo = new Node(2);
       pThree = new Node(3);
      p.left = pTwo;
      p.right = pThree;
      q = new Node(1);
      qTwo = new Node(2);
      qThree = new Node(3);
      q.left = qTwo;
      q.right = qThree;

    });
  it("test example 1", () => {
    
    const checker = isSame(p,q);
    expect(checker).toBeTruthy();
  });

  
});
