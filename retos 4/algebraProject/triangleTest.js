"use strict";
exports.__esModule = true;
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var myPoint = new point_1.Point(20, 20);
var mePoint = new point_1.Point(80, 35);
var truePoint = new point_1.Point(-1, 30);
var triangulo = new triangle_1.triangle(myPoint, mePoint, truePoint);
console.log(triangulo.calculateLenghtSides());
