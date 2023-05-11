// The inspiration for this code was taken from: https://www.udemy.com/course/space-invaders-with-javascript-and-html-canvas/
// HTML Canvas
const kanhtml = document.querySelector('canvas');
const d = kanhtml.getContext('2d');
 kanhtml.width = 1024;
 kanhtml.height = 576;
// Archer Script. With this script  we defind properties of an archer. on a screen and his movement.
class Archer {
    constructor(){
        // Motion of the character which he has be default
        this.celerity = {
            x:0,
            y:0
        }
        //Properties of archer: picture, width, height, initial placement on the screen
        const picture = new Image()
        picture.src = "assets/images/cartoon-martial-arts-character-archery_4042629.png"
        picture.onload = () => {
            const scale = 0.05
            this.picture = picture
            this.width = picture.width * scale
            this.height = picture.height * scale
            this.placement = {
                x: kanhtml.width/2 - this.width/2,
                y: kanhtml.height - this.height - 20
            }
        }
    }
    //this function draws character on html canval, with the properties: picture, location(x,y) width and height
    draw(){
        d.drawImage(this.picture, this.placement.x, this.placement.y, this.width, this.height)
    }
    //this function moves the character when user presses keys
    update() {
        if (this.picture){
         this.draw()
         this.placement.x += this.celerity.x
        }
    }
}
// Arrow script
class Arrow {
    //Initial properties of arrows
    constructor({placement, celerity}){
        this.placement = placement
        this.celerity = celerity
        this.radius = 7
    }
    //Function draw arrow on the screen
    draw() {
        d.beginPath()
        d.arc(this.placement.x, this.placement.y, this.radius, 0, Math.PI * 2)
        d.fillStyle = 'red'
        d.fill()
        d.closePath()
    }
    // update function defines movements of the arrows on the screen
    update() {
        this.draw()
        this.placement.x += this.celerity.x
        this.placement.y += this.celerity.y
    }
}
// Class which defines spartan warriors 
class Spartan {
    //motion of Spartans
    constructor(x, y) {
      this.celerity = {
        x: 3,
        y: 0
      };
      
      // Defining properties of Spartans: picture, width, gheight, initial placement etc
      const picture = new Image();
      picture.src = "assets/images/ancient-greek-spartan-warrior-6839912.png";
      picture.onload = () => {
        const scale = 0.1;
        this.picture = picture;
        this.width = picture.width * scale;
        this.height = picture.height * scale;
        this.placement = {
          x: x * this.width, // set initial x placement based on x parameter
          y: y * this.height // set initial y placement based on y parameter
        };
      };
    }
    //function draws spartans on the map
    draw() {
      d.drawImage(this.picture, this.placement.x, this.placement.y, this.width, this.height);
    }
    //this function makes spartans to move
    update() {
      if (this.picture) {
        this.draw();
        this.placement.x += this.celerity.x;
        this.placement.y += this.celerity.y;
        if(this.placement.x + this.width >= kanhtml.width || this.placement.x  <= 0 ){
            this.celerity.x = -this.celerity.x;
        }
      }
    }
  }



//Define arrays for the game
const archer = new Archer ()
const arrows = []
let spartanArray = []
// Adding spartans to spartanArray
for (let x = 1; x < 6; x++){
    for (let y = 0; y < 2; y++){
        spartanArray.push(
            new Spartan(        
                x,
                y
            )
        )
    }
}
  
//Set default value for event listeners
const keycodes = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }  
}
// Variable which we use to delete instructions from the list when the player preses the first key
let spacepress = 0
//Main function which plays the game.
function animate() {
    requestAnimationFrame(animate)
    // Add color to canvas
    d.fillStyle = 'black'
    d.fillRect(0, 0, kanhtml.width, kanhtml.height)
    
    // Write game manual on the canvas
    if(spacepress === 0){
    //text in the center of the screen: 
    d.font = '30px Arial';
    d.fillStyle = 'white';
    d.textAlign = 'center';
    d.fillText('To play a game use "A" and "D" to move and "S" to fire', 
    kanhtml.width/2, kanhtml.height/2);
    } 
    //animation of archer
    archer.update()
    // animation of arrows
    arrows.forEach((projectile, index) => {
        if(projectile.placement.y + projectile.radius <=0){
            arrows.splice(index, 1)
        } else {
            projectile.update()
        }
    })
     //Move the player and fire when player press keys or buttons
     if(keycodes.a.pressed && archer.placement.x >= 0){
        archer.celerity.x = -5
    } else if (keycodes.d.pressed && archer.placement.x + archer.width <= kanhtml.width ){
        archer.celerity.x = 5
    } else {
        archer.celerity.x = 0
    }
   //try to type objects in the array
   spartanArray.forEach((invad, i) => { invad.update();
    //deleting arror and spartan when they meet each other.
    arrows.forEach((projectile,j) => {
        if(
            projectile.placement.y - projectile.radius <=
            invad.placement.y + invad.height &&
          projectile.placement.x + projectile.radius >= invad.placement.x &&
          projectile.placement.x - projectile.radius <=
            invad.placement.x + invad.width &&
          projectile.placement.y + projectile.radius >= invad.placement.y
        ){
            setTimeout(() => {

                const invaderFound = spartanArray.find(
                    (invader2) => invader2 === invad
                  )
                  const projectileFound = arrows.find(
                    (projectile2) => projectile2 === projectile
                  )
                spartanArray.splice(i, j)
                arrows.splice(i, j)
            }, 0 )
        }
    })
    }
   )
   // Inform the user that they have won and explain how to start the game again.
   if(spartanArray.length === 0){
        d.font = '30px Arial';
        d.fillStyle = 'white';
        d.textAlign = 'center';
        d.fillText('Congrats, You won! To play again please refresh browser page.', 
        kanhtml.width/2, kanhtml.height/2);
   }
}
//Call the function sto start the game
animate()

 // Send buttons events to KeyboardEvent
 function sendKey(key) {
    let event = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(event);
  }

  function unSendKey(key) {
    let event1 = new KeyboardEvent('keyup', { key });
    setTimeout(function(){window.dispatchEvent(event1);}, 100);
  }
  
//event listener when we press the buttons
window.addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'a':
            spacepress = spacepress +1 
            keycodes.a.pressed = true 
            break
        case 'd':
            spacepress = spacepress +1
            keycodes.d.pressed = true
            break
        case 's':
            spacepress = spacepress +1
            //project move
            arrows.push(new Arrow({
                placement: {
                    x:archer.placement.x + archer.width/2,
                    y:archer.placement.y
                },
                celerity: {
                    x:0,
                    y:-10
                }
            }
            ))
            break
    }
})

// event listener when we unpress the button
//buttons on the screen
window.addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':    
            keycodes.a.pressed = false
            break
        case 'd':
            keycodes.d.pressed = false
            break
        case 's':
            break
    }
})
