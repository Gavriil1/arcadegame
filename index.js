const canvas = document.querySelector('canvas');
// console.log('Yes I can connect to canvas')
// AA     console.log(canvas);
const c = canvas.getContext('2d');

//od  vaue  
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

 canvas.width = 1024;
 canvas.height = 576;


// payer script
class Player {
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
                x: canvas.width/2 - this.width/2,
                y: canvas.height - this.height - 20
            }
        }
    }
    draw(){
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if (this.image){
         this.draw()
         this.position.x += this.velocity.x
        }
    }
}
// projectie script
class Projectile {
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.radius = 7
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'red'
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

}
// invaders
class Invader {
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
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  
    update() {
      if (this.image) {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.x + this.width >= canvas.width || this.position.x  <= 0 ){
            this.velocity.x = -this.velocity.x;
        }
      }
    }
  }
// Creating couds of invaders everywhere


//constsant variabes of the game
const player = new Player()
const projectiles = []
//const invader1 = new Invader(0, 0); // (0, 0) position

// here I work on grid
let myInvaderArray = []

for (let x = 1; x < 6; x++){
    for (let y = 0; y < 2; y++){
        myInvaderArray.push(
            new Invader(        
                x,
                y
            )
        )
        //console.log(myInvaderArray)
    }
}
  
// console.log(myInvaderArray)


//key isteners
const keys = {
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
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    // Game manual text
    
    //console.log('before spacepressed is 0')
    // if(keys.space.pressed){
    //    console.log('space for text pressed')
    //     spacepress = spacepress +1
    //   console.log(spacepress)
    // }


    if(spacepress === 0){
    //text in the center of the screen: 
    c.font = '30px Arial';
    c.fillStyle = 'white';
    c.textAlign = 'center';
    c.fillText('To play a game use "A" and "D" to move and "S" to fire', 
    canvas.width/2, canvas.height/2);
    } 
    //else {
    //    console.log('nothing to see here')
    //}



    
    player.update()
    // animation of projecties
    projectiles.forEach((projectile, index) => {
        if(projectile.position.y + projectile.radius <=0){
            projectiles.splice(index, 1)
        } else {
            projectile.update()
        }
    })
    //payer veocity
    // if(keys.a.pressed && player.position.x >= 0){
    //    console.log('a option in animate')
    //    player.velocity.x = -5
   // } else if (keys.d.pressed && player.position.x + player.width <= canvas.width ){
    //    console.log('d option in animate')
    //    player.velocity.x = 5
    //} else {
    //    console.log('a or d received but there is no move')
    //    player.velocity.x = 0
    //}

    //if(keys.a.pressed){
    //    console.log('keys.a.pressed is true')
    //}

    //console.log(keys.a.pressed)

    //if(keys.a.pressed && player.position.x >= 0){
    //    console.log('keys.a.pressed && player.position.x >= 0 is true')
    //}

     //payer veocity
     if(keys.a.pressed && player.position.x >= 0){
        console.log('a option in animate')
        player.velocity.x = -5
    } else if (keys.d.pressed && player.position.x + player.width <= canvas.width ){
        console.log('d option in animate')
        player.velocity.x = 5
    } else {
        //console.log('a or d received but there is no move')
        player.velocity.x = 0
    }




   //try to type objects in the array
   myInvaderArray.forEach((invad, i) => { invad.update();
    
    projectiles.forEach((projectile,j) => {
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
                  const projectileFound = projectiles.find(
                    (projectile2) => projectile2 === projectile
                  )
      

                myInvaderArray.splice(i, j)
                projectiles.splice(i, j)
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
        c.font = '30px Arial';
        c.fillStyle = 'white';
        c.textAlign = 'center';
        c.fillText('Congrats, You won! To play again please refresh browser page.', 
        canvas.width/2, canvas.height/2);
   }
}

animate()


// Trying to activate browser keys
//function sendKey(key) {
    //console.log('send key triggered succesfuy and pressed key is : ')
    //console.log(key)
//    console.log("html listener " + key);
//    var canvas = document.getElementById("myCanvas");
    //console.log(canvas)
// canvas.focus();
//    var event = new KeyboardEvent("keydown", {"key": key});
  //   canvas.dispatchEvent(event);
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
            // console.log('keydown keys.a.pressed before' +  keys.a.pressed)     
            keys.a.pressed = true
           // console.log('keydown keys.a.pressed after' +  keys.a.pressed)  
            break
        case 'd':
            console.log('right down')
            spacepress = spacepress +1
            keys.d.pressed = true
            break
        case 's':
            console.log('space')
            spacepress = spacepress +1
            //console.log('the vaue of spacetress is ')
            //console.log(spacepress)



            //projecti work
            projectiles.push(new Projectile({
                position: {
                    x:player.position.x + player.width/2,
                    y:player.position.y
                },
                velocity: {
                    x:0,
                    y:-10
                }
            }
            ))
            //console.log(projectiles)
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
            console.log('keyup keys.a.pressed before' +  keys.a.pressed)  
            keys.a.pressed = false
            console.log('keyup keys.a.pressed before' +  keys.a.pressed)  
            break
        case 'd':
            console.log('right up')
            keys.d.pressed = false
            break
        case 's':
            console.log('space up')
            
            break
    }
})