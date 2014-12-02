define("dummy/app",["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],function(e,t,a,s,n){"use strict";var l=e["default"],o=t["default"],u=a["default"],h=s["default"];l.MODEL_FACTORY_INJECTIONS=!0;var r=l.Application.extend({rootElement:"#application",modulePrefix:h.modulePrefix,podModulePrefix:h.podModulePrefix,Resolver:o});u(r,h.modulePrefix),n["default"]=r}),define("dummy/components/google-map",["ember-google-map/components/google-map","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a}),define("dummy/controllers/application",["ember","ember-google-map/components/google-map","exports"],function(e,t,a){"use strict";var s=e["default"],n=t.MAP_TYPES;a["default"]=s.Controller.extend({lat:0,lng:0,zoom:5,type:"road",mapTypes:n,markers:[{title:"one",lat:5,lng:5,description:"hello 1",isDraggable:!0},{title:"two",lat:5,lng:0,hasInfoWindow:!1},{title:"three",lat:0,lng:5,infoWindowTemplateName:"marker-info-window",helloWorld:"Hello World!"}],infoWindows:[{title:"some info window",lat:-5,lng:-5,description:"hello everybody!"}],actions:{addMarker:function(){this.get("markers").addObject({title:"new",lat:0,lng:0,isDraggable:!0})},removeMarker:function(e){this.get("markers").removeObject(e)},addInfoWindow:function(){this.get("infoWindows").addObject({title:"new iw",description:"hello",lat:-5,lng:0})},removeInfoWindow:function(e){this.get("infoWindows").removeObject(e)}}})}),define("dummy/initializers/export-application-global",["ember","dummy/config/environment","exports"],function(e,t,a){"use strict";function s(e,t){var a=n.String.classify(l.modulePrefix);l.exportApplicationGlobal&&(window[a]=t)}var n=e["default"],l=t["default"];a.initialize=s,a["default"]={name:"export-application-global",initialize:s}}),define("dummy/initializers/google-map-component",["ember-google-map/initializers/google-map-component","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a}),define("dummy/router",["ember","dummy/config/environment","exports"],function(e,t,a){"use strict";var s=e["default"],n=t["default"],l=s.Router.extend({location:n.locationType});l.map(function(){}),a["default"]=l}),define("dummy/templates/application",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,s,n,l){function o(e,t){var a,n,l="";return t.buffer.push("\n    <li>\n      <label>title: "),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{value:"title"},hashTypes:{value:"ID"},hashContexts:{value:e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("</label>\n      <label>desc.: "),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{value:"description"},hashTypes:{value:"ID"},hashContexts:{value:e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("</label>\n      <label>lat/lng: "),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{value:"lat","class":"coord"},hashTypes:{value:"ID","class":"STRING"},hashContexts:{value:e,"class":e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("/"),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{value:"lng","class":"coord"},hashTypes:{value:"ID","class":"STRING"},hashContexts:{value:e,"class":e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("</label>\n      <label>"),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{type:"checkbox",checked:"isVisible"},hashTypes:{type:"STRING",checked:"ID"},hashContexts:{type:e,checked:e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("visible</label> |\n      <label>"),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{type:"checkbox",checked:"isDraggable"},hashTypes:{type:"STRING",checked:"ID"},hashContexts:{type:e,checked:e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("draggable</label>\n      <button "),t.buffer.push(c(s.action.call(e,"removeMarker","",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t}))),t.buffer.push(">x</button>\n    </li>\n  "),l}function u(e,t){var a,n,l="";return t.buffer.push("\n    <li>\n      <label>title: "),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{value:"title"},hashTypes:{value:"ID"},hashContexts:{value:e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("</label>\n      <label>desc.: "),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{value:"description"},hashTypes:{value:"ID"},hashContexts:{value:e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("</label>\n      <label>lat/lng: "),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{value:"lat","class":"coord"},hashTypes:{value:"ID","class":"STRING"},hashContexts:{value:e,"class":e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("/"),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{value:"lng","class":"coord"},hashTypes:{value:"ID","class":"STRING"},hashContexts:{value:e,"class":e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("</label>\n      <label>"),t.buffer.push(c((a=s.input||e&&e.input,n={hash:{type:"checkbox",checked:"isVisible"},hashTypes:{type:"STRING",checked:"ID"},hashContexts:{type:e,checked:e},contexts:[],types:[],data:t},a?a.call(e,n):f.call(e,"input",n)))),t.buffer.push("visible</label>\n      <button "),t.buffer.push(c(s.action.call(e,"removeInfoWindow","",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t}))),t.buffer.push(">x</button>\n    </li>\n  "),l}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,a.Handlebars.helpers),l=l||{};var h,r,p,i="",f=s.helperMissing,c=this.escapeExpression,d=this;return l.buffer.push('<h2 id="title">\n  Dead simple example of using <a href="https://github.com/huafu/ember-google-map">ember-google-map</a>\n</h2>\n\n'),l.buffer.push(c((r=s["google-map"]||t&&t["google-map"],p={hash:{lat:"lat",lng:"lng",type:"type",zoom:"zoom",markers:"markers",infoWindows:"infoWindows",infoWindowTemplateName:"marker-info-window",gopt_mapTypeControl:!1,gopt_backgroundColor:"transparent"},hashTypes:{lat:"ID",lng:"ID",type:"ID",zoom:"ID",markers:"ID",infoWindows:"ID",infoWindowTemplateName:"STRING",gopt_mapTypeControl:"BOOLEAN",gopt_backgroundColor:"STRING"},hashContexts:{lat:t,lng:t,type:t,zoom:t,markers:t,infoWindows:t,infoWindowTemplateName:t,gopt_mapTypeControl:t,gopt_backgroundColor:t},contexts:[],types:[],data:l},r?r.call(t,p):f.call(t,"google-map",p)))),l.buffer.push("\n\n<h3>Map settings</h3>\n<div>\n  <label>center lat/lng: "),l.buffer.push(c((r=s.input||t&&t.input,p={hash:{value:"lat","class":"coord"},hashTypes:{value:"ID","class":"STRING"},hashContexts:{value:t,"class":t},contexts:[],types:[],data:l},r?r.call(t,p):f.call(t,"input",p)))),l.buffer.push("/"),l.buffer.push(c((r=s.input||t&&t.input,p={hash:{value:"lng","class":"coord"},hashTypes:{value:"ID","class":"STRING"},hashContexts:{value:t,"class":t},contexts:[],types:[],data:l},r?r.call(t,p):f.call(t,"input",p)))),l.buffer.push("</label>\n  <label>zoom: "),l.buffer.push(c((r=s.input||t&&t.input,p={hash:{value:"zoom"},hashTypes:{value:"ID"},hashContexts:{value:t},contexts:[],types:[],data:l},r?r.call(t,p):f.call(t,"input",p)))),l.buffer.push("</label>\n  <label>type: "),l.buffer.push(c(s.view.call(t,"Ember.Select",{hash:{content:"mapTypes",optionLabelPath:"content.label",optionValuePath:"content.id",value:"type"},hashTypes:{content:"ID",optionLabelPath:"STRING",optionValuePath:"STRING",value:"ID"},hashContexts:{content:t,optionLabelPath:t,optionValuePath:t,value:t},contexts:[t],types:["ID"],data:l}))),l.buffer.push('</label>\n</div>\n<h3>Markers</h3>\n<ul class="markers">\n  '),h=s.each.call(t,"markers",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(1,o,l),contexts:[t],types:["ID"],data:l}),(h||0===h)&&l.buffer.push(h),l.buffer.push("\n  <button "),l.buffer.push(c(s.action.call(t,"addMarker",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:l}))),l.buffer.push('>add</button>\n</ul>\n\n<h3>Info windows</h3>\n<ul class="info-windows">\n  '),h=s.each.call(t,"infoWindows",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(3,u,l),contexts:[t],types:["ID"],data:l}),(h||0===h)&&l.buffer.push(h),l.buffer.push("\n  <button "),l.buffer.push(c(s.action.call(t,"addInfoWindow",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:l}))),l.buffer.push(">add</button>\n</ul>\n"),i})}),define("dummy/templates/components/google-map",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,s,n,l){function o(e,t){var a,n="";return t.buffer.push("\n      <li>"),a=s._triageMustache.call(e,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push(" @ "),a=s._triageMustache.call(e,"lat",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push(","),a=s._triageMustache.call(e,"lng",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("</li>\n      "),a=s["if"].call(e,"view.hasInfoWindow",{hash:{},hashTypes:{},hashContexts:{},inverse:i.noop,fn:i.program(2,u,t),contexts:[e],types:["ID"],data:t}),(a||0===a)&&t.buffer.push(a),t.buffer.push("\n    "),n}function u(e,t){var a="";return t.buffer.push("\n        "),t.buffer.push(p(s.view.call(e,"google-map/info-window",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push("\n      "),a}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,a.Handlebars.helpers),l=l||{};var h,r="",p=this.escapeExpression,i=this;return l.buffer.push('<div class="map-canvas"></div>\n<div class="markers" style="display: none;">\n  <ul>\n    \n    '),h=s.each.call(t,"markers",{hash:{itemController:"markerController",itemView:"google-map/marker"},hashTypes:{itemController:"ID",itemView:"STRING"},hashContexts:{itemController:t,itemView:t},inverse:i.noop,fn:i.program(1,o,l),contexts:[t],types:["ID"],data:l}),(h||0===h)&&l.buffer.push(h),l.buffer.push("\n  </ul>\n  <ul>\n    \n    "),l.buffer.push(p(s.each.call(t,"infoWindows",{hash:{itemController:"infoWindowController",itemView:"google-map/info-window"},hashTypes:{itemController:"ID",itemView:"STRING"},hashContexts:{itemController:t,itemView:t},contexts:[t],types:["ID"],data:l}))),l.buffer.push("\n  </ul>\n</div>\n"),r})}),define("dummy/templates/google-map/info-window",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,s,n,l){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,a.Handlebars.helpers),l=l||{};var o,u="";return l.buffer.push("<h3>"),o=s._triageMustache.call(t,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:l}),(o||0===o)&&l.buffer.push(o),l.buffer.push("</h3>\n\n<p>"),o=s._triageMustache.call(t,"description",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:l}),(o||0===o)&&l.buffer.push(o),l.buffer.push("</p>\n"),u})}),define("dummy/templates/marker-info-window",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,s,n,l){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,a.Handlebars.helpers),l=l||{};var o,u="";return l.buffer.push("<h2>I am marker "),o=s._triageMustache.call(t,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:l}),(o||0===o)&&l.buffer.push(o),l.buffer.push("</h2>\n<div>\n  I have latitude <code>"),o=s._triageMustache.call(t,"lat",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:l}),(o||0===o)&&l.buffer.push(o),l.buffer.push("</code>\n  and longitude <code>"),o=s._triageMustache.call(t,"lng",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:l}),(o||0===o)&&l.buffer.push(o),l.buffer.push("</code>.\n</div>\n<h4>"),o=s._triageMustache.call(t,"helloWorld",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:l}),(o||0===o)&&l.buffer.push(o),l.buffer.push("</h4>\n"),u})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",s=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(s));return{"default":n}}catch(l){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({});