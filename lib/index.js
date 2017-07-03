"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var json = function json() {
    for (var _len = arguments.length, ignore = Array(_len), _key = 0; _key < _len; _key++) {
        ignore[_key] = arguments[_key];
    }

    return function (Class) {
        Class.prototype.toJSON = function () {
            var _this = this;

            return Object.getOwnPropertyNames(this).reduce(function (a, b) {
                if (!ignore.includes(b)) a[b] = _this[b];
                return a;
            }, {});
        };
        return Class;
    };
};

exports.default = json;