const canvas = document.querySelector('canvas');
console.log(canvas);
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor(){
       

        this.velocity = {
            x:0,
            y:0
        }

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

const player = new Player()
const keys = {
    a: {
        pressed: false
    },
    b: {
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

    if(keys.a.pressed){
        player.velocity.x = -5
    } else if (keys.b.pressed) {
        player.velocity.x = 5
    } else {
        player.velocity.x = 0
    }
}

animate()
console.log('hi how are you')
//event istener when we press the buttons
window.addEventListener('keydown', ({ key }) => {
    
    switch (key) {
        case 'a':
            console.log('left down')
            
            keys.a.pressed = true
            break
        case 'd':
            console.log('right down')
            keys.d.pressed = true
            break
        case ' ':
            console.log('space')
            break
    }
})

// event istener when we unpress the button
window.addEventListener('keyup', ({ key }) => {
    
    switch (key) {
        case 'a':
            console.log('left up')
            
            keys.a.pressed = false
            break
        case 'd':
            console.log('right up')
            keys.d.pressed = false
            break
        case ' ':
            console.log('space')
            break
    }
})
