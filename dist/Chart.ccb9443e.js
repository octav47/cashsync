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
})({"../node_modules/highcharts/highstock.js":[function(require,module,exports) {
var define;
/*
 Highstock JS v8.1.2 (2020-06-16)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(Q,O){"object"===typeof module&&module.exports?(O["default"]=O,module.exports=Q.document?O(Q):O):"function"===typeof define&&define.amd?define("highcharts/highstock",function(){return O(Q)}):(Q.Highcharts&&Q.Highcharts.error(16,!0),Q.Highcharts=O(Q))})("undefined"!==typeof window?window:this,function(Q){function O(p,e,q,B){p.hasOwnProperty(e)||(p[e]=B.apply(null,q))}var q={};O(q,"parts/Globals.js",[],function(){var p="undefined"!==typeof Q?Q:"undefined"!==typeof window?window:{},e=p.document,
q=p.navigator&&p.navigator.userAgent||"",B=e&&e.createElementNS&&!!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,D=/(edge|msie|trident)/i.test(q)&&!p.opera,z=-1!==q.indexOf("Firefox"),J=-1!==q.indexOf("Chrome"),G=z&&4>parseInt(q.split("Firefox/")[1],10);return{product:"Highcharts",version:"8.1.2",deg2rad:2*Math.PI/360,doc:e,hasBidiBug:G,hasTouch:!!p.TouchEvent,isMS:D,isWebKit:-1!==q.indexOf("AppleWebKit"),isFirefox:z,isChrome:J,isSafari:!J&&-1!==q.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(q),
SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:B,win:p,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});O(q,"parts/Utilities.js",[q["parts/Globals.js"]],function(p){function e(b,n,a,g){var L=n?"Highcharts error":"Highcharts warning";32===b&&(b=L+": Deprecated member");var k=C(b),c=k?L+" #"+b+": www.highcharts.com/errors/"+b+"/":b.toString();L=function(){if(n)throw Error(c);H.console&&-1===e.messages.indexOf(c)&&
console.log(c)};if("undefined"!==typeof g){var N="";k&&(c+="?");V(g,function(b,n){N+="\n - "+n+": "+b;k&&(c+=encodeURI(n)+"="+encodeURI(b))});c+=N}a?ea(a,"displayError",{code:b,message:c,params:g},L):L();e.messages.push(c)}function q(){var b,n=arguments,a={},g=function(b,n){"object"!==typeof b&&(b={});V(n,function(a,L){!B(a,!0)||u(a)||r(a)?b[L]=n[L]:b[L]=g(b[L]||{},a)});return b};!0===n[0]&&(a=n[1],n=Array.prototype.slice.call(n,2));var L=n.length;for(b=0;b<L;b++)a=g(a,n[b]);return a}function B(b,
n){return!!b&&"object"===typeof b&&(!n||!w(b))}function D(b,n,a){var g;K(n)?f(a)?b.setAttribute(n,a):b&&b.getAttribute&&((g=b.getAttribute(n))||"class"!==n||(g=b.getAttribute(n+"Name"))):V(n,function(n,a){b.setAttribute(a,n)});return g}function z(){for(var b=arguments,n=b.length,a=0;a<n;a++){var g=b[a];if("undefined"!==typeof g&&null!==g)return g}}function J(b,n){if(!b)return n;var a=b.split(".").reverse();if(1===a.length)return n[b];for(b=a.pop();"undefined"!==typeof b&&"undefined"!==typeof n&&null!==
n;)n=n[b],b=a.pop();return n}p.timers=[];var G=p.charts,m=p.doc,H=p.win;(e||(e={})).messages=[];p.error=e;var M=function(){function b(b,n,a){this.options=n;this.elem=b;this.prop=a}b.prototype.dSetter=function(){var b=this.paths,n=b&&b[0];b=b&&b[1];var a=[],g=this.now||0;if(1!==g&&n&&b)if(n.length===b.length&&1>g)for(var L=0;L<b.length;L++){for(var c=n[L],k=b[L],N=[],d=0;d<k.length;d++){var l=c[d],f=k[d];N[d]="number"===typeof l&&"number"===typeof f&&("A"!==k[0]||4!==d&&5!==d)?l+g*(f-l):f}a.push(N)}else a=
b;else a=this.toD||[];this.elem.attr("d",a,void 0,!0)};b.prototype.update=function(){var b=this.elem,n=this.prop,a=this.now,g=this.options.step;if(this[n+"Setter"])this[n+"Setter"]();else b.attr?b.element&&b.attr(n,a,null,!0):b.style[n]=a+this.unit;g&&g.call(b,a,this)};b.prototype.run=function(b,n,a){var g=this,L=g.options,c=function(b){return c.stopped?!1:g.step(b)},k=H.requestAnimationFrame||function(b){setTimeout(b,13)},N=function(){for(var b=0;b<p.timers.length;b++)p.timers[b]()||p.timers.splice(b--,
1);p.timers.length&&k(N)};b!==n||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=b,this.end=n,this.unit=a,this.now=this.start,this.pos=0,c.elem=this.elem,c.prop=this.prop,c()&&1===p.timers.push(c)&&k(N)):(delete L.curAnim[this.prop],L.complete&&0===Object.keys(L.curAnim).length&&L.complete.call(this.elem))};b.prototype.step=function(b){var n=+new Date,a=this.options,g=this.elem,L=a.complete,c=a.duration,k=a.curAnim;if(g.attr&&!g.element)b=!1;else if(b||n>=c+this.startTime){this.now=
this.end;this.pos=1;this.update();var N=k[this.prop]=!0;V(k,function(b){!0!==b&&(N=!1)});N&&L&&L.call(g);b=!1}else this.pos=a.easing((n-this.startTime)/c),this.now=this.start+(this.end-this.start)*this.pos,this.update(),b=!0;return b};b.prototype.initPath=function(b,n,a){function g(b,n){for(;b.length<v;){var a=b[0],g=n[v-b.length];g&&"M"===a[0]&&(b[0]="C"===g[0]?["C",a[1],a[2],a[1],a[2],a[1],a[2]]:["L",a[1],a[2]]);b.unshift(a);N&&b.push(b[b.length-1])}}function L(b,n){for(;b.length<v;)if(n=b[b.length/
d-1].slice(),"C"===n[0]&&(n[1]=n[5],n[2]=n[6]),N){var a=b[b.length/d].slice();b.splice(b.length/2,0,n,a)}else b.push(n)}var c=b.startX,k=b.endX;n=n&&n.slice();a=a.slice();var N=b.isArea,d=N?2:1;if(!n)return[a,a];if(c&&k){for(b=0;b<c.length;b++)if(c[b]===k[0]){var l=b;break}else if(c[0]===k[k.length-c.length+b]){l=b;var f=!0;break}else if(c[c.length-1]===k[k.length-c.length+b]){l=c.length-b;break}"undefined"===typeof l&&(n=[])}if(n.length&&C(l)){var v=a.length+l*d;f?(g(n,a),L(a,n)):(g(a,n),L(n,a))}return[n,
a]};b.prototype.fillSetter=function(){b.prototype.strokeSetter.apply(this,arguments)};b.prototype.strokeSetter=function(){this.elem.attr(this.prop,p.color(this.start).tweenTo(p.color(this.end),this.pos),null,!0)};return b}();p.Fx=M;p.merge=q;var A=p.pInt=function(b,n){return parseInt(b,n||10)},K=p.isString=function(b){return"string"===typeof b},w=p.isArray=function(b){b=Object.prototype.toString.call(b);return"[object Array]"===b||"[object Array Iterator]"===b};p.isObject=B;var r=p.isDOMElement=function(b){return B(b)&&
"number"===typeof b.nodeType},u=p.isClass=function(b){var n=b&&b.constructor;return!(!B(b,!0)||r(b)||!n||!n.name||"Object"===n.name)},C=p.isNumber=function(b){return"number"===typeof b&&!isNaN(b)&&Infinity>b&&-Infinity<b},h=p.erase=function(b,n){for(var a=b.length;a--;)if(b[a]===n){b.splice(a,1);break}},f=p.defined=function(b){return"undefined"!==typeof b&&null!==b};p.attr=D;var d=p.splat=function(b){return w(b)?b:[b]},t=p.syncTimeout=function(b,n,a){if(0<n)return setTimeout(b,n,a);b.call(0,a);return-1},
l=p.clearTimeout=function(b){f(b)&&clearTimeout(b)},c=p.extend=function(b,n){var a;b||(b={});for(a in n)b[a]=n[a];return b};p.pick=z;var a=p.css=function(b,n){p.isMS&&!p.svg&&n&&"undefined"!==typeof n.opacity&&(n.filter="alpha(opacity="+100*n.opacity+")");c(b.style,n)},x=p.createElement=function(b,n,g,L,k){b=m.createElement(b);n&&c(b,n);k&&a(b,{padding:"0",border:"none",margin:"0"});g&&a(b,g);L&&L.appendChild(b);return b},v=p.extendClass=function(b,n){var a=function(){};a.prototype=new b;c(a.prototype,
n);return a},E=p.pad=function(b,n,a){return Array((n||2)+1-String(b).replace("-","").length).join(a||"0")+b},F=p.relativeLength=function(b,n,a){return/%$/.test(b)?n*parseFloat(b)/100+(a||0):parseFloat(b)},k=p.wrap=function(b,n,a){var g=b[n];b[n]=function(){var b=Array.prototype.slice.call(arguments),n=arguments,L=this;L.proceed=function(){g.apply(L,arguments.length?arguments:n)};b.unshift(g);b=a.apply(this,b);L.proceed=null;return b}},y=p.format=function(b,n,a){var g="{",L=!1,c=[],k=/f$/,N=/\.([0-9])/,
d=p.defaultOptions.lang,l=a&&a.time||p.time;for(a=a&&a.numberFormatter||Y;b;){var f=b.indexOf(g);if(-1===f)break;var v=b.slice(0,f);if(L){v=v.split(":");g=J(v.shift()||"",n);if(v.length&&"number"===typeof g)if(v=v.join(":"),k.test(v)){var x=parseInt((v.match(N)||["","-1"])[1],10);null!==g&&(g=a(g,x,d.decimalPoint,-1<v.indexOf(",")?d.thousandsSep:""))}else g=l.dateFormat(v,g);c.push(g)}else c.push(v);b=b.slice(f+1);g=(L=!L)?"}":"{"}c.push(b);return c.join("")},I=p.getMagnitude=function(b){return Math.pow(10,
Math.floor(Math.log(b)/Math.LN10))},P=p.normalizeTickInterval=function(b,n,a,g,L){var c=b;a=z(a,1);var k=b/a;n||(n=L?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===g&&(1===a?n=n.filter(function(b){return 0===b%1}):.1>=a&&(n=[1/a])));for(g=0;g<n.length&&!(c=n[g],L&&c*a>=b||!L&&k<=(n[g]+(n[g+1]||n[g]))/2);g++);return c=S(c*a,-Math.round(Math.log(.001)/Math.LN10))},g=p.stableSort=function(b,n){var a=b.length,g,L;for(L=0;L<a;L++)b[L].safeI=L;b.sort(function(b,a){g=n(b,a);return 0===g?b.safeI-a.safeI:
g});for(L=0;L<a;L++)delete b[L].safeI},b=p.arrayMin=function(b){for(var n=b.length,a=b[0];n--;)b[n]<a&&(a=b[n]);return a},n=p.arrayMax=function(b){for(var n=b.length,a=b[0];n--;)b[n]>a&&(a=b[n]);return a},L=p.destroyObjectProperties=function(b,n){V(b,function(a,g){a&&a!==n&&a.destroy&&a.destroy();delete b[g]})},N=p.discardElement=function(b){var n=p.garbageBin;n||(n=x("div"));b&&n.appendChild(b);n.innerHTML=""},S=p.correctFloat=function(b,n){return parseFloat(b.toPrecision(n||14))},aa=p.setAnimation=
function(b,n){n.renderer.globalAnimation=z(b,n.options.chart.animation,!0)},Z=p.animObject=function(b){return B(b)?q(b):{duration:b?500:0}},ba=p.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},Y=p.numberFormat=function(b,n,a,g){b=+b||0;n=+n;var L=p.defaultOptions.lang,c=(b.toString().split(".")[1]||"").split("e")[0].length,k=b.toString().split("e");if(-1===n)n=Math.min(c,20);else if(!C(n))n=2;else if(n&&k[1]&&0>k[1]){var N=n+ +k[1];0<=N?
(k[0]=(+k[0]).toExponential(N).split("e")[0],n=N):(k[0]=k[0].split(".")[0]||0,b=20>n?(k[0]*Math.pow(10,k[1])).toFixed(n):0,k[1]=0)}var d=(Math.abs(k[1]?k[0]:b)+Math.pow(10,-Math.max(n,c)-1)).toFixed(n);c=String(A(d));N=3<c.length?c.length%3:0;a=z(a,L.decimalPoint);g=z(g,L.thousandsSep);b=(0>b?"-":"")+(N?c.substr(0,N)+g:"");b+=c.substr(N).replace(/(\d{3})(?=\d)/g,"$1"+g);n&&(b+=a+d.slice(-n));k[1]&&0!==+b&&(b+="e"+k[1]);return b};Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*b)-1)};var ca=
p.getStyle=function(b,n,a){if("width"===n)return n=Math.min(b.offsetWidth,b.scrollWidth),a=b.getBoundingClientRect&&b.getBoundingClientRect().width,a<n&&a>=n-1&&(n=Math.floor(a)),Math.max(0,n-p.getStyle(b,"padding-left")-p.getStyle(b,"padding-right"));if("height"===n)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-p.getStyle(b,"padding-top")-p.getStyle(b,"padding-bottom"));H.getComputedStyle||e(27,!0);if(b=H.getComputedStyle(b,void 0))b=b.getPropertyValue(n),z(a,"opacity"!==n)&&(b=A(b));
return b},da=p.inArray=function(b,n,a){e(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return n.indexOf(b,a)},T=p.find=Array.prototype.find?function(b,n){return b.find(n)}:function(b,n){var a,g=b.length;for(a=0;a<g;a++)if(n(b[a],a))return b[a]};p.keys=function(b){e(32,!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(b)};var W=p.offset=function(b){var n=m.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0};return{top:b.top+(H.pageYOffset||
n.scrollTop)-(n.clientTop||0),left:b.left+(H.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}},fa=p.stop=function(b,n){for(var a=p.timers.length;a--;)p.timers[a].elem!==b||n&&n!==p.timers[a].prop||(p.timers[a].stopped=!0)},V=p.objectEach=function(b,n,a){for(var g in b)Object.hasOwnProperty.call(b,g)&&n.call(a||b[g],b[g],g,b)};V({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,n){p[n]=function(a){var g;e(32,!1,void 0,(g={},g["Highcharts."+n]="use Array."+b,g));return Array.prototype[b].apply(a,
[].slice.call(arguments,1))}});var ka=p.addEvent=function(b,n,a,g){void 0===g&&(g={});var L=b.addEventListener||p.addEventListenerPolyfill;var c="function"===typeof b&&b.prototype?b.prototype.protoEvents=b.prototype.protoEvents||{}:b.hcEvents=b.hcEvents||{};p.Point&&b instanceof p.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=!0);L&&L.call(b,n,a,!1);c[n]||(c[n]=[]);c[n].push({fn:a,order:"number"===typeof g.order?g.order:Infinity});c[n].sort(function(b,n){return b.order-n.order});
return function(){ha(b,n,a)}},ha=p.removeEvent=function(b,n,a){function g(n,a){var g=b.removeEventListener||p.removeEventListenerPolyfill;g&&g.call(b,n,a,!1)}function L(a){var L;if(b.nodeName){if(n){var c={};c[n]=!0}else c=a;V(c,function(b,n){if(a[n])for(L=a[n].length;L--;)g(n,a[n][L].fn)})}}var c;["protoEvents","hcEvents"].forEach(function(k,N){var d=(N=N?b:b.prototype)&&N[k];d&&(n?(c=d[n]||[],a?(d[n]=c.filter(function(b){return a!==b.fn}),g(n,a)):(L(d),d[n]=[])):(L(d),N[k]={}))})},ea=p.fireEvent=
function(b,n,a,g){var L;a=a||{};if(m.createEvent&&(b.dispatchEvent||b.fireEvent)){var k=m.createEvent("Events");k.initEvent(n,!0,!0);c(k,a);b.dispatchEvent?b.dispatchEvent(k):b.fireEvent(n,k)}else a.target||c(a,{preventDefault:function(){a.defaultPrevented=!0},target:b,type:n}),function(n,g){void 0===n&&(n=[]);void 0===g&&(g=[]);var c=0,k=0,N=n.length+g.length;for(L=0;L<N;L++)!1===(n[c]?g[k]?n[c].order<=g[k].order?n[c++]:g[k++]:n[c++]:g[k++]).fn.call(b,a)&&a.preventDefault()}(b.protoEvents&&b.protoEvents[n],
b.hcEvents&&b.hcEvents[n]);g&&!a.defaultPrevented&&g.call(b,a)},la=p.animate=function(b,n,a){var g,L="",c,k;if(!B(a)){var N=arguments;a={duration:N[2],easing:N[3],complete:N[4]}}C(a.duration)||(a.duration=400);a.easing="function"===typeof a.easing?a.easing:Math[a.easing]||Math.easeInOutSine;a.curAnim=q(n);V(n,function(N,d){fa(b,d);k=new M(b,a,d);c=null;"d"===d&&w(n.d)?(k.paths=k.initPath(b,b.pathArray,n.d),k.toD=n.d,g=0,c=1):b.attr?g=b.attr(d):(g=parseFloat(ca(b,d))||0,"opacity"!==d&&(L="px"));c||
(c=N);c&&c.match&&c.match("px")&&(c=c.replace(/px/g,""));k.run(g,c,L)})},U=p.seriesType=function(b,n,a,g,L){var c=ia(),k=p.seriesTypes;c.plotOptions[b]=q(c.plotOptions[n],a);k[b]=v(k[n]||function(){},g);k[b].prototype.type=b;L&&(k[b].prototype.pointClass=v(p.Point,L));return k[b]},X,ja=p.uniqueKey=function(){var b=Math.random().toString(36).substring(2,9)+"-",n=0;return function(){return"highcharts-"+(X?"":b)+n++}}(),ma=p.useSerialIds=function(b){return X=z(b,X)},O=p.isFunction=function(b){return"function"===
typeof b},ia=p.getOptions=function(){return p.defaultOptions},na=p.setOptions=function(b){p.defaultOptions=q(!0,p.defaultOptions,b);(b.time||b.global)&&p.time.update(q(p.defaultOptions.global,p.defaultOptions.time,b.global,b.time));return p.defaultOptions};H.jQuery&&(H.jQuery.fn.highcharts=function(){var b=[].slice.call(arguments);if(this[0])return b[0]?(new (p[K(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):G[D(this[0],"data-highcharts-chart")]});return{Fx:p.Fx,addEvent:ka,animate:la,animObject:Z,
arrayMax:n,arrayMin:b,attr:D,clamp:function(b,n,a){return b>n?b<a?b:a:n},clearTimeout:l,correctFloat:S,createElement:x,css:a,defined:f,destroyObjectProperties:L,discardElement:N,erase:h,error:e,extend:c,extendClass:v,find:T,fireEvent:ea,format:y,getMagnitude:I,getNestedProperty:J,getOptions:ia,getStyle:ca,inArray:da,isArray:w,isClass:u,isDOMElement:r,isFunction:O,isNumber:C,isObject:B,isString:K,merge:q,normalizeTickInterval:P,numberFormat:Y,objectEach:V,offset:W,pad:E,pick:z,pInt:A,relativeLength:F,
removeEvent:ha,seriesType:U,setAnimation:aa,setOptions:na,splat:d,stableSort:g,stop:fa,syncTimeout:t,timeUnits:ba,uniqueKey:ja,useSerialIds:ma,wrap:k}});O(q,"parts/Color.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.isNumber,B=e.merge,D=e.pInt;e=function(){function e(p){this.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(e){return[D(e[1]),D(e[2]),D(e[3]),parseFloat(e[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(e){return[D(e[1]),D(e[2]),D(e[3]),1]}}];this.rgba=[];if(!(this instanceof e))return new e(p);this.init(p)}e.parse=function(p){return new e(p)};e.prototype.init=function(p){var G,m;if((this.input=p=e.names[p&&p.toLowerCase?p.toLowerCase():""]||p)&&p.stops)this.stops=p.stops.map(function(A){return new e(A[1])});else{if(p&&p.charAt&&"#"===p.charAt()){var H=p.length;p=parseInt(p.substr(1),16);7===H?G=[(p&16711680)>>16,(p&65280)>>8,p&255,1]:4===H&&(G=[(p&3840)>>4|(p&3840)>>8,(p&240)>>4|
p&240,(p&15)<<4|p&15,1])}if(!G)for(m=this.parsers.length;m--&&!G;){var M=this.parsers[m];(H=M.regex.exec(p))&&(G=M.parse(H))}}this.rgba=G||[]};e.prototype.get=function(e){var p=this.input,m=this.rgba;if("undefined"!==typeof this.stops){var H=B(p);H.stops=[].concat(H.stops);this.stops.forEach(function(m,A){H.stops[A]=[H.stops[A][0],m.get(e)]})}else H=m&&q(m[0])?"rgb"===e||!e&&1===m[3]?"rgb("+m[0]+","+m[1]+","+m[2]+")":"a"===e?m[3]:"rgba("+m.join(",")+")":p;return H};e.prototype.brighten=function(e){var p,
m=this.rgba;if(this.stops)this.stops.forEach(function(m){m.brighten(e)});else if(q(e)&&0!==e)for(p=0;3>p;p++)m[p]+=D(255*e),0>m[p]&&(m[p]=0),255<m[p]&&(m[p]=255);return this};e.prototype.setOpacity=function(e){this.rgba[3]=e;return this};e.prototype.tweenTo=function(e,p){var m=this.rgba,H=e.rgba;H.length&&m&&m.length?(e=1!==H[3]||1!==m[3],p=(e?"rgba(":"rgb(")+Math.round(H[0]+(m[0]-H[0])*(1-p))+","+Math.round(H[1]+(m[1]-H[1])*(1-p))+","+Math.round(H[2]+(m[2]-H[2])*(1-p))+(e?","+(H[3]+(m[3]-H[3])*(1-
p)):"")+")"):p=e.input||"none";return p};e.names={white:"#ffffff",black:"#000000"};return e}();p.Color=e;p.color=e.parse;return p.Color});O(q,"parts/SVGElement.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e,q){var B=e.deg2rad,D=e.doc,z=e.hasTouch,J=e.isFirefox,G=e.noop,m=e.svg,H=e.SVG_NS,M=e.win,A=q.animate,K=q.animObject,w=q.attr,r=q.createElement,u=q.css,C=q.defined,h=q.erase,f=q.extend,d=q.fireEvent,t=q.isArray,l=q.isFunction,c=q.isNumber,a=q.isString,x=q.merge,
v=q.objectEach,E=q.pick,F=q.pInt,k=q.stop,y=q.uniqueKey;"";q=function(){function I(){this.height=this.element=void 0;this.opacity=1;this.renderer=void 0;this.SVG_NS=H;this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ");this.width=void 0}I.prototype._defaultGetter=function(a){a=E(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a};I.prototype._defaultSetter=function(a,g,b){b.setAttribute(g,
a)};I.prototype.add=function(a){var g=this.renderer,b=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;"undefined"!==typeof this.textStr&&"text"===this.element.nodeName&&g.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var n=this.zIndexSetter();n||(a?a.element:g.box).appendChild(b);if(this.onAdd)this.onAdd();return this};I.prototype.addClass=function(a,g){var b=g?"":this.attr("class")||"";a=(a||"").split(/ /g).reduce(function(n,a){-1===b.indexOf(a)&&n.push(a);return n},
b?[b]:[]).join(" ");a!==b&&this.attr("class",a);return this};I.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)};I.prototype.align=function(c,g,b){var n,L={};var k=this.renderer;var d=k.alignedObjects;var l,f;if(c){if(this.alignOptions=c,this.alignByTranslate=g,!b||a(b))this.alignTo=n=b||"renderer",h(d,this),d.push(this),b=void 0}else c=this.alignOptions,g=this.alignByTranslate,n=this.alignTo;b=E(b,k[n],k);n=c.align;k=c.verticalAlign;d=(b.x||0)+(c.x||
0);var v=(b.y||0)+(c.y||0);"right"===n?l=1:"center"===n&&(l=2);l&&(d+=(b.width-(c.width||0))/l);L[g?"translateX":"x"]=Math.round(d);"bottom"===k?f=1:"middle"===k&&(f=2);f&&(v+=(b.height-(c.height||0))/f);L[g?"translateY":"y"]=Math.round(v);this[this.placed?"animate":"attr"](L);this.placed=!0;this.alignAttr=L;return this};I.prototype.alignSetter=function(a){var g={left:"start",center:"middle",right:"end"};g[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",g[a]))};I.prototype.animate=
function(a,g,b){var n=K(E(g,this.renderer.globalAnimation,!0));E(D.hidden,D.msHidden,D.webkitHidden,!1)&&(n.duration=0);0!==n.duration?(b&&(n.complete=b),A(this,a,n)):(this.attr(a,void 0,b),v(a,function(b,a){n.step&&n.step.call(this,b,{prop:a,pos:1})},this));return this};I.prototype.applyTextOutline=function(a){var g=this.element,b;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(g.style.fill)));a=a.split(" ");var n=a[a.length-1];if((b=a[0])&&"none"!==b&&e.svg){this.fakeTS=
!0;a=[].slice.call(g.getElementsByTagName("tspan"));this.ySetter=this.xSetter;b=b.replace(/(^[\d\.]+)(.*?)$/g,function(b,n,a){return 2*n+a});this.removeTextOutline(a);var L=g.textContent?/^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(g.textContent):!1;var c=g.firstChild;a.forEach(function(a,k){0===k&&(a.setAttribute("x",g.getAttribute("x")),k=g.getAttribute("y"),a.setAttribute("y",k||0),null===k&&g.setAttribute("y",0));k=a.cloneNode(!0);w(L&&!J?a:k,{"class":"highcharts-text-outline",
fill:n,stroke:n,"stroke-width":b,"stroke-linejoin":"round"});g.insertBefore(k,c)});L&&J&&a[0]&&(a=a[0].cloneNode(!0),a.textContent=" ",g.insertBefore(a,c))}};I.prototype.attr=function(a,g,b,n){var L=this.element,c,d=this,l,f,x=this.symbolCustomAttribs;if("string"===typeof a&&"undefined"!==typeof g){var t=a;a={};a[t]=g}"string"===typeof a?d=(this[a+"Getter"]||this._defaultGetter).call(this,a,L):(v(a,function(b,g){l=!1;n||k(this,g);this.symbolName&&-1!==x.indexOf(g)&&(c||(this.symbolAttr(a),c=!0),l=
!0);!this.rotation||"x"!==g&&"y"!==g||(this.doTransform=!0);l||(f=this[g+"Setter"]||this._defaultSetter,f.call(this,b,g,L),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g)&&this.updateShadows(g,b,f))},this),this.afterSetters());b&&b.call(this);return d};I.prototype.clip=function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")};I.prototype.crisp=function(a,g){g=g||a.strokeWidth||0;var b=Math.round(g)%2/2;a.x=Math.floor(a.x||
this.x||0)+b;a.y=Math.floor(a.y||this.y||0)+b;a.width=Math.floor((a.width||this.width||0)-2*b);a.height=Math.floor((a.height||this.height||0)-2*b);C(a.strokeWidth)&&(a.strokeWidth=g);return a};I.prototype.complexColor=function(a,g,b){var n=this.renderer,L,c,k,l,f,h,F,P,E,I,u=[],r;d(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?c="radialGradient":a.linearGradient&&(c="linearGradient");if(c){k=a[c];f=n.gradients;h=a.stops;E=b.radialReference;t(k)&&(a[c]=k={x1:k[0],y1:k[1],
x2:k[2],y2:k[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===c&&E&&!C(k.gradientUnits)&&(l=k,k=x(k,n.getRadialAttr(E,l),{gradientUnits:"userSpaceOnUse"}));v(k,function(b,n){"id"!==n&&u.push(n,b)});v(h,function(b){u.push(b)});u=u.join(",");if(f[u])I=f[u].attr("id");else{k.id=I=y();var N=f[u]=n.createElement(c).attr(k).add(n.defs);N.radAttr=l;N.stops=[];h.forEach(function(b){0===b[1].indexOf("rgba")?(L=p.parse(b[1]),F=L.get("rgb"),P=L.get("a")):(F=b[1],P=1);b=n.createElement("stop").attr({offset:b[0],
"stop-color":F,"stop-opacity":P}).add(N);N.stops.push(b)})}r="url("+n.url+"#"+I+")";b.setAttribute(g,r);b.gradient=u;a.toString=function(){return r}}})};I.prototype.css=function(a){var g=this.styles,b={},n=this.element,c="",k=!g,d=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);g&&v(a,function(n,a){g&&g[a]!==n&&(b[a]=n,k=!0)});if(k){g&&(a=f(g,b));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;else if("text"===n.nodeName.toLowerCase()&&a.width)var l=this.textWidth=
F(a.width);this.styles=a;l&&!m&&this.renderer.forExport&&delete a.width;if(n.namespaceURI===this.SVG_NS){var x=function(b,n){return"-"+n.toLowerCase()};v(a,function(b,n){-1===d.indexOf(n)&&(c+=n.replace(/([A-Z])/g,x)+":"+b+";")});c&&w(n,"style",c)}else u(n,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this};I.prototype.dashstyleSetter=function(a){var g=this["stroke-width"];"inherit"===g&&(g=1);if(a=a&&a.toLowerCase()){var b=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(a=b.length;a--;)b[a]=""+F(b[a])*E(g,NaN);a=b.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}};I.prototype.destroy=function(){var a=this,g=a.element||{},b=a.renderer,n=b.isSVG&&"SPAN"===g.nodeName&&a.parentGroup||void 0,c=g.ownerSVGElement;
g.onclick=g.onmouseout=g.onmouseover=g.onmousemove=g.point=null;k(a);if(a.clipPath&&c){var N=a.clipPath;[].forEach.call(c.querySelectorAll("[clip-path],[CLIP-PATH]"),function(b){-1<b.getAttribute("clip-path").indexOf(N.element.id)&&b.removeAttribute("clip-path")});a.clipPath=N.destroy()}if(a.stops){for(c=0;c<a.stops.length;c++)a.stops[c].destroy();a.stops.length=0;a.stops=void 0}a.safeRemoveChild(g);for(b.styledMode||a.destroyShadows();n&&n.div&&0===n.div.childNodes.length;)g=n.parentGroup,a.safeRemoveChild(n.div),
delete n.div,n=g;a.alignTo&&h(b.alignedObjects,a);v(a,function(b,n){a[n]&&a[n].parentGroup===a&&a[n].destroy&&a[n].destroy();delete a[n]})};I.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0};I.prototype.destroyTextPath=function(a,g){var b=a.getElementsByTagName("text")[0];if(b){if(b.removeAttribute("dx"),b.removeAttribute("dy"),g.element.setAttribute("id",""),this.textPathWrapper&&b.getElementsByTagName("textPath").length){for(a=
this.textPathWrapper.element.childNodes;a.length;)b.appendChild(a[0]);b.removeChild(this.textPathWrapper.element)}}else if(a.getAttribute("dx")||a.getAttribute("dy"))a.removeAttribute("dx"),a.removeAttribute("dy");this.textPathWrapper&&(this.textPathWrapper=this.textPathWrapper.destroy())};I.prototype.dSetter=function(a,g,b){t(a)&&("string"===typeof a[0]&&(a=this.renderer.pathToSegments(a)),this.pathArray=a,a=a.reduce(function(b,a,g){return a&&a.join?(g?b+" ":"")+a.join(" "):(a||"").toString()},""));
/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[g]!==a&&(b.setAttribute(g,a),this[g]=a)};I.prototype.fadeOut=function(a){var g=this;g.animate({opacity:0},{duration:E(a,150),complete:function(){g.attr({y:-9999}).hide()}})};I.prototype.fillSetter=function(a,g,b){"string"===typeof a?b.setAttribute(g,a):a&&this.complexColor(a,g,b)};I.prototype.getBBox=function(a,g){var b,n=this.renderer,c=this.element,k=this.styles,d=this.textStr,v=n.cache,x=n.cacheKeys,t=c.namespaceURI===this.SVG_NS;g=E(g,this.rotation,0);
var y=n.styledMode?c&&I.prototype.getStyle.call(c,"font-size"):k&&k.fontSize;if(C(d)){var h=d.toString();-1===h.indexOf("<")&&(h=h.replace(/[0-9]/g,"0"));h+=["",g,y,this.textWidth,k&&k.textOverflow,k&&k.fontWeight].join()}h&&!a&&(b=v[h]);if(!b){if(t||n.forExport){try{var F=this.fakeTS&&function(b){[].forEach.call(c.querySelectorAll(".highcharts-text-outline"),function(n){n.style.display=b})};l(F)&&F("none");b=c.getBBox?f({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight};l(F)&&F("")}catch(T){""}if(!b||
0>b.width)b={width:0,height:0}}else b=this.htmlGetBBox();n.isSVG&&(a=b.width,n=b.height,t&&(b.height=n={"11px,17":14,"13px,20":16}[k&&k.fontSize+","+Math.round(n)]||n),g&&(k=g*B,b.width=Math.abs(n*Math.sin(k))+Math.abs(a*Math.cos(k)),b.height=Math.abs(n*Math.cos(k))+Math.abs(a*Math.sin(k))));if(h&&0<b.height){for(;250<x.length;)delete v[x.shift()];v[h]||x.push(h);v[h]=b}}return b};I.prototype.getStyle=function(a){return M.getComputedStyle(this.element||this,"").getPropertyValue(a)};I.prototype.hasClass=
function(a){return-1!==(""+this.attr("class")).split(" ").indexOf(a)};I.prototype.hide=function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this};I.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}};I.prototype.init=function(a,g){this.element="span"===g?r(g):D.createElementNS(this.SVG_NS,g);this.renderer=a;d(this,"afterInit")};I.prototype.invert=function(a){this.inverted=a;this.updateTransform();return this};I.prototype.on=function(a,g){var b,n,c=this.element,
k;z&&"click"===a?(c.ontouchstart=function(a){b=a.touches[0].clientX;n=a.touches[0].clientY},c.ontouchend=function(a){b&&4<=Math.sqrt(Math.pow(b-a.changedTouches[0].clientX,2)+Math.pow(n-a.changedTouches[0].clientY,2))||g.call(c,a);k=!0;a.preventDefault()},c.onclick=function(b){k||g.call(c,b)}):c["on"+a]=g;return this};I.prototype.opacitySetter=function(a,g,b){this[g]=a;b.setAttribute(g,a)};I.prototype.removeClass=function(c){return this.attr("class",(""+this.attr("class")).replace(a(c)?new RegExp("(^| )"+
c+"( |$)"):c," ").replace(/ +/g," ").trim())};I.prototype.removeTextOutline=function(a){for(var g=a.length,b;g--;)b=a[g],"highcharts-text-outline"===b.getAttribute("class")&&h(a,this.element.removeChild(b))};I.prototype.safeRemoveChild=function(a){var g=a.parentNode;g&&g.removeChild(a)};I.prototype.setRadialReference=function(a){var g=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=a;g&&g.radAttr&&g.animate(this.renderer.getRadialAttr(a,g.radAttr));
return this};I.prototype.setTextPath=function(a,g){var b=this.element,n={textAnchor:"text-anchor"},k=!1,d=this.textPathWrapper,l=!d;g=x(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},g);var f=g.attributes;if(a&&g&&g.enabled){d&&null===d.element.parentNode?(l=!0,d=d.destroy()):d&&this.removeTextOutline.call(d.parentGroup,[].slice.call(b.getElementsByTagName("tspan")));this.options&&this.options.padding&&(f.dx=-this.options.padding);d||(this.textPathWrapper=d=this.renderer.createElement("textPath"),
k=!0);var t=d.element;(g=a.element.getAttribute("id"))||a.element.setAttribute("id",g=y());if(l)for(a=b.getElementsByTagName("tspan");a.length;)a[0].setAttribute("y",0),c(f.dx)&&a[0].setAttribute("x",-f.dx),t.appendChild(a[0]);k&&d&&d.add({element:this.text?this.text.element:b});t.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+g);C(f.dy)&&(t.parentNode.setAttribute("dy",f.dy),delete f.dy);C(f.dx)&&(t.parentNode.setAttribute("dx",f.dx),delete f.dx);v(f,function(b,a){t.setAttribute(n[a]||
a,b)});b.removeAttribute("transform");this.removeTextOutline.call(d,[].slice.call(b.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=G}else d&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(b,a),this.updateTransform(),this.options&&this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this};I.prototype.shadow=function(a,g,b){var n=
[],c=this.element,k=!1,d=this.oldShadowOptions;var l={color:"#000000",offsetX:1,offsetY:1,opacity:.15,width:3};var x;!0===a?x=l:"object"===typeof a&&(x=f(l,a));x&&(x&&d&&v(x,function(b,n){b!==d[n]&&(k=!0)}),k&&this.destroyShadows(),this.oldShadowOptions=x);if(!x)this.destroyShadows();else if(!this.shadows){var t=x.opacity/x.width;var y=this.parentInverted?"translate(-1,-1)":"translate("+x.offsetX+", "+x.offsetY+")";for(l=1;l<=x.width;l++){var h=c.cloneNode(!1);var F=2*x.width+1-2*l;w(h,{stroke:a.color||
"#000000","stroke-opacity":t*l,"stroke-width":F,transform:y,fill:"none"});h.setAttribute("class",(h.getAttribute("class")||"")+" highcharts-shadow");b&&(w(h,"height",Math.max(w(h,"height")-F,0)),h.cutHeight=F);g?g.element.appendChild(h):c.parentNode&&c.parentNode.insertBefore(h,c);n.push(h)}this.shadows=n}return this};I.prototype.show=function(a){return this.attr({visibility:a?"inherit":"visible"})};I.prototype.strokeSetter=function(a,g,b){this[g]=a;this.stroke&&this["stroke-width"]?(I.prototype.fillSetter.call(this,
this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke?(b.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};I.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width"),g=0;if(a.indexOf("px")===a.length-2)g=F(a);else if(""!==a){var b=
D.createElementNS(H,"rect");w(b,{width:a,"stroke-width":0});this.element.parentNode.appendChild(b);g=b.getBBox().width;b.parentNode.removeChild(b)}return g};I.prototype.symbolAttr=function(a){var g=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(b){g[b]=E(a[b],g[b])});g.attr({d:g.renderer.symbols[g.symbolName](g.x,g.y,g.width,g.height,g)})};I.prototype.textSetter=function(a){a!==this.textStr&&(delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))};
I.prototype.titleSetter=function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=D.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);g.appendChild(D.createTextNode(String(E(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")))};I.prototype.toFront=function(){var a=this.element;a.parentNode.appendChild(a);return this};I.prototype.translate=function(a,g){return this.attr({translateX:a,translateY:g})};I.prototype.updateShadows=
function(a,g,b){var n=this.shadows;if(n)for(var c=n.length;c--;)b.call(n[c],"height"===a?Math.max(g-(n[c].cutHeight||0),0):"d"===a?this.d:g,a,n[c])};I.prototype.updateTransform=function(){var a=this.translateX||0,g=this.translateY||0,b=this.scaleX,n=this.scaleY,c=this.inverted,k=this.rotation,d=this.matrix,l=this.element;c&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];C(d)&&a.push("matrix("+d.join(",")+")");c?a.push("rotate(90) scale(-1,1)"):k&&a.push("rotate("+k+" "+E(this.rotationOriginX,
l.getAttribute("x"),0)+" "+E(this.rotationOriginY,l.getAttribute("y")||0)+")");(C(b)||C(n))&&a.push("scale("+E(b,1)+" "+E(n,1)+")");a.length&&l.setAttribute("transform",a.join(" "))};I.prototype.visibilitySetter=function(a,g,b){"inherit"===a?b.removeAttribute(g):this[g]!==a&&b.setAttribute(g,a);this[g]=a};I.prototype.xGetter=function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)};I.prototype.zIndexSetter=function(a,g){var b=this.renderer,n=this.parentGroup,
c=(n||b).element||b.box,k=this.element,d=!1;b=c===b.box;var l=this.added;var f;C(a)?(k.setAttribute("data-z-index",a),a=+a,this[g]===a&&(l=!1)):C(this[g])&&k.removeAttribute("data-z-index");this[g]=a;if(l){(a=this.zIndex)&&n&&(n.handleZ=!0);g=c.childNodes;for(f=g.length-1;0<=f&&!d;f--){n=g[f];l=n.getAttribute("data-z-index");var v=!C(l);if(n!==k)if(0>a&&v&&!b&&!f)c.insertBefore(k,g[f]),d=!0;else if(F(l)<=a||v&&(!C(a)||0<=a))c.insertBefore(k,g[f+1]||null),d=!0}d||(c.insertBefore(k,g[b?3:0]||null),
d=!0)}return d};return I}();q.prototype["stroke-widthSetter"]=q.prototype.strokeSetter;q.prototype.yGetter=q.prototype.xGetter;q.prototype.matrixSetter=q.prototype.rotationOriginXSetter=q.prototype.rotationOriginYSetter=q.prototype.rotationSetter=q.prototype.scaleXSetter=q.prototype.scaleYSetter=q.prototype.translateXSetter=q.prototype.translateYSetter=q.prototype.verticalAlignSetter=function(a,c){this[c]=a;this.doTransform=!0};e.SVGElement=q;return e.SVGElement});O(q,"parts/SVGLabel.js",[q["parts/SVGElement.js"],
q["parts/Utilities.js"]],function(p,e){var q=this&&this.__extends||function(){var e=function(m,M){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,m){e.__proto__=m}||function(e,m){for(var w in m)m.hasOwnProperty(w)&&(e[w]=m[w])};return e(m,M)};return function(m,M){function A(){this.constructor=m}e(m,M);m.prototype=null===M?Object.create(M):(A.prototype=M.prototype,new A)}}(),B=e.defined,D=e.extend,z=e.isNumber,J=e.merge,G=e.removeEvent;return function(e){function m(M,A,p,w,r,u,
C,h,f,d){var t=e.call(this)||this;t.init(M,"g");t.textStr=A;t.x=p;t.y=w;t.anchorX=u;t.anchorY=C;t.baseline=f;t.className=d;"button"!==d&&t.addClass("highcharts-label");d&&t.addClass("highcharts-"+d);t.text=M.text("",0,0,h).attr({zIndex:1});if("string"===typeof r){var l=/^url\((.*?)\)$/.test(r);if(t.renderer.symbols[r]||l)t.symbolKey=r}t.bBox=m.emptyBBox;t.padding=3;t.paddingLeft=0;t.baselineOffset=0;t.needsBox=M.styledMode||l;t.deferredAttr={};t.alignFactor=0;return t}q(m,e);m.prototype.alignSetter=
function(m){m={left:0,center:.5,right:1}[m];m!==this.alignFactor&&(this.alignFactor=m,this.bBox&&z(this.xSetting)&&this.attr({x:this.xSetting}))};m.prototype.anchorXSetter=function(m,e){this.anchorX=m;this.boxAttr(e,Math.round(m)-this.getCrispAdjust()-this.xSetting)};m.prototype.anchorYSetter=function(m,e){this.anchorY=m;this.boxAttr(e,m-this.ySetting)};m.prototype.boxAttr=function(m,e){this.box?this.box.attr(m,e):this.deferredAttr[m]=e};m.prototype.css=function(e){if(e){var A={};e=J(e);m.textProps.forEach(function(w){"undefined"!==
typeof e[w]&&(A[w]=e[w],delete e[w])});this.text.css(A);var M="fontSize"in A||"fontWeight"in A;if("width"in A||M)this.updateBoxSize(),M&&this.updateTextPadding()}return p.prototype.css.call(this,e)};m.prototype.destroy=function(){G(this.element,"mouseenter");G(this.element,"mouseleave");this.text&&this.text.destroy();this.box&&(this.box=this.box.destroy());p.prototype.destroy.call(this)};m.prototype.fillSetter=function(m,e){m&&(this.needsBox=!0);this.fill=m;this.boxAttr(e,m)};m.prototype.getBBox=
function(){var m=this.bBox,e=this.padding;return{width:m.width+2*e,height:m.height+2*e,x:m.x-e,y:m.y-e}};m.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2};m.prototype.heightSetter=function(m){this.heightSetting=m};m.prototype.on=function(m,e){var A=this,w=A.text,r=w&&"SPAN"===w.element.tagName?w:void 0;if(r){var u=function(u){("mouseenter"===m||"mouseleave"===m)&&u.relatedTarget instanceof
Element&&(A.element.contains(u.relatedTarget)||r.element.contains(u.relatedTarget))||e.call(A.element,u)};r.on(m,u)}p.prototype.on.call(A,m,u||e);return A};m.prototype.onAdd=function(){var m=this.textStr;this.text.add(this);this.attr({text:B(m)?m:"",x:this.x,y:this.y});this.box&&B(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})};m.prototype.paddingSetter=function(m){B(m)&&m!==this.padding&&(this.padding=m,this.updateTextPadding())};m.prototype.paddingLeftSetter=function(m){B(m)&&
m!==this.paddingLeft&&(this.paddingLeft=m,this.updateTextPadding())};m.prototype.rSetter=function(m,e){this.boxAttr(e,m)};m.prototype.shadow=function(m){m&&!this.renderer.styledMode&&(this.updateBoxSize(),this.box&&this.box.shadow(m));return this};m.prototype.strokeSetter=function(m,e){this.stroke=m;this.boxAttr(e,m)};m.prototype["stroke-widthSetter"]=function(m,e){m&&(this.needsBox=!0);this["stroke-width"]=m;this.boxAttr(e,m)};m.prototype["text-alignSetter"]=function(m){this.textAlign=m};m.prototype.textSetter=
function(m){"undefined"!==typeof m&&this.text.attr({text:m});this.updateBoxSize();this.updateTextPadding()};m.prototype.updateBoxSize=function(){var e=this.text.element.style,A={},p=this.padding,w=this.paddingLeft,r=z(this.widthSetting)&&z(this.heightSetting)&&!this.textAlign||!B(this.text.textStr)?m.emptyBBox:this.text.getBBox();this.width=(this.widthSetting||r.width||0)+2*p+w;this.height=(this.heightSetting||r.height||0)+2*p;this.baselineOffset=p+Math.min(this.renderer.fontMetrics(e&&e.fontSize,
this.text).b,r.height||Infinity);this.needsBox&&(this.box||(e=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),e.addClass(("button"===this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),e.add(this),e=this.getCrispAdjust(),A.x=e,A.y=(this.baseline?-this.baselineOffset:0)+e),A.width=Math.round(this.width),A.height=Math.round(this.height),this.box.attr(D(A,this.deferredAttr)),this.deferredAttr={});this.bBox=r};m.prototype.updateTextPadding=
function(){var m=this.text,e=this.baseline?0:this.baselineOffset,p=this.paddingLeft+this.padding;B(this.widthSetting)&&this.bBox&&("center"===this.textAlign||"right"===this.textAlign)&&(p+={center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width));if(p!==m.x||e!==m.y)m.attr("x",p),m.hasBoxWidthChanged&&(this.bBox=m.getBBox(!0),this.updateBoxSize()),"undefined"!==typeof e&&m.attr("y",e);m.x=p;m.y=e};m.prototype.widthSetter=function(m){this.widthSetting=z(m)?m:void 0};m.prototype.xSetter=
function(m){this.x=m;this.alignFactor&&(m-=this.alignFactor*((this.widthSetting||this.bBox.width)+2*this.padding),this["forceAnimate:x"]=!0);this.xSetting=Math.round(m);this.attr("translateX",this.xSetting)};m.prototype.ySetter=function(m){this.ySetting=this.y=Math.round(m);this.attr("translateY",this.ySetting)};m.emptyBBox={width:0,height:0,x:0,y:0};m.textProps="color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
return m}(p)});O(q,"parts/SVGRenderer.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/SVGElement.js"],q["parts/SVGLabel.js"],q["parts/Utilities.js"]],function(p,e,q,B,D){var z=D.addEvent,J=D.attr,G=D.createElement,m=D.css,H=D.defined,M=D.destroyObjectProperties,A=D.extend,K=D.isArray,w=D.isNumber,r=D.isObject,u=D.isString,C=D.merge,h=D.objectEach,f=D.pick,d=D.pInt,t=D.splat,l=D.uniqueKey,c=e.charts,a=e.deg2rad,x=e.doc,v=e.isFirefox,E=e.isMS,F=e.isWebKit;D=e.noop;var k=e.svg,y=e.SVG_NS,I=e.symbolSizes,
P=e.win,g=function(){function b(b,a,g,c,k,d,l){this.width=this.url=this.style=this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0;this.init(b,a,g,c,k,d,l)}b.prototype.init=function(b,a,g,c,k,d,l){var n=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});l||n.css(this.getStyle(c));c=n.element;b.appendChild(c);J(b,"dir","ltr");-1===b.innerHTML.indexOf("xmlns")&&
J(c,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=c;this.boxWrapper=n;this.alignedObjects=[];this.url=(v||F)&&x.getElementsByTagName("base").length?P.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(x.createTextNode("Created with Highcharts 8.1.2"));this.defs=this.createElement("defs").add();this.allowHTML=d;this.forExport=k;this.styledMode=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=
0;this.setSize(a,g,!1);var L;v&&b.getBoundingClientRect&&(a=function(){m(b,{left:0,top:0});L=b.getBoundingClientRect();m(b,{left:Math.ceil(L.left)-L.left+"px",top:Math.ceil(L.top)-L.top+"px"})},a(),this.unSubPixelFix=z(P,"resize",a))};b.prototype.definition=function(b){function a(b,g){var c;t(b).forEach(function(b){var k=n.createElement(b.tagName),L={};h(b,function(b,a){"tagName"!==a&&"children"!==a&&"textContent"!==a&&(L[a]=b)});k.attr(L);k.add(g||n.defs);b.textContent&&k.element.appendChild(x.createTextNode(b.textContent));
a(b.children||[],k);c=k});return c}var n=this;return a(b)};b.prototype.getStyle=function(b){return this.style=A({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},b)};b.prototype.setStyle=function(b){this.boxWrapper.css(this.getStyle(b))};b.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width};b.prototype.destroy=function(){var b=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();M(this.gradients||{});this.gradients=null;
b&&(this.defs=b.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null};b.prototype.createElement=function(b){var a=new this.Element;a.init(this,b);return a};b.prototype.getRadialAttr=function(b,a){return{cx:b[0]-b[2]/2+a.cx*b[2],cy:b[1]-b[2]/2+a.cy*b[2],r:a.r*b[2]}};b.prototype.truncate=function(b,a,g,c,k,d,l){var n=this,L=b.rotation,N,f=c?1:0,v=(g||c).length,t=v,h=[],y=function(b){a.firstChild&&a.removeChild(a.firstChild);b&&a.appendChild(x.createTextNode(b))},F=function(L,
d){d=d||L;if("undefined"===typeof h[d])if(a.getSubStringLength)try{h[d]=k+a.getSubStringLength(0,c?d+1:d)}catch(ja){""}else n.getSpanWidth&&(y(l(g||c,L)),h[d]=k+n.getSpanWidth(b,a));return h[d]},S;b.rotation=0;var E=F(a.textContent.length);if(S=k+E>d){for(;f<=v;)t=Math.ceil((f+v)/2),c&&(N=l(c,t)),E=F(t,N&&N.length-1),f===v?f=v+1:E>d?v=t-1:f=t;0===v?y(""):g&&v===g.length-1||y(N||l(g||c,t))}c&&c.splice(0,t);b.actualWidth=E;b.rotation=L;return S};b.prototype.buildText=function(b){var a=b.element,n=this,
g=n.forExport,c=f(b.textStr,"").toString(),l=-1!==c.indexOf("<"),v=a.childNodes,t,F=J(a,"x"),E=b.styles,I=b.textWidth,r=E&&E.lineHeight,C=E&&E.textOutline,w=E&&"ellipsis"===E.textOverflow,e=E&&"nowrap"===E.whiteSpace,P=E&&E.fontSize,A,p=v.length;E=I&&!b.added&&this.box;var H=function(b){var g;n.styledMode||(g=/(px|em)$/.test(b&&b.style.fontSize)?b.style.fontSize:P||n.style.fontSize||12);return r?d(r):n.fontMetrics(g,b.getAttribute("style")?b:a).h},K=function(b,a){h(n.escapes,function(n,g){a&&-1!==
a.indexOf(n)||(b=b.toString().replace(new RegExp(n,"g"),g))});return b},G=function(b,a){var n=b.indexOf("<");b=b.substring(n,b.indexOf(">")-n);n=b.indexOf(a+"=");if(-1!==n&&(n=n+a.length+1,a=b.charAt(n),'"'===a||"'"===a))return b=b.substring(n+1),b.substring(0,b.indexOf(a))},q=/<br.*?>/g;var z=[c,w,e,r,C,P,I].join();if(z!==b.textCache){for(b.textCache=z;p--;)a.removeChild(v[p]);l||C||w||I||-1!==c.indexOf(" ")&&(!e||q.test(c))?(E&&E.appendChild(a),l?(c=n.styledMode?c.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,
'<span class="highcharts-emphasized">'):c.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),c=c.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(q)):c=[c],c=c.filter(function(b){return""!==b}),c.forEach(function(c,d){var L=0,l=0;c=c.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");var N=c.split("|||");N.forEach(function(c){if(""!==c||1===N.length){var f={},v=x.createElementNS(n.SVG_NS,
"tspan"),h,S;(h=G(c,"class"))&&J(v,"class",h);if(h=G(c,"style"))h=h.replace(/(;| |^)color([ :])/,"$1fill$2"),J(v,"style",h);if((S=G(c,"href"))&&!g&&-1===S.split(":")[0].toLowerCase().indexOf("javascript")){var E=x.createElementNS(n.SVG_NS,"a");J(E,"href",S);J(v,"class","highcharts-anchor");E.appendChild(v);n.styledMode||m(v,{cursor:"pointer"})}c=K(c.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==c){v.appendChild(x.createTextNode(c));L?f.dx=0:d&&null!==F&&(f.x=F);J(v,f);a.appendChild(E||v);!L&&
A&&(!k&&g&&m(v,{display:"block"}),J(v,"dy",H(v)));if(I){var u=c.replace(/([^\^])-/g,"$1- ").split(" ");f=!e&&(1<N.length||d||1<u.length);E=0;S=H(v);if(w)t=n.truncate(b,v,c,void 0,0,Math.max(0,I-parseInt(P||12,10)),function(b,a){return b.substring(0,a)+"\u2026"});else if(f)for(;u.length;)u.length&&!e&&0<E&&(v=x.createElementNS(y,"tspan"),J(v,{dy:S,x:F}),h&&J(v,"style",h),v.appendChild(x.createTextNode(u.join(" ").replace(/- /g,"-"))),a.appendChild(v)),n.truncate(b,v,null,u,0===E?l:0,I,function(b,a){return u.slice(0,
a).join(" ").replace(/- /g,"-")}),l=b.actualWidth,E++}L++}}});A=A||a.childNodes.length}),w&&t&&b.attr("title",K(b.textStr||"",["&lt;","&gt;"])),E&&E.removeChild(a),u(C)&&b.applyTextOutline&&b.applyTextOutline(C)):a.appendChild(x.createTextNode(K(c)))}};b.prototype.getContrast=function(b){b=p.parse(b).rgba;b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"};b.prototype.button=function(b,a,g,c,k,d,l,f,v,x){var n=this.label(b,a,g,v,void 0,void 0,x,void 0,"button"),L=0,N=this.styledMode;
b=k&&k.style||{};k&&k.style&&delete k.style;n.attr(C({padding:8,r:2},k));if(!N){k=C({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},{style:b},k);var t=k.style;delete k.style;d=C(k,{fill:"#e6e6e6"},d);var h=d.style;delete d.style;l=C(k,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},l);var y=l.style;delete l.style;f=C(k,{style:{color:"#cccccc"}},f);var F=f.style;delete f.style}z(n.element,E?"mouseover":"mouseenter",function(){3!==
L&&n.setState(1)});z(n.element,E?"mouseout":"mouseleave",function(){3!==L&&n.setState(L)});n.setState=function(b){1!==b&&(n.state=L=b);n.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][b||0]);N||n.attr([k,d,l,f][b||0]).css([t,h,y,F][b||0])};N||n.attr(k).css(A({cursor:"default"},t));return n.on("click",function(b){3!==L&&c.call(n,b)})};b.prototype.crispLine=function(b,a,g){void 0===g&&(g="round");var n=b[0],c=b[1];
n[1]===c[1]&&(n[1]=c[1]=Math[g](n[1])-a%2/2);n[2]===c[2]&&(n[2]=c[2]=Math[g](n[2])+a%2/2);return b};b.prototype.path=function(b){var a=this.styledMode?{}:{fill:"none"};K(b)?a.d=b:r(b)&&A(a,b);return this.createElement("path").attr(a)};b.prototype.circle=function(b,a,g){b=r(b)?b:"undefined"===typeof b?{}:{x:b,y:a,r:g};a=this.createElement("circle");a.xSetter=a.ySetter=function(b,a,n){n.setAttribute("c"+a,b)};return a.attr(b)};b.prototype.arc=function(b,a,g,c,k,d){r(b)?(c=b,a=c.y,g=c.r,b=c.x):c={innerR:c,
start:k,end:d};b=this.symbol("arc",b,a,g,g,c);b.r=g;return b};b.prototype.rect=function(b,a,g,c,k,d){k=r(b)?b.r:k;var n=this.createElement("rect");b=r(b)?b:"undefined"===typeof b?{}:{x:b,y:a,width:Math.max(g,0),height:Math.max(c,0)};this.styledMode||("undefined"!==typeof d&&(b.strokeWidth=d,b=n.crisp(b)),b.fill="none");k&&(b.r=k);n.rSetter=function(b,a,g){n.r=b;J(g,{rx:b,ry:b})};n.rGetter=function(){return n.r};return n.attr(b)};b.prototype.setSize=function(b,a,g){var n=this.alignedObjects,c=n.length;
this.width=b;this.height=a;for(this.boxWrapper.animate({width:b,height:a},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:f(g,!0)?void 0:0});c--;)n[c].align()};b.prototype.g=function(b){var a=this.createElement("g");return b?a.attr({"class":"highcharts-"+b}):a};b.prototype.image=function(b,a,g,c,k,d){var n={preserveAspectRatio:"none"},L=function(b,a){b.setAttributeNS?b.setAttributeNS("http://www.w3.org/1999/xlink","href",a):b.setAttribute("hc-svg-href",
a)},l=function(a){L(f.element,b);d.call(f,a)};1<arguments.length&&A(n,{x:a,y:g,width:c,height:k});var f=this.createElement("image").attr(n);d?(L(f.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),n=new P.Image,z(n,"load",l),n.src=b,n.complete&&l({})):L(f.element,b);return f};b.prototype.symbol=function(b,a,g,k,d,l){var n=this,L=/^url\((.*?)\)$/,v=L.test(b),N=!v&&(this.symbols[b]?b:"circle"),t=N&&this.symbols[N],h;if(t){"number"===typeof a&&(h=t.call(this.symbols,
Math.round(a||0),Math.round(g||0),k||0,d||0,l));var y=this.path(h);n.styledMode||y.attr("fill","none");A(y,{symbolName:N,x:a,y:g,width:k,height:d});l&&A(y,l)}else if(v){var F=b.match(L)[1];y=this.image(F);y.imgwidth=f(I[F]&&I[F].width,l&&l.width);y.imgheight=f(I[F]&&I[F].height,l&&l.height);var E=function(){y.attr({width:y.width,height:y.height})};["width","height"].forEach(function(b){y[b+"Setter"]=function(b,a){var n={},g=this["img"+a],c="width"===a?"translateX":"translateY";this[a]=b;H(g)&&(l&&
"within"===l.backgroundSize&&this.width&&this.height&&(g=Math.round(g*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(a,g),this.alignByTranslate||(n[c]=((this[a]||0)-g)/2,this.attr(n)))}});H(a)&&y.attr({x:a,y:g});y.isImg=!0;H(y.imgwidth)&&H(y.imgheight)?E():(y.attr({width:0,height:0}),G("img",{onload:function(){var b=c[n.chartIndex];0===this.width&&(m(this,{position:"absolute",top:"-999em"}),x.body.appendChild(this));I[F]={width:this.width,height:this.height};
y.imgwidth=this.width;y.imgheight=this.height;y.element&&E();this.parentNode&&this.parentNode.removeChild(this);n.imgCount--;if(!n.imgCount&&b&&!b.hasLoaded)b.onload()},src:F}),this.imgCount++)}return y};b.prototype.clipRect=function(b,a,g,c){var n=l()+"-",k=this.createElement("clipPath").attr({id:n}).add(this.defs);b=this.rect(b,a,g,c,0).add(k);b.id=n;b.clipPath=k;b.count=0;return b};b.prototype.text=function(b,a,g,c){var n={};if(c&&(this.allowHTML||!this.forExport))return this.html(b,a,g);n.x=Math.round(a||
0);g&&(n.y=Math.round(g));H(b)&&(n.text=b);b=this.createElement("text").attr(n);c||(b.xSetter=function(b,a,n){var g=n.getElementsByTagName("tspan"),c=n.getAttribute(a),k;for(k=0;k<g.length;k++){var d=g[k];d.getAttribute(a)===c&&d.setAttribute(a,b)}n.setAttribute(a,b)});return b};b.prototype.fontMetrics=function(b,a){b=!this.styledMode&&/px/.test(b)||!P.getComputedStyle?b||a&&a.style&&a.style.fontSize||this.style&&this.style.fontSize:a&&q.prototype.getStyle.call(a,"font-size");b=/px/.test(b)?d(b):
12;a=24>b?b+3:Math.round(1.2*b);return{h:a,b:Math.round(.8*a),f:b}};b.prototype.rotCorr=function(b,g,c){var n=b;g&&c&&(n=Math.max(n*Math.cos(g*a),4));return{x:-b/3*Math.sin(g*a),y:n}};b.prototype.pathToSegments=function(b){for(var a=[],n=[],g={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},c=0;c<b.length;c++)u(n[0])&&w(b[c])&&n.length===g[n[0].toUpperCase()]&&b.splice(c,0,n[0].replace("M","L").replace("m","l")),"string"===typeof b[c]&&(n.length&&a.push(n.slice(0)),n.length=0),n.push(b[c]);a.push(n.slice(0));
return a};b.prototype.label=function(b,a,g,c,k,d,l,f,v){return new B(this,b,a,g,c,k,d,l,f,v)};return b}();g.prototype.Element=q;g.prototype.SVG_NS=y;g.prototype.draw=D;g.prototype.escapes={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};g.prototype.symbols={circle:function(b,a,g,c){return this.arc(b+g/2,a+c/2,g/2,c/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(b,a,g,c){return[["M",b,a],["L",b+g,a],["L",b+g,a+c],["L",b,a+c],["Z"]]},triangle:function(b,a,g,c){return[["M",
b+g/2,a],["L",b+g,a+c],["L",b,a+c],["Z"]]},"triangle-down":function(b,a,g,c){return[["M",b,a],["L",b+g,a],["L",b+g/2,a+c],["Z"]]},diamond:function(b,a,g,c){return[["M",b+g/2,a],["L",b+g,a+c/2],["L",b+g/2,a+c],["L",b,a+c/2],["Z"]]},arc:function(b,a,g,c,k){var n=[];if(k){var d=k.start||0,l=k.end||0,L=k.r||g;g=k.r||c||g;var v=.001>Math.abs(l-d-2*Math.PI);l-=.001;c=k.innerR;v=f(k.open,v);var x=Math.cos(d),N=Math.sin(d),t=Math.cos(l),y=Math.sin(l);d=f(k.longArc,.001>l-d-Math.PI?0:1);n.push(["M",b+L*x,
a+g*N],["A",L,g,0,d,f(k.clockwise,1),b+L*t,a+g*y]);H(c)&&n.push(v?["M",b+c*t,a+c*y]:["L",b+c*t,a+c*y],["A",c,c,0,d,H(k.clockwise)?1-k.clockwise:0,b+c*x,a+c*N]);v||n.push(["Z"])}return n},callout:function(b,a,g,c,k){var n=Math.min(k&&k.r||0,g,c),d=n+6,l=k&&k.anchorX||0;k=k&&k.anchorY||0;var f=[["M",b+n,a],["L",b+g-n,a],["C",b+g,a,b+g,a,b+g,a+n],["L",b+g,a+c-n],["C",b+g,a+c,b+g,a+c,b+g-n,a+c],["L",b+n,a+c],["C",b,a+c,b,a+c,b,a+c-n],["L",b,a+n],["C",b,a,b,a,b+n,a]];l&&l>g?k>a+d&&k<a+c-d?f.splice(3,1,
["L",b+g,k-6],["L",b+g+6,k],["L",b+g,k+6],["L",b+g,a+c-n]):f.splice(3,1,["L",b+g,c/2],["L",l,k],["L",b+g,c/2],["L",b+g,a+c-n]):l&&0>l?k>a+d&&k<a+c-d?f.splice(7,1,["L",b,k+6],["L",b-6,k],["L",b,k-6],["L",b,a+n]):f.splice(7,1,["L",b,c/2],["L",l,k],["L",b,c/2],["L",b,a+n]):k&&k>c&&l>b+d&&l<b+g-d?f.splice(5,1,["L",l+6,a+c],["L",l,a+c+6],["L",l-6,a+c],["L",b+n,a+c]):k&&0>k&&l>b+d&&l<b+g-d&&f.splice(1,1,["L",l-6,a],["L",l,a-6],["L",l+6,a],["L",g-n,a]);return f}};e.SVGRenderer=g;e.Renderer=e.SVGRenderer;
return e.Renderer});O(q,"parts/Html.js",[q["parts/Globals.js"],q["parts/SVGElement.js"],q["parts/SVGRenderer.js"],q["parts/Utilities.js"]],function(p,e,q,B){var D=B.attr,z=B.createElement,J=B.css,G=B.defined,m=B.extend,H=B.pick,M=B.pInt,A=p.isFirefox,K=p.isMS,w=p.isWebKit,r=p.win;m(e.prototype,{htmlCss:function(u){var r="SPAN"===this.element.tagName&&u&&"width"in u,h=H(r&&u.width,void 0);if(r){delete u.width;this.textWidth=h;var f=!0}u&&"ellipsis"===u.textOverflow&&(u.whiteSpace="nowrap",u.overflow=
"hidden");this.styles=m(this.styles,u);J(this.element,u);f&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var u=this.element;return{x:u.offsetLeft,y:u.offsetTop,width:u.offsetWidth,height:u.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var u=this.renderer,r=this.element,h=this.translateX||0,f=this.translateY||0,d=this.x||0,t=this.y||0,l=this.textAlign||"left",c={left:0,center:.5,right:1}[l],a=this.styles,x=a&&a.whiteSpace;J(r,{marginLeft:h,marginTop:f});!u.styledMode&&
this.shadows&&this.shadows.forEach(function(a){J(a,{marginLeft:h+1,marginTop:f+1})});this.inverted&&[].forEach.call(r.childNodes,function(a){u.invertChild(a,r)});if("SPAN"===r.tagName){a=this.rotation;var v=this.textWidth&&M(this.textWidth),E=[a,l,r.innerHTML,this.textWidth,this.textAlign].join(),F;(F=v!==this.oldTextWidth)&&!(F=v>this.oldTextWidth)&&((F=this.textPxLength)||(J(r,{width:"",whiteSpace:x||"nowrap"}),F=r.offsetWidth),F=F>v);F&&(/[ \-]/.test(r.textContent||r.innerText)||"ellipsis"===r.style.textOverflow)?
(J(r,{width:v+"px",display:"block",whiteSpace:x||"normal"}),this.oldTextWidth=v,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;E!==this.cTT&&(x=u.fontMetrics(r.style.fontSize,r).b,!G(a)||a===(this.oldRotation||0)&&l===this.oldAlign||this.setSpanRotation(a,c,x),this.getSpanCorrection(!G(a)&&this.textPxLength||r.offsetWidth,x,c,a,l));J(r,{left:d+(this.xCorr||0)+"px",top:t+(this.yCorr||0)+"px"});this.cTT=E;this.oldRotation=a;this.oldAlign=l}}else this.alignOnAdd=!0},setSpanRotation:function(u,
r,h){var f={},d=this.renderer.getTransformKey();f[d]=f.transform="rotate("+u+"deg)";f[d+(A?"Origin":"-origin")]=f.transformOrigin=100*r+"% "+h+"px";J(this.element,f)},getSpanCorrection:function(u,r,h){this.xCorr=-u*h;this.yCorr=-r}});m(q.prototype,{getTransformKey:function(){return K&&!/Edge/.test(r.navigator.userAgent)?"-ms-transform":w?"-webkit-transform":A?"MozTransform":r.opera?"-o-transform":""},html:function(u,r,h){var f=this.createElement("span"),d=f.element,t=f.renderer,l=t.isSVG,c=function(a,
c){["opacity","visibility"].forEach(function(d){a[d+"Setter"]=function(l,f,k){var v=a.div?a.div.style:c;e.prototype[d+"Setter"].call(this,l,f,k);v&&(v[f]=l)}});a.addedSetters=!0};f.textSetter=function(a){a!==d.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;d.innerHTML=H(a,"");f.doTransform=!0};l&&c(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,c){"align"===c&&(c="textAlign");f[c]=a;f.doTransform=!0};f.afterSetters=function(){this.doTransform&&
(this.htmlUpdateTransform(),this.doTransform=!1)};f.attr({text:u,x:Math.round(r),y:Math.round(h)}).css({position:"absolute"});t.styledMode||f.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});d.style.whiteSpace="nowrap";f.css=f.htmlCss;l&&(f.add=function(a){var l=t.box.parentNode,v=[];if(this.parentGroup=a){var h=a.div;if(!h){for(;a;)v.push(a),a=a.parentGroup;v.reverse().forEach(function(a){function k(c,g){a[g]=c;"translateX"===g?x.left=c+"px":x.top=c+"px";a.doTransform=!0}var d=
D(a.element,"class");h=a.div=a.div||z("div",d?{className:d}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},h||l);var x=h.style;m(a,{classSetter:function(a){return function(g){this.element.setAttribute("class",g);a.className=g}}(h),on:function(){v[0].div&&f.on.apply({element:v[0].div},arguments);return a},translateXSetter:k,translateYSetter:k});a.addedSetters||c(a)})}}else h=l;h.appendChild(d);
f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}})});O(q,"parts/Tick.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.clamp,B=e.correctFloat,D=e.defined,z=e.destroyObjectProperties,J=e.extend,G=e.fireEvent,m=e.isNumber,H=e.merge,M=e.objectEach,A=e.pick,K=p.deg2rad;e=function(){function w(r,u,C,h,f){this.isNewLabel=this.isNew=!0;this.axis=r;this.pos=u;this.type=C||"";this.parameters=f||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=
this.parameters.options;G(this,"init");C||h||this.addLabel()}w.prototype.addLabel=function(){var r=this,u=r.axis,C=u.options,h=u.chart,f=u.categories,d=u.logarithmic,t=u.names,l=r.pos,c=A(r.options&&r.options.labels,C.labels),a=u.tickPositions,x=l===a[0],v=l===a[a.length-1];t=this.parameters.category||(f?A(f[l],t[l],l):l);var E=r.label;f=(!c.step||1===c.step)&&1===u.tickInterval;a=a.info;var F,k;if(u.dateTime&&a){var y=h.time.resolveDTLFormat(C.dateTimeLabelFormats[!C.grid&&a.higherRanks[l]||a.unitName]);
var I=y.main}r.isFirst=x;r.isLast=v;r.formatCtx={axis:u,chart:h,isFirst:x,isLast:v,dateTimeLabelFormat:I,tickPositionInfo:a,value:d?B(d.lin2log(t)):t,pos:l};C=u.labelFormatter.call(r.formatCtx,this.formatCtx);if(k=y&&y.list)r.shortenLabel=function(){for(F=0;F<k.length;F++)if(E.attr({text:u.labelFormatter.call(J(r.formatCtx,{dateTimeLabelFormat:k[F]}))}),E.getBBox().width<u.getSlotWidth(r)-2*A(c.padding,5))return;E.attr({text:""})};f&&u._addedPlotLB&&u.isXAxis&&r.moveLabel(C,c);D(E)||r.movedLabel?
E&&E.textStr!==C&&!f&&(!E.textWidth||c.style&&c.style.width||E.styles.width||E.css({width:null}),E.attr({text:C}),E.textPxLength=E.getBBox().width):(r.label=E=r.createLabel({x:0,y:0},C,c),r.rotation=0)};w.prototype.createLabel=function(r,u,C){var h=this.axis,f=h.chart;if(r=D(u)&&C.enabled?f.renderer.text(u,r.x,r.y,C.useHTML).add(h.labelGroup):null)f.styledMode||r.css(H(C.style)),r.textPxLength=r.getBBox().width;return r};w.prototype.destroy=function(){z(this,this.axis)};w.prototype.getPosition=function(r,
u,C,h){var f=this.axis,d=f.chart,t=h&&d.oldChartHeight||d.chartHeight;r={x:r?B(f.translate(u+C,null,null,h)+f.transB):f.left+f.offset+(f.opposite?(h&&d.oldChartWidth||d.chartWidth)-f.right-f.left:0),y:r?t-f.bottom+f.offset-(f.opposite?f.height:0):B(t-f.translate(u+C,null,null,h)-f.transB)};r.y=q(r.y,-1E5,1E5);G(this,"afterGetPosition",{pos:r});return r};w.prototype.getLabelPosition=function(r,u,C,h,f,d,t,l){var c=this.axis,a=c.transA,x=c.isLinked&&c.linkedParent?c.linkedParent.reversed:c.reversed,
v=c.staggerLines,E=c.tickRotCorr||{x:0,y:0},F=f.y,k=h||c.reserveSpaceDefault?0:-c.labelOffset*("center"===c.labelAlign?.5:1),y={};D(F)||(F=0===c.side?C.rotation?-8:-C.getBBox().height:2===c.side?E.y+8:Math.cos(C.rotation*K)*(E.y-C.getBBox(!1,0).height/2));r=r+f.x+k+E.x-(d&&h?d*a*(x?-1:1):0);u=u+F-(d&&!h?d*a*(x?1:-1):0);v&&(C=t/(l||1)%v,c.opposite&&(C=v-C-1),u+=c.labelOffset/v*C);y.x=r;y.y=Math.round(u);G(this,"afterGetLabelPosition",{pos:y,tickmarkOffset:d,index:t});return y};w.prototype.getLabelSize=
function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};w.prototype.getMarkPath=function(r,u,C,h,f,d){return d.crispLine([["M",r,u],["L",r+(f?0:-C),u+(f?C:0)]],h)};w.prototype.handleOverflow=function(r){var u=this.axis,C=u.options.labels,h=r.x,f=u.chart.chartWidth,d=u.chart.spacing,t=A(u.labelLeft,Math.min(u.pos,d[3]));d=A(u.labelRight,Math.max(u.isRadial?0:u.pos+u.len,f-d[1]));var l=this.label,c=this.rotation,a={left:0,center:.5,right:1}[u.labelAlign||l.attr("align")],
x=l.getBBox().width,v=u.getSlotWidth(this),E=v,F=1,k,y={};if(c||"justify"!==A(C.overflow,"justify"))0>c&&h-a*x<t?k=Math.round(h/Math.cos(c*K)-t):0<c&&h+a*x>d&&(k=Math.round((f-h)/Math.cos(c*K)));else if(f=h+(1-a)*x,h-a*x<t?E=r.x+E*(1-a)-t:f>d&&(E=d-r.x+E*a,F=-1),E=Math.min(v,E),E<v&&"center"===u.labelAlign&&(r.x+=F*(v-E-a*(v-Math.min(x,E)))),x>E||u.autoRotation&&(l.styles||{}).width)k=E;k&&(this.shortenLabel?this.shortenLabel():(y.width=Math.floor(k)+"px",(C.style||{}).textOverflow||(y.textOverflow=
"ellipsis"),l.css(y)))};w.prototype.moveLabel=function(r,u){var C=this,h=C.label,f=!1,d=C.axis,t=d.reversed,l=d.chart.inverted;h&&h.textStr===r?(C.movedLabel=h,f=!0,delete C.label):M(d.ticks,function(a){f||a.isNew||a===C||!a.label||a.label.textStr!==r||(C.movedLabel=a.label,f=!0,a.labelPos=C.movedLabel.xy,delete a.label)});if(!f&&(C.labelPos||h)){var c=C.labelPos||h.xy;h=l?c.x:t?0:d.width+d.left;d=l?t?d.width+d.left:0:c.y;C.movedLabel=C.createLabel({x:h,y:d},r,u);C.movedLabel&&C.movedLabel.attr({opacity:0})}};
w.prototype.render=function(r,u,C){var h=this.axis,f=h.horiz,d=this.pos,t=A(this.tickmarkOffset,h.tickmarkOffset);d=this.getPosition(f,d,t,u);t=d.x;var l=d.y;h=f&&t===h.pos+h.len||!f&&l===h.pos?-1:1;C=A(C,1);this.isActive=!0;this.renderGridLine(u,C,h);this.renderMark(d,C,h);this.renderLabel(d,u,C,r);this.isNew=!1;G(this,"afterRender")};w.prototype.renderGridLine=function(r,u,C){var h=this.axis,f=h.options,d=this.gridLine,t={},l=this.pos,c=this.type,a=A(this.tickmarkOffset,h.tickmarkOffset),x=h.chart.renderer,
v=c?c+"Grid":"grid",E=f[v+"LineWidth"],F=f[v+"LineColor"];f=f[v+"LineDashStyle"];d||(h.chart.styledMode||(t.stroke=F,t["stroke-width"]=E,f&&(t.dashstyle=f)),c||(t.zIndex=1),r&&(u=0),this.gridLine=d=x.path().attr(t).addClass("highcharts-"+(c?c+"-":"")+"grid-line").add(h.gridGroup));if(d&&(C=h.getPlotLinePath({value:l+a,lineWidth:d.strokeWidth()*C,force:"pass",old:r})))d[r||this.isNew?"attr":"animate"]({d:C,opacity:u})};w.prototype.renderMark=function(r,u,C){var h=this.axis,f=h.options,d=h.chart.renderer,
t=this.type,l=t?t+"Tick":"tick",c=h.tickSize(l),a=this.mark,x=!a,v=r.x;r=r.y;var E=A(f[l+"Width"],!t&&h.isXAxis?1:0);f=f[l+"Color"];c&&(h.opposite&&(c[0]=-c[0]),x&&(this.mark=a=d.path().addClass("highcharts-"+(t?t+"-":"")+"tick").add(h.axisGroup),h.chart.styledMode||a.attr({stroke:f,"stroke-width":E})),a[x?"attr":"animate"]({d:this.getMarkPath(v,r,c[0],a.strokeWidth()*C,h.horiz,d),opacity:u}))};w.prototype.renderLabel=function(r,u,C,h){var f=this.axis,d=f.horiz,t=f.options,l=this.label,c=t.labels,
a=c.step;f=A(this.tickmarkOffset,f.tickmarkOffset);var x=!0,v=r.x;r=r.y;l&&m(v)&&(l.xy=r=this.getLabelPosition(v,r,l,d,c,f,h,a),this.isFirst&&!this.isLast&&!A(t.showFirstLabel,1)||this.isLast&&!this.isFirst&&!A(t.showLastLabel,1)?x=!1:!d||c.step||c.rotation||u||0===C||this.handleOverflow(r),a&&h%a&&(x=!1),x&&m(r.y)?(r.opacity=C,l[this.isNewLabel?"attr":"animate"](r),this.isNewLabel=!1):(l.attr("y",-9999),this.isNewLabel=!0))};w.prototype.replaceMovedLabel=function(){var r=this.label,u=this.axis,C=
u.reversed,h=this.axis.chart.inverted;if(r&&!this.isNew){var f=h?r.xy.x:C?u.left:u.width+u.left;C=h?C?u.width+u.top:u.top:r.xy.y;r.animate({x:f,y:C,opacity:0},void 0,r.destroy);delete this.label}u.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return w}();p.Tick=e;return p.Tick});O(q,"parts/Time.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.defined,B=e.error,D=e.extend,z=e.isObject,J=e.merge,G=e.objectEach,m=e.pad,H=e.pick,M=e.splat,A=e.timeUnits,K=p.win;
e=function(){function w(r){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=K.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(r)}w.prototype.get=function(r,u){if(this.variableTimezone||this.timezoneOffset){var C=u.getTime(),h=C-this.getTimezoneOffset(u);u.setTime(h);r=u["getUTC"+r]();u.setTime(C);return r}return this.useUTC?u["getUTC"+r]():u["get"+r]()};w.prototype.set=function(r,u,C){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===r||"Seconds"===
r||"Minutes"===r)return u["setUTC"+r](C);var h=this.getTimezoneOffset(u);h=u.getTime()-h;u.setTime(h);u["setUTC"+r](C);r=this.getTimezoneOffset(u);h=u.getTime()+r;return u.setTime(h)}return this.useUTC?u["setUTC"+r](C):u["set"+r](C)};w.prototype.update=function(r){var u=H(r&&r.useUTC,!0);this.options=r=J(!0,this.options||{},r);this.Date=r.Date||K.Date||Date;this.timezoneOffset=(this.useUTC=u)&&r.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=!(u&&!r.getTimezoneOffset&&
!r.timezone)};w.prototype.makeTime=function(r,u,C,h,f,d){if(this.useUTC){var t=this.Date.UTC.apply(0,arguments);var l=this.getTimezoneOffset(t);t+=l;var c=this.getTimezoneOffset(t);l!==c?t+=c-l:l-36E5!==this.getTimezoneOffset(t-36E5)||p.isSafari||(t-=36E5)}else t=(new this.Date(r,u,H(C,1),H(h,0),H(f,0),H(d,0))).getTime();return t};w.prototype.timezoneOffsetFunction=function(){var r=this,u=this.options,C=K.moment;if(!this.useUTC)return function(h){return 6E4*(new Date(h.toString())).getTimezoneOffset()};
if(u.timezone){if(C)return function(h){return 6E4*-C.tz(h,u.timezone).utcOffset()};B(25)}return this.useUTC&&u.getTimezoneOffset?function(h){return 6E4*u.getTimezoneOffset(h.valueOf())}:function(){return 6E4*(r.timezoneOffset||0)}};w.prototype.dateFormat=function(r,u,C){var h;if(!q(u)||isNaN(u))return(null===(h=p.defaultOptions.lang)||void 0===h?void 0:h.invalidDate)||"";r=H(r,"%Y-%m-%d %H:%M:%S");var f=this;h=new this.Date(u);var d=this.get("Hours",h),t=this.get("Day",h),l=this.get("Date",h),c=this.get("Month",
h),a=this.get("FullYear",h),x=p.defaultOptions.lang,v=null===x||void 0===x?void 0:x.weekdays,E=null===x||void 0===x?void 0:x.shortWeekdays;h=D({a:E?E[t]:v[t].substr(0,3),A:v[t],d:m(l),e:m(l,2," "),w:t,b:x.shortMonths[c],B:x.months[c],m:m(c+1),o:c+1,y:a.toString().substr(2,2),Y:a,H:m(d),k:d,I:m(d%12||12),l:d%12||12,M:m(this.get("Minutes",h)),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:m(h.getSeconds()),L:m(Math.floor(u%1E3),3)},p.dateFormats);G(h,function(a,c){for(;-1!==r.indexOf("%"+c);)r=r.replace("%"+c,
"function"===typeof a?a.call(f,u):a)});return C?r.substr(0,1).toUpperCase()+r.substr(1):r};w.prototype.resolveDTLFormat=function(r){return z(r,!0)?r:(r=M(r),{main:r[0],from:r[1],to:r[2]})};w.prototype.getTimeTicks=function(r,u,C,h){var f=this,d=[],t={};var l=new f.Date(u);var c=r.unitRange,a=r.count||1,x;h=H(h,1);if(q(u)){f.set("Milliseconds",l,c>=A.second?0:a*Math.floor(f.get("Milliseconds",l)/a));c>=A.second&&f.set("Seconds",l,c>=A.minute?0:a*Math.floor(f.get("Seconds",l)/a));c>=A.minute&&f.set("Minutes",
l,c>=A.hour?0:a*Math.floor(f.get("Minutes",l)/a));c>=A.hour&&f.set("Hours",l,c>=A.day?0:a*Math.floor(f.get("Hours",l)/a));c>=A.day&&f.set("Date",l,c>=A.month?1:Math.max(1,a*Math.floor(f.get("Date",l)/a)));if(c>=A.month){f.set("Month",l,c>=A.year?0:a*Math.floor(f.get("Month",l)/a));var v=f.get("FullYear",l)}c>=A.year&&f.set("FullYear",l,v-v%a);c===A.week&&(v=f.get("Day",l),f.set("Date",l,f.get("Date",l)-v+h+(v<h?-7:0)));v=f.get("FullYear",l);h=f.get("Month",l);var E=f.get("Date",l),F=f.get("Hours",
l);u=l.getTime();f.variableTimezone&&(x=C-u>4*A.month||f.getTimezoneOffset(u)!==f.getTimezoneOffset(C));u=l.getTime();for(l=1;u<C;)d.push(u),u=c===A.year?f.makeTime(v+l*a,0):c===A.month?f.makeTime(v,h+l*a):!x||c!==A.day&&c!==A.week?x&&c===A.hour&&1<a?f.makeTime(v,h,E,F+l*a):u+c*a:f.makeTime(v,h,E+l*a*(c===A.day?1:7)),l++;d.push(u);c<=A.hour&&1E4>d.length&&d.forEach(function(a){0===a%18E5&&"000000000"===f.dateFormat("%H%M%S%L",a)&&(t[a]="day")})}d.info=D(r,{higherRanks:t,totalRange:c*a});return d};
return w}();p.Time=e;return p.Time});O(q,"parts/Options.js",[q["parts/Globals.js"],q["parts/Time.js"],q["parts/Color.js"],q["parts/Utilities.js"]],function(p,e,q,B){q=q.parse;B=B.merge;p.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",
borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",
backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:p.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:p.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
backgroundColor:q("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};"";p.time=new e(B(p.defaultOptions.global,p.defaultOptions.time));p.dateFormat=function(e,q,B){return p.time.dateFormat(e,q,B)};return{dateFormat:p.dateFormat,
defaultOptions:p.defaultOptions,time:p.time}});O(q,"parts/Axis.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Tick.js"],q["parts/Utilities.js"],q["parts/Options.js"]],function(p,e,q,B,D){var z=B.addEvent,J=B.animObject,G=B.arrayMax,m=B.arrayMin,H=B.clamp,M=B.correctFloat,A=B.defined,K=B.destroyObjectProperties,w=B.error,r=B.extend,u=B.fireEvent,C=B.format,h=B.getMagnitude,f=B.isArray,d=B.isFunction,t=B.isNumber,l=B.isString,c=B.merge,a=B.normalizeTickInterval,x=B.objectEach,v=B.pick,E=B.relativeLength,
F=B.removeEvent,k=B.splat,y=B.syncTimeout,I=D.defaultOptions,P=e.deg2rad;B=function(){function g(b,a){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=this.overlap=
this.options=this.oldMin=this.oldMax=this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.coll=this.closestPointRange=this.chart=this.categories=this.bottom=this.alternateBands=void 0;this.init(b,a)}g.prototype.init=function(b,a){var n=a.isX,g=this;g.chart=b;g.horiz=b.inverted&&!g.isZAxis?!n:n;g.isXAxis=n;g.coll=
g.coll||(n?"xAxis":"yAxis");u(this,"init",{userOptions:a});g.opposite=a.opposite;g.side=a.side||(g.horiz?g.opposite?0:2:g.opposite?1:3);g.setOptions(a);var c=this.options,l=c.type;g.labelFormatter=c.labels.formatter||g.defaultLabelFormatter;g.userOptions=a;g.minPixelPadding=0;g.reversed=c.reversed;g.visible=!1!==c.visible;g.zoomEnabled=!1!==c.zoomEnabled;g.hasNames="category"===l||!0===c.categories;g.categories=c.categories||g.hasNames;g.names||(g.names=[],g.names.keys={});g.plotLinesAndBandsGroups=
{};g.positiveValuesOnly=!(!g.logarithmic||c.allowNegativeLog);g.isLinked=A(c.linkedTo);g.ticks={};g.labelEdge=[];g.minorTicks={};g.plotLinesAndBands=[];g.alternateBands={};g.len=0;g.minRange=g.userMinRange=c.minRange||c.maxZoom;g.range=c.range;g.offset=c.offset||0;g.max=null;g.min=null;g.crosshair=v(c.crosshair,k(b.options.tooltip.crosshairs)[n?0:1],!1);a=g.options.events;-1===b.axes.indexOf(g)&&(n?b.axes.splice(b.xAxis.length,0,g):b.axes.push(g),b[g.coll].push(g));g.series=g.series||[];b.inverted&&
!g.isZAxis&&n&&"undefined"===typeof g.reversed&&(g.reversed=!0);g.labelRotation=g.options.labels.rotation;x(a,function(b,a){d(b)&&z(g,a,b)});u(this,"afterInit")};g.prototype.setOptions=function(b){this.options=c(g.defaultOptions,"yAxis"===this.coll&&g.defaultYAxisOptions,[g.defaultTopAxisOptions,g.defaultRightAxisOptions,g.defaultBottomAxisOptions,g.defaultLeftAxisOptions][this.side],c(I[this.coll],b));u(this,"afterSetOptions",{userOptions:b})};g.prototype.defaultLabelFormatter=function(){var b=this.axis,
a=t(this.value)?this.value:NaN,g=b.chart.time,c=b.categories,k=this.dateTimeLabelFormat,d=I.lang,l=d.numericSymbols;d=d.numericSymbolMagnitude||1E3;var f=l&&l.length,v=b.options.labels.format;b=b.logarithmic?Math.abs(a):b.tickInterval;var x=this.chart,h=x.numberFormatter;if(v)var y=C(v,this,x);else if(c)y=""+this.value;else if(k)y=g.dateFormat(k,a);else if(f&&1E3<=b)for(;f--&&"undefined"===typeof y;)g=Math.pow(d,f+1),b>=g&&0===10*a%g&&null!==l[f]&&0!==a&&(y=h(a/g,-1)+l[f]);"undefined"===typeof y&&
(y=1E4<=Math.abs(a)?h(a,-1):h(a,-1,void 0,""));return y};g.prototype.getSeriesExtremes=function(){var b=this,a=b.chart,g;u(this,"getSeriesExtremes",null,function(){b.hasVisibleSeries=!1;b.dataMin=b.dataMax=b.threshold=null;b.softThreshold=!b.isXAxis;b.stacking&&b.stacking.buildStacks();b.series.forEach(function(n){if(n.visible||!a.options.chart.ignoreHiddenSeries){var c=n.options,k=c.threshold;b.hasVisibleSeries=!0;b.positiveValuesOnly&&0>=k&&(k=null);if(b.isXAxis){if(c=n.xData,c.length){g=n.getXExtremes(c);
var d=g.min;var l=g.max;t(d)||d instanceof Date||(c=c.filter(t),g=n.getXExtremes(c),d=g.min,l=g.max);c.length&&(b.dataMin=Math.min(v(b.dataMin,d),d),b.dataMax=Math.max(v(b.dataMax,l),l))}}else if(n=n.applyExtremes(),t(n.dataMin)&&(d=n.dataMin,b.dataMin=Math.min(v(b.dataMin,d),d)),t(n.dataMax)&&(l=n.dataMax,b.dataMax=Math.max(v(b.dataMax,l),l)),A(k)&&(b.threshold=k),!c.softThreshold||b.positiveValuesOnly)b.softThreshold=!1}})});u(this,"afterGetSeriesExtremes")};g.prototype.translate=function(b,a,g,
c,k,d){var n=this.linkedParent||this,l=1,f=0,v=c?n.oldTransA:n.transA;c=c?n.oldMin:n.min;var L=n.minPixelPadding;k=(n.isOrdinal||n.brokenAxis&&n.brokenAxis.hasBreaks||n.logarithmic&&k)&&n.lin2val;v||(v=n.transA);g&&(l*=-1,f=n.len);n.reversed&&(l*=-1,f-=l*(n.sector||n.len));a?(b=(b*l+f-L)/v+c,k&&(b=n.lin2val(b))):(k&&(b=n.val2lin(b)),b=t(c)?l*(b-c)*v+f+l*L+(t(d)?v*d:0):void 0);return b};g.prototype.toPixels=function(b,a){return this.translate(b,!1,!this.horiz,null,!0)+(a?0:this.pos)};g.prototype.toValue=
function(b,a){return this.translate(b-(a?0:this.pos),!0,!this.horiz,null,!0)};g.prototype.getPlotLinePath=function(b){function a(b,a,n){if("pass"!==y&&b<a||b>n)y?b=H(b,a,n):w=!0;return b}var g=this,c=g.chart,k=g.left,d=g.top,l=b.old,f=b.value,x=b.translatedValue,h=b.lineWidth,y=b.force,F,E,I,r,C=l&&c.oldChartHeight||c.chartHeight,m=l&&c.oldChartWidth||c.chartWidth,w,e=g.transB;b={value:f,lineWidth:h,old:l,force:y,acrossPanes:b.acrossPanes,translatedValue:x};u(this,"getPlotLinePath",b,function(b){x=
v(x,g.translate(f,null,null,l));x=H(x,-1E5,1E5);F=I=Math.round(x+e);E=r=Math.round(C-x-e);t(x)?g.horiz?(E=d,r=C-g.bottom,F=I=a(F,k,k+g.width)):(F=k,I=m-g.right,E=r=a(E,d,d+g.height)):(w=!0,y=!1);b.path=w&&!y?null:c.renderer.crispLine([["M",F,E],["L",I,r]],h||1)});return b.path};g.prototype.getLinearTickPositions=function(b,a,g){var n=M(Math.floor(a/b)*b);g=M(Math.ceil(g/b)*b);var c=[],k;M(n+b)===n&&(k=20);if(this.single)return[a];for(a=n;a<=g;){c.push(a);a=M(a+b,k);if(a===d)break;var d=a}return c};
g.prototype.getMinorTickInterval=function(){var b=this.options;return!0===b.minorTicks?v(b.minorTickInterval,"auto"):!1===b.minorTicks?null:b.minorTickInterval};g.prototype.getMinorTickPositions=function(){var b=this.options,a=this.tickPositions,g=this.minorTickInterval,c=[],k=this.pointRangePadding||0,d=this.min-k;k=this.max+k;var l=k-d;if(l&&l/g<this.len/3){var f=this.logarithmic;if(f)this.paddedTicks.forEach(function(b,a,n){a&&c.push.apply(c,f.getLogTickPositions(g,n[a-1],n[a],!0))});else if(this.dateTime&&
"auto"===this.getMinorTickInterval())c=c.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(g),d,k,b.startOfWeek));else for(b=d+(a[0]-d)%g;b<=k&&b!==c[0];b+=g)c.push(b)}0!==c.length&&this.trimTicks(c);return c};g.prototype.adjustForMinRange=function(){var b=this.options,a=this.min,g=this.max,c=this.logarithmic,k,d,l,f,x;this.isXAxis&&"undefined"===typeof this.minRange&&!c&&(A(b.min)||A(b.max)?this.minRange=null:(this.series.forEach(function(b){f=b.xData;for(d=x=b.xIncrement?1:f.length-
1;0<d;d--)if(l=f[d]-f[d-1],"undefined"===typeof k||l<k)k=l}),this.minRange=Math.min(5*k,this.dataMax-this.dataMin)));if(g-a<this.minRange){var t=this.dataMax-this.dataMin>=this.minRange;var y=this.minRange;var h=(y-g+a)/2;h=[a-h,v(b.min,a-h)];t&&(h[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin);a=G(h);g=[a+y,v(b.max,a+y)];t&&(g[2]=c?c.log2lin(this.dataMax):this.dataMax);g=m(g);g-a<y&&(h[0]=g-y,h[1]=v(b.min,g-y),a=G(h))}this.min=a;this.max=g};g.prototype.getClosest=function(){var b;
this.categories?b=1:this.series.forEach(function(a){var n=a.closestPointRange,g=a.visible||!a.chart.options.chart.ignoreHiddenSeries;!a.noSharedTooltip&&A(n)&&g&&(b=A(b)?Math.min(b,n):n)});return b};g.prototype.nameToX=function(b){var a=f(this.categories),g=a?this.categories:this.names,c=b.options.x;b.series.requireSorting=!1;A(c)||(c=!1===this.options.uniqueNames?b.series.autoIncrement():a?g.indexOf(b.name):v(g.keys[b.name],-1));if(-1===c){if(!a)var k=g.length}else k=c;"undefined"!==typeof k&&(this.names[k]=
b.name,this.names.keys[b.name]=k);return k};g.prototype.updateNames=function(){var b=this,a=this.names;0<a.length&&(Object.keys(a.keys).forEach(function(b){delete a.keys[b]}),a.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)b.max=Math.max(b.max,a.xData.length-1),a.processData(),a.generatePoints();a.data.forEach(function(n,g){if(n&&n.options&&"undefined"!==typeof n.name){var c=b.nameToX(n);"undefined"!==typeof c&&c!==n.x&&
(n.x=c,a.xData[g]=c)}})}))};g.prototype.setAxisTranslation=function(b){var a=this,g=a.max-a.min,c=a.axisPointRange||0,k=0,d=0,f=a.linkedParent,x=!!a.categories,t=a.transA,h=a.isXAxis;if(h||x||c){var y=a.getClosest();f?(k=f.minPointOffset,d=f.pointRangePadding):a.series.forEach(function(b){var n=x?1:h?v(b.options.pointRange,y,0):a.axisPointRange||0,g=b.options.pointPlacement;c=Math.max(c,n);if(!a.single||x)b=b.is("xrange")?!h:h,k=Math.max(k,b&&l(g)?0:n/2),d=Math.max(d,b&&"on"===g?0:n)});f=a.ordinal&&
a.ordinal.slope&&y?a.ordinal.slope/y:1;a.minPointOffset=k*=f;a.pointRangePadding=d*=f;a.pointRange=Math.min(c,a.single&&x?1:g);h&&(a.closestPointRange=y)}b&&(a.oldTransA=t);a.translationSlope=a.transA=t=a.staticScale||a.len/(g+d||1);a.transB=a.horiz?a.left:a.bottom;a.minPixelPadding=t*k;u(this,"afterSetAxisTranslation")};g.prototype.minFromRange=function(){return this.max-this.range};g.prototype.setTickInterval=function(b){var n=this,g=n.chart,c=n.logarithmic,k=n.options,d=n.isXAxis,l=n.isLinked,
f=k.maxPadding,x=k.minPadding,y=k.tickInterval,F=k.tickPixelInterval,E=n.categories,I=t(n.threshold)?n.threshold:null,r=n.softThreshold;n.dateTime||E||l||this.getTickAmount();var C=v(n.userMin,k.min);var m=v(n.userMax,k.max);if(l){n.linkedParent=g[n.coll][k.linkedTo];var e=n.linkedParent.getExtremes();n.min=v(e.min,e.dataMin);n.max=v(e.max,e.dataMax);k.type!==n.linkedParent.options.type&&w(11,1,g)}else{if(!r&&A(I))if(n.dataMin>=I)e=I,x=0;else if(n.dataMax<=I){var P=I;f=0}n.min=v(C,e,n.dataMin);n.max=
v(m,P,n.dataMax)}c&&(n.positiveValuesOnly&&!b&&0>=Math.min(n.min,v(n.dataMin,n.min))&&w(10,1,g),n.min=M(c.log2lin(n.min),16),n.max=M(c.log2lin(n.max),16));n.range&&A(n.max)&&(n.userMin=n.min=C=Math.max(n.dataMin,n.minFromRange()),n.userMax=m=n.max,n.range=null);u(n,"foundExtremes");n.beforePadding&&n.beforePadding();n.adjustForMinRange();!(E||n.axisPointRange||n.stacking&&n.stacking.usePercentage||l)&&A(n.min)&&A(n.max)&&(g=n.max-n.min)&&(!A(C)&&x&&(n.min-=g*x),!A(m)&&f&&(n.max+=g*f));t(n.userMin)||
(t(k.softMin)&&k.softMin<n.min&&(n.min=C=k.softMin),t(k.floor)&&(n.min=Math.max(n.min,k.floor)));t(n.userMax)||(t(k.softMax)&&k.softMax>n.max&&(n.max=m=k.softMax),t(k.ceiling)&&(n.max=Math.min(n.max,k.ceiling)));r&&A(n.dataMin)&&(I=I||0,!A(C)&&n.min<I&&n.dataMin>=I?n.min=n.options.minRange?Math.min(I,n.max-n.minRange):I:!A(m)&&n.max>I&&n.dataMax<=I&&(n.max=n.options.minRange?Math.max(I,n.min+n.minRange):I));n.tickInterval=n.min===n.max||"undefined"===typeof n.min||"undefined"===typeof n.max?1:l&&
!y&&F===n.linkedParent.options.tickPixelInterval?y=n.linkedParent.tickInterval:v(y,this.tickAmount?(n.max-n.min)/Math.max(this.tickAmount-1,1):void 0,E?1:(n.max-n.min)*F/Math.max(n.len,F));d&&!b&&n.series.forEach(function(b){b.processData(n.min!==n.oldMin||n.max!==n.oldMax)});n.setAxisTranslation(!0);u(this,"initialAxisTranslation");n.pointRange&&!y&&(n.tickInterval=Math.max(n.pointRange,n.tickInterval));b=v(k.minTickInterval,n.dateTime&&!n.series.some(function(b){return b.noSharedTooltip})?n.closestPointRange:
0);!y&&n.tickInterval<b&&(n.tickInterval=b);n.dateTime||n.logarithmic||y||(n.tickInterval=a(n.tickInterval,void 0,h(n.tickInterval),v(k.allowDecimals,.5>n.tickInterval||void 0!==this.tickAmount),!!this.tickAmount));this.tickAmount||(n.tickInterval=n.unsquish());this.setTickPositions()};g.prototype.setTickPositions=function(){var b=this.options,a=b.tickPositions;var g=this.getMinorTickInterval();var c=b.tickPositioner,k=this.hasVerticalPanning(),d="colorAxis"===this.coll,l=(d||!k)&&b.startOnTick;k=
(d||!k)&&b.endOnTick;this.tickmarkOffset=this.categories&&"between"===b.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===g&&this.tickInterval?this.tickInterval/5:g;this.single=this.min===this.max&&A(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==b.allowDecimals);this.tickPositions=g=a&&a.slice();!g&&(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))?g=this.dateTime?this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,
b.units),this.min,this.max,b.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0):this.logarithmic?this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max):(g=[this.min,this.max],w(19,!1,this.chart)),g.length>this.len&&(g=[g[0],g.pop()],g[0]===g[1]&&(g.length=1)),this.tickPositions=g,c&&(c=c.apply(this,[this.min,this.max])))&&(this.tickPositions=g=c);this.paddedTicks=g.slice(0);this.trimTicks(g,
l,k);this.isLinked||(this.single&&2>g.length&&!this.categories&&!this.series.some(function(b){return b.is("heatmap")&&"between"===b.options.pointPlacement})&&(this.min-=.5,this.max+=.5),a||c||this.adjustTickAmount());u(this,"afterSetTickPositions")};g.prototype.trimTicks=function(b,a,g){var n=b[0],c=b[b.length-1],k=!this.isOrdinal&&this.minPointOffset||0;u(this,"trimTicks");if(!this.isLinked){if(a&&-Infinity!==n)this.min=n;else for(;this.min-k>b[0];)b.shift();if(g)this.max=c;else for(;this.max+k<
b[b.length-1];)b.pop();0===b.length&&A(n)&&!this.options.tickPositions&&b.push((c+n)/2)}};g.prototype.alignToOthers=function(){var b={},a,g=this.options;!1===this.chart.options.chart.alignTicks||!1===g.alignTicks||!1===g.startOnTick||!1===g.endOnTick||this.logarithmic||this.chart[this.coll].forEach(function(n){var g=n.options;g=[n.horiz?g.left:g.top,g.width,g.height,g.pane].join();n.series.length&&(b[g]?a=!0:b[g]=1)});return a};g.prototype.getTickAmount=function(){var b=this.options,a=b.tickAmount,
g=b.tickPixelInterval;!A(b.tickInterval)&&!a&&this.len<g&&!this.isRadial&&!this.logarithmic&&b.startOnTick&&b.endOnTick&&(a=2);!a&&this.alignToOthers()&&(a=Math.ceil(this.len/g)+1);4>a&&(this.finalTickAmt=a,a=5);this.tickAmount=a};g.prototype.adjustTickAmount=function(){var b=this.options,a=this.tickInterval,g=this.tickPositions,c=this.tickAmount,k=this.finalTickAmt,d=g&&g.length,l=v(this.threshold,this.softThreshold?0:null),f;if(this.hasData()){if(d<c){for(f=this.min;g.length<c;)g.length%2||f===
l?g.push(M(g[g.length-1]+a)):g.unshift(M(g[0]-a));this.transA*=(d-1)/(c-1);this.min=b.startOnTick?g[0]:Math.min(this.min,g[0]);this.max=b.endOnTick?g[g.length-1]:Math.max(this.max,g[g.length-1])}else d>c&&(this.tickInterval*=2,this.setTickPositions());if(A(k)){for(a=b=g.length;a--;)(3===k&&1===a%2||2>=k&&0<a&&a<b-1)&&g.splice(a,1);this.finalTickAmt=void 0}}};g.prototype.setScale=function(){var b,a=!1,g=!1;this.series.forEach(function(b){var n;a=a||b.isDirtyData||b.isDirty;g=g||(null===(n=b.xAxis)||
void 0===n?void 0:n.isDirty)||!1});this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();(b=this.len!==this.oldAxisLength)||a||g||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.stacking&&this.stacking.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||
this.max!==this.oldMax)):this.stacking&&this.stacking.cleanStacks();a&&this.panningState&&(this.panningState.isDirty=!0);u(this,"afterSetScale")};g.prototype.setExtremes=function(b,a,g,c,k){var n=this,d=n.chart;g=v(g,!0);n.series.forEach(function(b){delete b.kdTree});k=r(k,{min:b,max:a});u(n,"setExtremes",k,function(){n.userMin=b;n.userMax=a;n.eventArgs=k;g&&d.redraw(c)})};g.prototype.zoom=function(b,a){var g=this,n=this.dataMin,c=this.dataMax,k=this.options,d=Math.min(n,v(k.min,n)),l=Math.max(c,
v(k.max,c));b={newMin:b,newMax:a};u(this,"zoom",b,function(b){var a=b.newMin,k=b.newMax;if(a!==g.min||k!==g.max)g.allowZoomOutside||(A(n)&&(a<d&&(a=d),a>l&&(a=l)),A(c)&&(k<d&&(k=d),k>l&&(k=l))),g.displayBtn="undefined"!==typeof a||"undefined"!==typeof k,g.setExtremes(a,k,!1,void 0,{trigger:"zoom"});b.zoomed=!0});return b.zoomed};g.prototype.setAxisSize=function(){var b=this.chart,a=this.options,g=a.offsets||[0,0,0,0],c=this.horiz,k=this.width=Math.round(E(v(a.width,b.plotWidth-g[3]+g[1]),b.plotWidth)),
d=this.height=Math.round(E(v(a.height,b.plotHeight-g[0]+g[2]),b.plotHeight)),l=this.top=Math.round(E(v(a.top,b.plotTop+g[0]),b.plotHeight,b.plotTop));a=this.left=Math.round(E(v(a.left,b.plotLeft+g[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-d-l;this.right=b.chartWidth-k-a;this.len=Math.max(c?k:d,0);this.pos=c?a:l};g.prototype.getExtremes=function(){var b=this.logarithmic;return{min:b?M(b.lin2log(this.min)):this.min,max:b?M(b.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,
userMin:this.userMin,userMax:this.userMax}};g.prototype.getThreshold=function(b){var a=this.logarithmic,g=a?a.lin2log(this.min):this.min;a=a?a.lin2log(this.max):this.max;null===b||-Infinity===b?b=g:Infinity===b?b=a:g>b?b=g:a<b&&(b=a);return this.translate(b,0,1,0,1)};g.prototype.autoLabelAlign=function(b){var a=(v(b,0)-90*this.side+720)%360;b={align:"center"};u(this,"autoLabelAlign",b,function(b){15<a&&165>a?b.align="right":195<a&&345>a&&(b.align="left")});return b.align};g.prototype.tickSize=function(b){var a=
this.options,g=a["tick"===b?"tickLength":"minorTickLength"],c=v(a["tick"===b?"tickWidth":"minorTickWidth"],"tick"===b&&this.isXAxis&&!this.categories?1:0);if(c&&g){"inside"===a[b+"Position"]&&(g=-g);var k=[g,c]}b={tickSize:k};u(this,"afterTickSize",b);return b.tickSize};g.prototype.labelMetrics=function(){var b=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[b]&&this.ticks[b].label)};g.prototype.unsquish=
function(){var b=this.options.labels,a=this.horiz,g=this.tickInterval,c=g,k=this.len/(((this.categories?1:0)+this.max-this.min)/g),d,l=b.rotation,f=this.labelMetrics(),x,y=Number.MAX_VALUE,h,t=this.max-this.min,F=function(b){var a=b/(k||1);a=1<a?Math.ceil(a):1;a*g>t&&Infinity!==b&&Infinity!==k&&t&&(a=Math.ceil(t/g));return M(a*g)};a?(h=!b.staggerLines&&!b.step&&(A(l)?[l]:k<v(b.autoRotationLimit,80)&&b.autoRotation))&&h.forEach(function(b){if(b===l||b&&-90<=b&&90>=b){x=F(Math.abs(f.h/Math.sin(P*b)));
var a=x+Math.abs(b/360);a<y&&(y=a,d=b,c=x)}}):b.step||(c=F(f.h));this.autoRotation=h;this.labelRotation=v(d,l);return c};g.prototype.getSlotWidth=function(b){var a,g=this.chart,c=this.horiz,k=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),l=g.margin[3];if(b&&t(b.slotWidth))return b.slotWidth;if(c&&k&&2>(k.step||0))return k.rotation?0:(this.staggerLines||1)*this.len/d;if(!c){b=null===(a=null===k||void 0===k?void 0:k.style)||void 0===a?void 0:a.width;if(void 0!==b)return parseInt(b,
10);if(l)return l-g.spacing[3]}return.33*g.chartWidth};g.prototype.renderUnsquish=function(){var b=this.chart,a=b.renderer,g=this.tickPositions,c=this.ticks,k=this.options.labels,d=k&&k.style||{},f=this.horiz,v=this.getSlotWidth(),x=Math.max(1,Math.round(v-2*(k.padding||5))),y={},h=this.labelMetrics(),t=k.style&&k.style.textOverflow,F=0;l(k.rotation)||(y.rotation=k.rotation||0);g.forEach(function(b){b=c[b];b.movedLabel&&b.replaceMovedLabel();b&&b.label&&b.label.textPxLength>F&&(F=b.label.textPxLength)});
this.maxLabelLength=F;if(this.autoRotation)F>x&&F>h.h?y.rotation=this.labelRotation:this.labelRotation=0;else if(v){var E=x;if(!t){var I="clip";for(x=g.length;!f&&x--;){var u=g[x];if(u=c[u].label)u.styles&&"ellipsis"===u.styles.textOverflow?u.css({textOverflow:"clip"}):u.textPxLength>v&&u.css({width:v+"px"}),u.getBBox().height>this.len/g.length-(h.h-h.f)&&(u.specificTextOverflow="ellipsis")}}}y.rotation&&(E=F>.5*b.chartHeight?.33*b.chartHeight:F,t||(I="ellipsis"));if(this.labelAlign=k.align||this.autoLabelAlign(this.labelRotation))y.align=
this.labelAlign;g.forEach(function(b){var a=(b=c[b])&&b.label,g=d.width,n={};a&&(a.attr(y),b.shortenLabel?b.shortenLabel():E&&!g&&"nowrap"!==d.whiteSpace&&(E<a.textPxLength||"SPAN"===a.element.tagName)?(n.width=E+"px",t||(n.textOverflow=a.specificTextOverflow||I),a.css(n)):a.styles&&a.styles.width&&!n.width&&!g&&a.css({width:null}),delete a.specificTextOverflow,b.rotation=y.rotation)},this);this.tickRotCorr=a.rotCorr(h.b,this.labelRotation||0,0!==this.side)};g.prototype.hasData=function(){return this.series.some(function(b){return b.hasData()})||
this.options.showEmpty&&A(this.min)&&A(this.max)};g.prototype.addTitle=function(b){var a=this.chart.renderer,g=this.horiz,k=this.opposite,d=this.options.title,l,f=this.chart.styledMode;this.axisTitle||((l=d.textAlign)||(l=(g?{low:"left",middle:"center",high:"right"}:{low:k?"right":"left",middle:"center",high:k?"left":"right"})[d.align]),this.axisTitle=a.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:l}).addClass("highcharts-axis-title"),f||this.axisTitle.css(c(d.style)),this.axisTitle.add(this.axisGroup),
this.axisTitle.isNew=!0);f||d.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"});this.axisTitle[b?"show":"hide"](b)};g.prototype.generateTick=function(b){var a=this.ticks;a[b]?a[b].addLabel():a[b]=new q(this,b)};g.prototype.getOffset=function(){var b=this,a=b.chart,g=a.renderer,c=b.options,k=b.tickPositions,d=b.ticks,l=b.horiz,f=b.side,y=a.inverted&&!b.isZAxis?[1,0,3,2][f]:f,h,t=0,F=0,E=c.title,I=c.labels,r=0,C=a.axisOffset;a=a.clipOffset;var m=[-1,1,1,-1][f],w=c.className,e=b.axisParent;
var P=b.hasData();b.showAxis=h=P||v(c.showEmpty,!0);b.staggerLines=b.horiz&&I.staggerLines;b.axisGroup||(b.gridGroup=g.g("grid").attr({zIndex:c.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(w||"")).add(e),b.axisGroup=g.g("axis").attr({zIndex:c.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(w||"")).add(e),b.labelGroup=g.g("axis-labels").attr({zIndex:I.zIndex||7}).addClass("highcharts-"+b.coll.toLowerCase()+"-labels "+(w||"")).add(e));P||b.isLinked?(k.forEach(function(a,
g){b.generateTick(a,g)}),b.renderUnsquish(),b.reserveSpaceDefault=0===f||2===f||{1:"left",3:"right"}[f]===b.labelAlign,v(I.reserveSpace,"center"===b.labelAlign?!0:null,b.reserveSpaceDefault)&&k.forEach(function(b){r=Math.max(d[b].getLabelSize(),r)}),b.staggerLines&&(r*=b.staggerLines),b.labelOffset=r*(b.opposite?-1:1)):x(d,function(b,a){b.destroy();delete d[a]});if(E&&E.text&&!1!==E.enabled&&(b.addTitle(h),h&&!1!==E.reserveSpace)){b.titleOffset=t=b.axisTitle.getBBox()[l?"height":"width"];var p=E.offset;
F=A(p)?0:v(E.margin,l?5:10)}b.renderLine();b.offset=m*v(c.offset,C[f]?C[f]+(c.margin||0):0);b.tickRotCorr=b.tickRotCorr||{x:0,y:0};g=0===f?-b.labelMetrics().h:2===f?b.tickRotCorr.y:0;F=Math.abs(r)+F;r&&(F=F-g+m*(l?v(I.y,b.tickRotCorr.y+8*m):I.x));b.axisTitleMargin=v(p,F);b.getMaxLabelDimensions&&(b.maxLabelDimensions=b.getMaxLabelDimensions(d,k));l=this.tickSize("tick");C[f]=Math.max(C[f],b.axisTitleMargin+t+m*b.offset,F,k&&k.length&&l?l[0]+m*b.offset:0);c=c.offset?0:2*Math.floor(b.axisLine.strokeWidth()/
2);a[y]=Math.max(a[y],c);u(this,"afterGetOffset")};g.prototype.getLinePath=function(b){var a=this.chart,g=this.opposite,c=this.offset,k=this.horiz,d=this.left+(g?this.width:0)+c;c=a.chartHeight-this.bottom-(g?this.height:0)+c;g&&(b*=-1);return a.renderer.crispLine([["M",k?this.left:d,k?c:this.top],["L",k?a.chartWidth-this.right:d,k?c:a.chartHeight-this.bottom]],b)};g.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))};g.prototype.getTitlePosition=function(){var b=this.horiz,a=this.left,g=this.top,c=this.len,k=this.options.title,d=b?a:g,l=this.opposite,f=this.offset,v=k.x||0,x=k.y||0,y=this.axisTitle,h=this.chart.renderer.fontMetrics(k.style&&k.style.fontSize,y);y=Math.max(y.getBBox(null,0).height-h.h-1,0);c={low:d+(b?0:c),middle:d+c/2,high:d+(b?c:0)}[k.align];a=(b?g+this.height:a)+(b?1:-1)*
(l?-1:1)*this.axisTitleMargin+[-y,y,h.f,-y][this.side];b={x:b?c+v:a+(l?this.width:0)+f+v,y:b?a+x-(l?this.height:0)+f:c+x};u(this,"afterGetTitlePosition",{titlePosition:b});return b};g.prototype.renderMinorTick=function(b){var a=this.chart.hasRendered&&t(this.oldMin),g=this.minorTicks;g[b]||(g[b]=new q(this,b,"minor"));a&&g[b].isNew&&g[b].render(null,!0);g[b].render(null,!1,1)};g.prototype.renderTick=function(b,a){var g=this.isLinked,c=this.ticks,n=this.chart.hasRendered&&t(this.oldMin);if(!g||b>=
this.min&&b<=this.max)c[b]||(c[b]=new q(this,b)),n&&c[b].isNew&&c[b].render(a,!0,-1),c[b].render(a)};g.prototype.render=function(){var b=this,a=b.chart,g=b.logarithmic,c=b.options,k=b.isLinked,d=b.tickPositions,l=b.axisTitle,f=b.ticks,v=b.minorTicks,h=b.alternateBands,F=c.stackLabels,E=c.alternateGridColor,I=b.tickmarkOffset,r=b.axisLine,C=b.showAxis,m=J(a.renderer.globalAnimation),w,P;b.labelEdge.length=0;b.overlap=!1;[f,v,h].forEach(function(b){x(b,function(b){b.isActive=!1})});if(b.hasData()||
k)b.minorTickInterval&&!b.categories&&b.getMinorTickPositions().forEach(function(a){b.renderMinorTick(a)}),d.length&&(d.forEach(function(a,g){b.renderTick(a,g)}),I&&(0===b.min||b.single)&&(f[-1]||(f[-1]=new q(b,-1,null,!0)),f[-1].render(-1))),E&&d.forEach(function(c,n){P="undefined"!==typeof d[n+1]?d[n+1]+I:b.max-I;0===n%2&&c<b.max&&P<=b.max+(a.polar?-I:I)&&(h[c]||(h[c]=new e.PlotLineOrBand(b)),w=c+I,h[c].options={from:g?g.lin2log(w):w,to:g?g.lin2log(P):P,color:E,className:"highcharts-alternate-grid"},
h[c].render(),h[c].isActive=!0)}),b._addedPlotLB||((c.plotLines||[]).concat(c.plotBands||[]).forEach(function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);[f,v,h].forEach(function(b){var g,c=[],n=m.duration;x(b,function(b,a){b.isActive||(b.render(a,!1,0),b.isActive=!1,c.push(a))});y(function(){for(g=c.length;g--;)b[c[g]]&&!b[c[g]].isActive&&(b[c[g]].destroy(),delete b[c[g]])},b!==h&&a.hasRendered&&n?n:0)});r&&(r[r.isPlaced?"animate":"attr"]({d:this.getLinePath(r.strokeWidth())}),r.isPlaced=!0,r[C?
"show":"hide"](C));l&&C&&(c=b.getTitlePosition(),t(c.y)?(l[l.isNew?"attr":"animate"](c),l.isNew=!1):(l.attr("y",-9999),l.isNew=!0));F&&F.enabled&&b.stacking&&b.stacking.renderStackTotals();b.isDirty=!1;u(this,"afterRender")};g.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(b){b.render()}));this.series.forEach(function(b){b.isDirty=!0})};g.prototype.getKeepProps=function(){return this.keepProps||g.keepProps};g.prototype.destroy=function(b){var a=this,
g=a.plotLinesAndBands,c;u(this,"destroy",{keepEvents:b});b||F(a);[a.ticks,a.minorTicks,a.alternateBands].forEach(function(a){K(a)});if(g)for(b=g.length;b--;)g[b].destroy();"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b){a[b]&&(a[b]=a[b].destroy())});for(c in a.plotLinesAndBandsGroups)a.plotLinesAndBandsGroups[c]=a.plotLinesAndBandsGroups[c].destroy();x(a,function(b,g){-1===a.getKeepProps().indexOf(g)&&delete a[g]})};g.prototype.drawCrosshair=function(a,
g){var b=this.crosshair,c=v(b.snap,!0),n,k=this.cross,d=this.chart;u(this,"drawCrosshair",{e:a,point:g});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(A(g)||!c)){c?A(g)&&(n=v("colorAxis"!==this.coll?g.crosshairPos:null,this.isXAxis?g.plotX:this.len-g.plotY)):n=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);if(A(n)){var l={value:g&&(this.isXAxis?g.x:v(g.stackY,g.y)),translatedValue:n};d.polar&&r(l,{isCrosshair:!0,chartX:a&&a.chartX,chartY:a&&a.chartY,point:g});l=this.getPlotLinePath(l)||
null}if(!A(l)){this.hideCrosshair();return}c=this.categories&&!this.isRadial;k||(this.cross=k=d.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+b.className).attr({zIndex:v(b.zIndex,2)}).add(),d.styledMode||(k.attr({stroke:b.color||(c?p.parse("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":v(b.width,1)}).css({"pointer-events":"none"}),b.dashStyle&&k.attr({dashstyle:b.dashStyle})));k.show().attr({d:l});c&&!b.width&&k.attr({"stroke-width":this.transA});
this.cross.e=a}else this.hideCrosshair();u(this,"afterDrawCrosshair",{e:a,point:g})};g.prototype.hideCrosshair=function(){this.cross&&this.cross.hide();u(this,"afterHideCrosshair")};g.prototype.hasVerticalPanning=function(){var a,g;return/y/.test((null===(g=null===(a=this.chart.options.chart)||void 0===a?void 0:a.panning)||void 0===g?void 0:g.type)||"")};g.defaultOptions={dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},
hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",
minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"};g.defaultYAxisOptions={endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var a=this.axis.chart.numberFormatter;return a(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},
gridLineWidth:1,lineWidth:0};g.defaultLeftAxisOptions={labels:{x:-15},title:{rotation:270}};g.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}};g.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};g.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};g.keepProps="extKey hcEvents names series userMax userMin".split(" ");return g}();e.Axis=B;return e.Axis});O(q,"parts/DateTimeAxis.js",[q["parts/Axis.js"],q["parts/Utilities.js"]],
function(p,e){var q=e.addEvent,B=e.getMagnitude,D=e.normalizeTickInterval,z=e.timeUnits,J=function(){function e(m){this.axis=m}e.prototype.normalizeTimeTickInterval=function(m,e){var p=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=p[p.length-1];var A=z[e[0]],q=e[1],w;for(w=0;w<p.length&&!(e=p[w],A=z[e[0]],q=e[1],p[w+1]&&m<=(A*q[q.length-1]+z[p[w+
1][0]])/2);w++);A===z.year&&m<5*A&&(q=[1,2,5]);m=D(m/A,q,"year"===e[0]?Math.max(B(m/A),1):1);return{unitRange:A,count:m,unitName:e[0]}};return e}();e=function(){function e(){}e.compose=function(m){m.keepProps.push("dateTime");m.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};q(m,"init",function(m){"datetime"!==m.userOptions.type?this.dateTime=void 0:this.dateTime||(this.dateTime=new J(this))})};e.AdditionsClass=J;return e}();e.compose(p);return e});
O(q,"parts/LogarithmicAxis.js",[q["parts/Axis.js"],q["parts/Utilities.js"]],function(p,e){var q=e.addEvent,B=e.getMagnitude,D=e.normalizeTickInterval,z=e.pick,J=function(){function e(m){this.axis=m}e.prototype.getLogTickPositions=function(m,e,p,A){var q=this.axis,w=q.len,r=q.options,u=[];A||(this.minorAutoInterval=void 0);if(.5<=m)m=Math.round(m),u=q.getLinearTickPositions(m,e,p);else if(.08<=m){r=Math.floor(e);var C,h;for(w=.3<m?[1,2,4]:.15<m?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];r<p+1&&!h;r++){var f=
w.length;for(C=0;C<f&&!h;C++){var d=this.log2lin(this.lin2log(r)*w[C]);d>e&&(!A||t<=p)&&"undefined"!==typeof t&&u.push(t);t>p&&(h=!0);var t=d}}}else e=this.lin2log(e),p=this.lin2log(p),m=A?q.getMinorTickInterval():r.tickInterval,m=z("auto"===m?null:m,this.minorAutoInterval,r.tickPixelInterval/(A?5:1)*(p-e)/((A?w/q.tickPositions.length:w)||1)),m=D(m,void 0,B(m)),u=q.getLinearTickPositions(m,e,p).map(this.log2lin),A||(this.minorAutoInterval=m/5);A||(q.tickInterval=m);return u};e.prototype.lin2log=function(m){return Math.pow(10,
m)};e.prototype.log2lin=function(m){return Math.log(m)/Math.LN10};return e}();e=function(){function e(){}e.compose=function(m){m.keepProps.push("logarithmic");var e=m.prototype,p=J.prototype;e.log2lin=p.log2lin;e.lin2log=p.lin2log;q(m,"init",function(m){var e=this.logarithmic;"logarithmic"!==m.userOptions.type?this.logarithmic=void 0:(e||(e=this.logarithmic=new J(this)),this.log2lin!==e.log2lin&&(e.log2lin=this.log2lin.bind(this)),this.lin2log!==e.lin2log&&(e.lin2log=this.lin2log.bind(this)))});q(m,
"afterInit",function(){var m=this.logarithmic;m&&(this.lin2val=function(e){return m.lin2log(e)},this.val2lin=function(e){return m.log2lin(e)})})};return e}();e.compose(p);return e});O(q,"parts/PlotLineOrBand.js",[q["parts/Axis.js"],q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e,q){var B=q.arrayMax,D=q.arrayMin,z=q.defined,J=q.destroyObjectProperties,G=q.erase,m=q.extend,H=q.merge,M=q.objectEach,A=q.pick,K=function(){function m(r,u){this.axis=r;u&&(this.options=u,this.id=u.id)}m.prototype.render=
function(){e.fireEvent(this,"render");var r=this,u=r.axis,m=u.horiz,h=u.logarithmic,f=r.options,d=f.label,t=r.label,l=f.to,c=f.from,a=f.value,x=z(c)&&z(l),v=z(a),E=r.svgElem,F=!E,k=[],y=f.color,I=A(f.zIndex,0),w=f.events;k={"class":"highcharts-plot-"+(x?"band ":"line ")+(f.className||"")};var g={},b=u.chart.renderer,n=x?"bands":"lines";h&&(c=h.log2lin(c),l=h.log2lin(l),a=h.log2lin(a));u.chart.styledMode||(v?(k.stroke=y||"#999999",k["stroke-width"]=A(f.width,1),f.dashStyle&&(k.dashstyle=f.dashStyle)):
x&&(k.fill=y||"#e6ebf5",f.borderWidth&&(k.stroke=f.borderColor,k["stroke-width"]=f.borderWidth)));g.zIndex=I;n+="-"+I;(h=u.plotLinesAndBandsGroups[n])||(u.plotLinesAndBandsGroups[n]=h=b.g("plot-"+n).attr(g).add());F&&(r.svgElem=E=b.path().attr(k).add(h));if(v)k=u.getPlotLinePath({value:a,lineWidth:E.strokeWidth(),acrossPanes:f.acrossPanes});else if(x)k=u.getPlotBandPath(c,l,f);else return;!r.eventsAdded&&w&&(M(w,function(a,b){E.on(b,function(a){w[b].apply(r,[a])})}),r.eventsAdded=!0);(F||!E.d)&&k&&
k.length?E.attr({d:k}):E&&(k?(E.show(!0),E.animate({d:k})):E.d&&(E.hide(),t&&(r.label=t=t.destroy())));d&&(z(d.text)||z(d.formatter))&&k&&k.length&&0<u.width&&0<u.height&&!k.isFlat?(d=H({align:m&&x&&"center",x:m?!x&&4:10,verticalAlign:!m&&x&&"middle",y:m?x?16:10:x?6:-4,rotation:m&&!x&&90},d),this.renderLabel(d,k,x,I)):t&&t.hide();return r};m.prototype.renderLabel=function(r,u,m,h){var f=this.label,d=this.axis.chart.renderer;f||(f={align:r.textAlign||r.align,rotation:r.rotation,"class":"highcharts-plot-"+
(m?"band":"line")+"-label "+(r.className||"")},f.zIndex=h,h=this.getLabelText(r),this.label=f=d.text(h,0,0,r.useHTML).attr(f).add(),this.axis.chart.styledMode||f.css(r.style));d=u.xBounds||[u[0][1],u[1][1],m?u[2][1]:u[0][1]];u=u.yBounds||[u[0][2],u[1][2],m?u[2][2]:u[0][2]];m=D(d);h=D(u);f.align(r,!1,{x:m,y:h,width:B(d)-m,height:B(u)-h});f.show(!0)};m.prototype.getLabelText=function(r){return z(r.formatter)?r.formatter.call(this):r.text};m.prototype.destroy=function(){G(this.axis.plotLinesAndBands,
this);delete this.axis;J(this)};return m}();m(p.prototype,{getPlotBandPath:function(m,r){var u=this.getPlotLinePath({value:r,force:!0,acrossPanes:this.options.acrossPanes}),e=this.getPlotLinePath({value:m,force:!0,acrossPanes:this.options.acrossPanes}),h=[],f=this.horiz,d=1;m=m<this.min&&r<this.min||m>this.max&&r>this.max;if(e&&u){if(m){var t=e.toString()===u.toString();d=0}for(m=0;m<e.length;m+=2){r=e[m];var l=e[m+1],c=u[m],a=u[m+1];"M"!==r[0]&&"L"!==r[0]||"M"!==l[0]&&"L"!==l[0]||"M"!==c[0]&&"L"!==
c[0]||"M"!==a[0]&&"L"!==a[0]||(f&&c[1]===r[1]?(c[1]+=d,a[1]+=d):f||c[2]!==r[2]||(c[2]+=d,a[2]+=d),h.push(["M",r[1],r[2]],["L",l[1],l[2]],["L",a[1],a[2]],["L",c[1],c[2]],["Z"]));h.isFlat=t}}return h},addPlotBand:function(m){return this.addPlotBandOrLine(m,"plotBands")},addPlotLine:function(m){return this.addPlotBandOrLine(m,"plotLines")},addPlotBandOrLine:function(m,r){var u=(new K(this,m)).render(),e=this.userOptions;if(u){if(r){var h=e[r]||[];h.push(m);e[r]=h}this.plotLinesAndBands.push(u);this._addedPlotLB=
!0}return u},removePlotBandOrLine:function(m){for(var r=this.plotLinesAndBands,u=this.options,e=this.userOptions,h=r.length;h--;)r[h].id===m&&r[h].destroy();[u.plotLines||[],e.plotLines||[],u.plotBands||[],e.plotBands||[]].forEach(function(f){for(h=f.length;h--;)(f[h]||{}).id===m&&G(f,f[h])})},removePlotBand:function(m){this.removePlotBandOrLine(m)},removePlotLine:function(m){this.removePlotBandOrLine(m)}});e.PlotLineOrBand=K;return e.PlotLineOrBand});O(q,"parts/Tooltip.js",[q["parts/Globals.js"],
q["parts/Utilities.js"]],function(p,e){var q=p.doc,B=e.clamp,D=e.css,z=e.defined,J=e.discardElement,G=e.extend,m=e.fireEvent,H=e.format,M=e.isNumber,A=e.isString,K=e.merge,w=e.pick,r=e.splat,u=e.syncTimeout,C=e.timeUnits;"";var h=function(){function f(d,f){this.container=void 0;this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=d;this.init(d,f)}f.prototype.applyFilter=function(){var d=this.chart;d.renderer.definition({tagName:"filter",
id:"drop-shadow-"+d.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});d.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+d.index+"{filter:url(#drop-shadow-"+d.index+")}"})};f.prototype.bodyFormatter=function(d){return d.map(function(d){var l=
d.series.tooltipOptions;return(l[(d.point.formatPrefix||"point")+"Formatter"]||d.point.tooltipFormatter).call(d.point,l[(d.point.formatPrefix||"point")+"Format"]||"")})};f.prototype.cleanSplit=function(d){this.chart.series.forEach(function(f){var l=f&&f.tt;l&&(!l.isActive||d?f.tt=l.destroy():l.isActive=!1)})};f.prototype.defaultFormatter=function(d){var f=this.points||r(this);var l=[d.tooltipFooterHeaderFormatter(f[0])];l=l.concat(d.bodyFormatter(f));l.push(d.tooltipFooterHeaderFormatter(f[0],!0));
return l};f.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),J(this.container));e.clearTimeout(this.hideTimer);e.clearTimeout(this.tooltipTimeout)};f.prototype.getAnchor=function(d,f){var l=this.chart,c=l.pointer,a=l.inverted,x=l.plotTop,v=l.plotLeft,h=0,t=0,k,y;d=r(d);this.followPointer&&f?("undefined"===typeof f.chartX&&(f=c.normalize(f)),
d=[f.chartX-v,f.chartY-x]):d[0].tooltipPos?d=d[0].tooltipPos:(d.forEach(function(c){k=c.series.yAxis;y=c.series.xAxis;h+=c.plotX+(!a&&y?y.left-v:0);t+=(c.plotLow?(c.plotLow+c.plotHigh)/2:c.plotY)+(!a&&k?k.top-x:0)}),h/=d.length,t/=d.length,d=[a?l.plotWidth-t:h,this.shared&&!a&&1<d.length&&f?f.chartY-x:a?l.plotHeight-h:t]);return d.map(Math.round)};f.prototype.getDateFormat=function(d,f,l,c){var a=this.chart.time,x=a.dateFormat("%m-%d %H:%M:%S.%L",f),v={millisecond:15,second:12,minute:9,hour:6,day:3},
h="millisecond";for(t in C){if(d===C.week&&+a.dateFormat("%w",f)===l&&"00:00:00.000"===x.substr(6)){var t="week";break}if(C[t]>d){t=h;break}if(v[t]&&x.substr(v[t])!=="01-01 00:00:00.000".substr(v[t]))break;"week"!==t&&(h=t)}if(t)var k=a.resolveDTLFormat(c[t]).main;return k};f.prototype.getLabel=function(){var d,f,l=this,c=this.chart.renderer,a=this.chart.styledMode,x=this.options,v="tooltip"+(z(x.className)?" "+x.className:""),h=(null===(d=x.style)||void 0===d?void 0:d.pointerEvents)||(!this.followPointer&&
x.stickOnContact?"auto":"none"),F;d=function(){l.inContact=!0};var k=function(){var a=l.chart.hoverSeries;l.inContact=!1;if(a&&a.onMouseOut)a.onMouseOut()};if(!this.label){this.outside&&(this.container=F=p.doc.createElement("div"),F.className="highcharts-tooltip-container",D(F,{position:"absolute",top:"1px",pointerEvents:h,zIndex:3}),p.doc.body.appendChild(F),this.renderer=c=new p.Renderer(F,0,0,null===(f=this.chart.options.chart)||void 0===f?void 0:f.style,void 0,void 0,c.styledMode));this.split?
this.label=c.g(v):(this.label=c.label("",0,0,x.shape||"callout",null,null,x.useHTML,null,v).attr({padding:x.padding,r:x.borderRadius}),a||this.label.attr({fill:x.backgroundColor,"stroke-width":x.borderWidth}).css(x.style).css({pointerEvents:h}).shadow(x.shadow));a&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(l.outside&&!l.split){var y=this.label,I=y.xSetter,u=y.ySetter;y.xSetter=function(a){I.call(y,l.distance);F.style.left=a+"px"};y.ySetter=function(a){u.call(y,
l.distance);F.style.top=a+"px"}}this.label.on("mouseenter",d).on("mouseleave",k).attr({zIndex:8}).add()}return this.label};f.prototype.getPosition=function(d,f,l){var c=this.chart,a=this.distance,x={},v=c.inverted&&l.h||0,h,t=this.outside,k=t?q.documentElement.clientWidth-2*a:c.chartWidth,y=t?Math.max(q.body.scrollHeight,q.documentElement.scrollHeight,q.body.offsetHeight,q.documentElement.offsetHeight,q.documentElement.clientHeight):c.chartHeight,I=c.pointer.getChartPosition(),u=c.containerScaling,
g=function(a){return u?a*u.scaleX:a},b=function(a){return u?a*u.scaleY:a},n=function(n){var v="x"===n;return[n,v?k:y,v?d:f].concat(t?[v?g(d):b(f),v?I.left-a+g(l.plotX+c.plotLeft):I.top-a+b(l.plotY+c.plotTop),0,v?k:y]:[v?d:f,v?l.plotX+c.plotLeft:l.plotY+c.plotTop,v?c.plotLeft:c.plotTop,v?c.plotLeft+c.plotWidth:c.plotTop+c.plotHeight])},L=n("y"),r=n("x"),m=!this.followPointer&&w(l.ttBelow,!c.inverted===!!l.negative),e=function(c,n,k,d,l,f,h){var y="y"===c?b(a):g(a),t=(k-d)/2,F=d<l-a,E=l+a+d<n,I=l-y-
k+t;l=l+y-t;if(m&&E)x[c]=l;else if(!m&&F)x[c]=I;else if(F)x[c]=Math.min(h-d,0>I-v?I:I-v);else if(E)x[c]=Math.max(f,l+v+k>n?l:l+v);else return!1},C=function(b,g,c,n,k){var d;k<a||k>g-a?d=!1:x[b]=k<c/2?1:k>g-n/2?g-n-2:k-c/2;return d},p=function(a){var b=L;L=r;r=b;h=a},A=function(){!1!==e.apply(0,L)?!1!==C.apply(0,r)||h||(p(!0),A()):h?x.x=x.y=0:(p(!0),A())};(c.inverted||1<this.len)&&p();A();return x};f.prototype.getXDateFormat=function(d,f,l){f=f.dateTimeLabelFormats;var c=l&&l.closestPointRange;return(c?
this.getDateFormat(c,d.x,l.options.startOfWeek,f):f.day)||f.year};f.prototype.hide=function(d){var f=this;e.clearTimeout(this.hideTimer);d=w(d,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){f.getLabel().fadeOut(d?void 0:d);f.isHidden=!0},d))};f.prototype.init=function(d,f){this.chart=d;this.options=f;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=f.split&&!d.inverted&&!d.polar;this.shared=f.shared||this.split;this.outside=w(f.outside,!(!d.scrollablePixelsX&&
!d.scrollablePixelsY))};f.prototype.isStickyOnContact=function(){return!(this.followPointer||!this.options.stickOnContact||!this.inContact)};f.prototype.move=function(d,f,l,c){var a=this,x=a.now,v=!1!==a.options.animation&&!a.isHidden&&(1<Math.abs(d-x.x)||1<Math.abs(f-x.y)),h=a.followPointer||1<a.len;G(x,{x:v?(2*x.x+d)/3:d,y:v?(x.y+f)/2:f,anchorX:h?void 0:v?(2*x.anchorX+l)/3:l,anchorY:h?void 0:v?(x.anchorY+c)/2:c});a.getLabel().attr(x);a.drawTracker();v&&(e.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=
setTimeout(function(){a&&a.move(d,f,l,c)},32))};f.prototype.refresh=function(d,f){var l=this.chart,c=this.options,a=d,h={},v=[],t=c.formatter||this.defaultFormatter;h=this.shared;var F=l.styledMode;if(c.enabled){e.clearTimeout(this.hideTimer);this.followPointer=r(a)[0].series.tooltipOptions.followPointer;var k=this.getAnchor(a,f);f=k[0];var y=k[1];!h||a.series&&a.series.noSharedTooltip?h=a.getLabelConfig():(l.pointer.applyInactiveState(a),a.forEach(function(a){a.setState("hover");v.push(a.getLabelConfig())}),
h={x:a[0].category,y:a[0].y},h.points=v,a=a[0]);this.len=v.length;l=t.call(h,this);t=a.series;this.distance=w(t.tooltipOptions.distance,16);!1===l?this.hide():(this.split?this.renderSplit(l,r(d)):(d=this.getLabel(),c.style.width&&!F||d.css({width:this.chart.spacingBox.width+"px"}),d.attr({text:l&&l.join?l.join(""):l}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+w(a.colorIndex,t.colorIndex)),F||d.attr({stroke:c.borderColor||a.color||t.color||"#666666"}),this.updatePosition({plotX:f,
plotY:y,negative:a.negative,ttBelow:a.ttBelow,h:k[2]||0})),this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=!1);m(this,"refresh")}};f.prototype.renderSplit=function(d,f){function l(a,b,g,c,n){void 0===n&&(n=!0);g?(b=q?0:z,a=B(a-c/2,e.left,e.right-c)):(b-=H,a=n?a-c-L:a+L,a=B(a,n?a:e.left,e.right));return{x:a,y:b}}var c=this,a=c.chart,h=c.chart,v=h.plotHeight,t=h.plotLeft,F=h.plotTop,k=h.pointer,y=h.renderer,I=h.scrollablePixelsY,u=void 0===I?0:I;I=h.scrollingContainer;I=
void 0===I?{scrollLeft:0,scrollTop:0}:I;var g=I.scrollLeft,b=I.scrollTop,n=h.styledMode,L=c.distance,r=c.options,m=c.options.positioner,e={left:g,right:g+h.chartWidth,top:b,bottom:b+h.chartHeight},C=c.getLabel(),q=!(!a.xAxis[0]||!a.xAxis[0].opposite),H=F+b,K=0,z=v-u;A(d)&&(d=[!1,d]);d=d.slice(0,f.length+1).reduce(function(a,g,k){if(!1!==g&&""!==g){k=f[k-1]||{isHeader:!0,plotX:f[0].plotX,plotY:v,series:{}};var d=k.isHeader,h=d?c:k.series,x=h.tt,E=k.isHeader;var I=k.series;var N="highcharts-color-"+
w(k.colorIndex,I.colorIndex,"none");x||(x={padding:r.padding,r:r.borderRadius},n||(x.fill=r.backgroundColor,x["stroke-width"]=r.borderWidth),x=y.label("",0,0,r[E?"headerShape":"shape"]||"callout",void 0,void 0,r.useHTML).addClass((E?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+N).attr(x).add(C));x.isActive=!0;x.attr({text:g});n||x.css(r.style).shadow(r.shadow).attr({stroke:r.borderColor||k.color||I.color||"#333333"});g=h.tt=x;E=g.getBBox();h=E.width+g.strokeWidth();d&&(K=E.height,z+=
K,q&&(H-=K));I=k.plotX;I=void 0===I?0:I;N=k.plotY;N=void 0===N?0:N;var P=k.series;if(k.isHeader){I=t+I;var p=F+v/2}else x=P.xAxis,P=P.yAxis,I=x.pos+B(I,-L,x.len+L),P.pos+N>=b+F&&P.pos+N<=b+F+v-u&&(p=P.pos+N);I=B(I,e.left-L,e.right+L);"number"===typeof p?(E=E.height+1,N=m?m.call(c,h,E,k):l(I,p,d,h),a.push({align:m?0:void 0,anchorX:I,anchorY:p,boxWidth:h,point:k,rank:w(N.rank,d?1:0),size:E,target:N.y,tt:g,x:N.x})):g.isActive=!1}return a},[]);!m&&d.some(function(a){return a.x<e.left})&&(d=d.map(function(a){var b=
l(a.anchorX,a.anchorY,a.point.isHeader,a.boxWidth,!1);return G(a,{target:b.y,x:b.x})}));c.cleanSplit();p.distribute(d,z);d.forEach(function(a){var b=a.pos;a.tt.attr({visibility:"undefined"===typeof b?"hidden":"inherit",x:a.x,y:b+H,anchorX:a.anchorX,anchorY:a.anchorY})});d=c.container;a=c.renderer;c.outside&&d&&a&&(h=C.getBBox(),a.setSize(h.width+h.x,h.height+h.y,!1),k=k.getChartPosition(),d.style.left=k.left+"px",d.style.top=k.top+"px")};f.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&
this.tracker.destroy();else{var d=this.chart,f=this.label,l=d.hoverPoint;if(f&&l){var c={x:0,y:0,width:0,height:0};l=this.getAnchor(l);var a=f.getBBox();l[0]+=d.plotLeft-f.translateX;l[1]+=d.plotTop-f.translateY;c.x=Math.min(0,l[0]);c.y=Math.min(0,l[1]);c.width=0>l[0]?Math.max(Math.abs(l[0]),a.width-l[0]):Math.max(Math.abs(l[0]),a.width);c.height=0>l[1]?Math.max(Math.abs(l[1]),a.height-Math.abs(l[1])):Math.max(Math.abs(l[1]),a.height);this.tracker?this.tracker.attr(c):(this.tracker=f.renderer.rect(c).addClass("highcharts-tracker").add(f),
d.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};f.prototype.styledModeFormat=function(d){return d.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};f.prototype.tooltipFooterHeaderFormatter=function(d,f){var l=f?"footer":"header",c=d.series,a=c.tooltipOptions,h=a.xDateFormat,v=c.xAxis,t=v&&"datetime"===v.options.type&&M(d.key),F=a[l+"Format"];f={isFooter:f,labelConfig:d};m(this,"headerFormatter",
f,function(k){t&&!h&&(h=this.getXDateFormat(d,a,v));t&&h&&(d.point&&d.point.tooltipDateKeys||["key"]).forEach(function(a){F=F.replace("{point."+a+"}","{point."+a+":"+h+"}")});c.chart.styledMode&&(F=this.styledModeFormat(F));k.text=H(F,{point:d,series:c},this.chart)});return f.text};f.prototype.update=function(d){this.destroy();K(!0,this.chart.options.tooltip.userOptions,d);this.init(this.chart,K(!0,this.options,d))};f.prototype.updatePosition=function(d){var f=this.chart,l=f.pointer,c=this.getLabel(),
a=d.plotX+f.plotLeft,h=d.plotY+f.plotTop;l=l.getChartPosition();d=(this.options.positioner||this.getPosition).call(this,c.width,c.height,d);if(this.outside){var v=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(c.width+v,c.height+v,!1);if(f=f.containerScaling)D(this.container,{transform:"scale("+f.scaleX+", "+f.scaleY+")"}),a*=f.scaleX,h*=f.scaleY;a+=l.left-d.x;h+=l.top-d.y}this.move(Math.round(d.x),Math.round(d.y||0),a,h)};return f}();p.Tooltip=h;return p.Tooltip});O(q,"parts/Pointer.js",
[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Tooltip.js"],q["parts/Utilities.js"]],function(p,e,q,B){var D=p.parse,z=e.charts,J=e.noop,G=B.addEvent,m=B.attr,H=B.css,M=B.defined,A=B.extend,K=B.find,w=B.fireEvent,r=B.isNumber,u=B.isObject,C=B.objectEach,h=B.offset,f=B.pick,d=B.splat;"";p=function(){function t(d,c){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.chart=d;this.hasDragged=!1;this.options=c;this.unbindContainerMouseLeave=function(){};this.init(d,c)}t.prototype.applyInactiveState=
function(d){var c=[],a;(d||[]).forEach(function(d){a=d.series;c.push(a);a.linkedParent&&c.push(a.linkedParent);a.linkedSeries&&(c=c.concat(a.linkedSeries));a.navigatorSeries&&c.push(a.navigatorSeries)});this.chart.series.forEach(function(a){-1===c.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})};t.prototype.destroy=function(){var d=this;"undefined"!==typeof d.unDocMouseMove&&d.unDocMouseMove();this.unbindContainerMouseLeave();e.chartCount||(e.unbindDocumentMouseUp&&
(e.unbindDocumentMouseUp=e.unbindDocumentMouseUp()),e.unbindDocumentTouchEnd&&(e.unbindDocumentTouchEnd=e.unbindDocumentTouchEnd()));clearInterval(d.tooltipTimeout);C(d,function(c,a){d[a]=void 0})};t.prototype.drag=function(d){var c=this.chart,a=c.options.chart,l=d.chartX,f=d.chartY,h=this.zoomHor,t=this.zoomVert,k=c.plotLeft,y=c.plotTop,I=c.plotWidth,r=c.plotHeight,g=this.selectionMarker,b=this.mouseDownX||0,n=this.mouseDownY||0,L=u(a.panning)?a.panning&&a.panning.enabled:a.panning,m=a.panKey&&d[a.panKey+
"Key"];if(!g||!g.touch)if(l<k?l=k:l>k+I&&(l=k+I),f<y?f=y:f>y+r&&(f=y+r),this.hasDragged=Math.sqrt(Math.pow(b-l,2)+Math.pow(n-f,2)),10<this.hasDragged){var e=c.isInsidePlot(b-k,n-y);c.hasCartesianSeries&&(this.zoomX||this.zoomY)&&e&&!m&&!g&&(this.selectionMarker=g=c.renderer.rect(k,y,h?1:I,t?1:r,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),c.styledMode||g.attr({fill:a.selectionMarkerFill||D("#335cad").setOpacity(.25).get()}));g&&h&&(l-=b,g.attr({width:Math.abs(l),x:(0<l?0:l)+b}));
g&&t&&(l=f-n,g.attr({height:Math.abs(l),y:(0<l?0:l)+n}));e&&!g&&L&&c.pan(d,a.panning)}};t.prototype.dragStart=function(d){var c=this.chart;c.mouseIsDown=d.type;c.cancelClick=!1;c.mouseDownX=this.mouseDownX=d.chartX;c.mouseDownY=this.mouseDownY=d.chartY};t.prototype.drop=function(d){var c=this,a=this.chart,l=this.hasPinched;if(this.selectionMarker){var f={originalEvent:d,xAxis:[],yAxis:[]},h=this.selectionMarker,t=h.attr?h.attr("x"):h.x,k=h.attr?h.attr("y"):h.y,y=h.attr?h.attr("width"):h.width,I=h.attr?
h.attr("height"):h.height,u;if(this.hasDragged||l)a.axes.forEach(function(a){if(a.zoomEnabled&&M(a.min)&&(l||c[{xAxis:"zoomX",yAxis:"zoomY"}[a.coll]])&&r(t)&&r(k)){var b=a.horiz,g="touchend"===d.type?a.minPixelPadding:0,h=a.toValue((b?t:k)+g);b=a.toValue((b?t+y:k+I)-g);f[a.coll].push({axis:a,min:Math.min(h,b),max:Math.max(h,b)});u=!0}}),u&&w(a,"selection",f,function(g){a.zoom(A(g,l?{animation:!1}:null))});r(a.index)&&(this.selectionMarker=this.selectionMarker.destroy());l&&this.scaleGroups()}a&&r(a.index)&&
(H(a.container,{cursor:a._cursor}),a.cancelClick=10<this.hasDragged,a.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};t.prototype.findNearestKDPoint=function(d,c,a){var l=this.chart,f=l.hoverPoint;l=l.tooltip;if(f&&l&&l.isStickyOnContact())return f;var h;d.forEach(function(d){var k=!(d.noSharedTooltip&&c)&&0>d.options.findNearestPointBy.indexOf("y");d=d.searchPoint(a,k);if((k=u(d,!0))&&!(k=!u(h,!0))){k=h.distX-d.distX;var l=h.dist-d.dist,f=(d.series.group&&d.series.group.zIndex)-
(h.series.group&&h.series.group.zIndex);k=0<(0!==k&&c?k:0!==l?l:0!==f?f:h.series.index>d.series.index?-1:1)}k&&(h=d)});return h};t.prototype.getChartCoordinatesFromPoint=function(d,c){var a=d.series,l=a.xAxis;a=a.yAxis;var h=f(d.clientX,d.plotX),t=d.shapeArgs;if(l&&a)return c?{chartX:l.len+l.pos-h,chartY:a.len+a.pos-d.plotY}:{chartX:h+l.pos,chartY:d.plotY+a.pos};if(t&&t.x&&t.y)return{chartX:t.x,chartY:t.y}};t.prototype.getChartPosition=function(){return this.chartPosition||(this.chartPosition=h(this.chart.container))};
t.prototype.getCoordinates=function(d){var c={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(a){c[a.isXAxis?"xAxis":"yAxis"].push({axis:a,value:a.toValue(d[a.horiz?"chartX":"chartY"])})});return c};t.prototype.getHoverData=function(d,c,a,h,v,t){var l,k=[];h=!(!h||!d);var y=c&&!c.stickyTracking,x={chartX:t?t.chartX:void 0,chartY:t?t.chartY:void 0,shared:v};w(this,"beforeGetHoverData",x);y=y?[c]:a.filter(function(a){return x.filter?x.filter(a):a.visible&&!(!v&&a.directTouch)&&f(a.options.enableMouseTracking,
!0)&&a.stickyTracking});c=(l=h||!t?d:this.findNearestKDPoint(y,v,t))&&l.series;l&&(v&&!c.noSharedTooltip?(y=a.filter(function(a){return x.filter?x.filter(a):a.visible&&!(!v&&a.directTouch)&&f(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),y.forEach(function(a){var g=K(a.points,function(a){return a.x===l.x&&!a.isNull});u(g)&&(a.chart.isBoosting&&(g=a.getPoint(g)),k.push(g))})):k.push(l));x={hoverPoint:l};w(this,"afterGetHoverData",x);return{hoverPoint:x.hoverPoint,hoverSeries:c,hoverPoints:k}};
t.prototype.getPointFromEvent=function(d){d=d.target;for(var c;d&&!c;)c=d.point,d=d.parentNode;return c};t.prototype.onTrackerMouseOut=function(d){d=d.relatedTarget||d.toElement;var c=this.chart.hoverSeries;this.isDirectTouch=!1;if(!(!c||!d||c.stickyTracking||this.inClass(d,"highcharts-tooltip")||this.inClass(d,"highcharts-series-"+c.index)&&this.inClass(d,"highcharts-tracker")))c.onMouseOut()};t.prototype.inClass=function(d,c){for(var a;d;){if(a=m(d,"class")){if(-1!==a.indexOf(c))return!0;if(-1!==
a.indexOf("highcharts-container"))return!1}d=d.parentNode}};t.prototype.init=function(d,c){this.options=c;this.chart=d;this.runChartClick=c.chart.events&&!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};q&&(d.tooltip=new q(d,c.tooltip),this.followTouchMove=f(c.tooltip.followTouchMove,!0));this.setDOMEvents()};t.prototype.normalize=function(d,c){var a=d.touches,l=a?a.length?a.item(0):f(a.changedTouches,d.changedTouches)[0]:d;c||(c=this.getChartPosition());a=l.pageX-c.left;c=l.pageY-
c.top;if(l=this.chart.containerScaling)a/=l.scaleX,c/=l.scaleY;return A(d,{chartX:Math.round(a),chartY:Math.round(c)})};t.prototype.onContainerClick=function(d){var c=this.chart,a=c.hoverPoint;d=this.normalize(d);var f=c.plotLeft,l=c.plotTop;c.cancelClick||(a&&this.inClass(d.target,"highcharts-tracker")?(w(a.series,"click",A(d,{point:a})),c.hoverPoint&&a.firePointEvent("click",d)):(A(d,this.getCoordinates(d)),c.isInsidePlot(d.chartX-f,d.chartY-l)&&w(c,"click",d)))};t.prototype.onContainerMouseDown=
function(d){d=this.normalize(d);if(e.isFirefox&&0!==d.button)this.onContainerMouseMove(d);if("undefined"===typeof d.button||1===((d.buttons||d.button)&1))this.zoomOption(d),this.dragStart(d)};t.prototype.onContainerMouseLeave=function(d){var c=z[f(e.hoverChartIndex,-1)],a=this.chart.tooltip;d=this.normalize(d);c&&(d.relatedTarget||d.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=void 0);a&&!a.isHidden&&this.reset()};t.prototype.onContainerMouseMove=function(d){var c=this.chart;d=this.normalize(d);
this.setHoverChartIndex();d.preventDefault||(d.returnValue=!1);"mousedown"===c.mouseIsDown&&this.drag(d);c.openMenu||!this.inClass(d.target,"highcharts-tracker")&&!c.isInsidePlot(d.chartX-c.plotLeft,d.chartY-c.plotTop)||this.runPointActions(d)};t.prototype.onDocumentTouchEnd=function(d){z[e.hoverChartIndex]&&z[e.hoverChartIndex].pointer.drop(d)};t.prototype.onContainerTouchMove=function(d){this.touch(d)};t.prototype.onContainerTouchStart=function(d){this.zoomOption(d);this.touch(d,!0)};t.prototype.onDocumentMouseMove=
function(d){var c=this.chart,a=this.chartPosition;d=this.normalize(d,a);var f=c.tooltip;!a||f&&f.isStickyOnContact()||c.isInsidePlot(d.chartX-c.plotLeft,d.chartY-c.plotTop)||this.inClass(d.target,"highcharts-tracker")||this.reset()};t.prototype.onDocumentMouseUp=function(d){var c=z[f(e.hoverChartIndex,-1)];c&&c.pointer.drop(d)};t.prototype.pinch=function(d){var c=this,a=c.chart,l=c.pinchDown,h=d.touches||[],t=h.length,F=c.lastValidTouch,k=c.hasZoom,y=c.selectionMarker,u={},r=1===t&&(c.inClass(d.target,
"highcharts-tracker")&&a.runTrackerClick||c.runChartClick),g={};1<t&&(c.initiated=!0);k&&c.initiated&&!r&&d.preventDefault();[].map.call(h,function(a){return c.normalize(a)});"touchstart"===d.type?([].forEach.call(h,function(a,g){l[g]={chartX:a.chartX,chartY:a.chartY}}),F.x=[l[0].chartX,l[1]&&l[1].chartX],F.y=[l[0].chartY,l[1]&&l[1].chartY],a.axes.forEach(function(b){if(b.zoomEnabled){var g=a.bounds[b.horiz?"h":"v"],c=b.minPixelPadding,k=b.toPixels(Math.min(f(b.options.min,b.dataMin),b.dataMin)),
d=b.toPixels(Math.max(f(b.options.max,b.dataMax),b.dataMax)),l=Math.max(k,d);g.min=Math.min(b.pos,Math.min(k,d)-c);g.max=Math.max(b.pos+b.len,l+c)}}),c.res=!0):c.followTouchMove&&1===t?this.runPointActions(c.normalize(d)):l.length&&(y||(c.selectionMarker=y=A({destroy:J,touch:!0},a.plotBox)),c.pinchTranslate(l,h,u,y,g,F),c.hasPinched=k,c.scaleGroups(u,g),c.res&&(c.res=!1,this.reset(!1,0)))};t.prototype.pinchTranslate=function(d,c,a,f,h,t){this.zoomHor&&this.pinchTranslateDirection(!0,d,c,a,f,h,t);
this.zoomVert&&this.pinchTranslateDirection(!1,d,c,a,f,h,t)};t.prototype.pinchTranslateDirection=function(d,c,a,f,h,t,F,k){var l=this.chart,v=d?"x":"y",x=d?"X":"Y",g="chart"+x,b=d?"width":"height",n=l["plot"+(d?"Left":"Top")],u,r,m=k||1,E=l.inverted,e=l.bounds[d?"h":"v"],C=1===c.length,w=c[0][g],p=a[0][g],A=!C&&c[1][g],q=!C&&a[1][g];a=function(){"number"===typeof q&&20<Math.abs(w-A)&&(m=k||Math.abs(p-q)/Math.abs(w-A));r=(n-p)/m+w;u=l["plot"+(d?"Width":"Height")]/m};a();c=r;if(c<e.min){c=e.min;var H=
!0}else c+u>e.max&&(c=e.max-u,H=!0);H?(p-=.8*(p-F[v][0]),"number"===typeof q&&(q-=.8*(q-F[v][1])),a()):F[v]=[p,q];E||(t[v]=r-n,t[b]=u);t=E?1/m:m;h[b]=u;h[v]=c;f[E?d?"scaleY":"scaleX":"scale"+x]=m;f["translate"+x]=t*n+(p-t*w)};t.prototype.reset=function(f,c){var a=this.chart,l=a.hoverSeries,h=a.hoverPoint,t=a.hoverPoints,F=a.tooltip,k=F&&F.shared?t:h;f&&k&&d(k).forEach(function(a){a.series.isCartesian&&"undefined"===typeof a.plotX&&(f=!1)});if(f)F&&k&&d(k).length&&(F.refresh(k),F.shared&&t?t.forEach(function(a){a.setState(a.state,
!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):h&&(h.setState(h.state,!0),a.axes.forEach(function(a){a.crosshair&&h.series[a.coll]===a&&a.drawCrosshair(null,h)})));else{if(h)h.onMouseOut();t&&t.forEach(function(a){a.setState()});if(l)l.onMouseOut();F&&F.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());a.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=a.hoverPoints=
a.hoverPoint=null}};t.prototype.runPointActions=function(d,c){var a=this.chart,l=a.tooltip&&a.tooltip.options.enabled?a.tooltip:void 0,h=l?l.shared:!1,t=c||a.hoverPoint,F=t&&t.series||a.hoverSeries;F=this.getHoverData(t,F,a.series,(!d||"touchmove"!==d.type)&&(!!c||F&&F.directTouch&&this.isDirectTouch),h,d);t=F.hoverPoint;var k=F.hoverPoints;c=(F=F.hoverSeries)&&F.tooltipOptions.followPointer;h=h&&F&&!F.noSharedTooltip;if(t&&(t!==a.hoverPoint||l&&l.isHidden)){(a.hoverPoints||[]).forEach(function(a){-1===
k.indexOf(a)&&a.setState()});if(a.hoverSeries!==F)F.onMouseOver();this.applyInactiveState(k);(k||[]).forEach(function(a){a.setState("hover")});a.hoverPoint&&a.hoverPoint.firePointEvent("mouseOut");if(!t.series)return;a.hoverPoints=k;a.hoverPoint=t;t.firePointEvent("mouseOver");l&&l.refresh(h?k:t,d)}else c&&l&&!l.isHidden&&(t=l.getAnchor([{}],d),l.updatePosition({plotX:t[0],plotY:t[1]}));this.unDocMouseMove||(this.unDocMouseMove=G(a.container.ownerDocument,"mousemove",function(a){var c=z[e.hoverChartIndex];
if(c)c.pointer.onDocumentMouseMove(a)}));a.axes.forEach(function(c){var l=f((c.crosshair||{}).snap,!0),h;l&&((h=a.hoverPoint)&&h.series[c.coll]===c||(h=K(k,function(a){return a.series[c.coll]===c})));h||!l?c.drawCrosshair(d,h):c.hideCrosshair()})};t.prototype.scaleGroups=function(d,c){var a=this.chart,f;a.series.forEach(function(l){f=d||l.getPlotBox();l.xAxis&&l.xAxis.zoomEnabled&&l.group&&(l.group.attr(f),l.markerGroup&&(l.markerGroup.attr(f),l.markerGroup.clip(c?a.clipRect:null)),l.dataLabelsGroup&&
l.dataLabelsGroup.attr(f))});a.clipRect.attr(c||a.clipBox)};t.prototype.setDOMEvents=function(){var d=this.chart.container,c=d.ownerDocument;d.onmousedown=this.onContainerMouseDown.bind(this);d.onmousemove=this.onContainerMouseMove.bind(this);d.onclick=this.onContainerClick.bind(this);this.unbindContainerMouseLeave=G(d,"mouseleave",this.onContainerMouseLeave.bind(this));e.unbindDocumentMouseUp||(e.unbindDocumentMouseUp=G(c,"mouseup",this.onDocumentMouseUp.bind(this)));e.hasTouch&&(G(d,"touchstart",
this.onContainerTouchStart.bind(this)),G(d,"touchmove",this.onContainerTouchMove.bind(this)),e.unbindDocumentTouchEnd||(e.unbindDocumentTouchEnd=G(c,"touchend",this.onDocumentTouchEnd.bind(this))))};t.prototype.setHoverChartIndex=function(){var d=this.chart,c=e.charts[f(e.hoverChartIndex,-1)];if(c&&c!==d)c.pointer.onContainerMouseLeave({relatedTarget:!0});c&&c.mouseIsDown||(e.hoverChartIndex=d.index)};t.prototype.touch=function(d,c){var a=this.chart,l;this.setHoverChartIndex();if(1===d.touches.length)if(d=
this.normalize(d),(l=a.isInsidePlot(d.chartX-a.plotLeft,d.chartY-a.plotTop))&&!a.openMenu){c&&this.runPointActions(d);if("touchmove"===d.type){c=this.pinchDown;var h=c[0]?4<=Math.sqrt(Math.pow(c[0].chartX-d.chartX,2)+Math.pow(c[0].chartY-d.chartY,2)):!1}f(h,!0)&&this.pinch(d)}else c&&this.reset();else 2===d.touches.length&&this.pinch(d)};t.prototype.zoomOption=function(d){var c=this.chart,a=c.options.chart,l=a.zoomType||"";c=c.inverted;/touch/.test(d.type)&&(l=f(a.pinchType,l));this.zoomX=d=/x/.test(l);
this.zoomY=l=/y/.test(l);this.zoomHor=d&&!c||l&&c;this.zoomVert=l&&!c||d&&c;this.hasZoom=d||l};return t}();return e.Pointer=p});O(q,"parts/MSPointer.js",[q["parts/Globals.js"],q["parts/Pointer.js"],q["parts/Utilities.js"]],function(p,e,q){function B(){var u=[];u.item=function(u){return this[u]};A(w,function(r){u.push({pageX:r.pageX,pageY:r.pageY,target:r.target})});return u}function D(u,r,h,f){"touch"!==u.pointerType&&u.pointerType!==u.MSPOINTER_TYPE_TOUCH||!J[p.hoverChartIndex]||(f(u),f=J[p.hoverChartIndex].pointer,
f[r]({type:h,target:u.currentTarget,preventDefault:m,touches:B()}))}var z=this&&this.__extends||function(){var u=function(r,h){u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,d){f.__proto__=d}||function(f,d){for(var h in d)d.hasOwnProperty(h)&&(f[h]=d[h])};return u(r,h)};return function(r,h){function f(){this.constructor=r}u(r,h);r.prototype=null===h?Object.create(h):(f.prototype=h.prototype,new f)}}(),J=p.charts,G=p.doc,m=p.noop,H=q.addEvent,M=q.css,A=q.objectEach,K=q.removeEvent,
w={},r=!!p.win.PointerEvent;return function(u){function m(){return null!==u&&u.apply(this,arguments)||this}z(m,u);m.prototype.batchMSEvents=function(h){h(this.chart.container,r?"pointerdown":"MSPointerDown",this.onContainerPointerDown);h(this.chart.container,r?"pointermove":"MSPointerMove",this.onContainerPointerMove);h(G,r?"pointerup":"MSPointerUp",this.onDocumentPointerUp)};m.prototype.destroy=function(){this.batchMSEvents(K);u.prototype.destroy.call(this)};m.prototype.init=function(h,f){u.prototype.init.call(this,
h,f);this.hasZoom&&M(h.container,{"-ms-touch-action":"none","touch-action":"none"})};m.prototype.onContainerPointerDown=function(h){D(h,"onContainerTouchStart","touchstart",function(f){w[f.pointerId]={pageX:f.pageX,pageY:f.pageY,target:f.currentTarget}})};m.prototype.onContainerPointerMove=function(h){D(h,"onContainerTouchMove","touchmove",function(f){w[f.pointerId]={pageX:f.pageX,pageY:f.pageY};w[f.pointerId].target||(w[f.pointerId].target=f.currentTarget)})};m.prototype.onDocumentPointerUp=function(h){D(h,
"onDocumentTouchEnd","touchend",function(f){delete w[f.pointerId]})};m.prototype.setDOMEvents=function(){u.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(H)};return m}(e)});O(q,"parts/Legend.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.addEvent,B=e.animObject,D=e.css,z=e.defined,J=e.discardElement,G=e.find,m=e.fireEvent,H=e.format,M=e.isNumber,A=e.merge,K=e.pick,w=e.relativeLength,r=e.setAnimation,u=e.stableSort,C=e.syncTimeout;
e=e.wrap;var h=p.isFirefox,f=p.marginNames,d=p.win,t=function(){function d(c,a){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=
this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=c;this.init(c,a)}d.prototype.init=function(c,a){this.chart=c;this.setOptions(a);a.enabled&&(this.render(),q(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=q(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};d.prototype.setOptions=function(c){var a=K(c.padding,8);this.options=c;this.chart.styledMode||
(this.itemStyle=c.itemStyle,this.itemHiddenStyle=A(this.itemStyle,c.itemHiddenStyle));this.itemMarginTop=c.itemMarginTop||0;this.itemMarginBottom=c.itemMarginBottom||0;this.padding=a;this.initialItemY=a-5;this.symbolWidth=K(c.symbolWidth,16);this.pages=[];this.proximate="proximate"===c.layout&&!this.chart.inverted;this.baseline=void 0};d.prototype.update=function(c,a){var d=this.chart;this.setOptions(A(!0,this.options,c));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;K(a,!0)&&d.redraw();m(this,"afterUpdate")};
d.prototype.colorizeItem=function(c,a){c.legendGroup[a?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var d=this.options,f=c.legendItem,h=c.legendLine,l=c.legendSymbol,k=this.itemHiddenStyle.color;d=a?d.itemStyle.color:k;var t=a?c.color||k:k,u=c.options&&c.options.marker,r={fill:t};f&&f.css({fill:d,color:d});h&&h.attr({stroke:t});l&&(u&&l.isMarker&&(r=c.pointAttribs(),a||(r.stroke=r.fill=k)),l.attr(r))}m(this,"afterColorizeItem",{item:c,visible:a})};d.prototype.positionItems=
function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};d.prototype.positionItem=function(c){var a=this,d=this.options,f=d.symbolPadding,l=!d.rtl,h=c._legendItemPos;d=h[0];h=h[1];var k=c.checkbox,t=c.legendGroup;t&&t.element&&(f={translateX:l?d:this.legendWidth-d-2*f-4,translateY:h},l=function(){m(a,"afterPositionItem",{item:c})},z(t.translateY)?t.animate(f,{complete:l}):(t.attr(f),l()));k&&(k.x=d,k.y=h)};d.prototype.destroyItem=function(c){var a=
c.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(a){c[a]&&(c[a]=c[a].destroy())});a&&J(c.checkbox)};d.prototype.destroy=function(){function c(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(a){["legendItem","legendGroup"].forEach(c,a)});"clipRect up down pager nav box title group".split(" ").forEach(c,this);this.display=null};d.prototype.positionCheckboxes=function(){var c=this.group&&this.group.alignAttr,a=this.clipHeight||this.legendHeight,
d=this.titleHeight;if(c){var f=c.translateY;this.allItems.forEach(function(h){var l=h.checkbox;if(l){var k=f+d+l.y+(this.scrollOffset||0)+3;D(l,{left:c.translateX+h.checkboxOffset+l.x-20+"px",top:k+"px",display:this.proximate||k>f-6&&k<f+a-6?"":"none"})}},this)}};d.prototype.renderTitle=function(){var c=this.options,a=this.padding,d=c.title,f=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,a-3,a-4,null,null,null,c.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||
this.title.css(d.style),this.title.add(this.group)),d.width||this.title.css({width:this.maxLegendWidth+"px"}),c=this.title.getBBox(),f=c.height,this.offsetWidth=c.width,this.contentGroup.attr({translateY:f}));this.titleHeight=f};d.prototype.setText=function(c){var a=this.options;c.legendItem.attr({text:a.labelFormat?H(a.labelFormat,c,this.chart):a.labelFormatter.call(c)})};d.prototype.renderItem=function(c){var a=this.chart,d=a.renderer,f=this.options,l=this.symbolWidth,h=f.symbolPadding,k=this.itemStyle,
t=this.itemHiddenStyle,r="horizontal"===f.layout?K(f.itemDistance,20):0,u=!f.rtl,g=c.legendItem,b=!c.series,n=!b&&c.series.drawLegendSymbol?c.series:c,m=n.options;m=this.createCheckboxForItem&&m&&m.showCheckbox;r=l+h+r+(m?20:0);var e=f.useHTML,w=c.options.className;g||(c.legendGroup=d.g("legend-item").addClass("highcharts-"+n.type+"-series highcharts-color-"+c.colorIndex+(w?" "+w:"")+(b?" highcharts-series-"+c.index:"")).attr({zIndex:1}).add(this.scrollGroup),c.legendItem=g=d.text("",u?l+h:-h,this.baseline||
0,e),a.styledMode||g.css(A(c.visible?k:t)),g.attr({align:u?"left":"right",zIndex:2}).add(c.legendGroup),this.baseline||(this.fontMetrics=d.fontMetrics(a.styledMode?12:k.fontSize,g),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,g.attr("y",this.baseline)),this.symbolHeight=f.symbolHeight||this.fontMetrics.f,n.drawLegendSymbol(this,c),this.setItemEvents&&this.setItemEvents(c,g,e));m&&!c.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(c);this.colorizeItem(c,c.visible);!a.styledMode&&
k.width||g.css({width:(f.itemWidth||this.widthOption||a.spacingBox.width)-r+"px"});this.setText(c);a=g.getBBox();c.itemWidth=c.checkboxOffset=f.itemWidth||c.legendItemWidth||a.width+r;this.maxItemWidth=Math.max(this.maxItemWidth,c.itemWidth);this.totalItemWidth+=c.itemWidth;this.itemHeight=c.itemHeight=Math.round(c.legendItemHeight||a.height||this.symbolHeight)};d.prototype.layoutItem=function(c){var a=this.options,d=this.padding,f="horizontal"===a.layout,l=c.itemHeight,h=this.itemMarginBottom,k=
this.itemMarginTop,t=f?K(a.itemDistance,20):0,r=this.maxLegendWidth;a=a.alignColumns&&this.totalItemWidth>r?this.maxItemWidth:c.itemWidth;f&&this.itemX-d+a>r&&(this.itemX=d,this.lastLineHeight&&(this.itemY+=k+this.lastLineHeight+h),this.lastLineHeight=0);this.lastItemY=k+this.itemY+h;this.lastLineHeight=Math.max(l,this.lastLineHeight);c._legendItemPos=[this.itemX,this.itemY];f?this.itemX+=a:(this.itemY+=k+l+h,this.lastLineHeight=l);this.offsetWidth=this.widthOption||Math.max((f?this.itemX-d-(c.checkbox?
0:t):a)+d,this.offsetWidth)};d.prototype.getAllItems=function(){var c=[];this.chart.series.forEach(function(a){var d=a&&a.options;a&&K(d.showInLegend,z(d.linkedTo)?!1:void 0,!0)&&(c=c.concat(a.legendItems||("point"===d.legendType?a.data:a)))});m(this,"afterGetAllItems",{allItems:c});return c};d.prototype.getAlignment=function(){var c=this.options;return this.proximate?c.align.charAt(0)+"tv":c.floating?"":c.align.charAt(0)+c.verticalAlign.charAt(0)+c.layout.charAt(0)};d.prototype.adjustMargins=function(c,
a){var d=this.chart,l=this.options,h=this.getAlignment();h&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(t,k){t.test(h)&&!z(c[k])&&(d[f[k]]=Math.max(d[f[k]],d.legend[(k+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][k]*l[k%2?"x":"y"]+K(l.margin,12)+a[k]+(d.titleOffset[k]||0)))})};d.prototype.proximatePositions=function(){var c=this.chart,a=[],d="left"===this.options.align;this.allItems.forEach(function(f){var l=d;if(f.yAxis&&f.points){f.xAxis.options.reversed&&(l=
!l);var h=G(l?f.points:f.points.slice(0).reverse(),function(a){return M(a.plotY)});l=this.itemMarginTop+f.legendItem.getBBox().height+this.itemMarginBottom;var k=f.yAxis.top-c.plotTop;f.visible?(h=h?h.plotY:f.yAxis.height,h+=k-.3*l):h=k+f.yAxis.height;a.push({target:h,size:l,item:f})}},this);p.distribute(a,c.plotHeight);a.forEach(function(a){a.item._legendItemPos[1]=c.plotTop-c.spacing[0]+a.pos})};d.prototype.render=function(){var c=this.chart,a=c.renderer,d=this.group,f=this.box,l=this.options,h=
this.padding;this.itemX=h;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=w(l.width,c.spacingBox.width-h);var k=c.spacingBox.width-2*h-l.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(k/=2);this.maxLegendWidth=this.widthOption||k;d||(this.group=d=a.g("legend").attr({zIndex:7}).add(),this.contentGroup=a.g().attr({zIndex:1}).add(d),this.scrollGroup=a.g().add(this.contentGroup));this.renderTitle();var t=this.getAllItems();u(t,function(a,g){return(a.options&&
a.options.legendIndex||0)-(g.options&&g.options.legendIndex||0)});l.reversed&&t.reverse();this.allItems=t;this.display=k=!!t.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;t.forEach(this.renderItem,this);t.forEach(this.layoutItem,this);t=(this.widthOption||this.offsetWidth)+h;var r=this.lastItemY+this.lastLineHeight+this.titleHeight;r=this.handleOverflow(r);r+=h;f||(this.box=f=a.rect().addClass("highcharts-legend-box").attr({r:l.borderRadius}).add(d),f.isNew=!0);
c.styledMode||f.attr({stroke:l.borderColor,"stroke-width":l.borderWidth||0,fill:l.backgroundColor||"none"}).shadow(l.shadow);0<t&&0<r&&(f[f.isNew?"attr":"animate"](f.crisp.call({},{x:0,y:0,width:t,height:r},f.strokeWidth())),f.isNew=!1);f[k?"show":"hide"]();c.styledMode&&"none"===d.getStyle("display")&&(t=r=0);this.legendWidth=t;this.legendHeight=r;k&&this.align();this.proximate||this.positionItems();m(this,"afterRender")};d.prototype.align=function(c){void 0===c&&(c=this.chart.spacingBox);var a=
this.chart,d=this.options,f=c.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?f+=a.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<a.titleOffset[2]&&(f-=a.titleOffset[2]);f!==c.y&&(c=A(c,{y:f}));this.group.align(A(d,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":d.verticalAlign}),!0,c)};d.prototype.handleOverflow=function(c){var a=this,d=this.chart,f=d.renderer,l=this.options,h=l.y,k=this.padding;h=d.spacingBox.height+("top"===l.verticalAlign?
-h:h)-k;var t=l.maxHeight,r,u=this.clipRect,g=l.navigation,b=K(g.animation,!0),n=g.arrowSize||12,m=this.nav,e=this.pages,w,C=this.allItems,p=function(b){"number"===typeof b?u.attr({height:b}):u&&(a.clipRect=u.destroy(),a.contentGroup.clip());a.contentGroup.div&&(a.contentGroup.div.style.clip=b?"rect("+k+"px,9999px,"+(k+b)+"px,0)":"auto")},A=function(b){a[b]=f.circle(0,0,1.3*n).translate(n/2,n/2).add(m);d.styledMode||a[b].attr("fill","rgba(0,0,0,0.0001)");return a[b]};"horizontal"!==l.layout||"middle"===
l.verticalAlign||l.floating||(h/=2);t&&(h=Math.min(h,t));e.length=0;c>h&&!1!==g.enabled?(this.clipHeight=r=Math.max(h-20-this.titleHeight-k,0),this.currentPage=K(this.currentPage,1),this.fullHeight=c,C.forEach(function(a,b){var g=a._legendItemPos[1],c=Math.round(a.legendItem.getBBox().height),d=e.length;if(!d||g-e[d-1]>r&&(w||g)!==e[d-1])e.push(w||g),d++;a.pageIx=d-1;w&&(C[b-1].pageIx=d-1);b===C.length-1&&g+c-e[d-1]>r&&g!==w&&(e.push(g),a.pageIx=d);g!==w&&(w=g)}),u||(u=a.clipRect=f.clipRect(0,k,9999,
0),a.contentGroup.clip(u)),p(r),m||(this.nav=m=f.g().attr({zIndex:1}).add(this.group),this.up=f.symbol("triangle",0,0,n,n).add(m),A("upTracker").on("click",function(){a.scroll(-1,b)}),this.pager=f.text("",15,10).addClass("highcharts-legend-navigation"),d.styledMode||this.pager.css(g.style),this.pager.add(m),this.down=f.symbol("triangle-down",0,0,n,n).add(m),A("downTracker").on("click",function(){a.scroll(1,b)})),a.scroll(0),c=h):m&&(p(),this.nav=m.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=
0);return c};d.prototype.scroll=function(c,a){var d=this,f=this.chart,l=this.pages,h=l.length,k=this.currentPage+c;c=this.clipHeight;var t=this.options.navigation,u=this.pager,e=this.padding;k>h&&(k=h);0<k&&("undefined"!==typeof a&&r(a,f),this.nav.attr({translateX:e,translateY:c+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===k?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),u.attr({text:k+"/"+h}),[this.down,
this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":k===h?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),f.styledMode||(this.up.attr({fill:1===k?t.inactiveColor:t.activeColor}),this.upTracker.css({cursor:1===k?"default":"pointer"}),this.down.attr({fill:k===h?t.inactiveColor:t.activeColor}),this.downTracker.css({cursor:k===h?"default":"pointer"})),this.scrollOffset=-l[k-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),
this.currentPage=k,this.positionCheckboxes(),a=B(K(a,f.renderer.globalAnimation,!0)),C(function(){m(d,"afterScroll",{currentPage:k})},a.duration||0))};return d}();(/Trident\/7\.0/.test(d.navigator&&d.navigator.userAgent)||h)&&e(t.prototype,"positionItem",function(d,c){var a=this,f=function(){c._legendItemPos&&d.call(a,c)};f();a.bubbleLegend||setTimeout(f)});p.Legend=t;return p.Legend});O(q,"parts/Chart.js",[q["parts/Axis.js"],q["parts/Globals.js"],q["parts/Legend.js"],q["parts/MSPointer.js"],q["parts/Options.js"],
q["parts/Pointer.js"],q["parts/Time.js"],q["parts/Utilities.js"]],function(p,e,q,B,D,z,J,G){var m=e.charts,H=e.doc,M=e.seriesTypes,A=e.win,K=D.defaultOptions,w=G.addEvent,r=G.animate,u=G.animObject,C=G.attr,h=G.createElement,f=G.css,d=G.defined,t=G.discardElement,l=G.erase,c=G.error,a=G.extend,x=G.find,v=G.fireEvent,E=G.getStyle,F=G.isArray,k=G.isFunction,y=G.isNumber,I=G.isObject,P=G.isString,g=G.merge,b=G.numberFormat,n=G.objectEach,L=G.pick,N=G.pInt,S=G.relativeLength,aa=G.removeEvent,Z=G.setAnimation,
ba=G.splat,Y=G.syncTimeout,ca=G.uniqueKey,da=e.marginNames,T=function(){function D(a,b,g){this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=this.labelCollectors=this.isResizing=this.index=this.container=this.colorCounter=this.clipBox=this.chartWidth=
this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0;this.getArgs(a,b,g)}D.prototype.getArgs=function(a,b,g){P(a)||a.nodeName?(this.renderTo=a,this.init(b,g)):this.init(a,b)};D.prototype.init=function(a,c){var d,f=a.series,h=a.plotOptions||{};v(this,"init",{args:arguments},function(){a.series=null;d=g(K,a);var l=d.chart||{};n(d.plotOptions,function(a,b){I(a)&&(a.tooltip=h[b]&&g(h[b].tooltip)||void 0)});d.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;d.series=
a.series=f;this.userOptions=a;var t=l.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new J(a.time):e.time;this.numberFormatter=l.numberFormatter||b;this.styledMode=l.styledMode;this.hasCartesianSeries=l.showAxes;var y=this;y.index=m.length;m.push(y);e.chartCount++;t&&n(t,function(a,b){k(a)&&w(y,b,a)});y.xAxis=[];y.yAxis=[];y.pointCount=y.colorCounter=
y.symbolCounter=0;v(y,"afterInit");y.firstRender()})};D.prototype.initSeries=function(a){var b=this.options.chart;b=a.type||b.type||b.defaultSeriesType;var g=M[b];g||c(17,!0,this,{missingModuleFor:b});b=new g;b.init(this,a);return b};D.prototype.setSeriesData=function(){this.getSeriesOrderByLinks().forEach(function(a){a.points||a.data||!a.enabledDataSorting||a.setData(a.options.data,!1)})};D.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(a,b){return a.linkedSeries.length||
b.linkedSeries.length?b.linkedSeries.length-a.linkedSeries.length:0})};D.prototype.orderSeries=function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())};D.prototype.isInsidePlot=function(a,b,g){var c=g?b:a;a=g?a:b;c={x:c,y:a,isInsidePlot:0<=c&&c<=this.plotWidth&&0<=a&&a<=this.plotHeight};v(this,"afterIsInsidePlot",c);return c.isInsidePlot};D.prototype.redraw=function(b){v(this,"beforeRedraw");var g=this,c=g.axes,d=g.series,n=g.pointer,k=g.legend,f=g.userOptions.legend,
h=g.isDirtyLegend,l=g.hasCartesianSeries,t=g.isDirtyBox,r=g.renderer,u=r.isHidden(),x=[];g.setResponsive&&g.setResponsive(!1);Z(g.hasRendered?b:!1,g);u&&g.temporaryDisplay();g.layOutTitles();for(b=d.length;b--;){var m=d[b];if(m.options.stacking){var F=!0;if(m.isDirty){var I=!0;break}}}if(I)for(b=d.length;b--;)m=d[b],m.options.stacking&&(m.isDirty=!0);d.forEach(function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),h=!0):f&&(f.labelFormatter||f.labelFormat)&&(h=!0));
a.isDirtyData&&v(a,"updatedData")});h&&k&&k.options.enabled&&(k.render(),g.isDirtyLegend=!1);F&&g.getStacks();l&&c.forEach(function(a){g.isResizing&&y(a.min)||(a.updateNames(),a.setScale())});g.getMargins();l&&(c.forEach(function(a){a.isDirty&&(t=!0)}),c.forEach(function(b){var g=b.min+","+b.max;b.extKey!==g&&(b.extKey=g,x.push(function(){v(b,"afterSetExtremes",a(b.eventArgs,b.getExtremes()));delete b.eventArgs}));(t||F)&&b.redraw()}));t&&g.drawChartBox();v(g,"predraw");d.forEach(function(a){(t||
a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});n&&n.reset(!0);r.draw();v(g,"redraw");v(g,"render");u&&g.temporaryDisplay(!0);x.forEach(function(a){a.call()})};D.prototype.get=function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var g=this.series,c;var d=x(this.axes,b)||x(this.series,b);for(c=0;!d&&c<g.length;c++)d=x(g[c].points||[],b);return d};D.prototype.getAxes=function(){var a=this,b=this.options,g=b.xAxis=ba(b.xAxis||{});b=b.yAxis=ba(b.yAxis||{});v(this,"getAxes");g.forEach(function(a,
b){a.index=b;a.isX=!0});b.forEach(function(a,b){a.index=b});g.concat(b).forEach(function(b){new p(a,b)});v(this,"afterGetAxes")};D.prototype.getSelectedPoints=function(){var a=[];this.series.forEach(function(b){a=a.concat(b.getPointsCollection().filter(function(a){return L(a.selectedStaging,a.selected)}))});return a};D.prototype.getSelectedSeries=function(){return this.series.filter(function(a){return a.selected})};D.prototype.setTitle=function(a,b,g){this.applyDescription("title",a);this.applyDescription("subtitle",
b);this.applyDescription("caption",void 0);this.layOutTitles(g)};D.prototype.applyDescription=function(a,b){var c=this,d="title"===a?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};d=this.options[a]=g(!this.styledMode&&{style:d},this.options[a],b);var n=this[a];n&&b&&(this[a]=n=n.destroy());d&&!n&&(n=this.renderer.text(d.text,0,0,d.useHTML).attr({align:d.align,"class":"highcharts-"+a,zIndex:d.zIndex||4}).add(),n.update=function(b){c[{title:"setTitle",subtitle:"setSubtitle",
caption:"setCaption"}[a]](b)},this.styledMode||n.css(d.style),this[a]=n)};D.prototype.layOutTitles=function(b){var g=[0,0,0],c=this.renderer,d=this.spacingBox;["title","subtitle","caption"].forEach(function(b){var n=this[b],k=this.options[b],f=k.verticalAlign||"top";b="title"===b?-3:"top"===f?g[0]+2:0;if(n){if(!this.styledMode)var h=k.style.fontSize;h=c.fontMetrics(h,n).b;n.css({width:(k.width||d.width+(k.widthAdjust||0))+"px"});var l=Math.round(n.getBBox(k.useHTML).height);n.align(a({y:"bottom"===
f?h:b+h,height:l},k),!1,"spacingBox");k.floating||("top"===f?g[0]=Math.ceil(g[0]+l):"bottom"===f&&(g[2]=Math.ceil(g[2]+l)))}},this);g[0]&&"top"===(this.options.title.verticalAlign||"top")&&(g[0]+=this.options.title.margin);g[2]&&"bottom"===this.options.caption.verticalAlign&&(g[2]+=this.options.caption.margin);var n=!this.titleOffset||this.titleOffset.join(",")!==g.join(",");this.titleOffset=g;v(this,"afterLayOutTitles");!this.isDirtyBox&&n&&(this.isDirtyBox=this.isDirtyLegend=n,this.hasRendered&&
L(b,!0)&&this.isDirtyBox&&this.redraw())};D.prototype.getChartSize=function(){var a=this.options.chart,b=a.width;a=a.height;var g=this.renderTo;d(b)||(this.containerWidth=E(g,"width"));d(a)||(this.containerHeight=E(g,"height"));this.chartWidth=Math.max(0,b||this.containerWidth||600);this.chartHeight=Math.max(0,S(a,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))};D.prototype.temporaryDisplay=function(a){var b=this.renderTo;if(a)for(;b&&b.style;)b.hcOrigStyle&&(f(b,b.hcOrigStyle),
delete b.hcOrigStyle),b.hcOrigDetached&&(H.body.removeChild(b),b.hcOrigDetached=!1),b=b.parentNode;else for(;b&&b.style;){H.body.contains(b)||b.parentNode||(b.hcOrigDetached=!0,H.body.appendChild(b));if("none"===E(b,"display",!1)||b.hcOricDetached)b.hcOrigStyle={display:b.style.display,height:b.style.height,overflow:b.style.overflow},a={display:"block",overflow:"hidden"},b!==this.renderTo&&(a.height=0),f(b,a),b.offsetWidth||b.style.setProperty("display","block","important");b=b.parentNode;if(b===
H.body)break}};D.prototype.setClassName=function(a){this.container.className="highcharts-container "+(a||"")};D.prototype.getContainer=function(){var b=this.options,g=b.chart;var d=this.renderTo;var n=ca(),k,l;d||(this.renderTo=d=g.renderTo);P(d)&&(this.renderTo=d=H.getElementById(d));d||c(13,!0,this);var t=N(C(d,"data-highcharts-chart"));y(t)&&m[t]&&m[t].hasRendered&&m[t].destroy();C(d,"data-highcharts-chart",this.index);d.innerHTML="";g.skipClone||d.offsetWidth||this.temporaryDisplay();this.getChartSize();
t=this.chartWidth;var r=this.chartHeight;f(d,{overflow:"hidden"});this.styledMode||(k=a({position:"relative",overflow:"hidden",width:t+"px",height:r+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none"},g.style));this.container=d=h("div",{id:n},k,d);this._cursor=d.style.cursor;this.renderer=new (e[g.renderer]||e.Renderer)(d,t,r,null,g.forExport,b.exporting&&b.exporting.allowHTML,this.styledMode);Z(void 0,this);this.setClassName(g.className);
if(this.styledMode)for(l in b.defs)this.renderer.definition(b.defs[l]);else this.renderer.setStyle(g.style);this.renderer.chartIndex=this.index;v(this,"afterGetContainer")};D.prototype.getMargins=function(a){var b=this.spacing,g=this.margin,c=this.titleOffset;this.resetMargins();c[0]&&!d(g[0])&&(this.plotTop=Math.max(this.plotTop,c[0]+b[0]));c[2]&&!d(g[2])&&(this.marginBottom=Math.max(this.marginBottom,c[2]+b[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(g,b);v(this,"getMargins");
a||this.getAxisMargins()};D.prototype.getAxisMargins=function(){var a=this,b=a.axisOffset=[0,0,0,0],g=a.colorAxis,c=a.margin,n=function(a){a.forEach(function(a){a.visible&&a.getOffset()})};a.hasCartesianSeries?n(a.axes):g&&g.length&&n(g);da.forEach(function(g,n){d(c[n])||(a[g]+=b[n])});a.setChartSize()};D.prototype.reflow=function(a){var b=this,g=b.options.chart,c=b.renderTo,n=d(g.width)&&d(g.height),k=g.width||E(c,"width");g=g.height||E(c,"height");c=a?a.target:A;if(!n&&!b.isPrinting&&k&&g&&(c===
A||c===H)){if(k!==b.containerWidth||g!==b.containerHeight)G.clearTimeout(b.reflowTimeout),b.reflowTimeout=Y(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=k;b.containerHeight=g}};D.prototype.setReflow=function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=w(A,"resize",function(a){b.options&&b.reflow(a)}),w(this,"destroy",this.unbindReflow))};D.prototype.setSize=function(a,b,g){var c=this,
d=c.renderer;c.isResizing+=1;Z(g,c);g=d.globalAnimation;c.oldChartHeight=c.chartHeight;c.oldChartWidth=c.chartWidth;"undefined"!==typeof a&&(c.options.chart.width=a);"undefined"!==typeof b&&(c.options.chart.height=b);c.getChartSize();c.styledMode||(g?r:f)(c.container,{width:c.chartWidth+"px",height:c.chartHeight+"px"},g);c.setChartSize(!0);d.setSize(c.chartWidth,c.chartHeight,g);c.axes.forEach(function(a){a.isDirty=!0;a.setScale()});c.isDirtyLegend=!0;c.isDirtyBox=!0;c.layOutTitles();c.getMargins();
c.redraw(g);c.oldChartHeight=null;v(c,"resize");Y(function(){c&&v(c,"endResize",null,function(){--c.isResizing})},u(g).duration||0)};D.prototype.setChartSize=function(a){var b=this.inverted,g=this.renderer,c=this.chartWidth,d=this.chartHeight,n=this.options.chart,k=this.spacing,f=this.clipOffset,h,l,t,y;this.plotLeft=h=Math.round(this.plotLeft);this.plotTop=l=Math.round(this.plotTop);this.plotWidth=t=Math.max(0,Math.round(c-h-this.marginRight));this.plotHeight=y=Math.max(0,Math.round(d-l-this.marginBottom));
this.plotSizeX=b?y:t;this.plotSizeY=b?t:y;this.plotBorderWidth=n.plotBorderWidth||0;this.spacingBox=g.spacingBox={x:k[3],y:k[0],width:c-k[3]-k[1],height:d-k[0]-k[2]};this.plotBox=g.plotBox={x:h,y:l,width:t,height:y};c=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(c,f[3])/2);g=Math.ceil(Math.max(c,f[0])/2);this.clipBox={x:b,y:g,width:Math.floor(this.plotSizeX-Math.max(c,f[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(c,f[2])/2-g))};a||this.axes.forEach(function(a){a.setAxisSize();
a.setAxisTranslation()});v(this,"afterSetChartSize",{skipAxes:a})};D.prototype.resetMargins=function(){v(this,"resetMargins");var a=this,b=a.options.chart;["margin","spacing"].forEach(function(g){var c=b[g],d=I(c)?c:[c,c,c,c];["Top","Right","Bottom","Left"].forEach(function(c,n){a[g][n]=L(b[g+c],d[n])})});da.forEach(function(b,g){a[b]=L(a.margin[g],a.spacing[g])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]};D.prototype.drawChartBox=function(){var a=this.options.chart,b=this.renderer,g=this.chartWidth,
c=this.chartHeight,d=this.chartBackground,n=this.plotBackground,k=this.plotBorder,f=this.styledMode,h=this.plotBGImage,l=a.backgroundColor,t=a.plotBackgroundColor,y=a.plotBackgroundImage,r,u=this.plotLeft,m=this.plotTop,x=this.plotWidth,F=this.plotHeight,I=this.plotBox,L=this.clipRect,e=this.clipBox,E="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),E="attr");if(f)var w=r=d.strokeWidth();else{w=a.borderWidth||0;r=w+(a.shadow?8:0);l={fill:l||"none"};if(w||d["stroke-width"])l.stroke=
a.borderColor,l["stroke-width"]=w;d.attr(l).shadow(a.shadow)}d[E]({x:r/2,y:r/2,width:g-r-w%2,height:c-r-w%2,r:a.borderRadius});E="animate";n||(E="attr",this.plotBackground=n=b.rect().addClass("highcharts-plot-background").add());n[E](I);f||(n.attr({fill:t||"none"}).shadow(a.plotShadow),y&&(h?(y!==h.attr("href")&&h.attr("href",y),h.animate(I)):this.plotBGImage=b.image(y,u,m,x,F).add()));L?L.animate({width:e.width,height:e.height}):this.clipRect=b.clipRect(e);E="animate";k||(E="attr",this.plotBorder=
k=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());f||k.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});k[E](k.crisp({x:u,y:m,width:x,height:F},-k.strokeWidth()));this.isDirtyBox=!1;v(this,"afterDrawChartBox")};D.prototype.propFromSeries=function(){var a=this,b=a.options.chart,g,c=a.options.series,d,n;["inverted","angular","polar"].forEach(function(k){g=M[b.type||b.defaultSeriesType];n=b[k]||g&&g.prototype[k];for(d=c&&c.length;!n&&d--;)(g=M[c[d].type])&&
g.prototype[k]&&(n=!0);a[k]=n})};D.prototype.linkSeries=function(){var a=this,b=a.series;b.forEach(function(a){a.linkedSeries.length=0});b.forEach(function(b){var g=b.options.linkedTo;P(g)&&(g=":previous"===g?a.series[b.index-1]:a.get(g))&&g.linkedParent!==b&&(g.linkedSeries.push(b),b.linkedParent=g,g.enabledDataSorting&&b.setDataSortingOptions(),b.visible=L(b.options.visible,g.options.visible,b.visible))});v(this,"afterLinkSeries")};D.prototype.renderSeries=function(){this.series.forEach(function(a){a.translate();
a.render()})};D.prototype.renderLabels=function(){var b=this,g=b.options.labels;g.items&&g.items.forEach(function(c){var d=a(g.style,c.style),n=N(d.left)+b.plotLeft,k=N(d.top)+b.plotTop+12;delete d.left;delete d.top;b.renderer.text(c.html,n,k).attr({zIndex:2}).css(d).add()})};D.prototype.render=function(){var a=this.axes,b=this.colorAxis,g=this.renderer,c=this.options,d=0,n=function(a){a.forEach(function(a){a.visible&&a.render()})};this.setTitle();this.legend=new q(this,c.legend);this.getStacks&&
this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return d=21,!0});var k=this.plotHeight=Math.max(this.plotHeight-d,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();var f=1.1<c/this.plotWidth;var h=1.05<k/this.plotHeight;if(f||h)a.forEach(function(a){(a.horiz&&f||!a.horiz&&h)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?n(a):b&&b.length&&
n(b);this.seriesGroup||(this.seriesGroup=g.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();this.hasRendered=!0};D.prototype.addCredits=function(a){var b=this,c=g(!0,this.options.credits,a);c.enabled&&!this.credits&&(this.credits=this.renderer.text(c.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){c.href&&(A.location.href=c.href)}).attr({align:c.position.align,
zIndex:8}),b.styledMode||this.credits.css(c.style),this.credits.add().align(c.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})};D.prototype.updateContainerScaling=function(){var a=this.container;if(2<a.offsetWidth&&2<a.offsetHeight&&a.getBoundingClientRect){var b=a.getBoundingClientRect(),g=b.width/a.offsetWidth;a=b.height/a.offsetHeight;1!==g||1!==a?this.containerScaling={scaleX:g,scaleY:a}:delete this.containerScaling}};D.prototype.destroy=function(){var a=
this,b=a.axes,g=a.series,c=a.container,d,k=c&&c.parentNode;v(a,"destroy");a.renderer.forExport?l(m,a):m[a.index]=void 0;e.chartCount--;a.renderTo.removeAttribute("data-highcharts-chart");aa(a);for(d=b.length;d--;)b[d]=b[d].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(d=g.length;d--;)g[d]=g[d].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(b){var g=
a[b];g&&g.destroy&&(a[b]=g.destroy())});c&&(c.innerHTML="",aa(c),k&&t(c));n(a,function(b,g){delete a[g]})};D.prototype.firstRender=function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();(F(b.series)?b.series:[]).forEach(function(b){a.initSeries(b)});a.linkSeries();a.setSeriesData();v(a,"beforeRender");z&&(a.pointer=e.hasTouch||!A.PointerEvent&&!A.MSPointerEvent?new z(a,b):new B(a,b));a.render();
if(!a.renderer.imgCount&&!a.hasLoaded)a.onload();a.temporaryDisplay(!0)}};D.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&"undefined"!==typeof this.index&&a.apply(this,[this])},this);v(this,"load");v(this,"render");d(this.index)&&this.setReflow(this.options.chart.reflow);this.hasLoaded=!0};return D}();T.prototype.callbacks=[];e.chart=function(a,b,g){return new T(a,b,g)};return e.Chart=T});O(q,"parts/ScrollablePlotArea.js",[q["parts/Chart.js"],q["parts/Globals.js"],
q["parts/Utilities.js"]],function(p,e,q){var B=q.addEvent,D=q.createElement,z=q.pick,J=q.stop;"";B(p,"afterSetChartSize",function(p){var m=this.options.chart.scrollablePlotArea,q=m&&m.minWidth;m=m&&m.minHeight;if(!this.renderer.forExport){if(q){if(this.scrollablePixelsX=q=Math.max(0,q-this.chartWidth)){this.plotWidth+=q;this.inverted?(this.clipBox.height+=q,this.plotBox.height+=q):(this.clipBox.width+=q,this.plotBox.width+=q);var G={1:{name:"right",value:q}}}}else m&&(this.scrollablePixelsY=q=Math.max(0,
m-this.chartHeight))&&(this.plotHeight+=q,this.inverted?(this.clipBox.width+=q,this.plotBox.width+=q):(this.clipBox.height+=q,this.plotBox.height+=q),G={2:{name:"bottom",value:q}});G&&!p.skipAxes&&this.axes.forEach(function(m){G[m.side]?m.getPlotLinePath=function(){var p=G[m.side].name,w=this[p];this[p]=w-G[m.side].value;var r=e.Axis.prototype.getPlotLinePath.apply(this,arguments);this[p]=w;return r}:(m.setAxisSize(),m.setAxisTranslation())})}});B(p,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?
(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});p.prototype.setUpScrolling=function(){var e=this,m={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(m.overflowX="auto");this.scrollablePixelsY&&(m.overflowY="auto");this.scrollingContainer=D("div",{className:"highcharts-scrolling"},m,this.renderTo);B(this.scrollingContainer,"scroll",function(){e.pointer&&delete e.pointer.chartPosition});this.innerContainer=
D("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};p.prototype.moveFixedElements=function(){var e=this.container,m=this.fixedRenderer,p=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
q;this.scrollablePixelsX&&!this.inverted?q=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?q=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?q=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(q=".highcharts-yaxis");p.push(q,q+"-labels");p.forEach(function(p){[].forEach.call(e.querySelectorAll(p),function(e){(e.namespaceURI===m.SVG_NS?m.box:m.box.parentNode).appendChild(e);e.style.pointerEvents="auto"})})};p.prototype.applyFixed=function(){var p,m,q=!this.fixedDiv,M=
this.options.chart.scrollablePlotArea;q?(this.fixedDiv=D("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=m=new e.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight,null===(p=this.options.chart)||void 0===p?void 0:p.style),this.scrollableMask=m.path().attr({fill:this.options.chart.backgroundColor||"#fff",
"fill-opacity":z(M.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),B(this,"afterShowResetZoom",this.moveFixedElements),B(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);p=this.chartWidth+(this.scrollablePixelsX||0);m=this.chartHeight+(this.scrollablePixelsY||0);J(this.container);this.container.style.width=p+"px";this.container.style.height=m+"px";this.renderer.boxWrapper.attr({width:p,height:m,
viewBox:[0,0,p,m].join(" ")});this.chartBackground.attr({width:p,height:m});this.scrollingContainer.style.height=this.chartHeight+"px";q&&(M.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*M.scrollPositionX),M.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*M.scrollPositionY));m=this.axisOffset;q=this.plotTop-m[0]-1;M=this.plotLeft-m[3]-1;p=this.plotTop+this.plotHeight+m[2]+1;m=this.plotLeft+this.plotWidth+m[1]+1;var A=this.plotLeft+this.plotWidth-
(this.scrollablePixelsX||0),K=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);q=this.scrollablePixelsX?[["M",0,q],["L",this.plotLeft-1,q],["L",this.plotLeft-1,p],["L",0,p],["Z"],["M",A,q],["L",this.chartWidth,q],["L",this.chartWidth,p],["L",A,p],["Z"]]:this.scrollablePixelsY?[["M",M,0],["L",M,this.plotTop-1],["L",m,this.plotTop-1],["L",m,0],["Z"],["M",M,K],["L",M,this.chartHeight],["L",m,this.chartHeight],["L",m,K],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:q})}});
O(q,"parts/StackingAxis.js",[q["parts/Utilities.js"]],function(p){var e=p.addEvent,q=p.destroyObjectProperties,B=p.fireEvent,D=p.objectEach,z=p.pick,J=function(){function e(m){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=m}e.prototype.buildStacks=function(){var m=this.axis,e=m.series,p=z(m.options.reversedStacks,!0),q=e.length,K;if(!m.isXAxis){this.usePercentage=!1;for(K=q;K--;){var w=e[p?K:q-K-1];w.setStackedPoints();w.setGroupedPoints()}for(K=0;K<q;K++)e[K].modifyStacks();B(m,
"afterBuildStacks")}};e.prototype.cleanStacks=function(){if(!this.axis.isXAxis){if(this.oldStacks)var m=this.stacks=this.oldStacks;D(m,function(m){D(m,function(m){m.cumulative=m.total})})}};e.prototype.resetStacks=function(){var m=this,e=m.stacks;m.axis.isXAxis||D(e,function(e){D(e,function(p,q){p.touched<m.stacksTouched?(p.destroy(),delete e[q]):(p.total=null,p.cumulative=null)})})};e.prototype.renderStackTotals=function(){var m=this.axis.chart,e=m.renderer,p=this.stacks,q=this.stackTotalGroup=this.stackTotalGroup||
e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();q.translate(m.plotLeft,m.plotTop);D(p,function(m){D(m,function(m){m.render(q)})})};return e}();return function(){function p(){}p.compose=function(m){e(m,"init",p.onInit);e(m,"destroy",p.onDestroy)};p.onDestroy=function(){var m=this.stacking;if(m){var e=m.stacks;D(e,function(m,p){q(m);e[p]=null});m&&m.stackTotalGroup&&m.stackTotalGroup.destroy()}};p.onInit=function(){this.stacking||(this.stacking=new J(this))};return p}()});O(q,"mixins/legend-symbol.js",
[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.merge,B=e.pick;p.LegendSymbolMixin={drawRectangle:function(e,p){var q=e.symbolHeight,z=e.options.squareSymbol;p.legendSymbol=this.chart.renderer.rect(z?(e.symbolWidth-q)/2:0,e.baseline-q+1,z?q:e.symbolWidth,q,B(e.options.symbolRadius,q/2)).addClass("highcharts-point").attr({zIndex:3}).add(p.legendGroup)},drawLineMarker:function(e){var p=this.options,J=p.marker,G=e.symbolWidth,m=e.symbolHeight,H=m/2,D=this.chart.renderer,A=this.legendGroup;
e=e.baseline-Math.round(.3*e.fontMetrics.b);var K={};this.chart.styledMode||(K={"stroke-width":p.lineWidth||0},p.dashStyle&&(K.dashstyle=p.dashStyle));this.legendLine=D.path(["M",0,e,"L",G,e]).addClass("highcharts-graph").attr(K).add(A);J&&!1!==J.enabled&&G&&(p=Math.min(B(J.radius,H),H),0===this.symbol.indexOf("url")&&(J=q(J,{width:m,height:m}),p=0),this.legendSymbol=J=D.symbol(this.symbol,G/2-p,e-p,2*p,2*p,J).addClass("highcharts-point").add(A),J.isMarker=!0)}};return p.LegendSymbolMixin});O(q,"parts/Point.js",
[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.animObject,B=e.defined,D=e.erase,z=e.extend,J=e.fireEvent,G=e.format,m=e.getNestedProperty,H=e.isArray,M=e.isNumber,A=e.isObject,K=e.syncTimeout,w=e.pick,r=e.removeEvent,u=e.uniqueKey;"";e=function(){function e(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.series=void 0;this.visible=!0;this.x=void 0}e.prototype.animateBeforeDestroy=
function(){var h=this,f={x:h.startXPos,opacity:0},d,t=h.getGraphicalProps();t.singular.forEach(function(l){d="dataLabel"===l;h[l]=h[l].animate(d?{x:h[l].startXPos,y:h[l].startYPos,opacity:0}:f)});t.plural.forEach(function(d){h[d].forEach(function(c){c.element&&c.animate(z({x:h.startXPos},c.startYPos?{x:c.startXPos,y:c.startYPos}:{}))})})};e.prototype.applyOptions=function(h,f){var d=this.series,t=d.options.pointValKey||d.pointValKey;h=e.prototype.optionsToObject.call(this,h);z(this,h);this.options=
this.options?z(this.options,h):h;h.group&&delete this.group;h.dataLabels&&delete this.dataLabels;t&&(this.y=e.prototype.getNestedProperty.call(this,t));this.formatPrefix=(this.isNull=w(this.isValid&&!this.isValid(),null===this.x||!M(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof f&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));"undefined"===typeof this.x&&d&&(this.x="undefined"===typeof f?d.autoIncrement(this):f);return this};e.prototype.destroy=
function(){function h(){if(f.graphic||f.dataLabel||f.dataLabels)r(f),f.destroyElements();for(a in f)f[a]=null}var f=this,d=f.series,t=d.chart;d=d.options.dataSorting;var l=t.hoverPoints,c=q(f.series.chart.renderer.globalAnimation),a;f.legendItem&&t.legend.destroyItem(f);l&&(f.setState(),D(l,f),l.length||(t.hoverPoints=null));if(f===t.hoverPoint)f.onMouseOut();d&&d.enabled?(this.animateBeforeDestroy(),K(h,c.duration)):h();t.pointCount--};e.prototype.destroyElements=function(h){var f=this;h=f.getGraphicalProps(h);
h.singular.forEach(function(d){f[d]=f[d].destroy()});h.plural.forEach(function(d){f[d].forEach(function(d){d.element&&d.destroy()});delete f[d]})};e.prototype.firePointEvent=function(h,f,d){var t=this,l=this.series.options;(l.point.events[h]||t.options&&t.options.events&&t.options.events[h])&&t.importEvents();"click"===h&&l.allowPointSelect&&(d=function(c){t.select&&t.select(null,c.ctrlKey||c.metaKey||c.shiftKey)});J(t,h,f,d)};e.prototype.getClassName=function(){return"highcharts-point"+(this.selected?
" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};e.prototype.getGraphicalProps=function(h){var f=this,d=[],t,l={singular:[],plural:[]};h=h||{graphic:1,dataLabel:1};h.graphic&&d.push("graphic","shadowGroup");
h.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(t=d.length;t--;){var c=d[t];f[c]&&l.singular.push(c)}["dataLabel","connector"].forEach(function(a){var c=a+"s";h[a]&&f[c]&&l.plural.push(c)});return l};e.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};e.prototype.getNestedProperty=function(h){if(h)return 0===
h.indexOf("custom.")?m(h,this.options):this[h]};e.prototype.getZone=function(){var h=this.series,f=h.zones;h=h.zoneAxis||"y";var d=0,t;for(t=f[d];this[h]>=t.value;)t=f[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=t&&t.color&&!this.options.color?t.color:this.nonZonedColor;return t};e.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};e.prototype.init=function(h,f,d){this.series=h;this.applyOptions(f,
d);this.id=B(this.id)?this.id:u();this.resolveColor();h.chart.pointCount++;J(this,"afterInit");return this};e.prototype.optionsToObject=function(h){var f={},d=this.series,t=d.options.keys,l=t||d.pointArrayMap||["y"],c=l.length,a=0,r=0;if(M(h)||null===h)f[l[0]]=h;else if(H(h))for(!t&&h.length>c&&(d=typeof h[0],"string"===d?f.name=h[0]:"number"===d&&(f.x=h[0]),a++);r<c;)t&&"undefined"===typeof h[a]||(0<l[r].indexOf(".")?e.prototype.setNestedProperty(f,h[a],l[r]):f[l[r]]=h[a]),a++,r++;else"object"===
typeof h&&(f=h,h.dataLabels&&(d._hasPointLabels=!0),h.marker&&(d._hasPointMarkers=!0));return f};e.prototype.resolveColor=function(){var h=this.series;var f=h.chart.options.chart.colorCount;var d=h.chart.styledMode;delete this.nonZonedColor;d||this.options.color||(this.color=h.color);h.options.colorByPoint?(d||(f=h.options.colors||h.chart.options.colors,this.color=this.color||f[h.colorCounter],f=f.length),d=h.colorCounter,h.colorCounter++,h.colorCounter===f&&(h.colorCounter=0)):d=h.colorIndex;this.colorIndex=
w(this.colorIndex,d)};e.prototype.setNestedProperty=function(h,f,d){d.split(".").reduce(function(d,h,c,a){d[h]=a.length-1===c?f:A(d[h],!0)?d[h]:{};return d[h]},h);return h};e.prototype.tooltipFormatter=function(h){var f=this.series,d=f.tooltipOptions,t=w(d.valueDecimals,""),l=d.valuePrefix||"",c=d.valueSuffix||"";f.chart.styledMode&&(h=f.chart.tooltip.styledModeFormat(h));(f.pointArrayMap||["y"]).forEach(function(a){a="{point."+a;if(l||c)h=h.replace(RegExp(a+"}","g"),l+a+"}"+c);h=h.replace(RegExp(a+
"}","g"),a+":,."+t+"f}")});return G(h,{point:this,series:this.series},f.chart)};return e}();return p.Point=e});O(q,"parts/Series.js",[q["parts/Globals.js"],q["mixins/legend-symbol.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/SVGElement.js"],q["parts/Utilities.js"]],function(p,e,q,B,D,z){var J=q.defaultOptions,G=z.addEvent,m=z.animObject,H=z.arrayMax,M=z.arrayMin,A=z.clamp,K=z.correctFloat,w=z.defined,r=z.erase,u=z.error,C=z.extend,h=z.find,f=z.fireEvent,d=z.getNestedProperty,t=z.isArray,
l=z.isFunction,c=z.isNumber,a=z.isString,x=z.merge,v=z.objectEach,E=z.pick,F=z.removeEvent;q=z.seriesType;var k=z.splat,y=z.syncTimeout;"";var I=p.seriesTypes,P=p.win;p.Series=q("line",null,{lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",
lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){var a=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},
inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,eventsToUnbind:[],isCartesian:!0,parallelArrays:["x","y"],pointClass:B,requireSorting:!0,sorted:!0,init:function(a,b){f(this,"init",{options:b});var g=this,c=a.series,d;this.eventOptions=this.eventOptions||{};g.chart=a;g.options=b=g.setOptions(b);g.linkedSeries=[];g.bindAxes();C(g,{name:b.name,state:"",visible:!1!==
b.visible,selected:!0===b.selected});var k=b.events;v(k,function(a,b){l(a)&&g.eventOptions[b]!==a&&(l(g.eventOptions[b])&&F(g,b,g.eventOptions[b]),g.eventOptions[b]=a,G(g,b,a))});if(k&&k.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;g.getColor();g.getSymbol();g.parallelArrays.forEach(function(a){g[a+"Data"]||(g[a+"Data"]=[])});g.isCartesian&&(a.hasCartesianSeries=!0);c.length&&(d=c[c.length-1]);g._i=E(d&&d._i,-1)+1;g.opacity=g.options.opacity;a.orderSeries(this.insert(c));
b.dataSorting&&b.dataSorting.enabled?g.setDataSortingOptions():g.points||g.data||g.setData(b.data,!1);f(this,"afterInit")},is:function(a){return I[a]&&this instanceof I[a]},insert:function(a){var b=this.options.index,g;if(c(b)){for(g=a.length;g--;)if(b>=E(a[g].options.index,a[g]._i)){a.splice(g+1,0,this);break}-1===g&&a.unshift(this);g+=1}else a.push(this);return E(g,a.length-1)},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;f(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(g){c[g].forEach(function(c){d=
c.options;if(b[g]===d.index||"undefined"!==typeof b[g]&&b[g]===d.id||"undefined"===typeof b[g]&&0===d.index)a.insert(c.series),a[g]=c,c.isDirty=!0});a[g]||a.optionalAxis===g||u(18,!0,c)})});f(this,"afterBindAxes")},updateParallelArrays:function(a,b){var g=a.series,d=arguments,k=c(b)?function(c){var d="y"===c&&g.toYData?g.toYData(a):a[c];g[c+"Data"][b]=d}:function(a){Array.prototype[b].apply(g[a+"Data"],Array.prototype.slice.call(d,2))};g.parallelArrays.forEach(k)},hasData:function(){return this.visible&&
"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,k=this.chart.time;b=E(b,a.pointStart,0);this.pointInterval=c=E(this.pointInterval,a.pointInterval,1);d&&(a=new k.Date(b),"day"===d?k.set("Date",a,k.get("Date",a)+c):"month"===d?k.set("Month",a,k.get("Month",a)+c):"year"===d&&k.set("FullYear",a,k.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=
b+c;return b},setDataSortingOptions:function(){var a=this.options;C(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});w(a.pointRange)||(a.pointRange=1)},setOptions:function(a){var b=this.chart,g=b.options,c=g.plotOptions,d=b.userOptions||{};a=x(a);b=b.styledMode;var k={plotOptions:c,userOptions:a};f(this,"setOptions",k);var h=k.plotOptions[this.type],l=d.plotOptions||{};this.userOptions=k.userOptions;d=x(h,c.series,d.plotOptions&&d.plotOptions[this.type],a);this.tooltipOptions=
x(J.tooltip,J.plotOptions.series&&J.plotOptions.series.tooltip,J.plotOptions[this.type].tooltip,g.tooltip.userOptions,c.series&&c.series.tooltip,c[this.type].tooltip,a.tooltip);this.stickyTracking=E(a.stickyTracking,l[this.type]&&l[this.type].stickyTracking,l.series&&l.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:d.stickyTracking);null===h.marker&&delete d.marker;this.zoneAxis=d.zoneAxis;g=this.zones=(d.zones||[]).slice();!d.negativeColor&&!d.negativeFillColor||d.zones||
(c={value:d[this.zoneAxis+"Threshold"]||d.threshold||0,className:"highcharts-negative"},b||(c.color=d.negativeColor,c.fillColor=d.negativeFillColor),g.push(c));g.length&&w(g[g.length-1].value)&&g.push(b?{}:{color:this.color,fillColor:this.fillColor});f(this,"afterSetOptions",{options:d});return d},getName:function(){return E(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,b,c){var g=this.chart,d=this.userOptions,k=a+"Index",n=a+"Counter",f=c?c.length:E(g.options.chart[a+"Count"],
g[a+"Count"]);if(!b){var h=E(d[k],d["_"+k]);w(h)||(g.series.length||(g[n]=0),d["_"+k]=h=g[n]%f,g[n]+=1);c&&(b=c[h])}"undefined"!==typeof h&&(this[k]=h);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||J.plotOptions[this.type].color,this.chart.options.colors)},getPointsCollection:function(){return(this.hasGroupedData?this.points:this.data)||[]},getSymbol:function(){this.getCyclic("symbol",
this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(a,b){var g=a.id,d=a.x,k=this.points,f,l=this.options.dataSorting;if(g)var t=this.chart.get(g);else if(this.linkedParent||this.enabledDataSorting){var v=l&&l.matchByName?"name":"index";t=h(k,function(b){return!b.touched&&b[v]===a[v]});if(!t)return}if(t){var y=t&&t.index;"undefined"!==typeof y&&(f=!0)}"undefined"===typeof y&&c(d)&&(y=this.xData.indexOf(d,b));-1!==y&&"undefined"!==typeof y&&this.cropped&&(y=y>=this.cropStart?
y-this.cropStart:y);!f&&k[y]&&k[y].touched&&(y=void 0);return y},drawLegendSymbol:e.drawLineMarker,updateData:function(a,b){var g=this.options,d=g.dataSorting,k=this.points,f=[],h,l,t,y=this.requireSorting,v=a.length===k.length,r=!0;this.xIncrement=null;a.forEach(function(a,b){var n=w(a)&&this.pointClass.prototype.optionsToObject.call({series:this},a)||{};var l=n.x;if(n.id||c(l)){if(l=this.findPointIndex(n,t),-1===l||"undefined"===typeof l?f.push(a):k[l]&&a!==g.data[l]?(k[l].update(a,!1,null,!1),
k[l].touched=!0,y&&(t=l+1)):k[l]&&(k[l].touched=!0),!v||b!==l||d&&d.enabled||this.hasDerivedData)h=!0}else f.push(a)},this);if(h)for(a=k.length;a--;)(l=k[a])&&!l.touched&&l.remove&&l.remove(!1,b);else!v||d&&d.enabled?r=!1:(a.forEach(function(a,b){k[b].update&&a!==k[b].y&&k[b].update(a,!1,null,!1)}),f.length=0);k.forEach(function(a){a&&(a.touched=!1)});if(!r)return!1;f.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=
H(this.xData),this.autoIncrement());return!0},setData:function(g,b,d,k){var n=this,f=n.points,h=f&&f.length||0,l,y=n.options,v=n.chart,r=y.dataSorting,m=null,e=n.xAxis;m=y.turboThreshold;var x=this.xData,F=this.yData,I=(l=n.pointArrayMap)&&l.length,L=y.keys,w=0,C=1,p;g=g||[];l=g.length;b=E(b,!0);r&&r.enabled&&(g=this.sortData(g));!1!==k&&l&&h&&!n.cropped&&!n.hasGroupedData&&n.visible&&!n.isSeriesBoosting&&(p=this.updateData(g,d));if(!p){n.xIncrement=null;n.colorCounter=0;this.parallelArrays.forEach(function(a){n[a+
"Data"].length=0});if(m&&l>m)if(m=n.getFirstValidPoint(g),c(m))for(d=0;d<l;d++)x[d]=this.autoIncrement(),F[d]=g[d];else if(t(m))if(I)for(d=0;d<l;d++)k=g[d],x[d]=k[0],F[d]=k.slice(1,I+1);else for(L&&(w=L.indexOf("x"),C=L.indexOf("y"),w=0<=w?w:0,C=0<=C?C:1),d=0;d<l;d++)k=g[d],x[d]=k[w],F[d]=k[C];else u(12,!1,v);else for(d=0;d<l;d++)"undefined"!==typeof g[d]&&(k={series:n},n.pointClass.prototype.applyOptions.apply(k,[g[d]]),n.updateParallelArrays(k,d));F&&a(F[0])&&u(14,!0,v);n.data=[];n.options.data=
n.userOptions.data=g;for(d=h;d--;)f[d]&&f[d].destroy&&f[d].destroy();e&&(e.minRange=e.userMinRange);n.isDirty=v.isDirtyBox=!0;n.isDirtyData=!!f;d=!1}"point"===y.legendType&&(this.processData(),this.generatePoints());b&&v.redraw(d)},sortData:function(a){var b=this,g=b.options.dataSorting.sortKey||"y",c=function(a,b){return w(b)&&a.pointClass.prototype.optionsToObject.call({series:a},b)||{}};a.forEach(function(g,d){a[d]=c(b,g);a[d].index=d},this);a.concat().sort(function(a,b){a=d(g,a);b=d(g,b);return b<
a?-1:b>a?1:0}).forEach(function(a,b){a.x=b},this);b.linkedSeries&&b.linkedSeries.forEach(function(b){var g=b.options,d=g.data;g.dataSorting&&g.dataSorting.enabled||!d||(d.forEach(function(g,k){d[k]=c(b,g);a[k]&&(d[k].x=a[k].x,d[k].index=k)}),b.setData(d,!1))});return a},getProcessedData:function(a){var b=this.xData,g=this.yData,c=b.length;var d=0;var k=this.xAxis,f=this.options;var l=f.cropThreshold;var h=a||this.getExtremesFromAll||f.getExtremesFromAll,t=this.isCartesian;a=k&&k.val2lin;f=!(!k||!k.logarithmic);
var y=this.requireSorting;if(k){k=k.getExtremes();var v=k.min;var r=k.max}if(t&&this.sorted&&!h&&(!l||c>l||this.forceCrop))if(b[c-1]<v||b[0]>r)b=[],g=[];else if(this.yData&&(b[0]<v||b[c-1]>r)){d=this.cropData(this.xData,this.yData,v,r);b=d.xData;g=d.yData;d=d.start;var m=!0}for(l=b.length||1;--l;)if(c=f?a(b[l])-a(b[l-1]):b[l]-b[l-1],0<c&&("undefined"===typeof e||c<e))var e=c;else 0>c&&y&&(u(15,!1,this.chart),y=!1);return{xData:b,yData:g,cropped:m,cropStart:d,closestPointRange:e}},processData:function(a){var b=
this.xAxis;if(this.isCartesian&&!this.isDirty&&!b.isDirty&&!this.yAxis.isDirty&&!a)return!1;a=this.getProcessedData();this.cropped=a.cropped;this.cropStart=a.cropStart;this.processedXData=a.xData;this.processedYData=a.yData;this.closestPointRange=this.basePointRange=a.closestPointRange},cropData:function(a,b,c,d,k){var g=a.length,n=0,f=g,l;k=E(k,this.cropShoulder);for(l=0;l<g;l++)if(a[l]>=c){n=Math.max(0,l-k);break}for(c=l;c<g;c++)if(a[c]>d){f=c+k;break}return{xData:a.slice(n,f),yData:b.slice(n,f),
start:n,end:f}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,l=this.processedXData,h=this.processedYData,t=this.pointClass,y=l.length,v=this.cropStart||0,r=this.hasGroupedData;a=a.keys;var m=[],e;c||r||(c=[],c.length=b.length,c=this.data=c);a&&r&&(this.options.keys=!1);for(e=0;e<y;e++){var u=v+e;if(r){var x=(new t).init(this,[l[e]].concat(k(h[e])));x.dataGroup=this.groupMap[e];x.dataGroup.options&&(x.options=x.dataGroup.options,C(x,x.dataGroup.options),delete x.dataLabels)}else(x=
c[u])||"undefined"===typeof b[u]||(c[u]=x=(new t).init(this,b[u],l[e]));x&&(x.index=u,m[e]=x)}this.options.keys=a;if(c&&(y!==(d=c.length)||r))for(e=0;e<d;e++)e!==v||r||(e+=y),c[e]&&(c[e].destroyElements(),c[e].plotX=void 0);this.data=c;this.points=m;f(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:M(a),max:H(a)}},getExtremes:function(a,b){var g=this.xAxis,d=this.yAxis,k=this.processedXData||this.xData,l=[],h=0,y=0;var v=0;var r=this.requireSorting?this.cropShoulder:0,e=d?d.positiveValuesOnly:
!1,m;a=a||this.stackedYData||this.processedYData||[];d=a.length;g&&(v=g.getExtremes(),y=v.min,v=v.max);for(m=0;m<d;m++){var u=k[m];var x=a[m];var F=(c(x)||t(x))&&(x.length||0<x||!e);u=b||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!g||(k[m+r]||u)>=y&&(k[m-r]||u)<=v;if(F&&u)if(F=x.length)for(;F--;)c(x[F])&&(l[h++]=x[F]);else l[h++]=x}a={dataMin:M(l),dataMax:H(l)};f(this,"afterGetExtremes",{dataExtremes:a});return a},applyExtremes:function(){var a=this.getExtremes();this.dataMin=
a.dataMin;this.dataMax=a.dataMax;return a},getFirstValidPoint:function(a){for(var b=null,g=a.length,c=0;null===b&&c<g;)b=a[c],c++;return b},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,k=d.categories,l=this.enabledDataSorting,h=this.yAxis,y=this.points,v=y.length,r=!!this.modifyValue,m,e=this.pointPlacementToXValue(),u=!!e,x=a.threshold,F=a.startFromThreshold?x:0,I,C=this.zoneAxis||"y",p=Number.MAX_VALUE;for(m=0;m<
v;m++){var q=y[m],P=q.x,z=q.y,G=q.low,B=b&&h.stacking&&h.stacking.stacks[(this.negStacks&&z<(F?0:x)?"-":"")+this.stackKey];h.positiveValuesOnly&&null!==z&&0>=z&&(q.isNull=!0);q.plotX=I=K(A(d.translate(P,0,0,0,1,e,"flags"===this.type),-1E5,1E5));if(b&&this.visible&&B&&B[P]){var H=this.getStackIndicator(H,P,this.index);if(!q.isNull){var J=B[P];var D=J.points[H.key]}}t(D)&&(G=D[0],z=D[1],G===F&&H.key===B[P].base&&(G=E(c(x)&&x,h.min)),h.positiveValuesOnly&&0>=G&&(G=null),q.total=q.stackTotal=J.total,
q.percentage=J.total&&q.y/J.total*100,q.stackY=z,this.irregularWidths||J.setOffset(this.pointXOffset||0,this.barW||0));q.yBottom=w(G)?A(h.translate(G,0,1,0,1),-1E5,1E5):null;r&&(z=this.modifyValue(z,q));q.plotY="number"===typeof z&&Infinity!==z?A(h.translate(z,0,1,0,1),-1E5,1E5):void 0;q.isInside=this.isPointInside(q);q.clientX=u?K(d.translate(P,0,0,0,1,e)):I;q.negative=q[C]<(a[C+"Threshold"]||x||0);q.category=k&&"undefined"!==typeof k[q.x]?k[q.x]:q.x;if(!q.isNull&&!1!==q.visible){"undefined"!==typeof M&&
(p=Math.min(p,Math.abs(I-M)));var M=I}q.zone=this.zones.length&&q.getZone();!q.graphic&&this.group&&l&&(q.isNew=!0)}this.closestPointRangePx=p;f(this,"afterTranslate")},getValidPoints:function(a,b,c){var g=this.chart;return(a||this.points||[]).filter(function(a){return b&&!g.isInsidePlot(a.plotX,a.plotY,g.inverted)?!1:!1!==a.visible&&(c||!a.isNull)})},getClipBox:function(a,b){var g=this.options,c=this.chart,d=c.inverted,k=this.xAxis,f=k&&this.yAxis,l=c.options.chart.scrollablePlotArea||{};a&&!1===
g.clip&&f?a=d?{y:-c.chartWidth+f.len+f.pos,height:c.chartWidth,width:c.chartHeight,x:-c.chartHeight+k.len+k.pos}:{y:-f.pos,height:c.chartHeight,width:c.chartWidth,x:-k.pos}:(a=this.clipBox||c.clipBox,b&&(a.width=c.plotSizeX,a.x=(c.scrollablePixelsX||0)*(l.scrollPositionX||0)));return b?{width:a.width,x:a.x}:a},setClip:function(a){var b=this.chart,g=this.options,c=b.renderer,d=b.inverted,k=this.clipBox,f=this.getClipBox(a),l=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,f.height,g.xAxis,
g.yAxis].join(),h=b[l],t=b[l+"m"];a&&(f.width=0,d&&(f.x=b.plotHeight+(!1!==g.clip?0:b.plotTop)));h?b.hasLoaded||h.attr(f):(a&&(b[l+"m"]=t=c.clipRect(d?b.plotSizeX+99:-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight)),b[l]=h=c.clipRect(f),h.count={length:0});a&&!h.count[this.index]&&(h.count[this.index]=!0,h.count.length+=1);if(!1!==g.clip||a)this.group.clip(a||k?h:b.clipRect),this.markerGroup.clip(t),this.sharedClipKey=l;a||(h.count[this.index]&&(delete h.count[this.index],--h.count.length),
0===h.count.length&&l&&b[l]&&(k||(b[l]=b[l].destroy()),b[l+"m"]&&(b[l+"m"]=b[l+"m"].destroy())))},animate:function(a){var b=this.chart,g=m(this.options.animation);if(!b.hasRendered)if(a)this.setClip(g);else{var c=this.sharedClipKey;a=b[c];var d=this.getClipBox(g,!0);a&&a.animate(d,g);b[c+"m"]&&b[c+"m"].animate({width:d.width+99,x:d.x-(b.inverted?0:99)},g)}},afterAnimate:function(){this.setClip();f(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,
c,d,k=this.options.marker,f=this[this.specialGroup]||this.markerGroup,l=this.xAxis,h=E(k.enabled,!l||l.isRadial?!0:null,this.closestPointRangePx>=k.enabledThreshold*k.radius);if(!1!==k.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++){var t=a[c];var y=(d=t.graphic)?"animate":"attr";var v=t.marker||{};var r=!!t.marker;if((h&&"undefined"===typeof v.enabled||v.enabled)&&!t.isNull&&!1!==t.visible){var m=E(v.symbol,this.symbol);var e=this.markerAttribs(t,t.selected&&"select");this.enabledDataSorting&&
(t.startXPos=l.reversed?-e.width:l.width);var u=!1!==t.isInside;d?d[u?"show":"hide"](u).animate(e):u&&(0<e.width||t.hasImage)&&(t.graphic=d=b.renderer.symbol(m,e.x,e.y,e.width,e.height,r?v:k).add(f),this.enabledDataSorting&&b.hasRendered&&(d.attr({x:t.startXPos}),y="animate"));d&&"animate"===y&&d[u?"show":"hide"](u).animate(e);if(d&&!b.styledMode)d[y](this.pointAttribs(t,t.selected&&"select"));d&&d.addClass(t.getClassName(),!0)}else d&&(t.graphic=d.destroy())}},markerAttribs:function(a,b){var c=this.options,
g=c.marker,d=a.marker||{},k=d.symbol||g.symbol,f=E(d.radius,g.radius);b&&(g=g.states[b],b=d.states&&d.states[b],f=E(b&&b.radius,g&&g.radius,f+(g&&g.radiusPlus||0)));a.hasImage=k&&0===k.indexOf("url");a.hasImage&&(f=0);a={x:c.crisp?Math.floor(a.plotX)-f:a.plotX-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var c=this.options.marker,g=a&&a.options,d=g&&g.marker||{},k=this.color,f=g&&g.color,l=a&&a.color;g=E(d.lineWidth,c.lineWidth);var h=a&&a.zone&&a.zone.color;a=1;k=
f||h||l||k;f=d.fillColor||c.fillColor||k;k=d.lineColor||c.lineColor||k;b=b||"normal";c=c.states[b];b=d.states&&d.states[b]||{};g=E(b.lineWidth,c.lineWidth,g+E(b.lineWidthPlus,c.lineWidthPlus,0));f=b.fillColor||c.fillColor||f;k=b.lineColor||c.lineColor||k;a=E(b.opacity,c.opacity,a);return{stroke:k,"stroke-width":g,fill:f,opacity:a}},destroy:function(a){var b=this,c=b.chart,g=/AppleWebKit\/533/.test(P.navigator.userAgent),d,k,l=b.data||[],h,t;f(b,"destroy");this.removeEvents(a);(b.axisTypes||[]).forEach(function(a){(t=
b[a])&&t.series&&(r(t.series,b),t.isDirty=t.forceRedraw=!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(k=l.length;k--;)(h=l[k])&&h.destroy&&h.destroy();b.points=null;z.clearTimeout(b.animationTimeout);v(b,function(a,b){a instanceof D&&!a.survive&&(d=g&&"group"===b?"hide":"destroy",a[d]())});c.hoverSeries===b&&(c.hoverSeries=null);r(c.series,b);c.orderSeries();v(b,function(c,g){a&&"hcEvents"===g||delete b[g]})},getGraphPath:function(a,b,c){var d=this,g=d.options,k=g.step,n,f=[],l=[],h;a=a||
d.points;(n=a.reversed)&&a.reverse();(k={right:1,center:2}[k]||k&&3)&&n&&(k=4-k);a=this.getValidPoints(a,!1,!(g.connectNulls&&!b&&!c));a.forEach(function(n,t){var y=n.plotX,v=n.plotY,r=a[t-1];(n.leftCliff||r&&r.rightCliff)&&!c&&(h=!0);n.isNull&&!w(b)&&0<t?h=!g.connectNulls:n.isNull&&!b?h=!0:(0===t||h?t=[["M",n.plotX,n.plotY]]:d.getPointSpline?t=[d.getPointSpline(a,n,t)]:k?(t=1===k?[["L",r.plotX,v]]:2===k?[["L",(r.plotX+y)/2,r.plotY],["L",(r.plotX+y)/2,v]]:[["L",y,r.plotY]],t.push(["L",y,v])):t=[["L",
y,v]],l.push(n.x),k&&(l.push(n.x),2===k&&l.push(n.x)),f.push.apply(f,t),h=!1)});f.xMap=l;return d.graphPath=f},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=this.chart.styledMode,k=[["graph","highcharts-graph"]];d||k[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);k=a.getZonesGraphs(k);k.forEach(function(g,k){var n=g[0],f=a[n],l=f?"animate":"attr";f?(f.endX=a.preventGraphAnimation?null:c.xMap,f.animate({d:c})):c.length&&(a[n]=f=a.chart.renderer.path(c).addClass(g[1]).attr({zIndex:1}).add(a.group));
f&&!d&&(n={stroke:g[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},g[3]?n.dashstyle=g[3]:"square"!==b.linecap&&(n["stroke-linecap"]=n["stroke-linejoin"]="round"),f[l](n).shadow(2>k&&b.shadow));f&&(f.startX=c.xMap,f.isArea=c.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,c){c=["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||"")];this.chart.styledMode||c.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(c)},this);
return a},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,k,f,l=this.clips||[],h,t=this.graph,y=this.area,v=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],e=b.inverted,m,u,x,F=!1,I,w;if(d.length&&(t||y)&&r&&"undefined"!==typeof r.min){var C=r.reversed;var p=r.horiz;t&&!this.showLine&&t.hide();y&&y.hide();var q=r.getExtremes();d.forEach(function(d,g){k=C?p?b.plotWidth:0:p?0:r.toPixels(q.min)||0;k=A(E(f,k),0,v);f=A(Math.round(r.toPixels(E(d.value,q.max),
!0)||0),0,v);F&&(k=f=r.toPixels(q.max));m=Math.abs(k-f);u=Math.min(k,f);x=Math.max(k,f);r.isXAxis?(h={x:e?x:u,y:0,width:m,height:v},p||(h.x=b.plotHeight-h.x)):(h={x:0,y:e?x:u,width:v,height:m},p&&(h.y=b.plotWidth-h.y));e&&c.isVML&&(h=r.isXAxis?{x:0,y:C?u:x,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});l[g]?l[g].animate(h):l[g]=c.clipRect(h);I=a["zone-area-"+g];w=a["zone-graph-"+g];t&&w&&w.clip(l[g]);y&&I&&I.clip(l[g]);F=d.value>q.max;
a.resetZones&&0===f&&(f=void 0)});this.clips=l}else a.visible&&(t&&t.show(!0),y&&y.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(c.isRadialSeries?!1:a))})}var c=this,d=c.chart;c.xAxis&&(c.eventsToUnbind.push(G(d,"resize",b)),b(),c.invertGroups=b)},plotGroup:function(a,b,c,d,k){var g=this[a],f=!g;c={visibility:c,zIndex:d||
.1};"undefined"===typeof this.opacity||this.chart.styledMode||(c.opacity=this.opacity);f&&(this[a]=g=this.chart.renderer.g().add(k));g.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(w(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr(c)[f?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;
a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},removeEvents:function(a){a?this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(a){a()}),this.eventsToUnbind.length=0):F(this)},render:function(){var a=this,b=a.chart,c=a.options,d=!a.finishedAnimating&&b.renderer.isSVG&&m(c.animation).duration,k=a.visible?"inherit":"hidden",l=c.zIndex,h=a.hasRendered,t=b.seriesGroup,v=b.inverted;f(this,"render");var r=a.plotGroup("group",
"series",k,l,t);a.markerGroup=a.plotGroup("markerGroup","markers",k,l,t);d&&a.animate&&a.animate(!0);r.inverted=a.isCartesian||a.invertable?v:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(v);!1===c.clip||a.sharedClipKey||h||r.clip(b.clipRect);d&&a.animate&&a.animate();h||(a.animationTimeout=y(function(){a.afterAnimate()},
d||0));a.isDirty=!1;a.hasRendered=!0;f(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,k=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:E(d&&d.left,a.plotLeft),translateY:E(k&&k.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,g=this.chart.inverted;return this.searchKDTree({clientX:g?
c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:g?d.len-a.chartX+d.pos:a.chartY-d.pos},b,a)},buildKDTree:function(a){function b(a,d,g){var k;if(k=a&&a.length){var f=c.kdAxisArray[d%g];a.sort(function(a,b){return a[f]-b[f]});k=Math.floor(k/2);return{point:a[k],left:b(a.slice(0,k),d+1,g),right:b(a.slice(k+1),d+1,g)}}}this.buildingKdTree=!0;var c=this,d=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;y(function(){c.kdTree=b(c.getValidPoints(null,!c.directTouch),d,d);c.buildingKdTree=!1},c.options.kdNow||
a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,c){function d(a,b,c,l){var h=b.point,t=g.kdAxisArray[c%l],y=h;var v=w(a[k])&&w(h[k])?Math.pow(a[k]-h[k],2):null;var r=w(a[f])&&w(h[f])?Math.pow(a[f]-h[f],2):null;r=(v||0)+(r||0);h.dist=w(r)?Math.sqrt(r):Number.MAX_VALUE;h.distX=w(v)?Math.sqrt(v):Number.MAX_VALUE;t=a[t]-h[t];r=0>t?"left":"right";v=0>t?"right":"left";b[r]&&(r=d(a,b[r],c+1,l),y=r[n]<y[n]?r:h);b[v]&&Math.sqrt(t*t)<y[n]&&(a=d(a,b[v],c+1,l),y=a[n]<y[n]?a:y);return y}var g=this,k=
this.kdAxisArray[0],f=this.kdAxisArray[1],n=b?"distX":"dist";b=-1<g.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return d(a,this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options,b=a.pointRange,d=this.xAxis;a=a.pointPlacement;"between"===a&&(a=d.reversed?-.5:.5);return c(a)?a*E(b,d.pointRange):0},isPointInside:function(a){return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=this.yAxis.len&&
0<=a.plotX&&a.plotX<=this.xAxis.len}});""});O(q,"parts/Stacking.js",[q["parts/Axis.js"],q["parts/Chart.js"],q["parts/Globals.js"],q["parts/StackingAxis.js"],q["parts/Utilities.js"]],function(p,e,q,B,D){var z=D.correctFloat,J=D.defined,G=D.destroyObjectProperties,m=D.format,H=D.isNumber,M=D.pick;"";var A=q.Series,K=function(){function e(r,e,m,h,f){var d=r.chart.inverted;this.axis=r;this.isNegative=m;this.options=e=e||{};this.x=h;this.total=null;this.points={};this.hasValidPoints=!1;this.stack=f;this.rightCliff=
this.leftCliff=0;this.alignOptions={align:e.align||(d?m?"left":"right":"center"),verticalAlign:e.verticalAlign||(d?"middle":m?"bottom":"top"),y:e.y,x:e.x};this.textAlign=e.textAlign||(d?m?"right":"left":"center")}e.prototype.destroy=function(){G(this,this.axis)};e.prototype.render=function(r){var e=this.axis.chart,w=this.options,h=w.format;h=h?m(h,this,e):w.formatter.call(this);this.label?this.label.attr({text:h,visibility:"hidden"}):(this.label=e.renderer.label(h,null,null,w.shape,null,null,w.useHTML,
!1,"stack-labels"),h={r:w.borderRadius||0,text:h,rotation:w.rotation,padding:M(w.padding,5),visibility:"hidden"},e.styledMode||(h.fill=w.backgroundColor,h.stroke=w.borderColor,h["stroke-width"]=w.borderWidth,this.label.css(w.style)),this.label.attr(h),this.label.added||this.label.add(r));this.label.labelrank=e.plotHeight};e.prototype.setOffset=function(r,e,m,h,f){var d=this.axis,t=d.chart;h=d.translate(d.stacking.usePercentage?100:h?h:this.total,0,0,0,1);m=d.translate(m?m:0);m=J(h)&&Math.abs(h-m);
r=M(f,t.xAxis[0].translate(this.x))+r;d=J(h)&&this.getStackBox(t,this,r,h,e,m,d);e=this.label;m=this.isNegative;r="justify"===M(this.options.overflow,"justify");var l=this.textAlign;e&&d&&(f=e.getBBox(),h=e.padding,l="left"===l?t.inverted?-h:h:"right"===l?f.width:t.inverted&&"center"===l?f.width/2:t.inverted?m?f.width+h:-h:f.width/2,m=t.inverted?f.height/2:m?-h:f.height,this.alignOptions.x=M(this.options.x,0),this.alignOptions.y=M(this.options.y,0),d.x-=l,d.y-=m,e.align(this.alignOptions,null,d),
t.isInsidePlot(e.alignAttr.x+l-this.alignOptions.x,e.alignAttr.y+m-this.alignOptions.y)?e.show():(e.alignAttr.y=-9999,r=!1),r&&A.prototype.justifyDataLabel.call(this.axis,e,this.alignOptions,e.alignAttr,f,d),e.attr({x:e.alignAttr.x,y:e.alignAttr.y}),M(!r&&this.options.crop,!0)&&((t=H(e.x)&&H(e.y)&&t.isInsidePlot(e.x-h+e.width,e.y)&&t.isInsidePlot(e.x+h,e.y))||e.hide()))};e.prototype.getStackBox=function(e,m,w,h,f,d,t){var l=m.axis.reversed,c=e.inverted,a=t.height+t.pos-(c?e.plotLeft:e.plotTop);m=
m.isNegative&&!l||!m.isNegative&&l;return{x:c?m?h-t.right:h-d+t.pos-e.plotLeft:w+e.xAxis[0].transB-e.plotLeft,y:c?t.height-w-f:m?a-h-d:a-h,width:c?d:f,height:c?f:d}};return e}();e.prototype.getStacks=function(){var e=this,r=e.inverted;e.yAxis.forEach(function(e){e.stacking&&e.stacking.stacks&&e.hasVisibleSeries&&(e.stacking.oldStacks=e.stacking.stacks)});e.series.forEach(function(m){var u=m.xAxis&&m.xAxis.options||{};!m.options.stacking||!0!==m.visible&&!1!==e.options.chart.ignoreHiddenSeries||(m.stackKey=
[m.type,M(m.options.stack,""),r?u.top:u.left,r?u.height:u.width].join())})};B.compose(p);A.prototype.setGroupedPoints=function(){this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length&&A.prototype.setStackedPoints.call(this,"group")};A.prototype.setStackedPoints=function(e){var r=e||this.options.stacking;if(r&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var m=this.processedXData,w=this.processedYData,
h=[],f=w.length,d=this.options,t=d.threshold,l=M(d.startFromThreshold&&t,0);d=d.stack;e=e?this.type+","+r:this.stackKey;var c="-"+e,a=this.negStacks,x=this.yAxis,v=x.stacking.stacks,E=x.stacking.oldStacks,F,k;x.stacking.stacksTouched+=1;for(k=0;k<f;k++){var y=m[k];var I=w[k];var p=this.getStackIndicator(p,y,this.index);var g=p.key;var b=(F=a&&I<(l?0:t))?c:e;v[b]||(v[b]={});v[b][y]||(E[b]&&E[b][y]?(v[b][y]=E[b][y],v[b][y].total=null):v[b][y]=new K(x,x.options.stackLabels,F,y,d));b=v[b][y];null!==I?
(b.points[g]=b.points[this.index]=[M(b.cumulative,l)],J(b.cumulative)||(b.base=g),b.touched=x.stacking.stacksTouched,0<p.index&&!1===this.singleStacks&&(b.points[g][0]=b.points[this.index+","+y+",0"][0])):b.points[g]=b.points[this.index]=null;"percent"===r?(F=F?e:c,a&&v[F]&&v[F][y]?(F=v[F][y],b.total=F.total=Math.max(F.total,b.total)+Math.abs(I)||0):b.total=z(b.total+(Math.abs(I)||0))):"group"===r?null!==I&&(b.total=(b.total||0)+1):b.total=z(b.total+(I||0));b.cumulative="group"===r?(b.total||1)-1:
M(b.cumulative,l)+(I||0);null!==I&&(b.points[g].push(b.cumulative),h[k]=b.cumulative,b.hasValidPoints=!0)}"percent"===r&&(x.stacking.usePercentage=!0);"group"!==r&&(this.stackedYData=h);x.stacking.oldStacks={}}};A.prototype.modifyStacks=function(){var e=this,r=e.stackKey,m=e.yAxis.stacking.stacks,p=e.processedXData,h,f=e.options.stacking;e[f+"Stacker"]&&[r,"-"+r].forEach(function(d){for(var t=p.length,l,c;t--;)if(l=p[t],h=e.getStackIndicator(h,l,e.index,d),c=(l=m[d]&&m[d][l])&&l.points[h.key])e[f+
"Stacker"](c,l,t)})};A.prototype.percentStacker=function(e,m,u){m=m.total?100/m.total:0;e[0]=z(e[0]*m);e[1]=z(e[1]*m);this.stackedYData[u]=e[1]};A.prototype.getStackIndicator=function(e,m,u,p){!J(e)||e.x!==m||p&&e.key!==p?e={x:m,index:0,key:p}:e.index++;e.key=[u,m,e.index].join();return e};q.StackItem=K;return q.StackItem});O(q,"parts/Dynamics.js",[q["parts/Axis.js"],q["parts/Chart.js"],q["parts/Globals.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/Time.js"],q["parts/Utilities.js"]],function(p,
e,q,B,D,z,J){var G=B.time,m=J.addEvent,H=J.animate,M=J.createElement,A=J.css,K=J.defined,w=J.erase,r=J.error,u=J.extend,C=J.fireEvent,h=J.isArray,f=J.isNumber,d=J.isObject,t=J.isString,l=J.merge,c=J.objectEach,a=J.pick,x=J.relativeLength,v=J.setAnimation,E=J.splat;B=q.Series;var F=q.seriesTypes;q.cleanRecursively=function(a,f){var k={};c(a,function(c,g){if(d(a[g],!0)&&!a.nodeType&&f[g])c=q.cleanRecursively(a[g],f[g]),Object.keys(c).length&&(k[g]=c);else if(d(a[g])||a[g]!==f[g])k[g]=a[g]});return k};
u(e.prototype,{addSeries:function(c,d,f){var k,g=this;c&&(d=a(d,!0),C(g,"addSeries",{options:c},function(){k=g.initSeries(c);g.isDirtyLegend=!0;g.linkSeries();k.enabledDataSorting&&k.setData(c.data,!1);C(g,"afterAddSeries",{series:k});d&&g.redraw(f)}));return k},addAxis:function(a,c,d,f){return this.createAxis(c?"xAxis":"yAxis",{axis:a,redraw:d,animation:f})},addColorAxis:function(a,c,d){return this.createAxis("colorAxis",{axis:a,redraw:c,animation:d})},createAxis:function(c,d){var k=this.options,
f="colorAxis"===c,g=d.redraw,b=d.animation;d=l(d.axis,{index:this[c].length,isX:"xAxis"===c});var n=f?new q.ColorAxis(this,d):new p(this,d);k[c]=E(k[c]||{});k[c].push(d);f&&(this.isDirtyLegend=!0,this.axes.forEach(function(a){a.series=[]}),this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0}));a(g,!0)&&this.redraw(b);return n},showLoading:function(c){var d=this,k=d.options,f=d.loadingDiv,g=k.loading,b=function(){f&&A(f,{left:d.plotLeft+"px",top:d.plotTop+"px",width:d.plotWidth+"px",height:d.plotHeight+
"px"})};f||(d.loadingDiv=f=M("div",{className:"highcharts-loading highcharts-loading-hidden"},null,d.container),d.loadingSpan=M("span",{className:"highcharts-loading-inner"},null,f),m(d,"redraw",b));f.className="highcharts-loading";d.loadingSpan.innerHTML=a(c,k.lang.loading,"");d.styledMode||(A(f,u(g.style,{zIndex:10})),A(d.loadingSpan,g.labelStyle),d.loadingShown||(A(f,{opacity:0,display:""}),H(f,{opacity:g.style.opacity||.5},{duration:g.showDuration||0})));d.loadingShown=!0;b()},hideLoading:function(){var a=
this.options,c=this.loadingDiv;c&&(c.className="highcharts-loading highcharts-loading-hidden",this.styledMode||H(c,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){A(c,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:["xAxis","yAxis","zAxis","series"],update:function(d,h,e,v){var g=this,b={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},k,y,m,r=d.isResponsiveOptions,u=[];C(g,"update",{options:d});r||g.setResponsive(!1,!0);d=q.cleanRecursively(d,g.options);l(!0,g.userOptions,d);if(k=d.chart){l(!0,g.options.chart,k);"className"in
k&&g.setClassName(k.className);"reflow"in k&&g.setReflow(k.reflow);if("inverted"in k||"polar"in k||"type"in k){g.propFromSeries();var F=!0}"alignTicks"in k&&(F=!0);c(k,function(a,b){-1!==g.propsRequireUpdateSeries.indexOf("chart."+b)&&(y=!0);-1!==g.propsRequireDirtyBox.indexOf(b)&&(g.isDirtyBox=!0);-1!==g.propsRequireReflow.indexOf(b)&&(r?g.isDirtyBox=!0:m=!0)});!g.styledMode&&"style"in k&&g.renderer.setStyle(k.style)}!g.styledMode&&d.colors&&(this.options.colors=d.colors);d.plotOptions&&l(!0,this.options.plotOptions,
d.plotOptions);d.time&&this.time===G&&(this.time=new z(d.time));c(d,function(a,c){if(g[c]&&"function"===typeof g[c].update)g[c].update(a,!1);else if("function"===typeof g[b[c]])g[b[c]](a);"chart"!==c&&-1!==g.propsRequireUpdateSeries.indexOf(c)&&(y=!0)});this.collectionsWithUpdate.forEach(function(b){if(d[b]){if("series"===b){var c=[];g[b].forEach(function(b,d){b.options.isInternal||c.push(a(b.options.index,d))})}E(d[b]).forEach(function(a,d){var k=K(a.id),f;k&&(f=g.get(a.id));f||(f=g[b][c?c[d]:d])&&
k&&K(f.options.id)&&(f=void 0);f&&f.coll===b&&(f.update(a,!1),e&&(f.touched=!0));!f&&e&&g.collectionsWithInit[b]&&(g.collectionsWithInit[b][0].apply(g,[a].concat(g.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});e&&g[b].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:u.push(a)})}});u.forEach(function(a){a.remove&&a.remove(!1)});F&&g.axes.forEach(function(a){a.update({},!1)});y&&g.getSeriesOrderByLinks().forEach(function(a){a.chart&&a.update({},!1)},this);d.loading&&
l(!0,g.options.loading,d.loading);F=k&&k.width;k=k&&k.height;t(k)&&(k=x(k,F||g.chartWidth));m||f(F)&&F!==g.chartWidth||f(k)&&k!==g.chartHeight?g.setSize(F,k,v):a(h,!0)&&g.redraw(v);C(g,"afterUpdate",{options:d,redraw:h,animation:v})},setSubtitle:function(a,c){this.applyDescription("subtitle",a);this.layOutTitles(c)},setCaption:function(a,c){this.applyDescription("caption",a);this.layOutTitles(c)}});e.prototype.collectionsWithInit={xAxis:[e.prototype.addAxis,[!0]],yAxis:[e.prototype.addAxis,[!1]],
series:[e.prototype.addSeries]};u(D.prototype,{update:function(c,f,l,h){function g(){b.applyOptions(c);var g=t&&b.hasDummyGraphic;g=null===b.y?!g:g;t&&g&&(b.graphic=t.destroy(),delete b.hasDummyGraphic);d(c,!0)&&(t&&t.element&&c&&c.marker&&"undefined"!==typeof c.marker.symbol&&(b.graphic=t.destroy()),c&&c.dataLabels&&b.dataLabel&&(b.dataLabel=b.dataLabel.destroy()),b.connector&&(b.connector=b.connector.destroy()));e=b.index;k.updateParallelArrays(b,e);m.data[e]=d(m.data[e],!0)||d(c,!0)?b.options:
a(c,m.data[e]);k.isDirty=k.isDirtyData=!0;!k.fixedBox&&k.hasCartesianSeries&&(v.isDirtyBox=!0);"point"===m.legendType&&(v.isDirtyLegend=!0);f&&v.redraw(l)}var b=this,k=b.series,t=b.graphic,e,v=k.chart,m=k.options;f=a(f,!0);!1===h?g():b.firePointEvent("update",{options:c},g)},remove:function(a,c){this.series.removePoint(this.series.data.indexOf(this),a,c)}});u(B.prototype,{addPoint:function(c,d,f,l,g){var b=this.options,k=this.data,h=this.chart,t=this.xAxis;t=t&&t.hasNames&&t.names;var e=b.data,v=
this.xData,m;d=a(d,!0);var y={series:this};this.pointClass.prototype.applyOptions.apply(y,[c]);var r=y.x;var x=v.length;if(this.requireSorting&&r<v[x-1])for(m=!0;x&&v[x-1]>r;)x--;this.updateParallelArrays(y,"splice",x,0,0);this.updateParallelArrays(y,x);t&&y.name&&(t[r]=y.name);e.splice(x,0,c);m&&(this.data.splice(x,0,null),this.processData());"point"===b.legendType&&this.generatePoints();f&&(k[0]&&k[0].remove?k[0].remove(!1):(k.shift(),this.updateParallelArrays(y,"shift"),e.shift()));!1!==g&&C(this,
"addPoint",{point:y});this.isDirtyData=this.isDirty=!0;d&&h.redraw(l)},removePoint:function(c,d,f){var k=this,g=k.data,b=g[c],n=k.points,l=k.chart,h=function(){n&&n.length===g.length&&n.splice(c,1);g.splice(c,1);k.options.data.splice(c,1);k.updateParallelArrays(b||{series:k},"splice",c,1);b&&b.destroy();k.isDirty=!0;k.isDirtyData=!0;d&&l.redraw()};v(f,l);d=a(d,!0);b?b.firePointEvent("remove",null,h):h()},remove:function(c,d,f,l){function g(){b.destroy(l);b.remove=null;k.isDirtyLegend=k.isDirtyBox=
!0;k.linkSeries();a(c,!0)&&k.redraw(d)}var b=this,k=b.chart;!1!==f?C(b,"remove",null,g):g()},update:function(c,d){c=q.cleanRecursively(c,this.userOptions);C(this,"update",{options:c});var k=this,f=k.chart,g=k.userOptions,b=k.initialType||k.type,n=c.type||g.type||f.options.chart.type,h=!(this.hasDerivedData||c.dataGrouping||n&&n!==this.type||"undefined"!==typeof c.pointStart||c.pointInterval||c.pointIntervalUnit||c.keys),t=F[b].prototype,e,v=["eventOptions","navigatorSeries","baseSeries"],m=k.finishedAnimating&&
{animation:!1},y={};h&&(v.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==c.visible&&v.push("area","graph"),k.parallelArrays.forEach(function(a){v.push(a+"Data")}),c.data&&(c.dataSorting&&u(k.options.dataSorting,c.dataSorting),this.setData(c.data,!1)));c=l(g,m,{index:"undefined"===typeof g.index?k.index:g.index,pointStart:a(g.pointStart,k.xData[0])},!h&&{data:k.options.data},
c);h&&c.data&&(c.data=k.options.data);v=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(v);v.forEach(function(a){v[a]=k[a];delete k[a]});k.remove(!1,null,!1,!0);for(e in t)k[e]=void 0;F[n||b]?u(k,F[n||b].prototype):r(17,!0,f,{missingModuleFor:n||b});v.forEach(function(a){k[a]=v[a]});k.init(f,c);if(h&&this.points){var x=k.options;!1===x.visible?(y.graphic=1,y.dataLabel=1):k._hasPointLabels||(c=x.marker,g=x.dataLabels,c&&(!1===c.enabled||"symbol"in c)&&(y.graphic=1),g&&!1===g.enabled&&
(y.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(y).length&&a.destroyElements(y),!1===x.showInLegend&&a.legendItem&&f.legend.destroyItem(a))},this)}k.initialType=b;f.linkSeries();C(this,"afterUpdate");a(d,!0)&&f.redraw(h?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});u(p.prototype,{update:function(d,f){var k=this.chart,h=d&&d.events||{};d=l(this.userOptions,d);k.options[this.coll].indexOf&&
(k.options[this.coll][k.options[this.coll].indexOf(this.userOptions)]=d);c(k.options[this.coll].events,function(a,b){"undefined"===typeof h[b]&&(h[b]=void 0)});this.destroy(!0);this.init(k,u(d,{events:h}));k.isDirtyBox=!0;a(f,!0)&&k.redraw()},remove:function(c){for(var d=this.chart,k=this.coll,f=this.series,g=f.length;g--;)f[g]&&f[g].remove(!1);w(d.axes,this);w(d[k],this);h(d.options[k])?d.options[k].splice(this.options.index,1):delete d.options[k];d[k].forEach(function(a,c){a.options.index=a.userOptions.index=
c});this.destroy();d.isDirtyBox=!0;a(c,!0)&&d.redraw()},setTitle:function(a,c){this.update({title:a},c)},setCategories:function(a,c){this.update({categories:a},c)}})});O(q,"parts/AreaSeries.js",[q["parts/Globals.js"],q["parts/Color.js"],q["mixins/legend-symbol.js"],q["parts/Utilities.js"]],function(p,e,q,B){var D=e.parse,z=B.objectEach,J=B.pick;e=B.seriesType;var G=p.Series;e("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(e){var m=[],p=[],q=this.xAxis,K=this.yAxis,
w=K.stacking.stacks[this.stackKey],r={},u=this.index,C=K.series,h=C.length,f=J(K.options.reversedStacks,!0)?1:-1,d;e=e||this.points;if(this.options.stacking){for(d=0;d<e.length;d++)e[d].leftNull=e[d].rightNull=void 0,r[e[d].x]=e[d];z(w,function(d,c){null!==d.total&&p.push(c)});p.sort(function(d,c){return d-c});var t=C.map(function(d){return d.visible});p.forEach(function(l,c){var a=0,e,v;if(r[l]&&!r[l].isNull)m.push(r[l]),[-1,1].forEach(function(a){var m=1===a?"rightNull":"leftNull",k=0,y=w[p[c+a]];
if(y)for(d=u;0<=d&&d<h;)e=y.points[d],e||(d===u?r[l][m]=!0:t[d]&&(v=w[l].points[d])&&(k-=v[1]-v[0])),d+=f;r[l][1===a?"rightCliff":"leftCliff"]=k});else{for(d=u;0<=d&&d<h;){if(e=w[l].points[d]){a=e[1];break}d+=f}a=K.translate(a,0,1,0,1);m.push({isNull:!0,plotX:q.translate(l,0,0,0,1),x:l,plotY:a,yBottom:a})}})}return m},getGraphPath:function(e){var m=G.prototype.getGraphPath,p=this.options,q=p.stacking,z=this.yAxis,w,r=[],u=[],C=this.index,h=z.stacking.stacks[this.stackKey],f=p.threshold,d=Math.round(z.getThreshold(p.threshold));
p=J(p.connectNulls,"percent"===q);var t=function(a,l,t){var v=e[a];a=q&&h[v.x].points[C];var k=v[t+"Null"]||0;t=v[t+"Cliff"]||0;v=!0;if(t||k){var m=(k?a[0]:a[1])+t;var x=a[0]+t;v=!!k}else!q&&e[l]&&e[l].isNull&&(m=x=f);"undefined"!==typeof m&&(u.push({plotX:c,plotY:null===m?d:z.getThreshold(m),isNull:v,isCliff:!0}),r.push({plotX:c,plotY:null===x?d:z.getThreshold(x),doCurve:!1}))};e=e||this.points;q&&(e=this.getStackPoints(e));for(w=0;w<e.length;w++){q||(e[w].leftCliff=e[w].rightCliff=e[w].leftNull=
e[w].rightNull=void 0);var l=e[w].isNull;var c=J(e[w].rectPlotX,e[w].plotX);var a=J(e[w].yBottom,d);if(!l||p)p||t(w,w-1,"left"),l&&!q&&p||(u.push(e[w]),r.push({x:w,plotX:c,plotY:a})),p||t(w,w+1,"right")}w=m.call(this,u,!0,!0);r.reversed=!0;l=m.call(this,r,!0,!0);(a=l[0])&&"M"===a[0]&&(l[0]=["L",a[1],a[2]]);l=w.concat(l);m=m.call(this,u,!1,p);l.xMap=w.xMap;this.areaPath=l;return m},drawGraph:function(){this.areaPath=[];G.prototype.drawGraph.apply(this);var e=this,p=this.areaPath,q=this.options,A=[["area",
"highcharts-area",this.color,q.fillColor]];this.zones.forEach(function(m,p){A.push(["zone-area-"+p,"highcharts-area highcharts-zone-area-"+p+" "+m.className,m.color||e.color,m.fillColor||q.fillColor])});A.forEach(function(m){var w=m[0],r=e[w],u=r?"animate":"attr",C={};r?(r.endX=e.preventGraphAnimation?null:p.xMap,r.animate({d:p})):(C.zIndex=0,r=e[w]=e.chart.renderer.path(p).addClass(m[1]).add(e.group),r.isArea=!0);e.chart.styledMode||(C.fill=J(m[3],D(m[2]).setOpacity(J(q.fillOpacity,.75)).get()));
r[u](C);r.startX=p.xMap;r.shiftUnit=q.step?2:1})},drawLegendSymbol:q.drawRectangle});""});O(q,"parts/SplineSeries.js",[q["parts/Utilities.js"]],function(p){var e=p.pick;p=p.seriesType;p("spline","line",{},{getPointSpline:function(p,q,D){var z=q.plotX||0,B=q.plotY||0,G=p[D-1];D=p[D+1];if(G&&!G.isNull&&!1!==G.doCurve&&!q.isCliff&&D&&!D.isNull&&!1!==D.doCurve&&!q.isCliff){p=G.plotY||0;var m=D.plotX||0;D=D.plotY||0;var H=0;var M=(1.5*z+(G.plotX||0))/2.5;var A=(1.5*B+p)/2.5;m=(1.5*z+m)/2.5;var K=(1.5*
B+D)/2.5;m!==M&&(H=(K-A)*(m-z)/(m-M)+B-K);A+=H;K+=H;A>p&&A>B?(A=Math.max(p,B),K=2*B-A):A<p&&A<B&&(A=Math.min(p,B),K=2*B-A);K>D&&K>B?(K=Math.max(D,B),A=2*B-K):K<D&&K<B&&(K=Math.min(D,B),A=2*B-K);q.rightContX=m;q.rightContY=K}q=["C",e(G.rightContX,G.plotX,0),e(G.rightContY,G.plotY,0),e(M,z,0),e(A,B,0),z,B];G.rightContX=G.rightContY=void 0;return q}});""});O(q,"parts/AreaSplineSeries.js",[q["parts/Globals.js"],q["mixins/legend-symbol.js"],q["parts/Options.js"],q["parts/Utilities.js"]],function(p,e,q,
B){B=B.seriesType;p=p.seriesTypes.area.prototype;B("areaspline","spline",q.defaultOptions.plotOptions.area,{getStackPoints:p.getStackPoints,getGraphPath:p.getGraphPath,drawGraph:p.drawGraph,drawLegendSymbol:e.drawRectangle});""});O(q,"parts/ColumnSeries.js",[q["parts/Globals.js"],q["parts/Color.js"],q["mixins/legend-symbol.js"],q["parts/Utilities.js"]],function(p,e,q,B){"";var D=e.parse,z=B.animObject,J=B.clamp,G=B.defined,m=B.extend,H=B.isNumber,M=B.merge,A=B.pick;e=B.seriesType;var K=p.Series;e("column",
"line",{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){K.prototype.init.apply(this,
arguments);var e=this,m=e.chart;m.hasRendered&&m.series.forEach(function(m){m.type===e.type&&(m.isDirty=!0)})},getColumnMetrics:function(){var e=this,m=e.options,u=e.xAxis,p=e.yAxis,h=u.options.reversedStacks;h=u.reversed&&!h||!u.reversed&&h;var f,d={},t=0;!1===m.grouping?t=1:e.chart.series.forEach(function(a){var c=a.yAxis,h=a.options;if(a.type===e.type&&(a.visible||!e.chart.options.chart.ignoreHiddenSeries)&&p.len===c.len&&p.pos===c.pos){if(h.stacking&&"group"!==h.stacking){f=a.stackKey;"undefined"===
typeof d[f]&&(d[f]=t++);var l=d[f]}else!1!==h.grouping&&(l=t++);a.columnIndex=l}});var l=Math.min(Math.abs(u.transA)*(u.ordinal&&u.ordinal.slope||m.pointRange||u.closestPointRange||u.tickInterval||1),u.len),c=l*m.groupPadding,a=(l-2*c)/(t||1);m=Math.min(m.maxPointWidth||u.len,A(m.pointWidth,a*(1-2*m.pointPadding)));e.columnMetrics={width:m,offset:(a-m)/2+(c+((e.columnIndex||0)+(h?1:0))*a-l/2)*(h?-1:1),paddedWidth:a,columnCount:t};return e.columnMetrics},crispCol:function(e,m,u,p){var h=this.chart,
f=this.borderWidth,d=-(f%2?.5:0);f=f%2?.5:1;h.inverted&&h.renderer.isVML&&(f+=1);this.options.crisp&&(u=Math.round(e+u)+d,e=Math.round(e)+d,u-=e);p=Math.round(m+p)+f;d=.5>=Math.abs(m)&&.5<p;m=Math.round(m)+f;p-=m;d&&p&&(--m,p+=1);return{x:e,y:m,width:u,height:p}},adjustForMissingColumns:function(e,m,u,q){var h=this,f=this.options.stacking;if(!u.isNull&&1<q.columnCount){var d=0,t=0;Highcharts.objectEach(this.yAxis.stacking&&this.yAxis.stacking.stacks,function(l){if("number"===typeof u.x&&(l=l[u.x.toString()])){var c=
l.points[h.index],a=l.total;f?(c&&(d=t),l.hasValidPoints&&t++):p.isArray(c)&&(d=c[1],t=a||0)}});e=(u.plotX||0)+((t-1)*q.paddedWidth+m)/2-m-d*q.paddedWidth}return e},translate:function(){var e=this,m=e.chart,u=e.options,p=e.dense=2>e.closestPointRange*e.xAxis.transA;p=e.borderWidth=A(u.borderWidth,p?0:1);var h=e.xAxis,f=e.yAxis,d=u.threshold,t=e.translatedThreshold=f.getThreshold(d),l=A(u.minPointLength,5),c=e.getColumnMetrics(),a=c.width,x=e.barW=Math.max(a,1+2*p),v=e.pointXOffset=c.offset,q=e.dataMin,
F=e.dataMax;m.inverted&&(t-=.5);u.pointPadding&&(x=Math.ceil(x));K.prototype.translate.apply(e);e.points.forEach(function(k){var y=A(k.yBottom,t),r=999+Math.abs(y),p=a,g=k.plotX||0;r=J(k.plotY,-r,f.len+r);var b=g+v,n=x,E=Math.min(r,y),w=Math.max(r,y)-E;if(l&&Math.abs(w)<l){w=l;var C=!f.reversed&&!k.negative||f.reversed&&k.negative;H(d)&&H(F)&&k.y===d&&F<=d&&(f.min||0)<d&&q!==F&&(C=!C);E=Math.abs(E-t)>l?y-l:t-(C?l:0)}G(k.options.pointWidth)&&(p=n=Math.ceil(k.options.pointWidth),b-=Math.round((p-a)/
2));u.centerInCategory&&(b=e.adjustForMissingColumns(b,p,k,c));k.barX=b;k.pointWidth=p;k.tooltipPos=m.inverted?[f.len+f.pos-m.plotLeft-r,h.len+h.pos-m.plotTop-(g||0)-v-n/2,w]:[b+n/2,r+f.pos-m.plotTop,w];k.shapeType=e.pointClass.prototype.shapeType||"rect";k.shapeArgs=e.crispCol.apply(e,k.isNull?[b,t,n,0]:[b,E,n,w])})},getSymbol:p.noop,drawLegendSymbol:q.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(e,m){var r=this.options,
p=this.pointAttrToOptions||{};var h=p.stroke||"borderColor";var f=p["stroke-width"]||"borderWidth",d=e&&e.color||this.color,t=e&&e[h]||r[h]||this.color||d,l=e&&e[f]||r[f]||this[f]||0;p=e&&e.options.dashStyle||r.dashStyle;var c=A(e&&e.opacity,r.opacity,1);if(e&&this.zones.length){var a=e.getZone();d=e.options.color||a&&(a.color||e.nonZonedColor)||this.color;a&&(t=a.borderColor||t,p=a.dashStyle||p,l=a.borderWidth||l)}m&&e&&(e=M(r.states[m],e.options.states&&e.options.states[m]||{}),m=e.brightness,d=
e.color||"undefined"!==typeof m&&D(d).brighten(e.brightness).get()||d,t=e[h]||t,l=e[f]||l,p=e.dashStyle||p,c=A(e.opacity,c));h={fill:d,stroke:t,"stroke-width":l,opacity:c};p&&(h.dashstyle=p);return h},drawPoints:function(){var e=this,m=this.chart,u=e.options,p=m.renderer,h=u.animationLimit||250,f;e.points.forEach(function(d){var t=d.graphic,l=!!t,c=t&&m.pointCount<h?"animate":"attr";if(H(d.plotY)&&null!==d.y){f=d.shapeArgs;t&&d.hasNewShapeType()&&(t=t.destroy());e.enabledDataSorting&&(d.startXPos=
e.xAxis.reversed?-(f?f.width:0):e.xAxis.width);t||(d.graphic=t=p[d.shapeType](f).add(d.group||e.group))&&e.enabledDataSorting&&m.hasRendered&&m.pointCount<h&&(t.attr({x:d.startXPos}),l=!0,c="animate");if(t&&l)t[c](M(f));if(u.borderRadius)t[c]({r:u.borderRadius});m.styledMode||t[c](e.pointAttribs(d,d.selected&&"select")).shadow(!1!==d.allowShadow&&u.shadow,null,u.stacking&&!u.borderRadius);t.addClass(d.getClassName(),!0)}else t&&(d.graphic=t.destroy())})},animate:function(e){var r=this,u=this.yAxis,
p=r.options,h=this.chart.inverted,f={},d=h?"translateX":"translateY";if(e)f.scaleY=.001,e=J(u.toPixels(p.threshold),u.pos,u.pos+u.len),h?f.translateX=e-u.len:f.translateY=e,r.clipBox&&r.setClip(),r.group.attr(f);else{var t=r.group.attr(d);r.group.animate({scaleY:1},m(z(r.options.animation),{step:function(h,c){r.group&&(f[d]=t+c.pos*(u.pos-t),r.group.attr(f))}}))}},remove:function(){var e=this,m=e.chart;m.hasRendered&&m.series.forEach(function(m){m.type===e.type&&(m.isDirty=!0)});K.prototype.remove.apply(e,
arguments)}});""});O(q,"parts/BarSeries.js",[q["parts/Utilities.js"]],function(p){p=p.seriesType;p("bar","column",null,{inverted:!0});""});O(q,"parts/ScatterSeries.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.addEvent;e=e.seriesType;var B=p.Series;e("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this)},applyJitter:function(){var e=this,p=this.options.jitter,q=this.points.length;p&&this.points.forEach(function(z,m){["x","y"].forEach(function(B,G){var A="plot"+B.toUpperCase();if(p[B]&&!z.isNull){var K=e[B+"Axis"];var w=p[B]*K.transA;if(K&&!K.isLog){var r=Math.max(0,z[A]-w);K=Math.min(K.len,z[A]+
w);G=1E4*Math.sin(m+G*q);z[A]=r+(K-r)*(G-Math.floor(G));"x"===B&&(z.clientX=z.plotX)}}})})}});q(B,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});""});O(q,"mixins/centered-series.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.isNumber,B=e.pick,D=e.relativeLength,z=p.deg2rad;p.CenteredSeriesMixin={getCenter:function(){var e=this.options,q=this.chart,m=2*(e.slicedOffset||0),z=q.plotWidth-2*m,M=q.plotHeight-2*m,A=e.center,K=Math.min(z,M),w=e.size,r=e.innerSize||
0;"string"===typeof w&&(w=parseFloat(w));"string"===typeof r&&(r=parseFloat(r));e=[B(A[0],"50%"),B(A[1],"50%"),B(w&&0>w?void 0:e.size,"100%"),B(r&&0>r?void 0:e.innerSize||0,"0%")];!q.angular||this instanceof p.Series||(e[3]=0);for(A=0;4>A;++A)w=e[A],q=2>A||2===A&&/%$/.test(w),e[A]=D(w,[z,M,K,e[2]][A])+(q?m:0);e[3]>e[2]&&(e[3]=e[2]);return e},getStartAndEndRadians:function(e,p){e=q(e)?e:0;p=q(p)&&p>e&&360>p-e?p:e+360;return{start:z*(e+-90),end:z*(p+-90)}}}});O(q,"parts/PieSeries.js",[q["parts/Globals.js"],
q["mixins/legend-symbol.js"],q["parts/Point.js"],q["parts/Utilities.js"]],function(p,e,q,B){var D=B.addEvent,z=B.clamp,J=B.defined,G=B.fireEvent,m=B.isNumber,H=B.merge,M=B.pick,A=B.relativeLength,K=B.seriesType,w=B.setAnimation;B=p.CenteredSeriesMixin;var r=B.getStartAndEndRadians,u=p.noop,C=p.Series;K("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?
void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:p.seriesTypes.column.prototype.pointAttribs,animate:function(h){var f=
this,d=f.points,e=f.startAngleRad;h||d.forEach(function(d){var c=d.graphic,a=d.shapeArgs;c&&a&&(c.attr({r:M(d.startR,f.center&&f.center[3]/2),start:e,end:e}),c.animate({r:a.r,start:a.start,end:a.end},f.options.animation))})},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var h,f=0,d=this.points,e=d.length,l=this.options.ignoreHiddenPoint;for(h=0;h<e;h++){var c=d[h];f+=l&&!c.visible?0:c.isNull?0:c.y}this.total=f;for(h=0;h<e;h++)c=d[h],c.percentage=0<f&&(c.visible||!l)?
c.y/f*100:0,c.total=f},generatePoints:function(){C.prototype.generatePoints.call(this);this.updateTotals()},getX:function(h,f,d){var e=this.center,l=this.radii?this.radii[d.index]:e[2]/2;h=Math.asin(z((h-e[1])/(l+d.labelDistance),-1,1));return e[0]+(f?-1:1)*Math.cos(h)*(l+d.labelDistance)+(0<d.labelDistance?(f?-1:1)*this.options.dataLabels.padding:0)},translate:function(h){this.generatePoints();var f=0,d=this.options,e=d.slicedOffset,l=e+(d.borderWidth||0),c=r(d.startAngle,d.endAngle),a=this.startAngleRad=
c.start;c=(this.endAngleRad=c.end)-a;var m=this.points,v=d.dataLabels.distance;d=d.ignoreHiddenPoint;var u,F=m.length;h||(this.center=h=this.getCenter());for(u=0;u<F;u++){var k=m[u];var y=a+f*c;if(!d||k.visible)f+=k.percentage/100;var p=a+f*c;k.shapeType="arc";k.shapeArgs={x:h[0],y:h[1],r:h[2]/2,innerR:h[3]/2,start:Math.round(1E3*y)/1E3,end:Math.round(1E3*p)/1E3};k.labelDistance=M(k.options.dataLabels&&k.options.dataLabels.distance,v);k.labelDistance=A(k.labelDistance,k.shapeArgs.r);this.maxLabelDistance=
Math.max(this.maxLabelDistance||0,k.labelDistance);p=(p+y)/2;p>1.5*Math.PI?p-=2*Math.PI:p<-Math.PI/2&&(p+=2*Math.PI);k.slicedTranslation={translateX:Math.round(Math.cos(p)*e),translateY:Math.round(Math.sin(p)*e)};var q=Math.cos(p)*h[2]/2;var g=Math.sin(p)*h[2]/2;k.tooltipPos=[h[0]+.7*q,h[1]+.7*g];k.half=p<-Math.PI/2||p>Math.PI/2?1:0;k.angle=p;y=Math.min(l,k.labelDistance/5);k.labelPosition={natural:{x:h[0]+q+Math.cos(p)*k.labelDistance,y:h[1]+g+Math.sin(p)*k.labelDistance},"final":{},alignment:0>
k.labelDistance?"center":k.half?"right":"left",connectorPosition:{breakAt:{x:h[0]+q+Math.cos(p)*y,y:h[1]+g+Math.sin(p)*y},touchingSliceAt:{x:h[0]+q,y:h[1]+g}}}}G(this,"afterTranslate")},drawEmpty:function(){var h=this.startAngleRad,f=this.endAngleRad,d=this.options;if(0===this.total){var e=this.center[0];var l=this.center[1];this.graph||(this.graph=this.chart.renderer.arc(e,l,this.center[1]/2,0,h,f).addClass("highcharts-empty-series").add(this.group));this.graph.attr({d:Highcharts.SVGRenderer.prototype.symbols.arc(e,
l,this.center[2]/2,0,{start:h,end:f,innerR:this.center[3]/2})});this.chart.styledMode||this.graph.attr({"stroke-width":d.borderWidth,fill:d.fillColor||"none",stroke:d.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var h=this,f=h.chart,d=f.renderer,e,l,c,a,m=h.options.shadow;this.drawEmpty();!m||h.shadowGroup||f.styledMode||(h.shadowGroup=d.g("shadow").attr({zIndex:-1}).add(h.group));h.points.forEach(function(t){var v={};l=t.graphic;if(!t.isNull&&l){a=
t.shapeArgs;e=t.getTranslate();if(!f.styledMode){var r=t.shadowGroup;m&&!r&&(r=t.shadowGroup=d.g("shadow").add(h.shadowGroup));r&&r.attr(e);c=h.pointAttribs(t,t.selected&&"select")}t.delayedRendering?(l.setRadialReference(h.center).attr(a).attr(e),f.styledMode||l.attr(c).attr({"stroke-linejoin":"round"}).shadow(m,r),t.delayedRendering=!1):(l.setRadialReference(h.center),f.styledMode||H(!0,v,c),H(!0,v,a,e),l.animate(v));l.attr({visibility:t.visible?"inherit":"hidden"});l.addClass(t.getClassName())}else l&&
(t.graphic=l.destroy())})},drawPoints:function(){var h=this.chart.renderer;this.points.forEach(function(f){f.graphic&&f.hasNewShapeType()&&(f.graphic=f.graphic.destroy());f.graphic||(f.graphic=h[f.shapeType](f.shapeArgs).add(f.series.group),f.delayedRendering=!0)})},searchPoint:u,sortByAngle:function(h,f){h.sort(function(d,h){return"undefined"!==typeof d.angle&&(h.angle-d.angle)*f})},drawLegendSymbol:e.drawRectangle,getCenter:B.getCenter,getSymbol:u,drawGraph:null},{init:function(){q.prototype.init.apply(this,
arguments);var h=this;h.name=M(h.name,"Slice");var f=function(d){h.slice("select"===d.type)};D(h,"select",f);D(h,"unselect",f);return h},isValid:function(){return m(this.y)&&0<=this.y},setVisible:function(h,f){var d=this,e=d.series,l=e.chart,c=e.options.ignoreHiddenPoint;f=M(f,c);h!==d.visible&&(d.visible=d.options.visible=h="undefined"===typeof h?!d.visible:h,e.options.data[e.data.indexOf(d)]=d.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(a){if(d[a])d[a][h?"show":"hide"](!0)}),
d.legendItem&&l.legend.colorizeItem(d,h),h||"hover"!==d.state||d.setState(""),c&&(e.isDirty=!0),f&&l.redraw())},slice:function(h,f,d){var e=this.series;w(d,e.chart);M(f,!0);this.sliced=this.options.sliced=J(h)?h:!this.sliced;e.options.data[e.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(h){var f=
this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(f.x,f.y,f.r+h,f.r+h,{innerR:f.r-1,start:f.start,end:f.end})},connectorShapes:{fixedOffset:function(h,f,d){var e=f.breakAt;f=f.touchingSliceAt;return[["M",h.x,h.y],d.softConnector?["C",h.x+("left"===h.alignment?-5:5),h.y,2*e.x-f.x,2*e.y-f.y,e.x,e.y]:["L",e.x,e.y],["L",f.x,f.y]]},straight:function(h,f){f=f.touchingSliceAt;return[["M",h.x,h.y],["L",f.x,f.y]]},crookedLine:function(h,f,d){f=f.touchingSliceAt;var e=
this.series,l=e.center[0],c=e.chart.plotWidth,a=e.chart.plotLeft;e=h.alignment;var m=this.shapeArgs.r;d=A(d.crookDistance,1);c="left"===e?l+m+(c+a-l-m)*(1-d):a+(l-m)*d;d=["L",c,h.y];l=!0;if("left"===e?c>h.x||c<f.x:c<h.x||c>f.x)l=!1;h=[["M",h.x,h.y]];l&&h.push(d);h.push(["L",f.x,f.y]);return h}},getConnectorPath:function(){var h=this.labelPosition,f=this.series.options.dataLabels,d=f.connectorShape,e=this.connectorShapes;e[d]&&(d=e[d]);return d.call(this,{x:h.final.x,y:h.final.y,alignment:h.alignment},
h.connectorPosition,f)}});""});O(q,"parts/DataLabels.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=p.noop,B=p.seriesTypes,D=e.animObject,z=e.arrayMax,J=e.clamp,G=e.defined,m=e.extend,H=e.fireEvent,M=e.format,A=e.isArray,K=e.merge,w=e.objectEach,r=e.pick,u=e.relativeLength,C=e.splat,h=e.stableSort,f=p.Series;p.distribute=function(d,f,l){function c(a,c){return a.target-c.target}var a,e=!0,t=d,m=[];var u=0;var k=t.reducedLen||f;for(a=d.length;a--;)u+=d[a].size;if(u>k){h(d,function(a,
c){return(c.rank||0)-(a.rank||0)});for(u=a=0;u<=k;)u+=d[a].size,a++;m=d.splice(a-1,d.length)}h(d,c);for(d=d.map(function(a){return{size:a.size,targets:[a.target],align:r(a.align,.5)}});e;){for(a=d.length;a--;)e=d[a],u=(Math.min.apply(0,e.targets)+Math.max.apply(0,e.targets))/2,e.pos=J(u-e.size*e.align,0,f-e.size);a=d.length;for(e=!1;a--;)0<a&&d[a-1].pos+d[a-1].size>d[a].pos&&(d[a-1].size+=d[a].size,d[a-1].targets=d[a-1].targets.concat(d[a].targets),d[a-1].align=.5,d[a-1].pos+d[a-1].size>f&&(d[a-1].pos=
f-d[a-1].size),d.splice(a,1),e=!0)}t.push.apply(t,m);a=0;d.some(function(c){var d=0;if(c.targets.some(function(){t[a].pos=c.pos+d;if("undefined"!==typeof l&&Math.abs(t[a].pos-t[a].target)>l)return t.slice(0,a+1).forEach(function(a){delete a.pos}),t.reducedLen=(t.reducedLen||f)-.1*f,t.reducedLen>.1*f&&p.distribute(t,f,l),!0;d+=t[a].size;a++}))return!0});h(t,c)};f.prototype.drawDataLabels=function(){function d(a,c){var b=c.filter;return b?(c=b.operator,a=a[b.property],b=b.value,">"===c&&a>b||"<"===
c&&a<b||">="===c&&a>=b||"<="===c&&a<=b||"=="===c&&a==b||"==="===c&&a===b?!0:!1):!0}function f(a,c){var b=[],d;if(A(a)&&!A(c))b=a.map(function(a){return K(a,c)});else if(A(c)&&!A(a))b=c.map(function(b){return K(a,b)});else if(A(a)||A(c))for(d=Math.max(a.length,c.length);d--;)b[d]=K(a[d],c[d]);else b=K(a,c);return b}var h=this,c=h.chart,a=h.options,e=a.dataLabels,m=h.points,u,F=h.hasRendered||0,k=D(a.animation).duration,y=Math.min(k,200),p=!c.renderer.forExport&&r(e.defer,0<y),q=c.renderer;e=f(f(c.options.plotOptions&&
c.options.plotOptions.series&&c.options.plotOptions.series.dataLabels,c.options.plotOptions&&c.options.plotOptions[h.type]&&c.options.plotOptions[h.type].dataLabels),e);H(this,"drawDataLabels");if(A(e)||e.enabled||h._hasPointLabels){var g=h.plotGroup("dataLabelsGroup","data-labels",p&&!F?"hidden":"inherit",e.zIndex||6);p&&(g.attr({opacity:+F}),F||setTimeout(function(){var b=h.dataLabelsGroup;b&&(h.visible&&g.show(!0),b[a.animation?"animate":"attr"]({opacity:1},{duration:y}))},k-y));m.forEach(function(b){u=
C(f(e,b.dlOptions||b.options&&b.options.dataLabels));u.forEach(function(k,f){var l=k.enabled&&(!b.isNull||b.dataLabelOnNull)&&d(b,k),n=b.dataLabels?b.dataLabels[f]:b.dataLabel,e=b.connectors?b.connectors[f]:b.connector,t=r(k.distance,b.labelDistance),m=!n;if(l){var v=b.getLabelConfig();var y=r(k[b.formatPrefix+"Format"],k.format);v=G(y)?M(y,v,c):(k[b.formatPrefix+"Formatter"]||k.formatter).call(v,k);y=k.style;var x=k.rotation;c.styledMode||(y.color=r(k.color,y.color,h.color,"#000000"),"contrast"===
y.color?(b.contrastColor=q.getContrast(b.color||h.color),y.color=!G(t)&&k.inside||0>t||a.stacking?b.contrastColor:"#000000"):delete b.contrastColor,a.cursor&&(y.cursor=a.cursor));var u={r:k.borderRadius||0,rotation:x,padding:k.padding,zIndex:1};c.styledMode||(u.fill=k.backgroundColor,u.stroke=k.borderColor,u["stroke-width"]=k.borderWidth);w(u,function(a,b){"undefined"===typeof a&&delete u[b]})}!n||l&&G(v)?l&&G(v)&&(n?u.text=v:(b.dataLabels=b.dataLabels||[],n=b.dataLabels[f]=x?q.text(v,0,-9999,k.useHTML).addClass("highcharts-data-label"):
q.label(v,0,-9999,k.shape,null,null,k.useHTML,null,"data-label"),f||(b.dataLabel=n),n.addClass(" highcharts-data-label-color-"+b.colorIndex+" "+(k.className||"")+(k.useHTML?" highcharts-tracker":""))),n.options=k,n.attr(u),c.styledMode||n.css(y).shadow(k.shadow),n.added||n.add(g),k.textPath&&!k.useHTML&&(n.setTextPath(b.getDataLabelPath&&b.getDataLabelPath(n)||b.graphic,k.textPath),b.dataLabelPath&&!k.textPath.enabled&&(b.dataLabelPath=b.dataLabelPath.destroy())),h.alignDataLabel(b,n,k,null,m)):(b.dataLabel=
b.dataLabel&&b.dataLabel.destroy(),b.dataLabels&&(1===b.dataLabels.length?delete b.dataLabels:delete b.dataLabels[f]),f||delete b.dataLabel,e&&(b.connector=b.connector.destroy(),b.connectors&&(1===b.connectors.length?delete b.connectors:delete b.connectors[f])))})})}H(this,"afterDrawDataLabels")};f.prototype.alignDataLabel=function(d,f,h,c,a){var l=this,e=this.chart,t=this.isCartesian&&e.inverted,u=this.enabledDataSorting,k=r(d.dlBox&&d.dlBox.centerX,d.plotX,-9999),y=r(d.plotY,-9999),p=f.getBBox(),
q=h.rotation,g=h.align,b=e.isInsidePlot(k,Math.round(y),t),n="justify"===r(h.overflow,u?"none":"justify"),C=this.visible&&!1!==d.visible&&(d.series.forceDL||u&&!n||b||h.inside&&c&&e.isInsidePlot(k,t?c.x+1:c.y+c.height-1,t));var w=function(c){u&&l.xAxis&&!n&&l.setDataLabelStartPos(d,f,a,b,c)};if(C){var A=e.renderer.fontMetrics(e.styledMode?void 0:h.style.fontSize,f).b;c=m({x:t?this.yAxis.len-y:k,y:Math.round(t?this.xAxis.len-k:y),width:0,height:0},c);m(h,{width:p.width,height:p.height});q?(n=!1,k=
e.renderer.rotCorr(A,q),k={x:c.x+(h.x||0)+c.width/2+k.x,y:c.y+(h.y||0)+{top:0,middle:.5,bottom:1}[h.verticalAlign]*c.height},w(k),f[a?"attr":"animate"](k).attr({align:g}),w=(q+720)%360,w=180<w&&360>w,"left"===g?k.y-=w?p.height:0:"center"===g?(k.x-=p.width/2,k.y-=p.height/2):"right"===g&&(k.x-=p.width,k.y-=w?0:p.height),f.placed=!0,f.alignAttr=k):(w(c),f.align(h,null,c),k=f.alignAttr);n&&0<=c.height?this.justifyDataLabel(f,h,k,p,c,a):r(h.crop,!0)&&(C=e.isInsidePlot(k.x,k.y)&&e.isInsidePlot(k.x+p.width,
k.y+p.height));if(h.shape&&!q)f[a?"attr":"animate"]({anchorX:t?e.plotWidth-d.plotY:d.plotX,anchorY:t?e.plotHeight-d.plotX:d.plotY})}a&&u&&(f.placed=!1);C||u&&!n||(f.hide(!0),f.placed=!1)};f.prototype.setDataLabelStartPos=function(d,f,h,c,a){var l=this.chart,e=l.inverted,t=this.xAxis,m=t.reversed,k=e?f.height/2:f.width/2;d=(d=d.pointWidth)?d/2:0;t=e?a.x:m?-k-d:t.width-k+d;a=e?m?this.yAxis.height-k+d:-k-d:a.y;f.startXPos=t;f.startYPos=a;c?"hidden"===f.visibility&&(f.show(),f.attr({opacity:0}).animate({opacity:1})):
f.attr({opacity:1}).animate({opacity:0},void 0,f.hide);l.hasRendered&&(h&&f.attr({x:f.startXPos,y:f.startYPos}),f.placed=!0)};f.prototype.justifyDataLabel=function(d,f,h,c,a,e){var l=this.chart,t=f.align,m=f.verticalAlign,k=d.box?0:d.padding||0,y=f.x;y=void 0===y?0:y;var r=f.y;var u=void 0===r?0:r;r=h.x+k;if(0>r){"right"===t&&0<=y?(f.align="left",f.inside=!0):y-=r;var g=!0}r=h.x+c.width-k;r>l.plotWidth&&("left"===t&&0>=y?(f.align="right",f.inside=!0):y+=l.plotWidth-r,g=!0);r=h.y+k;0>r&&("bottom"===
m&&0<=u?(f.verticalAlign="top",f.inside=!0):u-=r,g=!0);r=h.y+c.height-k;r>l.plotHeight&&("top"===m&&0>=u?(f.verticalAlign="bottom",f.inside=!0):u+=l.plotHeight-r,g=!0);g&&(f.x=y,f.y=u,d.placed=!e,d.align(f,void 0,a));return g};B.pie&&(B.pie.prototype.dataLabelPositioners={radialDistributionY:function(d){return d.top+d.distributeBox.pos},radialDistributionX:function(d,f,h,c){return d.getX(h<f.top+2||h>f.bottom-2?c:h,f.half,f)},justify:function(d,f,h){return h[0]+(d.half?-1:1)*(f+d.labelDistance)},
alignToPlotEdges:function(d,f,h,c){d=d.getBBox().width;return f?d+c:h-d-c},alignToConnectors:function(d,f,h,c){var a=0,l;d.forEach(function(c){l=c.dataLabel.getBBox().width;l>a&&(a=l)});return f?a+c:h-a-c}},B.pie.prototype.drawDataLabels=function(){var d=this,h=d.data,l,c=d.chart,a=d.options.dataLabels||{},e=a.connectorPadding,m,u=c.plotWidth,F=c.plotHeight,k=c.plotLeft,y=Math.round(c.chartWidth/3),q,w=d.center,g=w[2]/2,b=w[1],n,C,A,B,D=[[],[]],H,J,M,O,R=[0,0,0,0],T=d.dataLabelPositioners,W;d.visible&&
(a.enabled||d._hasPointLabels)&&(h.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),f.prototype.drawDataLabels.apply(d),h.forEach(function(b){b.dataLabel&&(b.visible?(D[b.half].push(b),b.dataLabel._pos=null,!G(a.style.width)&&!G(b.options.dataLabels&&b.options.dataLabels.style&&b.options.dataLabels.style.width)&&b.dataLabel.getBBox().width>y&&(b.dataLabel.css({width:Math.round(.7*
y)+"px"}),b.dataLabel.shortened=!0)):(b.dataLabel=b.dataLabel.destroy(),b.dataLabels&&1===b.dataLabels.length&&delete b.dataLabels))}),D.forEach(function(f,h){var t=f.length,m=[],v;if(t){d.sortByAngle(f,h-.5);if(0<d.maxLabelDistance){var y=Math.max(0,b-g-d.maxLabelDistance);var x=Math.min(b+g+d.maxLabelDistance,c.plotHeight);f.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,b-g-a.labelDistance),a.bottom=Math.min(b+g+a.labelDistance,c.plotHeight),v=a.dataLabel.getBBox().height||
21,a.distributeBox={target:a.labelPosition.natural.y-a.top+v/2,size:v,rank:a.y},m.push(a.distributeBox))});y=x+v-y;p.distribute(m,y,y/5)}for(O=0;O<t;O++){l=f[O];A=l.labelPosition;n=l.dataLabel;M=!1===l.visible?"hidden":"inherit";J=y=A.natural.y;m&&G(l.distributeBox)&&("undefined"===typeof l.distributeBox.pos?M="hidden":(B=l.distributeBox.size,J=T.radialDistributionY(l)));delete l.positionIndex;if(a.justify)H=T.justify(l,g,w);else switch(a.alignTo){case "connectors":H=T.alignToConnectors(f,h,u,k);
break;case "plotEdges":H=T.alignToPlotEdges(n,h,u,k);break;default:H=T.radialDistributionX(d,l,J,y)}n._attr={visibility:M,align:A.alignment};W=l.options.dataLabels||{};n._pos={x:H+r(W.x,a.x)+({left:e,right:-e}[A.alignment]||0),y:J+r(W.y,a.y)-10};A.final.x=H;A.final.y=J;r(a.crop,!0)&&(C=n.getBBox().width,y=null,H-C<e&&1===h?(y=Math.round(C-H+e),R[3]=Math.max(y,R[3])):H+C>u-e&&0===h&&(y=Math.round(H+C-u+e),R[1]=Math.max(y,R[1])),0>J-B/2?R[0]=Math.max(Math.round(-J+B/2),R[0]):J+B/2>F&&(R[2]=Math.max(Math.round(J+
B/2-F),R[2])),n.sideOverflow=y)}}}),0===z(R)||this.verifyDataLabelOverflow(R))&&(this.placeDataLabels(),this.points.forEach(function(b){W=K(a,b.options.dataLabels);if(m=r(W.connectorWidth,1)){var g;q=b.connector;if((n=b.dataLabel)&&n._pos&&b.visible&&0<b.labelDistance){M=n._attr.visibility;if(g=!q)b.connector=q=c.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+b.colorIndex+(b.className?" "+b.className:"")).add(d.dataLabelsGroup),c.styledMode||q.attr({"stroke-width":m,
stroke:W.connectorColor||b.color||"#666666"});q[g?"attr":"animate"]({d:b.getConnectorPath()});q.attr("visibility",M)}else q&&(b.connector=q.destroy())}}))},B.pie.prototype.placeDataLabels=function(){this.points.forEach(function(d){var f=d.dataLabel,h;f&&d.visible&&((h=f._pos)?(f.sideOverflow&&(f._attr.width=Math.max(f.getBBox().width-f.sideOverflow,0),f.css({width:f._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),f.shortened=!0),f.attr(f._attr),f[f.moved?
"animate":"attr"](h),f.moved=!0):f&&f.attr({y:-9999}));delete d.distributeBox},this)},B.pie.prototype.alignDataLabel=q,B.pie.prototype.verifyDataLabelOverflow=function(d){var f=this.center,h=this.options,c=h.center,a=h.minSize||80,e=null!==h.size;if(!e){if(null!==c[0])var m=Math.max(f[2]-Math.max(d[1],d[3]),a);else m=Math.max(f[2]-d[1]-d[3],a),f[0]+=(d[3]-d[1])/2;null!==c[1]?m=J(m,a,f[2]-Math.max(d[0],d[2])):(m=J(m,a,f[2]-d[0]-d[2]),f[1]+=(d[0]-d[2])/2);m<f[2]?(f[2]=m,f[3]=Math.min(u(h.innerSize||
0,m),m),this.translate(f),this.drawDataLabels&&this.drawDataLabels()):e=!0}return e});B.column&&(B.column.prototype.alignDataLabel=function(d,h,l,c,a){var e=this.chart.inverted,m=d.series,t=d.dlBox||d.shapeArgs,u=r(d.below,d.plotY>r(this.translatedThreshold,m.yAxis.len)),k=r(l.inside,!!this.options.stacking);t&&(c=K(t),0>c.y&&(c.height+=c.y,c.y=0),t=c.y+c.height-m.yAxis.len,0<t&&t<c.height&&(c.height-=t),e&&(c={x:m.yAxis.len-c.y-c.height,y:m.xAxis.len-c.x-c.width,width:c.height,height:c.width}),k||
(e?(c.x+=u?0:c.width,c.width=0):(c.y+=u?c.height:0,c.height=0)));l.align=r(l.align,!e||k?"center":u?"right":"left");l.verticalAlign=r(l.verticalAlign,e||k?"middle":u?"top":"bottom");f.prototype.alignDataLabel.call(this,d,h,l,c,a);l.inside&&d.contrastColor&&h.css({color:d.contrastColor})})});O(q,"modules/overlapping-datalabels.src.js",[q["parts/Chart.js"],q["parts/Utilities.js"]],function(p,e){var q=e.addEvent,B=e.fireEvent,D=e.isArray,z=e.isNumber,J=e.objectEach,G=e.pick;q(p,"render",function(){var e=
[];(this.labelCollectors||[]).forEach(function(m){e=e.concat(m())});(this.yAxis||[]).forEach(function(m){m.stacking&&m.options.stackLabels&&!m.options.stackLabels.allowOverlap&&J(m.stacking.stacks,function(m){J(m,function(m){e.push(m.label)})})});(this.series||[]).forEach(function(m){var p=m.options.dataLabels;m.visible&&(!1!==p.enabled||m._hasPointLabels)&&(m.nodes||m.points).forEach(function(m){m.visible&&(D(m.dataLabels)?m.dataLabels:m.dataLabel?[m.dataLabel]:[]).forEach(function(p){var q=p.options;
p.labelrank=G(q.labelrank,m.labelrank,m.shapeArgs&&m.shapeArgs.height);q.allowOverlap||e.push(p)})})});this.hideOverlappingLabels(e)});p.prototype.hideOverlappingLabels=function(e){var m=this,p=e.length,q=m.renderer,K,w,r,u=!1;var C=function(d){var f,h=d.box?0:d.padding||0,c=f=0,a;if(d&&(!d.alignAttr||d.placed)){var e=d.alignAttr||{x:d.attr("x"),y:d.attr("y")};var m=d.parentGroup;d.width||(f=d.getBBox(),d.width=f.width,d.height=f.height,f=q.fontMetrics(null,d.element).h);var r=d.width-2*h;(a={left:"0",
center:"0.5",right:"1"}[d.alignValue])?c=+a*r:z(d.x)&&Math.round(d.x)!==d.translateX&&(c=d.x-d.translateX);return{x:e.x+(m.translateX||0)+h-c,y:e.y+(m.translateY||0)+h-f,width:d.width-2*h,height:d.height-2*h}}};for(w=0;w<p;w++)if(K=e[w])K.oldOpacity=K.opacity,K.newOpacity=1,K.absoluteBox=C(K);e.sort(function(d,f){return(f.labelrank||0)-(d.labelrank||0)});for(w=0;w<p;w++){var h=(C=e[w])&&C.absoluteBox;for(K=w+1;K<p;++K){var f=(r=e[K])&&r.absoluteBox;!h||!f||C===r||0===C.newOpacity||0===r.newOpacity||
f.x>h.x+h.width||f.x+f.width<h.x||f.y>h.y+h.height||f.y+f.height<h.y||((C.labelrank<r.labelrank?C:r).newOpacity=0)}}e.forEach(function(d){if(d){var f=d.newOpacity;d.oldOpacity!==f&&(d.alignAttr&&d.placed?(d[f?"removeClass":"addClass"]("highcharts-data-label-hidden"),u=!0,d.alignAttr.opacity=f,d[d.isOld?"animate":"attr"](d.alignAttr,null,function(){m.styledMode||d.css({pointerEvents:f?"auto":"none"});d.visibility=f?"inherit":"hidden";d.placed=!!f}),B(m,"afterHideOverlappingLabel")):d.attr({opacity:f}));
d.isOld=!0}});u&&B(m,"afterHideAllOverlappingLabels")}});O(q,"parts/Interaction.js",[q["parts/Chart.js"],q["parts/Globals.js"],q["parts/Legend.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/Utilities.js"]],function(p,e,q,B,D,z){var J=B.defaultOptions,G=z.addEvent,m=z.createElement,H=z.css,M=z.defined,A=z.extend,K=z.fireEvent,w=z.isArray,r=z.isFunction,u=z.isNumber,C=z.isObject,h=z.merge,f=z.objectEach,d=z.pick,t=e.hasTouch;B=e.Series;z=e.seriesTypes;var l=e.svg;var c=e.TrackerMixin={drawTrackerPoint:function(){var a=
this,c=a.chart,d=c.pointer,f=function(a){var c=d.getPointFromEvent(a);"undefined"!==typeof c&&(d.isDirectTouch=!0,c.onMouseOver(a))},h;a.points.forEach(function(a){h=w(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);h.forEach(function(c){c.div?c.div.point=a:c.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(k){if(a[k]){a[k].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){d.onTrackerMouseOut(a)});if(t)a[k].on("touchstart",
f);!c.styledMode&&a.options.cursor&&a[k].css(H).css({cursor:a.options.cursor})}}),a._hasTracking=!0);K(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,c=a.options,d=c.trackByArea,f=[].concat(d?a.areaPath:a.graphPath),h=a.chart,k=h.pointer,e=h.renderer,m=h.options.tooltip.snap,r=a.tracker,g=function(b){if(h.hoverSeries!==a)a.onMouseOver()},b="rgba(192,192,192,"+(l?.0001:.002)+")";r?r.attr({d:f}):a.graph&&(a.tracker=e.path(f).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(d?
"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),h.styledMode||a.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:b,fill:d?b:"none","stroke-width":a.graph.strokeWidth()+(d?0:2*m)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",g).on("mouseout",function(a){k.onTrackerMouseOut(a)});c.cursor&&!h.styledMode&&a.css({cursor:c.cursor});if(t)a.on("touchstart",g)}));K(this,"afterDrawTracker")}};z.column&&(z.column.prototype.drawTracker=
c.drawTrackerPoint);z.pie&&(z.pie.prototype.drawTracker=c.drawTrackerPoint);z.scatter&&(z.scatter.prototype.drawTracker=c.drawTrackerPoint);A(q.prototype,{setItemEvents:function(a,c,d){var f=this,e=f.chart.renderer.boxWrapper,k=a instanceof D,l="highcharts-legend-"+(k?"point":"series")+"-active",m=f.chart.styledMode;(d?[c,a.legendSymbol]:[a.legendGroup]).forEach(function(d){if(d)d.on("mouseover",function(){a.visible&&f.allItems.forEach(function(c){a!==c&&c.setState("inactive",!k)});a.setState("hover");
a.visible&&e.addClass(l);m||c.css(f.options.itemHoverStyle)}).on("mouseout",function(){f.chart.styledMode||c.css(h(a.visible?f.itemStyle:f.itemHiddenStyle));f.allItems.forEach(function(c){a!==c&&c.setState("",!k)});e.removeClass(l);a.setState()}).on("click",function(c){var b=function(){a.setVisible&&a.setVisible();f.allItems.forEach(function(b){a!==b&&b.setState(a.visible?"inactive":"",!k)})};e.removeClass(l);c={browserEvent:c};a.firePointEvent?a.firePointEvent("legendItemClick",c,b):K(a,"legendItemClick",
c,b)})})},createCheckboxForItem:function(a){a.checkbox=m("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);G(a.checkbox,"click",function(c){K(a.series||a,"checkboxClick",{checked:c.target.checked,item:a},function(){a.select()})})}});A(p.prototype,{showResetZoom:function(){function a(){c.zoomOut()}var c=this,d=J.lang,f=c.options.chart.resetZoomButton,h=f.theme,k=h.states,e="chart"===f.relativeTo||
"spaceBox"===f.relativeTo?null:"plotBox";K(this,"beforeShowResetZoom",null,function(){c.resetZoomButton=c.renderer.button(d.resetZoom,null,null,a,h,k&&k.hover).attr({align:f.position.align,title:d.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(f.position,!1,e)});K(this,"afterShowResetZoom")},zoomOut:function(){K(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var c=this,f,h=c.pointer,e=!1,k=c.inverted?h.mouseDownX:h.mouseDownY;!a||a.resetSelection?(c.axes.forEach(function(a){f=
a.zoom()}),h.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var d=a.axis,g=c.inverted?d.left:d.top,b=c.inverted?g+d.width:g+d.height,n=d.isXAxis,l=!1;if(!n&&k>=g&&k<=b||n||!M(k))l=!0;h[n?"zoomX":"zoomY"]&&l&&(f=d.zoom(a.min,a.max),d.displayBtn&&(e=!0))});var l=c.resetZoomButton;e&&!l?c.showResetZoom():!e&&C(l)&&(c.resetZoomButton=l.destroy());f&&c.redraw(d(c.options.chart.animation,a&&a.animation,100>c.pointCount))},pan:function(a,c){var d=this,f=d.hoverPoints,h=d.options.chart,k=d.options.mapNavigation&&
d.options.mapNavigation.enabled,l;c="object"===typeof c?c:{enabled:c,type:"x"};h&&h.panning&&(h.panning=c);var m=c.type;K(this,"pan",{originalEvent:a},function(){f&&f.forEach(function(a){a.setState()});var c=[1];"xy"===m?c=[1,0]:"y"===m&&(c=[0]);c.forEach(function(c){var b=d[c?"xAxis":"yAxis"][0],g=b.horiz,f=a[g?"chartX":"chartY"];g=g?"mouseDownX":"mouseDownY";var h=d[g],t=(b.pointRange||0)/2,r=b.reversed&&!d.inverted||!b.reversed&&d.inverted?-1:1,v=b.getExtremes(),y=b.toValue(h-f,!0)+t*r;r=b.toValue(h+
b.len-f,!0)-t*r;var p=r<y;h=p?r:y;y=p?y:r;var q=b.hasVerticalPanning(),x=b.panningState;b.series.forEach(function(a){if(q&&!c&&(!x||x.isDirty)){var b=a.getProcessedData(!0);a=a.getExtremes(b.yData,!0);x||(x={startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE});u(a.dataMin)&&u(a.dataMax)&&(x.startMin=Math.min(a.dataMin,x.startMin),x.startMax=Math.max(a.dataMax,x.startMax))}});r=Math.min(e.pick(null===x||void 0===x?void 0:x.startMin,v.dataMin),t?v.min:b.toValue(b.toPixels(v.min)-b.minPixelPadding));
t=Math.max(e.pick(null===x||void 0===x?void 0:x.startMax,v.dataMax),t?v.max:b.toValue(b.toPixels(v.max)+b.minPixelPadding));b.panningState=x;b.isOrdinal||(p=r-h,0<p&&(y+=p,h=r),p=y-t,0<p&&(y=t,h-=p),b.series.length&&h!==v.min&&y!==v.max&&h>=r&&y<=t&&(b.setExtremes(h,y,!1,!1,{trigger:"pan"}),d.resetZoomButton||k||h===r||y===t||!m.match("y")||(d.showResetZoom(),b.displayBtn=!1),l=!0),d[g]=f)});l&&d.redraw(!1);H(d.container,{cursor:"move"})})}});A(D.prototype,{select:function(a,c){var f=this,h=f.series,
e=h.chart;this.selectedStaging=a=d(a,!f.selected);f.firePointEvent(a?"select":"unselect",{accumulate:c},function(){f.selected=f.options.selected=a;h.options.data[h.data.indexOf(f)]=f.options;f.setState(a&&"select");c||e.getSelectedPoints().forEach(function(a){var c=a.series;a.selected&&a!==f&&(a.selected=a.options.selected=!1,c.options.data[c.data.indexOf(a)]=a.options,a.setState(e.hoverPoints&&c.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},
onMouseOver:function(a){var c=this.series.chart,d=c.pointer;a=a?d.normalize(a):d.getChartCoordinatesFromPoint(this,c.inverted);d.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=this,c=h(a.series.options.point,a.options).events;a.events=c;f(c,function(c,d){r(c)&&
G(a,d,c)});this.hasImportedEvents=!0}},setState:function(a,c){var f=this.series,h=this.state,e=f.options.states[a||"normal"]||{},k=J.plotOptions[f.type].marker&&f.options.marker,l=k&&!1===k.enabled,m=k&&k.states&&k.states[a||"normal"]||{},t=!1===m.enabled,g=f.stateMarkerGraphic,b=this.marker||{},n=f.chart,r=f.halo,u,p=k&&f.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===e.enabled||a&&(t||l&&!1===m.enabled)||a&&b.states&&b.states[a]&&!1===b.states[a].enabled)){this.state=
a;p&&(u=f.markerAttribs(this,a));if(this.graphic){h&&this.graphic.removeClass("highcharts-point-"+h);a&&this.graphic.addClass("highcharts-point-"+a);if(!n.styledMode){var q=f.pointAttribs(this,a);var x=d(n.options.chart.animation,e.animation);f.options.inactiveOtherPoints&&q.opacity&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:q.opacity},x)}),this.connector&&this.connector.animate({opacity:q.opacity},x));this.graphic.animate(q,x)}u&&this.graphic.animate(u,d(n.options.chart.animation,
m.animation,k.animation));g&&g.hide()}else{if(a&&m){h=b.symbol||f.symbol;g&&g.currentSymbol!==h&&(g=g.destroy());if(u)if(g)g[c?"animate":"attr"]({x:u.x,y:u.y});else h&&(f.stateMarkerGraphic=g=n.renderer.symbol(h,u.x,u.y,u.width,u.height).add(f.markerGroup),g.currentSymbol=h);!n.styledMode&&g&&g.attr(f.pointAttribs(this,a))}g&&(g[a&&this.isInside?"show":"hide"](),g.element.point=this)}a=e.halo;e=(g=this.graphic||g)&&g.visibility||"inherit";a&&a.size&&g&&"hidden"!==e&&!this.isCluster?(r||(f.halo=r=
n.renderer.path().add(g.parentGroup)),r.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),r.attr({"class":"highcharts-halo highcharts-color-"+d(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:""),visibility:e,zIndex:-1}),r.point=this,n.styledMode||r.attr(A({fill:this.color||f.color,"fill-opacity":a.opacity},a.attributes))):r&&r.point&&r.point.haloPath&&r.animate({d:r.point.haloPath(0)},null,r.hide);K(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});A(B.prototype,{onMouseOver:function(){var a=this.chart,c=a.hoverSeries;a.pointer.setHoverChartIndex();if(c&&c!==this)c.onMouseOut();this.options.events.mouseOver&&K(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,c=this.chart,d=c.tooltip,f=c.hoverPoint;c.hoverSeries=null;if(f)f.onMouseOut();this&&a.events.mouseOut&&K(this,"mouseOut");!d||this.stickyTracking||d.shared&&!this.noSharedTooltip||d.hide();c.series.forEach(function(a){a.setState("",
!0)})},setState:function(a,c){var f=this,h=f.options,e=f.graph,k=h.inactiveOtherPoints,l=h.states,m=h.lineWidth,t=h.opacity,g=d(l[a||"normal"]&&l[a||"normal"].animation,f.chart.options.chart.animation);h=0;a=a||"";if(f.state!==a&&([f.group,f.markerGroup,f.dataLabelsGroup].forEach(function(b){b&&(f.state&&b.removeClass("highcharts-series-"+f.state),a&&b.addClass("highcharts-series-"+a))}),f.state=a,!f.chart.styledMode)){if(l[a]&&!1===l[a].enabled)return;a&&(m=l[a].lineWidth||m+(l[a].lineWidthPlus||
0),t=d(l[a].opacity,t));if(e&&!e.dashstyle)for(l={"stroke-width":m},e.animate(l,g);f["zone-graph-"+h];)f["zone-graph-"+h].attr(l),h+=1;k||[f.group,f.markerGroup,f.dataLabelsGroup,f.labelBySeries].forEach(function(a){a&&a.animate({opacity:t},g)})}c&&k&&f.points&&f.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(c){c.setState&&c.setState(a)})},setVisible:function(a,c){var d=this,f=d.chart,h=d.legendItem,k=f.options.chart.ignoreHiddenSeries,e=d.visible;var l=(d.visible=
a=d.options.visible=d.userOptions.visible="undefined"===typeof a?!e:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(d[a])d[a][l]()});if(f.hoverSeries===d||(f.hoverPoint&&f.hoverPoint.series)===d)d.onMouseOut();h&&f.legend.colorizeItem(d,a);d.isDirty=!0;d.options.stacking&&f.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});d.linkedSeries.forEach(function(c){c.setVisible(a,!1)});k&&(f.isDirtyBox=!0);K(d,l);!1!==c&&f.redraw()},
show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected="undefined"===typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);K(this,a?"select":"unselect")},drawTracker:c.drawTrackerGraph})});O(q,"parts/Responsive.js",[q["parts/Chart.js"],q["parts/Utilities.js"]],function(p,e){var q=e.find,B=e.isArray,D=e.isObject,z=e.merge,J=e.objectEach,G=e.pick,m=e.splat,H=e.uniqueKey;p.prototype.setResponsive=function(e,m){var p=
this.options.responsive,w=[],r=this.currentResponsive;!m&&p&&p.rules&&p.rules.forEach(function(e){"undefined"===typeof e._id&&(e._id=H());this.matchResponsiveRule(e,w)},this);m=z.apply(0,w.map(function(e){return q(p.rules,function(m){return m._id===e}).chartOptions}));m.isResponsiveOptions=!0;w=w.toString()||void 0;w!==(r&&r.ruleIds)&&(r&&this.update(r.undoOptions,e,!0),w?(r=this.currentOptions(m),r.isResponsiveOptions=!0,this.currentResponsive={ruleIds:w,mergedOptions:m,undoOptions:r},this.update(m,
e,!0)):this.currentResponsive=void 0)};p.prototype.matchResponsiveRule=function(e,m){var p=e.condition;(p.callback||function(){return this.chartWidth<=G(p.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=G(p.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=G(p.minWidth,0)&&this.chartHeight>=G(p.minHeight,0)}).call(this)&&m.push(e._id)};p.prototype.currentOptions=function(e){function p(e,u,w,h){var f;J(e,function(d,e){if(!h&&-1<q.collectionsWithUpdate.indexOf(e))for(d=m(d),w[e]=[],f=0;f<Math.max(d.length,
u[e].length);f++)u[e][f]&&(void 0===d[f]?w[e][f]=u[e][f]:(w[e][f]={},p(d[f],u[e][f],w[e][f],h+1)));else D(d)?(w[e]=B(d)?[]:{},p(d,u[e]||{},w[e],h+1)):w[e]="undefined"===typeof u[e]?null:u[e]})}var q=this,w={};p(e,this.options,w,0);return w}});O(q,"masters/highcharts.src.js",[q["parts/Globals.js"]],function(p){return p});O(q,"parts/NavigatorAxis.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=p.isTouchDevice,B=e.addEvent,D=e.correctFloat,z=e.defined,J=e.isNumber,G=e.pick,m=
function(){function e(e){this.axis=e}e.prototype.destroy=function(){this.axis=void 0};e.prototype.toFixedRange=function(e,m,p,q){var r=this.axis,u=r.chart;u=u&&u.fixedRange;var w=(r.pointRange||0)/2;e=G(p,r.translate(e,!0,!r.horiz));m=G(q,r.translate(m,!0,!r.horiz));r=u&&(m-e)/u;z(p)||(e=D(e+w));z(q)||(m=D(m-w));.7<r&&1.3>r&&(q?e=m-u:m=e+u);J(e)&&J(m)||(e=m=void 0);return{min:e,max:m}};return e}();return function(){function e(){}e.compose=function(e){e.keepProps.push("navigatorAxis");B(e,"init",function(){this.navigatorAxis||
(this.navigatorAxis=new m(this))});B(e,"zoom",function(e){var m=this.chart.options,p=m.navigator,r=this.navigatorAxis,u=m.chart.pinchType,C=m.rangeSelector;m=m.chart.zoomType;this.isXAxis&&(p&&p.enabled||C&&C.enabled)&&("y"===m?e.zoomed=!1:(!q&&"xy"===m||q&&"xy"===u)&&this.options.range&&(p=r.previousZoom,z(e.newMin)?r.previousZoom=[this.min,this.max]:p&&(e.newMin=p[0],e.newMax=p[1],r.previousZoom=void 0)));"undefined"!==typeof e.zoomed&&e.preventDefault()})};e.AdditionsClass=m;return e}()});O(q,
"parts/ScrollbarAxis.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.addEvent,B=e.defined,D=e.pick;return function(){function e(){}e.compose=function(e,z){q(e,"afterInit",function(){var e=this;e.options&&e.options.scrollbar&&e.options.scrollbar.enabled&&(e.options.scrollbar.vertical=!e.horiz,e.options.startOnTick=e.options.endOnTick=!1,e.scrollbar=new z(e.chart.renderer,e.options.scrollbar,e.chart),q(e.scrollbar,"changed",function(m){var q=D(e.options&&e.options.min,e.min),
A=D(e.options&&e.options.max,e.max),z=B(e.dataMin)?Math.min(q,e.min,e.dataMin):q,w=(B(e.dataMax)?Math.max(A,e.max,e.dataMax):A)-z;B(q)&&B(A)&&(e.horiz&&!e.reversed||!e.horiz&&e.reversed?(q=z+w*this.to,z+=w*this.from):(q=z+w*(1-this.from),z+=w*(1-this.to)),D(this.options.liveRedraw,p.svg&&!p.isTouchDevice&&!this.chart.isBoosting)||"mouseup"===m.DOMType||!B(m.DOMType)?e.setExtremes(z,q,!0,"mousemove"!==m.DOMType,m):this.setRange(this.from,this.to))}))});q(e,"afterRender",function(){var e=Math.min(D(this.options.min,
this.min),this.min,D(this.dataMin,this.min)),p=Math.max(D(this.options.max,this.max),this.max,D(this.dataMax,this.max)),q=this.scrollbar,A=this.axisTitleMargin+(this.titleOffset||0),z=this.chart.scrollbarsOffsets,w=this.options.margin||0;q&&(this.horiz?(this.opposite||(z[1]+=A),q.position(this.left,this.top+this.height+2+z[1]-(this.opposite?w:0),this.width,this.height),this.opposite||(z[1]+=w),A=1):(this.opposite&&(z[0]+=A),q.position(this.left+this.width+2+z[0]-(this.opposite?0:w),this.top,this.width,
this.height),this.opposite&&(z[0]+=w),A=0),z[A]+=q.size+q.options.margin,isNaN(e)||isNaN(p)||!B(this.min)||!B(this.max)||this.min===this.max?q.setRange(0,1):(z=(this.min-e)/(p-e),e=(this.max-e)/(p-e),this.horiz&&!this.reversed||!this.horiz&&this.reversed?q.setRange(z,e):q.setRange(1-e,1-z)))});q(e,"afterGetOffset",function(){var e=this.horiz?2:1,p=this.scrollbar;p&&(this.chart.scrollbarsOffsets=[0,0],this.chart.axisOffset[e]+=p.size+p.options.margin)})};return e}()});O(q,"parts/Scrollbar.js",[q["parts/Axis.js"],
q["parts/Globals.js"],q["parts/ScrollbarAxis.js"],q["parts/Utilities.js"],q["parts/Options.js"]],function(p,e,q,B,D){var z=B.addEvent,J=B.correctFloat,G=B.defined,m=B.destroyObjectProperties,H=B.fireEvent,M=B.merge,A=B.pick,K=B.removeEvent;B=D.defaultOptions;var w=e.hasTouch,r=e.isTouchDevice,u=e.swapXY=function(e,h){h&&e.forEach(function(f){for(var d=f.length,h,e=0;e<d;e+=2)h=f[e+1],"number"===typeof h&&(f[e+1]=f[e+2],f[e+2]=h)});return e};D=function(){function e(e,f,d){this._events=[];this.from=
this.chartY=this.chartX=0;this.scrollbar=this.group=void 0;this.scrollbarButtons=[];this.scrollbarGroup=void 0;this.scrollbarLeft=0;this.scrollbarRifles=void 0;this.scrollbarStrokeWidth=1;this.to=this.size=this.scrollbarTop=0;this.track=void 0;this.trackBorderWidth=1;this.userOptions={};this.y=this.x=0;this.chart=d;this.options=f;this.renderer=d.renderer;this.init(e,f,d)}e.prototype.addEvents=function(){var e=this.options.inverted?[1,0]:[0,1],f=this.scrollbarButtons,d=this.scrollbarGroup.element,
m=this.track.element,l=this.mouseDownHandler.bind(this),c=this.mouseMoveHandler.bind(this),a=this.mouseUpHandler.bind(this);e=[[f[e[0]].element,"click",this.buttonToMinClick.bind(this)],[f[e[1]].element,"click",this.buttonToMaxClick.bind(this)],[m,"click",this.trackClick.bind(this)],[d,"mousedown",l],[d.ownerDocument,"mousemove",c],[d.ownerDocument,"mouseup",a]];w&&e.push([d,"touchstart",l],[d.ownerDocument,"touchmove",c],[d.ownerDocument,"touchend",a]);e.forEach(function(a){z.apply(null,a)});this._events=
e};e.prototype.buttonToMaxClick=function(e){var f=(this.to-this.from)*A(this.options.step,.2);this.updatePosition(this.from+f,this.to+f);H(this,"changed",{from:this.from,to:this.to,trigger:"scrollbar",DOMEvent:e})};e.prototype.buttonToMinClick=function(e){var f=J(this.to-this.from)*A(this.options.step,.2);this.updatePosition(J(this.from-f),J(this.to-f));H(this,"changed",{from:this.from,to:this.to,trigger:"scrollbar",DOMEvent:e})};e.prototype.cursorToScrollbarPosition=function(e){var f=this.options;
f=f.minWidth>this.calculatedWidth?f.minWidth:0;return{chartX:(e.chartX-this.x-this.xOffset)/(this.barWidth-f),chartY:(e.chartY-this.y-this.yOffset)/(this.barWidth-f)}};e.prototype.destroy=function(){var e=this.chart.scroller;this.removeEvents();["track","scrollbarRifles","scrollbar","scrollbarGroup","group"].forEach(function(f){this[f]&&this[f].destroy&&(this[f]=this[f].destroy())},this);e&&this===e.scrollbar&&(e.scrollbar=null,m(e.scrollbarButtons))};e.prototype.drawScrollbarButton=function(e){var f=
this.renderer,d=this.scrollbarButtons,h=this.options,l=this.size;var c=f.g().add(this.group);d.push(c);c=f.rect().addClass("highcharts-scrollbar-button").add(c);this.chart.styledMode||c.attr({stroke:h.buttonBorderColor,"stroke-width":h.buttonBorderWidth,fill:h.buttonBackgroundColor});c.attr(c.crisp({x:-.5,y:-.5,width:l+1,height:l+1,r:h.buttonBorderRadius},c.strokeWidth()));c=f.path(u([["M",l/2+(e?-1:1),l/2-3],["L",l/2+(e?-1:1),l/2+3],["L",l/2+(e?2:-2),l/2]],h.vertical)).addClass("highcharts-scrollbar-arrow").add(d[e]);
this.chart.styledMode||c.attr({fill:h.buttonArrowColor})};e.prototype.init=function(h,f,d){this.scrollbarButtons=[];this.renderer=h;this.userOptions=f;this.options=M(e.defaultOptions,f);this.chart=d;this.size=A(this.options.size,this.options.height);f.enabled&&(this.render(),this.addEvents())};e.prototype.mouseDownHandler=function(e){e=this.chart.pointer.normalize(e);e=this.cursorToScrollbarPosition(e);this.chartX=e.chartX;this.chartY=e.chartY;this.initPositions=[this.from,this.to];this.grabbedCenter=
!0};e.prototype.mouseMoveHandler=function(e){var f=this.chart.pointer.normalize(e),d=this.options.vertical?"chartY":"chartX",h=this.initPositions||[];!this.grabbedCenter||e.touches&&0===e.touches[0][d]||(f=this.cursorToScrollbarPosition(f)[d],d=this[d],d=f-d,this.hasDragged=!0,this.updatePosition(h[0]+d,h[1]+d),this.hasDragged&&H(this,"changed",{from:this.from,to:this.to,trigger:"scrollbar",DOMType:e.type,DOMEvent:e}))};e.prototype.mouseUpHandler=function(e){this.hasDragged&&H(this,"changed",{from:this.from,
to:this.to,trigger:"scrollbar",DOMType:e.type,DOMEvent:e});this.grabbedCenter=this.hasDragged=this.chartX=this.chartY=null};e.prototype.position=function(e,f,d,m){var h=this.options.vertical,c=0,a=this.rendered?"animate":"attr";this.x=e;this.y=f+this.trackBorderWidth;this.width=d;this.xOffset=this.height=m;this.yOffset=c;h?(this.width=this.yOffset=d=c=this.size,this.xOffset=f=0,this.barWidth=m-2*d,this.x=e+=this.options.margin):(this.height=this.xOffset=m=f=this.size,this.barWidth=d-2*m,this.y+=this.options.margin);
this.group[a]({translateX:e,translateY:this.y});this.track[a]({width:d,height:m});this.scrollbarButtons[1][a]({translateX:h?0:d-f,translateY:h?m-c:0})};e.prototype.removeEvents=function(){this._events.forEach(function(e){K.apply(null,e)});this._events.length=0};e.prototype.render=function(){var e=this.renderer,f=this.options,d=this.size,m=this.chart.styledMode,l;this.group=l=e.g("scrollbar").attr({zIndex:f.zIndex,translateY:-99999}).add();this.track=e.rect().addClass("highcharts-scrollbar-track").attr({x:0,
r:f.trackBorderRadius||0,height:d,width:d}).add(l);m||this.track.attr({fill:f.trackBackgroundColor,stroke:f.trackBorderColor,"stroke-width":f.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=e.g().add(l);this.scrollbar=e.rect().addClass("highcharts-scrollbar-thumb").attr({height:d,width:d,r:f.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=e.path(u([["M",-3,d/4],["L",-3,2*d/3],["M",0,d/4],["L",
0,2*d/3],["M",3,d/4],["L",3,2*d/3]],f.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);m||(this.scrollbar.attr({fill:f.barBackgroundColor,stroke:f.barBorderColor,"stroke-width":f.barBorderWidth}),this.scrollbarRifles.attr({stroke:f.rifleColor,"stroke-width":1}));this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);this.drawScrollbarButton(1)};e.prototype.setRange=
function(e,f){var d=this.options,h=d.vertical,l=d.minWidth,c=this.barWidth,a,m=!this.rendered||this.hasDragged||this.chart.navigator&&this.chart.navigator.hasDragged?"attr":"animate";if(G(c)){e=Math.max(e,0);var r=Math.ceil(c*e);this.calculatedWidth=a=J(c*Math.min(f,1)-r);a<l&&(r=(c-l+a)*e,a=l);l=Math.floor(r+this.xOffset+this.yOffset);c=a/2-.5;this.from=e;this.to=f;h?(this.scrollbarGroup[m]({translateY:l}),this.scrollbar[m]({height:a}),this.scrollbarRifles[m]({translateY:c}),this.scrollbarTop=l,
this.scrollbarLeft=0):(this.scrollbarGroup[m]({translateX:l}),this.scrollbar[m]({width:a}),this.scrollbarRifles[m]({translateX:c}),this.scrollbarLeft=l,this.scrollbarTop=0);12>=a?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0);!1===d.showFull&&(0>=e&&1<=f?this.group.hide():this.group.show());this.rendered=!0}};e.prototype.trackClick=function(e){var f=this.chart.pointer.normalize(e),d=this.to-this.from,h=this.y+this.scrollbarTop,l=this.x+this.scrollbarLeft;this.options.vertical&&f.chartY>
h||!this.options.vertical&&f.chartX>l?this.updatePosition(this.from+d,this.to+d):this.updatePosition(this.from-d,this.to-d);H(this,"changed",{from:this.from,to:this.to,trigger:"scrollbar",DOMEvent:e})};e.prototype.update=function(e){this.destroy();this.init(this.chart.renderer,M(!0,this.options,e),this.chart)};e.prototype.updatePosition=function(e,f){1<f&&(e=J(1-J(f-e)),f=1);0>e&&(f=J(f-e),e=0);this.from=e;this.to=f};e.defaultOptions={height:r?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:void 0,
margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};return e}();e.Scrollbar||(B.scrollbar=M(!0,D.defaultOptions,B.scrollbar),e.Scrollbar=D,q.compose(p,D));return e.Scrollbar});O(q,"parts/Navigator.js",[q["parts/Axis.js"],q["parts/Chart.js"],
q["parts/Color.js"],q["parts/Globals.js"],q["parts/NavigatorAxis.js"],q["parts/Options.js"],q["parts/Scrollbar.js"],q["parts/Utilities.js"]],function(p,e,q,B,D,z,J,G){q=q.parse;var m=z.defaultOptions,H=G.addEvent,M=G.clamp,A=G.correctFloat,K=G.defined,w=G.destroyObjectProperties,r=G.erase,u=G.extend,C=G.find,h=G.isArray,f=G.isNumber,d=G.merge,t=G.pick,l=G.removeEvent,c=G.splat,a=B.hasTouch,x=B.isTouchDevice;z=B.Series;var v=function(a){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];c=
[].filter.call(c,f);if(c.length)return Math[a].apply(0,c)};G="undefined"===typeof B.seriesTypes.areaspline?"line":"areaspline";u(m,{navigator:{height:40,margin:25,maskInside:!0,handles:{width:7,height:15,symbols:["navigator-handle","navigator-handle"],enabled:!0,lineWidth:1,backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:q("#6685c2").setOpacity(.3).get(),outlineColor:"#cccccc",outlineWidth:1,series:{type:G,fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,
groupPixelWidth:2,smoothed:!0,units:[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2,3,4]],["week",[1,2,3]],["month",[1,3,6]],["year",null]]},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},threshold:null},xAxis:{overscroll:0,className:"highcharts-navigator-xaxis",tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",
gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});B.Renderer.prototype.symbols["navigator-handle"]=function(a,c,d,f,e){a=(e&&e.width||0)/2;c=Math.round(a/3)+.5;e=e&&e.height||0;return[["M",-a-1,.5],["L",a,.5],["L",a,e+.5],["L",-a-1,e+.5],["L",-a-
1,.5],["M",-c,4],["L",-c,e-3],["M",c-1,4],["L",c-1,e-3]]};var E=function(){function e(a){this.zoomedMin=this.zoomedMax=this.yAxis=this.xAxis=this.top=this.size=this.shades=this.rendered=this.range=this.outlineHeight=this.outline=this.opposite=this.navigatorSize=this.navigatorSeries=this.navigatorOptions=this.navigatorGroup=this.navigatorEnabled=this.left=this.height=this.handles=this.chart=this.baseSeries=void 0;this.init(a)}e.prototype.drawHandle=function(a,c,d,f){var g=this.navigatorOptions.handles.height;
this.handles[c][f](d?{translateX:Math.round(this.left+this.height/2),translateY:Math.round(this.top+parseInt(a,10)+.5-g)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+this.height/2-g/2-1)})};e.prototype.drawOutline=function(a,c,d,f){var g=this.navigatorOptions.maskInside,b=this.outline.strokeWidth(),k=b/2,e=b%2/2;b=this.outlineHeight;var h=this.scrollbarHeight||0,l=this.size,m=this.left-h,t=this.top;d?(m-=k,d=t+c+e,c=t+a+e,e=[["M",m+b,t-h-e],["L",m+b,d],["L",m,d],
["L",m,c],["L",m+b,c],["L",m+b,t+l+h]],g&&e.push(["M",m+b,d-k],["L",m+b,c+k])):(a+=m+h-e,c+=m+h-e,t+=k,e=[["M",m,t],["L",a,t],["L",a,t+b],["L",c,t+b],["L",c,t],["L",m+l+2*h,t]],g&&e.push(["M",a-k,t],["L",c+k,t]));this.outline[f]({d:e})};e.prototype.drawMasks=function(a,c,d,f){var g=this.left,b=this.top,k=this.height;if(d){var e=[g,g,g];var h=[b,b+a,b+c];var l=[k,k,k];var m=[a,c-a,this.size-c]}else e=[g,g+a,g+c],h=[b,b,b],l=[a,c-a,this.size-c],m=[k,k,k];this.shades.forEach(function(a,b){a[f]({x:e[b],
y:h[b],width:l[b],height:m[b]})})};e.prototype.renderElements=function(){var a=this,c=a.navigatorOptions,d=c.maskInside,f=a.chart,g=f.renderer,b,e={cursor:f.inverted?"ns-resize":"ew-resize"};a.navigatorGroup=b=g.g("navigator").attr({zIndex:8,visibility:"hidden"}).add();[!d,d,!d].forEach(function(d,k){a.shades[k]=g.rect().addClass("highcharts-navigator-mask"+(1===k?"-inside":"-outside")).add(b);f.styledMode||a.shades[k].attr({fill:d?c.maskFill:"rgba(0,0,0,0)"}).css(1===k&&e)});a.outline=g.path().addClass("highcharts-navigator-outline").add(b);
f.styledMode||a.outline.attr({"stroke-width":c.outlineWidth,stroke:c.outlineColor});c.handles.enabled&&[0,1].forEach(function(d){c.handles.inverted=f.inverted;a.handles[d]=g.symbol(c.handles.symbols[d],-c.handles.width/2-1,0,c.handles.width,c.handles.height,c.handles);a.handles[d].attr({zIndex:7-d}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][d]).add(b);if(!f.styledMode){var k=c.handles;a.handles[d].attr({fill:k.backgroundColor,stroke:k.borderColor,"stroke-width":k.lineWidth}).css(e)}})};
e.prototype.update=function(a){(this.series||[]).forEach(function(a){a.baseSeries&&delete a.baseSeries.navigatorSeries});this.destroy();d(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)};e.prototype.render=function(a,c,d,e){var g=this.chart,b=this.scrollbarHeight,k,h=this.xAxis,l=h.pointRange||0;var m=h.navigatorAxis.fake?g.xAxis[0]:h;var r=this.navigatorEnabled,p,u=this.rendered;var y=g.inverted;var v=g.xAxis[0].minRange,q=g.xAxis[0].options.maxRange;if(!this.hasDragged||K(d)){a=
A(a-l/2);c=A(c+l/2);if(!f(a)||!f(c))if(u)d=0,e=t(h.width,m.width);else return;this.left=t(h.left,g.plotLeft+b+(y?g.plotWidth:0));this.size=p=k=t(h.len,(y?g.plotHeight:g.plotWidth)-2*b);g=y?b:k+2*b;d=t(d,h.toPixels(a,!0));e=t(e,h.toPixels(c,!0));f(d)&&Infinity!==Math.abs(d)||(d=0,e=g);a=h.toValue(d,!0);c=h.toValue(e,!0);var x=Math.abs(A(c-a));x<v?this.grabbedLeft?d=h.toPixels(c-v-l,!0):this.grabbedRight&&(e=h.toPixels(a+v+l,!0)):K(q)&&A(x-l)>q&&(this.grabbedLeft?d=h.toPixels(c-q-l,!0):this.grabbedRight&&
(e=h.toPixels(a+q+l,!0)));this.zoomedMax=M(Math.max(d,e),0,p);this.zoomedMin=M(this.fixedWidth?this.zoomedMax-this.fixedWidth:Math.min(d,e),0,p);this.range=this.zoomedMax-this.zoomedMin;p=Math.round(this.zoomedMax);d=Math.round(this.zoomedMin);r&&(this.navigatorGroup.attr({visibility:"visible"}),u=u&&!this.hasDragged?"animate":"attr",this.drawMasks(d,p,y,u),this.drawOutline(d,p,y,u),this.navigatorOptions.handles.enabled&&(this.drawHandle(d,0,y,u),this.drawHandle(p,1,y,u)));this.scrollbar&&(y?(y=this.top-
b,m=this.left-b+(r||!m.opposite?0:(m.titleOffset||0)+m.axisTitleMargin),b=k+2*b):(y=this.top+(r?this.height:-b),m=this.left-b),this.scrollbar.position(m,y,g,b),this.scrollbar.setRange(this.zoomedMin/(k||1),this.zoomedMax/(k||1)));this.rendered=!0}};e.prototype.addMouseEvents=function(){var c=this,d=c.chart,f=d.container,e=[],g,b;c.mouseMoveHandler=g=function(a){c.onMouseMove(a)};c.mouseUpHandler=b=function(a){c.onMouseUp(a)};e=c.getPartsEvents("mousedown");e.push(H(d.renderTo,"mousemove",g),H(f.ownerDocument,
"mouseup",b));a&&(e.push(H(d.renderTo,"touchmove",g),H(f.ownerDocument,"touchend",b)),e.concat(c.getPartsEvents("touchstart")));c.eventsToUnbind=e;c.series&&c.series[0]&&e.push(H(c.series[0].xAxis,"foundExtremes",function(){d.navigator.modifyNavigatorAxisExtremes()}))};e.prototype.getPartsEvents=function(a){var c=this,d=[];["shades","handles"].forEach(function(f){c[f].forEach(function(g,b){d.push(H(g.element,a,function(a){c[f+"Mousedown"](a,b)}))})});return d};e.prototype.shadesMousedown=function(a,
c){a=this.chart.pointer.normalize(a);var d=this.chart,f=this.xAxis,g=this.zoomedMin,b=this.left,k=this.size,e=this.range,h=a.chartX;d.inverted&&(h=a.chartY,b=this.top);if(1===c)this.grabbedCenter=h,this.fixedWidth=e,this.dragOffset=h-g;else{a=h-b-e/2;if(0===c)a=Math.max(0,a);else if(2===c&&a+e>=k)if(a=k-e,this.reversedExtremes){a-=e;var l=this.getUnionExtremes().dataMin}else var m=this.getUnionExtremes().dataMax;a!==g&&(this.fixedWidth=e,c=f.navigatorAxis.toFixedRange(a,a+e,l,m),K(c.min)&&d.xAxis[0].setExtremes(Math.min(c.min,
c.max),Math.max(c.min,c.max),!0,null,{trigger:"navigator"}))}};e.prototype.handlesMousedown=function(a,c){this.chart.pointer.normalize(a);a=this.chart;var d=a.xAxis[0],f=this.reversedExtremes;0===c?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=f?d.min:d.max):(this.grabbedRight=!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=f?d.max:d.min);a.fixedRange=null};e.prototype.onMouseMove=function(a){var c=this,d=c.chart,f=c.left,g=c.navigatorSize,b=c.range,k=c.dragOffset,
e=d.inverted;a.touches&&0===a.touches[0].pageX||(a=d.pointer.normalize(a),d=a.chartX,e&&(f=c.top,d=a.chartY),c.grabbedLeft?(c.hasDragged=!0,c.render(0,0,d-f,c.otherHandlePos)):c.grabbedRight?(c.hasDragged=!0,c.render(0,0,c.otherHandlePos,d-f)):c.grabbedCenter&&(c.hasDragged=!0,d<k?d=k:d>g+k-b&&(d=g+k-b),c.render(0,0,d-k,d-k+b)),c.hasDragged&&c.scrollbar&&t(c.scrollbar.options.liveRedraw,B.svg&&!x&&!this.chart.isBoosting)&&(a.DOMType=a.type,setTimeout(function(){c.onMouseUp(a)},0)))};e.prototype.onMouseUp=
function(a){var c=this.chart,d=this.xAxis,f=this.scrollbar,g=a.DOMEvent||a,b=c.inverted,k=this.rendered&&!this.hasDragged?"animate":"attr",e=Math.round(this.zoomedMax),h=Math.round(this.zoomedMin);if(this.hasDragged&&(!f||!f.hasDragged)||"scrollbar"===a.trigger){f=this.getUnionExtremes();if(this.zoomedMin===this.otherHandlePos)var l=this.fixedExtreme;else if(this.zoomedMax===this.otherHandlePos)var m=this.fixedExtreme;this.zoomedMax===this.size&&(m=this.reversedExtremes?f.dataMin:f.dataMax);0===this.zoomedMin&&
(l=this.reversedExtremes?f.dataMax:f.dataMin);d=d.navigatorAxis.toFixedRange(this.zoomedMin,this.zoomedMax,l,m);K(d.min)&&c.xAxis[0].setExtremes(Math.min(d.min,d.max),Math.max(d.min,d.max),!0,this.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:g})}"mousemove"!==a.DOMType&&"touchmove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null);this.navigatorEnabled&&(this.shades&&
this.drawMasks(h,e,b,k),this.outline&&this.drawOutline(h,e,b,k),this.navigatorOptions.handles.enabled&&Object.keys(this.handles).length===this.handles.length&&(this.drawHandle(h,0,b,k),this.drawHandle(e,1,b,k)))};e.prototype.removeEvents=function(){this.eventsToUnbind&&(this.eventsToUnbind.forEach(function(a){a()}),this.eventsToUnbind=void 0);this.removeBaseSeriesEvents()};e.prototype.removeBaseSeriesEvents=function(){var a=this.baseSeries||[];this.navigatorEnabled&&a[0]&&(!1!==this.navigatorOptions.adaptToUpdatedData&&
a.forEach(function(a){l(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&l(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))};e.prototype.init=function(a){var c=a.options,f=c.navigator,e=f.enabled,g=c.scrollbar,b=g.enabled;c=e?f.height:0;var k=b?g.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=c;this.scrollbarHeight=k;this.scrollbarEnabled=b;this.navigatorEnabled=e;this.navigatorOptions=f;this.scrollbarOptions=g;this.outlineHeight=c+k;this.opposite=
t(f.opposite,!(e||!a.inverted));var h=this;e=h.baseSeries;g=a.xAxis.length;b=a.yAxis.length;var l=e&&e[0]&&e[0].xAxis||a.xAxis[0]||{options:{}};a.isDirtyBox=!0;h.navigatorEnabled?(h.xAxis=new p(a,d({breaks:l.options.breaks,ordinal:l.options.ordinal},f.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",isX:!0,type:"datetime",index:g,isInternal:!0,offset:0,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[k,0,-k,0],width:c}:{offsets:[0,
-k,0,k],height:c})),h.yAxis=new p(a,d(f.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:b,isInternal:!0,zoomEnabled:!1},a.inverted?{width:c}:{height:c})),e||f.series.data?h.updateNavigatorSeries(!1):0===a.series.length&&(h.unbindRedraw=H(a,"beforeRedraw",function(){0<a.series.length&&!h.series&&(h.setBaseSeries(),h.unbindRedraw())})),h.reversedExtremes=a.inverted&&!h.xAxis.reversed||!a.inverted&&h.xAxis.reversed,h.renderElements(),h.addMouseEvents()):(h.xAxis={chart:a,navigatorAxis:{fake:!0},
translate:function(b,c){var d=a.xAxis[0],g=d.getExtremes(),f=d.len-2*k,e=v("min",d.options.min,g.dataMin);d=v("max",d.options.max,g.dataMax)-e;return c?b*d/f+e:f*(b-e)/d},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)}},h.xAxis.navigatorAxis.axis=h.xAxis,h.xAxis.navigatorAxis.toFixedRange=D.AdditionsClass.prototype.toFixedRange.bind(h.xAxis.navigatorAxis));a.options.scrollbar.enabled&&(a.scrollbar=h.scrollbar=new J(a.renderer,d(a.options.scrollbar,{margin:h.navigatorEnabled?
0:10,vertical:a.inverted}),a),H(h.scrollbar,"changed",function(b){var c=h.size,d=c*this.to;c*=this.from;h.hasDragged=h.scrollbar.hasDragged;h.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType&&"touchmove"!==b.DOMType)&&setTimeout(function(){h.onMouseUp(b)})}));h.addBaseSeriesEvents();h.addChartEvents()};e.prototype.getUnionExtremes=function(a){var c=this.chart.xAxis[0],d=this.xAxis,f=d.options,g=c.options,b;a&&null===c.dataMin||(b={dataMin:t(f&&f.min,v("min",g.min,c.dataMin,
d.dataMin,d.min)),dataMax:t(f&&f.max,v("max",g.max,c.dataMax,d.dataMax,d.max))});return b};e.prototype.setBaseSeries=function(a,c){var d=this.chart,f=this.baseSeries=[];a=a||d.options&&d.options.navigator.baseSeries||(d.series.length?C(d.series,function(a){return!a.options.isInternal}).index:0);(d.series||[]).forEach(function(c,b){c.options.isInternal||!c.options.showInNavigator&&(b!==a&&c.options.id!==a||!1===c.options.showInNavigator)||f.push(c)});this.xAxis&&!this.xAxis.navigatorAxis.fake&&this.updateNavigatorSeries(!0,
c)};e.prototype.updateNavigatorSeries=function(a,f){var e=this,k=e.chart,g=e.baseSeries,b,n,r=e.navigatorOptions.series,p,v={enableMouseTracking:!1,index:null,linkedTo:null,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:void 0,isInternal:!0,states:{inactive:{opacity:1}}},q=e.series=(e.series||[]).filter(function(a){var b=a.baseSeries;return 0>g.indexOf(b)?(b&&(l(b,"updatedData",e.updatedDataHandler),delete b.navigatorSeries),a.chart&&a.destroy(),
!1):!0});g&&g.length&&g.forEach(function(a){var c=a.navigatorSeries,l=u({color:a.color,visible:a.visible},h(r)?m.navigator.series:r);c&&!1===e.navigatorOptions.adaptToUpdatedData||(v.name="Navigator "+g.length,b=a.options||{},p=b.navigatorOptions||{},n=d(b,v,l,p),n.pointRange=t(l.pointRange,p.pointRange,m.plotOptions[n.type||"line"].pointRange),l=p.data||l.data,e.hasNavigatorData=e.hasNavigatorData||!!l,n.data=l||b.data&&b.data.slice(0),c&&c.options?c.update(n,f):(a.navigatorSeries=k.initSeries(n),
a.navigatorSeries.baseSeries=a,q.push(a.navigatorSeries)))});if(r.data&&(!g||!g.length)||h(r))e.hasNavigatorData=!1,r=c(r),r.forEach(function(a,b){v.name="Navigator "+(q.length+1);n=d(m.navigator.series,{color:k.series[b]&&!k.series[b].options.isInternal&&k.series[b].color||k.options.colors[b]||k.options.colors[0]},v,a);n.data=a.data;n.data&&(e.hasNavigatorData=!0,q.push(k.initSeries(n)))});a&&this.addBaseSeriesEvents()};e.prototype.addBaseSeriesEvents=function(){var a=this,c=a.baseSeries||[];c[0]&&
c[0].xAxis&&H(c[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);c.forEach(function(c){H(c,"show",function(){this.navigatorSeries&&this.navigatorSeries.setVisible(!0,!1)});H(c,"hide",function(){this.navigatorSeries&&this.navigatorSeries.setVisible(!1,!1)});!1!==this.navigatorOptions.adaptToUpdatedData&&c.xAxis&&H(c,"updatedData",this.updatedDataHandler);H(c,"remove",function(){this.navigatorSeries&&(r(a.series,this.navigatorSeries),K(this.navigatorSeries.options)&&this.navigatorSeries.remove(!1),
delete this.navigatorSeries)})},this)};e.prototype.getBaseSeriesMin=function(a){return this.baseSeries.reduce(function(a,c){return Math.min(a,c.xData?c.xData[0]:a)},a)};e.prototype.modifyNavigatorAxisExtremes=function(){var a=this.xAxis,c;"undefined"!==typeof a.getExtremes&&(!(c=this.getUnionExtremes(!0))||c.dataMin===a.min&&c.dataMax===a.max||(a.min=c.dataMin,a.max=c.dataMax))};e.prototype.modifyBaseAxisExtremes=function(){var a=this.chart.navigator,c=this.getExtremes(),d=c.dataMin,e=c.dataMax;c=
c.max-c.min;var g=a.stickToMin,b=a.stickToMax,h=t(this.options.overscroll,0),l=a.series&&a.series[0],m=!!this.setExtremes;if(!this.eventArgs||"rangeSelectorButton"!==this.eventArgs.trigger){if(g){var r=d;var p=r+c}b&&(p=e+h,g||(r=Math.max(d,p-c,a.getBaseSeriesMin(l&&l.xData?l.xData[0]:-Number.MAX_VALUE))));m&&(g||b)&&f(r)&&(this.min=this.userMin=r,this.max=this.userMax=p)}a.stickToMin=a.stickToMax=null};e.prototype.updatedDataHandler=function(){var a=this.chart.navigator,c=this.navigatorSeries,d=
a.getBaseSeriesMin(this.xData[0]);a.stickToMax=a.reversedExtremes?0===Math.round(a.zoomedMin):Math.round(a.zoomedMax)>=Math.round(a.size);a.stickToMin=f(this.xAxis.min)&&this.xAxis.min<=d&&(!this.chart.fixedRange||!a.stickToMax);c&&!a.hasNavigatorData&&(c.options.pointStart=this.xData[0],c.setData(this.options.data,!1,null,!1))};e.prototype.addChartEvents=function(){this.eventsToUnbind||(this.eventsToUnbind=[]);this.eventsToUnbind.push(H(this.chart,"redraw",function(){var a=this.navigator,c=a&&(a.baseSeries&&
a.baseSeries[0]&&a.baseSeries[0].xAxis||this.xAxis[0]);c&&a.render(c.min,c.max)}),H(this.chart,"getMargins",function(){var a=this.navigator,c=a.opposite?"plotTop":"marginBottom";this.inverted&&(c=a.opposite?"marginRight":"plotLeft");this[c]=(this[c]||0)+(a.navigatorEnabled||!this.inverted?a.outlineHeight:0)+a.navigatorOptions.margin}))};e.prototype.destroy=function(){this.removeEvents();this.xAxis&&(r(this.chart.xAxis,this.xAxis),r(this.chart.axes,this.xAxis));this.yAxis&&(r(this.chart.yAxis,this.yAxis),
r(this.chart.axes,this.yAxis));(this.series||[]).forEach(function(a){a.destroy&&a.destroy()});"series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" ").forEach(function(a){this[a]&&this[a].destroy&&this[a].destroy();this[a]=null},this);[this.handles].forEach(function(a){w(a)},this)};return e}();B.Navigator||(B.Navigator=E,D.compose(p),H(e,"beforeShowResetZoom",function(){var a=this.options,c=a.navigator,d=a.rangeSelector;if((c&&
c.enabled||d&&d.enabled)&&(!x&&"x"===a.chart.zoomType||x&&"x"===a.chart.pinchType))return!1}),H(e,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=this.navigator=new E(this)}),H(e,"afterSetChartSize",function(){var a=this.legend,c=this.navigator;if(c){var d=a&&a.options;var f=c.xAxis;var e=c.yAxis;var g=c.scrollbarHeight;this.inverted?(c.left=c.opposite?this.chartWidth-g-c.height:this.spacing[3]+g,c.top=this.plotTop+g):(c.left=this.plotLeft+g,
c.top=c.navigatorOptions.top||this.chartHeight-c.height-g-this.spacing[2]-(this.rangeSelector&&this.extraBottomMargin?this.rangeSelector.getHeight():0)-(d&&"bottom"===d.verticalAlign&&"proximate"!==d.layout&&d.enabled&&!d.floating?a.legendHeight+t(d.margin,10):0)-(this.titleOffset?this.titleOffset[2]:0));f&&e&&(this.inverted?f.options.left=e.options.left=c.left:f.options.top=e.options.top=c.top,f.setAxisSize(),e.setAxisSize())}}),H(e,"update",function(a){var c=a.options.navigator||{},f=a.options.scrollbar||
{};this.navigator||this.scroller||!c.enabled&&!f.enabled||(d(!0,this.options.navigator,c),d(!0,this.options.scrollbar,f),delete a.options.navigator,delete a.options.scrollbar)}),H(e,"afterUpdate",function(a){this.navigator||this.scroller||!this.options.navigator.enabled&&!this.options.scrollbar.enabled||(this.scroller=this.navigator=new E(this),t(a.redraw,!0)&&this.redraw(a.animation))}),H(e,"afterAddSeries",function(){this.navigator&&this.navigator.setBaseSeries(null,!1)}),H(z,"afterUpdate",function(){this.chart.navigator&&
!this.options.isInternal&&this.chart.navigator.setBaseSeries(null,!1)}),e.prototype.callbacks.push(function(a){var c=a.navigator;c&&a.xAxis[0]&&(a=a.xAxis[0].getExtremes(),c.render(a.min,a.max))}));B.Navigator=E;return B.Navigator});O(q,"parts/OrdinalAxis.js",[q["parts/Axis.js"],q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e,q){var B=q.addEvent,D=q.css,z=q.defined,J=q.pick,G=q.timeUnits;q=e.Chart;var m=e.Series,H;(function(m){var p=function(){function m(e){this.index={};this.axis=e}m.prototype.beforeSetTickPositions=
function(){var e=this.axis,m=e.ordinal,p=[],q,h=!1,f=e.getExtremes(),d=f.min,t=f.max,l,c=e.isXAxis&&!!e.options.breaks;f=e.options.ordinal;var a=Number.MAX_VALUE,x=e.chart.options.chart.ignoreHiddenSeries,v;if(f||c){e.series.forEach(function(d,f){q=[];if(!(x&&!1===d.visible||!1===d.takeOrdinalPosition&&!c)&&(p=p.concat(d.processedXData),E=p.length,p.sort(function(a,c){return a-c}),a=Math.min(a,J(d.closestPointRange,a)),E)){for(f=0;f<E-1;)p[f]!==p[f+1]&&q.push(p[f+1]),f++;q[0]!==p[0]&&q.unshift(p[0]);
p=q}d.isSeriesBoosting&&(v=!0)});v&&(p.length=0);var E=p.length;if(2<E){var F=p[1]-p[0];for(l=E-1;l--&&!h;)p[l+1]-p[l]!==F&&(h=!0);!e.options.keepOrdinalPadding&&(p[0]-d>F||t-p[p.length-1]>F)&&(h=!0)}else e.options.overscroll&&(2===E?a=p[1]-p[0]:1===E?(a=e.options.overscroll,p=[p[0],p[0]+a]):a=m.overscrollPointsRange);h?(e.options.overscroll&&(m.overscrollPointsRange=a,p=p.concat(m.getOverscrollPositions())),m.positions=p,F=e.ordinal2lin(Math.max(d,p[0]),!0),l=Math.max(e.ordinal2lin(Math.min(t,p[p.length-
1]),!0),1),m.slope=t=(t-d)/(l-F),m.offset=d-F*t):(m.overscrollPointsRange=J(e.closestPointRange,m.overscrollPointsRange),m.positions=e.ordinal.slope=m.offset=void 0)}e.isOrdinal=f&&h;m.groupIntervalFactor=null};m.prototype.getExtendedPositions=function(){var m=this,r=m.axis,p=r.constructor.prototype,q=r.chart,h=r.series[0].currentDataGrouping,f=m.index,d=h?h.count+h.unitName:"raw",t=r.options.overscroll,l=r.getExtremes(),c;f||(f=m.index={});if(!f[d]){var a={series:[],chart:q,getExtremes:function(){return{min:l.dataMin,
max:l.dataMax+t}},options:{ordinal:!0},ordinal:{},ordinal2lin:p.ordinal2lin,val2lin:p.val2lin};a.ordinal.axis=a;r.series.forEach(function(d){c={xAxis:a,xData:d.xData.slice(),chart:q,destroyGroupedData:e.noop,getProcessedData:e.Series.prototype.getProcessedData};c.xData=c.xData.concat(m.getOverscrollPositions());c.options={dataGrouping:h?{enabled:!0,forced:!0,approximation:"open",units:[[h.unitName,[h.count]]]}:{enabled:!1}};d.processData.apply(c);a.series.push(c)});r.ordinal.beforeSetTickPositions.apply({axis:a});
f[d]=a.ordinal.positions}return f[d]};m.prototype.getGroupIntervalFactor=function(e,m,p){p=p.processedXData;var r=p.length,h=[];var f=this.groupIntervalFactor;if(!f){for(f=0;f<r-1;f++)h[f]=p[f+1]-p[f];h.sort(function(d,f){return d-f});h=h[Math.floor(r/2)];e=Math.max(e,p[0]);m=Math.min(m,p[r-1]);this.groupIntervalFactor=f=r*h/(m-e)}return f};m.prototype.getOverscrollPositions=function(){var e=this.axis,m=e.options.overscroll,p=this.overscrollPointsRange,q=[],h=e.dataMax;if(z(p))for(q.push(h);h<=e.dataMax+
m;)h+=p,q.push(h);return q};m.prototype.postProcessTickInterval=function(e){var m=this.axis,p=this.slope;return p?m.options.breaks?m.closestPointRange||e:e/(p/m.closestPointRange):e};return m}();m.Composition=p;m.compose=function(e,p,r){e.keepProps.push("ordinal");var q=e.prototype;e.prototype.getTimeTicks=function(e,h,f,d,m,l,c){void 0===m&&(m=[]);void 0===l&&(l=0);var a=0,t,r,p={},q=[],k=-Number.MAX_VALUE,u=this.options.tickPixelInterval,w=this.chart.time,C=[];if(!this.options.ordinal&&!this.options.breaks||
!m||3>m.length||"undefined"===typeof h)return w.getTimeTicks.apply(w,arguments);var g=m.length;for(t=0;t<g;t++){var b=t&&m[t-1]>f;m[t]<h&&(a=t);if(t===g-1||m[t+1]-m[t]>5*l||b){if(m[t]>k){for(r=w.getTimeTicks(e,m[a],m[t],d);r.length&&r[0]<=k;)r.shift();r.length&&(k=r[r.length-1]);C.push(q.length);q=q.concat(r)}a=t+1}if(b)break}r=r.info;if(c&&r.unitRange<=G.hour){t=q.length-1;for(a=1;a<t;a++)if(w.dateFormat("%d",q[a])!==w.dateFormat("%d",q[a-1])){p[q[a]]="day";var n=!0}n&&(p[q[0]]="day");r.higherRanks=
p}r.segmentStarts=C;q.info=r;if(c&&z(u)){a=C=q.length;n=[];var A;for(w=[];a--;)t=this.translate(q[a]),A&&(w[a]=A-t),n[a]=A=t;w.sort();w=w[Math.floor(w.length/2)];w<.6*u&&(w=null);a=q[C-1]>f?C-1:C;for(A=void 0;a--;)t=n[a],C=Math.abs(A-t),A&&C<.8*u&&(null===w||C<.8*w)?(p[q[a]]&&!p[q[a+1]]?(C=a+1,A=t):C=a,q.splice(C,1)):A=t}return q};q.lin2val=function(e,h){var f=this.ordinal,d=f.positions;if(d){var m=f.slope,l=f.offset;f=d.length-1;if(h)if(0>e)e=d[0];else if(e>f)e=d[f];else{f=Math.floor(e);var c=e-
f}else for(;f--;)if(h=m*f+l,e>=h){m=m*(f+1)+l;c=(e-h)/(m-h);break}return"undefined"!==typeof c&&"undefined"!==typeof d[f]?d[f]+(c?c*(d[f+1]-d[f]):0):e}return e};q.val2lin=function(e,h){var f=this.ordinal,d=f.positions;if(d){var m=d.length,l;for(l=m;l--;)if(d[l]===e){var c=l;break}for(l=m-1;l--;)if(e>d[l]||0===l){e=(e-d[l])/(d[l+1]-d[l]);c=l+e;break}h=h?c:f.slope*(c||0)+f.offset}else h=e;return h};q.ordinal2lin=q.val2lin;B(e,"afterInit",function(){this.ordinal||(this.ordinal=new m.Composition(this))});
B(e,"foundExtremes",function(){this.isXAxis&&z(this.options.overscroll)&&this.max===this.dataMax&&(!this.chart.mouseIsDown||this.isInternal)&&(!this.eventArgs||this.eventArgs&&"navigator"!==this.eventArgs.trigger)&&(this.max+=this.options.overscroll,!this.isInternal&&z(this.userMin)&&(this.min+=this.options.overscroll))});B(e,"afterSetScale",function(){this.horiz&&!this.isDirty&&(this.isDirty=this.isOrdinal&&this.chart.navigator&&!this.chart.navigator.adaptToUpdatedData)});B(e,"initialAxisTranslation",
function(){this.ordinal&&(this.ordinal.beforeSetTickPositions(),this.tickInterval=this.ordinal.postProcessTickInterval(this.tickInterval))});B(p,"pan",function(e){var h=this.xAxis[0],f=h.options.overscroll,d=e.originalEvent.chartX,m=this.options.chart&&this.options.chart.panning,l=!1;if(m&&"y"!==m.type&&h.options.ordinal&&h.series.length){var c=this.mouseDownX,a=h.getExtremes(),r=a.dataMax,p=a.min,q=a.max,u=this.hoverPoints,k=h.closestPointRange||h.ordinal&&h.ordinal.overscrollPointsRange;c=(c-d)/
(h.translationSlope*(h.ordinal.slope||k));var y={ordinal:{positions:h.ordinal.getExtendedPositions()}};k=h.lin2val;var w=h.val2lin;if(!y.ordinal.positions)l=!0;else if(1<Math.abs(c)){u&&u.forEach(function(a){a.setState()});if(0>c){u=y;var C=h.ordinal.positions?h:y}else u=h.ordinal.positions?h:y,C=y;y=C.ordinal.positions;r>y[y.length-1]&&y.push(r);this.fixedRange=q-p;c=h.navigatorAxis.toFixedRange(null,null,k.apply(u,[w.apply(u,[p,!0])+c,!0]),k.apply(C,[w.apply(C,[q,!0])+c,!0]));c.min>=Math.min(a.dataMin,
p)&&c.max<=Math.max(r,q)+f&&h.setExtremes(c.min,c.max,!0,!1,{trigger:"pan"});this.mouseDownX=d;D(this.container,{cursor:"move"})}}else l=!0;l||m&&/y/.test(m.type)?f&&(h.max=h.dataMax+f):e.preventDefault()});B(r,"updatedData",function(){var e=this.xAxis;e&&e.options.ordinal&&delete e.ordinal.index})}})(H||(H={}));H.compose(p,q,m);return H});O(q,"modules/broken-axis.src.js",[q["parts/Axis.js"],q["parts/Globals.js"],q["parts/Utilities.js"],q["parts/Stacking.js"]],function(p,e,q,B){var D=q.addEvent,z=
q.find,J=q.fireEvent,G=q.isArray,m=q.isNumber,H=q.pick,M=e.Series,A=function(){function e(e){this.hasBreaks=!1;this.axis=e}e.isInBreak=function(e,m){var r=e.repeat||Infinity,p=e.from,h=e.to-e.from;m=m>=p?(m-p)%r:r-(p-m)%r;return e.inclusive?m<=h:m<h&&0!==m};e.lin2Val=function(m){var r=this.brokenAxis;r=r&&r.breakArray;if(!r)return m;var p;for(p=0;p<r.length;p++){var q=r[p];if(q.from>=m)break;else q.to<m?m+=q.len:e.isInBreak(q,m)&&(m+=q.len)}return m};e.val2Lin=function(m){var r=this.brokenAxis;r=
r&&r.breakArray;if(!r)return m;var p=m,q;for(q=0;q<r.length;q++){var h=r[q];if(h.to<=m)p-=h.len;else if(h.from>=m)break;else if(e.isInBreak(h,m)){p-=m-h.from;break}}return p};e.prototype.findBreakAt=function(e,m){return z(m,function(m){return m.from<e&&e<m.to})};e.prototype.isInAnyBreak=function(m,r){var p=this.axis,q=p.options.breaks,h=q&&q.length,f;if(h){for(;h--;)if(e.isInBreak(q[h],m)){var d=!0;f||(f=H(q[h].showPoints,!p.isXAxis))}var t=d&&r?d&&!f:d}return t};e.prototype.setBreaks=function(m,
r){var q=this,w=q.axis,h=G(m)&&!!m.length;w.isDirty=q.hasBreaks!==h;q.hasBreaks=h;w.options.breaks=w.userOptions.breaks=m;w.forceRedraw=!0;w.series.forEach(function(f){f.isDirty=!0});h||w.val2lin!==e.val2Lin||(delete w.val2lin,delete w.lin2val);h&&(w.userOptions.ordinal=!1,w.lin2val=e.lin2Val,w.val2lin=e.val2Lin,w.setExtremes=function(f,d,e,h,c){if(q.hasBreaks){for(var a,l=this.options.breaks;a=q.findBreakAt(f,l);)f=a.to;for(;a=q.findBreakAt(d,l);)d=a.from;d<f&&(d=f)}p.prototype.setExtremes.call(this,
f,d,e,h,c)},w.setAxisTranslation=function(f){p.prototype.setAxisTranslation.call(this,f);q.unitLength=null;if(q.hasBreaks){f=w.options.breaks||[];var d=[],h=[],l=0,c,a=w.userMin||w.min,m=w.userMax||w.max,r=H(w.pointRangePadding,0),u;f.forEach(function(d){c=d.repeat||Infinity;e.isInBreak(d,a)&&(a+=d.to%c-a%c);e.isInBreak(d,m)&&(m-=m%c-d.from%c)});f.forEach(function(f){k=f.from;for(c=f.repeat||Infinity;k-c>a;)k-=c;for(;k<a;)k+=c;for(u=k;u<m;u+=c)d.push({value:u,move:"in"}),d.push({value:u+(f.to-f.from),
move:"out",size:f.breakSize})});d.sort(function(a,c){return a.value===c.value?("in"===a.move?0:1)-("in"===c.move?0:1):a.value-c.value});var F=0;var k=a;d.forEach(function(a){F+="in"===a.move?1:-1;1===F&&"in"===a.move&&(k=a.value);0===F&&(h.push({from:k,to:a.value,len:a.value-k-(a.size||0)}),l+=a.value-k-(a.size||0))});w.breakArray=q.breakArray=h;q.unitLength=m-a-l+r;J(w,"afterBreaks");w.staticScale?w.transA=w.staticScale:q.unitLength&&(w.transA*=(m-w.min+r)/q.unitLength);r&&(w.minPixelPadding=w.transA*
w.minPointOffset);w.min=a;w.max=m}});H(r,!0)&&w.chart.redraw()};return e}();e=function(){function e(){}e.compose=function(e,r){e.keepProps.push("brokenAxis");var p=M.prototype;p.drawBreaks=function(e,h){var f=this,d=f.points,t,l,c,a;if(e&&e.brokenAxis&&e.brokenAxis.hasBreaks){var r=e.brokenAxis;h.forEach(function(h){t=r&&r.breakArray||[];l=e.isXAxis?e.min:H(f.options.threshold,e.min);d.forEach(function(d){a=H(d["stack"+h.toUpperCase()],d[h]);t.forEach(function(f){if(m(l)&&m(a)){c=!1;if(l<f.from&&
a>f.to||l>f.from&&a<f.from)c="pointBreak";else if(l<f.from&&a>f.from&&a<f.to||l>f.from&&a>f.to&&a<f.from)c="pointInBreak";c&&J(e,c,{point:d,brk:f})}})})})}};p.gappedPath=function(){var e=this.currentDataGrouping,h=e&&e.gapSize;e=this.options.gapSize;var f=this.points.slice(),d=f.length-1,m=this.yAxis,l;if(e&&0<d)for("value"!==this.options.gapUnit&&(e*=this.basePointRange),h&&h>e&&h>=this.basePointRange&&(e=h),l=void 0;d--;)l&&!1!==l.visible||(l=f[d+1]),h=f[d],!1!==l.visible&&!1!==h.visible&&(l.x-
h.x>e&&(l=(h.x+l.x)/2,f.splice(d+1,0,{isNull:!0,x:l}),m.stacking&&this.options.stacking&&(l=m.stacking.stacks[this.stackKey][l]=new B(m,m.options.stackLabels,!1,l,this.stack),l.total=0)),l=h);return this.getGraphPath(f)};D(e,"init",function(){this.brokenAxis||(this.brokenAxis=new A(this))});D(e,"afterInit",function(){"undefined"!==typeof this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)});D(e,"afterSetTickPositions",function(){var e=this.brokenAxis;if(e&&e.hasBreaks){var h=this.tickPositions,
f=this.tickPositions.info,d=[],m;for(m=0;m<h.length;m++)e.isInAnyBreak(h[m])||d.push(h[m]);this.tickPositions=d;this.tickPositions.info=f}});D(e,"afterSetOptions",function(){this.brokenAxis&&this.brokenAxis.hasBreaks&&(this.options.ordinal=!1)});D(r,"afterGeneratePoints",function(){var e=this.options.connectNulls,h=this.points,f=this.xAxis,d=this.yAxis;if(this.isDirty)for(var m=h.length;m--;){var l=h[m],c=!(null===l.y&&!1===e)&&(f&&f.brokenAxis&&f.brokenAxis.isInAnyBreak(l.x,!0)||d&&d.brokenAxis&&
d.brokenAxis.isInAnyBreak(l.y,!0));l.visible=c?!1:!1!==l.options.visible}});D(r,"afterRender",function(){this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,H(this.pointArrayMap,["y"]))})};return e}();e.compose(p,M);return e});O(q,"masters/modules/broken-axis.src.js",[],function(){});O(q,"parts/DataGrouping.js",[q["parts/DateTimeAxis.js"],q["parts/Globals.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/Tooltip.js"],q["parts/Utilities.js"]],function(p,e,q,B,D,z){"";var J=z.addEvent,
G=z.arrayMax,m=z.arrayMin,H=z.correctFloat,M=z.defined,A=z.error,K=z.extend,w=z.format,r=z.isNumber,u=z.merge,C=z.pick,h=e.Axis;z=e.Series;var f=e.approximations={sum:function(a){var c=a.length;if(!c&&a.hasNulls)var d=null;else if(c)for(d=0;c--;)d+=a[c];return d},average:function(a){var c=a.length;a=f.sum(a);r(a)&&c&&(a=H(a/c));return a},averages:function(){var a=[];[].forEach.call(arguments,function(c){a.push(f.average(c))});return"undefined"===typeof a[0]?void 0:a},open:function(a){return a.length?
a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?G(a):a.hasNulls?null:void 0},low:function(a){return a.length?m(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:void 0},ohlc:function(a,c,d,e){a=f.open(a);c=f.high(c);d=f.low(d);e=f.close(e);if(r(a)||r(c)||r(d)||r(e))return[a,c,d,e]},range:function(a,c){a=f.low(a);c=f.high(c);if(r(a)||r(c))return[a,c];if(null===a&&null===c)return null}},d=function(a,c,d,e){var k=this,g=k.data,b=k.options&&k.options.data,
h=[],l=[],m=[],p=a.length,t=!!c,q=[],v=k.pointArrayMap,x=v&&v.length,y=["x"].concat(v||["y"]),w=0,F=0,E;e="function"===typeof e?e:f[e]?f[e]:f[k.getDGApproximation&&k.getDGApproximation()||"average"];x?v.forEach(function(){q.push([])}):q.push([]);var A=x||1;for(E=0;E<=p&&!(a[E]>=d[0]);E++);for(E;E<=p;E++){for(;"undefined"!==typeof d[w+1]&&a[E]>=d[w+1]||E===p;){var z=d[w];k.dataGroupInfo={start:k.cropStart+F,length:q[0].length};var B=e.apply(k,q);k.pointClass&&!M(k.dataGroupInfo.options)&&(k.dataGroupInfo.options=
u(k.pointClass.prototype.optionsToObject.call({series:k},k.options.data[k.cropStart+F])),y.forEach(function(a){delete k.dataGroupInfo.options[a]}));"undefined"!==typeof B&&(h.push(z),l.push(B),m.push(k.dataGroupInfo));F=E;for(z=0;z<A;z++)q[z].length=0,q[z].hasNulls=!1;w+=1;if(E===p)break}if(E===p)break;if(v)for(z=k.cropStart+E,B=g&&g[z]||k.pointClass.prototype.applyOptions.apply({series:k},[b[z]]),z=0;z<x;z++){var C=B[v[z]];r(C)?q[z].push(C):null===C&&(q[z].hasNulls=!0)}else z=t?c[E]:null,r(z)?q[0].push(z):
null===z&&(q[0].hasNulls=!0)}return{groupedXData:h,groupedYData:l,groupMap:m}},t={approximations:f,groupData:d},l=z.prototype,c=l.processData,a=l.generatePoints,x={groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],
week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},v={line:{},spline:{},area:{},areaspline:{},arearange:{},column:{groupPixelWidth:10},columnrange:{groupPixelWidth:10},candlestick:{groupPixelWidth:10},ohlc:{groupPixelWidth:5}},E=e.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",
null]];l.getDGApproximation=function(){return this.is("arearange")?"range":this.is("ohlc")?"ohlc":this.is("column")?"sum":"average"};l.groupData=d;l.processData=function(){var a=this.chart,d=this.options.dataGrouping,f=!1!==this.allowDG&&d&&C(d.enabled,a.options.isStock),e=this.visible||!a.options.chart.ignoreHiddenSeries,h,g=this.currentDataGrouping,b=!1;this.forceCrop=f;this.groupPixelWidth=null;this.hasProcessed=!0;f&&!this.requireSorting&&(this.requireSorting=b=!0);f=!1===c.apply(this,arguments)||
!f;b&&(this.requireSorting=!1);if(!f){this.destroyGroupedData();f=d.groupAll?this.xData:this.processedXData;var m=d.groupAll?this.yData:this.processedYData,r=a.plotSizeX;a=this.xAxis;var t=a.options.ordinal,q=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(q){this.isDirty=h=!0;this.points=null;b=a.getExtremes();var v=b.min;b=b.max;t=t&&a.ordinal&&a.ordinal.getGroupIntervalFactor(v,b,this)||1;q=q*(b-v)/r*t;r=a.getTimeTicks(p.AdditionsClass.prototype.normalizeTimeTickInterval(q,
d.units||E),Math.min(v,f[0]),Math.max(b,f[f.length-1]),a.options.startOfWeek,f,this.closestPointRange);m=l.groupData.apply(this,[f,m,r,d.approximation]);f=m.groupedXData;t=m.groupedYData;var u=0;if(d.smoothed&&f.length){var x=f.length-1;for(f[x]=Math.min(f[x],b);x--&&0<x;)f[x]+=q/2;f[0]=Math.max(f[0],v)}for(x=1;x<r.length;x++)r.info.segmentStarts&&-1!==r.info.segmentStarts.indexOf(x)||(u=Math.max(r[x]-r[x-1],u));v=r.info;v.gapSize=u;this.closestPointRange=r.info.totalRange;this.groupMap=m.groupMap;
if(M(f[0])&&f[0]<a.min&&e){if(!M(a.options.min)&&a.min<=a.dataMin||a.min===a.dataMin)a.min=Math.min(f[0],a.min);a.dataMin=Math.min(f[0],a.dataMin)}d.groupAll&&(d=this.cropData(f,t,a.min,a.max,1),f=d.xData,t=d.yData);this.processedXData=f;this.processedYData=t}else this.groupMap=null;this.hasGroupedData=h;this.currentDataGrouping=v;this.preventGraphAnimation=(g&&g.totalRange)!==(v&&v.totalRange)}};l.destroyGroupedData=function(){this.groupedData&&(this.groupedData.forEach(function(a,c){a&&(this.groupedData[c]=
a.destroy?a.destroy():null)},this),this.groupedData.length=0)};l.generatePoints=function(){a.apply(this);this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};J(B,"update",function(){if(this.dataGroup)return A(24,!1,this.series.chart),!1});J(D,"headerFormatter",function(a){var c=this.chart,d=c.time,f=a.labelConfig,e=f.series,g=e.tooltipOptions,b=e.options.dataGrouping,h=g.xDateFormat,l=e.xAxis,m=g[(a.isFooter?"footer":"header")+"Format"];if(l&&"datetime"===l.options.type&&
b&&r(f.key)){var p=e.currentDataGrouping;b=b.dateTimeLabelFormats||x.dateTimeLabelFormats;if(p)if(g=b[p.unitName],1===p.count)h=g[0];else{h=g[1];var t=g[2]}else!h&&b&&(h=this.getXDateFormat(f,g,l));h=d.dateFormat(h,f.key);t&&(h+=d.dateFormat(t,f.key+p.totalRange-1));e.chart.styledMode&&(m=this.styledModeFormat(m));a.text=w(m,{point:K(f.point,{key:h}),series:e},c);a.preventDefault()}});J(z,"destroy",l.destroyGroupedData);J(z,"afterSetOptions",function(a){a=a.options;var c=this.type,d=this.chart.options.plotOptions,
f=q.defaultOptions.plotOptions[c].dataGrouping,e=this.useCommonDataGrouping&&x;if(v[c]||e)f||(f=u(x,v[c])),a.dataGrouping=u(e,f,d.series&&d.series.dataGrouping,d[c].dataGrouping,this.userOptions.dataGrouping)});J(h,"afterSetScale",function(){this.series.forEach(function(a){a.hasProcessed=!1})});h.prototype.getGroupPixelWidth=function(){var a=this.series,c=a.length,d,f=0,e=!1,g;for(d=c;d--;)(g=a[d].options.dataGrouping)&&(f=Math.max(f,C(g.groupPixelWidth,x.groupPixelWidth)));for(d=c;d--;)(g=a[d].options.dataGrouping)&&
a[d].hasProcessed&&(c=(a[d].processedXData||a[d].data).length,a[d].groupPixelWidth||c>this.chart.plotSizeX/f||c&&g.forced)&&(e=!0);return e?f:0};h.prototype.setDataGrouping=function(a,c){var d;c=C(c,!0);a||(a={forced:!1,units:null});if(this instanceof h)for(d=this.series.length;d--;)this.series[d].update({dataGrouping:a},!1);else this.chart.options.series.forEach(function(c){c.dataGrouping=a},!1);this.ordinal&&(this.ordinal.slope=void 0);c&&this.chart.redraw()};e.dataGrouping=t;"";return t});O(q,
"parts/OHLCSeries.js",[q["parts/Globals.js"],q["parts/Point.js"],q["parts/Utilities.js"]],function(p,e,q){q=q.seriesType;var B=p.seriesTypes;q("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'},threshold:null,states:{hover:{lineWidth:3}},stickyTracking:!0},{directTouch:!1,pointArrayMap:["open","high","low","close"],toYData:function(e){return[e.open,
e.high,e.low,e.close]},pointValKey:"close",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},init:function(){B.column.prototype.init.apply(this,arguments);this.options.stacking=void 0},pointAttribs:function(e,p){p=B.column.prototype.pointAttribs.call(this,e,p);var q=this.options;delete p.fill;!e.options.color&&q.upColor&&e.open<e.close&&(p.stroke=q.upColor);return p},translate:function(){var e=this,p=e.yAxis,q=!!e.modifyValue,G=["plotOpen","plotHigh","plotLow","plotClose","yBottom"];
B.column.prototype.translate.apply(e);e.points.forEach(function(m){[m.open,m.high,m.low,m.close,m.low].forEach(function(z,B){null!==z&&(q&&(z=e.modifyValue(z)),m[G[B]]=p.toPixels(z,!0))});m.tooltipPos[1]=m.plotHigh+p.pos-e.chart.plotTop})},drawPoints:function(){var e=this,p=e.chart,q=function(e,m,p){var q=e[0];e=e[1];"number"===typeof q[2]&&(q[2]=Math.max(p+m,q[2]));"number"===typeof e[2]&&(e[2]=Math.min(p-m,e[2]))};e.points.forEach(function(z){var m=z.graphic,B=!m;if("undefined"!==typeof z.plotY){m||
(z.graphic=m=p.renderer.path().add(e.group));p.styledMode||m.attr(e.pointAttribs(z,z.selected&&"select"));var G=m.strokeWidth();var A=G%2/2;var D=Math.round(z.plotX)-A;var w=Math.round(z.shapeArgs.width/2);var r=[["M",D,Math.round(z.yBottom)],["L",D,Math.round(z.plotHigh)]];if(null!==z.open){var u=Math.round(z.plotOpen)+A;r.push(["M",D,u],["L",D-w,u]);q(r,G/2,u)}null!==z.close&&(u=Math.round(z.plotClose)+A,r.push(["M",D,u],["L",D+w,u]),q(r,G/2,u));m[B?"attr":"animate"]({d:r}).addClass(z.getClassName(),
!0)}})},animate:null},{getClassName:function(){return e.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}});""});O(q,"parts/CandlestickSeries.js",[q["parts/Globals.js"],q["parts/Options.js"],q["parts/Utilities.js"]],function(p,e,q){e=e.defaultOptions;var B=q.merge;q=q.seriesType;var D=p.seriesTypes;q("candlestick","ohlc",B(e.plotOptions.column,{states:{hover:{lineWidth:2}},tooltip:e.plotOptions.ohlc.tooltip,threshold:null,lineColor:"#000000",
lineWidth:1,upColor:"#ffffff",stickyTracking:!0}),{pointAttribs:function(e,p){var q=D.column.prototype.pointAttribs.call(this,e,p),m=this.options,z=e.open<e.close,B=m.lineColor||this.color;q["stroke-width"]=m.lineWidth;q.fill=e.options.color||(z?m.upColor||this.color:this.color);q.stroke=e.options.lineColor||(z?m.upLineColor||B:B);p&&(e=m.states[p],q.fill=e.color||q.fill,q.stroke=e.lineColor||q.stroke,q["stroke-width"]=e.lineWidth||q["stroke-width"]);return q},drawPoints:function(){var e=this,p=e.chart,
q=e.yAxis.reversed;e.points.forEach(function(m){var z=m.graphic,B=!z;if("undefined"!==typeof m.plotY){z||(m.graphic=z=p.renderer.path().add(e.group));e.chart.styledMode||z.attr(e.pointAttribs(m,m.selected&&"select")).shadow(e.options.shadow);var A=z.strokeWidth()%2/2;var D=Math.round(m.plotX)-A;var w=m.plotOpen;var r=m.plotClose;var u=Math.min(w,r);w=Math.max(w,r);var C=Math.round(m.shapeArgs.width/2);r=q?w!==m.yBottom:Math.round(u)!==Math.round(m.plotHigh);var h=q?Math.round(u)!==Math.round(m.plotHigh):
w!==m.yBottom;u=Math.round(u)+A;w=Math.round(w)+A;A=[];A.push(["M",D-C,w],["L",D-C,u],["L",D+C,u],["L",D+C,w],["Z"],["M",D,u],["L",D,r?Math.round(q?m.yBottom:m.plotHigh):u],["M",D,w],["L",D,h?Math.round(q?m.plotHigh:m.yBottom):w]);z[B?"attr":"animate"]({d:A}).addClass(m.getClassName(),!0)}})}});""});O(q,"mixins/on-series.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(p,e){var q=e.defined,B=e.stableSort,D=p.seriesTypes;return{getPlotBox:function(){return p.Series.prototype.getPlotBox.call(this.options.onSeries&&
this.chart.get(this.options.onSeries)||this)},translate:function(){D.column.prototype.translate.apply(this);var e=this,p=e.options,G=e.chart,m=e.points,H=m.length-1,M,A=p.onSeries;A=A&&G.get(A);p=p.onKey||"y";var K=A&&A.options.step,w=A&&A.points,r=w&&w.length,u=G.inverted,C=e.xAxis,h=e.yAxis,f=0,d;if(A&&A.visible&&r){f=(A.pointXOffset||0)+(A.barW||0)/2;G=A.currentDataGrouping;var t=w[r-1].x+(G?G.totalRange:0);B(m,function(a,c){return a.x-c.x});for(p="plot"+p[0].toUpperCase()+p.substr(1);r--&&m[H];){var l=
w[r];G=m[H];G.y=l.y;if(l.x<=G.x&&"undefined"!==typeof l[p]){if(G.x<=t&&(G.plotY=l[p],l.x<G.x&&!K&&(d=w[r+1])&&"undefined"!==typeof d[p])){var c=(G.x-l.x)/(d.x-l.x);G.plotY+=c*(d[p]-l[p]);G.y+=c*(d.y-l.y)}H--;r++;if(0>H)break}}}m.forEach(function(a,c){a.plotX+=f;if("undefined"===typeof a.plotY||u)0<=a.plotX&&a.plotX<=C.len?u?(a.plotY=C.translate(a.x,0,1,0,1),a.plotX=q(a.y)?h.translate(a.y,0,0,0,1):0):a.plotY=(C.opposite?0:e.yAxis.len)+C.offset:a.shapeArgs={};if((M=m[c-1])&&M.plotX===a.plotX){"undefined"===
typeof M.stackIndex&&(M.stackIndex=0);var d=M.stackIndex+1}a.stackIndex=d});this.onSeries=A}}});O(q,"parts/FlagsSeries.js",[q["parts/Globals.js"],q["parts/SVGElement.js"],q["parts/SVGRenderer.js"],q["parts/Utilities.js"],q["mixins/on-series.js"]],function(p,e,q,B,D){function z(e){h[e+"pin"]=function(d,f,l,c,a){var m=a&&a.anchorX;a=a&&a.anchorY;"circle"===e&&c>l&&(d-=Math.round((c-l)/2),l=c);var p=h[e](d,f,l,c);if(m&&a){var r=m;"circle"===e?r=d+l/2:(d=p[0],l=p[1],"M"===d[0]&&"L"===l[0]&&(r=(d[1]+l[1])/
2));p.push(["M",r,f>a?f:f+c],["L",m,a]);p=p.concat(h.circle(m-1,a-1,2,2))}return p}}var J=B.addEvent,G=B.defined,m=B.isNumber,H=B.merge,M=B.objectEach,A=B.seriesType,K=B.wrap;B=p.noop;var w=p.Renderer,r=p.Series,u=p.TrackerMixin,C=p.VMLRenderer,h=q.prototype.symbols;A("flags","column",{pointRange:0,allowOverlapX:!1,shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}<br/>"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},
style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:r.prototype.init,pointAttribs:function(e,d){var f=this.options,h=e&&e.color||this.color,c=f.lineColor,a=e&&e.lineWidth;e=e&&e.fillColor||f.fillColor;d&&(e=f.states[d].fillColor,c=f.states[d].lineColor,a=f.states[d].lineWidth);return{fill:e||h,stroke:c||h,"stroke-width":a||f.lineWidth||0}},translate:D.translate,getPlotBox:D.getPlotBox,drawPoints:function(){var f=
this.points,d=this.chart,h=d.renderer,l=d.inverted,c=this.options,a=c.y,m,r=this.yAxis,q={},u=[];for(m=f.length;m--;){var k=f[m];var y=(l?k.plotY:k.plotX)>this.xAxis.len;var w=k.plotX;var z=k.stackIndex;var g=k.options.shape||c.shape;var b=k.plotY;"undefined"!==typeof b&&(b=k.plotY+a-("undefined"!==typeof z&&z*c.stackDistance));k.anchorX=z?void 0:k.plotX;var n=z?void 0:k.plotY;var A="flag"!==g;z=k.graphic;"undefined"!==typeof b&&0<=w&&!y?(z||(z=k.graphic=h.label("",null,null,g,null,null,c.useHTML),
d.styledMode||z.attr(this.pointAttribs(k)).css(H(c.style,k.style)),z.attr({align:A?"center":"left",width:c.width,height:c.height,"text-align":c.textAlign}).addClass("highcharts-point").add(this.markerGroup),k.graphic.div&&(k.graphic.div.point=k),d.styledMode||z.shadow(c.shadow),z.isNew=!0),0<w&&(w-=z.strokeWidth()%2),g={y:b,anchorY:n},c.allowOverlapX&&(g.x=w,g.anchorX=k.anchorX),z.attr({text:k.options.title||c.title||"A"})[z.isNew?"attr":"animate"](g),c.allowOverlapX||(q[k.plotX]?q[k.plotX].size=
Math.max(q[k.plotX].size,z.width):q[k.plotX]={align:A?.5:0,size:z.width,target:w,anchorX:w}),k.tooltipPos=[w,b+r.pos-d.plotTop]):z&&(k.graphic=z.destroy())}c.allowOverlapX||(M(q,function(a){a.plotX=a.anchorX;u.push(a)}),p.distribute(u,l?r.len:this.xAxis.len,100),f.forEach(function(a){var b=a.graphic&&q[a.plotX];b&&(a.graphic[a.graphic.isNew?"attr":"animate"]({x:b.pos+b.align*b.size,anchorX:a.anchorX}),G(b.pos)?a.graphic.isNew=!1:(a.graphic.attr({x:-9999,anchorX:-9999}),a.graphic.isNew=!0))}));c.useHTML&&
K(this.markerGroup,"on",function(a){return e.prototype.on.apply(a.apply(this,[].slice.call(arguments,1)),[].slice.call(arguments,1))})},drawTracker:function(){var e=this.points;u.drawTrackerPoint.apply(this);e.forEach(function(d){var f=d.graphic;f&&J(f.element,"mouseover",function(){0<d.stackIndex&&!d.raised&&(d._y=f.y,f.attr({y:d._y-8}),d.raised=!0);e.forEach(function(e){e!==d&&e.raised&&e.graphic&&(e.graphic.attr({y:e._y}),e.raised=!1)})})})},animate:function(e){e&&this.setClip()},setClip:function(){r.prototype.setClip.apply(this,
arguments);!1!==this.options.clip&&this.sharedClipKey&&this.markerGroup.clip(this.chart[this.sharedClipKey])},buildKDTree:B,invertGroups:B},{isValid:function(){return m(this.y)||"undefined"===typeof this.y}});h.flag=function(e,d,m,l,c){var a=c&&c.anchorX||e;c=c&&c.anchorY||d;var f=h.circle(a-1,c-1,2,2);f.push(["M",a,c],["L",e,d+l],["L",e,d],["L",e+m,d],["L",e+m,d+l],["L",e,d+l],["Z"]);return f};z("circle");z("square");w===C&&["circlepin","flag","squarepin"].forEach(function(e){C.prototype.symbols[e]=
h[e]});""});O(q,"parts/RangeSelector.js",[q["parts/Axis.js"],q["parts/Chart.js"],q["parts/Globals.js"],q["parts/Options.js"],q["parts/SVGElement.js"],q["parts/Utilities.js"]],function(p,e,q,B,D,z){var J=B.defaultOptions,G=z.addEvent,m=z.createElement,H=z.css,M=z.defined,A=z.destroyObjectProperties,K=z.discardElement,w=z.extend,r=z.fireEvent,u=z.isNumber,C=z.merge,h=z.objectEach,f=z.pick,d=z.pInt,t=z.splat;w(J,{rangeSelector:{verticalAlign:"top",buttonTheme:{width:28,height:18,padding:2,zIndex:7},
floating:!1,x:0,y:0,height:void 0,inputPosition:{align:"right",x:0,y:0},buttonPosition:{align:"left",x:0,y:0},labelStyle:{color:"#666666"}}});J.lang=C(J.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});var l=function(){function c(a){this.buttons=void 0;this.buttonOptions=c.prototype.defaultButtons;this.options=void 0;this.chart=a;this.init(a)}c.prototype.clickButton=function(a,c){var d=this.chart,e=this.buttonOptions[a],h=d.xAxis[0],k=d.scroller&&d.scroller.getUnionExtremes()||
h||{},l=k.dataMin,m=k.dataMax,q=h&&Math.round(Math.min(h.max,f(m,h.max))),g=e.type;k=e._range;var b,n=e.dataGrouping;if(null!==l&&null!==m){d.fixedRange=k;n&&(this.forcedDataGrouping=!0,p.prototype.setDataGrouping.call(h||{chart:this.chart},n,!1),this.frozenStates=e.preserveDataGrouping);if("month"===g||"year"===g)if(h){g={range:e,max:q,chart:d,dataMin:l,dataMax:m};var r=h.minFromRange.call(g);u(g.newMax)&&(q=g.newMax)}else k=e;else if(k)r=Math.max(q-k,l),q=Math.min(r+k,m);else if("ytd"===g)if(h)"undefined"===
typeof m&&(l=Number.MAX_VALUE,m=Number.MIN_VALUE,d.series.forEach(function(a){a=a.xData;l=Math.min(a[0],l);m=Math.max(a[a.length-1],m)}),c=!1),q=this.getYTDExtremes(m,l,d.time.useUTC),r=b=q.min,q=q.max;else{this.deferredYTDClick=a;return}else"all"===g&&h&&(r=l,q=m);r+=e._offsetMin;q+=e._offsetMax;this.setSelected(a);if(h)h.setExtremes(r,q,f(c,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:e});else{var x=t(d.options.xAxis)[0];var w=x.range;x.range=k;var z=x.min;x.min=b;G(d,"load",function(){x.range=
w;x.min=z})}}};c.prototype.setSelected=function(a){this.selected=this.options.selected=a};c.prototype.init=function(a){var c=this,d=a.options.rangeSelector,e=d.buttons||c.defaultButtons.slice(),f=d.selected,h=function(){var a=c.minInput,d=c.maxInput;a&&a.blur&&r(a,"blur");d&&d.blur&&r(d,"blur")};c.chart=a;c.options=d;c.buttons=[];c.buttonOptions=e;this.unMouseDown=G(a.container,"mousedown",h);this.unResize=G(a,"resize",h);e.forEach(c.computeButtonRange);"undefined"!==typeof f&&e[f]&&this.clickButton(f,
!1);G(a,"load",function(){a.xAxis&&a.xAxis[0]&&G(a.xAxis[0],"setExtremes",function(d){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==d.trigger&&"updatedData"!==d.trigger&&c.forcedDataGrouping&&!c.frozenStates&&this.setDataGrouping(!1,!1)})})};c.prototype.updateButtonStates=function(){var a=this,c=this.chart,d=c.xAxis[0],e=Math.round(d.max-d.min),f=!d.hasVisibleSeries,h=c.scroller&&c.scroller.getUnionExtremes()||d,l=h.dataMin,m=h.dataMax;c=a.getYTDExtremes(m,l,c.time.useUTC);var p=c.min,
g=c.max,b=a.selected,n=u(b),q=a.options.allButtonsEnabled,r=a.buttons;a.buttonOptions.forEach(function(c,h){var k=c._range,t=c.type,v=c.count||1,u=r[h],x=0,y=c._offsetMax-c._offsetMin;c=h===b;var w=k>m-l,E=k<d.minRange,z=!1,A=!1;k=k===e;("month"===t||"year"===t)&&e+36E5>=864E5*{month:28,year:365}[t]*v-y&&e-36E5<=864E5*{month:31,year:366}[t]*v+y?k=!0:"ytd"===t?(k=g-p+y===e,z=!c):"all"===t&&(k=d.max-d.min>=m-l,A=!c&&n&&k);t=!q&&(w||E||A||f);v=c&&k||k&&!n&&!z||c&&a.frozenStates;t?x=3:v&&(n=!0,x=2);u.state!==
x&&(u.setState(x),0===x&&b===h&&a.setSelected(null))})};c.prototype.computeButtonRange=function(a){var c=a.type,d=a.count||1,e={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(e[c])a._range=e[c]*d;else if("month"===c||"year"===c)a._range=864E5*{month:30,year:365}[c]*d;a._offsetMin=f(a.offsetMin,0);a._offsetMax=f(a.offsetMax,0);a._range+=a._offsetMax-a._offsetMin};c.prototype.setInputValue=function(a,c){var d=this.chart.options.rangeSelector,e=this.chart.time,f=this[a+"Input"];
M(c)&&(f.previousValue=f.HCTime,f.HCTime=c);f.value=e.dateFormat(d.inputEditDateFormat||"%Y-%m-%d",f.HCTime);this[a+"DateBox"].attr({text:e.dateFormat(d.inputDateFormat||"%b %e, %Y",f.HCTime)})};c.prototype.showInput=function(a){var c=this.inputGroup,d=this[a+"DateBox"];H(this[a+"Input"],{left:c.translateX+d.x+"px",top:c.translateY+"px",width:d.width-2+"px",height:d.height-2+"px",border:"2px solid silver"})};c.prototype.hideInput=function(a){H(this[a+"Input"],{border:0,width:"1px",height:"1px"});
this.setInputValue(a)};c.prototype.drawInput=function(a){function c(){var a=g.value,b=(l.inputDateParser||Date.parse)(a),c=f.xAxis[0],h=f.scroller&&f.scroller.xAxis?f.scroller.xAxis:c,k=h.dataMin;h=h.dataMax;b!==g.previousValue&&(g.previousValue=b,u(b)||(b=a.split("-"),b=Date.UTC(d(b[0]),d(b[1])-1,d(b[2]))),u(b)&&(f.time.useUTC||(b+=6E4*(new Date).getTimezoneOffset()),r?b>e.maxInput.HCTime?b=void 0:b<k&&(b=k):b<e.minInput.HCTime?b=void 0:b>h&&(b=h),"undefined"!==typeof b&&c.setExtremes(r?b:c.min,
r?c.max:b,void 0,void 0,{trigger:"rangeSelectorInput"})))}var e=this,f=e.chart,h=f.renderer.style||{},k=f.renderer,l=f.options.rangeSelector,p=e.div,r="min"===a,g,b,n=this.inputGroup;this[a+"Label"]=b=k.label(J.lang[r?"rangeSelectorFrom":"rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(n);n.offset+=b.width+5;this[a+"DateBox"]=k=k.label("",n.offset).addClass("highcharts-range-input").attr({padding:2,width:l.inputBoxWidth||90,height:l.inputBoxHeight||
17,"text-align":"center"}).on("click",function(){e.showInput(a);e[a+"Input"].focus()});f.styledMode||k.attr({stroke:l.inputBoxBorderColor||"#cccccc","stroke-width":1});k.add(n);n.offset+=k.width+(r?10:0);this[a+"Input"]=g=m("input",{name:a,className:"highcharts-range-selector",type:"text"},{top:f.plotTop+"px"},p);f.styledMode||(b.css(C(h,l.labelStyle)),k.css(C({color:"#333333"},h,l.inputStyle)),H(g,w({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:h.fontSize,
fontFamily:h.fontFamily,top:"-9999em"},l.inputStyle)));g.onfocus=function(){e.showInput(a)};g.onblur=function(){g===q.doc.activeElement&&c();e.hideInput(a);g.blur()};g.onchange=c;g.onkeypress=function(a){13===a.keyCode&&c()}};c.prototype.getPosition=function(){var a=this.chart,c=a.options.rangeSelector;a="top"===c.verticalAlign?a.plotTop-a.axisOffset[0]:0;return{buttonTop:a+c.buttonPosition.y,inputTop:a+c.inputPosition.y-10}};c.prototype.getYTDExtremes=function(a,c,d){var e=this.chart.time,f=new e.Date(a),
h=e.get("FullYear",f);d=d?e.Date.UTC(h,0,1):+new e.Date(h,0,1);c=Math.max(c||0,d);f=f.getTime();return{max:Math.min(a||f,f),min:c}};c.prototype.render=function(a,c){var d=this,e=d.chart,h=e.renderer,k=e.container,l=e.options,p=l.exporting&&!1!==l.exporting.enabled&&l.navigation&&l.navigation.buttonOptions,r=J.lang,g=d.div,b=l.rangeSelector,n=f(l.chart.style&&l.chart.style.zIndex,0)+1;l=b.floating;var q=d.buttons;g=d.inputGroup;var t=b.buttonTheme,u=b.buttonPosition,x=b.inputPosition,w=b.inputEnabled,
z=t&&t.states,A=e.plotLeft,B=d.buttonGroup,C,D=d.options.verticalAlign,G=e.legend,H=G&&G.options,K=u.y,M=x.y,O=e.hasLoaded,R=O?"animate":"attr",Q=0,U=0;if(!1!==b.enabled){d.rendered||(d.group=C=h.g("range-selector-group").attr({zIndex:7}).add(),d.buttonGroup=B=h.g("range-selector-buttons").add(C),d.zoomText=h.text(r.rangeSelectorZoom,0,15).add(B),e.styledMode||(d.zoomText.css(b.labelStyle),t["stroke-width"]=f(t["stroke-width"],0)),d.buttonOptions.forEach(function(a,b){q[b]=h.button(a.text,0,0,function(c){var e=
a.events&&a.events.click,f;e&&(f=e.call(a,c));!1!==f&&d.clickButton(b);d.isActive=!0},t,z&&z.hover,z&&z.select,z&&z.disabled).attr({"text-align":"center"}).add(B)}),!1!==w&&(d.div=g=m("div",null,{position:"relative",height:0,zIndex:n}),k.parentNode.insertBefore(g,k),d.inputGroup=g=h.g("input-group").add(C),g.offset=0,d.drawInput("min"),d.drawInput("max")));d.zoomText[R]({x:f(A+u.x,A)});var X=f(A+u.x,A)+d.zoomText.getBBox().width+5;d.buttonOptions.forEach(function(a,c){q[c][R]({x:X});X+=q[c].width+
f(b.buttonSpacing,5)});A=e.plotLeft-e.spacing[3];d.updateButtonStates();p&&this.titleCollision(e)&&"top"===D&&"right"===u.align&&u.y+B.getBBox().height-12<(p.y||0)+p.height&&(Q=-40);k=u.x-e.spacing[3];"right"===u.align?k+=Q-A:"center"===u.align&&(k-=A/2);B.align({y:u.y,width:B.getBBox().width,align:u.align,x:k},!0,e.spacingBox);d.group.placed=O;d.buttonGroup.placed=O;!1!==w&&(Q=p&&this.titleCollision(e)&&"top"===D&&"right"===x.align&&x.y-g.getBBox().height-12<(p.y||0)+p.height+e.spacing[0]?-40:0,
"left"===x.align?k=A:"right"===x.align&&(k=-Math.max(e.axisOffset[1],-Q)),g.align({y:x.y,width:g.getBBox().width,align:x.align,x:x.x+k-2},!0,e.spacingBox),p=g.alignAttr.translateX+g.alignOptions.x-Q+g.getBBox().x+2,k=g.alignOptions.width,r=B.alignAttr.translateX+B.getBBox().x,A=B.getBBox().width+20,(x.align===u.align||r+A>p&&p+k>r&&K<M+g.getBBox().height)&&g.attr({translateX:g.alignAttr.translateX+(e.axisOffset[1]>=-Q?0:-Q),translateY:g.alignAttr.translateY+B.getBBox().height+10}),d.setInputValue("min",
a),d.setInputValue("max",c),d.inputGroup.placed=O);d.group.align({verticalAlign:D},!0,e.spacingBox);a=d.group.getBBox().height+20;c=d.group.alignAttr.translateY;"bottom"===D&&(G=H&&"bottom"===H.verticalAlign&&H.enabled&&!H.floating?G.legendHeight+f(H.margin,10):0,a=a+G-20,U=c-a-(l?0:b.y)-(e.titleOffset?e.titleOffset[2]:0)-10);if("top"===D)l&&(U=0),e.titleOffset&&e.titleOffset[0]&&(U=e.titleOffset[0]),U+=e.margin[0]-e.spacing[0]||0;else if("middle"===D)if(M===K)U=0>M?c+void 0:c;else if(M||K)U=0>M||
0>K?U-Math.min(M,K):c-a+NaN;d.group.translate(b.x,b.y+Math.floor(U));!1!==w&&(d.minInput.style.marginTop=d.group.translateY+"px",d.maxInput.style.marginTop=d.group.translateY+"px");d.rendered=!0}};c.prototype.getHeight=function(){var a=this.options,c=this.group,d=a.y,e=a.buttonPosition.y,f=a.inputPosition.y;if(a.height)return a.height;a=c?c.getBBox(!0).height+13+d:0;c=Math.min(f,e);if(0>f&&0>e||0<f&&0<e)a+=Math.abs(c);return a};c.prototype.titleCollision=function(a){return!(a.options.title.text||
a.options.subtitle.text)};c.prototype.update=function(a){var c=this.chart;C(!0,c.options.rangeSelector,a);this.destroy();this.init(c);c.rangeSelector.render()};c.prototype.destroy=function(){var a=this,d=a.minInput,e=a.maxInput;a.unMouseDown();a.unResize();A(a.buttons);d&&(d.onfocus=d.onblur=d.onchange=null);e&&(e.onfocus=e.onblur=e.onchange=null);h(a,function(d,e){d&&"chart"!==e&&(d instanceof D?d.destroy():d instanceof window.HTMLElement&&K(d));d!==c.prototype[e]&&(a[e]=null)},this)};return c}();
l.prototype.defaultButtons=[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}];p.prototype.minFromRange=function(){var c=this.range,a=c.type,d=this.max,e=this.chart.time,h=function(c,d){var f="year"===a?"FullYear":"Month",b=new e.Date(c),h=e.get(f,b);e.set(f,b,h+d);h===e.get(f,b)&&e.set("Date",b,0);return b.getTime()-c};if(u(c)){var l=d-c;var k=c}else l=d+h(d,-c.count),
this.chart&&(this.chart.fixedRange=d-l);var m=f(this.dataMin,Number.MIN_VALUE);u(l)||(l=m);l<=m&&(l=m,"undefined"===typeof k&&(k=h(l,c.count)),this.newMax=Math.min(l+k,this.dataMax));u(d)||(l=void 0);return l};q.RangeSelector||(G(e,"afterGetContainer",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new l(this))}),G(e,"beforeRender",function(){var c=this.axes,a=this.rangeSelector;a&&(u(a.deferredYTDClick)&&(a.clickButton(a.deferredYTDClick),delete a.deferredYTDClick),c.forEach(function(a){a.updateNames();
a.setScale()}),this.getAxisMargins(),a.render(),c=a.options.verticalAlign,a.options.floating||("bottom"===c?this.extraBottomMargin=!0:"middle"!==c&&(this.extraTopMargin=!0)))}),G(e,"update",function(c){var a=c.options.rangeSelector;c=this.rangeSelector;var d=this.extraBottomMargin,e=this.extraTopMargin;a&&a.enabled&&!M(c)&&(this.options.rangeSelector.enabled=!0,this.rangeSelector=new l(this));this.extraTopMargin=this.extraBottomMargin=!1;c&&(c.render(),a=a&&a.verticalAlign||c.options&&c.options.verticalAlign,
c.options.floating||("bottom"===a?this.extraBottomMargin=!0:"middle"!==a&&(this.extraTopMargin=!0)),this.extraBottomMargin!==d||this.extraTopMargin!==e)&&(this.isDirtyBox=!0)}),G(e,"render",function(){var c=this.rangeSelector;c&&!c.options.floating&&(c.render(),c=c.options.verticalAlign,"bottom"===c?this.extraBottomMargin=!0:"middle"!==c&&(this.extraTopMargin=!0))}),G(e,"getMargins",function(){var c=this.rangeSelector;c&&(c=c.getHeight(),this.extraTopMargin&&(this.plotTop+=c),this.extraBottomMargin&&
(this.marginBottom+=c))}),e.prototype.callbacks.push(function(c){function a(){d=c.xAxis[0].getExtremes();f=c.legend;k=null===e||void 0===e?void 0:e.options.verticalAlign;u(d.min)&&e.render(d.min,d.max);e&&f.display&&"top"===k&&k===f.options.verticalAlign&&(h=C(c.spacingBox),h.y="vertical"===f.options.layout?c.plotTop:h.y+e.getHeight(),f.group.placed=!1,f.align(h))}var d,e=c.rangeSelector,f,h,k;if(e){var l=G(c.xAxis[0],"afterSetExtremes",function(a){e.render(a.min,a.max)});var m=G(c,"redraw",a);a()}G(c,
"destroy",function(){e&&(m(),l())})}),q.RangeSelector=l);return q.RangeSelector});O(q,"parts/StockChart.js",[q["parts/Axis.js"],q["parts/Chart.js"],q["parts/Globals.js"],q["parts/Point.js"],q["parts/SVGRenderer.js"],q["parts/Utilities.js"]],function(p,e,q,B,D,z){var J=z.addEvent,G=z.arrayMax,m=z.arrayMin,H=z.clamp,M=z.defined,A=z.extend,K=z.find,w=z.format,r=z.getOptions,u=z.isNumber,C=z.isString,h=z.merge,f=z.pick,d=z.splat;z=q.Series;var t=z.prototype,l=t.init,c=t.processData,a=B.prototype.tooltipFormatter;
q.StockChart=q.stockChart=function(a,c,l){var m=C(a)||a.nodeName,k=arguments[m?1:0],p=k,q=k.series,t=r(),g,b=f(k.navigator&&k.navigator.enabled,t.navigator.enabled,!0);k.xAxis=d(k.xAxis||{}).map(function(a,c){return h({minPadding:0,maxPadding:0,overscroll:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},t.xAxis,t.xAxis&&t.xAxis[c],a,{type:"datetime",categories:null},b?{startOnTick:!1,endOnTick:!1}:null)});k.yAxis=d(k.yAxis||{}).map(function(a,b){g=f(a.opposite,!0);return h({labels:{y:-2},
opposite:g,showLastLabel:!(!a.categories&&"category"!==a.type),title:{text:null}},t.yAxis,t.yAxis&&t.yAxis[b],a)});k.series=null;k=h({chart:{panning:{enabled:!0,type:"x"},pinchType:"x"},navigator:{enabled:b},scrollbar:{enabled:f(t.scrollbar.enabled,!0)},rangeSelector:{enabled:f(t.rangeSelector.enabled,!0)},title:{text:null},tooltip:{split:f(t.tooltip.split,!0),crosshairs:!0},legend:{enabled:!1}},k,{isStock:!0});k.series=p.series=q;return m?new e(a,k,l):new e(k,c)};J(z,"setOptions",function(a){var c;
this.chart.options.isStock&&(this.is("column")||this.is("columnrange")?c={borderWidth:0,shadow:!1}:this.is("scatter")||this.is("sma")||(c={marker:{enabled:!1,radius:2}}),c&&(a.plotOptions[this.type]=h(a.plotOptions[this.type],c)))});J(p,"autoLabelAlign",function(a){var c=this.chart,d=this.options;c=c._labelPanes=c._labelPanes||{};var e=this.options.labels;this.chart.options.isStock&&"yAxis"===this.coll&&(d=d.top+","+d.height,!c[d]&&e.enabled&&(15===e.x&&(e.x=0),"undefined"===typeof e.align&&(e.align=
"right"),c[d]=this,a.align="right",a.preventDefault()))});J(p,"destroy",function(){var a=this.chart,c=this.options&&this.options.top+","+this.options.height;c&&a._labelPanes&&a._labelPanes[c]===this&&delete a._labelPanes[c]});J(p,"getPlotLinePath",function(a){function c(a){var b="xAxis"===a?"yAxis":"xAxis";a=d.options[b];return u(a)?[h[b][a]]:C(a)?[h.get(a)]:e.map(function(a){return a[b]})}var d=this,e=this.isLinked&&!this.series?this.linkedParent.series:this.series,h=d.chart,l=h.renderer,m=d.left,
p=d.top,g,b,n,q,r=[],t=[],x=a.translatedValue,w=a.value,z=a.force;if(h.options.isStock&&!1!==a.acrossPanes&&"xAxis"===d.coll||"yAxis"===d.coll){a.preventDefault();t=c(d.coll);var A=d.isXAxis?h.yAxis:h.xAxis;A.forEach(function(a){if(M(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis";b=M(a.options[b])?h[b][a.options[b]]:h[b][0];d===b&&t.push(a)}});var B=t.length?[]:[d.isXAxis?h.yAxis[0]:h.xAxis[0]];t.forEach(function(a){-1!==B.indexOf(a)||K(B,function(b){return b.pos===
a.pos&&b.len===a.len})||B.push(a)});var D=f(x,d.translate(w,null,null,a.old));u(D)&&(d.horiz?B.forEach(function(a){var c;b=a.pos;q=b+a.len;g=n=Math.round(D+d.transB);"pass"!==z&&(g<m||g>m+d.width)&&(z?g=n=H(g,m,m+d.width):c=!0);c||r.push(["M",g,b],["L",n,q])}):B.forEach(function(a){var c;g=a.pos;n=g+a.len;b=q=Math.round(p+d.height-D);"pass"!==z&&(b<p||b>p+d.height)&&(z?b=q=H(b,p,p+d.height):c=!0);c||r.push(["M",g,b],["L",n,q])}));a.path=0<r.length?l.crispPolyLine(r,a.lineWidth||1):null}});D.prototype.crispPolyLine=
function(a,c){for(var d=0;d<a.length;d+=2){var e=a[d],f=a[d+1];e[1]===f[1]&&(e[1]=f[1]=Math.round(e[1])-c%2/2);e[2]===f[2]&&(e[2]=f[2]=Math.round(e[2])+c%2/2)}return a};J(p,"afterHideCrosshair",function(){this.crossLabel&&(this.crossLabel=this.crossLabel.hide())});J(p,"afterDrawCrosshair",function(a){var c,d;if(M(this.crosshair.label)&&this.crosshair.label.enabled&&this.cross){var e=this.chart,h=this.logarithmic,l=this.options.crosshair.label,m=this.horiz,p=this.opposite,g=this.left,b=this.top,n=
this.crossLabel,q=l.format,r="",t="inside"===this.options.tickPosition,x=!1!==this.crosshair.snap,z=0,B=a.e||this.cross&&this.cross.e,C=a.point;a=this.min;var D=this.max;h&&(a=h.lin2log(a),D=h.lin2log(D));h=m?"center":p?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";n||(n=this.crossLabel=e.renderer.label(null,null,null,l.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:l.align||
h,padding:f(l.padding,8),r:f(l.borderRadius,3),zIndex:2}).add(this.labelGroup),e.styledMode||n.attr({fill:l.backgroundColor||this.series[0]&&this.series[0].color||"#666666",stroke:l.borderColor||"","stroke-width":l.borderWidth||0}).css(A({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},l.style)));m?(h=x?C.plotX+g:B.chartX,b+=p?0:this.height):(h=p?this.width+g:0,b=x?C.plotY+b:B.chartY);q||l.formatter||(this.dateTime&&(r="%b %d, %Y"),q="{value"+(r?":"+r:"")+"}");r=x?C[this.isXAxis?
"x":"y"]:this.toValue(m?B.chartX:B.chartY);n.attr({text:q?w(q,{value:r},e):l.formatter.call(this,r),x:h,y:b,visibility:r<a||r>D?"hidden":"visible"});l=n.getBBox();if(u(n.y))if(m){if(t&&!p||!t&&p)b=n.y-l.height}else b=n.y-l.height/2;m?(c=g-l.x,d=g+this.width-l.x):(c="left"===this.labelAlign?g:0,d="right"===this.labelAlign?g+this.width:e.chartWidth);n.translateX<c&&(z=c-n.translateX);n.translateX+l.width>=d&&(z=-(n.translateX+l.width-d));n.attr({x:h+z,y:b,anchorX:m?h:this.opposite?0:e.chartWidth,anchorY:m?
this.opposite?e.chartHeight:0:b+l.height/2})}});t.init=function(){l.apply(this,arguments);this.setCompare(this.options.compare)};t.setCompare=function(a){this.modifyValue="value"===a||"percent"===a?function(c,d){var e=this.compareValue;return"undefined"!==typeof c&&"undefined"!==typeof e?(c="value"===a?c-e:c/e*100-(100===this.options.compareBase?0:100),d&&(d.change=c),c):0}:null;this.userOptions.compare=a;this.chart.hasRendered&&(this.isDirty=!0)};t.processData=function(a){var d,e=-1,f=!0===this.options.compareStart?
0:1;c.apply(this,arguments);if(this.xAxis&&this.processedYData){var h=this.processedXData;var l=this.processedYData;var m=l.length;this.pointArrayMap&&(e=this.pointArrayMap.indexOf(this.options.pointValKey||this.pointValKey||"y"));for(d=0;d<m-f;d++){var p=l[d]&&-1<e?l[d][e]:l[d];if(u(p)&&h[d+f]>=this.xAxis.min&&0!==p){this.compareValue=p;break}}}};J(z,"afterGetExtremes",function(a){a=a.dataExtremes;if(this.modifyValue&&a){var c=[this.modifyValue(a.dataMin),this.modifyValue(a.dataMax)];a.dataMin=m(c);
a.dataMax=G(c)}});p.prototype.setCompare=function(a,c){this.isXAxis||(this.series.forEach(function(c){c.setCompare(a)}),f(c,!0)&&this.chart.redraw())};B.prototype.tooltipFormatter=function(c){var d=this.series.chart.numberFormatter;c=c.replace("{point.change}",(0<this.change?"+":"")+d(this.change,f(this.series.tooltipOptions.changeDecimals,2)));return a.apply(this,[c])};J(z,"render",function(){var a=this.chart;if(!(a.is3d&&a.is3d()||a.polar)&&this.xAxis&&!this.xAxis.isRadial){var c=this.yAxis.len;
if(this.xAxis.axisLine){var d=a.plotTop+a.plotHeight-this.yAxis.pos-this.yAxis.len,e=Math.floor(this.xAxis.axisLine.strokeWidth()/2);0<=d&&(c-=Math.max(e-d,0))}!this.clipBox&&this.animate?(this.clipBox=h(a.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=c):a[this.sharedClipKey]&&(a[this.sharedClipKey].animate({width:this.xAxis.len,height:c}),a[this.sharedClipKey+"m"]&&a[this.sharedClipKey+"m"].animate({width:this.xAxis.len}))}});J(e,"update",function(a){a=a.options;"scrollbar"in a&&
this.navigator&&(h(!0,this.options.scrollbar,a.scrollbar),this.navigator.update({},!1),delete a.scrollbar)})});O(q,"masters/modules/stock.src.js",[],function(){});O(q,"masters/highstock.src.js",[q["masters/highcharts.src.js"]],function(p){p.product="Highstock";return p});q["masters/highstock.src.js"]._modules=q;return q["masters/highstock.src.js"]});

},{}],"../node_modules/highcharts/highcharts.js":[function(require,module,exports) {
var define;
/*
 Highcharts JS v8.1.2 (2020-06-16)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(T,O){"object"===typeof module&&module.exports?(O["default"]=O,module.exports=T.document?O(T):O):"function"===typeof define&&define.amd?define("highcharts/highcharts",function(){return O(T)}):(T.Highcharts&&T.Highcharts.error(16,!0),T.Highcharts=O(T))})("undefined"!==typeof window?window:this,function(T){function O(g,c,R,y){g.hasOwnProperty(c)||(g[c]=y.apply(null,R))}var q={};O(q,"parts/Globals.js",[],function(){var g="undefined"!==typeof T?T:"undefined"!==typeof window?window:{},c=g.document,
R=g.navigator&&g.navigator.userAgent||"",y=c&&c.createElementNS&&!!c.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,q=/(edge|msie|trident)/i.test(R)&&!g.opera,H=-1!==R.indexOf("Firefox"),D=-1!==R.indexOf("Chrome"),J=H&&4>parseInt(R.split("Firefox/")[1],10);return{product:"Highcharts",version:"8.1.2",deg2rad:2*Math.PI/360,doc:c,hasBidiBug:J,hasTouch:!!g.TouchEvent,isMS:q,isWebKit:-1!==R.indexOf("AppleWebKit"),isFirefox:H,isChrome:D,isSafari:!D&&-1!==R.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(R),
SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:y,win:g,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});O(q,"parts/Utilities.js",[q["parts/Globals.js"]],function(g){function c(b,h,e,z){var a=h?"Highcharts error":"Highcharts warning";32===b&&(b=a+": Deprecated member");var x=I(b),f=x?a+" #"+b+": www.highcharts.com/errors/"+b+"/":b.toString();a=function(){if(h)throw Error(f);G.console&&-1===c.messages.indexOf(f)&&
console.log(f)};if("undefined"!==typeof z){var d="";x&&(f+="?");W(z,function(b,h){d+="\n - "+h+": "+b;x&&(f+=encodeURI(h)+"="+encodeURI(b))});f+=d}e?da(e,"displayError",{code:b,message:f,params:z},a):a();c.messages.push(f)}function R(){var b,h=arguments,e={},z=function(b,h){"object"!==typeof b&&(b={});W(h,function(e,a){!y(e,!0)||C(e)||r(e)?b[a]=h[a]:b[a]=z(b[a]||{},e)});return b};!0===h[0]&&(e=h[1],h=Array.prototype.slice.call(h,2));var a=h.length;for(b=0;b<a;b++)e=z(e,h[b]);return e}function y(b,
h){return!!b&&"object"===typeof b&&(!h||!n(b))}function q(b,h,e){var a;K(h)?m(e)?b.setAttribute(h,e):b&&b.getAttribute&&((a=b.getAttribute(h))||"class"!==h||(a=b.getAttribute(h+"Name"))):W(h,function(h,e){b.setAttribute(e,h)});return a}function H(){for(var b=arguments,h=b.length,e=0;e<h;e++){var a=b[e];if("undefined"!==typeof a&&null!==a)return a}}function D(b,h){if(!b)return h;var e=b.split(".").reverse();if(1===e.length)return h[b];for(b=e.pop();"undefined"!==typeof b&&"undefined"!==typeof h&&null!==
h;)h=h[b],b=e.pop();return h}g.timers=[];var J=g.charts,t=g.doc,G=g.win;(c||(c={})).messages=[];g.error=c;var L=function(){function b(b,h,e){this.options=h;this.elem=b;this.prop=e}b.prototype.dSetter=function(){var b=this.paths,h=b&&b[0];b=b&&b[1];var e=[],a=this.now||0;if(1!==a&&h&&b)if(h.length===b.length&&1>a)for(var z=0;z<b.length;z++){for(var x=h[z],f=b[z],d=[],k=0;k<f.length;k++){var N=x[k],l=f[k];d[k]="number"===typeof N&&"number"===typeof l&&("A"!==f[0]||4!==k&&5!==k)?N+a*(l-N):l}e.push(d)}else e=
b;else e=this.toD||[];this.elem.attr("d",e,void 0,!0)};b.prototype.update=function(){var b=this.elem,h=this.prop,e=this.now,a=this.options.step;if(this[h+"Setter"])this[h+"Setter"]();else b.attr?b.element&&b.attr(h,e,null,!0):b.style[h]=e+this.unit;a&&a.call(b,e,this)};b.prototype.run=function(b,h,e){var a=this,z=a.options,x=function(b){return x.stopped?!1:a.step(b)},f=G.requestAnimationFrame||function(b){setTimeout(b,13)},d=function(){for(var b=0;b<g.timers.length;b++)g.timers[b]()||g.timers.splice(b--,
1);g.timers.length&&f(d)};b!==h||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=b,this.end=h,this.unit=e,this.now=this.start,this.pos=0,x.elem=this.elem,x.prop=this.prop,x()&&1===g.timers.push(x)&&f(d)):(delete z.curAnim[this.prop],z.complete&&0===Object.keys(z.curAnim).length&&z.complete.call(this.elem))};b.prototype.step=function(b){var h=+new Date,e=this.options,a=this.elem,z=e.complete,x=e.duration,f=e.curAnim;if(a.attr&&!a.element)b=!1;else if(b||h>=x+this.startTime){this.now=
this.end;this.pos=1;this.update();var d=f[this.prop]=!0;W(f,function(b){!0!==b&&(d=!1)});d&&z&&z.call(a);b=!1}else this.pos=e.easing((h-this.startTime)/x),this.now=this.start+(this.end-this.start)*this.pos,this.update(),b=!0;return b};b.prototype.initPath=function(b,h,e){function a(b,h){for(;b.length<u;){var e=b[0],a=h[u-b.length];a&&"M"===e[0]&&(b[0]="C"===a[0]?["C",e[1],e[2],e[1],e[2],e[1],e[2]]:["L",e[1],e[2]]);b.unshift(e);d&&b.push(b[b.length-1])}}function z(b,h){for(;b.length<u;)if(h=b[b.length/
k-1].slice(),"C"===h[0]&&(h[1]=h[5],h[2]=h[6]),d){var e=b[b.length/k].slice();b.splice(b.length/2,0,h,e)}else b.push(h)}var x=b.startX,f=b.endX;h=h&&h.slice();e=e.slice();var d=b.isArea,k=d?2:1;if(!h)return[e,e];if(x&&f){for(b=0;b<x.length;b++)if(x[b]===f[0]){var N=b;break}else if(x[0]===f[f.length-x.length+b]){N=b;var l=!0;break}else if(x[x.length-1]===f[f.length-x.length+b]){N=x.length-b;break}"undefined"===typeof N&&(h=[])}if(h.length&&I(N)){var u=e.length+N*k;l?(a(h,e),z(e,h)):(a(e,h),z(h,e))}return[h,
e]};b.prototype.fillSetter=function(){b.prototype.strokeSetter.apply(this,arguments)};b.prototype.strokeSetter=function(){this.elem.attr(this.prop,g.color(this.start).tweenTo(g.color(this.end),this.pos),null,!0)};return b}();g.Fx=L;g.merge=R;var v=g.pInt=function(b,h){return parseInt(b,h||10)},K=g.isString=function(b){return"string"===typeof b},n=g.isArray=function(b){b=Object.prototype.toString.call(b);return"[object Array]"===b||"[object Array Iterator]"===b};g.isObject=y;var r=g.isDOMElement=function(b){return y(b)&&
"number"===typeof b.nodeType},C=g.isClass=function(b){var h=b&&b.constructor;return!(!y(b,!0)||r(b)||!h||!h.name||"Object"===h.name)},I=g.isNumber=function(b){return"number"===typeof b&&!isNaN(b)&&Infinity>b&&-Infinity<b},p=g.erase=function(b,h){for(var e=b.length;e--;)if(b[e]===h){b.splice(e,1);break}},m=g.defined=function(b){return"undefined"!==typeof b&&null!==b};g.attr=q;var d=g.splat=function(b){return n(b)?b:[b]},l=g.syncTimeout=function(b,h,e){if(0<h)return setTimeout(b,h,e);b.call(0,e);return-1},
k=g.clearTimeout=function(b){m(b)&&clearTimeout(b)},f=g.extend=function(b,h){var e;b||(b={});for(e in h)b[e]=h[e];return b};g.pick=H;var a=g.css=function(b,h){g.isMS&&!g.svg&&h&&"undefined"!==typeof h.opacity&&(h.filter="alpha(opacity="+100*h.opacity+")");f(b.style,h)},A=g.createElement=function(b,h,e,z,x){b=t.createElement(b);h&&f(b,h);x&&a(b,{padding:"0",border:"none",margin:"0"});e&&a(b,e);z&&z.appendChild(b);return b},u=g.extendClass=function(b,h){var e=function(){};e.prototype=new b;f(e.prototype,
h);return e},E=g.pad=function(b,h,e){return Array((h||2)+1-String(b).replace("-","").length).join(e||"0")+b},P=g.relativeLength=function(b,h,e){return/%$/.test(b)?h*parseFloat(b)/100+(e||0):parseFloat(b)},w=g.wrap=function(b,h,e){var a=b[h];b[h]=function(){var b=Array.prototype.slice.call(arguments),h=arguments,z=this;z.proceed=function(){a.apply(z,arguments.length?arguments:h)};b.unshift(a);b=e.apply(this,b);z.proceed=null;return b}},M=g.format=function(b,h,e){var a="{",z=!1,x=[],f=/f$/,d=/\.([0-9])/,
k=g.defaultOptions.lang,N=e&&e.time||g.time;for(e=e&&e.numberFormatter||Y;b;){var l=b.indexOf(a);if(-1===l)break;var u=b.slice(0,l);if(z){u=u.split(":");a=D(u.shift()||"",h);if(u.length&&"number"===typeof a)if(u=u.join(":"),f.test(u)){var m=parseInt((u.match(d)||["","-1"])[1],10);null!==a&&(a=e(a,m,k.decimalPoint,-1<u.indexOf(",")?k.thousandsSep:""))}else a=N.dateFormat(u,a);x.push(a)}else x.push(u);b=b.slice(l+1);a=(z=!z)?"}":"{"}x.push(b);return x.join("")},F=g.getMagnitude=function(b){return Math.pow(10,
Math.floor(Math.log(b)/Math.LN10))},Q=g.normalizeTickInterval=function(b,h,e,a,z){var x=b;e=H(e,1);var f=b/e;h||(h=z?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===a&&(1===e?h=h.filter(function(b){return 0===b%1}):.1>=e&&(h=[1/e])));for(a=0;a<h.length&&!(x=h[a],z&&x*e>=b||!z&&f<=(h[a]+(h[a+1]||h[a]))/2);a++);return x=N(x*e,-Math.round(Math.log(.001)/Math.LN10))},e=g.stableSort=function(b,h){var e=b.length,a,z;for(z=0;z<e;z++)b[z].safeI=z;b.sort(function(b,e){a=h(b,e);return 0===a?b.safeI-e.safeI:
a});for(z=0;z<e;z++)delete b[z].safeI},b=g.arrayMin=function(b){for(var h=b.length,e=b[0];h--;)b[h]<e&&(e=b[h]);return e},h=g.arrayMax=function(b){for(var h=b.length,e=b[0];h--;)b[h]>e&&(e=b[h]);return e},z=g.destroyObjectProperties=function(b,h){W(b,function(e,a){e&&e!==h&&e.destroy&&e.destroy();delete b[a]})},x=g.discardElement=function(b){var h=g.garbageBin;h||(h=A("div"));b&&h.appendChild(b);h.innerHTML=""},N=g.correctFloat=function(b,h){return parseFloat(b.toPrecision(h||14))},aa=g.setAnimation=
function(b,h){h.renderer.globalAnimation=H(b,h.options.chart.animation,!0)},Z=g.animObject=function(b){return y(b)?R(b):{duration:b?500:0}},V=g.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},Y=g.numberFormat=function(b,h,e,a){b=+b||0;h=+h;var z=g.defaultOptions.lang,x=(b.toString().split(".")[1]||"").split("e")[0].length,f=b.toString().split("e");if(-1===h)h=Math.min(x,20);else if(!I(h))h=2;else if(h&&f[1]&&0>f[1]){var d=h+ +f[1];0<=d?(f[0]=
(+f[0]).toExponential(d).split("e")[0],h=d):(f[0]=f[0].split(".")[0]||0,b=20>h?(f[0]*Math.pow(10,f[1])).toFixed(h):0,f[1]=0)}var k=(Math.abs(f[1]?f[0]:b)+Math.pow(10,-Math.max(h,x)-1)).toFixed(h);x=String(v(k));d=3<x.length?x.length%3:0;e=H(e,z.decimalPoint);a=H(a,z.thousandsSep);b=(0>b?"-":"")+(d?x.substr(0,d)+a:"");b+=x.substr(d).replace(/(\d{3})(?=\d)/g,"$1"+a);h&&(b+=e+k.slice(-h));f[1]&&0!==+b&&(b+="e"+f[1]);return b};Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*b)-1)};var ba=g.getStyle=
function(b,h,e){if("width"===h)return h=Math.min(b.offsetWidth,b.scrollWidth),e=b.getBoundingClientRect&&b.getBoundingClientRect().width,e<h&&e>=h-1&&(h=Math.floor(e)),Math.max(0,h-g.getStyle(b,"padding-left")-g.getStyle(b,"padding-right"));if("height"===h)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-g.getStyle(b,"padding-top")-g.getStyle(b,"padding-bottom"));G.getComputedStyle||c(27,!0);if(b=G.getComputedStyle(b,void 0))b=b.getPropertyValue(h),H(e,"opacity"!==h)&&(b=v(b));return b},
U=g.inArray=function(b,h,e){c(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return h.indexOf(b,e)},X=g.find=Array.prototype.find?function(b,h){return b.find(h)}:function(b,h){var e,a=b.length;for(e=0;e<a;e++)if(h(b[e],e))return b[e]};g.keys=function(b){c(32,!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(b)};var ia=g.offset=function(b){var h=t.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0};return{top:b.top+(G.pageYOffset||h.scrollTop)-
(h.clientTop||0),left:b.left+(G.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}},S=g.stop=function(b,h){for(var e=g.timers.length;e--;)g.timers[e].elem!==b||h&&h!==g.timers[e].prop||(g.timers[e].stopped=!0)},W=g.objectEach=function(b,h,e){for(var a in b)Object.hasOwnProperty.call(b,a)&&h.call(e||b[a],b[a],a,b)};W({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,h){g[h]=function(e){var a;c(32,!1,void 0,(a={},a["Highcharts."+h]="use Array."+b,a));return Array.prototype[b].apply(e,
[].slice.call(arguments,1))}});var ja=g.addEvent=function(b,h,e,a){void 0===a&&(a={});var z=b.addEventListener||g.addEventListenerPolyfill;var x="function"===typeof b&&b.prototype?b.prototype.protoEvents=b.prototype.protoEvents||{}:b.hcEvents=b.hcEvents||{};g.Point&&b instanceof g.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=!0);z&&z.call(b,h,e,!1);x[h]||(x[h]=[]);x[h].push({fn:e,order:"number"===typeof a.order?a.order:Infinity});x[h].sort(function(b,h){return b.order-h.order});
return function(){ea(b,h,e)}},ea=g.removeEvent=function(b,h,e){function a(h,e){var a=b.removeEventListener||g.removeEventListenerPolyfill;a&&a.call(b,h,e,!1)}function z(e){var z;if(b.nodeName){if(h){var x={};x[h]=!0}else x=e;W(x,function(b,h){if(e[h])for(z=e[h].length;z--;)a(h,e[h][z].fn)})}}var x;["protoEvents","hcEvents"].forEach(function(f,d){var k=(d=d?b:b.prototype)&&d[f];k&&(h?(x=k[h]||[],e?(k[h]=x.filter(function(b){return e!==b.fn}),a(h,e)):(z(k),k[h]=[])):(z(k),d[f]={}))})},da=g.fireEvent=
function(b,h,e,a){var z;e=e||{};if(t.createEvent&&(b.dispatchEvent||b.fireEvent)){var x=t.createEvent("Events");x.initEvent(h,!0,!0);f(x,e);b.dispatchEvent?b.dispatchEvent(x):b.fireEvent(h,x)}else e.target||f(e,{preventDefault:function(){e.defaultPrevented=!0},target:b,type:h}),function(h,a){void 0===h&&(h=[]);void 0===a&&(a=[]);var x=0,f=0,d=h.length+a.length;for(z=0;z<d;z++)!1===(h[x]?a[f]?h[x].order<=a[f].order?h[x++]:a[f++]:h[x++]:a[f++]).fn.call(b,e)&&e.preventDefault()}(b.protoEvents&&b.protoEvents[h],
b.hcEvents&&b.hcEvents[h]);a&&!e.defaultPrevented&&a.call(b,e)},ka=g.animate=function(b,h,e){var a,z="",x,f;if(!y(e)){var d=arguments;e={duration:d[2],easing:d[3],complete:d[4]}}I(e.duration)||(e.duration=400);e.easing="function"===typeof e.easing?e.easing:Math[e.easing]||Math.easeInOutSine;e.curAnim=R(h);W(h,function(d,k){S(b,k);f=new L(b,e,k);x=null;"d"===k&&n(h.d)?(f.paths=f.initPath(b,b.pathArray,h.d),f.toD=h.d,a=0,x=1):b.attr?a=b.attr(k):(a=parseFloat(ba(b,k))||0,"opacity"!==k&&(z="px"));x||
(x=d);x&&x.match&&x.match("px")&&(x=x.replace(/px/g,""));f.run(a,x,z)})},la=g.seriesType=function(b,h,e,a,x){var z=fa(),f=g.seriesTypes;z.plotOptions[b]=R(z.plotOptions[h],e);f[b]=u(f[h]||function(){},a);f[b].prototype.type=b;x&&(f[b].prototype.pointClass=u(g.Point,x));return f[b]},ca,ha=g.uniqueKey=function(){var b=Math.random().toString(36).substring(2,9)+"-",h=0;return function(){return"highcharts-"+(ca?"":b)+h++}}(),ma=g.useSerialIds=function(b){return ca=H(b,ca)},O=g.isFunction=function(b){return"function"===
typeof b},fa=g.getOptions=function(){return g.defaultOptions},na=g.setOptions=function(b){g.defaultOptions=R(!0,g.defaultOptions,b);(b.time||b.global)&&g.time.update(R(g.defaultOptions.global,g.defaultOptions.time,b.global,b.time));return g.defaultOptions};G.jQuery&&(G.jQuery.fn.highcharts=function(){var b=[].slice.call(arguments);if(this[0])return b[0]?(new (g[K(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):J[q(this[0],"data-highcharts-chart")]});return{Fx:g.Fx,addEvent:ja,animate:ka,animObject:Z,
arrayMax:h,arrayMin:b,attr:q,clamp:function(b,h,e){return b>h?b<e?b:e:h},clearTimeout:k,correctFloat:N,createElement:A,css:a,defined:m,destroyObjectProperties:z,discardElement:x,erase:p,error:c,extend:f,extendClass:u,find:X,fireEvent:da,format:M,getMagnitude:F,getNestedProperty:D,getOptions:fa,getStyle:ba,inArray:U,isArray:n,isClass:C,isDOMElement:r,isFunction:O,isNumber:I,isObject:y,isString:K,merge:R,normalizeTickInterval:Q,numberFormat:Y,objectEach:W,offset:ia,pad:E,pick:H,pInt:v,relativeLength:P,
removeEvent:ea,seriesType:la,setAnimation:aa,setOptions:na,splat:d,stableSort:e,stop:S,syncTimeout:l,timeUnits:V,uniqueKey:ha,useSerialIds:ma,wrap:w}});O(q,"parts/Color.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var R=c.isNumber,y=c.merge,q=c.pInt;c=function(){function c(g){this.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(c){return[q(c[1]),q(c[2]),q(c[3]),parseFloat(c[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(c){return[q(c[1]),q(c[2]),q(c[3]),1]}}];this.rgba=[];if(!(this instanceof c))return new c(g);this.init(g)}c.parse=function(g){return new c(g)};c.prototype.init=function(g){var J,t;if((this.input=g=c.names[g&&g.toLowerCase?g.toLowerCase():""]||g)&&g.stops)this.stops=g.stops.map(function(v){return new c(v[1])});else{if(g&&g.charAt&&"#"===g.charAt()){var G=g.length;g=parseInt(g.substr(1),16);7===G?J=[(g&16711680)>>16,(g&65280)>>8,g&255,1]:4===G&&(J=[(g&3840)>>4|(g&3840)>>8,(g&240)>>4|
g&240,(g&15)<<4|g&15,1])}if(!J)for(t=this.parsers.length;t--&&!J;){var L=this.parsers[t];(G=L.regex.exec(g))&&(J=L.parse(G))}}this.rgba=J||[]};c.prototype.get=function(c){var g=this.input,t=this.rgba;if("undefined"!==typeof this.stops){var G=y(g);G.stops=[].concat(G.stops);this.stops.forEach(function(g,v){G.stops[v]=[G.stops[v][0],g.get(c)]})}else G=t&&R(t[0])?"rgb"===c||!c&&1===t[3]?"rgb("+t[0]+","+t[1]+","+t[2]+")":"a"===c?t[3]:"rgba("+t.join(",")+")":g;return G};c.prototype.brighten=function(c){var g,
t=this.rgba;if(this.stops)this.stops.forEach(function(g){g.brighten(c)});else if(R(c)&&0!==c)for(g=0;3>g;g++)t[g]+=q(255*c),0>t[g]&&(t[g]=0),255<t[g]&&(t[g]=255);return this};c.prototype.setOpacity=function(c){this.rgba[3]=c;return this};c.prototype.tweenTo=function(c,g){var t=this.rgba,G=c.rgba;G.length&&t&&t.length?(c=1!==G[3]||1!==t[3],g=(c?"rgba(":"rgb(")+Math.round(G[0]+(t[0]-G[0])*(1-g))+","+Math.round(G[1]+(t[1]-G[1])*(1-g))+","+Math.round(G[2]+(t[2]-G[2])*(1-g))+(c?","+(G[3]+(t[3]-G[3])*(1-
g)):"")+")"):g=c.input||"none";return g};c.names={white:"#ffffff",black:"#000000"};return c}();g.Color=c;g.color=c.parse;return g.Color});O(q,"parts/SVGElement.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c,q){var y=c.deg2rad,B=c.doc,H=c.hasTouch,D=c.isFirefox,J=c.noop,t=c.svg,G=c.SVG_NS,L=c.win,v=q.animate,K=q.animObject,n=q.attr,r=q.createElement,C=q.css,I=q.defined,p=q.erase,m=q.extend,d=q.fireEvent,l=q.isArray,k=q.isFunction,f=q.isNumber,a=q.isString,A=q.merge,
u=q.objectEach,E=q.pick,P=q.pInt,w=q.stop,M=q.uniqueKey;"";q=function(){function F(){this.height=this.element=void 0;this.opacity=1;this.renderer=void 0;this.SVG_NS=G;this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ");this.width=void 0}F.prototype._defaultGetter=function(a){a=E(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a};F.prototype._defaultSetter=function(a,e,b){b.setAttribute(e,
a)};F.prototype.add=function(a){var e=this.renderer,b=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;"undefined"!==typeof this.textStr&&"text"===this.element.nodeName&&e.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var h=this.zIndexSetter();h||(a?a.element:e.box).appendChild(b);if(this.onAdd)this.onAdd();return this};F.prototype.addClass=function(a,e){var b=e?"":this.attr("class")||"";a=(a||"").split(/ /g).reduce(function(h,e){-1===b.indexOf(e)&&h.push(e);return h},
b?[b]:[]).join(" ");a!==b&&this.attr("class",a);return this};F.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)};F.prototype.align=function(f,e,b){var h,z={};var x=this.renderer;var d=x.alignedObjects;var k,l;if(f){if(this.alignOptions=f,this.alignByTranslate=e,!b||a(b))this.alignTo=h=b||"renderer",p(d,this),d.push(this),b=void 0}else f=this.alignOptions,e=this.alignByTranslate,h=this.alignTo;b=E(b,x[h],x);h=f.align;x=f.verticalAlign;d=(b.x||0)+(f.x||
0);var u=(b.y||0)+(f.y||0);"right"===h?k=1:"center"===h&&(k=2);k&&(d+=(b.width-(f.width||0))/k);z[e?"translateX":"x"]=Math.round(d);"bottom"===x?l=1:"middle"===x&&(l=2);l&&(u+=(b.height-(f.height||0))/l);z[e?"translateY":"y"]=Math.round(u);this[this.placed?"animate":"attr"](z);this.placed=!0;this.alignAttr=z;return this};F.prototype.alignSetter=function(a){var e={left:"start",center:"middle",right:"end"};e[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",e[a]))};F.prototype.animate=
function(a,e,b){var h=K(E(e,this.renderer.globalAnimation,!0));E(B.hidden,B.msHidden,B.webkitHidden,!1)&&(h.duration=0);0!==h.duration?(b&&(h.complete=b),v(this,a,h)):(this.attr(a,void 0,b),u(a,function(b,e){h.step&&h.step.call(this,b,{prop:e,pos:1})},this));return this};F.prototype.applyTextOutline=function(a){var e=this.element,b;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(e.style.fill)));a=a.split(" ");var h=a[a.length-1];if((b=a[0])&&"none"!==b&&c.svg){this.fakeTS=
!0;a=[].slice.call(e.getElementsByTagName("tspan"));this.ySetter=this.xSetter;b=b.replace(/(^[\d\.]+)(.*?)$/g,function(b,h,e){return 2*h+e});this.removeTextOutline(a);var z=e.textContent?/^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(e.textContent):!1;var x=e.firstChild;a.forEach(function(a,f){0===f&&(a.setAttribute("x",e.getAttribute("x")),f=e.getAttribute("y"),a.setAttribute("y",f||0),null===f&&e.setAttribute("y",0));f=a.cloneNode(!0);n(z&&!D?a:f,{"class":"highcharts-text-outline",
fill:h,stroke:h,"stroke-width":b,"stroke-linejoin":"round"});e.insertBefore(f,x)});z&&D&&a[0]&&(a=a[0].cloneNode(!0),a.textContent=" ",e.insertBefore(a,x))}};F.prototype.attr=function(a,e,b,h){var z=this.element,x,f=this,d,k,l=this.symbolCustomAttribs;if("string"===typeof a&&"undefined"!==typeof e){var m=a;a={};a[m]=e}"string"===typeof a?f=(this[a+"Getter"]||this._defaultGetter).call(this,a,z):(u(a,function(b,e){d=!1;h||w(this,e);this.symbolName&&-1!==l.indexOf(e)&&(x||(this.symbolAttr(a),x=!0),d=
!0);!this.rotation||"x"!==e&&"y"!==e||(this.doTransform=!0);d||(k=this[e+"Setter"]||this._defaultSetter,k.call(this,b,e,z),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(e)&&this.updateShadows(e,b,k))},this),this.afterSetters());b&&b.call(this);return f};F.prototype.clip=function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")};F.prototype.crisp=function(a,e){e=e||a.strokeWidth||0;var b=Math.round(e)%2/2;a.x=Math.floor(a.x||
this.x||0)+b;a.y=Math.floor(a.y||this.y||0)+b;a.width=Math.floor((a.width||this.width||0)-2*b);a.height=Math.floor((a.height||this.height||0)-2*b);I(a.strokeWidth)&&(a.strokeWidth=e);return a};F.prototype.complexColor=function(a,e,b){var h=this.renderer,z,x,f,k,m,p,w,C,Q,r,E=[],S;d(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?x="radialGradient":a.linearGradient&&(x="linearGradient");if(x){f=a[x];m=h.gradients;p=a.stops;Q=b.radialReference;l(f)&&(a[x]=f={x1:f[0],y1:f[1],
x2:f[2],y2:f[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===x&&Q&&!I(f.gradientUnits)&&(k=f,f=A(f,h.getRadialAttr(Q,k),{gradientUnits:"userSpaceOnUse"}));u(f,function(b,h){"id"!==h&&E.push(h,b)});u(p,function(b){E.push(b)});E=E.join(",");if(m[E])r=m[E].attr("id");else{f.id=r=M();var d=m[E]=h.createElement(x).attr(f).add(h.defs);d.radAttr=k;d.stops=[];p.forEach(function(b){0===b[1].indexOf("rgba")?(z=g.parse(b[1]),w=z.get("rgb"),C=z.get("a")):(w=b[1],C=1);b=h.createElement("stop").attr({offset:b[0],
"stop-color":w,"stop-opacity":C}).add(d);d.stops.push(b)})}S="url("+h.url+"#"+r+")";b.setAttribute(e,S);b.gradient=E;a.toString=function(){return S}}})};F.prototype.css=function(a){var e=this.styles,b={},h=this.element,z="",x=!e,f=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);e&&u(a,function(h,a){e&&e[a]!==h&&(b[a]=h,x=!0)});if(x){e&&(a=m(e,b));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;else if("text"===h.nodeName.toLowerCase()&&a.width)var d=this.textWidth=
P(a.width);this.styles=a;d&&!t&&this.renderer.forExport&&delete a.width;if(h.namespaceURI===this.SVG_NS){var k=function(b,h){return"-"+h.toLowerCase()};u(a,function(b,h){-1===f.indexOf(h)&&(z+=h.replace(/([A-Z])/g,k)+":"+b+";")});z&&n(h,"style",z)}else C(h,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this};F.prototype.dashstyleSetter=function(a){var e=this["stroke-width"];"inherit"===e&&(e=1);if(a=a&&a.toLowerCase()){var b=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(a=b.length;a--;)b[a]=""+P(b[a])*E(e,NaN);a=b.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}};F.prototype.destroy=function(){var a=this,e=a.element||{},b=a.renderer,h=b.isSVG&&"SPAN"===e.nodeName&&a.parentGroup||void 0,z=e.ownerSVGElement;
e.onclick=e.onmouseout=e.onmouseover=e.onmousemove=e.point=null;w(a);if(a.clipPath&&z){var x=a.clipPath;[].forEach.call(z.querySelectorAll("[clip-path],[CLIP-PATH]"),function(b){-1<b.getAttribute("clip-path").indexOf(x.element.id)&&b.removeAttribute("clip-path")});a.clipPath=x.destroy()}if(a.stops){for(z=0;z<a.stops.length;z++)a.stops[z].destroy();a.stops.length=0;a.stops=void 0}a.safeRemoveChild(e);for(b.styledMode||a.destroyShadows();h&&h.div&&0===h.div.childNodes.length;)e=h.parentGroup,a.safeRemoveChild(h.div),
delete h.div,h=e;a.alignTo&&p(b.alignedObjects,a);u(a,function(b,h){a[h]&&a[h].parentGroup===a&&a[h].destroy&&a[h].destroy();delete a[h]})};F.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0};F.prototype.destroyTextPath=function(a,e){var b=a.getElementsByTagName("text")[0];if(b){if(b.removeAttribute("dx"),b.removeAttribute("dy"),e.element.setAttribute("id",""),this.textPathWrapper&&b.getElementsByTagName("textPath").length){for(a=
this.textPathWrapper.element.childNodes;a.length;)b.appendChild(a[0]);b.removeChild(this.textPathWrapper.element)}}else if(a.getAttribute("dx")||a.getAttribute("dy"))a.removeAttribute("dx"),a.removeAttribute("dy");this.textPathWrapper&&(this.textPathWrapper=this.textPathWrapper.destroy())};F.prototype.dSetter=function(a,e,b){l(a)&&("string"===typeof a[0]&&(a=this.renderer.pathToSegments(a)),this.pathArray=a,a=a.reduce(function(b,a,e){return a&&a.join?(e?b+" ":"")+a.join(" "):(a||"").toString()},""));
/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[e]!==a&&(b.setAttribute(e,a),this[e]=a)};F.prototype.fadeOut=function(a){var e=this;e.animate({opacity:0},{duration:E(a,150),complete:function(){e.attr({y:-9999}).hide()}})};F.prototype.fillSetter=function(a,e,b){"string"===typeof a?b.setAttribute(e,a):a&&this.complexColor(a,e,b)};F.prototype.getBBox=function(a,e){var b,h=this.renderer,z=this.element,x=this.styles,f=this.textStr,d=h.cache,l=h.cacheKeys,u=z.namespaceURI===this.SVG_NS;e=E(e,this.rotation,0);
var A=h.styledMode?z&&F.prototype.getStyle.call(z,"font-size"):x&&x.fontSize;if(I(f)){var p=f.toString();-1===p.indexOf("<")&&(p=p.replace(/[0-9]/g,"0"));p+=["",e,A,this.textWidth,x&&x.textOverflow,x&&x.fontWeight].join()}p&&!a&&(b=d[p]);if(!b){if(u||h.forExport){try{var w=this.fakeTS&&function(b){[].forEach.call(z.querySelectorAll(".highcharts-text-outline"),function(h){h.style.display=b})};k(w)&&w("none");b=z.getBBox?m({},z.getBBox()):{width:z.offsetWidth,height:z.offsetHeight};k(w)&&w("")}catch(X){""}if(!b||
0>b.width)b={width:0,height:0}}else b=this.htmlGetBBox();h.isSVG&&(a=b.width,h=b.height,u&&(b.height=h={"11px,17":14,"13px,20":16}[x&&x.fontSize+","+Math.round(h)]||h),e&&(x=e*y,b.width=Math.abs(h*Math.sin(x))+Math.abs(a*Math.cos(x)),b.height=Math.abs(h*Math.cos(x))+Math.abs(a*Math.sin(x))));if(p&&0<b.height){for(;250<l.length;)delete d[l.shift()];d[p]||l.push(p);d[p]=b}}return b};F.prototype.getStyle=function(a){return L.getComputedStyle(this.element||this,"").getPropertyValue(a)};F.prototype.hasClass=
function(a){return-1!==(""+this.attr("class")).split(" ").indexOf(a)};F.prototype.hide=function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this};F.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}};F.prototype.init=function(a,e){this.element="span"===e?r(e):B.createElementNS(this.SVG_NS,e);this.renderer=a;d(this,"afterInit")};F.prototype.invert=function(a){this.inverted=a;this.updateTransform();return this};F.prototype.on=function(a,e){var b,h,z=this.element,
x;H&&"click"===a?(z.ontouchstart=function(a){b=a.touches[0].clientX;h=a.touches[0].clientY},z.ontouchend=function(a){b&&4<=Math.sqrt(Math.pow(b-a.changedTouches[0].clientX,2)+Math.pow(h-a.changedTouches[0].clientY,2))||e.call(z,a);x=!0;a.preventDefault()},z.onclick=function(b){x||e.call(z,b)}):z["on"+a]=e;return this};F.prototype.opacitySetter=function(a,e,b){this[e]=a;b.setAttribute(e,a)};F.prototype.removeClass=function(f){return this.attr("class",(""+this.attr("class")).replace(a(f)?new RegExp("(^| )"+
f+"( |$)"):f," ").replace(/ +/g," ").trim())};F.prototype.removeTextOutline=function(a){for(var e=a.length,b;e--;)b=a[e],"highcharts-text-outline"===b.getAttribute("class")&&p(a,this.element.removeChild(b))};F.prototype.safeRemoveChild=function(a){var e=a.parentNode;e&&e.removeChild(a)};F.prototype.setRadialReference=function(a){var e=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=a;e&&e.radAttr&&e.animate(this.renderer.getRadialAttr(a,e.radAttr));
return this};F.prototype.setTextPath=function(a,e){var b=this.element,h={textAnchor:"text-anchor"},z=!1,x=this.textPathWrapper,d=!x;e=A(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},e);var k=e.attributes;if(a&&e&&e.enabled){x&&null===x.element.parentNode?(d=!0,x=x.destroy()):x&&this.removeTextOutline.call(x.parentGroup,[].slice.call(b.getElementsByTagName("tspan")));this.options&&this.options.padding&&(k.dx=-this.options.padding);x||(this.textPathWrapper=x=this.renderer.createElement("textPath"),
z=!0);var l=x.element;(e=a.element.getAttribute("id"))||a.element.setAttribute("id",e=M());if(d)for(a=b.getElementsByTagName("tspan");a.length;)a[0].setAttribute("y",0),f(k.dx)&&a[0].setAttribute("x",-k.dx),l.appendChild(a[0]);z&&x&&x.add({element:this.text?this.text.element:b});l.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+e);I(k.dy)&&(l.parentNode.setAttribute("dy",k.dy),delete k.dy);I(k.dx)&&(l.parentNode.setAttribute("dx",k.dx),delete k.dx);u(k,function(b,a){l.setAttribute(h[a]||
a,b)});b.removeAttribute("transform");this.removeTextOutline.call(x,[].slice.call(b.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=J}else x&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(b,a),this.updateTransform(),this.options&&this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this};F.prototype.shadow=function(a,e,b){var h=
[],z=this.element,x=!1,f=this.oldShadowOptions;var d={color:"#000000",offsetX:1,offsetY:1,opacity:.15,width:3};var k;!0===a?k=d:"object"===typeof a&&(k=m(d,a));k&&(k&&f&&u(k,function(b,h){b!==f[h]&&(x=!0)}),x&&this.destroyShadows(),this.oldShadowOptions=k);if(!k)this.destroyShadows();else if(!this.shadows){var l=k.opacity/k.width;var A=this.parentInverted?"translate(-1,-1)":"translate("+k.offsetX+", "+k.offsetY+")";for(d=1;d<=k.width;d++){var p=z.cloneNode(!1);var w=2*k.width+1-2*d;n(p,{stroke:a.color||
"#000000","stroke-opacity":l*d,"stroke-width":w,transform:A,fill:"none"});p.setAttribute("class",(p.getAttribute("class")||"")+" highcharts-shadow");b&&(n(p,"height",Math.max(n(p,"height")-w,0)),p.cutHeight=w);e?e.element.appendChild(p):z.parentNode&&z.parentNode.insertBefore(p,z);h.push(p)}this.shadows=h}return this};F.prototype.show=function(a){return this.attr({visibility:a?"inherit":"visible"})};F.prototype.strokeSetter=function(a,e,b){this[e]=a;this.stroke&&this["stroke-width"]?(F.prototype.fillSetter.call(this,
this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===e&&0===a&&this.hasStroke?(b.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};F.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width"),e=0;if(a.indexOf("px")===a.length-2)e=P(a);else if(""!==a){var b=
B.createElementNS(G,"rect");n(b,{width:a,"stroke-width":0});this.element.parentNode.appendChild(b);e=b.getBBox().width;b.parentNode.removeChild(b)}return e};F.prototype.symbolAttr=function(a){var e=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(b){e[b]=E(a[b],e[b])});e.attr({d:e.renderer.symbols[e.symbolName](e.x,e.y,e.width,e.height,e)})};F.prototype.textSetter=function(a){a!==this.textStr&&(delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))};
F.prototype.titleSetter=function(a){var e=this.element.getElementsByTagName("title")[0];e||(e=B.createElementNS(this.SVG_NS,"title"),this.element.appendChild(e));e.firstChild&&e.removeChild(e.firstChild);e.appendChild(B.createTextNode(String(E(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")))};F.prototype.toFront=function(){var a=this.element;a.parentNode.appendChild(a);return this};F.prototype.translate=function(a,e){return this.attr({translateX:a,translateY:e})};F.prototype.updateShadows=
function(a,e,b){var h=this.shadows;if(h)for(var z=h.length;z--;)b.call(h[z],"height"===a?Math.max(e-(h[z].cutHeight||0),0):"d"===a?this.d:e,a,h[z])};F.prototype.updateTransform=function(){var a=this.translateX||0,e=this.translateY||0,b=this.scaleX,h=this.scaleY,z=this.inverted,x=this.rotation,f=this.matrix,d=this.element;z&&(a+=this.width,e+=this.height);a=["translate("+a+","+e+")"];I(f)&&a.push("matrix("+f.join(",")+")");z?a.push("rotate(90) scale(-1,1)"):x&&a.push("rotate("+x+" "+E(this.rotationOriginX,
d.getAttribute("x"),0)+" "+E(this.rotationOriginY,d.getAttribute("y")||0)+")");(I(b)||I(h))&&a.push("scale("+E(b,1)+" "+E(h,1)+")");a.length&&d.setAttribute("transform",a.join(" "))};F.prototype.visibilitySetter=function(a,e,b){"inherit"===a?b.removeAttribute(e):this[e]!==a&&b.setAttribute(e,a);this[e]=a};F.prototype.xGetter=function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)};F.prototype.zIndexSetter=function(a,e){var b=this.renderer,h=this.parentGroup,
z=(h||b).element||b.box,x=this.element,f=!1;b=z===b.box;var d=this.added;var k;I(a)?(x.setAttribute("data-z-index",a),a=+a,this[e]===a&&(d=!1)):I(this[e])&&x.removeAttribute("data-z-index");this[e]=a;if(d){(a=this.zIndex)&&h&&(h.handleZ=!0);e=z.childNodes;for(k=e.length-1;0<=k&&!f;k--){h=e[k];d=h.getAttribute("data-z-index");var l=!I(d);if(h!==x)if(0>a&&l&&!b&&!k)z.insertBefore(x,e[k]),f=!0;else if(P(d)<=a||l&&(!I(a)||0<=a))z.insertBefore(x,e[k+1]||null),f=!0}f||(z.insertBefore(x,e[b?3:0]||null),
f=!0)}return f};return F}();q.prototype["stroke-widthSetter"]=q.prototype.strokeSetter;q.prototype.yGetter=q.prototype.xGetter;q.prototype.matrixSetter=q.prototype.rotationOriginXSetter=q.prototype.rotationOriginYSetter=q.prototype.rotationSetter=q.prototype.scaleXSetter=q.prototype.scaleYSetter=q.prototype.translateXSetter=q.prototype.translateYSetter=q.prototype.verticalAlignSetter=function(a,f){this[f]=a;this.doTransform=!0};c.SVGElement=q;return c.SVGElement});O(q,"parts/SVGLabel.js",[q["parts/SVGElement.js"],
q["parts/Utilities.js"]],function(g,c){var q=this&&this.__extends||function(){var c=function(g,L){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,g){c.__proto__=g}||function(c,g){for(var n in g)g.hasOwnProperty(n)&&(c[n]=g[n])};return c(g,L)};return function(g,L){function v(){this.constructor=g}c(g,L);g.prototype=null===L?Object.create(L):(v.prototype=L.prototype,new v)}}(),y=c.defined,B=c.extend,H=c.isNumber,D=c.merge,J=c.removeEvent;return function(c){function t(g,v,K,n,r,C,
I,p,m,d){var l=c.call(this)||this;l.init(g,"g");l.textStr=v;l.x=K;l.y=n;l.anchorX=C;l.anchorY=I;l.baseline=m;l.className=d;"button"!==d&&l.addClass("highcharts-label");d&&l.addClass("highcharts-"+d);l.text=g.text("",0,0,p).attr({zIndex:1});if("string"===typeof r){var k=/^url\((.*?)\)$/.test(r);if(l.renderer.symbols[r]||k)l.symbolKey=r}l.bBox=t.emptyBBox;l.padding=3;l.paddingLeft=0;l.baselineOffset=0;l.needsBox=g.styledMode||k;l.deferredAttr={};l.alignFactor=0;return l}q(t,c);t.prototype.alignSetter=
function(c){c={left:0,center:.5,right:1}[c];c!==this.alignFactor&&(this.alignFactor=c,this.bBox&&H(this.xSetting)&&this.attr({x:this.xSetting}))};t.prototype.anchorXSetter=function(c,g){this.anchorX=c;this.boxAttr(g,Math.round(c)-this.getCrispAdjust()-this.xSetting)};t.prototype.anchorYSetter=function(c,g){this.anchorY=c;this.boxAttr(g,c-this.ySetting)};t.prototype.boxAttr=function(c,g){this.box?this.box.attr(c,g):this.deferredAttr[c]=g};t.prototype.css=function(c){if(c){var v={};c=D(c);t.textProps.forEach(function(n){"undefined"!==
typeof c[n]&&(v[n]=c[n],delete c[n])});this.text.css(v);var L="fontSize"in v||"fontWeight"in v;if("width"in v||L)this.updateBoxSize(),L&&this.updateTextPadding()}return g.prototype.css.call(this,c)};t.prototype.destroy=function(){J(this.element,"mouseenter");J(this.element,"mouseleave");this.text&&this.text.destroy();this.box&&(this.box=this.box.destroy());g.prototype.destroy.call(this)};t.prototype.fillSetter=function(c,g){c&&(this.needsBox=!0);this.fill=c;this.boxAttr(g,c)};t.prototype.getBBox=
function(){var c=this.bBox,g=this.padding;return{width:c.width+2*g,height:c.height+2*g,x:c.x-g,y:c.y-g}};t.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2};t.prototype.heightSetter=function(c){this.heightSetting=c};t.prototype.on=function(c,v){var t=this,n=t.text,r=n&&"SPAN"===n.element.tagName?n:void 0;if(r){var C=function(C){("mouseenter"===c||"mouseleave"===c)&&C.relatedTarget instanceof
Element&&(t.element.contains(C.relatedTarget)||r.element.contains(C.relatedTarget))||v.call(t.element,C)};r.on(c,C)}g.prototype.on.call(t,c,C||v);return t};t.prototype.onAdd=function(){var c=this.textStr;this.text.add(this);this.attr({text:y(c)?c:"",x:this.x,y:this.y});this.box&&y(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})};t.prototype.paddingSetter=function(c){y(c)&&c!==this.padding&&(this.padding=c,this.updateTextPadding())};t.prototype.paddingLeftSetter=function(c){y(c)&&
c!==this.paddingLeft&&(this.paddingLeft=c,this.updateTextPadding())};t.prototype.rSetter=function(c,g){this.boxAttr(g,c)};t.prototype.shadow=function(c){c&&!this.renderer.styledMode&&(this.updateBoxSize(),this.box&&this.box.shadow(c));return this};t.prototype.strokeSetter=function(c,g){this.stroke=c;this.boxAttr(g,c)};t.prototype["stroke-widthSetter"]=function(c,g){c&&(this.needsBox=!0);this["stroke-width"]=c;this.boxAttr(g,c)};t.prototype["text-alignSetter"]=function(c){this.textAlign=c};t.prototype.textSetter=
function(c){"undefined"!==typeof c&&this.text.attr({text:c});this.updateBoxSize();this.updateTextPadding()};t.prototype.updateBoxSize=function(){var c=this.text.element.style,g={},G=this.padding,n=this.paddingLeft,r=H(this.widthSetting)&&H(this.heightSetting)&&!this.textAlign||!y(this.text.textStr)?t.emptyBBox:this.text.getBBox();this.width=(this.widthSetting||r.width||0)+2*G+n;this.height=(this.heightSetting||r.height||0)+2*G;this.baselineOffset=G+Math.min(this.renderer.fontMetrics(c&&c.fontSize,
this.text).b,r.height||Infinity);this.needsBox&&(this.box||(c=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),c.addClass(("button"===this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),c.add(this),c=this.getCrispAdjust(),g.x=c,g.y=(this.baseline?-this.baselineOffset:0)+c),g.width=Math.round(this.width),g.height=Math.round(this.height),this.box.attr(B(g,this.deferredAttr)),this.deferredAttr={});this.bBox=r};t.prototype.updateTextPadding=
function(){var c=this.text,g=this.baseline?0:this.baselineOffset,t=this.paddingLeft+this.padding;y(this.widthSetting)&&this.bBox&&("center"===this.textAlign||"right"===this.textAlign)&&(t+={center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width));if(t!==c.x||g!==c.y)c.attr("x",t),c.hasBoxWidthChanged&&(this.bBox=c.getBBox(!0),this.updateBoxSize()),"undefined"!==typeof g&&c.attr("y",g);c.x=t;c.y=g};t.prototype.widthSetter=function(c){this.widthSetting=H(c)?c:void 0};t.prototype.xSetter=
function(c){this.x=c;this.alignFactor&&(c-=this.alignFactor*((this.widthSetting||this.bBox.width)+2*this.padding),this["forceAnimate:x"]=!0);this.xSetting=Math.round(c);this.attr("translateX",this.xSetting)};t.prototype.ySetter=function(c){this.ySetting=this.y=Math.round(c);this.attr("translateY",this.ySetting)};t.emptyBBox={width:0,height:0,x:0,y:0};t.textProps="color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
return t}(g)});O(q,"parts/SVGRenderer.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/SVGElement.js"],q["parts/SVGLabel.js"],q["parts/Utilities.js"]],function(g,c,q,y,B){var H=B.addEvent,D=B.attr,J=B.createElement,t=B.css,G=B.defined,L=B.destroyObjectProperties,v=B.extend,K=B.isArray,n=B.isNumber,r=B.isObject,C=B.isString,I=B.merge,p=B.objectEach,m=B.pick,d=B.pInt,l=B.splat,k=B.uniqueKey,f=c.charts,a=c.deg2rad,A=c.doc,u=c.isFirefox,E=c.isMS,P=c.isWebKit;B=c.noop;var w=c.svg,M=c.SVG_NS,F=c.symbolSizes,
Q=c.win,e=function(){function b(b,a,e,f,d,k,l){this.width=this.url=this.style=this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0;this.init(b,a,e,f,d,k,l)}b.prototype.init=function(b,a,e,f,d,k,l){var h=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});l||h.css(this.getStyle(f));f=h.element;b.appendChild(f);D(b,"dir","ltr");-1===b.innerHTML.indexOf("xmlns")&&
D(f,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=f;this.boxWrapper=h;this.alignedObjects=[];this.url=(u||P)&&A.getElementsByTagName("base").length?Q.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(A.createTextNode("Created with Highcharts 8.1.2"));this.defs=this.createElement("defs").add();this.allowHTML=k;this.forExport=d;this.styledMode=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=
0;this.setSize(a,e,!1);var x;u&&b.getBoundingClientRect&&(a=function(){t(b,{left:0,top:0});x=b.getBoundingClientRect();t(b,{left:Math.ceil(x.left)-x.left+"px",top:Math.ceil(x.top)-x.top+"px"})},a(),this.unSubPixelFix=H(Q,"resize",a))};b.prototype.definition=function(b){function h(b,e){var f;l(b).forEach(function(b){var x=a.createElement(b.tagName),z={};p(b,function(b,h){"tagName"!==h&&"children"!==h&&"textContent"!==h&&(z[h]=b)});x.attr(z);x.add(e||a.defs);b.textContent&&x.element.appendChild(A.createTextNode(b.textContent));
h(b.children||[],x);f=x});return f}var a=this;return h(b)};b.prototype.getStyle=function(b){return this.style=v({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},b)};b.prototype.setStyle=function(b){this.boxWrapper.css(this.getStyle(b))};b.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width};b.prototype.destroy=function(){var b=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();L(this.gradients||{});this.gradients=null;
b&&(this.defs=b.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null};b.prototype.createElement=function(b){var h=new this.Element;h.init(this,b);return h};b.prototype.getRadialAttr=function(b,a){return{cx:b[0]-b[2]/2+a.cx*b[2],cy:b[1]-b[2]/2+a.cy*b[2],r:a.r*b[2]}};b.prototype.truncate=function(b,a,e,f,d,k,l){var h=this,x=b.rotation,z,u=f?1:0,N=(e||f).length,m=N,p=[],w=function(b){a.firstChild&&a.removeChild(a.firstChild);b&&a.appendChild(A.createTextNode(b))},c=function(x,
z){z=z||x;if("undefined"===typeof p[z])if(a.getSubStringLength)try{p[z]=d+a.getSubStringLength(0,f?z+1:z)}catch(ha){""}else h.getSpanWidth&&(w(l(e||f,x)),p[z]=d+h.getSpanWidth(b,a));return p[z]},C;b.rotation=0;var r=c(a.textContent.length);if(C=d+r>k){for(;u<=N;)m=Math.ceil((u+N)/2),f&&(z=l(f,m)),r=c(m,z&&z.length-1),u===N?u=N+1:r>k?N=m-1:u=m;0===N?w(""):e&&N===e.length-1||w(z||l(e||f,m))}f&&f.splice(0,m);b.actualWidth=r;b.rotation=x;return C};b.prototype.buildText=function(b){var h=b.element,a=this,
e=a.forExport,f=m(b.textStr,"").toString(),k=-1!==f.indexOf("<"),l=h.childNodes,u,c=D(h,"x"),r=b.styles,E=b.textWidth,n=r&&r.lineHeight,S=r&&r.textOutline,g=r&&"ellipsis"===r.textOverflow,I=r&&"nowrap"===r.whiteSpace,F=r&&r.fontSize,P,v=l.length;r=E&&!b.added&&this.box;var G=function(b){var e;a.styledMode||(e=/(px|em)$/.test(b&&b.style.fontSize)?b.style.fontSize:F||a.style.fontSize||12);return n?d(n):a.fontMetrics(e,b.getAttribute("style")?b:h).h},Q=function(b,h){p(a.escapes,function(a,e){h&&-1!==
h.indexOf(a)||(b=b.toString().replace(new RegExp(a,"g"),e))});return b},q=function(b,h){var a=b.indexOf("<");b=b.substring(a,b.indexOf(">")-a);a=b.indexOf(h+"=");if(-1!==a&&(a=a+h.length+1,h=b.charAt(a),'"'===h||"'"===h))return b=b.substring(a+1),b.substring(0,b.indexOf(h))},K=/<br.*?>/g;var J=[f,g,I,n,S,F,E].join();if(J!==b.textCache){for(b.textCache=J;v--;)h.removeChild(l[v]);k||S||g||E||-1!==f.indexOf(" ")&&(!I||K.test(f))?(r&&r.appendChild(h),k?(f=a.styledMode?f.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,
'<span class="highcharts-emphasized">'):f.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),f=f.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(K)):f=[f],f=f.filter(function(b){return""!==b}),f.forEach(function(f,x){var z=0,d=0;f=f.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");var k=f.split("|||");k.forEach(function(f){if(""!==f||1===k.length){var l={},N=A.createElementNS(a.SVG_NS,
"tspan"),m,p;(m=q(f,"class"))&&D(N,"class",m);if(m=q(f,"style"))m=m.replace(/(;| |^)color([ :])/,"$1fill$2"),D(N,"style",m);if((p=q(f,"href"))&&!e&&-1===p.split(":")[0].toLowerCase().indexOf("javascript")){var C=A.createElementNS(a.SVG_NS,"a");D(C,"href",p);D(N,"class","highcharts-anchor");C.appendChild(N);a.styledMode||t(N,{cursor:"pointer"})}f=Q(f.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==f){N.appendChild(A.createTextNode(f));z?l.dx=0:x&&null!==c&&(l.x=c);D(N,l);h.appendChild(C||N);!z&&
P&&(!w&&e&&t(N,{display:"block"}),D(N,"dy",G(N)));if(E){var r=f.replace(/([^\^])-/g,"$1- ").split(" ");l=!I&&(1<k.length||x||1<r.length);C=0;p=G(N);if(g)u=a.truncate(b,N,f,void 0,0,Math.max(0,E-parseInt(F||12,10)),function(b,h){return b.substring(0,h)+"\u2026"});else if(l)for(;r.length;)r.length&&!I&&0<C&&(N=A.createElementNS(M,"tspan"),D(N,{dy:p,x:c}),m&&D(N,"style",m),N.appendChild(A.createTextNode(r.join(" ").replace(/- /g,"-"))),h.appendChild(N)),a.truncate(b,N,null,r,0===C?d:0,E,function(b,h){return r.slice(0,
h).join(" ").replace(/- /g,"-")}),d=b.actualWidth,C++}z++}}});P=P||h.childNodes.length}),g&&u&&b.attr("title",Q(b.textStr||"",["&lt;","&gt;"])),r&&r.removeChild(h),C(S)&&b.applyTextOutline&&b.applyTextOutline(S)):h.appendChild(A.createTextNode(Q(f)))}};b.prototype.getContrast=function(b){b=g.parse(b).rgba;b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"};b.prototype.button=function(b,a,e,f,d,k,l,u,m,p){var h=this.label(b,a,e,m,void 0,void 0,p,void 0,"button"),x=0,z=this.styledMode;
b=d&&d.style||{};d&&d.style&&delete d.style;h.attr(I({padding:8,r:2},d));if(!z){d=I({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},{style:b},d);var N=d.style;delete d.style;k=I(d,{fill:"#e6e6e6"},k);var A=k.style;delete k.style;l=I(d,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},l);var w=l.style;delete l.style;u=I(d,{style:{color:"#cccccc"}},u);var c=u.style;delete u.style}H(h.element,E?"mouseover":"mouseenter",function(){3!==
x&&h.setState(1)});H(h.element,E?"mouseout":"mouseleave",function(){3!==x&&h.setState(x)});h.setState=function(b){1!==b&&(h.state=x=b);h.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][b||0]);z||h.attr([d,k,l,u][b||0]).css([N,A,w,c][b||0])};z||h.attr(d).css(v({cursor:"default"},N));return h.on("click",function(b){3!==x&&f.call(h,b)})};b.prototype.crispLine=function(b,a,e){void 0===e&&(e="round");var h=b[0],f=b[1];
h[1]===f[1]&&(h[1]=f[1]=Math[e](h[1])-a%2/2);h[2]===f[2]&&(h[2]=f[2]=Math[e](h[2])+a%2/2);return b};b.prototype.path=function(b){var h=this.styledMode?{}:{fill:"none"};K(b)?h.d=b:r(b)&&v(h,b);return this.createElement("path").attr(h)};b.prototype.circle=function(b,a,e){b=r(b)?b:"undefined"===typeof b?{}:{x:b,y:a,r:e};a=this.createElement("circle");a.xSetter=a.ySetter=function(b,h,a){a.setAttribute("c"+h,b)};return a.attr(b)};b.prototype.arc=function(b,a,e,f,d,k){r(b)?(f=b,a=f.y,e=f.r,b=f.x):f={innerR:f,
start:d,end:k};b=this.symbol("arc",b,a,e,e,f);b.r=e;return b};b.prototype.rect=function(b,a,e,f,d,k){d=r(b)?b.r:d;var h=this.createElement("rect");b=r(b)?b:"undefined"===typeof b?{}:{x:b,y:a,width:Math.max(e,0),height:Math.max(f,0)};this.styledMode||("undefined"!==typeof k&&(b.strokeWidth=k,b=h.crisp(b)),b.fill="none");d&&(b.r=d);h.rSetter=function(b,a,e){h.r=b;D(e,{rx:b,ry:b})};h.rGetter=function(){return h.r};return h.attr(b)};b.prototype.setSize=function(b,a,e){var h=this.alignedObjects,f=h.length;
this.width=b;this.height=a;for(this.boxWrapper.animate({width:b,height:a},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:m(e,!0)?void 0:0});f--;)h[f].align()};b.prototype.g=function(b){var h=this.createElement("g");return b?h.attr({"class":"highcharts-"+b}):h};b.prototype.image=function(b,a,e,f,d,k){var h={preserveAspectRatio:"none"},x=function(b,h){b.setAttributeNS?b.setAttributeNS("http://www.w3.org/1999/xlink","href",h):b.setAttribute("hc-svg-href",
h)},z=function(h){x(l.element,b);k.call(l,h)};1<arguments.length&&v(h,{x:a,y:e,width:f,height:d});var l=this.createElement("image").attr(h);k?(x(l.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),h=new Q.Image,H(h,"load",z),h.src=b,h.complete&&z({})):x(l.element,b);return l};b.prototype.symbol=function(b,a,e,d,k,l){var h=this,x=/^url\((.*?)\)$/,z=x.test(b),u=!z&&(this.symbols[b]?b:"circle"),N=u&&this.symbols[u],p;if(N){"number"===typeof a&&(p=N.call(this.symbols,
Math.round(a||0),Math.round(e||0),d||0,k||0,l));var w=this.path(p);h.styledMode||w.attr("fill","none");v(w,{symbolName:u,x:a,y:e,width:d,height:k});l&&v(w,l)}else if(z){var c=b.match(x)[1];w=this.image(c);w.imgwidth=m(F[c]&&F[c].width,l&&l.width);w.imgheight=m(F[c]&&F[c].height,l&&l.height);var C=function(){w.attr({width:w.width,height:w.height})};["width","height"].forEach(function(b){w[b+"Setter"]=function(b,h){var a={},e=this["img"+h],f="width"===h?"translateX":"translateY";this[h]=b;G(e)&&(l&&
"within"===l.backgroundSize&&this.width&&this.height&&(e=Math.round(e*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(h,e),this.alignByTranslate||(a[f]=((this[h]||0)-e)/2,this.attr(a)))}});G(a)&&w.attr({x:a,y:e});w.isImg=!0;G(w.imgwidth)&&G(w.imgheight)?C():(w.attr({width:0,height:0}),J("img",{onload:function(){var b=f[h.chartIndex];0===this.width&&(t(this,{position:"absolute",top:"-999em"}),A.body.appendChild(this));F[c]={width:this.width,height:this.height};
w.imgwidth=this.width;w.imgheight=this.height;w.element&&C();this.parentNode&&this.parentNode.removeChild(this);h.imgCount--;if(!h.imgCount&&b&&!b.hasLoaded)b.onload()},src:c}),this.imgCount++)}return w};b.prototype.clipRect=function(b,a,e,f){var h=k()+"-",x=this.createElement("clipPath").attr({id:h}).add(this.defs);b=this.rect(b,a,e,f,0).add(x);b.id=h;b.clipPath=x;b.count=0;return b};b.prototype.text=function(b,a,e,f){var h={};if(f&&(this.allowHTML||!this.forExport))return this.html(b,a,e);h.x=Math.round(a||
0);e&&(h.y=Math.round(e));G(b)&&(h.text=b);b=this.createElement("text").attr(h);f||(b.xSetter=function(b,h,a){var e=a.getElementsByTagName("tspan"),f=a.getAttribute(h),x;for(x=0;x<e.length;x++){var d=e[x];d.getAttribute(h)===f&&d.setAttribute(h,b)}a.setAttribute(h,b)});return b};b.prototype.fontMetrics=function(b,a){b=!this.styledMode&&/px/.test(b)||!Q.getComputedStyle?b||a&&a.style&&a.style.fontSize||this.style&&this.style.fontSize:a&&q.prototype.getStyle.call(a,"font-size");b=/px/.test(b)?d(b):
12;a=24>b?b+3:Math.round(1.2*b);return{h:a,b:Math.round(.8*a),f:b}};b.prototype.rotCorr=function(b,e,f){var h=b;e&&f&&(h=Math.max(h*Math.cos(e*a),4));return{x:-b/3*Math.sin(e*a),y:h}};b.prototype.pathToSegments=function(b){for(var h=[],a=[],e={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},f=0;f<b.length;f++)C(a[0])&&n(b[f])&&a.length===e[a[0].toUpperCase()]&&b.splice(f,0,a[0].replace("M","L").replace("m","l")),"string"===typeof b[f]&&(a.length&&h.push(a.slice(0)),a.length=0),a.push(b[f]);h.push(a.slice(0));
return h};b.prototype.label=function(b,a,e,f,d,k,l,u,m){return new y(this,b,a,e,f,d,k,l,u,m)};return b}();e.prototype.Element=q;e.prototype.SVG_NS=M;e.prototype.draw=B;e.prototype.escapes={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};e.prototype.symbols={circle:function(b,h,a,e){return this.arc(b+a/2,h+e/2,a/2,e/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(b,h,a,e){return[["M",b,h],["L",b+a,h],["L",b+a,h+e],["L",b,h+e],["Z"]]},triangle:function(b,h,a,e){return[["M",
b+a/2,h],["L",b+a,h+e],["L",b,h+e],["Z"]]},"triangle-down":function(b,h,a,e){return[["M",b,h],["L",b+a,h],["L",b+a/2,h+e],["Z"]]},diamond:function(b,h,a,e){return[["M",b+a/2,h],["L",b+a,h+e/2],["L",b+a/2,h+e],["L",b,h+e/2],["Z"]]},arc:function(b,h,a,e,f){var d=[];if(f){var x=f.start||0,k=f.end||0,z=f.r||a;a=f.r||e||a;var l=.001>Math.abs(k-x-2*Math.PI);k-=.001;e=f.innerR;l=m(f.open,l);var u=Math.cos(x),p=Math.sin(x),N=Math.cos(k),A=Math.sin(k);x=m(f.longArc,.001>k-x-Math.PI?0:1);d.push(["M",b+z*u,
h+a*p],["A",z,a,0,x,m(f.clockwise,1),b+z*N,h+a*A]);G(e)&&d.push(l?["M",b+e*N,h+e*A]:["L",b+e*N,h+e*A],["A",e,e,0,x,G(f.clockwise)?1-f.clockwise:0,b+e*u,h+e*p]);l||d.push(["Z"])}return d},callout:function(b,h,a,e,f){var d=Math.min(f&&f.r||0,a,e),k=d+6,x=f&&f.anchorX||0;f=f&&f.anchorY||0;var z=[["M",b+d,h],["L",b+a-d,h],["C",b+a,h,b+a,h,b+a,h+d],["L",b+a,h+e-d],["C",b+a,h+e,b+a,h+e,b+a-d,h+e],["L",b+d,h+e],["C",b,h+e,b,h+e,b,h+e-d],["L",b,h+d],["C",b,h,b,h,b+d,h]];x&&x>a?f>h+k&&f<h+e-k?z.splice(3,1,
["L",b+a,f-6],["L",b+a+6,f],["L",b+a,f+6],["L",b+a,h+e-d]):z.splice(3,1,["L",b+a,e/2],["L",x,f],["L",b+a,e/2],["L",b+a,h+e-d]):x&&0>x?f>h+k&&f<h+e-k?z.splice(7,1,["L",b,f+6],["L",b-6,f],["L",b,f-6],["L",b,h+d]):z.splice(7,1,["L",b,e/2],["L",x,f],["L",b,e/2],["L",b,h+d]):f&&f>e&&x>b+k&&x<b+a-k?z.splice(5,1,["L",x+6,h+e],["L",x,h+e+6],["L",x-6,h+e],["L",b+d,h+e]):f&&0>f&&x>b+k&&x<b+a-k&&z.splice(1,1,["L",x-6,h],["L",x,h-6],["L",x+6,h],["L",a-d,h]);return z}};c.SVGRenderer=e;c.Renderer=c.SVGRenderer;
return c.Renderer});O(q,"parts/Html.js",[q["parts/Globals.js"],q["parts/SVGElement.js"],q["parts/SVGRenderer.js"],q["parts/Utilities.js"]],function(g,c,q,y){var B=y.attr,H=y.createElement,D=y.css,J=y.defined,t=y.extend,G=y.pick,L=y.pInt,v=g.isFirefox,K=g.isMS,n=g.isWebKit,r=g.win;t(c.prototype,{htmlCss:function(c){var r="SPAN"===this.element.tagName&&c&&"width"in c,p=G(r&&c.width,void 0);if(r){delete c.width;this.textWidth=p;var m=!0}c&&"ellipsis"===c.textOverflow&&(c.whiteSpace="nowrap",c.overflow=
"hidden");this.styles=t(this.styles,c);D(this.element,c);m&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var c=this.element;return{x:c.offsetLeft,y:c.offsetTop,width:c.offsetWidth,height:c.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var c=this.renderer,r=this.element,p=this.translateX||0,m=this.translateY||0,d=this.x||0,l=this.y||0,k=this.textAlign||"left",f={left:0,center:.5,right:1}[k],a=this.styles,A=a&&a.whiteSpace;D(r,{marginLeft:p,marginTop:m});!c.styledMode&&
this.shadows&&this.shadows.forEach(function(a){D(a,{marginLeft:p+1,marginTop:m+1})});this.inverted&&[].forEach.call(r.childNodes,function(a){c.invertChild(a,r)});if("SPAN"===r.tagName){a=this.rotation;var u=this.textWidth&&L(this.textWidth),E=[a,k,r.innerHTML,this.textWidth,this.textAlign].join(),n;(n=u!==this.oldTextWidth)&&!(n=u>this.oldTextWidth)&&((n=this.textPxLength)||(D(r,{width:"",whiteSpace:A||"nowrap"}),n=r.offsetWidth),n=n>u);n&&(/[ \-]/.test(r.textContent||r.innerText)||"ellipsis"===r.style.textOverflow)?
(D(r,{width:u+"px",display:"block",whiteSpace:A||"normal"}),this.oldTextWidth=u,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;E!==this.cTT&&(A=c.fontMetrics(r.style.fontSize,r).b,!J(a)||a===(this.oldRotation||0)&&k===this.oldAlign||this.setSpanRotation(a,f,A),this.getSpanCorrection(!J(a)&&this.textPxLength||r.offsetWidth,A,f,a,k));D(r,{left:d+(this.xCorr||0)+"px",top:l+(this.yCorr||0)+"px"});this.cTT=E;this.oldRotation=a;this.oldAlign=k}}else this.alignOnAdd=!0},setSpanRotation:function(c,
r,p){var m={},d=this.renderer.getTransformKey();m[d]=m.transform="rotate("+c+"deg)";m[d+(v?"Origin":"-origin")]=m.transformOrigin=100*r+"% "+p+"px";D(this.element,m)},getSpanCorrection:function(c,r,p){this.xCorr=-c*p;this.yCorr=-r}});t(q.prototype,{getTransformKey:function(){return K&&!/Edge/.test(r.navigator.userAgent)?"-ms-transform":n?"-webkit-transform":v?"MozTransform":r.opera?"-o-transform":""},html:function(r,n,p){var m=this.createElement("span"),d=m.element,l=m.renderer,k=l.isSVG,f=function(a,
f){["opacity","visibility"].forEach(function(d){a[d+"Setter"]=function(k,l,u){var m=a.div?a.div.style:f;c.prototype[d+"Setter"].call(this,k,l,u);m&&(m[l]=k)}});a.addedSetters=!0};m.textSetter=function(a){a!==d.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;d.innerHTML=G(a,"");m.doTransform=!0};k&&f(m,m.element.style);m.xSetter=m.ySetter=m.alignSetter=m.rotationSetter=function(a,f){"align"===f&&(f="textAlign");m[f]=a;m.doTransform=!0};m.afterSetters=function(){this.doTransform&&
(this.htmlUpdateTransform(),this.doTransform=!1)};m.attr({text:r,x:Math.round(n),y:Math.round(p)}).css({position:"absolute"});l.styledMode||m.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});d.style.whiteSpace="nowrap";m.css=m.htmlCss;k&&(m.add=function(a){var k=l.box.parentNode,u=[];if(this.parentGroup=a){var p=a.div;if(!p){for(;a;)u.push(a),a=a.parentGroup;u.reverse().forEach(function(a){function d(f,e){a[e]=f;"translateX"===e?A.left=f+"px":A.top=f+"px";a.doTransform=!0}var l=
B(a.element,"class");p=a.div=a.div||H("div",l?{className:l}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},p||k);var A=p.style;t(a,{classSetter:function(a){return function(e){this.element.setAttribute("class",e);a.className=e}}(p),on:function(){u[0].div&&m.on.apply({element:u[0].div},arguments);return a},translateXSetter:d,translateYSetter:d});a.addedSetters||f(a)})}}else p=k;p.appendChild(d);
m.added=!0;m.alignOnAdd&&m.htmlUpdateTransform();return m});return m}})});O(q,"parts/Tick.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.clamp,y=c.correctFloat,B=c.defined,H=c.destroyObjectProperties,D=c.extend,J=c.fireEvent,t=c.isNumber,G=c.merge,L=c.objectEach,v=c.pick,K=g.deg2rad;c=function(){function c(c,C,n,p,m){this.isNewLabel=this.isNew=!0;this.axis=c;this.pos=C;this.type=n||"";this.parameters=m||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=
this.parameters.options;J(this,"init");n||p||this.addLabel()}c.prototype.addLabel=function(){var c=this,C=c.axis,n=C.options,p=C.chart,m=C.categories,d=C.logarithmic,l=C.names,k=c.pos,f=v(c.options&&c.options.labels,n.labels),a=C.tickPositions,A=k===a[0],u=k===a[a.length-1];l=this.parameters.category||(m?v(m[k],l[k],k):k);var E=c.label;m=(!f.step||1===f.step)&&1===C.tickInterval;a=a.info;var g,w;if(C.dateTime&&a){var M=p.time.resolveDTLFormat(n.dateTimeLabelFormats[!n.grid&&a.higherRanks[k]||a.unitName]);
var F=M.main}c.isFirst=A;c.isLast=u;c.formatCtx={axis:C,chart:p,isFirst:A,isLast:u,dateTimeLabelFormat:F,tickPositionInfo:a,value:d?y(d.lin2log(l)):l,pos:k};n=C.labelFormatter.call(c.formatCtx,this.formatCtx);if(w=M&&M.list)c.shortenLabel=function(){for(g=0;g<w.length;g++)if(E.attr({text:C.labelFormatter.call(D(c.formatCtx,{dateTimeLabelFormat:w[g]}))}),E.getBBox().width<C.getSlotWidth(c)-2*v(f.padding,5))return;E.attr({text:""})};m&&C._addedPlotLB&&C.isXAxis&&c.moveLabel(n,f);B(E)||c.movedLabel?
E&&E.textStr!==n&&!m&&(!E.textWidth||f.style&&f.style.width||E.styles.width||E.css({width:null}),E.attr({text:n}),E.textPxLength=E.getBBox().width):(c.label=E=c.createLabel({x:0,y:0},n,f),c.rotation=0)};c.prototype.createLabel=function(c,C,n){var p=this.axis,m=p.chart;if(c=B(C)&&n.enabled?m.renderer.text(C,c.x,c.y,n.useHTML).add(p.labelGroup):null)m.styledMode||c.css(G(n.style)),c.textPxLength=c.getBBox().width;return c};c.prototype.destroy=function(){H(this,this.axis)};c.prototype.getPosition=function(c,
C,n,p){var m=this.axis,d=m.chart,l=p&&d.oldChartHeight||d.chartHeight;c={x:c?y(m.translate(C+n,null,null,p)+m.transB):m.left+m.offset+(m.opposite?(p&&d.oldChartWidth||d.chartWidth)-m.right-m.left:0),y:c?l-m.bottom+m.offset-(m.opposite?m.height:0):y(l-m.translate(C+n,null,null,p)-m.transB)};c.y=q(c.y,-1E5,1E5);J(this,"afterGetPosition",{pos:c});return c};c.prototype.getLabelPosition=function(c,C,n,p,m,d,l,k){var f=this.axis,a=f.transA,A=f.isLinked&&f.linkedParent?f.linkedParent.reversed:f.reversed,
u=f.staggerLines,r=f.tickRotCorr||{x:0,y:0},g=m.y,w=p||f.reserveSpaceDefault?0:-f.labelOffset*("center"===f.labelAlign?.5:1),M={};B(g)||(g=0===f.side?n.rotation?-8:-n.getBBox().height:2===f.side?r.y+8:Math.cos(n.rotation*K)*(r.y-n.getBBox(!1,0).height/2));c=c+m.x+w+r.x-(d&&p?d*a*(A?-1:1):0);C=C+g-(d&&!p?d*a*(A?1:-1):0);u&&(n=l/(k||1)%u,f.opposite&&(n=u-n-1),C+=f.labelOffset/u*n);M.x=c;M.y=Math.round(C);J(this,"afterGetLabelPosition",{pos:M,tickmarkOffset:d,index:l});return M};c.prototype.getLabelSize=
function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};c.prototype.getMarkPath=function(c,C,n,p,m,d){return d.crispLine([["M",c,C],["L",c+(m?0:-n),C+(m?n:0)]],p)};c.prototype.handleOverflow=function(c){var r=this.axis,n=r.options.labels,p=c.x,m=r.chart.chartWidth,d=r.chart.spacing,l=v(r.labelLeft,Math.min(r.pos,d[3]));d=v(r.labelRight,Math.max(r.isRadial?0:r.pos+r.len,m-d[1]));var k=this.label,f=this.rotation,a={left:0,center:.5,right:1}[r.labelAlign||k.attr("align")],
A=k.getBBox().width,u=r.getSlotWidth(this),E=u,g=1,w,M={};if(f||"justify"!==v(n.overflow,"justify"))0>f&&p-a*A<l?w=Math.round(p/Math.cos(f*K)-l):0<f&&p+a*A>d&&(w=Math.round((m-p)/Math.cos(f*K)));else if(m=p+(1-a)*A,p-a*A<l?E=c.x+E*(1-a)-l:m>d&&(E=d-c.x+E*a,g=-1),E=Math.min(u,E),E<u&&"center"===r.labelAlign&&(c.x+=g*(u-E-a*(u-Math.min(A,E)))),A>E||r.autoRotation&&(k.styles||{}).width)w=E;w&&(this.shortenLabel?this.shortenLabel():(M.width=Math.floor(w)+"px",(n.style||{}).textOverflow||(M.textOverflow=
"ellipsis"),k.css(M)))};c.prototype.moveLabel=function(c,C){var r=this,p=r.label,m=!1,d=r.axis,l=d.reversed,k=d.chart.inverted;p&&p.textStr===c?(r.movedLabel=p,m=!0,delete r.label):L(d.ticks,function(a){m||a.isNew||a===r||!a.label||a.label.textStr!==c||(r.movedLabel=a.label,m=!0,a.labelPos=r.movedLabel.xy,delete a.label)});if(!m&&(r.labelPos||p)){var f=r.labelPos||p.xy;p=k?f.x:l?0:d.width+d.left;d=k?l?d.width+d.left:0:f.y;r.movedLabel=r.createLabel({x:p,y:d},c,C);r.movedLabel&&r.movedLabel.attr({opacity:0})}};
c.prototype.render=function(c,C,n){var p=this.axis,m=p.horiz,d=this.pos,l=v(this.tickmarkOffset,p.tickmarkOffset);d=this.getPosition(m,d,l,C);l=d.x;var k=d.y;p=m&&l===p.pos+p.len||!m&&k===p.pos?-1:1;n=v(n,1);this.isActive=!0;this.renderGridLine(C,n,p);this.renderMark(d,n,p);this.renderLabel(d,C,n,c);this.isNew=!1;J(this,"afterRender")};c.prototype.renderGridLine=function(c,C,n){var p=this.axis,m=p.options,d=this.gridLine,l={},k=this.pos,f=this.type,a=v(this.tickmarkOffset,p.tickmarkOffset),A=p.chart.renderer,
u=f?f+"Grid":"grid",r=m[u+"LineWidth"],g=m[u+"LineColor"];m=m[u+"LineDashStyle"];d||(p.chart.styledMode||(l.stroke=g,l["stroke-width"]=r,m&&(l.dashstyle=m)),f||(l.zIndex=1),c&&(C=0),this.gridLine=d=A.path().attr(l).addClass("highcharts-"+(f?f+"-":"")+"grid-line").add(p.gridGroup));if(d&&(n=p.getPlotLinePath({value:k+a,lineWidth:d.strokeWidth()*n,force:"pass",old:c})))d[c||this.isNew?"attr":"animate"]({d:n,opacity:C})};c.prototype.renderMark=function(c,n,g){var p=this.axis,m=p.options,d=p.chart.renderer,
l=this.type,k=l?l+"Tick":"tick",f=p.tickSize(k),a=this.mark,A=!a,u=c.x;c=c.y;var r=v(m[k+"Width"],!l&&p.isXAxis?1:0);m=m[k+"Color"];f&&(p.opposite&&(f[0]=-f[0]),A&&(this.mark=a=d.path().addClass("highcharts-"+(l?l+"-":"")+"tick").add(p.axisGroup),p.chart.styledMode||a.attr({stroke:m,"stroke-width":r})),a[A?"attr":"animate"]({d:this.getMarkPath(u,c,f[0],a.strokeWidth()*g,p.horiz,d),opacity:n}))};c.prototype.renderLabel=function(c,n,g,p){var m=this.axis,d=m.horiz,l=m.options,k=this.label,f=l.labels,
a=f.step;m=v(this.tickmarkOffset,m.tickmarkOffset);var A=!0,u=c.x;c=c.y;k&&t(u)&&(k.xy=c=this.getLabelPosition(u,c,k,d,f,m,p,a),this.isFirst&&!this.isLast&&!v(l.showFirstLabel,1)||this.isLast&&!this.isFirst&&!v(l.showLastLabel,1)?A=!1:!d||f.step||f.rotation||n||0===g||this.handleOverflow(c),a&&p%a&&(A=!1),A&&t(c.y)?(c.opacity=g,k[this.isNewLabel?"attr":"animate"](c),this.isNewLabel=!1):(k.attr("y",-9999),this.isNewLabel=!0))};c.prototype.replaceMovedLabel=function(){var c=this.label,n=this.axis,g=
n.reversed,p=this.axis.chart.inverted;if(c&&!this.isNew){var m=p?c.xy.x:g?n.left:n.width+n.left;g=p?g?n.width+n.top:n.top:c.xy.y;c.animate({x:m,y:g,opacity:0},void 0,c.destroy);delete this.label}n.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return c}();g.Tick=c;return g.Tick});O(q,"parts/Time.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.defined,y=c.error,B=c.extend,H=c.isObject,D=c.merge,J=c.objectEach,t=c.pad,G=c.pick,L=c.splat,v=c.timeUnits,K=g.win;
c=function(){function c(c){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=K.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(c)}c.prototype.get=function(c,n){if(this.variableTimezone||this.timezoneOffset){var r=n.getTime(),p=r-this.getTimezoneOffset(n);n.setTime(p);c=n["getUTC"+c]();n.setTime(r);return c}return this.useUTC?n["getUTC"+c]():n["get"+c]()};c.prototype.set=function(c,n,g){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===c||"Seconds"===
c||"Minutes"===c)return n["setUTC"+c](g);var p=this.getTimezoneOffset(n);p=n.getTime()-p;n.setTime(p);n["setUTC"+c](g);c=this.getTimezoneOffset(n);p=n.getTime()+c;return n.setTime(p)}return this.useUTC?n["setUTC"+c](g):n["set"+c](g)};c.prototype.update=function(c){var n=G(c&&c.useUTC,!0);this.options=c=D(!0,this.options||{},c);this.Date=c.Date||K.Date||Date;this.timezoneOffset=(this.useUTC=n)&&c.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=!(n&&!c.getTimezoneOffset&&
!c.timezone)};c.prototype.makeTime=function(c,n,t,p,m,d){if(this.useUTC){var l=this.Date.UTC.apply(0,arguments);var k=this.getTimezoneOffset(l);l+=k;var f=this.getTimezoneOffset(l);k!==f?l+=f-k:k-36E5!==this.getTimezoneOffset(l-36E5)||g.isSafari||(l-=36E5)}else l=(new this.Date(c,n,G(t,1),G(p,0),G(m,0),G(d,0))).getTime();return l};c.prototype.timezoneOffsetFunction=function(){var c=this,n=this.options,g=K.moment;if(!this.useUTC)return function(c){return 6E4*(new Date(c.toString())).getTimezoneOffset()};
if(n.timezone){if(g)return function(c){return 6E4*-g.tz(c,n.timezone).utcOffset()};y(25)}return this.useUTC&&n.getTimezoneOffset?function(c){return 6E4*n.getTimezoneOffset(c.valueOf())}:function(){return 6E4*(c.timezoneOffset||0)}};c.prototype.dateFormat=function(c,n,v){var p;if(!q(n)||isNaN(n))return(null===(p=g.defaultOptions.lang)||void 0===p?void 0:p.invalidDate)||"";c=G(c,"%Y-%m-%d %H:%M:%S");var m=this;p=new this.Date(n);var d=this.get("Hours",p),l=this.get("Day",p),k=this.get("Date",p),f=this.get("Month",
p),a=this.get("FullYear",p),A=g.defaultOptions.lang,u=null===A||void 0===A?void 0:A.weekdays,E=null===A||void 0===A?void 0:A.shortWeekdays;p=B({a:E?E[l]:u[l].substr(0,3),A:u[l],d:t(k),e:t(k,2," "),w:l,b:A.shortMonths[f],B:A.months[f],m:t(f+1),o:f+1,y:a.toString().substr(2,2),Y:a,H:t(d),k:d,I:t(d%12||12),l:d%12||12,M:t(this.get("Minutes",p)),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:t(p.getSeconds()),L:t(Math.floor(n%1E3),3)},g.dateFormats);J(p,function(a,f){for(;-1!==c.indexOf("%"+f);)c=c.replace("%"+f,
"function"===typeof a?a.call(m,n):a)});return v?c.substr(0,1).toUpperCase()+c.substr(1):c};c.prototype.resolveDTLFormat=function(c){return H(c,!0)?c:(c=L(c),{main:c[0],from:c[1],to:c[2]})};c.prototype.getTimeTicks=function(c,n,g,p){var m=this,d=[],l={};var k=new m.Date(n);var f=c.unitRange,a=c.count||1,A;p=G(p,1);if(q(n)){m.set("Milliseconds",k,f>=v.second?0:a*Math.floor(m.get("Milliseconds",k)/a));f>=v.second&&m.set("Seconds",k,f>=v.minute?0:a*Math.floor(m.get("Seconds",k)/a));f>=v.minute&&m.set("Minutes",
k,f>=v.hour?0:a*Math.floor(m.get("Minutes",k)/a));f>=v.hour&&m.set("Hours",k,f>=v.day?0:a*Math.floor(m.get("Hours",k)/a));f>=v.day&&m.set("Date",k,f>=v.month?1:Math.max(1,a*Math.floor(m.get("Date",k)/a)));if(f>=v.month){m.set("Month",k,f>=v.year?0:a*Math.floor(m.get("Month",k)/a));var u=m.get("FullYear",k)}f>=v.year&&m.set("FullYear",k,u-u%a);f===v.week&&(u=m.get("Day",k),m.set("Date",k,m.get("Date",k)-u+p+(u<p?-7:0)));u=m.get("FullYear",k);p=m.get("Month",k);var E=m.get("Date",k),r=m.get("Hours",
k);n=k.getTime();m.variableTimezone&&(A=g-n>4*v.month||m.getTimezoneOffset(n)!==m.getTimezoneOffset(g));n=k.getTime();for(k=1;n<g;)d.push(n),n=f===v.year?m.makeTime(u+k*a,0):f===v.month?m.makeTime(u,p+k*a):!A||f!==v.day&&f!==v.week?A&&f===v.hour&&1<a?m.makeTime(u,p,E,r+k*a):n+f*a:m.makeTime(u,p,E+k*a*(f===v.day?1:7)),k++;d.push(n);f<=v.hour&&1E4>d.length&&d.forEach(function(a){0===a%18E5&&"000000000"===m.dateFormat("%H%M%S%L",a)&&(l[a]="day")})}d.info=B(c,{higherRanks:l,totalRange:f*a});return d};
return c}();g.Time=c;return g.Time});O(q,"parts/Options.js",[q["parts/Globals.js"],q["parts/Time.js"],q["parts/Color.js"],q["parts/Utilities.js"]],function(g,c,q,y){q=q.parse;y=y.merge;g.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",
borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",
backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:g.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:g.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
backgroundColor:q("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};"";g.time=new c(y(g.defaultOptions.global,g.defaultOptions.time));g.dateFormat=function(c,q,y){return g.time.dateFormat(c,q,y)};return{dateFormat:g.dateFormat,
defaultOptions:g.defaultOptions,time:g.time}});O(q,"parts/Axis.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Tick.js"],q["parts/Utilities.js"],q["parts/Options.js"]],function(g,c,q,y,B){var H=y.addEvent,D=y.animObject,J=y.arrayMax,t=y.arrayMin,G=y.clamp,L=y.correctFloat,v=y.defined,K=y.destroyObjectProperties,n=y.error,r=y.extend,C=y.fireEvent,I=y.format,p=y.getMagnitude,m=y.isArray,d=y.isFunction,l=y.isNumber,k=y.isString,f=y.merge,a=y.normalizeTickInterval,A=y.objectEach,u=y.pick,E=y.relativeLength,
P=y.removeEvent,w=y.splat,M=y.syncTimeout,F=B.defaultOptions,Q=c.deg2rad;y=function(){function e(b,a){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=this.overlap=
this.options=this.oldMin=this.oldMax=this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.coll=this.closestPointRange=this.chart=this.categories=this.bottom=this.alternateBands=void 0;this.init(b,a)}e.prototype.init=function(b,a){var h=a.isX,e=this;e.chart=b;e.horiz=b.inverted&&!e.isZAxis?!h:h;e.isXAxis=h;e.coll=
e.coll||(h?"xAxis":"yAxis");C(this,"init",{userOptions:a});e.opposite=a.opposite;e.side=a.side||(e.horiz?e.opposite?0:2:e.opposite?1:3);e.setOptions(a);var f=this.options,k=f.type;e.labelFormatter=f.labels.formatter||e.defaultLabelFormatter;e.userOptions=a;e.minPixelPadding=0;e.reversed=f.reversed;e.visible=!1!==f.visible;e.zoomEnabled=!1!==f.zoomEnabled;e.hasNames="category"===k||!0===f.categories;e.categories=f.categories||e.hasNames;e.names||(e.names=[],e.names.keys={});e.plotLinesAndBandsGroups=
{};e.positiveValuesOnly=!(!e.logarithmic||f.allowNegativeLog);e.isLinked=v(f.linkedTo);e.ticks={};e.labelEdge=[];e.minorTicks={};e.plotLinesAndBands=[];e.alternateBands={};e.len=0;e.minRange=e.userMinRange=f.minRange||f.maxZoom;e.range=f.range;e.offset=f.offset||0;e.max=null;e.min=null;e.crosshair=u(f.crosshair,w(b.options.tooltip.crosshairs)[h?0:1],!1);a=e.options.events;-1===b.axes.indexOf(e)&&(h?b.axes.splice(b.xAxis.length,0,e):b.axes.push(e),b[e.coll].push(e));e.series=e.series||[];b.inverted&&
!e.isZAxis&&h&&"undefined"===typeof e.reversed&&(e.reversed=!0);e.labelRotation=e.options.labels.rotation;A(a,function(b,a){d(b)&&H(e,a,b)});C(this,"afterInit")};e.prototype.setOptions=function(b){this.options=f(e.defaultOptions,"yAxis"===this.coll&&e.defaultYAxisOptions,[e.defaultTopAxisOptions,e.defaultRightAxisOptions,e.defaultBottomAxisOptions,e.defaultLeftAxisOptions][this.side],f(F[this.coll],b));C(this,"afterSetOptions",{userOptions:b})};e.prototype.defaultLabelFormatter=function(){var b=this.axis,
a=l(this.value)?this.value:NaN,e=b.chart.time,f=b.categories,d=this.dateTimeLabelFormat,k=F.lang,c=k.numericSymbols;k=k.numericSymbolMagnitude||1E3;var u=c&&c.length,m=b.options.labels.format;b=b.logarithmic?Math.abs(a):b.tickInterval;var p=this.chart,A=p.numberFormatter;if(m)var w=I(m,this,p);else if(f)w=""+this.value;else if(d)w=e.dateFormat(d,a);else if(u&&1E3<=b)for(;u--&&"undefined"===typeof w;)e=Math.pow(k,u+1),b>=e&&0===10*a%e&&null!==c[u]&&0!==a&&(w=A(a/e,-1)+c[u]);"undefined"===typeof w&&
(w=1E4<=Math.abs(a)?A(a,-1):A(a,-1,void 0,""));return w};e.prototype.getSeriesExtremes=function(){var b=this,a=b.chart,e;C(this,"getSeriesExtremes",null,function(){b.hasVisibleSeries=!1;b.dataMin=b.dataMax=b.threshold=null;b.softThreshold=!b.isXAxis;b.stacking&&b.stacking.buildStacks();b.series.forEach(function(h){if(h.visible||!a.options.chart.ignoreHiddenSeries){var f=h.options,d=f.threshold;b.hasVisibleSeries=!0;b.positiveValuesOnly&&0>=d&&(d=null);if(b.isXAxis){if(f=h.xData,f.length){e=h.getXExtremes(f);
var k=e.min;var x=e.max;l(k)||k instanceof Date||(f=f.filter(l),e=h.getXExtremes(f),k=e.min,x=e.max);f.length&&(b.dataMin=Math.min(u(b.dataMin,k),k),b.dataMax=Math.max(u(b.dataMax,x),x))}}else if(h=h.applyExtremes(),l(h.dataMin)&&(k=h.dataMin,b.dataMin=Math.min(u(b.dataMin,k),k)),l(h.dataMax)&&(x=h.dataMax,b.dataMax=Math.max(u(b.dataMax,x),x)),v(d)&&(b.threshold=d),!f.softThreshold||b.positiveValuesOnly)b.softThreshold=!1}})});C(this,"afterGetSeriesExtremes")};e.prototype.translate=function(b,a,e,
f,d,k){var h=this.linkedParent||this,x=1,z=0,c=f?h.oldTransA:h.transA;f=f?h.oldMin:h.min;var u=h.minPixelPadding;d=(h.isOrdinal||h.brokenAxis&&h.brokenAxis.hasBreaks||h.logarithmic&&d)&&h.lin2val;c||(c=h.transA);e&&(x*=-1,z=h.len);h.reversed&&(x*=-1,z-=x*(h.sector||h.len));a?(b=(b*x+z-u)/c+f,d&&(b=h.lin2val(b))):(d&&(b=h.val2lin(b)),b=l(f)?x*(b-f)*c+z+x*u+(l(k)?c*k:0):void 0);return b};e.prototype.toPixels=function(b,a){return this.translate(b,!1,!this.horiz,null,!0)+(a?0:this.pos)};e.prototype.toValue=
function(b,a){return this.translate(b-(a?0:this.pos),!0,!this.horiz,null,!0)};e.prototype.getPlotLinePath=function(b){function a(b,a,h){if("pass"!==w&&b<a||b>h)w?b=G(b,a,h):t=!0;return b}var e=this,f=e.chart,d=e.left,k=e.top,c=b.old,m=b.value,p=b.translatedValue,A=b.lineWidth,w=b.force,n,g,E,r,M=c&&f.oldChartHeight||f.chartHeight,F=c&&f.oldChartWidth||f.chartWidth,t,v=e.transB;b={value:m,lineWidth:A,old:c,force:w,acrossPanes:b.acrossPanes,translatedValue:p};C(this,"getPlotLinePath",b,function(b){p=
u(p,e.translate(m,null,null,c));p=G(p,-1E5,1E5);n=E=Math.round(p+v);g=r=Math.round(M-p-v);l(p)?e.horiz?(g=k,r=M-e.bottom,n=E=a(n,d,d+e.width)):(n=d,E=F-e.right,g=r=a(g,k,k+e.height)):(t=!0,w=!1);b.path=t&&!w?null:f.renderer.crispLine([["M",n,g],["L",E,r]],A||1)});return b.path};e.prototype.getLinearTickPositions=function(b,a,e){var h=L(Math.floor(a/b)*b);e=L(Math.ceil(e/b)*b);var f=[],d;L(h+b)===h&&(d=20);if(this.single)return[a];for(a=h;a<=e;){f.push(a);a=L(a+b,d);if(a===k)break;var k=a}return f};
e.prototype.getMinorTickInterval=function(){var b=this.options;return!0===b.minorTicks?u(b.minorTickInterval,"auto"):!1===b.minorTicks?null:b.minorTickInterval};e.prototype.getMinorTickPositions=function(){var b=this.options,a=this.tickPositions,e=this.minorTickInterval,f=[],d=this.pointRangePadding||0,k=this.min-d;d=this.max+d;var c=d-k;if(c&&c/e<this.len/3){var l=this.logarithmic;if(l)this.paddedTicks.forEach(function(b,a,h){a&&f.push.apply(f,l.getLogTickPositions(e,h[a-1],h[a],!0))});else if(this.dateTime&&
"auto"===this.getMinorTickInterval())f=f.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(e),k,d,b.startOfWeek));else for(b=k+(a[0]-k)%e;b<=d&&b!==f[0];b+=e)f.push(b)}0!==f.length&&this.trimTicks(f);return f};e.prototype.adjustForMinRange=function(){var b=this.options,a=this.min,e=this.max,f=this.logarithmic,d,k,c,l,m;this.isXAxis&&"undefined"===typeof this.minRange&&!f&&(v(b.min)||v(b.max)?this.minRange=null:(this.series.forEach(function(b){l=b.xData;for(k=m=b.xIncrement?1:l.length-
1;0<k;k--)if(c=l[k]-l[k-1],"undefined"===typeof d||c<d)d=c}),this.minRange=Math.min(5*d,this.dataMax-this.dataMin)));if(e-a<this.minRange){var p=this.dataMax-this.dataMin>=this.minRange;var A=this.minRange;var w=(A-e+a)/2;w=[a-w,u(b.min,a-w)];p&&(w[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin);a=J(w);e=[a+A,u(b.max,a+A)];p&&(e[2]=f?f.log2lin(this.dataMax):this.dataMax);e=t(e);e-a<A&&(w[0]=e-A,w[1]=u(b.min,e-A),a=J(w))}this.min=a;this.max=e};e.prototype.getClosest=function(){var b;
this.categories?b=1:this.series.forEach(function(a){var h=a.closestPointRange,e=a.visible||!a.chart.options.chart.ignoreHiddenSeries;!a.noSharedTooltip&&v(h)&&e&&(b=v(b)?Math.min(b,h):h)});return b};e.prototype.nameToX=function(b){var a=m(this.categories),e=a?this.categories:this.names,f=b.options.x;b.series.requireSorting=!1;v(f)||(f=!1===this.options.uniqueNames?b.series.autoIncrement():a?e.indexOf(b.name):u(e.keys[b.name],-1));if(-1===f){if(!a)var d=e.length}else d=f;"undefined"!==typeof d&&(this.names[d]=
b.name,this.names.keys[b.name]=d);return d};e.prototype.updateNames=function(){var b=this,a=this.names;0<a.length&&(Object.keys(a.keys).forEach(function(b){delete a.keys[b]}),a.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)b.max=Math.max(b.max,a.xData.length-1),a.processData(),a.generatePoints();a.data.forEach(function(h,e){if(h&&h.options&&"undefined"!==typeof h.name){var f=b.nameToX(h);"undefined"!==typeof f&&f!==h.x&&
(h.x=f,a.xData[e]=f)}})}))};e.prototype.setAxisTranslation=function(b){var a=this,e=a.max-a.min,f=a.axisPointRange||0,d=0,c=0,l=a.linkedParent,m=!!a.categories,p=a.transA,A=a.isXAxis;if(A||m||f){var w=a.getClosest();l?(d=l.minPointOffset,c=l.pointRangePadding):a.series.forEach(function(b){var h=m?1:A?u(b.options.pointRange,w,0):a.axisPointRange||0,e=b.options.pointPlacement;f=Math.max(f,h);if(!a.single||m)b=b.is("xrange")?!A:A,d=Math.max(d,b&&k(e)?0:h/2),c=Math.max(c,b&&"on"===e?0:h)});l=a.ordinal&&
a.ordinal.slope&&w?a.ordinal.slope/w:1;a.minPointOffset=d*=l;a.pointRangePadding=c*=l;a.pointRange=Math.min(f,a.single&&m?1:e);A&&(a.closestPointRange=w)}b&&(a.oldTransA=p);a.translationSlope=a.transA=p=a.staticScale||a.len/(e+c||1);a.transB=a.horiz?a.left:a.bottom;a.minPixelPadding=p*d;C(this,"afterSetAxisTranslation")};e.prototype.minFromRange=function(){return this.max-this.range};e.prototype.setTickInterval=function(b){var h=this,e=h.chart,f=h.logarithmic,d=h.options,k=h.isXAxis,c=h.isLinked,
m=d.maxPadding,A=d.minPadding,w=d.tickInterval,g=d.tickPixelInterval,E=h.categories,r=l(h.threshold)?h.threshold:null,S=h.softThreshold;h.dateTime||E||c||this.getTickAmount();var M=u(h.userMin,d.min);var F=u(h.userMax,d.max);if(c){h.linkedParent=e[h.coll][d.linkedTo];var t=h.linkedParent.getExtremes();h.min=u(t.min,t.dataMin);h.max=u(t.max,t.dataMax);d.type!==h.linkedParent.options.type&&n(11,1,e)}else{if(!S&&v(r))if(h.dataMin>=r)t=r,A=0;else if(h.dataMax<=r){var P=r;m=0}h.min=u(M,t,h.dataMin);h.max=
u(F,P,h.dataMax)}f&&(h.positiveValuesOnly&&!b&&0>=Math.min(h.min,u(h.dataMin,h.min))&&n(10,1,e),h.min=L(f.log2lin(h.min),16),h.max=L(f.log2lin(h.max),16));h.range&&v(h.max)&&(h.userMin=h.min=M=Math.max(h.dataMin,h.minFromRange()),h.userMax=F=h.max,h.range=null);C(h,"foundExtremes");h.beforePadding&&h.beforePadding();h.adjustForMinRange();!(E||h.axisPointRange||h.stacking&&h.stacking.usePercentage||c)&&v(h.min)&&v(h.max)&&(e=h.max-h.min)&&(!v(M)&&A&&(h.min-=e*A),!v(F)&&m&&(h.max+=e*m));l(h.userMin)||
(l(d.softMin)&&d.softMin<h.min&&(h.min=M=d.softMin),l(d.floor)&&(h.min=Math.max(h.min,d.floor)));l(h.userMax)||(l(d.softMax)&&d.softMax>h.max&&(h.max=F=d.softMax),l(d.ceiling)&&(h.max=Math.min(h.max,d.ceiling)));S&&v(h.dataMin)&&(r=r||0,!v(M)&&h.min<r&&h.dataMin>=r?h.min=h.options.minRange?Math.min(r,h.max-h.minRange):r:!v(F)&&h.max>r&&h.dataMax<=r&&(h.max=h.options.minRange?Math.max(r,h.min+h.minRange):r));h.tickInterval=h.min===h.max||"undefined"===typeof h.min||"undefined"===typeof h.max?1:c&&
!w&&g===h.linkedParent.options.tickPixelInterval?w=h.linkedParent.tickInterval:u(w,this.tickAmount?(h.max-h.min)/Math.max(this.tickAmount-1,1):void 0,E?1:(h.max-h.min)*g/Math.max(h.len,g));k&&!b&&h.series.forEach(function(b){b.processData(h.min!==h.oldMin||h.max!==h.oldMax)});h.setAxisTranslation(!0);C(this,"initialAxisTranslation");h.pointRange&&!w&&(h.tickInterval=Math.max(h.pointRange,h.tickInterval));b=u(d.minTickInterval,h.dateTime&&!h.series.some(function(b){return b.noSharedTooltip})?h.closestPointRange:
0);!w&&h.tickInterval<b&&(h.tickInterval=b);h.dateTime||h.logarithmic||w||(h.tickInterval=a(h.tickInterval,void 0,p(h.tickInterval),u(d.allowDecimals,.5>h.tickInterval||void 0!==this.tickAmount),!!this.tickAmount));this.tickAmount||(h.tickInterval=h.unsquish());this.setTickPositions()};e.prototype.setTickPositions=function(){var b=this.options,a=b.tickPositions;var e=this.getMinorTickInterval();var f=b.tickPositioner,d=this.hasVerticalPanning(),k="colorAxis"===this.coll,c=(k||!d)&&b.startOnTick;d=
(k||!d)&&b.endOnTick;this.tickmarkOffset=this.categories&&"between"===b.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===e&&this.tickInterval?this.tickInterval/5:e;this.single=this.min===this.max&&v(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==b.allowDecimals);this.tickPositions=e=a&&a.slice();!e&&(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))?e=this.dateTime?this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,
b.units),this.min,this.max,b.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0):this.logarithmic?this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max):(e=[this.min,this.max],n(19,!1,this.chart)),e.length>this.len&&(e=[e[0],e.pop()],e[0]===e[1]&&(e.length=1)),this.tickPositions=e,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=e=f);this.paddedTicks=e.slice(0);this.trimTicks(e,
c,d);this.isLinked||(this.single&&2>e.length&&!this.categories&&!this.series.some(function(b){return b.is("heatmap")&&"between"===b.options.pointPlacement})&&(this.min-=.5,this.max+=.5),a||f||this.adjustTickAmount());C(this,"afterSetTickPositions")};e.prototype.trimTicks=function(b,a,e){var h=b[0],f=b[b.length-1],d=!this.isOrdinal&&this.minPointOffset||0;C(this,"trimTicks");if(!this.isLinked){if(a&&-Infinity!==h)this.min=h;else for(;this.min-d>b[0];)b.shift();if(e)this.max=f;else for(;this.max+d<
b[b.length-1];)b.pop();0===b.length&&v(h)&&!this.options.tickPositions&&b.push((f+h)/2)}};e.prototype.alignToOthers=function(){var b={},a,e=this.options;!1===this.chart.options.chart.alignTicks||!1===e.alignTicks||!1===e.startOnTick||!1===e.endOnTick||this.logarithmic||this.chart[this.coll].forEach(function(h){var e=h.options;e=[h.horiz?e.left:e.top,e.width,e.height,e.pane].join();h.series.length&&(b[e]?a=!0:b[e]=1)});return a};e.prototype.getTickAmount=function(){var b=this.options,a=b.tickAmount,
e=b.tickPixelInterval;!v(b.tickInterval)&&!a&&this.len<e&&!this.isRadial&&!this.logarithmic&&b.startOnTick&&b.endOnTick&&(a=2);!a&&this.alignToOthers()&&(a=Math.ceil(this.len/e)+1);4>a&&(this.finalTickAmt=a,a=5);this.tickAmount=a};e.prototype.adjustTickAmount=function(){var b=this.options,a=this.tickInterval,e=this.tickPositions,f=this.tickAmount,d=this.finalTickAmt,k=e&&e.length,c=u(this.threshold,this.softThreshold?0:null),l;if(this.hasData()){if(k<f){for(l=this.min;e.length<f;)e.length%2||l===
c?e.push(L(e[e.length-1]+a)):e.unshift(L(e[0]-a));this.transA*=(k-1)/(f-1);this.min=b.startOnTick?e[0]:Math.min(this.min,e[0]);this.max=b.endOnTick?e[e.length-1]:Math.max(this.max,e[e.length-1])}else k>f&&(this.tickInterval*=2,this.setTickPositions());if(v(d)){for(a=b=e.length;a--;)(3===d&&1===a%2||2>=d&&0<a&&a<b-1)&&e.splice(a,1);this.finalTickAmt=void 0}}};e.prototype.setScale=function(){var b,a=!1,e=!1;this.series.forEach(function(b){var h;a=a||b.isDirtyData||b.isDirty;e=e||(null===(h=b.xAxis)||
void 0===h?void 0:h.isDirty)||!1});this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();(b=this.len!==this.oldAxisLength)||a||e||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.stacking&&this.stacking.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||
this.max!==this.oldMax)):this.stacking&&this.stacking.cleanStacks();a&&this.panningState&&(this.panningState.isDirty=!0);C(this,"afterSetScale")};e.prototype.setExtremes=function(b,a,e,f,d){var h=this,k=h.chart;e=u(e,!0);h.series.forEach(function(b){delete b.kdTree});d=r(d,{min:b,max:a});C(h,"setExtremes",d,function(){h.userMin=b;h.userMax=a;h.eventArgs=d;e&&k.redraw(f)})};e.prototype.zoom=function(b,a){var e=this,h=this.dataMin,f=this.dataMax,d=this.options,k=Math.min(h,u(d.min,h)),c=Math.max(f,
u(d.max,f));b={newMin:b,newMax:a};C(this,"zoom",b,function(b){var a=b.newMin,d=b.newMax;if(a!==e.min||d!==e.max)e.allowZoomOutside||(v(h)&&(a<k&&(a=k),a>c&&(a=c)),v(f)&&(d<k&&(d=k),d>c&&(d=c))),e.displayBtn="undefined"!==typeof a||"undefined"!==typeof d,e.setExtremes(a,d,!1,void 0,{trigger:"zoom"});b.zoomed=!0});return b.zoomed};e.prototype.setAxisSize=function(){var b=this.chart,a=this.options,e=a.offsets||[0,0,0,0],f=this.horiz,d=this.width=Math.round(E(u(a.width,b.plotWidth-e[3]+e[1]),b.plotWidth)),
k=this.height=Math.round(E(u(a.height,b.plotHeight-e[0]+e[2]),b.plotHeight)),c=this.top=Math.round(E(u(a.top,b.plotTop+e[0]),b.plotHeight,b.plotTop));a=this.left=Math.round(E(u(a.left,b.plotLeft+e[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-k-c;this.right=b.chartWidth-d-a;this.len=Math.max(f?d:k,0);this.pos=f?a:c};e.prototype.getExtremes=function(){var b=this.logarithmic;return{min:b?L(b.lin2log(this.min)):this.min,max:b?L(b.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,
userMin:this.userMin,userMax:this.userMax}};e.prototype.getThreshold=function(b){var a=this.logarithmic,e=a?a.lin2log(this.min):this.min;a=a?a.lin2log(this.max):this.max;null===b||-Infinity===b?b=e:Infinity===b?b=a:e>b?b=e:a<b&&(b=a);return this.translate(b,0,1,0,1)};e.prototype.autoLabelAlign=function(b){var a=(u(b,0)-90*this.side+720)%360;b={align:"center"};C(this,"autoLabelAlign",b,function(b){15<a&&165>a?b.align="right":195<a&&345>a&&(b.align="left")});return b.align};e.prototype.tickSize=function(b){var a=
this.options,e=a["tick"===b?"tickLength":"minorTickLength"],f=u(a["tick"===b?"tickWidth":"minorTickWidth"],"tick"===b&&this.isXAxis&&!this.categories?1:0);if(f&&e){"inside"===a[b+"Position"]&&(e=-e);var d=[e,f]}b={tickSize:d};C(this,"afterTickSize",b);return b.tickSize};e.prototype.labelMetrics=function(){var b=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[b]&&this.ticks[b].label)};e.prototype.unsquish=
function(){var b=this.options.labels,a=this.horiz,e=this.tickInterval,f=e,d=this.len/(((this.categories?1:0)+this.max-this.min)/e),k,c=b.rotation,l=this.labelMetrics(),m,p=Number.MAX_VALUE,A,w=this.max-this.min,n=function(b){var a=b/(d||1);a=1<a?Math.ceil(a):1;a*e>w&&Infinity!==b&&Infinity!==d&&w&&(a=Math.ceil(w/e));return L(a*e)};a?(A=!b.staggerLines&&!b.step&&(v(c)?[c]:d<u(b.autoRotationLimit,80)&&b.autoRotation))&&A.forEach(function(b){if(b===c||b&&-90<=b&&90>=b){m=n(Math.abs(l.h/Math.sin(Q*b)));
var a=m+Math.abs(b/360);a<p&&(p=a,k=b,f=m)}}):b.step||(f=n(l.h));this.autoRotation=A;this.labelRotation=u(k,c);return f};e.prototype.getSlotWidth=function(b){var a,e=this.chart,f=this.horiz,d=this.options.labels,k=Math.max(this.tickPositions.length-(this.categories?0:1),1),c=e.margin[3];if(b&&l(b.slotWidth))return b.slotWidth;if(f&&d&&2>(d.step||0))return d.rotation?0:(this.staggerLines||1)*this.len/k;if(!f){b=null===(a=null===d||void 0===d?void 0:d.style)||void 0===a?void 0:a.width;if(void 0!==b)return parseInt(b,
10);if(c)return c-e.spacing[3]}return.33*e.chartWidth};e.prototype.renderUnsquish=function(){var b=this.chart,a=b.renderer,e=this.tickPositions,f=this.ticks,d=this.options.labels,c=d&&d.style||{},l=this.horiz,u=this.getSlotWidth(),m=Math.max(1,Math.round(u-2*(d.padding||5))),p={},A=this.labelMetrics(),w=d.style&&d.style.textOverflow,n=0;k(d.rotation)||(p.rotation=d.rotation||0);e.forEach(function(b){b=f[b];b.movedLabel&&b.replaceMovedLabel();b&&b.label&&b.label.textPxLength>n&&(n=b.label.textPxLength)});
this.maxLabelLength=n;if(this.autoRotation)n>m&&n>A.h?p.rotation=this.labelRotation:this.labelRotation=0;else if(u){var g=m;if(!w){var E="clip";for(m=e.length;!l&&m--;){var r=e[m];if(r=f[r].label)r.styles&&"ellipsis"===r.styles.textOverflow?r.css({textOverflow:"clip"}):r.textPxLength>u&&r.css({width:u+"px"}),r.getBBox().height>this.len/e.length-(A.h-A.f)&&(r.specificTextOverflow="ellipsis")}}}p.rotation&&(g=n>.5*b.chartHeight?.33*b.chartHeight:n,w||(E="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))p.align=
this.labelAlign;e.forEach(function(b){var a=(b=f[b])&&b.label,e=c.width,h={};a&&(a.attr(p),b.shortenLabel?b.shortenLabel():g&&!e&&"nowrap"!==c.whiteSpace&&(g<a.textPxLength||"SPAN"===a.element.tagName)?(h.width=g+"px",w||(h.textOverflow=a.specificTextOverflow||E),a.css(h)):a.styles&&a.styles.width&&!h.width&&!e&&a.css({width:null}),delete a.specificTextOverflow,b.rotation=p.rotation)},this);this.tickRotCorr=a.rotCorr(A.b,this.labelRotation||0,0!==this.side)};e.prototype.hasData=function(){return this.series.some(function(b){return b.hasData()})||
this.options.showEmpty&&v(this.min)&&v(this.max)};e.prototype.addTitle=function(b){var a=this.chart.renderer,e=this.horiz,d=this.opposite,k=this.options.title,c,l=this.chart.styledMode;this.axisTitle||((c=k.textAlign)||(c=(e?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[k.align]),this.axisTitle=a.text(k.text,0,0,k.useHTML).attr({zIndex:7,rotation:k.rotation||0,align:c}).addClass("highcharts-axis-title"),l||this.axisTitle.css(f(k.style)),this.axisTitle.add(this.axisGroup),
this.axisTitle.isNew=!0);l||k.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"});this.axisTitle[b?"show":"hide"](b)};e.prototype.generateTick=function(b){var a=this.ticks;a[b]?a[b].addLabel():a[b]=new q(this,b)};e.prototype.getOffset=function(){var b=this,a=b.chart,e=a.renderer,f=b.options,d=b.tickPositions,k=b.ticks,c=b.horiz,l=b.side,m=a.inverted&&!b.isZAxis?[1,0,3,2][l]:l,p,w=0,n=0,g=f.title,E=f.labels,r=0,M=a.axisOffset;a=a.clipOffset;var F=[-1,1,1,-1][l],t=f.className,P=b.axisParent;
var I=b.hasData();b.showAxis=p=I||u(f.showEmpty,!0);b.staggerLines=b.horiz&&E.staggerLines;b.axisGroup||(b.gridGroup=e.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(t||"")).add(P),b.axisGroup=e.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(t||"")).add(P),b.labelGroup=e.g("axis-labels").attr({zIndex:E.zIndex||7}).addClass("highcharts-"+b.coll.toLowerCase()+"-labels "+(t||"")).add(P));I||b.isLinked?(d.forEach(function(a,
e){b.generateTick(a,e)}),b.renderUnsquish(),b.reserveSpaceDefault=0===l||2===l||{1:"left",3:"right"}[l]===b.labelAlign,u(E.reserveSpace,"center"===b.labelAlign?!0:null,b.reserveSpaceDefault)&&d.forEach(function(b){r=Math.max(k[b].getLabelSize(),r)}),b.staggerLines&&(r*=b.staggerLines),b.labelOffset=r*(b.opposite?-1:1)):A(k,function(b,a){b.destroy();delete k[a]});if(g&&g.text&&!1!==g.enabled&&(b.addTitle(p),p&&!1!==g.reserveSpace)){b.titleOffset=w=b.axisTitle.getBBox()[c?"height":"width"];var q=g.offset;
n=v(q)?0:u(g.margin,c?5:10)}b.renderLine();b.offset=F*u(f.offset,M[l]?M[l]+(f.margin||0):0);b.tickRotCorr=b.tickRotCorr||{x:0,y:0};e=0===l?-b.labelMetrics().h:2===l?b.tickRotCorr.y:0;n=Math.abs(r)+n;r&&(n=n-e+F*(c?u(E.y,b.tickRotCorr.y+8*F):E.x));b.axisTitleMargin=u(q,n);b.getMaxLabelDimensions&&(b.maxLabelDimensions=b.getMaxLabelDimensions(k,d));c=this.tickSize("tick");M[l]=Math.max(M[l],b.axisTitleMargin+w+F*b.offset,n,d&&d.length&&c?c[0]+F*b.offset:0);f=f.offset?0:2*Math.floor(b.axisLine.strokeWidth()/
2);a[m]=Math.max(a[m],f);C(this,"afterGetOffset")};e.prototype.getLinePath=function(b){var a=this.chart,e=this.opposite,f=this.offset,d=this.horiz,k=this.left+(e?this.width:0)+f;f=a.chartHeight-this.bottom-(e?this.height:0)+f;e&&(b*=-1);return a.renderer.crispLine([["M",d?this.left:k,d?f:this.top],["L",d?a.chartWidth-this.right:k,d?f:a.chartHeight-this.bottom]],b)};e.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))};e.prototype.getTitlePosition=function(){var b=this.horiz,a=this.left,e=this.top,f=this.len,d=this.options.title,k=b?a:e,c=this.opposite,l=this.offset,u=d.x||0,m=d.y||0,p=this.axisTitle,A=this.chart.renderer.fontMetrics(d.style&&d.style.fontSize,p);p=Math.max(p.getBBox(null,0).height-A.h-1,0);f={low:k+(b?0:f),middle:k+f/2,high:k+(b?f:0)}[d.align];a=(b?e+this.height:a)+(b?1:-1)*
(c?-1:1)*this.axisTitleMargin+[-p,p,A.f,-p][this.side];b={x:b?f+u:a+(c?this.width:0)+l+u,y:b?a+m-(c?this.height:0)+l:f+m};C(this,"afterGetTitlePosition",{titlePosition:b});return b};e.prototype.renderMinorTick=function(b){var a=this.chart.hasRendered&&l(this.oldMin),e=this.minorTicks;e[b]||(e[b]=new q(this,b,"minor"));a&&e[b].isNew&&e[b].render(null,!0);e[b].render(null,!1,1)};e.prototype.renderTick=function(b,a){var e=this.isLinked,h=this.ticks,f=this.chart.hasRendered&&l(this.oldMin);if(!e||b>=
this.min&&b<=this.max)h[b]||(h[b]=new q(this,b)),f&&h[b].isNew&&h[b].render(a,!0,-1),h[b].render(a)};e.prototype.render=function(){var b=this,a=b.chart,e=b.logarithmic,f=b.options,d=b.isLinked,k=b.tickPositions,u=b.axisTitle,m=b.ticks,p=b.minorTicks,w=b.alternateBands,n=f.stackLabels,g=f.alternateGridColor,E=b.tickmarkOffset,r=b.axisLine,F=b.showAxis,t=D(a.renderer.globalAnimation),v,P;b.labelEdge.length=0;b.overlap=!1;[m,p,w].forEach(function(b){A(b,function(b){b.isActive=!1})});if(b.hasData()||
d)b.minorTickInterval&&!b.categories&&b.getMinorTickPositions().forEach(function(a){b.renderMinorTick(a)}),k.length&&(k.forEach(function(a,e){b.renderTick(a,e)}),E&&(0===b.min||b.single)&&(m[-1]||(m[-1]=new q(b,-1,null,!0)),m[-1].render(-1))),g&&k.forEach(function(h,f){P="undefined"!==typeof k[f+1]?k[f+1]+E:b.max-E;0===f%2&&h<b.max&&P<=b.max+(a.polar?-E:E)&&(w[h]||(w[h]=new c.PlotLineOrBand(b)),v=h+E,w[h].options={from:e?e.lin2log(v):v,to:e?e.lin2log(P):P,color:g,className:"highcharts-alternate-grid"},
w[h].render(),w[h].isActive=!0)}),b._addedPlotLB||((f.plotLines||[]).concat(f.plotBands||[]).forEach(function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);[m,p,w].forEach(function(b){var e,h=[],f=t.duration;A(b,function(b,a){b.isActive||(b.render(a,!1,0),b.isActive=!1,h.push(a))});M(function(){for(e=h.length;e--;)b[h[e]]&&!b[h[e]].isActive&&(b[h[e]].destroy(),delete b[h[e]])},b!==w&&a.hasRendered&&f?f:0)});r&&(r[r.isPlaced?"animate":"attr"]({d:this.getLinePath(r.strokeWidth())}),r.isPlaced=!0,r[F?
"show":"hide"](F));u&&F&&(f=b.getTitlePosition(),l(f.y)?(u[u.isNew?"attr":"animate"](f),u.isNew=!1):(u.attr("y",-9999),u.isNew=!0));n&&n.enabled&&b.stacking&&b.stacking.renderStackTotals();b.isDirty=!1;C(this,"afterRender")};e.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(b){b.render()}));this.series.forEach(function(b){b.isDirty=!0})};e.prototype.getKeepProps=function(){return this.keepProps||e.keepProps};e.prototype.destroy=function(b){var a=this,
e=a.plotLinesAndBands,f;C(this,"destroy",{keepEvents:b});b||P(a);[a.ticks,a.minorTicks,a.alternateBands].forEach(function(b){K(b)});if(e)for(b=e.length;b--;)e[b].destroy();"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b){a[b]&&(a[b]=a[b].destroy())});for(f in a.plotLinesAndBandsGroups)a.plotLinesAndBandsGroups[f]=a.plotLinesAndBandsGroups[f].destroy();A(a,function(b,e){-1===a.getKeepProps().indexOf(e)&&delete a[e]})};e.prototype.drawCrosshair=function(b,
a){var e=this.crosshair,h=u(e.snap,!0),f,d=this.cross,k=this.chart;C(this,"drawCrosshair",{e:b,point:a});b||(b=this.cross&&this.cross.e);if(this.crosshair&&!1!==(v(a)||!h)){h?v(a)&&(f=u("colorAxis"!==this.coll?a.crosshairPos:null,this.isXAxis?a.plotX:this.len-a.plotY)):f=b&&(this.horiz?b.chartX-this.pos:this.len-b.chartY+this.pos);if(v(f)){var c={value:a&&(this.isXAxis?a.x:u(a.stackY,a.y)),translatedValue:f};k.polar&&r(c,{isCrosshair:!0,chartX:b&&b.chartX,chartY:b&&b.chartY,point:a});c=this.getPlotLinePath(c)||
null}if(!v(c)){this.hideCrosshair();return}h=this.categories&&!this.isRadial;d||(this.cross=d=k.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(h?"category ":"thin ")+e.className).attr({zIndex:u(e.zIndex,2)}).add(),k.styledMode||(d.attr({stroke:e.color||(h?g.parse("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":u(e.width,1)}).css({"pointer-events":"none"}),e.dashStyle&&d.attr({dashstyle:e.dashStyle})));d.show().attr({d:c});h&&!e.width&&d.attr({"stroke-width":this.transA});
this.cross.e=b}else this.hideCrosshair();C(this,"afterDrawCrosshair",{e:b,point:a})};e.prototype.hideCrosshair=function(){this.cross&&this.cross.hide();C(this,"afterHideCrosshair")};e.prototype.hasVerticalPanning=function(){var b,a;return/y/.test((null===(a=null===(b=this.chart.options.chart)||void 0===b?void 0:b.panning)||void 0===a?void 0:a.type)||"")};e.defaultOptions={dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},
hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",
minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"};e.defaultYAxisOptions={endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var b=this.axis.chart.numberFormatter;return b(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},
gridLineWidth:1,lineWidth:0};e.defaultLeftAxisOptions={labels:{x:-15},title:{rotation:270}};e.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}};e.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};e.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};e.keepProps="extKey hcEvents names series userMax userMin".split(" ");return e}();c.Axis=y;return c.Axis});O(q,"parts/DateTimeAxis.js",[q["parts/Axis.js"],q["parts/Utilities.js"]],
function(g,c){var q=c.addEvent,y=c.getMagnitude,B=c.normalizeTickInterval,H=c.timeUnits,D=function(){function c(c){this.axis=c}c.prototype.normalizeTimeTickInterval=function(c,g){var t=g||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];g=t[t.length-1];var v=H[g[0]],q=g[1],n;for(n=0;n<t.length&&!(g=t[n],v=H[g[0]],q=g[1],t[n+1]&&c<=(v*q[q.length-1]+H[t[n+
1][0]])/2);n++);v===H.year&&c<5*v&&(q=[1,2,5]);c=B(c/v,q,"year"===g[0]?Math.max(y(c/v),1):1);return{unitRange:v,count:c,unitName:g[0]}};return c}();c=function(){function c(){}c.compose=function(c){c.keepProps.push("dateTime");c.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};q(c,"init",function(c){"datetime"!==c.userOptions.type?this.dateTime=void 0:this.dateTime||(this.dateTime=new D(this))})};c.AdditionsClass=D;return c}();c.compose(g);return c});
O(q,"parts/LogarithmicAxis.js",[q["parts/Axis.js"],q["parts/Utilities.js"]],function(g,c){var q=c.addEvent,y=c.getMagnitude,B=c.normalizeTickInterval,H=c.pick,D=function(){function c(c){this.axis=c}c.prototype.getLogTickPositions=function(c,g,q,v){var t=this.axis,n=t.len,r=t.options,C=[];v||(this.minorAutoInterval=void 0);if(.5<=c)c=Math.round(c),C=t.getLinearTickPositions(c,g,q);else if(.08<=c){r=Math.floor(g);var I,p;for(n=.3<c?[1,2,4]:.15<c?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];r<q+1&&!p;r++){var m=
n.length;for(I=0;I<m&&!p;I++){var d=this.log2lin(this.lin2log(r)*n[I]);d>g&&(!v||l<=q)&&"undefined"!==typeof l&&C.push(l);l>q&&(p=!0);var l=d}}}else g=this.lin2log(g),q=this.lin2log(q),c=v?t.getMinorTickInterval():r.tickInterval,c=H("auto"===c?null:c,this.minorAutoInterval,r.tickPixelInterval/(v?5:1)*(q-g)/((v?n/t.tickPositions.length:n)||1)),c=B(c,void 0,y(c)),C=t.getLinearTickPositions(c,g,q).map(this.log2lin),v||(this.minorAutoInterval=c/5);v||(t.tickInterval=c);return C};c.prototype.lin2log=function(c){return Math.pow(10,
c)};c.prototype.log2lin=function(c){return Math.log(c)/Math.LN10};return c}();c=function(){function c(){}c.compose=function(c){c.keepProps.push("logarithmic");var g=c.prototype,t=D.prototype;g.log2lin=t.log2lin;g.lin2log=t.lin2log;q(c,"init",function(c){var g=this.logarithmic;"logarithmic"!==c.userOptions.type?this.logarithmic=void 0:(g||(g=this.logarithmic=new D(this)),this.log2lin!==g.log2lin&&(g.log2lin=this.log2lin.bind(this)),this.lin2log!==g.lin2log&&(g.lin2log=this.lin2log.bind(this)))});q(c,
"afterInit",function(){var c=this.logarithmic;c&&(this.lin2val=function(g){return c.lin2log(g)},this.val2lin=function(g){return c.log2lin(g)})})};return c}();c.compose(g);return c});O(q,"parts/PlotLineOrBand.js",[q["parts/Axis.js"],q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c,q){var y=q.arrayMax,B=q.arrayMin,H=q.defined,D=q.destroyObjectProperties,J=q.erase,t=q.extend,G=q.merge,L=q.objectEach,v=q.pick,K=function(){function n(c,n){this.axis=c;n&&(this.options=n,this.id=n.id)}n.prototype.render=
function(){c.fireEvent(this,"render");var n=this,g=n.axis,t=g.horiz,p=g.logarithmic,m=n.options,d=m.label,l=n.label,k=m.to,f=m.from,a=m.value,A=H(f)&&H(k),u=H(a),E=n.svgElem,P=!E,w=[],M=m.color,F=v(m.zIndex,0),q=m.events;w={"class":"highcharts-plot-"+(A?"band ":"line ")+(m.className||"")};var e={},b=g.chart.renderer,h=A?"bands":"lines";p&&(f=p.log2lin(f),k=p.log2lin(k),a=p.log2lin(a));g.chart.styledMode||(u?(w.stroke=M||"#999999",w["stroke-width"]=v(m.width,1),m.dashStyle&&(w.dashstyle=m.dashStyle)):
A&&(w.fill=M||"#e6ebf5",m.borderWidth&&(w.stroke=m.borderColor,w["stroke-width"]=m.borderWidth)));e.zIndex=F;h+="-"+F;(p=g.plotLinesAndBandsGroups[h])||(g.plotLinesAndBandsGroups[h]=p=b.g("plot-"+h).attr(e).add());P&&(n.svgElem=E=b.path().attr(w).add(p));if(u)w=g.getPlotLinePath({value:a,lineWidth:E.strokeWidth(),acrossPanes:m.acrossPanes});else if(A)w=g.getPlotBandPath(f,k,m);else return;!n.eventsAdded&&q&&(L(q,function(b,a){E.on(a,function(b){q[a].apply(n,[b])})}),n.eventsAdded=!0);(P||!E.d)&&w&&
w.length?E.attr({d:w}):E&&(w?(E.show(!0),E.animate({d:w})):E.d&&(E.hide(),l&&(n.label=l=l.destroy())));d&&(H(d.text)||H(d.formatter))&&w&&w.length&&0<g.width&&0<g.height&&!w.isFlat?(d=G({align:t&&A&&"center",x:t?!A&&4:10,verticalAlign:!t&&A&&"middle",y:t?A?16:10:A?6:-4,rotation:t&&!A&&90},d),this.renderLabel(d,w,A,F)):l&&l.hide();return n};n.prototype.renderLabel=function(c,n,g,p){var m=this.label,d=this.axis.chart.renderer;m||(m={align:c.textAlign||c.align,rotation:c.rotation,"class":"highcharts-plot-"+
(g?"band":"line")+"-label "+(c.className||"")},m.zIndex=p,p=this.getLabelText(c),this.label=m=d.text(p,0,0,c.useHTML).attr(m).add(),this.axis.chart.styledMode||m.css(c.style));d=n.xBounds||[n[0][1],n[1][1],g?n[2][1]:n[0][1]];n=n.yBounds||[n[0][2],n[1][2],g?n[2][2]:n[0][2]];g=B(d);p=B(n);m.align(c,!1,{x:g,y:p,width:y(d)-g,height:y(n)-p});m.show(!0)};n.prototype.getLabelText=function(c){return H(c.formatter)?c.formatter.call(this):c.text};n.prototype.destroy=function(){J(this.axis.plotLinesAndBands,
this);delete this.axis;D(this)};return n}();t(g.prototype,{getPlotBandPath:function(c,g){var n=this.getPlotLinePath({value:g,force:!0,acrossPanes:this.options.acrossPanes}),r=this.getPlotLinePath({value:c,force:!0,acrossPanes:this.options.acrossPanes}),p=[],m=this.horiz,d=1;c=c<this.min&&g<this.min||c>this.max&&g>this.max;if(r&&n){if(c){var l=r.toString()===n.toString();d=0}for(c=0;c<r.length;c+=2){g=r[c];var k=r[c+1],f=n[c],a=n[c+1];"M"!==g[0]&&"L"!==g[0]||"M"!==k[0]&&"L"!==k[0]||"M"!==f[0]&&"L"!==
f[0]||"M"!==a[0]&&"L"!==a[0]||(m&&f[1]===g[1]?(f[1]+=d,a[1]+=d):m||f[2]!==g[2]||(f[2]+=d,a[2]+=d),p.push(["M",g[1],g[2]],["L",k[1],k[2]],["L",a[1],a[2]],["L",f[1],f[2]],["Z"]));p.isFlat=l}}return p},addPlotBand:function(c){return this.addPlotBandOrLine(c,"plotBands")},addPlotLine:function(c){return this.addPlotBandOrLine(c,"plotLines")},addPlotBandOrLine:function(c,g){var n=(new K(this,c)).render(),r=this.userOptions;if(n){if(g){var p=r[g]||[];p.push(c);r[g]=p}this.plotLinesAndBands.push(n);this._addedPlotLB=
!0}return n},removePlotBandOrLine:function(c){for(var n=this.plotLinesAndBands,g=this.options,t=this.userOptions,p=n.length;p--;)n[p].id===c&&n[p].destroy();[g.plotLines||[],t.plotLines||[],g.plotBands||[],t.plotBands||[]].forEach(function(m){for(p=m.length;p--;)(m[p]||{}).id===c&&J(m,m[p])})},removePlotBand:function(c){this.removePlotBandOrLine(c)},removePlotLine:function(c){this.removePlotBandOrLine(c)}});c.PlotLineOrBand=K;return c.PlotLineOrBand});O(q,"parts/Tooltip.js",[q["parts/Globals.js"],
q["parts/Utilities.js"]],function(g,c){var q=g.doc,y=c.clamp,B=c.css,H=c.defined,D=c.discardElement,J=c.extend,t=c.fireEvent,G=c.format,L=c.isNumber,v=c.isString,K=c.merge,n=c.pick,r=c.splat,C=c.syncTimeout,I=c.timeUnits;"";var p=function(){function m(d,c){this.container=void 0;this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=d;this.init(d,c)}m.prototype.applyFilter=function(){var d=this.chart;d.renderer.definition({tagName:"filter",
id:"drop-shadow-"+d.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});d.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+d.index+"{filter:url(#drop-shadow-"+d.index+")}"})};m.prototype.bodyFormatter=function(d){return d.map(function(d){var k=
d.series.tooltipOptions;return(k[(d.point.formatPrefix||"point")+"Formatter"]||d.point.tooltipFormatter).call(d.point,k[(d.point.formatPrefix||"point")+"Format"]||"")})};m.prototype.cleanSplit=function(d){this.chart.series.forEach(function(c){var k=c&&c.tt;k&&(!k.isActive||d?c.tt=k.destroy():k.isActive=!1)})};m.prototype.defaultFormatter=function(d){var c=this.points||r(this);var k=[d.tooltipFooterHeaderFormatter(c[0])];k=k.concat(d.bodyFormatter(c));k.push(d.tooltipFooterHeaderFormatter(c[0],!0));
return k};m.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),D(this.container));c.clearTimeout(this.hideTimer);c.clearTimeout(this.tooltipTimeout)};m.prototype.getAnchor=function(d,c){var k=this.chart,f=k.pointer,a=k.inverted,l=k.plotTop,u=k.plotLeft,m=0,p=0,w,n;d=r(d);this.followPointer&&c?("undefined"===typeof c.chartX&&(c=f.normalize(c)),
d=[c.chartX-u,c.chartY-l]):d[0].tooltipPos?d=d[0].tooltipPos:(d.forEach(function(f){w=f.series.yAxis;n=f.series.xAxis;m+=f.plotX+(!a&&n?n.left-u:0);p+=(f.plotLow?(f.plotLow+f.plotHigh)/2:f.plotY)+(!a&&w?w.top-l:0)}),m/=d.length,p/=d.length,d=[a?k.plotWidth-p:m,this.shared&&!a&&1<d.length&&c?c.chartY-l:a?k.plotHeight-m:p]);return d.map(Math.round)};m.prototype.getDateFormat=function(d,c,k,f){var a=this.chart.time,l=a.dateFormat("%m-%d %H:%M:%S.%L",c),u={millisecond:15,second:12,minute:9,hour:6,day:3},
m="millisecond";for(p in I){if(d===I.week&&+a.dateFormat("%w",c)===k&&"00:00:00.000"===l.substr(6)){var p="week";break}if(I[p]>d){p=m;break}if(u[p]&&l.substr(u[p])!=="01-01 00:00:00.000".substr(u[p]))break;"week"!==p&&(m=p)}if(p)var w=a.resolveDTLFormat(f[p]).main;return w};m.prototype.getLabel=function(){var d,c,k=this,f=this.chart.renderer,a=this.chart.styledMode,m=this.options,u="tooltip"+(H(m.className)?" "+m.className:""),p=(null===(d=m.style)||void 0===d?void 0:d.pointerEvents)||(!this.followPointer&&
m.stickOnContact?"auto":"none"),n;d=function(){k.inContact=!0};var w=function(){var a=k.chart.hoverSeries;k.inContact=!1;if(a&&a.onMouseOut)a.onMouseOut()};if(!this.label){this.outside&&(this.container=n=g.doc.createElement("div"),n.className="highcharts-tooltip-container",B(n,{position:"absolute",top:"1px",pointerEvents:p,zIndex:3}),g.doc.body.appendChild(n),this.renderer=f=new g.Renderer(n,0,0,null===(c=this.chart.options.chart)||void 0===c?void 0:c.style,void 0,void 0,f.styledMode));this.split?
this.label=f.g(u):(this.label=f.label("",0,0,m.shape||"callout",null,null,m.useHTML,null,u).attr({padding:m.padding,r:m.borderRadius}),a||this.label.attr({fill:m.backgroundColor,"stroke-width":m.borderWidth}).css(m.style).css({pointerEvents:p}).shadow(m.shadow));a&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(k.outside&&!k.split){var r=this.label,F=r.xSetter,t=r.ySetter;r.xSetter=function(a){F.call(r,k.distance);n.style.left=a+"px"};r.ySetter=function(a){t.call(r,
k.distance);n.style.top=a+"px"}}this.label.on("mouseenter",d).on("mouseleave",w).attr({zIndex:8}).add()}return this.label};m.prototype.getPosition=function(d,c,k){var f=this.chart,a=this.distance,l={},m=f.inverted&&k.h||0,p,g=this.outside,w=g?q.documentElement.clientWidth-2*a:f.chartWidth,r=g?Math.max(q.body.scrollHeight,q.documentElement.scrollHeight,q.body.offsetHeight,q.documentElement.offsetHeight,q.documentElement.clientHeight):f.chartHeight,F=f.pointer.getChartPosition(),t=f.containerScaling,
e=function(b){return t?b*t.scaleX:b},b=function(b){return t?b*t.scaleY:b},h=function(h){var l="x"===h;return[h,l?w:r,l?d:c].concat(g?[l?e(d):b(c),l?F.left-a+e(k.plotX+f.plotLeft):F.top-a+b(k.plotY+f.plotTop),0,l?w:r]:[l?d:c,l?k.plotX+f.plotLeft:k.plotY+f.plotTop,l?f.plotLeft:f.plotTop,l?f.plotLeft+f.plotWidth:f.plotTop+f.plotHeight])},z=h("y"),x=h("x"),C=!this.followPointer&&n(k.ttBelow,!f.inverted===!!k.negative),v=function(h,f,d,c,k,u,p){var x="y"===h?b(a):e(a),w=(d-c)/2,n=c<k-a,A=k+a+c<f,g=k-x-
d+w;k=k+x-w;if(C&&A)l[h]=k;else if(!C&&n)l[h]=g;else if(n)l[h]=Math.min(p-c,0>g-m?g:g-m);else if(A)l[h]=Math.max(u,k+m+d>f?k:k+m);else return!1},I=function(b,e,h,f,d){var c;d<a||d>e-a?c=!1:l[b]=d<h/2?1:d>e-f/2?e-f-2:d-h/2;return c},V=function(b){var a=z;z=x;x=a;p=b},G=function(){!1!==v.apply(0,z)?!1!==I.apply(0,x)||p||(V(!0),G()):p?l.x=l.y=0:(V(!0),G())};(f.inverted||1<this.len)&&V();G();return l};m.prototype.getXDateFormat=function(d,c,k){c=c.dateTimeLabelFormats;var f=k&&k.closestPointRange;return(f?
this.getDateFormat(f,d.x,k.options.startOfWeek,c):c.day)||c.year};m.prototype.hide=function(d){var l=this;c.clearTimeout(this.hideTimer);d=n(d,this.options.hideDelay,500);this.isHidden||(this.hideTimer=C(function(){l.getLabel().fadeOut(d?void 0:d);l.isHidden=!0},d))};m.prototype.init=function(d,c){this.chart=d;this.options=c;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=c.split&&!d.inverted&&!d.polar;this.shared=c.shared||this.split;this.outside=n(c.outside,!(!d.scrollablePixelsX&&
!d.scrollablePixelsY))};m.prototype.isStickyOnContact=function(){return!(this.followPointer||!this.options.stickOnContact||!this.inContact)};m.prototype.move=function(d,l,k,f){var a=this,m=a.now,u=!1!==a.options.animation&&!a.isHidden&&(1<Math.abs(d-m.x)||1<Math.abs(l-m.y)),p=a.followPointer||1<a.len;J(m,{x:u?(2*m.x+d)/3:d,y:u?(m.y+l)/2:l,anchorX:p?void 0:u?(2*m.anchorX+k)/3:k,anchorY:p?void 0:u?(m.anchorY+f)/2:f});a.getLabel().attr(m);a.drawTracker();u&&(c.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=
setTimeout(function(){a&&a.move(d,l,k,f)},32))};m.prototype.refresh=function(d,l){var k=this.chart,f=this.options,a=d,m={},u=[],p=f.formatter||this.defaultFormatter;m=this.shared;var g=k.styledMode;if(f.enabled){c.clearTimeout(this.hideTimer);this.followPointer=r(a)[0].series.tooltipOptions.followPointer;var w=this.getAnchor(a,l);l=w[0];var M=w[1];!m||a.series&&a.series.noSharedTooltip?m=a.getLabelConfig():(k.pointer.applyInactiveState(a),a.forEach(function(a){a.setState("hover");u.push(a.getLabelConfig())}),
m={x:a[0].category,y:a[0].y},m.points=u,a=a[0]);this.len=u.length;k=p.call(m,this);p=a.series;this.distance=n(p.tooltipOptions.distance,16);!1===k?this.hide():(this.split?this.renderSplit(k,r(d)):(d=this.getLabel(),f.style.width&&!g||d.css({width:this.chart.spacingBox.width+"px"}),d.attr({text:k&&k.join?k.join(""):k}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+n(a.colorIndex,p.colorIndex)),g||d.attr({stroke:f.borderColor||a.color||p.color||"#666666"}),this.updatePosition({plotX:l,
plotY:M,negative:a.negative,ttBelow:a.ttBelow,h:w[2]||0})),this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=!1);t(this,"refresh")}};m.prototype.renderSplit=function(d,c){function k(b,a,e,h,f){void 0===f&&(f=!0);e?(a=V?0:D,b=y(b-h/2,q.left,q.right-h)):(a-=G,b=f?b-h-z:b+z,b=y(b,f?b:q.left,q.right));return{x:b,y:a}}var f=this,a=f.chart,l=f.chart,m=l.plotHeight,p=l.plotLeft,r=l.plotTop,w=l.pointer,M=l.renderer,F=l.scrollablePixelsY,t=void 0===F?0:F;F=l.scrollingContainer;F=
void 0===F?{scrollLeft:0,scrollTop:0}:F;var e=F.scrollLeft,b=F.scrollTop,h=l.styledMode,z=f.distance,x=f.options,C=f.options.positioner,q={left:e,right:e+l.chartWidth,top:b,bottom:b+l.chartHeight},I=f.getLabel(),V=!(!a.xAxis[0]||!a.xAxis[0].opposite),G=r+b,K=0,D=m-t;v(d)&&(d=[!1,d]);d=d.slice(0,c.length+1).reduce(function(a,e,d){if(!1!==e&&""!==e){d=c[d-1]||{isHeader:!0,plotX:c[0].plotX,plotY:m,series:{}};var l=d.isHeader,u=l?f:d.series,w=u.tt,g=d.isHeader;var A=d.series;var E="highcharts-color-"+
n(d.colorIndex,A.colorIndex,"none");w||(w={padding:x.padding,r:x.borderRadius},h||(w.fill=x.backgroundColor,w["stroke-width"]=x.borderWidth),w=M.label("",0,0,x[g?"headerShape":"shape"]||"callout",void 0,void 0,x.useHTML).addClass((g?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+E).attr(w).add(I));w.isActive=!0;w.attr({text:e});h||w.css(x.style).shadow(x.shadow).attr({stroke:x.borderColor||d.color||A.color||"#333333"});e=u.tt=w;g=e.getBBox();u=g.width+e.strokeWidth();l&&(K=g.height,D+=
K,V&&(G-=K));A=d.plotX;A=void 0===A?0:A;E=d.plotY;E=void 0===E?0:E;var F=d.series;if(d.isHeader){A=p+A;var S=r+m/2}else w=F.xAxis,F=F.yAxis,A=w.pos+y(A,-z,w.len+z),F.pos+E>=b+r&&F.pos+E<=b+r+m-t&&(S=F.pos+E);A=y(A,q.left-z,q.right+z);"number"===typeof S?(g=g.height+1,E=C?C.call(f,u,g,d):k(A,S,l,u),a.push({align:C?0:void 0,anchorX:A,anchorY:S,boxWidth:u,point:d,rank:n(E.rank,l?1:0),size:g,target:E.y,tt:e,x:E.x})):e.isActive=!1}return a},[]);!C&&d.some(function(b){return b.x<q.left})&&(d=d.map(function(b){var a=
k(b.anchorX,b.anchorY,b.point.isHeader,b.boxWidth,!1);return J(b,{target:a.y,x:a.x})}));f.cleanSplit();g.distribute(d,D);d.forEach(function(b){var a=b.pos;b.tt.attr({visibility:"undefined"===typeof a?"hidden":"inherit",x:b.x,y:a+G,anchorX:b.anchorX,anchorY:b.anchorY})});d=f.container;a=f.renderer;f.outside&&d&&a&&(l=I.getBBox(),a.setSize(l.width+l.x,l.height+l.y,!1),w=w.getChartPosition(),d.style.left=w.left+"px",d.style.top=w.top+"px")};m.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&
this.tracker.destroy();else{var d=this.chart,c=this.label,k=d.hoverPoint;if(c&&k){var f={x:0,y:0,width:0,height:0};k=this.getAnchor(k);var a=c.getBBox();k[0]+=d.plotLeft-c.translateX;k[1]+=d.plotTop-c.translateY;f.x=Math.min(0,k[0]);f.y=Math.min(0,k[1]);f.width=0>k[0]?Math.max(Math.abs(k[0]),a.width-k[0]):Math.max(Math.abs(k[0]),a.width);f.height=0>k[1]?Math.max(Math.abs(k[1]),a.height-Math.abs(k[1])):Math.max(Math.abs(k[1]),a.height);this.tracker?this.tracker.attr(f):(this.tracker=c.renderer.rect(f).addClass("highcharts-tracker").add(c),
d.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};m.prototype.styledModeFormat=function(d){return d.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};m.prototype.tooltipFooterHeaderFormatter=function(d,c){var k=c?"footer":"header",f=d.series,a=f.tooltipOptions,l=a.xDateFormat,m=f.xAxis,p=m&&"datetime"===m.options.type&&L(d.key),n=a[k+"Format"];c={isFooter:c,labelConfig:d};t(this,"headerFormatter",
c,function(c){p&&!l&&(l=this.getXDateFormat(d,a,m));p&&l&&(d.point&&d.point.tooltipDateKeys||["key"]).forEach(function(a){n=n.replace("{point."+a+"}","{point."+a+":"+l+"}")});f.chart.styledMode&&(n=this.styledModeFormat(n));c.text=G(n,{point:d,series:f},this.chart)});return c.text};m.prototype.update=function(d){this.destroy();K(!0,this.chart.options.tooltip.userOptions,d);this.init(this.chart,K(!0,this.options,d))};m.prototype.updatePosition=function(d){var c=this.chart,k=c.pointer,f=this.getLabel(),
a=d.plotX+c.plotLeft,m=d.plotY+c.plotTop;k=k.getChartPosition();d=(this.options.positioner||this.getPosition).call(this,f.width,f.height,d);if(this.outside){var p=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(f.width+p,f.height+p,!1);if(c=c.containerScaling)B(this.container,{transform:"scale("+c.scaleX+", "+c.scaleY+")"}),a*=c.scaleX,m*=c.scaleY;a+=k.left-d.x;m+=k.top-d.y}this.move(Math.round(d.x),Math.round(d.y||0),a,m)};return m}();g.Tooltip=p;return g.Tooltip});O(q,"parts/Pointer.js",
[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Tooltip.js"],q["parts/Utilities.js"]],function(g,c,q,y){var B=g.parse,H=c.charts,D=c.noop,J=y.addEvent,t=y.attr,G=y.css,L=y.defined,v=y.extend,K=y.find,n=y.fireEvent,r=y.isNumber,C=y.isObject,I=y.objectEach,p=y.offset,m=y.pick,d=y.splat;"";g=function(){function l(d,f){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.chart=d;this.hasDragged=!1;this.options=f;this.unbindContainerMouseLeave=function(){};this.init(d,f)}l.prototype.applyInactiveState=
function(d){var f=[],a;(d||[]).forEach(function(d){a=d.series;f.push(a);a.linkedParent&&f.push(a.linkedParent);a.linkedSeries&&(f=f.concat(a.linkedSeries));a.navigatorSeries&&f.push(a.navigatorSeries)});this.chart.series.forEach(function(a){-1===f.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})};l.prototype.destroy=function(){var d=this;"undefined"!==typeof d.unDocMouseMove&&d.unDocMouseMove();this.unbindContainerMouseLeave();c.chartCount||(c.unbindDocumentMouseUp&&
(c.unbindDocumentMouseUp=c.unbindDocumentMouseUp()),c.unbindDocumentTouchEnd&&(c.unbindDocumentTouchEnd=c.unbindDocumentTouchEnd()));clearInterval(d.tooltipTimeout);I(d,function(f,a){d[a]=void 0})};l.prototype.drag=function(d){var f=this.chart,a=f.options.chart,c=d.chartX,k=d.chartY,l=this.zoomHor,m=this.zoomVert,p=f.plotLeft,n=f.plotTop,g=f.plotWidth,r=f.plotHeight,e=this.selectionMarker,b=this.mouseDownX||0,h=this.mouseDownY||0,z=C(a.panning)?a.panning&&a.panning.enabled:a.panning,x=a.panKey&&d[a.panKey+
"Key"];if(!e||!e.touch)if(c<p?c=p:c>p+g&&(c=p+g),k<n?k=n:k>n+r&&(k=n+r),this.hasDragged=Math.sqrt(Math.pow(b-c,2)+Math.pow(h-k,2)),10<this.hasDragged){var t=f.isInsidePlot(b-p,h-n);f.hasCartesianSeries&&(this.zoomX||this.zoomY)&&t&&!x&&!e&&(this.selectionMarker=e=f.renderer.rect(p,n,l?1:g,m?1:r,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),f.styledMode||e.attr({fill:a.selectionMarkerFill||B("#335cad").setOpacity(.25).get()}));e&&l&&(c-=b,e.attr({width:Math.abs(c),x:(0<c?0:c)+b}));
e&&m&&(c=k-h,e.attr({height:Math.abs(c),y:(0<c?0:c)+h}));t&&!e&&z&&f.pan(d,a.panning)}};l.prototype.dragStart=function(d){var f=this.chart;f.mouseIsDown=d.type;f.cancelClick=!1;f.mouseDownX=this.mouseDownX=d.chartX;f.mouseDownY=this.mouseDownY=d.chartY};l.prototype.drop=function(d){var f=this,a=this.chart,c=this.hasPinched;if(this.selectionMarker){var k={originalEvent:d,xAxis:[],yAxis:[]},l=this.selectionMarker,m=l.attr?l.attr("x"):l.x,p=l.attr?l.attr("y"):l.y,g=l.attr?l.attr("width"):l.width,F=l.attr?
l.attr("height"):l.height,t;if(this.hasDragged||c)a.axes.forEach(function(a){if(a.zoomEnabled&&L(a.min)&&(c||f[{xAxis:"zoomX",yAxis:"zoomY"}[a.coll]])&&r(m)&&r(p)){var b=a.horiz,e="touchend"===d.type?a.minPixelPadding:0,l=a.toValue((b?m:p)+e);b=a.toValue((b?m+g:p+F)-e);k[a.coll].push({axis:a,min:Math.min(l,b),max:Math.max(l,b)});t=!0}}),t&&n(a,"selection",k,function(e){a.zoom(v(e,c?{animation:!1}:null))});r(a.index)&&(this.selectionMarker=this.selectionMarker.destroy());c&&this.scaleGroups()}a&&r(a.index)&&
(G(a.container,{cursor:a._cursor}),a.cancelClick=10<this.hasDragged,a.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};l.prototype.findNearestKDPoint=function(d,f,a){var c=this.chart,k=c.hoverPoint;c=c.tooltip;if(k&&c&&c.isStickyOnContact())return k;var l;d.forEach(function(d){var c=!(d.noSharedTooltip&&f)&&0>d.options.findNearestPointBy.indexOf("y");d=d.searchPoint(a,c);if((c=C(d,!0))&&!(c=!C(l,!0))){c=l.distX-d.distX;var k=l.dist-d.dist,m=(d.series.group&&d.series.group.zIndex)-
(l.series.group&&l.series.group.zIndex);c=0<(0!==c&&f?c:0!==k?k:0!==m?m:l.series.index>d.series.index?-1:1)}c&&(l=d)});return l};l.prototype.getChartCoordinatesFromPoint=function(d,f){var a=d.series,c=a.xAxis;a=a.yAxis;var k=m(d.clientX,d.plotX),l=d.shapeArgs;if(c&&a)return f?{chartX:c.len+c.pos-k,chartY:a.len+a.pos-d.plotY}:{chartX:k+c.pos,chartY:d.plotY+a.pos};if(l&&l.x&&l.y)return{chartX:l.x,chartY:l.y}};l.prototype.getChartPosition=function(){return this.chartPosition||(this.chartPosition=p(this.chart.container))};
l.prototype.getCoordinates=function(d){var f={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(a){f[a.isXAxis?"xAxis":"yAxis"].push({axis:a,value:a.toValue(d[a.horiz?"chartX":"chartY"])})});return f};l.prototype.getHoverData=function(d,f,a,c,l,p){var k,u=[];c=!(!c||!d);var g=f&&!f.stickyTracking,A={chartX:p?p.chartX:void 0,chartY:p?p.chartY:void 0,shared:l};n(this,"beforeGetHoverData",A);g=g?[f]:a.filter(function(a){return A.filter?A.filter(a):a.visible&&!(!l&&a.directTouch)&&m(a.options.enableMouseTracking,
!0)&&a.stickyTracking});f=(k=c||!p?d:this.findNearestKDPoint(g,l,p))&&k.series;k&&(l&&!f.noSharedTooltip?(g=a.filter(function(a){return A.filter?A.filter(a):a.visible&&!(!l&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),g.forEach(function(a){var e=K(a.points,function(b){return b.x===k.x&&!b.isNull});C(e)&&(a.chart.isBoosting&&(e=a.getPoint(e)),u.push(e))})):u.push(k));A={hoverPoint:k};n(this,"afterGetHoverData",A);return{hoverPoint:A.hoverPoint,hoverSeries:f,hoverPoints:u}};
l.prototype.getPointFromEvent=function(d){d=d.target;for(var f;d&&!f;)f=d.point,d=d.parentNode;return f};l.prototype.onTrackerMouseOut=function(d){d=d.relatedTarget||d.toElement;var f=this.chart.hoverSeries;this.isDirectTouch=!1;if(!(!f||!d||f.stickyTracking||this.inClass(d,"highcharts-tooltip")||this.inClass(d,"highcharts-series-"+f.index)&&this.inClass(d,"highcharts-tracker")))f.onMouseOut()};l.prototype.inClass=function(d,f){for(var a;d;){if(a=t(d,"class")){if(-1!==a.indexOf(f))return!0;if(-1!==
a.indexOf("highcharts-container"))return!1}d=d.parentNode}};l.prototype.init=function(d,f){this.options=f;this.chart=d;this.runChartClick=f.chart.events&&!!f.chart.events.click;this.pinchDown=[];this.lastValidTouch={};q&&(d.tooltip=new q(d,f.tooltip),this.followTouchMove=m(f.tooltip.followTouchMove,!0));this.setDOMEvents()};l.prototype.normalize=function(d,f){var a=d.touches,c=a?a.length?a.item(0):m(a.changedTouches,d.changedTouches)[0]:d;f||(f=this.getChartPosition());a=c.pageX-f.left;f=c.pageY-
f.top;if(c=this.chart.containerScaling)a/=c.scaleX,f/=c.scaleY;return v(d,{chartX:Math.round(a),chartY:Math.round(f)})};l.prototype.onContainerClick=function(d){var f=this.chart,a=f.hoverPoint;d=this.normalize(d);var c=f.plotLeft,k=f.plotTop;f.cancelClick||(a&&this.inClass(d.target,"highcharts-tracker")?(n(a.series,"click",v(d,{point:a})),f.hoverPoint&&a.firePointEvent("click",d)):(v(d,this.getCoordinates(d)),f.isInsidePlot(d.chartX-c,d.chartY-k)&&n(f,"click",d)))};l.prototype.onContainerMouseDown=
function(d){d=this.normalize(d);if(c.isFirefox&&0!==d.button)this.onContainerMouseMove(d);if("undefined"===typeof d.button||1===((d.buttons||d.button)&1))this.zoomOption(d),this.dragStart(d)};l.prototype.onContainerMouseLeave=function(d){var f=H[m(c.hoverChartIndex,-1)],a=this.chart.tooltip;d=this.normalize(d);f&&(d.relatedTarget||d.toElement)&&(f.pointer.reset(),f.pointer.chartPosition=void 0);a&&!a.isHidden&&this.reset()};l.prototype.onContainerMouseMove=function(d){var f=this.chart;d=this.normalize(d);
this.setHoverChartIndex();d.preventDefault||(d.returnValue=!1);"mousedown"===f.mouseIsDown&&this.drag(d);f.openMenu||!this.inClass(d.target,"highcharts-tracker")&&!f.isInsidePlot(d.chartX-f.plotLeft,d.chartY-f.plotTop)||this.runPointActions(d)};l.prototype.onDocumentTouchEnd=function(d){H[c.hoverChartIndex]&&H[c.hoverChartIndex].pointer.drop(d)};l.prototype.onContainerTouchMove=function(d){this.touch(d)};l.prototype.onContainerTouchStart=function(d){this.zoomOption(d);this.touch(d,!0)};l.prototype.onDocumentMouseMove=
function(d){var f=this.chart,a=this.chartPosition;d=this.normalize(d,a);var c=f.tooltip;!a||c&&c.isStickyOnContact()||f.isInsidePlot(d.chartX-f.plotLeft,d.chartY-f.plotTop)||this.inClass(d.target,"highcharts-tracker")||this.reset()};l.prototype.onDocumentMouseUp=function(d){var f=H[m(c.hoverChartIndex,-1)];f&&f.pointer.drop(d)};l.prototype.pinch=function(d){var f=this,a=f.chart,c=f.pinchDown,k=d.touches||[],l=k.length,p=f.lastValidTouch,n=f.hasZoom,g=f.selectionMarker,r={},t=1===l&&(f.inClass(d.target,
"highcharts-tracker")&&a.runTrackerClick||f.runChartClick),e={};1<l&&(f.initiated=!0);n&&f.initiated&&!t&&d.preventDefault();[].map.call(k,function(b){return f.normalize(b)});"touchstart"===d.type?([].forEach.call(k,function(b,a){c[a]={chartX:b.chartX,chartY:b.chartY}}),p.x=[c[0].chartX,c[1]&&c[1].chartX],p.y=[c[0].chartY,c[1]&&c[1].chartY],a.axes.forEach(function(b){if(b.zoomEnabled){var e=a.bounds[b.horiz?"h":"v"],f=b.minPixelPadding,d=b.toPixels(Math.min(m(b.options.min,b.dataMin),b.dataMin)),
c=b.toPixels(Math.max(m(b.options.max,b.dataMax),b.dataMax)),k=Math.max(d,c);e.min=Math.min(b.pos,Math.min(d,c)-f);e.max=Math.max(b.pos+b.len,k+f)}}),f.res=!0):f.followTouchMove&&1===l?this.runPointActions(f.normalize(d)):c.length&&(g||(f.selectionMarker=g=v({destroy:D,touch:!0},a.plotBox)),f.pinchTranslate(c,k,r,g,e,p),f.hasPinched=n,f.scaleGroups(r,e),f.res&&(f.res=!1,this.reset(!1,0)))};l.prototype.pinchTranslate=function(d,f,a,c,l,m){this.zoomHor&&this.pinchTranslateDirection(!0,d,f,a,c,l,m);
this.zoomVert&&this.pinchTranslateDirection(!1,d,f,a,c,l,m)};l.prototype.pinchTranslateDirection=function(d,f,a,c,l,m,p,n){var k=this.chart,u=d?"x":"y",g=d?"X":"Y",e="chart"+g,b=d?"width":"height",h=k["plot"+(d?"Left":"Top")],w,x,A=n||1,r=k.inverted,E=k.bounds[d?"h":"v"],t=1===f.length,C=f[0][e],v=a[0][e],q=!t&&f[1][e],I=!t&&a[1][e];a=function(){"number"===typeof I&&20<Math.abs(C-q)&&(A=n||Math.abs(v-I)/Math.abs(C-q));x=(h-v)/A+C;w=k["plot"+(d?"Width":"Height")]/A};a();f=x;if(f<E.min){f=E.min;var P=
!0}else f+w>E.max&&(f=E.max-w,P=!0);P?(v-=.8*(v-p[u][0]),"number"===typeof I&&(I-=.8*(I-p[u][1])),a()):p[u]=[v,I];r||(m[u]=x-h,m[b]=w);m=r?1/A:A;l[b]=w;l[u]=f;c[r?d?"scaleY":"scaleX":"scale"+g]=A;c["translate"+g]=m*h+(v-m*C)};l.prototype.reset=function(c,f){var a=this.chart,k=a.hoverSeries,l=a.hoverPoint,m=a.hoverPoints,p=a.tooltip,n=p&&p.shared?m:l;c&&n&&d(n).forEach(function(a){a.series.isCartesian&&"undefined"===typeof a.plotX&&(c=!1)});if(c)p&&n&&d(n).length&&(p.refresh(n),p.shared&&m?m.forEach(function(a){a.setState(a.state,
!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):l&&(l.setState(l.state,!0),a.axes.forEach(function(a){a.crosshair&&l.series[a.coll]===a&&a.drawCrosshair(null,l)})));else{if(l)l.onMouseOut();m&&m.forEach(function(a){a.setState()});if(k)k.onMouseOut();p&&p.hide(f);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());a.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=a.hoverPoints=
a.hoverPoint=null}};l.prototype.runPointActions=function(d,f){var a=this.chart,k=a.tooltip&&a.tooltip.options.enabled?a.tooltip:void 0,l=k?k.shared:!1,p=f||a.hoverPoint,n=p&&p.series||a.hoverSeries;n=this.getHoverData(p,n,a.series,(!d||"touchmove"!==d.type)&&(!!f||n&&n.directTouch&&this.isDirectTouch),l,d);p=n.hoverPoint;var g=n.hoverPoints;f=(n=n.hoverSeries)&&n.tooltipOptions.followPointer;l=l&&n&&!n.noSharedTooltip;if(p&&(p!==a.hoverPoint||k&&k.isHidden)){(a.hoverPoints||[]).forEach(function(a){-1===
g.indexOf(a)&&a.setState()});if(a.hoverSeries!==n)n.onMouseOver();this.applyInactiveState(g);(g||[]).forEach(function(a){a.setState("hover")});a.hoverPoint&&a.hoverPoint.firePointEvent("mouseOut");if(!p.series)return;a.hoverPoints=g;a.hoverPoint=p;p.firePointEvent("mouseOver");k&&k.refresh(l?g:p,d)}else f&&k&&!k.isHidden&&(p=k.getAnchor([{}],d),k.updatePosition({plotX:p[0],plotY:p[1]}));this.unDocMouseMove||(this.unDocMouseMove=J(a.container.ownerDocument,"mousemove",function(a){var f=H[c.hoverChartIndex];
if(f)f.pointer.onDocumentMouseMove(a)}));a.axes.forEach(function(f){var c=m((f.crosshair||{}).snap,!0),k;c&&((k=a.hoverPoint)&&k.series[f.coll]===f||(k=K(g,function(a){return a.series[f.coll]===f})));k||!c?f.drawCrosshair(d,k):f.hideCrosshair()})};l.prototype.scaleGroups=function(d,f){var a=this.chart,c;a.series.forEach(function(k){c=d||k.getPlotBox();k.xAxis&&k.xAxis.zoomEnabled&&k.group&&(k.group.attr(c),k.markerGroup&&(k.markerGroup.attr(c),k.markerGroup.clip(f?a.clipRect:null)),k.dataLabelsGroup&&
k.dataLabelsGroup.attr(c))});a.clipRect.attr(f||a.clipBox)};l.prototype.setDOMEvents=function(){var d=this.chart.container,f=d.ownerDocument;d.onmousedown=this.onContainerMouseDown.bind(this);d.onmousemove=this.onContainerMouseMove.bind(this);d.onclick=this.onContainerClick.bind(this);this.unbindContainerMouseLeave=J(d,"mouseleave",this.onContainerMouseLeave.bind(this));c.unbindDocumentMouseUp||(c.unbindDocumentMouseUp=J(f,"mouseup",this.onDocumentMouseUp.bind(this)));c.hasTouch&&(J(d,"touchstart",
this.onContainerTouchStart.bind(this)),J(d,"touchmove",this.onContainerTouchMove.bind(this)),c.unbindDocumentTouchEnd||(c.unbindDocumentTouchEnd=J(f,"touchend",this.onDocumentTouchEnd.bind(this))))};l.prototype.setHoverChartIndex=function(){var d=this.chart,f=c.charts[m(c.hoverChartIndex,-1)];if(f&&f!==d)f.pointer.onContainerMouseLeave({relatedTarget:!0});f&&f.mouseIsDown||(c.hoverChartIndex=d.index)};l.prototype.touch=function(d,f){var a=this.chart,c;this.setHoverChartIndex();if(1===d.touches.length)if(d=
this.normalize(d),(c=a.isInsidePlot(d.chartX-a.plotLeft,d.chartY-a.plotTop))&&!a.openMenu){f&&this.runPointActions(d);if("touchmove"===d.type){f=this.pinchDown;var k=f[0]?4<=Math.sqrt(Math.pow(f[0].chartX-d.chartX,2)+Math.pow(f[0].chartY-d.chartY,2)):!1}m(k,!0)&&this.pinch(d)}else f&&this.reset();else 2===d.touches.length&&this.pinch(d)};l.prototype.zoomOption=function(d){var f=this.chart,a=f.options.chart,c=a.zoomType||"";f=f.inverted;/touch/.test(d.type)&&(c=m(a.pinchType,c));this.zoomX=d=/x/.test(c);
this.zoomY=c=/y/.test(c);this.zoomHor=d&&!f||c&&f;this.zoomVert=c&&!f||d&&f;this.hasZoom=d||c};return l}();return c.Pointer=g});O(q,"parts/MSPointer.js",[q["parts/Globals.js"],q["parts/Pointer.js"],q["parts/Utilities.js"]],function(g,c,q){function y(){var c=[];c.item=function(c){return this[c]};v(n,function(n){c.push({pageX:n.pageX,pageY:n.pageY,target:n.target})});return c}function B(c,n,p,m){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!D[g.hoverChartIndex]||(m(c),m=D[g.hoverChartIndex].pointer,
m[n]({type:p,target:c.currentTarget,preventDefault:t,touches:y()}))}var H=this&&this.__extends||function(){var c=function(n,p){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var l in d)d.hasOwnProperty(l)&&(c[l]=d[l])};return c(n,p)};return function(n,p){function m(){this.constructor=n}c(n,p);n.prototype=null===p?Object.create(p):(m.prototype=p.prototype,new m)}}(),D=g.charts,J=g.doc,t=g.noop,G=q.addEvent,L=q.css,v=q.objectEach,K=q.removeEvent,
n={},r=!!g.win.PointerEvent;return function(c){function g(){return null!==c&&c.apply(this,arguments)||this}H(g,c);g.prototype.batchMSEvents=function(c){c(this.chart.container,r?"pointerdown":"MSPointerDown",this.onContainerPointerDown);c(this.chart.container,r?"pointermove":"MSPointerMove",this.onContainerPointerMove);c(J,r?"pointerup":"MSPointerUp",this.onDocumentPointerUp)};g.prototype.destroy=function(){this.batchMSEvents(K);c.prototype.destroy.call(this)};g.prototype.init=function(p,m){c.prototype.init.call(this,
p,m);this.hasZoom&&L(p.container,{"-ms-touch-action":"none","touch-action":"none"})};g.prototype.onContainerPointerDown=function(c){B(c,"onContainerTouchStart","touchstart",function(c){n[c.pointerId]={pageX:c.pageX,pageY:c.pageY,target:c.currentTarget}})};g.prototype.onContainerPointerMove=function(c){B(c,"onContainerTouchMove","touchmove",function(c){n[c.pointerId]={pageX:c.pageX,pageY:c.pageY};n[c.pointerId].target||(n[c.pointerId].target=c.currentTarget)})};g.prototype.onDocumentPointerUp=function(c){B(c,
"onDocumentTouchEnd","touchend",function(c){delete n[c.pointerId]})};g.prototype.setDOMEvents=function(){c.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(G)};return g}(c)});O(q,"parts/Legend.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.addEvent,y=c.animObject,B=c.css,H=c.defined,D=c.discardElement,J=c.find,t=c.fireEvent,G=c.format,L=c.isNumber,v=c.merge,K=c.pick,n=c.relativeLength,r=c.setAnimation,C=c.stableSort,I=c.syncTimeout;
c=c.wrap;var p=g.isFirefox,m=g.marginNames,d=g.win,l=function(){function d(d,a){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=
this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=d;this.init(d,a)}d.prototype.init=function(d,a){this.chart=d;this.setOptions(a);a.enabled&&(this.render(),q(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=q(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};d.prototype.setOptions=function(d){var a=K(d.padding,8);this.options=d;this.chart.styledMode||
(this.itemStyle=d.itemStyle,this.itemHiddenStyle=v(this.itemStyle,d.itemHiddenStyle));this.itemMarginTop=d.itemMarginTop||0;this.itemMarginBottom=d.itemMarginBottom||0;this.padding=a;this.initialItemY=a-5;this.symbolWidth=K(d.symbolWidth,16);this.pages=[];this.proximate="proximate"===d.layout&&!this.chart.inverted;this.baseline=void 0};d.prototype.update=function(d,a){var f=this.chart;this.setOptions(v(!0,this.options,d));this.destroy();f.isDirtyLegend=f.isDirtyBox=!0;K(a,!0)&&f.redraw();t(this,"afterUpdate")};
d.prototype.colorizeItem=function(d,a){d.legendGroup[a?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var f=this.options,c=d.legendItem,l=d.legendLine,k=d.legendSymbol,m=this.itemHiddenStyle.color;f=a?f.itemStyle.color:m;var p=a?d.color||m:m,n=d.options&&d.options.marker,g={fill:p};c&&c.css({fill:f,color:f});l&&l.attr({stroke:p});k&&(n&&k.isMarker&&(g=d.pointAttribs(),a||(g.stroke=g.fill=m)),k.attr(g))}t(this,"afterColorizeItem",{item:d,visible:a})};d.prototype.positionItems=
function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};d.prototype.positionItem=function(d){var a=this,f=this.options,c=f.symbolPadding,k=!f.rtl,l=d._legendItemPos;f=l[0];l=l[1];var m=d.checkbox,p=d.legendGroup;p&&p.element&&(c={translateX:k?f:this.legendWidth-f-2*c-4,translateY:l},k=function(){t(a,"afterPositionItem",{item:d})},H(p.translateY)?p.animate(c,{complete:k}):(p.attr(c),k()));m&&(m.x=f,m.y=l)};d.prototype.destroyItem=function(d){var a=
d.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(a){d[a]&&(d[a]=d[a].destroy())});a&&D(d.checkbox)};d.prototype.destroy=function(){function d(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(a){["legendItem","legendGroup"].forEach(d,a)});"clipRect up down pager nav box title group".split(" ").forEach(d,this);this.display=null};d.prototype.positionCheckboxes=function(){var d=this.group&&this.group.alignAttr,a=this.clipHeight||this.legendHeight,
c=this.titleHeight;if(d){var l=d.translateY;this.allItems.forEach(function(f){var k=f.checkbox;if(k){var m=l+c+k.y+(this.scrollOffset||0)+3;B(k,{left:d.translateX+f.checkboxOffset+k.x-20+"px",top:m+"px",display:this.proximate||m>l-6&&m<l+a-6?"":"none"})}},this)}};d.prototype.renderTitle=function(){var d=this.options,a=this.padding,c=d.title,k=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,null,null,null,d.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||
this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+"px"}),d=this.title.getBBox(),k=d.height,this.offsetWidth=d.width,this.contentGroup.attr({translateY:k}));this.titleHeight=k};d.prototype.setText=function(d){var a=this.options;d.legendItem.attr({text:a.labelFormat?G(a.labelFormat,d,this.chart):a.labelFormatter.call(d)})};d.prototype.renderItem=function(d){var a=this.chart,f=a.renderer,c=this.options,k=this.symbolWidth,l=c.symbolPadding,m=this.itemStyle,
p=this.itemHiddenStyle,n="horizontal"===c.layout?K(c.itemDistance,20):0,g=!c.rtl,e=d.legendItem,b=!d.series,h=!b&&d.series.drawLegendSymbol?d.series:d,z=h.options;z=this.createCheckboxForItem&&z&&z.showCheckbox;n=k+l+n+(z?20:0);var x=c.useHTML,r=d.options.className;e||(d.legendGroup=f.g("legend-item").addClass("highcharts-"+h.type+"-series highcharts-color-"+d.colorIndex+(r?" "+r:"")+(b?" highcharts-series-"+d.index:"")).attr({zIndex:1}).add(this.scrollGroup),d.legendItem=e=f.text("",g?k+l:-l,this.baseline||
0,x),a.styledMode||e.css(v(d.visible?m:p)),e.attr({align:g?"left":"right",zIndex:2}).add(d.legendGroup),this.baseline||(this.fontMetrics=f.fontMetrics(a.styledMode?12:m.fontSize,e),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,e.attr("y",this.baseline)),this.symbolHeight=c.symbolHeight||this.fontMetrics.f,h.drawLegendSymbol(this,d),this.setItemEvents&&this.setItemEvents(d,e,x));z&&!d.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(d);this.colorizeItem(d,d.visible);!a.styledMode&&
m.width||e.css({width:(c.itemWidth||this.widthOption||a.spacingBox.width)-n+"px"});this.setText(d);a=e.getBBox();d.itemWidth=d.checkboxOffset=c.itemWidth||d.legendItemWidth||a.width+n;this.maxItemWidth=Math.max(this.maxItemWidth,d.itemWidth);this.totalItemWidth+=d.itemWidth;this.itemHeight=d.itemHeight=Math.round(d.legendItemHeight||a.height||this.symbolHeight)};d.prototype.layoutItem=function(d){var a=this.options,f=this.padding,c="horizontal"===a.layout,k=d.itemHeight,l=this.itemMarginBottom,m=
this.itemMarginTop,p=c?K(a.itemDistance,20):0,n=this.maxLegendWidth;a=a.alignColumns&&this.totalItemWidth>n?this.maxItemWidth:d.itemWidth;c&&this.itemX-f+a>n&&(this.itemX=f,this.lastLineHeight&&(this.itemY+=m+this.lastLineHeight+l),this.lastLineHeight=0);this.lastItemY=m+this.itemY+l;this.lastLineHeight=Math.max(k,this.lastLineHeight);d._legendItemPos=[this.itemX,this.itemY];c?this.itemX+=a:(this.itemY+=m+k+l,this.lastLineHeight=k);this.offsetWidth=this.widthOption||Math.max((c?this.itemX-f-(d.checkbox?
0:p):a)+f,this.offsetWidth)};d.prototype.getAllItems=function(){var d=[];this.chart.series.forEach(function(a){var f=a&&a.options;a&&K(f.showInLegend,H(f.linkedTo)?!1:void 0,!0)&&(d=d.concat(a.legendItems||("point"===f.legendType?a.data:a)))});t(this,"afterGetAllItems",{allItems:d});return d};d.prototype.getAlignment=function(){var d=this.options;return this.proximate?d.align.charAt(0)+"tv":d.floating?"":d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0)};d.prototype.adjustMargins=function(d,
a){var c=this.chart,f=this.options,k=this.getAlignment();k&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(l,p){l.test(k)&&!H(d[p])&&(c[m[p]]=Math.max(c[m[p]],c.legend[(p+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][p]*f[p%2?"x":"y"]+K(f.margin,12)+a[p]+(c.titleOffset[p]||0)))})};d.prototype.proximatePositions=function(){var d=this.chart,a=[],c="left"===this.options.align;this.allItems.forEach(function(f){var k=c;if(f.yAxis&&f.points){f.xAxis.options.reversed&&(k=
!k);var l=J(k?f.points:f.points.slice(0).reverse(),function(a){return L(a.plotY)});k=this.itemMarginTop+f.legendItem.getBBox().height+this.itemMarginBottom;var m=f.yAxis.top-d.plotTop;f.visible?(l=l?l.plotY:f.yAxis.height,l+=m-.3*k):l=m+f.yAxis.height;a.push({target:l,size:k,item:f})}},this);g.distribute(a,d.plotHeight);a.forEach(function(a){a.item._legendItemPos[1]=d.plotTop-d.spacing[0]+a.pos})};d.prototype.render=function(){var d=this.chart,a=d.renderer,c=this.group,k=this.box,l=this.options,m=
this.padding;this.itemX=m;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=n(l.width,d.spacingBox.width-m);var p=d.spacingBox.width-2*m-l.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(p/=2);this.maxLegendWidth=this.widthOption||p;c||(this.group=c=a.g("legend").attr({zIndex:7}).add(),this.contentGroup=a.g().attr({zIndex:1}).add(c),this.scrollGroup=a.g().add(this.contentGroup));this.renderTitle();var g=this.getAllItems();C(g,function(a,e){return(a.options&&
a.options.legendIndex||0)-(e.options&&e.options.legendIndex||0)});l.reversed&&g.reverse();this.allItems=g;this.display=p=!!g.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;g.forEach(this.renderItem,this);g.forEach(this.layoutItem,this);g=(this.widthOption||this.offsetWidth)+m;var r=this.lastItemY+this.lastLineHeight+this.titleHeight;r=this.handleOverflow(r);r+=m;k||(this.box=k=a.rect().addClass("highcharts-legend-box").attr({r:l.borderRadius}).add(c),k.isNew=!0);
d.styledMode||k.attr({stroke:l.borderColor,"stroke-width":l.borderWidth||0,fill:l.backgroundColor||"none"}).shadow(l.shadow);0<g&&0<r&&(k[k.isNew?"attr":"animate"](k.crisp.call({},{x:0,y:0,width:g,height:r},k.strokeWidth())),k.isNew=!1);k[p?"show":"hide"]();d.styledMode&&"none"===c.getStyle("display")&&(g=r=0);this.legendWidth=g;this.legendHeight=r;p&&this.align();this.proximate||this.positionItems();t(this,"afterRender")};d.prototype.align=function(d){void 0===d&&(d=this.chart.spacingBox);var a=
this.chart,c=this.options,f=d.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?f+=a.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<a.titleOffset[2]&&(f-=a.titleOffset[2]);f!==d.y&&(d=v(d,{y:f}));this.group.align(v(c,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":c.verticalAlign}),!0,d)};d.prototype.handleOverflow=function(d){var a=this,c=this.chart,f=c.renderer,k=this.options,l=k.y,m=this.padding;l=c.spacingBox.height+("top"===k.verticalAlign?
-l:l)-m;var p=k.maxHeight,n,g=this.clipRect,e=k.navigation,b=K(e.animation,!0),h=e.arrowSize||12,z=this.nav,x=this.pages,r,t=this.allItems,v=function(b){"number"===typeof b?g.attr({height:b}):g&&(a.clipRect=g.destroy(),a.contentGroup.clip());a.contentGroup.div&&(a.contentGroup.div.style.clip=b?"rect("+m+"px,9999px,"+(m+b)+"px,0)":"auto")},q=function(b){a[b]=f.circle(0,0,1.3*h).translate(h/2,h/2).add(z);c.styledMode||a[b].attr("fill","rgba(0,0,0,0.0001)");return a[b]};"horizontal"!==k.layout||"middle"===
k.verticalAlign||k.floating||(l/=2);p&&(l=Math.min(l,p));x.length=0;d>l&&!1!==e.enabled?(this.clipHeight=n=Math.max(l-20-this.titleHeight-m,0),this.currentPage=K(this.currentPage,1),this.fullHeight=d,t.forEach(function(b,a){var e=b._legendItemPos[1],d=Math.round(b.legendItem.getBBox().height),h=x.length;if(!h||e-x[h-1]>n&&(r||e)!==x[h-1])x.push(r||e),h++;b.pageIx=h-1;r&&(t[a-1].pageIx=h-1);a===t.length-1&&e+d-x[h-1]>n&&e!==r&&(x.push(e),b.pageIx=h);e!==r&&(r=e)}),g||(g=a.clipRect=f.clipRect(0,m,9999,
0),a.contentGroup.clip(g)),v(n),z||(this.nav=z=f.g().attr({zIndex:1}).add(this.group),this.up=f.symbol("triangle",0,0,h,h).add(z),q("upTracker").on("click",function(){a.scroll(-1,b)}),this.pager=f.text("",15,10).addClass("highcharts-legend-navigation"),c.styledMode||this.pager.css(e.style),this.pager.add(z),this.down=f.symbol("triangle-down",0,0,h,h).add(z),q("downTracker").on("click",function(){a.scroll(1,b)})),a.scroll(0),d=l):z&&(v(),this.nav=z.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=
0);return d};d.prototype.scroll=function(d,a){var c=this,f=this.chart,k=this.pages,l=k.length,m=this.currentPage+d;d=this.clipHeight;var p=this.options.navigation,n=this.pager,g=this.padding;m>l&&(m=l);0<m&&("undefined"!==typeof a&&r(a,f),this.nav.attr({translateX:g,translateY:d+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===m?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),n.attr({text:m+"/"+l}),[this.down,
this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":m===l?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),f.styledMode||(this.up.attr({fill:1===m?p.inactiveColor:p.activeColor}),this.upTracker.css({cursor:1===m?"default":"pointer"}),this.down.attr({fill:m===l?p.inactiveColor:p.activeColor}),this.downTracker.css({cursor:m===l?"default":"pointer"})),this.scrollOffset=-k[m-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),
this.currentPage=m,this.positionCheckboxes(),a=y(K(a,f.renderer.globalAnimation,!0)),I(function(){t(c,"afterScroll",{currentPage:m})},a.duration||0))};return d}();(/Trident\/7\.0/.test(d.navigator&&d.navigator.userAgent)||p)&&c(l.prototype,"positionItem",function(d,c){var a=this,f=function(){c._legendItemPos&&d.call(a,c)};f();a.bubbleLegend||setTimeout(f)});g.Legend=l;return g.Legend});O(q,"parts/Chart.js",[q["parts/Axis.js"],q["parts/Globals.js"],q["parts/Legend.js"],q["parts/MSPointer.js"],q["parts/Options.js"],
q["parts/Pointer.js"],q["parts/Time.js"],q["parts/Utilities.js"]],function(g,c,q,y,B,H,D,J){var t=c.charts,G=c.doc,L=c.seriesTypes,v=c.win,K=B.defaultOptions,n=J.addEvent,r=J.animate,C=J.animObject,I=J.attr,p=J.createElement,m=J.css,d=J.defined,l=J.discardElement,k=J.erase,f=J.error,a=J.extend,A=J.find,u=J.fireEvent,E=J.getStyle,P=J.isArray,w=J.isFunction,M=J.isNumber,F=J.isObject,Q=J.isString,e=J.merge,b=J.numberFormat,h=J.objectEach,z=J.pick,x=J.pInt,N=J.relativeLength,aa=J.removeEvent,Z=J.setAnimation,
V=J.splat,Y=J.syncTimeout,ba=J.uniqueKey,U=c.marginNames,X=function(){function B(b,a,e){this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=this.labelCollectors=this.isResizing=this.index=this.container=this.colorCounter=this.clipBox=this.chartWidth=
this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0;this.getArgs(b,a,e)}B.prototype.getArgs=function(b,a,e){Q(b)||b.nodeName?(this.renderTo=b,this.init(a,e)):this.init(b,a)};B.prototype.init=function(a,d){var f,l=a.series,k=a.plotOptions||{};u(this,"init",{args:arguments},function(){a.series=null;f=e(K,a);var m=f.chart||{};h(f.plotOptions,function(b,a){F(b)&&(b.tooltip=k[a]&&e(k[a].tooltip)||void 0)});f.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;f.series=
a.series=l;this.userOptions=a;var p=m.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=d;this.isResizing=0;this.options=f;this.axes=[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new D(a.time):c.time;this.numberFormatter=m.numberFormatter||b;this.styledMode=m.styledMode;this.hasCartesianSeries=m.showAxes;var g=this;g.index=t.length;t.push(g);c.chartCount++;p&&h(p,function(b,a){w(b)&&n(g,a,b)});g.xAxis=[];g.yAxis=[];g.pointCount=g.colorCounter=
g.symbolCounter=0;u(g,"afterInit");g.firstRender()})};B.prototype.initSeries=function(b){var a=this.options.chart;a=b.type||a.type||a.defaultSeriesType;var e=L[a];e||f(17,!0,this,{missingModuleFor:a});a=new e;a.init(this,b);return a};B.prototype.setSeriesData=function(){this.getSeriesOrderByLinks().forEach(function(b){b.points||b.data||!b.enabledDataSorting||b.setData(b.options.data,!1)})};B.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(b,a){return b.linkedSeries.length||
a.linkedSeries.length?a.linkedSeries.length-b.linkedSeries.length:0})};B.prototype.orderSeries=function(b){var a=this.series;for(b=b||0;b<a.length;b++)a[b]&&(a[b].index=b,a[b].name=a[b].getName())};B.prototype.isInsidePlot=function(b,a,e){var d=e?a:b;b=e?b:a;d={x:d,y:b,isInsidePlot:0<=d&&d<=this.plotWidth&&0<=b&&b<=this.plotHeight};u(this,"afterIsInsidePlot",d);return d.isInsidePlot};B.prototype.redraw=function(b){u(this,"beforeRedraw");var e=this,d=e.axes,h=e.series,c=e.pointer,f=e.legend,l=e.userOptions.legend,
k=e.isDirtyLegend,m=e.hasCartesianSeries,p=e.isDirtyBox,g=e.renderer,n=g.isHidden(),x=[];e.setResponsive&&e.setResponsive(!1);Z(e.hasRendered?b:!1,e);n&&e.temporaryDisplay();e.layOutTitles();for(b=h.length;b--;){var z=h[b];if(z.options.stacking){var w=!0;if(z.isDirty){var r=!0;break}}}if(r)for(b=h.length;b--;)z=h[b],z.options.stacking&&(z.isDirty=!0);h.forEach(function(b){b.isDirty&&("point"===b.options.legendType?(b.updateTotals&&b.updateTotals(),k=!0):l&&(l.labelFormatter||l.labelFormat)&&(k=!0));
b.isDirtyData&&u(b,"updatedData")});k&&f&&f.options.enabled&&(f.render(),e.isDirtyLegend=!1);w&&e.getStacks();m&&d.forEach(function(b){e.isResizing&&M(b.min)||(b.updateNames(),b.setScale())});e.getMargins();m&&(d.forEach(function(b){b.isDirty&&(p=!0)}),d.forEach(function(b){var e=b.min+","+b.max;b.extKey!==e&&(b.extKey=e,x.push(function(){u(b,"afterSetExtremes",a(b.eventArgs,b.getExtremes()));delete b.eventArgs}));(p||w)&&b.redraw()}));p&&e.drawChartBox();u(e,"predraw");h.forEach(function(b){(p||
b.isDirty)&&b.visible&&b.redraw();b.isDirtyData=!1});c&&c.reset(!0);g.draw();u(e,"redraw");u(e,"render");n&&e.temporaryDisplay(!0);x.forEach(function(b){b.call()})};B.prototype.get=function(b){function a(a){return a.id===b||a.options&&a.options.id===b}var e=this.series,d;var h=A(this.axes,a)||A(this.series,a);for(d=0;!h&&d<e.length;d++)h=A(e[d].points||[],a);return h};B.prototype.getAxes=function(){var b=this,a=this.options,e=a.xAxis=V(a.xAxis||{});a=a.yAxis=V(a.yAxis||{});u(this,"getAxes");e.forEach(function(b,
a){b.index=a;b.isX=!0});a.forEach(function(b,a){b.index=a});e.concat(a).forEach(function(a){new g(b,a)});u(this,"afterGetAxes")};B.prototype.getSelectedPoints=function(){var b=[];this.series.forEach(function(a){b=b.concat(a.getPointsCollection().filter(function(b){return z(b.selectedStaging,b.selected)}))});return b};B.prototype.getSelectedSeries=function(){return this.series.filter(function(b){return b.selected})};B.prototype.setTitle=function(b,a,e){this.applyDescription("title",b);this.applyDescription("subtitle",
a);this.applyDescription("caption",void 0);this.layOutTitles(e)};B.prototype.applyDescription=function(b,a){var d=this,h="title"===b?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};h=this.options[b]=e(!this.styledMode&&{style:h},this.options[b],a);var c=this[b];c&&a&&(this[b]=c=c.destroy());h&&!c&&(c=this.renderer.text(h.text,0,0,h.useHTML).attr({align:h.align,"class":"highcharts-"+b,zIndex:h.zIndex||4}).add(),c.update=function(a){d[{title:"setTitle",subtitle:"setSubtitle",
caption:"setCaption"}[b]](a)},this.styledMode||c.css(h.style),this[b]=c)};B.prototype.layOutTitles=function(b){var e=[0,0,0],d=this.renderer,h=this.spacingBox;["title","subtitle","caption"].forEach(function(b){var c=this[b],f=this.options[b],l=f.verticalAlign||"top";b="title"===b?-3:"top"===l?e[0]+2:0;if(c){if(!this.styledMode)var k=f.style.fontSize;k=d.fontMetrics(k,c).b;c.css({width:(f.width||h.width+(f.widthAdjust||0))+"px"});var m=Math.round(c.getBBox(f.useHTML).height);c.align(a({y:"bottom"===
l?k:b+k,height:m},f),!1,"spacingBox");f.floating||("top"===l?e[0]=Math.ceil(e[0]+m):"bottom"===l&&(e[2]=Math.ceil(e[2]+m)))}},this);e[0]&&"top"===(this.options.title.verticalAlign||"top")&&(e[0]+=this.options.title.margin);e[2]&&"bottom"===this.options.caption.verticalAlign&&(e[2]+=this.options.caption.margin);var c=!this.titleOffset||this.titleOffset.join(",")!==e.join(",");this.titleOffset=e;u(this,"afterLayOutTitles");!this.isDirtyBox&&c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&
z(b,!0)&&this.isDirtyBox&&this.redraw())};B.prototype.getChartSize=function(){var b=this.options.chart,a=b.width;b=b.height;var e=this.renderTo;d(a)||(this.containerWidth=E(e,"width"));d(b)||(this.containerHeight=E(e,"height"));this.chartWidth=Math.max(0,a||this.containerWidth||600);this.chartHeight=Math.max(0,N(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))};B.prototype.temporaryDisplay=function(b){var a=this.renderTo;if(b)for(;a&&a.style;)a.hcOrigStyle&&(m(a,a.hcOrigStyle),
delete a.hcOrigStyle),a.hcOrigDetached&&(G.body.removeChild(a),a.hcOrigDetached=!1),a=a.parentNode;else for(;a&&a.style;){G.body.contains(a)||a.parentNode||(a.hcOrigDetached=!0,G.body.appendChild(a));if("none"===E(a,"display",!1)||a.hcOricDetached)a.hcOrigStyle={display:a.style.display,height:a.style.height,overflow:a.style.overflow},b={display:"block",overflow:"hidden"},a!==this.renderTo&&(b.height=0),m(a,b),a.offsetWidth||a.style.setProperty("display","block","important");a=a.parentNode;if(a===
G.body)break}};B.prototype.setClassName=function(b){this.container.className="highcharts-container "+(b||"")};B.prototype.getContainer=function(){var b=this.options,e=b.chart;var d=this.renderTo;var h=ba(),l,k;d||(this.renderTo=d=e.renderTo);Q(d)&&(this.renderTo=d=G.getElementById(d));d||f(13,!0,this);var g=x(I(d,"data-highcharts-chart"));M(g)&&t[g]&&t[g].hasRendered&&t[g].destroy();I(d,"data-highcharts-chart",this.index);d.innerHTML="";e.skipClone||d.offsetWidth||this.temporaryDisplay();this.getChartSize();
g=this.chartWidth;var n=this.chartHeight;m(d,{overflow:"hidden"});this.styledMode||(l=a({position:"relative",overflow:"hidden",width:g+"px",height:n+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none"},e.style));this.container=d=p("div",{id:h},l,d);this._cursor=d.style.cursor;this.renderer=new (c[e.renderer]||c.Renderer)(d,g,n,null,e.forExport,b.exporting&&b.exporting.allowHTML,this.styledMode);Z(void 0,this);this.setClassName(e.className);
if(this.styledMode)for(k in b.defs)this.renderer.definition(b.defs[k]);else this.renderer.setStyle(e.style);this.renderer.chartIndex=this.index;u(this,"afterGetContainer")};B.prototype.getMargins=function(b){var a=this.spacing,e=this.margin,h=this.titleOffset;this.resetMargins();h[0]&&!d(e[0])&&(this.plotTop=Math.max(this.plotTop,h[0]+a[0]));h[2]&&!d(e[2])&&(this.marginBottom=Math.max(this.marginBottom,h[2]+a[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(e,a);u(this,"getMargins");
b||this.getAxisMargins()};B.prototype.getAxisMargins=function(){var b=this,a=b.axisOffset=[0,0,0,0],e=b.colorAxis,h=b.margin,c=function(b){b.forEach(function(b){b.visible&&b.getOffset()})};b.hasCartesianSeries?c(b.axes):e&&e.length&&c(e);U.forEach(function(e,c){d(h[c])||(b[e]+=a[c])});b.setChartSize()};B.prototype.reflow=function(b){var a=this,e=a.options.chart,h=a.renderTo,c=d(e.width)&&d(e.height),f=e.width||E(h,"width");e=e.height||E(h,"height");h=b?b.target:v;if(!c&&!a.isPrinting&&f&&e&&(h===
v||h===G)){if(f!==a.containerWidth||e!==a.containerHeight)J.clearTimeout(a.reflowTimeout),a.reflowTimeout=Y(function(){a.container&&a.setSize(void 0,void 0,!1)},b?100:0);a.containerWidth=f;a.containerHeight=e}};B.prototype.setReflow=function(b){var a=this;!1===b||this.unbindReflow?!1===b&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=n(v,"resize",function(b){a.options&&a.reflow(b)}),n(this,"destroy",this.unbindReflow))};B.prototype.setSize=function(b,a,e){var d=this,
h=d.renderer;d.isResizing+=1;Z(e,d);e=h.globalAnimation;d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;"undefined"!==typeof b&&(d.options.chart.width=b);"undefined"!==typeof a&&(d.options.chart.height=a);d.getChartSize();d.styledMode||(e?r:m)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},e);d.setChartSize(!0);h.setSize(d.chartWidth,d.chartHeight,e);d.axes.forEach(function(b){b.isDirty=!0;b.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();
d.redraw(e);d.oldChartHeight=null;u(d,"resize");Y(function(){d&&u(d,"endResize",null,function(){--d.isResizing})},C(e).duration||0)};B.prototype.setChartSize=function(b){var a=this.inverted,e=this.renderer,d=this.chartWidth,h=this.chartHeight,c=this.options.chart,f=this.spacing,l=this.clipOffset,k,m,p,g;this.plotLeft=k=Math.round(this.plotLeft);this.plotTop=m=Math.round(this.plotTop);this.plotWidth=p=Math.max(0,Math.round(d-k-this.marginRight));this.plotHeight=g=Math.max(0,Math.round(h-m-this.marginBottom));
this.plotSizeX=a?g:p;this.plotSizeY=a?p:g;this.plotBorderWidth=c.plotBorderWidth||0;this.spacingBox=e.spacingBox={x:f[3],y:f[0],width:d-f[3]-f[1],height:h-f[0]-f[2]};this.plotBox=e.plotBox={x:k,y:m,width:p,height:g};d=2*Math.floor(this.plotBorderWidth/2);a=Math.ceil(Math.max(d,l[3])/2);e=Math.ceil(Math.max(d,l[0])/2);this.clipBox={x:a,y:e,width:Math.floor(this.plotSizeX-Math.max(d,l[1])/2-a),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,l[2])/2-e))};b||this.axes.forEach(function(b){b.setAxisSize();
b.setAxisTranslation()});u(this,"afterSetChartSize",{skipAxes:b})};B.prototype.resetMargins=function(){u(this,"resetMargins");var b=this,a=b.options.chart;["margin","spacing"].forEach(function(e){var d=a[e],h=F(d)?d:[d,d,d,d];["Top","Right","Bottom","Left"].forEach(function(d,c){b[e][c]=z(a[e+d],h[c])})});U.forEach(function(a,e){b[a]=z(b.margin[e],b.spacing[e])});b.axisOffset=[0,0,0,0];b.clipOffset=[0,0,0,0]};B.prototype.drawChartBox=function(){var b=this.options.chart,a=this.renderer,e=this.chartWidth,
d=this.chartHeight,h=this.chartBackground,c=this.plotBackground,f=this.plotBorder,l=this.styledMode,k=this.plotBGImage,m=b.backgroundColor,p=b.plotBackgroundColor,g=b.plotBackgroundImage,n,x=this.plotLeft,z=this.plotTop,w=this.plotWidth,r=this.plotHeight,t=this.plotBox,A=this.clipRect,v=this.clipBox,q="animate";h||(this.chartBackground=h=a.rect().addClass("highcharts-background").add(),q="attr");if(l)var C=n=h.strokeWidth();else{C=b.borderWidth||0;n=C+(b.shadow?8:0);m={fill:m||"none"};if(C||h["stroke-width"])m.stroke=
b.borderColor,m["stroke-width"]=C;h.attr(m).shadow(b.shadow)}h[q]({x:n/2,y:n/2,width:e-n-C%2,height:d-n-C%2,r:b.borderRadius});q="animate";c||(q="attr",this.plotBackground=c=a.rect().addClass("highcharts-plot-background").add());c[q](t);l||(c.attr({fill:p||"none"}).shadow(b.plotShadow),g&&(k?(g!==k.attr("href")&&k.attr("href",g),k.animate(t)):this.plotBGImage=a.image(g,x,z,w,r).add()));A?A.animate({width:v.width,height:v.height}):this.clipRect=a.clipRect(v);q="animate";f||(q="attr",this.plotBorder=
f=a.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());l||f.attr({stroke:b.plotBorderColor,"stroke-width":b.plotBorderWidth||0,fill:"none"});f[q](f.crisp({x:x,y:z,width:w,height:r},-f.strokeWidth()));this.isDirtyBox=!1;u(this,"afterDrawChartBox")};B.prototype.propFromSeries=function(){var b=this,a=b.options.chart,e,d=b.options.series,h,c;["inverted","angular","polar"].forEach(function(f){e=L[a.type||a.defaultSeriesType];c=a[f]||e&&e.prototype[f];for(h=d&&d.length;!c&&h--;)(e=L[d[h].type])&&
e.prototype[f]&&(c=!0);b[f]=c})};B.prototype.linkSeries=function(){var b=this,a=b.series;a.forEach(function(b){b.linkedSeries.length=0});a.forEach(function(a){var e=a.options.linkedTo;Q(e)&&(e=":previous"===e?b.series[a.index-1]:b.get(e))&&e.linkedParent!==a&&(e.linkedSeries.push(a),a.linkedParent=e,e.enabledDataSorting&&a.setDataSortingOptions(),a.visible=z(a.options.visible,e.options.visible,a.visible))});u(this,"afterLinkSeries")};B.prototype.renderSeries=function(){this.series.forEach(function(b){b.translate();
b.render()})};B.prototype.renderLabels=function(){var b=this,e=b.options.labels;e.items&&e.items.forEach(function(d){var h=a(e.style,d.style),c=x(h.left)+b.plotLeft,f=x(h.top)+b.plotTop+12;delete h.left;delete h.top;b.renderer.text(d.html,c,f).attr({zIndex:2}).css(h).add()})};B.prototype.render=function(){var b=this.axes,a=this.colorAxis,e=this.renderer,d=this.options,h=0,c=function(b){b.forEach(function(b){b.visible&&b.render()})};this.setTitle();this.legend=new q(this,d.legend);this.getStacks&&
this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;b.some(function(b){if(b.horiz&&b.visible&&b.options.labels.enabled&&b.series.length)return h=21,!0});var f=this.plotHeight=Math.max(this.plotHeight-h,0);b.forEach(function(b){b.setScale()});this.getAxisMargins();var l=1.1<d/this.plotWidth;var k=1.05<f/this.plotHeight;if(l||k)b.forEach(function(b){(b.horiz&&l||!b.horiz&&k)&&b.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?c(b):a&&a.length&&
c(a);this.seriesGroup||(this.seriesGroup=e.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();this.hasRendered=!0};B.prototype.addCredits=function(b){var a=this,d=e(!0,this.options.credits,b);d.enabled&&!this.credits&&(this.credits=this.renderer.text(d.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){d.href&&(v.location.href=d.href)}).attr({align:d.position.align,
zIndex:8}),a.styledMode||this.credits.css(d.style),this.credits.add().align(d.position),this.credits.update=function(b){a.credits=a.credits.destroy();a.addCredits(b)})};B.prototype.updateContainerScaling=function(){var b=this.container;if(2<b.offsetWidth&&2<b.offsetHeight&&b.getBoundingClientRect){var a=b.getBoundingClientRect(),e=a.width/b.offsetWidth;b=a.height/b.offsetHeight;1!==e||1!==b?this.containerScaling={scaleX:e,scaleY:b}:delete this.containerScaling}};B.prototype.destroy=function(){var b=
this,a=b.axes,e=b.series,d=b.container,f,m=d&&d.parentNode;u(b,"destroy");b.renderer.forExport?k(t,b):t[b.index]=void 0;c.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");aa(b);for(f=a.length;f--;)a[f]=a[f].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(f=e.length;f--;)e[f]=e[f].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var e=
b[a];e&&e.destroy&&(b[a]=e.destroy())});d&&(d.innerHTML="",aa(d),m&&l(d));h(b,function(a,e){delete b[e]})};B.prototype.firstRender=function(){var b=this,a=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();b.getAxes();(P(a.series)?a.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();b.setSeriesData();u(b,"beforeRender");H&&(b.pointer=c.hasTouch||!v.PointerEvent&&!v.MSPointerEvent?new H(b,a):new y(b,a));b.render();
if(!b.renderer.imgCount&&!b.hasLoaded)b.onload();b.temporaryDisplay(!0)}};B.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(b){b&&"undefined"!==typeof this.index&&b.apply(this,[this])},this);u(this,"load");u(this,"render");d(this.index)&&this.setReflow(this.options.chart.reflow);this.hasLoaded=!0};return B}();X.prototype.callbacks=[];c.chart=function(b,a,e){return new X(b,a,e)};return c.Chart=X});O(q,"parts/ScrollablePlotArea.js",[q["parts/Chart.js"],q["parts/Globals.js"],
q["parts/Utilities.js"]],function(g,c,q){var y=q.addEvent,B=q.createElement,H=q.pick,D=q.stop;"";y(g,"afterSetChartSize",function(g){var t=this.options.chart.scrollablePlotArea,q=t&&t.minWidth;t=t&&t.minHeight;if(!this.renderer.forExport){if(q){if(this.scrollablePixelsX=q=Math.max(0,q-this.chartWidth)){this.plotWidth+=q;this.inverted?(this.clipBox.height+=q,this.plotBox.height+=q):(this.clipBox.width+=q,this.plotBox.width+=q);var y={1:{name:"right",value:q}}}}else t&&(this.scrollablePixelsY=q=Math.max(0,
t-this.chartHeight))&&(this.plotHeight+=q,this.inverted?(this.clipBox.width+=q,this.plotBox.width+=q):(this.clipBox.height+=q,this.plotBox.height+=q),y={2:{name:"bottom",value:q}});y&&!g.skipAxes&&this.axes.forEach(function(g){y[g.side]?g.getPlotLinePath=function(){var t=y[g.side].name,n=this[t];this[t]=n-y[g.side].value;var r=c.Axis.prototype.getPlotLinePath.apply(this,arguments);this[t]=n;return r}:(g.setAxisSize(),g.setAxisTranslation())})}});y(g,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?
(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});g.prototype.setUpScrolling=function(){var c=this,g={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(g.overflowX="auto");this.scrollablePixelsY&&(g.overflowY="auto");this.scrollingContainer=B("div",{className:"highcharts-scrolling"},g,this.renderTo);y(this.scrollingContainer,"scroll",function(){c.pointer&&delete c.pointer.chartPosition});this.innerContainer=
B("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};g.prototype.moveFixedElements=function(){var c=this.container,g=this.fixedRenderer,q=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
y;this.scrollablePixelsX&&!this.inverted?y=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?y=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?y=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(y=".highcharts-yaxis");q.push(y,y+"-labels");q.forEach(function(t){[].forEach.call(c.querySelectorAll(t),function(c){(c.namespaceURI===g.SVG_NS?g.box:g.box.parentNode).appendChild(c);c.style.pointerEvents="auto"})})};g.prototype.applyFixed=function(){var g,t,q=!this.fixedDiv,L=
this.options.chart.scrollablePlotArea;q?(this.fixedDiv=B("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=t=new c.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight,null===(g=this.options.chart)||void 0===g?void 0:g.style),this.scrollableMask=t.path().attr({fill:this.options.chart.backgroundColor||"#fff",
"fill-opacity":H(L.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),y(this,"afterShowResetZoom",this.moveFixedElements),y(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);g=this.chartWidth+(this.scrollablePixelsX||0);t=this.chartHeight+(this.scrollablePixelsY||0);D(this.container);this.container.style.width=g+"px";this.container.style.height=t+"px";this.renderer.boxWrapper.attr({width:g,height:t,
viewBox:[0,0,g,t].join(" ")});this.chartBackground.attr({width:g,height:t});this.scrollingContainer.style.height=this.chartHeight+"px";q&&(L.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*L.scrollPositionX),L.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*L.scrollPositionY));t=this.axisOffset;q=this.plotTop-t[0]-1;L=this.plotLeft-t[3]-1;g=this.plotTop+this.plotHeight+t[2]+1;t=this.plotLeft+this.plotWidth+t[1]+1;var v=this.plotLeft+this.plotWidth-
(this.scrollablePixelsX||0),K=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);q=this.scrollablePixelsX?[["M",0,q],["L",this.plotLeft-1,q],["L",this.plotLeft-1,g],["L",0,g],["Z"],["M",v,q],["L",this.chartWidth,q],["L",this.chartWidth,g],["L",v,g],["Z"]]:this.scrollablePixelsY?[["M",L,0],["L",L,this.plotTop-1],["L",t,this.plotTop-1],["L",t,0],["Z"],["M",L,K],["L",L,this.chartHeight],["L",t,this.chartHeight],["L",t,K],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:q})}});
O(q,"parts/StackingAxis.js",[q["parts/Utilities.js"]],function(g){var c=g.addEvent,q=g.destroyObjectProperties,y=g.fireEvent,B=g.objectEach,H=g.pick,D=function(){function c(c){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=c}c.prototype.buildStacks=function(){var c=this.axis,g=c.series,q=H(c.options.reversedStacks,!0),v=g.length,D;if(!c.isXAxis){this.usePercentage=!1;for(D=v;D--;){var n=g[q?D:v-D-1];n.setStackedPoints();n.setGroupedPoints()}for(D=0;D<v;D++)g[D].modifyStacks();y(c,
"afterBuildStacks")}};c.prototype.cleanStacks=function(){if(!this.axis.isXAxis){if(this.oldStacks)var c=this.stacks=this.oldStacks;B(c,function(c){B(c,function(c){c.cumulative=c.total})})}};c.prototype.resetStacks=function(){var c=this,g=c.stacks;c.axis.isXAxis||B(g,function(g){B(g,function(q,t){q.touched<c.stacksTouched?(q.destroy(),delete g[t]):(q.total=null,q.cumulative=null)})})};c.prototype.renderStackTotals=function(){var c=this.axis.chart,g=c.renderer,q=this.stacks,v=this.stackTotalGroup=this.stackTotalGroup||
g.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();v.translate(c.plotLeft,c.plotTop);B(q,function(c){B(c,function(c){c.render(v)})})};return c}();return function(){function g(){}g.compose=function(q){c(q,"init",g.onInit);c(q,"destroy",g.onDestroy)};g.onDestroy=function(){var c=this.stacking;if(c){var g=c.stacks;B(g,function(c,t){q(c);g[t]=null});c&&c.stackTotalGroup&&c.stackTotalGroup.destroy()}};g.onInit=function(){this.stacking||(this.stacking=new D(this))};return g}()});O(q,"mixins/legend-symbol.js",
[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.merge,y=c.pick;g.LegendSymbolMixin={drawRectangle:function(c,g){var q=c.symbolHeight,B=c.options.squareSymbol;g.legendSymbol=this.chart.renderer.rect(B?(c.symbolWidth-q)/2:0,c.baseline-q+1,B?q:c.symbolWidth,q,y(c.options.symbolRadius,q/2)).addClass("highcharts-point").attr({zIndex:3}).add(g.legendGroup)},drawLineMarker:function(c){var g=this.options,D=g.marker,B=c.symbolWidth,t=c.symbolHeight,G=t/2,L=this.chart.renderer,v=this.legendGroup;
c=c.baseline-Math.round(.3*c.fontMetrics.b);var K={};this.chart.styledMode||(K={"stroke-width":g.lineWidth||0},g.dashStyle&&(K.dashstyle=g.dashStyle));this.legendLine=L.path(["M",0,c,"L",B,c]).addClass("highcharts-graph").attr(K).add(v);D&&!1!==D.enabled&&B&&(g=Math.min(y(D.radius,G),G),0===this.symbol.indexOf("url")&&(D=q(D,{width:t,height:t}),g=0),this.legendSymbol=D=L.symbol(this.symbol,B/2-g,c-g,2*g,2*g,D).addClass("highcharts-point").add(v),D.isMarker=!0)}};return g.LegendSymbolMixin});O(q,"parts/Point.js",
[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.animObject,y=c.defined,B=c.erase,H=c.extend,D=c.fireEvent,J=c.format,t=c.getNestedProperty,G=c.isArray,L=c.isNumber,v=c.isObject,K=c.syncTimeout,n=c.pick,r=c.removeEvent,C=c.uniqueKey;"";c=function(){function c(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.series=void 0;this.visible=!0;this.x=void 0}c.prototype.animateBeforeDestroy=
function(){var c=this,m={x:c.startXPos,opacity:0},d,l=c.getGraphicalProps();l.singular.forEach(function(l){d="dataLabel"===l;c[l]=c[l].animate(d?{x:c[l].startXPos,y:c[l].startYPos,opacity:0}:m)});l.plural.forEach(function(d){c[d].forEach(function(d){d.element&&d.animate(H({x:c.startXPos},d.startYPos?{x:d.startXPos,y:d.startYPos}:{}))})})};c.prototype.applyOptions=function(p,m){var d=this.series,l=d.options.pointValKey||d.pointValKey;p=c.prototype.optionsToObject.call(this,p);H(this,p);this.options=
this.options?H(this.options,p):p;p.group&&delete this.group;p.dataLabels&&delete this.dataLabels;l&&(this.y=c.prototype.getNestedProperty.call(this,l));this.formatPrefix=(this.isNull=n(this.isValid&&!this.isValid(),null===this.x||!L(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof m&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));"undefined"===typeof this.x&&d&&(this.x="undefined"===typeof m?d.autoIncrement(this):m);return this};c.prototype.destroy=
function(){function c(){if(m.graphic||m.dataLabel||m.dataLabels)r(m),m.destroyElements();for(a in m)m[a]=null}var m=this,d=m.series,l=d.chart;d=d.options.dataSorting;var k=l.hoverPoints,f=q(m.series.chart.renderer.globalAnimation),a;m.legendItem&&l.legend.destroyItem(m);k&&(m.setState(),B(k,m),k.length||(l.hoverPoints=null));if(m===l.hoverPoint)m.onMouseOut();d&&d.enabled?(this.animateBeforeDestroy(),K(c,f.duration)):c();l.pointCount--};c.prototype.destroyElements=function(c){var m=this;c=m.getGraphicalProps(c);
c.singular.forEach(function(d){m[d]=m[d].destroy()});c.plural.forEach(function(d){m[d].forEach(function(d){d.element&&d.destroy()});delete m[d]})};c.prototype.firePointEvent=function(c,m,d){var l=this,k=this.series.options;(k.point.events[c]||l.options&&l.options.events&&l.options.events[c])&&l.importEvents();"click"===c&&k.allowPointSelect&&(d=function(d){l.select&&l.select(null,d.ctrlKey||d.metaKey||d.shiftKey)});D(l,c,m,d)};c.prototype.getClassName=function(){return"highcharts-point"+(this.selected?
" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};c.prototype.getGraphicalProps=function(c){var m=this,d=[],l,k={singular:[],plural:[]};c=c||{graphic:1,dataLabel:1};c.graphic&&d.push("graphic","shadowGroup");
c.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(l=d.length;l--;){var f=d[l];m[f]&&k.singular.push(f)}["dataLabel","connector"].forEach(function(a){var d=a+"s";c[a]&&m[d]&&k.plural.push(d)});return k};c.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};c.prototype.getNestedProperty=function(c){if(c)return 0===
c.indexOf("custom.")?t(c,this.options):this[c]};c.prototype.getZone=function(){var c=this.series,m=c.zones;c=c.zoneAxis||"y";var d=0,l;for(l=m[d];this[c]>=l.value;)l=m[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=l&&l.color&&!this.options.color?l.color:this.nonZonedColor;return l};c.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};c.prototype.init=function(c,m,d){this.series=c;this.applyOptions(m,
d);this.id=y(this.id)?this.id:C();this.resolveColor();c.chart.pointCount++;D(this,"afterInit");return this};c.prototype.optionsToObject=function(g){var m={},d=this.series,l=d.options.keys,k=l||d.pointArrayMap||["y"],f=k.length,a=0,p=0;if(L(g)||null===g)m[k[0]]=g;else if(G(g))for(!l&&g.length>f&&(d=typeof g[0],"string"===d?m.name=g[0]:"number"===d&&(m.x=g[0]),a++);p<f;)l&&"undefined"===typeof g[a]||(0<k[p].indexOf(".")?c.prototype.setNestedProperty(m,g[a],k[p]):m[k[p]]=g[a]),a++,p++;else"object"===
typeof g&&(m=g,g.dataLabels&&(d._hasPointLabels=!0),g.marker&&(d._hasPointMarkers=!0));return m};c.prototype.resolveColor=function(){var c=this.series;var m=c.chart.options.chart.colorCount;var d=c.chart.styledMode;delete this.nonZonedColor;d||this.options.color||(this.color=c.color);c.options.colorByPoint?(d||(m=c.options.colors||c.chart.options.colors,this.color=this.color||m[c.colorCounter],m=m.length),d=c.colorCounter,c.colorCounter++,c.colorCounter===m&&(c.colorCounter=0)):d=c.colorIndex;this.colorIndex=
n(this.colorIndex,d)};c.prototype.setNestedProperty=function(c,m,d){d.split(".").reduce(function(d,c,f,a){d[c]=a.length-1===f?m:v(d[c],!0)?d[c]:{};return d[c]},c);return c};c.prototype.tooltipFormatter=function(c){var m=this.series,d=m.tooltipOptions,l=n(d.valueDecimals,""),k=d.valuePrefix||"",f=d.valueSuffix||"";m.chart.styledMode&&(c=m.chart.tooltip.styledModeFormat(c));(m.pointArrayMap||["y"]).forEach(function(a){a="{point."+a;if(k||f)c=c.replace(RegExp(a+"}","g"),k+a+"}"+f);c=c.replace(RegExp(a+
"}","g"),a+":,."+l+"f}")});return J(c,{point:this,series:this.series},m.chart)};return c}();return g.Point=c});O(q,"parts/Series.js",[q["parts/Globals.js"],q["mixins/legend-symbol.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/SVGElement.js"],q["parts/Utilities.js"]],function(g,c,q,y,B,H){var D=q.defaultOptions,J=H.addEvent,t=H.animObject,G=H.arrayMax,L=H.arrayMin,v=H.clamp,K=H.correctFloat,n=H.defined,r=H.erase,C=H.error,I=H.extend,p=H.find,m=H.fireEvent,d=H.getNestedProperty,l=H.isArray,
k=H.isFunction,f=H.isNumber,a=H.isString,A=H.merge,u=H.objectEach,E=H.pick,P=H.removeEvent;q=H.seriesType;var w=H.splat,M=H.syncTimeout;"";var F=g.seriesTypes,Q=g.win;g.Series=q("line",null,{lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",
lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){var a=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},
inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,eventsToUnbind:[],isCartesian:!0,parallelArrays:["x","y"],pointClass:y,requireSorting:!0,sorted:!0,init:function(a,b){m(this,"init",{options:b});var e=this,d=a.series,c;this.eventOptions=this.eventOptions||{};e.chart=a;e.options=b=e.setOptions(b);e.linkedSeries=[];e.bindAxes();I(e,{name:b.name,state:"",visible:!1!==
b.visible,selected:!0===b.selected});var f=b.events;u(f,function(b,a){k(b)&&e.eventOptions[a]!==b&&(k(e.eventOptions[a])&&P(e,a,e.eventOptions[a]),e.eventOptions[a]=b,J(e,a,b))});if(f&&f.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(b){e[b+"Data"]||(e[b+"Data"]=[])});e.isCartesian&&(a.hasCartesianSeries=!0);d.length&&(c=d[d.length-1]);e._i=E(c&&c._i,-1)+1;e.opacity=e.options.opacity;a.orderSeries(this.insert(d));
b.dataSorting&&b.dataSorting.enabled?e.setDataSortingOptions():e.points||e.data||e.setData(b.data,!1);m(this,"afterInit")},is:function(a){return F[a]&&this instanceof F[a]},insert:function(a){var b=this.options.index,e;if(f(b)){for(e=a.length;e--;)if(b>=E(a[e].options.index,a[e]._i)){a.splice(e+1,0,this);break}-1===e&&a.unshift(this);e+=1}else a.push(this);return E(e,a.length-1)},bindAxes:function(){var a=this,b=a.options,d=a.chart,c;m(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(e){d[e].forEach(function(d){c=
d.options;if(b[e]===c.index||"undefined"!==typeof b[e]&&b[e]===c.id||"undefined"===typeof b[e]&&0===c.index)a.insert(d.series),a[e]=d,d.isDirty=!0});a[e]||a.optionalAxis===e||C(18,!0,d)})});m(this,"afterBindAxes")},updateParallelArrays:function(a,b){var e=a.series,d=arguments,c=f(b)?function(d){var c="y"===d&&e.toYData?e.toYData(a):a[d];e[d+"Data"][b]=c}:function(a){Array.prototype[b].apply(e[a+"Data"],Array.prototype.slice.call(d,2))};e.parallelArrays.forEach(c)},hasData:function(){return this.visible&&
"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,d,c=a.pointIntervalUnit,f=this.chart.time;b=E(b,a.pointStart,0);this.pointInterval=d=E(this.pointInterval,a.pointInterval,1);c&&(a=new f.Date(b),"day"===c?f.set("Date",a,f.get("Date",a)+d):"month"===c?f.set("Month",a,f.get("Month",a)+d):"year"===c&&f.set("FullYear",a,f.get("FullYear",a)+d),d=a.getTime()-b);this.xIncrement=
b+d;return b},setDataSortingOptions:function(){var a=this.options;I(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});n(a.pointRange)||(a.pointRange=1)},setOptions:function(a){var b=this.chart,e=b.options,d=e.plotOptions,c=b.userOptions||{};a=A(a);b=b.styledMode;var f={plotOptions:d,userOptions:a};m(this,"setOptions",f);var l=f.plotOptions[this.type],k=c.plotOptions||{};this.userOptions=f.userOptions;c=A(l,d.series,c.plotOptions&&c.plotOptions[this.type],a);this.tooltipOptions=
A(D.tooltip,D.plotOptions.series&&D.plotOptions.series.tooltip,D.plotOptions[this.type].tooltip,e.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=E(a.stickyTracking,k[this.type]&&k[this.type].stickyTracking,k.series&&k.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:c.stickyTracking);null===l.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;e=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||
(d={value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative"},b||(d.color=c.negativeColor,d.fillColor=c.negativeFillColor),e.push(d));e.length&&n(e[e.length-1].value)&&e.push(b?{}:{color:this.color,fillColor:this.fillColor});m(this,"afterSetOptions",{options:c});return c},getName:function(){return E(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,b,d){var e=this.chart,c=this.userOptions,h=a+"Index",f=a+"Counter",l=d?d.length:E(e.options.chart[a+"Count"],
e[a+"Count"]);if(!b){var k=E(c[h],c["_"+h]);n(k)||(e.series.length||(e[f]=0),c["_"+h]=k=e[f]%l,e[f]+=1);d&&(b=d[k])}"undefined"!==typeof k&&(this[h]=k);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||D.plotOptions[this.type].color,this.chart.options.colors)},getPointsCollection:function(){return(this.hasGroupedData?this.points:this.data)||[]},getSymbol:function(){this.getCyclic("symbol",
this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(a,b){var e=a.id,d=a.x,c=this.points,l,k=this.options.dataSorting;if(e)var m=this.chart.get(e);else if(this.linkedParent||this.enabledDataSorting){var g=k&&k.matchByName?"name":"index";m=p(c,function(b){return!b.touched&&b[g]===a[g]});if(!m)return}if(m){var n=m&&m.index;"undefined"!==typeof n&&(l=!0)}"undefined"===typeof n&&f(d)&&(n=this.xData.indexOf(d,b));-1!==n&&"undefined"!==typeof n&&this.cropped&&(n=n>=this.cropStart?
n-this.cropStart:n);!l&&c[n]&&c[n].touched&&(n=void 0);return n},drawLegendSymbol:c.drawLineMarker,updateData:function(a,b){var e=this.options,d=e.dataSorting,c=this.points,l=[],k,m,g,p=this.requireSorting,u=a.length===c.length,w=!0;this.xIncrement=null;a.forEach(function(b,a){var h=n(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{};var m=h.x;if(h.id||f(m)){if(m=this.findPointIndex(h,g),-1===m||"undefined"===typeof m?l.push(b):c[m]&&b!==e.data[m]?(c[m].update(b,!1,null,!1),
c[m].touched=!0,p&&(g=m+1)):c[m]&&(c[m].touched=!0),!u||a!==m||d&&d.enabled||this.hasDerivedData)k=!0}else l.push(b)},this);if(k)for(a=c.length;a--;)(m=c[a])&&!m.touched&&m.remove&&m.remove(!1,b);else!u||d&&d.enabled?w=!1:(a.forEach(function(b,a){c[a].update&&b!==c[a].y&&c[a].update(b,!1,null,!1)}),l.length=0);c.forEach(function(b){b&&(b.touched=!1)});if(!w)return!1;l.forEach(function(b){this.addPoint(b,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=
G(this.xData),this.autoIncrement());return!0},setData:function(e,b,d,c){var h=this,k=h.points,m=k&&k.length||0,g,p=h.options,n=h.chart,u=p.dataSorting,w=null,z=h.xAxis;w=p.turboThreshold;var r=this.xData,q=this.yData,A=(g=h.pointArrayMap)&&g.length,t=p.keys,v=0,F=1,M;e=e||[];g=e.length;b=E(b,!0);u&&u.enabled&&(e=this.sortData(e));!1!==c&&g&&m&&!h.cropped&&!h.hasGroupedData&&h.visible&&!h.isSeriesBoosting&&(M=this.updateData(e,d));if(!M){h.xIncrement=null;h.colorCounter=0;this.parallelArrays.forEach(function(b){h[b+
"Data"].length=0});if(w&&g>w)if(w=h.getFirstValidPoint(e),f(w))for(d=0;d<g;d++)r[d]=this.autoIncrement(),q[d]=e[d];else if(l(w))if(A)for(d=0;d<g;d++)c=e[d],r[d]=c[0],q[d]=c.slice(1,A+1);else for(t&&(v=t.indexOf("x"),F=t.indexOf("y"),v=0<=v?v:0,F=0<=F?F:1),d=0;d<g;d++)c=e[d],r[d]=c[v],q[d]=c[F];else C(12,!1,n);else for(d=0;d<g;d++)"undefined"!==typeof e[d]&&(c={series:h},h.pointClass.prototype.applyOptions.apply(c,[e[d]]),h.updateParallelArrays(c,d));q&&a(q[0])&&C(14,!0,n);h.data=[];h.options.data=
h.userOptions.data=e;for(d=m;d--;)k[d]&&k[d].destroy&&k[d].destroy();z&&(z.minRange=z.userMinRange);h.isDirty=n.isDirtyBox=!0;h.isDirtyData=!!k;d=!1}"point"===p.legendType&&(this.processData(),this.generatePoints());b&&n.redraw(d)},sortData:function(a){var b=this,e=b.options.dataSorting.sortKey||"y",c=function(b,a){return n(a)&&b.pointClass.prototype.optionsToObject.call({series:b},a)||{}};a.forEach(function(e,d){a[d]=c(b,e);a[d].index=d},this);a.concat().sort(function(b,a){b=d(e,b);a=d(e,a);return a<
b?-1:a>b?1:0}).forEach(function(b,a){b.x=a},this);b.linkedSeries&&b.linkedSeries.forEach(function(b){var e=b.options,d=e.data;e.dataSorting&&e.dataSorting.enabled||!d||(d.forEach(function(e,h){d[h]=c(b,e);a[h]&&(d[h].x=a[h].x,d[h].index=h)}),b.setData(d,!1))});return a},getProcessedData:function(a){var b=this.xData,e=this.yData,d=b.length;var c=0;var f=this.xAxis,l=this.options;var k=l.cropThreshold;var m=a||this.getExtremesFromAll||l.getExtremesFromAll,g=this.isCartesian;a=f&&f.val2lin;l=!(!f||!f.logarithmic);
var p=this.requireSorting;if(f){f=f.getExtremes();var n=f.min;var w=f.max}if(g&&this.sorted&&!m&&(!k||d>k||this.forceCrop))if(b[d-1]<n||b[0]>w)b=[],e=[];else if(this.yData&&(b[0]<n||b[d-1]>w)){c=this.cropData(this.xData,this.yData,n,w);b=c.xData;e=c.yData;c=c.start;var u=!0}for(k=b.length||1;--k;)if(d=l?a(b[k])-a(b[k-1]):b[k]-b[k-1],0<d&&("undefined"===typeof r||d<r))var r=d;else 0>d&&p&&(C(15,!1,this.chart),p=!1);return{xData:b,yData:e,cropped:u,cropStart:c,closestPointRange:r}},processData:function(a){var b=
this.xAxis;if(this.isCartesian&&!this.isDirty&&!b.isDirty&&!this.yAxis.isDirty&&!a)return!1;a=this.getProcessedData();this.cropped=a.cropped;this.cropStart=a.cropStart;this.processedXData=a.xData;this.processedYData=a.yData;this.closestPointRange=this.basePointRange=a.closestPointRange},cropData:function(a,b,d,c,f){var e=a.length,h=0,k=e,l;f=E(f,this.cropShoulder);for(l=0;l<e;l++)if(a[l]>=d){h=Math.max(0,l-f);break}for(d=l;d<e;d++)if(a[d]>c){k=d+f;break}return{xData:a.slice(h,k),yData:b.slice(h,k),
start:h,end:k}},generatePoints:function(){var a=this.options,b=a.data,d=this.data,c,f=this.processedXData,k=this.processedYData,l=this.pointClass,g=f.length,p=this.cropStart||0,n=this.hasGroupedData;a=a.keys;var u=[],r;d||n||(d=[],d.length=b.length,d=this.data=d);a&&n&&(this.options.keys=!1);for(r=0;r<g;r++){var q=p+r;if(n){var A=(new l).init(this,[f[r]].concat(w(k[r])));A.dataGroup=this.groupMap[r];A.dataGroup.options&&(A.options=A.dataGroup.options,I(A,A.dataGroup.options),delete A.dataLabels)}else(A=
d[q])||"undefined"===typeof b[q]||(d[q]=A=(new l).init(this,b[q],f[r]));A&&(A.index=q,u[r]=A)}this.options.keys=a;if(d&&(g!==(c=d.length)||n))for(r=0;r<c;r++)r!==p||n||(r+=g),d[r]&&(d[r].destroyElements(),d[r].plotX=void 0);this.data=d;this.points=u;m(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:L(a),max:G(a)}},getExtremes:function(a,b){var d=this.xAxis,e=this.yAxis,c=this.processedXData||this.xData,k=[],g=0,p=0;var n=0;var w=this.requireSorting?this.cropShoulder:0,u=e?e.positiveValuesOnly:
!1,r;a=a||this.stackedYData||this.processedYData||[];e=a.length;d&&(n=d.getExtremes(),p=n.min,n=n.max);for(r=0;r<e;r++){var q=c[r];var A=a[r];var t=(f(A)||l(A))&&(A.length||0<A||!u);q=b||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!d||(c[r+w]||q)>=p&&(c[r-w]||q)<=n;if(t&&q)if(t=A.length)for(;t--;)f(A[t])&&(k[g++]=A[t]);else k[g++]=A}a={dataMin:L(k),dataMax:G(k)};m(this,"afterGetExtremes",{dataExtremes:a});return a},applyExtremes:function(){var a=this.getExtremes();this.dataMin=
a.dataMin;this.dataMax=a.dataMax;return a},getFirstValidPoint:function(a){for(var b=null,d=a.length,e=0;null===b&&e<d;)b=a[e],e++;return b},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,c=d.categories,k=this.enabledDataSorting,g=this.yAxis,p=this.points,w=p.length,u=!!this.modifyValue,r,q=this.pointPlacementToXValue(),A=!!q,t=a.threshold,C=a.startFromThreshold?t:0,F,M=this.zoneAxis||"y",y=Number.MAX_VALUE;for(r=0;r<
w;r++){var I=p[r],D=I.x,B=I.y,G=I.low,P=b&&g.stacking&&g.stacking.stacks[(this.negStacks&&B<(C?0:t)?"-":"")+this.stackKey];g.positiveValuesOnly&&null!==B&&0>=B&&(I.isNull=!0);I.plotX=F=K(v(d.translate(D,0,0,0,1,q,"flags"===this.type),-1E5,1E5));if(b&&this.visible&&P&&P[D]){var H=this.getStackIndicator(H,D,this.index);if(!I.isNull){var Q=P[D];var J=Q.points[H.key]}}l(J)&&(G=J[0],B=J[1],G===C&&H.key===P[D].base&&(G=E(f(t)&&t,g.min)),g.positiveValuesOnly&&0>=G&&(G=null),I.total=I.stackTotal=Q.total,
I.percentage=Q.total&&I.y/Q.total*100,I.stackY=B,this.irregularWidths||Q.setOffset(this.pointXOffset||0,this.barW||0));I.yBottom=n(G)?v(g.translate(G,0,1,0,1),-1E5,1E5):null;u&&(B=this.modifyValue(B,I));I.plotY="number"===typeof B&&Infinity!==B?v(g.translate(B,0,1,0,1),-1E5,1E5):void 0;I.isInside=this.isPointInside(I);I.clientX=A?K(d.translate(D,0,0,0,1,q)):F;I.negative=I[M]<(a[M+"Threshold"]||t||0);I.category=c&&"undefined"!==typeof c[I.x]?c[I.x]:I.x;if(!I.isNull&&!1!==I.visible){"undefined"!==typeof L&&
(y=Math.min(y,Math.abs(F-L)));var L=F}I.zone=this.zones.length&&I.getZone();!I.graphic&&this.group&&k&&(I.isNew=!0)}this.closestPointRangePx=y;m(this,"afterTranslate")},getValidPoints:function(a,b,d){var e=this.chart;return(a||this.points||[]).filter(function(a){return b&&!e.isInsidePlot(a.plotX,a.plotY,e.inverted)?!1:!1!==a.visible&&(d||!a.isNull)})},getClipBox:function(a,b){var d=this.options,e=this.chart,c=e.inverted,f=this.xAxis,k=f&&this.yAxis,l=e.options.chart.scrollablePlotArea||{};a&&!1===
d.clip&&k?a=c?{y:-e.chartWidth+k.len+k.pos,height:e.chartWidth,width:e.chartHeight,x:-e.chartHeight+f.len+f.pos}:{y:-k.pos,height:e.chartHeight,width:e.chartWidth,x:-f.pos}:(a=this.clipBox||e.clipBox,b&&(a.width=e.plotSizeX,a.x=(e.scrollablePixelsX||0)*(l.scrollPositionX||0)));return b?{width:a.width,x:a.x}:a},setClip:function(a){var b=this.chart,d=this.options,e=b.renderer,c=b.inverted,f=this.clipBox,k=this.getClipBox(a),l=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,k.height,d.xAxis,
d.yAxis].join(),m=b[l],g=b[l+"m"];a&&(k.width=0,c&&(k.x=b.plotHeight+(!1!==d.clip?0:b.plotTop)));m?b.hasLoaded||m.attr(k):(a&&(b[l+"m"]=g=e.clipRect(c?b.plotSizeX+99:-99,c?-b.plotLeft:-b.plotTop,99,c?b.chartWidth:b.chartHeight)),b[l]=m=e.clipRect(k),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);if(!1!==d.clip||a)this.group.clip(a||f?m:b.clipRect),this.markerGroup.clip(g),this.sharedClipKey=l;a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),
0===m.count.length&&l&&b[l]&&(f||(b[l]=b[l].destroy()),b[l+"m"]&&(b[l+"m"]=b[l+"m"].destroy())))},animate:function(a){var b=this.chart,d=t(this.options.animation);if(!b.hasRendered)if(a)this.setClip(d);else{var e=this.sharedClipKey;a=b[e];var c=this.getClipBox(d,!0);a&&a.animate(c,d);b[e+"m"]&&b[e+"m"].animate({width:c.width+99,x:c.x-(b.inverted?0:99)},d)}},afterAnimate:function(){this.setClip();m(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,
d,c,f=this.options.marker,k=this[this.specialGroup]||this.markerGroup,l=this.xAxis,m=E(f.enabled,!l||l.isRadial?!0:null,this.closestPointRangePx>=f.enabledThreshold*f.radius);if(!1!==f.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++){var g=a[d];var p=(c=g.graphic)?"animate":"attr";var n=g.marker||{};var w=!!g.marker;if((m&&"undefined"===typeof n.enabled||n.enabled)&&!g.isNull&&!1!==g.visible){var u=E(n.symbol,this.symbol);var r=this.markerAttribs(g,g.selected&&"select");this.enabledDataSorting&&
(g.startXPos=l.reversed?-r.width:l.width);var q=!1!==g.isInside;c?c[q?"show":"hide"](q).animate(r):q&&(0<r.width||g.hasImage)&&(g.graphic=c=b.renderer.symbol(u,r.x,r.y,r.width,r.height,w?n:f).add(k),this.enabledDataSorting&&b.hasRendered&&(c.attr({x:g.startXPos}),p="animate"));c&&"animate"===p&&c[q?"show":"hide"](q).animate(r);if(c&&!b.styledMode)c[p](this.pointAttribs(g,g.selected&&"select"));c&&c.addClass(g.getClassName(),!0)}else c&&(g.graphic=c.destroy())}},markerAttribs:function(a,b){var d=this.options,
e=d.marker,c=a.marker||{},f=c.symbol||e.symbol,k=E(c.radius,e.radius);b&&(e=e.states[b],b=c.states&&c.states[b],k=E(b&&b.radius,e&&e.radius,k+(e&&e.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(k=0);a={x:d.crisp?Math.floor(a.plotX)-k:a.plotX-k,y:a.plotY-k};k&&(a.width=a.height=2*k);return a},pointAttribs:function(a,b){var d=this.options.marker,e=a&&a.options,c=e&&e.marker||{},f=this.color,k=e&&e.color,l=a&&a.color;e=E(c.lineWidth,d.lineWidth);var m=a&&a.zone&&a.zone.color;a=1;f=
k||m||l||f;k=c.fillColor||d.fillColor||f;f=c.lineColor||d.lineColor||f;b=b||"normal";d=d.states[b];b=c.states&&c.states[b]||{};e=E(b.lineWidth,d.lineWidth,e+E(b.lineWidthPlus,d.lineWidthPlus,0));k=b.fillColor||d.fillColor||k;f=b.lineColor||d.lineColor||f;a=E(b.opacity,d.opacity,a);return{stroke:f,"stroke-width":e,fill:k,opacity:a}},destroy:function(a){var b=this,d=b.chart,e=/AppleWebKit\/533/.test(Q.navigator.userAgent),c,f,k=b.data||[],l,g;m(b,"destroy");this.removeEvents(a);(b.axisTypes||[]).forEach(function(a){(g=
b[a])&&g.series&&(r(g.series,b),g.isDirty=g.forceRedraw=!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(f=k.length;f--;)(l=k[f])&&l.destroy&&l.destroy();b.points=null;H.clearTimeout(b.animationTimeout);u(b,function(b,a){b instanceof B&&!b.survive&&(c=e&&"group"===a?"hide":"destroy",b[c]())});d.hoverSeries===b&&(d.hoverSeries=null);r(d.series,b);d.orderSeries();u(b,function(d,e){a&&"hcEvents"===e||delete b[e]})},getGraphPath:function(a,b,d){var e=this,c=e.options,f=c.step,h,k=[],l=[],m;a=a||
e.points;(h=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&h&&(f=4-f);a=this.getValidPoints(a,!1,!(c.connectNulls&&!b&&!d));a.forEach(function(h,g){var p=h.plotX,r=h.plotY,w=a[g-1];(h.leftCliff||w&&w.rightCliff)&&!d&&(m=!0);h.isNull&&!n(b)&&0<g?m=!c.connectNulls:h.isNull&&!b?m=!0:(0===g||m?g=[["M",h.plotX,h.plotY]]:e.getPointSpline?g=[e.getPointSpline(a,h,g)]:f?(g=1===f?[["L",w.plotX,r]]:2===f?[["L",(w.plotX+p)/2,w.plotY],["L",(w.plotX+p)/2,r]]:[["L",p,w.plotY]],g.push(["L",p,r])):g=[["L",
p,r]],l.push(h.x),f&&(l.push(h.x),2===f&&l.push(h.x)),k.push.apply(k,g),m=!1)});k.xMap=l;return e.graphPath=k},drawGraph:function(){var a=this,b=this.options,d=(this.gappedPath||this.getGraphPath).call(this),c=this.chart.styledMode,f=[["graph","highcharts-graph"]];c||f[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);f=a.getZonesGraphs(f);f.forEach(function(e,f){var h=e[0],k=a[h],l=k?"animate":"attr";k?(k.endX=a.preventGraphAnimation?null:d.xMap,k.animate({d:d})):d.length&&(a[h]=k=a.chart.renderer.path(d).addClass(e[1]).attr({zIndex:1}).add(a.group));
k&&!c&&(h={stroke:e[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},e[3]?h.dashstyle=e[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),k[l](h).shadow(2>f&&b.shadow));k&&(k.startX=d.xMap,k.isArea=d.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,d){d=["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(b.className||"")];this.chart.styledMode||d.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(d)},this);
return a},applyZones:function(){var a=this,b=this.chart,d=b.renderer,c=this.zones,f,k,l=this.clips||[],m,g=this.graph,p=this.area,n=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],w=b.inverted,u,q,A,t=!1,C,F;if(c.length&&(g||p)&&r&&"undefined"!==typeof r.min){var M=r.reversed;var I=r.horiz;g&&!this.showLine&&g.hide();p&&p.hide();var y=r.getExtremes();c.forEach(function(e,c){f=M?I?b.plotWidth:0:I?0:r.toPixels(y.min)||0;f=v(E(k,f),0,n);k=v(Math.round(r.toPixels(E(e.value,y.max),
!0)||0),0,n);t&&(f=k=r.toPixels(y.max));u=Math.abs(f-k);q=Math.min(f,k);A=Math.max(f,k);r.isXAxis?(m={x:w?A:q,y:0,width:u,height:n},I||(m.x=b.plotHeight-m.x)):(m={x:0,y:w?A:q,width:n,height:u},I&&(m.y=b.plotWidth-m.y));w&&d.isVML&&(m=r.isXAxis?{x:0,y:M?q:A,height:m.width,width:b.chartWidth}:{x:m.y-b.plotLeft-b.spacingBox.x,y:0,width:m.height,height:b.chartHeight});l[c]?l[c].animate(m):l[c]=d.clipRect(m);C=a["zone-area-"+c];F=a["zone-graph-"+c];g&&F&&F.clip(l[c]);p&&C&&C.clip(l[c]);t=e.value>y.max;
a.resetZones&&0===k&&(k=void 0)});this.clips=l}else a.visible&&(g&&g.show(!0),p&&p.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){d[b]&&(e.renderer.isVML&&d[b].attr({width:d.yAxis.len,height:d.xAxis.len}),d[b].width=d.yAxis.len,d[b].height=d.xAxis.len,d[b].invert(d.isRadialSeries?!1:a))})}var d=this,e=d.chart;d.xAxis&&(d.eventsToUnbind.push(J(e,"resize",b)),b(),d.invertGroups=b)},plotGroup:function(a,b,d,c,f){var e=this[a],h=!e;d={visibility:d,zIndex:c||
.1};"undefined"===typeof this.opacity||this.chart.styledMode||(d.opacity=this.opacity);h&&(this[a]=e=this.chart.renderer.g().add(f));e.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(n(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);e.attr(d)[h?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,d=this.yAxis;
a.inverted&&(b=d,d=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:d?d.top:a.plotTop,scaleX:1,scaleY:1}},removeEvents:function(a){a?this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(b){b()}),this.eventsToUnbind.length=0):P(this)},render:function(){var a=this,b=a.chart,d=a.options,c=!a.finishedAnimating&&b.renderer.isSVG&&t(d.animation).duration,f=a.visible?"inherit":"hidden",k=d.zIndex,l=a.hasRendered,g=b.seriesGroup,p=b.inverted;m(this,"render");var n=a.plotGroup("group",
"series",f,k,g);a.markerGroup=a.plotGroup("markerGroup","markers",f,k,g);c&&a.animate&&a.animate(!0);n.inverted=a.isCartesian||a.invertable?p:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(p);!1===d.clip||a.sharedClipKey||l||n.clip(b.clipRect);c&&a.animate&&a.animate();l||(a.animationTimeout=M(function(){a.afterAnimate()},
c||0));a.isDirty=!1;a.hasRendered=!0;m(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,d=this.group,c=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:E(c&&c.left,a.plotLeft),translateY:E(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var d=this.xAxis,e=this.yAxis,c=this.chart.inverted;return this.searchKDTree({clientX:c?
d.len-a.chartY+d.pos:a.chartX-d.pos,plotY:c?e.len-a.chartX+e.pos:a.chartY-e.pos},b,a)},buildKDTree:function(a){function b(a,e,c){var f;if(f=a&&a.length){var h=d.kdAxisArray[e%c];a.sort(function(a,b){return a[h]-b[h]});f=Math.floor(f/2);return{point:a[f],left:b(a.slice(0,f),e+1,c),right:b(a.slice(f+1),e+1,c)}}}this.buildingKdTree=!0;var d=this,e=-1<d.options.findNearestPointBy.indexOf("y")?2:1;delete d.kdTree;M(function(){d.kdTree=b(d.getValidPoints(null,!d.directTouch),e,e);d.buildingKdTree=!1},d.options.kdNow||
a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,d){function e(a,b,d,l){var m=b.point,g=c.kdAxisArray[d%l],p=m;var r=n(a[f])&&n(m[f])?Math.pow(a[f]-m[f],2):null;var w=n(a[h])&&n(m[h])?Math.pow(a[h]-m[h],2):null;w=(r||0)+(w||0);m.dist=n(w)?Math.sqrt(w):Number.MAX_VALUE;m.distX=n(r)?Math.sqrt(r):Number.MAX_VALUE;g=a[g]-m[g];w=0>g?"left":"right";r=0>g?"right":"left";b[w]&&(w=e(a,b[w],d+1,l),p=w[k]<p[k]?w:m);b[r]&&Math.sqrt(g*g)<p[k]&&(a=e(a,b[r],d+1,l),p=a[k]<p[k]?a:p);return p}var c=this,f=
this.kdAxisArray[0],h=this.kdAxisArray[1],k=b?"distX":"dist";b=-1<c.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(d);if(this.kdTree)return e(a,this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options,b=a.pointRange,d=this.xAxis;a=a.pointPlacement;"between"===a&&(a=d.reversed?-.5:.5);return f(a)?a*E(b,d.pointRange):0},isPointInside:function(a){return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=this.yAxis.len&&
0<=a.plotX&&a.plotX<=this.xAxis.len}});""});O(q,"parts/Stacking.js",[q["parts/Axis.js"],q["parts/Chart.js"],q["parts/Globals.js"],q["parts/StackingAxis.js"],q["parts/Utilities.js"]],function(g,c,q,y,B){var H=B.correctFloat,D=B.defined,J=B.destroyObjectProperties,t=B.format,G=B.isNumber,L=B.pick;"";var v=q.Series,K=function(){function c(c,g,n,p,m){var d=c.chart.inverted;this.axis=c;this.isNegative=n;this.options=g=g||{};this.x=p;this.total=null;this.points={};this.hasValidPoints=!1;this.stack=m;this.rightCliff=
this.leftCliff=0;this.alignOptions={align:g.align||(d?n?"left":"right":"center"),verticalAlign:g.verticalAlign||(d?"middle":n?"bottom":"top"),y:g.y,x:g.x};this.textAlign=g.textAlign||(d?n?"right":"left":"center")}c.prototype.destroy=function(){J(this,this.axis)};c.prototype.render=function(c){var g=this.axis.chart,n=this.options,p=n.format;p=p?t(p,this,g):n.formatter.call(this);this.label?this.label.attr({text:p,visibility:"hidden"}):(this.label=g.renderer.label(p,null,null,n.shape,null,null,n.useHTML,
!1,"stack-labels"),p={r:n.borderRadius||0,text:p,rotation:n.rotation,padding:L(n.padding,5),visibility:"hidden"},g.styledMode||(p.fill=n.backgroundColor,p.stroke=n.borderColor,p["stroke-width"]=n.borderWidth,this.label.css(n.style)),this.label.attr(p),this.label.added||this.label.add(c));this.label.labelrank=g.plotHeight};c.prototype.setOffset=function(c,g,n,p,m){var d=this.axis,l=d.chart;p=d.translate(d.stacking.usePercentage?100:p?p:this.total,0,0,0,1);n=d.translate(n?n:0);n=D(p)&&Math.abs(p-n);
c=L(m,l.xAxis[0].translate(this.x))+c;d=D(p)&&this.getStackBox(l,this,c,p,g,n,d);g=this.label;n=this.isNegative;c="justify"===L(this.options.overflow,"justify");var k=this.textAlign;g&&d&&(m=g.getBBox(),p=g.padding,k="left"===k?l.inverted?-p:p:"right"===k?m.width:l.inverted&&"center"===k?m.width/2:l.inverted?n?m.width+p:-p:m.width/2,n=l.inverted?m.height/2:n?-p:m.height,this.alignOptions.x=L(this.options.x,0),this.alignOptions.y=L(this.options.y,0),d.x-=k,d.y-=n,g.align(this.alignOptions,null,d),
l.isInsidePlot(g.alignAttr.x+k-this.alignOptions.x,g.alignAttr.y+n-this.alignOptions.y)?g.show():(g.alignAttr.y=-9999,c=!1),c&&v.prototype.justifyDataLabel.call(this.axis,g,this.alignOptions,g.alignAttr,m,d),g.attr({x:g.alignAttr.x,y:g.alignAttr.y}),L(!c&&this.options.crop,!0)&&((l=G(g.x)&&G(g.y)&&l.isInsidePlot(g.x-p+g.width,g.y)&&l.isInsidePlot(g.x+p,g.y))||g.hide()))};c.prototype.getStackBox=function(c,g,n,p,m,d,l){var k=g.axis.reversed,f=c.inverted,a=l.height+l.pos-(f?c.plotLeft:c.plotTop);g=
g.isNegative&&!k||!g.isNegative&&k;return{x:f?g?p-l.right:p-d+l.pos-c.plotLeft:n+c.xAxis[0].transB-c.plotLeft,y:f?l.height-n-m:g?a-p-d:a-p,width:f?d:m,height:f?m:d}};return c}();c.prototype.getStacks=function(){var c=this,g=c.inverted;c.yAxis.forEach(function(c){c.stacking&&c.stacking.stacks&&c.hasVisibleSeries&&(c.stacking.oldStacks=c.stacking.stacks)});c.series.forEach(function(n){var r=n.xAxis&&n.xAxis.options||{};!n.options.stacking||!0!==n.visible&&!1!==c.options.chart.ignoreHiddenSeries||(n.stackKey=
[n.type,L(n.options.stack,""),g?r.top:r.left,g?r.height:r.width].join())})};y.compose(g);v.prototype.setGroupedPoints=function(){this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length&&v.prototype.setStackedPoints.call(this,"group")};v.prototype.setStackedPoints=function(c){var g=c||this.options.stacking;if(g&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var n=this.processedXData,q=this.processedYData,
p=[],m=q.length,d=this.options,l=d.threshold,k=L(d.startFromThreshold&&l,0);d=d.stack;c=c?this.type+","+g:this.stackKey;var f="-"+c,a=this.negStacks,A=this.yAxis,u=A.stacking.stacks,t=A.stacking.oldStacks,v,w;A.stacking.stacksTouched+=1;for(w=0;w<m;w++){var M=n[w];var F=q[w];var y=this.getStackIndicator(y,M,this.index);var e=y.key;var b=(v=a&&F<(k?0:l))?f:c;u[b]||(u[b]={});u[b][M]||(t[b]&&t[b][M]?(u[b][M]=t[b][M],u[b][M].total=null):u[b][M]=new K(A,A.options.stackLabels,v,M,d));b=u[b][M];null!==F?
(b.points[e]=b.points[this.index]=[L(b.cumulative,k)],D(b.cumulative)||(b.base=e),b.touched=A.stacking.stacksTouched,0<y.index&&!1===this.singleStacks&&(b.points[e][0]=b.points[this.index+","+M+",0"][0])):b.points[e]=b.points[this.index]=null;"percent"===g?(v=v?c:f,a&&u[v]&&u[v][M]?(v=u[v][M],b.total=v.total=Math.max(v.total,b.total)+Math.abs(F)||0):b.total=H(b.total+(Math.abs(F)||0))):"group"===g?null!==F&&(b.total=(b.total||0)+1):b.total=H(b.total+(F||0));b.cumulative="group"===g?(b.total||1)-1:
L(b.cumulative,k)+(F||0);null!==F&&(b.points[e].push(b.cumulative),p[w]=b.cumulative,b.hasValidPoints=!0)}"percent"===g&&(A.stacking.usePercentage=!0);"group"!==g&&(this.stackedYData=p);A.stacking.oldStacks={}}};v.prototype.modifyStacks=function(){var c=this,g=c.stackKey,q=c.yAxis.stacking.stacks,t=c.processedXData,p,m=c.options.stacking;c[m+"Stacker"]&&[g,"-"+g].forEach(function(d){for(var l=t.length,k,f;l--;)if(k=t[l],p=c.getStackIndicator(p,k,c.index,d),f=(k=q[d]&&q[d][k])&&k.points[p.key])c[m+
"Stacker"](f,k,l)})};v.prototype.percentStacker=function(c,g,q){g=g.total?100/g.total:0;c[0]=H(c[0]*g);c[1]=H(c[1]*g);this.stackedYData[q]=c[1]};v.prototype.getStackIndicator=function(c,g,q,t){!D(c)||c.x!==g||t&&c.key!==t?c={x:g,index:0,key:t}:c.index++;c.key=[q,g,c.index].join();return c};q.StackItem=K;return q.StackItem});O(q,"parts/Dynamics.js",[q["parts/Axis.js"],q["parts/Chart.js"],q["parts/Globals.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/Time.js"],q["parts/Utilities.js"]],function(g,
c,q,y,B,H,D){var J=y.time,t=D.addEvent,G=D.animate,L=D.createElement,v=D.css,K=D.defined,n=D.erase,r=D.error,C=D.extend,I=D.fireEvent,p=D.isArray,m=D.isNumber,d=D.isObject,l=D.isString,k=D.merge,f=D.objectEach,a=D.pick,A=D.relativeLength,u=D.setAnimation,E=D.splat;y=q.Series;var P=q.seriesTypes;q.cleanRecursively=function(a,c){var k={};f(a,function(f,e){if(d(a[e],!0)&&!a.nodeType&&c[e])f=q.cleanRecursively(a[e],c[e]),Object.keys(f).length&&(k[e]=f);else if(d(a[e])||a[e]!==c[e])k[e]=a[e]});return k};
C(c.prototype,{addSeries:function(d,c,f){var k,e=this;d&&(c=a(c,!0),I(e,"addSeries",{options:d},function(){k=e.initSeries(d);e.isDirtyLegend=!0;e.linkSeries();k.enabledDataSorting&&k.setData(d.data,!1);I(e,"afterAddSeries",{series:k});c&&e.redraw(f)}));return k},addAxis:function(a,d,c,f){return this.createAxis(d?"xAxis":"yAxis",{axis:a,redraw:c,animation:f})},addColorAxis:function(a,d,c){return this.createAxis("colorAxis",{axis:a,redraw:d,animation:c})},createAxis:function(d,c){var f=this.options,
l="colorAxis"===d,e=c.redraw,b=c.animation;c=k(c.axis,{index:this[d].length,isX:"xAxis"===d});var h=l?new q.ColorAxis(this,c):new g(this,c);f[d]=E(f[d]||{});f[d].push(c);l&&(this.isDirtyLegend=!0,this.axes.forEach(function(a){a.series=[]}),this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0}));a(e,!0)&&this.redraw(b);return h},showLoading:function(d){var c=this,f=c.options,k=c.loadingDiv,e=f.loading,b=function(){k&&v(k,{left:c.plotLeft+"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+
"px"})};k||(c.loadingDiv=k=L("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container),c.loadingSpan=L("span",{className:"highcharts-loading-inner"},null,k),t(c,"redraw",b));k.className="highcharts-loading";c.loadingSpan.innerHTML=a(d,f.lang.loading,"");c.styledMode||(v(k,C(e.style,{zIndex:10})),v(c.loadingSpan,e.labelStyle),c.loadingShown||(v(k,{opacity:0,display:""}),G(k,{opacity:e.style.opacity||.5},{duration:e.showDuration||0})));c.loadingShown=!0;b()},hideLoading:function(){var a=
this.options,d=this.loadingDiv;d&&(d.className="highcharts-loading highcharts-loading-hidden",this.styledMode||G(d,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){v(d,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:["xAxis","yAxis","zAxis","series"],update:function(d,c,g,p){var e=this,b={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},h,n,u,r=d.isResponsiveOptions,w=[];I(e,"update",{options:d});r||e.setResponsive(!1,!0);d=q.cleanRecursively(d,e.options);k(!0,e.userOptions,d);if(h=d.chart){k(!0,e.options.chart,h);"className"in
h&&e.setClassName(h.className);"reflow"in h&&e.setReflow(h.reflow);if("inverted"in h||"polar"in h||"type"in h){e.propFromSeries();var t=!0}"alignTicks"in h&&(t=!0);f(h,function(a,b){-1!==e.propsRequireUpdateSeries.indexOf("chart."+b)&&(n=!0);-1!==e.propsRequireDirtyBox.indexOf(b)&&(e.isDirtyBox=!0);-1!==e.propsRequireReflow.indexOf(b)&&(r?e.isDirtyBox=!0:u=!0)});!e.styledMode&&"style"in h&&e.renderer.setStyle(h.style)}!e.styledMode&&d.colors&&(this.options.colors=d.colors);d.plotOptions&&k(!0,this.options.plotOptions,
d.plotOptions);d.time&&this.time===J&&(this.time=new H(d.time));f(d,function(a,d){if(e[d]&&"function"===typeof e[d].update)e[d].update(a,!1);else if("function"===typeof e[b[d]])e[b[d]](a);"chart"!==d&&-1!==e.propsRequireUpdateSeries.indexOf(d)&&(n=!0)});this.collectionsWithUpdate.forEach(function(b){if(d[b]){if("series"===b){var c=[];e[b].forEach(function(b,d){b.options.isInternal||c.push(a(b.options.index,d))})}E(d[b]).forEach(function(a,d){var f=K(a.id),h;f&&(h=e.get(a.id));h||(h=e[b][c?c[d]:d])&&
f&&K(h.options.id)&&(h=void 0);h&&h.coll===b&&(h.update(a,!1),g&&(h.touched=!0));!h&&g&&e.collectionsWithInit[b]&&(e.collectionsWithInit[b][0].apply(e,[a].concat(e.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});g&&e[b].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:w.push(a)})}});w.forEach(function(a){a.remove&&a.remove(!1)});t&&e.axes.forEach(function(a){a.update({},!1)});n&&e.getSeriesOrderByLinks().forEach(function(a){a.chart&&a.update({},!1)},this);d.loading&&
k(!0,e.options.loading,d.loading);t=h&&h.width;h=h&&h.height;l(h)&&(h=A(h,t||e.chartWidth));u||m(t)&&t!==e.chartWidth||m(h)&&h!==e.chartHeight?e.setSize(t,h,p):a(c,!0)&&e.redraw(p);I(e,"afterUpdate",{options:d,redraw:c,animation:p})},setSubtitle:function(a,d){this.applyDescription("subtitle",a);this.layOutTitles(d)},setCaption:function(a,d){this.applyDescription("caption",a);this.layOutTitles(d)}});c.prototype.collectionsWithInit={xAxis:[c.prototype.addAxis,[!0]],yAxis:[c.prototype.addAxis,[!1]],
series:[c.prototype.addSeries]};C(B.prototype,{update:function(c,f,k,l){function e(){b.applyOptions(c);var e=g&&b.hasDummyGraphic;e=null===b.y?!e:e;g&&e&&(b.graphic=g.destroy(),delete b.hasDummyGraphic);d(c,!0)&&(g&&g.element&&c&&c.marker&&"undefined"!==typeof c.marker.symbol&&(b.graphic=g.destroy()),c&&c.dataLabels&&b.dataLabel&&(b.dataLabel=b.dataLabel.destroy()),b.connector&&(b.connector=b.connector.destroy()));m=b.index;h.updateParallelArrays(b,m);n.data[m]=d(n.data[m],!0)||d(c,!0)?b.options:
a(c,n.data[m]);h.isDirty=h.isDirtyData=!0;!h.fixedBox&&h.hasCartesianSeries&&(p.isDirtyBox=!0);"point"===n.legendType&&(p.isDirtyLegend=!0);f&&p.redraw(k)}var b=this,h=b.series,g=b.graphic,m,p=h.chart,n=h.options;f=a(f,!0);!1===l?e():b.firePointEvent("update",{options:c},e)},remove:function(a,d){this.series.removePoint(this.series.data.indexOf(this),a,d)}});C(y.prototype,{addPoint:function(d,c,f,k,e){var b=this.options,h=this.data,l=this.chart,g=this.xAxis;g=g&&g.hasNames&&g.names;var m=b.data,p=
this.xData,n;c=a(c,!0);var u={series:this};this.pointClass.prototype.applyOptions.apply(u,[d]);var r=u.x;var w=p.length;if(this.requireSorting&&r<p[w-1])for(n=!0;w&&p[w-1]>r;)w--;this.updateParallelArrays(u,"splice",w,0,0);this.updateParallelArrays(u,w);g&&u.name&&(g[r]=u.name);m.splice(w,0,d);n&&(this.data.splice(w,0,null),this.processData());"point"===b.legendType&&this.generatePoints();f&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(u,"shift"),m.shift()));!1!==e&&I(this,
"addPoint",{point:u});this.isDirtyData=this.isDirty=!0;c&&l.redraw(k)},removePoint:function(d,c,f){var k=this,e=k.data,b=e[d],h=k.points,l=k.chart,g=function(){h&&h.length===e.length&&h.splice(d,1);e.splice(d,1);k.options.data.splice(d,1);k.updateParallelArrays(b||{series:k},"splice",d,1);b&&b.destroy();k.isDirty=!0;k.isDirtyData=!0;c&&l.redraw()};u(f,l);c=a(c,!0);b?b.firePointEvent("remove",null,g):g()},remove:function(d,c,f,k){function e(){b.destroy(k);b.remove=null;h.isDirtyLegend=h.isDirtyBox=
!0;h.linkSeries();a(d,!0)&&h.redraw(c)}var b=this,h=b.chart;!1!==f?I(b,"remove",null,e):e()},update:function(d,c){d=q.cleanRecursively(d,this.userOptions);I(this,"update",{options:d});var f=this,l=f.chart,e=f.userOptions,b=f.initialType||f.type,h=d.type||e.type||l.options.chart.type,g=!(this.hasDerivedData||d.dataGrouping||h&&h!==this.type||"undefined"!==typeof d.pointStart||d.pointInterval||d.pointIntervalUnit||d.keys),m=P[b].prototype,p,n=["eventOptions","navigatorSeries","baseSeries"],u=f.finishedAnimating&&
{animation:!1},w={};g&&(n.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==d.visible&&n.push("area","graph"),f.parallelArrays.forEach(function(a){n.push(a+"Data")}),d.data&&(d.dataSorting&&C(f.options.dataSorting,d.dataSorting),this.setData(d.data,!1)));d=k(e,u,{index:"undefined"===typeof e.index?f.index:e.index,pointStart:a(e.pointStart,f.xData[0])},!g&&{data:f.options.data},
d);g&&d.data&&(d.data=f.options.data);n=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(n);n.forEach(function(a){n[a]=f[a];delete f[a]});f.remove(!1,null,!1,!0);for(p in m)f[p]=void 0;P[h||b]?C(f,P[h||b].prototype):r(17,!0,l,{missingModuleFor:h||b});n.forEach(function(a){f[a]=n[a]});f.init(l,d);if(g&&this.points){var A=f.options;!1===A.visible?(w.graphic=1,w.dataLabel=1):f._hasPointLabels||(d=A.marker,e=A.dataLabels,d&&(!1===d.enabled||"symbol"in d)&&(w.graphic=1),e&&!1===e.enabled&&
(w.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(w).length&&a.destroyElements(w),!1===A.showInLegend&&a.legendItem&&l.legend.destroyItem(a))},this)}f.initialType=b;l.linkSeries();I(this,"afterUpdate");a(c,!0)&&l.redraw(g?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});C(g.prototype,{update:function(d,c){var l=this.chart,g=d&&d.events||{};d=k(this.userOptions,d);l.options[this.coll].indexOf&&
(l.options[this.coll][l.options[this.coll].indexOf(this.userOptions)]=d);f(l.options[this.coll].events,function(a,b){"undefined"===typeof g[b]&&(g[b]=void 0)});this.destroy(!0);this.init(l,C(d,{events:g}));l.isDirtyBox=!0;a(c,!0)&&l.redraw()},remove:function(d){for(var c=this.chart,f=this.coll,k=this.series,e=k.length;e--;)k[e]&&k[e].remove(!1);n(c.axes,this);n(c[f],this);p(c.options[f])?c.options[f].splice(this.options.index,1):delete c.options[f];c[f].forEach(function(a,d){a.options.index=a.userOptions.index=
d});this.destroy();c.isDirtyBox=!0;a(d,!0)&&c.redraw()},setTitle:function(a,d){this.update({title:a},d)},setCategories:function(a,d){this.update({categories:a},d)}})});O(q,"parts/AreaSeries.js",[q["parts/Globals.js"],q["parts/Color.js"],q["mixins/legend-symbol.js"],q["parts/Utilities.js"]],function(g,c,q,y){var B=c.parse,H=y.objectEach,D=y.pick;c=y.seriesType;var J=g.Series;c("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(c){var g=[],q=[],t=this.xAxis,y=this.yAxis,
n=y.stacking.stacks[this.stackKey],r={},C=this.index,I=y.series,p=I.length,m=D(y.options.reversedStacks,!0)?1:-1,d;c=c||this.points;if(this.options.stacking){for(d=0;d<c.length;d++)c[d].leftNull=c[d].rightNull=void 0,r[c[d].x]=c[d];H(n,function(d,c){null!==d.total&&q.push(c)});q.sort(function(d,c){return d-c});var l=I.map(function(d){return d.visible});q.forEach(function(c,f){var a=0,k,u;if(r[c]&&!r[c].isNull)g.push(r[c]),[-1,1].forEach(function(a){var g=1===a?"rightNull":"leftNull",w=0,A=n[q[f+a]];
if(A)for(d=C;0<=d&&d<p;)k=A.points[d],k||(d===C?r[c][g]=!0:l[d]&&(u=n[c].points[d])&&(w-=u[1]-u[0])),d+=m;r[c][1===a?"rightCliff":"leftCliff"]=w});else{for(d=C;0<=d&&d<p;){if(k=n[c].points[d]){a=k[1];break}d+=m}a=y.translate(a,0,1,0,1);g.push({isNull:!0,plotX:t.translate(c,0,0,0,1),x:c,plotY:a,yBottom:a})}})}return g},getGraphPath:function(c){var g=J.prototype.getGraphPath,q=this.options,t=q.stacking,y=this.yAxis,n,r=[],C=[],I=this.index,p=y.stacking.stacks[this.stackKey],m=q.threshold,d=Math.round(y.getThreshold(q.threshold));
q=D(q.connectNulls,"percent"===t);var l=function(a,k,l){var g=c[a];a=t&&p[g.x].points[I];var n=g[l+"Null"]||0;l=g[l+"Cliff"]||0;g=!0;if(l||n){var u=(n?a[0]:a[1])+l;var q=a[0]+l;g=!!n}else!t&&c[k]&&c[k].isNull&&(u=q=m);"undefined"!==typeof u&&(C.push({plotX:f,plotY:null===u?d:y.getThreshold(u),isNull:g,isCliff:!0}),r.push({plotX:f,plotY:null===q?d:y.getThreshold(q),doCurve:!1}))};c=c||this.points;t&&(c=this.getStackPoints(c));for(n=0;n<c.length;n++){t||(c[n].leftCliff=c[n].rightCliff=c[n].leftNull=
c[n].rightNull=void 0);var k=c[n].isNull;var f=D(c[n].rectPlotX,c[n].plotX);var a=D(c[n].yBottom,d);if(!k||q)q||l(n,n-1,"left"),k&&!t&&q||(C.push(c[n]),r.push({x:n,plotX:f,plotY:a})),q||l(n,n+1,"right")}n=g.call(this,C,!0,!0);r.reversed=!0;k=g.call(this,r,!0,!0);(a=k[0])&&"M"===a[0]&&(k[0]=["L",a[1],a[2]]);k=n.concat(k);g=g.call(this,C,!1,q);k.xMap=n.xMap;this.areaPath=k;return g},drawGraph:function(){this.areaPath=[];J.prototype.drawGraph.apply(this);var c=this,g=this.areaPath,q=this.options,v=[["area",
"highcharts-area",this.color,q.fillColor]];this.zones.forEach(function(g,n){v.push(["zone-area-"+n,"highcharts-area highcharts-zone-area-"+n+" "+g.className,g.color||c.color,g.fillColor||q.fillColor])});v.forEach(function(t){var n=t[0],r=c[n],v=r?"animate":"attr",y={};r?(r.endX=c.preventGraphAnimation?null:g.xMap,r.animate({d:g})):(y.zIndex=0,r=c[n]=c.chart.renderer.path(g).addClass(t[1]).add(c.group),r.isArea=!0);c.chart.styledMode||(y.fill=D(t[3],B(t[2]).setOpacity(D(q.fillOpacity,.75)).get()));
r[v](y);r.startX=g.xMap;r.shiftUnit=q.step?2:1})},drawLegendSymbol:q.drawRectangle});""});O(q,"parts/SplineSeries.js",[q["parts/Utilities.js"]],function(g){var c=g.pick;g=g.seriesType;g("spline","line",{},{getPointSpline:function(g,q,B){var y=q.plotX||0,D=q.plotY||0,J=g[B-1];B=g[B+1];if(J&&!J.isNull&&!1!==J.doCurve&&!q.isCliff&&B&&!B.isNull&&!1!==B.doCurve&&!q.isCliff){g=J.plotY||0;var t=B.plotX||0;B=B.plotY||0;var G=0;var L=(1.5*y+(J.plotX||0))/2.5;var v=(1.5*D+g)/2.5;t=(1.5*y+t)/2.5;var K=(1.5*
D+B)/2.5;t!==L&&(G=(K-v)*(t-y)/(t-L)+D-K);v+=G;K+=G;v>g&&v>D?(v=Math.max(g,D),K=2*D-v):v<g&&v<D&&(v=Math.min(g,D),K=2*D-v);K>B&&K>D?(K=Math.max(B,D),v=2*D-K):K<B&&K<D&&(K=Math.min(B,D),v=2*D-K);q.rightContX=t;q.rightContY=K}q=["C",c(J.rightContX,J.plotX,0),c(J.rightContY,J.plotY,0),c(L,y,0),c(v,D,0),y,D];J.rightContX=J.rightContY=void 0;return q}});""});O(q,"parts/AreaSplineSeries.js",[q["parts/Globals.js"],q["mixins/legend-symbol.js"],q["parts/Options.js"],q["parts/Utilities.js"]],function(g,c,q,
y){y=y.seriesType;g=g.seriesTypes.area.prototype;y("areaspline","spline",q.defaultOptions.plotOptions.area,{getStackPoints:g.getStackPoints,getGraphPath:g.getGraphPath,drawGraph:g.drawGraph,drawLegendSymbol:c.drawRectangle});""});O(q,"parts/ColumnSeries.js",[q["parts/Globals.js"],q["parts/Color.js"],q["mixins/legend-symbol.js"],q["parts/Utilities.js"]],function(g,c,q,y){"";var B=c.parse,H=y.animObject,D=y.clamp,J=y.defined,t=y.extend,G=y.isNumber,L=y.merge,v=y.pick;c=y.seriesType;var K=g.Series;c("column",
"line",{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){K.prototype.init.apply(this,
arguments);var c=this,g=c.chart;g.hasRendered&&g.series.forEach(function(g){g.type===c.type&&(g.isDirty=!0)})},getColumnMetrics:function(){var c=this,g=c.options,q=c.xAxis,t=c.yAxis,p=q.options.reversedStacks;p=q.reversed&&!p||!q.reversed&&p;var m,d={},l=0;!1===g.grouping?l=1:c.chart.series.forEach(function(a){var f=a.yAxis,k=a.options;if(a.type===c.type&&(a.visible||!c.chart.options.chart.ignoreHiddenSeries)&&t.len===f.len&&t.pos===f.pos){if(k.stacking&&"group"!==k.stacking){m=a.stackKey;"undefined"===
typeof d[m]&&(d[m]=l++);var g=d[m]}else!1!==k.grouping&&(g=l++);a.columnIndex=g}});var k=Math.min(Math.abs(q.transA)*(q.ordinal&&q.ordinal.slope||g.pointRange||q.closestPointRange||q.tickInterval||1),q.len),f=k*g.groupPadding,a=(k-2*f)/(l||1);g=Math.min(g.maxPointWidth||q.len,v(g.pointWidth,a*(1-2*g.pointPadding)));c.columnMetrics={width:g,offset:(a-g)/2+(f+((c.columnIndex||0)+(p?1:0))*a-k/2)*(p?-1:1),paddedWidth:a,columnCount:l};return c.columnMetrics},crispCol:function(c,g,q,t){var p=this.chart,
m=this.borderWidth,d=-(m%2?.5:0);m=m%2?.5:1;p.inverted&&p.renderer.isVML&&(m+=1);this.options.crisp&&(q=Math.round(c+q)+d,c=Math.round(c)+d,q-=c);t=Math.round(g+t)+m;d=.5>=Math.abs(g)&&.5<t;g=Math.round(g)+m;t-=g;d&&t&&(--g,t+=1);return{x:c,y:g,width:q,height:t}},adjustForMissingColumns:function(c,q,t,v){var p=this,m=this.options.stacking;if(!t.isNull&&1<v.columnCount){var d=0,l=0;Highcharts.objectEach(this.yAxis.stacking&&this.yAxis.stacking.stacks,function(c){if("number"===typeof t.x&&(c=c[t.x.toString()])){var f=
c.points[p.index],a=c.total;m?(f&&(d=l),c.hasValidPoints&&l++):g.isArray(f)&&(d=f[1],l=a||0)}});c=(t.plotX||0)+((l-1)*v.paddedWidth+q)/2-q-d*v.paddedWidth}return c},translate:function(){var c=this,g=c.chart,q=c.options,t=c.dense=2>c.closestPointRange*c.xAxis.transA;t=c.borderWidth=v(q.borderWidth,t?0:1);var p=c.xAxis,m=c.yAxis,d=q.threshold,l=c.translatedThreshold=m.getThreshold(d),k=v(q.minPointLength,5),f=c.getColumnMetrics(),a=f.width,A=c.barW=Math.max(a,1+2*t),u=c.pointXOffset=f.offset,E=c.dataMin,
y=c.dataMax;g.inverted&&(l-=.5);q.pointPadding&&(A=Math.ceil(A));K.prototype.translate.apply(c);c.points.forEach(function(n){var r=v(n.yBottom,l),w=999+Math.abs(r),t=a,e=n.plotX||0;w=D(n.plotY,-w,m.len+w);var b=e+u,h=A,z=Math.min(w,r),x=Math.max(w,r)-z;if(k&&Math.abs(x)<k){x=k;var C=!m.reversed&&!n.negative||m.reversed&&n.negative;G(d)&&G(y)&&n.y===d&&y<=d&&(m.min||0)<d&&E!==y&&(C=!C);z=Math.abs(z-l)>k?r-k:l-(C?k:0)}J(n.options.pointWidth)&&(t=h=Math.ceil(n.options.pointWidth),b-=Math.round((t-a)/
2));q.centerInCategory&&(b=c.adjustForMissingColumns(b,t,n,f));n.barX=b;n.pointWidth=t;n.tooltipPos=g.inverted?[m.len+m.pos-g.plotLeft-w,p.len+p.pos-g.plotTop-(e||0)-u-h/2,x]:[b+h/2,w+m.pos-g.plotTop,x];n.shapeType=c.pointClass.prototype.shapeType||"rect";n.shapeArgs=c.crispCol.apply(c,n.isNull?[b,l,h,0]:[b,z,h,x])})},getSymbol:g.noop,drawLegendSymbol:q.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(c,g){var n=this.options,
q=this.pointAttrToOptions||{};var p=q.stroke||"borderColor";var m=q["stroke-width"]||"borderWidth",d=c&&c.color||this.color,l=c&&c[p]||n[p]||this.color||d,k=c&&c[m]||n[m]||this[m]||0;q=c&&c.options.dashStyle||n.dashStyle;var f=v(c&&c.opacity,n.opacity,1);if(c&&this.zones.length){var a=c.getZone();d=c.options.color||a&&(a.color||c.nonZonedColor)||this.color;a&&(l=a.borderColor||l,q=a.dashStyle||q,k=a.borderWidth||k)}g&&c&&(c=L(n.states[g],c.options.states&&c.options.states[g]||{}),g=c.brightness,d=
c.color||"undefined"!==typeof g&&B(d).brighten(c.brightness).get()||d,l=c[p]||l,k=c[m]||k,q=c.dashStyle||q,f=v(c.opacity,f));p={fill:d,stroke:l,"stroke-width":k,opacity:f};q&&(p.dashstyle=q);return p},drawPoints:function(){var c=this,g=this.chart,q=c.options,t=g.renderer,p=q.animationLimit||250,m;c.points.forEach(function(d){var l=d.graphic,k=!!l,f=l&&g.pointCount<p?"animate":"attr";if(G(d.plotY)&&null!==d.y){m=d.shapeArgs;l&&d.hasNewShapeType()&&(l=l.destroy());c.enabledDataSorting&&(d.startXPos=
c.xAxis.reversed?-(m?m.width:0):c.xAxis.width);l||(d.graphic=l=t[d.shapeType](m).add(d.group||c.group))&&c.enabledDataSorting&&g.hasRendered&&g.pointCount<p&&(l.attr({x:d.startXPos}),k=!0,f="animate");if(l&&k)l[f](L(m));if(q.borderRadius)l[f]({r:q.borderRadius});g.styledMode||l[f](c.pointAttribs(d,d.selected&&"select")).shadow(!1!==d.allowShadow&&q.shadow,null,q.stacking&&!q.borderRadius);l.addClass(d.getClassName(),!0)}else l&&(d.graphic=l.destroy())})},animate:function(c){var g=this,n=this.yAxis,
q=g.options,p=this.chart.inverted,m={},d=p?"translateX":"translateY";if(c)m.scaleY=.001,c=D(n.toPixels(q.threshold),n.pos,n.pos+n.len),p?m.translateX=c-n.len:m.translateY=c,g.clipBox&&g.setClip(),g.group.attr(m);else{var l=g.group.attr(d);g.group.animate({scaleY:1},t(H(g.options.animation),{step:function(c,f){g.group&&(m[d]=l+f.pos*(n.pos-l),g.group.attr(m))}}))}},remove:function(){var c=this,g=c.chart;g.hasRendered&&g.series.forEach(function(g){g.type===c.type&&(g.isDirty=!0)});K.prototype.remove.apply(c,
arguments)}});""});O(q,"parts/BarSeries.js",[q["parts/Utilities.js"]],function(g){g=g.seriesType;g("bar","column",null,{inverted:!0});""});O(q,"parts/ScatterSeries.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.addEvent;c=c.seriesType;var y=g.Series;c("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&y.prototype.drawGraph.call(this)},applyJitter:function(){var c=this,g=this.options.jitter,q=this.points.length;g&&this.points.forEach(function(y,t){["x","y"].forEach(function(D,B){var v="plot"+D.toUpperCase();if(g[D]&&!y.isNull){var G=c[D+"Axis"];var n=g[D]*G.transA;if(G&&!G.isLog){var r=Math.max(0,y[v]-n);G=Math.min(G.len,y[v]+
n);B=1E4*Math.sin(t+B*q);y[v]=r+(G-r)*(B-Math.floor(B));"x"===D&&(y.clientX=y.plotX)}}})})}});q(y,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});""});O(q,"mixins/centered-series.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.isNumber,y=c.pick,B=c.relativeLength,H=g.deg2rad;g.CenteredSeriesMixin={getCenter:function(){var c=this.options,q=this.chart,t=2*(c.slicedOffset||0),G=q.plotWidth-2*t,H=q.plotHeight-2*t,v=c.center,K=Math.min(G,H),n=c.size,r=c.innerSize||
0;"string"===typeof n&&(n=parseFloat(n));"string"===typeof r&&(r=parseFloat(r));c=[y(v[0],"50%"),y(v[1],"50%"),y(n&&0>n?void 0:c.size,"100%"),y(r&&0>r?void 0:c.innerSize||0,"0%")];!q.angular||this instanceof g.Series||(c[3]=0);for(v=0;4>v;++v)n=c[v],q=2>v||2===v&&/%$/.test(n),c[v]=B(n,[G,H,K,c[2]][v])+(q?t:0);c[3]>c[2]&&(c[3]=c[2]);return c},getStartAndEndRadians:function(c,g){c=q(c)?c:0;g=q(g)&&g>c&&360>g-c?g:c+360;return{start:H*(c+-90),end:H*(g+-90)}}}});O(q,"parts/PieSeries.js",[q["parts/Globals.js"],
q["mixins/legend-symbol.js"],q["parts/Point.js"],q["parts/Utilities.js"]],function(g,c,q,y){var B=y.addEvent,H=y.clamp,D=y.defined,J=y.fireEvent,t=y.isNumber,G=y.merge,L=y.pick,v=y.relativeLength,K=y.seriesType,n=y.setAnimation;y=g.CenteredSeriesMixin;var r=y.getStartAndEndRadians,C=g.noop,I=g.Series;K("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?
void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:g.seriesTypes.column.prototype.pointAttribs,animate:function(c){var g=
this,d=g.points,l=g.startAngleRad;c||d.forEach(function(d){var c=d.graphic,a=d.shapeArgs;c&&a&&(c.attr({r:L(d.startR,g.center&&g.center[3]/2),start:l,end:l}),c.animate({r:a.r,start:a.start,end:a.end},g.options.animation))})},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var c,g=0,d=this.points,l=d.length,k=this.options.ignoreHiddenPoint;for(c=0;c<l;c++){var f=d[c];g+=k&&!f.visible?0:f.isNull?0:f.y}this.total=g;for(c=0;c<l;c++)f=d[c],f.percentage=0<g&&(f.visible||!k)?
f.y/g*100:0,f.total=g},generatePoints:function(){I.prototype.generatePoints.call(this);this.updateTotals()},getX:function(c,g,d){var l=this.center,k=this.radii?this.radii[d.index]:l[2]/2;c=Math.asin(H((c-l[1])/(k+d.labelDistance),-1,1));return l[0]+(g?-1:1)*Math.cos(c)*(k+d.labelDistance)+(0<d.labelDistance?(g?-1:1)*this.options.dataLabels.padding:0)},translate:function(c){this.generatePoints();var g=0,d=this.options,l=d.slicedOffset,k=l+(d.borderWidth||0),f=r(d.startAngle,d.endAngle),a=this.startAngleRad=
f.start;f=(this.endAngleRad=f.end)-a;var p=this.points,n=d.dataLabels.distance;d=d.ignoreHiddenPoint;var q,t=p.length;c||(this.center=c=this.getCenter());for(q=0;q<t;q++){var w=p[q];var y=a+g*f;if(!d||w.visible)g+=w.percentage/100;var F=a+g*f;w.shapeType="arc";w.shapeArgs={x:c[0],y:c[1],r:c[2]/2,innerR:c[3]/2,start:Math.round(1E3*y)/1E3,end:Math.round(1E3*F)/1E3};w.labelDistance=L(w.options.dataLabels&&w.options.dataLabels.distance,n);w.labelDistance=v(w.labelDistance,w.shapeArgs.r);this.maxLabelDistance=
Math.max(this.maxLabelDistance||0,w.labelDistance);F=(F+y)/2;F>1.5*Math.PI?F-=2*Math.PI:F<-Math.PI/2&&(F+=2*Math.PI);w.slicedTranslation={translateX:Math.round(Math.cos(F)*l),translateY:Math.round(Math.sin(F)*l)};var C=Math.cos(F)*c[2]/2;var e=Math.sin(F)*c[2]/2;w.tooltipPos=[c[0]+.7*C,c[1]+.7*e];w.half=F<-Math.PI/2||F>Math.PI/2?1:0;w.angle=F;y=Math.min(k,w.labelDistance/5);w.labelPosition={natural:{x:c[0]+C+Math.cos(F)*w.labelDistance,y:c[1]+e+Math.sin(F)*w.labelDistance},"final":{},alignment:0>
w.labelDistance?"center":w.half?"right":"left",connectorPosition:{breakAt:{x:c[0]+C+Math.cos(F)*y,y:c[1]+e+Math.sin(F)*y},touchingSliceAt:{x:c[0]+C,y:c[1]+e}}}}J(this,"afterTranslate")},drawEmpty:function(){var c=this.startAngleRad,g=this.endAngleRad,d=this.options;if(0===this.total){var l=this.center[0];var k=this.center[1];this.graph||(this.graph=this.chart.renderer.arc(l,k,this.center[1]/2,0,c,g).addClass("highcharts-empty-series").add(this.group));this.graph.attr({d:Highcharts.SVGRenderer.prototype.symbols.arc(l,
k,this.center[2]/2,0,{start:c,end:g,innerR:this.center[3]/2})});this.chart.styledMode||this.graph.attr({"stroke-width":d.borderWidth,fill:d.fillColor||"none",stroke:d.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var c=this,g=c.chart,d=g.renderer,l,k,f,a,n=c.options.shadow;this.drawEmpty();!n||c.shadowGroup||g.styledMode||(c.shadowGroup=d.g("shadow").attr({zIndex:-1}).add(c.group));c.points.forEach(function(m){var p={};k=m.graphic;if(!m.isNull&&k){a=
m.shapeArgs;l=m.getTranslate();if(!g.styledMode){var q=m.shadowGroup;n&&!q&&(q=m.shadowGroup=d.g("shadow").add(c.shadowGroup));q&&q.attr(l);f=c.pointAttribs(m,m.selected&&"select")}m.delayedRendering?(k.setRadialReference(c.center).attr(a).attr(l),g.styledMode||k.attr(f).attr({"stroke-linejoin":"round"}).shadow(n,q),m.delayedRendering=!1):(k.setRadialReference(c.center),g.styledMode||G(!0,p,f),G(!0,p,a,l),k.animate(p));k.attr({visibility:m.visible?"inherit":"hidden"});k.addClass(m.getClassName())}else k&&
(m.graphic=k.destroy())})},drawPoints:function(){var c=this.chart.renderer;this.points.forEach(function(g){g.graphic&&g.hasNewShapeType()&&(g.graphic=g.graphic.destroy());g.graphic||(g.graphic=c[g.shapeType](g.shapeArgs).add(g.series.group),g.delayedRendering=!0)})},searchPoint:C,sortByAngle:function(c,g){c.sort(function(c,l){return"undefined"!==typeof c.angle&&(l.angle-c.angle)*g})},drawLegendSymbol:c.drawRectangle,getCenter:y.getCenter,getSymbol:C,drawGraph:null},{init:function(){q.prototype.init.apply(this,
arguments);var c=this;c.name=L(c.name,"Slice");var g=function(d){c.slice("select"===d.type)};B(c,"select",g);B(c,"unselect",g);return c},isValid:function(){return t(this.y)&&0<=this.y},setVisible:function(c,g){var d=this,l=d.series,k=l.chart,f=l.options.ignoreHiddenPoint;g=L(g,f);c!==d.visible&&(d.visible=d.options.visible=c="undefined"===typeof c?!d.visible:c,l.options.data[l.data.indexOf(d)]=d.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(a){if(d[a])d[a][c?"show":"hide"](!0)}),
d.legendItem&&k.legend.colorizeItem(d,c),c||"hover"!==d.state||d.setState(""),f&&(l.isDirty=!0),g&&k.redraw())},slice:function(c,g,d){var l=this.series;n(d,l.chart);L(g,!0);this.sliced=this.options.sliced=D(c)?c:!this.sliced;l.options.data[l.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(c){var g=
this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(g.x,g.y,g.r+c,g.r+c,{innerR:g.r-1,start:g.start,end:g.end})},connectorShapes:{fixedOffset:function(c,g,d){var l=g.breakAt;g=g.touchingSliceAt;return[["M",c.x,c.y],d.softConnector?["C",c.x+("left"===c.alignment?-5:5),c.y,2*l.x-g.x,2*l.y-g.y,l.x,l.y]:["L",l.x,l.y],["L",g.x,g.y]]},straight:function(c,g){g=g.touchingSliceAt;return[["M",c.x,c.y],["L",g.x,g.y]]},crookedLine:function(c,g,d){g=g.touchingSliceAt;var l=
this.series,k=l.center[0],f=l.chart.plotWidth,a=l.chart.plotLeft;l=c.alignment;var m=this.shapeArgs.r;d=v(d.crookDistance,1);f="left"===l?k+m+(f+a-k-m)*(1-d):a+(k-m)*d;d=["L",f,c.y];k=!0;if("left"===l?f>c.x||f<g.x:f<c.x||f>g.x)k=!1;c=[["M",c.x,c.y]];k&&c.push(d);c.push(["L",g.x,g.y]);return c}},getConnectorPath:function(){var c=this.labelPosition,g=this.series.options.dataLabels,d=g.connectorShape,l=this.connectorShapes;l[d]&&(d=l[d]);return d.call(this,{x:c.final.x,y:c.final.y,alignment:c.alignment},
c.connectorPosition,g)}});""});O(q,"parts/DataLabels.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=g.noop,y=g.seriesTypes,B=c.animObject,H=c.arrayMax,D=c.clamp,J=c.defined,t=c.extend,G=c.fireEvent,L=c.format,v=c.isArray,K=c.merge,n=c.objectEach,r=c.pick,C=c.relativeLength,I=c.splat,p=c.stableSort,m=g.Series;g.distribute=function(c,l,k){function d(a,c){return a.target-c.target}var a,m=!0,n=c,q=[];var t=0;var w=n.reducedLen||l;for(a=c.length;a--;)t+=c[a].size;if(t>w){p(c,function(a,
c){return(c.rank||0)-(a.rank||0)});for(t=a=0;t<=w;)t+=c[a].size,a++;q=c.splice(a-1,c.length)}p(c,d);for(c=c.map(function(a){return{size:a.size,targets:[a.target],align:r(a.align,.5)}});m;){for(a=c.length;a--;)m=c[a],t=(Math.min.apply(0,m.targets)+Math.max.apply(0,m.targets))/2,m.pos=D(t-m.size*m.align,0,l-m.size);a=c.length;for(m=!1;a--;)0<a&&c[a-1].pos+c[a-1].size>c[a].pos&&(c[a-1].size+=c[a].size,c[a-1].targets=c[a-1].targets.concat(c[a].targets),c[a-1].align=.5,c[a-1].pos+c[a-1].size>l&&(c[a-1].pos=
l-c[a-1].size),c.splice(a,1),m=!0)}n.push.apply(n,q);a=0;c.some(function(c){var d=0;if(c.targets.some(function(){n[a].pos=c.pos+d;if("undefined"!==typeof k&&Math.abs(n[a].pos-n[a].target)>k)return n.slice(0,a+1).forEach(function(a){delete a.pos}),n.reducedLen=(n.reducedLen||l)-.1*l,n.reducedLen>.1*l&&g.distribute(n,l,k),!0;d+=n[a].size;a++}))return!0});p(n,d)};m.prototype.drawDataLabels=function(){function c(a,c){var b=c.filter;return b?(c=b.operator,a=a[b.property],b=b.value,">"===c&&a>b||"<"===
c&&a<b||">="===c&&a>=b||"<="===c&&a<=b||"=="===c&&a==b||"==="===c&&a===b?!0:!1):!0}function g(a,c){var b=[],d;if(v(a)&&!v(c))b=a.map(function(a){return K(a,c)});else if(v(c)&&!v(a))b=c.map(function(b){return K(a,b)});else if(v(a)||v(c))for(d=Math.max(a.length,c.length);d--;)b[d]=K(a[d],c[d]);else b=K(a,c);return b}var k=this,f=k.chart,a=k.options,m=a.dataLabels,p=k.points,q,t=k.hasRendered||0,w=B(a.animation).duration,y=Math.min(w,200),F=!f.renderer.forExport&&r(m.defer,0<y),C=f.renderer;m=g(g(f.options.plotOptions&&
f.options.plotOptions.series&&f.options.plotOptions.series.dataLabels,f.options.plotOptions&&f.options.plotOptions[k.type]&&f.options.plotOptions[k.type].dataLabels),m);G(this,"drawDataLabels");if(v(m)||m.enabled||k._hasPointLabels){var e=k.plotGroup("dataLabelsGroup","data-labels",F&&!t?"hidden":"inherit",m.zIndex||6);F&&(e.attr({opacity:+t}),t||setTimeout(function(){var b=k.dataLabelsGroup;b&&(k.visible&&e.show(!0),b[a.animation?"animate":"attr"]({opacity:1},{duration:y}))},w-y));p.forEach(function(b){q=
I(g(m,b.dlOptions||b.options&&b.options.dataLabels));q.forEach(function(d,g){var h=d.enabled&&(!b.isNull||b.dataLabelOnNull)&&c(b,d),l=b.dataLabels?b.dataLabels[g]:b.dataLabel,m=b.connectors?b.connectors[g]:b.connector,p=r(d.distance,b.labelDistance),q=!l;if(h){var u=b.getLabelConfig();var w=r(d[b.formatPrefix+"Format"],d.format);u=J(w)?L(w,u,f):(d[b.formatPrefix+"Formatter"]||d.formatter).call(u,d);w=d.style;var t=d.rotation;f.styledMode||(w.color=r(d.color,w.color,k.color,"#000000"),"contrast"===
w.color?(b.contrastColor=C.getContrast(b.color||k.color),w.color=!J(p)&&d.inside||0>p||a.stacking?b.contrastColor:"#000000"):delete b.contrastColor,a.cursor&&(w.cursor=a.cursor));var A={r:d.borderRadius||0,rotation:t,padding:d.padding,zIndex:1};f.styledMode||(A.fill=d.backgroundColor,A.stroke=d.borderColor,A["stroke-width"]=d.borderWidth);n(A,function(a,b){"undefined"===typeof a&&delete A[b]})}!l||h&&J(u)?h&&J(u)&&(l?A.text=u:(b.dataLabels=b.dataLabels||[],l=b.dataLabels[g]=t?C.text(u,0,-9999,d.useHTML).addClass("highcharts-data-label"):
C.label(u,0,-9999,d.shape,null,null,d.useHTML,null,"data-label"),g||(b.dataLabel=l),l.addClass(" highcharts-data-label-color-"+b.colorIndex+" "+(d.className||"")+(d.useHTML?" highcharts-tracker":""))),l.options=d,l.attr(A),f.styledMode||l.css(w).shadow(d.shadow),l.added||l.add(e),d.textPath&&!d.useHTML&&(l.setTextPath(b.getDataLabelPath&&b.getDataLabelPath(l)||b.graphic,d.textPath),b.dataLabelPath&&!d.textPath.enabled&&(b.dataLabelPath=b.dataLabelPath.destroy())),k.alignDataLabel(b,l,d,null,q)):(b.dataLabel=
b.dataLabel&&b.dataLabel.destroy(),b.dataLabels&&(1===b.dataLabels.length?delete b.dataLabels:delete b.dataLabels[g]),g||delete b.dataLabel,m&&(b.connector=b.connector.destroy(),b.connectors&&(1===b.connectors.length?delete b.connectors:delete b.connectors[g])))})})}G(this,"afterDrawDataLabels")};m.prototype.alignDataLabel=function(c,g,k,f,a){var d=this,l=this.chart,m=this.isCartesian&&l.inverted,n=this.enabledDataSorting,p=r(c.dlBox&&c.dlBox.centerX,c.plotX,-9999),q=r(c.plotY,-9999),v=g.getBBox(),
y=k.rotation,e=k.align,b=l.isInsidePlot(p,Math.round(q),m),h="justify"===r(k.overflow,n?"none":"justify"),z=this.visible&&!1!==c.visible&&(c.series.forceDL||n&&!h||b||k.inside&&f&&l.isInsidePlot(p,m?f.x+1:f.y+f.height-1,m));var x=function(e){n&&d.xAxis&&!h&&d.setDataLabelStartPos(c,g,a,b,e)};if(z){var C=l.renderer.fontMetrics(l.styledMode?void 0:k.style.fontSize,g).b;f=t({x:m?this.yAxis.len-q:p,y:Math.round(m?this.xAxis.len-p:q),width:0,height:0},f);t(k,{width:v.width,height:v.height});y?(h=!1,p=
l.renderer.rotCorr(C,y),p={x:f.x+(k.x||0)+f.width/2+p.x,y:f.y+(k.y||0)+{top:0,middle:.5,bottom:1}[k.verticalAlign]*f.height},x(p),g[a?"attr":"animate"](p).attr({align:e}),x=(y+720)%360,x=180<x&&360>x,"left"===e?p.y-=x?v.height:0:"center"===e?(p.x-=v.width/2,p.y-=v.height/2):"right"===e&&(p.x-=v.width,p.y-=x?0:v.height),g.placed=!0,g.alignAttr=p):(x(f),g.align(k,null,f),p=g.alignAttr);h&&0<=f.height?this.justifyDataLabel(g,k,p,v,f,a):r(k.crop,!0)&&(z=l.isInsidePlot(p.x,p.y)&&l.isInsidePlot(p.x+v.width,
p.y+v.height));if(k.shape&&!y)g[a?"attr":"animate"]({anchorX:m?l.plotWidth-c.plotY:c.plotX,anchorY:m?l.plotHeight-c.plotX:c.plotY})}a&&n&&(g.placed=!1);z||n&&!h||(g.hide(!0),g.placed=!1)};m.prototype.setDataLabelStartPos=function(c,g,k,f,a){var d=this.chart,l=d.inverted,m=this.xAxis,n=m.reversed,p=l?g.height/2:g.width/2;c=(c=c.pointWidth)?c/2:0;m=l?a.x:n?-p-c:m.width-p+c;a=l?n?this.yAxis.height-p+c:-p-c:a.y;g.startXPos=m;g.startYPos=a;f?"hidden"===g.visibility&&(g.show(),g.attr({opacity:0}).animate({opacity:1})):
g.attr({opacity:1}).animate({opacity:0},void 0,g.hide);d.hasRendered&&(k&&g.attr({x:g.startXPos,y:g.startYPos}),g.placed=!0)};m.prototype.justifyDataLabel=function(c,g,k,f,a,m){var d=this.chart,l=g.align,n=g.verticalAlign,p=c.box?0:c.padding||0,q=g.x;q=void 0===q?0:q;var r=g.y;var t=void 0===r?0:r;r=k.x+p;if(0>r){"right"===l&&0<=q?(g.align="left",g.inside=!0):q-=r;var e=!0}r=k.x+f.width-p;r>d.plotWidth&&("left"===l&&0>=q?(g.align="right",g.inside=!0):q+=d.plotWidth-r,e=!0);r=k.y+p;0>r&&("bottom"===
n&&0<=t?(g.verticalAlign="top",g.inside=!0):t-=r,e=!0);r=k.y+f.height-p;r>d.plotHeight&&("top"===n&&0>=t?(g.verticalAlign="bottom",g.inside=!0):t+=d.plotHeight-r,e=!0);e&&(g.x=q,g.y=t,c.placed=!m,c.align(g,void 0,a));return e};y.pie&&(y.pie.prototype.dataLabelPositioners={radialDistributionY:function(c){return c.top+c.distributeBox.pos},radialDistributionX:function(c,g,k,f){return c.getX(k<g.top+2||k>g.bottom-2?f:k,g.half,g)},justify:function(c,g,k){return k[0]+(c.half?-1:1)*(g+c.labelDistance)},
alignToPlotEdges:function(c,g,k,f){c=c.getBBox().width;return g?c+f:k-c-f},alignToConnectors:function(c,g,k,f){var a=0,d;c.forEach(function(c){d=c.dataLabel.getBBox().width;d>a&&(a=d)});return g?a+f:k-a-f}},y.pie.prototype.drawDataLabels=function(){var c=this,l=c.data,k,f=c.chart,a=c.options.dataLabels||{},n=a.connectorPadding,p,q=f.plotWidth,t=f.plotHeight,w=f.plotLeft,v=Math.round(f.chartWidth/3),y,C=c.center,e=C[2]/2,b=C[1],h,z,x,B,D=[[],[]],G,I,L,O,U=[0,0,0,0],R=c.dataLabelPositioners,T;c.visible&&
(a.enabled||c._hasPointLabels)&&(l.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),m.prototype.drawDataLabels.apply(c),l.forEach(function(b){b.dataLabel&&(b.visible?(D[b.half].push(b),b.dataLabel._pos=null,!J(a.style.width)&&!J(b.options.dataLabels&&b.options.dataLabels.style&&b.options.dataLabels.style.width)&&b.dataLabel.getBBox().width>v&&(b.dataLabel.css({width:Math.round(.7*
v)+"px"}),b.dataLabel.shortened=!0)):(b.dataLabel=b.dataLabel.destroy(),b.dataLabels&&1===b.dataLabels.length&&delete b.dataLabels))}),D.forEach(function(d,l){var m=d.length,p=[],u;if(m){c.sortByAngle(d,l-.5);if(0<c.maxLabelDistance){var v=Math.max(0,b-e-c.maxLabelDistance);var A=Math.min(b+e+c.maxLabelDistance,f.plotHeight);d.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,b-e-a.labelDistance),a.bottom=Math.min(b+e+a.labelDistance,f.plotHeight),u=a.dataLabel.getBBox().height||
21,a.distributeBox={target:a.labelPosition.natural.y-a.top+u/2,size:u,rank:a.y},p.push(a.distributeBox))});v=A+u-v;g.distribute(p,v,v/5)}for(O=0;O<m;O++){k=d[O];x=k.labelPosition;h=k.dataLabel;L=!1===k.visible?"hidden":"inherit";I=v=x.natural.y;p&&J(k.distributeBox)&&("undefined"===typeof k.distributeBox.pos?L="hidden":(B=k.distributeBox.size,I=R.radialDistributionY(k)));delete k.positionIndex;if(a.justify)G=R.justify(k,e,C);else switch(a.alignTo){case "connectors":G=R.alignToConnectors(d,l,q,w);
break;case "plotEdges":G=R.alignToPlotEdges(h,l,q,w);break;default:G=R.radialDistributionX(c,k,I,v)}h._attr={visibility:L,align:x.alignment};T=k.options.dataLabels||{};h._pos={x:G+r(T.x,a.x)+({left:n,right:-n}[x.alignment]||0),y:I+r(T.y,a.y)-10};x.final.x=G;x.final.y=I;r(a.crop,!0)&&(z=h.getBBox().width,v=null,G-z<n&&1===l?(v=Math.round(z-G+n),U[3]=Math.max(v,U[3])):G+z>q-n&&0===l&&(v=Math.round(G+z-q+n),U[1]=Math.max(v,U[1])),0>I-B/2?U[0]=Math.max(Math.round(-I+B/2),U[0]):I+B/2>t&&(U[2]=Math.max(Math.round(I+
B/2-t),U[2])),h.sideOverflow=v)}}}),0===H(U)||this.verifyDataLabelOverflow(U))&&(this.placeDataLabels(),this.points.forEach(function(b){T=K(a,b.options.dataLabels);if(p=r(T.connectorWidth,1)){var d;y=b.connector;if((h=b.dataLabel)&&h._pos&&b.visible&&0<b.labelDistance){L=h._attr.visibility;if(d=!y)b.connector=y=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+b.colorIndex+(b.className?" "+b.className:"")).add(c.dataLabelsGroup),f.styledMode||y.attr({"stroke-width":p,
stroke:T.connectorColor||b.color||"#666666"});y[d?"attr":"animate"]({d:b.getConnectorPath()});y.attr("visibility",L)}else y&&(b.connector=y.destroy())}}))},y.pie.prototype.placeDataLabels=function(){this.points.forEach(function(c){var d=c.dataLabel,g;d&&c.visible&&((g=d._pos)?(d.sideOverflow&&(d._attr.width=Math.max(d.getBBox().width-d.sideOverflow,0),d.css({width:d._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),d.shortened=!0),d.attr(d._attr),d[d.moved?
"animate":"attr"](g),d.moved=!0):d&&d.attr({y:-9999}));delete c.distributeBox},this)},y.pie.prototype.alignDataLabel=q,y.pie.prototype.verifyDataLabelOverflow=function(c){var d=this.center,g=this.options,f=g.center,a=g.minSize||80,m=null!==g.size;if(!m){if(null!==f[0])var n=Math.max(d[2]-Math.max(c[1],c[3]),a);else n=Math.max(d[2]-c[1]-c[3],a),d[0]+=(c[3]-c[1])/2;null!==f[1]?n=D(n,a,d[2]-Math.max(c[0],c[2])):(n=D(n,a,d[2]-c[0]-c[2]),d[1]+=(c[0]-c[2])/2);n<d[2]?(d[2]=n,d[3]=Math.min(C(g.innerSize||
0,n),n),this.translate(d),this.drawDataLabels&&this.drawDataLabels()):m=!0}return m});y.column&&(y.column.prototype.alignDataLabel=function(c,g,k,f,a){var d=this.chart.inverted,l=c.series,n=c.dlBox||c.shapeArgs,p=r(c.below,c.plotY>r(this.translatedThreshold,l.yAxis.len)),q=r(k.inside,!!this.options.stacking);n&&(f=K(n),0>f.y&&(f.height+=f.y,f.y=0),n=f.y+f.height-l.yAxis.len,0<n&&n<f.height&&(f.height-=n),d&&(f={x:l.yAxis.len-f.y-f.height,y:l.xAxis.len-f.x-f.width,width:f.height,height:f.width}),q||
(d?(f.x+=p?0:f.width,f.width=0):(f.y+=p?f.height:0,f.height=0)));k.align=r(k.align,!d||q?"center":p?"right":"left");k.verticalAlign=r(k.verticalAlign,d||q?"middle":p?"top":"bottom");m.prototype.alignDataLabel.call(this,c,g,k,f,a);k.inside&&c.contrastColor&&g.css({color:c.contrastColor})})});O(q,"modules/overlapping-datalabels.src.js",[q["parts/Chart.js"],q["parts/Utilities.js"]],function(g,c){var q=c.addEvent,y=c.fireEvent,B=c.isArray,H=c.isNumber,D=c.objectEach,J=c.pick;q(g,"render",function(){var c=
[];(this.labelCollectors||[]).forEach(function(g){c=c.concat(g())});(this.yAxis||[]).forEach(function(g){g.stacking&&g.options.stackLabels&&!g.options.stackLabels.allowOverlap&&D(g.stacking.stacks,function(g){D(g,function(g){c.push(g.label)})})});(this.series||[]).forEach(function(g){var q=g.options.dataLabels;g.visible&&(!1!==q.enabled||g._hasPointLabels)&&(g.nodes||g.points).forEach(function(g){g.visible&&(B(g.dataLabels)?g.dataLabels:g.dataLabel?[g.dataLabel]:[]).forEach(function(q){var n=q.options;
q.labelrank=J(n.labelrank,g.labelrank,g.shapeArgs&&g.shapeArgs.height);n.allowOverlap||c.push(q)})})});this.hideOverlappingLabels(c)});g.prototype.hideOverlappingLabels=function(c){var g=this,q=c.length,t=g.renderer,B,n,r,C=!1;var D=function(c){var d,g=c.box?0:c.padding||0,f=d=0,a;if(c&&(!c.alignAttr||c.placed)){var m=c.alignAttr||{x:c.attr("x"),y:c.attr("y")};var n=c.parentGroup;c.width||(d=c.getBBox(),c.width=d.width,c.height=d.height,d=t.fontMetrics(null,c.element).h);var p=c.width-2*g;(a={left:"0",
center:"0.5",right:"1"}[c.alignValue])?f=+a*p:H(c.x)&&Math.round(c.x)!==c.translateX&&(f=c.x-c.translateX);return{x:m.x+(n.translateX||0)+g-f,y:m.y+(n.translateY||0)+g-d,width:c.width-2*g,height:c.height-2*g}}};for(n=0;n<q;n++)if(B=c[n])B.oldOpacity=B.opacity,B.newOpacity=1,B.absoluteBox=D(B);c.sort(function(c,g){return(g.labelrank||0)-(c.labelrank||0)});for(n=0;n<q;n++){var p=(D=c[n])&&D.absoluteBox;for(B=n+1;B<q;++B){var m=(r=c[B])&&r.absoluteBox;!p||!m||D===r||0===D.newOpacity||0===r.newOpacity||
m.x>p.x+p.width||m.x+m.width<p.x||m.y>p.y+p.height||m.y+m.height<p.y||((D.labelrank<r.labelrank?D:r).newOpacity=0)}}c.forEach(function(c){if(c){var d=c.newOpacity;c.oldOpacity!==d&&(c.alignAttr&&c.placed?(c[d?"removeClass":"addClass"]("highcharts-data-label-hidden"),C=!0,c.alignAttr.opacity=d,c[c.isOld?"animate":"attr"](c.alignAttr,null,function(){g.styledMode||c.css({pointerEvents:d?"auto":"none"});c.visibility=d?"inherit":"hidden";c.placed=!!d}),y(g,"afterHideOverlappingLabel")):c.attr({opacity:d}));
c.isOld=!0}});C&&y(g,"afterHideAllOverlappingLabels")}});O(q,"parts/Interaction.js",[q["parts/Chart.js"],q["parts/Globals.js"],q["parts/Legend.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/Utilities.js"]],function(g,c,q,y,B,H){var D=y.defaultOptions,J=H.addEvent,t=H.createElement,G=H.css,L=H.defined,v=H.extend,K=H.fireEvent,n=H.isArray,r=H.isFunction,C=H.isNumber,I=H.isObject,p=H.merge,m=H.objectEach,d=H.pick,l=c.hasTouch;y=c.Series;H=c.seriesTypes;var k=c.svg;var f=c.TrackerMixin={drawTrackerPoint:function(){var a=
this,c=a.chart,d=c.pointer,f=function(a){var c=d.getPointFromEvent(a);"undefined"!==typeof c&&(d.isDirectTouch=!0,c.onMouseOver(a))},g;a.points.forEach(function(a){g=n(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);g.forEach(function(c){c.div?c.div.point=a:c.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(g){if(a[g]){a[g].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){d.onTrackerMouseOut(a)});if(l)a[g].on("touchstart",
f);!c.styledMode&&a.options.cursor&&a[g].css(G).css({cursor:a.options.cursor})}}),a._hasTracking=!0);K(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,c=a.options,d=c.trackByArea,f=[].concat(d?a.areaPath:a.graphPath),g=a.chart,m=g.pointer,n=g.renderer,p=g.options.tooltip.snap,q=a.tracker,e=function(b){if(g.hoverSeries!==a)a.onMouseOver()},b="rgba(192,192,192,"+(k?.0001:.002)+")";q?q.attr({d:f}):a.graph&&(a.tracker=n.path(f).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(d?
"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),g.styledMode||a.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:b,fill:d?b:"none","stroke-width":a.graph.strokeWidth()+(d?0:2*p)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",e).on("mouseout",function(a){m.onTrackerMouseOut(a)});c.cursor&&!g.styledMode&&a.css({cursor:c.cursor});if(l)a.on("touchstart",e)}));K(this,"afterDrawTracker")}};H.column&&(H.column.prototype.drawTracker=
f.drawTrackerPoint);H.pie&&(H.pie.prototype.drawTracker=f.drawTrackerPoint);H.scatter&&(H.scatter.prototype.drawTracker=f.drawTrackerPoint);v(q.prototype,{setItemEvents:function(a,c,d){var f=this,g=f.chart.renderer.boxWrapper,k=a instanceof B,l="highcharts-legend-"+(k?"point":"series")+"-active",m=f.chart.styledMode;(d?[c,a.legendSymbol]:[a.legendGroup]).forEach(function(d){if(d)d.on("mouseover",function(){a.visible&&f.allItems.forEach(function(c){a!==c&&c.setState("inactive",!k)});a.setState("hover");
a.visible&&g.addClass(l);m||c.css(f.options.itemHoverStyle)}).on("mouseout",function(){f.chart.styledMode||c.css(p(a.visible?f.itemStyle:f.itemHiddenStyle));f.allItems.forEach(function(c){a!==c&&c.setState("",!k)});g.removeClass(l);a.setState()}).on("click",function(c){var b=function(){a.setVisible&&a.setVisible();f.allItems.forEach(function(b){a!==b&&b.setState(a.visible?"inactive":"",!k)})};g.removeClass(l);c={browserEvent:c};a.firePointEvent?a.firePointEvent("legendItemClick",c,b):K(a,"legendItemClick",
c,b)})})},createCheckboxForItem:function(a){a.checkbox=t("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);J(a.checkbox,"click",function(c){K(a.series||a,"checkboxClick",{checked:c.target.checked,item:a},function(){a.select()})})}});v(g.prototype,{showResetZoom:function(){function a(){c.zoomOut()}var c=this,d=D.lang,f=c.options.chart.resetZoomButton,g=f.theme,k=g.states,l="chart"===f.relativeTo||
"spaceBox"===f.relativeTo?null:"plotBox";K(this,"beforeShowResetZoom",null,function(){c.resetZoomButton=c.renderer.button(d.resetZoom,null,null,a,g,k&&k.hover).attr({align:f.position.align,title:d.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(f.position,!1,l)});K(this,"afterShowResetZoom")},zoomOut:function(){K(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var c=this,f,g=c.pointer,k=!1,l=c.inverted?g.mouseDownX:g.mouseDownY;!a||a.resetSelection?(c.axes.forEach(function(a){f=
a.zoom()}),g.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var d=a.axis,e=c.inverted?d.left:d.top,b=c.inverted?e+d.width:e+d.height,h=d.isXAxis,m=!1;if(!h&&l>=e&&l<=b||h||!L(l))m=!0;g[h?"zoomX":"zoomY"]&&m&&(f=d.zoom(a.min,a.max),d.displayBtn&&(k=!0))});var m=c.resetZoomButton;k&&!m?c.showResetZoom():!k&&I(m)&&(c.resetZoomButton=m.destroy());f&&c.redraw(d(c.options.chart.animation,a&&a.animation,100>c.pointCount))},pan:function(a,d){var f=this,g=f.hoverPoints,k=f.options.chart,l=f.options.mapNavigation&&
f.options.mapNavigation.enabled,m;d="object"===typeof d?d:{enabled:d,type:"x"};k&&k.panning&&(k.panning=d);var n=d.type;K(this,"pan",{originalEvent:a},function(){g&&g.forEach(function(a){a.setState()});var d=[1];"xy"===n?d=[1,0]:"y"===n&&(d=[0]);d.forEach(function(d){var b=f[d?"xAxis":"yAxis"][0],e=b.horiz,g=a[e?"chartX":"chartY"];e=e?"mouseDownX":"mouseDownY";var k=f[e],p=(b.pointRange||0)/2,q=b.reversed&&!f.inverted||!b.reversed&&f.inverted?-1:1,r=b.getExtremes(),u=b.toValue(k-g,!0)+p*q;q=b.toValue(k+
b.len-g,!0)-p*q;var t=q<u;k=t?q:u;u=t?u:q;var w=b.hasVerticalPanning(),v=b.panningState;b.series.forEach(function(a){if(w&&!d&&(!v||v.isDirty)){var b=a.getProcessedData(!0);a=a.getExtremes(b.yData,!0);v||(v={startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE});C(a.dataMin)&&C(a.dataMax)&&(v.startMin=Math.min(a.dataMin,v.startMin),v.startMax=Math.max(a.dataMax,v.startMax))}});q=Math.min(c.pick(null===v||void 0===v?void 0:v.startMin,r.dataMin),p?r.min:b.toValue(b.toPixels(r.min)-b.minPixelPadding));
p=Math.max(c.pick(null===v||void 0===v?void 0:v.startMax,r.dataMax),p?r.max:b.toValue(b.toPixels(r.max)+b.minPixelPadding));b.panningState=v;b.isOrdinal||(t=q-k,0<t&&(u+=t,k=q),t=u-p,0<t&&(u=p,k-=t),b.series.length&&k!==r.min&&u!==r.max&&k>=q&&u<=p&&(b.setExtremes(k,u,!1,!1,{trigger:"pan"}),f.resetZoomButton||l||k===q||u===p||!n.match("y")||(f.showResetZoom(),b.displayBtn=!1),m=!0),f[e]=g)});m&&f.redraw(!1);G(f.container,{cursor:"move"})})}});v(B.prototype,{select:function(a,c){var f=this,g=f.series,
k=g.chart;this.selectedStaging=a=d(a,!f.selected);f.firePointEvent(a?"select":"unselect",{accumulate:c},function(){f.selected=f.options.selected=a;g.options.data[g.data.indexOf(f)]=f.options;f.setState(a&&"select");c||k.getSelectedPoints().forEach(function(a){var c=a.series;a.selected&&a!==f&&(a.selected=a.options.selected=!1,c.options.data[c.data.indexOf(a)]=a.options,a.setState(k.hoverPoints&&c.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},
onMouseOver:function(a){var c=this.series.chart,d=c.pointer;a=a?d.normalize(a):d.getChartCoordinatesFromPoint(this,c.inverted);d.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=this,c=p(a.series.options.point,a.options).events;a.events=c;m(c,function(c,d){r(c)&&
J(a,d,c)});this.hasImportedEvents=!0}},setState:function(a,c){var f=this.series,g=this.state,k=f.options.states[a||"normal"]||{},l=D.plotOptions[f.type].marker&&f.options.marker,m=l&&!1===l.enabled,n=l&&l.states&&l.states[a||"normal"]||{},p=!1===n.enabled,e=f.stateMarkerGraphic,b=this.marker||{},h=f.chart,q=f.halo,r,t=l&&f.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===k.enabled||a&&(p||m&&!1===n.enabled)||a&&b.states&&b.states[a]&&!1===b.states[a].enabled)){this.state=
a;t&&(r=f.markerAttribs(this,a));if(this.graphic){g&&this.graphic.removeClass("highcharts-point-"+g);a&&this.graphic.addClass("highcharts-point-"+a);if(!h.styledMode){var y=f.pointAttribs(this,a);var A=d(h.options.chart.animation,k.animation);f.options.inactiveOtherPoints&&y.opacity&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:y.opacity},A)}),this.connector&&this.connector.animate({opacity:y.opacity},A));this.graphic.animate(y,A)}r&&this.graphic.animate(r,d(h.options.chart.animation,
n.animation,l.animation));e&&e.hide()}else{if(a&&n){g=b.symbol||f.symbol;e&&e.currentSymbol!==g&&(e=e.destroy());if(r)if(e)e[c?"animate":"attr"]({x:r.x,y:r.y});else g&&(f.stateMarkerGraphic=e=h.renderer.symbol(g,r.x,r.y,r.width,r.height).add(f.markerGroup),e.currentSymbol=g);!h.styledMode&&e&&e.attr(f.pointAttribs(this,a))}e&&(e[a&&this.isInside?"show":"hide"](),e.element.point=this)}a=k.halo;k=(e=this.graphic||e)&&e.visibility||"inherit";a&&a.size&&e&&"hidden"!==k&&!this.isCluster?(q||(f.halo=q=
h.renderer.path().add(e.parentGroup)),q.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),q.attr({"class":"highcharts-halo highcharts-color-"+d(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:""),visibility:k,zIndex:-1}),q.point=this,h.styledMode||q.attr(v({fill:this.color||f.color,"fill-opacity":a.opacity},a.attributes))):q&&q.point&&q.point.haloPath&&q.animate({d:q.point.haloPath(0)},null,q.hide);K(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});v(y.prototype,{onMouseOver:function(){var a=this.chart,c=a.hoverSeries;a.pointer.setHoverChartIndex();if(c&&c!==this)c.onMouseOut();this.options.events.mouseOver&&K(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,c=this.chart,d=c.tooltip,f=c.hoverPoint;c.hoverSeries=null;if(f)f.onMouseOut();this&&a.events.mouseOut&&K(this,"mouseOut");!d||this.stickyTracking||d.shared&&!this.noSharedTooltip||d.hide();c.series.forEach(function(a){a.setState("",
!0)})},setState:function(a,c){var f=this,g=f.options,k=f.graph,l=g.inactiveOtherPoints,m=g.states,n=g.lineWidth,p=g.opacity,e=d(m[a||"normal"]&&m[a||"normal"].animation,f.chart.options.chart.animation);g=0;a=a||"";if(f.state!==a&&([f.group,f.markerGroup,f.dataLabelsGroup].forEach(function(b){b&&(f.state&&b.removeClass("highcharts-series-"+f.state),a&&b.addClass("highcharts-series-"+a))}),f.state=a,!f.chart.styledMode)){if(m[a]&&!1===m[a].enabled)return;a&&(n=m[a].lineWidth||n+(m[a].lineWidthPlus||
0),p=d(m[a].opacity,p));if(k&&!k.dashstyle)for(m={"stroke-width":n},k.animate(m,e);f["zone-graph-"+g];)f["zone-graph-"+g].attr(m),g+=1;l||[f.group,f.markerGroup,f.dataLabelsGroup,f.labelBySeries].forEach(function(a){a&&a.animate({opacity:p},e)})}c&&l&&f.points&&f.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(c){c.setState&&c.setState(a)})},setVisible:function(a,c){var d=this,f=d.chart,g=d.legendItem,k=f.options.chart.ignoreHiddenSeries,l=d.visible;var m=(d.visible=
a=d.options.visible=d.userOptions.visible="undefined"===typeof a?!l:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(d[a])d[a][m]()});if(f.hoverSeries===d||(f.hoverPoint&&f.hoverPoint.series)===d)d.onMouseOut();g&&f.legend.colorizeItem(d,a);d.isDirty=!0;d.options.stacking&&f.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});d.linkedSeries.forEach(function(c){c.setVisible(a,!1)});k&&(f.isDirtyBox=!0);K(d,m);!1!==c&&f.redraw()},
show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected="undefined"===typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);K(this,a?"select":"unselect")},drawTracker:f.drawTrackerGraph})});O(q,"parts/Responsive.js",[q["parts/Chart.js"],q["parts/Utilities.js"]],function(g,c){var q=c.find,y=c.isArray,B=c.isObject,H=c.merge,D=c.objectEach,J=c.pick,t=c.splat,G=c.uniqueKey;g.prototype.setResponsive=function(c,g){var t=
this.options.responsive,n=[],r=this.currentResponsive;!g&&t&&t.rules&&t.rules.forEach(function(c){"undefined"===typeof c._id&&(c._id=G());this.matchResponsiveRule(c,n)},this);g=H.apply(0,n.map(function(c){return q(t.rules,function(g){return g._id===c}).chartOptions}));g.isResponsiveOptions=!0;n=n.toString()||void 0;n!==(r&&r.ruleIds)&&(r&&this.update(r.undoOptions,c,!0),n?(r=this.currentOptions(g),r.isResponsiveOptions=!0,this.currentResponsive={ruleIds:n,mergedOptions:g,undoOptions:r},this.update(g,
c,!0)):this.currentResponsive=void 0)};g.prototype.matchResponsiveRule=function(c,g){var q=c.condition;(q.callback||function(){return this.chartWidth<=J(q.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=J(q.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=J(q.minWidth,0)&&this.chartHeight>=J(q.minHeight,0)}).call(this)&&g.push(c._id)};g.prototype.currentOptions=function(c){function g(c,n,v,p){var m;D(c,function(c,l){if(!p&&-1<q.collectionsWithUpdate.indexOf(l))for(c=t(c),v[l]=[],m=0;m<Math.max(c.length,
n[l].length);m++)n[l][m]&&(void 0===c[m]?v[l][m]=n[l][m]:(v[l][m]={},g(c[m],n[l][m],v[l][m],p+1)));else B(c)?(v[l]=y(c)?[]:{},g(c,n[l]||{},v[l],p+1)):v[l]="undefined"===typeof n[l]?null:n[l]})}var q=this,n={};g(c,this.options,n,0);return n}});O(q,"masters/highcharts.src.js",[q["parts/Globals.js"]],function(g){return g});q["masters/highcharts.src.js"]._modules=q;return q["masters/highcharts.src.js"]});

},{}],"../node_modules/highcharts-react-official/dist/highcharts-react.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("highcharts")):"function"==typeof define&&define.amd?define(["react","highcharts"],t):"object"==typeof exports?exports.HighchartsReact=t(require("react"),require("highcharts")):e.HighchartsReact=t(e.React,e.Highcharts)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e){return i(e)||u(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),s=r.n(a),f=r(2),p=r.n(f),l="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,d=Object(a.forwardRef)(function(e,t){var r=Object(a.useRef)(),c=Object(a.useRef)();return l(function(){function t(){var t=e.highcharts||p.a,n=e.constructorType||"chart";t?t[n]?e.options?c.current=t[n](r.current,e.options,e.callback?e.callback:void 0):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(c.current){if(!1!==e.allowChartUpdate)if(!e.immutable&&c.current){var n;(n=c.current).update.apply(n,[e.options].concat(o(e.updateArgs||[!0,!0])))}else t()}else t()}),l(function(){return function(){c.current&&(c.current.destroy(),c.current=null)}},[]),Object(a.useImperativeHandle)(t,function(){return{get chart(){return c.current},container:r}},[]),s.a.createElement("div",n({},e.containerProps,{ref:r}))});t.default=Object(a.memo)(d)},function(t,r){t.exports=e},function(e,r){e.exports=t}])});

},{"react":"../node_modules/react/index.js","highcharts":"../node_modules/highcharts/highcharts.js"}],"Entities/Serie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Serie = /*#__PURE__*/function () {
  function Serie(_ref) {
    var name = _ref.name;

    _classCallCheck(this, Serie);

    _defineProperty(this, "__type__", 'spline');

    _defineProperty(this, "__data__", []);

    this.__name__ = name;
  }

  _createClass(Serie, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        type: this.__type__,
        name: this.__name__,
        data: this.__data__,
        dashStyle: this.__dashStyle__
      };
    }
  }, {
    key: "data",
    set: function set(value) {
      this.__data__ = value;
    },
    get: function get() {
      return this.__dashStyle__;
    }
  }, {
    key: "dashStyle",
    set: function set(value) {
      this.__dashStyle__ = value;
    }
  }]);

  return Serie;
}();

var _default = Serie;
exports.default = _default;
},{}],"utils/items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataItem = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getX = function getX(dateString) {
  var _dateString$split = dateString.split('-'),
      _dateString$split2 = _slicedToArray(_dateString$split, 3),
      y = _dateString$split2[0],
      m = _dateString$split2[1],
      d = _dateString$split2[2];

  return Date.UTC(y, m - 1, d);
};

var getDataItem = function getDataItem(dateString) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    x: getX(dateString),
    y: amount
  };
};

exports.getDataItem = getDataItem;
},{}],"Entities/SeriesFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Serie = _interopRequireDefault(require("./Serie"));

var _items = require("../utils/items");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var items = data.items;

var SeriesFactory = /*#__PURE__*/function () {
  function SeriesFactory() {
    _classCallCheck(this, SeriesFactory);

    _defineProperty(this, "__seriesMap__", {});
  }

  _createClass(SeriesFactory, [{
    key: "createArray",
    value: function createArray(name, maxArrayLength, mathFunc) {
      var _this = this;

      var seriesOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        dashStyle: 'Solid'
      };
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        getter: function getter(item) {
          return item.spending.sum;
        }
      };

      if (!this.__seriesMap__[name]) {
        this.__seriesMap__[name] = [];
      }

      var serie = new _Serie.default({
        name: name
      });
      serie.data = Object.keys(items).map(function (dateString) {
        var item = items[dateString];

        if (_this.__seriesMap__[name].length === maxArrayLength) {
          _this.__seriesMap__[name] = _this.__seriesMap__[name].slice(1);
        }

        _this.__seriesMap__[name].push(options.getter(item));

        return (0, _items.getDataItem)(dateString, mathFunc(_this.__seriesMap__[name]));
      });
      serie.dashStyle = seriesOptions.dashStyle;
      return serie.toJSON();
    }
  }]);

  return SeriesFactory;
}();

var _default = SeriesFactory;
exports.default = _default;
},{"./Serie":"Entities/Serie.js","../utils/items":"utils/items.js"}],"utils/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.median = exports.mean = exports.sum = void 0;

var sum = function sum(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
};

exports.sum = sum;

var mean = function mean(array) {
  var arraySum = sum(array);
  return arraySum / array.length;
};

exports.mean = mean;

var median = function median(array) {
  var sortFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
    return a - b;
  };
  var sortedArray = array.sort(sortFunc);

  if (sortedArray.length % 2 === 0) {
    // array with even number elements
    return (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) / 2;
  }

  return array[(array.length - 1) / 2]; // array with odd number elements
};

exports.median = median;
},{}],"components/Chart.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _highstock = _interopRequireDefault(require("highcharts/highstock"));

var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));

var _SeriesFactory = _interopRequireDefault(require("../Entities/SeriesFactory"));

var _array = require("../utils/array");

var _items = require("../utils/items");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var items = data.items;
var seriesFactory = new _SeriesFactory.default();
var options = {
  title: {
    text: 'Mean and median'
  },
  chart: {
    height: '800px'
  },
  legend: {
    enabled: true
  },
  rangeSelector: {
    selected: 0
  },
  xAxis: [{
    type: 'datetime',
    dateTimeLabelFormats: {
      month: '%e. %b',
      year: '%b'
    },
    title: {
      text: 'Date'
    }
  }, {
    type: 'datetime',
    dateTimeLabelFormats: {
      // don't display the dummy year
      month: '%e. %b',
      year: '%b'
    },
    title: {
      text: 'Date'
    }
  }],
  series: [seriesFactory.createArray('median 2w', 14, _array.median), seriesFactory.createArray('mean 2w', 14, _array.mean, {
    dashStyle: 'Dash'
  }), seriesFactory.createArray('median 1w', 7, _array.median), seriesFactory.createArray('mean 1w', 7, _array.mean, {
    dashStyle: 'Dash'
  }), seriesFactory.createArray('median 30d', 30, _array.median), seriesFactory.createArray('mean 30d', 30, _array.mean, {
    dashStyle: 'Dash'
  }), {
    type: 'spline',
    name: 'current balance',
    data: Object.keys(items).map(function (dateString) {
      var item = items[dateString];
      return (0, _items.getDataItem)(dateString, item.current);
    })
  }]
};

var Chart = function Chart() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_highchartsReactOfficial.default, {
    highcharts: _highstock.default,
    constructorType: 'stockChart',
    options: options
  }));
};

var _default = Chart;
exports.default = _default;
},{"react":"../node_modules/react/index.js","highcharts/highstock":"../node_modules/highcharts/highstock.js","highcharts-react-official":"../node_modules/highcharts-react-official/dist/highcharts-react.min.js","../Entities/SeriesFactory":"Entities/SeriesFactory.js","../utils/array":"utils/array.js","../utils/items":"utils/items.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/Chart.ccb9443e.js.map