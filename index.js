var isObject = require("lodash.isobject");
var isFunction = require("lodash.isfunction");
var template = require("lodash.template");
var fs = require("fs");
var path = require("path");

function checkConfigFields(config, fields) {
  if (!isObject(config)) {
    throw new Error('config must be an object with fields: ["' + fields.join('", "') + '"]');
  }
  fields.forEach(function (field) {
    if (!config.hasOwnProperty(field)) {
      throw new Error('config must have field "' + field + '"');
    }
  })
}

function createMiddleware(config) {
  checkConfigFields(config, ['endpoint']);

  var templateHtmlContents = fs.readFileSync(path.join(__dirname, 'graphiql.template.html'), 'utf-8');
  var rendererFn = template(templateHtmlContents);
  var html = rendererFn(config);

  return function graphiqlMiddleware(request, response, next) {
    response.status(200);
    response.send(html);
    if (isFunction(next)) {
      next();
    }
  }
}

module.exports = createMiddleware;
module.exports.default = createMiddleware;