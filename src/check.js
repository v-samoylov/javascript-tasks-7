'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        for (var i = 0; i < keys.length; i++) {
            if (!(keys[i] in this)) {
                return false;
            }
        }
        return true;
    };

    Object.prototype.checkHasKeys = function (keys) {
        var objKeys = Object.keys(this);
        for (var i = 0; i < objKeys.length; i++) {
            if (keys.indexOf(objKeys[i]) === -1) {
                console.log(objKeys[i]);
                return false;
            }
        }
        return true;
    };

    Object.prototype.checkContainsValues = function (values) {
        var objKeys = Object.keys(this);
        for (var j = 0; j < values.length; j++) {
            var isValueFound = false;
            for (var i = 0; i < objKeys.length; i++) {
                var key = objKeys[i];
                if (values[j] === this[key]) {
                    isValueFound = true;
                    break;
                }
            }
            if (!isValueFound) {
                return false;
            }
        }
        return true;
    };

    Object.prototype.checkHasValues = function (values) {
        var objKeys = Object.keys(this);
        for (var i = 0; i < objKeys.length; i++) {
            var key = objKeys[i];
            if (values.indexOf(this[key]) === -1) {
                return false;
            }
        }
        return true;
    };

    Array.prototype.checkHasValueType = function (key, type) {
        return this[key].constructor === type;
    };

    String.prototype.checkHasLength = function (length) {
        return this.length === length;
    };

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        return this.split(' ').length === count;
    };
};
