"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var a50 = new mobile_1.Mobile("A50", "Samsung", "premiun", "grey", 400);
var a72 = new mobile_1.Mobile("A72", "Samsung", "5G", "black", 500);
var a100 = new mobile_1.Mobile("A100", "Samsung", "premiun+", "white", 1000);
var myMobiles = [a50, a72, a100];
console.log(a50.getColor());
console.log(a50.getName());
console.log(a50.getModel());
console.log(a50.getTradeMark());
console.log(a50.getPrice());
a50.setName("A52");
a50.setColor("red");
a50.setModel("normal");
a50.setTradeMark("chanchun");
a50.setPrice(199);
for (var i = 0; i < myMobiles.length; i++) {
    myMobiles[i].printAll();
}
