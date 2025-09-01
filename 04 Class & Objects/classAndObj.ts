/*
 * Remember
-------------
1. object's keys we define using : semicoln
2. class's keys we define using = equal to
 */

class Device {
  name = "Samsung";
  category = "Phone";
  price = 129000;
}

let d1 = new Device();
let d2 = new Device();

// if we print this both the device will have same properties, if u want different then constructer comes into picture.
console.log(d1);
console.log(d1);
