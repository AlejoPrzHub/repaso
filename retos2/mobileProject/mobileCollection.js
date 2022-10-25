"use strict";
exports.__esModule = true;
exports.mobileCollection = void 0;
var mobileCollection = /** @class */ (function () {
    function mobileCollection(mobiles) {
        this.mobiles = [];
        this.totalPrice = 0;
    }
    mobileCollection.prototype.getMobiles = function () {
        for (var i = 0; i < this.mobiles.length; i++) {
            this.mobiles[i];
        }
    };
    mobileCollection.prototype.getTotalPrice = function () {
        var resultado = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            resultado += this.mobiles[i].getPrice();
        }
        return resultado;
    };
    mobileCollection.prototype.setMobiles = function (newMobiles) { this.mobiles = newMobiles; };
    ;
    mobileCollection.prototype.setTotalPrice = function (newTotalPrice) { this.totalPrice = newTotalPrice; };
    ;
    mobileCollection.prototype.totalPriceCalculation = function () {
        var resultado = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            resultado += this.mobiles[i].getPrice();
        }
        return resultado;
    };
    mobileCollection.prototype.printCollection = function () {
        for (var i = 0; i < this.mobiles.length; i++) {
            this.mobiles[i].printAll();
        }
        console.log("Price overall - " + this.getTotalPrice());
    };
    return mobileCollection;
}());
exports.mobileCollection = mobileCollection;
