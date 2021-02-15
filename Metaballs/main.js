
let blobs = []
function setBlobs(n) { for (let i=0; i<n; i++) blobs.push(new Blob()) }

function setup() {
    createCanvas(190, 110)
    setBlobs(10)
    colorMode(HSB)
    pixelDensity(1)
    loadPixels()
}

function draw() {
    for (let x=0; x < width; x++) {
        for (let y=0; y < height; y++) {
            let sum = 0
            for (let i=0; i< blobs.length; i++) {
                let d = Math.sqrt((blobs[i].x - x)*(blobs[i].x - x) + (blobs[i].y - y)*(blobs[i].y - y))
                sum += 100*blobs[i].r/d
            }
            set(x, y, color(sum, 255, 255))
        }
    }

    updatePixels()
    for (let i in blobs) blobs[i].update()
}
