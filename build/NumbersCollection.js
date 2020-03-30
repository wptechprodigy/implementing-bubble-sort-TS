"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
/**
 * Collectyion of Numbers for sorting using Bubble sort
 *
 * @export
 * @class NumbersCollection
 */
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        /**
         * get makes it possible to call length
         * without been invoked like a function/method
         *
         * @readonly
         * @type {number}
         * @memberof NumbersCollection
         */
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @param {number} firstIndex
     * @param {number} nextIndex
     * @returns {boolean}
     * @memberof NumbersCollection
     */
    NumbersCollection.prototype.compare = function (firstIndex, nextIndex) {
        return this.data[firstIndex] > this.data[nextIndex];
    };
    /**
     *
     *
     * @param {number} firstIndex
     * @param {number} nextIndex
     * @memberof NumbersCollection
     */
    NumbersCollection.prototype.swap = function (firstIndex, nextIndex) {
        var leftElement = this.data[firstIndex];
        this.data[firstIndex] = this.data[nextIndex];
        this.data[nextIndex] = leftElement;
    };
    return NumbersCollection;
}(Sorter_1.Sorter));
exports.NumbersCollection = NumbersCollection;
