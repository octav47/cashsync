// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Stats.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var data = {
  updatedAt: "2020-08-17 16-18-44",
  balance: 174314.95000000007,
  total: {
    income: 1004674.4500000001,
    spending: -830359.5
  },
  items: {
    "2020-04-20": {
      current: 111672.5,
      sum: 111672.5,
      income: {
        sum: 114942.5,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [114942.5]
        }
      },
      spending: {
        sum: -3270,
        count: 6,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-900],
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-90],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-04-21": {
      current: 95272.5,
      sum: -16400,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -16400,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-200],
          "\uD83C\uDF0D \u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F": [-15000],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-700]
        }
      }
    },
    "2020-04-22": {
      current: 91022.5,
      sum: -4250,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -4250,
        count: 3,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-700],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1750]
        }
      }
    },
    "2020-04-23": {
      current: 88872.5,
      sum: -2150,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2150,
        count: 2,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-2000]
        }
      }
    },
    "2020-04-24": {
      current: 88272.5,
      sum: -600,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -600,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-100],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-04-25": {
      current: 86272.5,
      sum: -2000,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2000,
        count: 4,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-600],
          "\uD83D\uDD28 \u041F\u0440\u043E\u043C\u0442\u043E\u0432\u0430\u0440\u044B": [-400],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-04-26": {
      current: 69472.5,
      sum: -16800,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -16800,
        count: 5,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-100],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-5000],
          "\uD83D\uDCF1 \u0422\u0435\u043B\u0435\u0444\u043E\u043D": [-200],
          "\uD83D\uDC69 Y": [-10000]
        }
      }
    },
    "2020-04-27": {
      current: 67772.5,
      sum: -1700,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1700,
        count: 3,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-700],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-100],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-900]
        }
      }
    },
    "2020-04-28": {
      current: 56172.5,
      sum: -11600,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -11600,
        count: 4,
        categories: {
          "\uD83C\uDF0D \u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F": [-9000],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-04-29": {
      current: 54322.5,
      sum: -1850,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1850,
        count: 1,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1850]
        }
      }
    },
    "2020-04-30": {
      current: 148037.27,
      sum: 93714.76999999999,
      income: {
        sum: 148214.77,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [148214.77]
        }
      },
      spending: {
        sum: -54500,
        count: 3,
        categories: {
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-52000],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-500]
        }
      }
    },
    "2020-05-01": {
      current: 145437.27,
      sum: -2600,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2600,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-100],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-500],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-1500]
        }
      }
    },
    "2020-05-02": {
      current: 137737.27,
      sum: -7700,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -7700,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-6200],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1000]
        }
      }
    },
    "2020-05-03": {
      current: 131037.26999999999,
      sum: -6700,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -6700,
        count: 2,
        categories: {
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-6500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-200]
        }
      }
    },
    "2020-05-04": {
      current: 129137.26999999999,
      sum: -1900,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1900,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-600],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-800],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-05-05": {
      current: 127037.26999999999,
      sum: -2100,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2100,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-600],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-800],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-700]
        }
      }
    },
    "2020-05-06": {
      current: 124937.26999999999,
      sum: -2100,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2100,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-100],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-2000]
        }
      }
    },
    "2020-05-07": {
      current: 123737.26999999999,
      sum: -1200,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1200,
        count: 2,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-700]
        }
      }
    },
    "2020-05-08": {
      current: 108337.26999999999,
      sum: -15400,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -15400,
        count: 4,
        categories: {
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-13000],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-400],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-05-09": {
      current: 75337.26999999999,
      sum: -33000,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -33000,
        count: 4,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1100],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-30000],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-900]
        }
      }
    },
    "2020-05-10": {
      current: 71737.26999999999,
      sum: -3600,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3600,
        count: 3,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1000],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1100]
        }
      }
    },
    "2020-05-11": {
      current: 71237.26999999999,
      sum: -500,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -500,
        count: 1,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-500]
        }
      }
    },
    "2020-05-12": {
      current: 69037.26999999999,
      sum: -2200,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2200,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-200],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500]
        }
      }
    },
    "2020-05-13": {
      current: 63687.26999999999,
      sum: -5350,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5350,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-350],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-5000]
        }
      }
    },
    "2020-05-14": {
      current: 59387.26999999999,
      sum: -4300,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -4300,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-800],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-3000]
        }
      }
    },
    "2020-05-15": {
      current: 50637.26999999999,
      sum: -8750,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -8750,
        count: 6,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-300],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-500],
          "\uD83D\uDC69 Y": [-4500],
          "\uD83D\uDCF1 \u0422\u0435\u043B\u0435\u0444\u043E\u043D": [-450],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-2000],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1000]
        }
      }
    },
    "2020-05-16": {
      current: 49537.26999999999,
      sum: -1100,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1100,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-600],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-05-17": {
      current: 46437.26999999999,
      sum: -3100,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3100,
        count: 5,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-100]
        }
      }
    },
    "2020-05-18": {
      current: 43637.26999999999,
      sum: -2800,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2800,
        count: 4,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-700],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-1500],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-05-19": {
      current: 38837.26999999999,
      sum: -4800,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -4800,
        count: 3,
        categories: {
          "\uD83D\uDC69 Y": [-3000],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-300],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500]
        }
      }
    },
    "2020-05-20": {
      current: 133579.77,
      sum: 94742.5,
      income: {
        sum: 114942.5,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [114942.5]
        }
      },
      spending: {
        sum: -20200,
        count: 6,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-200],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83D\uDEAC \u0421\u0438\u0433\u0430\u0440\u0435\u0442\u044B": [-3500],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-8500],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-6000]
        }
      }
    },
    "2020-05-21": {
      current: 108979.76999999999,
      sum: -24600,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -24600,
        count: 3,
        categories: {
          "\uD83D\uDCF1 \u0422\u0435\u043B\u0435\u0444\u043E\u043D": [-20500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-100]
        }
      }
    },
    "2020-05-22": {
      current: 105279.76999999999,
      sum: -3700,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3700,
        count: 5,
        categories: {
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-600]
        }
      }
    },
    "2020-05-23": {
      current: 98979.76999999999,
      sum: -6300,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -6300,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-300],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-6000]
        }
      }
    },
    "2020-05-24": {
      current: 96829.76999999999,
      sum: -2150,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2150,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-700]
        }
      }
    },
    "2020-05-25": {
      current: 96289.76999999999,
      sum: -540,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -540,
        count: 1,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-540]
        }
      }
    },
    "2020-05-26": {
      current: 83039.76999999999,
      sum: -13250,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -13250,
        count: 5,
        categories: {
          "\uD83D\uDC69 Y": [-10000],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-700],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-350]
        }
      }
    },
    "2020-05-27": {
      current: 81889.76999999999,
      sum: -1150,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1150,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-350],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-500],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-300]
        }
      }
    },
    "2020-05-28": {
      current: 80639.76999999999,
      sum: -1250,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1250,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-300],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-700]
        }
      }
    },
    "2020-05-29": {
      current: 25621.76999999999,
      sum: -55018,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -55018,
        count: 3,
        categories: {
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-52318],
          "\uD83D\uDC7E \u0420\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F": [-700],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-2000]
        }
      }
    },
    "2020-05-30": {
      current: 24121.76999999999,
      sum: -1500,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1500,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-500]
        }
      }
    },
    "2020-05-31": {
      current: 16121.76999999999,
      sum: -8000,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -8000,
        count: 6,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-2000],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1500],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83D\uDCA9 \u0424\u0438\u0433\u043D\u044F": [-3000]
        }
      }
    },
    "2020-06-01": {
      current: 15121.76999999999,
      sum: -1000,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1000,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-300]
        }
      }
    },
    "2020-06-02": {
      current: 13171.76999999999,
      sum: -1950,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1950,
        count: 5,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-300],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-300],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-06-03": {
      current: 11871.76999999999,
      sum: -1300,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1300,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-600],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-700]
        }
      }
    },
    "2020-06-04": {
      current: 1371.7699999999895,
      sum: -10500,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -10500,
        count: 5,
        categories: {
          "\uD83D\uDC69 Y": [-700],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-8000],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-800]
        }
      }
    },
    "2020-06-05": {
      current: 81729.26999999999,
      sum: 80357.5,
      income: {
        sum: 85057.5,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [85057.5]
        }
      },
      spending: {
        sum: -4700,
        count: 5,
        categories: {
          "\uD83D\uDC69 Y": [-600],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-1750],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-350],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1700]
        }
      }
    },
    "2020-06-06": {
      current: 80479.26999999999,
      sum: -1250,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1250,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-200],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-700]
        }
      }
    },
    "2020-06-07": {
      current: 77389.26999999999,
      sum: -3090,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3090,
        count: 7,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-500],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500]
        }
      }
    },
    "2020-06-08": {
      current: 74839.26999999999,
      sum: -2550,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2550,
        count: 5,
        categories: {
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-600],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-400],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-350]
        }
      }
    },
    "2020-06-09": {
      current: 69489.26999999999,
      sum: -5350,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5350,
        count: 5,
        categories: {
          "\uD83D\uDEAC \u0421\u0438\u0433\u0430\u0440\u0435\u0442\u044B": [-3150],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-300],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-900],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-700]
        }
      }
    },
    "2020-06-10": {
      current: 38539.26999999999,
      sum: -30950,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -30950,
        count: 3,
        categories: {
          "\uD83D\uDC57 \u041E\u0434\u0435\u0436\u0434\u0430": [-2000],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-250],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-28700]
        }
      }
    },
    "2020-06-11": {
      current: 36599.26999999999,
      sum: -1940,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1940,
        count: 3,
        categories: {
          "\uD83D\uDC57 \u041E\u0434\u0435\u0436\u0434\u0430": [-400],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-840]
        }
      }
    },
    "2020-06-12": {
      current: 35729.26999999999,
      sum: -870,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -870,
        count: 2,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-700],
          "\uD83D\uDCBB \u0421\u043E\u0446\u0441\u0435\u0442\u0438": [-170]
        }
      }
    },
    "2020-06-13": {
      current: 33529.26999999999,
      sum: -2200,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2200,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-800],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-900]
        }
      }
    },
    "2020-06-14": {
      current: 30179.26999999999,
      sum: -3350,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3350,
        count: 4,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-150],
          "\uD83D\uDCBB \u0421\u043E\u0446\u0441\u0435\u0442\u0438": [-1600]
        }
      }
    },
    "2020-06-15": {
      current: 28929.26999999999,
      sum: -1250,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1250,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-700],
          "\uD83D\uDCBB \u0421\u043E\u0446\u0441\u0435\u0442\u0438": [-250]
        }
      }
    },
    "2020-06-16": {
      current: 27929.26999999999,
      sum: -1000,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1000,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-600]
        }
      }
    },
    "2020-06-17": {
      current: 22189.26999999999,
      sum: -5740,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5740,
        count: 6,
        categories: {
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-3000],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-500],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-340],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-06-18": {
      current: 20239.26999999999,
      sum: -1950,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1950,
        count: 4,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-500],
          "\uD83D\uDEAC \u0421\u0438\u0433\u0430\u0440\u0435\u0442\u044B": [-250],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-800]
        }
      }
    },
    "2020-06-19": {
      current: 18039.26999999999,
      sum: -2200,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2200,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-400],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1200]
        }
      }
    },
    "2020-06-20": {
      current: 15639.26999999999,
      sum: -2400,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2400,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-800],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1300]
        }
      }
    },
    "2020-06-21": {
      current: 125931.76999999999,
      sum: 110292.5,
      income: {
        sum: 114942.5,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [114942.5]
        }
      },
      spending: {
        sum: -4650,
        count: 5,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-800],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-400],
          "\uD83D\uDCA9 \u0424\u0438\u0433\u043D\u044F": [-2700]
        }
      }
    },
    "2020-06-22": {
      current: 120181.76999999999,
      sum: -5750,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5750,
        count: 4,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-600],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-150],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-3000],
          "\uD83C\uDF93 \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435": [-2000]
        }
      }
    },
    "2020-06-23": {
      current: 114481.76999999999,
      sum: -5700,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5700,
        count: 6,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-200],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-2500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-500]
        }
      }
    },
    "2020-06-24": {
      current: 110981.76999999999,
      sum: -3500,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3500,
        count: 6,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-300],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-600],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-800]
        }
      }
    },
    "2020-06-25": {
      current: 84881.76999999999,
      sum: -26100,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -26100,
        count: 6,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-350],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1000],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-350],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-23900]
        }
      }
    },
    "2020-06-26": {
      current: 82191.76999999999,
      sum: -2690,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2690,
        count: 4,
        categories: {
          "\uD83D\uDCBB \u0421\u043E\u0446\u0441\u0435\u0442\u0438": [-1600],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-200],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-390]
        }
      }
    },
    "2020-06-27": {
      current: 75297.76999999999,
      sum: -6894,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -6894,
        count: 6,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1700],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-650],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-400],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-3500]
        }
      }
    },
    "2020-06-28": {
      current: 71227.76999999999,
      sum: -4070,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -4070,
        count: 3,
        categories: {
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-3500],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-500]
        }
      }
    },
    "2020-06-29": {
      current: 16369.76999999999,
      sum: -54858,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -54858,
        count: 8,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-200],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1000],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-52000],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-600]
        }
      }
    },
    "2020-06-30": {
      current: 149101.03999999998,
      sum: 132731.27,
      income: {
        sum: 133521.27,
        count: 1,
        categories: {
          "\uD83D\uDCB5 \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F": [133521.27]
        }
      },
      spending: {
        sum: -790,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-200],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-150],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-340]
        }
      }
    },
    "2020-07-01": {
      current: 145251.03999999998,
      sum: -3850,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3850,
        count: 6,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1100],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-250],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-350]
        }
      }
    },
    "2020-07-02": {
      current: 139048.53999999998,
      sum: -6202.5,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -6202.5,
        count: 5,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-79],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-3144.5],
          "\uD83D\uDCBB \u0421\u043E\u0446\u0441\u0435\u0442\u0438": [-2700],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-200]
        }
      }
    },
    "2020-07-03": {
      current: 222306.03999999998,
      sum: 83257.5,
      income: {
        sum: 85057.5,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [85057.5]
        }
      },
      spending: {
        sum: -1800,
        count: 5,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-50],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-170],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-580],
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500]
        }
      }
    },
    "2020-07-04": {
      current: 213876.03999999998,
      sum: -8430,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -8430,
        count: 6,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1560],
          "\uD83D\uDC57 \u041E\u0434\u0435\u0436\u0434\u0430": [-5000],
          "\uD83D\uDC7E \u0420\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F": [-500],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-900],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-350]
        }
      }
    },
    "2020-07-05": {
      current: 211126.03999999998,
      sum: -2750,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2750,
        count: 5,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-400],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-150]
        }
      }
    },
    "2020-07-06": {
      current: 208426.03999999998,
      sum: -2700,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2700,
        count: 6,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-130],
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1170],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-100]
        }
      }
    },
    "2020-07-07": {
      current: 206376.03999999998,
      sum: -2050,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2050,
        count: 3,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-100],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1000],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-950]
        }
      }
    },
    "2020-07-08": {
      current: 204036.03999999998,
      sum: -2340,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2340,
        count: 5,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-190],
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-700],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500]
        }
      }
    },
    "2020-07-09": {
      current: 201646.03999999998,
      sum: -2390,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2390,
        count: 4,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-600],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1290],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-250]
        }
      }
    },
    "2020-07-10": {
      current: 199076.03999999998,
      sum: -2570,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2570,
        count: 4,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1000],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-800],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-500]
        }
      }
    },
    "2020-07-11": {
      current: 197726.03999999998,
      sum: -1350,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1350,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1000],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-350]
        }
      }
    },
    "2020-07-12": {
      current: 196826.03999999998,
      sum: -900,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -900,
        count: 2,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-400],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-500]
        }
      }
    },
    "2020-07-13": {
      current: 186936.03999999998,
      sum: -9890,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -9890,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-2134],
          "\uD83C\uDF0D \u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F": [-7500],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-256]
        }
      }
    },
    "2020-07-14": {
      current: 183365.03999999998,
      sum: -3571,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3571,
        count: 4,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-126],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1995],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-350],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1100]
        }
      }
    },
    "2020-07-15": {
      current: 175276.03999999998,
      sum: -8089,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -8089,
        count: 4,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-4997],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1742],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1100],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-250]
        }
      }
    },
    "2020-07-16": {
      current: 169733.03999999998,
      sum: -5543,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5543,
        count: 4,
        categories: {
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-3473],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-570],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-1000]
        }
      }
    },
    "2020-07-17": {
      current: 216317.94999999998,
      sum: 46584.91,
      income: {
        sum: 51473.91,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [51473.91]
        }
      },
      spending: {
        sum: -4889,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-4039],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-850]
        }
      }
    },
    "2020-07-18": {
      current: 210360.94999999998,
      sum: -5957,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5957,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-2927],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-1980],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1050]
        }
      }
    },
    "2020-07-19": {
      current: 208355.94999999998,
      sum: -2005,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2005,
        count: 3,
        categories: {
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-750],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-705],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-550]
        }
      }
    },
    "2020-07-20": {
      current: 320288.44999999995,
      sum: 111932.5,
      income: {
        sum: 114942.5,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [114942.5]
        }
      },
      spending: {
        sum: -3010,
        count: 2,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1910],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1100]
        }
      }
    },
    "2020-07-21": {
      current: 313819.44999999995,
      sum: -6469,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -6469,
        count: 5,
        categories: {
          "\uD83C\uDF81 \u041F\u043E\u0434\u0430\u0440\u043A\u0438": [-500],
          "\uD83D\uDCBB \u0421\u043E\u0446\u0441\u0435\u0442\u0438": [-549],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-3370],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1000],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1050]
        }
      }
    },
    "2020-07-22": {
      current: 311323.44999999995,
      sum: -2496,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2496,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1078],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1369],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-49]
        }
      }
    },
    "2020-07-23": {
      current: 310514.44999999995,
      sum: -809,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -809,
        count: 2,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-345],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-464]
        }
      }
    },
    "2020-07-24": {
      current: 300895.44999999995,
      sum: -9619,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -9619,
        count: 4,
        categories: {
          "\uD83D\uDC57 \u041E\u0434\u0435\u0436\u0434\u0430": [-300],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-240],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-8533],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-546]
        }
      }
    },
    "2020-07-25": {
      current: 297361.44999999995,
      sum: -3534,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3534,
        count: 3,
        categories: {
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-1947],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-197],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1390]
        }
      }
    },
    "2020-07-26": {
      current: 295710.44999999995,
      sum: -1651,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1651,
        count: 2,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-271],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1380]
        }
      }
    },
    "2020-07-27": {
      current: 285380.44999999995,
      sum: -10330,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -10330,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-668],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1135],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-7900],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-627]
        }
      }
    },
    "2020-07-28": {
      current: 282439.44999999995,
      sum: -2941,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2941,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-773],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1719],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-149],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-300]
        }
      }
    },
    "2020-07-29": {
      current: 277100.44999999995,
      sum: -5339,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5339,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-803],
          "\uD83D\uDCA9 \u041D\u0435\u043E\u0431\u0434\u0443\u043C\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0430\u0442\u044B": [-1127],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-2464],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-945]
        }
      }
    },
    "2020-07-30": {
      current: 222683.44999999995,
      sum: -54417,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -54417,
        count: 3,
        categories: {
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-52600],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1683],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-134]
        }
      }
    },
    "2020-07-31": {
      current: 216046.44999999995,
      sum: -6637,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -6637,
        count: 5,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1249],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1571],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1758],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-1859],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-200]
        }
      }
    },
    "2020-08-01": {
      current: 210105.44999999995,
      sum: -5941,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5941,
        count: 4,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-285],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1306],
          "\uD83C\uDFE0 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430": [-4000],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-350]
        }
      }
    },
    "2020-08-02": {
      current: 205975.44999999995,
      sum: -4130,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -4130,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1580],
          "\uD83C\uDFB5 \u0425\u043E\u0431\u0431\u0438": [-350],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-2200]
        }
      }
    },
    "2020-08-03": {
      current: 195165.44999999995,
      sum: -10810,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -10810,
        count: 4,
        categories: {
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-7900],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-2110],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-650],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-150]
        }
      }
    },
    "2020-08-04": {
      current: 191365.44999999995,
      sum: -3800,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3800,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-800],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-2200],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-800]
        }
      }
    },
    "2020-08-05": {
      current: 188665.44999999995,
      sum: -2700,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2700,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-600],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1000],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1100]
        }
      }
    },
    "2020-08-06": {
      current: 184690.44999999995,
      sum: -3975,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3975,
        count: 2,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1180],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-2795]
        }
      }
    },
    "2020-08-07": {
      current: 180320.44999999995,
      sum: -4370,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -4370,
        count: 2,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1350],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-3020]
        }
      }
    },
    "2020-08-08": {
      current: 215945.94999999995,
      sum: 35625.5,
      income: {
        sum: 41579.5,
        count: 1,
        categories: {
          "\uD83D\uDCB0 \u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430": [41579.5]
        }
      },
      spending: {
        sum: -5954,
        count: 2,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1654],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-4300]
        }
      }
    },
    "2020-08-09": {
      current: 210085.94999999995,
      sum: -5860,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5860,
        count: 3,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-2290],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-2270],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-1300]
        }
      }
    },
    "2020-08-10": {
      current: 206685.94999999995,
      sum: -3400,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3400,
        count: 4,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1600],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-400]
        }
      }
    },
    "2020-08-11": {
      current: 197985.94999999995,
      sum: -8700,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -8700,
        count: 4,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-700],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-300],
          "\uD83D\uDEAC \u0421\u0438\u0433\u0430\u0440\u0435\u0442\u044B": [-7000]
        }
      }
    },
    "2020-08-12": {
      current: 196295.94999999995,
      sum: -1690,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1690,
        count: 7,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-200],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-100],
          "\uD83D\uDCBB \u0421\u043E\u0446\u0441\u0435\u0442\u0438": [-200],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-420],
          "\uD83D\uDC8A \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435": [-250]
        }
      }
    },
    "2020-08-13": {
      current: 187332.94999999995,
      sum: -8963,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -8963,
        count: 3,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-1058],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-905],
          "\uD83D\uDC57 \u041E\u0434\u0435\u0436\u0434\u0430": [-7000]
        }
      }
    },
    "2020-08-14": {
      current: 183479.94999999995,
      sum: -3853,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -3853,
        count: 8,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-400],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-525],
          "\uD83D\uDCA9 \u0424\u0438\u0433\u043D\u044F": [-600]
        }
      }
    },
    "2020-08-15": {
      current: 178269.94999999995,
      sum: -5210,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -5210,
        count: 7,
        categories: {
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-840],
          "\uD83D\uDEAC \u0421\u0438\u0433\u0430\u0440\u0435\u0442\u044B": [-1500],
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-500],
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-1100]
        }
      }
    },
    "2020-08-16": {
      current: 175314.94999999995,
      sum: -2955,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -2955,
        count: 6,
        categories: {
          "\uD83D\uDE95 \u0410\u0432\u0442\u043E \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442": [-200],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-1255]
        }
      }
    },
    "2020-08-17": {
      current: 174314.94999999995,
      sum: -1000,
      income: {
        sum: 0,
        count: 0,
        categories: {}
      },
      spending: {
        sum: -1000,
        count: 3,
        categories: {
          "\uD83C\uDF5E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F": [-300],
          "\uD83C\uDF5F \u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B": [-550]
        }
      }
    }
  },
  count: 463
};

var getAverage = function getAverage(data) {
  return 0;
};

var Stats = function Stats() {
  return /*#__PURE__*/_react.default.createElement("div", null, data.updatedAt);
};

var _default = Stats;
exports.default = _default;
},{"react":"../node_modules/react/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60016" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Stats.06fecf0e.js.map