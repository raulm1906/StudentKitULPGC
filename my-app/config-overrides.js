const autoprefixer = require('autoprefixer');

module.exports = function override(config, env) {
  // ...
  config.plugins.push(autoprefixer());
  // ...
  return config;
};

module.exports = function override(config, env) {
  // ...
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: false,
  };
  // ...
  return config;
};


