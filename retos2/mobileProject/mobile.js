"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.getName = function () { return this.name; };
    ;
    Mobile.prototype.getTradeMark = function () { return this.trademark; };
    ;
    Mobile.prototype.getModel = function () { return this.model; };
    ;
    Mobile.prototype.getColor = function () { return this.color; };
    ;
    Mobile.prototype.getPrice = function () { return this.price; };
    ;
    Mobile.prototype.setName = function (newName) { this.name = newName; };
    ;
    Mobile.prototype.setTradeMark = function (newTradeMark) { this.trademark = newTradeMark; };
    ;
    Mobile.prototype.setModel = function (newModel) { this.model = newModel; };
    ;
    Mobile.prototype.setColor = function (newColor) { this.color = newColor; };
    ;
    Mobile.prototype.setPrice = function (newPrice) { this.price = newPrice; };
    ;
    Mobile.prototype.printAll = function () {
        var respuesta;
        respuesta = "The characteristics of the mobile are " + "\n" + "*Name: " + this.name + "\n" + "*Trademark: " + this.trademark + "\n" + "*Model: " + this.model + "\n" + "*Color: " + this.color + "\n" + "*Price: " + this.price;
        console.log(respuesta);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
