const kanhtml = document.querySelector('canvas');
// console.log('Yes I can connect to kanhtml')
// AA     console.log(kanhtml);
const d = kanhtml.getContext('2d');

//od  vaue  
//kanhtml.width = window.innerWidth;
//kanhtml.height = window.innerHeight;

 kanhtml.width = 1024;
 kanhtml.height = 576;


// payer script
class Archer {
    constructor(){
       

        this.velocity = {
            x:0,
            y:0
        }

        this.rotation = 0

        const image = new Image()
        image.src = "assets/images/cartoon-martial-arts-character-archery_4042629.png"
        image.onload = () => {
            const scale = 0.05
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x: kanhtml.width/2 - this.width/2,
                y: kanhtml.height - this.height - 20
            }
        }
    }
    draw(){
        // d.fillStyle = 'red'
        // d.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        d.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if (this.image){
         this.draw()
         this.position.x += this.velocity.x
        }
    }
}
// projectie script
class Arrow {
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.radius = 7
    }

    draw() {
        d.beginPath()
        d.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        d.fillStyle = 'red'
        d.fill()
        d.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

}
// invaders
class Spartan {
    constructor(x, y) {
      this.velocity = {
        x: 3,
        y: 0
      };
      
  
      const image = new Image();
      image.src = "assets/images/ancient-greek-spartan-warrior-6839912.png";
      image.onload = () => {
        const scale = 0.1;
        this.image = image;
        this.width = image.width * scale;
        this.height = image.height * scale;
        this.position = {
          x: x * this.width, // set initial x position based on x parameter
          y: y * this.height // set initial y position based on y parameter
        };
      };
    }
  
    draw() {
      d.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  
    update() {
      if (this.image) {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.x + this.width >= kanhtml.width || this.position.x  <= 0 ){
            this.velocity.x = -this.velocity.x;
        }
      }
    }
  }
// Creating couds of invaders everywhere


//constsant variabes of the gameaaa
const archer = new Archer ()
const arrows = []
//const invader1 = new Spartan(0, 0); // (0, 0) position

// here I work on grid
let myInvaderArray = []

for (let x = 1; x < 6; x++){
    for (let y = 0; y < 2; y++){
        myInvaderArray.push(
            new Spartan(        
                x,
                y
            )
        )
        //console.log(myInvaderArray)
    }
}
  
// console.log(myInvaderArray)


//key isteners
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
// variabe to disapear text
let spacepress = 0



function animate() {
    requestAnimationFrame(animate)
    d.fillStyle = 'black'
    d.fillRect(0, 0, kanhtml.width, kanhtml.height)
    // Game manual text
    
    //console.log('before spacepressed is 0')
    // if(keycodes.space.pressed){
    //    console.log('space for text pressed')
    //     spacepress = spacepress +1
    //   console.log(spacepress)
    // }


    if(spacepress === 0){
    //text in the center of the screen: 
    d.font = '30px Arial';
    d.fillStyle = 'white';
    d.textAlign = 'center';
    d.fillText('To play a game use "A" and "D" to move and "S" to fire', 
    kanhtml.width/2, kanhtml.height/2);
    } 
    //else {
    //    console.log('nothing to see here')
    //}



    
    archer.update()
    // animation of projecties
    arrows.forEach((projectile, index) => {
        if(projectile.position.y + projectile.radius <=0){
            arrows.splice(index, 1)
        } else {
            projectile.update()
        }
    })
    //payer veocity
    // if(keycodes.a.pressed && archer.position.x >= 0){
    //    console.log('a option in animate')
    //    archer.velocity.x = -5
   // } else if (keycodes.d.pressed && archer.position.x + archer.width <= kanhtml.width ){
    //    console.log('d option in animate')
    //    archer.velocity.x = 5
    //} else {
    //    console.log('a or d received but there is no move')
    //    archer.velocity.x = 0
    //}

    //if(keycodes.a.pressed){
    //    console.log('keycodes.a.pressed is true')
    //}

    //console.log(keycodes.a.pressed)

    //if(keycodes.a.pressed && archer.position.x >= 0){
    //    console.log('keycodes.a.pressed && archer.position.x >= 0 is true')
    //}

     //payer veocity
     if(keycodes.a.pressed && archer.position.x >= 0){
        console.log('a option in animate')
        archer.velocity.x = -5
    } else if (keycodes.d.pressed && archer.position.x + archer.width <= kanhtml.width ){
        console.log('d option in animate')
        archer.velocity.x = 5
    } else {
        //console.log('a or d received but there is no move')
        archer.velocity.x = 0
    }




   //try to type objects in the array
   myInvaderArray.forEach((invad, i) => { invad.update();
    
    arrows.forEach((projectile,j) => {
        if(
            projectile.position.y - projectile.radius <=
            invad.position.y + invad.height &&
          projectile.position.x + projectile.radius >= invad.position.x &&
          projectile.position.x - projectile.radius <=
            invad.position.x + invad.width &&
          projectile.position.y + projectile.radius >= invad.position.y
        ){
            setTimeout(() => {

                const invaderFound = myInvaderArray.find(
                    (invader2) => invader2 === invad
                  )
                  const projectileFound = arrows.find(
                    (projectile2) => projectile2 === projectile
                  )
      

                myInvaderArray.splice(i, j)
                arrows.splice(i, j)
                console.log(myInvaderArray.length)
            }, 0 )
        }
    })


    }
   )
   //console.log('out of the oop enth of myInvaderArray')
   //console.log(myInvaderArray.length)
   if(myInvaderArray.length === 0){
        //console.log('congrats you won')
        //text which informs user that he won and how to pay again 
        d.font = '30px Arial';
        d.fillStyle = 'white';
        d.textAlign = 'center';
        d.fillText('Congrats, You won! To play again please refresh browser page.', 
        kanhtml.width/2, kanhtml.height/2);
   }
}

