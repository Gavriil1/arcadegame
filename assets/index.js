const canvas = document.querySelector('canvas');
//console.log(canvas);
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// payer script
class Player {
    constructor(){
       

        this.velocity = {
            x:0,
            y:0
        }

        this.rotation = 0

        const image = new Image()
        image.src = "assets/images/spaceship.png"
        image.onload = () => {
            const scale = 0.15
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
      this.rotation = 0;
  
      const image = new Image();
      image.src = "assets/images/invader.png";
      image.onload = () => {
        const scale = 3;
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

for (let x = 1; x < 11; x++){
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




function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.fillText('Cick A D and space to start a game', 100, 100)
    // invader1.update();
    //invader2.update();
    //invader3.update();
    //invader4.update();
    //invader5.update();
    //invader6.update();
    //invader7.update();
    //invader8.update();
    //invader9.update();
    //invader10.update();
    //invader11.update();
    //invader12.update();
    //invader13.update();
    //invader14.update();
 

    
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
    if(keys.a.pressed && player.position.x >= 0){
        //console.log('a option in animate')
        player.velocity.x = -5
    } else if (keys.d.pressed && player.position.x + player.width <= canvas.width ){
        //console.log('d option in animate')
        player.velocity.x = 5
    } else {
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
        //creating grid of invaders
    //grids.forEach((grid) => {
    //    grid.update();
    //    grid.invaders.forEach((invader) => {
    //      invader.update();
    //    });
    //  });

}

animate()

//event istener when we press the buttons
window.addEventListener('keydown', ({ key }) => {
    
    switch (key) {
        case 'a':
            //console.log('left down')      
            keys.a.pressed = true
            break
        case 'd':
            //console.log('right down')
            keys.d.pressed = true
            break
        case ' ':
            //console.log('space')
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
window.addEventListener('keyup', ({ key }) => {
    
    switch (key) {
        case 'a':
            //console.log('left up')
            
            keys.a.pressed = false
            break
        case 'd':
            //console.log('right up')
            keys.d.pressed = false
            break
        case ' ':
            //console.log('space')
            
            break
    }
})


