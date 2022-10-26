"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var myPoint = new point_1.Point(20, 20);
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(10);
myPoint.setY(30);
console.log(myPoint.toString());
