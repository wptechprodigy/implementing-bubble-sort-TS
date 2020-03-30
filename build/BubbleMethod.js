"use strict";
// 1. This is one way with specifying the parameter and initializing it later
// class Sorter {
//   collection: number[];
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
// 2. Second way is to just specify public in the constructor for the argument
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
