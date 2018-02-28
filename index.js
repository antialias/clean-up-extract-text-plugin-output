module.exports = function () {}
module.exports.prototype.apply = function (compiler) {
  compiler.plugin('done', function (stats) {
    if (Array.isArray(stats.compilation.children)) {
      stats.compilation.children = stats.compilation.children.filter(function (child) {
        child.name.indexOf('extract-text-webpack-plugin') !== 0
      });
    }
  });
}
