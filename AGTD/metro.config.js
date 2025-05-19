const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// 🚫 Esto evita que Metro intente usar rutas con 'node:...'
config.resolver.unstable_disablePackageExports = true;

module.exports = config;
