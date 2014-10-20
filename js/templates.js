this["JST"] = this["JST"] || {};

this["JST"]["js/template-nav.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<li><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<li class=\"emulator-toggle\"><a href=\"#\" data-width=\"";
  if (helper = helpers.size) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.size); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.device) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.device); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>";
  return buffer;
  }

  buffer += "var source =\n    '<div class=\"nav-container\">' +\n        '<ul>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.links), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</ul>' +\n        '<div class=\"devices-list\">' +\n            '<ul>' +\n                '<li class=\"emulator-toggle\" data-width=\"full\"><a href=\"#\">Desktop</a></li>' +\n                '<li><a href=\"device-emulator.html\">Device Portrait</a>' +\n                    '<ul>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.portrait), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</ul>' +\n                '</li>' +\n                '<li><a href=\"device-emulator.html\">Device Landscape</a>' +\n                    '<ul>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.landscape), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</ul>' +\n                '</li>' +\n            '</ul>' +\n        '</div>' +\n    '</div>';\n\nvar navTemplate = Handlebars.compile(source);\n\nvar data = {\n    links: [\n        { label: 'basic', url: 'basic.html' },\n        { label: 'visuals', url: 'visuals.html' },\n        { label: 'form', url: 'form.html' },\n        { label: 'fancy stuff', url: 'fancy.html' },\n        { label: 'headers and footers', url: 'headers-and-footers.html' }\n    ],\n    portrait: [\n        { device: 'iPhone 4', size: '320' },\n        { device: 'iPhone 5', size: '320' },\n        { device: 'iPhone 6', size: '360' },\n        { device: 'Galaxy S4', size: '360' },\n        { device: 'HTC One', size: '360' },\n        { device: 'Galaxy Nexus 5', size: '360' },\n        { device: 'Galaxy Nexus 7', size: '600' },\n        { device: 'iPad (all)', size: '768' },\n        { device: 'Galaxy Note 3', size: '360' },\n        { device: 'Galaxy Note 10', size: '800' }\n    ],\n    landscape: [\n        { device: 'iPhone 4', size: '480' },\n        { device: 'iPhone 5', size: '568' },\n        { device: 'iPhone 6', size: '640' },\n        { device: 'Galaxy S4', size: '640' },\n        { device: 'HTC One', size: '640' },\n        { device: 'Galaxy Nexus 5', size: '598' },\n        { device: 'Galaxy Nexus 7', size: '961' },\n        { device: 'iPad (all)', size: '1024' },\n        { device: 'Galaxy Note 3', size: '640' },\n        { device: 'Galaxy Note 10', size: '1280' }\n    ]\n};\n\nvar html = navTemplate(data);\n\n$('.page-nav').html(html);";
  return buffer;
  });