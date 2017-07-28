// GLOBAL VARIABLES
var canvas;
var particleArray = new ParticleArray();
var globalBest = new Position(null, null);
var goal = new Position(null, null);
var MAX_PARTICLES = 1000;
var PARTICLE_SIZE = 2;

// ON DOCUMENT LOAD
$(document).ready(function(){

  // SETUP
  canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var canvasRectangle = canvas.getBoundingClientRect();
  context.fillStyle = "#ff2626";
  setCanvasSize();

  particleArray.initializeParticles();

  gameClock();

  // LISTENERS
  $(window).resize(setCanvasSize);

  $("body").on("click", "canvas", setGoal);

  //FUNCTIONS
  function gameClock() {
    console.log("Tick: BEGIN");
    setInterval(draw, 100);
  }

  function draw() {
    console.log("Tick: UPDATE_CANVAS");
    setCanvasSize();
    console.log("Tick: DRAW_PARTICLES");
    particleArray.drawParticles();
    console.log("Tick: UPDATE_PARTICLES");
    particleArray.updateParticles();
  }

  function setCanvasSize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function setGoal(event) {
    var x = event.clientX;
    var y = event.clientY;
    goal = new Position(x, y);
    console.log("SET_GOAL: "+x+" "+y);
  }

});
