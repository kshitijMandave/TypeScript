var CarMaker = /** @class */ (function () {
  function CarMaker(key) {
    this.key = key;
  }
  return CarMaker;
})();
var c1 = new CarMaker("Hey");
var c2 = new CarMaker(123);
console.log(c1, c2);
