
var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing'
  // how to inherit properties from subclass
  // without assigning new instance to the constructor
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;