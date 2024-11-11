function Task(id, descr, difficulty, coinValue = 0, xpValue = 0) {
  if (!id | !descr | !difficulty) {
    throw new Error("id, description, and difficulty are required fields");
  }
  this.id = id;
  this.descr = descr;
  this.difficulty = difficulty;
  this.coinValue = coinValue;
  this.xpValue = xpValue;

  this.setRewards(this.difficulty);
}

Task.prototype.setRewards = function (difficulty) {
  if (difficulty == "easy") {
    this.coinValue = 3;
    this.xpValue = 5;
  } else if (difficulty == "medium") {
    this.coinValue = 5;
    this.xpValue = 10;
  } else if (difficulty == "hard") {
    this.coinValue = 10;
    this.xpValue = 20;
  } else {
    throw new Error("Invalid difficulty provided");
  }
};

Task.prototype.getValues = function () {
  return [this.id, this.descr, this.difficulty, this.coinValue, this.xpValue];
};

module.exports = Task;
