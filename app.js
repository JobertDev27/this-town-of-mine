const intro_modal = document.getElementById("intro-msg");
intro_modal.showModal();

// Resource counter
let food = 0;
let wood = 0;
let stone = 0;

// Labels
const food_lbl = document.getElementById("food-lbl");
const wood_lbl = document.getElementById("wood-lbl");
const stone_lbl = document.getElementById("stone-lbl");

function update_lbl() {
  food_lbl.textContent = parseInt(food, 10);
}

// Event flags

// Resource gen class
class Resource_Generator {
  constructor(base, resource, label) {
    this.base = base;
    this.resource_amount = 0;
    this.resource = resource;
    this.label = label;
    this.level = 0;
  }

  get level() {
    return this.level;
  }

  upgrade_generator() {
    this.level += 1;
  }

  update_tick() {
    this.resource;
  }
}

function main() {
  food += 0.25 + 0.25 * 0.8;
  update_lbl();
}

// Custom tickrate 4TPS or 4 ticks/second
const tick_rate = setInterval(() => {
  main();
}, 250);
