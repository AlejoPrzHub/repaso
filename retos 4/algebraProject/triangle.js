"use strict";
exports.__esModule = true;
exports.triangle = void 0;
var triangle = /** @class */ (function () {
    function triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    triangle.prototype.calculateLenghtSides = function () {
        var lado1 = 0;
        var lado2 = 0;
        var lado3 = 0;
        lado1 = this.vertex1.calculateDistance(this.vertex2);
        lado2 = this.vertex2.calculateDistance(this.vertex3);
        lado3 = this.vertex3.calculateDistance(this.vertex1);
        return [lado1, lado2, lado3];
    };
    return triangle;
}());
exports.triangle = triangle;
