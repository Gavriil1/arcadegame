// how to check if the array is 0 to finish the game
https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/

if (arr.length === 0)
 { console.log("Array is empty!") }

 console.log(myInvaderArraymyArray.length)


//Creating Invaders in a signe script

const invader1 = new Invader(0, 0); // (0, 0) position
const invader2 = new Invader(1, 0); // (0, 2) position
const invader3 = new Invader(2, 0); // (0, 0) position
const invader4 = new Invader(3, 2); // (0, 2) position
const invader5 = new Invader(4, 0); // (0, 0) position
const invader6 = new Invader(5, 2); // (0, 2) position
const invader7 = new Invader(6, 0); // (0, 0) position
const invader8 = new Invader(0, 1); // (0, 2) position
const invader9 = new Invader(1, 1); // (0, 0) position
const invader10 = new Invader(2, 1); // (0, 2) position
const invader11 = new Invader(3, 1); // (0, 0) position
const invader12 = new Invader(4, 1); // (0, 2) position
const invader13 = new Invader(5, 1); // (0, 0) position
const invader14 = new Invader(6, 1); // (0, 2) position

lass Invader {
    constructor(x, y) {
      this.x = x
      this.y= y
    }
  }
let myInvaderArray = []

for (let x = 0; x < 10; x++){
    for (let y = 0; y < 2; y++){
        myInvaderArray.push(
            new Invader(        
                x,
                y
            )
        )
        console.log(myInvaderArray)
    }
}
  
console.log(myInvaderArray)