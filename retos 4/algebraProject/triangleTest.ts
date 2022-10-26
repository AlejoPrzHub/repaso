import { triangle } from "./triangle";
import { Point } from "./point";

let myPoint = new Point(20,20);
let mePoint = new Point(80,35);
let truePoint = new Point(-1,30);


let triangulo = new triangle(myPoint,mePoint,truePoint);

console.log(triangulo.calculateLenghtSides())