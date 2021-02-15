
class Blob {
    constructor() {
        this.r = 5 + 20*Math.random()
        this.x = width*Math.random()
        this.y = height*Math.random()

        this.vx = 2*Math.random()
        this.vy = 2*Math.random()
    }

    update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x > width || this.x < 0) this.vx*=-1
        if (this.y > height || this.y < 0) this.vy*=-1
    }
}
