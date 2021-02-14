
class Blob {
    constructor() {
        this.r = 30 + 70*random()
        this.x = this.r + (w - 2*this.r)*random()
        this.y = this.r + (h - 2*this.r)*random()
        this.vx = 10*random()
        this.vy = 10*random()
    }
    update() {
        this.x += this.vx; this.y += this.vy
        if (this.x - this.r <=0 || this.x + this.r >= w) this.vx*=-1
        if (this.y - this.r <=0 || this.y + this.r >= h) this.vy*=-1
    }
}

let blobs = []
function num(n) { blobs = []; for (let i=0; i<n; i++) blobs.push(new Blob()) }

createCanvas(900, 600)
loadPixels()

num(1)

loop = () => {
    for (let i=0; i<=pixels.length; i+=4) {
        let sum = 0
        for (let b of blobs) sum += 140*b.r/dist(position(i)[0], position(i)[1], b.x, b.y)
        pixels[i] = pixels[i+1] = pixels[i+2] = 255
        pixels[i+3] = sum
    } 
    updatePixels()
    blobs.map(b => {b.update()})
}

