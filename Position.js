class Position {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
  }

  getPosition() {
    return [this.xPos, this.yPos];
  }

  minus(position) {
    if(this.xPos == null || this.yPos == null || position.xPos == null || position.yPos == null)
      return new Position(0, 0);
    else
      return new Position(this.xPos-position.xPos, this.yPos-position.yPos);
  }

  multiply(a) {
    this.xPos = this.xPos*a.xPos;
    this.yPos = this.yPos*a.yPos;
  }

  addTwo(a, b) {
    var x = this.xPos + a.xPos + b.xPos;
    var y = this.yPos + a.yPos + b.yPos;
    return new Position(x, y);
  }
  addOne(a) {
    var x = this.xPos + a.xPos;
    var y = this.yPos + a.yPos;
    return new Position(x, y);
  }

  distance(position) {
    if(this.xPos == null || this.yPos == null || position.xPos == null || position.yPos == null)
      return null;
    else
      return Math.sqrt(Math.pow((this.xPos-position.xPos)+(this.yPos-position.yPos), 2));
  }

  isNull() {
    if(this.xPos == null || this.yPos == null)
      return true;
    else
      return false;
  }

  print() {
    console.log(this.xPos+" "+this.yPos);
  }

}
