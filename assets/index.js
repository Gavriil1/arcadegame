const canvas = document.querySelector('canvas');
console.log(canvas);
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
        this.radius = 3
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
    constructor( ) {
      this.velocity = {
        x: 0,
        y: 0
      }
  
      const image = new Image()
      image.src = 'assets/images/invader.png'
      image.onload = () => {
        const scale = 1
        this.image = image
        this.width = image.width * scale
        this.height = image.height * scale
        this.position = {
          x: 0,
          y: 0
        }
      }
    }
    draw(){
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        c.drawImage(this.image,
             this.position.x,
              this.position.y,
               this.width,
                this.height)
    }

    update() {
        if (this.image){
         this.draw()
         this.position.x += this.velocity.x
         this.position.y += this.velocity.y
        }
    }
}
// Creating couds of invaders everywhere
class Grid {
    constructor(){
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.invaders = [ new Invader()]

        for(let i = 0; i < 10; i++){
            this.invaders.push(new Invader({
                position: {
                    x: 0,
                    y: 0
                }
            }
            ))
        }
        console.log(this.invaders)
    }
    update(){

    }
}

const player = new Player()
const projectiles = []
const grids = [new Grid()]
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
    
    player.update()
    // animation of projecties
    projectiles.forEach((projectile, index) => {
        if(projectile.position.y + projectile.radius <=0){
            projectiles.splice(index, 1)
        } else {
            projectile.update()
        }
    })
    //creating grid of invaders
//creating grid of invaders
    grids.forEach(grid => {
        grid.update()
        grid.invaders.forEach(invader => {
        invader.update()
        })
    })

    if(keys.a.pressed && player.position.x >= 0){
        //console.log('a option in animate')
        player.velocity.x = -5
    } else if (keys.d.pressed && player.position.x + player.width <= canvas.width ){
        //console.log('d option in animate')
        player.velocity.x = 5
    } else {
        player.velocity.x = 0
    }
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
            console.log(projectiles)
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


