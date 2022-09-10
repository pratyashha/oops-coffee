class Coffee {
  constructor(name, addon, cups) {
    this.name = name;
    this.addon = addon;
    this.cups = cups;
    this.price =
      this.calcPrice(name[0].toLowerCase() + addon[0].toLowerCase()) * cups;
  }

  calcPrice(val) {
    switch (val) {
      case "em":
        return 60;
      case "ec":
        return 75;
      case "el":
        return 100;
      case "cm":
        return 80;
      case "cc":
        return 90;
      case "cl":
        return 125;
      case "lm":
        return 100;
      case "lc":
        return 125;
      case "ll":
        return 150;
      default:
        return 0;
    }
  }
}

var coffees = [];

function myOrder() {
  let name = document.querySelector("#coffee").value;
  let addon = document.querySelector("#addon").value;
  let qnty = document.querySelector("#quantity").value;

  let coffee = new Coffee(name, addon, qnty);

  localStorage.setItem("coffeename", coffee.name);
  localStorage.setItem("coffeeaddon", coffee.addon);
  localStorage.setItem("coffeecups", coffee.cups);
  localStorage.setItem("coffeeprice", coffee.price);
}
