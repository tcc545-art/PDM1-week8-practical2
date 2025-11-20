let text1;
let parts;

function preload(){
        text1 = loadStrings('assets/imdb_labelled.txt');
}
function setup(){
    createCanvas(400,400);
    parts = text1(0).split('\t');
}
function draw(){
    
   background(0);
    textAlign(LEFT, TOP);
    textSize(16);
    fill(random(255),random(255),random(255));
    text(text1,10,10);
}
function keypressed(){
 let randomIndex = floor(random(parts.length))
}
    
