class Particle {
  constructor(position) {
    this.position = position;
    this.velocity = new Position(0, 0);
    this.accCoefficient_one = 1.4;
    this.accCoefficient_two = 1.4;
    this.enertia = 0.7;
    this.best = new Position(null, null);
  }

  getPositon() {
    return this.position.getPosition();
  }

  updateParticle() {

    // UPDATE VELOCITY
    var nostalgia = new Position(this.velocity.xPos*this.enertia, this.velocity.yPos*this.enertia);

    var social = this.best.minus(this.position);
    social.multiply(this.getCraziness(this.accCoefficient_one));

    var envy = globalBest.minus(this.position);
    envy.multiply(this.getCraziness(this.accCoefficient_two));

    this.velocity = nostalgia.addTwo(social, envy);

    // UPDATE POSITION
    this.position = this.position.addOne(this.velocity);

    // EVALUATE PARTICLE FITNESS
    var fitness = goal.distance(this.position);

    // UPDATE PARTICLE'S PERSONAL BEST POSITION
    if(this.best.isNull() || goal.distance(this.best) > fitness)
      this.best = this.position;

    // UPDATE GLOBAL BEST POSITION
    if(globalBest.isNull() || goal.distance(globalBest) > fitness)
      globalBest = this.position;
  }

  getCraziness(coefficient) {
    return new Position(coefficient*Math.random(), coefficient*Math.random());
  }
}
