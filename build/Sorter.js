"use strict";
// This interface makes it possible to invert dependency
// So, whatever type of data we want to sort must fulfill
// the interface to be able to be sorted.
// interface Sortable {
// 	length: number;
// 	compare(firstIndex: number, nextIndex: number): boolean;
// 	swap(firstIndex: number, nextIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
