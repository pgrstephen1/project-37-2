var canvas;
var gameState = 0;
var contestantCount;
var database;
var quiz, question, contestant;

function setup(){
  canvas = createCanvas(800,600);
  database = firebase.database();
  
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

}