animate()


// Trying to activate browser keycodes
//function sendKey(key) {
    //console.log('send key triggered succesfuy and pressed key is : ')
    //console.log(key)
//    console.log("html listener " + key);
//    var kanhtml = document.getElementById("myCanvas");
    //console.log(kanhtml)
// kanhtml.focus();
//    var event = new KeyboardEvent("keydown", {"key": key});
  //   kanhtml.dispatchEvent(event);
 //   console.log("event variable is :"+ event)
 //}

 // Send buttons events to KeyboardEvent

 function sendKey(key) {
    console.log("sendKey function received a key for key down");
    let event = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(event);
  }
  
  function unSendKey(key) {
    console.log("unSend function received the key for key up");
    let event1 = new KeyboardEvent('keyup', { key });
    setTimeout(function(){window.dispatchEvent(event1);}, 100);
  }
  




//event istener when we press the buttons
window.addEventListener('keydown', ({ key }) => {
    
    console.log("Js listener " + key);
    switch (key) {
        case 'a':
            
            console.log('left down')
            spacepress = spacepress +1
            // console.log('keydown keycodes.a.pressed before' +  keycodes.a.pressed)     
            keycodes.a.pressed = true
           // console.log('keydown keycodes.a.pressed after' +  keycodes.a.pressed)  
            break
        case 'd':
            console.log('right down')
            spacepress = spacepress +1
            keycodes.d.pressed = true
            break
        case 's':
            console.log('space')
            spacepress = spacepress +1
            //console.log('the vaue of spacetress is ')
            //console.log(spacepress)



            //projecti work
            arrows.push(new Arrow({
                position: {
                    x:archer.position.x + archer.width/2,
                    y:archer.position.y
                },
                velocity: {
                    x:0,
                    y:-10
                }
            }
            ))
            //console.log(arrows)
            break
    }
})




// event istener when we unpress the button

//buttons on the screen
window.addEventListener('keyup', ({ key }) => {
    console.log('keyup event listener received key from unsendKey Function')
    switch (key) {
        case 'a':
            
       
            console.log('left up')
            console.log('keyup keycodes.a.pressed before' +  keycodes.a.pressed)  
            keycodes.a.pressed = false
            console.log('keyup keycodes.a.pressed before' +  keycodes.a.pressed)  
            break
        case 'd':
            console.log('right up')
            keycodes.d.pressed = false
            break
        case 's':
            console.log('space up')
            
            break
    }
})
