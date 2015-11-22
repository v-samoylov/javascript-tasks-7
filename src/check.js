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
        var objKeysNumber = objKeys.length;
        for (var i = 0; i < objKeysNumber; i++) {
            var keyIndex = keys.indexOf(objKeys[i]);
            if (keyIndex === -1) {
                return false;
            }
            keys.splice(keyIndex, 1);
        }
        return keys.length === 0 ? true : false;
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
            var valueIndex = values.indexOf(this[key]);
            if (valueIndex === -1) {
                return false;
            }
            values.splice(valueIndex, 1);
        }
        return values.length === 0 ? true : false;
    };

    Object.prototype.checkHasValueType = function (key, type) {
        return this[key] !== undefined ? this[key].constructor === type : false;
    };

    Array.prototype.checkHasLength = function (length) {
        return this.length === length;
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
