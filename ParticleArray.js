class ParticleArray {
  constructor() {
    this.particleArray = Array();
  }

  initializeParticles() {

    for (var i = 0; i < MAX_PARTICLES; i++) {

      var xMin = canvas.getBoundingClientRect().left;
      var xMax = canvas.getBoundingClientRect().right;
      var yMin = canvas.getBoundingClientRect().bottom;
      var yMax = canvas.getBoundingClientRect().top;

      var xPos = (Math.random()*(xMax-xMin))+xMin;
      var yPos = (Math.random()*(yMax-yMin))+yMin;

      var particle = new Particle(new Position(xPos, yPos));
      this.particleArray.push(particle);

    }
  }

  drawParticles() {
    for (var i = 0; i < this.particleArray.length; i++) {
      if(this.particleArray[i].position == globalBest)
        canvas.getContext("2d").fillStyle = "#ff2626";
      canvas.getContext("2d").fillRect(this.particleArray[i].position.xPos, this.particleArray[i].position.yPos, PARTICLE_SIZE, PARTICLE_SIZE);
      canvas.getContext("2d").fillStyle = "#000";
    }
  }

  updateParticles() {
    if(!goal.isNull()) {
      for (var i = 0; i < this.particleArray.length; i++) {
        this.particleArray[i].updateParticle();
      }
    }
  }

  getParticles() {
    return this.particleArray;
  }
}
