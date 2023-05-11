// Create trainer object using object literals
const trainer = {
  name: "Ash",
  age: 10,
  pokemon: [],
  friends: {
    brock: ["Onix", "Geodude"],
    misty: ["Staryu", "Starmie"],
  },
  talk: function() {
    console.log("Pikachu! I choose you!");
  }
};

// Access trainer object properties using dot and square bracket notation
console.log(trainer.name); // "Ash"
console.log(trainer.age); // 10
console.log(trainer["pokemon"]); // []

// Call trainer object method
trainer.talk(); // "Pikachu! I choose you!"

// Create constructor for creating a pokemon
function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = level * 3;
  this.attack = level * 2;
}

// Create tackle method for Pokemon
Pokemon.prototype.tackle = function(target) {
  target.health -= this.attack;
  if (target.health <= 0) {
    this.faint(target);
  }
};

// Create faint method for Pokemon
Pokemon.prototype.faint = function(target) {
  console.log(target.name + " has fainted.");
};

// Instantiate several Pokemon objects using the constructor
const pikachu = new Pokemon("Pikachu", 5);
const bulbasaur = new Pokemon("Bulbasaur", 3);
const charmander = new Pokemon("Charmander", 2);

// Invoke tackle method of one Pokemon object
pikachu.tackle(bulbasaur);

// Display the array of Pokemon objects in the console
console.log([pikachu, bulbasaur, charmander]);
