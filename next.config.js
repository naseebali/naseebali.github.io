const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  assetPrefix: !debug ? '/' : '',
  // your other config settings...
};