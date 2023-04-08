let font1;
let font2;
let font3;
let bigFont;
let words = ["FONE", "POE", "CINE"];
let currentWord;
let currentFont;
let a;
function preload() {
  //font1 = loadFont('font1.ttf'); // Reemplaza 'font1.ttf' con el nombre del archivo de tu primera fuente
  //font2 = loadFont('font2.ttf'); // Reemplaza 'font2.ttf' con el nombre del archivo de tu segunda fuente
  //font3 = loadFont('font3.ttf'); // Reemplaza 'font3.ttf' con el nombre del archivo de tu tercera fuente
  //bigFont = loadFont('bigFont.ttf'); // Reemplaza 'bigFont.ttf' con el nombre del archivo de la tipografía para "MA"
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  textFont('Helvetica');
  textSize(96);
  textAlign(CENTER, CENTER);
  //frameRate(5); // Cambia la palabra y la fuente una vez por segundo
}

function draw() {
  frameRate(map(mouseX,0,width,1,30));
  a=random([0,255]);
  fill(a);
  background(255-a);
  currentWord = random(words);
  currentFont = random(['Helvetica', 'Georgia', 'Arial','Verdana','Walter Turncoat','Courier','Palatino','Times New Roman','Trebuchet MS']);
  textFont(currentFont);
  textSize(96);
  text(currentWord, width / 2 -60, height / 2);
  textFont('Helvetica');
  textSize(96);
  text("MA", width / 2 + 140, height / 2);
}
