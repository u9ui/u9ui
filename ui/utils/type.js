(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.type = factory());
}(this, (function () {
  'use strict';
  var type = {};
  var _t_ = ['String', 'Number', 'Boolean', 'Date', 'Function', 'Array', 'Object', 'Undefined', 'Null', 'Symbol'];
  for (var i = 0; i < _t_.length; i++) {
    (function (n) {
      type['is' + n] = function (obj) {
        return Object.prototype.toString.call(obj) == '[object ' + n + ']';
      }
    })(_t_[i]);
  }
  type.isBoolStr = function (obj) {
    // Boolean and String:"true"/"false" return true
    if (type.isUndefined(obj)) {
      return false;
    } else if (type.isNull(obj)) {
      return false;
    } else if (type.isBoolean(obj)) {
      return true;
    } else if (type.isString(obj)) {
      return "true" === obj || "false" === obj
    }
    return false;
  }
  type.toBool = function (obj) {
    // only Boolean:true and String:"true" return true
    if (obj) {
      if (true === obj) {
        return true;
      } else if ("true" === obj) {
        return true;
      }
    }
    return false;
  }
  type.isNumberStr = function (obj) {
    //Number Or String con parse Number return true
    if (type.isUndefined(obj)) {
      return false;
    } else if (type.isNull(obj)) {
      return false;
    } else if (type.isNumber(obj)) {
      return true;
    } else if (type.isString(obj)) {
      return !isNaN(new Number(obj))
    }
    return false;
  }
  return type;
})));