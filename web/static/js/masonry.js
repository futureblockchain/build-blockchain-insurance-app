/*!
 * Name: ibm.com v18 production file
 * Release: 97.0.0
 * Built: 2017-07-07 9:21:53 AM EDT
 * Owner: Corporate Webmaster (NUS_N_NIWWW)
 * Copyright (c) 2017 IBM Corporation
 * Description: Official file for production use
 */
/*!
 * Masonry PACKAGED v4.1.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(a,b){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(c){return b(a,c)}):"object"==typeof module&&module.exports?module.exports=b(a,require("jquery")):a.jQueryBridget=b(a,a.jQuery)}(window,function(b,f){function a(k,m,e){function l(i,q,u){var s,p="$()."+k+'("'+q+'")';return i.each(function(r,v){var o=e.data(v,k);if(!o){return void c(k+" not initialized. Cannot call methods, i.e. "+p)}var w=o[q];if(!w||"_"==q.charAt(0)){return void c(p+" is not a valid method")}var n=w.apply(o,u);s=void 0===s?n:s}),void 0!==s?s:i}function j(i,n){i.each(function(p,r){var q=e.data(r,k);q?(q.option(n),q._init()):(q=new m(r,n),e.data(r,k,q))})}e=e||f||b.jQuery,e&&(m.prototype.option||(m.prototype.option=function(i){e.isPlainObject(i)&&(this.options=e.extend(!0,this.options,i))}),e.fn[k]=function(i){if("string"==typeof i){var n=g.call(arguments,1);return l(this,i,n)}return j(this,i),this},h(e))}function h(e){!e||e&&e.bridget||(e.bridget=a)}var g=Array.prototype.slice,d=b.console,c="undefined"==typeof d?function(){}:function(e){d.error(e)};return h(f||b.jQuery),a}),function(a,b){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",b):"object"==typeof module&&module.exports?module.exports=b():a.EvEmitter=b()}("undefined"!=typeof window?window:this,function(){function a(){}var b=a.prototype;return b.on=function(d,f){if(d&&f){var c=this._events=this._events||{},g=c[d]=c[d]||[];return -1==g.indexOf(f)&&g.push(f),this}},b.once=function(d,f){if(d&&f){this.on(d,f);var c=this._onceEvents=this._onceEvents||{},g=c[d]=c[d]||{};return g[f]=!0,this}},b.off=function(d,f){var c=this._events&&this._events[d];if(c&&c.length){var g=c.indexOf(f);return -1!=g&&c.splice(g,1),this}},b.emitEvent=function(d,h){var c=this._events&&this._events[d];if(c&&c.length){var k=0,j=c[k];h=h||[];for(var g=this._onceEvents&&this._onceEvents[d];j;){var f=g&&g[j];f&&(this.off(d,j),delete g[j]),j.apply(this,h),k+=f?0:1,j=c[k]}return this}},a}),function(a,b){"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return b()}):"object"==typeof module&&module.exports?module.exports=b():a.getSize=b()}(window,function(){function q(d){var h=parseFloat(d),a=-1==d.indexOf("%")&&!isNaN(h);return a&&h}function k(){}function g(){for(var d={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},h=0;p>h;h++){var a=j[h];d[a]=0}return d}function f(a){var d=getComputedStyle(a);return d||m("Style returned "+d+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),d}function c(){if(!l){l=!0;var d=document.createElement("div");d.style.width="200px",d.style.padding="1px 2px 3px 4px",d.style.borderStyle="solid",d.style.borderWidth="1px 2px 3px 4px",d.style.boxSizing="border-box";var a=document.body||document.documentElement;a.appendChild(d);var h=f(d);b.isBoxSizeOuter=v=200==q(h.width),a.removeChild(d)}}function b(u){if(c(),"string"==typeof u&&(u=document.querySelector(u)),u&&"object"==typeof u&&u.nodeType){var h=f(u);if("none"==h.display){return g()}var G={};G.width=u.offsetWidth,G.height=u.offsetHeight;for(var w=G.isBorderBox="border-box"==h.boxSizing,o=0;p>o;o++){var B=j[o],t=h[B],n=parseFloat(t);G[B]=isNaN(n)?0:n}var i=G.paddingLeft+G.paddingRight,s=G.paddingTop+G.paddingBottom,D=G.marginLeft+G.marginRight,I=G.marginTop+G.marginBottom,H=G.borderLeftWidth+G.borderRightWidth,J=G.borderTopWidth+G.borderBottomWidth,A=w&&v,C=q(h.width);C!==!1&&(G.width=C+(A?0:i+H));var F=q(h.height);return F!==!1&&(G.height=F+(A?0:s+J)),G.innerWidth=G.width-(i+H),G.innerHeight=G.height-(s+J),G.outerWidth=G.width+D,G.outerHeight=G.height+I,G}}var v,m="undefined"==typeof console?k:function(a){console.error(a)},j=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],p=j.length,l=!1;return b}),function(a,b){"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",b):"object"==typeof module&&module.exports?module.exports=b():a.matchesSelector=b()}(window,function(){var a=function(){var c=Element.prototype;if(c.matches){return"matches"}if(c.matchesSelector){return"matchesSelector"}for(var d=["webkit","moz","ms","o"],b=0;b<d.length;b++){var g=d[b],f=g+"MatchesSelector";if(c[f]){return f}}}();return function(c,b){return c[a](b)}}),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(c){return b(a,c)}):"object"==typeof module&&module.exports?module.exports=b(a,require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.matchesSelector)}(window,function(b,c){var a={};a.extend=function(g,h){for(var f in h){g[f]=h[f]}return g},a.modulo=function(f,g){return(f%g+g)%g},a.makeArray=function(g){var h=[];if(Array.isArray(g)){h=g}else{if(g&&"number"==typeof g.length){for(var f=0;f<g.length;f++){h.push(g[f])}}else{h.push(g)}}return h},a.removeFrom=function(g,h){var f=g.indexOf(h);-1!=f&&g.splice(f,1)},a.getParent=function(f,e){for(;f!=document.body;){if(f=f.parentNode,c(f,e)){return f}}},a.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},a.handleEvent=function(f){var g="on"+f.type;this[g]&&this[g](f)},a.filterFindElements=function(e,g){e=a.makeArray(e);var f=[];return e.forEach(function(j){if(j instanceof HTMLElement){if(!g){return void f.push(j)}c(j,g)&&f.push(j);for(var h=j.querySelectorAll(g),k=0;k<h.length;k++){f.push(h[k])}}}),f},a.debounceMethod=function(g,h,f){var k=g.prototype[h],j=h+"Timeout";g.prototype[h]=function(){var i=this[j];i&&clearTimeout(i);var m=arguments,l=this;this[j]=setTimeout(function(){k.apply(l,m),delete l[j]},f||100)}},a.docReady=function(f){var g=document.readyState;"complete"==g||"interactive"==g?f():document.addEventListener("DOMContentLoaded",f)},a.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(g,h,f){return h+"-"+f}).toLowerCase()};var d=b.console;return a.htmlInit=function(f,g){a.docReady(function(){var n=a.toDashed(g),m="data-"+n,i=document.querySelectorAll("["+m+"]"),k=document.querySelectorAll(".js-"+n),j=a.makeArray(i).concat(a.makeArray(k)),o=m+"-options",e=b.jQuery;j.forEach(function(q){var p,u=q.getAttribute(m)||q.getAttribute(o);try{p=u&&JSON.parse(u)}catch(l){return void (d&&d.error("Error parsing "+m+" on "+q.className+": "+l))}var s=new f(q,p);e&&e.data(q,g,s)})})},a}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],b):"object"==typeof module&&module.exports?module.exports=b(require("ev-emitter"),require("get-size")):(a.Outlayer={},a.Outlayer.Item=b(a.EvEmitter,a.getSize))}(window,function(A,v){function m(a){for(var c in a){return !1}return c=null,!0}function j(a,c){a&&(this.element=a,this.layout=c,this.position={x:0,y:0},this._create())}function g(a){return a.replace(/([A-Z])/g,function(c){return"-"+c.toLowerCase()})}var b=document.documentElement.style,B="string"==typeof b.transition?"transition":"WebkitTransition",y="string"==typeof b.transform?"transform":"WebkitTransform",p={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[B],z={transform:y,transition:B,transitionDuration:B+"Duration",transitionProperty:B+"Property",transitionDelay:B+"Delay"},w=j.prototype=Object.create(A.prototype);w.constructor=j,w._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},w.handleEvent=function(a){var c="on"+a.type;this[c]&&this[c](a)},w.getSize=function(){this.size=v(this.element)},w.css=function(c){var d=this.element.style;for(var a in c){var f=z[a]||a;d[f]=c[a]}},w.getPosition=function(){var f=getComputedStyle(this.element),u=this.layout._getOption("originLeft"),d=this.layout._getOption("originTop"),D=f[u?"left":"right"],C=f[d?"top":"bottom"],l=this.layout.size,h=-1!=D.indexOf("%")?parseFloat(D)/100*l.width:parseInt(D,10),c=-1!=C.indexOf("%")?parseFloat(C)/100*l.height:parseInt(C,10);h=isNaN(h)?0:h,c=isNaN(c)?0:c,h-=u?l.paddingLeft:l.paddingRight,c-=d?l.paddingTop:l.paddingBottom,this.position.x=h,this.position.y=c},w.layoutPosition=function(){var K=this.layout.size,G={},E=this.layout._getOption("originLeft"),C=this.layout._getOption("originTop"),f=E?"paddingLeft":"paddingRight",c=E?"left":"right",L=E?"right":"left",I=this.position.x+K[f];G[c]=this.getXValue(I),G[L]="";var F=C?"paddingTop":"paddingBottom",J=C?"top":"bottom",H=C?"bottom":"top",D=this.position.y+K[F];G[J]=this.getYValue(D),G[H]="",this.css(G),this.emitEvent("layout",[this])},w.getXValue=function(a){var c=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!c?a/this.layout.size.width*100+"%":a+"px"},w.getYValue=function(a){var c=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&c?a/this.layout.size.height*100+"%":a+"px"},w._transitionTo=function(G,D){this.getPosition();var l=this.position.x,f=this.position.y,d=parseInt(G,10),c=parseInt(D,10),H=d===this.position.x&&c===this.position.y;if(this.setPosition(G,D),H&&!this.isTransitioning){return void this.layoutPosition()}var E=G-l,C=D-f,F={};F.transform=this.getTranslate(E,C),this.transition({to:F,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},w.getTranslate=function(c,d){var a=this.layout._getOption("originLeft"),f=this.layout._getOption("originTop");return c=a?c:-c,d=f?d:-d,"translate3d("+c+"px, "+d+"px, 0)"},w.goTo=function(a,c){this.setPosition(a,c),this.layoutPosition()},w.moveTo=w._transitionTo,w.setPosition=function(a,c){this.position.x=parseInt(a,10),this.position.y=parseInt(c,10)},w._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var c in a.onTransitionEnd){a.onTransitionEnd[c].call(this)}},w.transition=function(c){if(!parseFloat(this.layout.options.transitionDuration)){return void this._nonTransition(c)}var d=this._transn;for(var a in c.onTransitionEnd){d.onEnd[a]=c.onTransitionEnd[a]}for(a in c.to){d.ingProperties[a]=!0,c.isCleaning&&(d.clean[a]=!0)}if(c.from){this.css(c.from);var f=this.element.offsetHeight;f=null}this.enableTransition(c.to),this.css(c.to),this.isTransitioning=!0};var k="opacity,"+g(y);w.enableTransition=function(){if(!this.isTransitioning){var a=this.layout.options.transitionDuration;a="number"==typeof a?a+"ms":a,this.css({transitionProperty:k,transitionDuration:a,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(p,this,!1)}},w.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},w.onotransitionend=function(a){this.ontransitionend(a)};var x={"-webkit-transform":"transform"};w.ontransitionend=function(a){if(a.target===this.element){var c=this._transn,f=x[a.propertyName]||a.propertyName;if(delete c.ingProperties[f],m(c.ingProperties)&&this.disableTransition(),f in c.clean&&(this.element.style[a.propertyName]="",delete c.clean[f]),f in c.onEnd){var d=c.onEnd[f];d.call(this),delete c.onEnd[f]}this.emitEvent("transitionEnd",[this])}},w.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(p,this,!1),this.isTransitioning=!1},w._removeStyles=function(c){var d={};for(var a in c){d[a]=""}this.css(d)};var q={transitionProperty:"",transitionDuration:"",transitionDelay:""};return w.removeTransitionStyles=function(){this.css(q)},w.stagger=function(a){a=isNaN(a)?0:a,this.staggerDelay=a+"ms"},w.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},w.remove=function(){return B&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},w.reveal=function(){delete this.isHidden,this.css({display:""});var c=this.layout.options,d={},a=this.getHideRevealTransitionEndProperty("visibleStyle");d[a]=this.onRevealTransitionEnd,this.transition({from:c.hiddenStyle,to:c.visibleStyle,isCleaning:!0,onTransitionEnd:d})},w.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},w.getHideRevealTransitionEndProperty=function(c){var d=this.layout.options[c];if(d.opacity){return"opacity"}for(var a in d){return a}},w.hide=function(){this.isHidden=!0,this.css({display:""});var c=this.layout.options,d={},a=this.getHideRevealTransitionEndProperty("hiddenStyle");d[a]=this.onHideTransitionEnd,this.transition({from:c.visibleStyle,to:c.hiddenStyle,isCleaning:!0,onTransitionEnd:d})},w.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},w.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},j}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,f,e,d){return b(a,c,f,e,d)}):"object"==typeof module&&module.exports?module.exports=b(a,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.EvEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(C,x,q,j,g){function b(c,f){var a=j.getQueryElement(c);if(!a){return void (v&&v.error("Bad element for "+this.constructor.namespace+": "+(a||c)))}this.element=a,B&&(this.$element=B(this.element)),this.options=j.extend({},this.constructor.defaults),this.option(f);var h=++p;this.element.outlayerGUID=h,z[h]=this,this._create();var d=this._getOption("initLayout");d&&this.layout()}function D(a){function c(){a.apply(this,arguments)}return c.prototype=Object.create(a.prototype),c.prototype.constructor=c,c}function A(c){if("number"==typeof c){return c}var d=c.match(/(^\d*\.?\d*)(\w*)/),a=d&&d[1],h=d&&d[2];if(!a.length){return 0}a=parseFloat(a);var f=k[h]||1;return a*f}var v=C.console,B=C.jQuery,y=function(){},p=0,z={};b.namespace="outlayer",b.Item=g,b.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var w=b.prototype;j.extend(w,x.prototype),w.option=function(a){j.extend(this.options,a)},w._getOption=function(a){var c=this.constructor.compatOptions[a];return c&&void 0!==this.options[c]?this.options[c]:this.options[a]},b.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},w._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),j.extend(this.element.style,this.options.containerStyle);var a=this._getOption("resize");a&&this.bindResize()},w.reloadItems=function(){this.items=this._itemize(this.element.children)},w._itemize=function(c){for(var h=this._filterFindItemElements(c),a=this.constructor.Item,m=[],l=0;l<h.length;l++){var f=h[l],d=new a(f,this);m.push(d)}return m},w._filterFindItemElements=function(a){return j.filterFindElements(a,this.options.itemSelector)},w.getItemElements=function(){return this.items.map(function(a){return a.element})},w.layout=function(){this._resetLayout(),this._manageStamps();var a=this._getOption("layoutInstant"),c=void 0!==a?a:!this._isLayoutInited;this.layoutItems(this.items,c),this._isLayoutInited=!0},w._init=w.layout,w._resetLayout=function(){this.getSize()},w.getSize=function(){this.size=q(this.element)},w._getMeasurement=function(a,c){var f,d=this.options[a];d?("string"==typeof d?f=this.element.querySelector(d):d instanceof HTMLElement&&(f=d),this[a]=f?q(f)[c]:d):this[a]=0},w.layoutItems=function(a,c){a=this._getItemsForLayout(a),this._layoutItems(a,c),this._postLayout()},w._getItemsForLayout=function(a){return a.filter(function(c){return !c.isIgnored})},w._layoutItems=function(c,d){if(this._emitCompleteOnItems("layout",c),c&&c.length){var a=[];c.forEach(function(e){var f=this._getItemLayoutPosition(e);f.item=e,f.isInstant=d||e.isLayoutInstant,a.push(f)},this),this._processLayoutQueue(a)}},w._getItemLayoutPosition=function(){return{x:0,y:0}},w._processLayoutQueue=function(a){this.updateStagger(),a.forEach(function(c,d){this._positionItem(c.item,c.x,c.y,c.isInstant,d)},this)},w.updateStagger=function(){var a=this.options.stagger;return null===a||void 0===a?void (this.stagger=0):(this.stagger=A(a),this.stagger)},w._positionItem=function(c,d,a,h,f){h?c.goTo(d,a):(c.stagger(f*this.stagger),c.moveTo(d,a))},w._postLayout=function(){this.resizeContainer()},w.resizeContainer=function(){var a=this._getOption("resizeContainer");if(a){var c=this._getContainerSize();c&&(this._setContainerMeasure(c.width,!0),this._setContainerMeasure(c.height,!1))}},w._getContainerSize=y,w._setContainerMeasure=function(c,d){if(void 0!==c){var a=this.size;a.isBorderBox&&(c+=d?a.paddingLeft+a.paddingRight+a.borderLeftWidth+a.borderRightWidth:a.paddingBottom+a.paddingTop+a.borderTopWidth+a.borderBottomWidth),c=Math.max(c,0),this.element.style[d?"width":"height"]=c+"px"}},w._emitCompleteOnItems=function(c,h){function a(){l.dispatchEvent(c+"Complete",null,[h])}function m(){d++,d==f&&a()}var l=this,f=h.length;if(!h||!f){return void a()}var d=0;h.forEach(function(i){i.once(c,m)})},w.dispatchEvent=function(c,d,a){var h=d?[d].concat(a):a;if(this.emitEvent(c,h),B){if(this.$element=this.$element||B(this.element),d){var f=B.Event(d);f.type=c,this.$element.trigger(f,a)}else{this.$element.trigger(c,a)}}},w.ignore=function(a){var c=this.getItem(a);c&&(c.isIgnored=!0)},w.unignore=function(a){var c=this.getItem(a);c&&delete c.isIgnored},w.stamp=function(a){a=this._find(a),a&&(this.stamps=this.stamps.concat(a),a.forEach(this.ignore,this))},w.unstamp=function(a){a=this._find(a),a&&a.forEach(function(c){j.removeFrom(this.stamps,c),this.unignore(c)},this)},w._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=j.makeArray(a)):void 0},w._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},w._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),c=this.size;this._boundingRect={left:a.left+c.paddingLeft+c.borderLeftWidth,top:a.top+c.paddingTop+c.borderTopWidth,right:a.right-(c.paddingRight+c.borderRightWidth),bottom:a.bottom-(c.paddingBottom+c.borderBottomWidth)}},w._manageStamp=y,w._getElementOffset=function(a){var d=a.getBoundingClientRect(),h=this._boundingRect,f=q(a),c={left:d.left-h.left-f.marginLeft,top:d.top-h.top-f.marginTop,right:h.right-d.right-f.marginRight,bottom:h.bottom-d.bottom-f.marginBottom};return c},w.handleEvent=j.handleEvent,w.bindResize=function(){C.addEventListener("resize",this),this.isResizeBound=!0},w.unbindResize=function(){C.removeEventListener("resize",this),this.isResizeBound=!1},w.onresize=function(){this.resize()},j.debounceMethod(b,"onresize",100),w.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},w.needsResizeLayout=function(){var a=q(this.element),c=this.size&&a;return c&&a.innerWidth!==this.size.innerWidth},w.addItems=function(a){var c=this._itemize(a);return c.length&&(this.items=this.items.concat(c)),c},w.appended=function(a){var c=this.addItems(a);c.length&&(this.layoutItems(c,!0),this.reveal(c))},w.prepended=function(c){var d=this._itemize(c);if(d.length){var a=this.items.slice(0);this.items=d.concat(a),this._resetLayout(),this._manageStamps(),this.layoutItems(d,!0),this.reveal(d),this.layoutItems(a)}},w.reveal=function(a){if(this._emitCompleteOnItems("reveal",a),a&&a.length){var c=this.updateStagger();a.forEach(function(e,d){e.stagger(d*c),e.reveal()})}},w.hide=function(a){if(this._emitCompleteOnItems("hide",a),a&&a.length){var c=this.updateStagger();a.forEach(function(e,d){e.stagger(d*c),e.hide()})}},w.revealItemElements=function(a){var c=this.getItems(a);this.reveal(c)},w.hideItemElements=function(a){var c=this.getItems(a);this.hide(c)},w.getItem=function(c){for(var d=0;d<this.items.length;d++){var a=this.items[d];if(a.element==c){return a}}},w.getItems=function(a){a=j.makeArray(a);var c=[];return a.forEach(function(e){var d=this.getItem(e);d&&c.push(d)},this),c},w.remove=function(a){var c=this.getItems(a);this._emitCompleteOnItems("remove",c),c&&c.length&&c.forEach(function(d){d.remove(),j.removeFrom(this.items,d)},this)},w.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="",this.items.forEach(function(d){d.destroy()}),this.unbindResize();var c=this.element.outlayerGUID;delete z[c],delete this.element.outlayerGUID,B&&B.removeData(this.element,this.constructor.namespace)},b.data=function(a){a=j.getQueryElement(a);var c=a&&a.outlayerGUID;return c&&z[c]},b.create=function(c,d){var a=D(b);return a.defaults=j.extend({},b.defaults),j.extend(a.defaults,d),a.compatOptions=j.extend({},b.compatOptions),a.namespace=c,a.data=b.data,a.Item=D(g),j.htmlInit(a,c),B&&B.bridget&&B.bridget(c,a),a};var k={ms:1,s:1000};return b.Item=g,b}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],b):"object"==typeof module&&module.exports?module.exports=b(require("outlayer"),require("get-size")):a.Masonry=b(a.Outlayer,a.getSize)}(window,function(b,c){var a=b.create("masonry");return a.compatOptions.fitWidth="isFitWidth",a.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var d=0;d<this.cols;d++){this.colYs.push(0)}this.maxY=0},a.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var f=this.items[0],e=f&&f.element;this.columnWidth=e&&c(e).outerWidth||this.containerWidth}var k=this.columnWidth+=this.gutter,j=this.containerWidth+this.gutter,h=j/k,g=k-j%k,d=g&&1>g?"round":"floor";h=Math[d](h),this.cols=Math.max(h,1)},a.prototype.getContainerWidth=function(){var e=this._getOption("fitWidth"),d=e?this.element.parentNode:this.element,f=c(d);this.containerWidth=f&&f.innerWidth},a.prototype._getItemLayoutPosition=function(w){w.getSize();var m=w.size.outerWidth%this.columnWidth,k=m&&1>m?"round":"ceil",j=Math[k](w.size.outerWidth/this.columnWidth);j=Math.min(j,this.cols);for(var g=this._getColGroup(j),f=Math.min.apply(Math,g),x=g.indexOf(f),q={x:this.columnWidth*x,y:f},l=f+w.size.outerHeight,v=this.cols+1-g.length,p=0;v>p;p++){this.colYs[x+p]=l}return q},a.prototype._getColGroup=function(f){if(2>f){return this.colYs}for(var g=[],d=this.cols+1-f,j=0;d>j;j++){var h=this.colYs.slice(j,j+f);g[j]=Math.max.apply(Math,h)}return g},a.prototype._manageStamp=function(w){var k=c(w),g=this._getElementOffset(w),f=this._getOption("originLeft"),e=f?g.left:g.right,x=e+k.outerWidth,q=Math.floor(e/this.columnWidth);q=Math.max(0,q);var m=Math.floor(x/this.columnWidth);m-=x%this.columnWidth?0:1,m=Math.min(this.cols-1,m);for(var v=this._getOption("originTop"),p=(v?g.top:g.bottom)+k.outerHeight,j=q;m>=j;j++){this.colYs[j]=Math.max(p,this.colYs[j])}},a.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var d={height:this.maxY};return this._getOption("fitWidth")&&(d.width=this._getContainerFitWidth()),d},a.prototype._getContainerFitWidth=function(){for(var d=0,f=this.cols;--f&&0===this.colYs[f];){d++}return(this.cols-d)*this.columnWidth-this.gutter},a.prototype.needsResizeLayout=function(){var d=this.containerWidth;return this.getContainerWidth(),d!=this.containerWidth},a});(function(c,a){var b=a.namespace(a,"common.widget.masonry");b.init=function(g,f){var d=c(g),e,h={};e=c.extend({},h,d.data()||{},f);if(e.items){e.itemSelector=e.items}d.imagesLoaded(function(){d.masonry(e)})}})(jQuery,IBMCore);