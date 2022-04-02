'use strict';

const myobject = {
  name: '',
  count: 0,
  cost: 0,
  setitems(productname, productcount, produccost) {
    this.name = productname;
    this.count = productcount;
    this.cost = produccost;
  },
};

const mycart = {
  totalPrice: 0,
  count: 0,
  items: [],


  calculateItemPrice() {
    // totalprice =0;
    // this.items.forEach ( zxczxc=> ( totalprice = totalprice + zxczxc.cost ));
    return this.totalPrice;
  },

  add(myobject) {
    this.items.push(myobject);
    this.totalPrice += myobject.cost;
    this.count += myobject.count;
  },

  increaseCount(adder) {
    this.count += adder;
  },

  clear() {
    this.items = [];
    this.count = 0,
    this.cost = 0,
    console.log('cleared');
  },

  print() { // items.forEach()
    console.log('printing object: ' + this.items);

    console.log('printing json: ' + JSON.stringify(this.items));
  },
};

myobject.cost = 346;
myobject.count = 5;
myobject.name = 'Computer';

mycart.add(myobject);

myobject.cost = 2345;
myobject.count = 4;
myobject.name = 'ebook reader';

mycart.add(myobject);

myobject.cost = 3456;
myobject.count = 23;
myobject.name = 'smart phone';

mycart.add(myobject);


mycart.print();


