module.exports = function override(config) {
    // Añade las configuraciones de polyfills necesarias a la propiedad `fallback`
    if (config.resolve) {
      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      config.resolve.fallback.crypto = false;
    }
  
    return config;
  };
  