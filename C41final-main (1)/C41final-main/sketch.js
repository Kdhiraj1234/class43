var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img,f1,f1image;
var f1W,f1H;
var obstacleGroup;
var carSound, slidingSound;
var passedFinish;
var Bimg,Simg,Gimg;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  f1image = loadImage("images/f1.png");
  carSound = loadSound("sound/car.mp3");
  slidingSound = loadSound("sound/slinding.mp3");
  Simg = loadImage("images/silver.png");
  Gimg = loadImage("images/gold.png");
  Bimg = loadImage("images/bronze.png");

}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();

  obstacleGroup = createGroup();
  for(i = 0 ; i < 5; i++){
  f1W = random(200,950);
  f1H = random(-height*4,height-300);
  f1 = createSprite(f1W,f1H);
  f1.addImage(f1image);
  obstacleGroup.add(f1);
  }
  
  
  
}


function draw(){
   //start the game
   background(200, 200, 255);



   //start the game
   if (playerCount === 4 && finishedPlayers === 0) {
     game.update(1);
   }
 
   //start the game for real
  
   if (gameState === 1) {
     game.play();
   }

   if(finishedPlayers === 4){
    game.update(2);
  }

  if (gameState === 2 && finishedPlayers === 4) {
     game.displayRanks();
     console.log("End");
   }}
 
  
