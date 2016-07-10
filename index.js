(function() {

const Alea = require('alea');
const FastSimplexNoise = require('fast-simplex-noise');
const FastUniformNoise = require('fast-uniform-noise');

function Indev(opts) {
  opts = opts || {};
  const seed = opts.seed;
  const random = opts.random;

  this._random = (() => {
    if (random !== undefined) {
      return random;
    } else if (seed !== undefined) {
      return new Alea(seed);
    } else {
      return Math.random;
    }
  })();
}
Indev.prototype = {
  simplex: function(opts) {
    opts = opts || {};
    opts.min = opts.min || 0;
    opts.max = opts.max || 1;
    opts.random = this._random;

    return new FastSimplexNoise(opts);
  },
  uniform: function(opts) {
    opts = opts || {};
    opts.min = opts.min || 0;
    opts.max = opts.max || 1;
    opts.random = this._random;

    return new FastUniformNoise(opts);
  },
};

function indev(opts) {
  return new Indev(opts);
}

module.exports = indev;

})();
