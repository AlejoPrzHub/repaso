import { Point } from "./point";

let myPoint = new Point(20,20);

console.log(myPoint.getX())
console.log(myPoint.getY())
myPoint.setX(10);
myPoint.setY(30);
console.log(myPoint.toString())