
/// => => => => => => => => => => Math => => => => => => => => => => => => => =>

const pi = Math.PI, e = Math.E;

function sin(x)                             { return Math.sin(x); };
function cos(x)                             { return Math.cos(x); };
function tan(x)                             { return Math.tan(x); };
function asin(x)                            { return Math.asin(x); };
function acos(x)                            { return Math.acos(x); };
function atan(x)                            { return Math.atan(x); };
function abs(x)                             { return Math.abs(x); };
function srqt(x)                            { return Math.sqrt(x); };
function random()                           { return Math.random(); };
function map(value, i1, f1, i2, f2)         { return i2 + (value - i1)*(f2 -i2)/(f1 - i1); };
function dist(x1, y1, x2, y2)               { return srqt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1)); };
function sum(array)                         { let s=0; for (let i=0; i<array.length; i++) s+=array[i]; return s; };

/// => => => => => => => => => => Variables => => => => => => => => => => => => => =>

let canvas, context, w, h;                          // Canvas
let mouseX = 0, mouseY = 0, mouseIsPressed = false; // Mouse
let translatedX = 0, translatedY = 0;               // Translations
let imageData, pixels = [];                         // Pixels 

/// => => => => => => => => => => Main Functions => => => => => => => => => => => => => =>

function loop()                             {};
function main()                             { loop(); requestAnimationFrame(main); };

function createCanvas(width, height=width)  { 
    canvas = document.querySelector("canvas"); context = canvas.getContext("2d");
    canvas.width = width; canvas.height = height; w = width; h = height;
    canvas.addEventListener("mousedown", (event) => { mouseIsPressed = true });
    canvas.addEventListener("mousemove", (event) => { mouseX = map(event.x, 0, w, -translatedX, w - translatedX); mouseY = map(event.y, 0, h, -translatedY, h - translatedY) });
    canvas.addEventListener("mouseup", (event) => { mouseIsPressed = false });
    main()
};

/// => => => => => => => => => => => => => => => => => => => => => => => =>

function background(a,b=a,c=b)              { canvas.style.backgroundColor = `rgb(${a},${b},${c})`; }
function fill(a=0,b=a,c=b)                  { context.fillStyle = `rgb(${a},${b},${c})`; context.fill(); }
function stroke(a=0,b=a,c=b)                { context.strokeStyle = `rgb(${a},${b},${c})`; context.stroke(); }
function strokeWidth(n=10)                  { context.lineWidth = n; }
function clear()                            { context.save(); context.resetTransform(); context.clearRect(0, 0, w, h); context.restore(); }
function line(x1, y1, x2, y2)               { context.beginPath(); context.moveTo(x1, y1); context.lineTo(x2, y2); context.closePath(); }
function ellipse(Px, Py, rX, rY=rX, ang=0)  { context.beginPath(); context.ellipse(Px, Py, rX, rY, ang, 0, 2*pi); context.closePath(); }
function point(Px, Py)                      { context.beginPath(); context.ellipse(Px, Py, 5, 5, 0, 0, 2*pi); context.closePath(); }

/// => => => => => => => => => => => => => => => => => => => => => => => =>

function translate(Nx, Ny)                  { context.translate(Nx, Ny); translatedX += Nx; translatedY += Ny; }

/// => => => => => => => => => => => => => => => => => => => => => => => =>

function loadPixels()                       { imageData = context.getImageData(0, 0, w, h); pixels = imageData.data; }
function updatePixels()                     { context.putImageData(imageData, 0, 0); }
function position(index)                    { return [Math.floor(map(index/4, w*Math.floor(index/(4*w)), w*(Math.floor(index/(4*w)) + 1 ) - 1, 0, w)), Math.floor(index/(4*w))]; }
