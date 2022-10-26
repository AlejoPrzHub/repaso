"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () { return this.x; };
    Point.prototype.getY = function () { return this.y; };
    Point.prototype.setX = function (newX) { this.x = newX; };
    Point.prototype.setY = function (newY) { this.y = newY; };
    Point.prototype.toString = function () { return "(".concat(this.x, ",").concat(this.y, ")"); };
    Point.prototype.distanceToOrigin = function () {
        var respuesta;
        respuesta = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return respuesta;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var respuesta;
        respuesta = Math.sqrt(Math.pow(anotherPoint.x - this.x, 2) + Math.pow(anotherPoint.y - this.y, 2));
        return respuesta;
    };
    Point.prototype.calcularQuadrant = function () {
        var respuesta;
        respuesta = 0;
        if (this.x || this.y == 0) {
            respuesta = 0;
        }
        if (this.x && this.y > 0) {
            respuesta = 1;
        }
        if (this.x < 0 && this.y > 0) {
            respuesta = 2;
        }
        if (this.x && this.y < 0) {
            respuesta = 3;
        }
        if (this.x > 0 && this.y < 0) {
            respuesta = 4;
        }
        return respuesta;
    };
    Point.prototype.calcularNearest = function (points) {
        var nuevo = new Point(this.x, this.y);
        var respuesta = 0;
        for (var i = 0; i < points.length; i++) {
            respuesta = Math.min(points[i].calculateDistance(nuevo));
        }
        console.log(respuesta);
    };
    return Point;
}());
exports.Point = Point;
