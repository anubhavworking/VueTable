'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function () {
  return this.opts.storage === 'local' && (typeof localStorage === 'undefined' ? 'undefined' : _typeof(localStorage)) !== undefined ? localStorage : sessionStorage;
};