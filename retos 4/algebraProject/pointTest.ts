import { Point } from "./point";

let myPoint = new Point(20,20);
let mePoint = new Point(80,35);
let truePoint = new Point(-1,30);

console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(10);
myPoint.setY(30);
console.log(myPoint.toString());

console.log(myPoint.distanceToOrigin())
console.log(myPoint.calculateDistance(mePoint))
console.log(myPoint.calcularQuadrant())
console.log(myPoint.calcularNearest([mePoint,truePoint]))