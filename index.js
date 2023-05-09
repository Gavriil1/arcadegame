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
       

        this.celerity = {
            x:0,
            y:0
        }

  

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
    draw(){
        // d.fillStyle = 'red'
        // d.fillRect(this.placement.x, this.placement.y, this.width, this.height)
        
        d.drawImage(this.picture, this.placement.x, this.placement.y, this.width, this.height)
    }

    update() {
        if (this.picture){
         this.draw()
         this.placement.x += this.celerity.x
        }
    }
}
// projectie script
class Arrow {
    constructor({placement, celerity}){
        this.placement = placement
        this.celerity = celerity
        this.radius = 7
    }

    draw() {
        d.beginPath()
        d.arc(this.placement.x, this.placement.y, this.radius, 0, Math.PI * 2)
        d.fillStyle = 'red'
        d.fill()
        d.closePath()
    }

    update() {
        this.draw()
        this.placement.x += this.celerity.x
        this.placement.y += this.celerity.y
    }

}
// invaders
class Spartan {
    constructor(x, y) {
      this.celerity = {
        x: 3,
        y: 0
      };
      
  
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
  
    draw() {
      d.drawImage(this.picture, this.placement.x, this.placement.y, this.width, this.height);
    }
  
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
// Creating couds of invaders everywhere


//constsant variabes of the gameaaa
const archer = new Archer ()
const arrows = []
//const invader1 = new Spartan(0, 0); // (0, 0) placement

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
        if(projectile.placement.y + projectile.radius <=0){
            arrows.splice(index, 1)
        } else {
            projectile.update()
        }
    })
    //payer veocity
    // if(keycodes.a.pressed && archer.placement.x >= 0){
    //    console.log('a option in animate')
    //    archer.celerity.x = -5
   // } else if (keycodes.d.pressed && archer.placement.x + archer.width <= kanhtml.width ){
    //    console.log('d option in animate')
    //    archer.celerity.x = 5
    //} else {
    //    console.log('a or d received but there is no move')
    //    archer.celerity.x = 0
    //}

    //if(keycodes.a.pressed){
    //    console.log('keycodes.a.pressed is true')
    //}

    //console.log(keycodes.a.pressed)

    //if(keycodes.a.pressed && archer.placement.x >= 0){
    //    console.log('keycodes.a.pressed && archer.placement.x >= 0 is true')
    //}

     //payer veocity
     if(keycodes.a.pressed && archer.placement.x >= 0){
        console.log('a option in animate')
        archer.celerity.x = -5
    } else if (keycodes.d.pressed && archer.placement.x + archer.width <= kanhtml.width ){
        console.log('d option in animate')
        archer.celerity.x = 5
    } else {
        //console.log('a or d received but there is no move')
        archer.celerity.x = 0
    }




   //try to type objects in the array
   myInvaderArray.forEach((invad, i) => { invad.update();
    
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
