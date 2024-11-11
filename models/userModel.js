function User(
  id,
  username,
  level = 1,
  xp = 0,
  coins = 0,
  weapon = 0,
  hat = 0,
  weaponInventory = [0],
  hatInventory = [0]
) {
  if (!id | !username) {
    throw new Error("id and username are required fields");
  }
  this.id = id;
  this.username = username;
  this.level = level;
  this.xp = xp;
  this.coins = coins;
  this.weapon = weapon;
  this.hat = hat;
  this.weaponInventory = weaponInventory;
  this.hatInventory = hatInventory;
}

User.prototype.awardXP = function (xp) {
  this.xp += xp;
};

User.prototype.awardCoin = function (coin) {
  this.coins += coin;
};

User.prototype.spendCoin = function (coin) {
  this.coins -= coin;
};

User.prototype.addWeapon = function (item) {
  this.weaponInventory.push(item);
};

User.prototype.addHat = function (item) {
  this.hatInventory.push(item);
};

User.fromData = function (data) {
  return new User(
    data.id,
    data.username,
    data.level,
    data.xp,
    data.coins,
    data.weapon,
    data.hat,
    data.weaponInventory,
    data.hatInventory
  );
};

module.exports = User;
