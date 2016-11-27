"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'");}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e);},f,f.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;})({1:[function(require,module,exports){require('./lib/blaze/templateHTML');require('./lib/blaze/templateJS');require('./routes/frontend');},{"./lib/blaze/templateHTML":3,"./lib/blaze/templateJS":4,"./routes/frontend":5}],2:[function(require,module,exports){module.exports={render:function render(template){if(!template||!Template[template])return;return Blaze.render(Template[template],document.getElementById("blaze__root"));}};},{}],3:[function(require,module,exports){var _=require('underscore');var $=require('jquery');window.Meteor=require('meteor-client')($,_);window.Blaze=Meteor.Blaze;window.Spacebars=Meteor.Spacebars;window.SpacebarsCompiler=Meteor.SpacebarsCompiler;window.Template=Meteor.Template;var compileTemplate=function compileTemplate(name,html_text){var eval2=eval;try{var compiled=SpacebarsCompiler.compile(html_text,{isTemplate:true}),renderer=eval2(compiled);Template.__define__(name,renderer);}catch(err){console.log('Error compiling template: '+html_text);console.error(err);}};compileTemplate("contact","Contact Page");compileTemplate("index","Hello World!\n{{message}}");},{"jquery":7,"meteor-client":8,"underscore":32}],4:[function(require,module,exports){Template.contact.helpers({});Template.index.helpers({message:function message(){return"Response from helper";}});},{}],5:[function(require,module,exports){var page=require('page');var _require=require('../lib/app'),render=_require.render;page('/',function(ctx){render('index');});page.start();},{"../lib/app":2,"page":29}],6:[function(require,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=='[object Array]';};},{}],7:[function(require,module,exports){/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */(function(global,factory){"use strict";if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
})(typeof window!=="undefined"?window:this,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code;doc.head.appendChild(script).parentNode.removeChild(script);}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var version="3.1.1",// Define a local copy of jQuery
jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,// Used by jQuery.camelCase as callback to replace()
fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function get(num){// Return all the elements in a clean array
if(num==null){return _slice.call(this);}// Return just the one element from the set
return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function pushStack(elems){// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
ret.prevObject=this;// Return the newly-formed element set
return ret;},// Execute a callback for every element in the matched set.
each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
if((options=arguments[i])!=null){// Extend the base object
for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
return target;};jQuery.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(obj-parseFloat(obj));},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
globalEval:function globalEval(code){DOMEval(code);},// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
// that pass the validator function
for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
return concat.apply([],ret);},// A global GUID counter for objects
guid:1,// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form"in elem||"label"in elem);},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
// Detect silently failing push.apply
arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
// Otherwise append directly
function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
if(m=match[1]){// Document context
if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
}else{// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
// Thanks to Andrew Dupont for this workaround technique
// Support: IE <=8
// Exclude object elements
}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function markFunction(fn){fn[expando]=true;return fn;}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
el=null;}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
if(diff){return diff;}// Check if b follows a
if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
// Use the isDisabled shortcut property to check for disabled fieldset ancestors
return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
/* jshint -W018 */elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
// even exist on them, let alone have a boolean value.
}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
return false;};}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
support=Sizzle.support={};/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
	---------------------------------------------------------------------- */// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
	---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
results=context.getElementsByTagName(tag);// Filter out possible comments
if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
// Regex strategy adopted from Diego Perini
assert(function(el){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
// Boolean attributes and "value" are not treated correctly
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
// Enforce case-sensitivity of name attribute
if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
// Gecko does not error, returns false instead
matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
	---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
sortInput=null;return results;};/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
while(node=elem[i++]){// Do not traverse comment nodes
ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(forward&&useCache){// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
if(useCache){// ...in a gzip-friendly way
node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(diff===false){// Use the same loop as above to seek `elem` from the start
while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
if(fn[expando]){return fn(argument);}// But maintain support for old signatures
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
"not":markFunction(function(selector){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
"lang":markFunction(function(lang){// lang value must be a valid identifier
if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
// options in Safari work properly
if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
results:matcherIn;// Find primary matches
if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
if(matcher[expando]){// Find the next relative operator (if any) for proper handling
j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
if(bySet){// They will have gone through all possible matchers
if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i;// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched);}// Add matches to results
push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
cached.selector=selector;}return cached;};/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(match.length===1){// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
// Sort stability
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Simple selector that can be filtered directly, removing non-Elements
if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}// Complex selector, compare the two sets, removing non-Elements
qualifier=jQuery.filter(qualifier,elements);return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&elem.nodeType===1;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector){return this;}// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery;// Handle HTML strings
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
// Shortcut for document ready
}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn;// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
index:function index(elem){// No argument, return index in parent
if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
return indexOf.call(this,// If it receives a jQuery object, the first element is used
elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,// Last fire value for non-forgettable lists
memory,// Flag to know if list was already fired
_fired,// Flag to prevent firing
_locked,// Actual callback list
list=[],// Queue of execution data for repeatable lists
queue=[],// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,// Fire callbacks
fire=function fire(){// Enforce single-firing
_locked=options.once;// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
if(_locked){// Keep an empty list if we have data for future add calls
if(memory){list=[];// Otherwise, this object is spent
}else{list="";}}},// Actual Callbacks object
self={// Add a callback or a collection of callbacks to the list
add:function add(){if(list){// If we have memory from a past run, we should fire after adding
if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject){var method;try{// Check for promise aspect first to privilege synchronous behavior
if(value&&jQuery.isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
}else if(value&&jQuery.isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
}else{// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
resolve.call(undefined,value);}// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(value){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.call(undefined,value);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
(typeof returned==="undefined"?"undefined":_typeof(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
if(jQuery.isFunction(then)){// Special processors (notify) just wait for resolution
if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
}else{// ...and disregard older resolution values
maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
}else{// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
if(depth+1>=maxDepth){// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
_promise[tuple[1]]=list.add;// Handle state
if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
_state=stateString;},// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,// progress_callbacks.lock
tuples[0][2].lock);}// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
_promise.promise(deferred);// Call given func if any
if(func){func.call(deferred,deferred);}// All done!
return deferred;},// Deferred helper
when:function when(singleValue){var// count of uncompleted subordinates
remaining=arguments.length,// count of unprocessed arguments
i=remaining,// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
master=jQuery.Deferred(),// subordinate callback factory
updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject);// Use .then() to unwrap secondary thenables (cf. gh-3000)
if(master.state()==="pending"||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Hold (or release) the ready event
holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
ready:function ready(wait){// Abort if there are pending holds or we're already ready
if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready);}else{// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
var value=owner[this.expando];// If not, create one
if(!value){value={};// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
// configurable must be true to allow the property to be
// deleted when data is removed
}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if(typeof data==="string"){cache[jQuery.camelCase(data)]=value;// Handle: [ owner, { properties } ] args
}else{// Copy the properties one-by-one to the cache object
for(prop in data){cache[jQuery.camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];},access:function access(owner,key,value){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(owner,key,value);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
if(jQuery.isArray(key)){// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(jQuery.camelCase);}else{key=jQuery.camelCase(key);// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
// The attrs elements can be null (#14894)
if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&value===undefined){// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
return;}// Set the data...
this.each(function(){// We always store the camelCased key
dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
elem=el||elem;// Inline style trumps all
return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
scale=scale||".5";// Adjust and apply
initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
// Break the loop if scale is unchanged or perfect, or if we've just had enough.
}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
var wrapMap={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&jQuery.nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
if(jQuery.type(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
tmp.textContent="";}}}// Remove wrapper from fragment
fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
if(contains){setGlobalEval(tmp);}// Capture executables
if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
if(typeof selector!=="string"){// ( types-Object, data )
data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
fn=data;data=undefined;}else{// ( types, data, fn )
fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Find delegate handlers
if(delegateCount&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
cur.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
cur=this;if(delegateCount<_handlers.length){handlerQueue.push({elem:cur,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:jQuery.isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
src.returnValue===false?returnTrue:returnFalse;// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
}else{this.type=src;}// Put explicitly provided properties onto the event object
if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}if(button&2){return 3;}if(button&4){return 2;}return 0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return elem.getElementsByTagName("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());}return this.pushStack(ret);};});var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){// This is a singleton, we need to execute it only once
if(!div){return;}div.style.cssText="box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null;}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
if(!div.style){return;}// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);jQuery.extend(support,{pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){computeStyleTests();return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);// Support: IE <=9 only
// getPropertyValue is only needed for .css('filter') (#12537)
if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name){// Shortcut for names that are not vendor prefixed
if(name in emptyStyle){return name;}// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i,val=0;// If we already have the right measurement, avoid augmentation
if(extra===(isBorderBox?"border":"content")){i=4;// Otherwise initialize for horizontal or vertical properties
}else{i=name==="width"?1:0;}for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
var val,valueIsBorderBox=true,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
if(elem.getClientRects().length){val=elem.getBoundingClientRect()[name];}// Some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
type="number";}// Make sure that null and NaN values aren't set (#7116)
if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function raf(){if(timerId){window.requestAnimationFrame(raf);jQuery.fx.tick();}}// Animations created synchronously will run synchronously
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
propTween=false;for(prop in orig){// General show/hide setup for this element animation
if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};// Go to the end state if fx are off or if document is hidden
if(jQuery.fx.off||document.hidden){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
data.finish=true;// Empty the queue first
jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.requestAnimationFrame?window.requestAnimationFrame(raf):window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){if(window.cancelAnimationFrame){window.cancelAnimationFrame(timerId);}else{window.clearInterval(timerId);}timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=input.value!=="";// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected;// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
i=0;self=jQuery(this);classNames=value.match(rnothtmlwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
return ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
stripAndCollapse(jQuery.text(elem));}},select:{get:function get(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
for(;i<max;i++){option=options[i];// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
value=jQuery(option).val();// We don't need an array for one selects
if(one){return value;}// Multi-Selects return an array
values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
add(prefix,obj);}}// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}if(jQuery.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
while(dataType=dataTypes[i++]){// Prepend if requested
if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
finalDataType=finalDataType||firstDataType;}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
}else if(prev!=="*"&&prev!==current){// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
if(!conv){for(conv2 in converters){// If conv2 outputs current
tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
if(conv!==true){// Unless errors are allowed to bubble, catch and return them
if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
options=options||{};var transport,// URL without anti-cache param
cacheURL,// Response headers
responseHeadersString,responseHeaders,// timeout handle
timeoutTimer,// Url cleanup var
urlAnchor,// Request state (becomes false upon send and true upon completion)
completed,// To know if global events are to be dispatched
fireGlobals,// Loop variable
i,// uncached part of the url
uncached,// Create the final options object
s=jQuery.ajaxSetup({},options),// Callbacks context
callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
_statusCode=s.statusCode||{},// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},// Default abort message
strAbort="canceled",// Fake xhr
jqXHR={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=true;}}// Convert data if not already a string
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
if(completed){return jqXHR;}// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
s.type=s.type.toUpperCase();// Determine if request has content
s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
if(!s.hasContent){// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length);// If data is available, append data to url
if(s.data){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
delete s.data;}// Add or update anti-cache param if needed
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
return jqXHR.abort();}// Aborting is no longer a cancellation
strAbort="abort";// Install callbacks on deferreds
completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
if(completed){return jqXHR;}// Timeout
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
if(completed){throw e;}// Propagate others as results
done(-1,e);}}// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
if(completed){return;}completed=true;// Clear timeout if it exists
if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=undefined;// Cache response headers
responseHeadersString=headers||"";// Set readyState
jqXHR.readyState=status>0?4:0;// Determine if successful
isSuccess=status>=200&&status<300||status===304;// Get response data
if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
}else if(status===304){statusText="notmodified";// If we have data, let's convert it
}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(jQuery.isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
if(xhr.readyState===4){// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
_callback=_callback("abort");try{// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
s.dataTypes[0]="json";// Install callback
overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
jqXHR.always(function(){// If previous value didn't exist - remove it
if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
}else{window[callbackName]=overwritten;}// Save back as free
if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
return"script";}});// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
 * Load a url into a page
 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
if(jQuery.isFunction(params)){// We assume that it's the callback
callback=params;params=undefined;// Otherwise, build a param string
}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
 * Gets a window from an element
 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){// Preserve chaining for setter
if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,rect,doc,elem=this[0];if(!elem){return;}// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
if(!elem.getClientRects().length){return{top:0,left:0};}rect=elem.getBoundingClientRect();// Make sure element is not hidden (display: none)
if(rect.width||rect.height){doc=elem.ownerDocument;win=getWindow(doc);docElem=doc.documentElement;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};}// Return zeros for disconnected and hidden elements (gh-2310)
return rect;},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
offsetParent=this.offsetParent();// Get correct offsets
offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)};}// Subtract parent offsets and element margins
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css(elem,type,extra):// Set width or height on the element
jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.parseJSON=JSON.parse;// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}var// Map over jQuery in case of overwrite
_jQuery=window.jQuery,// Map over the $ in case of overwrite
_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});},{}],8:[function(require,module,exports){module.exports=function(jQuery,underscore){var Meteor=require("meteor-core")(underscore);require("meteor-base64")(Meteor);require("meteor-ejson-safe")(Meteor);require("meteor-random-window-crypto")(Meteor);require("meteor-diff-sequence")(Meteor);require("meteor-mongo-id")(Meteor);require("meteor-id-map")(Meteor);require("meteor-ordered-dict")(Meteor);require("meteor-tracker")(Meteor);require("meteor-minimongo")(Meteor);require("meteor-observe-sequence")(Meteor);require("meteor-htmljs")(Meteor);require("meteor-html-tools")(Meteor);require("meteor-reactive-var")(Meteor);require("meteor-reactive-object-map")(Meteor);require("meteor-blaze")(Meteor,jQuery);require("meteor-blaze-tools")(Meteor);require("meteor-templating")(Meteor);require("meteor-spacebars")(Meteor);require("meteor-spacebars-compiler")(Meteor);return Meteor;};},{"meteor-base64":9,"meteor-blaze":11,"meteor-blaze-tools":10,"meteor-core":12,"meteor-diff-sequence":13,"meteor-ejson-safe":14,"meteor-html-tools":15,"meteor-htmljs":16,"meteor-id-map":17,"meteor-minimongo":18,"meteor-mongo-id":19,"meteor-observe-sequence":20,"meteor-ordered-dict":21,"meteor-random-window-crypto":22,"meteor-reactive-object-map":23,"meteor-reactive-var":24,"meteor-spacebars":26,"meteor-spacebars-compiler":25,"meteor-templating":27,"meteor-tracker":28}],9:[function(require,module,exports){module.exports=function(Meteor){var Base64;// Base 64 encoding
var BASE_64_CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var BASE_64_VALS={};for(var i=0;i<BASE_64_CHARS.length;i++){BASE_64_VALS[BASE_64_CHARS.charAt(i)]=i;};Base64={};Base64.encode=function(array){if(typeof array==="string"){var str=array;array=Base64.newBinary(str.length);for(var i=0;i<str.length;i++){var ch=str.charCodeAt(i);if(ch>0xFF){throw new Error("Not ascii. Base64.encode can only take ascii strings.");}array[i]=ch;}}var answer=[];var a=null;var b=null;var c=null;var d=null;for(var i=0;i<array.length;i++){switch(i%3){case 0:a=array[i]>>2&0x3F;b=(array[i]&0x03)<<4;break;case 1:b=b|array[i]>>4&0xF;c=(array[i]&0xF)<<2;break;case 2:c=c|array[i]>>6&0x03;d=array[i]&0x3F;answer.push(getChar(a));answer.push(getChar(b));answer.push(getChar(c));answer.push(getChar(d));a=null;b=null;c=null;d=null;break;}}if(a!=null){answer.push(getChar(a));answer.push(getChar(b));if(c==null)answer.push('=');else answer.push(getChar(c));if(d==null)answer.push('=');}return answer.join("");};var getChar=function getChar(val){return BASE_64_CHARS.charAt(val);};var getVal=function getVal(ch){if(ch==='='){return-1;}return BASE_64_VALS[ch];};// XXX This is a weird place for this to live, but it's used both by
// this package and 'ejson', and we can't put it in 'ejson' without
// introducing a circular dependency. It should probably be in its own
// package or as a helper in a package that both 'base64' and 'ejson'
// use.
Base64.newBinary=function(len){if(typeof Uint8Array==='undefined'||typeof ArrayBuffer==='undefined'){var ret=[];for(var i=0;i<len;i++){ret.push(0);}ret.$Uint8ArrayPolyfill=true;return ret;}return new Uint8Array(new ArrayBuffer(len));};Base64.decode=function(str){var len=Math.floor(str.length*3/4);if(str.charAt(str.length-1)=='='){len--;if(str.charAt(str.length-2)=='=')len--;}var arr=Base64.newBinary(len);var one=null;var two=null;var three=null;var j=0;for(var i=0;i<str.length;i++){var c=str.charAt(i);var v=getVal(c);switch(i%4){case 0:if(v<0)throw new Error('invalid base64 string');one=v<<2;break;case 1:if(v<0)throw new Error('invalid base64 string');one=one|v>>4;arr[j++]=one;two=(v&0x0F)<<4;break;case 2:if(v>=0){two=two|v>>2;arr[j++]=two;three=(v&0x03)<<6;}break;case 3:if(v>=0){arr[j++]=three|v;}break;}}return arr;};Meteor.Base64=Base64;};},{}],10:[function(require,module,exports){module.exports=function(Meteor){var toObjectLiteralKey;var _=Meteor.underscore;var HTML=Meteor.HTML;var BlazeTools;var ToJSVisitor;var toJSLiteral;BlazeTools={};BlazeTools.EmitCode=function(value){if(!(this instanceof BlazeTools.EmitCode))// called without `new`
return new BlazeTools.EmitCode(value);if(typeof value!=='string')throw new Error('BlazeTools.EmitCode must be constructed with a string');this.value=value;};BlazeTools.EmitCode.prototype.toJS=function(visitor){return this.value;};// Turns any JSONable value into a JavaScript literal.
toJSLiteral=function toJSLiteral(obj){// See <http://timelessrepo.com/json-isnt-a-javascript-subset> for `\u2028\u2029`.
// Also escape Unicode surrogates.
return JSON.stringify(obj).replace(/[\u2028\u2029\ud800-\udfff]/g,function(c){return"\\u"+('000'+c.charCodeAt(0).toString(16)).slice(-4);});};BlazeTools.toJSLiteral=toJSLiteral;var jsReservedWordSet=function(set){_.each("abstract else instanceof super boolean enum int switch break export interface synchronized byte extends let this case false long throw catch final native throws char finally new transient class float null true const for package try continue function private typeof debugger goto protected var default if public void delete implements return volatile do import short while double in static with".split(' '),function(w){set[w]=1;});return set;}({});toObjectLiteralKey=function toObjectLiteralKey(k){if(/^[a-zA-Z$_][a-zA-Z$0-9_]*$/.test(k)&&jsReservedWordSet[k]!==1)return k;return toJSLiteral(k);};BlazeTools.toObjectLiteralKey=toObjectLiteralKey;var hasToJS=function hasToJS(x){return x.toJS&&typeof x.toJS==='function';};ToJSVisitor=HTML.Visitor.extend();ToJSVisitor.def({visitNull:function visitNull(nullOrUndefined){return'null';},visitPrimitive:function visitPrimitive(stringBooleanOrNumber){return toJSLiteral(stringBooleanOrNumber);},visitArray:function visitArray(array){var parts=[];for(var i=0;i<array.length;i++){parts.push(this.visit(array[i]));}return'['+parts.join(', ')+']';},visitTag:function visitTag(tag){return this.generateCall(tag.tagName,tag.attrs,tag.children);},visitComment:function visitComment(comment){return this.generateCall('HTML.Comment',null,[comment.value]);},visitCharRef:function visitCharRef(charRef){return this.generateCall('HTML.CharRef',{html:charRef.html,str:charRef.str});},visitRaw:function visitRaw(raw){return this.generateCall('HTML.Raw',null,[raw.value]);},visitObject:function visitObject(x){if(hasToJS(x)){return x.toJS(this);}throw new Error("Unexpected object in HTMLjs in toJS: "+x);},generateCall:function generateCall(name,attrs,children){var tagSymbol;if(name.indexOf('.')>=0){tagSymbol=name;}else if(HTML.isTagEnsured(name)){tagSymbol='HTML.'+HTML.getSymbolName(name);}else{tagSymbol='HTML.getTag('+toJSLiteral(name)+')';}var attrsArray=null;if(attrs){attrsArray=[];var needsHTMLAttrs=false;if(HTML.isArray(attrs)){var attrsArray=[];for(var i=0;i<attrs.length;i++){var a=attrs[i];if(hasToJS(a)){attrsArray.push(a.toJS(this));needsHTMLAttrs=true;}else{var attrsObjStr=this.generateAttrsDictionary(attrs[i]);if(attrsObjStr!==null)attrsArray.push(attrsObjStr);}}}else if(hasToJS(attrs)){attrsArray.push(attrs.toJS(this));needsHTMLAttrs=true;}else{attrsArray.push(this.generateAttrsDictionary(attrs));}}var attrsStr=null;if(attrsArray&&attrsArray.length){if(attrsArray.length===1&&!needsHTMLAttrs){attrsStr=attrsArray[0];}else{attrsStr='HTML.Attrs('+attrsArray.join(', ')+')';}}var argStrs=[];if(attrsStr!==null)argStrs.push(attrsStr);if(children){for(var i=0;i<children.length;i++){argStrs.push(this.visit(children[i]));}}return tagSymbol+'('+argStrs.join(', ')+')';},generateAttrsDictionary:function generateAttrsDictionary(attrsDict){if(attrsDict.toJS&&typeof attrsDict.toJS==='function'){// not an attrs dictionary, but something else!  Like a template tag.
return attrsDict.toJS(this);}var kvStrs=[];for(var k in attrsDict){if(!HTML.isNully(attrsDict[k]))kvStrs.push(toObjectLiteralKey(k)+': '+this.visit(attrsDict[k]));}if(kvStrs.length)return'{'+kvStrs.join(', ')+'}';return null;}});BlazeTools.ToJSVisitor=ToJSVisitor;BlazeTools.toJS=function(content){return new ToJSVisitor().visit(content);};// Adapted from source code of http://xregexp.com/plugins/#unicode
var unicodeCategories={Ll:"0061-007A00B500DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F05210523052505270561-05871D00-1D2B1D6B-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7B2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2CF32D00-2D252D272D2DA641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA661A663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CA78EA791A793A7A1A7A3A7A5A7A7A7A9A7FAFB00-FB06FB13-FB17FF41-FF5A",Lm:"02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D6A1D781D9B-1DBF2071207F2090-209C2C7C2C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A7F8A7F9A9CFAA70AADDAAF3AAF4FF70FF9EFF9F",Lo:"00AA00BA01BB01C0-01C3029405D0-05EA05F0-05F20620-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150840-085808A008A2-08AC0904-0939093D09500958-09610972-09770979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10CF10CF20D05-0D0C0D0E-0D100D12-0D3A0D3D0D4E0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC-0EDF0F000F40-0F470F49-0F6C0F88-0F8C1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA10FD-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1BBA-1BE51C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF11CF51CF62135-21382D30-2D672D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31BA31F0-31FF3400-4DB54E00-9FCCA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCAAE0-AAEAAAF2AB01-AB06AB09-AB0EAB11-AB16AB20-AB26AB28-AB2EABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",Lt:"01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",Lu:"0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E05200522052405260531-055610A0-10C510C710CD1E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CED2CF2A640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA660A662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BA78DA790A792A7A0A7A2A7A4A7A6A7A8A7AAFF21-FF3A",Mc:"0903093B093E-09400949-094C094E094F0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1BAC1BAD1BE71BEA-1BEC1BEE1BF21BF31C24-1C2B1C341C351CE11CF21CF3302E302FA823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BAAEBAAEEAAEFAAF5ABE3ABE4ABE6ABE7ABE9ABEAABEC",Mn:"0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065F067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0859-085B08E4-08FE0900-0902093A093C0941-0948094D0951-095709620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F8D-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135D-135F1712-17141732-1734175217531772177317B417B517B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91BAB1BE61BE81BE91BED1BEF-1BF11C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1CF41DC0-1DE61DFC-1DFF20D0-20DC20E120E5-20F02CEF-2CF12D7F2DE0-2DFF302A-302D3099309AA66FA674-A67DA69FA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1AAECAAEDAAF6ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",Nd:"0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19D91A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nl:"16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",Pc:"005F203F20402054FE33FE34FE4D-FE4FFF3F"};var unicodeClass=function unicodeClass(abbrev){return'['+unicodeCategories[abbrev].replace(/[0-9A-F]{4}/ig,"\\u$&")+']';};// See ECMA-262 spec, 3rd edition, Section 7.6
// Match one or more characters that can start an identifier.
// This is IdentifierStart+.
var rIdentifierPrefix=new RegExp("^([a-zA-Z$_]+|\\\\u[0-9a-fA-F]{4}|"+[unicodeClass('Lu'),unicodeClass('Ll'),unicodeClass('Lt'),unicodeClass('Lm'),unicodeClass('Lo'),unicodeClass('Nl')].join('|')+")+");// Match one or more characters that can continue an identifier.
// This is (IdentifierPart and not IdentifierStart)+.
// To match a full identifier, match rIdentifierPrefix, then
// match rIdentifierMiddle followed by rIdentifierPrefix until they both fail.
var rIdentifierMiddle=new RegExp("^([0-9]|"+[unicodeClass('Mn'),unicodeClass('Mc'),unicodeClass('Nd'),unicodeClass('Pc')].join('|')+")+");// See ECMA-262 spec, 3rd edition, Section 7.8.3
var rHexLiteral=/^0[xX][0-9a-fA-F]+(?!\w)/;var rDecLiteral=/^(((0|[1-9][0-9]*)(\.[0-9]*)?)|\.[0-9]+)([Ee][+-]?[0-9]+)?(?!\w)/;// Section 7.8.4
var rStringQuote=/^["']/;// Match one or more characters besides quotes, backslashes, or line ends
var rStringMiddle=/^(?=.)[^"'\\]+?((?!.)|(?=["'\\]))/;// Match one escape sequence, including the backslash.
var rEscapeSequence=/^\\(['"\\bfnrtv]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/;// Match one ES5 line continuation
var rLineContinuation=/^\\(\r\n|[\u000A\u000D\u2028\u2029])/;BlazeTools.parseNumber=function(scanner){var startPos=scanner.pos;var isNegative=false;if(scanner.peek()==='-'){scanner.pos++;isNegative=true;}// Note that we allow `"-0xa"`, unlike `Number(...)`.
var rest=scanner.rest();var match=rDecLiteral.exec(rest)||rHexLiteral.exec(rest);if(!match){scanner.pos=startPos;return null;}var matchText=match[0];scanner.pos+=matchText.length;var text=(isNegative?'-':'')+matchText;var value=Number(matchText);value=isNegative?-value:value;return{text:text,value:value};};BlazeTools.parseIdentifierName=function(scanner){var startPos=scanner.pos;var rest=scanner.rest();var match=rIdentifierPrefix.exec(rest);if(!match)return null;scanner.pos+=match[0].length;rest=scanner.rest();var foundMore=true;while(foundMore){foundMore=false;match=rIdentifierMiddle.exec(rest);if(match){foundMore=true;scanner.pos+=match[0].length;rest=scanner.rest();}match=rIdentifierPrefix.exec(rest);if(match){foundMore=true;scanner.pos+=match[0].length;rest=scanner.rest();}}return scanner.input.substring(startPos,scanner.pos);};BlazeTools.parseExtendedIdentifierName=function(scanner){// parse an identifier name optionally preceded by '@'
if(scanner.peek()==='@'){scanner.pos++;var afterAt=BlazeTools.parseIdentifierName(scanner);if(afterAt){return'@'+afterAt;}else{scanner.pos--;return null;}}else{return BlazeTools.parseIdentifierName(scanner);}};BlazeTools.parseStringLiteral=function(scanner){var startPos=scanner.pos;var rest=scanner.rest();var match=rStringQuote.exec(rest);if(!match)return null;var quote=match[0];scanner.pos++;rest=scanner.rest();var jsonLiteral='"';while(match){match=rStringMiddle.exec(rest);if(match){jsonLiteral+=match[0];}else{match=rEscapeSequence.exec(rest);if(match){var esc=match[0];// Convert all string escapes to JSON-compatible string escapes, so we
// can use JSON.parse for some of the work.  JSON strings are not the
// same as JS strings.  They don't support `\0`, `\v`, `\'`, or hex
// escapes.
if(esc==='\\0')jsonLiteral+="\\u0000";else if(esc==='\\v')// Note: IE 8 doesn't correctly parse '\v' in JavaScript.
jsonLiteral+="\\u000b";else if(esc.charAt(1)==='x')jsonLiteral+="\\u00"+esc.slice(2);else if(esc==='\\\'')jsonLiteral+="'";else jsonLiteral+=esc;}else{match=rLineContinuation.exec(rest);if(!match){match=rStringQuote.exec(rest);if(match){var c=match[0];if(c!==quote){if(c==='"')jsonLiteral+='\\';jsonLiteral+=c;}}}}}if(match){scanner.pos+=match[0].length;rest=scanner.rest();if(match[0]===quote)break;}}if(!match||match[0]!==quote)scanner.fatal("Unterminated string literal");jsonLiteral+='"';var text=scanner.input.substring(startPos,scanner.pos);var value=JSON.parse(jsonLiteral);return{text:text,value:value};};Meteor.BlazeTools=BlazeTools;};},{}],11:[function(require,module,exports){module.exports=function(Meteor,jQuery){var AttributeHandler,makeAttributeHandler,ElementAttributesUpdater,toObjectLiteralKey;var _=Meteor.underscore;var HTML=Meteor.HTML;var ObserveSequence=Meteor.ObserveSequence;var ReactiveVar=Meteor.ReactiveVar;var Tracker=Meteor.Tracker;var Blaze;/**
 * @namespace Blaze
 * @summary The namespace for all Blaze-related methods and classes.
 */Blaze={};// Utility to HTML-escape a string.  Included for legacy reasons.
Blaze._escape=function(){var escape_map={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;",/* IE allows backtick-delimited attributes?? */"&":"&amp;"};var escape_one=function escape_one(c){return escape_map[c];};return function(x){return x.replace(/[&<>"'`]/g,escape_one);};}();Blaze._warn=function(msg){msg='Warning: '+msg;if(typeof console!=='undefined'&&console.warn){console.warn(msg);}};var DOMBackend={};Blaze._DOMBackend=DOMBackend;var $jq=typeof jQuery!=='undefined'?jQuery:typeof Package!=='undefined'?Package.jquery&&Package.jquery.jQuery:null;if(!$jq)throw new Error("jQuery not found");DOMBackend._$jq=$jq;DOMBackend.parseHTML=function(html){// Return an array of nodes.
//
// jQuery does fancy stuff like creating an appropriate
// container element and setting innerHTML on it, as well
// as working around various IE quirks.
return $jq.parseHTML(html)||[];};DOMBackend.Events={// `selector` is non-null.  `type` is one type (but
// may be in backend-specific form, e.g. have namespaces).
// Order fired must be order bound.
delegateEvents:function delegateEvents(elem,type,selector,handler){$jq(elem).on(type,selector,handler);},undelegateEvents:function undelegateEvents(elem,type,handler){$jq(elem).off(type,'**',handler);},bindEventCapturer:function bindEventCapturer(elem,type,selector,handler){var $elem=$jq(elem);var wrapper=function wrapper(event){event=$jq.event.fix(event);event.currentTarget=event.target;// Note: It might improve jQuery interop if we called into jQuery
// here somehow.  Since we don't use jQuery to dispatch the event,
// we don't fire any of jQuery's event hooks or anything.  However,
// since jQuery can't bind capturing handlers, it's not clear
// where we would hook in.  Internal jQuery functions like `dispatch`
// are too high-level.
var $target=$jq(event.currentTarget);if($target.is($elem.find(selector)))handler.call(elem,event);};handler._meteorui_wrapper=wrapper;type=DOMBackend.Events.parseEventType(type);// add *capturing* event listener
elem.addEventListener(type,wrapper,true);},unbindEventCapturer:function unbindEventCapturer(elem,type,handler){type=DOMBackend.Events.parseEventType(type);elem.removeEventListener(type,handler._meteorui_wrapper,true);},parseEventType:function parseEventType(type){// strip off namespaces
var dotLoc=type.indexOf('.');if(dotLoc>=0)return type.slice(0,dotLoc);return type;}};///// Removal detection and interoperability.
// For an explanation of this technique, see:
// http://bugs.jquery.com/ticket/12213#comment:23 .
//
// In short, an element is considered "removed" when jQuery
// cleans up its *private* userdata on the element,
// which we can detect using a custom event with a teardown
// hook.
var NOOP=function NOOP(){};// Circular doubly-linked list
var TeardownCallback=function TeardownCallback(func){this.next=this;this.prev=this;this.func=func;};// Insert newElt before oldElt in the circular list
TeardownCallback.prototype.linkBefore=function(oldElt){this.prev=oldElt.prev;this.next=oldElt;oldElt.prev.next=this;oldElt.prev=this;};TeardownCallback.prototype.unlink=function(){this.prev.next=this.next;this.next.prev=this.prev;};TeardownCallback.prototype.go=function(){var func=this.func;func&&func();};TeardownCallback.prototype.stop=TeardownCallback.prototype.unlink;DOMBackend.Teardown={_JQUERY_EVENT_NAME:'blaze_teardown_watcher',_CB_PROP:'$blaze_teardown_callbacks',// Registers a callback function to be called when the given element or
// one of its ancestors is removed from the DOM via the backend library.
// The callback function is called at most once, and it receives the element
// in question as an argument.
onElementTeardown:function onElementTeardown(elem,func){var elt=new TeardownCallback(func);var propName=DOMBackend.Teardown._CB_PROP;if(!elem[propName]){// create an empty node that is never unlinked
elem[propName]=new TeardownCallback();// Set up the event, only the first time.
$jq(elem).on(DOMBackend.Teardown._JQUERY_EVENT_NAME,NOOP);}elt.linkBefore(elem[propName]);return elt;// so caller can call stop()
},// Recursively call all teardown hooks, in the backend and registered
// through DOMBackend.onElementTeardown.
tearDownElement:function tearDownElement(elem){var elems=[];// Array.prototype.slice.call doesn't work when given a NodeList in
// IE8 ("JScript object expected").
var nodeList=elem.getElementsByTagName('*');for(var i=0;i<nodeList.length;i++){elems.push(nodeList[i]);}elems.push(elem);$jq.cleanData(elems);}};$jq.event.special[DOMBackend.Teardown._JQUERY_EVENT_NAME]={setup:function setup(){// This "setup" callback is important even though it is empty!
// Without it, jQuery will call addEventListener, which is a
// performance hit, especially with Chrome's async stack trace
// feature enabled.
},teardown:function teardown(){var elem=this;var callbacks=elem[DOMBackend.Teardown._CB_PROP];if(callbacks){var elt=callbacks.next;while(elt!==callbacks){elt.go();elt=elt.next;}callbacks.go();elem[DOMBackend.Teardown._CB_PROP]=null;}}};// Must use jQuery semantics for `context`, not
// querySelectorAll's.  In other words, all the parts
// of `selector` must be found under `context`.
DOMBackend.findBySelector=function(selector,context){return $jq(selector,context);};// A constant empty array (frozen if the JS engine supports it).
var _emptyArray=Object.freeze?Object.freeze([]):[];// `[new] Blaze._DOMRange([nodeAndRangeArray])`
//
// A DOMRange consists of an array of consecutive nodes and DOMRanges,
// which may be replaced at any time with a new array.  If the DOMRange
// has been attached to the DOM at some location, then updating
// the array will cause the DOM to be updated at that location.
Blaze._DOMRange=function(nodeAndRangeArray){if(!(this instanceof DOMRange))// called without `new`
return new DOMRange(nodeAndRangeArray);var members=nodeAndRangeArray||_emptyArray;if(!(members&&typeof members.length==='number'))throw new Error("Expected array");for(var i=0;i<members.length;i++){this._memberIn(members[i]);}this.members=members;this.emptyRangePlaceholder=null;this.attached=false;this.parentElement=null;this.parentRange=null;this.attachedCallbacks=_emptyArray;};var DOMRange=Blaze._DOMRange;// In IE 8, don't use empty text nodes as placeholders
// in empty DOMRanges, use comment nodes instead.  Using
// empty text nodes in modern browsers is great because
// it doesn't clutter the web inspector.  In IE 8, however,
// it seems to lead in some roundabout way to the OAuth
// pop-up crashing the browser completely.  In the past,
// we didn't use empty text nodes on IE 8 because they
// don't accept JS properties, so just use the same logic
// even though we don't need to set properties on the
// placeholder anymore.
DOMRange._USE_COMMENT_PLACEHOLDERS=function(){var result=false;var textNode=document.createTextNode("");try{textNode.someProp=true;}catch(e){// IE 8
result=true;}return result;}();// static methods
DOMRange._insert=function(rangeOrNode,parentElement,nextNode,_isMove){var m=rangeOrNode;if(m instanceof DOMRange){m.attach(parentElement,nextNode,_isMove);}else{if(_isMove)DOMRange._moveNodeWithHooks(m,parentElement,nextNode);else DOMRange._insertNodeWithHooks(m,parentElement,nextNode);}};DOMRange._remove=function(rangeOrNode){var m=rangeOrNode;if(m instanceof DOMRange){m.detach();}else{DOMRange._removeNodeWithHooks(m);}};DOMRange._removeNodeWithHooks=function(n){if(!n.parentNode)return;if(n.nodeType===1&&n.parentNode._uihooks&&n.parentNode._uihooks.removeElement){n.parentNode._uihooks.removeElement(n);}else{n.parentNode.removeChild(n);}};DOMRange._insertNodeWithHooks=function(n,parent,next){// `|| null` because IE throws an error if 'next' is undefined
next=next||null;if(n.nodeType===1&&parent._uihooks&&parent._uihooks.insertElement){parent._uihooks.insertElement(n,next);}else{parent.insertBefore(n,next);}};DOMRange._moveNodeWithHooks=function(n,parent,next){if(n.parentNode!==parent)return;// `|| null` because IE throws an error if 'next' is undefined
next=next||null;if(n.nodeType===1&&parent._uihooks&&parent._uihooks.moveElement){parent._uihooks.moveElement(n,next);}else{parent.insertBefore(n,next);}};DOMRange.forElement=function(elem){if(elem.nodeType!==1)throw new Error("Expected element, found: "+elem);var range=null;while(elem&&!range){range=elem.$blaze_range||null;if(!range)elem=elem.parentNode;}return range;};DOMRange.prototype.attach=function(parentElement,nextNode,_isMove,_isReplace){// This method is called to insert the DOMRange into the DOM for
// the first time, but it's also used internally when
// updating the DOM.
//
// If _isMove is true, move this attached range to a different
// location under the same parentElement.
if(_isMove||_isReplace){if(!(this.parentElement===parentElement&&this.attached))throw new Error("Can only move or replace an attached DOMRange, and only under the same parent element");}var members=this.members;if(members.length){this.emptyRangePlaceholder=null;for(var i=0;i<members.length;i++){DOMRange._insert(members[i],parentElement,nextNode,_isMove);}}else{var placeholder=DOMRange._USE_COMMENT_PLACEHOLDERS?document.createComment(""):document.createTextNode("");this.emptyRangePlaceholder=placeholder;parentElement.insertBefore(placeholder,nextNode||null);}this.attached=true;this.parentElement=parentElement;if(!(_isMove||_isReplace)){for(var i=0;i<this.attachedCallbacks.length;i++){var obj=this.attachedCallbacks[i];obj.attached&&obj.attached(this,parentElement);}}};DOMRange.prototype.setMembers=function(newNodeAndRangeArray){var newMembers=newNodeAndRangeArray;if(!(newMembers&&typeof newMembers.length==='number'))throw new Error("Expected array");var oldMembers=this.members;for(var i=0;i<oldMembers.length;i++){this._memberOut(oldMembers[i]);}for(var i=0;i<newMembers.length;i++){this._memberIn(newMembers[i]);}if(!this.attached){this.members=newMembers;}else{// don't do anything if we're going from empty to empty
if(newMembers.length||oldMembers.length){// detach the old members and insert the new members
var nextNode=this.lastNode().nextSibling;var parentElement=this.parentElement;// Use detach/attach, but don't fire attached/detached hooks
this.detach(true/*_isReplace*/);this.members=newMembers;this.attach(parentElement,nextNode,false,true/*_isReplace*/);}}};DOMRange.prototype.firstNode=function(){if(!this.attached)throw new Error("Must be attached");if(!this.members.length)return this.emptyRangePlaceholder;var m=this.members[0];return m instanceof DOMRange?m.firstNode():m;};DOMRange.prototype.lastNode=function(){if(!this.attached)throw new Error("Must be attached");if(!this.members.length)return this.emptyRangePlaceholder;var m=this.members[this.members.length-1];return m instanceof DOMRange?m.lastNode():m;};DOMRange.prototype.detach=function(_isReplace){if(!this.attached)throw new Error("Must be attached");var oldParentElement=this.parentElement;var members=this.members;if(members.length){for(var i=0;i<members.length;i++){DOMRange._remove(members[i]);}}else{var placeholder=this.emptyRangePlaceholder;this.parentElement.removeChild(placeholder);this.emptyRangePlaceholder=null;}if(!_isReplace){this.attached=false;this.parentElement=null;for(var i=0;i<this.attachedCallbacks.length;i++){var obj=this.attachedCallbacks[i];obj.detached&&obj.detached(this,oldParentElement);}}};DOMRange.prototype.addMember=function(newMember,atIndex,_isMove){var members=this.members;if(!(atIndex>=0&&atIndex<=members.length))throw new Error("Bad index in range.addMember: "+atIndex);if(!_isMove)this._memberIn(newMember);if(!this.attached){// currently detached; just updated members
members.splice(atIndex,0,newMember);}else if(members.length===0){// empty; use the empty-to-nonempty handling of setMembers
this.setMembers([newMember]);}else{var nextNode;if(atIndex===members.length){// insert at end
nextNode=this.lastNode().nextSibling;}else{var m=members[atIndex];nextNode=m instanceof DOMRange?m.firstNode():m;}members.splice(atIndex,0,newMember);DOMRange._insert(newMember,this.parentElement,nextNode,_isMove);}};DOMRange.prototype.removeMember=function(atIndex,_isMove){var members=this.members;if(!(atIndex>=0&&atIndex<members.length))throw new Error("Bad index in range.removeMember: "+atIndex);if(_isMove){members.splice(atIndex,1);}else{var oldMember=members[atIndex];this._memberOut(oldMember);if(members.length===1){// becoming empty; use the logic in setMembers
this.setMembers(_emptyArray);}else{members.splice(atIndex,1);if(this.attached)DOMRange._remove(oldMember);}}};DOMRange.prototype.moveMember=function(oldIndex,newIndex){var member=this.members[oldIndex];this.removeMember(oldIndex,true/*_isMove*/);this.addMember(member,newIndex,true/*_isMove*/);};DOMRange.prototype.getMember=function(atIndex){var members=this.members;if(!(atIndex>=0&&atIndex<members.length))throw new Error("Bad index in range.getMember: "+atIndex);return this.members[atIndex];};DOMRange.prototype._memberIn=function(m){if(m instanceof DOMRange)m.parentRange=this;else if(m.nodeType===1)// DOM Element
m.$blaze_range=this;};DOMRange._destroy=function(m,_skipNodes){if(m instanceof DOMRange){if(m.view)Blaze._destroyView(m.view,_skipNodes);}else if(!_skipNodes&&m.nodeType===1){// DOM Element
if(m.$blaze_range){Blaze._destroyNode(m);m.$blaze_range=null;}}};DOMRange.prototype._memberOut=DOMRange._destroy;// Tear down, but don't remove, the members.  Used when chunks
// of DOM are being torn down or replaced.
DOMRange.prototype.destroyMembers=function(_skipNodes){var members=this.members;for(var i=0;i<members.length;i++){this._memberOut(members[i],_skipNodes);}};DOMRange.prototype.destroy=function(_skipNodes){DOMRange._destroy(this,_skipNodes);};DOMRange.prototype.containsElement=function(elem){if(!this.attached)throw new Error("Must be attached");// An element is contained in this DOMRange if it's possible to
// reach it by walking parent pointers, first through the DOM and
// then parentRange pointers.  In other words, the element or some
// ancestor of it is at our level of the DOM (a child of our
// parentElement), and this element is one of our members or
// is a member of a descendant Range.
// First check that elem is a descendant of this.parentElement,
// according to the DOM.
if(!Blaze._elementContains(this.parentElement,elem))return false;// If elem is not an immediate child of this.parentElement,
// walk up to its ancestor that is.
while(elem.parentNode!==this.parentElement){elem=elem.parentNode;}var range=elem.$blaze_range;while(range&&range!==this){range=range.parentRange;}return range===this;};DOMRange.prototype.containsRange=function(range){if(!this.attached)throw new Error("Must be attached");if(!range.attached)return false;// A DOMRange is contained in this DOMRange if it's possible
// to reach this range by following parent pointers.  If the
// DOMRange has the same parentElement, then it should be
// a member, or a member of a member etc.  Otherwise, we must
// contain its parentElement.
if(range.parentElement!==this.parentElement)return this.containsElement(range.parentElement);if(range===this)return false;// don't contain self
while(range&&range!==this){range=range.parentRange;}return range===this;};DOMRange.prototype.onAttached=function(attached){this.onAttachedDetached({attached:attached});};// callbacks are `attached(range, element)` and
// `detached(range, element)`, and they may
// access the `callbacks` object in `this`.
// The arguments to `detached` are the same
// range and element that were passed to `attached`.
DOMRange.prototype.onAttachedDetached=function(callbacks){if(this.attachedCallbacks===_emptyArray)this.attachedCallbacks=[];this.attachedCallbacks.push(callbacks);};DOMRange.prototype.$=function(selector){var self=this;var parentNode=this.parentElement;if(!parentNode)throw new Error("Can't select in removed DomRange");// Strategy: Find all selector matches under parentNode,
// then filter out the ones that aren't in this DomRange
// using `DOMRange#containsElement`.  This is
// asymptotically slow in the presence of O(N) sibling
// content that is under parentNode but not in our range,
// so if performance is an issue, the selector should be
// run on a child element.
// Since jQuery can't run selectors on a DocumentFragment,
// we don't expect findBySelector to work.
if(parentNode.nodeType===11/* DocumentFragment */)throw new Error("Can't use $ on an offscreen range");var results=Blaze._DOMBackend.findBySelector(selector,parentNode);// We don't assume `results` has jQuery API; a plain array
// should do just as well.  However, if we do have a jQuery
// array, we want to end up with one also, so we use
// `.filter`.
// Function that selects only elements that are actually
// in this DomRange, rather than simply descending from
// `parentNode`.
var filterFunc=function filterFunc(elem){// handle jQuery's arguments to filter, where the node
// is in `this` and the index is the first argument.
if(typeof elem==='number')elem=this;return self.containsElement(elem);};if(!results.filter){// not a jQuery array, and not a browser with
// Array.prototype.filter (e.g. IE <9)
var newResults=[];for(var i=0;i<results.length;i++){var x=results[i];if(filterFunc(x))newResults.push(x);}results=newResults;}else{// `results.filter` is either jQuery's or ECMAScript's `filter`
results=results.filter(filterFunc);}return results;};// Returns true if element a contains node b and is not node b.
//
// The restriction that `a` be an element (not a document fragment,
// say) is based on what's easy to implement cross-browser.
Blaze._elementContains=function(a,b){if(a.nodeType!==1)// ELEMENT
return false;if(a===b)return false;if(a.compareDocumentPosition){return a.compareDocumentPosition(b)&0x10;}else{// Should be only old IE and maybe other old browsers here.
// Modern Safari has both functions but seems to get contains() wrong.
// IE can't handle b being a text node.  We work around this
// by doing a direct parent test now.
b=b.parentNode;if(!(b&&b.nodeType===1))// ELEMENT
return false;if(a===b)return true;return a.contains(b);}};var EventSupport=Blaze._EventSupport={};var DOMBackend=Blaze._DOMBackend;// List of events to always delegate, never capture.
// Since jQuery fakes bubbling for certain events in
// certain browsers (like `submit`), we don't want to
// get in its way.
//
// We could list all known bubbling
// events here to avoid creating speculative capturers
// for them, but it would only be an optimization.
var eventsToDelegate=EventSupport.eventsToDelegate={blur:1,change:1,click:1,focus:1,focusin:1,focusout:1,reset:1,submit:1};var EVENT_MODE=EventSupport.EVENT_MODE={TBD:0,BUBBLING:1,CAPTURING:2};var NEXT_HANDLERREC_ID=1;var HandlerRec=function HandlerRec(elem,type,selector,handler,recipient){this.elem=elem;this.type=type;this.selector=selector;this.handler=handler;this.recipient=recipient;this.id=NEXT_HANDLERREC_ID++;this.mode=EVENT_MODE.TBD;// It's important that delegatedHandler be a different
// instance for each handlerRecord, because its identity
// is used to remove it.
//
// It's also important that the closure have access to
// `this` when it is not called with it set.
this.delegatedHandler=function(h){return function(evt){if(!h.selector&&evt.currentTarget!==evt.target)// no selector means only fire on target
return;return h.handler.apply(h.recipient,arguments);};}(this);// WHY CAPTURE AND DELEGATE: jQuery can't delegate
// non-bubbling events, because
// event capture doesn't work in IE 8.  However, there
// are all sorts of new-fangled non-bubbling events
// like "play" and "touchenter".  We delegate these
// events using capture in all browsers except IE 8.
// IE 8 doesn't support these events anyway.
var tryCapturing=elem.addEventListener&&!_.has(eventsToDelegate,DOMBackend.Events.parseEventType(type));if(tryCapturing){this.capturingHandler=function(h){return function(evt){if(h.mode===EVENT_MODE.TBD){// must be first time we're called.
if(evt.bubbles){// this type of event bubbles, so don't
// get called again.
h.mode=EVENT_MODE.BUBBLING;DOMBackend.Events.unbindEventCapturer(h.elem,h.type,h.capturingHandler);return;}else{// this type of event doesn't bubble,
// so unbind the delegation, preventing
// it from ever firing.
h.mode=EVENT_MODE.CAPTURING;DOMBackend.Events.undelegateEvents(h.elem,h.type,h.delegatedHandler);}}h.delegatedHandler(evt);};}(this);}else{this.mode=EVENT_MODE.BUBBLING;}};EventSupport.HandlerRec=HandlerRec;HandlerRec.prototype.bind=function(){// `this.mode` may be EVENT_MODE_TBD, in which case we bind both. in
// this case, 'capturingHandler' is in charge of detecting the
// correct mode and turning off one or the other handlers.
if(this.mode!==EVENT_MODE.BUBBLING){DOMBackend.Events.bindEventCapturer(this.elem,this.type,this.selector||'*',this.capturingHandler);}if(this.mode!==EVENT_MODE.CAPTURING)DOMBackend.Events.delegateEvents(this.elem,this.type,this.selector||'*',this.delegatedHandler);};HandlerRec.prototype.unbind=function(){if(this.mode!==EVENT_MODE.BUBBLING)DOMBackend.Events.unbindEventCapturer(this.elem,this.type,this.capturingHandler);if(this.mode!==EVENT_MODE.CAPTURING)DOMBackend.Events.undelegateEvents(this.elem,this.type,this.delegatedHandler);};EventSupport.listen=function(element,events,selector,handler,recipient,getParentRecipient){// Prevent this method from being JITed by Safari.  Due to a
// presumed JIT bug in Safari -- observed in Version 7.0.6
// (9537.78.2) -- this method may crash the Safari render process if
// it is JITed.
// Repro: https://github.com/dgreensp/public/tree/master/safari-crash
try{element=element;}finally{}var eventTypes=[];events.replace(/[^ /]+/g,function(e){eventTypes.push(e);});var newHandlerRecs=[];for(var i=0,N=eventTypes.length;i<N;i++){var type=eventTypes[i];var eventDict=element.$blaze_events;if(!eventDict)eventDict=element.$blaze_events={};var info=eventDict[type];if(!info){info=eventDict[type]={};info.handlers=[];}var handlerList=info.handlers;var handlerRec=new HandlerRec(element,type,selector,handler,recipient);newHandlerRecs.push(handlerRec);handlerRec.bind();handlerList.push(handlerRec);// Move handlers of enclosing ranges to end, by unbinding and rebinding
// them.  In jQuery (or other DOMBackend) this causes them to fire
// later when the backend dispatches event handlers.
if(getParentRecipient){for(var r=getParentRecipient(recipient);r;r=getParentRecipient(r)){// r is an enclosing range (recipient)
for(var j=0,Nj=handlerList.length;j<Nj;j++){var h=handlerList[j];if(h.recipient===r){h.unbind();h.bind();handlerList.splice(j,1);// remove handlerList[j]
handlerList.push(h);j--;// account for removed handler
Nj--;// don't visit appended handlers
}}}}}return{// closes over just `element` and `newHandlerRecs`
stop:function stop(){var eventDict=element.$blaze_events;if(!eventDict)return;// newHandlerRecs has only one item unless you specify multiple
// event types.  If this code is slow, it's because we have to
// iterate over handlerList here.  Clearing a whole handlerList
// via stop() methods is O(N^2) in the number of handlers on
// an element.
for(var i=0;i<newHandlerRecs.length;i++){var handlerToRemove=newHandlerRecs[i];var info=eventDict[handlerToRemove.type];if(!info)continue;var handlerList=info.handlers;for(var j=handlerList.length-1;j>=0;j--){if(handlerList[j]===handlerToRemove){handlerToRemove.unbind();handlerList.splice(j,1);// remove handlerList[j]
}}}newHandlerRecs.length=0;}};};var jsUrlsAllowed=false;Blaze._allowJavascriptUrls=function(){jsUrlsAllowed=true;};Blaze._javascriptUrlsAllowed=function(){return jsUrlsAllowed;};// An AttributeHandler object is responsible for updating a particular attribute
// of a particular element.  AttributeHandler subclasses implement
// browser-specific logic for dealing with particular attributes across
// different browsers.
//
// To define a new type of AttributeHandler, use
// `var FooHandler = AttributeHandler.extend({ update: function ... })`
// where the `update` function takes arguments `(element, oldValue, value)`.
// The `element` argument is always the same between calls to `update` on
// the same instance.  `oldValue` and `value` are each either `null` or
// a Unicode string of the type that might be passed to the value argument
// of `setAttribute` (i.e. not an HTML string with character references).
// When an AttributeHandler is installed, an initial call to `update` is
// always made with `oldValue = null`.  The `update` method can access
// `this.name` if the AttributeHandler class is a generic one that applies
// to multiple attribute names.
//
// AttributeHandlers can store custom properties on `this`, as long as they
// don't use the names `element`, `name`, `value`, and `oldValue`.
//
// AttributeHandlers can't influence how attributes appear in rendered HTML,
// only how they are updated after materialization as DOM.
AttributeHandler=function AttributeHandler(name,value){this.name=name;this.value=value;};Blaze._AttributeHandler=AttributeHandler;AttributeHandler.prototype.update=function(element,oldValue,value){if(value===null){if(oldValue!==null)element.removeAttribute(this.name);}else{element.setAttribute(this.name,value);}};AttributeHandler.extend=function(options){var curType=this;var subType=function AttributeHandlerSubtype()/*arguments*/{AttributeHandler.apply(this,arguments);};subType.prototype=new curType();subType.extend=curType.extend;if(options)_.extend(subType.prototype,options);return subType;};/// Apply the diff between the attributes of "oldValue" and "value" to "element."
//
// Each subclass must implement a parseValue method which takes a string
// as an input and returns a dict of attributes. The keys of the dict
// are unique identifiers (ie. css properties in the case of styles), and the
// values are the entire attribute which will be injected into the element.
//
// Extended below to support classes, SVG elements and styles.
var DiffingAttributeHandler=AttributeHandler.extend({update:function update(element,oldValue,value){if(!this.getCurrentValue||!this.setValue||!this.parseValue)throw new Error("Missing methods in subclass of 'DiffingAttributeHandler'");var oldAttrsMap=oldValue?this.parseValue(oldValue):{};var newAttrsMap=value?this.parseValue(value):{};// the current attributes on the element, which we will mutate.
var attrString=this.getCurrentValue(element);var attrsMap=attrString?this.parseValue(attrString):{};_.each(_.keys(oldAttrsMap),function(t){if(!(t in newAttrsMap))delete attrsMap[t];});_.each(_.keys(newAttrsMap),function(t){attrsMap[t]=newAttrsMap[t];});this.setValue(element,_.values(attrsMap).join(' '));}});var ClassHandler=DiffingAttributeHandler.extend({// @param rawValue {String}
getCurrentValue:function getCurrentValue(element){return element.className;},setValue:function setValue(element,className){element.className=className;},parseValue:function parseValue(attrString){var tokens={};_.each(attrString.split(' '),function(token){if(token)tokens[token]=token;});return tokens;}});var SVGClassHandler=ClassHandler.extend({getCurrentValue:function getCurrentValue(element){return element.className.baseVal;},setValue:function setValue(element,className){element.setAttribute('class',className);}});var StyleHandler=DiffingAttributeHandler.extend({getCurrentValue:function getCurrentValue(element){return element.getAttribute('style');},setValue:function setValue(element,style){if(style===''){element.removeAttribute('style');}else{element.setAttribute('style',style);}},// Parse a string to produce a map from property to attribute string.
//
// Example:
// "color:red; foo:12px" produces a token {color: "color:red", foo:"foo:12px"}
parseValue:function parseValue(attrString){var tokens={};// Regex for parsing a css attribute declaration, taken from css-parse:
// https://github.com/reworkcss/css-parse/blob/7cef3658d0bba872cde05a85339034b187cb3397/index.js#L219
var regex=/(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*(?:\'(?:\\\'|.)*?\'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+[;\s]*/g;var match=regex.exec(attrString);while(match){// match[0] = entire matching string
// match[1] = css property
// Prefix the token to prevent conflicts with existing properties.
// XXX No `String.trim` on Safari 4. Swap out $.trim if we want to
// remove strong dep on jquery.
tokens[' '+match[1]]=match[0].trim?match[0].trim():$.trim(match[0]);match=regex.exec(attrString);}return tokens;}});var BooleanHandler=AttributeHandler.extend({update:function update(element,oldValue,value){var name=this.name;if(value==null){if(oldValue!=null)element[name]=false;}else{element[name]=true;}}});var DOMPropertyHandler=AttributeHandler.extend({update:function update(element,oldValue,value){var name=this.name;if(value!==element[name])element[name]=value;}});// attributes of the type 'xlink:something' should be set using
// the correct namespace in order to work
var XlinkHandler=AttributeHandler.extend({update:function update(element,oldValue,value){var NS='http://www.w3.org/1999/xlink';if(value===null){if(oldValue!==null)element.removeAttributeNS(NS,this.name);}else{element.setAttributeNS(NS,this.name,this.value);}}});// cross-browser version of `instanceof SVGElement`
var isSVGElement=function isSVGElement(elem){return'ownerSVGElement'in elem;};var isUrlAttribute=function isUrlAttribute(tagName,attrName){var _urlAttrs;// Compiled from http://www.w3.org/TR/REC-html40/index/attributes.html
// and
// http://www.w3.org/html/wg/drafts/html/master/index.html#attributes-1
var urlAttrs=(_urlAttrs={FORM:['action'],BODY:['background'],BLOCKQUOTE:['cite'],Q:['cite'],DEL:['cite'],INS:['cite'],OBJECT:['classid','codebase','data','usemap'],APPLET:['codebase'],A:['href'],AREA:['href'],LINK:['href'],BASE:['href'],IMG:['longdesc','src','usemap'],FRAME:['longdesc','src'],IFRAME:['longdesc','src'],HEAD:['profile'],SCRIPT:['src'],INPUT:['src','usemap','formaction'],BUTTON:['formaction']},_defineProperty(_urlAttrs,"BASE",['href']),_defineProperty(_urlAttrs,"MENUITEM",['icon']),_defineProperty(_urlAttrs,"HTML",['manifest']),_defineProperty(_urlAttrs,"VIDEO",['poster']),_urlAttrs);if(attrName==='itemid'){return true;}var urlAttrNames=urlAttrs[tagName]||[];return _.contains(urlAttrNames,attrName);};// To get the protocol for a URL, we let the browser normalize it for
// us, by setting it as the href for an anchor tag and then reading out
// the 'protocol' property.
if(Meteor.isClient){var anchorForNormalization=document.createElement('A');}var getUrlProtocol=function getUrlProtocol(url){if(Meteor.isClient){anchorForNormalization.href=url;return(anchorForNormalization.protocol||"").toLowerCase();}else{throw new Error('getUrlProtocol not implemented on the server');}};// UrlHandler is an attribute handler for all HTML attributes that take
// URL values. It disallows javascript: URLs, unless
// Blaze._allowJavascriptUrls() has been called. To detect javascript:
// urls, we set the attribute on a dummy anchor element and then read
// out the 'protocol' property of the attribute.
var origUpdate=AttributeHandler.prototype.update;var UrlHandler=AttributeHandler.extend({update:function update(element,oldValue,value){var self=this;var args=arguments;if(Blaze._javascriptUrlsAllowed()){origUpdate.apply(self,args);}else{var isJavascriptProtocol=getUrlProtocol(value)==="javascript:";var isVBScriptProtocol=getUrlProtocol(value)==="vbscript:";if(isJavascriptProtocol||isVBScriptProtocol){Blaze._warn("URLs that use the 'javascript:' or 'vbscript:' protocol are not "+"allowed in URL attribute values. "+"Call Blaze._allowJavascriptUrls() "+"to enable them.");origUpdate.apply(self,[element,oldValue,null]);}else{origUpdate.apply(self,args);}}}});// XXX make it possible for users to register attribute handlers!
makeAttributeHandler=function makeAttributeHandler(elem,name,value){// generally, use setAttribute but certain attributes need to be set
// by directly setting a JavaScript property on the DOM element.
if(name==='class'){if(isSVGElement(elem)){return new SVGClassHandler(name,value);}else{return new ClassHandler(name,value);}}else if(name==='style'){return new StyleHandler(name,value);}else if(elem.tagName==='OPTION'&&name==='selected'||elem.tagName==='INPUT'&&name==='checked'){return new BooleanHandler(name,value);}else if((elem.tagName==='TEXTAREA'||elem.tagName==='INPUT')&&name==='value'){// internally, TEXTAREAs tracks their value in the 'value'
// attribute just like INPUTs.
return new DOMPropertyHandler(name,value);}else if(name.substring(0,6)==='xlink:'){return new XlinkHandler(name.substring(6),value);}else if(isUrlAttribute(elem.tagName,name)){return new UrlHandler(name,value);}else{return new AttributeHandler(name,value);}// XXX will need one for 'style' on IE, though modern browsers
// seem to handle setAttribute ok.
};ElementAttributesUpdater=function ElementAttributesUpdater(elem){this.elem=elem;this.handlers={};};// Update attributes on `elem` to the dictionary `attrs`, whose
// values are strings.
ElementAttributesUpdater.prototype.update=function(newAttrs){var elem=this.elem;var handlers=this.handlers;for(var k in handlers){if(!_.has(newAttrs,k)){// remove attributes (and handlers) for attribute names
// that don't exist as keys of `newAttrs` and so won't
// be visited when traversing it.  (Attributes that
// exist in the `newAttrs` object but are `null`
// are handled later.)
var handler=handlers[k];var oldValue=handler.value;handler.value=null;handler.update(elem,oldValue,null);delete handlers[k];}}for(var k in newAttrs){var handler=null;var oldValue;var value=newAttrs[k];if(!_.has(handlers,k)){if(value!==null){// make new handler
handler=makeAttributeHandler(elem,k,value);handlers[k]=handler;oldValue=null;}}else{handler=handlers[k];oldValue=handler.value;}if(oldValue!==value){handler.value=value;handler.update(elem,oldValue,value);if(value===null)delete handlers[k];}}};// Turns HTMLjs into DOM nodes and DOMRanges.
//
// - `htmljs`: the value to materialize, which may be any of the htmljs
//   types (Tag, CharRef, Comment, Raw, array, string, boolean, number,
//   null, or undefined) or a View or Template (which will be used to
//   construct a View).
// - `intoArray`: the array of DOM nodes and DOMRanges to push the output
//   into (required)
// - `parentView`: the View we are materializing content for (optional)
// - `_existingWorkStack`: optional argument, only used for recursive
//   calls when there is some other _materializeDOM on the call stack.
//   If _materializeDOM called your function and passed in a workStack,
//   pass it back when you call _materializeDOM (such as from a workStack
//   task).
//
// Returns `intoArray`, which is especially useful if you pass in `[]`.
Blaze._materializeDOM=function(htmljs,intoArray,parentView,_existingWorkStack){// In order to use fewer stack frames, materializeDOMInner can push
// tasks onto `workStack`, and they will be popped off
// and run, last first, after materializeDOMInner returns.  The
// reason we use a stack instead of a queue is so that we recurse
// depth-first, doing newer tasks first.
var workStack=_existingWorkStack||[];materializeDOMInner(htmljs,intoArray,parentView,workStack);if(!_existingWorkStack){// We created the work stack, so we are responsible for finishing
// the work.  Call each "task" function, starting with the top
// of the stack.
while(workStack.length){// Note that running task() may push new items onto workStack.
var task=workStack.pop();task();}}return intoArray;};var materializeDOMInner=function materializeDOMInner(htmljs,intoArray,parentView,workStack){if(htmljs==null){// null or undefined
return;}switch(typeof htmljs==="undefined"?"undefined":_typeof(htmljs)){case'string':case'boolean':case'number':intoArray.push(document.createTextNode(String(htmljs)));return;case'object':if(htmljs.htmljsType){switch(htmljs.htmljsType){case HTML.Tag.htmljsType:intoArray.push(materializeTag(htmljs,parentView,workStack));return;case HTML.CharRef.htmljsType:intoArray.push(document.createTextNode(htmljs.str));return;case HTML.Comment.htmljsType:intoArray.push(document.createComment(htmljs.sanitizedValue));return;case HTML.Raw.htmljsType:// Get an array of DOM nodes by using the browser's HTML parser
// (like innerHTML).
var nodes=Blaze._DOMBackend.parseHTML(htmljs.value);for(var i=0;i<nodes.length;i++){intoArray.push(nodes[i]);}return;}}else if(HTML.isArray(htmljs)){for(var i=htmljs.length-1;i>=0;i--){workStack.push(_.bind(Blaze._materializeDOM,null,htmljs[i],intoArray,parentView,workStack));}return;}else{if(htmljs instanceof Blaze.Template){htmljs=htmljs.constructView();// fall through to Blaze.View case below
}if(htmljs instanceof Blaze.View){Blaze._materializeView(htmljs,parentView,workStack,intoArray);return;}}}throw new Error("Unexpected object in htmljs: "+htmljs);};var materializeTag=function materializeTag(tag,parentView,workStack){var tagName=tag.tagName;var elem;if((HTML.isKnownSVGElement(tagName)||isSVGAnchor(tag))&&document.createElementNS){// inline SVG
elem=document.createElementNS('http://www.w3.org/2000/svg',tagName);}else{// normal elements
elem=document.createElement(tagName);}var rawAttrs=tag.attrs;var children=tag.children;if(tagName==='textarea'&&tag.children.length&&!(rawAttrs&&'value'in rawAttrs)){// Provide very limited support for TEXTAREA tags with children
// rather than a "value" attribute.
// Reactivity in the form of Views nested in the tag's children
// won't work.  Compilers should compile textarea contents into
// the "value" attribute of the tag, wrapped in a function if there
// is reactivity.
if(typeof rawAttrs==='function'||HTML.isArray(rawAttrs)){throw new Error("Can't have reactive children of TEXTAREA node; "+"use the 'value' attribute instead.");}rawAttrs=_.extend({},rawAttrs||null);rawAttrs.value=Blaze._expand(children,parentView);children=[];}if(rawAttrs){var attrUpdater=new ElementAttributesUpdater(elem);var updateAttributes=function updateAttributes(){var expandedAttrs=Blaze._expandAttributes(rawAttrs,parentView);var flattenedAttrs=HTML.flattenAttributes(expandedAttrs);var stringAttrs={};for(var attrName in flattenedAttrs){stringAttrs[attrName]=Blaze._toText(flattenedAttrs[attrName],parentView,HTML.TEXTMODE.STRING);}attrUpdater.update(stringAttrs);};var updaterComputation;if(parentView){updaterComputation=parentView.autorun(updateAttributes,undefined,'updater');}else{updaterComputation=Tracker.nonreactive(function(){return Tracker.autorun(function(){Tracker._withCurrentView(parentView,updateAttributes);});});}Blaze._DOMBackend.Teardown.onElementTeardown(elem,function attrTeardown(){updaterComputation.stop();});}if(children.length){var childNodesAndRanges=[];// push this function first so that it's done last
workStack.push(function(){for(var i=0;i<childNodesAndRanges.length;i++){var x=childNodesAndRanges[i];if(x instanceof Blaze._DOMRange)x.attach(elem);else elem.appendChild(x);}});// now push the task that calculates childNodesAndRanges
workStack.push(_.bind(Blaze._materializeDOM,null,children,childNodesAndRanges,parentView,workStack));}return elem;};var isSVGAnchor=function isSVGAnchor(node){// We generally aren't able to detect SVG <a> elements because
// if "A" were in our list of known svg element names, then all
// <a> nodes would be created using
// `document.createElementNS`. But in the special case of <a
// xlink:href="...">, we can at least detect that attribute and
// create an SVG <a> tag in that case.
//
// However, we still have a general problem of knowing when to
// use document.createElementNS and when to use
// document.createElement; for example, font tags will always
// be created as SVG elements which can cause other
// problems. #1977
return node.tagName==="a"&&node.attrs&&node.attrs["xlink:href"]!==undefined;};var debugFunc;// We call into user code in many places, and it's nice to catch exceptions
// propagated from user code immediately so that the whole system doesn't just
// break.  Catching exceptions is easy; reporting them is hard.  This helper
// reports exceptions.
//
// Usage:
//
// ```
// try {
//   // ... someStuff ...
// } catch (e) {
//   reportUIException(e);
// }
// ```
//
// An optional second argument overrides the default message.
// Set this to `true` to cause `reportException` to throw
// the next exception rather than reporting it.  This is
// useful in unit tests that test error messages.
Blaze._throwNextException=false;Blaze._reportException=function(e,msg){if(Blaze._throwNextException){Blaze._throwNextException=false;throw e;}if(!debugFunc)// adapted from Tracker
debugFunc=function debugFunc(){return typeof Meteor!=="undefined"?Meteor._debug:typeof console!=="undefined"&&console.log?console.log:function(){};};// In Chrome, `e.stack` is a multiline string that starts with the message
// and contains a stack trace.  Furthermore, `console.log` makes it clickable.
// `console.log` supplies the space between the two arguments.
debugFunc()(msg||'Exception caught in template:',e.stack||e.message||e);};Blaze._wrapCatchingExceptions=function(f,where){if(typeof f!=='function')return f;return function(){try{return f.apply(this,arguments);}catch(e){Blaze._reportException(e,'Exception in '+where+':');}};};/// [new] Blaze.View([name], renderMethod)
///
/// Blaze.View is the building block of reactive DOM.  Views have
/// the following features:
///
/// * lifecycle callbacks - Views are created, rendered, and destroyed,
///   and callbacks can be registered to fire when these things happen.
///
/// * parent pointer - A View points to its parentView, which is the
///   View that caused it to be rendered.  These pointers form a
///   hierarchy or tree of Views.
///
/// * render() method - A View's render() method specifies the DOM
///   (or HTML) content of the View.  If the method establishes
///   reactive dependencies, it may be re-run.
///
/// * a DOMRange - If a View is rendered to DOM, its position and
///   extent in the DOM are tracked using a DOMRange object.
///
/// When a View is constructed by calling Blaze.View, the View is
/// not yet considered "created."  It doesn't have a parentView yet,
/// and no logic has been run to initialize the View.  All real
/// work is deferred until at least creation time, when the onViewCreated
/// callbacks are fired, which happens when the View is "used" in
/// some way that requires it to be rendered.
///
/// ...more lifecycle stuff
///
/// `name` is an optional string tag identifying the View.  The only
/// time it's used is when looking in the View tree for a View of a
/// particular name; for example, data contexts are stored on Views
/// of name "with".  Names are also useful when debugging, so in
/// general it's good for functions that create Views to set the name.
/// Views associated with templates have names of the form "Template.foo".
/**
 * @class
 * @summary Constructor for a View, which represents a reactive region of DOM.
 * @locus Client
 * @param {String} [name] Optional.  A name for this type of View.  See [`view.name`](#view_name).
 * @param {Function} renderFunction A function that returns [*renderable content*](#renderable_content).  In this function, `this` is bound to the View.
 */Blaze.View=function(name,render){if(!(this instanceof Blaze.View))// called without `new`
return new Blaze.View(name,render);if(typeof name==='function'){// omitted "name" argument
render=name;name='';}this.name=name;this._render=render;this._callbacks={created:null,rendered:null,destroyed:null};// Setting all properties here is good for readability,
// and also may help Chrome optimize the code by keeping
// the View object from changing shape too much.
this.isCreated=false;this._isCreatedForExpansion=false;this.isRendered=false;this._isAttached=false;this.isDestroyed=false;this._isInRender=false;this.parentView=null;this._domrange=null;// This flag is normally set to false except for the cases when view's parent
// was generated as part of expanding some syntactic sugar expressions or
// methods.
// Ex.: Blaze.renderWithData is an equivalent to creating a view with regular
// Blaze.render and wrapping it into {{#with data}}{{/with}} view. Since the
// users don't know anything about these generated parent views, Blaze needs
// this information to be available on views to make smarter decisions. For
// example: removing the generated parent view with the view on Blaze.remove.
this._hasGeneratedParent=false;// Bindings accessible to children views (via view.lookup('name')) within the
// closest template view.
this._scopeBindings={};this.renderCount=0;};Blaze.View.prototype._render=function(){return null;};Blaze.View.prototype.onViewCreated=function(cb){this._callbacks.created=this._callbacks.created||[];this._callbacks.created.push(cb);};Blaze.View.prototype._onViewRendered=function(cb){this._callbacks.rendered=this._callbacks.rendered||[];this._callbacks.rendered.push(cb);};Blaze.View.prototype.onViewReady=function(cb){var self=this;var fire=function fire(){Tracker.afterFlush(function(){if(!self.isDestroyed){Blaze._withCurrentView(self,function(){cb.call(self);});}});};self._onViewRendered(function onViewRendered(){if(self.isDestroyed)return;if(!self._domrange.attached)self._domrange.onAttached(fire);else fire();});};Blaze.View.prototype.onViewDestroyed=function(cb){this._callbacks.destroyed=this._callbacks.destroyed||[];this._callbacks.destroyed.push(cb);};Blaze.View.prototype.removeViewDestroyedListener=function(cb){var destroyed=this._callbacks.destroyed;if(!destroyed)return;var index=_.lastIndexOf(destroyed,cb);if(index!==-1){// XXX You'd think the right thing to do would be splice, but _fireCallbacks
// gets sad if you remove callbacks while iterating over the list.  Should
// change this to use callback-hook or EventEmitter or something else that
// properly supports removal.
destroyed[index]=null;}};/// View#autorun(func)
///
/// Sets up a Tracker autorun that is "scoped" to this View in two
/// important ways: 1) Blaze.currentView is automatically set
/// on every re-run, and 2) the autorun is stopped when the
/// View is destroyed.  As with Tracker.autorun, the first run of
/// the function is immediate, and a Computation object that can
/// be used to stop the autorun is returned.
///
/// View#autorun is meant to be called from View callbacks like
/// onViewCreated, or from outside the rendering process.  It may not
/// be called before the onViewCreated callbacks are fired (too early),
/// or from a render() method (too confusing).
///
/// Typically, autoruns that update the state
/// of the View (as in Blaze.With) should be started from an onViewCreated
/// callback.  Autoruns that update the DOM should be started
/// from either onViewCreated (guarded against the absence of
/// view._domrange), or onViewReady.
Blaze.View.prototype.autorun=function(f,_inViewScope,displayName){var self=this;// The restrictions on when View#autorun can be called are in order
// to avoid bad patterns, like creating a Blaze.View and immediately
// calling autorun on it.  A freshly created View is not ready to
// have logic run on it; it doesn't have a parentView, for example.
// It's when the View is materialized or expanded that the onViewCreated
// handlers are fired and the View starts up.
//
// Letting the render() method call `this.autorun()` is problematic
// because of re-render.  The best we can do is to stop the old
// autorun and start a new one for each render, but that's a pattern
// we try to avoid internally because it leads to helpers being
// called extra times, in the case where the autorun causes the
// view to re-render (and thus the autorun to be torn down and a
// new one established).
//
// We could lift these restrictions in various ways.  One interesting
// idea is to allow you to call `view.autorun` after instantiating
// `view`, and automatically wrap it in `view.onViewCreated`, deferring
// the autorun so that it starts at an appropriate time.  However,
// then we can't return the Computation object to the caller, because
// it doesn't exist yet.
if(!self.isCreated){throw new Error("View#autorun must be called from the created callback at the earliest");}if(this._isInRender){throw new Error("Can't call View#autorun from inside render(); try calling it from the created or rendered callback");}if(Tracker.active){throw new Error("Can't call View#autorun from a Tracker Computation; try calling it from the created or rendered callback");}var templateInstanceFunc=Blaze.Template._currentTemplateInstanceFunc;var func=function viewAutorun(c){return Blaze._withCurrentView(_inViewScope||self,function(){return Blaze.Template._withTemplateInstanceFunc(templateInstanceFunc,function(){return f.call(self,c);});});};// Give the autorun function a better name for debugging and profiling.
// The `displayName` property is not part of the spec but browsers like Chrome
// and Firefox prefer it in debuggers over the name function was declared by.
func.displayName=(self.name||'anonymous')+':'+(displayName||'anonymous');var comp=Tracker.autorun(func);var stopComputation=function stopComputation(){comp.stop();};self.onViewDestroyed(stopComputation);comp.onStop(function(){self.removeViewDestroyedListener(stopComputation);});return comp;};Blaze.View.prototype._errorIfShouldntCallSubscribe=function(){var self=this;if(!self.isCreated){throw new Error("View#subscribe must be called from the created callback at the earliest");}if(self._isInRender){throw new Error("Can't call View#subscribe from inside render(); try calling it from the created or rendered callback");}if(self.isDestroyed){throw new Error("Can't call View#subscribe from inside the destroyed callback, try calling it inside created or rendered.");}};/**
 * Just like Blaze.View#autorun, but with Meteor.subscribe instead of
 * Tracker.autorun. Stop the subscription when the view is destroyed.
 * @return {SubscriptionHandle} A handle to the subscription so that you can
 * see if it is ready, or stop it manually
 */Blaze.View.prototype.subscribe=function(args,options){var self=this;options=options||{};self._errorIfShouldntCallSubscribe();var subHandle;if(options.connection){subHandle=options.connection.subscribe.apply(options.connection,args);}else{subHandle=Meteor.subscribe.apply(Meteor,args);}self.onViewDestroyed(function(){subHandle.stop();});return subHandle;};Blaze.View.prototype.firstNode=function(){if(!this._isAttached)throw new Error("View must be attached before accessing its DOM");return this._domrange.firstNode();};Blaze.View.prototype.lastNode=function(){if(!this._isAttached)throw new Error("View must be attached before accessing its DOM");return this._domrange.lastNode();};Blaze._fireCallbacks=function(view,which){Blaze._withCurrentView(view,function(){Tracker.nonreactive(function fireCallbacks(){var cbs=view._callbacks[which];for(var i=0,N=cbs&&cbs.length;i<N;i++){cbs[i]&&cbs[i].call(view);}});});};Blaze._createView=function(view,parentView,forExpansion){if(view.isCreated)throw new Error("Can't render the same View twice");view.parentView=parentView||null;view.isCreated=true;if(forExpansion)view._isCreatedForExpansion=true;Blaze._fireCallbacks(view,'created');};var doFirstRender=function doFirstRender(view,initialContent){var domrange=new Blaze._DOMRange(initialContent);view._domrange=domrange;domrange.view=view;view.isRendered=true;Blaze._fireCallbacks(view,'rendered');var teardownHook=null;domrange.onAttached(function attached(range,element){view._isAttached=true;teardownHook=Blaze._DOMBackend.Teardown.onElementTeardown(element,function teardown(){Blaze._destroyView(view,true/* _skipNodes */);});});// tear down the teardown hook
view.onViewDestroyed(function(){teardownHook&&teardownHook.stop();teardownHook=null;});return domrange;};// Take an uncreated View `view` and create and render it to DOM,
// setting up the autorun that updates the View.  Returns a new
// DOMRange, which has been associated with the View.
//
// The private arguments `_workStack` and `_intoArray` are passed in
// by Blaze._materializeDOM and are only present for recursive calls
// (when there is some other _materializeView on the stack).  If
// provided, then we avoid the mutual recursion of calling back into
// Blaze._materializeDOM so that deep View hierarchies don't blow the
// stack.  Instead, we push tasks onto workStack for the initial
// rendering and subsequent setup of the View, and they are done after
// we return.  When there is a _workStack, we do not return the new
// DOMRange, but instead push it into _intoArray from a _workStack
// task.
Blaze._materializeView=function(view,parentView,_workStack,_intoArray){Blaze._createView(view,parentView);var domrange;var lastHtmljs;// We don't expect to be called in a Computation, but just in case,
// wrap in Tracker.nonreactive.
Tracker.nonreactive(function(){view.autorun(function doRender(c){// `view.autorun` sets the current view.
view.renderCount++;view._isInRender=true;// Any dependencies that should invalidate this Computation come
// from this line:
var htmljs=view._render();view._isInRender=false;if(!c.firstRun){Tracker.nonreactive(function doMaterialize(){// re-render
var rangesAndNodes=Blaze._materializeDOM(htmljs,[],view);if(!Blaze._isContentEqual(lastHtmljs,htmljs)){domrange.setMembers(rangesAndNodes);Blaze._fireCallbacks(view,'rendered');}});}lastHtmljs=htmljs;// Causes any nested views to stop immediately, not when we call
// `setMembers` the next time around the autorun.  Otherwise,
// helpers in the DOM tree to be replaced might be scheduled
// to re-run before we have a chance to stop them.
Tracker.onInvalidate(function(){if(domrange){domrange.destroyMembers();}});},undefined,'materialize');// first render.  lastHtmljs is the first htmljs.
var initialContents;if(!_workStack){initialContents=Blaze._materializeDOM(lastHtmljs,[],view);domrange=doFirstRender(view,initialContents);initialContents=null;// help GC because we close over this scope a lot
}else{// We're being called from Blaze._materializeDOM, so to avoid
// recursion and save stack space, provide a description of the
// work to be done instead of doing it.  Tasks pushed onto
// _workStack will be done in LIFO order after we return.
// The work will still be done within a Tracker.nonreactive,
// because it will be done by some call to Blaze._materializeDOM
// (which is always called in a Tracker.nonreactive).
initialContents=[];// push this function first so that it happens last
_workStack.push(function(){domrange=doFirstRender(view,initialContents);initialContents=null;// help GC because of all the closures here
_intoArray.push(domrange);});// now push the task that calculates initialContents
_workStack.push(_.bind(Blaze._materializeDOM,null,lastHtmljs,initialContents,view,_workStack));}});if(!_workStack){return domrange;}else{return null;}};// Expands a View to HTMLjs, calling `render` recursively on all
// Views and evaluating any dynamic attributes.  Calls the `created`
// callback, but not the `materialized` or `rendered` callbacks.
// Destroys the view immediately, unless called in a Tracker Computation,
// in which case the view will be destroyed when the Computation is
// invalidated.  If called in a Tracker Computation, the result is a
// reactive string; that is, the Computation will be invalidated
// if any changes are made to the view or subviews that might affect
// the HTML.
Blaze._expandView=function(view,parentView){Blaze._createView(view,parentView,true/*forExpansion*/);view._isInRender=true;var htmljs=Blaze._withCurrentView(view,function(){return view._render();});view._isInRender=false;var result=Blaze._expand(htmljs,view);if(Tracker.active){Tracker.onInvalidate(function(){Blaze._destroyView(view);});}else{Blaze._destroyView(view);}return result;};// Options: `parentView`
Blaze._HTMLJSExpander=HTML.TransformingVisitor.extend();Blaze._HTMLJSExpander.def({visitObject:function visitObject(x){if(x instanceof Blaze.Template)x=x.constructView();if(x instanceof Blaze.View)return Blaze._expandView(x,this.parentView);// this will throw an error; other objects are not allowed!
return HTML.TransformingVisitor.prototype.visitObject.call(this,x);},visitAttributes:function visitAttributes(attrs){// expand dynamic attributes
if(typeof attrs==='function')attrs=Blaze._withCurrentView(this.parentView,attrs);// call super (e.g. for case where `attrs` is an array)
return HTML.TransformingVisitor.prototype.visitAttributes.call(this,attrs);},visitAttribute:function visitAttribute(name,value,tag){// expand attribute values that are functions.  Any attribute value
// that contains Views must be wrapped in a function.
if(typeof value==='function')value=Blaze._withCurrentView(this.parentView,value);return HTML.TransformingVisitor.prototype.visitAttribute.call(this,name,value,tag);}});// Return Blaze.currentView, but only if it is being rendered
// (i.e. we are in its render() method).
var currentViewIfRendering=function currentViewIfRendering(){var view=Blaze.currentView;return view&&view._isInRender?view:null;};Blaze._expand=function(htmljs,parentView){parentView=parentView||currentViewIfRendering();return new Blaze._HTMLJSExpander({parentView:parentView}).visit(htmljs);};Blaze._expandAttributes=function(attrs,parentView){parentView=parentView||currentViewIfRendering();return new Blaze._HTMLJSExpander({parentView:parentView}).visitAttributes(attrs);};Blaze._destroyView=function(view,_skipNodes){if(view.isDestroyed)return;view.isDestroyed=true;Blaze._fireCallbacks(view,'destroyed');// Destroy views and elements recursively.  If _skipNodes,
// only recurse up to views, not elements, for the case where
// the backend (jQuery) is recursing over the elements already.
if(view._domrange)view._domrange.destroyMembers(_skipNodes);};Blaze._destroyNode=function(node){if(node.nodeType===1)Blaze._DOMBackend.Teardown.tearDownElement(node);};// Are the HTMLjs entities `a` and `b` the same?  We could be
// more elaborate here but the point is to catch the most basic
// cases.
Blaze._isContentEqual=function(a,b){if(a instanceof HTML.Raw){return b instanceof HTML.Raw&&a.value===b.value;}else if(a==null){return b==null;}else{return a===b&&(typeof a==='number'||typeof a==='boolean'||typeof a==='string');}};/**
 * @summary The View corresponding to the current template helper, event handler, callback, or autorun.  If there isn't one, `null`.
 * @locus Client
 * @type {Blaze.View}
 */Blaze.currentView=null;Blaze._withCurrentView=function(view,func){var oldView=Blaze.currentView;try{Blaze.currentView=view;return func();}finally{Blaze.currentView=oldView;}};// Blaze.render publicly takes a View or a Template.
// Privately, it takes any HTMLJS (extended with Views and Templates)
// except null or undefined, or a function that returns any extended
// HTMLJS.
var checkRenderContent=function checkRenderContent(content){if(content===null)throw new Error("Can't render null");if(typeof content==='undefined')throw new Error("Can't render undefined");if(content instanceof Blaze.View||content instanceof Blaze.Template||typeof content==='function')return;try{// Throw if content doesn't look like HTMLJS at the top level
// (i.e. verify that this is an HTML.Tag, or an array,
// or a primitive, etc.)
new HTML.Visitor().visit(content);}catch(e){// Make error message suitable for public API
throw new Error("Expected Template or View");}};// For Blaze.render and Blaze.toHTML, take content and
// wrap it in a View, unless it's a single View or
// Template already.
var contentAsView=function contentAsView(content){checkRenderContent(content);if(content instanceof Blaze.Template){return content.constructView();}else if(content instanceof Blaze.View){return content;}else{var func=content;if(typeof func!=='function'){func=function func(){return content;};}return Blaze.View('render',func);}};// For Blaze.renderWithData and Blaze.toHTMLWithData, wrap content
// in a function, if necessary, so it can be a content arg to
// a Blaze.With.
var contentAsFunc=function contentAsFunc(content){checkRenderContent(content);if(typeof content!=='function'){return function(){return content;};}else{return content;}};/**
 * @summary Renders a template or View to DOM nodes and inserts it into the DOM, returning a rendered [View](#blaze_view) which can be passed to [`Blaze.remove`](#blaze_remove).
 * @locus Client
 * @param {Template|Blaze.View} templateOrView The template (e.g. `Template.myTemplate`) or View object to render.  If a template, a View object is [constructed](#template_constructview).  If a View, it must be an unrendered View, which becomes a rendered View and is returned.
 * @param {DOMNode} parentNode The node that will be the parent of the rendered template.  It must be an Element node.
 * @param {DOMNode} [nextNode] Optional. If provided, must be a child of <em>parentNode</em>; the template will be inserted before this node. If not provided, the template will be inserted as the last child of parentNode.
 * @param {Blaze.View} [parentView] Optional. If provided, it will be set as the rendered View's [`parentView`](#view_parentview).
 */Blaze.render=function(content,parentElement,nextNode,parentView){if(!parentElement){Blaze._warn("Blaze.render without a parent element is deprecated. "+"You must specify where to insert the rendered content.");}if(nextNode instanceof Blaze.View){// handle omitted nextNode
parentView=nextNode;nextNode=null;}// parentElement must be a DOM node. in particular, can't be the
// result of a call to `$`. Can't check if `parentElement instanceof
// Node` since 'Node' is undefined in IE8.
if(parentElement&&typeof parentElement.nodeType!=='number')throw new Error("'parentElement' must be a DOM node");if(nextNode&&typeof nextNode.nodeType!=='number')// 'nextNode' is optional
throw new Error("'nextNode' must be a DOM node");parentView=parentView||currentViewIfRendering();var view=contentAsView(content);Blaze._materializeView(view,parentView);if(parentElement){view._domrange.attach(parentElement,nextNode);}return view;};Blaze.insert=function(view,parentElement,nextNode){Blaze._warn("Blaze.insert has been deprecated.  Specify where to insert the "+"rendered content in the call to Blaze.render.");if(!(view&&view._domrange instanceof Blaze._DOMRange))throw new Error("Expected template rendered with Blaze.render");view._domrange.attach(parentElement,nextNode);};/**
 * @summary Renders a template or View to DOM nodes with a data context.  Otherwise identical to `Blaze.render`.
 * @locus Client
 * @param {Template|Blaze.View} templateOrView The template (e.g. `Template.myTemplate`) or View object to render.
 * @param {Object|Function} data The data context to use, or a function returning a data context.  If a function is provided, it will be reactively re-run.
 * @param {DOMNode} parentNode The node that will be the parent of the rendered template.  It must be an Element node.
 * @param {DOMNode} [nextNode] Optional. If provided, must be a child of <em>parentNode</em>; the template will be inserted before this node. If not provided, the template will be inserted as the last child of parentNode.
 * @param {Blaze.View} [parentView] Optional. If provided, it will be set as the rendered View's [`parentView`](#view_parentview).
 */Blaze.renderWithData=function(content,data,parentElement,nextNode,parentView){// We defer the handling of optional arguments to Blaze.render.  At this point,
// `nextNode` may actually be `parentView`.
return Blaze.render(Blaze._TemplateWith(data,contentAsFunc(content)),parentElement,nextNode,parentView);};/**
 * @summary Removes a rendered View from the DOM, stopping all reactive updates and event listeners on it.
 * @locus Client
 * @param {Blaze.View} renderedView The return value from `Blaze.render` or `Blaze.renderWithData`.
 */Blaze.remove=function(view){if(!(view&&view._domrange instanceof Blaze._DOMRange))throw new Error("Expected template rendered with Blaze.render");while(view){if(!view.isDestroyed){var range=view._domrange;if(range.attached&&!range.parentRange)range.detach();range.destroy();}view=view._hasGeneratedParent&&view.parentView;}};/**
 * @summary Renders a template or View to a string of HTML.
 * @locus Client
 * @param {Template|Blaze.View} templateOrView The template (e.g. `Template.myTemplate`) or View object from which to generate HTML.
 */Blaze.toHTML=function(content,parentView){parentView=parentView||currentViewIfRendering();return HTML.toHTML(Blaze._expandView(contentAsView(content),parentView));};/**
 * @summary Renders a template or View to HTML with a data context.  Otherwise identical to `Blaze.toHTML`.
 * @locus Client
 * @param {Template|Blaze.View} templateOrView The template (e.g. `Template.myTemplate`) or View object from which to generate HTML.
 * @param {Object|Function} data The data context to use, or a function returning a data context.
 */Blaze.toHTMLWithData=function(content,data,parentView){parentView=parentView||currentViewIfRendering();return HTML.toHTML(Blaze._expandView(Blaze._TemplateWith(data,contentAsFunc(content)),parentView));};Blaze._toText=function(htmljs,parentView,textMode){if(typeof htmljs==='function')throw new Error("Blaze._toText doesn't take a function, just HTMLjs");if(parentView!=null&&!(parentView instanceof Blaze.View)){// omitted parentView argument
textMode=parentView;parentView=null;}parentView=parentView||currentViewIfRendering();if(!textMode)throw new Error("textMode required");if(!(textMode===HTML.TEXTMODE.STRING||textMode===HTML.TEXTMODE.RCDATA||textMode===HTML.TEXTMODE.ATTRIBUTE))throw new Error("Unknown textMode: "+textMode);return HTML.toText(Blaze._expand(htmljs,parentView),textMode);};/**
 * @summary Returns the current data context, or the data context that was used when rendering a particular DOM element or View from a Meteor template.
 * @locus Client
 * @param {DOMElement|Blaze.View} [elementOrView] Optional.  An element that was rendered by a Meteor, or a View.
 */Blaze.getData=function(elementOrView){var theWith;if(!elementOrView){theWith=Blaze.getView('with');}else if(elementOrView instanceof Blaze.View){var view=elementOrView;theWith=view.name==='with'?view:Blaze.getView(view,'with');}else if(typeof elementOrView.nodeType==='number'){if(elementOrView.nodeType!==1)throw new Error("Expected DOM element");theWith=Blaze.getView(elementOrView,'with');}else{throw new Error("Expected DOM element or View");}return theWith?theWith.dataVar.get():null;};// For back-compat
Blaze.getElementData=function(element){Blaze._warn("Blaze.getElementData has been deprecated.  Use "+"Blaze.getData(element) instead.");if(element.nodeType!==1)throw new Error("Expected DOM element");return Blaze.getData(element);};// Both arguments are optional.
/**
 * @summary Gets either the current View, or the View enclosing the given DOM element.
 * @locus Client
 * @param {DOMElement} [element] Optional.  If specified, the View enclosing `element` is returned.
 */Blaze.getView=function(elementOrView,_viewName){var viewName=_viewName;if(typeof elementOrView==='string'){// omitted elementOrView; viewName present
viewName=elementOrView;elementOrView=null;}// We could eventually shorten the code by folding the logic
// from the other methods into this method.
if(!elementOrView){return Blaze._getCurrentView(viewName);}else if(elementOrView instanceof Blaze.View){return Blaze._getParentView(elementOrView,viewName);}else if(typeof elementOrView.nodeType==='number'){return Blaze._getElementView(elementOrView,viewName);}else{throw new Error("Expected DOM element or View");}};// Gets the current view or its nearest ancestor of name
// `name`.
Blaze._getCurrentView=function(name){var view=Blaze.currentView;// Better to fail in cases where it doesn't make sense
// to use Blaze._getCurrentView().  There will be a current
// view anywhere it does.  You can check Blaze.currentView
// if you want to know whether there is one or not.
if(!view)throw new Error("There is no current view");if(name){while(view&&view.name!==name){view=view.parentView;}return view||null;}else{// Blaze._getCurrentView() with no arguments just returns
// Blaze.currentView.
return view;}};Blaze._getParentView=function(view,name){var v=view.parentView;if(name){while(v&&v.name!==name){v=v.parentView;}}return v||null;};Blaze._getElementView=function(elem,name){var range=Blaze._DOMRange.forElement(elem);var view=null;while(range&&!view){view=range.view||null;if(!view){if(range.parentRange)range=range.parentRange;else range=Blaze._DOMRange.forElement(range.parentElement);}}if(name){while(view&&view.name!==name){view=view.parentView;}return view||null;}else{return view;}};Blaze._addEventMap=function(view,eventMap,thisInHandler){thisInHandler=thisInHandler||null;var handles=[];if(!view._domrange)throw new Error("View must have a DOMRange");view._domrange.onAttached(function attached_eventMaps(range,element){_.each(eventMap,function(handler,spec){var clauses=spec.split(/,\s+/);// iterate over clauses of spec, e.g. ['click .foo', 'click .bar']
_.each(clauses,function(clause){var parts=clause.split(/\s+/);if(parts.length===0)return;var newEvents=parts.shift();var selector=parts.join(' ');handles.push(Blaze._EventSupport.listen(element,newEvents,selector,function(evt){if(!range.containsElement(evt.currentTarget))return null;var handlerThis=thisInHandler||this;var handlerArgs=arguments;return Blaze._withCurrentView(view,function(){return handler.apply(handlerThis,handlerArgs);});},range,function(r){return r.parentRange;}));});});});view.onViewDestroyed(function(){_.each(handles,function(h){h.stop();});handles.length=0;});};Blaze._calculateCondition=function(cond){if(cond instanceof Array&&cond.length===0)cond=false;return!!cond;};/**
 * @summary Constructs a View that renders content with a data context.
 * @locus Client
 * @param {Object|Function} data An object to use as the data context, or a function returning such an object.  If a function is provided, it will be reactively re-run.
 * @param {Function} contentFunc A Function that returns [*renderable content*](#renderable_content).
 */Blaze.With=function(data,contentFunc){var view=Blaze.View('with',contentFunc);view.dataVar=new ReactiveVar();view.onViewCreated(function(){if(typeof data==='function'){// `data` is a reactive function
view.autorun(function(){view.dataVar.set(data());},view.parentView,'setData');}else{view.dataVar.set(data);}});return view;};/**
 * Attaches bindings to the instantiated view.
 * @param {Object} bindings A dictionary of bindings, each binding name
 * corresponds to a value or a function that will be reactively re-run.
 * @param {View} view The target.
 */Blaze._attachBindingsToView=function(bindings,view){view.onViewCreated(function(){_.each(bindings,function(binding,name){view._scopeBindings[name]=new ReactiveVar();if(typeof binding==='function'){view.autorun(function(){view._scopeBindings[name].set(binding());},view.parentView);}else{view._scopeBindings[name].set(binding);}});});};/**
 * @summary Constructs a View setting the local lexical scope in the block.
 * @param {Function} bindings Dictionary mapping names of bindings to
 * values or computations to reactively re-run.
 * @param {Function} contentFunc A Function that returns [*renderable content*](#renderable_content).
 */Blaze.Let=function(bindings,contentFunc){var view=Blaze.View('let',contentFunc);Blaze._attachBindingsToView(bindings,view);return view;};/**
 * @summary Constructs a View that renders content conditionally.
 * @locus Client
 * @param {Function} conditionFunc A function to reactively re-run.  Whether the result is truthy or falsy determines whether `contentFunc` or `elseFunc` is shown.  An empty array is considered falsy.
 * @param {Function} contentFunc A Function that returns [*renderable content*](#renderable_content).
 * @param {Function} [elseFunc] Optional.  A Function that returns [*renderable content*](#renderable_content).  If no `elseFunc` is supplied, no content is shown in the "else" case.
 */Blaze.If=function(conditionFunc,contentFunc,elseFunc,_not){var conditionVar=new ReactiveVar();var view=Blaze.View(_not?'unless':'if',function(){return conditionVar.get()?contentFunc():elseFunc?elseFunc():null;});view.__conditionVar=conditionVar;view.onViewCreated(function(){this.autorun(function(){var cond=Blaze._calculateCondition(conditionFunc());conditionVar.set(_not?!cond:cond);},this.parentView,'condition');});return view;};/**
 * @summary An inverted [`Blaze.If`](#blaze_if).
 * @locus Client
 * @param {Function} conditionFunc A function to reactively re-run.  If the result is falsy, `contentFunc` is shown, otherwise `elseFunc` is shown.  An empty array is considered falsy.
 * @param {Function} contentFunc A Function that returns [*renderable content*](#renderable_content).
 * @param {Function} [elseFunc] Optional.  A Function that returns [*renderable content*](#renderable_content).  If no `elseFunc` is supplied, no content is shown in the "else" case.
 */Blaze.Unless=function(conditionFunc,contentFunc,elseFunc){return Blaze.If(conditionFunc,contentFunc,elseFunc,true/*_not*/);};/**
 * @summary Constructs a View that renders `contentFunc` for each item in a sequence.
 * @locus Client
 * @param {Function} argFunc A function to reactively re-run. The function can
 * return one of two options:
 *
 * 1. An object with two fields: '_variable' and '_sequence'. Each iterates over
 *   '_sequence', it may be a Cursor, an array, null, or undefined. Inside the
 *   Each body you will be able to get the current item from the sequence using
 *   the name specified in the '_variable' field.
 *
 * 2. Just a sequence (Cursor, array, null, or undefined) not wrapped into an
 *   object. Inside the Each body, the current item will be set as the data
 *   context.
 * @param {Function} contentFunc A Function that returns  [*renderable
 * content*](#renderable_content).
 * @param {Function} [elseFunc] A Function that returns [*renderable
 * content*](#renderable_content) to display in the case when there are no items
 * in the sequence.
 */Blaze.Each=function(argFunc,contentFunc,elseFunc){var eachView=Blaze.View('each',function(){var subviews=this.initialSubviews;this.initialSubviews=null;if(this._isCreatedForExpansion){this.expandedValueDep=new Tracker.Dependency();this.expandedValueDep.depend();}return subviews;});eachView.initialSubviews=[];eachView.numItems=0;eachView.inElseMode=false;eachView.stopHandle=null;eachView.contentFunc=contentFunc;eachView.elseFunc=elseFunc;eachView.argVar=new ReactiveVar();eachView.variableName=null;// update the @index value in the scope of all subviews in the range
var updateIndices=function updateIndices(from,to){if(to===undefined){to=eachView.numItems-1;}for(var i=from;i<=to;i++){var view=eachView._domrange.members[i].view;view._scopeBindings['@index'].set(i);}};eachView.onViewCreated(function(){// We evaluate argFunc in an autorun to make sure
// Blaze.currentView is always set when it runs (rather than
// passing argFunc straight to ObserveSequence).
eachView.autorun(function(){// argFunc can return either a sequence as is or a wrapper object with a
// _sequence and _variable fields set.
var arg=argFunc();if(_.isObject(arg)&&_.has(arg,'_sequence')){eachView.variableName=arg._variable||null;arg=arg._sequence;}eachView.argVar.set(arg);},eachView.parentView,'collection');eachView.stopHandle=ObserveSequence.observe(function(){return eachView.argVar.get();},{addedAt:function addedAt(id,item,index){Tracker.nonreactive(function(){var newItemView;if(eachView.variableName){// new-style #each (as in {{#each item in items}})
// doesn't create a new data context
newItemView=Blaze.View('item',eachView.contentFunc);}else{newItemView=Blaze.With(item,eachView.contentFunc);}eachView.numItems++;var bindings={};bindings['@index']=index;if(eachView.variableName){bindings[eachView.variableName]=item;}Blaze._attachBindingsToView(bindings,newItemView);if(eachView.expandedValueDep){eachView.expandedValueDep.changed();}else if(eachView._domrange){if(eachView.inElseMode){eachView._domrange.removeMember(0);eachView.inElseMode=false;}var range=Blaze._materializeView(newItemView,eachView);eachView._domrange.addMember(range,index);updateIndices(index);}else{eachView.initialSubviews.splice(index,0,newItemView);}});},removedAt:function removedAt(id,item,index){Tracker.nonreactive(function(){eachView.numItems--;if(eachView.expandedValueDep){eachView.expandedValueDep.changed();}else if(eachView._domrange){eachView._domrange.removeMember(index);updateIndices(index);if(eachView.elseFunc&&eachView.numItems===0){eachView.inElseMode=true;eachView._domrange.addMember(Blaze._materializeView(Blaze.View('each_else',eachView.elseFunc),eachView),0);}}else{eachView.initialSubviews.splice(index,1);}});},changedAt:function changedAt(id,newItem,oldItem,index){Tracker.nonreactive(function(){if(eachView.expandedValueDep){eachView.expandedValueDep.changed();}else{var itemView;if(eachView._domrange){itemView=eachView._domrange.getMember(index).view;}else{itemView=eachView.initialSubviews[index];}if(eachView.variableName){itemView._scopeBindings[eachView.variableName].set(newItem);}else{itemView.dataVar.set(newItem);}}});},movedTo:function movedTo(id,item,fromIndex,toIndex){Tracker.nonreactive(function(){if(eachView.expandedValueDep){eachView.expandedValueDep.changed();}else if(eachView._domrange){eachView._domrange.moveMember(fromIndex,toIndex);updateIndices(Math.min(fromIndex,toIndex),Math.max(fromIndex,toIndex));}else{var subviews=eachView.initialSubviews;var itemView=subviews[fromIndex];subviews.splice(fromIndex,1);subviews.splice(toIndex,0,itemView);}});}});if(eachView.elseFunc&&eachView.numItems===0){eachView.inElseMode=true;eachView.initialSubviews[0]=Blaze.View('each_else',eachView.elseFunc);}});eachView.onViewDestroyed(function(){if(eachView.stopHandle)eachView.stopHandle.stop();});return eachView;};Blaze._TemplateWith=function(arg,contentFunc){var w;var argFunc=arg;if(typeof arg!=='function'){argFunc=function argFunc(){return arg;};}// This is a little messy.  When we compile `{{> Template.contentBlock}}`, we
// wrap it in Blaze._InOuterTemplateScope in order to skip the intermediate
// parent Views in the current template.  However, when there's an argument
// (`{{> Template.contentBlock arg}}`), the argument needs to be evaluated
// in the original scope.  There's no good order to nest
// Blaze._InOuterTemplateScope and Spacebars.TemplateWith to achieve this,
// so we wrap argFunc to run it in the "original parentView" of the
// Blaze._InOuterTemplateScope.
//
// To make this better, reconsider _InOuterTemplateScope as a primitive.
// Longer term, evaluate expressions in the proper lexical scope.
var wrappedArgFunc=function wrappedArgFunc(){var viewToEvaluateArg=null;if(w.parentView&&w.parentView.name==='InOuterTemplateScope'){viewToEvaluateArg=w.parentView.originalParentView;}if(viewToEvaluateArg){return Blaze._withCurrentView(viewToEvaluateArg,argFunc);}else{return argFunc();}};var wrappedContentFunc=function wrappedContentFunc(){var content=contentFunc.call(this);// Since we are generating the Blaze._TemplateWith view for the
// user, set the flag on the child view.  If `content` is a template,
// construct the View so that we can set the flag.
if(content instanceof Blaze.Template){content=content.constructView();}if(content instanceof Blaze.View){content._hasGeneratedParent=true;}return content;};w=Blaze.With(wrappedArgFunc,wrappedContentFunc);w.__isTemplateWith=true;return w;};Blaze._InOuterTemplateScope=function(templateView,contentFunc){var view=Blaze.View('InOuterTemplateScope',contentFunc);var parentView=templateView.parentView;// Hack so that if you call `{{> foo bar}}` and it expands into
// `{{#with bar}}{{> foo}}{{/with}}`, and then `foo` is a template
// that inserts `{{> Template.contentBlock}}`, the data context for
// `Template.contentBlock` is not `bar` but the one enclosing that.
if(parentView.__isTemplateWith)parentView=parentView.parentView;view.onViewCreated(function(){this.originalParentView=this.parentView;this.parentView=parentView;this.__childDoesntStartNewLexicalScope=true;});return view;};// XXX COMPAT WITH 0.9.0
Blaze.InOuterTemplateScope=Blaze._InOuterTemplateScope;Blaze._globalHelpers={};// Documented as Template.registerHelper.
// This definition also provides back-compat for `UI.registerHelper`.
Blaze.registerHelper=function(name,func){Blaze._globalHelpers[name]=func;};// Also documented as Template.deregisterHelper
Blaze.deregisterHelper=function(name){delete Blaze._globalHelpers[name];};var bindIfIsFunction=function bindIfIsFunction(x,target){if(typeof x!=='function')return x;return _.bind(x,target);};// If `x` is a function, binds the value of `this` for that function
// to the current data context.
var bindDataContext=function bindDataContext(x){if(typeof x==='function'){return function(){var data=Blaze.getData();if(data==null)data={};return x.apply(data,arguments);};}return x;};Blaze._OLDSTYLE_HELPER={};Blaze._getTemplateHelper=function(template,name,tmplInstanceFunc){// XXX COMPAT WITH 0.9.3
var isKnownOldStyleHelper=false;if(template.__helpers.has(name)){var helper=template.__helpers.get(name);if(helper===Blaze._OLDSTYLE_HELPER){isKnownOldStyleHelper=true;}else if(helper!=null){return wrapHelper(bindDataContext(helper),tmplInstanceFunc);}else{return null;}}// old-style helper
if(name in template){// Only warn once per helper
if(!isKnownOldStyleHelper){template.__helpers.set(name,Blaze._OLDSTYLE_HELPER);if(!template._NOWARN_OLDSTYLE_HELPERS){Blaze._warn('Assigning helper with `'+template.viewName+'.'+name+' = ...` is deprecated.  Use `'+template.viewName+'.helpers(...)` instead.');}}if(template[name]!=null){return wrapHelper(bindDataContext(template[name]),tmplInstanceFunc);}}return null;};var wrapHelper=function wrapHelper(f,templateFunc){if(typeof f!=="function"){return f;}return function(){var self=this;var args=arguments;return Blaze.Template._withTemplateInstanceFunc(templateFunc,function(){return Blaze._wrapCatchingExceptions(f,'template helper').apply(self,args);});};};Blaze._lexicalBindingLookup=function(view,name){var currentView=view;var blockHelpersStack=[];// walk up the views stopping at a Spacebars.include or Template view that
// doesn't have an InOuterTemplateScope view as a parent
do{// skip block helpers views
// if we found the binding on the scope, return it
if(_.has(currentView._scopeBindings,name)){var bindingReactiveVar=currentView._scopeBindings[name];return function(){return bindingReactiveVar.get();};}}while(!(currentView.__startsNewLexicalScope&&!(currentView.parentView&&currentView.parentView.__childDoesntStartNewLexicalScope))&&(currentView=currentView.parentView));return null;};// templateInstance argument is provided to be available for possible
// alternative implementations of this function by 3rd party packages.
Blaze._getTemplate=function(name,templateInstance){if(name in Blaze.Template&&Blaze.Template[name]instanceof Blaze.Template){return Blaze.Template[name];}return null;};Blaze._getGlobalHelper=function(name,templateInstance){if(Blaze._globalHelpers[name]!=null){return wrapHelper(bindDataContext(Blaze._globalHelpers[name]),templateInstance);}return null;};// Looks up a name, like "foo" or "..", as a helper of the
// current template; the name of a template; a global helper;
// or a property of the data context.  Called on the View of
// a template (i.e. a View with a `.template` property,
// where the helpers are).  Used for the first name in a
// "path" in a template tag, like "foo" in `{{foo.bar}}` or
// ".." in `{{frobulate ../blah}}`.
//
// Returns a function, a non-function value, or null.  If
// a function is found, it is bound appropriately.
//
// NOTE: This function must not establish any reactive
// dependencies itself.  If there is any reactivity in the
// value, lookup should return a function.
Blaze.View.prototype.lookup=function(name,_options){var template=this.template;var lookupTemplate=_options&&_options.template;var helper;var binding;var boundTmplInstance;var foundTemplate;if(this.templateInstance){boundTmplInstance=_.bind(this.templateInstance,this);}// 0. looking up the parent data context with the special "../" syntax
if(/^\./.test(name)){// starts with a dot. must be a series of dots which maps to an
// ancestor of the appropriate height.
if(!/^(\.)+$/.test(name))throw new Error("id starting with dot must be a series of dots");return Blaze._parentData(name.length-1,true/*_functionWrapped*/);}// 1. look up a helper on the current template
if(template&&(helper=Blaze._getTemplateHelper(template,name,boundTmplInstance))!=null){return helper;}// 2. look up a binding by traversing the lexical view hierarchy inside the
// current template
if(template&&(binding=Blaze._lexicalBindingLookup(Blaze.currentView,name))!=null){return binding;}// 3. look up a template by name
if(lookupTemplate&&(foundTemplate=Blaze._getTemplate(name,boundTmplInstance))!=null){return foundTemplate;}// 4. look up a global helper
if((helper=Blaze._getGlobalHelper(name,boundTmplInstance))!=null){return helper;}// 5. look up in a data context
return function(){var isCalledAsFunction=arguments.length>0;var data=Blaze.getData();var x=data&&data[name];if(!x){if(lookupTemplate){throw new Error("No such template: "+name);}else if(isCalledAsFunction){throw new Error("No such function: "+name);}else if(name.charAt(0)==='@'&&(x===null||x===undefined)){// Throw an error if the user tries to use a `@directive`
// that doesn't exist.  We don't implement all directives
// from Handlebars, so there's a potential for confusion
// if we fail silently.  On the other hand, we want to
// throw late in case some app or package wants to provide
// a missing directive.
throw new Error("Unsupported directive: "+name);}}if(!data){return null;}if(typeof x!=='function'){if(isCalledAsFunction){throw new Error("Can't call non-function: "+x);}return x;}return x.apply(data,arguments);};};// Implement Spacebars' {{../..}}.
// @param height {Number} The number of '..'s
Blaze._parentData=function(height,_functionWrapped){// If height is null or undefined, we default to 1, the first parent.
if(height==null){height=1;}var theWith=Blaze.getView('with');for(var i=0;i<height&&theWith;i++){theWith=Blaze.getView(theWith,'with');}if(!theWith)return null;if(_functionWrapped)return function(){return theWith.dataVar.get();};return theWith.dataVar.get();};Blaze.View.prototype.lookupTemplate=function(name){return this.lookup(name,{template:true});};// [new] Blaze.Template([viewName], renderFunction)
//
// `Blaze.Template` is the class of templates, like `Template.foo` in
// Meteor, which is `instanceof Template`.
//
// `viewKind` is a string that looks like "Template.foo" for templates
// defined by the compiler.
/**
 * @class
 * @summary Constructor for a Template, which is used to construct Views with particular name and content.
 * @locus Client
 * @param {String} [viewName] Optional.  A name for Views constructed by this Template.  See [`view.name`](#view_name).
 * @param {Function} renderFunction A function that returns [*renderable content*](#renderable_content).  This function is used as the `renderFunction` for Views constructed by this Template.
 */Blaze.Template=function(viewName,renderFunction){if(!(this instanceof Blaze.Template))// called without `new`
return new Blaze.Template(viewName,renderFunction);if(typeof viewName==='function'){// omitted "viewName" argument
renderFunction=viewName;viewName='';}if(typeof viewName!=='string')throw new Error("viewName must be a String (or omitted)");if(typeof renderFunction!=='function')throw new Error("renderFunction must be a function");this.viewName=viewName;this.renderFunction=renderFunction;this.__helpers=new HelperMap();this.__eventMaps=[];this._callbacks={created:[],rendered:[],destroyed:[]};};var Template=Blaze.Template;var HelperMap=function HelperMap(){};HelperMap.prototype.get=function(name){return this[' '+name];};HelperMap.prototype.set=function(name,helper){this[' '+name]=helper;};HelperMap.prototype.has=function(name){return' '+name in this;};/**
 * @summary Returns true if `value` is a template object like `Template.myTemplate`.
 * @locus Client
 * @param {Any} value The value to test.
 */Blaze.isTemplate=function(t){return t instanceof Blaze.Template;};/**
 * @name  onCreated
 * @instance
 * @memberOf Template
 * @summary Register a function to be called when an instance of this template is created.
 * @param {Function} callback A function to be added as a callback.
 * @locus Client
 * @importFromPackage templating
 */Template.prototype.onCreated=function(cb){this._callbacks.created.push(cb);};/**
 * @name  onRendered
 * @instance
 * @memberOf Template
 * @summary Register a function to be called when an instance of this template is inserted into the DOM.
 * @param {Function} callback A function to be added as a callback.
 * @locus Client
 * @importFromPackage templating
 */Template.prototype.onRendered=function(cb){this._callbacks.rendered.push(cb);};/**
 * @name  onDestroyed
 * @instance
 * @memberOf Template
 * @summary Register a function to be called when an instance of this template is removed from the DOM and destroyed.
 * @param {Function} callback A function to be added as a callback.
 * @locus Client
 * @importFromPackage templating
 */Template.prototype.onDestroyed=function(cb){this._callbacks.destroyed.push(cb);};Template.prototype._getCallbacks=function(which){var self=this;var callbacks=self[which]?[self[which]]:[];// Fire all callbacks added with the new API (Template.onRendered())
// as well as the old-style callback (e.g. Template.rendered) for
// backwards-compatibility.
callbacks=callbacks.concat(self._callbacks[which]);return callbacks;};var fireCallbacks=function fireCallbacks(callbacks,template){Template._withTemplateInstanceFunc(function(){return template;},function(){for(var i=0,N=callbacks.length;i<N;i++){callbacks[i].call(template);}});};Template.prototype.constructView=function(contentFunc,elseFunc){var self=this;var view=Blaze.View(self.viewName,self.renderFunction);view.template=self;view.templateContentBlock=contentFunc?new Template('(contentBlock)',contentFunc):null;view.templateElseBlock=elseFunc?new Template('(elseBlock)',elseFunc):null;if(self.__eventMaps||_typeof(self.events)==='object'){view._onViewRendered(function(){if(view.renderCount!==1)return;if(!self.__eventMaps.length&&_typeof(self.events)==="object"){// Provide limited back-compat support for `.events = {...}`
// syntax.  Pass `template.events` to the original `.events(...)`
// function.  This code must run only once per template, in
// order to not bind the handlers more than once, which is
// ensured by the fact that we only do this when `__eventMaps`
// is falsy, and we cause it to be set now.
Template.prototype.events.call(self,self.events);}_.each(self.__eventMaps,function(m){Blaze._addEventMap(view,m,view);});});}view._templateInstance=new Blaze.TemplateInstance(view);view.templateInstance=function(){// Update data, firstNode, and lastNode, and return the TemplateInstance
// object.
var inst=view._templateInstance;/**
     * @instance
     * @memberOf Blaze.TemplateInstance
     * @name  data
     * @summary The data context of this instance's latest invocation.
     * @locus Client
     */inst.data=Blaze.getData(view);if(view._domrange&&!view.isDestroyed){inst.firstNode=view._domrange.firstNode();inst.lastNode=view._domrange.lastNode();}else{// on 'created' or 'destroyed' callbacks we don't have a DomRange
inst.firstNode=null;inst.lastNode=null;}return inst;};/**
   * @name  created
   * @instance
   * @memberOf Template
   * @summary Provide a callback when an instance of a template is created.
   * @locus Client
   * @deprecated in 1.1
   */// To avoid situations when new callbacks are added in between view
// instantiation and event being fired, decide on all callbacks to fire
// immediately and then fire them on the event.
var createdCallbacks=self._getCallbacks('created');view.onViewCreated(function(){fireCallbacks(createdCallbacks,view.templateInstance());});/**
   * @name  rendered
   * @instance
   * @memberOf Template
   * @summary Provide a callback when an instance of a template is rendered.
   * @locus Client
   * @deprecated in 1.1
   */var renderedCallbacks=self._getCallbacks('rendered');view.onViewReady(function(){fireCallbacks(renderedCallbacks,view.templateInstance());});/**
   * @name  destroyed
   * @instance
   * @memberOf Template
   * @summary Provide a callback when an instance of a template is destroyed.
   * @locus Client
   * @deprecated in 1.1
   */var destroyedCallbacks=self._getCallbacks('destroyed');view.onViewDestroyed(function(){fireCallbacks(destroyedCallbacks,view.templateInstance());});return view;};/**
 * @class
 * @summary The class for template instances
 * @param {Blaze.View} view
 * @instanceName template
 */Blaze.TemplateInstance=function(view){if(!(this instanceof Blaze.TemplateInstance))// called without `new`
return new Blaze.TemplateInstance(view);if(!(view instanceof Blaze.View))throw new Error("View required");view._templateInstance=this;/**
   * @name view
   * @memberOf Blaze.TemplateInstance
   * @instance
   * @summary The [View](#blaze_view) object for this invocation of the template.
   * @locus Client
   * @type {Blaze.View}
   */this.view=view;this.data=null;/**
   * @name firstNode
   * @memberOf Blaze.TemplateInstance
   * @instance
   * @summary The first top-level DOM node in this template instance.
   * @locus Client
   * @type {DOMNode}
   */this.firstNode=null;/**
   * @name lastNode
   * @memberOf Blaze.TemplateInstance
   * @instance
   * @summary The last top-level DOM node in this template instance.
   * @locus Client
   * @type {DOMNode}
   */this.lastNode=null;// This dependency is used to identify state transitions in
// _subscriptionHandles which could cause the result of
// TemplateInstance#subscriptionsReady to change. Basically this is triggered
// whenever a new subscription handle is added or when a subscription handle
// is removed and they are not ready.
this._allSubsReadyDep=new Tracker.Dependency();this._allSubsReady=false;this._subscriptionHandles={};};/**
 * @summary Find all elements matching `selector` in this template instance, and return them as a JQuery object.
 * @locus Client
 * @param {String} selector The CSS selector to match, scoped to the template contents.
 * @returns {DOMNode[]}
 */Blaze.TemplateInstance.prototype.$=function(selector){var view=this.view;if(!view._domrange)throw new Error("Can't use $ on template instance with no DOM");return view._domrange.$(selector);};/**
 * @summary Find all elements matching `selector` in this template instance.
 * @locus Client
 * @param {String} selector The CSS selector to match, scoped to the template contents.
 * @returns {DOMElement[]}
 */Blaze.TemplateInstance.prototype.findAll=function(selector){return Array.prototype.slice.call(this.$(selector));};/**
 * @summary Find one element matching `selector` in this template instance.
 * @locus Client
 * @param {String} selector The CSS selector to match, scoped to the template contents.
 * @returns {DOMElement}
 */Blaze.TemplateInstance.prototype.find=function(selector){var result=this.$(selector);return result[0]||null;};/**
 * @summary A version of [Tracker.autorun](#tracker_autorun) that is stopped when the template is destroyed.
 * @locus Client
 * @param {Function} runFunc The function to run. It receives one argument: a Tracker.Computation object.
 */Blaze.TemplateInstance.prototype.autorun=function(f){return this.view.autorun(f);};/**
 * @summary A version of [Meteor.subscribe](#meteor_subscribe) that is stopped
 * when the template is destroyed.
 * @return {SubscriptionHandle} The subscription handle to the newly made
 * subscription. Call `handle.stop()` to manually stop the subscription, or
 * `handle.ready()` to find out if this particular subscription has loaded all
 * of its inital data.
 * @locus Client
 * @param {String} name Name of the subscription.  Matches the name of the
 * server's `publish()` call.
 * @param {Any} [arg1,arg2...] Optional arguments passed to publisher function
 * on server.
 * @param {Function|Object} [options] If a function is passed instead of an
 * object, it is interpreted as an `onReady` callback.
 * @param {Function} [options.onReady] Passed to [`Meteor.subscribe`](#meteor_subscribe).
 * @param {Function} [options.onStop] Passed to [`Meteor.subscribe`](#meteor_subscribe).
 * @param {DDP.Connection} [options.connection] The connection on which to make the
 * subscription.
 */Blaze.TemplateInstance.prototype.subscribe=function()/* arguments */{var self=this;var subHandles=self._subscriptionHandles;var args=_.toArray(arguments);// Duplicate logic from Meteor.subscribe
var options={};if(args.length){var lastParam=_.last(args);// Match pattern to check if the last arg is an options argument
var lastParamOptionsPattern={onReady:Match.Optional(Function),// XXX COMPAT WITH 1.0.3.1 onError used to exist, but now we use
// onStop with an error callback instead.
onError:Match.Optional(Function),onStop:Match.Optional(Function),connection:Match.Optional(Match.Any)};if(_.isFunction(lastParam)){options.onReady=args.pop();}else if(lastParam&&!_.isEmpty(lastParam)&&Match.test(lastParam,lastParamOptionsPattern)){options=args.pop();}}var subHandle;var oldStopped=options.onStop;options.onStop=function(error){// When the subscription is stopped, remove it from the set of tracked
// subscriptions to avoid this list growing without bound
delete subHandles[subHandle.subscriptionId];// Removing a subscription can only change the result of subscriptionsReady
// if we are not ready (that subscription could be the one blocking us being
// ready).
if(!self._allSubsReady){self._allSubsReadyDep.changed();}if(oldStopped){oldStopped(error);}};var connection=options.connection;var callbacks=_.pick(options,["onReady","onError","onStop"]);// The callbacks are passed as the last item in the arguments array passed to
// View#subscribe
args.push(callbacks);// View#subscribe takes the connection as one of the options in the last
// argument
subHandle=self.view.subscribe.call(self.view,args,{connection:connection});if(!_.has(subHandles,subHandle.subscriptionId)){subHandles[subHandle.subscriptionId]=subHandle;// Adding a new subscription will always cause us to transition from ready
// to not ready, but if we are already not ready then this can't make us
// ready.
if(self._allSubsReady){self._allSubsReadyDep.changed();}}return subHandle;};/**
 * @summary A reactive function that returns true when all of the subscriptions
 * called with [this.subscribe](#TemplateInstance-subscribe) are ready.
 * @return {Boolean} True if all subscriptions on this template instance are
 * ready.
 */Blaze.TemplateInstance.prototype.subscriptionsReady=function(){this._allSubsReadyDep.depend();this._allSubsReady=_.all(this._subscriptionHandles,function(handle){return handle.ready();});return this._allSubsReady;};/**
 * @summary Specify template helpers available to this template.
 * @locus Client
 * @param {Object} helpers Dictionary of helper functions by name.
 * @importFromPackage templating
 */Template.prototype.helpers=function(dict){if(!_.isObject(dict)){throw new Error("Helpers dictionary has to be an object");}for(var k in dict){this.__helpers.set(k,dict[k]);}};// Kind of like Blaze.currentView but for the template instance.
// This is a function, not a value -- so that not all helpers
// are implicitly dependent on the current template instance's `data` property,
// which would make them dependenct on the data context of the template
// inclusion.
Template._currentTemplateInstanceFunc=null;Template._withTemplateInstanceFunc=function(templateInstanceFunc,func){if(typeof func!=='function')throw new Error("Expected function, got: "+func);var oldTmplInstanceFunc=Template._currentTemplateInstanceFunc;try{Template._currentTemplateInstanceFunc=templateInstanceFunc;return func();}finally{Template._currentTemplateInstanceFunc=oldTmplInstanceFunc;}};/**
 * @summary Specify event handlers for this template.
 * @locus Client
 * @param {EventMap} eventMap Event handlers to associate with this template.
 * @importFromPackage templating
 */Template.prototype.events=function(eventMap){if(!_.isObject(eventMap)){throw new Error("Event map has to be an object");}var template=this;var eventMap2={};for(var k in eventMap){eventMap2[k]=function(k,v){return function(event/*, ...*/){var view=this;// passed by EventAugmenter
var data=Blaze.getData(event.currentTarget);if(data==null)data={};var args=Array.prototype.slice.call(arguments);var tmplInstanceFunc=_.bind(view.templateInstance,view);args.splice(1,0,tmplInstanceFunc());return Template._withTemplateInstanceFunc(tmplInstanceFunc,function(){return v.apply(data,args);});};}(k,eventMap[k]);}template.__eventMaps.push(eventMap2);};/**
 * @function
 * @name instance
 * @memberOf Template
 * @summary The [template instance](#template_inst) corresponding to the current template helper, event handler, callback, or autorun.  If there isn't one, `null`.
 * @locus Client
 * @returns {Blaze.TemplateInstance}
 * @importFromPackage templating
 */Template.instance=function(){return Template._currentTemplateInstanceFunc&&Template._currentTemplateInstanceFunc();};// Note: Template.currentData() is documented to take zero arguments,
// while Blaze.getData takes up to one.
/**
 * @summary
 *
 * - Inside an `onCreated`, `onRendered`, or `onDestroyed` callback, returns
 * the data context of the template.
 * - Inside an event handler, returns the data context of the template on which
 * this event handler was defined.
 * - Inside a helper, returns the data context of the DOM node where the helper
 * was used.
 *
 * Establishes a reactive dependency on the result.
 * @locus Client
 * @function
 * @importFromPackage templating
 */Template.currentData=Blaze.getData;/**
 * @summary Accesses other data contexts that enclose the current data context.
 * @locus Client
 * @function
 * @param {Integer} [numLevels] The number of levels beyond the current data context to look. Defaults to 1.
 * @importFromPackage templating
 */Template.parentData=Blaze._parentData;/**
 * @summary Defines a [helper function](#template_helpers) which can be used from all templates.
 * @locus Client
 * @function
 * @param {String} name The name of the helper function you are defining.
 * @param {Function} function The helper function itself.
 * @importFromPackage templating
 */Template.registerHelper=Blaze.registerHelper;/**
 * @summary Removes a global [helper function](#template_helpers).
 * @locus Client
 * @function
 * @param {String} name The name of the helper function you are defining.
 * @importFromPackage templating
 */Template.deregisterHelper=Blaze.deregisterHelper;Meteor.Blaze=Blaze;Meteor.jQuery=jQuery;};},{}],12:[function(require,module,exports){(function(process){module.exports=function(underscore){var Meteor;var meteorEnv;var _=underscore;var Package={};var __meteor_runtime_config__={meteorEnv:{NODE_ENV:process.env.NODE_ENV||'production'}};meteorEnv=__meteor_runtime_config__.meteorEnv;/**
 * @summary The Meteor namespace
 * @namespace Meteor
 */Meteor={/**
   * @summary Boolean variable.  True if running in production environment.
   * @locus Anywhere
   * @static
   * @type {Boolean}
   */isProduction:meteorEnv.NODE_ENV==="production",/**
   * @summary Boolean variable.  True if running in development environment.
   * @locus Anywhere
   * @static
   * @type {Boolean}
   */isDevelopment:meteorEnv.NODE_ENV!=="production",/**
   * @summary Boolean variable.  True if running in client environment.
   * @locus Anywhere
   * @static
   * @type {Boolean}
   */isClient:true,/**
   * @summary Boolean variable.  True if running in server environment.
   * @locus Anywhere
   * @static
   * @type {Boolean}
   */isServer:false,isCordova:false};if((typeof __meteor_runtime_config__==="undefined"?"undefined":_typeof(__meteor_runtime_config__))==='object'&&__meteor_runtime_config__.PUBLIC_SETTINGS){/**
   * @summary `Meteor.settings` contains deployment-specific configuration options. You can initialize settings by passing the `--settings` option (which takes the name of a file containing JSON data) to `meteor run` or `meteor deploy`. When running your server directly (e.g. from a bundle), you instead specify settings by putting the JSON directly into the `METEOR_SETTINGS` environment variable. If the settings object contains a key named `public`, then `Meteor.settings.public` will be available on the client as well as the server.  All other properties of `Meteor.settings` are only defined on the server.  You can rely on `Meteor.settings` and `Meteor.settings.public` being defined objects (not undefined) on both client and server even if there are no settings specified.  Changes to `Meteor.settings.public` at runtime will be picked up by new client connections.
   * @locus Anywhere
   * @type {Object}
   */Meteor.settings={'public':__meteor_runtime_config__.PUBLIC_SETTINGS};}var suppress=0;// replacement for console.log. This is a temporary API. We should
// provide a real logging API soon (possibly just a polyfill for
// console?)
//
// NOTE: this is used on the server to print the warning about
// having autopublish enabled when you probably meant to turn it
// off. it's not really the proper use of something called
// _debug. the intent is for this message to go to the terminal and
// be very visible. if you change _debug to go someplace else, etc,
// please fix the autopublish code to do something reasonable.
//
Meteor._debug=function()/* arguments */{if(suppress){suppress--;return;}if(typeof console!=='undefined'&&typeof console.log!=='undefined'){if(arguments.length==0){// IE Companion breaks otherwise
// IE10 PP4 requires at least one argument
console.log('');}else{// IE doesn't have console.log.apply, it's not a real Object.
// http://stackoverflow.com/questions/5538972/console-log-apply-not-working-in-ie9
// http://patik.com/blog/complete-cross-browser-console-log/
if(typeof console.log.apply==="function"){// Most browsers
// Chrome and Safari only hyperlink URLs to source files in first argument of
// console.log, so try to call it with one argument if possible.
// Approach taken here: If all arguments are strings, join them on space.
// See https://github.com/meteor/meteor/pull/732#issuecomment-13975991
var allArgumentsOfTypeString=true;for(var i=0;i<arguments.length;i++){if(typeof arguments[i]!=="string")allArgumentsOfTypeString=false;}if(allArgumentsOfTypeString)console.log.apply(console,[Array.prototype.join.call(arguments," ")]);else console.log.apply(console,arguments);}else if(typeof Function.prototype.bind==="function"){// IE9
var log=Function.prototype.bind.call(console.log,console);log.apply(console,arguments);}else{// IE8
Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments));}}}};// Suppress the next 'count' Meteor._debug messsages. Use this to
// stop tests from spamming the console.
//
Meteor._suppress_log=function(count){suppress+=count;};Meteor._suppressed_log_expected=function(){return suppress!==0;};if(Meteor.isServer)var Future=Npm.require('fibers/future');if((typeof __meteor_runtime_config__==="undefined"?"undefined":_typeof(__meteor_runtime_config__))==='object'&&__meteor_runtime_config__.meteorRelease){/**
   * @summary `Meteor.release` is a string containing the name of the [release](#meteorupdate) with which the project was built (for example, `"1.2.3"`). It is `undefined` if the project was built using a git checkout of Meteor.
   * @locus Anywhere
   * @type {String}
   */Meteor.release=__meteor_runtime_config__.meteorRelease;}// XXX find a better home for these? Ideally they would be _.get,
// _.ensure, _.delete..
_.extend(Meteor,{// _get(a,b,c,d) returns a[b][c][d], or else undefined if a[b] or
// a[b][c] doesn't exist.
//
_get:function _get(obj/*, arguments */){for(var i=1;i<arguments.length;i++){if(!(arguments[i]in obj))return undefined;obj=obj[arguments[i]];}return obj;},// _ensure(a,b,c,d) ensures that a[b][c][d] exists. If it does not,
// it is created and set to {}. Either way, it is returned.
//
_ensure:function _ensure(obj/*, arguments */){for(var i=1;i<arguments.length;i++){var key=arguments[i];if(!(key in obj))obj[key]={};obj=obj[key];}return obj;},// _delete(a, b, c, d) deletes a[b][c][d], then a[b][c] unless it
// isn't empty, then a[b] unless it isn't empty.
//
_delete:function _delete(obj/*, arguments */){var stack=[obj];var leaf=true;for(var i=1;i<arguments.length-1;i++){var key=arguments[i];if(!(key in obj)){leaf=false;break;}obj=obj[key];if((typeof obj==="undefined"?"undefined":_typeof(obj))!=="object")break;stack.push(obj);}for(var i=stack.length-1;i>=0;i--){var key=arguments[i+1];if(leaf)leaf=false;else for(var other in stack[i][key]){return;}// not empty -- we're done
delete stack[i][key];}},// wrapAsync can wrap any function that takes some number of arguments that
// can't be undefined, followed by some optional arguments, where the callback
// is the last optional argument.
// e.g. fs.readFile(pathname, [callback]),
// fs.open(pathname, flags, [mode], [callback])
// For maximum effectiveness and least confusion, wrapAsync should be used on
// functions where the callback is the only argument of type Function.
/**
   * @memberOf Meteor
   * @summary Wrap a function that takes a callback function as its final parameter. The signature of the callback of the wrapped function should be `function(error, result){}`. On the server, the wrapped function can be used either synchronously (without passing a callback) or asynchronously (when a callback is passed). On the client, a callback is always required; errors will be logged if there is no callback. If a callback is provided, the environment captured when the original function was called will be restored in the callback.
   * @locus Anywhere
   * @param {Function} func A function that takes a callback as its final parameter
   * @param {Object} [context] Optional `this` object against which the original function will be invoked
   */wrapAsync:function wrapAsync(fn,context){return function()/* arguments */{var self=context||this;var newArgs=_.toArray(arguments);var callback;for(var i=newArgs.length-1;i>=0;--i){var arg=newArgs[i];var type=typeof arg==="undefined"?"undefined":_typeof(arg);if(type!=="undefined"){if(type==="function"){callback=arg;}break;}}if(!callback){if(Meteor.isClient){callback=logErr;}else{var fut=new Future();callback=fut.resolver();}++i;// Insert the callback just after arg.
}newArgs[i]=Meteor.bindEnvironment(callback);var result=fn.apply(self,newArgs);return fut?fut.wait():result;};},// Sets child's prototype to a new object whose prototype is parent's
// prototype. Used as:
//   Meteor._inherits(ClassB, ClassA).
//   _.extend(ClassB.prototype, { ... })
// Inspired by CoffeeScript's `extend` and Google Closure's `goog.inherits`.
_inherits:function _inherits(Child,Parent){// copy Parent static properties
for(var key in Parent){// make sure we only copy hasOwnProperty properties vs. prototype
// properties
if(_.has(Parent,key))Child[key]=Parent[key];}// a middle member of prototype chain: takes the prototype from the Parent
var Middle=function Middle(){this.constructor=Child;};Middle.prototype=Parent.prototype;Child.prototype=new Middle();Child.__super__=Parent.prototype;return Child;}});var warnedAboutWrapAsync=false;/**
 * @deprecated in 0.9.3
 */Meteor._wrapAsync=function(fn,context){if(!warnedAboutWrapAsync){Meteor._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync");warnedAboutWrapAsync=true;}return Meteor.wrapAsync.apply(Meteor,arguments);};function logErr(err){if(err){return Meteor._debug("Exception in callback of async function",err.stack?err.stack:err);}}// This file is a partial analogue to fiber_helpers.js, which allows the client
// to use a queue too, and also to call noYieldsAllowed.
// The client has no ability to yield, so noYieldsAllowed is a noop.
//
Meteor._noYieldsAllowed=function(f){return f();};// An even simpler queue of tasks than the fiber-enabled one.  This one just
// runs all the tasks when you call runTask or flush, synchronously.
//
Meteor._SynchronousQueue=function(){var self=this;self._tasks=[];self._running=false;self._runTimeout=null;};_.extend(Meteor._SynchronousQueue.prototype,{runTask:function runTask(task){var self=this;if(!self.safeToRunTask())throw new Error("Could not synchronously run a task from a running task");self._tasks.push(task);var tasks=self._tasks;self._tasks=[];self._running=true;if(self._runTimeout){// Since we're going to drain the queue, we can forget about the timeout
// which tries to run it.  (But if one of our tasks queues something else,
// the timeout will be correctly re-created.)
clearTimeout(self._runTimeout);self._runTimeout=null;}try{while(!_.isEmpty(tasks)){var t=tasks.shift();try{t();}catch(e){if(_.isEmpty(tasks)){// this was the last task, that is, the one we're calling runTask
// for.
throw e;}else{Meteor._debug("Exception in queued task: "+(e.stack||e));}}}}finally{self._running=false;}},queueTask:function queueTask(task){var self=this;self._tasks.push(task);// Intentionally not using Meteor.setTimeout, because it doesn't like runing
// in stubs for now.
if(!self._runTimeout){self._runTimeout=setTimeout(_.bind(self.flush,self),0);}},flush:function flush(){var self=this;self.runTask(function(){});},drain:function drain(){var self=this;if(!self.safeToRunTask())return;while(!_.isEmpty(self._tasks)){self.flush();}},safeToRunTask:function safeToRunTask(){var self=this;return!self._running;}});// Simple implementation of dynamic scoping, for use in browsers
var nextSlot=0;var currentValues=[];Meteor.EnvironmentVariable=function(){this.slot=nextSlot++;};_.extend(Meteor.EnvironmentVariable.prototype,{get:function get(){return currentValues[this.slot];},getOrNullIfOutsideFiber:function getOrNullIfOutsideFiber(){return this.get();},withValue:function withValue(value,func){var saved=currentValues[this.slot];try{currentValues[this.slot]=value;var ret=func();}finally{currentValues[this.slot]=saved;}return ret;}});Meteor.bindEnvironment=function(func,onException,_this){// needed in order to be able to create closures inside func and
// have the closed variables not change back to their original
// values
var boundValues=_.clone(currentValues);if(!onException||typeof onException==='string'){var description=onException||"callback of async function";onException=function onException(error){Meteor._debug("Exception in "+description+":",error&&error.stack||error);};}return function()/* arguments */{var savedValues=currentValues;try{currentValues=boundValues;var ret=func.apply(_this,_.toArray(arguments));}catch(e){// note: callback-hook currently relies on the fact that if onException
// throws in the browser, the wrapped call throws.
onException(e);}finally{currentValues=savedValues;}return ret;};};Meteor._nodeCodeMustBeInFiber=function(){// no-op on browser
};// Makes an error subclass which properly contains a stack trace in most
// environments. constructor can set fields on `this` (and should probably set
// `message`, which is what gets displayed at the top of a stack trace).
//
Meteor.makeErrorType=function(name,constructor){var errorClass=function errorClass()/*arguments*/{// Ensure we get a proper stack trace in most Javascript environments
if(Error.captureStackTrace){// V8 environments (Chrome and Node.js)
Error.captureStackTrace(this,errorClass);}else{// Borrow the .stack property of a native Error object.
this.stack=new Error().stack;}// Safari magically works.
constructor.apply(this,arguments);this.errorType=name;};Meteor._inherits(errorClass,Error);return errorClass;};// This should probably be in the livedata package, but we don't want
// to require you to use the livedata package to get it. Eventually we
// should probably rename it to DDP.Error and put it back in the
// 'livedata' package (which we should rename to 'ddp' also.)
//
// Note: The DDP server assumes that Meteor.Error EJSON-serializes as an object
// containing 'error' and optionally 'reason' and 'details'.
// The DDP client manually puts these into Meteor.Error objects. (We don't use
// EJSON.addType here because the type is determined by location in the
// protocol, not text on the wire.)
/**
 * @summary This class represents a symbolic error thrown by a method.
 * @locus Anywhere
 * @class
 * @param {String} error A string code uniquely identifying this kind of error.
 * This string should be used by callers of the method to determine the
 * appropriate action to take, instead of attempting to parse the reason
 * or details fields. For example:
 *
 * ```
 * // on the server, pick a code unique to this error
 * // the reason field should be a useful debug message
 * throw new Meteor.Error("logged-out", 
 *   "The user must be logged in to post a comment.");
 *
 * // on the client
 * Meteor.call("methodName", function (error) {
 *   // identify the error
 *   if (error && error.error === "logged-out") {
 *     // show a nice error message
 *     Session.set("errorMessage", "Please log in to post a comment.");
 *   }
 * });
 * ```
 * 
 * For legacy reasons, some built-in Meteor functions such as `check` throw
 * errors with a number in this field.
 * 
 * @param {String} [reason] Optional.  A short human-readable summary of the
 * error, like 'Not Found'.
 * @param {String} [details] Optional.  Additional information about the error,
 * like a textual stack trace.
 */Meteor.Error=Meteor.makeErrorType("Meteor.Error",function(error,reason,details){var self=this;// String code uniquely identifying this kind of error.
self.error=error;// Optional: A short human-readable summary of the error. Not
// intended to be shown to end users, just developers. ("Not Found",
// "Internal Server Error")
self.reason=reason;// Optional: Additional information about the error, say for
// debugging. It might be a (textual) stack trace if the server is
// willing to provide one. The corresponding thing in HTTP would be
// the body of a 404 or 500 response. (The difference is that we
// never expect this to be shown to end users, only developers, so
// it doesn't need to be pretty.)
self.details=details;// This is what gets displayed at the top of a stack trace. Current
// format is "[404]" (if no reason is set) or "File not found [404]"
if(self.reason)self.message=self.reason+' ['+self.error+']';else self.message='['+self.error+']';});// Meteor.Error is basically data and is sent over DDP, so you should be able to
// properly EJSON-clone it. This is especially important because if a
// Meteor.Error is thrown through a Future, the error, reason, and details
// properties become non-enumerable so a standard Object clone won't preserve
// them and they will be lost from DDP.
Meteor.Error.prototype.clone=function(){var self=this;return new Meteor.Error(self.error,self.reason,self.details);};// Chooses one of three setImmediate implementations:
//
// * Native setImmediate (IE 10, Node 0.9+)
//
// * postMessage (many browsers)
//
// * setTimeout  (fallback)
//
// The postMessage implementation is based on
// https://github.com/NobleJS/setImmediate/tree/1.0.1
//
// Don't use `nextTick` for Node since it runs its callbacks before
// I/O, which is stricter than we're looking for.
//
// Not installed as a polyfill, as our public API is `Meteor.defer`.
// Since we're not trying to be a polyfill, we have some
// simplifications:
//
// If one invocation of a setImmediate callback pauses itself by a
// call to alert/prompt/showModelDialog, the NobleJS polyfill
// implementation ensured that no setImmedate callback would run until
// the first invocation completed.  While correct per the spec, what it
// would mean for us in practice is that any reactive updates relying
// on Meteor.defer would be hung in the main window until the modal
// dialog was dismissed.  Thus we only ensure that a setImmediate
// function is called in a later event loop.
//
// We don't need to support using a string to be eval'ed for the
// callback, arguments to the function, or clearImmediate.
"use strict";var global=window;// IE 10, Node >= 9.1
function useSetImmediate(){if(!global.setImmediate)return null;else{var setImmediate=function setImmediate(fn){global.setImmediate(fn);};setImmediate.implementation='setImmediate';return setImmediate;}}// Android 2.3.6, Chrome 26, Firefox 20, IE 8-9, iOS 5.1.1 Safari
function usePostMessage(){// The test against `importScripts` prevents this implementation
// from being installed inside a web worker, where
// `global.postMessage` means something completely different and
// can't be used for this purpose.
if(!global.postMessage||global.importScripts){return null;}// Avoid synchronous post message implementations.
var postMessageIsAsynchronous=true;var oldOnMessage=global.onmessage;global.onmessage=function(){postMessageIsAsynchronous=false;};global.postMessage("","*");global.onmessage=oldOnMessage;if(!postMessageIsAsynchronous)return null;var funcIndex=0;var funcs={};// Installs an event handler on `global` for the `message` event: see
// * https://developer.mozilla.org/en/DOM/window.postMessage
// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
// XXX use Random.id() here?
var MESSAGE_PREFIX="Meteor._setImmediate."+Math.random()+'.';function isStringAndStartsWith(string,putativeStart){return typeof string==="string"&&string.substring(0,putativeStart.length)===putativeStart;}function onGlobalMessage(event){// This will catch all incoming messages (even from other
// windows!), so we need to try reasonably hard to avoid letting
// anyone else trick us into firing off. We test the origin is
// still this window, and that a (randomly generated)
// unpredictable identifying prefix is present.
if(event.source===global&&isStringAndStartsWith(event.data,MESSAGE_PREFIX)){var index=event.data.substring(MESSAGE_PREFIX.length);try{if(funcs[index])funcs[index]();}finally{delete funcs[index];}}}if(global.addEventListener){global.addEventListener("message",onGlobalMessage,false);}else{global.attachEvent("onmessage",onGlobalMessage);}var setImmediate=function setImmediate(fn){// Make `global` post a message to itself with the handle and
// identifying prefix, thus asynchronously invoking our
// onGlobalMessage listener above.
++funcIndex;funcs[funcIndex]=fn;global.postMessage(MESSAGE_PREFIX+funcIndex,"*");};setImmediate.implementation='postMessage';return setImmediate;}function useTimeout(){var setImmediate=function setImmediate(fn){global.setTimeout(fn,0);};setImmediate.implementation='setTimeout';return setImmediate;}Meteor._setImmediate=useSetImmediate()||usePostMessage()||useTimeout();var withoutInvocation=function withoutInvocation(f){if(Package.ddp){var _CurrentInvocation=Package.ddp.DDP._CurrentInvocation;if(_CurrentInvocation.get()&&_CurrentInvocation.get().isSimulation)throw new Error("Can't set timers inside simulations");return function(){_CurrentInvocation.withValue(null,f);};}else return f;};var bindAndCatch=function bindAndCatch(context,f){return Meteor.bindEnvironment(withoutInvocation(f),context);};_.extend(Meteor,{// Meteor.setTimeout and Meteor.setInterval callbacks scheduled
// inside a server method are not part of the method invocation and
// should clear out the CurrentInvocation environment variable.
/**
   * @memberOf Meteor
   * @summary Call a function in the future after waiting for a specified delay.
   * @locus Anywhere
   * @param {Function} func The function to run
   * @param {Number} delay Number of milliseconds to wait before calling function
   */setTimeout:function(_setTimeout){function setTimeout(_x,_x2){return _setTimeout.apply(this,arguments);}setTimeout.toString=function(){return _setTimeout.toString();};return setTimeout;}(function(f,duration){return setTimeout(bindAndCatch("setTimeout callback",f),duration);}),/**
   * @memberOf Meteor
   * @summary Call a function repeatedly, with a time delay between calls.
   * @locus Anywhere
   * @param {Function} func The function to run
   * @param {Number} delay Number of milliseconds to wait between each function call.
   */setInterval:function(_setInterval){function setInterval(_x3,_x4){return _setInterval.apply(this,arguments);}setInterval.toString=function(){return _setInterval.toString();};return setInterval;}(function(f,duration){return setInterval(bindAndCatch("setInterval callback",f),duration);}),/**
   * @memberOf Meteor
   * @summary Cancel a repeating function call scheduled by `Meteor.setInterval`.
   * @locus Anywhere
   * @param {Number} id The handle returned by `Meteor.setInterval`
   */clearInterval:function(_clearInterval){function clearInterval(_x5){return _clearInterval.apply(this,arguments);}clearInterval.toString=function(){return _clearInterval.toString();};return clearInterval;}(function(x){return clearInterval(x);}),/**
   * @memberOf Meteor
   * @summary Cancel a function call scheduled by `Meteor.setTimeout`.
   * @locus Anywhere
   * @param {Number} id The handle returned by `Meteor.setTimeout`
   */clearTimeout:function(_clearTimeout){function clearTimeout(_x6){return _clearTimeout.apply(this,arguments);}clearTimeout.toString=function(){return _clearTimeout.toString();};return clearTimeout;}(function(x){return clearTimeout(x);}),// XXX consider making this guarantee ordering of defer'd callbacks, like
// Tracker.afterFlush or Node's nextTick (in practice). Then tests can do:
//    callSomethingThatDefersSomeWork();
//    Meteor.defer(expect(somethingThatValidatesThatTheWorkHappened));
defer:function defer(f){Meteor._setImmediate(bindAndCatch("defer callback",f));}});/**
 * @summary Generate an absolute URL pointing to the application. The server reads from the `ROOT_URL` environment variable to determine where it is running. This is taken care of automatically for apps deployed to Galaxy, but must be provided when using `meteor build`.
 * @locus Anywhere
 * @param {String} [path] A path to append to the root URL. Do not include a leading "`/`".
 * @param {Object} [options]
 * @param {Boolean} options.secure Create an HTTPS URL.
 * @param {Boolean} options.replaceLocalhost Replace localhost with 127.0.0.1. Useful for services that don't recognize localhost as a domain name.
 * @param {String} options.rootUrl Override the default ROOT_URL from the server environment. For example: "`http://foo.example.com`"
 */Meteor.absoluteUrl=function(path,options){// path is optional
if(!options&&(typeof path==="undefined"?"undefined":_typeof(path))==='object'){options=path;path=undefined;}// merge options with defaults
options=_.extend({},Meteor.absoluteUrl.defaultOptions,options||{});var url=options.rootUrl;if(!url)throw new Error("Must pass options.rootUrl or set ROOT_URL in the server environment");if(!/^http[s]?:\/\//i.test(url))// url starts with 'http://' or 'https://'
url='http://'+url;// we will later fix to https if options.secure is set
if(!/\/$/.test(url))// url ends with '/'
url+='/';if(path)url+=path;// turn http to https if secure option is set, and we're not talking
// to localhost.
if(options.secure&&/^http:/.test(url)&&// url starts with 'http:'
!/http:\/\/localhost[:\/]/.test(url)&&// doesn't match localhost
!/http:\/\/127\.0\.0\.1[:\/]/.test(url))// or 127.0.0.1
url=url.replace(/^http:/,'https:');if(options.replaceLocalhost)url=url.replace(/^http:\/\/localhost([:\/].*)/,'http://127.0.0.1$1');return url;};// allow later packages to override default options
Meteor.absoluteUrl.defaultOptions={};if((typeof __meteor_runtime_config__==="undefined"?"undefined":_typeof(__meteor_runtime_config__))==="object"&&__meteor_runtime_config__.ROOT_URL)Meteor.absoluteUrl.defaultOptions.rootUrl=__meteor_runtime_config__.ROOT_URL;Meteor._relativeToSiteRootUrl=function(link){if((typeof __meteor_runtime_config__==="undefined"?"undefined":_typeof(__meteor_runtime_config__))==="object"&&link.substr(0,1)==="/")link=(__meteor_runtime_config__.ROOT_URL_PATH_PREFIX||"")+link;return link;};Meteor.underscore=_;Meteor.__meteor_runtime_config__=__meteor_runtime_config__;return Meteor;};}).call(this,require("pBGvAp"));},{"pBGvAp":31}],13:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var EJSON=Meteor.EJSON;var DiffSequence;DiffSequence={};// ordered: bool.
// old_results and new_results: collections of documents.
//    if ordered, they are arrays.
//    if unordered, they are IdMaps
DiffSequence.diffQueryChanges=function(ordered,oldResults,newResults,observer,options){if(ordered)DiffSequence.diffQueryOrderedChanges(oldResults,newResults,observer,options);else DiffSequence.diffQueryUnorderedChanges(oldResults,newResults,observer,options);};DiffSequence.diffQueryUnorderedChanges=function(oldResults,newResults,observer,options){options=options||{};var projectionFn=options.projectionFn||EJSON.clone;if(observer.movedBefore){throw new Error("_diffQueryUnordered called with a movedBefore observer!");}newResults.forEach(function(newDoc,id){var oldDoc=oldResults.get(id);if(oldDoc){if(observer.changed&&!EJSON.equals(oldDoc,newDoc)){var projectedNew=projectionFn(newDoc);var projectedOld=projectionFn(oldDoc);var changedFields=DiffSequence.makeChangedFields(projectedNew,projectedOld);if(!_.isEmpty(changedFields)){observer.changed(id,changedFields);}}}else if(observer.added){var fields=projectionFn(newDoc);delete fields._id;observer.added(newDoc._id,fields);}});if(observer.removed){oldResults.forEach(function(oldDoc,id){if(!newResults.has(id))observer.removed(id);});}};DiffSequence.diffQueryOrderedChanges=function(old_results,new_results,observer,options){options=options||{};var projectionFn=options.projectionFn||EJSON.clone;var new_presence_of_id={};_.each(new_results,function(doc){if(new_presence_of_id[doc._id])Meteor._debug("Duplicate _id in new_results");new_presence_of_id[doc._id]=true;});var old_index_of_id={};_.each(old_results,function(doc,i){if(doc._id in old_index_of_id)Meteor._debug("Duplicate _id in old_results");old_index_of_id[doc._id]=i;});// ALGORITHM:
//
// To determine which docs should be considered "moved" (and which
// merely change position because of other docs moving) we run
// a "longest common subsequence" (LCS) algorithm.  The LCS of the
// old doc IDs and the new doc IDs gives the docs that should NOT be
// considered moved.
// To actually call the appropriate callbacks to get from the old state to the
// new state:
// First, we call removed() on all the items that only appear in the old
// state.
// Then, once we have the items that should not move, we walk through the new
// results array group-by-group, where a "group" is a set of items that have
// moved, anchored on the end by an item that should not move.  One by one, we
// move each of those elements into place "before" the anchoring end-of-group
// item, and fire changed events on them if necessary.  Then we fire a changed
// event on the anchor, and move on to the next group.  There is always at
// least one group; the last group is anchored by a virtual "null" id at the
// end.
// Asymptotically: O(N k) where k is number of ops, or potentially
// O(N log N) if inner loop of LCS were made to be binary search.
//////// LCS (longest common sequence, with respect to _id)
// (see Wikipedia article on Longest Increasing Subsequence,
// where the LIS is taken of the sequence of old indices of the
// docs in new_results)
//
// unmoved: the output of the algorithm; members of the LCS,
// in the form of indices into new_results
var unmoved=[];// max_seq_len: length of LCS found so far
var max_seq_len=0;// seq_ends[i]: the index into new_results of the last doc in a
// common subsequence of length of i+1 <= max_seq_len
var N=new_results.length;var seq_ends=new Array(N);// ptrs:  the common subsequence ending with new_results[n] extends
// a common subsequence ending with new_results[ptr[n]], unless
// ptr[n] is -1.
var ptrs=new Array(N);// virtual sequence of old indices of new results
var old_idx_seq=function old_idx_seq(i_new){return old_index_of_id[new_results[i_new]._id];};// for each item in new_results, use it to extend a common subsequence
// of length j <= max_seq_len
for(var i=0;i<N;i++){if(old_index_of_id[new_results[i]._id]!==undefined){var j=max_seq_len;// this inner loop would traditionally be a binary search,
// but scanning backwards we will likely find a subseq to extend
// pretty soon, bounded for example by the total number of ops.
// If this were to be changed to a binary search, we'd still want
// to scan backwards a bit as an optimization.
while(j>0){if(old_idx_seq(seq_ends[j-1])<old_idx_seq(i))break;j--;}ptrs[i]=j===0?-1:seq_ends[j-1];seq_ends[j]=i;if(j+1>max_seq_len)max_seq_len=j+1;}}// pull out the LCS/LIS into unmoved
var idx=max_seq_len===0?-1:seq_ends[max_seq_len-1];while(idx>=0){unmoved.push(idx);idx=ptrs[idx];}// the unmoved item list is built backwards, so fix that
unmoved.reverse();// the last group is always anchored by the end of the result list, which is
// an id of "null"
unmoved.push(new_results.length);_.each(old_results,function(doc){if(!new_presence_of_id[doc._id])observer.removed&&observer.removed(doc._id);});// for each group of things in the new_results that is anchored by an unmoved
// element, iterate through the things before it.
var startOfGroup=0;_.each(unmoved,function(endOfGroup){var groupId=new_results[endOfGroup]?new_results[endOfGroup]._id:null;var oldDoc,newDoc,fields,projectedNew,projectedOld;for(var i=startOfGroup;i<endOfGroup;i++){newDoc=new_results[i];if(!_.has(old_index_of_id,newDoc._id)){fields=projectionFn(newDoc);delete fields._id;observer.addedBefore&&observer.addedBefore(newDoc._id,fields,groupId);observer.added&&observer.added(newDoc._id,fields);}else{// moved
oldDoc=old_results[old_index_of_id[newDoc._id]];projectedNew=projectionFn(newDoc);projectedOld=projectionFn(oldDoc);fields=DiffSequence.makeChangedFields(projectedNew,projectedOld);if(!_.isEmpty(fields)){observer.changed&&observer.changed(newDoc._id,fields);}observer.movedBefore&&observer.movedBefore(newDoc._id,groupId);}}if(groupId){newDoc=new_results[endOfGroup];oldDoc=old_results[old_index_of_id[newDoc._id]];projectedNew=projectionFn(newDoc);projectedOld=projectionFn(oldDoc);fields=DiffSequence.makeChangedFields(projectedNew,projectedOld);if(!_.isEmpty(fields)){observer.changed&&observer.changed(newDoc._id,fields);}}startOfGroup=endOfGroup+1;});};// General helper for diff-ing two objects.
// callbacks is an object like so:
// { leftOnly: function (key, leftValue) {...},
//   rightOnly: function (key, rightValue) {...},
//   both: function (key, leftValue, rightValue) {...},
// }
DiffSequence.diffObjects=function(left,right,callbacks){_.each(left,function(leftValue,key){if(_.has(right,key))callbacks.both&&callbacks.both(key,leftValue,right[key]);else callbacks.leftOnly&&callbacks.leftOnly(key,leftValue);});if(callbacks.rightOnly){_.each(right,function(rightValue,key){if(!_.has(left,key))callbacks.rightOnly(key,rightValue);});}};DiffSequence.makeChangedFields=function(newDoc,oldDoc){var fields={};DiffSequence.diffObjects(oldDoc,newDoc,{leftOnly:function leftOnly(key,value){fields[key]=undefined;},rightOnly:function rightOnly(key,value){fields[key]=value;},both:function both(key,leftValue,rightValue){if(!EJSON.equals(leftValue,rightValue))fields[key]=rightValue;}});return fields;};DiffSequence.applyChanges=function(doc,changeFields){_.each(changeFields,function(value,key){if(value===undefined)delete doc[key];else doc[key]=value;});};Meteor.DiffSequence=DiffSequence;};},{}],14:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var Base64=Meteor.Base64;var EJSON;var EJSONTest;/**
 * @namespace
 * @summary Namespace for EJSON functions
 */EJSON={};EJSONTest={};// Custom type interface definition
/**
 * @class CustomType
 * @instanceName customType
 * @memberOf EJSON
 * @summary The interface that a class must satisfy to be able to become an
 * EJSON custom type via EJSON.addType.
 *//**
 * @function typeName
 * @memberOf EJSON.CustomType
 * @summary Return the tag used to identify this type.  This must match the tag used to register this type with [`EJSON.addType`](#ejson_add_type).
 * @locus Anywhere
 * @instance
 *//**
 * @function toJSONValue
 * @memberOf EJSON.CustomType
 * @summary Serialize this instance into a JSON-compatible value.
 * @locus Anywhere
 * @instance
 *//**
 * @function clone
 * @memberOf EJSON.CustomType
 * @summary Return a value `r` such that `this.equals(r)` is true, and modifications to `r` do not affect `this` and vice versa.
 * @locus Anywhere
 * @instance
 *//**
 * @function equals
 * @memberOf EJSON.CustomType
 * @summary Return `true` if `other` has a value equal to `this`; `false` otherwise.
 * @locus Anywhere
 * @param {Object} other Another object to compare this to.
 * @instance
 */var customTypes={};// Add a custom type, using a method of your choice to get to and
// from a basic JSON-able representation.  The factory argument
// is a function of JSON-able --> your object
// The type you add must have:
// - A toJSONValue() method, so that Meteor can serialize it
// - a typeName() method, to show how to look it up in our type table.
// It is okay if these methods are monkey-patched on.
// EJSON.clone will use toJSONValue and the given factory to produce
// a clone, but you may specify a method clone() that will be
// used instead.
// Similarly, EJSON.equals will use toJSONValue to make comparisons,
// but you may provide a method equals() instead.
/**
 * @summary Add a custom datatype to EJSON.
 * @locus Anywhere
 * @param {String} name A tag for your custom type; must be unique among custom data types defined in your project, and must match the result of your type's `typeName` method.
 * @param {Function} factory A function that deserializes a JSON-compatible value into an instance of your type.  This should match the serialization performed by your type's `toJSONValue` method.
 */EJSON.addType=function(name,factory){if(_.has(customTypes,name))throw new Error("Type "+name+" already present");customTypes[name]=factory;};var isInfOrNan=function isInfOrNan(obj){return _.isNaN(obj)||obj===Infinity||obj===-Infinity;};var builtinConverters=[{// Date
matchJSONValue:function matchJSONValue(obj){return _.has(obj,'$date')&&_.size(obj)===1;},matchObject:function matchObject(obj){return obj instanceof Date;},toJSONValue:function toJSONValue(obj){return{$date:obj.getTime()};},fromJSONValue:function fromJSONValue(obj){return new Date(obj.$date);}},{// NaN, Inf, -Inf. (These are the only objects with typeof !== 'object'
// which we match.)
matchJSONValue:function matchJSONValue(obj){return _.has(obj,'$InfNaN')&&_.size(obj)===1;},matchObject:isInfOrNan,toJSONValue:function toJSONValue(obj){var sign;if(_.isNaN(obj))sign=0;else if(obj===Infinity)sign=1;else sign=-1;return{$InfNaN:sign};},fromJSONValue:function fromJSONValue(obj){return obj.$InfNaN/0;}},{// Binary
matchJSONValue:function matchJSONValue(obj){return _.has(obj,'$binary')&&_.size(obj)===1;},matchObject:function matchObject(obj){return typeof Uint8Array!=='undefined'&&obj instanceof Uint8Array||obj&&_.has(obj,'$Uint8ArrayPolyfill');},toJSONValue:function toJSONValue(obj){return{$binary:Base64.encode(obj)};},fromJSONValue:function fromJSONValue(obj){return Base64.decode(obj.$binary);}},{// Escaping one level
matchJSONValue:function matchJSONValue(obj){return _.has(obj,'$escape')&&_.size(obj)===1;},matchObject:function matchObject(obj){if(_.isEmpty(obj)||_.size(obj)>2){return false;}return _.any(builtinConverters,function(converter){return converter.matchJSONValue(obj);});},toJSONValue:function toJSONValue(obj){var newObj={};_.each(obj,function(value,key){newObj[key]=EJSON.toJSONValue(value);});return{$escape:newObj};},fromJSONValue:function fromJSONValue(obj){var newObj={};_.each(obj.$escape,function(value,key){newObj[key]=EJSON.fromJSONValue(value);});return newObj;}},{// Custom
matchJSONValue:function matchJSONValue(obj){return _.has(obj,'$type')&&_.has(obj,'$value')&&_.size(obj)===2;},matchObject:function matchObject(obj){return EJSON._isCustomType(obj);},toJSONValue:function toJSONValue(obj){var jsonValue=Meteor._noYieldsAllowed(function(){return obj.toJSONValue();});return{$type:obj.typeName(),$value:jsonValue};},fromJSONValue:function fromJSONValue(obj){var typeName=obj.$type;if(!_.has(customTypes,typeName))throw new Error("Custom EJSON type "+typeName+" is not defined");var converter=customTypes[typeName];return Meteor._noYieldsAllowed(function(){return converter(obj.$value);});}}];EJSON._isCustomType=function(obj){return obj&&typeof obj.toJSONValue==='function'&&typeof obj.typeName==='function'&&_.has(customTypes,obj.typeName());};EJSON._getTypes=function(){return customTypes;};EJSON._getConverters=function(){return builtinConverters;};// for both arrays and objects, in-place modification.
var adjustTypesToJSONValue=EJSON._adjustTypesToJSONValue=function(obj){// Is it an atom that we need to adjust?
if(obj===null)return null;var maybeChanged=toJSONValueHelper(obj);if(maybeChanged!==undefined)return maybeChanged;// Other atoms are unchanged.
if((typeof obj==="undefined"?"undefined":_typeof(obj))!=='object')return obj;// Iterate over array or object structure.
_.each(obj,function(value,key){if((typeof value==="undefined"?"undefined":_typeof(value))!=='object'&&value!==undefined&&!isInfOrNan(value))return;// continue
var changed=toJSONValueHelper(value);if(changed){obj[key]=changed;return;// on to the next key
}// if we get here, value is an object but not adjustable
// at this level.  recurse.
adjustTypesToJSONValue(value);});return obj;};// Either return the JSON-compatible version of the argument, or undefined (if
// the item isn't itself replaceable, but maybe some fields in it are)
var toJSONValueHelper=function toJSONValueHelper(item){for(var i=0;i<builtinConverters.length;i++){var converter=builtinConverters[i];if(converter.matchObject(item)){return converter.toJSONValue(item);}}return undefined;};/**
 * @summary Serialize an EJSON-compatible value into its plain JSON representation.
 * @locus Anywhere
 * @param {EJSON} val A value to serialize to plain JSON.
 */EJSON.toJSONValue=function(item){var changed=toJSONValueHelper(item);if(changed!==undefined)return changed;if((typeof item==="undefined"?"undefined":_typeof(item))==='object'){item=EJSON.clone(item);adjustTypesToJSONValue(item);}return item;};// for both arrays and objects. Tries its best to just
// use the object you hand it, but may return something
// different if the object you hand it itself needs changing.
//
var adjustTypesFromJSONValue=EJSON._adjustTypesFromJSONValue=function(obj){if(obj===null)return null;var maybeChanged=fromJSONValueHelper(obj);if(maybeChanged!==obj)return maybeChanged;// Other atoms are unchanged.
if((typeof obj==="undefined"?"undefined":_typeof(obj))!=='object')return obj;_.each(obj,function(value,key){if((typeof value==="undefined"?"undefined":_typeof(value))==='object'){var changed=fromJSONValueHelper(value);if(value!==changed){obj[key]=changed;return;}// if we get here, value is an object but not adjustable
// at this level.  recurse.
adjustTypesFromJSONValue(value);}});return obj;};// Either return the argument changed to have the non-json
// rep of itself (the Object version) or the argument itself.
// DOES NOT RECURSE.  For actually getting the fully-changed value, use
// EJSON.fromJSONValue
var fromJSONValueHelper=function fromJSONValueHelper(value){if((typeof value==="undefined"?"undefined":_typeof(value))==='object'&&value!==null){if(_.size(value)<=2&&_.all(value,function(v,k){return typeof k==='string'&&k.substr(0,1)==='$';})){for(var i=0;i<builtinConverters.length;i++){var converter=builtinConverters[i];if(converter.matchJSONValue(value)){return converter.fromJSONValue(value);}}}}return value;};/**
 * @summary Deserialize an EJSON value from its plain JSON representation.
 * @locus Anywhere
 * @param {JSONCompatible} val A value to deserialize into EJSON.
 */EJSON.fromJSONValue=function(item){var changed=fromJSONValueHelper(item);if(changed===item&&(typeof item==="undefined"?"undefined":_typeof(item))==='object'){item=EJSON.clone(item);adjustTypesFromJSONValue(item);return item;}else{return changed;}};/**
 * @summary Serialize a value to a string.

For EJSON values, the serialization fully represents the value. For non-EJSON values, serializes the same way as `JSON.stringify`.
 * @locus Anywhere
 * @param {EJSON} val A value to stringify.
 * @param {Object} [options]
 * @param {Boolean | Integer | String} options.indent Indents objects and arrays for easy readability.  When `true`, indents by 2 spaces; when an integer, indents by that number of spaces; and when a string, uses the string as the indentation pattern.
 * @param {Boolean} options.canonical When `true`, stringifies keys in an object in sorted order.
 */EJSON.stringify=function(item,options){var json=EJSON.toJSONValue(item);if(options&&(options.canonical||options.indent)){return EJSON._canonicalStringify(json,options);}else{return JSON.stringify(json);}};/**
 * @summary Parse a string into an EJSON value. Throws an error if the string is not valid EJSON.
 * @locus Anywhere
 * @param {String} str A string to parse into an EJSON value.
 */EJSON.parse=function(item){if(typeof item!=='string')throw new Error("EJSON.parse argument should be a string");return EJSON.fromJSONValue(JSON.parse(item));};/**
 * @summary Returns true if `x` is a buffer of binary data, as returned from [`EJSON.newBinary`](#ejson_new_binary).
 * @param {Object} x The variable to check.
 * @locus Anywhere
 */EJSON.isBinary=function(obj){return!!(typeof Uint8Array!=='undefined'&&obj instanceof Uint8Array||obj&&obj.$Uint8ArrayPolyfill);};/**
 * @summary Return true if `a` and `b` are equal to each other.  Return false otherwise.  Uses the `equals` method on `a` if present, otherwise performs a deep comparison.
 * @locus Anywhere
 * @param {EJSON} a
 * @param {EJSON} b
 * @param {Object} [options]
 * @param {Boolean} options.keyOrderSensitive Compare in key sensitive order, if supported by the JavaScript implementation.  For example, `{a: 1, b: 2}` is equal to `{b: 2, a: 1}` only when `keyOrderSensitive` is `false`.  The default is `false`.
 */EJSON.equals=function(a,b,options){var i;var keyOrderSensitive=!!(options&&options.keyOrderSensitive);if(a===b)return true;if(_.isNaN(a)&&_.isNaN(b))return true;// This differs from the IEEE spec for NaN equality, b/c we don't want
// anything ever with a NaN to be poisoned from becoming equal to anything.
if(!a||!b)// if either one is falsy, they'd have to be === to be equal
return false;if(!((typeof a==="undefined"?"undefined":_typeof(a))==='object'&&(typeof b==="undefined"?"undefined":_typeof(b))==='object'))return false;if(a instanceof Date&&b instanceof Date)return a.valueOf()===b.valueOf();if(EJSON.isBinary(a)&&EJSON.isBinary(b)){if(a.length!==b.length)return false;for(i=0;i<a.length;i++){if(a[i]!==b[i])return false;}return true;}if(typeof a.equals==='function')return a.equals(b,options);if(typeof b.equals==='function')return b.equals(a,options);if(a instanceof Array){if(!(b instanceof Array))return false;if(a.length!==b.length)return false;for(i=0;i<a.length;i++){if(!EJSON.equals(a[i],b[i],options))return false;}return true;}// fallback for custom types that don't implement their own equals
switch(EJSON._isCustomType(a)+EJSON._isCustomType(b)){case 1:return false;case 2:return EJSON.equals(EJSON.toJSONValue(a),EJSON.toJSONValue(b));}// fall back to structural equality of objects
var ret;if(keyOrderSensitive){var bKeys=[];_.each(b,function(val,x){bKeys.push(x);});i=0;ret=_.all(a,function(val,x){if(i>=bKeys.length){return false;}if(x!==bKeys[i]){return false;}if(!EJSON.equals(val,b[bKeys[i]],options)){return false;}i++;return true;});return ret&&i===bKeys.length;}else{i=0;ret=_.all(a,function(val,key){if(!_.has(b,key)){return false;}if(!EJSON.equals(val,b[key],options)){return false;}i++;return true;});return ret&&_.size(b)===i;}};/**
 * @summary Return a deep copy of `val`.
 * @locus Anywhere
 * @param {EJSON} val A value to copy.
 */EJSON.clone=function(v){var ret;if((typeof v==="undefined"?"undefined":_typeof(v))!=="object")return v;if(v===null)return null;// null has typeof "object"
if(v instanceof Date)return new Date(v.getTime());// RegExps are not really EJSON elements (eg we don't define a serialization
// for them), but they're immutable anyway, so we can support them in clone.
if(v instanceof RegExp)return v;if(EJSON.isBinary(v)){ret=EJSON.newBinary(v.length);for(var i=0;i<v.length;i++){ret[i]=v[i];}return ret;}// XXX: Use something better than underscore's isArray
if(_.isArray(v)||_.isArguments(v)){// For some reason, _.map doesn't work in this context on Opera (weird test
// failures).
ret=[];for(i=0;i<v.length;i++){ret[i]=EJSON.clone(v[i]);}return ret;}// handle general user-defined typed Objects if they have a clone method
if(typeof v.clone==='function'){return v.clone();}// handle other custom types
if(EJSON._isCustomType(v)){return EJSON.fromJSONValue(EJSON.clone(EJSON.toJSONValue(v)),true);}// handle other objects
ret={};_.each(v,function(value,key){ret[key]=EJSON.clone(value);});return ret;};/**
 * @summary Allocate a new buffer of binary data that EJSON can serialize.
 * @locus Anywhere
 * @param {Number} size The number of bytes of binary data to allocate.
 */// EJSON.newBinary is the public documented API for this functionality,
// but the implementation is in the 'base64' package to avoid
// introducing a circular dependency. (If the implementation were here,
// then 'base64' would have to use EJSON.newBinary, and 'ejson' would
// also have to use 'base64'.)
EJSON.newBinary=Base64.newBinary;// Based on json2.js from https://github.com/douglascrockford/JSON-js
//
//    json2.js
//    2012-10-08
//
//    Public Domain.
//
//    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
function quote(string){return JSON.stringify(string);}var str=function str(key,holder,singleIndent,outerIndent,canonical){// Produce a string from holder[key].
var i;// The loop counter.
var k;// The member key.
var v;// The member value.
var length;var innerIndent=outerIndent;var partial;var value=holder[key];// What happens next depends on the value's type.
switch(typeof value==="undefined"?"undefined":_typeof(value)){case'string':return quote(value);case'number':// JSON numbers must be finite. Encode non-finite numbers as null.
return isFinite(value)?String(value):'null';case'boolean':return String(value);// If the type is 'object', we might be dealing with an object or an array or
// null.
case'object':// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.
if(!value){return'null';}// Make an array to hold the partial results of stringifying this object value.
innerIndent=outerIndent+singleIndent;partial=[];// Is the value an array?
if(_.isArray(value)||_.isArguments(value)){// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.
length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value,singleIndent,innerIndent,canonical)||'null';}// Join all of the elements together, separated with commas, and wrap them in
// brackets.
if(partial.length===0){v='[]';}else if(innerIndent){v='[\n'+innerIndent+partial.join(',\n'+innerIndent)+'\n'+outerIndent+']';}else{v='['+partial.join(',')+']';}return v;}// Iterate through all of the keys in the object.
var keys=_.keys(value);if(canonical)keys=keys.sort();_.each(keys,function(k){v=str(k,value,singleIndent,innerIndent,canonical);if(v){partial.push(quote(k)+(innerIndent?': ':':')+v);}});// Join all of the member texts together, separated with commas,
// and wrap them in braces.
if(partial.length===0){v='{}';}else if(innerIndent){v='{\n'+innerIndent+partial.join(',\n'+innerIndent)+'\n'+outerIndent+'}';}else{v='{'+partial.join(',')+'}';}return v;}};// If the JSON object does not yet have a stringify method, give it one.
EJSON._canonicalStringify=function(value,options){// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.
options=_.extend({indent:"",canonical:false},options);if(options.indent===true){options.indent="  ";}else if(typeof options.indent==='number'){var newIndent="";for(var i=0;i<options.indent;i++){newIndent+=' ';}options.indent=newIndent;}return str('',{'':value},options.indent,"",options.canonical);};Meteor.EJSON=EJSON;Meteor.EJSONTest=EJSONTest;};},{}],15:[function(require,module,exports){module.exports=function(Meteor){var IDENTITY,SLICE,Scanner,makeRegexMatcher,getCharacterReference,getComment,getDoctype,getHTMLToken,getTagToken,isLookingAtEndTag,codePointToString,getContent,getRCData;var HTML=Meteor.HTML;var HTMLTools;var TEMPLATE_TAG_POSITION;HTMLTools={};HTMLTools.Parse={};var asciiLowerCase=HTMLTools.asciiLowerCase=function(str){return str.replace(/[A-Z]/g,function(c){return String.fromCharCode(c.charCodeAt(0)+32);});};var svgCamelCaseAttributes='attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits contentScriptType contentStyleType diffuseConstant edgeMode externalResourcesRequired filterRes filterUnits glyphRef glyphRef gradientTransform gradientTransform gradientUnits gradientUnits kernelMatrix kernelUnitLength kernelUnitLength kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent specularExponent spreadMethod spreadMethod startOffset stdDeviation stitchTiles surfaceScale surfaceScale systemLanguage tableValues targetX targetY textLength textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan'.split(' ');var properAttributeCaseMap=function(map){for(var i=0;i<svgCamelCaseAttributes.length;i++){var a=svgCamelCaseAttributes[i];map[asciiLowerCase(a)]=a;}return map;}({});var properTagCaseMap=function(map){var knownElements=HTML.knownElementNames;for(var i=0;i<knownElements.length;i++){var a=knownElements[i];map[asciiLowerCase(a)]=a;}return map;}({});// Take a tag name in any case and make it the proper case for HTML.
//
// Modern browsers let you embed SVG in HTML, but SVG elements are special
// in that they have a case-sensitive DOM API (nodeName, getAttribute,
// setAttribute).  For example, it has to be `setAttribute("viewBox")`,
// not `"viewbox"`.  However, the browser's HTML parser is NOT case sensitive
// and will fix the case for you, so if you write `<svg viewbox="...">`
// you actually get a `"viewBox"` attribute.  Any HTML-parsing toolchain
// must do the same.
HTMLTools.properCaseTagName=function(name){var lowered=asciiLowerCase(name);return properTagCaseMap.hasOwnProperty(lowered)?properTagCaseMap[lowered]:lowered;};// See docs for properCaseTagName.
HTMLTools.properCaseAttributeName=function(name){var lowered=asciiLowerCase(name);return properAttributeCaseMap.hasOwnProperty(lowered)?properAttributeCaseMap[lowered]:lowered;};// This is a Scanner class suitable for any parser/lexer/tokenizer.
//
// A Scanner has an immutable source document (string) `input` and a current
// position `pos`, an index into the string, which can be set at will.
//
// * `new Scanner(input)` - constructs a Scanner with source string `input`
// * `scanner.rest()` - returns the rest of the input after `pos`
// * `scanner.peek()` - returns the character at `pos`
// * `scanner.isEOF()` - true if `pos` is at or beyond the end of `input`
// * `scanner.fatal(msg)` - throw an error indicating a problem at `pos`
Scanner=HTMLTools.Scanner=function(input){this.input=input;// public, read-only
this.pos=0;// public, read-write
};Scanner.prototype.rest=function(){// Slicing a string is O(1) in modern JavaScript VMs (including old IE).
return this.input.slice(this.pos);};Scanner.prototype.isEOF=function(){return this.pos>=this.input.length;};Scanner.prototype.fatal=function(msg){// despite this default, you should always provide a message!
msg=msg||"Parse error";var CONTEXT_AMOUNT=20;var input=this.input;var pos=this.pos;var pastInput=input.substring(pos-CONTEXT_AMOUNT-1,pos);if(pastInput.length>CONTEXT_AMOUNT)pastInput='...'+pastInput.substring(-CONTEXT_AMOUNT);var upcomingInput=input.substring(pos,pos+CONTEXT_AMOUNT+1);if(upcomingInput.length>CONTEXT_AMOUNT)upcomingInput=upcomingInput.substring(0,CONTEXT_AMOUNT)+'...';var positionDisplay=(pastInput+upcomingInput).replace(/\n/g,' ')+'\n'+new Array(pastInput.length+1).join(' ')+"^";var e=new Error(msg+"\n"+positionDisplay);e.offset=pos;var allPastInput=input.substring(0,pos);e.line=1+(allPastInput.match(/\n/g)||[]).length;e.col=1+pos-allPastInput.lastIndexOf('\n');e.scanner=this;throw e;};// Peek at the next character.
//
// If `isEOF`, returns an empty string.
Scanner.prototype.peek=function(){return this.input.charAt(this.pos);};// Constructs a `getFoo` function where `foo` is specified with a regex.
// The regex should start with `^`.  The constructed function will return
// match group 1, if it exists and matches a non-empty string, or else
// the entire matched string (or null if there is no match).
//
// A `getFoo` function tries to match and consume a foo.  If it succeeds,
// the current position of the scanner is advanced.  If it fails, the
// current position is not advanced and a falsy value (typically null)
// is returned.
makeRegexMatcher=function makeRegexMatcher(regex){return function(scanner){var match=regex.exec(scanner.rest());if(!match)return null;scanner.pos+=match[0].length;return match[1]||match[0];};};// http://www.whatwg.org/specs/web-apps/current-work/multipage/entities.json
// Note that some entities don't have a final semicolon!  These are used to
// make `&lt` (for example) with no semicolon a parse error but `&abcde` not.
var ENTITIES={"&Aacute;":{"codepoints":[193],"characters":"\xC1"},"&Aacute":{"codepoints":[193],"characters":"\xC1"},"&aacute;":{"codepoints":[225],"characters":"\xE1"},"&aacute":{"codepoints":[225],"characters":"\xE1"},"&Abreve;":{"codepoints":[258],"characters":"\u0102"},"&abreve;":{"codepoints":[259],"characters":"\u0103"},"&ac;":{"codepoints":[8766],"characters":"\u223E"},"&acd;":{"codepoints":[8767],"characters":"\u223F"},"&acE;":{"codepoints":[8766,819],"characters":"\u223E\u0333"},"&Acirc;":{"codepoints":[194],"characters":"\xC2"},"&Acirc":{"codepoints":[194],"characters":"\xC2"},"&acirc;":{"codepoints":[226],"characters":"\xE2"},"&acirc":{"codepoints":[226],"characters":"\xE2"},"&acute;":{"codepoints":[180],"characters":"\xB4"},"&acute":{"codepoints":[180],"characters":"\xB4"},"&Acy;":{"codepoints":[1040],"characters":"\u0410"},"&acy;":{"codepoints":[1072],"characters":"\u0430"},"&AElig;":{"codepoints":[198],"characters":"\xC6"},"&AElig":{"codepoints":[198],"characters":"\xC6"},"&aelig;":{"codepoints":[230],"characters":"\xE6"},"&aelig":{"codepoints":[230],"characters":"\xE6"},"&af;":{"codepoints":[8289],"characters":"\u2061"},"&Afr;":{"codepoints":[120068],"characters":"\uD835\uDD04"},"&afr;":{"codepoints":[120094],"characters":"\uD835\uDD1E"},"&Agrave;":{"codepoints":[192],"characters":"\xC0"},"&Agrave":{"codepoints":[192],"characters":"\xC0"},"&agrave;":{"codepoints":[224],"characters":"\xE0"},"&agrave":{"codepoints":[224],"characters":"\xE0"},"&alefsym;":{"codepoints":[8501],"characters":"\u2135"},"&aleph;":{"codepoints":[8501],"characters":"\u2135"},"&Alpha;":{"codepoints":[913],"characters":"\u0391"},"&alpha;":{"codepoints":[945],"characters":"\u03B1"},"&Amacr;":{"codepoints":[256],"characters":"\u0100"},"&amacr;":{"codepoints":[257],"characters":"\u0101"},"&amalg;":{"codepoints":[10815],"characters":"\u2A3F"},"&amp;":{"codepoints":[38],"characters":"&"},"&amp":{"codepoints":[38],"characters":"&"},"&AMP;":{"codepoints":[38],"characters":"&"},"&AMP":{"codepoints":[38],"characters":"&"},"&andand;":{"codepoints":[10837],"characters":"\u2A55"},"&And;":{"codepoints":[10835],"characters":"\u2A53"},"&and;":{"codepoints":[8743],"characters":"\u2227"},"&andd;":{"codepoints":[10844],"characters":"\u2A5C"},"&andslope;":{"codepoints":[10840],"characters":"\u2A58"},"&andv;":{"codepoints":[10842],"characters":"\u2A5A"},"&ang;":{"codepoints":[8736],"characters":"\u2220"},"&ange;":{"codepoints":[10660],"characters":"\u29A4"},"&angle;":{"codepoints":[8736],"characters":"\u2220"},"&angmsdaa;":{"codepoints":[10664],"characters":"\u29A8"},"&angmsdab;":{"codepoints":[10665],"characters":"\u29A9"},"&angmsdac;":{"codepoints":[10666],"characters":"\u29AA"},"&angmsdad;":{"codepoints":[10667],"characters":"\u29AB"},"&angmsdae;":{"codepoints":[10668],"characters":"\u29AC"},"&angmsdaf;":{"codepoints":[10669],"characters":"\u29AD"},"&angmsdag;":{"codepoints":[10670],"characters":"\u29AE"},"&angmsdah;":{"codepoints":[10671],"characters":"\u29AF"},"&angmsd;":{"codepoints":[8737],"characters":"\u2221"},"&angrt;":{"codepoints":[8735],"characters":"\u221F"},"&angrtvb;":{"codepoints":[8894],"characters":"\u22BE"},"&angrtvbd;":{"codepoints":[10653],"characters":"\u299D"},"&angsph;":{"codepoints":[8738],"characters":"\u2222"},"&angst;":{"codepoints":[197],"characters":"\xC5"},"&angzarr;":{"codepoints":[9084],"characters":"\u237C"},"&Aogon;":{"codepoints":[260],"characters":"\u0104"},"&aogon;":{"codepoints":[261],"characters":"\u0105"},"&Aopf;":{"codepoints":[120120],"characters":"\uD835\uDD38"},"&aopf;":{"codepoints":[120146],"characters":"\uD835\uDD52"},"&apacir;":{"codepoints":[10863],"characters":"\u2A6F"},"&ap;":{"codepoints":[8776],"characters":"\u2248"},"&apE;":{"codepoints":[10864],"characters":"\u2A70"},"&ape;":{"codepoints":[8778],"characters":"\u224A"},"&apid;":{"codepoints":[8779],"characters":"\u224B"},"&apos;":{"codepoints":[39],"characters":"'"},"&ApplyFunction;":{"codepoints":[8289],"characters":"\u2061"},"&approx;":{"codepoints":[8776],"characters":"\u2248"},"&approxeq;":{"codepoints":[8778],"characters":"\u224A"},"&Aring;":{"codepoints":[197],"characters":"\xC5"},"&Aring":{"codepoints":[197],"characters":"\xC5"},"&aring;":{"codepoints":[229],"characters":"\xE5"},"&aring":{"codepoints":[229],"characters":"\xE5"},"&Ascr;":{"codepoints":[119964],"characters":"\uD835\uDC9C"},"&ascr;":{"codepoints":[119990],"characters":"\uD835\uDCB6"},"&Assign;":{"codepoints":[8788],"characters":"\u2254"},"&ast;":{"codepoints":[42],"characters":"*"},"&asymp;":{"codepoints":[8776],"characters":"\u2248"},"&asympeq;":{"codepoints":[8781],"characters":"\u224D"},"&Atilde;":{"codepoints":[195],"characters":"\xC3"},"&Atilde":{"codepoints":[195],"characters":"\xC3"},"&atilde;":{"codepoints":[227],"characters":"\xE3"},"&atilde":{"codepoints":[227],"characters":"\xE3"},"&Auml;":{"codepoints":[196],"characters":"\xC4"},"&Auml":{"codepoints":[196],"characters":"\xC4"},"&auml;":{"codepoints":[228],"characters":"\xE4"},"&auml":{"codepoints":[228],"characters":"\xE4"},"&awconint;":{"codepoints":[8755],"characters":"\u2233"},"&awint;":{"codepoints":[10769],"characters":"\u2A11"},"&backcong;":{"codepoints":[8780],"characters":"\u224C"},"&backepsilon;":{"codepoints":[1014],"characters":"\u03F6"},"&backprime;":{"codepoints":[8245],"characters":"\u2035"},"&backsim;":{"codepoints":[8765],"characters":"\u223D"},"&backsimeq;":{"codepoints":[8909],"characters":"\u22CD"},"&Backslash;":{"codepoints":[8726],"characters":"\u2216"},"&Barv;":{"codepoints":[10983],"characters":"\u2AE7"},"&barvee;":{"codepoints":[8893],"characters":"\u22BD"},"&barwed;":{"codepoints":[8965],"characters":"\u2305"},"&Barwed;":{"codepoints":[8966],"characters":"\u2306"},"&barwedge;":{"codepoints":[8965],"characters":"\u2305"},"&bbrk;":{"codepoints":[9141],"characters":"\u23B5"},"&bbrktbrk;":{"codepoints":[9142],"characters":"\u23B6"},"&bcong;":{"codepoints":[8780],"characters":"\u224C"},"&Bcy;":{"codepoints":[1041],"characters":"\u0411"},"&bcy;":{"codepoints":[1073],"characters":"\u0431"},"&bdquo;":{"codepoints":[8222],"characters":"\u201E"},"&becaus;":{"codepoints":[8757],"characters":"\u2235"},"&because;":{"codepoints":[8757],"characters":"\u2235"},"&Because;":{"codepoints":[8757],"characters":"\u2235"},"&bemptyv;":{"codepoints":[10672],"characters":"\u29B0"},"&bepsi;":{"codepoints":[1014],"characters":"\u03F6"},"&bernou;":{"codepoints":[8492],"characters":"\u212C"},"&Bernoullis;":{"codepoints":[8492],"characters":"\u212C"},"&Beta;":{"codepoints":[914],"characters":"\u0392"},"&beta;":{"codepoints":[946],"characters":"\u03B2"},"&beth;":{"codepoints":[8502],"characters":"\u2136"},"&between;":{"codepoints":[8812],"characters":"\u226C"},"&Bfr;":{"codepoints":[120069],"characters":"\uD835\uDD05"},"&bfr;":{"codepoints":[120095],"characters":"\uD835\uDD1F"},"&bigcap;":{"codepoints":[8898],"characters":"\u22C2"},"&bigcirc;":{"codepoints":[9711],"characters":"\u25EF"},"&bigcup;":{"codepoints":[8899],"characters":"\u22C3"},"&bigodot;":{"codepoints":[10752],"characters":"\u2A00"},"&bigoplus;":{"codepoints":[10753],"characters":"\u2A01"},"&bigotimes;":{"codepoints":[10754],"characters":"\u2A02"},"&bigsqcup;":{"codepoints":[10758],"characters":"\u2A06"},"&bigstar;":{"codepoints":[9733],"characters":"\u2605"},"&bigtriangledown;":{"codepoints":[9661],"characters":"\u25BD"},"&bigtriangleup;":{"codepoints":[9651],"characters":"\u25B3"},"&biguplus;":{"codepoints":[10756],"characters":"\u2A04"},"&bigvee;":{"codepoints":[8897],"characters":"\u22C1"},"&bigwedge;":{"codepoints":[8896],"characters":"\u22C0"},"&bkarow;":{"codepoints":[10509],"characters":"\u290D"},"&blacklozenge;":{"codepoints":[10731],"characters":"\u29EB"},"&blacksquare;":{"codepoints":[9642],"characters":"\u25AA"},"&blacktriangle;":{"codepoints":[9652],"characters":"\u25B4"},"&blacktriangledown;":{"codepoints":[9662],"characters":"\u25BE"},"&blacktriangleleft;":{"codepoints":[9666],"characters":"\u25C2"},"&blacktriangleright;":{"codepoints":[9656],"characters":"\u25B8"},"&blank;":{"codepoints":[9251],"characters":"\u2423"},"&blk12;":{"codepoints":[9618],"characters":"\u2592"},"&blk14;":{"codepoints":[9617],"characters":"\u2591"},"&blk34;":{"codepoints":[9619],"characters":"\u2593"},"&block;":{"codepoints":[9608],"characters":"\u2588"},"&bne;":{"codepoints":[61,8421],"characters":"=\u20E5"},"&bnequiv;":{"codepoints":[8801,8421],"characters":"\u2261\u20E5"},"&bNot;":{"codepoints":[10989],"characters":"\u2AED"},"&bnot;":{"codepoints":[8976],"characters":"\u2310"},"&Bopf;":{"codepoints":[120121],"characters":"\uD835\uDD39"},"&bopf;":{"codepoints":[120147],"characters":"\uD835\uDD53"},"&bot;":{"codepoints":[8869],"characters":"\u22A5"},"&bottom;":{"codepoints":[8869],"characters":"\u22A5"},"&bowtie;":{"codepoints":[8904],"characters":"\u22C8"},"&boxbox;":{"codepoints":[10697],"characters":"\u29C9"},"&boxdl;":{"codepoints":[9488],"characters":"\u2510"},"&boxdL;":{"codepoints":[9557],"characters":"\u2555"},"&boxDl;":{"codepoints":[9558],"characters":"\u2556"},"&boxDL;":{"codepoints":[9559],"characters":"\u2557"},"&boxdr;":{"codepoints":[9484],"characters":"\u250C"},"&boxdR;":{"codepoints":[9554],"characters":"\u2552"},"&boxDr;":{"codepoints":[9555],"characters":"\u2553"},"&boxDR;":{"codepoints":[9556],"characters":"\u2554"},"&boxh;":{"codepoints":[9472],"characters":"\u2500"},"&boxH;":{"codepoints":[9552],"characters":"\u2550"},"&boxhd;":{"codepoints":[9516],"characters":"\u252C"},"&boxHd;":{"codepoints":[9572],"characters":"\u2564"},"&boxhD;":{"codepoints":[9573],"characters":"\u2565"},"&boxHD;":{"codepoints":[9574],"characters":"\u2566"},"&boxhu;":{"codepoints":[9524],"characters":"\u2534"},"&boxHu;":{"codepoints":[9575],"characters":"\u2567"},"&boxhU;":{"codepoints":[9576],"characters":"\u2568"},"&boxHU;":{"codepoints":[9577],"characters":"\u2569"},"&boxminus;":{"codepoints":[8863],"characters":"\u229F"},"&boxplus;":{"codepoints":[8862],"characters":"\u229E"},"&boxtimes;":{"codepoints":[8864],"characters":"\u22A0"},"&boxul;":{"codepoints":[9496],"characters":"\u2518"},"&boxuL;":{"codepoints":[9563],"characters":"\u255B"},"&boxUl;":{"codepoints":[9564],"characters":"\u255C"},"&boxUL;":{"codepoints":[9565],"characters":"\u255D"},"&boxur;":{"codepoints":[9492],"characters":"\u2514"},"&boxuR;":{"codepoints":[9560],"characters":"\u2558"},"&boxUr;":{"codepoints":[9561],"characters":"\u2559"},"&boxUR;":{"codepoints":[9562],"characters":"\u255A"},"&boxv;":{"codepoints":[9474],"characters":"\u2502"},"&boxV;":{"codepoints":[9553],"characters":"\u2551"},"&boxvh;":{"codepoints":[9532],"characters":"\u253C"},"&boxvH;":{"codepoints":[9578],"characters":"\u256A"},"&boxVh;":{"codepoints":[9579],"characters":"\u256B"},"&boxVH;":{"codepoints":[9580],"characters":"\u256C"},"&boxvl;":{"codepoints":[9508],"characters":"\u2524"},"&boxvL;":{"codepoints":[9569],"characters":"\u2561"},"&boxVl;":{"codepoints":[9570],"characters":"\u2562"},"&boxVL;":{"codepoints":[9571],"characters":"\u2563"},"&boxvr;":{"codepoints":[9500],"characters":"\u251C"},"&boxvR;":{"codepoints":[9566],"characters":"\u255E"},"&boxVr;":{"codepoints":[9567],"characters":"\u255F"},"&boxVR;":{"codepoints":[9568],"characters":"\u2560"},"&bprime;":{"codepoints":[8245],"characters":"\u2035"},"&breve;":{"codepoints":[728],"characters":"\u02D8"},"&Breve;":{"codepoints":[728],"characters":"\u02D8"},"&brvbar;":{"codepoints":[166],"characters":"\xA6"},"&brvbar":{"codepoints":[166],"characters":"\xA6"},"&bscr;":{"codepoints":[119991],"characters":"\uD835\uDCB7"},"&Bscr;":{"codepoints":[8492],"characters":"\u212C"},"&bsemi;":{"codepoints":[8271],"characters":"\u204F"},"&bsim;":{"codepoints":[8765],"characters":"\u223D"},"&bsime;":{"codepoints":[8909],"characters":"\u22CD"},"&bsolb;":{"codepoints":[10693],"characters":"\u29C5"},"&bsol;":{"codepoints":[92],"characters":"\\"},"&bsolhsub;":{"codepoints":[10184],"characters":"\u27C8"},"&bull;":{"codepoints":[8226],"characters":"\u2022"},"&bullet;":{"codepoints":[8226],"characters":"\u2022"},"&bump;":{"codepoints":[8782],"characters":"\u224E"},"&bumpE;":{"codepoints":[10926],"characters":"\u2AAE"},"&bumpe;":{"codepoints":[8783],"characters":"\u224F"},"&Bumpeq;":{"codepoints":[8782],"characters":"\u224E"},"&bumpeq;":{"codepoints":[8783],"characters":"\u224F"},"&Cacute;":{"codepoints":[262],"characters":"\u0106"},"&cacute;":{"codepoints":[263],"characters":"\u0107"},"&capand;":{"codepoints":[10820],"characters":"\u2A44"},"&capbrcup;":{"codepoints":[10825],"characters":"\u2A49"},"&capcap;":{"codepoints":[10827],"characters":"\u2A4B"},"&cap;":{"codepoints":[8745],"characters":"\u2229"},"&Cap;":{"codepoints":[8914],"characters":"\u22D2"},"&capcup;":{"codepoints":[10823],"characters":"\u2A47"},"&capdot;":{"codepoints":[10816],"characters":"\u2A40"},"&CapitalDifferentialD;":{"codepoints":[8517],"characters":"\u2145"},"&caps;":{"codepoints":[8745,65024],"characters":"\u2229\uFE00"},"&caret;":{"codepoints":[8257],"characters":"\u2041"},"&caron;":{"codepoints":[711],"characters":"\u02C7"},"&Cayleys;":{"codepoints":[8493],"characters":"\u212D"},"&ccaps;":{"codepoints":[10829],"characters":"\u2A4D"},"&Ccaron;":{"codepoints":[268],"characters":"\u010C"},"&ccaron;":{"codepoints":[269],"characters":"\u010D"},"&Ccedil;":{"codepoints":[199],"characters":"\xC7"},"&Ccedil":{"codepoints":[199],"characters":"\xC7"},"&ccedil;":{"codepoints":[231],"characters":"\xE7"},"&ccedil":{"codepoints":[231],"characters":"\xE7"},"&Ccirc;":{"codepoints":[264],"characters":"\u0108"},"&ccirc;":{"codepoints":[265],"characters":"\u0109"},"&Cconint;":{"codepoints":[8752],"characters":"\u2230"},"&ccups;":{"codepoints":[10828],"characters":"\u2A4C"},"&ccupssm;":{"codepoints":[10832],"characters":"\u2A50"},"&Cdot;":{"codepoints":[266],"characters":"\u010A"},"&cdot;":{"codepoints":[267],"characters":"\u010B"},"&cedil;":{"codepoints":[184],"characters":"\xB8"},"&cedil":{"codepoints":[184],"characters":"\xB8"},"&Cedilla;":{"codepoints":[184],"characters":"\xB8"},"&cemptyv;":{"codepoints":[10674],"characters":"\u29B2"},"&cent;":{"codepoints":[162],"characters":"\xA2"},"&cent":{"codepoints":[162],"characters":"\xA2"},"&centerdot;":{"codepoints":[183],"characters":"\xB7"},"&CenterDot;":{"codepoints":[183],"characters":"\xB7"},"&cfr;":{"codepoints":[120096],"characters":"\uD835\uDD20"},"&Cfr;":{"codepoints":[8493],"characters":"\u212D"},"&CHcy;":{"codepoints":[1063],"characters":"\u0427"},"&chcy;":{"codepoints":[1095],"characters":"\u0447"},"&check;":{"codepoints":[10003],"characters":"\u2713"},"&checkmark;":{"codepoints":[10003],"characters":"\u2713"},"&Chi;":{"codepoints":[935],"characters":"\u03A7"},"&chi;":{"codepoints":[967],"characters":"\u03C7"},"&circ;":{"codepoints":[710],"characters":"\u02C6"},"&circeq;":{"codepoints":[8791],"characters":"\u2257"},"&circlearrowleft;":{"codepoints":[8634],"characters":"\u21BA"},"&circlearrowright;":{"codepoints":[8635],"characters":"\u21BB"},"&circledast;":{"codepoints":[8859],"characters":"\u229B"},"&circledcirc;":{"codepoints":[8858],"characters":"\u229A"},"&circleddash;":{"codepoints":[8861],"characters":"\u229D"},"&CircleDot;":{"codepoints":[8857],"characters":"\u2299"},"&circledR;":{"codepoints":[174],"characters":"\xAE"},"&circledS;":{"codepoints":[9416],"characters":"\u24C8"},"&CircleMinus;":{"codepoints":[8854],"characters":"\u2296"},"&CirclePlus;":{"codepoints":[8853],"characters":"\u2295"},"&CircleTimes;":{"codepoints":[8855],"characters":"\u2297"},"&cir;":{"codepoints":[9675],"characters":"\u25CB"},"&cirE;":{"codepoints":[10691],"characters":"\u29C3"},"&cire;":{"codepoints":[8791],"characters":"\u2257"},"&cirfnint;":{"codepoints":[10768],"characters":"\u2A10"},"&cirmid;":{"codepoints":[10991],"characters":"\u2AEF"},"&cirscir;":{"codepoints":[10690],"characters":"\u29C2"},"&ClockwiseContourIntegral;":{"codepoints":[8754],"characters":"\u2232"},"&CloseCurlyDoubleQuote;":{"codepoints":[8221],"characters":"\u201D"},"&CloseCurlyQuote;":{"codepoints":[8217],"characters":"\u2019"},"&clubs;":{"codepoints":[9827],"characters":"\u2663"},"&clubsuit;":{"codepoints":[9827],"characters":"\u2663"},"&colon;":{"codepoints":[58],"characters":":"},"&Colon;":{"codepoints":[8759],"characters":"\u2237"},"&Colone;":{"codepoints":[10868],"characters":"\u2A74"},"&colone;":{"codepoints":[8788],"characters":"\u2254"},"&coloneq;":{"codepoints":[8788],"characters":"\u2254"},"&comma;":{"codepoints":[44],"characters":","},"&commat;":{"codepoints":[64],"characters":"@"},"&comp;":{"codepoints":[8705],"characters":"\u2201"},"&compfn;":{"codepoints":[8728],"characters":"\u2218"},"&complement;":{"codepoints":[8705],"characters":"\u2201"},"&complexes;":{"codepoints":[8450],"characters":"\u2102"},"&cong;":{"codepoints":[8773],"characters":"\u2245"},"&congdot;":{"codepoints":[10861],"characters":"\u2A6D"},"&Congruent;":{"codepoints":[8801],"characters":"\u2261"},"&conint;":{"codepoints":[8750],"characters":"\u222E"},"&Conint;":{"codepoints":[8751],"characters":"\u222F"},"&ContourIntegral;":{"codepoints":[8750],"characters":"\u222E"},"&copf;":{"codepoints":[120148],"characters":"\uD835\uDD54"},"&Copf;":{"codepoints":[8450],"characters":"\u2102"},"&coprod;":{"codepoints":[8720],"characters":"\u2210"},"&Coproduct;":{"codepoints":[8720],"characters":"\u2210"},"&copy;":{"codepoints":[169],"characters":"\xA9"},"&copy":{"codepoints":[169],"characters":"\xA9"},"&COPY;":{"codepoints":[169],"characters":"\xA9"},"&COPY":{"codepoints":[169],"characters":"\xA9"},"&copysr;":{"codepoints":[8471],"characters":"\u2117"},"&CounterClockwiseContourIntegral;":{"codepoints":[8755],"characters":"\u2233"},"&crarr;":{"codepoints":[8629],"characters":"\u21B5"},"&cross;":{"codepoints":[10007],"characters":"\u2717"},"&Cross;":{"codepoints":[10799],"characters":"\u2A2F"},"&Cscr;":{"codepoints":[119966],"characters":"\uD835\uDC9E"},"&cscr;":{"codepoints":[119992],"characters":"\uD835\uDCB8"},"&csub;":{"codepoints":[10959],"characters":"\u2ACF"},"&csube;":{"codepoints":[10961],"characters":"\u2AD1"},"&csup;":{"codepoints":[10960],"characters":"\u2AD0"},"&csupe;":{"codepoints":[10962],"characters":"\u2AD2"},"&ctdot;":{"codepoints":[8943],"characters":"\u22EF"},"&cudarrl;":{"codepoints":[10552],"characters":"\u2938"},"&cudarrr;":{"codepoints":[10549],"characters":"\u2935"},"&cuepr;":{"codepoints":[8926],"characters":"\u22DE"},"&cuesc;":{"codepoints":[8927],"characters":"\u22DF"},"&cularr;":{"codepoints":[8630],"characters":"\u21B6"},"&cularrp;":{"codepoints":[10557],"characters":"\u293D"},"&cupbrcap;":{"codepoints":[10824],"characters":"\u2A48"},"&cupcap;":{"codepoints":[10822],"characters":"\u2A46"},"&CupCap;":{"codepoints":[8781],"characters":"\u224D"},"&cup;":{"codepoints":[8746],"characters":"\u222A"},"&Cup;":{"codepoints":[8915],"characters":"\u22D3"},"&cupcup;":{"codepoints":[10826],"characters":"\u2A4A"},"&cupdot;":{"codepoints":[8845],"characters":"\u228D"},"&cupor;":{"codepoints":[10821],"characters":"\u2A45"},"&cups;":{"codepoints":[8746,65024],"characters":"\u222A\uFE00"},"&curarr;":{"codepoints":[8631],"characters":"\u21B7"},"&curarrm;":{"codepoints":[10556],"characters":"\u293C"},"&curlyeqprec;":{"codepoints":[8926],"characters":"\u22DE"},"&curlyeqsucc;":{"codepoints":[8927],"characters":"\u22DF"},"&curlyvee;":{"codepoints":[8910],"characters":"\u22CE"},"&curlywedge;":{"codepoints":[8911],"characters":"\u22CF"},"&curren;":{"codepoints":[164],"characters":"\xA4"},"&curren":{"codepoints":[164],"characters":"\xA4"},"&curvearrowleft;":{"codepoints":[8630],"characters":"\u21B6"},"&curvearrowright;":{"codepoints":[8631],"characters":"\u21B7"},"&cuvee;":{"codepoints":[8910],"characters":"\u22CE"},"&cuwed;":{"codepoints":[8911],"characters":"\u22CF"},"&cwconint;":{"codepoints":[8754],"characters":"\u2232"},"&cwint;":{"codepoints":[8753],"characters":"\u2231"},"&cylcty;":{"codepoints":[9005],"characters":"\u232D"},"&dagger;":{"codepoints":[8224],"characters":"\u2020"},"&Dagger;":{"codepoints":[8225],"characters":"\u2021"},"&daleth;":{"codepoints":[8504],"characters":"\u2138"},"&darr;":{"codepoints":[8595],"characters":"\u2193"},"&Darr;":{"codepoints":[8609],"characters":"\u21A1"},"&dArr;":{"codepoints":[8659],"characters":"\u21D3"},"&dash;":{"codepoints":[8208],"characters":"\u2010"},"&Dashv;":{"codepoints":[10980],"characters":"\u2AE4"},"&dashv;":{"codepoints":[8867],"characters":"\u22A3"},"&dbkarow;":{"codepoints":[10511],"characters":"\u290F"},"&dblac;":{"codepoints":[733],"characters":"\u02DD"},"&Dcaron;":{"codepoints":[270],"characters":"\u010E"},"&dcaron;":{"codepoints":[271],"characters":"\u010F"},"&Dcy;":{"codepoints":[1044],"characters":"\u0414"},"&dcy;":{"codepoints":[1076],"characters":"\u0434"},"&ddagger;":{"codepoints":[8225],"characters":"\u2021"},"&ddarr;":{"codepoints":[8650],"characters":"\u21CA"},"&DD;":{"codepoints":[8517],"characters":"\u2145"},"&dd;":{"codepoints":[8518],"characters":"\u2146"},"&DDotrahd;":{"codepoints":[10513],"characters":"\u2911"},"&ddotseq;":{"codepoints":[10871],"characters":"\u2A77"},"&deg;":{"codepoints":[176],"characters":"\xB0"},"&deg":{"codepoints":[176],"characters":"\xB0"},"&Del;":{"codepoints":[8711],"characters":"\u2207"},"&Delta;":{"codepoints":[916],"characters":"\u0394"},"&delta;":{"codepoints":[948],"characters":"\u03B4"},"&demptyv;":{"codepoints":[10673],"characters":"\u29B1"},"&dfisht;":{"codepoints":[10623],"characters":"\u297F"},"&Dfr;":{"codepoints":[120071],"characters":"\uD835\uDD07"},"&dfr;":{"codepoints":[120097],"characters":"\uD835\uDD21"},"&dHar;":{"codepoints":[10597],"characters":"\u2965"},"&dharl;":{"codepoints":[8643],"characters":"\u21C3"},"&dharr;":{"codepoints":[8642],"characters":"\u21C2"},"&DiacriticalAcute;":{"codepoints":[180],"characters":"\xB4"},"&DiacriticalDot;":{"codepoints":[729],"characters":"\u02D9"},"&DiacriticalDoubleAcute;":{"codepoints":[733],"characters":"\u02DD"},"&DiacriticalGrave;":{"codepoints":[96],"characters":"`"},"&DiacriticalTilde;":{"codepoints":[732],"characters":"\u02DC"},"&diam;":{"codepoints":[8900],"characters":"\u22C4"},"&diamond;":{"codepoints":[8900],"characters":"\u22C4"},"&Diamond;":{"codepoints":[8900],"characters":"\u22C4"},"&diamondsuit;":{"codepoints":[9830],"characters":"\u2666"},"&diams;":{"codepoints":[9830],"characters":"\u2666"},"&die;":{"codepoints":[168],"characters":"\xA8"},"&DifferentialD;":{"codepoints":[8518],"characters":"\u2146"},"&digamma;":{"codepoints":[989],"characters":"\u03DD"},"&disin;":{"codepoints":[8946],"characters":"\u22F2"},"&div;":{"codepoints":[247],"characters":"\xF7"},"&divide;":{"codepoints":[247],"characters":"\xF7"},"&divide":{"codepoints":[247],"characters":"\xF7"},"&divideontimes;":{"codepoints":[8903],"characters":"\u22C7"},"&divonx;":{"codepoints":[8903],"characters":"\u22C7"},"&DJcy;":{"codepoints":[1026],"characters":"\u0402"},"&djcy;":{"codepoints":[1106],"characters":"\u0452"},"&dlcorn;":{"codepoints":[8990],"characters":"\u231E"},"&dlcrop;":{"codepoints":[8973],"characters":"\u230D"},"&dollar;":{"codepoints":[36],"characters":"$"},"&Dopf;":{"codepoints":[120123],"characters":"\uD835\uDD3B"},"&dopf;":{"codepoints":[120149],"characters":"\uD835\uDD55"},"&Dot;":{"codepoints":[168],"characters":"\xA8"},"&dot;":{"codepoints":[729],"characters":"\u02D9"},"&DotDot;":{"codepoints":[8412],"characters":"\u20DC"},"&doteq;":{"codepoints":[8784],"characters":"\u2250"},"&doteqdot;":{"codepoints":[8785],"characters":"\u2251"},"&DotEqual;":{"codepoints":[8784],"characters":"\u2250"},"&dotminus;":{"codepoints":[8760],"characters":"\u2238"},"&dotplus;":{"codepoints":[8724],"characters":"\u2214"},"&dotsquare;":{"codepoints":[8865],"characters":"\u22A1"},"&doublebarwedge;":{"codepoints":[8966],"characters":"\u2306"},"&DoubleContourIntegral;":{"codepoints":[8751],"characters":"\u222F"},"&DoubleDot;":{"codepoints":[168],"characters":"\xA8"},"&DoubleDownArrow;":{"codepoints":[8659],"characters":"\u21D3"},"&DoubleLeftArrow;":{"codepoints":[8656],"characters":"\u21D0"},"&DoubleLeftRightArrow;":{"codepoints":[8660],"characters":"\u21D4"},"&DoubleLeftTee;":{"codepoints":[10980],"characters":"\u2AE4"},"&DoubleLongLeftArrow;":{"codepoints":[10232],"characters":"\u27F8"},"&DoubleLongLeftRightArrow;":{"codepoints":[10234],"characters":"\u27FA"},"&DoubleLongRightArrow;":{"codepoints":[10233],"characters":"\u27F9"},"&DoubleRightArrow;":{"codepoints":[8658],"characters":"\u21D2"},"&DoubleRightTee;":{"codepoints":[8872],"characters":"\u22A8"},"&DoubleUpArrow;":{"codepoints":[8657],"characters":"\u21D1"},"&DoubleUpDownArrow;":{"codepoints":[8661],"characters":"\u21D5"},"&DoubleVerticalBar;":{"codepoints":[8741],"characters":"\u2225"},"&DownArrowBar;":{"codepoints":[10515],"characters":"\u2913"},"&downarrow;":{"codepoints":[8595],"characters":"\u2193"},"&DownArrow;":{"codepoints":[8595],"characters":"\u2193"},"&Downarrow;":{"codepoints":[8659],"characters":"\u21D3"},"&DownArrowUpArrow;":{"codepoints":[8693],"characters":"\u21F5"},"&DownBreve;":{"codepoints":[785],"characters":"\u0311"},"&downdownarrows;":{"codepoints":[8650],"characters":"\u21CA"},"&downharpoonleft;":{"codepoints":[8643],"characters":"\u21C3"},"&downharpoonright;":{"codepoints":[8642],"characters":"\u21C2"},"&DownLeftRightVector;":{"codepoints":[10576],"characters":"\u2950"},"&DownLeftTeeVector;":{"codepoints":[10590],"characters":"\u295E"},"&DownLeftVectorBar;":{"codepoints":[10582],"characters":"\u2956"},"&DownLeftVector;":{"codepoints":[8637],"characters":"\u21BD"},"&DownRightTeeVector;":{"codepoints":[10591],"characters":"\u295F"},"&DownRightVectorBar;":{"codepoints":[10583],"characters":"\u2957"},"&DownRightVector;":{"codepoints":[8641],"characters":"\u21C1"},"&DownTeeArrow;":{"codepoints":[8615],"characters":"\u21A7"},"&DownTee;":{"codepoints":[8868],"characters":"\u22A4"},"&drbkarow;":{"codepoints":[10512],"characters":"\u2910"},"&drcorn;":{"codepoints":[8991],"characters":"\u231F"},"&drcrop;":{"codepoints":[8972],"characters":"\u230C"},"&Dscr;":{"codepoints":[119967],"characters":"\uD835\uDC9F"},"&dscr;":{"codepoints":[119993],"characters":"\uD835\uDCB9"},"&DScy;":{"codepoints":[1029],"characters":"\u0405"},"&dscy;":{"codepoints":[1109],"characters":"\u0455"},"&dsol;":{"codepoints":[10742],"characters":"\u29F6"},"&Dstrok;":{"codepoints":[272],"characters":"\u0110"},"&dstrok;":{"codepoints":[273],"characters":"\u0111"},"&dtdot;":{"codepoints":[8945],"characters":"\u22F1"},"&dtri;":{"codepoints":[9663],"characters":"\u25BF"},"&dtrif;":{"codepoints":[9662],"characters":"\u25BE"},"&duarr;":{"codepoints":[8693],"characters":"\u21F5"},"&duhar;":{"codepoints":[10607],"characters":"\u296F"},"&dwangle;":{"codepoints":[10662],"characters":"\u29A6"},"&DZcy;":{"codepoints":[1039],"characters":"\u040F"},"&dzcy;":{"codepoints":[1119],"characters":"\u045F"},"&dzigrarr;":{"codepoints":[10239],"characters":"\u27FF"},"&Eacute;":{"codepoints":[201],"characters":"\xC9"},"&Eacute":{"codepoints":[201],"characters":"\xC9"},"&eacute;":{"codepoints":[233],"characters":"\xE9"},"&eacute":{"codepoints":[233],"characters":"\xE9"},"&easter;":{"codepoints":[10862],"characters":"\u2A6E"},"&Ecaron;":{"codepoints":[282],"characters":"\u011A"},"&ecaron;":{"codepoints":[283],"characters":"\u011B"},"&Ecirc;":{"codepoints":[202],"characters":"\xCA"},"&Ecirc":{"codepoints":[202],"characters":"\xCA"},"&ecirc;":{"codepoints":[234],"characters":"\xEA"},"&ecirc":{"codepoints":[234],"characters":"\xEA"},"&ecir;":{"codepoints":[8790],"characters":"\u2256"},"&ecolon;":{"codepoints":[8789],"characters":"\u2255"},"&Ecy;":{"codepoints":[1069],"characters":"\u042D"},"&ecy;":{"codepoints":[1101],"characters":"\u044D"},"&eDDot;":{"codepoints":[10871],"characters":"\u2A77"},"&Edot;":{"codepoints":[278],"characters":"\u0116"},"&edot;":{"codepoints":[279],"characters":"\u0117"},"&eDot;":{"codepoints":[8785],"characters":"\u2251"},"&ee;":{"codepoints":[8519],"characters":"\u2147"},"&efDot;":{"codepoints":[8786],"characters":"\u2252"},"&Efr;":{"codepoints":[120072],"characters":"\uD835\uDD08"},"&efr;":{"codepoints":[120098],"characters":"\uD835\uDD22"},"&eg;":{"codepoints":[10906],"characters":"\u2A9A"},"&Egrave;":{"codepoints":[200],"characters":"\xC8"},"&Egrave":{"codepoints":[200],"characters":"\xC8"},"&egrave;":{"codepoints":[232],"characters":"\xE8"},"&egrave":{"codepoints":[232],"characters":"\xE8"},"&egs;":{"codepoints":[10902],"characters":"\u2A96"},"&egsdot;":{"codepoints":[10904],"characters":"\u2A98"},"&el;":{"codepoints":[10905],"characters":"\u2A99"},"&Element;":{"codepoints":[8712],"characters":"\u2208"},"&elinters;":{"codepoints":[9191],"characters":"\u23E7"},"&ell;":{"codepoints":[8467],"characters":"\u2113"},"&els;":{"codepoints":[10901],"characters":"\u2A95"},"&elsdot;":{"codepoints":[10903],"characters":"\u2A97"},"&Emacr;":{"codepoints":[274],"characters":"\u0112"},"&emacr;":{"codepoints":[275],"characters":"\u0113"},"&empty;":{"codepoints":[8709],"characters":"\u2205"},"&emptyset;":{"codepoints":[8709],"characters":"\u2205"},"&EmptySmallSquare;":{"codepoints":[9723],"characters":"\u25FB"},"&emptyv;":{"codepoints":[8709],"characters":"\u2205"},"&EmptyVerySmallSquare;":{"codepoints":[9643],"characters":"\u25AB"},"&emsp13;":{"codepoints":[8196],"characters":"\u2004"},"&emsp14;":{"codepoints":[8197],"characters":"\u2005"},"&emsp;":{"codepoints":[8195],"characters":"\u2003"},"&ENG;":{"codepoints":[330],"characters":"\u014A"},"&eng;":{"codepoints":[331],"characters":"\u014B"},"&ensp;":{"codepoints":[8194],"characters":"\u2002"},"&Eogon;":{"codepoints":[280],"characters":"\u0118"},"&eogon;":{"codepoints":[281],"characters":"\u0119"},"&Eopf;":{"codepoints":[120124],"characters":"\uD835\uDD3C"},"&eopf;":{"codepoints":[120150],"characters":"\uD835\uDD56"},"&epar;":{"codepoints":[8917],"characters":"\u22D5"},"&eparsl;":{"codepoints":[10723],"characters":"\u29E3"},"&eplus;":{"codepoints":[10865],"characters":"\u2A71"},"&epsi;":{"codepoints":[949],"characters":"\u03B5"},"&Epsilon;":{"codepoints":[917],"characters":"\u0395"},"&epsilon;":{"codepoints":[949],"characters":"\u03B5"},"&epsiv;":{"codepoints":[1013],"characters":"\u03F5"},"&eqcirc;":{"codepoints":[8790],"characters":"\u2256"},"&eqcolon;":{"codepoints":[8789],"characters":"\u2255"},"&eqsim;":{"codepoints":[8770],"characters":"\u2242"},"&eqslantgtr;":{"codepoints":[10902],"characters":"\u2A96"},"&eqslantless;":{"codepoints":[10901],"characters":"\u2A95"},"&Equal;":{"codepoints":[10869],"characters":"\u2A75"},"&equals;":{"codepoints":[61],"characters":"="},"&EqualTilde;":{"codepoints":[8770],"characters":"\u2242"},"&equest;":{"codepoints":[8799],"characters":"\u225F"},"&Equilibrium;":{"codepoints":[8652],"characters":"\u21CC"},"&equiv;":{"codepoints":[8801],"characters":"\u2261"},"&equivDD;":{"codepoints":[10872],"characters":"\u2A78"},"&eqvparsl;":{"codepoints":[10725],"characters":"\u29E5"},"&erarr;":{"codepoints":[10609],"characters":"\u2971"},"&erDot;":{"codepoints":[8787],"characters":"\u2253"},"&escr;":{"codepoints":[8495],"characters":"\u212F"},"&Escr;":{"codepoints":[8496],"characters":"\u2130"},"&esdot;":{"codepoints":[8784],"characters":"\u2250"},"&Esim;":{"codepoints":[10867],"characters":"\u2A73"},"&esim;":{"codepoints":[8770],"characters":"\u2242"},"&Eta;":{"codepoints":[919],"characters":"\u0397"},"&eta;":{"codepoints":[951],"characters":"\u03B7"},"&ETH;":{"codepoints":[208],"characters":"\xD0"},"&ETH":{"codepoints":[208],"characters":"\xD0"},"&eth;":{"codepoints":[240],"characters":"\xF0"},"&eth":{"codepoints":[240],"characters":"\xF0"},"&Euml;":{"codepoints":[203],"characters":"\xCB"},"&Euml":{"codepoints":[203],"characters":"\xCB"},"&euml;":{"codepoints":[235],"characters":"\xEB"},"&euml":{"codepoints":[235],"characters":"\xEB"},"&euro;":{"codepoints":[8364],"characters":"\u20AC"},"&excl;":{"codepoints":[33],"characters":"!"},"&exist;":{"codepoints":[8707],"characters":"\u2203"},"&Exists;":{"codepoints":[8707],"characters":"\u2203"},"&expectation;":{"codepoints":[8496],"characters":"\u2130"},"&exponentiale;":{"codepoints":[8519],"characters":"\u2147"},"&ExponentialE;":{"codepoints":[8519],"characters":"\u2147"},"&fallingdotseq;":{"codepoints":[8786],"characters":"\u2252"},"&Fcy;":{"codepoints":[1060],"characters":"\u0424"},"&fcy;":{"codepoints":[1092],"characters":"\u0444"},"&female;":{"codepoints":[9792],"characters":"\u2640"},"&ffilig;":{"codepoints":[64259],"characters":"\uFB03"},"&fflig;":{"codepoints":[64256],"characters":"\uFB00"},"&ffllig;":{"codepoints":[64260],"characters":"\uFB04"},"&Ffr;":{"codepoints":[120073],"characters":"\uD835\uDD09"},"&ffr;":{"codepoints":[120099],"characters":"\uD835\uDD23"},"&filig;":{"codepoints":[64257],"characters":"\uFB01"},"&FilledSmallSquare;":{"codepoints":[9724],"characters":"\u25FC"},"&FilledVerySmallSquare;":{"codepoints":[9642],"characters":"\u25AA"},"&fjlig;":{"codepoints":[102,106],"characters":"fj"},"&flat;":{"codepoints":[9837],"characters":"\u266D"},"&fllig;":{"codepoints":[64258],"characters":"\uFB02"},"&fltns;":{"codepoints":[9649],"characters":"\u25B1"},"&fnof;":{"codepoints":[402],"characters":"\u0192"},"&Fopf;":{"codepoints":[120125],"characters":"\uD835\uDD3D"},"&fopf;":{"codepoints":[120151],"characters":"\uD835\uDD57"},"&forall;":{"codepoints":[8704],"characters":"\u2200"},"&ForAll;":{"codepoints":[8704],"characters":"\u2200"},"&fork;":{"codepoints":[8916],"characters":"\u22D4"},"&forkv;":{"codepoints":[10969],"characters":"\u2AD9"},"&Fouriertrf;":{"codepoints":[8497],"characters":"\u2131"},"&fpartint;":{"codepoints":[10765],"characters":"\u2A0D"},"&frac12;":{"codepoints":[189],"characters":"\xBD"},"&frac12":{"codepoints":[189],"characters":"\xBD"},"&frac13;":{"codepoints":[8531],"characters":"\u2153"},"&frac14;":{"codepoints":[188],"characters":"\xBC"},"&frac14":{"codepoints":[188],"characters":"\xBC"},"&frac15;":{"codepoints":[8533],"characters":"\u2155"},"&frac16;":{"codepoints":[8537],"characters":"\u2159"},"&frac18;":{"codepoints":[8539],"characters":"\u215B"},"&frac23;":{"codepoints":[8532],"characters":"\u2154"},"&frac25;":{"codepoints":[8534],"characters":"\u2156"},"&frac34;":{"codepoints":[190],"characters":"\xBE"},"&frac34":{"codepoints":[190],"characters":"\xBE"},"&frac35;":{"codepoints":[8535],"characters":"\u2157"},"&frac38;":{"codepoints":[8540],"characters":"\u215C"},"&frac45;":{"codepoints":[8536],"characters":"\u2158"},"&frac56;":{"codepoints":[8538],"characters":"\u215A"},"&frac58;":{"codepoints":[8541],"characters":"\u215D"},"&frac78;":{"codepoints":[8542],"characters":"\u215E"},"&frasl;":{"codepoints":[8260],"characters":"\u2044"},"&frown;":{"codepoints":[8994],"characters":"\u2322"},"&fscr;":{"codepoints":[119995],"characters":"\uD835\uDCBB"},"&Fscr;":{"codepoints":[8497],"characters":"\u2131"},"&gacute;":{"codepoints":[501],"characters":"\u01F5"},"&Gamma;":{"codepoints":[915],"characters":"\u0393"},"&gamma;":{"codepoints":[947],"characters":"\u03B3"},"&Gammad;":{"codepoints":[988],"characters":"\u03DC"},"&gammad;":{"codepoints":[989],"characters":"\u03DD"},"&gap;":{"codepoints":[10886],"characters":"\u2A86"},"&Gbreve;":{"codepoints":[286],"characters":"\u011E"},"&gbreve;":{"codepoints":[287],"characters":"\u011F"},"&Gcedil;":{"codepoints":[290],"characters":"\u0122"},"&Gcirc;":{"codepoints":[284],"characters":"\u011C"},"&gcirc;":{"codepoints":[285],"characters":"\u011D"},"&Gcy;":{"codepoints":[1043],"characters":"\u0413"},"&gcy;":{"codepoints":[1075],"characters":"\u0433"},"&Gdot;":{"codepoints":[288],"characters":"\u0120"},"&gdot;":{"codepoints":[289],"characters":"\u0121"},"&ge;":{"codepoints":[8805],"characters":"\u2265"},"&gE;":{"codepoints":[8807],"characters":"\u2267"},"&gEl;":{"codepoints":[10892],"characters":"\u2A8C"},"&gel;":{"codepoints":[8923],"characters":"\u22DB"},"&geq;":{"codepoints":[8805],"characters":"\u2265"},"&geqq;":{"codepoints":[8807],"characters":"\u2267"},"&geqslant;":{"codepoints":[10878],"characters":"\u2A7E"},"&gescc;":{"codepoints":[10921],"characters":"\u2AA9"},"&ges;":{"codepoints":[10878],"characters":"\u2A7E"},"&gesdot;":{"codepoints":[10880],"characters":"\u2A80"},"&gesdoto;":{"codepoints":[10882],"characters":"\u2A82"},"&gesdotol;":{"codepoints":[10884],"characters":"\u2A84"},"&gesl;":{"codepoints":[8923,65024],"characters":"\u22DB\uFE00"},"&gesles;":{"codepoints":[10900],"characters":"\u2A94"},"&Gfr;":{"codepoints":[120074],"characters":"\uD835\uDD0A"},"&gfr;":{"codepoints":[120100],"characters":"\uD835\uDD24"},"&gg;":{"codepoints":[8811],"characters":"\u226B"},"&Gg;":{"codepoints":[8921],"characters":"\u22D9"},"&ggg;":{"codepoints":[8921],"characters":"\u22D9"},"&gimel;":{"codepoints":[8503],"characters":"\u2137"},"&GJcy;":{"codepoints":[1027],"characters":"\u0403"},"&gjcy;":{"codepoints":[1107],"characters":"\u0453"},"&gla;":{"codepoints":[10917],"characters":"\u2AA5"},"&gl;":{"codepoints":[8823],"characters":"\u2277"},"&glE;":{"codepoints":[10898],"characters":"\u2A92"},"&glj;":{"codepoints":[10916],"characters":"\u2AA4"},"&gnap;":{"codepoints":[10890],"characters":"\u2A8A"},"&gnapprox;":{"codepoints":[10890],"characters":"\u2A8A"},"&gne;":{"codepoints":[10888],"characters":"\u2A88"},"&gnE;":{"codepoints":[8809],"characters":"\u2269"},"&gneq;":{"codepoints":[10888],"characters":"\u2A88"},"&gneqq;":{"codepoints":[8809],"characters":"\u2269"},"&gnsim;":{"codepoints":[8935],"characters":"\u22E7"},"&Gopf;":{"codepoints":[120126],"characters":"\uD835\uDD3E"},"&gopf;":{"codepoints":[120152],"characters":"\uD835\uDD58"},"&grave;":{"codepoints":[96],"characters":"`"},"&GreaterEqual;":{"codepoints":[8805],"characters":"\u2265"},"&GreaterEqualLess;":{"codepoints":[8923],"characters":"\u22DB"},"&GreaterFullEqual;":{"codepoints":[8807],"characters":"\u2267"},"&GreaterGreater;":{"codepoints":[10914],"characters":"\u2AA2"},"&GreaterLess;":{"codepoints":[8823],"characters":"\u2277"},"&GreaterSlantEqual;":{"codepoints":[10878],"characters":"\u2A7E"},"&GreaterTilde;":{"codepoints":[8819],"characters":"\u2273"},"&Gscr;":{"codepoints":[119970],"characters":"\uD835\uDCA2"},"&gscr;":{"codepoints":[8458],"characters":"\u210A"},"&gsim;":{"codepoints":[8819],"characters":"\u2273"},"&gsime;":{"codepoints":[10894],"characters":"\u2A8E"},"&gsiml;":{"codepoints":[10896],"characters":"\u2A90"},"&gtcc;":{"codepoints":[10919],"characters":"\u2AA7"},"&gtcir;":{"codepoints":[10874],"characters":"\u2A7A"},"&gt;":{"codepoints":[62],"characters":">"},"&gt":{"codepoints":[62],"characters":">"},"&GT;":{"codepoints":[62],"characters":">"},"&GT":{"codepoints":[62],"characters":">"},"&Gt;":{"codepoints":[8811],"characters":"\u226B"},"&gtdot;":{"codepoints":[8919],"characters":"\u22D7"},"&gtlPar;":{"codepoints":[10645],"characters":"\u2995"},"&gtquest;":{"codepoints":[10876],"characters":"\u2A7C"},"&gtrapprox;":{"codepoints":[10886],"characters":"\u2A86"},"&gtrarr;":{"codepoints":[10616],"characters":"\u2978"},"&gtrdot;":{"codepoints":[8919],"characters":"\u22D7"},"&gtreqless;":{"codepoints":[8923],"characters":"\u22DB"},"&gtreqqless;":{"codepoints":[10892],"characters":"\u2A8C"},"&gtrless;":{"codepoints":[8823],"characters":"\u2277"},"&gtrsim;":{"codepoints":[8819],"characters":"\u2273"},"&gvertneqq;":{"codepoints":[8809,65024],"characters":"\u2269\uFE00"},"&gvnE;":{"codepoints":[8809,65024],"characters":"\u2269\uFE00"},"&Hacek;":{"codepoints":[711],"characters":"\u02C7"},"&hairsp;":{"codepoints":[8202],"characters":"\u200A"},"&half;":{"codepoints":[189],"characters":"\xBD"},"&hamilt;":{"codepoints":[8459],"characters":"\u210B"},"&HARDcy;":{"codepoints":[1066],"characters":"\u042A"},"&hardcy;":{"codepoints":[1098],"characters":"\u044A"},"&harrcir;":{"codepoints":[10568],"characters":"\u2948"},"&harr;":{"codepoints":[8596],"characters":"\u2194"},"&hArr;":{"codepoints":[8660],"characters":"\u21D4"},"&harrw;":{"codepoints":[8621],"characters":"\u21AD"},"&Hat;":{"codepoints":[94],"characters":"^"},"&hbar;":{"codepoints":[8463],"characters":"\u210F"},"&Hcirc;":{"codepoints":[292],"characters":"\u0124"},"&hcirc;":{"codepoints":[293],"characters":"\u0125"},"&hearts;":{"codepoints":[9829],"characters":"\u2665"},"&heartsuit;":{"codepoints":[9829],"characters":"\u2665"},"&hellip;":{"codepoints":[8230],"characters":"\u2026"},"&hercon;":{"codepoints":[8889],"characters":"\u22B9"},"&hfr;":{"codepoints":[120101],"characters":"\uD835\uDD25"},"&Hfr;":{"codepoints":[8460],"characters":"\u210C"},"&HilbertSpace;":{"codepoints":[8459],"characters":"\u210B"},"&hksearow;":{"codepoints":[10533],"characters":"\u2925"},"&hkswarow;":{"codepoints":[10534],"characters":"\u2926"},"&hoarr;":{"codepoints":[8703],"characters":"\u21FF"},"&homtht;":{"codepoints":[8763],"characters":"\u223B"},"&hookleftarrow;":{"codepoints":[8617],"characters":"\u21A9"},"&hookrightarrow;":{"codepoints":[8618],"characters":"\u21AA"},"&hopf;":{"codepoints":[120153],"characters":"\uD835\uDD59"},"&Hopf;":{"codepoints":[8461],"characters":"\u210D"},"&horbar;":{"codepoints":[8213],"characters":"\u2015"},"&HorizontalLine;":{"codepoints":[9472],"characters":"\u2500"},"&hscr;":{"codepoints":[119997],"characters":"\uD835\uDCBD"},"&Hscr;":{"codepoints":[8459],"characters":"\u210B"},"&hslash;":{"codepoints":[8463],"characters":"\u210F"},"&Hstrok;":{"codepoints":[294],"characters":"\u0126"},"&hstrok;":{"codepoints":[295],"characters":"\u0127"},"&HumpDownHump;":{"codepoints":[8782],"characters":"\u224E"},"&HumpEqual;":{"codepoints":[8783],"characters":"\u224F"},"&hybull;":{"codepoints":[8259],"characters":"\u2043"},"&hyphen;":{"codepoints":[8208],"characters":"\u2010"},"&Iacute;":{"codepoints":[205],"characters":"\xCD"},"&Iacute":{"codepoints":[205],"characters":"\xCD"},"&iacute;":{"codepoints":[237],"characters":"\xED"},"&iacute":{"codepoints":[237],"characters":"\xED"},"&ic;":{"codepoints":[8291],"characters":"\u2063"},"&Icirc;":{"codepoints":[206],"characters":"\xCE"},"&Icirc":{"codepoints":[206],"characters":"\xCE"},"&icirc;":{"codepoints":[238],"characters":"\xEE"},"&icirc":{"codepoints":[238],"characters":"\xEE"},"&Icy;":{"codepoints":[1048],"characters":"\u0418"},"&icy;":{"codepoints":[1080],"characters":"\u0438"},"&Idot;":{"codepoints":[304],"characters":"\u0130"},"&IEcy;":{"codepoints":[1045],"characters":"\u0415"},"&iecy;":{"codepoints":[1077],"characters":"\u0435"},"&iexcl;":{"codepoints":[161],"characters":"\xA1"},"&iexcl":{"codepoints":[161],"characters":"\xA1"},"&iff;":{"codepoints":[8660],"characters":"\u21D4"},"&ifr;":{"codepoints":[120102],"characters":"\uD835\uDD26"},"&Ifr;":{"codepoints":[8465],"characters":"\u2111"},"&Igrave;":{"codepoints":[204],"characters":"\xCC"},"&Igrave":{"codepoints":[204],"characters":"\xCC"},"&igrave;":{"codepoints":[236],"characters":"\xEC"},"&igrave":{"codepoints":[236],"characters":"\xEC"},"&ii;":{"codepoints":[8520],"characters":"\u2148"},"&iiiint;":{"codepoints":[10764],"characters":"\u2A0C"},"&iiint;":{"codepoints":[8749],"characters":"\u222D"},"&iinfin;":{"codepoints":[10716],"characters":"\u29DC"},"&iiota;":{"codepoints":[8489],"characters":"\u2129"},"&IJlig;":{"codepoints":[306],"characters":"\u0132"},"&ijlig;":{"codepoints":[307],"characters":"\u0133"},"&Imacr;":{"codepoints":[298],"characters":"\u012A"},"&imacr;":{"codepoints":[299],"characters":"\u012B"},"&image;":{"codepoints":[8465],"characters":"\u2111"},"&ImaginaryI;":{"codepoints":[8520],"characters":"\u2148"},"&imagline;":{"codepoints":[8464],"characters":"\u2110"},"&imagpart;":{"codepoints":[8465],"characters":"\u2111"},"&imath;":{"codepoints":[305],"characters":"\u0131"},"&Im;":{"codepoints":[8465],"characters":"\u2111"},"&imof;":{"codepoints":[8887],"characters":"\u22B7"},"&imped;":{"codepoints":[437],"characters":"\u01B5"},"&Implies;":{"codepoints":[8658],"characters":"\u21D2"},"&incare;":{"codepoints":[8453],"characters":"\u2105"},"&in;":{"codepoints":[8712],"characters":"\u2208"},"&infin;":{"codepoints":[8734],"characters":"\u221E"},"&infintie;":{"codepoints":[10717],"characters":"\u29DD"},"&inodot;":{"codepoints":[305],"characters":"\u0131"},"&intcal;":{"codepoints":[8890],"characters":"\u22BA"},"&int;":{"codepoints":[8747],"characters":"\u222B"},"&Int;":{"codepoints":[8748],"characters":"\u222C"},"&integers;":{"codepoints":[8484],"characters":"\u2124"},"&Integral;":{"codepoints":[8747],"characters":"\u222B"},"&intercal;":{"codepoints":[8890],"characters":"\u22BA"},"&Intersection;":{"codepoints":[8898],"characters":"\u22C2"},"&intlarhk;":{"codepoints":[10775],"characters":"\u2A17"},"&intprod;":{"codepoints":[10812],"characters":"\u2A3C"},"&InvisibleComma;":{"codepoints":[8291],"characters":"\u2063"},"&InvisibleTimes;":{"codepoints":[8290],"characters":"\u2062"},"&IOcy;":{"codepoints":[1025],"characters":"\u0401"},"&iocy;":{"codepoints":[1105],"characters":"\u0451"},"&Iogon;":{"codepoints":[302],"characters":"\u012E"},"&iogon;":{"codepoints":[303],"characters":"\u012F"},"&Iopf;":{"codepoints":[120128],"characters":"\uD835\uDD40"},"&iopf;":{"codepoints":[120154],"characters":"\uD835\uDD5A"},"&Iota;":{"codepoints":[921],"characters":"\u0399"},"&iota;":{"codepoints":[953],"characters":"\u03B9"},"&iprod;":{"codepoints":[10812],"characters":"\u2A3C"},"&iquest;":{"codepoints":[191],"characters":"\xBF"},"&iquest":{"codepoints":[191],"characters":"\xBF"},"&iscr;":{"codepoints":[119998],"characters":"\uD835\uDCBE"},"&Iscr;":{"codepoints":[8464],"characters":"\u2110"},"&isin;":{"codepoints":[8712],"characters":"\u2208"},"&isindot;":{"codepoints":[8949],"characters":"\u22F5"},"&isinE;":{"codepoints":[8953],"characters":"\u22F9"},"&isins;":{"codepoints":[8948],"characters":"\u22F4"},"&isinsv;":{"codepoints":[8947],"characters":"\u22F3"},"&isinv;":{"codepoints":[8712],"characters":"\u2208"},"&it;":{"codepoints":[8290],"characters":"\u2062"},"&Itilde;":{"codepoints":[296],"characters":"\u0128"},"&itilde;":{"codepoints":[297],"characters":"\u0129"},"&Iukcy;":{"codepoints":[1030],"characters":"\u0406"},"&iukcy;":{"codepoints":[1110],"characters":"\u0456"},"&Iuml;":{"codepoints":[207],"characters":"\xCF"},"&Iuml":{"codepoints":[207],"characters":"\xCF"},"&iuml;":{"codepoints":[239],"characters":"\xEF"},"&iuml":{"codepoints":[239],"characters":"\xEF"},"&Jcirc;":{"codepoints":[308],"characters":"\u0134"},"&jcirc;":{"codepoints":[309],"characters":"\u0135"},"&Jcy;":{"codepoints":[1049],"characters":"\u0419"},"&jcy;":{"codepoints":[1081],"characters":"\u0439"},"&Jfr;":{"codepoints":[120077],"characters":"\uD835\uDD0D"},"&jfr;":{"codepoints":[120103],"characters":"\uD835\uDD27"},"&jmath;":{"codepoints":[567],"characters":"\u0237"},"&Jopf;":{"codepoints":[120129],"characters":"\uD835\uDD41"},"&jopf;":{"codepoints":[120155],"characters":"\uD835\uDD5B"},"&Jscr;":{"codepoints":[119973],"characters":"\uD835\uDCA5"},"&jscr;":{"codepoints":[119999],"characters":"\uD835\uDCBF"},"&Jsercy;":{"codepoints":[1032],"characters":"\u0408"},"&jsercy;":{"codepoints":[1112],"characters":"\u0458"},"&Jukcy;":{"codepoints":[1028],"characters":"\u0404"},"&jukcy;":{"codepoints":[1108],"characters":"\u0454"},"&Kappa;":{"codepoints":[922],"characters":"\u039A"},"&kappa;":{"codepoints":[954],"characters":"\u03BA"},"&kappav;":{"codepoints":[1008],"characters":"\u03F0"},"&Kcedil;":{"codepoints":[310],"characters":"\u0136"},"&kcedil;":{"codepoints":[311],"characters":"\u0137"},"&Kcy;":{"codepoints":[1050],"characters":"\u041A"},"&kcy;":{"codepoints":[1082],"characters":"\u043A"},"&Kfr;":{"codepoints":[120078],"characters":"\uD835\uDD0E"},"&kfr;":{"codepoints":[120104],"characters":"\uD835\uDD28"},"&kgreen;":{"codepoints":[312],"characters":"\u0138"},"&KHcy;":{"codepoints":[1061],"characters":"\u0425"},"&khcy;":{"codepoints":[1093],"characters":"\u0445"},"&KJcy;":{"codepoints":[1036],"characters":"\u040C"},"&kjcy;":{"codepoints":[1116],"characters":"\u045C"},"&Kopf;":{"codepoints":[120130],"characters":"\uD835\uDD42"},"&kopf;":{"codepoints":[120156],"characters":"\uD835\uDD5C"},"&Kscr;":{"codepoints":[119974],"characters":"\uD835\uDCA6"},"&kscr;":{"codepoints":[120000],"characters":"\uD835\uDCC0"},"&lAarr;":{"codepoints":[8666],"characters":"\u21DA"},"&Lacute;":{"codepoints":[313],"characters":"\u0139"},"&lacute;":{"codepoints":[314],"characters":"\u013A"},"&laemptyv;":{"codepoints":[10676],"characters":"\u29B4"},"&lagran;":{"codepoints":[8466],"characters":"\u2112"},"&Lambda;":{"codepoints":[923],"characters":"\u039B"},"&lambda;":{"codepoints":[955],"characters":"\u03BB"},"&lang;":{"codepoints":[10216],"characters":"\u27E8"},"&Lang;":{"codepoints":[10218],"characters":"\u27EA"},"&langd;":{"codepoints":[10641],"characters":"\u2991"},"&langle;":{"codepoints":[10216],"characters":"\u27E8"},"&lap;":{"codepoints":[10885],"characters":"\u2A85"},"&Laplacetrf;":{"codepoints":[8466],"characters":"\u2112"},"&laquo;":{"codepoints":[171],"characters":"\xAB"},"&laquo":{"codepoints":[171],"characters":"\xAB"},"&larrb;":{"codepoints":[8676],"characters":"\u21E4"},"&larrbfs;":{"codepoints":[10527],"characters":"\u291F"},"&larr;":{"codepoints":[8592],"characters":"\u2190"},"&Larr;":{"codepoints":[8606],"characters":"\u219E"},"&lArr;":{"codepoints":[8656],"characters":"\u21D0"},"&larrfs;":{"codepoints":[10525],"characters":"\u291D"},"&larrhk;":{"codepoints":[8617],"characters":"\u21A9"},"&larrlp;":{"codepoints":[8619],"characters":"\u21AB"},"&larrpl;":{"codepoints":[10553],"characters":"\u2939"},"&larrsim;":{"codepoints":[10611],"characters":"\u2973"},"&larrtl;":{"codepoints":[8610],"characters":"\u21A2"},"&latail;":{"codepoints":[10521],"characters":"\u2919"},"&lAtail;":{"codepoints":[10523],"characters":"\u291B"},"&lat;":{"codepoints":[10923],"characters":"\u2AAB"},"&late;":{"codepoints":[10925],"characters":"\u2AAD"},"&lates;":{"codepoints":[10925,65024],"characters":"\u2AAD\uFE00"},"&lbarr;":{"codepoints":[10508],"characters":"\u290C"},"&lBarr;":{"codepoints":[10510],"characters":"\u290E"},"&lbbrk;":{"codepoints":[10098],"characters":"\u2772"},"&lbrace;":{"codepoints":[123],"characters":"{"},"&lbrack;":{"codepoints":[91],"characters":"["},"&lbrke;":{"codepoints":[10635],"characters":"\u298B"},"&lbrksld;":{"codepoints":[10639],"characters":"\u298F"},"&lbrkslu;":{"codepoints":[10637],"characters":"\u298D"},"&Lcaron;":{"codepoints":[317],"characters":"\u013D"},"&lcaron;":{"codepoints":[318],"characters":"\u013E"},"&Lcedil;":{"codepoints":[315],"characters":"\u013B"},"&lcedil;":{"codepoints":[316],"characters":"\u013C"},"&lceil;":{"codepoints":[8968],"characters":"\u2308"},"&lcub;":{"codepoints":[123],"characters":"{"},"&Lcy;":{"codepoints":[1051],"characters":"\u041B"},"&lcy;":{"codepoints":[1083],"characters":"\u043B"},"&ldca;":{"codepoints":[10550],"characters":"\u2936"},"&ldquo;":{"codepoints":[8220],"characters":"\u201C"},"&ldquor;":{"codepoints":[8222],"characters":"\u201E"},"&ldrdhar;":{"codepoints":[10599],"characters":"\u2967"},"&ldrushar;":{"codepoints":[10571],"characters":"\u294B"},"&ldsh;":{"codepoints":[8626],"characters":"\u21B2"},"&le;":{"codepoints":[8804],"characters":"\u2264"},"&lE;":{"codepoints":[8806],"characters":"\u2266"},"&LeftAngleBracket;":{"codepoints":[10216],"characters":"\u27E8"},"&LeftArrowBar;":{"codepoints":[8676],"characters":"\u21E4"},"&leftarrow;":{"codepoints":[8592],"characters":"\u2190"},"&LeftArrow;":{"codepoints":[8592],"characters":"\u2190"},"&Leftarrow;":{"codepoints":[8656],"characters":"\u21D0"},"&LeftArrowRightArrow;":{"codepoints":[8646],"characters":"\u21C6"},"&leftarrowtail;":{"codepoints":[8610],"characters":"\u21A2"},"&LeftCeiling;":{"codepoints":[8968],"characters":"\u2308"},"&LeftDoubleBracket;":{"codepoints":[10214],"characters":"\u27E6"},"&LeftDownTeeVector;":{"codepoints":[10593],"characters":"\u2961"},"&LeftDownVectorBar;":{"codepoints":[10585],"characters":"\u2959"},"&LeftDownVector;":{"codepoints":[8643],"characters":"\u21C3"},"&LeftFloor;":{"codepoints":[8970],"characters":"\u230A"},"&leftharpoondown;":{"codepoints":[8637],"characters":"\u21BD"},"&leftharpoonup;":{"codepoints":[8636],"characters":"\u21BC"},"&leftleftarrows;":{"codepoints":[8647],"characters":"\u21C7"},"&leftrightarrow;":{"codepoints":[8596],"characters":"\u2194"},"&LeftRightArrow;":{"codepoints":[8596],"characters":"\u2194"},"&Leftrightarrow;":{"codepoints":[8660],"characters":"\u21D4"},"&leftrightarrows;":{"codepoints":[8646],"characters":"\u21C6"},"&leftrightharpoons;":{"codepoints":[8651],"characters":"\u21CB"},"&leftrightsquigarrow;":{"codepoints":[8621],"characters":"\u21AD"},"&LeftRightVector;":{"codepoints":[10574],"characters":"\u294E"},"&LeftTeeArrow;":{"codepoints":[8612],"characters":"\u21A4"},"&LeftTee;":{"codepoints":[8867],"characters":"\u22A3"},"&LeftTeeVector;":{"codepoints":[10586],"characters":"\u295A"},"&leftthreetimes;":{"codepoints":[8907],"characters":"\u22CB"},"&LeftTriangleBar;":{"codepoints":[10703],"characters":"\u29CF"},"&LeftTriangle;":{"codepoints":[8882],"characters":"\u22B2"},"&LeftTriangleEqual;":{"codepoints":[8884],"characters":"\u22B4"},"&LeftUpDownVector;":{"codepoints":[10577],"characters":"\u2951"},"&LeftUpTeeVector;":{"codepoints":[10592],"characters":"\u2960"},"&LeftUpVectorBar;":{"codepoints":[10584],"characters":"\u2958"},"&LeftUpVector;":{"codepoints":[8639],"characters":"\u21BF"},"&LeftVectorBar;":{"codepoints":[10578],"characters":"\u2952"},"&LeftVector;":{"codepoints":[8636],"characters":"\u21BC"},"&lEg;":{"codepoints":[10891],"characters":"\u2A8B"},"&leg;":{"codepoints":[8922],"characters":"\u22DA"},"&leq;":{"codepoints":[8804],"characters":"\u2264"},"&leqq;":{"codepoints":[8806],"characters":"\u2266"},"&leqslant;":{"codepoints":[10877],"characters":"\u2A7D"},"&lescc;":{"codepoints":[10920],"characters":"\u2AA8"},"&les;":{"codepoints":[10877],"characters":"\u2A7D"},"&lesdot;":{"codepoints":[10879],"characters":"\u2A7F"},"&lesdoto;":{"codepoints":[10881],"characters":"\u2A81"},"&lesdotor;":{"codepoints":[10883],"characters":"\u2A83"},"&lesg;":{"codepoints":[8922,65024],"characters":"\u22DA\uFE00"},"&lesges;":{"codepoints":[10899],"characters":"\u2A93"},"&lessapprox;":{"codepoints":[10885],"characters":"\u2A85"},"&lessdot;":{"codepoints":[8918],"characters":"\u22D6"},"&lesseqgtr;":{"codepoints":[8922],"characters":"\u22DA"},"&lesseqqgtr;":{"codepoints":[10891],"characters":"\u2A8B"},"&LessEqualGreater;":{"codepoints":[8922],"characters":"\u22DA"},"&LessFullEqual;":{"codepoints":[8806],"characters":"\u2266"},"&LessGreater;":{"codepoints":[8822],"characters":"\u2276"},"&lessgtr;":{"codepoints":[8822],"characters":"\u2276"},"&LessLess;":{"codepoints":[10913],"characters":"\u2AA1"},"&lesssim;":{"codepoints":[8818],"characters":"\u2272"},"&LessSlantEqual;":{"codepoints":[10877],"characters":"\u2A7D"},"&LessTilde;":{"codepoints":[8818],"characters":"\u2272"},"&lfisht;":{"codepoints":[10620],"characters":"\u297C"},"&lfloor;":{"codepoints":[8970],"characters":"\u230A"},"&Lfr;":{"codepoints":[120079],"characters":"\uD835\uDD0F"},"&lfr;":{"codepoints":[120105],"characters":"\uD835\uDD29"},"&lg;":{"codepoints":[8822],"characters":"\u2276"},"&lgE;":{"codepoints":[10897],"characters":"\u2A91"},"&lHar;":{"codepoints":[10594],"characters":"\u2962"},"&lhard;":{"codepoints":[8637],"characters":"\u21BD"},"&lharu;":{"codepoints":[8636],"characters":"\u21BC"},"&lharul;":{"codepoints":[10602],"characters":"\u296A"},"&lhblk;":{"codepoints":[9604],"characters":"\u2584"},"&LJcy;":{"codepoints":[1033],"characters":"\u0409"},"&ljcy;":{"codepoints":[1113],"characters":"\u0459"},"&llarr;":{"codepoints":[8647],"characters":"\u21C7"},"&ll;":{"codepoints":[8810],"characters":"\u226A"},"&Ll;":{"codepoints":[8920],"characters":"\u22D8"},"&llcorner;":{"codepoints":[8990],"characters":"\u231E"},"&Lleftarrow;":{"codepoints":[8666],"characters":"\u21DA"},"&llhard;":{"codepoints":[10603],"characters":"\u296B"},"&lltri;":{"codepoints":[9722],"characters":"\u25FA"},"&Lmidot;":{"codepoints":[319],"characters":"\u013F"},"&lmidot;":{"codepoints":[320],"characters":"\u0140"},"&lmoustache;":{"codepoints":[9136],"characters":"\u23B0"},"&lmoust;":{"codepoints":[9136],"characters":"\u23B0"},"&lnap;":{"codepoints":[10889],"characters":"\u2A89"},"&lnapprox;":{"codepoints":[10889],"characters":"\u2A89"},"&lne;":{"codepoints":[10887],"characters":"\u2A87"},"&lnE;":{"codepoints":[8808],"characters":"\u2268"},"&lneq;":{"codepoints":[10887],"characters":"\u2A87"},"&lneqq;":{"codepoints":[8808],"characters":"\u2268"},"&lnsim;":{"codepoints":[8934],"characters":"\u22E6"},"&loang;":{"codepoints":[10220],"characters":"\u27EC"},"&loarr;":{"codepoints":[8701],"characters":"\u21FD"},"&lobrk;":{"codepoints":[10214],"characters":"\u27E6"},"&longleftarrow;":{"codepoints":[10229],"characters":"\u27F5"},"&LongLeftArrow;":{"codepoints":[10229],"characters":"\u27F5"},"&Longleftarrow;":{"codepoints":[10232],"characters":"\u27F8"},"&longleftrightarrow;":{"codepoints":[10231],"characters":"\u27F7"},"&LongLeftRightArrow;":{"codepoints":[10231],"characters":"\u27F7"},"&Longleftrightarrow;":{"codepoints":[10234],"characters":"\u27FA"},"&longmapsto;":{"codepoints":[10236],"characters":"\u27FC"},"&longrightarrow;":{"codepoints":[10230],"characters":"\u27F6"},"&LongRightArrow;":{"codepoints":[10230],"characters":"\u27F6"},"&Longrightarrow;":{"codepoints":[10233],"characters":"\u27F9"},"&looparrowleft;":{"codepoints":[8619],"characters":"\u21AB"},"&looparrowright;":{"codepoints":[8620],"characters":"\u21AC"},"&lopar;":{"codepoints":[10629],"characters":"\u2985"},"&Lopf;":{"codepoints":[120131],"characters":"\uD835\uDD43"},"&lopf;":{"codepoints":[120157],"characters":"\uD835\uDD5D"},"&loplus;":{"codepoints":[10797],"characters":"\u2A2D"},"&lotimes;":{"codepoints":[10804],"characters":"\u2A34"},"&lowast;":{"codepoints":[8727],"characters":"\u2217"},"&lowbar;":{"codepoints":[95],"characters":"_"},"&LowerLeftArrow;":{"codepoints":[8601],"characters":"\u2199"},"&LowerRightArrow;":{"codepoints":[8600],"characters":"\u2198"},"&loz;":{"codepoints":[9674],"characters":"\u25CA"},"&lozenge;":{"codepoints":[9674],"characters":"\u25CA"},"&lozf;":{"codepoints":[10731],"characters":"\u29EB"},"&lpar;":{"codepoints":[40],"characters":"("},"&lparlt;":{"codepoints":[10643],"characters":"\u2993"},"&lrarr;":{"codepoints":[8646],"characters":"\u21C6"},"&lrcorner;":{"codepoints":[8991],"characters":"\u231F"},"&lrhar;":{"codepoints":[8651],"characters":"\u21CB"},"&lrhard;":{"codepoints":[10605],"characters":"\u296D"},"&lrm;":{"codepoints":[8206],"characters":"\u200E"},"&lrtri;":{"codepoints":[8895],"characters":"\u22BF"},"&lsaquo;":{"codepoints":[8249],"characters":"\u2039"},"&lscr;":{"codepoints":[120001],"characters":"\uD835\uDCC1"},"&Lscr;":{"codepoints":[8466],"characters":"\u2112"},"&lsh;":{"codepoints":[8624],"characters":"\u21B0"},"&Lsh;":{"codepoints":[8624],"characters":"\u21B0"},"&lsim;":{"codepoints":[8818],"characters":"\u2272"},"&lsime;":{"codepoints":[10893],"characters":"\u2A8D"},"&lsimg;":{"codepoints":[10895],"characters":"\u2A8F"},"&lsqb;":{"codepoints":[91],"characters":"["},"&lsquo;":{"codepoints":[8216],"characters":"\u2018"},"&lsquor;":{"codepoints":[8218],"characters":"\u201A"},"&Lstrok;":{"codepoints":[321],"characters":"\u0141"},"&lstrok;":{"codepoints":[322],"characters":"\u0142"},"&ltcc;":{"codepoints":[10918],"characters":"\u2AA6"},"&ltcir;":{"codepoints":[10873],"characters":"\u2A79"},"&lt;":{"codepoints":[60],"characters":"<"},"&lt":{"codepoints":[60],"characters":"<"},"&LT;":{"codepoints":[60],"characters":"<"},"&LT":{"codepoints":[60],"characters":"<"},"&Lt;":{"codepoints":[8810],"characters":"\u226A"},"&ltdot;":{"codepoints":[8918],"characters":"\u22D6"},"&lthree;":{"codepoints":[8907],"characters":"\u22CB"},"&ltimes;":{"codepoints":[8905],"characters":"\u22C9"},"&ltlarr;":{"codepoints":[10614],"characters":"\u2976"},"&ltquest;":{"codepoints":[10875],"characters":"\u2A7B"},"&ltri;":{"codepoints":[9667],"characters":"\u25C3"},"&ltrie;":{"codepoints":[8884],"characters":"\u22B4"},"&ltrif;":{"codepoints":[9666],"characters":"\u25C2"},"&ltrPar;":{"codepoints":[10646],"characters":"\u2996"},"&lurdshar;":{"codepoints":[10570],"characters":"\u294A"},"&luruhar;":{"codepoints":[10598],"characters":"\u2966"},"&lvertneqq;":{"codepoints":[8808,65024],"characters":"\u2268\uFE00"},"&lvnE;":{"codepoints":[8808,65024],"characters":"\u2268\uFE00"},"&macr;":{"codepoints":[175],"characters":"\xAF"},"&macr":{"codepoints":[175],"characters":"\xAF"},"&male;":{"codepoints":[9794],"characters":"\u2642"},"&malt;":{"codepoints":[10016],"characters":"\u2720"},"&maltese;":{"codepoints":[10016],"characters":"\u2720"},"&Map;":{"codepoints":[10501],"characters":"\u2905"},"&map;":{"codepoints":[8614],"characters":"\u21A6"},"&mapsto;":{"codepoints":[8614],"characters":"\u21A6"},"&mapstodown;":{"codepoints":[8615],"characters":"\u21A7"},"&mapstoleft;":{"codepoints":[8612],"characters":"\u21A4"},"&mapstoup;":{"codepoints":[8613],"characters":"\u21A5"},"&marker;":{"codepoints":[9646],"characters":"\u25AE"},"&mcomma;":{"codepoints":[10793],"characters":"\u2A29"},"&Mcy;":{"codepoints":[1052],"characters":"\u041C"},"&mcy;":{"codepoints":[1084],"characters":"\u043C"},"&mdash;":{"codepoints":[8212],"characters":"\u2014"},"&mDDot;":{"codepoints":[8762],"characters":"\u223A"},"&measuredangle;":{"codepoints":[8737],"characters":"\u2221"},"&MediumSpace;":{"codepoints":[8287],"characters":"\u205F"},"&Mellintrf;":{"codepoints":[8499],"characters":"\u2133"},"&Mfr;":{"codepoints":[120080],"characters":"\uD835\uDD10"},"&mfr;":{"codepoints":[120106],"characters":"\uD835\uDD2A"},"&mho;":{"codepoints":[8487],"characters":"\u2127"},"&micro;":{"codepoints":[181],"characters":"\xB5"},"&micro":{"codepoints":[181],"characters":"\xB5"},"&midast;":{"codepoints":[42],"characters":"*"},"&midcir;":{"codepoints":[10992],"characters":"\u2AF0"},"&mid;":{"codepoints":[8739],"characters":"\u2223"},"&middot;":{"codepoints":[183],"characters":"\xB7"},"&middot":{"codepoints":[183],"characters":"\xB7"},"&minusb;":{"codepoints":[8863],"characters":"\u229F"},"&minus;":{"codepoints":[8722],"characters":"\u2212"},"&minusd;":{"codepoints":[8760],"characters":"\u2238"},"&minusdu;":{"codepoints":[10794],"characters":"\u2A2A"},"&MinusPlus;":{"codepoints":[8723],"characters":"\u2213"},"&mlcp;":{"codepoints":[10971],"characters":"\u2ADB"},"&mldr;":{"codepoints":[8230],"characters":"\u2026"},"&mnplus;":{"codepoints":[8723],"characters":"\u2213"},"&models;":{"codepoints":[8871],"characters":"\u22A7"},"&Mopf;":{"codepoints":[120132],"characters":"\uD835\uDD44"},"&mopf;":{"codepoints":[120158],"characters":"\uD835\uDD5E"},"&mp;":{"codepoints":[8723],"characters":"\u2213"},"&mscr;":{"codepoints":[120002],"characters":"\uD835\uDCC2"},"&Mscr;":{"codepoints":[8499],"characters":"\u2133"},"&mstpos;":{"codepoints":[8766],"characters":"\u223E"},"&Mu;":{"codepoints":[924],"characters":"\u039C"},"&mu;":{"codepoints":[956],"characters":"\u03BC"},"&multimap;":{"codepoints":[8888],"characters":"\u22B8"},"&mumap;":{"codepoints":[8888],"characters":"\u22B8"},"&nabla;":{"codepoints":[8711],"characters":"\u2207"},"&Nacute;":{"codepoints":[323],"characters":"\u0143"},"&nacute;":{"codepoints":[324],"characters":"\u0144"},"&nang;":{"codepoints":[8736,8402],"characters":"\u2220\u20D2"},"&nap;":{"codepoints":[8777],"characters":"\u2249"},"&napE;":{"codepoints":[10864,824],"characters":"\u2A70\u0338"},"&napid;":{"codepoints":[8779,824],"characters":"\u224B\u0338"},"&napos;":{"codepoints":[329],"characters":"\u0149"},"&napprox;":{"codepoints":[8777],"characters":"\u2249"},"&natural;":{"codepoints":[9838],"characters":"\u266E"},"&naturals;":{"codepoints":[8469],"characters":"\u2115"},"&natur;":{"codepoints":[9838],"characters":"\u266E"},"&nbsp;":{"codepoints":[160],"characters":"\xA0"},"&nbsp":{"codepoints":[160],"characters":"\xA0"},"&nbump;":{"codepoints":[8782,824],"characters":"\u224E\u0338"},"&nbumpe;":{"codepoints":[8783,824],"characters":"\u224F\u0338"},"&ncap;":{"codepoints":[10819],"characters":"\u2A43"},"&Ncaron;":{"codepoints":[327],"characters":"\u0147"},"&ncaron;":{"codepoints":[328],"characters":"\u0148"},"&Ncedil;":{"codepoints":[325],"characters":"\u0145"},"&ncedil;":{"codepoints":[326],"characters":"\u0146"},"&ncong;":{"codepoints":[8775],"characters":"\u2247"},"&ncongdot;":{"codepoints":[10861,824],"characters":"\u2A6D\u0338"},"&ncup;":{"codepoints":[10818],"characters":"\u2A42"},"&Ncy;":{"codepoints":[1053],"characters":"\u041D"},"&ncy;":{"codepoints":[1085],"characters":"\u043D"},"&ndash;":{"codepoints":[8211],"characters":"\u2013"},"&nearhk;":{"codepoints":[10532],"characters":"\u2924"},"&nearr;":{"codepoints":[8599],"characters":"\u2197"},"&neArr;":{"codepoints":[8663],"characters":"\u21D7"},"&nearrow;":{"codepoints":[8599],"characters":"\u2197"},"&ne;":{"codepoints":[8800],"characters":"\u2260"},"&nedot;":{"codepoints":[8784,824],"characters":"\u2250\u0338"},"&NegativeMediumSpace;":{"codepoints":[8203],"characters":"\u200B"},"&NegativeThickSpace;":{"codepoints":[8203],"characters":"\u200B"},"&NegativeThinSpace;":{"codepoints":[8203],"characters":"\u200B"},"&NegativeVeryThinSpace;":{"codepoints":[8203],"characters":"\u200B"},"&nequiv;":{"codepoints":[8802],"characters":"\u2262"},"&nesear;":{"codepoints":[10536],"characters":"\u2928"},"&nesim;":{"codepoints":[8770,824],"characters":"\u2242\u0338"},"&NestedGreaterGreater;":{"codepoints":[8811],"characters":"\u226B"},"&NestedLessLess;":{"codepoints":[8810],"characters":"\u226A"},"&NewLine;":{"codepoints":[10],"characters":"\n"},"&nexist;":{"codepoints":[8708],"characters":"\u2204"},"&nexists;":{"codepoints":[8708],"characters":"\u2204"},"&Nfr;":{"codepoints":[120081],"characters":"\uD835\uDD11"},"&nfr;":{"codepoints":[120107],"characters":"\uD835\uDD2B"},"&ngE;":{"codepoints":[8807,824],"characters":"\u2267\u0338"},"&nge;":{"codepoints":[8817],"characters":"\u2271"},"&ngeq;":{"codepoints":[8817],"characters":"\u2271"},"&ngeqq;":{"codepoints":[8807,824],"characters":"\u2267\u0338"},"&ngeqslant;":{"codepoints":[10878,824],"characters":"\u2A7E\u0338"},"&nges;":{"codepoints":[10878,824],"characters":"\u2A7E\u0338"},"&nGg;":{"codepoints":[8921,824],"characters":"\u22D9\u0338"},"&ngsim;":{"codepoints":[8821],"characters":"\u2275"},"&nGt;":{"codepoints":[8811,8402],"characters":"\u226B\u20D2"},"&ngt;":{"codepoints":[8815],"characters":"\u226F"},"&ngtr;":{"codepoints":[8815],"characters":"\u226F"},"&nGtv;":{"codepoints":[8811,824],"characters":"\u226B\u0338"},"&nharr;":{"codepoints":[8622],"characters":"\u21AE"},"&nhArr;":{"codepoints":[8654],"characters":"\u21CE"},"&nhpar;":{"codepoints":[10994],"characters":"\u2AF2"},"&ni;":{"codepoints":[8715],"characters":"\u220B"},"&nis;":{"codepoints":[8956],"characters":"\u22FC"},"&nisd;":{"codepoints":[8954],"characters":"\u22FA"},"&niv;":{"codepoints":[8715],"characters":"\u220B"},"&NJcy;":{"codepoints":[1034],"characters":"\u040A"},"&njcy;":{"codepoints":[1114],"characters":"\u045A"},"&nlarr;":{"codepoints":[8602],"characters":"\u219A"},"&nlArr;":{"codepoints":[8653],"characters":"\u21CD"},"&nldr;":{"codepoints":[8229],"characters":"\u2025"},"&nlE;":{"codepoints":[8806,824],"characters":"\u2266\u0338"},"&nle;":{"codepoints":[8816],"characters":"\u2270"},"&nleftarrow;":{"codepoints":[8602],"characters":"\u219A"},"&nLeftarrow;":{"codepoints":[8653],"characters":"\u21CD"},"&nleftrightarrow;":{"codepoints":[8622],"characters":"\u21AE"},"&nLeftrightarrow;":{"codepoints":[8654],"characters":"\u21CE"},"&nleq;":{"codepoints":[8816],"characters":"\u2270"},"&nleqq;":{"codepoints":[8806,824],"characters":"\u2266\u0338"},"&nleqslant;":{"codepoints":[10877,824],"characters":"\u2A7D\u0338"},"&nles;":{"codepoints":[10877,824],"characters":"\u2A7D\u0338"},"&nless;":{"codepoints":[8814],"characters":"\u226E"},"&nLl;":{"codepoints":[8920,824],"characters":"\u22D8\u0338"},"&nlsim;":{"codepoints":[8820],"characters":"\u2274"},"&nLt;":{"codepoints":[8810,8402],"characters":"\u226A\u20D2"},"&nlt;":{"codepoints":[8814],"characters":"\u226E"},"&nltri;":{"codepoints":[8938],"characters":"\u22EA"},"&nltrie;":{"codepoints":[8940],"characters":"\u22EC"},"&nLtv;":{"codepoints":[8810,824],"characters":"\u226A\u0338"},"&nmid;":{"codepoints":[8740],"characters":"\u2224"},"&NoBreak;":{"codepoints":[8288],"characters":"\u2060"},"&NonBreakingSpace;":{"codepoints":[160],"characters":"\xA0"},"&nopf;":{"codepoints":[120159],"characters":"\uD835\uDD5F"},"&Nopf;":{"codepoints":[8469],"characters":"\u2115"},"&Not;":{"codepoints":[10988],"characters":"\u2AEC"},"&not;":{"codepoints":[172],"characters":"\xAC"},"&not":{"codepoints":[172],"characters":"\xAC"},"&NotCongruent;":{"codepoints":[8802],"characters":"\u2262"},"&NotCupCap;":{"codepoints":[8813],"characters":"\u226D"},"&NotDoubleVerticalBar;":{"codepoints":[8742],"characters":"\u2226"},"&NotElement;":{"codepoints":[8713],"characters":"\u2209"},"&NotEqual;":{"codepoints":[8800],"characters":"\u2260"},"&NotEqualTilde;":{"codepoints":[8770,824],"characters":"\u2242\u0338"},"&NotExists;":{"codepoints":[8708],"characters":"\u2204"},"&NotGreater;":{"codepoints":[8815],"characters":"\u226F"},"&NotGreaterEqual;":{"codepoints":[8817],"characters":"\u2271"},"&NotGreaterFullEqual;":{"codepoints":[8807,824],"characters":"\u2267\u0338"},"&NotGreaterGreater;":{"codepoints":[8811,824],"characters":"\u226B\u0338"},"&NotGreaterLess;":{"codepoints":[8825],"characters":"\u2279"},"&NotGreaterSlantEqual;":{"codepoints":[10878,824],"characters":"\u2A7E\u0338"},"&NotGreaterTilde;":{"codepoints":[8821],"characters":"\u2275"},"&NotHumpDownHump;":{"codepoints":[8782,824],"characters":"\u224E\u0338"},"&NotHumpEqual;":{"codepoints":[8783,824],"characters":"\u224F\u0338"},"&notin;":{"codepoints":[8713],"characters":"\u2209"},"&notindot;":{"codepoints":[8949,824],"characters":"\u22F5\u0338"},"&notinE;":{"codepoints":[8953,824],"characters":"\u22F9\u0338"},"&notinva;":{"codepoints":[8713],"characters":"\u2209"},"&notinvb;":{"codepoints":[8951],"characters":"\u22F7"},"&notinvc;":{"codepoints":[8950],"characters":"\u22F6"},"&NotLeftTriangleBar;":{"codepoints":[10703,824],"characters":"\u29CF\u0338"},"&NotLeftTriangle;":{"codepoints":[8938],"characters":"\u22EA"},"&NotLeftTriangleEqual;":{"codepoints":[8940],"characters":"\u22EC"},"&NotLess;":{"codepoints":[8814],"characters":"\u226E"},"&NotLessEqual;":{"codepoints":[8816],"characters":"\u2270"},"&NotLessGreater;":{"codepoints":[8824],"characters":"\u2278"},"&NotLessLess;":{"codepoints":[8810,824],"characters":"\u226A\u0338"},"&NotLessSlantEqual;":{"codepoints":[10877,824],"characters":"\u2A7D\u0338"},"&NotLessTilde;":{"codepoints":[8820],"characters":"\u2274"},"&NotNestedGreaterGreater;":{"codepoints":[10914,824],"characters":"\u2AA2\u0338"},"&NotNestedLessLess;":{"codepoints":[10913,824],"characters":"\u2AA1\u0338"},"&notni;":{"codepoints":[8716],"characters":"\u220C"},"&notniva;":{"codepoints":[8716],"characters":"\u220C"},"&notnivb;":{"codepoints":[8958],"characters":"\u22FE"},"&notnivc;":{"codepoints":[8957],"characters":"\u22FD"},"&NotPrecedes;":{"codepoints":[8832],"characters":"\u2280"},"&NotPrecedesEqual;":{"codepoints":[10927,824],"characters":"\u2AAF\u0338"},"&NotPrecedesSlantEqual;":{"codepoints":[8928],"characters":"\u22E0"},"&NotReverseElement;":{"codepoints":[8716],"characters":"\u220C"},"&NotRightTriangleBar;":{"codepoints":[10704,824],"characters":"\u29D0\u0338"},"&NotRightTriangle;":{"codepoints":[8939],"characters":"\u22EB"},"&NotRightTriangleEqual;":{"codepoints":[8941],"characters":"\u22ED"},"&NotSquareSubset;":{"codepoints":[8847,824],"characters":"\u228F\u0338"},"&NotSquareSubsetEqual;":{"codepoints":[8930],"characters":"\u22E2"},"&NotSquareSuperset;":{"codepoints":[8848,824],"characters":"\u2290\u0338"},"&NotSquareSupersetEqual;":{"codepoints":[8931],"characters":"\u22E3"},"&NotSubset;":{"codepoints":[8834,8402],"characters":"\u2282\u20D2"},"&NotSubsetEqual;":{"codepoints":[8840],"characters":"\u2288"},"&NotSucceeds;":{"codepoints":[8833],"characters":"\u2281"},"&NotSucceedsEqual;":{"codepoints":[10928,824],"characters":"\u2AB0\u0338"},"&NotSucceedsSlantEqual;":{"codepoints":[8929],"characters":"\u22E1"},"&NotSucceedsTilde;":{"codepoints":[8831,824],"characters":"\u227F\u0338"},"&NotSuperset;":{"codepoints":[8835,8402],"characters":"\u2283\u20D2"},"&NotSupersetEqual;":{"codepoints":[8841],"characters":"\u2289"},"&NotTilde;":{"codepoints":[8769],"characters":"\u2241"},"&NotTildeEqual;":{"codepoints":[8772],"characters":"\u2244"},"&NotTildeFullEqual;":{"codepoints":[8775],"characters":"\u2247"},"&NotTildeTilde;":{"codepoints":[8777],"characters":"\u2249"},"&NotVerticalBar;":{"codepoints":[8740],"characters":"\u2224"},"&nparallel;":{"codepoints":[8742],"characters":"\u2226"},"&npar;":{"codepoints":[8742],"characters":"\u2226"},"&nparsl;":{"codepoints":[11005,8421],"characters":"\u2AFD\u20E5"},"&npart;":{"codepoints":[8706,824],"characters":"\u2202\u0338"},"&npolint;":{"codepoints":[10772],"characters":"\u2A14"},"&npr;":{"codepoints":[8832],"characters":"\u2280"},"&nprcue;":{"codepoints":[8928],"characters":"\u22E0"},"&nprec;":{"codepoints":[8832],"characters":"\u2280"},"&npreceq;":{"codepoints":[10927,824],"characters":"\u2AAF\u0338"},"&npre;":{"codepoints":[10927,824],"characters":"\u2AAF\u0338"},"&nrarrc;":{"codepoints":[10547,824],"characters":"\u2933\u0338"},"&nrarr;":{"codepoints":[8603],"characters":"\u219B"},"&nrArr;":{"codepoints":[8655],"characters":"\u21CF"},"&nrarrw;":{"codepoints":[8605,824],"characters":"\u219D\u0338"},"&nrightarrow;":{"codepoints":[8603],"characters":"\u219B"},"&nRightarrow;":{"codepoints":[8655],"characters":"\u21CF"},"&nrtri;":{"codepoints":[8939],"characters":"\u22EB"},"&nrtrie;":{"codepoints":[8941],"characters":"\u22ED"},"&nsc;":{"codepoints":[8833],"characters":"\u2281"},"&nsccue;":{"codepoints":[8929],"characters":"\u22E1"},"&nsce;":{"codepoints":[10928,824],"characters":"\u2AB0\u0338"},"&Nscr;":{"codepoints":[119977],"characters":"\uD835\uDCA9"},"&nscr;":{"codepoints":[120003],"characters":"\uD835\uDCC3"},"&nshortmid;":{"codepoints":[8740],"characters":"\u2224"},"&nshortparallel;":{"codepoints":[8742],"characters":"\u2226"},"&nsim;":{"codepoints":[8769],"characters":"\u2241"},"&nsime;":{"codepoints":[8772],"characters":"\u2244"},"&nsimeq;":{"codepoints":[8772],"characters":"\u2244"},"&nsmid;":{"codepoints":[8740],"characters":"\u2224"},"&nspar;":{"codepoints":[8742],"characters":"\u2226"},"&nsqsube;":{"codepoints":[8930],"characters":"\u22E2"},"&nsqsupe;":{"codepoints":[8931],"characters":"\u22E3"},"&nsub;":{"codepoints":[8836],"characters":"\u2284"},"&nsubE;":{"codepoints":[10949,824],"characters":"\u2AC5\u0338"},"&nsube;":{"codepoints":[8840],"characters":"\u2288"},"&nsubset;":{"codepoints":[8834,8402],"characters":"\u2282\u20D2"},"&nsubseteq;":{"codepoints":[8840],"characters":"\u2288"},"&nsubseteqq;":{"codepoints":[10949,824],"characters":"\u2AC5\u0338"},"&nsucc;":{"codepoints":[8833],"characters":"\u2281"},"&nsucceq;":{"codepoints":[10928,824],"characters":"\u2AB0\u0338"},"&nsup;":{"codepoints":[8837],"characters":"\u2285"},"&nsupE;":{"codepoints":[10950,824],"characters":"\u2AC6\u0338"},"&nsupe;":{"codepoints":[8841],"characters":"\u2289"},"&nsupset;":{"codepoints":[8835,8402],"characters":"\u2283\u20D2"},"&nsupseteq;":{"codepoints":[8841],"characters":"\u2289"},"&nsupseteqq;":{"codepoints":[10950,824],"characters":"\u2AC6\u0338"},"&ntgl;":{"codepoints":[8825],"characters":"\u2279"},"&Ntilde;":{"codepoints":[209],"characters":"\xD1"},"&Ntilde":{"codepoints":[209],"characters":"\xD1"},"&ntilde;":{"codepoints":[241],"characters":"\xF1"},"&ntilde":{"codepoints":[241],"characters":"\xF1"},"&ntlg;":{"codepoints":[8824],"characters":"\u2278"},"&ntriangleleft;":{"codepoints":[8938],"characters":"\u22EA"},"&ntrianglelefteq;":{"codepoints":[8940],"characters":"\u22EC"},"&ntriangleright;":{"codepoints":[8939],"characters":"\u22EB"},"&ntrianglerighteq;":{"codepoints":[8941],"characters":"\u22ED"},"&Nu;":{"codepoints":[925],"characters":"\u039D"},"&nu;":{"codepoints":[957],"characters":"\u03BD"},"&num;":{"codepoints":[35],"characters":"#"},"&numero;":{"codepoints":[8470],"characters":"\u2116"},"&numsp;":{"codepoints":[8199],"characters":"\u2007"},"&nvap;":{"codepoints":[8781,8402],"characters":"\u224D\u20D2"},"&nvdash;":{"codepoints":[8876],"characters":"\u22AC"},"&nvDash;":{"codepoints":[8877],"characters":"\u22AD"},"&nVdash;":{"codepoints":[8878],"characters":"\u22AE"},"&nVDash;":{"codepoints":[8879],"characters":"\u22AF"},"&nvge;":{"codepoints":[8805,8402],"characters":"\u2265\u20D2"},"&nvgt;":{"codepoints":[62,8402],"characters":">\u20D2"},"&nvHarr;":{"codepoints":[10500],"characters":"\u2904"},"&nvinfin;":{"codepoints":[10718],"characters":"\u29DE"},"&nvlArr;":{"codepoints":[10498],"characters":"\u2902"},"&nvle;":{"codepoints":[8804,8402],"characters":"\u2264\u20D2"},"&nvlt;":{"codepoints":[60,8402],"characters":"<\u20D2"},"&nvltrie;":{"codepoints":[8884,8402],"characters":"\u22B4\u20D2"},"&nvrArr;":{"codepoints":[10499],"characters":"\u2903"},"&nvrtrie;":{"codepoints":[8885,8402],"characters":"\u22B5\u20D2"},"&nvsim;":{"codepoints":[8764,8402],"characters":"\u223C\u20D2"},"&nwarhk;":{"codepoints":[10531],"characters":"\u2923"},"&nwarr;":{"codepoints":[8598],"characters":"\u2196"},"&nwArr;":{"codepoints":[8662],"characters":"\u21D6"},"&nwarrow;":{"codepoints":[8598],"characters":"\u2196"},"&nwnear;":{"codepoints":[10535],"characters":"\u2927"},"&Oacute;":{"codepoints":[211],"characters":"\xD3"},"&Oacute":{"codepoints":[211],"characters":"\xD3"},"&oacute;":{"codepoints":[243],"characters":"\xF3"},"&oacute":{"codepoints":[243],"characters":"\xF3"},"&oast;":{"codepoints":[8859],"characters":"\u229B"},"&Ocirc;":{"codepoints":[212],"characters":"\xD4"},"&Ocirc":{"codepoints":[212],"characters":"\xD4"},"&ocirc;":{"codepoints":[244],"characters":"\xF4"},"&ocirc":{"codepoints":[244],"characters":"\xF4"},"&ocir;":{"codepoints":[8858],"characters":"\u229A"},"&Ocy;":{"codepoints":[1054],"characters":"\u041E"},"&ocy;":{"codepoints":[1086],"characters":"\u043E"},"&odash;":{"codepoints":[8861],"characters":"\u229D"},"&Odblac;":{"codepoints":[336],"characters":"\u0150"},"&odblac;":{"codepoints":[337],"characters":"\u0151"},"&odiv;":{"codepoints":[10808],"characters":"\u2A38"},"&odot;":{"codepoints":[8857],"characters":"\u2299"},"&odsold;":{"codepoints":[10684],"characters":"\u29BC"},"&OElig;":{"codepoints":[338],"characters":"\u0152"},"&oelig;":{"codepoints":[339],"characters":"\u0153"},"&ofcir;":{"codepoints":[10687],"characters":"\u29BF"},"&Ofr;":{"codepoints":[120082],"characters":"\uD835\uDD12"},"&ofr;":{"codepoints":[120108],"characters":"\uD835\uDD2C"},"&ogon;":{"codepoints":[731],"characters":"\u02DB"},"&Ograve;":{"codepoints":[210],"characters":"\xD2"},"&Ograve":{"codepoints":[210],"characters":"\xD2"},"&ograve;":{"codepoints":[242],"characters":"\xF2"},"&ograve":{"codepoints":[242],"characters":"\xF2"},"&ogt;":{"codepoints":[10689],"characters":"\u29C1"},"&ohbar;":{"codepoints":[10677],"characters":"\u29B5"},"&ohm;":{"codepoints":[937],"characters":"\u03A9"},"&oint;":{"codepoints":[8750],"characters":"\u222E"},"&olarr;":{"codepoints":[8634],"characters":"\u21BA"},"&olcir;":{"codepoints":[10686],"characters":"\u29BE"},"&olcross;":{"codepoints":[10683],"characters":"\u29BB"},"&oline;":{"codepoints":[8254],"characters":"\u203E"},"&olt;":{"codepoints":[10688],"characters":"\u29C0"},"&Omacr;":{"codepoints":[332],"characters":"\u014C"},"&omacr;":{"codepoints":[333],"characters":"\u014D"},"&Omega;":{"codepoints":[937],"characters":"\u03A9"},"&omega;":{"codepoints":[969],"characters":"\u03C9"},"&Omicron;":{"codepoints":[927],"characters":"\u039F"},"&omicron;":{"codepoints":[959],"characters":"\u03BF"},"&omid;":{"codepoints":[10678],"characters":"\u29B6"},"&ominus;":{"codepoints":[8854],"characters":"\u2296"},"&Oopf;":{"codepoints":[120134],"characters":"\uD835\uDD46"},"&oopf;":{"codepoints":[120160],"characters":"\uD835\uDD60"},"&opar;":{"codepoints":[10679],"characters":"\u29B7"},"&OpenCurlyDoubleQuote;":{"codepoints":[8220],"characters":"\u201C"},"&OpenCurlyQuote;":{"codepoints":[8216],"characters":"\u2018"},"&operp;":{"codepoints":[10681],"characters":"\u29B9"},"&oplus;":{"codepoints":[8853],"characters":"\u2295"},"&orarr;":{"codepoints":[8635],"characters":"\u21BB"},"&Or;":{"codepoints":[10836],"characters":"\u2A54"},"&or;":{"codepoints":[8744],"characters":"\u2228"},"&ord;":{"codepoints":[10845],"characters":"\u2A5D"},"&order;":{"codepoints":[8500],"characters":"\u2134"},"&orderof;":{"codepoints":[8500],"characters":"\u2134"},"&ordf;":{"codepoints":[170],"characters":"\xAA"},"&ordf":{"codepoints":[170],"characters":"\xAA"},"&ordm;":{"codepoints":[186],"characters":"\xBA"},"&ordm":{"codepoints":[186],"characters":"\xBA"},"&origof;":{"codepoints":[8886],"characters":"\u22B6"},"&oror;":{"codepoints":[10838],"characters":"\u2A56"},"&orslope;":{"codepoints":[10839],"characters":"\u2A57"},"&orv;":{"codepoints":[10843],"characters":"\u2A5B"},"&oS;":{"codepoints":[9416],"characters":"\u24C8"},"&Oscr;":{"codepoints":[119978],"characters":"\uD835\uDCAA"},"&oscr;":{"codepoints":[8500],"characters":"\u2134"},"&Oslash;":{"codepoints":[216],"characters":"\xD8"},"&Oslash":{"codepoints":[216],"characters":"\xD8"},"&oslash;":{"codepoints":[248],"characters":"\xF8"},"&oslash":{"codepoints":[248],"characters":"\xF8"},"&osol;":{"codepoints":[8856],"characters":"\u2298"},"&Otilde;":{"codepoints":[213],"characters":"\xD5"},"&Otilde":{"codepoints":[213],"characters":"\xD5"},"&otilde;":{"codepoints":[245],"characters":"\xF5"},"&otilde":{"codepoints":[245],"characters":"\xF5"},"&otimesas;":{"codepoints":[10806],"characters":"\u2A36"},"&Otimes;":{"codepoints":[10807],"characters":"\u2A37"},"&otimes;":{"codepoints":[8855],"characters":"\u2297"},"&Ouml;":{"codepoints":[214],"characters":"\xD6"},"&Ouml":{"codepoints":[214],"characters":"\xD6"},"&ouml;":{"codepoints":[246],"characters":"\xF6"},"&ouml":{"codepoints":[246],"characters":"\xF6"},"&ovbar;":{"codepoints":[9021],"characters":"\u233D"},"&OverBar;":{"codepoints":[8254],"characters":"\u203E"},"&OverBrace;":{"codepoints":[9182],"characters":"\u23DE"},"&OverBracket;":{"codepoints":[9140],"characters":"\u23B4"},"&OverParenthesis;":{"codepoints":[9180],"characters":"\u23DC"},"&para;":{"codepoints":[182],"characters":"\xB6"},"&para":{"codepoints":[182],"characters":"\xB6"},"&parallel;":{"codepoints":[8741],"characters":"\u2225"},"&par;":{"codepoints":[8741],"characters":"\u2225"},"&parsim;":{"codepoints":[10995],"characters":"\u2AF3"},"&parsl;":{"codepoints":[11005],"characters":"\u2AFD"},"&part;":{"codepoints":[8706],"characters":"\u2202"},"&PartialD;":{"codepoints":[8706],"characters":"\u2202"},"&Pcy;":{"codepoints":[1055],"characters":"\u041F"},"&pcy;":{"codepoints":[1087],"characters":"\u043F"},"&percnt;":{"codepoints":[37],"characters":"%"},"&period;":{"codepoints":[46],"characters":"."},"&permil;":{"codepoints":[8240],"characters":"\u2030"},"&perp;":{"codepoints":[8869],"characters":"\u22A5"},"&pertenk;":{"codepoints":[8241],"characters":"\u2031"},"&Pfr;":{"codepoints":[120083],"characters":"\uD835\uDD13"},"&pfr;":{"codepoints":[120109],"characters":"\uD835\uDD2D"},"&Phi;":{"codepoints":[934],"characters":"\u03A6"},"&phi;":{"codepoints":[966],"characters":"\u03C6"},"&phiv;":{"codepoints":[981],"characters":"\u03D5"},"&phmmat;":{"codepoints":[8499],"characters":"\u2133"},"&phone;":{"codepoints":[9742],"characters":"\u260E"},"&Pi;":{"codepoints":[928],"characters":"\u03A0"},"&pi;":{"codepoints":[960],"characters":"\u03C0"},"&pitchfork;":{"codepoints":[8916],"characters":"\u22D4"},"&piv;":{"codepoints":[982],"characters":"\u03D6"},"&planck;":{"codepoints":[8463],"characters":"\u210F"},"&planckh;":{"codepoints":[8462],"characters":"\u210E"},"&plankv;":{"codepoints":[8463],"characters":"\u210F"},"&plusacir;":{"codepoints":[10787],"characters":"\u2A23"},"&plusb;":{"codepoints":[8862],"characters":"\u229E"},"&pluscir;":{"codepoints":[10786],"characters":"\u2A22"},"&plus;":{"codepoints":[43],"characters":"+"},"&plusdo;":{"codepoints":[8724],"characters":"\u2214"},"&plusdu;":{"codepoints":[10789],"characters":"\u2A25"},"&pluse;":{"codepoints":[10866],"characters":"\u2A72"},"&PlusMinus;":{"codepoints":[177],"characters":"\xB1"},"&plusmn;":{"codepoints":[177],"characters":"\xB1"},"&plusmn":{"codepoints":[177],"characters":"\xB1"},"&plussim;":{"codepoints":[10790],"characters":"\u2A26"},"&plustwo;":{"codepoints":[10791],"characters":"\u2A27"},"&pm;":{"codepoints":[177],"characters":"\xB1"},"&Poincareplane;":{"codepoints":[8460],"characters":"\u210C"},"&pointint;":{"codepoints":[10773],"characters":"\u2A15"},"&popf;":{"codepoints":[120161],"characters":"\uD835\uDD61"},"&Popf;":{"codepoints":[8473],"characters":"\u2119"},"&pound;":{"codepoints":[163],"characters":"\xA3"},"&pound":{"codepoints":[163],"characters":"\xA3"},"&prap;":{"codepoints":[10935],"characters":"\u2AB7"},"&Pr;":{"codepoints":[10939],"characters":"\u2ABB"},"&pr;":{"codepoints":[8826],"characters":"\u227A"},"&prcue;":{"codepoints":[8828],"characters":"\u227C"},"&precapprox;":{"codepoints":[10935],"characters":"\u2AB7"},"&prec;":{"codepoints":[8826],"characters":"\u227A"},"&preccurlyeq;":{"codepoints":[8828],"characters":"\u227C"},"&Precedes;":{"codepoints":[8826],"characters":"\u227A"},"&PrecedesEqual;":{"codepoints":[10927],"characters":"\u2AAF"},"&PrecedesSlantEqual;":{"codepoints":[8828],"characters":"\u227C"},"&PrecedesTilde;":{"codepoints":[8830],"characters":"\u227E"},"&preceq;":{"codepoints":[10927],"characters":"\u2AAF"},"&precnapprox;":{"codepoints":[10937],"characters":"\u2AB9"},"&precneqq;":{"codepoints":[10933],"characters":"\u2AB5"},"&precnsim;":{"codepoints":[8936],"characters":"\u22E8"},"&pre;":{"codepoints":[10927],"characters":"\u2AAF"},"&prE;":{"codepoints":[10931],"characters":"\u2AB3"},"&precsim;":{"codepoints":[8830],"characters":"\u227E"},"&prime;":{"codepoints":[8242],"characters":"\u2032"},"&Prime;":{"codepoints":[8243],"characters":"\u2033"},"&primes;":{"codepoints":[8473],"characters":"\u2119"},"&prnap;":{"codepoints":[10937],"characters":"\u2AB9"},"&prnE;":{"codepoints":[10933],"characters":"\u2AB5"},"&prnsim;":{"codepoints":[8936],"characters":"\u22E8"},"&prod;":{"codepoints":[8719],"characters":"\u220F"},"&Product;":{"codepoints":[8719],"characters":"\u220F"},"&profalar;":{"codepoints":[9006],"characters":"\u232E"},"&profline;":{"codepoints":[8978],"characters":"\u2312"},"&profsurf;":{"codepoints":[8979],"characters":"\u2313"},"&prop;":{"codepoints":[8733],"characters":"\u221D"},"&Proportional;":{"codepoints":[8733],"characters":"\u221D"},"&Proportion;":{"codepoints":[8759],"characters":"\u2237"},"&propto;":{"codepoints":[8733],"characters":"\u221D"},"&prsim;":{"codepoints":[8830],"characters":"\u227E"},"&prurel;":{"codepoints":[8880],"characters":"\u22B0"},"&Pscr;":{"codepoints":[119979],"characters":"\uD835\uDCAB"},"&pscr;":{"codepoints":[120005],"characters":"\uD835\uDCC5"},"&Psi;":{"codepoints":[936],"characters":"\u03A8"},"&psi;":{"codepoints":[968],"characters":"\u03C8"},"&puncsp;":{"codepoints":[8200],"characters":"\u2008"},"&Qfr;":{"codepoints":[120084],"characters":"\uD835\uDD14"},"&qfr;":{"codepoints":[120110],"characters":"\uD835\uDD2E"},"&qint;":{"codepoints":[10764],"characters":"\u2A0C"},"&qopf;":{"codepoints":[120162],"characters":"\uD835\uDD62"},"&Qopf;":{"codepoints":[8474],"characters":"\u211A"},"&qprime;":{"codepoints":[8279],"characters":"\u2057"},"&Qscr;":{"codepoints":[119980],"characters":"\uD835\uDCAC"},"&qscr;":{"codepoints":[120006],"characters":"\uD835\uDCC6"},"&quaternions;":{"codepoints":[8461],"characters":"\u210D"},"&quatint;":{"codepoints":[10774],"characters":"\u2A16"},"&quest;":{"codepoints":[63],"characters":"?"},"&questeq;":{"codepoints":[8799],"characters":"\u225F"},"&quot;":{"codepoints":[34],"characters":"\""},"&quot":{"codepoints":[34],"characters":"\""},"&QUOT;":{"codepoints":[34],"characters":"\""},"&QUOT":{"codepoints":[34],"characters":"\""},"&rAarr;":{"codepoints":[8667],"characters":"\u21DB"},"&race;":{"codepoints":[8765,817],"characters":"\u223D\u0331"},"&Racute;":{"codepoints":[340],"characters":"\u0154"},"&racute;":{"codepoints":[341],"characters":"\u0155"},"&radic;":{"codepoints":[8730],"characters":"\u221A"},"&raemptyv;":{"codepoints":[10675],"characters":"\u29B3"},"&rang;":{"codepoints":[10217],"characters":"\u27E9"},"&Rang;":{"codepoints":[10219],"characters":"\u27EB"},"&rangd;":{"codepoints":[10642],"characters":"\u2992"},"&range;":{"codepoints":[10661],"characters":"\u29A5"},"&rangle;":{"codepoints":[10217],"characters":"\u27E9"},"&raquo;":{"codepoints":[187],"characters":"\xBB"},"&raquo":{"codepoints":[187],"characters":"\xBB"},"&rarrap;":{"codepoints":[10613],"characters":"\u2975"},"&rarrb;":{"codepoints":[8677],"characters":"\u21E5"},"&rarrbfs;":{"codepoints":[10528],"characters":"\u2920"},"&rarrc;":{"codepoints":[10547],"characters":"\u2933"},"&rarr;":{"codepoints":[8594],"characters":"\u2192"},"&Rarr;":{"codepoints":[8608],"characters":"\u21A0"},"&rArr;":{"codepoints":[8658],"characters":"\u21D2"},"&rarrfs;":{"codepoints":[10526],"characters":"\u291E"},"&rarrhk;":{"codepoints":[8618],"characters":"\u21AA"},"&rarrlp;":{"codepoints":[8620],"characters":"\u21AC"},"&rarrpl;":{"codepoints":[10565],"characters":"\u2945"},"&rarrsim;":{"codepoints":[10612],"characters":"\u2974"},"&Rarrtl;":{"codepoints":[10518],"characters":"\u2916"},"&rarrtl;":{"codepoints":[8611],"characters":"\u21A3"},"&rarrw;":{"codepoints":[8605],"characters":"\u219D"},"&ratail;":{"codepoints":[10522],"characters":"\u291A"},"&rAtail;":{"codepoints":[10524],"characters":"\u291C"},"&ratio;":{"codepoints":[8758],"characters":"\u2236"},"&rationals;":{"codepoints":[8474],"characters":"\u211A"},"&rbarr;":{"codepoints":[10509],"characters":"\u290D"},"&rBarr;":{"codepoints":[10511],"characters":"\u290F"},"&RBarr;":{"codepoints":[10512],"characters":"\u2910"},"&rbbrk;":{"codepoints":[10099],"characters":"\u2773"},"&rbrace;":{"codepoints":[125],"characters":"}"},"&rbrack;":{"codepoints":[93],"characters":"]"},"&rbrke;":{"codepoints":[10636],"characters":"\u298C"},"&rbrksld;":{"codepoints":[10638],"characters":"\u298E"},"&rbrkslu;":{"codepoints":[10640],"characters":"\u2990"},"&Rcaron;":{"codepoints":[344],"characters":"\u0158"},"&rcaron;":{"codepoints":[345],"characters":"\u0159"},"&Rcedil;":{"codepoints":[342],"characters":"\u0156"},"&rcedil;":{"codepoints":[343],"characters":"\u0157"},"&rceil;":{"codepoints":[8969],"characters":"\u2309"},"&rcub;":{"codepoints":[125],"characters":"}"},"&Rcy;":{"codepoints":[1056],"characters":"\u0420"},"&rcy;":{"codepoints":[1088],"characters":"\u0440"},"&rdca;":{"codepoints":[10551],"characters":"\u2937"},"&rdldhar;":{"codepoints":[10601],"characters":"\u2969"},"&rdquo;":{"codepoints":[8221],"characters":"\u201D"},"&rdquor;":{"codepoints":[8221],"characters":"\u201D"},"&rdsh;":{"codepoints":[8627],"characters":"\u21B3"},"&real;":{"codepoints":[8476],"characters":"\u211C"},"&realine;":{"codepoints":[8475],"characters":"\u211B"},"&realpart;":{"codepoints":[8476],"characters":"\u211C"},"&reals;":{"codepoints":[8477],"characters":"\u211D"},"&Re;":{"codepoints":[8476],"characters":"\u211C"},"&rect;":{"codepoints":[9645],"characters":"\u25AD"},"&reg;":{"codepoints":[174],"characters":"\xAE"},"&reg":{"codepoints":[174],"characters":"\xAE"},"&REG;":{"codepoints":[174],"characters":"\xAE"},"&REG":{"codepoints":[174],"characters":"\xAE"},"&ReverseElement;":{"codepoints":[8715],"characters":"\u220B"},"&ReverseEquilibrium;":{"codepoints":[8651],"characters":"\u21CB"},"&ReverseUpEquilibrium;":{"codepoints":[10607],"characters":"\u296F"},"&rfisht;":{"codepoints":[10621],"characters":"\u297D"},"&rfloor;":{"codepoints":[8971],"characters":"\u230B"},"&rfr;":{"codepoints":[120111],"characters":"\uD835\uDD2F"},"&Rfr;":{"codepoints":[8476],"characters":"\u211C"},"&rHar;":{"codepoints":[10596],"characters":"\u2964"},"&rhard;":{"codepoints":[8641],"characters":"\u21C1"},"&rharu;":{"codepoints":[8640],"characters":"\u21C0"},"&rharul;":{"codepoints":[10604],"characters":"\u296C"},"&Rho;":{"codepoints":[929],"characters":"\u03A1"},"&rho;":{"codepoints":[961],"characters":"\u03C1"},"&rhov;":{"codepoints":[1009],"characters":"\u03F1"},"&RightAngleBracket;":{"codepoints":[10217],"characters":"\u27E9"},"&RightArrowBar;":{"codepoints":[8677],"characters":"\u21E5"},"&rightarrow;":{"codepoints":[8594],"characters":"\u2192"},"&RightArrow;":{"codepoints":[8594],"characters":"\u2192"},"&Rightarrow;":{"codepoints":[8658],"characters":"\u21D2"},"&RightArrowLeftArrow;":{"codepoints":[8644],"characters":"\u21C4"},"&rightarrowtail;":{"codepoints":[8611],"characters":"\u21A3"},"&RightCeiling;":{"codepoints":[8969],"characters":"\u2309"},"&RightDoubleBracket;":{"codepoints":[10215],"characters":"\u27E7"},"&RightDownTeeVector;":{"codepoints":[10589],"characters":"\u295D"},"&RightDownVectorBar;":{"codepoints":[10581],"characters":"\u2955"},"&RightDownVector;":{"codepoints":[8642],"characters":"\u21C2"},"&RightFloor;":{"codepoints":[8971],"characters":"\u230B"},"&rightharpoondown;":{"codepoints":[8641],"characters":"\u21C1"},"&rightharpoonup;":{"codepoints":[8640],"characters":"\u21C0"},"&rightleftarrows;":{"codepoints":[8644],"characters":"\u21C4"},"&rightleftharpoons;":{"codepoints":[8652],"characters":"\u21CC"},"&rightrightarrows;":{"codepoints":[8649],"characters":"\u21C9"},"&rightsquigarrow;":{"codepoints":[8605],"characters":"\u219D"},"&RightTeeArrow;":{"codepoints":[8614],"characters":"\u21A6"},"&RightTee;":{"codepoints":[8866],"characters":"\u22A2"},"&RightTeeVector;":{"codepoints":[10587],"characters":"\u295B"},"&rightthreetimes;":{"codepoints":[8908],"characters":"\u22CC"},"&RightTriangleBar;":{"codepoints":[10704],"characters":"\u29D0"},"&RightTriangle;":{"codepoints":[8883],"characters":"\u22B3"},"&RightTriangleEqual;":{"codepoints":[8885],"characters":"\u22B5"},"&RightUpDownVector;":{"codepoints":[10575],"characters":"\u294F"},"&RightUpTeeVector;":{"codepoints":[10588],"characters":"\u295C"},"&RightUpVectorBar;":{"codepoints":[10580],"characters":"\u2954"},"&RightUpVector;":{"codepoints":[8638],"characters":"\u21BE"},"&RightVectorBar;":{"codepoints":[10579],"characters":"\u2953"},"&RightVector;":{"codepoints":[8640],"characters":"\u21C0"},"&ring;":{"codepoints":[730],"characters":"\u02DA"},"&risingdotseq;":{"codepoints":[8787],"characters":"\u2253"},"&rlarr;":{"codepoints":[8644],"characters":"\u21C4"},"&rlhar;":{"codepoints":[8652],"characters":"\u21CC"},"&rlm;":{"codepoints":[8207],"characters":"\u200F"},"&rmoustache;":{"codepoints":[9137],"characters":"\u23B1"},"&rmoust;":{"codepoints":[9137],"characters":"\u23B1"},"&rnmid;":{"codepoints":[10990],"characters":"\u2AEE"},"&roang;":{"codepoints":[10221],"characters":"\u27ED"},"&roarr;":{"codepoints":[8702],"characters":"\u21FE"},"&robrk;":{"codepoints":[10215],"characters":"\u27E7"},"&ropar;":{"codepoints":[10630],"characters":"\u2986"},"&ropf;":{"codepoints":[120163],"characters":"\uD835\uDD63"},"&Ropf;":{"codepoints":[8477],"characters":"\u211D"},"&roplus;":{"codepoints":[10798],"characters":"\u2A2E"},"&rotimes;":{"codepoints":[10805],"characters":"\u2A35"},"&RoundImplies;":{"codepoints":[10608],"characters":"\u2970"},"&rpar;":{"codepoints":[41],"characters":")"},"&rpargt;":{"codepoints":[10644],"characters":"\u2994"},"&rppolint;":{"codepoints":[10770],"characters":"\u2A12"},"&rrarr;":{"codepoints":[8649],"characters":"\u21C9"},"&Rrightarrow;":{"codepoints":[8667],"characters":"\u21DB"},"&rsaquo;":{"codepoints":[8250],"characters":"\u203A"},"&rscr;":{"codepoints":[120007],"characters":"\uD835\uDCC7"},"&Rscr;":{"codepoints":[8475],"characters":"\u211B"},"&rsh;":{"codepoints":[8625],"characters":"\u21B1"},"&Rsh;":{"codepoints":[8625],"characters":"\u21B1"},"&rsqb;":{"codepoints":[93],"characters":"]"},"&rsquo;":{"codepoints":[8217],"characters":"\u2019"},"&rsquor;":{"codepoints":[8217],"characters":"\u2019"},"&rthree;":{"codepoints":[8908],"characters":"\u22CC"},"&rtimes;":{"codepoints":[8906],"characters":"\u22CA"},"&rtri;":{"codepoints":[9657],"characters":"\u25B9"},"&rtrie;":{"codepoints":[8885],"characters":"\u22B5"},"&rtrif;":{"codepoints":[9656],"characters":"\u25B8"},"&rtriltri;":{"codepoints":[10702],"characters":"\u29CE"},"&RuleDelayed;":{"codepoints":[10740],"characters":"\u29F4"},"&ruluhar;":{"codepoints":[10600],"characters":"\u2968"},"&rx;":{"codepoints":[8478],"characters":"\u211E"},"&Sacute;":{"codepoints":[346],"characters":"\u015A"},"&sacute;":{"codepoints":[347],"characters":"\u015B"},"&sbquo;":{"codepoints":[8218],"characters":"\u201A"},"&scap;":{"codepoints":[10936],"characters":"\u2AB8"},"&Scaron;":{"codepoints":[352],"characters":"\u0160"},"&scaron;":{"codepoints":[353],"characters":"\u0161"},"&Sc;":{"codepoints":[10940],"characters":"\u2ABC"},"&sc;":{"codepoints":[8827],"characters":"\u227B"},"&sccue;":{"codepoints":[8829],"characters":"\u227D"},"&sce;":{"codepoints":[10928],"characters":"\u2AB0"},"&scE;":{"codepoints":[10932],"characters":"\u2AB4"},"&Scedil;":{"codepoints":[350],"characters":"\u015E"},"&scedil;":{"codepoints":[351],"characters":"\u015F"},"&Scirc;":{"codepoints":[348],"characters":"\u015C"},"&scirc;":{"codepoints":[349],"characters":"\u015D"},"&scnap;":{"codepoints":[10938],"characters":"\u2ABA"},"&scnE;":{"codepoints":[10934],"characters":"\u2AB6"},"&scnsim;":{"codepoints":[8937],"characters":"\u22E9"},"&scpolint;":{"codepoints":[10771],"characters":"\u2A13"},"&scsim;":{"codepoints":[8831],"characters":"\u227F"},"&Scy;":{"codepoints":[1057],"characters":"\u0421"},"&scy;":{"codepoints":[1089],"characters":"\u0441"},"&sdotb;":{"codepoints":[8865],"characters":"\u22A1"},"&sdot;":{"codepoints":[8901],"characters":"\u22C5"},"&sdote;":{"codepoints":[10854],"characters":"\u2A66"},"&searhk;":{"codepoints":[10533],"characters":"\u2925"},"&searr;":{"codepoints":[8600],"characters":"\u2198"},"&seArr;":{"codepoints":[8664],"characters":"\u21D8"},"&searrow;":{"codepoints":[8600],"characters":"\u2198"},"&sect;":{"codepoints":[167],"characters":"\xA7"},"&sect":{"codepoints":[167],"characters":"\xA7"},"&semi;":{"codepoints":[59],"characters":";"},"&seswar;":{"codepoints":[10537],"characters":"\u2929"},"&setminus;":{"codepoints":[8726],"characters":"\u2216"},"&setmn;":{"codepoints":[8726],"characters":"\u2216"},"&sext;":{"codepoints":[10038],"characters":"\u2736"},"&Sfr;":{"codepoints":[120086],"characters":"\uD835\uDD16"},"&sfr;":{"codepoints":[120112],"characters":"\uD835\uDD30"},"&sfrown;":{"codepoints":[8994],"characters":"\u2322"},"&sharp;":{"codepoints":[9839],"characters":"\u266F"},"&SHCHcy;":{"codepoints":[1065],"characters":"\u0429"},"&shchcy;":{"codepoints":[1097],"characters":"\u0449"},"&SHcy;":{"codepoints":[1064],"characters":"\u0428"},"&shcy;":{"codepoints":[1096],"characters":"\u0448"},"&ShortDownArrow;":{"codepoints":[8595],"characters":"\u2193"},"&ShortLeftArrow;":{"codepoints":[8592],"characters":"\u2190"},"&shortmid;":{"codepoints":[8739],"characters":"\u2223"},"&shortparallel;":{"codepoints":[8741],"characters":"\u2225"},"&ShortRightArrow;":{"codepoints":[8594],"characters":"\u2192"},"&ShortUpArrow;":{"codepoints":[8593],"characters":"\u2191"},"&shy;":{"codepoints":[173],"characters":"\xAD"},"&shy":{"codepoints":[173],"characters":"\xAD"},"&Sigma;":{"codepoints":[931],"characters":"\u03A3"},"&sigma;":{"codepoints":[963],"characters":"\u03C3"},"&sigmaf;":{"codepoints":[962],"characters":"\u03C2"},"&sigmav;":{"codepoints":[962],"characters":"\u03C2"},"&sim;":{"codepoints":[8764],"characters":"\u223C"},"&simdot;":{"codepoints":[10858],"characters":"\u2A6A"},"&sime;":{"codepoints":[8771],"characters":"\u2243"},"&simeq;":{"codepoints":[8771],"characters":"\u2243"},"&simg;":{"codepoints":[10910],"characters":"\u2A9E"},"&simgE;":{"codepoints":[10912],"characters":"\u2AA0"},"&siml;":{"codepoints":[10909],"characters":"\u2A9D"},"&simlE;":{"codepoints":[10911],"characters":"\u2A9F"},"&simne;":{"codepoints":[8774],"characters":"\u2246"},"&simplus;":{"codepoints":[10788],"characters":"\u2A24"},"&simrarr;":{"codepoints":[10610],"characters":"\u2972"},"&slarr;":{"codepoints":[8592],"characters":"\u2190"},"&SmallCircle;":{"codepoints":[8728],"characters":"\u2218"},"&smallsetminus;":{"codepoints":[8726],"characters":"\u2216"},"&smashp;":{"codepoints":[10803],"characters":"\u2A33"},"&smeparsl;":{"codepoints":[10724],"characters":"\u29E4"},"&smid;":{"codepoints":[8739],"characters":"\u2223"},"&smile;":{"codepoints":[8995],"characters":"\u2323"},"&smt;":{"codepoints":[10922],"characters":"\u2AAA"},"&smte;":{"codepoints":[10924],"characters":"\u2AAC"},"&smtes;":{"codepoints":[10924,65024],"characters":"\u2AAC\uFE00"},"&SOFTcy;":{"codepoints":[1068],"characters":"\u042C"},"&softcy;":{"codepoints":[1100],"characters":"\u044C"},"&solbar;":{"codepoints":[9023],"characters":"\u233F"},"&solb;":{"codepoints":[10692],"characters":"\u29C4"},"&sol;":{"codepoints":[47],"characters":"/"},"&Sopf;":{"codepoints":[120138],"characters":"\uD835\uDD4A"},"&sopf;":{"codepoints":[120164],"characters":"\uD835\uDD64"},"&spades;":{"codepoints":[9824],"characters":"\u2660"},"&spadesuit;":{"codepoints":[9824],"characters":"\u2660"},"&spar;":{"codepoints":[8741],"characters":"\u2225"},"&sqcap;":{"codepoints":[8851],"characters":"\u2293"},"&sqcaps;":{"codepoints":[8851,65024],"characters":"\u2293\uFE00"},"&sqcup;":{"codepoints":[8852],"characters":"\u2294"},"&sqcups;":{"codepoints":[8852,65024],"characters":"\u2294\uFE00"},"&Sqrt;":{"codepoints":[8730],"characters":"\u221A"},"&sqsub;":{"codepoints":[8847],"characters":"\u228F"},"&sqsube;":{"codepoints":[8849],"characters":"\u2291"},"&sqsubset;":{"codepoints":[8847],"characters":"\u228F"},"&sqsubseteq;":{"codepoints":[8849],"characters":"\u2291"},"&sqsup;":{"codepoints":[8848],"characters":"\u2290"},"&sqsupe;":{"codepoints":[8850],"characters":"\u2292"},"&sqsupset;":{"codepoints":[8848],"characters":"\u2290"},"&sqsupseteq;":{"codepoints":[8850],"characters":"\u2292"},"&square;":{"codepoints":[9633],"characters":"\u25A1"},"&Square;":{"codepoints":[9633],"characters":"\u25A1"},"&SquareIntersection;":{"codepoints":[8851],"characters":"\u2293"},"&SquareSubset;":{"codepoints":[8847],"characters":"\u228F"},"&SquareSubsetEqual;":{"codepoints":[8849],"characters":"\u2291"},"&SquareSuperset;":{"codepoints":[8848],"characters":"\u2290"},"&SquareSupersetEqual;":{"codepoints":[8850],"characters":"\u2292"},"&SquareUnion;":{"codepoints":[8852],"characters":"\u2294"},"&squarf;":{"codepoints":[9642],"characters":"\u25AA"},"&squ;":{"codepoints":[9633],"characters":"\u25A1"},"&squf;":{"codepoints":[9642],"characters":"\u25AA"},"&srarr;":{"codepoints":[8594],"characters":"\u2192"},"&Sscr;":{"codepoints":[119982],"characters":"\uD835\uDCAE"},"&sscr;":{"codepoints":[120008],"characters":"\uD835\uDCC8"},"&ssetmn;":{"codepoints":[8726],"characters":"\u2216"},"&ssmile;":{"codepoints":[8995],"characters":"\u2323"},"&sstarf;":{"codepoints":[8902],"characters":"\u22C6"},"&Star;":{"codepoints":[8902],"characters":"\u22C6"},"&star;":{"codepoints":[9734],"characters":"\u2606"},"&starf;":{"codepoints":[9733],"characters":"\u2605"},"&straightepsilon;":{"codepoints":[1013],"characters":"\u03F5"},"&straightphi;":{"codepoints":[981],"characters":"\u03D5"},"&strns;":{"codepoints":[175],"characters":"\xAF"},"&sub;":{"codepoints":[8834],"characters":"\u2282"},"&Sub;":{"codepoints":[8912],"characters":"\u22D0"},"&subdot;":{"codepoints":[10941],"characters":"\u2ABD"},"&subE;":{"codepoints":[10949],"characters":"\u2AC5"},"&sube;":{"codepoints":[8838],"characters":"\u2286"},"&subedot;":{"codepoints":[10947],"characters":"\u2AC3"},"&submult;":{"codepoints":[10945],"characters":"\u2AC1"},"&subnE;":{"codepoints":[10955],"characters":"\u2ACB"},"&subne;":{"codepoints":[8842],"characters":"\u228A"},"&subplus;":{"codepoints":[10943],"characters":"\u2ABF"},"&subrarr;":{"codepoints":[10617],"characters":"\u2979"},"&subset;":{"codepoints":[8834],"characters":"\u2282"},"&Subset;":{"codepoints":[8912],"characters":"\u22D0"},"&subseteq;":{"codepoints":[8838],"characters":"\u2286"},"&subseteqq;":{"codepoints":[10949],"characters":"\u2AC5"},"&SubsetEqual;":{"codepoints":[8838],"characters":"\u2286"},"&subsetneq;":{"codepoints":[8842],"characters":"\u228A"},"&subsetneqq;":{"codepoints":[10955],"characters":"\u2ACB"},"&subsim;":{"codepoints":[10951],"characters":"\u2AC7"},"&subsub;":{"codepoints":[10965],"characters":"\u2AD5"},"&subsup;":{"codepoints":[10963],"characters":"\u2AD3"},"&succapprox;":{"codepoints":[10936],"characters":"\u2AB8"},"&succ;":{"codepoints":[8827],"characters":"\u227B"},"&succcurlyeq;":{"codepoints":[8829],"characters":"\u227D"},"&Succeeds;":{"codepoints":[8827],"characters":"\u227B"},"&SucceedsEqual;":{"codepoints":[10928],"characters":"\u2AB0"},"&SucceedsSlantEqual;":{"codepoints":[8829],"characters":"\u227D"},"&SucceedsTilde;":{"codepoints":[8831],"characters":"\u227F"},"&succeq;":{"codepoints":[10928],"characters":"\u2AB0"},"&succnapprox;":{"codepoints":[10938],"characters":"\u2ABA"},"&succneqq;":{"codepoints":[10934],"characters":"\u2AB6"},"&succnsim;":{"codepoints":[8937],"characters":"\u22E9"},"&succsim;":{"codepoints":[8831],"characters":"\u227F"},"&SuchThat;":{"codepoints":[8715],"characters":"\u220B"},"&sum;":{"codepoints":[8721],"characters":"\u2211"},"&Sum;":{"codepoints":[8721],"characters":"\u2211"},"&sung;":{"codepoints":[9834],"characters":"\u266A"},"&sup1;":{"codepoints":[185],"characters":"\xB9"},"&sup1":{"codepoints":[185],"characters":"\xB9"},"&sup2;":{"codepoints":[178],"characters":"\xB2"},"&sup2":{"codepoints":[178],"characters":"\xB2"},"&sup3;":{"codepoints":[179],"characters":"\xB3"},"&sup3":{"codepoints":[179],"characters":"\xB3"},"&sup;":{"codepoints":[8835],"characters":"\u2283"},"&Sup;":{"codepoints":[8913],"characters":"\u22D1"},"&supdot;":{"codepoints":[10942],"characters":"\u2ABE"},"&supdsub;":{"codepoints":[10968],"characters":"\u2AD8"},"&supE;":{"codepoints":[10950],"characters":"\u2AC6"},"&supe;":{"codepoints":[8839],"characters":"\u2287"},"&supedot;":{"codepoints":[10948],"characters":"\u2AC4"},"&Superset;":{"codepoints":[8835],"characters":"\u2283"},"&SupersetEqual;":{"codepoints":[8839],"characters":"\u2287"},"&suphsol;":{"codepoints":[10185],"characters":"\u27C9"},"&suphsub;":{"codepoints":[10967],"characters":"\u2AD7"},"&suplarr;":{"codepoints":[10619],"characters":"\u297B"},"&supmult;":{"codepoints":[10946],"characters":"\u2AC2"},"&supnE;":{"codepoints":[10956],"characters":"\u2ACC"},"&supne;":{"codepoints":[8843],"characters":"\u228B"},"&supplus;":{"codepoints":[10944],"characters":"\u2AC0"},"&supset;":{"codepoints":[8835],"characters":"\u2283"},"&Supset;":{"codepoints":[8913],"characters":"\u22D1"},"&supseteq;":{"codepoints":[8839],"characters":"\u2287"},"&supseteqq;":{"codepoints":[10950],"characters":"\u2AC6"},"&supsetneq;":{"codepoints":[8843],"characters":"\u228B"},"&supsetneqq;":{"codepoints":[10956],"characters":"\u2ACC"},"&supsim;":{"codepoints":[10952],"characters":"\u2AC8"},"&supsub;":{"codepoints":[10964],"characters":"\u2AD4"},"&supsup;":{"codepoints":[10966],"characters":"\u2AD6"},"&swarhk;":{"codepoints":[10534],"characters":"\u2926"},"&swarr;":{"codepoints":[8601],"characters":"\u2199"},"&swArr;":{"codepoints":[8665],"characters":"\u21D9"},"&swarrow;":{"codepoints":[8601],"characters":"\u2199"},"&swnwar;":{"codepoints":[10538],"characters":"\u292A"},"&szlig;":{"codepoints":[223],"characters":"\xDF"},"&szlig":{"codepoints":[223],"characters":"\xDF"},"&Tab;":{"codepoints":[9],"characters":"\t"},"&target;":{"codepoints":[8982],"characters":"\u2316"},"&Tau;":{"codepoints":[932],"characters":"\u03A4"},"&tau;":{"codepoints":[964],"characters":"\u03C4"},"&tbrk;":{"codepoints":[9140],"characters":"\u23B4"},"&Tcaron;":{"codepoints":[356],"characters":"\u0164"},"&tcaron;":{"codepoints":[357],"characters":"\u0165"},"&Tcedil;":{"codepoints":[354],"characters":"\u0162"},"&tcedil;":{"codepoints":[355],"characters":"\u0163"},"&Tcy;":{"codepoints":[1058],"characters":"\u0422"},"&tcy;":{"codepoints":[1090],"characters":"\u0442"},"&tdot;":{"codepoints":[8411],"characters":"\u20DB"},"&telrec;":{"codepoints":[8981],"characters":"\u2315"},"&Tfr;":{"codepoints":[120087],"characters":"\uD835\uDD17"},"&tfr;":{"codepoints":[120113],"characters":"\uD835\uDD31"},"&there4;":{"codepoints":[8756],"characters":"\u2234"},"&therefore;":{"codepoints":[8756],"characters":"\u2234"},"&Therefore;":{"codepoints":[8756],"characters":"\u2234"},"&Theta;":{"codepoints":[920],"characters":"\u0398"},"&theta;":{"codepoints":[952],"characters":"\u03B8"},"&thetasym;":{"codepoints":[977],"characters":"\u03D1"},"&thetav;":{"codepoints":[977],"characters":"\u03D1"},"&thickapprox;":{"codepoints":[8776],"characters":"\u2248"},"&thicksim;":{"codepoints":[8764],"characters":"\u223C"},"&ThickSpace;":{"codepoints":[8287,8202],"characters":"\u205F\u200A"},"&ThinSpace;":{"codepoints":[8201],"characters":"\u2009"},"&thinsp;":{"codepoints":[8201],"characters":"\u2009"},"&thkap;":{"codepoints":[8776],"characters":"\u2248"},"&thksim;":{"codepoints":[8764],"characters":"\u223C"},"&THORN;":{"codepoints":[222],"characters":"\xDE"},"&THORN":{"codepoints":[222],"characters":"\xDE"},"&thorn;":{"codepoints":[254],"characters":"\xFE"},"&thorn":{"codepoints":[254],"characters":"\xFE"},"&tilde;":{"codepoints":[732],"characters":"\u02DC"},"&Tilde;":{"codepoints":[8764],"characters":"\u223C"},"&TildeEqual;":{"codepoints":[8771],"characters":"\u2243"},"&TildeFullEqual;":{"codepoints":[8773],"characters":"\u2245"},"&TildeTilde;":{"codepoints":[8776],"characters":"\u2248"},"&timesbar;":{"codepoints":[10801],"characters":"\u2A31"},"&timesb;":{"codepoints":[8864],"characters":"\u22A0"},"&times;":{"codepoints":[215],"characters":"\xD7"},"&times":{"codepoints":[215],"characters":"\xD7"},"&timesd;":{"codepoints":[10800],"characters":"\u2A30"},"&tint;":{"codepoints":[8749],"characters":"\u222D"},"&toea;":{"codepoints":[10536],"characters":"\u2928"},"&topbot;":{"codepoints":[9014],"characters":"\u2336"},"&topcir;":{"codepoints":[10993],"characters":"\u2AF1"},"&top;":{"codepoints":[8868],"characters":"\u22A4"},"&Topf;":{"codepoints":[120139],"characters":"\uD835\uDD4B"},"&topf;":{"codepoints":[120165],"characters":"\uD835\uDD65"},"&topfork;":{"codepoints":[10970],"characters":"\u2ADA"},"&tosa;":{"codepoints":[10537],"characters":"\u2929"},"&tprime;":{"codepoints":[8244],"characters":"\u2034"},"&trade;":{"codepoints":[8482],"characters":"\u2122"},"&TRADE;":{"codepoints":[8482],"characters":"\u2122"},"&triangle;":{"codepoints":[9653],"characters":"\u25B5"},"&triangledown;":{"codepoints":[9663],"characters":"\u25BF"},"&triangleleft;":{"codepoints":[9667],"characters":"\u25C3"},"&trianglelefteq;":{"codepoints":[8884],"characters":"\u22B4"},"&triangleq;":{"codepoints":[8796],"characters":"\u225C"},"&triangleright;":{"codepoints":[9657],"characters":"\u25B9"},"&trianglerighteq;":{"codepoints":[8885],"characters":"\u22B5"},"&tridot;":{"codepoints":[9708],"characters":"\u25EC"},"&trie;":{"codepoints":[8796],"characters":"\u225C"},"&triminus;":{"codepoints":[10810],"characters":"\u2A3A"},"&TripleDot;":{"codepoints":[8411],"characters":"\u20DB"},"&triplus;":{"codepoints":[10809],"characters":"\u2A39"},"&trisb;":{"codepoints":[10701],"characters":"\u29CD"},"&tritime;":{"codepoints":[10811],"characters":"\u2A3B"},"&trpezium;":{"codepoints":[9186],"characters":"\u23E2"},"&Tscr;":{"codepoints":[119983],"characters":"\uD835\uDCAF"},"&tscr;":{"codepoints":[120009],"characters":"\uD835\uDCC9"},"&TScy;":{"codepoints":[1062],"characters":"\u0426"},"&tscy;":{"codepoints":[1094],"characters":"\u0446"},"&TSHcy;":{"codepoints":[1035],"characters":"\u040B"},"&tshcy;":{"codepoints":[1115],"characters":"\u045B"},"&Tstrok;":{"codepoints":[358],"characters":"\u0166"},"&tstrok;":{"codepoints":[359],"characters":"\u0167"},"&twixt;":{"codepoints":[8812],"characters":"\u226C"},"&twoheadleftarrow;":{"codepoints":[8606],"characters":"\u219E"},"&twoheadrightarrow;":{"codepoints":[8608],"characters":"\u21A0"},"&Uacute;":{"codepoints":[218],"characters":"\xDA"},"&Uacute":{"codepoints":[218],"characters":"\xDA"},"&uacute;":{"codepoints":[250],"characters":"\xFA"},"&uacute":{"codepoints":[250],"characters":"\xFA"},"&uarr;":{"codepoints":[8593],"characters":"\u2191"},"&Uarr;":{"codepoints":[8607],"characters":"\u219F"},"&uArr;":{"codepoints":[8657],"characters":"\u21D1"},"&Uarrocir;":{"codepoints":[10569],"characters":"\u2949"},"&Ubrcy;":{"codepoints":[1038],"characters":"\u040E"},"&ubrcy;":{"codepoints":[1118],"characters":"\u045E"},"&Ubreve;":{"codepoints":[364],"characters":"\u016C"},"&ubreve;":{"codepoints":[365],"characters":"\u016D"},"&Ucirc;":{"codepoints":[219],"characters":"\xDB"},"&Ucirc":{"codepoints":[219],"characters":"\xDB"},"&ucirc;":{"codepoints":[251],"characters":"\xFB"},"&ucirc":{"codepoints":[251],"characters":"\xFB"},"&Ucy;":{"codepoints":[1059],"characters":"\u0423"},"&ucy;":{"codepoints":[1091],"characters":"\u0443"},"&udarr;":{"codepoints":[8645],"characters":"\u21C5"},"&Udblac;":{"codepoints":[368],"characters":"\u0170"},"&udblac;":{"codepoints":[369],"characters":"\u0171"},"&udhar;":{"codepoints":[10606],"characters":"\u296E"},"&ufisht;":{"codepoints":[10622],"characters":"\u297E"},"&Ufr;":{"codepoints":[120088],"characters":"\uD835\uDD18"},"&ufr;":{"codepoints":[120114],"characters":"\uD835\uDD32"},"&Ugrave;":{"codepoints":[217],"characters":"\xD9"},"&Ugrave":{"codepoints":[217],"characters":"\xD9"},"&ugrave;":{"codepoints":[249],"characters":"\xF9"},"&ugrave":{"codepoints":[249],"characters":"\xF9"},"&uHar;":{"codepoints":[10595],"characters":"\u2963"},"&uharl;":{"codepoints":[8639],"characters":"\u21BF"},"&uharr;":{"codepoints":[8638],"characters":"\u21BE"},"&uhblk;":{"codepoints":[9600],"characters":"\u2580"},"&ulcorn;":{"codepoints":[8988],"characters":"\u231C"},"&ulcorner;":{"codepoints":[8988],"characters":"\u231C"},"&ulcrop;":{"codepoints":[8975],"characters":"\u230F"},"&ultri;":{"codepoints":[9720],"characters":"\u25F8"},"&Umacr;":{"codepoints":[362],"characters":"\u016A"},"&umacr;":{"codepoints":[363],"characters":"\u016B"},"&uml;":{"codepoints":[168],"characters":"\xA8"},"&uml":{"codepoints":[168],"characters":"\xA8"},"&UnderBar;":{"codepoints":[95],"characters":"_"},"&UnderBrace;":{"codepoints":[9183],"characters":"\u23DF"},"&UnderBracket;":{"codepoints":[9141],"characters":"\u23B5"},"&UnderParenthesis;":{"codepoints":[9181],"characters":"\u23DD"},"&Union;":{"codepoints":[8899],"characters":"\u22C3"},"&UnionPlus;":{"codepoints":[8846],"characters":"\u228E"},"&Uogon;":{"codepoints":[370],"characters":"\u0172"},"&uogon;":{"codepoints":[371],"characters":"\u0173"},"&Uopf;":{"codepoints":[120140],"characters":"\uD835\uDD4C"},"&uopf;":{"codepoints":[120166],"characters":"\uD835\uDD66"},"&UpArrowBar;":{"codepoints":[10514],"characters":"\u2912"},"&uparrow;":{"codepoints":[8593],"characters":"\u2191"},"&UpArrow;":{"codepoints":[8593],"characters":"\u2191"},"&Uparrow;":{"codepoints":[8657],"characters":"\u21D1"},"&UpArrowDownArrow;":{"codepoints":[8645],"characters":"\u21C5"},"&updownarrow;":{"codepoints":[8597],"characters":"\u2195"},"&UpDownArrow;":{"codepoints":[8597],"characters":"\u2195"},"&Updownarrow;":{"codepoints":[8661],"characters":"\u21D5"},"&UpEquilibrium;":{"codepoints":[10606],"characters":"\u296E"},"&upharpoonleft;":{"codepoints":[8639],"characters":"\u21BF"},"&upharpoonright;":{"codepoints":[8638],"characters":"\u21BE"},"&uplus;":{"codepoints":[8846],"characters":"\u228E"},"&UpperLeftArrow;":{"codepoints":[8598],"characters":"\u2196"},"&UpperRightArrow;":{"codepoints":[8599],"characters":"\u2197"},"&upsi;":{"codepoints":[965],"characters":"\u03C5"},"&Upsi;":{"codepoints":[978],"characters":"\u03D2"},"&upsih;":{"codepoints":[978],"characters":"\u03D2"},"&Upsilon;":{"codepoints":[933],"characters":"\u03A5"},"&upsilon;":{"codepoints":[965],"characters":"\u03C5"},"&UpTeeArrow;":{"codepoints":[8613],"characters":"\u21A5"},"&UpTee;":{"codepoints":[8869],"characters":"\u22A5"},"&upuparrows;":{"codepoints":[8648],"characters":"\u21C8"},"&urcorn;":{"codepoints":[8989],"characters":"\u231D"},"&urcorner;":{"codepoints":[8989],"characters":"\u231D"},"&urcrop;":{"codepoints":[8974],"characters":"\u230E"},"&Uring;":{"codepoints":[366],"characters":"\u016E"},"&uring;":{"codepoints":[367],"characters":"\u016F"},"&urtri;":{"codepoints":[9721],"characters":"\u25F9"},"&Uscr;":{"codepoints":[119984],"characters":"\uD835\uDCB0"},"&uscr;":{"codepoints":[120010],"characters":"\uD835\uDCCA"},"&utdot;":{"codepoints":[8944],"characters":"\u22F0"},"&Utilde;":{"codepoints":[360],"characters":"\u0168"},"&utilde;":{"codepoints":[361],"characters":"\u0169"},"&utri;":{"codepoints":[9653],"characters":"\u25B5"},"&utrif;":{"codepoints":[9652],"characters":"\u25B4"},"&uuarr;":{"codepoints":[8648],"characters":"\u21C8"},"&Uuml;":{"codepoints":[220],"characters":"\xDC"},"&Uuml":{"codepoints":[220],"characters":"\xDC"},"&uuml;":{"codepoints":[252],"characters":"\xFC"},"&uuml":{"codepoints":[252],"characters":"\xFC"},"&uwangle;":{"codepoints":[10663],"characters":"\u29A7"},"&vangrt;":{"codepoints":[10652],"characters":"\u299C"},"&varepsilon;":{"codepoints":[1013],"characters":"\u03F5"},"&varkappa;":{"codepoints":[1008],"characters":"\u03F0"},"&varnothing;":{"codepoints":[8709],"characters":"\u2205"},"&varphi;":{"codepoints":[981],"characters":"\u03D5"},"&varpi;":{"codepoints":[982],"characters":"\u03D6"},"&varpropto;":{"codepoints":[8733],"characters":"\u221D"},"&varr;":{"codepoints":[8597],"characters":"\u2195"},"&vArr;":{"codepoints":[8661],"characters":"\u21D5"},"&varrho;":{"codepoints":[1009],"characters":"\u03F1"},"&varsigma;":{"codepoints":[962],"characters":"\u03C2"},"&varsubsetneq;":{"codepoints":[8842,65024],"characters":"\u228A\uFE00"},"&varsubsetneqq;":{"codepoints":[10955,65024],"characters":"\u2ACB\uFE00"},"&varsupsetneq;":{"codepoints":[8843,65024],"characters":"\u228B\uFE00"},"&varsupsetneqq;":{"codepoints":[10956,65024],"characters":"\u2ACC\uFE00"},"&vartheta;":{"codepoints":[977],"characters":"\u03D1"},"&vartriangleleft;":{"codepoints":[8882],"characters":"\u22B2"},"&vartriangleright;":{"codepoints":[8883],"characters":"\u22B3"},"&vBar;":{"codepoints":[10984],"characters":"\u2AE8"},"&Vbar;":{"codepoints":[10987],"characters":"\u2AEB"},"&vBarv;":{"codepoints":[10985],"characters":"\u2AE9"},"&Vcy;":{"codepoints":[1042],"characters":"\u0412"},"&vcy;":{"codepoints":[1074],"characters":"\u0432"},"&vdash;":{"codepoints":[8866],"characters":"\u22A2"},"&vDash;":{"codepoints":[8872],"characters":"\u22A8"},"&Vdash;":{"codepoints":[8873],"characters":"\u22A9"},"&VDash;":{"codepoints":[8875],"characters":"\u22AB"},"&Vdashl;":{"codepoints":[10982],"characters":"\u2AE6"},"&veebar;":{"codepoints":[8891],"characters":"\u22BB"},"&vee;":{"codepoints":[8744],"characters":"\u2228"},"&Vee;":{"codepoints":[8897],"characters":"\u22C1"},"&veeeq;":{"codepoints":[8794],"characters":"\u225A"},"&vellip;":{"codepoints":[8942],"characters":"\u22EE"},"&verbar;":{"codepoints":[124],"characters":"|"},"&Verbar;":{"codepoints":[8214],"characters":"\u2016"},"&vert;":{"codepoints":[124],"characters":"|"},"&Vert;":{"codepoints":[8214],"characters":"\u2016"},"&VerticalBar;":{"codepoints":[8739],"characters":"\u2223"},"&VerticalLine;":{"codepoints":[124],"characters":"|"},"&VerticalSeparator;":{"codepoints":[10072],"characters":"\u2758"},"&VerticalTilde;":{"codepoints":[8768],"characters":"\u2240"},"&VeryThinSpace;":{"codepoints":[8202],"characters":"\u200A"},"&Vfr;":{"codepoints":[120089],"characters":"\uD835\uDD19"},"&vfr;":{"codepoints":[120115],"characters":"\uD835\uDD33"},"&vltri;":{"codepoints":[8882],"characters":"\u22B2"},"&vnsub;":{"codepoints":[8834,8402],"characters":"\u2282\u20D2"},"&vnsup;":{"codepoints":[8835,8402],"characters":"\u2283\u20D2"},"&Vopf;":{"codepoints":[120141],"characters":"\uD835\uDD4D"},"&vopf;":{"codepoints":[120167],"characters":"\uD835\uDD67"},"&vprop;":{"codepoints":[8733],"characters":"\u221D"},"&vrtri;":{"codepoints":[8883],"characters":"\u22B3"},"&Vscr;":{"codepoints":[119985],"characters":"\uD835\uDCB1"},"&vscr;":{"codepoints":[120011],"characters":"\uD835\uDCCB"},"&vsubnE;":{"codepoints":[10955,65024],"characters":"\u2ACB\uFE00"},"&vsubne;":{"codepoints":[8842,65024],"characters":"\u228A\uFE00"},"&vsupnE;":{"codepoints":[10956,65024],"characters":"\u2ACC\uFE00"},"&vsupne;":{"codepoints":[8843,65024],"characters":"\u228B\uFE00"},"&Vvdash;":{"codepoints":[8874],"characters":"\u22AA"},"&vzigzag;":{"codepoints":[10650],"characters":"\u299A"},"&Wcirc;":{"codepoints":[372],"characters":"\u0174"},"&wcirc;":{"codepoints":[373],"characters":"\u0175"},"&wedbar;":{"codepoints":[10847],"characters":"\u2A5F"},"&wedge;":{"codepoints":[8743],"characters":"\u2227"},"&Wedge;":{"codepoints":[8896],"characters":"\u22C0"},"&wedgeq;":{"codepoints":[8793],"characters":"\u2259"},"&weierp;":{"codepoints":[8472],"characters":"\u2118"},"&Wfr;":{"codepoints":[120090],"characters":"\uD835\uDD1A"},"&wfr;":{"codepoints":[120116],"characters":"\uD835\uDD34"},"&Wopf;":{"codepoints":[120142],"characters":"\uD835\uDD4E"},"&wopf;":{"codepoints":[120168],"characters":"\uD835\uDD68"},"&wp;":{"codepoints":[8472],"characters":"\u2118"},"&wr;":{"codepoints":[8768],"characters":"\u2240"},"&wreath;":{"codepoints":[8768],"characters":"\u2240"},"&Wscr;":{"codepoints":[119986],"characters":"\uD835\uDCB2"},"&wscr;":{"codepoints":[120012],"characters":"\uD835\uDCCC"},"&xcap;":{"codepoints":[8898],"characters":"\u22C2"},"&xcirc;":{"codepoints":[9711],"characters":"\u25EF"},"&xcup;":{"codepoints":[8899],"characters":"\u22C3"},"&xdtri;":{"codepoints":[9661],"characters":"\u25BD"},"&Xfr;":{"codepoints":[120091],"characters":"\uD835\uDD1B"},"&xfr;":{"codepoints":[120117],"characters":"\uD835\uDD35"},"&xharr;":{"codepoints":[10231],"characters":"\u27F7"},"&xhArr;":{"codepoints":[10234],"characters":"\u27FA"},"&Xi;":{"codepoints":[926],"characters":"\u039E"},"&xi;":{"codepoints":[958],"characters":"\u03BE"},"&xlarr;":{"codepoints":[10229],"characters":"\u27F5"},"&xlArr;":{"codepoints":[10232],"characters":"\u27F8"},"&xmap;":{"codepoints":[10236],"characters":"\u27FC"},"&xnis;":{"codepoints":[8955],"characters":"\u22FB"},"&xodot;":{"codepoints":[10752],"characters":"\u2A00"},"&Xopf;":{"codepoints":[120143],"characters":"\uD835\uDD4F"},"&xopf;":{"codepoints":[120169],"characters":"\uD835\uDD69"},"&xoplus;":{"codepoints":[10753],"characters":"\u2A01"},"&xotime;":{"codepoints":[10754],"characters":"\u2A02"},"&xrarr;":{"codepoints":[10230],"characters":"\u27F6"},"&xrArr;":{"codepoints":[10233],"characters":"\u27F9"},"&Xscr;":{"codepoints":[119987],"characters":"\uD835\uDCB3"},"&xscr;":{"codepoints":[120013],"characters":"\uD835\uDCCD"},"&xsqcup;":{"codepoints":[10758],"characters":"\u2A06"},"&xuplus;":{"codepoints":[10756],"characters":"\u2A04"},"&xutri;":{"codepoints":[9651],"characters":"\u25B3"},"&xvee;":{"codepoints":[8897],"characters":"\u22C1"},"&xwedge;":{"codepoints":[8896],"characters":"\u22C0"},"&Yacute;":{"codepoints":[221],"characters":"\xDD"},"&Yacute":{"codepoints":[221],"characters":"\xDD"},"&yacute;":{"codepoints":[253],"characters":"\xFD"},"&yacute":{"codepoints":[253],"characters":"\xFD"},"&YAcy;":{"codepoints":[1071],"characters":"\u042F"},"&yacy;":{"codepoints":[1103],"characters":"\u044F"},"&Ycirc;":{"codepoints":[374],"characters":"\u0176"},"&ycirc;":{"codepoints":[375],"characters":"\u0177"},"&Ycy;":{"codepoints":[1067],"characters":"\u042B"},"&ycy;":{"codepoints":[1099],"characters":"\u044B"},"&yen;":{"codepoints":[165],"characters":"\xA5"},"&yen":{"codepoints":[165],"characters":"\xA5"},"&Yfr;":{"codepoints":[120092],"characters":"\uD835\uDD1C"},"&yfr;":{"codepoints":[120118],"characters":"\uD835\uDD36"},"&YIcy;":{"codepoints":[1031],"characters":"\u0407"},"&yicy;":{"codepoints":[1111],"characters":"\u0457"},"&Yopf;":{"codepoints":[120144],"characters":"\uD835\uDD50"},"&yopf;":{"codepoints":[120170],"characters":"\uD835\uDD6A"},"&Yscr;":{"codepoints":[119988],"characters":"\uD835\uDCB4"},"&yscr;":{"codepoints":[120014],"characters":"\uD835\uDCCE"},"&YUcy;":{"codepoints":[1070],"characters":"\u042E"},"&yucy;":{"codepoints":[1102],"characters":"\u044E"},"&yuml;":{"codepoints":[255],"characters":"\xFF"},"&yuml":{"codepoints":[255],"characters":"\xFF"},"&Yuml;":{"codepoints":[376],"characters":"\u0178"},"&Zacute;":{"codepoints":[377],"characters":"\u0179"},"&zacute;":{"codepoints":[378],"characters":"\u017A"},"&Zcaron;":{"codepoints":[381],"characters":"\u017D"},"&zcaron;":{"codepoints":[382],"characters":"\u017E"},"&Zcy;":{"codepoints":[1047],"characters":"\u0417"},"&zcy;":{"codepoints":[1079],"characters":"\u0437"},"&Zdot;":{"codepoints":[379],"characters":"\u017B"},"&zdot;":{"codepoints":[380],"characters":"\u017C"},"&zeetrf;":{"codepoints":[8488],"characters":"\u2128"},"&ZeroWidthSpace;":{"codepoints":[8203],"characters":"\u200B"},"&Zeta;":{"codepoints":[918],"characters":"\u0396"},"&zeta;":{"codepoints":[950],"characters":"\u03B6"},"&zfr;":{"codepoints":[120119],"characters":"\uD835\uDD37"},"&Zfr;":{"codepoints":[8488],"characters":"\u2128"},"&ZHcy;":{"codepoints":[1046],"characters":"\u0416"},"&zhcy;":{"codepoints":[1078],"characters":"\u0436"},"&zigrarr;":{"codepoints":[8669],"characters":"\u21DD"},"&zopf;":{"codepoints":[120171],"characters":"\uD835\uDD6B"},"&Zopf;":{"codepoints":[8484],"characters":"\u2124"},"&Zscr;":{"codepoints":[119989],"characters":"\uD835\uDCB5"},"&zscr;":{"codepoints":[120015],"characters":"\uD835\uDCCF"},"&zwj;":{"codepoints":[8205],"characters":"\u200D"},"&zwnj;":{"codepoints":[8204],"characters":"\u200C"}};var ALPHANUMERIC=/^[a-zA-Z0-9]/;var getPossibleNamedEntityStart=makeRegexMatcher(/^&[a-zA-Z0-9]/);var getApparentNamedEntity=makeRegexMatcher(/^&[a-zA-Z0-9]+;/);var getNamedEntityByFirstChar={};(function(){var namedEntitiesByFirstChar={};for(var ent in ENTITIES){var chr=ent.charAt(1);namedEntitiesByFirstChar[chr]=namedEntitiesByFirstChar[chr]||[];namedEntitiesByFirstChar[chr].push(ent.slice(2));}for(var chr in namedEntitiesByFirstChar){getNamedEntityByFirstChar[chr]=makeRegexMatcher(new RegExp('^&'+chr+'(?:'+namedEntitiesByFirstChar[chr].join('|')+')'));}})();// Run a provided "matcher" function but reset the current position afterwards.
// Fatal failure of the matcher is not suppressed.
var peekMatcher=function peekMatcher(scanner,matcher){var start=scanner.pos;var result=matcher(scanner);scanner.pos=start;return result;};// Returns a string like "&amp;" or a falsy value if no match.  Fails fatally
// if something looks like a named entity but isn't.
var getNamedCharRef=function getNamedCharRef(scanner,inAttribute){// look for `&` followed by alphanumeric
if(!peekMatcher(scanner,getPossibleNamedEntityStart))return null;var matcher=getNamedEntityByFirstChar[scanner.rest().charAt(1)];var entity=null;if(matcher)entity=peekMatcher(scanner,matcher);if(entity){if(entity.slice(-1)!==';'){// Certain character references with no semi are an error, like `&lt`.
// In attribute values, however, this is not fatal if the next character
// is alphanumeric.
//
// This rule affects href attributes, for example, deeming "/?foo=bar&ltc=abc"
// to be ok but "/?foo=bar&lt=abc" to not be.
if(inAttribute&&ALPHANUMERIC.test(scanner.rest().charAt(entity.length)))return null;scanner.fatal("Character reference requires semicolon: "+entity);}else{scanner.pos+=entity.length;return entity;}}else{// we couldn't match any real entity, so see if this is a bad entity
// or something we can overlook.
var badEntity=peekMatcher(scanner,getApparentNamedEntity);if(badEntity)scanner.fatal("Invalid character reference: "+badEntity);// `&aaaa` is ok with no semicolon
return null;}};// Returns the sequence of one or two codepoints making up an entity as an array.
// Codepoints in the array are integers and may be out of the single-char JavaScript
// range.
var getCodePoints=function getCodePoints(namedEntity){return ENTITIES[namedEntity].codepoints;};var ALLOWED_AFTER_AMP=/^[\u0009\u000a\u000c <&]/;var getCharRefNumber=makeRegexMatcher(/^(?:[xX][0-9a-fA-F]+|[0-9]+);/);var BIG_BAD_CODEPOINTS=function(obj){var list=[0x1FFFE,0x1FFFF,0x2FFFE,0x2FFFF,0x3FFFE,0x3FFFF,0x4FFFE,0x4FFFF,0x5FFFE,0x5FFFF,0x6FFFE,0x6FFFF,0x7FFFE,0x7FFFF,0x8FFFE,0x8FFFF,0x9FFFE,0x9FFFF,0xAFFFE,0xAFFFF,0xBFFFE,0xBFFFF,0xCFFFE,0xCFFFF,0xDFFFE,0xDFFFF,0xEFFFE,0xEFFFF,0xFFFFE,0xFFFFF,0x10FFFE,0x10FFFF];for(var i=0;i<list.length;i++){obj[list[i]]=true;}return obj;}({});var isLegalCodepoint=function isLegalCodepoint(cp){if(cp===0||cp>=0x80&&cp<=0x9f||cp>=0xd800&&cp<=0xdfff||cp>=0x10ffff||cp>=0x1&&cp<=0x8||cp===0xb||cp>=0xd&&cp<=0x1f||cp>=0x7f&&cp<=0x9f||cp>=0xfdd0&&cp<=0xfdef||cp===0xfffe||cp===0xffff||cp>=0x10000&&BIG_BAD_CODEPOINTS[cp])return false;return true;};// http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#consume-a-character-reference
//
// Matches a character reference if possible, including the initial `&`.
// Fails fatally in error cases (assuming an initial `&` is matched), like a disallowed codepoint
// number or a bad named character reference.
//
// `inAttribute` is truthy if we are in an attribute value.
//
// `allowedChar` is an optional character that,
// if found after the initial `&`, aborts parsing silently rather than failing fatally.  In real use it is
// either `"`, `'`, or `>` and is supplied when parsing attribute values.  NOTE: In the current spec, the
// value of `allowedChar` doesn't actually seem to end up mattering, but there is still some debate about
// the right approach to ampersands.
getCharacterReference=HTMLTools.Parse.getCharacterReference=function(scanner,inAttribute,allowedChar){if(scanner.peek()!=='&')// no ampersand
return null;var afterAmp=scanner.rest().charAt(1);if(afterAmp==='#'){scanner.pos+=2;// refNumber includes possible initial `x` and final semicolon
var refNumber=getCharRefNumber(scanner);// At this point we've consumed the input, so we're committed to returning
// something or failing fatally.
if(!refNumber)scanner.fatal("Invalid numerical character reference starting with &#");var codepoint;if(refNumber.charAt(0)==='x'||refNumber.charAt(0)==='X'){// hex
var hex=refNumber.slice(1,-1);while(hex.charAt(0)==='0'){hex=hex.slice(1);}if(hex.length>6)scanner.fatal("Numerical character reference too large: 0x"+hex);codepoint=parseInt(hex||"0",16);}else{var dec=refNumber.slice(0,-1);while(dec.charAt(0)==='0'){dec=dec.slice(1);}if(dec.length>7)scanner.fatal("Numerical character reference too large: "+dec);codepoint=parseInt(dec||"0",10);}if(!isLegalCodepoint(codepoint))scanner.fatal("Illegal codepoint in numerical character reference: &#"+refNumber);return{t:'CharRef',v:'&#'+refNumber,cp:[codepoint]};}else if(!afterAmp||// EOF
allowedChar&&afterAmp===allowedChar||ALLOWED_AFTER_AMP.test(afterAmp)){return null;}else{var namedEntity=getNamedCharRef(scanner,inAttribute);if(namedEntity){return{t:'CharRef',v:namedEntity,cp:getCodePoints(namedEntity)};}else{return null;}}};// Token types:
//
// { t: 'Doctype',
//   v: String (entire Doctype declaration from the source),
//   name: String,
//   systemId: String (optional),
//   publicId: String (optional)
// }
//
// { t: 'Comment',
//   v: String (not including "<!--" and "-->")
// }
//
// { t: 'Chars',
//   v: String (pure text like you might pass to document.createTextNode,
//              no character references)
// }
//
// { t: 'Tag',
//   isEnd: Boolean (optional),
//   isSelfClosing: Boolean (optional),
//   n: String (tag name, in lowercase or camel case),
//   attrs: dictionary of { String: [tokens] }
//          OR [{ String: [tokens] }, TemplateTag tokens...]
//     (only for start tags; required)
// }
//
// { t: 'CharRef',
//   v: String (entire character reference from the source, e.g. "&amp;"),
//   cp: [Integer] (array of Unicode code point numbers it expands to)
// }
//
// We keep around both the original form of the character reference and its
// expansion so that subsequent processing steps have the option to
// re-emit it (if they are generating HTML) or interpret it.  Named and
// numerical code points may be more than 16 bits, in which case they
// need to passed through codePointToString to make a JavaScript string.
// Most named entities and all numeric character references are one codepoint
// (e.g. "&amp;" is [38]), but a few are two codepoints.
//
// { t: 'TemplateTag',
//   v: HTMLTools.TemplateTag
// }
// The HTML tokenization spec says to preprocess the input stream to replace
// CR(LF)? with LF.  However, preprocessing `scanner` would complicate things
// by making indexes not match the input (e.g. for error messages), so we just
// keep in mind as we go along that an LF might be represented by CRLF or CR.
// In most cases, it doesn't actually matter what combination of whitespace
// characters are present (e.g. inside tags).
var HTML_SPACE=/^[\f\n\r\t ]/;var convertCRLF=function convertCRLF(str){return str.replace(/\r\n?/g,'\n');};getComment=HTMLTools.Parse.getComment=function(scanner){if(scanner.rest().slice(0,4)!=='<!--')return null;scanner.pos+=4;// Valid comments are easy to parse; they end at the first `--`!
// Our main job is throwing errors.
var rest=scanner.rest();if(rest.charAt(0)==='>'||rest.slice(0,2)==='->')scanner.fatal("HTML comment can't start with > or ->");var closePos=rest.indexOf('-->');if(closePos<0)scanner.fatal("Unclosed HTML comment");var commentContents=rest.slice(0,closePos);if(commentContents.slice(-1)==='-')scanner.fatal("HTML comment must end at first `--`");if(commentContents.indexOf("--")>=0)scanner.fatal("HTML comment cannot contain `--` anywhere");if(commentContents.indexOf("\0")>=0)scanner.fatal("HTML comment cannot contain NULL");scanner.pos+=closePos+3;return{t:'Comment',v:convertCRLF(commentContents)};};var skipSpaces=function skipSpaces(scanner){while(HTML_SPACE.test(scanner.peek())){scanner.pos++;}};var requireSpaces=function requireSpaces(scanner){if(!HTML_SPACE.test(scanner.peek()))scanner.fatal("Expected space");skipSpaces(scanner);};var getDoctypeQuotedString=function getDoctypeQuotedString(scanner){var quote=scanner.peek();if(!(quote==='"'||quote==="'"))scanner.fatal("Expected single or double quote in DOCTYPE");scanner.pos++;if(scanner.peek()===quote)// prevent a falsy return value (empty string)
scanner.fatal("Malformed DOCTYPE");var str='';var ch;while(ch=scanner.peek(),ch!==quote){if(!ch||ch==="\0"||ch==='>')scanner.fatal("Malformed DOCTYPE");str+=ch;scanner.pos++;}scanner.pos++;return str;};// See http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html#the-doctype.
//
// If `getDocType` sees "<!DOCTYPE" (case-insensitive), it will match or fail fatally.
getDoctype=HTMLTools.Parse.getDoctype=function(scanner){if(HTMLTools.asciiLowerCase(scanner.rest().slice(0,9))!=='<!doctype')return null;var start=scanner.pos;scanner.pos+=9;requireSpaces(scanner);var ch=scanner.peek();if(!ch||ch==='>'||ch==="\0")scanner.fatal('Malformed DOCTYPE');var name=ch;scanner.pos++;while(ch=scanner.peek(),!(HTML_SPACE.test(ch)||ch==='>')){if(!ch||ch==="\0")scanner.fatal('Malformed DOCTYPE');name+=ch;scanner.pos++;}name=HTMLTools.asciiLowerCase(name);// Now we're looking at a space or a `>`.
skipSpaces(scanner);var systemId=null;var publicId=null;if(scanner.peek()!=='>'){// Now we're essentially in the "After DOCTYPE name state" of the tokenizer,
// but we're not looking at space or `>`.
// this should be "public" or "system".
var publicOrSystem=HTMLTools.asciiLowerCase(scanner.rest().slice(0,6));if(publicOrSystem==='system'){scanner.pos+=6;requireSpaces(scanner);systemId=getDoctypeQuotedString(scanner);skipSpaces(scanner);if(scanner.peek()!=='>')scanner.fatal("Malformed DOCTYPE");}else if(publicOrSystem==='public'){scanner.pos+=6;requireSpaces(scanner);publicId=getDoctypeQuotedString(scanner);if(scanner.peek()!=='>'){requireSpaces(scanner);if(scanner.peek()!=='>'){systemId=getDoctypeQuotedString(scanner);skipSpaces(scanner);if(scanner.peek()!=='>')scanner.fatal("Malformed DOCTYPE");}}}else{scanner.fatal("Expected PUBLIC or SYSTEM in DOCTYPE");}}// looking at `>`
scanner.pos++;var result={t:'Doctype',v:scanner.input.slice(start,scanner.pos),name:name};if(systemId)result.systemId=systemId;if(publicId)result.publicId=publicId;return result;};// The special character `{` is only allowed as the first character
// of a Chars, so that we have a chance to detect template tags.
var getChars=makeRegexMatcher(/^[^&<\u0000][^&<\u0000{]*/);var assertIsTemplateTag=function assertIsTemplateTag(x){if(!(x instanceof HTMLTools.TemplateTag))throw new Error("Expected an instance of HTMLTools.TemplateTag");return x;};// Returns the next HTML token, or `null` if we reach EOF.
//
// Note that if we have a `getTemplateTag` function that sometimes
// consumes characters and emits nothing (e.g. in the case of template
// comments), we may go from not-at-EOF to at-EOF and return `null`,
// while otherwise we always find some token to return.
getHTMLToken=HTMLTools.Parse.getHTMLToken=function(scanner,dataMode){var result=null;if(scanner.getTemplateTag){// Try to parse a template tag by calling out to the provided
// `getTemplateTag` function.  If the function returns `null` but
// consumes characters, it must have parsed a comment or something,
// so we loop and try it again.  If it ever returns `null` without
// consuming anything, that means it didn't see anything interesting
// so we look for a normal token.  If it returns a truthy value,
// the value must be instanceof HTMLTools.TemplateTag.  We wrap it
// in a Special token.
var lastPos=scanner.pos;result=scanner.getTemplateTag(scanner,dataMode==='rcdata'?TEMPLATE_TAG_POSITION.IN_RCDATA:dataMode==='rawtext'?TEMPLATE_TAG_POSITION.IN_RAWTEXT:TEMPLATE_TAG_POSITION.ELEMENT);if(result)return{t:'TemplateTag',v:assertIsTemplateTag(result)};else if(scanner.pos>lastPos)return null;}var chars=getChars(scanner);if(chars)return{t:'Chars',v:convertCRLF(chars)};var ch=scanner.peek();if(!ch)return null;// EOF
if(ch==="\0")scanner.fatal("Illegal NULL character");if(ch==='&'){if(dataMode!=='rawtext'){var charRef=getCharacterReference(scanner);if(charRef)return charRef;}scanner.pos++;return{t:'Chars',v:'&'};}// If we're here, we're looking at `<`.
if(scanner.peek()==='<'&&dataMode){// don't interpret tags
scanner.pos++;return{t:'Chars',v:'<'};}// `getTag` will claim anything starting with `<` not followed by `!`.
// `getComment` takes `<!--` and getDoctype takes `<!doctype`.
result=getTagToken(scanner)||getComment(scanner)||getDoctype(scanner);if(result)return result;scanner.fatal("Unexpected `<!` directive.");};var getTagName=makeRegexMatcher(/^[a-zA-Z][^\f\n\r\t />{]*/);var getClangle=makeRegexMatcher(/^>/);var getSlash=makeRegexMatcher(/^\//);var getAttributeName=makeRegexMatcher(/^[^>/\u0000"'<=\f\n\r\t ][^\f\n\r\t /=>"'<\u0000]*/);// Try to parse `>` or `/>`, mutating `tag` to be self-closing in the latter
// case (and failing fatally if `/` isn't followed by `>`).
// Return tag if successful.
var handleEndOfTag=function handleEndOfTag(scanner,tag){if(getClangle(scanner))return tag;if(getSlash(scanner)){if(!getClangle(scanner))scanner.fatal("Expected `>` after `/`");tag.isSelfClosing=true;return tag;}return null;};// Scan a quoted or unquoted attribute value (omit `quote` for unquoted).
var getAttributeValue=function getAttributeValue(scanner,quote){if(quote){if(scanner.peek()!==quote)return null;scanner.pos++;}var tokens=[];var charsTokenToExtend=null;var charRef;while(true){var ch=scanner.peek();var templateTag;var curPos=scanner.pos;if(quote&&ch===quote){scanner.pos++;return tokens;}else if(!quote&&(HTML_SPACE.test(ch)||ch==='>')){return tokens;}else if(!ch){scanner.fatal("Unclosed attribute in tag");}else if(quote?ch==="\0":"\0\"'<=`".indexOf(ch)>=0){scanner.fatal("Unexpected character in attribute value");}else if(ch==='&'&&(charRef=getCharacterReference(scanner,true,quote||'>'))){tokens.push(charRef);charsTokenToExtend=null;}else if(scanner.getTemplateTag&&((templateTag=scanner.getTemplateTag(scanner,TEMPLATE_TAG_POSITION.IN_ATTRIBUTE))||scanner.pos>curPos/* `{{! comment}}` */)){if(templateTag){tokens.push({t:'TemplateTag',v:assertIsTemplateTag(templateTag)});charsTokenToExtend=null;}}else{if(!charsTokenToExtend){charsTokenToExtend={t:'Chars',v:''};tokens.push(charsTokenToExtend);}charsTokenToExtend.v+=ch==='\r'?'\n':ch;scanner.pos++;if(quote&&ch==='\r'&&scanner.peek()==='\n')scanner.pos++;}}};var hasOwnProperty=Object.prototype.hasOwnProperty;getTagToken=HTMLTools.Parse.getTagToken=function(scanner){if(!(scanner.peek()==='<'&&scanner.rest().charAt(1)!=='!'))return null;scanner.pos++;var tag={t:'Tag'};// now looking at the character after `<`, which is not a `!`
if(scanner.peek()==='/'){tag.isEnd=true;scanner.pos++;}var tagName=getTagName(scanner);if(!tagName)scanner.fatal("Expected tag name after `<`");tag.n=HTMLTools.properCaseTagName(tagName);if(scanner.peek()==='/'&&tag.isEnd)scanner.fatal("End tag can't have trailing slash");if(handleEndOfTag(scanner,tag))return tag;if(scanner.isEOF())scanner.fatal("Unclosed `<`");if(!HTML_SPACE.test(scanner.peek()))// e.g. `<a{{b}}>`
scanner.fatal("Expected space after tag name");// we're now in "Before attribute name state" of the tokenizer
skipSpaces(scanner);if(scanner.peek()==='/'&&tag.isEnd)scanner.fatal("End tag can't have trailing slash");if(handleEndOfTag(scanner,tag))return tag;if(tag.isEnd)scanner.fatal("End tag can't have attributes");tag.attrs={};var nondynamicAttrs=tag.attrs;while(true){// Note: at the top of this loop, we've already skipped any spaces.
// This will be set to true if after parsing the attribute, we should
// require spaces (or else an end of tag, i.e. `>` or `/>`).
var spacesRequiredAfter=false;// first, try for a template tag.
var curPos=scanner.pos;var templateTag=scanner.getTemplateTag&&scanner.getTemplateTag(scanner,TEMPLATE_TAG_POSITION.IN_START_TAG);if(templateTag||scanner.pos>curPos){if(templateTag){if(tag.attrs===nondynamicAttrs)tag.attrs=[nondynamicAttrs];tag.attrs.push({t:'TemplateTag',v:assertIsTemplateTag(templateTag)});}// else, must have scanned a `{{! comment}}`
spacesRequiredAfter=true;}else{var attributeName=getAttributeName(scanner);if(!attributeName)scanner.fatal("Expected attribute name in tag");// Throw error on `{` in attribute name.  This provides *some* error message
// if someone writes `<a x{{y}}>` or `<a x{{y}}=z>`.  The HTML tokenization
// spec doesn't say that `{` is invalid, but the DOM API (setAttribute) won't
// allow it, so who cares.
if(attributeName.indexOf('{')>=0)scanner.fatal("Unexpected `{` in attribute name.");attributeName=HTMLTools.properCaseAttributeName(attributeName);if(hasOwnProperty.call(nondynamicAttrs,attributeName))scanner.fatal("Duplicate attribute in tag: "+attributeName);nondynamicAttrs[attributeName]=[];skipSpaces(scanner);if(handleEndOfTag(scanner,tag))return tag;var ch=scanner.peek();if(!ch)scanner.fatal("Unclosed <");if("\0\"'<".indexOf(ch)>=0)scanner.fatal("Unexpected character after attribute name in tag");if(ch==='='){scanner.pos++;skipSpaces(scanner);ch=scanner.peek();if(!ch)scanner.fatal("Unclosed <");if("\0><=`".indexOf(ch)>=0)scanner.fatal("Unexpected character after = in tag");if(ch==='"'||ch==="'")nondynamicAttrs[attributeName]=getAttributeValue(scanner,ch);else nondynamicAttrs[attributeName]=getAttributeValue(scanner);spacesRequiredAfter=true;}}// now we are in the "post-attribute" position, whether it was a template tag
// attribute (like `{{x}}`) or a normal one (like `x` or `x=y`).
if(handleEndOfTag(scanner,tag))return tag;if(scanner.isEOF())scanner.fatal("Unclosed `<`");if(spacesRequiredAfter)requireSpaces(scanner);else skipSpaces(scanner);if(handleEndOfTag(scanner,tag))return tag;}};TEMPLATE_TAG_POSITION=HTMLTools.TEMPLATE_TAG_POSITION={ELEMENT:1,IN_START_TAG:2,IN_ATTRIBUTE:3,IN_RCDATA:4,IN_RAWTEXT:5};// tagName must be proper case
isLookingAtEndTag=function isLookingAtEndTag(scanner,tagName){var rest=scanner.rest();var pos=0;// into rest
var firstPart=/^<\/([a-zA-Z]+)/.exec(rest);if(firstPart&&HTMLTools.properCaseTagName(firstPart[1])===tagName){// we've seen `</foo`, now see if the end tag continues
pos+=firstPart[0].length;while(pos<rest.length&&HTML_SPACE.test(rest.charAt(pos))){pos++;}if(pos<rest.length&&rest.charAt(pos)==='>')return true;}return false;};// _assign is like _.extend or the upcoming Object.assign.
// Copy src's own, enumerable properties onto tgt and return
// tgt.
var _hasOwnProperty=Object.prototype.hasOwnProperty;var _assign=function _assign(tgt,src){for(var k in src){if(_hasOwnProperty.call(src,k))tgt[k]=src[k];}return tgt;};HTMLTools.TemplateTag=function(props){if(!(this instanceof HTMLTools.TemplateTag))// called without `new`
return new HTMLTools.TemplateTag();if(props)_assign(this,props);};_assign(HTMLTools.TemplateTag.prototype,{constructorName:'HTMLTools.TemplateTag',toJS:function toJS(visitor){return visitor.generateCall(this.constructorName,_assign({},this));}});// Parse a "fragment" of HTML, up to the end of the input or a particular
// template tag (using the "shouldStop" option).
HTMLTools.parseFragment=function(input,options){var scanner;if(typeof input==='string')scanner=new Scanner(input);else// input can be a scanner.  We'd better not have a different
// value for the "getTemplateTag" option as when the scanner
// was created, because we don't do anything special to reset
// the value (which is attached to the scanner).
scanner=input;// ```
// { getTemplateTag: function (scanner, templateTagPosition) {
//     if (templateTagPosition === HTMLTools.TEMPLATE_TAG_POSITION.ELEMENT) {
//       ...
// ```
if(options&&options.getTemplateTag)scanner.getTemplateTag=options.getTemplateTag;// function (scanner) -> boolean
var shouldStop=options&&options.shouldStop;var result;if(options&&options.textMode){if(options.textMode===HTML.TEXTMODE.STRING){result=getRawText(scanner,null,shouldStop);}else if(options.textMode===HTML.TEXTMODE.RCDATA){result=getRCData(scanner,null,shouldStop);}else{throw new Error("Unsupported textMode: "+options.textMode);}}else{result=getContent(scanner,shouldStop);}if(!scanner.isEOF()){// If we aren't at the end of the input, we either stopped at an unmatched
// HTML end tag or at a template tag (like `{{else}}` or `{{/if}}`).
// Detect the former case (stopped at an HTML end tag) and throw a good
// error.
var posBefore=scanner.pos;try{var endTag=getHTMLToken(scanner);}catch(e){}// ignore errors from getTemplateTag
// XXX we make some assumptions about shouldStop here, like that it
// won't tell us to stop at an HTML end tag.  Should refactor
// `shouldStop` into something more suitable.
if(endTag&&endTag.t==='Tag'&&endTag.isEnd){var closeTag=endTag.n;var isVoidElement=HTML.isVoidElement(closeTag);scanner.fatal("Unexpected HTML close tag"+(isVoidElement?'.  <'+endTag.n+'> should have no close tag.':''));}scanner.pos=posBefore;// rewind, we'll continue parsing as usual
// If no "shouldStop" option was provided, we should have consumed the whole
// input.
if(!shouldStop)scanner.fatal("Expected EOF");}return result;};// Take a numeric Unicode code point, which may be larger than 16 bits,
// and encode it as a JavaScript UTF-16 string.
//
// Adapted from
// http://stackoverflow.com/questions/7126384/expressing-utf-16-unicode-characters-in-javascript/7126661.
codePointToString=HTMLTools.codePointToString=function(cp){if(cp>=0&&cp<=0xD7FF||cp>=0xE000&&cp<=0xFFFF){return String.fromCharCode(cp);}else if(cp>=0x10000&&cp<=0x10FFFF){// we substract 0x10000 from cp to get a 20-bit number
// in the range 0..0xFFFF
cp-=0x10000;// we add 0xD800 to the number formed by the first 10 bits
// to give the first byte
var first=((0xffc00&cp)>>10)+0xD800;// we add 0xDC00 to the number formed by the low 10 bits
// to give the second byte
var second=(0x3ff&cp)+0xDC00;return String.fromCharCode(first)+String.fromCharCode(second);}else{return'';}};getContent=HTMLTools.Parse.getContent=function(scanner,shouldStopFunc){var items=[];while(!scanner.isEOF()){if(shouldStopFunc&&shouldStopFunc(scanner))break;var posBefore=scanner.pos;var token=getHTMLToken(scanner);if(!token)// tokenizer reached EOF on its own, e.g. while scanning
// template comments like `{{! foo}}`.
continue;if(token.t==='Doctype'){scanner.fatal("Unexpected Doctype");}else if(token.t==='Chars'){pushOrAppendString(items,token.v);}else if(token.t==='CharRef'){items.push(convertCharRef(token));}else if(token.t==='Comment'){items.push(HTML.Comment(token.v));}else if(token.t==='TemplateTag'){items.push(token.v);}else if(token.t==='Tag'){if(token.isEnd){// Stop when we encounter an end tag at the top level.
// Rewind; we'll re-parse the end tag later.
scanner.pos=posBefore;break;}var tagName=token.n;// is this an element with no close tag (a BR, HR, IMG, etc.) based
// on its name?
var isVoid=HTML.isVoidElement(tagName);if(token.isSelfClosing){if(!(isVoid||HTML.isKnownSVGElement(tagName)||tagName.indexOf(':')>=0))scanner.fatal('Only certain elements like BR, HR, IMG, etc. (and foreign elements like SVG) are allowed to self-close');}// result of parseAttrs may be null
var attrs=parseAttrs(token.attrs);// arrays need to be wrapped in HTML.Attrs(...)
// when used to construct tags
if(HTML.isArray(attrs))attrs=HTML.Attrs.apply(null,attrs);var tagFunc=HTML.getTag(tagName);if(isVoid||token.isSelfClosing){items.push(attrs?tagFunc(attrs):tagFunc());}else{// parse HTML tag contents.
// HTML treats a final `/` in a tag as part of an attribute, as in `<a href=/foo/>`, but the template author who writes `<circle r={{r}}/>`, say, may not be thinking about that, so generate a good error message in the "looks like self-close" case.
var looksLikeSelfClose=scanner.input.substr(scanner.pos-2,2)==='/>';var content=null;if(token.n==='textarea'){if(scanner.peek()==='\n')scanner.pos++;var textareaValue=getRCData(scanner,token.n,shouldStopFunc);if(textareaValue){if(attrs instanceof HTML.Attrs){attrs=HTML.Attrs.apply(null,attrs.value.concat([{value:textareaValue}]));}else{attrs=attrs||{};attrs.value=textareaValue;}}}else if(token.n==='script'||token.n==='style'){content=getRawText(scanner,token.n,shouldStopFunc);}else{content=getContent(scanner,shouldStopFunc);}var endTag=getHTMLToken(scanner);if(!(endTag&&endTag.t==='Tag'&&endTag.isEnd&&endTag.n===tagName))scanner.fatal('Expected "'+tagName+'" end tag'+(looksLikeSelfClose?' -- if the "<'+token.n+' />" tag was supposed to self-close, try adding a space before the "/"':''));// XXX support implied end tags in cases allowed by the spec
// make `content` into an array suitable for applying tag constructor
// as in `FOO.apply(null, content)`.
if(content==null)content=[];else if(!(content instanceof Array))content=[content];items.push(HTML.getTag(tagName).apply(null,(attrs?[attrs]:[]).concat(content)));}}else{scanner.fatal("Unknown token type: "+token.t);}}if(items.length===0)return null;else if(items.length===1)return items[0];else return items;};var pushOrAppendString=function pushOrAppendString(items,string){if(items.length&&typeof items[items.length-1]==='string')items[items.length-1]+=string;else items.push(string);};// get RCDATA to go in the lowercase (or camel case) tagName (e.g. "textarea")
getRCData=HTMLTools.Parse.getRCData=function(scanner,tagName,shouldStopFunc){var items=[];while(!scanner.isEOF()){// break at appropriate end tag
if(tagName&&isLookingAtEndTag(scanner,tagName))break;if(shouldStopFunc&&shouldStopFunc(scanner))break;var token=getHTMLToken(scanner,'rcdata');if(!token)// tokenizer reached EOF on its own, e.g. while scanning
// template comments like `{{! foo}}`.
continue;if(token.t==='Chars'){pushOrAppendString(items,token.v);}else if(token.t==='CharRef'){items.push(convertCharRef(token));}else if(token.t==='TemplateTag'){items.push(token.v);}else{// (can't happen)
scanner.fatal("Unknown or unexpected token type: "+token.t);}}if(items.length===0)return null;else if(items.length===1)return items[0];else return items;};var getRawText=function getRawText(scanner,tagName,shouldStopFunc){var items=[];while(!scanner.isEOF()){// break at appropriate end tag
if(tagName&&isLookingAtEndTag(scanner,tagName))break;if(shouldStopFunc&&shouldStopFunc(scanner))break;var token=getHTMLToken(scanner,'rawtext');if(!token)// tokenizer reached EOF on its own, e.g. while scanning
// template comments like `{{! foo}}`.
continue;if(token.t==='Chars'){pushOrAppendString(items,token.v);}else if(token.t==='TemplateTag'){items.push(token.v);}else{// (can't happen)
scanner.fatal("Unknown or unexpected token type: "+token.t);}}if(items.length===0)return null;else if(items.length===1)return items[0];else return items;};// Input: A token like `{ t: 'CharRef', v: '&amp;', cp: [38] }`.
//
// Output: A tag like `HTML.CharRef({ html: '&amp;', str: '&' })`.
var convertCharRef=function convertCharRef(token){var codePoints=token.cp;var str='';for(var i=0;i<codePoints.length;i++){str+=codePointToString(codePoints[i]);}return HTML.CharRef({html:token.v,str:str});};// Input is always a dictionary (even if zero attributes) and each
// value in the dictionary is an array of `Chars`, `CharRef`,
// and maybe `TemplateTag` tokens.
//
// Output is null if there are zero attributes, and otherwise a
// dictionary, or an array of dictionaries and template tags.
// Each value in the dictionary is HTMLjs (e.g. a
// string or an array of `Chars`, `CharRef`, and `TemplateTag`
// nodes).
//
// An attribute value with no input tokens is represented as "",
// not an empty array, in order to prop open empty attributes
// with no template tags.
var parseAttrs=function parseAttrs(attrs){var result=null;if(HTML.isArray(attrs)){// first element is nondynamic attrs, rest are template tags
var nondynamicAttrs=parseAttrs(attrs[0]);if(nondynamicAttrs){result=result||[];result.push(nondynamicAttrs);}for(var i=1;i<attrs.length;i++){var token=attrs[i];if(token.t!=='TemplateTag')throw new Error("Expected TemplateTag token");result=result||[];result.push(token.v);}return result;}for(var k in attrs){if(!result)result={};var inValue=attrs[k];var outParts=[];for(var i=0;i<inValue.length;i++){var token=inValue[i];if(token.t==='CharRef'){outParts.push(convertCharRef(token));}else if(token.t==='TemplateTag'){outParts.push(token.v);}else if(token.t==='Chars'){pushOrAppendString(outParts,token.v);}}var outValue=inValue.length===0?'':outParts.length===1?outParts[0]:outParts;var properKey=HTMLTools.properCaseAttributeName(k);result[properKey]=outValue;}return result;};Meteor.HTMLTools=HTMLTools;};},{}],16:[function(require,module,exports){module.exports=function(Meteor){var IDENTITY,SLICE;var _=Meteor.underscore;var HTML;HTML={};IDENTITY=function IDENTITY(x){return x;};SLICE=Array.prototype.slice;////////////////////////////// VISITORS
// _assign is like _.extend or the upcoming Object.assign.
// Copy src's own, enumerable properties onto tgt and return
// tgt.
var _hasOwnProperty=Object.prototype.hasOwnProperty;var _assign=function _assign(tgt,src){for(var k in src){if(_hasOwnProperty.call(src,k))tgt[k]=src[k];}return tgt;};HTML.Visitor=function(props){_assign(this,props);};HTML.Visitor.def=function(options){_assign(this.prototype,options);};HTML.Visitor.extend=function(options){var curType=this;var subType=function HTMLVisitorSubtype()/*arguments*/{HTML.Visitor.apply(this,arguments);};subType.prototype=new curType();subType.extend=curType.extend;subType.def=curType.def;if(options)_assign(subType.prototype,options);return subType;};HTML.Visitor.def({visit:function visit(content/*, ...*/){if(content==null)// null or undefined.
return this.visitNull.apply(this,arguments);if((typeof content==="undefined"?"undefined":_typeof(content))==='object'){if(content.htmljsType){switch(content.htmljsType){case HTML.Tag.htmljsType:return this.visitTag.apply(this,arguments);case HTML.CharRef.htmljsType:return this.visitCharRef.apply(this,arguments);case HTML.Comment.htmljsType:return this.visitComment.apply(this,arguments);case HTML.Raw.htmljsType:return this.visitRaw.apply(this,arguments);default:throw new Error("Unknown htmljs type: "+content.htmljsType);}}if(HTML.isArray(content))return this.visitArray.apply(this,arguments);return this.visitObject.apply(this,arguments);}else if(typeof content==='string'||typeof content==='boolean'||typeof content==='number'){return this.visitPrimitive.apply(this,arguments);}else if(typeof content==='function'){return this.visitFunction.apply(this,arguments);}throw new Error("Unexpected object in htmljs: "+content);},visitNull:function visitNull(nullOrUndefined/*, ...*/){},visitPrimitive:function visitPrimitive(stringBooleanOrNumber/*, ...*/){},visitArray:function visitArray(array/*, ...*/){},visitComment:function visitComment(comment/*, ...*/){},visitCharRef:function visitCharRef(charRef/*, ...*/){},visitRaw:function visitRaw(raw/*, ...*/){},visitTag:function visitTag(tag/*, ...*/){},visitObject:function visitObject(obj/*, ...*/){throw new Error("Unexpected object in htmljs: "+obj);},visitFunction:function visitFunction(fn/*, ...*/){throw new Error("Unexpected function in htmljs: "+fn);}});HTML.TransformingVisitor=HTML.Visitor.extend();HTML.TransformingVisitor.def({visitNull:IDENTITY,visitPrimitive:IDENTITY,visitArray:function visitArray(array/*, ...*/){var argsCopy=SLICE.call(arguments);var result=array;for(var i=0;i<array.length;i++){var oldItem=array[i];argsCopy[0]=oldItem;var newItem=this.visit.apply(this,argsCopy);if(newItem!==oldItem){// copy `array` on write
if(result===array)result=array.slice();result[i]=newItem;}}return result;},visitComment:IDENTITY,visitCharRef:IDENTITY,visitRaw:IDENTITY,visitObject:IDENTITY,visitFunction:IDENTITY,visitTag:function visitTag(tag/*, ...*/){var oldChildren=tag.children;var argsCopy=SLICE.call(arguments);argsCopy[0]=oldChildren;var newChildren=this.visitChildren.apply(this,argsCopy);var oldAttrs=tag.attrs;argsCopy[0]=oldAttrs;var newAttrs=this.visitAttributes.apply(this,argsCopy);if(newAttrs===oldAttrs&&newChildren===oldChildren)return tag;var newTag=HTML.getTag(tag.tagName).apply(null,newChildren);newTag.attrs=newAttrs;return newTag;},visitChildren:function visitChildren(children/*, ...*/){return this.visitArray.apply(this,arguments);},// Transform the `.attrs` property of a tag, which may be a dictionary,
// an array, or in some uses, a foreign object (such as
// a template tag).
visitAttributes:function visitAttributes(attrs/*, ...*/){if(HTML.isArray(attrs)){var argsCopy=SLICE.call(arguments);var result=attrs;for(var i=0;i<attrs.length;i++){var oldItem=attrs[i];argsCopy[0]=oldItem;var newItem=this.visitAttributes.apply(this,argsCopy);if(newItem!==oldItem){// copy on write
if(result===attrs)result=attrs.slice();result[i]=newItem;}}return result;}if(attrs&&HTML.isConstructedObject(attrs)){throw new Error("The basic HTML.TransformingVisitor does not support "+"foreign objects in attributes.  Define a custom "+"visitAttributes for this case.");}var oldAttrs=attrs;var newAttrs=oldAttrs;if(oldAttrs){var attrArgs=[null,null];attrArgs.push.apply(attrArgs,arguments);for(var k in oldAttrs){var oldValue=oldAttrs[k];attrArgs[0]=k;attrArgs[1]=oldValue;var newValue=this.visitAttribute.apply(this,attrArgs);if(newValue!==oldValue){// copy on write
if(newAttrs===oldAttrs)newAttrs=_assign({},oldAttrs);newAttrs[k]=newValue;}}}return newAttrs;},// Transform the value of one attribute name/value in an
// attributes dictionary.
visitAttribute:function visitAttribute(name,value,tag/*, ...*/){var args=SLICE.call(arguments,2);args[0]=value;return this.visit.apply(this,args);}});HTML.ToTextVisitor=HTML.Visitor.extend();HTML.ToTextVisitor.def({visitNull:function visitNull(nullOrUndefined){return'';},visitPrimitive:function visitPrimitive(stringBooleanOrNumber){var str=String(stringBooleanOrNumber);if(this.textMode===HTML.TEXTMODE.RCDATA){return str.replace(/&/g,'&amp;').replace(/</g,'&lt;');}else if(this.textMode===HTML.TEXTMODE.ATTRIBUTE){// escape `&` and `"` this time, not `&` and `<`
return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;');}else{return str;}},visitArray:function visitArray(array){var parts=[];for(var i=0;i<array.length;i++){parts.push(this.visit(array[i]));}return parts.join('');},visitComment:function visitComment(comment){throw new Error("Can't have a comment here");},visitCharRef:function visitCharRef(charRef){if(this.textMode===HTML.TEXTMODE.RCDATA||this.textMode===HTML.TEXTMODE.ATTRIBUTE){return charRef.html;}else{return charRef.str;}},visitRaw:function visitRaw(raw){return raw.value;},visitTag:function visitTag(tag){// Really we should just disallow Tags here.  However, at the
// moment it's useful to stringify any HTML we find.  In
// particular, when you include a template within `{{#markdown}}`,
// we render the template as text, and since there's currently
// no way to make the template be *parsed* as text (e.g. `<template
// type="text">`), we hackishly support HTML tags in markdown
// in templates by parsing them and stringifying them.
return this.visit(this.toHTML(tag));},visitObject:function visitObject(x){throw new Error("Unexpected object in htmljs in toText: "+x);},toHTML:function toHTML(node){return HTML.toHTML(node);}});HTML.ToHTMLVisitor=HTML.Visitor.extend();HTML.ToHTMLVisitor.def({visitNull:function visitNull(nullOrUndefined){return'';},visitPrimitive:function visitPrimitive(stringBooleanOrNumber){var str=String(stringBooleanOrNumber);return str.replace(/&/g,'&amp;').replace(/</g,'&lt;');},visitArray:function visitArray(array){var parts=[];for(var i=0;i<array.length;i++){parts.push(this.visit(array[i]));}return parts.join('');},visitComment:function visitComment(comment){return'<!--'+comment.sanitizedValue+'-->';},visitCharRef:function visitCharRef(charRef){return charRef.html;},visitRaw:function visitRaw(raw){return raw.value;},visitTag:function visitTag(tag){var attrStrs=[];var tagName=tag.tagName;var children=tag.children;var attrs=tag.attrs;if(attrs){attrs=HTML.flattenAttributes(attrs);for(var k in attrs){if(k==='value'&&tagName==='textarea'){children=[attrs[k],children];}else{var v=this.toText(attrs[k],HTML.TEXTMODE.ATTRIBUTE);attrStrs.push(' '+k+'="'+v+'"');}}}var startTag='<'+tagName+attrStrs.join('')+'>';var childStrs=[];var content;if(tagName==='textarea'){for(var i=0;i<children.length;i++){childStrs.push(this.toText(children[i],HTML.TEXTMODE.RCDATA));}content=childStrs.join('');if(content.slice(0,1)==='\n')// TEXTAREA will absorb a newline, so if we see one, add
// another one.
content='\n'+content;}else{for(var i=0;i<children.length;i++){childStrs.push(this.visit(children[i]));}content=childStrs.join('');}var result=startTag+content;if(children.length||!HTML.isVoidElement(tagName)){// "Void" elements like BR are the only ones that don't get a close
// tag in HTML5.  They shouldn't have contents, either, so we could
// throw an error upon seeing contents here.
result+='</'+tagName+'>';}return result;},visitObject:function visitObject(x){throw new Error("Unexpected object in htmljs in toHTML: "+x);},toText:function toText(node,textMode){return HTML.toText(node,textMode);}});HTML.Tag=function(){};HTML.Tag.prototype.tagName='';// this will be set per Tag subclass
HTML.Tag.prototype.attrs=null;HTML.Tag.prototype.children=Object.freeze?Object.freeze([]):[];HTML.Tag.prototype.htmljsType=HTML.Tag.htmljsType=['Tag'];// Given "p" create the function `HTML.P`.
var makeTagConstructor=function makeTagConstructor(tagName){// HTMLTag is the per-tagName constructor of a HTML.Tag subclass
var HTMLTag=function HTMLTag()/*arguments*/{// Work with or without `new`.  If not called with `new`,
// perform instantiation by recursively calling this constructor.
// We can't pass varargs, so pass no args.
var instance=this instanceof HTML.Tag?this:new HTMLTag();var i=0;var attrs=arguments.length&&arguments[0];if(attrs&&(typeof attrs==="undefined"?"undefined":_typeof(attrs))==='object'){// Treat vanilla JS object as an attributes dictionary.
if(!HTML.isConstructedObject(attrs)){instance.attrs=attrs;i++;}else if(attrs instanceof HTML.Attrs){var array=attrs.value;if(array.length===1){instance.attrs=array[0];}else if(array.length>1){instance.attrs=array;}i++;}}// If no children, don't create an array at all, use the prototype's
// (frozen, empty) array.  This way we don't create an empty array
// every time someone creates a tag without `new` and this constructor
// calls itself with no arguments (above).
if(i<arguments.length)instance.children=SLICE.call(arguments,i);return instance;};HTMLTag.prototype=new HTML.Tag();HTMLTag.prototype.constructor=HTMLTag;HTMLTag.prototype.tagName=tagName;return HTMLTag;};// Not an HTMLjs node, but a wrapper to pass multiple attrs dictionaries
// to a tag (for the purpose of implementing dynamic attributes).
var Attrs=HTML.Attrs=function()/*attrs dictionaries*/{// Work with or without `new`.  If not called with `new`,
// perform instantiation by recursively calling this constructor.
// We can't pass varargs, so pass no args.
var instance=this instanceof Attrs?this:new Attrs();instance.value=SLICE.call(arguments);return instance;};////////////////////////////// KNOWN ELEMENTS
HTML.getTag=function(tagName){var symbolName=HTML.getSymbolName(tagName);if(symbolName===tagName)// all-caps tagName
throw new Error("Use the lowercase or camelCase form of '"+tagName+"' here");if(!HTML[symbolName])HTML[symbolName]=makeTagConstructor(tagName);return HTML[symbolName];};HTML.ensureTag=function(tagName){HTML.getTag(tagName);// don't return it
};HTML.isTagEnsured=function(tagName){return HTML.isKnownElement(tagName);};HTML.getSymbolName=function(tagName){// "foo-bar" -> "FOO_BAR"
return tagName.toUpperCase().replace(/-/g,'_');};HTML.knownElementNames='a abbr acronym address applet area article aside audio b base basefont bdi bdo big blockquote body br button canvas caption center cite code col colgroup command data datagrid datalist dd del details dfn dir div dl dt em embed eventsource fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins isindex kbd keygen label legend li link main map mark menu meta meter nav noframes noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup table tbody td textarea tfoot th thead time title tr track tt u ul var video wbr'.split(' ');// (we add the SVG ones below)
HTML.knownSVGElementNames='altGlyph altGlyphDef altGlyphItem animate animateColor animateMotion animateTransform circle clipPath color-profile cursor defs desc ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignObject g glyph glyphRef hkern image line linearGradient marker mask metadata missing-glyph path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view vkern'.split(' ');// Append SVG element names to list of known element names
HTML.knownElementNames=HTML.knownElementNames.concat(HTML.knownSVGElementNames);HTML.voidElementNames='area base br col command embed hr img input keygen link meta param source track wbr'.split(' ');// Speed up search through lists of known elements by creating internal "sets"
// of strings.
var YES={yes:true};var makeSet=function makeSet(array){var set={};for(var i=0;i<array.length;i++){set[array[i]]=YES;}return set;};var voidElementSet=makeSet(HTML.voidElementNames);var knownElementSet=makeSet(HTML.knownElementNames);var knownSVGElementSet=makeSet(HTML.knownSVGElementNames);HTML.isKnownElement=function(tagName){return knownElementSet[tagName]===YES;};HTML.isKnownSVGElement=function(tagName){return knownSVGElementSet[tagName]===YES;};HTML.isVoidElement=function(tagName){return voidElementSet[tagName]===YES;};// Ensure tags for all known elements
for(var i=0;i<HTML.knownElementNames.length;i++){HTML.ensureTag(HTML.knownElementNames[i]);}var CharRef=HTML.CharRef=function(attrs){if(!(this instanceof CharRef))// called without `new`
return new CharRef(attrs);if(!(attrs&&attrs.html&&attrs.str))throw new Error("HTML.CharRef must be constructed with ({html:..., str:...})");this.html=attrs.html;this.str=attrs.str;};CharRef.prototype.htmljsType=CharRef.htmljsType=['CharRef'];var Comment=HTML.Comment=function(value){if(!(this instanceof Comment))// called without `new`
return new Comment(value);if(typeof value!=='string')throw new Error('HTML.Comment must be constructed with a string');this.value=value;// Kill illegal hyphens in comment value (no way to escape them in HTML)
this.sanitizedValue=value.replace(/^-|--+|-$/g,'');};Comment.prototype.htmljsType=Comment.htmljsType=['Comment'];var Raw=HTML.Raw=function(value){if(!(this instanceof Raw))// called without `new`
return new Raw(value);if(typeof value!=='string')throw new Error('HTML.Raw must be constructed with a string');this.value=value;};Raw.prototype.htmljsType=Raw.htmljsType=['Raw'];HTML.isArray=function(x){// could change this to use the more convoluted Object.prototype.toString
// approach that works when objects are passed between frames, but does
// it matter?
return x instanceof Array;};HTML.isConstructedObject=function(x){// Figure out if `x` is "an instance of some class" or just a plain
// object literal.  It correctly treats an object literal like
// `{ constructor: ... }` as an object literal.  It won't detect
// instances of classes that lack a `constructor` property (e.g.
// if you assign to a prototype when setting up the class as in:
// `Foo = function () { ... }; Foo.prototype = { ... }`, then
// `(new Foo).constructor` is `Object`, not `Foo`).
return x&&(typeof x==="undefined"?"undefined":_typeof(x))==='object'&&x.constructor!==Object&&typeof x.constructor==='function'&&x instanceof x.constructor;};HTML.isNully=function(node){if(node==null)// null or undefined
return true;if(HTML.isArray(node)){// is it an empty array or an array of all nully items?
for(var i=0;i<node.length;i++){if(!HTML.isNully(node[i]))return false;}return true;}return false;};HTML.isValidAttributeName=function(name){return /^[:_A-Za-z][:_A-Za-z0-9.\-]*/.test(name);};// If `attrs` is an array of attributes dictionaries, combines them
// into one.  Removes attributes that are "nully."
HTML.flattenAttributes=function(attrs){if(!attrs)return attrs;var isArray=HTML.isArray(attrs);if(isArray&&attrs.length===0)return null;var result={};for(var i=0,N=isArray?attrs.length:1;i<N;i++){var oneAttrs=isArray?attrs[i]:attrs;if((typeof oneAttrs==="undefined"?"undefined":_typeof(oneAttrs))!=='object'||HTML.isConstructedObject(oneAttrs))throw new Error("Expected plain JS object as attrs, found: "+oneAttrs);for(var name in oneAttrs){if(!HTML.isValidAttributeName(name))throw new Error("Illegal HTML attribute name: "+name);var value=oneAttrs[name];if(!HTML.isNully(value))result[name]=value;}}return result;};////////////////////////////// TOHTML
HTML.toHTML=function(content){return new HTML.ToHTMLVisitor().visit(content);};// Escaping modes for outputting text when generating HTML.
HTML.TEXTMODE={STRING:1,RCDATA:2,ATTRIBUTE:3};HTML.toText=function(content,textMode){if(!textMode)throw new Error("textMode required for HTML.toText");if(!(textMode===HTML.TEXTMODE.STRING||textMode===HTML.TEXTMODE.RCDATA||textMode===HTML.TEXTMODE.ATTRIBUTE))throw new Error("Unknown textMode: "+textMode);var visitor=new HTML.ToTextVisitor({textMode:textMode});;return visitor.visit(content);};Meteor.HTML=HTML;};},{}],17:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var IdMap;IdMap=function IdMap(idStringify,idParse){var self=this;self._map={};self._idStringify=idStringify||JSON.stringify;self._idParse=idParse||JSON.parse;};// Some of these methods are designed to match methods on OrderedDict, since
// (eg) ObserveMultiplex and _CachingChangeObserver use them interchangeably.
// (Conceivably, this should be replaced with "UnorderedDict" with a specific
// set of methods that overlap between the two.)
_.extend(IdMap.prototype,{get:function get(id){var self=this;var key=self._idStringify(id);return self._map[key];},set:function set(id,value){var self=this;var key=self._idStringify(id);self._map[key]=value;},remove:function remove(id){var self=this;var key=self._idStringify(id);delete self._map[key];},has:function has(id){var self=this;var key=self._idStringify(id);return _.has(self._map,key);},empty:function empty(){var self=this;return _.isEmpty(self._map);},clear:function clear(){var self=this;self._map={};},// Iterates over the items in the map. Return `false` to break the loop.
forEach:function forEach(iterator){var self=this;// don't use _.each, because we can't break out of it.
var keys=_.keys(self._map);for(var i=0;i<keys.length;i++){var breakIfFalse=iterator.call(null,self._map[keys[i]],self._idParse(keys[i]));if(breakIfFalse===false)return;}},size:function size(){var self=this;return _.size(self._map);},setDefault:function setDefault(id,def){var self=this;var key=self._idStringify(id);if(_.has(self._map,key))return self._map[key];self._map[key]=def;return def;},// Assumes that values are EJSON-cloneable, and that we don't need to clone
// IDs (ie, that nobody is going to mutate an ObjectId).
clone:function clone(){var self=this;var clone=new IdMap(self._idStringify,self._idParse);self.forEach(function(value,id){clone.set(id,EJSON.clone(value));});return clone;}});Meteor.IdMap=IdMap;};},{}],18:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var EJSON=Meteor.EJSON;var IdMap=Meteor.IdMap;var OrderedDict=Meteor.OrderedDict;var Tracker=Meteor.Tracker;var Random=Meteor.Random;var Minimongo;var MinimongoTest;var MinimongoError;var Package={};//Don't sport to global
var _LocalCollection,isArray,isPlainObject,isIndexable,isOperatorObject,isNumericKey,regexpElementMatcher,equalityElementMatcher,ELEMENT_OPERATORS,_makeLookupFunction,expandArraysInBranches,projectionDetails,pathsToTree;// XXX type checking on selectors (graceful error if malformed)
// LocalCollection: a set of documents that supports queries and modifiers.
// Cursor: a specification for a particular subset of documents, w/
// a defined order, limit, and offset.  creating a Cursor with LocalCollection.find(),
// ObserveHandle: the return value of a live query.
_LocalCollection=function LocalCollection(name){var self=this;self.name=name;// _id -> document (also containing id)
self._docs=new _LocalCollection._IdMap();self._observeQueue=new Meteor._SynchronousQueue();self.next_qid=1;// live query id generator
// qid -> live query object. keys:
//  ordered: bool. ordered queries have addedBefore/movedBefore callbacks.
//  results: array (ordered) or object (unordered) of current results
//    (aliased with self._docs!)
//  resultsSnapshot: snapshot of results. null if not paused.
//  cursor: Cursor object for the query.
//  selector, sorter, (callbacks): functions
self.queries={};// null if not saving originals; an IdMap from id to original document value if
// saving originals. See comments before saveOriginals().
self._savedOriginals=null;// True when observers are paused and we should not send callbacks.
self.paused=false;};Minimongo={};// Object exported only for unit testing.
// Use it to export private functions to test in Tinytest.
MinimongoTest={};MinimongoError=function MinimongoError(message){var e=new Error(message);e.name="MinimongoError";return e;};// options may include sort, skip, limit, reactive
// sort may be any of these forms:
//     {a: 1, b: -1}
//     [["a", "asc"], ["b", "desc"]]
//     ["a", ["b", "desc"]]
//   (in the first form you're beholden to key enumeration order in
//   your javascript VM)
//
// reactive: if given, and false, don't register with Tracker (default
// is true)
//
// XXX possibly should support retrieving a subset of fields? and
// have it be a hint (ignored on the client, when not copying the
// doc?)
//
// XXX sort does not yet support subkeys ('a.b') .. fix that!
// XXX add one more sort form: "key"
// XXX tests
_LocalCollection.prototype.find=function(selector,options){// default syntax for everything is to omit the selector argument.
// but if selector is explicitly passed in as false or undefined, we
// want a selector that matches nothing.
if(arguments.length===0)selector={};return new _LocalCollection.Cursor(this,selector,options);};// don't call this ctor directly.  use LocalCollection.find().
_LocalCollection.Cursor=function(collection,selector,options){var self=this;if(!options)options={};self.collection=collection;self.sorter=null;self.matcher=new Minimongo.Matcher(selector);if(_LocalCollection._selectorIsId(selector)){// stash for fast path
self._selectorId=selector;}else if(_LocalCollection._selectorIsIdPerhapsAsObject(selector)){// also do the fast path for { _id: idString }
self._selectorId=selector._id;}else{self._selectorId=undefined;if(self.matcher.hasGeoQuery()||options.sort){self.sorter=new Minimongo.Sorter(options.sort||[],{matcher:self.matcher});}}self.skip=options.skip;self.limit=options.limit;self.fields=options.fields;self._projectionFn=_LocalCollection._compileProjection(self.fields||{});self._transform=_LocalCollection.wrapTransform(options.transform);// by default, queries register w/ Tracker when it is available.
if(typeof Tracker!=="undefined")self.reactive=options.reactive===undefined?true:options.reactive;};// Since we don't actually have a "nextObject" interface, there's really no
// reason to have a "rewind" interface.  All it did was make multiple calls
// to fetch/map/forEach return nothing the second time.
// XXX COMPAT WITH 0.8.1
_LocalCollection.Cursor.prototype.rewind=function(){};_LocalCollection.prototype.findOne=function(selector,options){if(arguments.length===0)selector={};// NOTE: by setting limit 1 here, we end up using very inefficient
// code that recomputes the whole query on each update. The upside is
// that when you reactively depend on a findOne you only get
// invalidated when the found object changes, not any object in the
// collection. Most findOne will be by id, which has a fast path, so
// this might not be a big deal. In most cases, invalidation causes
// the called to re-query anyway, so this should be a net performance
// improvement.
options=options||{};options.limit=1;return this.find(selector,options).fetch()[0];};/**
 * @callback IterationCallback
 * @param {Object} doc
 * @param {Number} index
 *//**
 * @summary Call `callback` once for each matching document, sequentially and synchronously.
 * @locus Anywhere
 * @method  forEach
 * @instance
 * @memberOf Mongo.Cursor
 * @param {IterationCallback} callback Function to call. It will be called with three arguments: the document, a 0-based index, and <em>cursor</em> itself.
 * @param {Any} [thisArg] An object which will be the value of `this` inside `callback`.
 */_LocalCollection.Cursor.prototype.forEach=function(callback,thisArg){var self=this;var objects=self._getRawObjects({ordered:true});if(self.reactive){self._depend({addedBefore:true,removed:true,changed:true,movedBefore:true});}_.each(objects,function(elt,i){// This doubles as a clone operation.
elt=self._projectionFn(elt);if(self._transform)elt=self._transform(elt);callback.call(thisArg,elt,i,self);});};_LocalCollection.Cursor.prototype.getTransform=function(){return this._transform;};/**
 * @summary Map callback over all matching documents.  Returns an Array.
 * @locus Anywhere
 * @method map
 * @instance
 * @memberOf Mongo.Cursor
 * @param {IterationCallback} callback Function to call. It will be called with three arguments: the document, a 0-based index, and <em>cursor</em> itself.
 * @param {Any} [thisArg] An object which will be the value of `this` inside `callback`.
 */_LocalCollection.Cursor.prototype.map=function(callback,thisArg){var self=this;var res=[];self.forEach(function(doc,index){res.push(callback.call(thisArg,doc,index,self));});return res;};/**
 * @summary Return all matching documents as an Array.
 * @memberOf Mongo.Cursor
 * @method  fetch
 * @instance
 * @locus Anywhere
 * @returns {Object[]}
 */_LocalCollection.Cursor.prototype.fetch=function(){var self=this;var res=[];self.forEach(function(doc){res.push(doc);});return res;};/**
 * @summary Returns the number of documents that match a query.
 * @memberOf Mongo.Cursor
 * @method  count
 * @instance
 * @locus Anywhere
 * @returns {Number}
 */_LocalCollection.Cursor.prototype.count=function(){var self=this;if(self.reactive)self._depend({added:true,removed:true},true/* allow the observe to be unordered */);return self._getRawObjects({ordered:true}).length;};_LocalCollection.Cursor.prototype._publishCursor=function(sub){var self=this;if(!self.collection.name)throw new Error("Can't publish a cursor from a collection without a name.");var collection=self.collection.name;// XXX minimongo should not depend on mongo-livedata!
if(!Package.mongo){throw new Error("Can't publish from Minimongo without the `mongo` package.");}return Package.mongo.Mongo.Collection._publishCursor(self,sub,collection);};_LocalCollection.Cursor.prototype._getCollectionName=function(){var self=this;return self.collection.name;};_LocalCollection._observeChangesCallbacksAreOrdered=function(callbacks){if(callbacks.added&&callbacks.addedBefore)throw new Error("Please specify only one of added() and addedBefore()");return!!(callbacks.addedBefore||callbacks.movedBefore);};_LocalCollection._observeCallbacksAreOrdered=function(callbacks){if(callbacks.addedAt&&callbacks.added)throw new Error("Please specify only one of added() and addedAt()");if(callbacks.changedAt&&callbacks.changed)throw new Error("Please specify only one of changed() and changedAt()");if(callbacks.removed&&callbacks.removedAt)throw new Error("Please specify only one of removed() and removedAt()");return!!(callbacks.addedAt||callbacks.movedTo||callbacks.changedAt||callbacks.removedAt);};// the handle that comes back from observe.
_LocalCollection.ObserveHandle=function(){};// options to contain:
//  * callbacks for observe():
//    - addedAt (document, atIndex)
//    - added (document)
//    - changedAt (newDocument, oldDocument, atIndex)
//    - changed (newDocument, oldDocument)
//    - removedAt (document, atIndex)
//    - removed (document)
//    - movedTo (document, oldIndex, newIndex)
//
// attributes available on returned query handle:
//  * stop(): end updates
//  * collection: the collection this query is querying
//
// iff x is a returned query handle, (x instanceof
// LocalCollection.ObserveHandle) is true
//
// initial results delivered through added callback
// XXX maybe callbacks should take a list of objects, to expose transactions?
// XXX maybe support field limiting (to limit what you're notified on)
_.extend(_LocalCollection.Cursor.prototype,{/**
   * @summary Watch a query.  Receive callbacks as the result set changes.
   * @locus Anywhere
   * @memberOf Mongo.Cursor
   * @instance
   * @param {Object} callbacks Functions to call to deliver the result set as it changes
   */observe:function observe(options){var self=this;return _LocalCollection._observeFromObserveChanges(self,options);},/**
   * @summary Watch a query.  Receive callbacks as the result set changes.  Only the differences between the old and new documents are passed to the callbacks.
   * @locus Anywhere
   * @memberOf Mongo.Cursor
   * @instance
   * @param {Object} callbacks Functions to call to deliver the result set as it changes
   */observeChanges:function observeChanges(options){var self=this;var ordered=_LocalCollection._observeChangesCallbacksAreOrdered(options);// there are several places that assume you aren't combining skip/limit with
// unordered observe.  eg, update's EJSON.clone, and the "there are several"
// comment in _modifyAndNotify
// XXX allow skip/limit with unordered observe
if(!options._allow_unordered&&!ordered&&(self.skip||self.limit))throw new Error("must use ordered observe (ie, 'addedBefore' instead of 'added') with skip or limit");if(self.fields&&(self.fields._id===0||self.fields._id===false))throw Error("You may not observe a cursor with {fields: {_id: 0}}");var query={matcher:self.matcher,// not fast pathed
sorter:ordered&&self.sorter,distances:self.matcher.hasGeoQuery()&&ordered&&new _LocalCollection._IdMap(),resultsSnapshot:null,ordered:ordered,cursor:self,projectionFn:self._projectionFn};var qid;// Non-reactive queries call added[Before] and then never call anything
// else.
if(self.reactive){qid=self.collection.next_qid++;self.collection.queries[qid]=query;}query.results=self._getRawObjects({ordered:ordered,distances:query.distances});if(self.collection.paused)query.resultsSnapshot=ordered?[]:new _LocalCollection._IdMap();// wrap callbacks we were passed. callbacks only fire when not paused and
// are never undefined
// Filters out blacklisted fields according to cursor's projection.
// XXX wrong place for this?
// furthermore, callbacks enqueue until the operation we're working on is
// done.
var wrapCallback=function wrapCallback(f){if(!f)return function(){};return function()/*args*/{var context=this;var args=arguments;if(self.collection.paused)return;self.collection._observeQueue.queueTask(function(){f.apply(context,args);});};};query.added=wrapCallback(options.added);query.changed=wrapCallback(options.changed);query.removed=wrapCallback(options.removed);if(ordered){query.addedBefore=wrapCallback(options.addedBefore);query.movedBefore=wrapCallback(options.movedBefore);}if(!options._suppress_initial&&!self.collection.paused){// XXX unify ordered and unordered interface
var each=ordered?_.bind(_.each,null,query.results):_.bind(query.results.forEach,query.results);each(function(doc){var fields=EJSON.clone(doc);delete fields._id;if(ordered)query.addedBefore(doc._id,self._projectionFn(fields),null);query.added(doc._id,self._projectionFn(fields));});}var handle=new _LocalCollection.ObserveHandle();_.extend(handle,{collection:self.collection,stop:function stop(){if(self.reactive)delete self.collection.queries[qid];}});if(self.reactive&&Tracker.active){// XXX in many cases, the same observe will be recreated when
// the current autorun is rerun.  we could save work by
// letting it linger across rerun and potentially get
// repurposed if the same observe is performed, using logic
// similar to that of Meteor.subscribe.
Tracker.onInvalidate(function(){handle.stop();});}// run the observe callbacks resulting from the initial contents
// before we leave the observe.
self.collection._observeQueue.drain();return handle;}});// Returns a collection of matching objects, but doesn't deep copy them.
//
// If ordered is set, returns a sorted array, respecting sorter, skip, and limit
// properties of the query.  if sorter is falsey, no sort -- you get the natural
// order.
//
// If ordered is not set, returns an object mapping from ID to doc (sorter, skip
// and limit should not be set).
//
// If ordered is set and this cursor is a $near geoquery, then this function
// will use an _IdMap to track each distance from the $near argument point in
// order to use it as a sort key. If an _IdMap is passed in the 'distances'
// argument, this function will clear it and use it for this purpose (otherwise
// it will just create its own _IdMap). The observeChanges implementation uses
// this to remember the distances after this function returns.
_LocalCollection.Cursor.prototype._getRawObjects=function(options){var self=this;options=options||{};// XXX use OrderedDict instead of array, and make IdMap and OrderedDict
// compatible
var results=options.ordered?[]:new _LocalCollection._IdMap();// fast path for single ID value
if(self._selectorId!==undefined){// If you have non-zero skip and ask for a single id, you get
// nothing. This is so it matches the behavior of the '{_id: foo}'
// path.
if(self.skip)return results;var selectedDoc=self.collection._docs.get(self._selectorId);if(selectedDoc){if(options.ordered)results.push(selectedDoc);else results.set(self._selectorId,selectedDoc);}return results;}// slow path for arbitrary selector, sort, skip, limit
// in the observeChanges case, distances is actually part of the "query" (ie,
// live results set) object.  in other cases, distances is only used inside
// this function.
var distances;if(self.matcher.hasGeoQuery()&&options.ordered){if(options.distances){distances=options.distances;distances.clear();}else{distances=new _LocalCollection._IdMap();}}self.collection._docs.forEach(function(doc,id){var matchResult=self.matcher.documentMatches(doc);if(matchResult.result){if(options.ordered){results.push(doc);if(distances&&matchResult.distance!==undefined)distances.set(id,matchResult.distance);}else{results.set(id,doc);}}// Fast path for limited unsorted queries.
// XXX 'length' check here seems wrong for ordered
if(self.limit&&!self.skip&&!self.sorter&&results.length===self.limit)return false;// break
return true;// continue
});if(!options.ordered)return results;if(self.sorter){var comparator=self.sorter.getComparator({distances:distances});results.sort(comparator);}var idx_start=self.skip||0;var idx_end=self.limit?self.limit+idx_start:results.length;return results.slice(idx_start,idx_end);};// XXX Maybe we need a version of observe that just calls a callback if
// anything changed.
_LocalCollection.Cursor.prototype._depend=function(changers,_allow_unordered){var self=this;if(Tracker.active){var v=new Tracker.Dependency();v.depend();var notifyChange=_.bind(v.changed,v);var options={_suppress_initial:true,_allow_unordered:_allow_unordered};_.each(['added','changed','removed','addedBefore','movedBefore'],function(fnName){if(changers[fnName])options[fnName]=notifyChange;});// observeChanges will stop() when this computation is invalidated
self.observeChanges(options);}};// XXX enforce rule that field names can't start with '$' or contain '.'
// (real mongodb does in fact enforce this)
// XXX possibly enforce that 'undefined' does not appear (we assume
// this in our handling of null and $exists)
_LocalCollection.prototype.insert=function(doc,callback){var self=this;doc=EJSON.clone(doc);if(!_.has(doc,'_id')){// if you really want to use ObjectIDs, set this global.
// Mongo.Collection specifies its own ids and does not use this code.
doc._id=_LocalCollection._useOID?new MongoID.ObjectID():Random.id();}var id=doc._id;if(self._docs.has(id))throw MinimongoError("Duplicate _id '"+id+"'");self._saveOriginal(id,undefined);self._docs.set(id,doc);var queriesToRecompute=[];// trigger live queries that match
for(var qid in self.queries){var query=self.queries[qid];var matchResult=query.matcher.documentMatches(doc);if(matchResult.result){if(query.distances&&matchResult.distance!==undefined)query.distances.set(id,matchResult.distance);if(query.cursor.skip||query.cursor.limit)queriesToRecompute.push(qid);else _LocalCollection._insertInResults(query,doc);}}_.each(queriesToRecompute,function(qid){if(self.queries[qid])self._recomputeResults(self.queries[qid]);});self._observeQueue.drain();// Defer because the caller likely doesn't expect the callback to be run
// immediately.
if(callback)Meteor.defer(function(){callback(null,id);});return id;};// Iterates over a subset of documents that could match selector; calls
// f(doc, id) on each of them.  Specifically, if selector specifies
// specific _id's, it only looks at those.  doc is *not* cloned: it is the
// same object that is in _docs.
_LocalCollection.prototype._eachPossiblyMatchingDoc=function(selector,f){var self=this;var specificIds=_LocalCollection._idsMatchedBySelector(selector);if(specificIds){for(var i=0;i<specificIds.length;++i){var id=specificIds[i];var doc=self._docs.get(id);if(doc){var breakIfFalse=f(doc,id);if(breakIfFalse===false)break;}}}else{self._docs.forEach(f);}};_LocalCollection.prototype.remove=function(selector,callback){var self=this;// Easy special case: if we're not calling observeChanges callbacks and we're
// not saving originals and we got asked to remove everything, then just empty
// everything directly.
if(self.paused&&!self._savedOriginals&&EJSON.equals(selector,{})){var result=self._docs.size();self._docs.clear();_.each(self.queries,function(query){if(query.ordered){query.results=[];}else{query.results.clear();}});if(callback){Meteor.defer(function(){callback(null,result);});}return result;}var matcher=new Minimongo.Matcher(selector);var remove=[];self._eachPossiblyMatchingDoc(selector,function(doc,id){if(matcher.documentMatches(doc).result)remove.push(id);});var queriesToRecompute=[];var queryRemove=[];for(var i=0;i<remove.length;i++){var removeId=remove[i];var removeDoc=self._docs.get(removeId);_.each(self.queries,function(query,qid){if(query.matcher.documentMatches(removeDoc).result){if(query.cursor.skip||query.cursor.limit)queriesToRecompute.push(qid);else queryRemove.push({qid:qid,doc:removeDoc});}});self._saveOriginal(removeId,removeDoc);self._docs.remove(removeId);}// run live query callbacks _after_ we've removed the documents.
_.each(queryRemove,function(remove){var query=self.queries[remove.qid];if(query){query.distances&&query.distances.remove(remove.doc._id);_LocalCollection._removeFromResults(query,remove.doc);}});_.each(queriesToRecompute,function(qid){var query=self.queries[qid];if(query)self._recomputeResults(query);});self._observeQueue.drain();result=remove.length;if(callback)Meteor.defer(function(){callback(null,result);});return result;};// XXX atomicity: if multi is true, and one modification fails, do
// we rollback the whole operation, or what?
_LocalCollection.prototype.update=function(selector,mod,options,callback){var self=this;if(!callback&&options instanceof Function){callback=options;options=null;}if(!options)options={};var matcher=new Minimongo.Matcher(selector);// Save the original results of any query that we might need to
// _recomputeResults on, because _modifyAndNotify will mutate the objects in
// it. (We don't need to save the original results of paused queries because
// they already have a resultsSnapshot and we won't be diffing in
// _recomputeResults.)
var qidToOriginalResults={};// We should only clone each document once, even if it appears in multiple queries
var docMap=new _LocalCollection._IdMap();var idsMatchedBySelector=_LocalCollection._idsMatchedBySelector(selector);_.each(self.queries,function(query,qid){if((query.cursor.skip||query.cursor.limit)&&!self.paused){// Catch the case of a reactive `count()` on a cursor with skip
// or limit, which registers an unordered observe. This is a
// pretty rare case, so we just clone the entire result set with
// no optimizations for documents that appear in these result
// sets and other queries.
if(query.results instanceof _LocalCollection._IdMap){qidToOriginalResults[qid]=query.results.clone();return;}if(!(query.results instanceof Array)){throw new Error("Assertion failed: query.results not an array");}// Clones a document to be stored in `qidToOriginalResults`
// because it may be modified before the new and old result sets
// are diffed. But if we know exactly which document IDs we're
// going to modify, then we only need to clone those.
var memoizedCloneIfNeeded=function memoizedCloneIfNeeded(doc){if(docMap.has(doc._id)){return docMap.get(doc._id);}else{var docToMemoize;if(idsMatchedBySelector&&!_.any(idsMatchedBySelector,function(id){return EJSON.equals(id,doc._id);})){docToMemoize=doc;}else{docToMemoize=EJSON.clone(doc);}docMap.set(doc._id,docToMemoize);return docToMemoize;}};qidToOriginalResults[qid]=query.results.map(memoizedCloneIfNeeded);}});var recomputeQids={};var updateCount=0;self._eachPossiblyMatchingDoc(selector,function(doc,id){var queryResult=matcher.documentMatches(doc);if(queryResult.result){// XXX Should we save the original even if mod ends up being a no-op?
self._saveOriginal(id,doc);self._modifyAndNotify(doc,mod,recomputeQids,queryResult.arrayIndices);++updateCount;if(!options.multi)return false;// break
}return true;});_.each(recomputeQids,function(dummy,qid){var query=self.queries[qid];if(query)self._recomputeResults(query,qidToOriginalResults[qid]);});self._observeQueue.drain();// If we are doing an upsert, and we didn't modify any documents yet, then
// it's time to do an insert. Figure out what document we are inserting, and
// generate an id for it.
var insertedId;if(updateCount===0&&options.upsert){var newDoc=_LocalCollection._removeDollarOperators(selector);_LocalCollection._modify(newDoc,mod,{isInsert:true});if(!newDoc._id&&options.insertedId)newDoc._id=options.insertedId;insertedId=self.insert(newDoc);updateCount=1;}// Return the number of affected documents, or in the upsert case, an object
// containing the number of affected docs and the id of the doc that was
// inserted, if any.
var result;if(options._returnObject){result={numberAffected:updateCount};if(insertedId!==undefined)result.insertedId=insertedId;}else{result=updateCount;}if(callback)Meteor.defer(function(){callback(null,result);});return result;};// A convenience wrapper on update. LocalCollection.upsert(sel, mod) is
// equivalent to LocalCollection.update(sel, mod, { upsert: true, _returnObject:
// true }).
_LocalCollection.prototype.upsert=function(selector,mod,options,callback){var self=this;if(!callback&&typeof options==="function"){callback=options;options={};}return self.update(selector,mod,_.extend({},options,{upsert:true,_returnObject:true}),callback);};_LocalCollection.prototype._modifyAndNotify=function(doc,mod,recomputeQids,arrayIndices){var self=this;var matched_before={};for(var qid in self.queries){var query=self.queries[qid];if(query.ordered){matched_before[qid]=query.matcher.documentMatches(doc).result;}else{// Because we don't support skip or limit (yet) in unordered queries, we
// can just do a direct lookup.
matched_before[qid]=query.results.has(doc._id);}}var old_doc=EJSON.clone(doc);_LocalCollection._modify(doc,mod,{arrayIndices:arrayIndices});for(qid in self.queries){query=self.queries[qid];var before=matched_before[qid];var afterMatch=query.matcher.documentMatches(doc);var after=afterMatch.result;if(after&&query.distances&&afterMatch.distance!==undefined)query.distances.set(doc._id,afterMatch.distance);if(query.cursor.skip||query.cursor.limit){// We need to recompute any query where the doc may have been in the
// cursor's window either before or after the update. (Note that if skip
// or limit is set, "before" and "after" being true do not necessarily
// mean that the document is in the cursor's output after skip/limit is
// applied... but if they are false, then the document definitely is NOT
// in the output. So it's safe to skip recompute if neither before or
// after are true.)
if(before||after)recomputeQids[qid]=true;}else if(before&&!after){_LocalCollection._removeFromResults(query,doc);}else if(!before&&after){_LocalCollection._insertInResults(query,doc);}else if(before&&after){_LocalCollection._updateInResults(query,doc,old_doc);}}};// XXX the sorted-query logic below is laughably inefficient. we'll
// need to come up with a better datastructure for this.
//
// XXX the logic for observing with a skip or a limit is even more
// laughably inefficient. we recompute the whole results every time!
_LocalCollection._insertInResults=function(query,doc){var fields=EJSON.clone(doc);delete fields._id;if(query.ordered){if(!query.sorter){query.addedBefore(doc._id,query.projectionFn(fields),null);query.results.push(doc);}else{var i=_LocalCollection._insertInSortedList(query.sorter.getComparator({distances:query.distances}),query.results,doc);var next=query.results[i+1];if(next)next=next._id;else next=null;query.addedBefore(doc._id,query.projectionFn(fields),next);}query.added(doc._id,query.projectionFn(fields));}else{query.added(doc._id,query.projectionFn(fields));query.results.set(doc._id,doc);}};_LocalCollection._removeFromResults=function(query,doc){if(query.ordered){var i=_LocalCollection._findInOrderedResults(query,doc);query.removed(doc._id);query.results.splice(i,1);}else{var id=doc._id;// in case callback mutates doc
query.removed(doc._id);query.results.remove(id);}};_LocalCollection._updateInResults=function(query,doc,old_doc){if(!EJSON.equals(doc._id,old_doc._id))throw new Error("Can't change a doc's _id while updating");var projectionFn=query.projectionFn;var changedFields=DiffSequence.makeChangedFields(projectionFn(doc),projectionFn(old_doc));if(!query.ordered){if(!_.isEmpty(changedFields)){query.changed(doc._id,changedFields);query.results.set(doc._id,doc);}return;}var orig_idx=_LocalCollection._findInOrderedResults(query,doc);if(!_.isEmpty(changedFields))query.changed(doc._id,changedFields);if(!query.sorter)return;// just take it out and put it back in again, and see if the index
// changes
query.results.splice(orig_idx,1);var new_idx=_LocalCollection._insertInSortedList(query.sorter.getComparator({distances:query.distances}),query.results,doc);if(orig_idx!==new_idx){var next=query.results[new_idx+1];if(next)next=next._id;else next=null;query.movedBefore&&query.movedBefore(doc._id,next);}};// Recomputes the results of a query and runs observe callbacks for the
// difference between the previous results and the current results (unless
// paused). Used for skip/limit queries.
//
// When this is used by insert or remove, it can just use query.results for the
// old results (and there's no need to pass in oldResults), because these
// operations don't mutate the documents in the collection. Update needs to pass
// in an oldResults which was deep-copied before the modifier was applied.
//
// oldResults is guaranteed to be ignored if the query is not paused.
_LocalCollection.prototype._recomputeResults=function(query,oldResults){var self=this;if(!self.paused&&!oldResults)oldResults=query.results;if(query.distances)query.distances.clear();query.results=query.cursor._getRawObjects({ordered:query.ordered,distances:query.distances});if(!self.paused){_LocalCollection._diffQueryChanges(query.ordered,oldResults,query.results,query,{projectionFn:query.projectionFn});}};_LocalCollection._findInOrderedResults=function(query,doc){if(!query.ordered)throw new Error("Can't call _findInOrderedResults on unordered query");for(var i=0;i<query.results.length;i++){if(query.results[i]===doc)return i;}throw Error("object missing from query");};// This binary search puts a value between any equal values, and the first
// lesser value.
_LocalCollection._binarySearch=function(cmp,array,value){var first=0,rangeLength=array.length;while(rangeLength>0){var halfRange=Math.floor(rangeLength/2);if(cmp(value,array[first+halfRange])>=0){first+=halfRange+1;rangeLength-=halfRange+1;}else{rangeLength=halfRange;}}return first;};_LocalCollection._insertInSortedList=function(cmp,array,value){if(array.length===0){array.push(value);return 0;}var idx=_LocalCollection._binarySearch(cmp,array,value);array.splice(idx,0,value);return idx;};// To track what documents are affected by a piece of code, call saveOriginals()
// before it and retrieveOriginals() after it. retrieveOriginals returns an
// object whose keys are the ids of the documents that were affected since the
// call to saveOriginals(), and the values are equal to the document's contents
// at the time of saveOriginals. (In the case of an inserted document, undefined
// is the value.) You must alternate between calls to saveOriginals() and
// retrieveOriginals().
_LocalCollection.prototype.saveOriginals=function(){var self=this;if(self._savedOriginals)throw new Error("Called saveOriginals twice without retrieveOriginals");self._savedOriginals=new _LocalCollection._IdMap();};_LocalCollection.prototype.retrieveOriginals=function(){var self=this;if(!self._savedOriginals)throw new Error("Called retrieveOriginals without saveOriginals");var originals=self._savedOriginals;self._savedOriginals=null;return originals;};_LocalCollection.prototype._saveOriginal=function(id,doc){var self=this;// Are we even trying to save originals?
if(!self._savedOriginals)return;// Have we previously mutated the original (and so 'doc' is not actually
// original)?  (Note the 'has' check rather than truth: we store undefined
// here for inserted docs!)
if(self._savedOriginals.has(id))return;self._savedOriginals.set(id,EJSON.clone(doc));};// Pause the observers. No callbacks from observers will fire until
// 'resumeObservers' is called.
_LocalCollection.prototype.pauseObservers=function(){// No-op if already paused.
if(this.paused)return;// Set the 'paused' flag such that new observer messages don't fire.
this.paused=true;// Take a snapshot of the query results for each query.
for(var qid in this.queries){var query=this.queries[qid];query.resultsSnapshot=EJSON.clone(query.results);}};// Resume the observers. Observers immediately receive change
// notifications to bring them to the current state of the
// database. Note that this is not just replaying all the changes that
// happened during the pause, it is a smarter 'coalesced' diff.
_LocalCollection.prototype.resumeObservers=function(){var self=this;// No-op if not paused.
if(!this.paused)return;// Unset the 'paused' flag. Make sure to do this first, otherwise
// observer methods won't actually fire when we trigger them.
this.paused=false;for(var qid in this.queries){var query=self.queries[qid];// Diff the current results against the snapshot and send to observers.
// pass the query object for its observer callbacks.
_LocalCollection._diffQueryChanges(query.ordered,query.resultsSnapshot,query.results,query,{projectionFn:query.projectionFn});query.resultsSnapshot=null;}self._observeQueue.drain();};// Wrap a transform function to return objects that have the _id field
// of the untransformed document. This ensures that subsystems such as
// the observe-sequence package that call `observe` can keep track of
// the documents identities.
//
// - Require that it returns objects
// - If the return value has an _id field, verify that it matches the
//   original _id field
// - If the return value doesn't have an _id field, add it back.
_LocalCollection.wrapTransform=function(transform){if(!transform)return null;// No need to doubly-wrap transforms.
if(transform.__wrappedTransform__)return transform;var wrapped=function wrapped(doc){if(!_.has(doc,'_id')){// XXX do we ever have a transform on the oplog's collection? because that
// collection has no _id.
throw new Error("can only transform documents with _id");}var id=doc._id;// XXX consider making tracker a weak dependency and checking Package.tracker here
var transformed=Tracker.nonreactive(function(){return transform(doc);});if(!isPlainObject(transformed)){throw new Error("transform must return object");}if(_.has(transformed,'_id')){if(!EJSON.equals(transformed._id,id)){throw new Error("transformed document can't have different _id");}}else{transformed._id=id;}return transformed;};wrapped.__wrappedTransform__=true;return wrapped;};// Like _.isArray, but doesn't regard polyfilled Uint8Arrays on old browsers as
// arrays.
// XXX maybe this should be EJSON.isArray
isArray=function isArray(x){return _.isArray(x)&&!EJSON.isBinary(x);};// XXX maybe this should be EJSON.isObject, though EJSON doesn't know about
// RegExp
// XXX note that _type(undefined) === 3!!!!
isPlainObject=_LocalCollection._isPlainObject=function(x){return x&&_LocalCollection._f._type(x)===3;};isIndexable=function isIndexable(x){return isArray(x)||isPlainObject(x);};// Returns true if this is an object with at least one key and all keys begin
// with $.  Unless inconsistentOK is set, throws if some keys begin with $ and
// others don't.
isOperatorObject=function isOperatorObject(valueSelector,inconsistentOK){if(!isPlainObject(valueSelector))return false;var theseAreOperators=undefined;_.each(valueSelector,function(value,selKey){var thisIsOperator=selKey.substr(0,1)==='$';if(theseAreOperators===undefined){theseAreOperators=thisIsOperator;}else if(theseAreOperators!==thisIsOperator){if(!inconsistentOK)throw new Error("Inconsistent operator: "+JSON.stringify(valueSelector));theseAreOperators=false;}});return!!theseAreOperators;// {} has no operators
};// string can be converted to integer
isNumericKey=function isNumericKey(s){return /^[0-9]+$/.test(s);};// The minimongo selector compiler!
// Terminology:
//  - a "selector" is the EJSON object representing a selector
//  - a "matcher" is its compiled form (whether a full Minimongo.Matcher
//    object or one of the component lambdas that matches parts of it)
//  - a "result object" is an object with a "result" field and maybe
//    distance and arrayIndices.
//  - a "branched value" is an object with a "value" field and maybe
//    "dontIterate" and "arrayIndices".
//  - a "document" is a top-level object that can be stored in a collection.
//  - a "lookup function" is a function that takes in a document and returns
//    an array of "branched values".
//  - a "branched matcher" maps from an array of branched values to a result
//    object.
//  - an "element matcher" maps from a single value to a bool.
// Main entry point.
//   var matcher = new Minimongo.Matcher({a: {$gt: 5}});
//   if (matcher.documentMatches({a: 7})) ...
Minimongo.Matcher=function(selector){var self=this;// A set (object mapping string -> *) of all of the document paths looked
// at by the selector. Also includes the empty string if it may look at any
// path (eg, $where).
self._paths={};// Set to true if compilation finds a $near.
self._hasGeoQuery=false;// Set to true if compilation finds a $where.
self._hasWhere=false;// Set to false if compilation finds anything other than a simple equality or
// one or more of '$gt', '$gte', '$lt', '$lte', '$ne', '$in', '$nin' used with
// scalars as operands.
self._isSimple=true;// Set to a dummy document which always matches this Matcher. Or set to null
// if such document is too hard to find.
self._matchingDocument=undefined;// A clone of the original selector. It may just be a function if the user
// passed in a function; otherwise is definitely an object (eg, IDs are
// translated into {_id: ID} first. Used by canBecomeTrueByModifier and
// Sorter._useWithMatcher.
self._selector=null;self._docMatcher=self._compileSelector(selector);};_.extend(Minimongo.Matcher.prototype,{documentMatches:function documentMatches(doc){if(!doc||(typeof doc==="undefined"?"undefined":_typeof(doc))!=="object"){throw Error("documentMatches needs a document");}return this._docMatcher(doc);},hasGeoQuery:function hasGeoQuery(){return this._hasGeoQuery;},hasWhere:function hasWhere(){return this._hasWhere;},isSimple:function isSimple(){return this._isSimple;},// Given a selector, return a function that takes one argument, a
// document. It returns a result object.
_compileSelector:function _compileSelector(selector){var self=this;// you can pass a literal function instead of a selector
if(selector instanceof Function){self._isSimple=false;self._selector=selector;self._recordPathUsed('');return function(doc){return{result:!!selector.call(doc)};};}// shorthand -- scalars match _id
if(_LocalCollection._selectorIsId(selector)){self._selector={_id:selector};self._recordPathUsed('_id');return function(doc){return{result:EJSON.equals(doc._id,selector)};};}// protect against dangerous selectors.  falsey and {_id: falsey} are both
// likely programmer error, and not what you want, particularly for
// destructive operations.
if(!selector||'_id'in selector&&!selector._id){self._isSimple=false;return nothingMatcher;}// Top level can't be an array or true or binary.
if(typeof selector==='boolean'||isArray(selector)||EJSON.isBinary(selector))throw new Error("Invalid selector: "+selector);self._selector=EJSON.clone(selector);return compileDocumentSelector(selector,self,{isRoot:true});},_recordPathUsed:function _recordPathUsed(path){this._paths[path]=true;},// Returns a list of key paths the given selector is looking for. It includes
// the empty string if there is a $where.
_getPaths:function _getPaths(){return _.keys(this._paths);}});// Takes in a selector that could match a full document (eg, the original
// selector). Returns a function mapping document->result object.
//
// matcher is the Matcher object we are compiling.
//
// If this is the root document selector (ie, not wrapped in $and or the like),
// then isRoot is true. (This is used by $near.)
var compileDocumentSelector=function compileDocumentSelector(docSelector,matcher,options){options=options||{};var docMatchers=[];_.each(docSelector,function(subSelector,key){if(key.substr(0,1)==='$'){// Outer operators are either logical operators (they recurse back into
// this function), or $where.
if(!_.has(LOGICAL_OPERATORS,key))throw new Error("Unrecognized logical operator: "+key);matcher._isSimple=false;docMatchers.push(LOGICAL_OPERATORS[key](subSelector,matcher,options.inElemMatch));}else{// Record this path, but only if we aren't in an elemMatcher, since in an
// elemMatch this is a path inside an object in an array, not in the doc
// root.
if(!options.inElemMatch)matcher._recordPathUsed(key);var lookUpByIndex=_makeLookupFunction(key);var valueMatcher=compileValueSelector(subSelector,matcher,options.isRoot);docMatchers.push(function(doc){var branchValues=lookUpByIndex(doc);return valueMatcher(branchValues);});}});return andDocumentMatchers(docMatchers);};// Takes in a selector that could match a key-indexed value in a document; eg,
// {$gt: 5, $lt: 9}, or a regular expression, or any non-expression object (to
// indicate equality).  Returns a branched matcher: a function mapping
// [branched value]->result object.
var compileValueSelector=function compileValueSelector(valueSelector,matcher,isRoot){if(valueSelector instanceof RegExp){matcher._isSimple=false;return convertElementMatcherToBranchedMatcher(regexpElementMatcher(valueSelector));}else if(isOperatorObject(valueSelector)){return operatorBranchedMatcher(valueSelector,matcher,isRoot);}else{return convertElementMatcherToBranchedMatcher(equalityElementMatcher(valueSelector));}};// Given an element matcher (which evaluates a single value), returns a branched
// value (which evaluates the element matcher on all the branches and returns a
// more structured return value possibly including arrayIndices).
var convertElementMatcherToBranchedMatcher=function convertElementMatcherToBranchedMatcher(elementMatcher,options){options=options||{};return function(branches){var expanded=branches;if(!options.dontExpandLeafArrays){expanded=expandArraysInBranches(branches,options.dontIncludeLeafArrays);}var ret={};ret.result=_.any(expanded,function(element){var matched=elementMatcher(element.value);// Special case for $elemMatch: it means "true, and use this as an array
// index if I didn't already have one".
if(typeof matched==='number'){// XXX This code dates from when we only stored a single array index
// (for the outermost array). Should we be also including deeper array
// indices from the $elemMatch match?
if(!element.arrayIndices)element.arrayIndices=[matched];matched=true;}// If some element matched, and it's tagged with array indices, include
// those indices in our result object.
if(matched&&element.arrayIndices)ret.arrayIndices=element.arrayIndices;return matched;});return ret;};};// Takes a RegExp object and returns an element matcher.
regexpElementMatcher=function regexpElementMatcher(regexp){return function(value){if(value instanceof RegExp){// Comparing two regexps means seeing if the regexps are identical
// (really!). Underscore knows how.
return _.isEqual(value,regexp);}// Regexps only work against strings.
if(typeof value!=='string')return false;// Reset regexp's state to avoid inconsistent matching for objects with the
// same value on consecutive calls of regexp.test. This happens only if the
// regexp has the 'g' flag. Also note that ES6 introduces a new flag 'y' for
// which we should *not* change the lastIndex but MongoDB doesn't support
// either of these flags.
regexp.lastIndex=0;return regexp.test(value);};};// Takes something that is not an operator object and returns an element matcher
// for equality with that thing.
equalityElementMatcher=function equalityElementMatcher(elementSelector){if(isOperatorObject(elementSelector))throw Error("Can't create equalityValueSelector for operator object");// Special-case: null and undefined are equal (if you got undefined in there
// somewhere, or if you got it due to some branch being non-existent in the
// weird special case), even though they aren't with EJSON.equals.
if(elementSelector==null){// undefined or null
return function(value){return value==null;// undefined or null
};}return function(value){return _LocalCollection._f._equal(elementSelector,value);};};// Takes an operator object (an object with $ keys) and returns a branched
// matcher for it.
var operatorBranchedMatcher=function operatorBranchedMatcher(valueSelector,matcher,isRoot){// Each valueSelector works separately on the various branches.  So one
// operator can match one branch and another can match another branch.  This
// is OK.
var operatorMatchers=[];_.each(valueSelector,function(operand,operator){// XXX we should actually implement $eq, which is new in 2.6
var simpleRange=_.contains(['$lt','$lte','$gt','$gte'],operator)&&_.isNumber(operand);var simpleInequality=operator==='$ne'&&!_.isObject(operand);var simpleInclusion=_.contains(['$in','$nin'],operator)&&_.isArray(operand)&&!_.any(operand,_.isObject);if(!(operator==='$eq'||simpleRange||simpleInclusion||simpleInequality)){matcher._isSimple=false;}if(_.has(VALUE_OPERATORS,operator)){operatorMatchers.push(VALUE_OPERATORS[operator](operand,valueSelector,matcher,isRoot));}else if(_.has(ELEMENT_OPERATORS,operator)){var options=ELEMENT_OPERATORS[operator];operatorMatchers.push(convertElementMatcherToBranchedMatcher(options.compileElementSelector(operand,valueSelector,matcher),options));}else{throw new Error("Unrecognized operator: "+operator);}});return andBranchedMatchers(operatorMatchers);};var compileArrayOfDocumentSelectors=function compileArrayOfDocumentSelectors(selectors,matcher,inElemMatch){if(!isArray(selectors)||_.isEmpty(selectors))throw Error("$and/$or/$nor must be nonempty array");return _.map(selectors,function(subSelector){if(!isPlainObject(subSelector))throw Error("$or/$and/$nor entries need to be full objects");return compileDocumentSelector(subSelector,matcher,{inElemMatch:inElemMatch});});};// Operators that appear at the top level of a document selector.
var LOGICAL_OPERATORS={$and:function $and(subSelector,matcher,inElemMatch){var matchers=compileArrayOfDocumentSelectors(subSelector,matcher,inElemMatch);return andDocumentMatchers(matchers);},$or:function $or(subSelector,matcher,inElemMatch){var matchers=compileArrayOfDocumentSelectors(subSelector,matcher,inElemMatch);// Special case: if there is only one matcher, use it directly, *preserving*
// any arrayIndices it returns.
if(matchers.length===1)return matchers[0];return function(doc){var result=_.any(matchers,function(f){return f(doc).result;});// $or does NOT set arrayIndices when it has multiple
// sub-expressions. (Tested against MongoDB.)
return{result:result};};},$nor:function $nor(subSelector,matcher,inElemMatch){var matchers=compileArrayOfDocumentSelectors(subSelector,matcher,inElemMatch);return function(doc){var result=_.all(matchers,function(f){return!f(doc).result;});// Never set arrayIndices, because we only match if nothing in particular
// "matched" (and because this is consistent with MongoDB).
return{result:result};};},$where:function $where(selectorValue,matcher){// Record that *any* path may be used.
matcher._recordPathUsed('');matcher._hasWhere=true;if(!(selectorValue instanceof Function)){// XXX MongoDB seems to have more complex logic to decide where or or not
// to add "return"; not sure exactly what it is.
selectorValue=Function("obj","return "+selectorValue);}return function(doc){// We make the document available as both `this` and `obj`.
// XXX not sure what we should do if this throws
return{result:selectorValue.call(doc,doc)};};},// This is just used as a comment in the query (in MongoDB, it also ends up in
// query logs); it has no effect on the actual selection.
$comment:function $comment(){return function(){return{result:true};};}};// Returns a branched matcher that matches iff the given matcher does not.
// Note that this implicitly "deMorganizes" the wrapped function.  ie, it
// means that ALL branch values need to fail to match innerBranchedMatcher.
var invertBranchedMatcher=function invertBranchedMatcher(branchedMatcher){return function(branchValues){var invertMe=branchedMatcher(branchValues);// We explicitly choose to strip arrayIndices here: it doesn't make sense to
// say "update the array element that does not match something", at least
// in mongo-land.
return{result:!invertMe.result};};};// Operators that (unlike LOGICAL_OPERATORS) pertain to individual paths in a
// document, but (unlike ELEMENT_OPERATORS) do not have a simple definition as
// "match each branched value independently and combine with
// convertElementMatcherToBranchedMatcher".
var VALUE_OPERATORS={$not:function $not(operand,valueSelector,matcher){return invertBranchedMatcher(compileValueSelector(operand,matcher));},$ne:function $ne(operand){return invertBranchedMatcher(convertElementMatcherToBranchedMatcher(equalityElementMatcher(operand)));},$nin:function $nin(operand){return invertBranchedMatcher(convertElementMatcherToBranchedMatcher(ELEMENT_OPERATORS.$in.compileElementSelector(operand)));},$exists:function $exists(operand){var exists=convertElementMatcherToBranchedMatcher(function(value){return value!==undefined;});return operand?exists:invertBranchedMatcher(exists);},// $options just provides options for $regex; its logic is inside $regex
$options:function $options(operand,valueSelector){if(!_.has(valueSelector,'$regex'))throw Error("$options needs a $regex");return everythingMatcher;},// $maxDistance is basically an argument to $near
$maxDistance:function $maxDistance(operand,valueSelector){if(!valueSelector.$near)throw Error("$maxDistance needs a $near");return everythingMatcher;},$all:function $all(operand,valueSelector,matcher){if(!isArray(operand))throw Error("$all requires array");// Not sure why, but this seems to be what MongoDB does.
if(_.isEmpty(operand))return nothingMatcher;var branchedMatchers=[];_.each(operand,function(criterion){// XXX handle $all/$elemMatch combination
if(isOperatorObject(criterion))throw Error("no $ expressions in $all");// This is always a regexp or equality selector.
branchedMatchers.push(compileValueSelector(criterion,matcher));});// andBranchedMatchers does NOT require all selectors to return true on the
// SAME branch.
return andBranchedMatchers(branchedMatchers);},$near:function $near(operand,valueSelector,matcher,isRoot){if(!isRoot)throw Error("$near can't be inside another $ operator");matcher._hasGeoQuery=true;// There are two kinds of geodata in MongoDB: coordinate pairs and
// GeoJSON. They use different distance metrics, too. GeoJSON queries are
// marked with a $geometry property.
var maxDistance,point,distance;if(isPlainObject(operand)&&_.has(operand,'$geometry')){// GeoJSON "2dsphere" mode.
maxDistance=operand.$maxDistance;point=operand.$geometry;distance=function distance(value){// XXX: for now, we don't calculate the actual distance between, say,
// polygon and circle. If people care about this use-case it will get
// a priority.
if(!value||!value.type)return null;if(value.type==="Point"){return GeoJSON.pointDistance(point,value);}else{return GeoJSON.geometryWithinRadius(value,point,maxDistance)?0:maxDistance+1;}};}else{maxDistance=valueSelector.$maxDistance;if(!isArray(operand)&&!isPlainObject(operand))throw Error("$near argument must be coordinate pair or GeoJSON");point=pointToArray(operand);distance=function distance(value){if(!isArray(value)&&!isPlainObject(value))return null;return distanceCoordinatePairs(point,value);};}return function(branchedValues){// There might be multiple points in the document that match the given
// field. Only one of them needs to be within $maxDistance, but we need to
// evaluate all of them and use the nearest one for the implicit sort
// specifier. (That's why we can't just use ELEMENT_OPERATORS here.)
//
// Note: This differs from MongoDB's implementation, where a document will
// actually show up *multiple times* in the result set, with one entry for
// each within-$maxDistance branching point.
branchedValues=expandArraysInBranches(branchedValues);var result={result:false};_.each(branchedValues,function(branch){var curDistance=distance(branch.value);// Skip branches that aren't real points or are too far away.
if(curDistance===null||curDistance>maxDistance)return;// Skip anything that's a tie.
if(result.distance!==undefined&&result.distance<=curDistance)return;result.result=true;result.distance=curDistance;if(!branch.arrayIndices)delete result.arrayIndices;else result.arrayIndices=branch.arrayIndices;});return result;};}};// Helpers for $near.
var distanceCoordinatePairs=function distanceCoordinatePairs(a,b){a=pointToArray(a);b=pointToArray(b);var x=a[0]-b[0];var y=a[1]-b[1];if(_.isNaN(x)||_.isNaN(y))return null;return Math.sqrt(x*x+y*y);};// Makes sure we get 2 elements array and assume the first one to be x and
// the second one to y no matter what user passes.
// In case user passes { lon: x, lat: y } returns [x, y]
var pointToArray=function pointToArray(point){return _.map(point,_.identity);};// Helper for $lt/$gt/$lte/$gte.
var makeInequality=function makeInequality(cmpValueComparator){return{compileElementSelector:function compileElementSelector(operand){// Arrays never compare false with non-arrays for any inequality.
// XXX This was behavior we observed in pre-release MongoDB 2.5, but
//     it seems to have been reverted.
//     See https://jira.mongodb.org/browse/SERVER-11444
if(isArray(operand)){return function(){return false;};}// Special case: consider undefined and null the same (so true with
// $gte/$lte).
if(operand===undefined)operand=null;var operandType=_LocalCollection._f._type(operand);return function(value){if(value===undefined)value=null;// Comparisons are never true among things of different type (except
// null vs undefined).
if(_LocalCollection._f._type(value)!==operandType)return false;return cmpValueComparator(_LocalCollection._f._cmp(value,operand));};}};};// Each element selector contains:
//  - compileElementSelector, a function with args:
//    - operand - the "right hand side" of the operator
//    - valueSelector - the "context" for the operator (so that $regex can find
//      $options)
//    - matcher - the Matcher this is going into (so that $elemMatch can compile
//      more things)
//    returning a function mapping a single value to bool.
//  - dontExpandLeafArrays, a bool which prevents expandArraysInBranches from
//    being called
//  - dontIncludeLeafArrays, a bool which causes an argument to be passed to
//    expandArraysInBranches if it is called
ELEMENT_OPERATORS={$lt:makeInequality(function(cmpValue){return cmpValue<0;}),$gt:makeInequality(function(cmpValue){return cmpValue>0;}),$lte:makeInequality(function(cmpValue){return cmpValue<=0;}),$gte:makeInequality(function(cmpValue){return cmpValue>=0;}),$mod:{compileElementSelector:function compileElementSelector(operand){if(!(isArray(operand)&&operand.length===2&&typeof operand[0]==='number'&&typeof operand[1]==='number')){throw Error("argument to $mod must be an array of two numbers");}// XXX could require to be ints or round or something
var divisor=operand[0];var remainder=operand[1];return function(value){return typeof value==='number'&&value%divisor===remainder;};}},$in:{compileElementSelector:function compileElementSelector(operand){if(!isArray(operand))throw Error("$in needs an array");var elementMatchers=[];_.each(operand,function(option){if(option instanceof RegExp)elementMatchers.push(regexpElementMatcher(option));else if(isOperatorObject(option))throw Error("cannot nest $ under $in");else elementMatchers.push(equalityElementMatcher(option));});return function(value){// Allow {a: {$in: [null]}} to match when 'a' does not exist.
if(value===undefined)value=null;return _.any(elementMatchers,function(e){return e(value);});};}},$size:{// {a: [[5, 5]]} must match {a: {$size: 1}} but not {a: {$size: 2}}, so we
// don't want to consider the element [5,5] in the leaf array [[5,5]] as a
// possible value.
dontExpandLeafArrays:true,compileElementSelector:function compileElementSelector(operand){if(typeof operand==='string'){// Don't ask me why, but by experimentation, this seems to be what Mongo
// does.
operand=0;}else if(typeof operand!=='number'){throw Error("$size needs a number");}return function(value){return isArray(value)&&value.length===operand;};}},$type:{// {a: [5]} must not match {a: {$type: 4}} (4 means array), but it should
// match {a: {$type: 1}} (1 means number), and {a: [[5]]} must match {$a:
// {$type: 4}}. Thus, when we see a leaf array, we *should* expand it but
// should *not* include it itself.
dontIncludeLeafArrays:true,compileElementSelector:function compileElementSelector(operand){if(typeof operand!=='number')throw Error("$type needs a number");return function(value){return value!==undefined&&_LocalCollection._f._type(value)===operand;};}},$regex:{compileElementSelector:function compileElementSelector(operand,valueSelector){if(!(typeof operand==='string'||operand instanceof RegExp))throw Error("$regex has to be a string or RegExp");var regexp;if(valueSelector.$options!==undefined){// Options passed in $options (even the empty string) always overrides
// options in the RegExp object itself. (See also
// Mongo.Collection._rewriteSelector.)
// Be clear that we only support the JS-supported options, not extended
// ones (eg, Mongo supports x and s). Ideally we would implement x and s
// by transforming the regexp, but not today...
if(/[^gim]/.test(valueSelector.$options))throw new Error("Only the i, m, and g regexp options are supported");var regexSource=operand instanceof RegExp?operand.source:operand;regexp=new RegExp(regexSource,valueSelector.$options);}else if(operand instanceof RegExp){regexp=operand;}else{regexp=new RegExp(operand);}return regexpElementMatcher(regexp);}},$elemMatch:{dontExpandLeafArrays:true,compileElementSelector:function compileElementSelector(operand,valueSelector,matcher){if(!isPlainObject(operand))throw Error("$elemMatch need an object");var subMatcher,isDocMatcher;if(isOperatorObject(_.omit(operand,_.keys(LOGICAL_OPERATORS)),true)){subMatcher=compileValueSelector(operand,matcher);isDocMatcher=false;}else{// This is NOT the same as compileValueSelector(operand), and not just
// because of the slightly different calling convention.
// {$elemMatch: {x: 3}} means "an element has a field x:3", not
// "consists only of a field x:3". Also, regexps and sub-$ are allowed.
subMatcher=compileDocumentSelector(operand,matcher,{inElemMatch:true});isDocMatcher=true;}return function(value){if(!isArray(value))return false;for(var i=0;i<value.length;++i){var arrayElement=value[i];var arg;if(isDocMatcher){// We can only match {$elemMatch: {b: 3}} against objects.
// (We can also match against arrays, if there's numeric indices,
// eg {$elemMatch: {'0.b': 3}} or {$elemMatch: {0: 3}}.)
if(!isPlainObject(arrayElement)&&!isArray(arrayElement))return false;arg=arrayElement;}else{// dontIterate ensures that {a: {$elemMatch: {$gt: 5}}} matches
// {a: [8]} but not {a: [[8]]}
arg=[{value:arrayElement,dontIterate:true}];}// XXX support $near in $elemMatch by propagating $distance?
if(subMatcher(arg).result)return i;// specially understood to mean "use as arrayIndices"
}return false;};}}};// makeLookupFunction(key) returns a lookup function.
//
// A lookup function takes in a document and returns an array of matching
// branches.  If no arrays are found while looking up the key, this array will
// have exactly one branches (possibly 'undefined', if some segment of the key
// was not found).
//
// If arrays are found in the middle, this can have more than one element, since
// we "branch". When we "branch", if there are more key segments to look up,
// then we only pursue branches that are plain objects (not arrays or scalars).
// This means we can actually end up with no branches!
//
// We do *NOT* branch on arrays that are found at the end (ie, at the last
// dotted member of the key). We just return that array; if you want to
// effectively "branch" over the array's values, post-process the lookup
// function with expandArraysInBranches.
//
// Each branch is an object with keys:
//  - value: the value at the branch
//  - dontIterate: an optional bool; if true, it means that 'value' is an array
//    that expandArraysInBranches should NOT expand. This specifically happens
//    when there is a numeric index in the key, and ensures the
//    perhaps-surprising MongoDB behavior where {'a.0': 5} does NOT
//    match {a: [[5]]}.
//  - arrayIndices: if any array indexing was done during lookup (either due to
//    explicit numeric indices or implicit branching), this will be an array of
//    the array indices used, from outermost to innermost; it is falsey or
//    absent if no array index is used. If an explicit numeric index is used,
//    the index will be followed in arrayIndices by the string 'x'.
//
//    Note: arrayIndices is used for two purposes. First, it is used to
//    implement the '$' modifier feature, which only ever looks at its first
//    element.
//
//    Second, it is used for sort key generation, which needs to be able to tell
//    the difference between different paths. Moreover, it needs to
//    differentiate between explicit and implicit branching, which is why
//    there's the somewhat hacky 'x' entry: this means that explicit and
//    implicit array lookups will have different full arrayIndices paths. (That
//    code only requires that different paths have different arrayIndices; it
//    doesn't actually "parse" arrayIndices. As an alternative, arrayIndices
//    could contain objects with flags like "implicit", but I think that only
//    makes the code surrounding them more complex.)
//
//    (By the way, this field ends up getting passed around a lot without
//    cloning, so never mutate any arrayIndices field/var in this package!)
//
//
// At the top level, you may only pass in a plain object or array.
//
// See the test 'minimongo - lookup' for some examples of what lookup functions
// return.
_makeLookupFunction=function makeLookupFunction(key,options){options=options||{};var parts=key.split('.');var firstPart=parts.length?parts[0]:'';var firstPartIsNumeric=isNumericKey(firstPart);var nextPartIsNumeric=parts.length>=2&&isNumericKey(parts[1]);var lookupRest;if(parts.length>1){lookupRest=_makeLookupFunction(parts.slice(1).join('.'));}var omitUnnecessaryFields=function omitUnnecessaryFields(retVal){if(!retVal.dontIterate)delete retVal.dontIterate;if(retVal.arrayIndices&&!retVal.arrayIndices.length)delete retVal.arrayIndices;return retVal;};// Doc will always be a plain object or an array.
// apply an explicit numeric index, an array.
return function(doc,arrayIndices){if(!arrayIndices)arrayIndices=[];if(isArray(doc)){// If we're being asked to do an invalid lookup into an array (non-integer
// or out-of-bounds), return no results (which is different from returning
// a single undefined result, in that `null` equality checks won't match).
if(!(firstPartIsNumeric&&firstPart<doc.length))return[];// Remember that we used this array index. Include an 'x' to indicate that
// the previous index came from being considered as an explicit array
// index (not branching).
arrayIndices=arrayIndices.concat(+firstPart,'x');}// Do our first lookup.
var firstLevel=doc[firstPart];// If there is no deeper to dig, return what we found.
//
// If what we found is an array, most value selectors will choose to treat
// the elements of the array as matchable values in their own right, but
// that's done outside of the lookup function. (Exceptions to this are $size
// and stuff relating to $elemMatch.  eg, {a: {$size: 2}} does not match {a:
// [[1, 2]]}.)
//
// That said, if we just did an *explicit* array lookup (on doc) to find
// firstLevel, and firstLevel is an array too, we do NOT want value
// selectors to iterate over it.  eg, {'a.0': 5} does not match {a: [[5]]}.
// So in that case, we mark the return value as "don't iterate".
if(!lookupRest){return[omitUnnecessaryFields({value:firstLevel,dontIterate:isArray(doc)&&isArray(firstLevel),arrayIndices:arrayIndices})];}// We need to dig deeper.  But if we can't, because what we've found is not
// an array or plain object, we're done. If we just did a numeric index into
// an array, we return nothing here (this is a change in Mongo 2.5 from
// Mongo 2.4, where {'a.0.b': null} stopped matching {a: [5]}). Otherwise,
// return a single `undefined` (which can, for example, match via equality
// with `null`).
if(!isIndexable(firstLevel)){if(isArray(doc))return[];return[omitUnnecessaryFields({value:undefined,arrayIndices:arrayIndices})];}var result=[];var appendToResult=function appendToResult(more){Array.prototype.push.apply(result,more);};// Dig deeper: look up the rest of the parts on whatever we've found.
// (lookupRest is smart enough to not try to do invalid lookups into
// firstLevel if it's an array.)
appendToResult(lookupRest(firstLevel,arrayIndices));// If we found an array, then in *addition* to potentially treating the next
// part as a literal integer lookup, we should also "branch": try to look up
// the rest of the parts on each array element in parallel.
//
// In this case, we *only* dig deeper into array elements that are plain
// objects. (Recall that we only got this far if we have further to dig.)
// This makes sense: we certainly don't dig deeper into non-indexable
// objects. And it would be weird to dig into an array: it's simpler to have
// a rule that explicit integer indexes only apply to an outer array, not to
// an array you find after a branching search.
//
// In the special case of a numeric part in a *sort selector* (not a query
// selector), we skip the branching: we ONLY allow the numeric part to mean
// "look up this index" in that case, not "also look up this index in all
// the elements of the array".
if(isArray(firstLevel)&&!(nextPartIsNumeric&&options.forSort)){_.each(firstLevel,function(branch,arrayIndex){if(isPlainObject(branch)){appendToResult(lookupRest(branch,arrayIndices.concat(arrayIndex)));}});}return result;};};MinimongoTest.makeLookupFunction=_makeLookupFunction;expandArraysInBranches=function expandArraysInBranches(branches,skipTheArrays){var branchesOut=[];_.each(branches,function(branch){var thisIsArray=isArray(branch.value);// We include the branch itself, *UNLESS* we it's an array that we're going
// to iterate and we're told to skip arrays.  (That's right, we include some
// arrays even skipTheArrays is true: these are arrays that were found via
// explicit numerical indices.)
if(!(skipTheArrays&&thisIsArray&&!branch.dontIterate)){branchesOut.push({value:branch.value,arrayIndices:branch.arrayIndices});}if(thisIsArray&&!branch.dontIterate){_.each(branch.value,function(leaf,i){branchesOut.push({value:leaf,arrayIndices:(branch.arrayIndices||[]).concat(i)});});}});return branchesOut;};var nothingMatcher=function nothingMatcher(docOrBranchedValues){return{result:false};};var everythingMatcher=function everythingMatcher(docOrBranchedValues){return{result:true};};// NB: We are cheating and using this function to implement "AND" for both
// "document matchers" and "branched matchers". They both return result objects
// but the argument is different: for the former it's a whole doc, whereas for
// the latter it's an array of "branched values".
var andSomeMatchers=function andSomeMatchers(subMatchers){if(subMatchers.length===0)return everythingMatcher;if(subMatchers.length===1)return subMatchers[0];return function(docOrBranches){var ret={};ret.result=_.all(subMatchers,function(f){var subResult=f(docOrBranches);// Copy a 'distance' number out of the first sub-matcher that has
// one. Yes, this means that if there are multiple $near fields in a
// query, something arbitrary happens; this appears to be consistent with
// Mongo.
if(subResult.result&&subResult.distance!==undefined&&ret.distance===undefined){ret.distance=subResult.distance;}// Similarly, propagate arrayIndices from sub-matchers... but to match
// MongoDB behavior, this time the *last* sub-matcher with arrayIndices
// wins.
if(subResult.result&&subResult.arrayIndices){ret.arrayIndices=subResult.arrayIndices;}return subResult.result;});// If we didn't actually match, forget any extra metadata we came up with.
if(!ret.result){delete ret.distance;delete ret.arrayIndices;}return ret;};};var andDocumentMatchers=andSomeMatchers;var andBranchedMatchers=andSomeMatchers;// helpers used by compiled selector code
_LocalCollection._f={// XXX for _all and _in, consider building 'inquery' at compile time..
_type:function _type(v){if(typeof v==="number")return 1;if(typeof v==="string")return 2;if(typeof v==="boolean")return 8;if(isArray(v))return 4;if(v===null)return 10;if(v instanceof RegExp)// note that typeof(/x/) === "object"
return 11;if(typeof v==="function")return 13;if(v instanceof Date)return 9;if(EJSON.isBinary(v))return 5;if(v instanceof MongoID.ObjectID)return 7;return 3;// object
// XXX support some/all of these:
// 14, symbol
// 15, javascript code with scope
// 16, 18: 32-bit/64-bit integer
// 17, timestamp
// 255, minkey
// 127, maxkey
},// deep equality test: use for literal document and array matches
_equal:function _equal(a,b){return EJSON.equals(a,b,{keyOrderSensitive:true});},// maps a type code to a value that can be used to sort values of
// different types
_typeorder:function _typeorder(t){// http://www.mongodb.org/display/DOCS/What+is+the+Compare+Order+for+BSON+Types
// XXX what is the correct sort position for Javascript code?
// ('100' in the matrix below)
// XXX minkey/maxkey
return[-1,// (not a type)
1,// number
2,// string
3,// object
4,// array
5,// binary
-1,// deprecated
6,// ObjectID
7,// bool
8,// Date
0,// null
9,// RegExp
-1,// deprecated
100,// JS code
2,// deprecated (symbol)
100,// JS code
1,// 32-bit int
8,// Mongo timestamp
1// 64-bit int
][t];},// compare two values of unknown type according to BSON ordering
// semantics. (as an extension, consider 'undefined' to be less than
// any other value.) return negative if a is less, positive if b is
// less, or 0 if equal
_cmp:function _cmp(a,b){if(a===undefined)return b===undefined?0:-1;if(b===undefined)return 1;var ta=_LocalCollection._f._type(a);var tb=_LocalCollection._f._type(b);var oa=_LocalCollection._f._typeorder(ta);var ob=_LocalCollection._f._typeorder(tb);if(oa!==ob)return oa<ob?-1:1;if(ta!==tb)// XXX need to implement this if we implement Symbol or integers, or
// Timestamp
throw Error("Missing type coercion logic in _cmp");if(ta===7){// ObjectID
// Convert to string.
ta=tb=2;a=a.toHexString();b=b.toHexString();}if(ta===9){// Date
// Convert to millis.
ta=tb=1;a=a.getTime();b=b.getTime();}if(ta===1)// double
return a-b;if(tb===2)// string
return a<b?-1:a===b?0:1;if(ta===3){// Object
// this could be much more efficient in the expected case ...
var to_array=function to_array(obj){var ret=[];for(var key in obj){ret.push(key);ret.push(obj[key]);}return ret;};return _LocalCollection._f._cmp(to_array(a),to_array(b));}if(ta===4){// Array
for(var i=0;;i++){if(i===a.length)return i===b.length?0:-1;if(i===b.length)return 1;var s=_LocalCollection._f._cmp(a[i],b[i]);if(s!==0)return s;}}if(ta===5){// binary
// Surprisingly, a small binary blob is always less than a large one in
// Mongo.
if(a.length!==b.length)return a.length-b.length;for(i=0;i<a.length;i++){if(a[i]<b[i])return-1;if(a[i]>b[i])return 1;}return 0;}if(ta===8){// boolean
if(a)return b?0:1;return b?-1:0;}if(ta===10)// null
return 0;if(ta===11)// regexp
throw Error("Sorting not supported on regular expression");// XXX
// 13: javascript code
// 14: symbol
// 15: javascript code with scope
// 16: 32-bit integer
// 17: timestamp
// 18: 64-bit integer
// 255: minkey
// 127: maxkey
if(ta===13)// javascript code
throw Error("Sorting not supported on Javascript code");// XXX
throw Error("Unknown type to sort");}};// Oddball function used by upsert.
_LocalCollection._removeDollarOperators=function(selector){var selectorDoc={};for(var k in selector){if(k.substr(0,1)!=='$')selectorDoc[k]=selector[k];}return selectorDoc;};// Give a sort spec, which can be in any of these forms:
//   {"key1": 1, "key2": -1}
//   [["key1", "asc"], ["key2", "desc"]]
//   ["key1", ["key2", "desc"]]
//
// (.. with the first form being dependent on the key enumeration
// behavior of your javascript VM, which usually does what you mean in
// this case if the key names don't look like integers ..)
//
// return a function that takes two objects, and returns -1 if the
// first object comes first in order, 1 if the second object comes
// first, or 0 if neither object comes before the other.
Minimongo.Sorter=function(spec,options){var self=this;options=options||{};self._sortSpecParts=[];self._sortFunction=null;var addSpecPart=function addSpecPart(path,ascending){if(!path)throw Error("sort keys must be non-empty");if(path.charAt(0)==='$')throw Error("unsupported sort key: "+path);self._sortSpecParts.push({path:path,lookup:_makeLookupFunction(path,{forSort:true}),ascending:ascending});};if(spec instanceof Array){for(var i=0;i<spec.length;i++){if(typeof spec[i]==="string"){addSpecPart(spec[i],true);}else{addSpecPart(spec[i][0],spec[i][1]!=="desc");}}}else if((typeof spec==="undefined"?"undefined":_typeof(spec))==="object"){_.each(spec,function(value,key){addSpecPart(key,value>=0);});}else if(typeof spec==="function"){self._sortFunction=spec;}else{throw Error("Bad sort specification: "+JSON.stringify(spec));}// If a function is specified for sorting, we skip the rest.
if(self._sortFunction)return;// To implement affectedByModifier, we piggy-back on top of Matcher's
// affectedByModifier code; we create a selector that is affected by the same
// modifiers as this sort order. This is only implemented on the server.
if(self.affectedByModifier){var selector={};_.each(self._sortSpecParts,function(spec){selector[spec.path]=1;});self._selectorForAffectedByModifier=new Minimongo.Matcher(selector);}self._keyComparator=composeComparators(_.map(self._sortSpecParts,function(spec,i){return self._keyFieldComparator(i);}));// If you specify a matcher for this Sorter, _keyFilter may be set to a
// function which selects whether or not a given "sort key" (tuple of values
// for the different sort spec fields) is compatible with the selector.
self._keyFilter=null;options.matcher&&self._useWithMatcher(options.matcher);};// In addition to these methods, sorter_project.js defines combineIntoProjection
// on the server only.
_.extend(Minimongo.Sorter.prototype,{getComparator:function getComparator(options){var self=this;// If we have no distances, just use the comparator from the source
// specification (which defaults to "everything is equal".
if(!options||!options.distances){return self._getBaseComparator();}var distances=options.distances;// Return a comparator which first tries the sort specification, and if that
// says "it's equal", breaks ties using $near distances.
return composeComparators([self._getBaseComparator(),function(a,b){if(!distances.has(a._id))throw Error("Missing distance for "+a._id);if(!distances.has(b._id))throw Error("Missing distance for "+b._id);return distances.get(a._id)-distances.get(b._id);}]);},_getPaths:function _getPaths(){var self=this;return _.pluck(self._sortSpecParts,'path');},// Finds the minimum key from the doc, according to the sort specs.  (We say
// "minimum" here but this is with respect to the sort spec, so "descending"
// sort fields mean we're finding the max for that field.)
//
// Note that this is NOT "find the minimum value of the first field, the
// minimum value of the second field, etc"... it's "choose the
// lexicographically minimum value of the key vector, allowing only keys which
// you can find along the same paths".  ie, for a doc {a: [{x: 0, y: 5}, {x:
// 1, y: 3}]} with sort spec {'a.x': 1, 'a.y': 1}, the only keys are [0,5] and
// [1,3], and the minimum key is [0,5]; notably, [0,3] is NOT a key.
_getMinKeyFromDoc:function _getMinKeyFromDoc(doc){var self=this;var minKey=null;self._generateKeysFromDoc(doc,function(key){if(!self._keyCompatibleWithSelector(key))return;if(minKey===null){minKey=key;return;}if(self._compareKeys(key,minKey)<0){minKey=key;}});// This could happen if our key filter somehow filters out all the keys even
// though somehow the selector matches.
if(minKey===null)throw Error("sort selector found no keys in doc?");return minKey;},_keyCompatibleWithSelector:function _keyCompatibleWithSelector(key){var self=this;return!self._keyFilter||self._keyFilter(key);},// Iterates over each possible "key" from doc (ie, over each branch), calling
// 'cb' with the key.
_generateKeysFromDoc:function _generateKeysFromDoc(doc,cb){var self=this;if(self._sortSpecParts.length===0)throw new Error("can't generate keys without a spec");// maps index -> ({'' -> value} or {path -> value})
var valuesByIndexAndPath=[];var pathFromIndices=function pathFromIndices(indices){return indices.join(',')+',';};var knownPaths=null;_.each(self._sortSpecParts,function(spec,whichField){// Expand any leaf arrays that we find, and ignore those arrays
// themselves.  (We never sort based on an array itself.)
var branches=expandArraysInBranches(spec.lookup(doc),true);// If there are no values for a key (eg, key goes to an empty array),
// pretend we found one null value.
if(!branches.length)branches=[{value:null}];var usedPaths=false;valuesByIndexAndPath[whichField]={};_.each(branches,function(branch){if(!branch.arrayIndices){// If there are no array indices for a branch, then it must be the
// only branch, because the only thing that produces multiple branches
// is the use of arrays.
if(branches.length>1)throw Error("multiple branches but no array used?");valuesByIndexAndPath[whichField]['']=branch.value;return;}usedPaths=true;var path=pathFromIndices(branch.arrayIndices);if(_.has(valuesByIndexAndPath[whichField],path))throw Error("duplicate path: "+path);valuesByIndexAndPath[whichField][path]=branch.value;// If two sort fields both go into arrays, they have to go into the
// exact same arrays and we have to find the same paths.  This is
// roughly the same condition that makes MongoDB throw this strange
// error message.  eg, the main thing is that if sort spec is {a: 1,
// b:1} then a and b cannot both be arrays.
//
// (In MongoDB it seems to be OK to have {a: 1, 'a.x.y': 1} where 'a'
// and 'a.x.y' are both arrays, but we don't allow this for now.
// #NestedArraySort
// XXX achieve full compatibility here
if(knownPaths&&!_.has(knownPaths,path)){throw Error("cannot index parallel arrays");}});if(knownPaths){// Similarly to above, paths must match everywhere, unless this is a
// non-array field.
if(!_.has(valuesByIndexAndPath[whichField],'')&&_.size(knownPaths)!==_.size(valuesByIndexAndPath[whichField])){throw Error("cannot index parallel arrays!");}}else if(usedPaths){knownPaths={};_.each(valuesByIndexAndPath[whichField],function(x,path){knownPaths[path]=true;});}});if(!knownPaths){// Easy case: no use of arrays.
var soleKey=_.map(valuesByIndexAndPath,function(values){if(!_.has(values,''))throw Error("no value in sole key case?");return values[''];});cb(soleKey);return;}_.each(knownPaths,function(x,path){var key=_.map(valuesByIndexAndPath,function(values){if(_.has(values,''))return values[''];if(!_.has(values,path))throw Error("missing path?");return values[path];});cb(key);});},// Takes in two keys: arrays whose lengths match the number of spec
// parts. Returns negative, 0, or positive based on using the sort spec to
// compare fields.
_compareKeys:function _compareKeys(key1,key2){var self=this;if(key1.length!==self._sortSpecParts.length||key2.length!==self._sortSpecParts.length){throw Error("Key has wrong length");}return self._keyComparator(key1,key2);},// Given an index 'i', returns a comparator that compares two key arrays based
// on field 'i'.
_keyFieldComparator:function _keyFieldComparator(i){var self=this;var invert=!self._sortSpecParts[i].ascending;return function(key1,key2){var compare=_LocalCollection._f._cmp(key1[i],key2[i]);if(invert)compare=-compare;return compare;};},// Returns a comparator that represents the sort specification (but not
// including a possible geoquery distance tie-breaker).
_getBaseComparator:function _getBaseComparator(){var self=this;if(self._sortFunction)return self._sortFunction;// If we're only sorting on geoquery distance and no specs, just say
// everything is equal.
if(!self._sortSpecParts.length){return function(doc1,doc2){return 0;};}return function(doc1,doc2){var key1=self._getMinKeyFromDoc(doc1);var key2=self._getMinKeyFromDoc(doc2);return self._compareKeys(key1,key2);};},// In MongoDB, if you have documents
//    {_id: 'x', a: [1, 10]} and
//    {_id: 'y', a: [5, 15]},
// then C.find({}, {sort: {a: 1}}) puts x before y (1 comes before 5).
// But  C.find({a: {$gt: 3}}, {sort: {a: 1}}) puts y before x (1 does not
// match the selector, and 5 comes before 10).
//
// The way this works is pretty subtle!  For example, if the documents
// are instead {_id: 'x', a: [{x: 1}, {x: 10}]}) and
//             {_id: 'y', a: [{x: 5}, {x: 15}]}),
// then C.find({'a.x': {$gt: 3}}, {sort: {'a.x': 1}}) and
//      C.find({a: {$elemMatch: {x: {$gt: 3}}}}, {sort: {'a.x': 1}})
// both follow this rule (y before x).  (ie, you do have to apply this
// through $elemMatch.)
//
// So if you pass a matcher to this sorter's constructor, we will attempt to
// skip sort keys that don't match the selector. The logic here is pretty
// subtle and undocumented; we've gotten as close as we can figure out based
// on our understanding of Mongo's behavior.
_useWithMatcher:function _useWithMatcher(matcher){var self=this;if(self._keyFilter)throw Error("called _useWithMatcher twice?");// If we are only sorting by distance, then we're not going to bother to
// build a key filter.
// XXX figure out how geoqueries interact with this stuff
if(_.isEmpty(self._sortSpecParts))return;var selector=matcher._selector;// If the user just passed a literal function to find(), then we can't get a
// key filter from it.
if(selector instanceof Function)return;var constraintsByPath={};_.each(self._sortSpecParts,function(spec,i){constraintsByPath[spec.path]=[];});_.each(selector,function(subSelector,key){// XXX support $and and $or
var constraints=constraintsByPath[key];if(!constraints)return;// XXX it looks like the real MongoDB implementation isn't "does the
// regexp match" but "does the value fall into a range named by the
// literal prefix of the regexp", ie "foo" in /^foo(bar|baz)+/  But
// "does the regexp match" is a good approximation.
if(subSelector instanceof RegExp){// As far as we can tell, using either of the options that both we and
// MongoDB support ('i' and 'm') disables use of the key filter. This
// makes sense: MongoDB mostly appears to be calculating ranges of an
// index to use, which means it only cares about regexps that match
// one range (with a literal prefix), and both 'i' and 'm' prevent the
// literal prefix of the regexp from actually meaning one range.
if(subSelector.ignoreCase||subSelector.multiline)return;constraints.push(regexpElementMatcher(subSelector));return;}if(isOperatorObject(subSelector)){_.each(subSelector,function(operand,operator){if(_.contains(['$lt','$lte','$gt','$gte'],operator)){// XXX this depends on us knowing that these operators don't use any
// of the arguments to compileElementSelector other than operand.
constraints.push(ELEMENT_OPERATORS[operator].compileElementSelector(operand));}// See comments in the RegExp block above.
if(operator==='$regex'&&!subSelector.$options){constraints.push(ELEMENT_OPERATORS.$regex.compileElementSelector(operand,subSelector));}// XXX support {$exists: true}, $mod, $type, $in, $elemMatch
});return;}// OK, it's an equality thing.
constraints.push(equalityElementMatcher(subSelector));});// It appears that the first sort field is treated differently from the
// others; we shouldn't create a key filter unless the first sort field is
// restricted, though after that point we can restrict the other sort fields
// or not as we wish.
if(_.isEmpty(constraintsByPath[self._sortSpecParts[0].path]))return;self._keyFilter=function(key){return _.all(self._sortSpecParts,function(specPart,index){return _.all(constraintsByPath[specPart.path],function(f){return f(key[index]);});});};}});// Given an array of comparators
// (functions (a,b)->(negative or positive or zero)), returns a single
// comparator which uses each comparator in order and returns the first
// non-zero value.
var composeComparators=function composeComparators(comparatorArray){return function(a,b){for(var i=0;i<comparatorArray.length;++i){var compare=comparatorArray[i](a,b);if(compare!==0)return compare;}return 0;};};// Knows how to compile a fields projection to a predicate function.
// @returns - Function: a closure that filters out an object according to the
//            fields projection rules:
//            @param obj - Object: MongoDB-styled document
//            @returns - Object: a document with the fields filtered out
//                       according to projection rules. Doesn't retain subfields
//                       of passed argument.
_LocalCollection._compileProjection=function(fields){_LocalCollection._checkSupportedProjection(fields);var _idProjection=_.isUndefined(fields._id)?true:fields._id;var details=projectionDetails(fields);// returns transformed doc according to ruleTree
var transform=function transform(doc,ruleTree){// Special case for "sets"
if(_.isArray(doc))return _.map(doc,function(subdoc){return transform(subdoc,ruleTree);});var res=details.including?{}:EJSON.clone(doc);_.each(ruleTree,function(rule,key){if(!_.has(doc,key))return;if(_.isObject(rule)){// For sub-objects/subsets we branch
if(_.isObject(doc[key]))res[key]=transform(doc[key],rule);// Otherwise we don't even touch this subfield
}else if(details.including)res[key]=EJSON.clone(doc[key]);else delete res[key];});return res;};return function(obj){var res=transform(obj,details.tree);if(_idProjection&&_.has(obj,'_id'))res._id=obj._id;if(!_idProjection&&_.has(res,'_id'))delete res._id;return res;};};// Traverses the keys of passed projection and constructs a tree where all
// leaves are either all True or all False
// @returns Object:
//  - tree - Object - tree representation of keys involved in projection
//  (exception for '_id' as it is a special case handled separately)
//  - including - Boolean - "take only certain fields" type of projection
projectionDetails=function projectionDetails(fields){// Find the non-_id keys (_id is handled specially because it is included unless
// explicitly excluded). Sort the keys, so that our code to detect overlaps
// like 'foo' and 'foo.bar' can assume that 'foo' comes first.
var fieldsKeys=_.keys(fields).sort();// If _id is the only field in the projection, do not remove it, since it is
// required to determine if this is an exclusion or exclusion. Also keep an
// inclusive _id, since inclusive _id follows the normal rules about mixing
// inclusive and exclusive fields. If _id is not the only field in the
// projection and is exclusive, remove it so it can be handled later by a
// special case, since exclusive _id is always allowed.
if(fieldsKeys.length>0&&!(fieldsKeys.length===1&&fieldsKeys[0]==='_id')&&!(_.contains(fieldsKeys,'_id')&&fields['_id']))fieldsKeys=_.reject(fieldsKeys,function(key){return key==='_id';});var including=null;// Unknown
_.each(fieldsKeys,function(keyPath){var rule=!!fields[keyPath];if(including===null)including=rule;if(including!==rule)// This error message is copied from MongoDB shell
throw MinimongoError("You cannot currently mix including and excluding fields.");});var projectionRulesTree=pathsToTree(fieldsKeys,function(path){return including;},function(node,path,fullPath){// Check passed projection fields' keys: If you have two rules such as
// 'foo.bar' and 'foo.bar.baz', then the result becomes ambiguous. If
// that happens, there is a probability you are doing something wrong,
// framework should notify you about such mistake earlier on cursor
// compilation step than later during runtime.  Note, that real mongo
// doesn't do anything about it and the later rule appears in projection
// project, more priority it takes.
//
// Example, assume following in mongo shell:
// > db.coll.insert({ a: { b: 23, c: 44 } })
// > db.coll.find({}, { 'a': 1, 'a.b': 1 })
// { "_id" : ObjectId("520bfe456024608e8ef24af3"), "a" : { "b" : 23 } }
// > db.coll.find({}, { 'a.b': 1, 'a': 1 })
// { "_id" : ObjectId("520bfe456024608e8ef24af3"), "a" : { "b" : 23, "c" : 44 } }
//
// Note, how second time the return set of keys is different.
var currentPath=fullPath;var anotherPath=path;throw MinimongoError("both "+currentPath+" and "+anotherPath+" found in fields option, using both of them may trigger "+"unexpected behavior. Did you mean to use only one of them?");});return{tree:projectionRulesTree,including:including};};// paths - Array: list of mongo style paths
// newLeafFn - Function: of form function(path) should return a scalar value to
//                       put into list created for that path
// conflictFn - Function: of form function(node, path, fullPath) is called
//                        when building a tree path for 'fullPath' node on
//                        'path' was already a leaf with a value. Must return a
//                        conflict resolution.
// initial tree - Optional Object: starting tree.
// @returns - Object: tree represented as a set of nested objects
pathsToTree=function pathsToTree(paths,newLeafFn,conflictFn,tree){tree=tree||{};_.each(paths,function(keyPath){var treePos=tree;var pathArr=keyPath.split('.');// use _.all just for iteration with break
var success=_.all(pathArr.slice(0,-1),function(key,idx){if(!_.has(treePos,key))treePos[key]={};else if(!_.isObject(treePos[key])){treePos[key]=conflictFn(treePos[key],pathArr.slice(0,idx+1).join('.'),keyPath);// break out of loop if we are failing for this path
if(!_.isObject(treePos[key]))return false;}treePos=treePos[key];return true;});if(success){var lastKey=_.last(pathArr);if(!_.has(treePos,lastKey))treePos[lastKey]=newLeafFn(keyPath);else treePos[lastKey]=conflictFn(treePos[lastKey],keyPath,keyPath);}});return tree;};_LocalCollection._checkSupportedProjection=function(fields){if(!_.isObject(fields)||_.isArray(fields))throw MinimongoError("fields option must be an object");_.each(fields,function(val,keyPath){if(_.contains(keyPath.split('.'),'$'))throw MinimongoError("Minimongo doesn't support $ operator in projections yet.");if((typeof val==="undefined"?"undefined":_typeof(val))==='object'&&_.intersection(['$elemMatch','$meta','$slice'],_.keys(val)).length>0)throw MinimongoError("Minimongo doesn't support operators in projections yet.");if(_.indexOf([1,0,true,false],val)===-1)throw MinimongoError("Projection values should be one of 1, 0, true, or false");});};// XXX need a strategy for passing the binding of $ into this
// function, from the compiled selector
//
// maybe just {key.up.to.just.before.dollarsign: array_index}
//
// XXX atomicity: if one modification fails, do we roll back the whole
// change?
//
// options:
//   - isInsert is set when _modify is being called to compute the document to
//     insert as part of an upsert operation. We use this primarily to figure
//     out when to set the fields in $setOnInsert, if present.
_LocalCollection._modify=function(doc,mod,options){options=options||{};if(!isPlainObject(mod))throw MinimongoError("Modifier must be an object");// Make sure the caller can't mutate our data structures.
mod=EJSON.clone(mod);var isModifier=isOperatorObject(mod);var newDoc;if(!isModifier){if(mod._id&&!EJSON.equals(doc._id,mod._id))throw MinimongoError("Cannot change the _id of a document");// replace the whole document
for(var k in mod){if(/\./.test(k))throw MinimongoError("When replacing document, field name may not contain '.'");}newDoc=mod;}else{// apply modifiers to the doc.
newDoc=EJSON.clone(doc);_.each(mod,function(operand,op){var modFunc=MODIFIERS[op];// Treat $setOnInsert as $set if this is an insert.
if(options.isInsert&&op==='$setOnInsert')modFunc=MODIFIERS['$set'];if(!modFunc)throw MinimongoError("Invalid modifier specified "+op);_.each(operand,function(arg,keypath){if(keypath===''){throw MinimongoError("An empty update path is not valid.");}if(keypath==='_id'){throw MinimongoError("Mod on _id not allowed");}var keyparts=keypath.split('.');if(!_.all(keyparts,_.identity)){throw MinimongoError("The update path '"+keypath+"' contains an empty field name, which is not allowed.");}var noCreate=_.has(NO_CREATE_MODIFIERS,op);var forbidArray=op==="$rename";var target=findModTarget(newDoc,keyparts,{noCreate:NO_CREATE_MODIFIERS[op],forbidArray:op==="$rename",arrayIndices:options.arrayIndices});var field=keyparts.pop();modFunc(target,field,arg,keypath,newDoc);});});}// move new document into place.
_.each(_.keys(doc),function(k){// Note: this used to be for (var k in doc) however, this does not
// work right in Opera. Deleting from a doc while iterating over it
// would sometimes cause opera to skip some keys.
if(k!=='_id')delete doc[k];});_.each(newDoc,function(v,k){doc[k]=v;});};// for a.b.c.2.d.e, keyparts should be ['a', 'b', 'c', '2', 'd', 'e'],
// and then you would operate on the 'e' property of the returned
// object.
//
// if options.noCreate is falsey, creates intermediate levels of
// structure as necessary, like mkdir -p (and raises an exception if
// that would mean giving a non-numeric property to an array.) if
// options.noCreate is true, return undefined instead.
//
// may modify the last element of keyparts to signal to the caller that it needs
// to use a different value to index into the returned object (for example,
// ['a', '01'] -> ['a', 1]).
//
// if forbidArray is true, return null if the keypath goes through an array.
//
// if options.arrayIndices is set, use its first element for the (first) '$' in
// the path.
var findModTarget=function findModTarget(doc,keyparts,options){options=options||{};var usedArrayIndex=false;for(var i=0;i<keyparts.length;i++){var last=i===keyparts.length-1;var keypart=keyparts[i];var indexable=isIndexable(doc);if(!indexable){if(options.noCreate)return undefined;var e=MinimongoError("cannot use the part '"+keypart+"' to traverse "+doc);e.setPropertyError=true;throw e;}if(doc instanceof Array){if(options.forbidArray)return null;if(keypart==='$'){if(usedArrayIndex)throw MinimongoError("Too many positional (i.e. '$') elements");if(!options.arrayIndices||!options.arrayIndices.length){throw MinimongoError("The positional operator did not find the "+"match needed from the query");}keypart=options.arrayIndices[0];usedArrayIndex=true;}else if(isNumericKey(keypart)){keypart=parseInt(keypart);}else{if(options.noCreate)return undefined;throw MinimongoError("can't append to array using string field name ["+keypart+"]");}if(last)// handle 'a.01'
keyparts[i]=keypart;if(options.noCreate&&keypart>=doc.length)return undefined;while(doc.length<keypart){doc.push(null);}if(!last){if(doc.length===keypart)doc.push({});else if(_typeof(doc[keypart])!=="object")throw MinimongoError("can't modify field '"+keyparts[i+1]+"' of list value "+JSON.stringify(doc[keypart]));}}else{if(keypart.length&&keypart.substr(0,1)==='$')throw MinimongoError("can't set field named "+keypart);if(!(keypart in doc)){if(options.noCreate)return undefined;if(!last)doc[keypart]={};}}if(last)return doc;doc=doc[keypart];}// notreached
};var NO_CREATE_MODIFIERS={$unset:true,$pop:true,$rename:true,$pull:true,$pullAll:true};var MODIFIERS={$inc:function $inc(target,field,arg){if(typeof arg!=="number")throw MinimongoError("Modifier $inc allowed for numbers only");if(field in target){if(typeof target[field]!=="number")throw MinimongoError("Cannot apply $inc modifier to non-number");target[field]+=arg;}else{target[field]=arg;}},$set:function $set(target,field,arg){if(!_.isObject(target)){// not an array or an object
var e=MinimongoError("Cannot set property on non-object field");e.setPropertyError=true;throw e;}if(target===null){var e=MinimongoError("Cannot set property on null");e.setPropertyError=true;throw e;}target[field]=arg;},$setOnInsert:function $setOnInsert(target,field,arg){// converted to `$set` in `_modify`
},$unset:function $unset(target,field,arg){if(target!==undefined){if(target instanceof Array){if(field in target)target[field]=null;}else delete target[field];}},$push:function $push(target,field,arg){if(target[field]===undefined)target[field]=[];if(!(target[field]instanceof Array))throw MinimongoError("Cannot apply $push modifier to non-array");if(!(arg&&arg.$each)){// Simple mode: not $each
target[field].push(arg);return;}// Fancy mode: $each (and maybe $slice and $sort and $position)
var toPush=arg.$each;if(!(toPush instanceof Array))throw MinimongoError("$each must be an array");// Parse $position
var position=undefined;if('$position'in arg){if(typeof arg.$position!=="number")throw MinimongoError("$position must be a numeric value");// XXX should check to make sure integer
if(arg.$position<0)throw MinimongoError("$position in $push must be zero or positive");position=arg.$position;}// Parse $slice.
var slice=undefined;if('$slice'in arg){if(typeof arg.$slice!=="number")throw MinimongoError("$slice must be a numeric value");// XXX should check to make sure integer
if(arg.$slice>0)throw MinimongoError("$slice in $push must be zero or negative");slice=arg.$slice;}// Parse $sort.
var sortFunction=undefined;if(arg.$sort){if(slice===undefined)throw MinimongoError("$sort requires $slice to be present");// XXX this allows us to use a $sort whose value is an array, but that's
// actually an extension of the Node driver, so it won't work
// server-side. Could be confusing!
// XXX is it correct that we don't do geo-stuff here?
sortFunction=new Minimongo.Sorter(arg.$sort).getComparator();for(var i=0;i<toPush.length;i++){if(_LocalCollection._f._type(toPush[i])!==3){throw MinimongoError("$push like modifiers using $sort "+"require all elements to be objects");}}}// Actually push.
if(position===undefined){for(var j=0;j<toPush.length;j++){target[field].push(toPush[j]);}}else{var spliceArguments=[position,0];for(var j=0;j<toPush.length;j++){spliceArguments.push(toPush[j]);}Array.prototype.splice.apply(target[field],spliceArguments);}// Actually sort.
if(sortFunction)target[field].sort(sortFunction);// Actually slice.
if(slice!==undefined){if(slice===0)target[field]=[];// differs from Array.slice!
else target[field]=target[field].slice(slice);}},$pushAll:function $pushAll(target,field,arg){if(!((typeof arg==="undefined"?"undefined":_typeof(arg))==="object"&&arg instanceof Array))throw MinimongoError("Modifier $pushAll/pullAll allowed for arrays only");var x=target[field];if(x===undefined)target[field]=arg;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $pushAll modifier to non-array");else{for(var i=0;i<arg.length;i++){x.push(arg[i]);}}},$addToSet:function $addToSet(target,field,arg){var isEach=false;if((typeof arg==="undefined"?"undefined":_typeof(arg))==="object"){//check if first key is '$each'
for(var k in arg){if(k==="$each")isEach=true;break;}}var values=isEach?arg["$each"]:[arg];var x=target[field];if(x===undefined)target[field]=values;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $addToSet modifier to non-array");else{_.each(values,function(value){for(var i=0;i<x.length;i++){if(_LocalCollection._f._equal(value,x[i]))return;}x.push(value);});}},$pop:function $pop(target,field,arg){if(target===undefined)return;var x=target[field];if(x===undefined)return;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $pop modifier to non-array");else{if(typeof arg==='number'&&arg<0)x.splice(0,1);else x.pop();}},$pull:function $pull(target,field,arg){if(target===undefined)return;var x=target[field];if(x===undefined)return;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $pull/pullAll modifier to non-array");else{var out=[];if(arg!=null&&(typeof arg==="undefined"?"undefined":_typeof(arg))==="object"&&!(arg instanceof Array)){// XXX would be much nicer to compile this once, rather than
// for each document we modify.. but usually we're not
// modifying that many documents, so we'll let it slide for
// now
// XXX Minimongo.Matcher isn't up for the job, because we need
// to permit stuff like {$pull: {a: {$gt: 4}}}.. something
// like {$gt: 4} is not normally a complete selector.
// same issue as $elemMatch possibly?
var matcher=new Minimongo.Matcher(arg);for(var i=0;i<x.length;i++){if(!matcher.documentMatches(x[i]).result)out.push(x[i]);}}else{for(var i=0;i<x.length;i++){if(!_LocalCollection._f._equal(x[i],arg))out.push(x[i]);}}target[field]=out;}},$pullAll:function $pullAll(target,field,arg){if(!((typeof arg==="undefined"?"undefined":_typeof(arg))==="object"&&arg instanceof Array))throw MinimongoError("Modifier $pushAll/pullAll allowed for arrays only");if(target===undefined)return;var x=target[field];if(x===undefined)return;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $pull/pullAll modifier to non-array");else{var out=[];for(var i=0;i<x.length;i++){var exclude=false;for(var j=0;j<arg.length;j++){if(_LocalCollection._f._equal(x[i],arg[j])){exclude=true;break;}}if(!exclude)out.push(x[i]);}target[field]=out;}},$rename:function $rename(target,field,arg,keypath,doc){if(keypath===arg)// no idea why mongo has this restriction..
throw MinimongoError("$rename source must differ from target");if(target===null)throw MinimongoError("$rename source field invalid");if(typeof arg!=="string")throw MinimongoError("$rename target must be a string");if(target===undefined)return;var v=target[field];delete target[field];var keyparts=arg.split('.');var target2=findModTarget(doc,keyparts,{forbidArray:true});if(target2===null)throw MinimongoError("$rename target field invalid");var field2=keyparts.pop();target2[field2]=v;},$bit:function $bit(target,field,arg){// XXX mongo only supports $bit on integers, and we only support
// native javascript numbers (doubles) so far, so we can't support $bit
throw MinimongoError("$bit is not supported");}};// ordered: bool.
// old_results and new_results: collections of documents.
//    if ordered, they are arrays.
//    if unordered, they are IdMaps
_LocalCollection._diffQueryChanges=function(ordered,oldResults,newResults,observer,options){return DiffSequence.diffQueryChanges(ordered,oldResults,newResults,observer,options);};_LocalCollection._diffQueryUnorderedChanges=function(oldResults,newResults,observer,options){return DiffSequence.diffQueryUnorderedChanges(oldResults,newResults,observer,options);};_LocalCollection._diffQueryOrderedChanges=function(oldResults,newResults,observer,options){return DiffSequence.diffQueryOrderedChanges(oldResults,newResults,observer,options);};_LocalCollection._diffObjects=function(left,right,callbacks){return DiffSequence.diffObjects(left,right,callbacks);};_LocalCollection._IdMap=function(){var self=this;IdMap.call(self,MongoID.idStringify,MongoID.idParse);};Meteor._inherits(_LocalCollection._IdMap,IdMap);// XXX maybe move these into another ObserveHelpers package or something
// _CachingChangeObserver is an object which receives observeChanges callbacks
// and keeps a cache of the current cursor state up to date in self.docs. Users
// of this class should read the docs field but not modify it. You should pass
// the "applyChange" field as the callbacks to the underlying observeChanges
// call. Optionally, you can specify your own observeChanges callbacks which are
// invoked immediately before the docs field is updated; this object is made
// available as `this` to those callbacks.
_LocalCollection._CachingChangeObserver=function(options){var self=this;options=options||{};var orderedFromCallbacks=options.callbacks&&_LocalCollection._observeChangesCallbacksAreOrdered(options.callbacks);if(_.has(options,'ordered')){self.ordered=options.ordered;if(options.callbacks&&options.ordered!==orderedFromCallbacks)throw Error("ordered option doesn't match callbacks");}else if(options.callbacks){self.ordered=orderedFromCallbacks;}else{throw Error("must provide ordered or callbacks");}var callbacks=options.callbacks||{};if(self.ordered){self.docs=new OrderedDict(MongoID.idStringify);self.applyChange={addedBefore:function addedBefore(id,fields,before){var doc=EJSON.clone(fields);doc._id=id;callbacks.addedBefore&&callbacks.addedBefore.call(self,id,fields,before);// This line triggers if we provide added with movedBefore.
callbacks.added&&callbacks.added.call(self,id,fields);// XXX could `before` be a falsy ID?  Technically
// idStringify seems to allow for them -- though
// OrderedDict won't call stringify on a falsy arg.
self.docs.putBefore(id,doc,before||null);},movedBefore:function movedBefore(id,before){var doc=self.docs.get(id);callbacks.movedBefore&&callbacks.movedBefore.call(self,id,before);self.docs.moveBefore(id,before||null);}};}else{self.docs=new _LocalCollection._IdMap();self.applyChange={added:function added(id,fields){var doc=EJSON.clone(fields);callbacks.added&&callbacks.added.call(self,id,fields);doc._id=id;self.docs.set(id,doc);}};}// The methods in _IdMap and OrderedDict used by these callbacks are
// identical.
self.applyChange.changed=function(id,fields){var doc=self.docs.get(id);if(!doc)throw new Error("Unknown id for changed: "+id);callbacks.changed&&callbacks.changed.call(self,id,EJSON.clone(fields));DiffSequence.applyChanges(doc,fields);};self.applyChange.removed=function(id){callbacks.removed&&callbacks.removed.call(self,id);self.docs.remove(id);};};_LocalCollection._observeFromObserveChanges=function(cursor,observeCallbacks){var transform=cursor.getTransform()||function(doc){return doc;};var suppressed=!!observeCallbacks._suppress_initial;var observeChangesCallbacks;if(_LocalCollection._observeCallbacksAreOrdered(observeCallbacks)){// The "_no_indices" option sets all index arguments to -1 and skips the
// linear scans required to generate them.  This lets observers that don't
// need absolute indices benefit from the other features of this API --
// relative order, transforms, and applyChanges -- without the speed hit.
var indices=!observeCallbacks._no_indices;observeChangesCallbacks={addedBefore:function addedBefore(id,fields,before){var self=this;if(suppressed||!(observeCallbacks.addedAt||observeCallbacks.added))return;var doc=transform(_.extend(fields,{_id:id}));if(observeCallbacks.addedAt){var index=indices?before?self.docs.indexOf(before):self.docs.size():-1;observeCallbacks.addedAt(doc,index,before);}else{observeCallbacks.added(doc);}},changed:function changed(id,fields){var self=this;if(!(observeCallbacks.changedAt||observeCallbacks.changed))return;var doc=EJSON.clone(self.docs.get(id));if(!doc)throw new Error("Unknown id for changed: "+id);var oldDoc=transform(EJSON.clone(doc));DiffSequence.applyChanges(doc,fields);doc=transform(doc);if(observeCallbacks.changedAt){var index=indices?self.docs.indexOf(id):-1;observeCallbacks.changedAt(doc,oldDoc,index);}else{observeCallbacks.changed(doc,oldDoc);}},movedBefore:function movedBefore(id,before){var self=this;if(!observeCallbacks.movedTo)return;var from=indices?self.docs.indexOf(id):-1;var to=indices?before?self.docs.indexOf(before):self.docs.size():-1;// When not moving backwards, adjust for the fact that removing the
// document slides everything back one slot.
if(to>from)--to;observeCallbacks.movedTo(transform(EJSON.clone(self.docs.get(id))),from,to,before||null);},removed:function removed(id){var self=this;if(!(observeCallbacks.removedAt||observeCallbacks.removed))return;// technically maybe there should be an EJSON.clone here, but it's about
// to be removed from self.docs!
var doc=transform(self.docs.get(id));if(observeCallbacks.removedAt){var index=indices?self.docs.indexOf(id):-1;observeCallbacks.removedAt(doc,index);}else{observeCallbacks.removed(doc);}}};}else{observeChangesCallbacks={added:function added(id,fields){if(!suppressed&&observeCallbacks.added){var doc=_.extend(fields,{_id:id});observeCallbacks.added(transform(doc));}},changed:function changed(id,fields){var self=this;if(observeCallbacks.changed){var oldDoc=self.docs.get(id);var doc=EJSON.clone(oldDoc);DiffSequence.applyChanges(doc,fields);observeCallbacks.changed(transform(doc),transform(EJSON.clone(oldDoc)));}},removed:function removed(id){var self=this;if(observeCallbacks.removed){observeCallbacks.removed(transform(self.docs.get(id)));}}};}var changeObserver=new _LocalCollection._CachingChangeObserver({callbacks:observeChangesCallbacks});var handle=cursor.observeChanges(changeObserver.applyChange);suppressed=false;return handle;};// Is this selector just shorthand for lookup by _id?
_LocalCollection._selectorIsId=function(selector){return typeof selector==="string"||typeof selector==="number"||selector instanceof MongoID.ObjectID;};// Is the selector just lookup by _id (shorthand or not)?
_LocalCollection._selectorIsIdPerhapsAsObject=function(selector){return _LocalCollection._selectorIsId(selector)||selector&&(typeof selector==="undefined"?"undefined":_typeof(selector))==="object"&&selector._id&&_LocalCollection._selectorIsId(selector._id)&&_.size(selector)===1;};// If this is a selector which explicitly constrains the match by ID to a finite
// number of documents, returns a list of their IDs.  Otherwise returns
// null. Note that the selector may have other restrictions so it may not even
// match those document!  We care about $in and $and since those are generated
// access-controlled update and remove.
_LocalCollection._idsMatchedBySelector=function(selector){// Is the selector just an ID?
if(_LocalCollection._selectorIsId(selector))return[selector];if(!selector)return null;// Do we have an _id clause?
if(_.has(selector,'_id')){// Is the _id clause just an ID?
if(_LocalCollection._selectorIsId(selector._id))return[selector._id];// Is the _id clause {_id: {$in: ["x", "y", "z"]}}?
if(selector._id&&selector._id.$in&&_.isArray(selector._id.$in)&&!_.isEmpty(selector._id.$in)&&_.all(selector._id.$in,_LocalCollection._selectorIsId)){return selector._id.$in;}return null;}// If this is a top-level $and, and any of the clauses constrain their
// documents, then the whole selector is constrained by any one clause's
// constraint. (Well, by their intersection, but that seems unlikely.)
if(selector.$and&&_.isArray(selector.$and)){for(var i=0;i<selector.$and.length;++i){var subIds=_LocalCollection._idsMatchedBySelector(selector.$and[i]);if(subIds)return subIds;}}return null;};Meteor.Minimongo=Minimongo;Meteor.MinimongoTest=MinimongoTest;Meteor.LocalCollection=_LocalCollection;};},{}],19:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var EJSON=Meteor.EJSON;var Random=Meteor.Random;var MongoID;MongoID={};MongoID._looksLikeObjectID=function(str){return str.length===24&&str.match(/^[0-9a-f]*$/);};MongoID.ObjectID=function(hexString){//random-based impl of Mongo ObjectID
var self=this;if(hexString){hexString=hexString.toLowerCase();if(!MongoID._looksLikeObjectID(hexString)){throw new Error("Invalid hexadecimal string for creating an ObjectID");}// meant to work with _.isEqual(), which relies on structural equality
self._str=hexString;}else{self._str=Random.hexString(24);}};MongoID.ObjectID.prototype.toString=function(){var self=this;return"ObjectID(\""+self._str+"\")";};MongoID.ObjectID.prototype.equals=function(other){var self=this;return other instanceof MongoID.ObjectID&&self.valueOf()===other.valueOf();};MongoID.ObjectID.prototype.clone=function(){var self=this;return new MongoID.ObjectID(self._str);};MongoID.ObjectID.prototype.typeName=function(){return"oid";};MongoID.ObjectID.prototype.getTimestamp=function(){var self=this;return parseInt(self._str.substr(0,8),16);};MongoID.ObjectID.prototype.valueOf=MongoID.ObjectID.prototype.toJSONValue=MongoID.ObjectID.prototype.toHexString=function(){return this._str;};EJSON.addType("oid",function(str){return new MongoID.ObjectID(str);});MongoID.idStringify=function(id){if(id instanceof MongoID.ObjectID){return id.valueOf();}else if(typeof id==='string'){if(id===""){return id;}else if(id.substr(0,1)==="-"||// escape previously dashed strings
id.substr(0,1)==="~"||// escape escaped numbers, true, false
MongoID._looksLikeObjectID(id)||// escape object-id-form strings
id.substr(0,1)==='{'){// escape object-form strings, for maybe implementing later
return"-"+id;}else{return id;// other strings go through unchanged.
}}else if(id===undefined){return'-';}else if((typeof id==="undefined"?"undefined":_typeof(id))==='object'&&id!==null){throw new Error("Meteor does not currently support objects other than ObjectID as ids");}else{// Numbers, true, false, null
return"~"+JSON.stringify(id);}};MongoID.idParse=function(id){if(id===""){return id;}else if(id==='-'){return undefined;}else if(id.substr(0,1)==='-'){return id.substr(1);}else if(id.substr(0,1)==='~'){return JSON.parse(id.substr(1));}else if(MongoID._looksLikeObjectID(id)){return new MongoID.ObjectID(id);}else{return id;}};Meteor.MongoID=MongoID;};},{}],20:[function(require,module,exports){module.exports=function(Meteor){var seqChangedToEmpty,seqChangedToArray,seqChangedToCursor;var _=Meteor.underscore;var Random=Meteor.Random;var Tracker=Meteor.Tracker;var DiffSequence=Meteor.DiffSequence;var LocalCollection=Meteor.LocalCollection;var OrderedDict=Meteor.OrderedDict;var ReactiveVar=Meteor.ReactiveVar;var EJSON=Meteor.EJSON;var MongoID=Meteor.MongoID;var ObserveSequence;var Package={minimongo:{LocalCollection:LocalCollection},"diff-sequence":{DiffSequence:DiffSequence}};// ordered: bool.
// old_results and new_results: collections of documents.
//    if ordered, they are arrays.
//    if unordered, they are IdMaps
LocalCollection._diffQueryChanges=function(ordered,oldResults,newResults,observer,options){return DiffSequence.diffQueryChanges(ordered,oldResults,newResults,observer,options);};LocalCollection._diffQueryUnorderedChanges=function(oldResults,newResults,observer,options){return DiffSequence.diffQueryUnorderedChanges(oldResults,newResults,observer,options);};LocalCollection._diffQueryOrderedChanges=function(oldResults,newResults,observer,options){return DiffSequence.diffQueryOrderedChanges(oldResults,newResults,observer,options);};LocalCollection._diffObjects=function(left,right,callbacks){return DiffSequence.diffObjects(left,right,callbacks);};// Is this selector just shorthand for lookup by _id?
LocalCollection._selectorIsId=function(selector){return typeof selector==="string"||typeof selector==="number"||selector instanceof MongoID.ObjectID;};// Is the selector just lookup by _id (shorthand or not)?
LocalCollection._selectorIsIdPerhapsAsObject=function(selector){return LocalCollection._selectorIsId(selector)||selector&&(typeof selector==="undefined"?"undefined":_typeof(selector))==="object"&&selector._id&&LocalCollection._selectorIsId(selector._id)&&_.size(selector)===1;};// If this is a selector which explicitly constrains the match by ID to a finite
// number of documents, returns a list of their IDs.  Otherwise returns
// null. Note that the selector may have other restrictions so it may not even
// match those document!  We care about $in and $and since those are generated
// access-controlled update and remove.
LocalCollection._idsMatchedBySelector=function(selector){// Is the selector just an ID?
if(LocalCollection._selectorIsId(selector))return[selector];if(!selector)return null;// Do we have an _id clause?
if(_.has(selector,'_id')){// Is the _id clause just an ID?
if(LocalCollection._selectorIsId(selector._id))return[selector._id];// Is the _id clause {_id: {$in: ["x", "y", "z"]}}?
if(selector._id&&selector._id.$in&&_.isArray(selector._id.$in)&&!_.isEmpty(selector._id.$in)&&_.all(selector._id.$in,LocalCollection._selectorIsId)){return selector._id.$in;}return null;}// If this is a top-level $and, and any of the clauses constrain their
// documents, then the whole selector is constrained by any one clause's
// constraint. (Well, by their intersection, but that seems unlikely.)
if(selector.$and&&_.isArray(selector.$and)){for(var i=0;i<selector.$and.length;++i){var subIds=LocalCollection._idsMatchedBySelector(selector.$and[i]);if(subIds)return subIds;}}return null;};var warn=function warn(){if(ObserveSequence._suppressWarnings){ObserveSequence._suppressWarnings--;}else{if(typeof console!=='undefined'&&console.warn)console.warn.apply(console,arguments);ObserveSequence._loggedWarnings++;}};var idStringify=MongoID.idStringify;var idParse=MongoID.idParse;ObserveSequence={_suppressWarnings:0,_loggedWarnings:0,// A mechanism similar to cursor.observe which receives a reactive
// function returning a sequence type and firing appropriate callbacks
// when the value changes.
//
// @param sequenceFunc {Function} a reactive function returning a
//     sequence type. The currently supported sequence types are:
//     Array, Cursor, and null.
//
// @param callbacks {Object} similar to a specific subset of
//     callbacks passed to `cursor.observe`
//     (http://docs.meteor.com/#observe), with minor variations to
//     support the fact that not all sequences contain objects with
//     _id fields.  Specifically:
//
//     * addedAt(id, item, atIndex, beforeId)
//     * changedAt(id, newItem, oldItem, atIndex)
//     * removedAt(id, oldItem, atIndex)
//     * movedTo(id, item, fromIndex, toIndex, beforeId)
//
// @returns {Object(stop: Function)} call 'stop' on the return value
//     to stop observing this sequence function.
//
// We don't make any assumptions about our ability to compare sequence
// elements (ie, we don't assume EJSON.equals works; maybe there is extra
// state/random methods on the objects) so unlike cursor.observe, we may
// sometimes call changedAt() when nothing actually changed.
// XXX consider if we *can* make the stronger assumption and avoid
//     no-op changedAt calls (in some cases?)
//
// XXX currently only supports the callbacks used by our
// implementation of {{#each}}, but this can be expanded.
//
// XXX #each doesn't use the indices (though we'll eventually need
// a way to get them when we support `@index`), but calling
// `cursor.observe` causes the index to be calculated on every
// callback using a linear scan (unless you turn it off by passing
// `_no_indices`).  Any way to avoid calculating indices on a pure
// cursor observe like we used to?
observe:function observe(sequenceFunc,callbacks){var lastSeq=null;var activeObserveHandle=null;// 'lastSeqArray' contains the previous value of the sequence
// we're observing. It is an array of objects with '_id' and
// 'item' fields.  'item' is the element in the array, or the
// document in the cursor.
//
// '_id' is whichever of the following is relevant, unless it has
// already appeared -- in which case it's randomly generated.
//
// * if 'item' is an object:
//   * an '_id' field, if present
//   * otherwise, the index in the array
//
// * if 'item' is a number or string, use that value
//
// XXX this can be generalized by allowing {{#each}} to accept a
// general 'key' argument which could be a function, a dotted
// field name, or the special @index value.
var lastSeqArray=[];// elements are objects of form {_id, item}
var computation=Tracker.autorun(function(){var seq=sequenceFunc();Tracker.nonreactive(function(){var seqArray;// same structure as `lastSeqArray` above.
if(activeObserveHandle){// If we were previously observing a cursor, replace lastSeqArray with
// more up-to-date information.  Then stop the old observe.
lastSeqArray=_.map(lastSeq.fetch(),function(doc){return{_id:doc._id,item:doc};});activeObserveHandle.stop();activeObserveHandle=null;}if(!seq){seqArray=seqChangedToEmpty(lastSeqArray,callbacks);}else if(seq instanceof Array){seqArray=seqChangedToArray(lastSeqArray,seq,callbacks);}else if(isStoreCursor(seq)){var result/* [seqArray, activeObserveHandle] */=seqChangedToCursor(lastSeqArray,seq,callbacks);seqArray=result[0];activeObserveHandle=result[1];}else{throw badSequenceError();}diffArray(lastSeqArray,seqArray,callbacks);lastSeq=seq;lastSeqArray=seqArray;});});return{stop:function stop(){computation.stop();if(activeObserveHandle)activeObserveHandle.stop();}};},// Fetch the items of `seq` into an array, where `seq` is of one of the
// sequence types accepted by `observe`.  If `seq` is a cursor, a
// dependency is established.
fetch:function fetch(seq){if(!seq){return[];}else if(seq instanceof Array){return seq;}else if(isStoreCursor(seq)){return seq.fetch();}else{throw badSequenceError();}}};var badSequenceError=function badSequenceError(){return new Error("{{#each}} currently only accepts "+"arrays, cursors or falsey values.");};var isStoreCursor=function isStoreCursor(cursor){return cursor&&_.isObject(cursor)&&_.isFunction(cursor.observe)&&_.isFunction(cursor.fetch);};// Calculates the differences between `lastSeqArray` and
// `seqArray` and calls appropriate functions from `callbacks`.
// Reuses Minimongo's diff algorithm implementation.
var diffArray=function diffArray(lastSeqArray,seqArray,callbacks){var diffFn=Package['diff-sequence'].DiffSequence.diffQueryOrderedChanges;var oldIdObjects=[];var newIdObjects=[];var posOld={};// maps from idStringify'd ids
var posNew={};// ditto
var posCur={};var lengthCur=lastSeqArray.length;_.each(seqArray,function(doc,i){newIdObjects.push({_id:doc._id});posNew[idStringify(doc._id)]=i;});_.each(lastSeqArray,function(doc,i){oldIdObjects.push({_id:doc._id});posOld[idStringify(doc._id)]=i;posCur[idStringify(doc._id)]=i;});// Arrays can contain arbitrary objects. We don't diff the
// objects. Instead we always fire 'changedAt' callback on every
// object. The consumer of `observe-sequence` should deal with
// it appropriately.
diffFn(oldIdObjects,newIdObjects,{addedBefore:function addedBefore(id,doc,before){var position=before?posCur[idStringify(before)]:lengthCur;if(before){// If not adding at the end, we need to update indexes.
// XXX this can still be improved greatly!
_.each(posCur,function(pos,id){if(pos>=position)posCur[id]++;});}lengthCur++;posCur[idStringify(id)]=position;callbacks.addedAt(id,seqArray[posNew[idStringify(id)]].item,position,before);},movedBefore:function movedBefore(id,before){if(id===before)return;var oldPosition=posCur[idStringify(id)];var newPosition=before?posCur[idStringify(before)]:lengthCur;// Moving the item forward. The new element is losing one position as it
// was removed from the old position before being inserted at the new
// position.
// Ex.:   0  *1*  2   3   4
//        0   2   3  *1*  4
// The original issued callback is "1" before "4".
// The position of "1" is 1, the position of "4" is 4.
// The generated move is (1) -> (3)
if(newPosition>oldPosition){newPosition--;}// Fix up the positions of elements between the old and the new positions
// of the moved element.
//
// There are two cases:
//   1. The element is moved forward. Then all the positions in between
//   are moved back.
//   2. The element is moved back. Then the positions in between *and* the
//   element that is currently standing on the moved element's future
//   position are moved forward.
_.each(posCur,function(elCurPosition,id){if(oldPosition<elCurPosition&&elCurPosition<newPosition)posCur[id]--;else if(newPosition<=elCurPosition&&elCurPosition<oldPosition)posCur[id]++;});// Finally, update the position of the moved element.
posCur[idStringify(id)]=newPosition;callbacks.movedTo(id,seqArray[posNew[idStringify(id)]].item,oldPosition,newPosition,before);},removed:function removed(id){var prevPosition=posCur[idStringify(id)];_.each(posCur,function(pos,id){if(pos>=prevPosition)posCur[id]--;});delete posCur[idStringify(id)];lengthCur--;callbacks.removedAt(id,lastSeqArray[posOld[idStringify(id)]].item,prevPosition);}});_.each(posNew,function(pos,idString){var id=idParse(idString);if(_.has(posOld,idString)){// specifically for primitive types, compare equality before
// firing the 'changedAt' callback. otherwise, always fire it
// because doing a deep EJSON comparison is not guaranteed to
// work (an array can contain arbitrary objects, and 'transform'
// can be used on cursors). also, deep diffing is not
// necessarily the most efficient (if only a specific subfield
// of the object is later accessed).
var newItem=seqArray[pos].item;var oldItem=lastSeqArray[posOld[idString]].item;if((typeof newItem==="undefined"?"undefined":_typeof(newItem))==='object'||newItem!==oldItem)callbacks.changedAt(id,newItem,oldItem,pos);}});};seqChangedToEmpty=function seqChangedToEmpty(lastSeqArray,callbacks){return[];};seqChangedToArray=function seqChangedToArray(lastSeqArray,array,callbacks){var idsUsed={};var seqArray=_.map(array,function(item,index){var id;if(typeof item==='string'){// ensure not empty, since other layers (eg DomRange) assume this as well
id="-"+item;}else if(typeof item==='number'||typeof item==='boolean'||item===undefined){id=item;}else if((typeof item==="undefined"?"undefined":_typeof(item))==='object'){id=item&&'_id'in item?item._id:index;}else{throw new Error("{{#each}} doesn't support arrays with "+"elements of type "+(typeof item==="undefined"?"undefined":_typeof(item)));}var idString=idStringify(id);if(idsUsed[idString]){if((typeof item==="undefined"?"undefined":_typeof(item))==='object'&&'_id'in item)warn("duplicate id "+id+" in",array);id=Random.id();}else{idsUsed[idString]=true;}return{_id:id,item:item};});return seqArray;};seqChangedToCursor=function seqChangedToCursor(lastSeqArray,cursor,callbacks){var initial=true;// are we observing initial data from cursor?
var seqArray=[];var observeHandle=cursor.observe({addedAt:function addedAt(document,atIndex,before){if(initial){// keep track of initial data so that we can diff once
// we exit `observe`.
if(before!==null)throw new Error("Expected initial data from observe in order");seqArray.push({_id:document._id,item:document});}else{callbacks.addedAt(document._id,document,atIndex,before);}},changedAt:function changedAt(newDocument,oldDocument,atIndex){callbacks.changedAt(newDocument._id,newDocument,oldDocument,atIndex);},removedAt:function removedAt(oldDocument,atIndex){callbacks.removedAt(oldDocument._id,oldDocument,atIndex);},movedTo:function movedTo(document,fromIndex,toIndex,before){callbacks.movedTo(document._id,document,fromIndex,toIndex,before);}});initial=false;return[seqArray,observeHandle];};Meteor.LocalCollection=LocalCollection;Meteor.ObserveSequence=ObserveSequence;};},{}],21:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var OrderedDict;// This file defines an ordered dictionary abstraction that is useful for
// maintaining a dataset backed by observeChanges.  It supports ordering items
// by specifying the item they now come before.
// The implementation is a dictionary that contains nodes of a doubly-linked
// list as its values.
// constructs a new element struct
// next and prev are whole elements, not keys.
var element=function element(key,value,next,prev){return{key:key,value:value,next:next,prev:prev};};OrderedDict=function OrderedDict()/* ... */{var self=this;self._dict={};self._first=null;self._last=null;self._size=0;var args=_.toArray(arguments);self._stringify=function(x){return x;};if(typeof args[0]==='function')self._stringify=args.shift();_.each(args,function(kv){self.putBefore(kv[0],kv[1],null);});};_.extend(OrderedDict.prototype,{// the "prefix keys with a space" thing comes from here
// https://github.com/documentcloud/underscore/issues/376#issuecomment-2815649
_k:function _k(key){return" "+this._stringify(key);},empty:function empty(){var self=this;return!self._first;},size:function size(){var self=this;return self._size;},_linkEltIn:function _linkEltIn(elt){var self=this;if(!elt.next){elt.prev=self._last;if(self._last)self._last.next=elt;self._last=elt;}else{elt.prev=elt.next.prev;elt.next.prev=elt;if(elt.prev)elt.prev.next=elt;}if(self._first===null||self._first===elt.next)self._first=elt;},_linkEltOut:function _linkEltOut(elt){var self=this;if(elt.next)elt.next.prev=elt.prev;if(elt.prev)elt.prev.next=elt.next;if(elt===self._last)self._last=elt.prev;if(elt===self._first)self._first=elt.next;},putBefore:function putBefore(key,item,before){var self=this;if(self._dict[self._k(key)])throw new Error("Item "+key+" already present in OrderedDict");var elt=before?element(key,item,self._dict[self._k(before)]):element(key,item,null);if(elt.next===undefined)throw new Error("could not find item to put this one before");self._linkEltIn(elt);self._dict[self._k(key)]=elt;self._size++;},append:function append(key,item){var self=this;self.putBefore(key,item,null);},remove:function remove(key){var self=this;var elt=self._dict[self._k(key)];if(elt===undefined)throw new Error("Item "+key+" not present in OrderedDict");self._linkEltOut(elt);self._size--;delete self._dict[self._k(key)];return elt.value;},get:function get(key){var self=this;if(self.has(key))return self._dict[self._k(key)].value;return undefined;},has:function has(key){var self=this;return _.has(self._dict,self._k(key));},// Iterate through the items in this dictionary in order, calling
// iter(value, key, index) on each one.
// Stops whenever iter returns OrderedDict.BREAK, or after the last element.
forEach:function forEach(iter){var self=this;var i=0;var elt=self._first;while(elt!==null){var b=iter(elt.value,elt.key,i);if(b===OrderedDict.BREAK)return;elt=elt.next;i++;}},first:function first(){var self=this;if(self.empty())return undefined;return self._first.key;},firstValue:function firstValue(){var self=this;if(self.empty())return undefined;return self._first.value;},last:function last(){var self=this;if(self.empty())return undefined;return self._last.key;},lastValue:function lastValue(){var self=this;if(self.empty())return undefined;return self._last.value;},prev:function prev(key){var self=this;if(self.has(key)){var elt=self._dict[self._k(key)];if(elt.prev)return elt.prev.key;}return null;},next:function next(key){var self=this;if(self.has(key)){var elt=self._dict[self._k(key)];if(elt.next)return elt.next.key;}return null;},moveBefore:function moveBefore(key,before){var self=this;var elt=self._dict[self._k(key)];var eltBefore=before?self._dict[self._k(before)]:null;if(elt===undefined)throw new Error("Item to move is not present");if(eltBefore===undefined){throw new Error("Could not find element to move this one before");}if(eltBefore===elt.next)// no moving necessary
return;// remove from its old place
self._linkEltOut(elt);// patch into its new place
elt.next=eltBefore;self._linkEltIn(elt);},// Linear, sadly.
indexOf:function indexOf(key){var self=this;var ret=null;self.forEach(function(v,k,i){if(self._k(k)===self._k(key)){ret=i;return OrderedDict.BREAK;}return undefined;});return ret;},_checkRep:function _checkRep(){var self=this;_.each(self._dict,function(k,v){if(v.next===v)throw new Error("Next is a loop");if(v.prev===v)throw new Error("Prev is a loop");});}});OrderedDict.BREAK={"break":true};Meteor.OrderedDict=OrderedDict;};},{}],22:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var Random;// We use cryptographically strong PRNGs (crypto.getRandomBytes() on the server,
// window.crypto.getRandomValues() in the browser) when available. If these
// PRNGs fail, we fall back to the Alea PRNG, which is not cryptographically
// strong, and we seed it with various sources such as the date, Math.random,
// and window size on the client.  When using crypto.getRandomValues(), our
// primitive is hexString(), from which we construct fraction(). When using
// window.crypto.getRandomValues() or alea, the primitive is fraction and we use
// that to construct hex string.
if(Meteor.isServer)var nodeCrypto=Npm.require('crypto');// see http://baagoe.org/en/wiki/Better_random_numbers_for_javascript
// for a full discussion and Alea implementation.
var Alea=function Alea(){function Mash(){var n=0xefc8249d;var mash=function mash(data){data=data.toString();for(var i=0;i<data.length;i++){n+=data.charCodeAt(i);var h=0.02519603282416938*n;n=h>>>0;h-=n;h*=n;n=h>>>0;h-=n;n+=h*0x100000000;// 2^32
}return(n>>>0)*2.3283064365386963e-10;// 2^-32
};mash.version='Mash 0.9';return mash;}return function(args){var s0=0;var s1=0;var s2=0;var c=1;if(args.length==0){args=[+new Date()];}var mash=Mash();s0=mash(' ');s1=mash(' ');s2=mash(' ');for(var i=0;i<args.length;i++){s0-=mash(args[i]);if(s0<0){s0+=1;}s1-=mash(args[i]);if(s1<0){s1+=1;}s2-=mash(args[i]);if(s2<0){s2+=1;}}mash=null;var random=function random(){var t=2091639*s0+c*2.3283064365386963e-10;// 2^-32
s0=s1;s1=s2;return s2=t-(c=t|0);};random.uint32=function(){return random()*0x100000000;// 2^32
};random.fract53=function(){return random()+(random()*0x200000|0)*1.1102230246251565e-16;// 2^-53
};random.version='Alea 0.9';random.args=args;return random;}(Array.prototype.slice.call(arguments));};var UNMISTAKABLE_CHARS="23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz";var BASE64_CHARS="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789-_";// `type` is one of `RandomGenerator.Type` as defined below.
//
// options:
// - seeds: (required, only for RandomGenerator.Type.ALEA) an array
//   whose items will be `toString`ed and used as the seed to the Alea
//   algorithm
var RandomGenerator=function RandomGenerator(type,options){var self=this;self.type=type;if(!RandomGenerator.Type[type]){throw new Error("Unknown random generator type: "+type);}if(type===RandomGenerator.Type.ALEA){if(!options.seeds){throw new Error("No seeds were provided for Alea PRNG");}self.alea=Alea.apply(null,options.seeds);}};// Types of PRNGs supported by the `RandomGenerator` class
RandomGenerator.Type={// Use Node's built-in `crypto.getRandomBytes` (cryptographically
// secure but not seedable, runs only on the server). Reverts to
// `crypto.getPseudoRandomBytes` in the extremely uncommon case that
// there isn't enough entropy yet
NODE_CRYPTO:"NODE_CRYPTO",// Use non-IE browser's built-in `window.crypto.getRandomValues`
// (cryptographically secure but not seedable, runs only in the
// browser).
BROWSER_CRYPTO:"BROWSER_CRYPTO",// Use the *fast*, seedaable and not cryptographically secure
// Alea algorithm
ALEA:"ALEA"};RandomGenerator.prototype.fraction=function(){var self=this;if(self.type===RandomGenerator.Type.ALEA){return self.alea();}else if(self.type===RandomGenerator.Type.NODE_CRYPTO){var numerator=parseInt(self.hexString(8),16);return numerator*2.3283064365386963e-10;// 2^-32
}else if(self.type===RandomGenerator.Type.BROWSER_CRYPTO){var array=new Uint32Array(1);window.crypto.getRandomValues(array);return array[0]*2.3283064365386963e-10;// 2^-32
}else{throw new Error('Unknown random generator type: '+self.type);}};RandomGenerator.prototype.hexString=function(digits){var self=this;if(self.type===RandomGenerator.Type.NODE_CRYPTO){var numBytes=Math.ceil(digits/2);var bytes;// Try to get cryptographically strong randomness. Fall back to
// non-cryptographically strong if not available.
try{bytes=nodeCrypto.randomBytes(numBytes);}catch(e){// XXX should re-throw any error except insufficient entropy
bytes=nodeCrypto.pseudoRandomBytes(numBytes);}var result=bytes.toString("hex");// If the number of digits is odd, we'll have generated an extra 4 bits
// of randomness, so we need to trim the last digit.
return result.substring(0,digits);}else{return this._randomString(digits,"0123456789abcdef");}};RandomGenerator.prototype._randomString=function(charsCount,alphabet){var self=this;var digits=[];for(var i=0;i<charsCount;i++){digits[i]=self.choice(alphabet);}return digits.join("");};RandomGenerator.prototype.id=function(charsCount){var self=this;// 17 characters is around 96 bits of entropy, which is the amount of
// state in the Alea PRNG.
if(charsCount===undefined)charsCount=17;return self._randomString(charsCount,UNMISTAKABLE_CHARS);};RandomGenerator.prototype.secret=function(charsCount){var self=this;// Default to 256 bits of entropy, or 43 characters at 6 bits per
// character.
if(charsCount===undefined)charsCount=43;return self._randomString(charsCount,BASE64_CHARS);};RandomGenerator.prototype.choice=function(arrayOrString){var index=Math.floor(this.fraction()*arrayOrString.length);if(typeof arrayOrString==="string")return arrayOrString.substr(index,1);else return arrayOrString[index];};// instantiate RNG.  Heuristically collect entropy from various sources when a
// cryptographic PRNG isn't available.
// client sources
var height=typeof window!=='undefined'&&window.innerHeight||typeof document!=='undefined'&&document.documentElement&&document.documentElement.clientHeight||typeof document!=='undefined'&&document.body&&document.body.clientHeight||1;var width=typeof window!=='undefined'&&window.innerWidth||typeof document!=='undefined'&&document.documentElement&&document.documentElement.clientWidth||typeof document!=='undefined'&&document.body&&document.body.clientWidth||1;var agent=typeof navigator!=='undefined'&&navigator.userAgent||"";function createAleaGeneratorWithGeneratedSeed(){return new RandomGenerator(RandomGenerator.Type.ALEA,{seeds:[new Date(),height,width,agent,Math.random()]});};if(Meteor.isServer){Random=new RandomGenerator(RandomGenerator.Type.NODE_CRYPTO);}else{if(typeof window!=="undefined"&&window.crypto&&window.crypto.getRandomValues){Random=new RandomGenerator(RandomGenerator.Type.BROWSER_CRYPTO);}else{// On IE 10 and below, there's no browser crypto API
// available. Fall back to Alea
//
// XXX looks like at the moment, we use Alea in IE 11 as well,
// which has `window.msCrypto` instead of `window.crypto`.
Random=createAleaGeneratorWithGeneratedSeed();}}// Create a non-cryptographically secure PRNG with a given seed (using
// the Alea algorithm)
/*Random.createWithSeeds = function (...seeds) {
  if (seeds.length === 0) {
    throw new Error("No seeds were provided");
  }
  return new RandomGenerator(RandomGenerator.Type.ALEA, {seeds: seeds});
};
*/// Used like `Random`, but much faster and not cryptographically
// secure
Random.insecure=createAleaGeneratorWithGeneratedSeed();// Create a non-cryptographically secure PRNG with a given seed (using
// the Alea algorithm)
Random.createWithSeeds=function(){var seeds=[];for(var i=0;i<arguments.length;++i){seeds.push(arguments[i]);}if(seeds.length===0){throw new Error("No seeds were provided");}return new RandomGenerator(RandomGenerator.Type.ALEA,{seeds:seeds});};Meteor.Random=Random;};},{}],23:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var Tracker=Meteor.Tracker;var _ReactiveObjectMap;_ReactiveObjectMap=function ReactiveObjectMap(obj){if(!(this instanceof _ReactiveObjectMap))// called without `new`
return new _ReactiveObjectMap();this._map=_.assign({},obj);this._dep=new Tracker.Dependency();};_ReactiveObjectMap.prototype.assign=function(collection,iteratee){this._map=_.indexBy(collection,iteratee);this._dep.changed();};_ReactiveObjectMap.prototype.get=function(key){if(Tracker.active)this._dep.depend();if(key)return this._map[key];else return this._map;};_ReactiveObjectMap.prototype.set=function(key,value){var old=this._map[key];this._map[key]=value;if(old!==value)this._dep.changed();};_ReactiveObjectMap.prototype.has=function(key){if(Tracker.active)this._dep.depend();return this._map.hasOwnProperty(key);};_ReactiveObjectMap.prototype.clear=function(key,value){this._map={};this._dep.changed();};_ReactiveObjectMap.prototype.delete=function(key,value){if(delete this._map[key])this._dep.changed();};_ReactiveObjectMap.prototype.setAttribute=function(key,attr,value){var old=this._map[key][attr];this._map[key][attr]=value;if(old!==value)this._dep.changed();};_ReactiveObjectMap.prototype.getAttribute=function(key,attr){if(Tracker.active)this._dep.depend();return this._map[key][attr];};_ReactiveObjectMap.prototype.keys=function(){if(Tracker.active)this._dep.depend();return Object.keys(this._map);};_ReactiveObjectMap.prototype.values=function(){if(Tracker.active)this._dep.depend();return _.values(this._map);};_ReactiveObjectMap.prototype.filter=function(predicate){if(Tracker.active)this._dep.depend();return _.filter(this._map,predicate);};_ReactiveObjectMap.prototype.sortBy=function(iteratee){if(Tracker.active)this._dep.depend();return _.sortBy(this._map,iteratee);};_ReactiveObjectMap.prototype.map=function(iteratee){if(Tracker.active)this._dep.depend();return _.map(this._map,iteratee);};_ReactiveObjectMap.prototype.size=function(){if(Tracker.active)this._dep.depend();return Object.keys(this._map).length;};_ReactiveObjectMap.prototype.toString=function(){return'ReactiveObjectMap{'+this.get()+'}';};_ReactiveObjectMap.prototype._numListeners=function(){// Tests want to know.
// Accesses a private field of Tracker.Dependency.
var count=0;for(var id in this._dep._dependentsById){count++;}return count;};Meteor.ReactiveObjectMap=_ReactiveObjectMap;module.exports=_ReactiveObjectMap;};},{}],24:[function(require,module,exports){module.exports=function(Meteor){var Tracker=Meteor.Tracker;var _ReactiveVar;/*
 * ## [new] ReactiveVar(initialValue, [equalsFunc])
 *
 * A ReactiveVar holds a single value that can be get and set,
 * such that calling `set` will invalidate any Computations that
 * called `get`, according to the usual contract for reactive
 * data sources.
 *
 * A ReactiveVar is much like a Session variable -- compare `foo.get()`
 * to `Session.get("foo")` -- but it doesn't have a global name and isn't
 * automatically migrated across hot code pushes.  Also, while Session
 * variables can only hold JSON or EJSON, ReactiveVars can hold any value.
 *
 * An important property of ReactiveVars, which is sometimes the reason
 * to use one, is that setting the value to the same value as before has
 * no effect, meaning ReactiveVars can be used to absorb extra
 * invalidations that wouldn't serve a purpose.  However, by default,
 * ReactiveVars are extremely conservative about what changes they
 * absorb.  Calling `set` with an object argument will *always* trigger
 * invalidations, because even if the new value is `===` the old value,
 * the object may have been mutated.  You can change the default behavior
 * by passing a function of two arguments, `oldValue` and `newValue`,
 * to the constructor as `equalsFunc`.
 *
 * This class is extremely basic right now, but the idea is to evolve
 * it into the ReactiveVar of Geoff's Lickable Forms proposal.
 *//**
 * @class 
 * @instanceName reactiveVar
 * @summary Constructor for a ReactiveVar, which represents a single reactive variable.
 * @locus Client
 * @param {Any} initialValue The initial value to set.  `equalsFunc` is ignored when setting the initial value.
 * @param {Function} [equalsFunc] Optional.  A function of two arguments, called on the old value and the new value whenever the ReactiveVar is set.  If it returns true, no set is performed.  If omitted, the default `equalsFunc` returns true if its arguments are `===` and are of type number, boolean, string, undefined, or null.
 */_ReactiveVar=function ReactiveVar(initialValue,equalsFunc){if(!(this instanceof _ReactiveVar))// called without `new`
return new _ReactiveVar(initialValue,equalsFunc);this.curValue=initialValue;this.equalsFunc=equalsFunc;this.dep=new Tracker.Dependency();};_ReactiveVar._isEqual=function(oldValue,newValue){var a=oldValue,b=newValue;// Two values are "equal" here if they are `===` and are
// number, boolean, string, undefined, or null.
if(a!==b)return false;else return!a||typeof a==='number'||typeof a==='boolean'||typeof a==='string';};/**
 * @summary Returns the current value of the ReactiveVar, establishing a reactive dependency.
 * @locus Client
 */_ReactiveVar.prototype.get=function(){if(Tracker.active)this.dep.depend();return this.curValue;};/**
 * @summary Sets the current value of the ReactiveVar, invalidating the Computations that called `get` if `newValue` is different from the old value.
 * @locus Client
 * @param {Any} newValue
 */_ReactiveVar.prototype.set=function(newValue){var oldValue=this.curValue;if((this.equalsFunc||_ReactiveVar._isEqual)(oldValue,newValue))// value is same as last time
return;this.curValue=newValue;this.dep.changed();};_ReactiveVar.prototype.toString=function(){return'ReactiveVar{'+this.get()+'}';};_ReactiveVar.prototype._numListeners=function(){// Tests want to know.
// Accesses a private field of Tracker.Dependency.
var count=0;for(var id in this.dep._dependentsById){count++;}return count;};Meteor.ReactiveVar=_ReactiveVar;};},{}],25:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var HTML=Meteor.HTML;var HTMLTools=Meteor.HTMLTools;var BlazeTools=Meteor.BlazeTools;var Package={};var SpacebarsCompiler;var TemplateTag;var ReactComponentSiblingForbidder;SpacebarsCompiler={};// A TemplateTag is the result of parsing a single `{{...}}` tag.
//
// The `.type` of a TemplateTag is one of:
//
// - `"DOUBLE"` - `{{foo}}`
// - `"TRIPLE"` - `{{{foo}}}`
// - `"EXPR"` - `(foo)`
// - `"COMMENT"` - `{{! foo}}`
// - `"BLOCKCOMMENT" - `{{!-- foo--}}`
// - `"INCLUSION"` - `{{> foo}}`
// - `"BLOCKOPEN"` - `{{#foo}}`
// - `"BLOCKCLOSE"` - `{{/foo}}`
// - `"ELSE"` - `{{else}}`
// - `"ESCAPE"` - `{{|`, `{{{|`, `{{{{|` and so on
//
// Besides `type`, the mandatory properties of a TemplateTag are:
//
// - `path` - An array of one or more strings.  The path of `{{foo.bar}}`
//   is `["foo", "bar"]`.  Applies to DOUBLE, TRIPLE, INCLUSION, BLOCKOPEN,
//   and BLOCKCLOSE.
//
// - `args` - An array of zero or more argument specs.  An argument spec
//   is a two or three element array, consisting of a type, value, and
//   optional keyword name.  For example, the `args` of `{{foo "bar" x=3}}`
//   are `[["STRING", "bar"], ["NUMBER", 3, "x"]]`.  Applies to DOUBLE,
//   TRIPLE, INCLUSION, and BLOCKOPEN.
//
// - `value` - A string of the comment's text. Applies to COMMENT and
//   BLOCKCOMMENT.
//
// These additional are typically set during parsing:
//
// - `position` - The HTMLTools.TEMPLATE_TAG_POSITION specifying at what sort
//   of site the TemplateTag was encountered (e.g. at element level or as
//   part of an attribute value). Its absence implies
//   TEMPLATE_TAG_POSITION.ELEMENT.
//
// - `content` and `elseContent` - When a BLOCKOPEN tag's contents are
//   parsed, they are put here.  `elseContent` will only be present if
//   an `{{else}}` was found.
var TEMPLATE_TAG_POSITION=HTMLTools.TEMPLATE_TAG_POSITION;TemplateTag=SpacebarsCompiler.TemplateTag=function(){HTMLTools.TemplateTag.apply(this,arguments);};TemplateTag.prototype=new HTMLTools.TemplateTag();TemplateTag.prototype.constructorName='SpacebarsCompiler.TemplateTag';var makeStacheTagStartRegex=function makeStacheTagStartRegex(r){return new RegExp(r.source+/(?![{>!#/])/.source,r.ignoreCase?'i':'');};// "starts" regexes are used to see what type of template
// tag the parser is looking at.  They must match a non-empty
// result, but not the interesting part of the tag.
var starts={ESCAPE:/^\{\{(?=\{*\|)/,ELSE:makeStacheTagStartRegex(/^\{\{\s*else(?=[\s}])/i),DOUBLE:makeStacheTagStartRegex(/^\{\{\s*(?!\s)/),TRIPLE:makeStacheTagStartRegex(/^\{\{\{\s*(?!\s)/),BLOCKCOMMENT:makeStacheTagStartRegex(/^\{\{\s*!--/),COMMENT:makeStacheTagStartRegex(/^\{\{\s*!/),INCLUSION:makeStacheTagStartRegex(/^\{\{\s*>\s*(?!\s)/),BLOCKOPEN:makeStacheTagStartRegex(/^\{\{\s*#\s*(?!\s)/),BLOCKCLOSE:makeStacheTagStartRegex(/^\{\{\s*\/\s*(?!\s)/)};var ends={DOUBLE:/^\s*\}\}/,TRIPLE:/^\s*\}\}\}/,EXPR:/^\s*\)/};var endsString={DOUBLE:'}}',TRIPLE:'}}}',EXPR:')'};// Parse a tag from the provided scanner or string.  If the input
// doesn't start with `{{`, returns null.  Otherwise, either succeeds
// and returns a SpacebarsCompiler.TemplateTag, or throws an error (using
// `scanner.fatal` if a scanner is provided).
TemplateTag.parse=function(scannerOrString){var scanner=scannerOrString;if(typeof scanner==='string')scanner=new HTMLTools.Scanner(scannerOrString);if(!(scanner.peek()==='{'&&scanner.rest().slice(0,2)==='{{'))return null;var run=function run(regex){// regex is assumed to start with `^`
var result=regex.exec(scanner.rest());if(!result)return null;var ret=result[0];scanner.pos+=ret.length;return ret;};var advance=function advance(amount){scanner.pos+=amount;};var scanIdentifier=function scanIdentifier(isFirstInPath){var id=BlazeTools.parseExtendedIdentifierName(scanner);if(!id){expected('IDENTIFIER');}if(isFirstInPath&&(id==='null'||id==='true'||id==='false'))scanner.fatal("Can't use null, true, or false, as an identifier at start of path");return id;};var scanPath=function scanPath(){var segments=[];// handle initial `.`, `..`, `./`, `../`, `../..`, `../../`, etc
var dots;if(dots=run(/^[\.\/]+/)){var ancestorStr='.';// eg `../../..` maps to `....`
var endsWithSlash=/\/$/.test(dots);if(endsWithSlash)dots=dots.slice(0,-1);_.each(dots.split('/'),function(dotClause,index){if(index===0){if(dotClause!=='.'&&dotClause!=='..')expected("`.`, `..`, `./` or `../`");}else{if(dotClause!=='..')expected("`..` or `../`");}if(dotClause==='..')ancestorStr+='.';});segments.push(ancestorStr);if(!endsWithSlash)return segments;}while(true){// scan a path segment
if(run(/^\[/)){var seg=run(/^[\s\S]*?\]/);if(!seg)error("Unterminated path segment");seg=seg.slice(0,-1);if(!seg&&!segments.length)error("Path can't start with empty string");segments.push(seg);}else{var id=scanIdentifier(!segments.length);if(id==='this'){if(!segments.length){// initial `this`
segments.push('.');}else{error("Can only use `this` at the beginning of a path.\nInstead of `foo.this` or `../this`, just write `foo` or `..`.");}}else{segments.push(id);}}var sep=run(/^[\.\/]/);if(!sep)break;}return segments;};// scan the keyword portion of a keyword argument
// (the "foo" portion in "foo=bar").
// Result is either the keyword matched, or null
// if we're not at a keyword argument position.
var scanArgKeyword=function scanArgKeyword(){var match=/^([^\{\}\(\)\>#=\s"'\[\]]+)\s*=\s*/.exec(scanner.rest());if(match){scanner.pos+=match[0].length;return match[1];}else{return null;}};// scan an argument; succeeds or errors.
// Result is an array of two or three items:
// type , value, and (indicating a keyword argument)
// keyword name.
var scanArg=function scanArg(){var keyword=scanArgKeyword();// null if not parsing a kwarg
var value=scanArgValue();return keyword?value.concat(keyword):value;};// scan an argument value (for keyword or positional arguments);
// succeeds or errors.  Result is an array of type, value.
var scanArgValue=function scanArgValue(){var startPos=scanner.pos;var result;if(result=BlazeTools.parseNumber(scanner)){return['NUMBER',result.value];}else if(result=BlazeTools.parseStringLiteral(scanner)){return['STRING',result.value];}else if(/^[\.\[]/.test(scanner.peek())){return['PATH',scanPath()];}else if(run(/^\(/)){return['EXPR',scanExpr('EXPR')];}else if(result=BlazeTools.parseExtendedIdentifierName(scanner)){var id=result;if(id==='null'){return['NULL',null];}else if(id==='true'||id==='false'){return['BOOLEAN',id==='true'];}else{scanner.pos=startPos;// unconsume `id`
return['PATH',scanPath()];}}else{expected('identifier, number, string, boolean, null, or a sub expression enclosed in "(", ")"');}};var scanExpr=function scanExpr(type){var endType=type;if(type==='INCLUSION'||type==='BLOCKOPEN')endType='DOUBLE';var tag=new TemplateTag();tag.type=type;tag.path=scanPath();tag.args=[];var foundKwArg=false;while(true){run(/^\s*/);if(run(ends[endType]))break;else if(/^[})]/.test(scanner.peek())){expected('`'+endsString[endType]+'`');}var newArg=scanArg();if(newArg.length===3){foundKwArg=true;}else{if(foundKwArg)error("Can't have a non-keyword argument after a keyword argument");}tag.args.push(newArg);// expect a whitespace or a closing ')' or '}'
if(run(/^(?=[\s})])/)!=='')expected('space');}return tag;};var type;var error=function error(msg){scanner.fatal(msg);};var expected=function expected(what){error('Expected '+what);};// must do ESCAPE first, immediately followed by ELSE
// order of others doesn't matter
if(run(starts.ESCAPE))type='ESCAPE';else if(run(starts.ELSE))type='ELSE';else if(run(starts.DOUBLE))type='DOUBLE';else if(run(starts.TRIPLE))type='TRIPLE';else if(run(starts.BLOCKCOMMENT))type='BLOCKCOMMENT';else if(run(starts.COMMENT))type='COMMENT';else if(run(starts.INCLUSION))type='INCLUSION';else if(run(starts.BLOCKOPEN))type='BLOCKOPEN';else if(run(starts.BLOCKCLOSE))type='BLOCKCLOSE';else error('Unknown stache tag');var tag=new TemplateTag();tag.type=type;if(type==='BLOCKCOMMENT'){var result=run(/^[\s\S]*?--\s*?\}\}/);if(!result)error("Unclosed block comment");tag.value=result.slice(0,result.lastIndexOf('--'));}else if(type==='COMMENT'){var result=run(/^[\s\S]*?\}\}/);if(!result)error("Unclosed comment");tag.value=result.slice(0,-2);}else if(type==='BLOCKCLOSE'){tag.path=scanPath();if(!run(ends.DOUBLE))expected('`}}`');}else if(type==='ELSE'){if(!run(ends.DOUBLE))expected('`}}`');}else if(type==='ESCAPE'){var result=run(/^\{*\|/);tag.value='{{'+result.slice(0,-1);}else{// DOUBLE, TRIPLE, BLOCKOPEN, INCLUSION
tag=scanExpr(type);}return tag;};// Returns a SpacebarsCompiler.TemplateTag parsed from `scanner`, leaving scanner
// at its original position.
//
// An error will still be thrown if there is not a valid template tag at
// the current position.
TemplateTag.peek=function(scanner){var startPos=scanner.pos;var result=TemplateTag.parse(scanner);scanner.pos=startPos;return result;};// Like `TemplateTag.parse`, but in the case of blocks, parse the complete
// `{{#foo}}...{{/foo}}` with `content` and possible `elseContent`, rather
// than just the BLOCKOPEN tag.
//
// In addition:
//
// - Throws an error if `{{else}}` or `{{/foo}}` tag is encountered.
//
// - Returns `null` for a COMMENT.  (This case is distinguishable from
//   parsing no tag by the fact that the scanner is advanced.)
//
// - Takes an HTMLTools.TEMPLATE_TAG_POSITION `position` and sets it as the
//   TemplateTag's `.position` property.
//
// - Validates the tag's well-formedness and legality at in its position.
TemplateTag.parseCompleteTag=function(scannerOrString,position){var scanner=scannerOrString;if(typeof scanner==='string')scanner=new HTMLTools.Scanner(scannerOrString);var startPos=scanner.pos;// for error messages
var result=TemplateTag.parse(scannerOrString);if(!result)return result;if(result.type==='BLOCKCOMMENT')return null;if(result.type==='COMMENT')return null;if(result.type==='ELSE')scanner.fatal("Unexpected {{else}}");if(result.type==='BLOCKCLOSE')scanner.fatal("Unexpected closing template tag");position=position||TEMPLATE_TAG_POSITION.ELEMENT;if(position!==TEMPLATE_TAG_POSITION.ELEMENT)result.position=position;if(result.type==='BLOCKOPEN'){// parse block contents
// Construct a string version of `.path` for comparing start and
// end tags.  For example, `foo/[0]` was parsed into `["foo", "0"]`
// and now becomes `foo,0`.  This form may also show up in error
// messages.
var blockName=result.path.join(',');var textMode=null;if(blockName==='markdown'||position===TEMPLATE_TAG_POSITION.IN_RAWTEXT){textMode=HTML.TEXTMODE.STRING;}else if(position===TEMPLATE_TAG_POSITION.IN_RCDATA||position===TEMPLATE_TAG_POSITION.IN_ATTRIBUTE){textMode=HTML.TEXTMODE.RCDATA;}var parserOptions={getTemplateTag:TemplateTag.parseCompleteTag,shouldStop:isAtBlockCloseOrElse,textMode:textMode};result.content=HTMLTools.parseFragment(scanner,parserOptions);if(scanner.rest().slice(0,2)!=='{{')scanner.fatal("Expected {{else}} or block close for "+blockName);var lastPos=scanner.pos;// save for error messages
var tmplTag=TemplateTag.parse(scanner);// {{else}} or {{/foo}}
if(tmplTag.type==='ELSE'){// parse {{else}} and content up to close tag
result.elseContent=HTMLTools.parseFragment(scanner,parserOptions);if(scanner.rest().slice(0,2)!=='{{')scanner.fatal("Expected block close for "+blockName);lastPos=scanner.pos;tmplTag=TemplateTag.parse(scanner);}if(tmplTag.type==='BLOCKCLOSE'){var blockName2=tmplTag.path.join(',');if(blockName!==blockName2){scanner.pos=lastPos;scanner.fatal('Expected tag to close '+blockName+', found '+blockName2);}}else{scanner.pos=lastPos;scanner.fatal('Expected tag to close '+blockName+', found '+tmplTag.type);}}var finalPos=scanner.pos;scanner.pos=startPos;validateTag(result,scanner);scanner.pos=finalPos;return result;};var isAtBlockCloseOrElse=function isAtBlockCloseOrElse(scanner){// Detect `{{else}}` or `{{/foo}}`.
//
// We do as much work ourselves before deferring to `TemplateTag.peek`,
// for efficiency (we're called for every input token) and to be
// less obtrusive, because `TemplateTag.peek` will throw an error if it
// sees `{{` followed by a malformed tag.
var rest,type;return scanner.peek()==='{'&&(rest=scanner.rest()).slice(0,2)==='{{'&&/^\{\{\s*(\/|else\b)/.test(rest)&&(type=TemplateTag.peek(scanner).type)&&(type==='BLOCKCLOSE'||type==='ELSE');};// Validate that `templateTag` is correctly formed and legal for its
// HTML position.  Use `scanner` to report errors. On success, does
// nothing.
var validateTag=function validateTag(ttag,scanner){if(ttag.type==='INCLUSION'||ttag.type==='BLOCKOPEN'){var args=ttag.args;if(ttag.path[0]==='each'&&args[1]&&args[1][0]==='PATH'&&args[1][1][0]==='in'){// For slightly better error messages, we detect the each-in case
// here in order not to complain if the user writes `{{#each 3 in x}}`
// that "3 is not a function"
}else{if(args.length>1&&args[0].length===2&&args[0][0]!=='PATH'){// we have a positional argument that is not a PATH followed by
// other arguments
scanner.fatal("First argument must be a function, to be called on "+"the rest of the arguments; found "+args[0][0]);}}}var position=ttag.position||TEMPLATE_TAG_POSITION.ELEMENT;if(position===TEMPLATE_TAG_POSITION.IN_ATTRIBUTE){if(ttag.type==='DOUBLE'||ttag.type==='ESCAPE'){return;}else if(ttag.type==='BLOCKOPEN'){var path=ttag.path;var path0=path[0];if(!(path.length===1&&(path0==='if'||path0==='unless'||path0==='with'||path0==='each'))){scanner.fatal("Custom block helpers are not allowed in an HTML attribute, only built-in ones like #each and #if");}}else{scanner.fatal(ttag.type+" template tag is not allowed in an HTML attribute");}}else if(position===TEMPLATE_TAG_POSITION.IN_START_TAG){if(!(ttag.type==='DOUBLE')){scanner.fatal("Reactive HTML attributes must either have a constant name or consist of a single {{helper}} providing a dictionary of names and values.  A template tag of type "+ttag.type+" is not allowed here.");}if(scanner.peek()==='='){scanner.fatal("Template tags are not allowed in attribute names, only in attribute values or in the form of a single {{helper}} that evaluates to a dictionary of name=value pairs.");}}};// Optimize parts of an HTMLjs tree into raw HTML strings when they don't
// contain template tags.
var constant=function constant(value){return function(){return value;};};var OPTIMIZABLE={NONE:0,PARTS:1,FULL:2};// We can only turn content into an HTML string if it contains no template
// tags and no "tricky" HTML tags.  If we can optimize the entire content
// into a string, we return OPTIMIZABLE.FULL.  If the we are given an
// unoptimizable node, we return OPTIMIZABLE.NONE.  If we are given a tree
// that contains an unoptimizable node somewhere, we return OPTIMIZABLE.PARTS.
//
// For example, we always create SVG elements programmatically, since SVG
// doesn't have innerHTML.  If we are given an SVG element, we return NONE.
// However, if we are given a big tree that contains SVG somewhere, we
// return PARTS so that the optimizer can descend into the tree and optimize
// other parts of it.
var CanOptimizeVisitor=HTML.Visitor.extend();CanOptimizeVisitor.def({visitNull:constant(OPTIMIZABLE.FULL),visitPrimitive:constant(OPTIMIZABLE.FULL),visitComment:constant(OPTIMIZABLE.FULL),visitCharRef:constant(OPTIMIZABLE.FULL),visitRaw:constant(OPTIMIZABLE.FULL),visitObject:constant(OPTIMIZABLE.NONE),visitFunction:constant(OPTIMIZABLE.NONE),visitArray:function visitArray(x){for(var i=0;i<x.length;i++){if(this.visit(x[i])!==OPTIMIZABLE.FULL)return OPTIMIZABLE.PARTS;}return OPTIMIZABLE.FULL;},visitTag:function visitTag(tag){var tagName=tag.tagName;if(tagName==='textarea'){// optimizing into a TEXTAREA's RCDATA would require being a little
// more clever.
return OPTIMIZABLE.NONE;}else if(tagName==='script'){// script tags don't work when rendered from strings
return OPTIMIZABLE.NONE;}else if(!(HTML.isKnownElement(tagName)&&!HTML.isKnownSVGElement(tagName))){// foreign elements like SVG can't be stringified for innerHTML.
return OPTIMIZABLE.NONE;}else if(tagName==='table'){// Avoid ever producing HTML containing `<table><tr>...`, because the
// browser will insert a TBODY.  If we just `createElement("table")` and
// `createElement("tr")`, on the other hand, no TBODY is necessary
// (assuming IE 8+).
return OPTIMIZABLE.NONE;}var children=tag.children;for(var i=0;i<children.length;i++){if(this.visit(children[i])!==OPTIMIZABLE.FULL)return OPTIMIZABLE.PARTS;}if(this.visitAttributes(tag.attrs)!==OPTIMIZABLE.FULL)return OPTIMIZABLE.PARTS;return OPTIMIZABLE.FULL;},visitAttributes:function visitAttributes(attrs){if(attrs){var isArray=HTML.isArray(attrs);for(var i=0;i<(isArray?attrs.length:1);i++){var a=isArray?attrs[i]:attrs;if((typeof a==="undefined"?"undefined":_typeof(a))!=='object'||a instanceof HTMLTools.TemplateTag)return OPTIMIZABLE.PARTS;for(var k in a){if(this.visit(a[k])!==OPTIMIZABLE.FULL)return OPTIMIZABLE.PARTS;}}}return OPTIMIZABLE.FULL;}});var getOptimizability=function getOptimizability(content){return new CanOptimizeVisitor().visit(content);};var toRaw=function toRaw(x){return HTML.Raw(HTML.toHTML(x));};var TreeTransformer=HTML.TransformingVisitor.extend();TreeTransformer.def({visitAttributes:function visitAttributes(attrs/*, ...*/){// pass template tags through by default
if(attrs instanceof HTMLTools.TemplateTag)return attrs;return HTML.TransformingVisitor.prototype.visitAttributes.apply(this,arguments);}});// Replace parts of the HTMLjs tree that have no template tags (or
// tricky HTML tags) with HTML.Raw objects containing raw HTML.
var OptimizingVisitor=TreeTransformer.extend();OptimizingVisitor.def({visitNull:toRaw,visitPrimitive:toRaw,visitComment:toRaw,visitCharRef:toRaw,visitArray:function visitArray(array){var optimizability=getOptimizability(array);if(optimizability===OPTIMIZABLE.FULL){return toRaw(array);}else if(optimizability===OPTIMIZABLE.PARTS){return TreeTransformer.prototype.visitArray.call(this,array);}else{return array;}},visitTag:function visitTag(tag){var optimizability=getOptimizability(tag);if(optimizability===OPTIMIZABLE.FULL){return toRaw(tag);}else if(optimizability===OPTIMIZABLE.PARTS){return TreeTransformer.prototype.visitTag.call(this,tag);}else{return tag;}},visitChildren:function visitChildren(children){// don't optimize the children array into a Raw object!
return TreeTransformer.prototype.visitArray.call(this,children);},visitAttributes:function visitAttributes(attrs){return attrs;}});// Combine consecutive HTML.Raws.  Remove empty ones.
var RawCompactingVisitor=TreeTransformer.extend();RawCompactingVisitor.def({visitArray:function visitArray(array){var result=[];for(var i=0;i<array.length;i++){var item=array[i];if(item instanceof HTML.Raw&&(!item.value||result.length&&result[result.length-1]instanceof HTML.Raw)){// two cases: item is an empty Raw, or previous item is
// a Raw as well.  In the latter case, replace the previous
// Raw with a longer one that includes the new Raw.
if(item.value){result[result.length-1]=HTML.Raw(result[result.length-1].value+item.value);}}else{result.push(item);}}return result;}});// Replace pointless Raws like `HTMl.Raw('foo')` that contain no special
// characters with simple strings.
var RawReplacingVisitor=TreeTransformer.extend();RawReplacingVisitor.def({visitRaw:function visitRaw(raw){var html=raw.value;if(html.indexOf('&')<0&&html.indexOf('<')<0){return html;}else{return raw;}}});SpacebarsCompiler.optimize=function(tree){tree=new OptimizingVisitor().visit(tree);tree=new RawCompactingVisitor().visit(tree);tree=new RawReplacingVisitor().visit(tree);return tree;};// A visitor to ensure that React components included via the `{{>
// React}}` template defined in the react-template-helper package are
// the only child in their parent component. Otherwise `React.render`
// would eliminate all of their sibling nodes.
//
// It's a little strange that this logic is in spacebars-compiler if
// it's only relevant to a specific package but there's no way to have
// a package hook into a build plugin.
ReactComponentSiblingForbidder=HTML.Visitor.extend();ReactComponentSiblingForbidder.def({visitArray:function visitArray(array,parentTag){for(var i=0;i<array.length;i++){this.visit(array[i],parentTag);}},visitObject:function visitObject(obj,parentTag){if(obj.type==="INCLUSION"&&obj.path.length===1&&obj.path[0]==="React"){if(!parentTag){throw new Error("{{> React}} must be used in a container element"+(this.sourceName?" in "+this.sourceName:"")+". Learn more at https://github.com/meteor/meteor/wiki/React-components-must-be-the-only-thing-in-their-wrapper-element");}var numSiblings=0;for(var i=0;i<parentTag.children.length;i++){var child=parentTag.children[i];if(child!==obj&&!(typeof child==="string"&&child.match(/^\s*$/))){numSiblings++;}}if(numSiblings>0){throw new Error("{{> React}} must be used as the only child in a container element"+(this.sourceName?" in "+this.sourceName:"")+". Learn more at https://github.com/meteor/meteor/wiki/React-components-must-be-the-only-thing-in-their-wrapper-element");}}},visitTag:function visitTag(tag){this.visitArray(tag.children,tag/*parentTag*/);}});// ============================================================
// Code-generation of template tags
// The `CodeGen` class currently has no instance state, but in theory
// it could be useful to track per-function state, like whether we
// need to emit `var self = this` or not.
var CodeGen=SpacebarsCompiler.CodeGen=function(){};var builtInBlockHelpers=SpacebarsCompiler._builtInBlockHelpers={'if':'Blaze.If','unless':'Blaze.Unless','with':'Spacebars.With','each':'Blaze.Each','let':'Blaze.Let'};// Mapping of "macros" which, when preceded by `Template.`, expand
// to special code rather than following the lookup rules for dotted
// symbols.
var builtInTemplateMacros={// `view` is a local variable defined in the generated render
// function for the template in which `Template.contentBlock` or
// `Template.elseBlock` is invoked.
'contentBlock':'view.templateContentBlock','elseBlock':'view.templateElseBlock',// Confusingly, this makes `{{> Template.dynamic}}` an alias
// for `{{> __dynamic}}`, where "__dynamic" is the template that
// implements the dynamic template feature.
'dynamic':'Template.__dynamic','subscriptionsReady':'view.templateInstance().subscriptionsReady()'};var additionalReservedNames=["body","toString","instance","constructor","toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","__defineGetter__","__lookupGetter__","__defineSetter__","__lookupSetter__","__proto__","dynamic","registerHelper","currentData","parentData"];// A "reserved name" can't be used as a <template> name.  This
// function is used by the template file scanner.
//
// Note that the runtime imposes additional restrictions, for example
// banning the name "body" and names of built-in object properties
// like "toString".
SpacebarsCompiler.isReservedName=function(name){return builtInBlockHelpers.hasOwnProperty(name)||builtInTemplateMacros.hasOwnProperty(name)||_.indexOf(additionalReservedNames,name)>-1;};var makeObjectLiteral=function makeObjectLiteral(obj){var parts=[];for(var k in obj){parts.push(BlazeTools.toObjectLiteralKey(k)+': '+obj[k]);}return'{'+parts.join(', ')+'}';};_.extend(CodeGen.prototype,{codeGenTemplateTag:function codeGenTemplateTag(tag){var self=this;if(tag.position===HTMLTools.TEMPLATE_TAG_POSITION.IN_START_TAG){// Special dynamic attributes: `<div {{attrs}}>...`
// only `tag.type === 'DOUBLE'` allowed (by earlier validation)
return BlazeTools.EmitCode('function () { return '+self.codeGenMustache(tag.path,tag.args,'attrMustache')+'; }');}else{if(tag.type==='DOUBLE'||tag.type==='TRIPLE'){var code=self.codeGenMustache(tag.path,tag.args);if(tag.type==='TRIPLE'){code='Spacebars.makeRaw('+code+')';}if(tag.position!==HTMLTools.TEMPLATE_TAG_POSITION.IN_ATTRIBUTE){// Reactive attributes are already wrapped in a function,
// and there's no fine-grained reactivity.
// Anywhere else, we need to create a View.
code='Blaze.View('+BlazeTools.toJSLiteral('lookup:'+tag.path.join('.'))+', '+'function () { return '+code+'; })';}return BlazeTools.EmitCode(code);}else if(tag.type==='INCLUSION'||tag.type==='BLOCKOPEN'){var path=tag.path;var args=tag.args;if(tag.type==='BLOCKOPEN'&&builtInBlockHelpers.hasOwnProperty(path[0])){// if, unless, with, each.
//
// If someone tries to do `{{> if}}`, we don't
// get here, but an error is thrown when we try to codegen the path.
// Note: If we caught these errors earlier, while scanning, we'd be able to
// provide nice line numbers.
if(path.length>1)throw new Error("Unexpected dotted path beginning with "+path[0]);if(!args.length)throw new Error("#"+path[0]+" requires an argument");var dataCode=null;// #each has a special treatment as it features two different forms:
// - {{#each people}}
// - {{#each person in people}}
if(path[0]==='each'&&args.length>=2&&args[1][0]==='PATH'&&args[1][1].length&&args[1][1][0]==='in'){// minimum conditions are met for each-in.  now validate this
// isn't some weird case.
var eachUsage="Use either {{#each items}} or "+"{{#each item in items}} form of #each.";var inArg=args[1];if(!(args.length>=3&&inArg[1].length===1)){// we don't have at least 3 space-separated parts after #each, or
// inArg doesn't look like ['PATH',['in']]
throw new Error("Malformed #each. "+eachUsage);}// split out the variable name and sequence arguments
var variableArg=args[0];if(!(variableArg[0]==="PATH"&&variableArg[1].length===1&&variableArg[1][0].replace(/\./g,''))){throw new Error("Bad variable name in #each");}var variable=variableArg[1][0];dataCode='function () { return { _sequence: '+self.codeGenInclusionData(args.slice(2))+', _variable: '+BlazeTools.toJSLiteral(variable)+' }; }';}else if(path[0]==='let'){var dataProps={};_.each(args,function(arg){if(arg.length!==3){// not a keyword arg (x=y)
throw new Error("Incorrect form of #let");}var argKey=arg[2];dataProps[argKey]='function () { return Spacebars.call('+self.codeGenArgValue(arg)+'); }';});dataCode=makeObjectLiteral(dataProps);}if(!dataCode){// `args` must exist (tag.args.length > 0)
dataCode=self.codeGenInclusionDataFunc(args)||'null';}// `content` must exist
var contentBlock='content'in tag?self.codeGenBlock(tag.content):null;// `elseContent` may not exist
var elseContentBlock='elseContent'in tag?self.codeGenBlock(tag.elseContent):null;var callArgs=[dataCode,contentBlock];if(elseContentBlock)callArgs.push(elseContentBlock);return BlazeTools.EmitCode(builtInBlockHelpers[path[0]]+'('+callArgs.join(', ')+')');}else{var compCode=self.codeGenPath(path,{lookupTemplate:true});if(path.length>1){// capture reactivity
compCode='function () { return Spacebars.call('+compCode+'); }';}var dataCode=self.codeGenInclusionDataFunc(tag.args);var content='content'in tag?self.codeGenBlock(tag.content):null;var elseContent='elseContent'in tag?self.codeGenBlock(tag.elseContent):null;var includeArgs=[compCode];if(content){includeArgs.push(content);if(elseContent)includeArgs.push(elseContent);}var includeCode='Spacebars.include('+includeArgs.join(', ')+')';// calling convention compat -- set the data context around the
// entire inclusion, so that if the name of the inclusion is
// a helper function, it gets the data context in `this`.
// This makes for a pretty confusing calling convention --
// In `{{#foo bar}}`, `foo` is evaluated in the context of `bar`
// -- but it's what we shipped for 0.8.0.  The rationale is that
// `{{#foo bar}}` is sugar for `{{#with bar}}{{#foo}}...`.
if(dataCode){includeCode='Blaze._TemplateWith('+dataCode+', function () { return '+includeCode+'; })';}// XXX BACK COMPAT - UI is the old name, Template is the new
if((path[0]==='UI'||path[0]==='Template')&&(path[1]==='contentBlock'||path[1]==='elseBlock')){// Call contentBlock and elseBlock in the appropriate scope
includeCode='Blaze._InOuterTemplateScope(view, function () { return '+includeCode+'; })';}return BlazeTools.EmitCode(includeCode);}}else if(tag.type==='ESCAPE'){return tag.value;}else{// Can't get here; TemplateTag validation should catch any
// inappropriate tag types that might come out of the parser.
throw new Error("Unexpected template tag type: "+tag.type);}}},// `path` is an array of at least one string.
//
// If `path.length > 1`, the generated code may be reactive
// (i.e. it may invalidate the current computation).
//
// No code is generated to call the result if it's a function.
//
// Options:
//
// - lookupTemplate {Boolean} If true, generated code also looks in
//   the list of templates. (After helpers, before data context).
//   Used when generating code for `{{> foo}}` or `{{#foo}}`. Only
//   used for non-dotted paths.
codeGenPath:function codeGenPath(path,opts){if(builtInBlockHelpers.hasOwnProperty(path[0]))throw new Error("Can't use the built-in '"+path[0]+"' here");// Let `{{#if Template.contentBlock}}` check whether this template was
// invoked via inclusion or as a block helper, in addition to supporting
// `{{> Template.contentBlock}}`.
// XXX BACK COMPAT - UI is the old name, Template is the new
if(path.length>=2&&(path[0]==='UI'||path[0]==='Template')&&builtInTemplateMacros.hasOwnProperty(path[1])){if(path.length>2)throw new Error("Unexpected dotted path beginning with "+path[0]+'.'+path[1]);return builtInTemplateMacros[path[1]];}var firstPathItem=BlazeTools.toJSLiteral(path[0]);var lookupMethod='lookup';if(opts&&opts.lookupTemplate&&path.length===1)lookupMethod='lookupTemplate';var code='view.'+lookupMethod+'('+firstPathItem+')';if(path.length>1){code='Spacebars.dot('+code+', '+_.map(path.slice(1),BlazeTools.toJSLiteral).join(', ')+')';}return code;},// Generates code for an `[argType, argValue]` argument spec,
// ignoring the third element (keyword argument name) if present.
//
// The resulting code may be reactive (in the case of a PATH of
// more than one element) and is not wrapped in a closure.
codeGenArgValue:function codeGenArgValue(arg){var self=this;var argType=arg[0];var argValue=arg[1];var argCode;switch(argType){case'STRING':case'NUMBER':case'BOOLEAN':case'NULL':argCode=BlazeTools.toJSLiteral(argValue);break;case'PATH':argCode=self.codeGenPath(argValue);break;case'EXPR':// The format of EXPR is ['EXPR', { type: 'EXPR', path: [...], args: { ... } }]
argCode=self.codeGenMustache(argValue.path,argValue.args,'dataMustache');break;default:// can't get here
throw new Error("Unexpected arg type: "+argType);}return argCode;},// Generates a call to `Spacebars.fooMustache` on evaluated arguments.
// The resulting code has no function literals and must be wrapped in
// one for fine-grained reactivity.
codeGenMustache:function codeGenMustache(path,args,mustacheType){var self=this;var nameCode=self.codeGenPath(path);var argCode=self.codeGenMustacheArgs(args);var mustache=mustacheType||'mustache';return'Spacebars.'+mustache+'('+nameCode+(argCode?', '+argCode.join(', '):'')+')';},// returns: array of source strings, or null if no
// args at all.
codeGenMustacheArgs:function codeGenMustacheArgs(tagArgs){var self=this;var kwArgs=null;// source -> source
var args=null;// [source]
// tagArgs may be null
_.each(tagArgs,function(arg){var argCode=self.codeGenArgValue(arg);if(arg.length>2){// keyword argument (represented as [type, value, name])
kwArgs=kwArgs||{};kwArgs[arg[2]]=argCode;}else{// positional argument
args=args||[];args.push(argCode);}});// put kwArgs in options dictionary at end of args
if(kwArgs){args=args||[];args.push('Spacebars.kw('+makeObjectLiteral(kwArgs)+')');}return args;},codeGenBlock:function codeGenBlock(content){return SpacebarsCompiler.codeGen(content);},codeGenInclusionData:function codeGenInclusionData(args){var self=this;if(!args.length){// e.g. `{{#foo}}`
return null;}else if(args[0].length===3){// keyword arguments only, e.g. `{{> point x=1 y=2}}`
var dataProps={};_.each(args,function(arg){var argKey=arg[2];dataProps[argKey]='Spacebars.call('+self.codeGenArgValue(arg)+')';});return makeObjectLiteral(dataProps);}else if(args[0][0]!=='PATH'){// literal first argument, e.g. `{{> foo "blah"}}`
//
// tag validation has confirmed, in this case, that there is only
// one argument (`args.length === 1`)
return self.codeGenArgValue(args[0]);}else if(args.length===1){// one argument, must be a PATH
return'Spacebars.call('+self.codeGenPath(args[0][1])+')';}else{// Multiple positional arguments; treat them as a nested
// "data mustache"
return self.codeGenMustache(args[0][1],args.slice(1),'dataMustache');}},codeGenInclusionDataFunc:function codeGenInclusionDataFunc(args){var self=this;var dataCode=self.codeGenInclusionData(args);if(dataCode){return'function () { return '+dataCode+'; }';}else{return null;}}});SpacebarsCompiler.parse=function(input){var tree=HTMLTools.parseFragment(input,{getTemplateTag:TemplateTag.parseCompleteTag});return tree;};SpacebarsCompiler.compile=function(input,options){var tree=SpacebarsCompiler.parse(input);return SpacebarsCompiler.codeGen(tree,options);};SpacebarsCompiler._TemplateTagReplacer=HTML.TransformingVisitor.extend();SpacebarsCompiler._TemplateTagReplacer.def({visitObject:function visitObject(x){if(x instanceof HTMLTools.TemplateTag){// Make sure all TemplateTags in attributes have the right
// `.position` set on them.  This is a bit of a hack
// (we shouldn't be mutating that here), but it allows
// cleaner codegen of "synthetic" attributes like TEXTAREA's
// "value", where the template tags were originally not
// in an attribute.
if(this.inAttributeValue)x.position=HTMLTools.TEMPLATE_TAG_POSITION.IN_ATTRIBUTE;return this.codegen.codeGenTemplateTag(x);}return HTML.TransformingVisitor.prototype.visitObject.call(this,x);},visitAttributes:function visitAttributes(attrs){if(attrs instanceof HTMLTools.TemplateTag)return this.codegen.codeGenTemplateTag(attrs);// call super (e.g. for case where `attrs` is an array)
return HTML.TransformingVisitor.prototype.visitAttributes.call(this,attrs);},visitAttribute:function visitAttribute(name,value,tag){this.inAttributeValue=true;var result=this.visit(value);this.inAttributeValue=false;if(result!==value){// some template tags must have been replaced, because otherwise
// we try to keep things `===` when transforming.  Wrap the code
// in a function as per the rules.  You can't have
// `{id: Blaze.View(...)}` as an attributes dict because the View
// would be rendered more than once; you need to wrap it in a function
// so that it's a different View each time.
return BlazeTools.EmitCode(this.codegen.codeGenBlock(result));}return result;}});SpacebarsCompiler.codeGen=function(parseTree,options){// is this a template, rather than a block passed to
// a block helper, say
var isTemplate=options&&options.isTemplate;var isBody=options&&options.isBody;var sourceName=options&&options.sourceName;var tree=parseTree;// The flags `isTemplate` and `isBody` are kind of a hack.
if(isTemplate||isBody){// optimizing fragments would require being smarter about whether we are
// in a TEXTAREA, say.
tree=SpacebarsCompiler.optimize(tree);}// throws an error if using `{{> React}}` with siblings
new ReactComponentSiblingForbidder({sourceName:sourceName}).visit(tree);var codegen=new SpacebarsCompiler.CodeGen();tree=new SpacebarsCompiler._TemplateTagReplacer({codegen:codegen}).visit(tree);var code='(function () { ';if(isTemplate||isBody){code+='var view = this; ';}code+='return ';code+=BlazeTools.toJS(tree);code+='; })';code=SpacebarsCompiler._beautify(code);return code;};SpacebarsCompiler._beautify=function(code){if(Package['minifier-js']&&Package['minifier-js'].UglifyJSMinify){var result=Package['minifier-js'].UglifyJSMinify(code,{fromString:true,mangle:false,compress:false,output:{beautify:true,indent_level:2,width:80}});var output=result.code;// Uglify interprets our expression as a statement and may add a semicolon.
// Strip trailing semicolon.
output=output.replace(/;$/,'');return output;}else{// don't actually beautify; no UglifyJS
return code;}};Meteor.SpacebarsCompiler=SpacebarsCompiler;};},{}],26:[function(require,module,exports){module.exports=function(Meteor){var HTML=Meteor.HTML;var Tracker=Meteor.Tracker;var Blaze=Meteor.Blaze;var ObserveSequence=Meteor.ObserveSequence;var ReactiveVar=Meteor.ReactiveVar;var Template=Meteor.Template;Blaze.ReactiveVar=ReactiveVar;var Spacebars;var Handlebars={};Handlebars.registerHelper=Blaze.registerHelper;Handlebars._escape=Blaze._escape;// Return these from {{...}} helpers to achieve the same as returning
// strings from {{{...}}} helpers
Handlebars.SafeString=function(string){this.string=string;};Handlebars.SafeString.prototype.toString=function(){return this.string.toString();};Spacebars={};var tripleEquals=function tripleEquals(a,b){return a===b;};Spacebars.include=function(templateOrFunction,contentFunc,elseFunc){if(!templateOrFunction)return null;if(typeof templateOrFunction!=='function'){var template=templateOrFunction;if(!Blaze.isTemplate(template))throw new Error("Expected template or null, found: "+template);var view=templateOrFunction.constructView(contentFunc,elseFunc);view.__startsNewLexicalScope=true;return view;}var templateVar=Blaze.ReactiveVar(null,tripleEquals);var view=Blaze.View('Spacebars.include',function(){var template=templateVar.get();if(template===null)return null;if(!Blaze.isTemplate(template))throw new Error("Expected template or null, found: "+template);return template.constructView(contentFunc,elseFunc);});view.__templateVar=templateVar;view.onViewCreated(function(){this.autorun(function(){templateVar.set(templateOrFunction());});});view.__startsNewLexicalScope=true;return view;};// Executes `{{foo bar baz}}` when called on `(foo, bar, baz)`.
// If `bar` and `baz` are functions, they are called before
// `foo` is called on them.
//
// This is the shared part of Spacebars.mustache and
// Spacebars.attrMustache, which differ in how they post-process the
// result.
Spacebars.mustacheImpl=function(value/*, args*/){var args=arguments;// if we have any arguments (pos or kw), add an options argument
// if there isn't one.
if(args.length>1){var kw=args[args.length-1];if(!(kw instanceof Spacebars.kw)){kw=Spacebars.kw();// clone arguments into an actual array, then push
// the empty kw object.
args=Array.prototype.slice.call(arguments);args.push(kw);}else{// For each keyword arg, call it if it's a function
var newHash={};for(var k in kw.hash){var v=kw.hash[k];newHash[k]=typeof v==='function'?v():v;}args[args.length-1]=Spacebars.kw(newHash);}}return Spacebars.call.apply(null,args);};Spacebars.mustache=function(value/*, args*/){var result=Spacebars.mustacheImpl.apply(null,arguments);if(result instanceof Spacebars.SafeString)return HTML.Raw(result.toString());else// map `null`, `undefined`, and `false` to null, which is important
// so that attributes with nully values are considered absent.
// stringify anything else (e.g. strings, booleans, numbers including 0).
return result==null||result===false?null:String(result);};Spacebars.attrMustache=function(value/*, args*/){var result=Spacebars.mustacheImpl.apply(null,arguments);if(result==null||result===''){return null;}else if((typeof result==="undefined"?"undefined":_typeof(result))==='object'){return result;}else if(typeof result==='string'&&HTML.isValidAttributeName(result)){var obj={};obj[result]='';return obj;}else{throw new Error("Expected valid attribute name, '', null, or object");}};Spacebars.dataMustache=function(value/*, args*/){var result=Spacebars.mustacheImpl.apply(null,arguments);return result;};// Idempotently wrap in `HTML.Raw`.
//
// Called on the return value from `Spacebars.mustache` in case the
// template uses triple-stache (`{{{foo bar baz}}}`).
Spacebars.makeRaw=function(value){if(value==null)// null or undefined
return null;else if(value instanceof HTML.Raw)return value;else return HTML.Raw(value);};// If `value` is a function, evaluate its `args` (by calling them, if they
// are functions), and then call it on them. Otherwise, return `value`.
//
// If `value` is not a function and is not null, then this method will assert
// that there are no args. We check for null before asserting because a user
// may write a template like {{user.fullNameWithPrefix 'Mr.'}}, where the
// function will be null until data is ready.
Spacebars.call=function(value/*, args*/){if(typeof value==='function'){// Evaluate arguments by calling them if they are functions.
var newArgs=[];for(var i=1;i<arguments.length;i++){var arg=arguments[i];newArgs[i-1]=typeof arg==='function'?arg():arg;}return value.apply(null,newArgs);}else{if(value!=null&&arguments.length>1){throw new Error("Can't call non-function: "+value);}return value;}};// Call this as `Spacebars.kw({ ... })`.  The return value
// is `instanceof Spacebars.kw`.
Spacebars.kw=function(hash){if(!(this instanceof Spacebars.kw))// called without new; call with new
return new Spacebars.kw(hash);this.hash=hash||{};};// Call this as `Spacebars.SafeString("some HTML")`.  The return value
// is `instanceof Spacebars.SafeString` (and `instanceof Handlebars.SafeString).
Spacebars.SafeString=function(html){if(!(this instanceof Spacebars.SafeString))// called without new; call with new
return new Spacebars.SafeString(html);return new Handlebars.SafeString(html);};Spacebars.SafeString.prototype=Handlebars.SafeString.prototype;// `Spacebars.dot(foo, "bar", "baz")` performs a special kind
// of `foo.bar.baz` that allows safe indexing of `null` and
// indexing of functions (which calls the function).  If the
// result is a function, it is always a bound function (e.g.
// a wrapped version of `baz` that always uses `foo.bar` as
// `this`).
//
// In `Spacebars.dot(foo, "bar")`, `foo` is assumed to be either
// a non-function value or a "fully-bound" function wrapping a value,
// where fully-bound means it takes no arguments and ignores `this`.
//
// `Spacebars.dot(foo, "bar")` performs the following steps:
//
// * If `foo` is falsy, return `foo`.
//
// * If `foo` is a function, call it (set `foo` to `foo()`).
//
// * If `foo` is falsy now, return `foo`.
//
// * Return `foo.bar`, binding it to `foo` if it's a function.
Spacebars.dot=function(value,id1/*, id2, ...*/){if(arguments.length>2){// Note: doing this recursively is probably less efficient than
// doing it in an iterative loop.
var argsForRecurse=[];argsForRecurse.push(Spacebars.dot(value,id1));argsForRecurse.push.apply(argsForRecurse,Array.prototype.slice.call(arguments,2));return Spacebars.dot.apply(null,argsForRecurse);}if(typeof value==='function')value=value();if(!value)return value;// falsy, don't index, pass through
var result=value[id1];if(typeof result!=='function')return result;// `value[id1]` (or `value()[id1]`) is a function.
// Bind it so that when called, `value` will be placed in `this`.
return function()/*arguments*/{return result.apply(value,arguments);};};// Spacebars.With implements the conditional logic of rendering
// the `{{else}}` block if the argument is falsy.  It combines
// a Blaze.If with a Blaze.With (the latter only in the truthy
// case, since the else block is evaluated without entering
// a new data context).
Spacebars.With=function(argFunc,contentFunc,elseFunc){var argVar=new Blaze.ReactiveVar();var view=Blaze.View('Spacebars_with',function(){return Blaze.If(function(){return argVar.get();},function(){return Blaze.With(function(){return argVar.get();},contentFunc);},elseFunc);});view.onViewCreated(function(){this.autorun(function(){argVar.set(argFunc());// This is a hack so that autoruns inside the body
// of the #with get stopped sooner.  It reaches inside
// our ReactiveVar to access its dep.
Tracker.onInvalidate(function(){argVar.dep.changed();});// Take the case of `{{#with A}}{{B}}{{/with}}`.  The goal
// is to not re-render `B` if `A` changes to become falsy
// and `B` is simultaneously invalidated.
//
// A series of autoruns are involved:
//
// 1. This autorun (argument to Spacebars.With)
// 2. Argument to Blaze.If
// 3. Blaze.If view re-render
// 4. Argument to Blaze.With
// 5. The template tag `{{B}}`
//
// When (3) is invalidated, it immediately stops (4) and (5)
// because of a Tracker.onInvalidate built into materializeView.
// (When a View's render method is invalidated, it immediately
// tears down all the subviews, via a Tracker.onInvalidate much
// like this one.
//
// Suppose `A` changes to become falsy, and `B` changes at the
// same time (i.e. without an intervening flush).
// Without the code above, this happens:
//
// - (1) and (5) are invalidated.
// - (1) runs, invalidating (2) and (4).
// - (5) runs.
// - (2) runs, invalidating (3), stopping (4) and (5).
//
// With the code above:
//
// - (1) and (5) are invalidated, invalidating (2) and (4).
// - (1) runs.
// - (2) runs, invalidating (3), stopping (4) and (5).
//
// If the re-run of (5) is originally enqueued before (1), all
// bets are off, but typically that doesn't seem to be the
// case.  Anyway, doing this is always better than not doing it,
// because it might save a bunch of DOM from being updated
// needlessly.
});});return view;};// XXX COMPAT WITH 0.9.0
Spacebars.TemplateWith=Blaze._TemplateWith;Meteor.Spacebars=Spacebars;};},{}],27:[function(require,module,exports){module.exports=function(Meteor){var _=Meteor.underscore;var Blaze=Meteor.Blaze;var UI={};var Template;// Packages and apps add templates on to this object.
/**
 * @summary The class for defining templates
 * @class
 * @instanceName Template.myTemplate
 */Template=Blaze.Template;var RESERVED_TEMPLATE_NAMES="__proto__ name".split(" ");// Check for duplicate template names and illegal names that won't work.
Template.__checkName=function(name){// Some names can't be used for Templates. These include:
//  - Properties Blaze sets on the Template object.
//  - Properties that some browsers don't let the code to set.
//    These are specified in RESERVED_TEMPLATE_NAMES.
if(name in Template||_.contains(RESERVED_TEMPLATE_NAMES,name)){if(Template[name]instanceof Template&&name!=="body")throw new Error("There are multiple templates named '"+name+"'. Each template needs a unique name.");throw new Error("This template name is reserved: "+name);}};// XXX COMPAT WITH 0.8.3
Template.__define__=function(name,renderFunc){Template.__checkName(name);Template[name]=new Template("Template."+name,renderFunc);// Exempt packages built pre-0.9.0 from warnings about using old
// helper syntax, because we can.  It's not very useful to get a
// warning about someone else's code (like a package on Atmosphere),
// and this should at least put a bit of a dent in number of warnings
// that come from packages that haven't been updated lately.
Template[name]._NOWARN_OLDSTYLE_HELPERS=true;};// Define a template `Template.body` that renders its
// `contentRenderFuncs`.  `<body>` tags (of which there may be
// multiple) will have their contents added to it.
/**
 * @summary The [template object](#templates_api) representing your `<body>`
 * tag.
 * @locus Client
 */Template.body=new Template('body',function(){var view=this;return _.map(Template.body.contentRenderFuncs,function(func){return func.apply(view);});});Template.body.contentRenderFuncs=[];// array of Blaze.Views
Template.body.view=null;Template.body.addContent=function(renderFunc){Template.body.contentRenderFuncs.push(renderFunc);};// This function does not use `this` and so it may be called
// as `Meteor.startup(Template.body.renderIntoDocument)`.
Template.body.renderToDocument=function(){// Only do it once.
if(Template.body.view)return;var view=Blaze.render(Template.body,document.body);Template.body.view=view;};// XXX COMPAT WITH 0.9.0
UI.body=Template.body;// XXX COMPAT WITH 0.9.0
// (<body> tags in packages built with 0.9.0)
Template.__body__=Template.body;Template.__body__.__contentParts=Template.body.contentViews;Template.__body__.__instantiate=Template.body.renderToDocument;Meteor.Template=Template;};},{}],28:[function(require,module,exports){module.exports=function(Meteor){var Tracker;/////////////////////////////////////////////////////
// Package docs at http://docs.meteor.com/#tracker //
/////////////////////////////////////////////////////
/**
 * @namespace Tracker
 * @summary The namespace for Tracker-related methods.
 */Tracker={};// http://docs.meteor.com/#tracker_active
/**
 * @summary True if there is a current computation, meaning that dependencies on reactive data sources will be tracked and potentially cause the current computation to be rerun.
 * @locus Client
 * @type {Boolean}
 */Tracker.active=false;// http://docs.meteor.com/#tracker_currentcomputation
/**
 * @summary The current computation, or `null` if there isn't one.  The current computation is the [`Tracker.Computation`](#tracker_computation) object created by the innermost active call to `Tracker.autorun`, and it's the computation that gains dependencies when reactive data sources are accessed.
 * @locus Client
 * @type {Tracker.Computation}
 */Tracker.currentComputation=null;// References to all computations created within the Tracker by id.
// Keeping these references on an underscore property gives more control to
// tooling and packages extending Tracker without increasing the API surface.
// These can used to monkey-patch computations, their functions, use
// computation ids for tracking, etc.
Tracker._computations={};var setCurrentComputation=function setCurrentComputation(c){Tracker.currentComputation=c;Tracker.active=!!c;};var _debugFunc=function _debugFunc(){// We want this code to work without Meteor, and also without
// "console" (which is technically non-standard and may be missing
// on some browser we come across, like it was on IE 7).
//
// Lazy evaluation because `Meteor` does not exist right away.(??)
return typeof Meteor!=="undefined"?Meteor._debug:typeof console!=="undefined"&&console.error?function(){console.error.apply(console,arguments);}:function(){};};var _maybeSuppressMoreLogs=function _maybeSuppressMoreLogs(messagesLength){// Sometimes when running tests, we intentionally suppress logs on expected
// printed errors. Since the current implementation of _throwOrLog can log
// multiple separate log messages, suppress all of them if at least one suppress
// is expected as we still want them to count as one.
if(typeof Meteor!=="undefined"){if(Meteor._suppressed_log_expected()){Meteor._suppress_log(messagesLength-1);}}};var _throwOrLog=function _throwOrLog(from,e){if(throwFirstError){throw e;}else{var printArgs=["Exception from Tracker "+from+" function:"];if(e.stack&&e.message&&e.name){var idx=e.stack.indexOf(e.message);if(idx<0||idx>e.name.length+2){// check for "Error: "
// message is not part of the stack
var message=e.name+": "+e.message;printArgs.push(message);}}printArgs.push(e.stack);_maybeSuppressMoreLogs(printArgs.length);for(var i=0;i<printArgs.length;i++){_debugFunc()(printArgs[i]);}}};// Takes a function `f`, and wraps it in a `Meteor._noYieldsAllowed`
// block if we are running on the server. On the client, returns the
// original function (since `Meteor._noYieldsAllowed` is a
// no-op). This has the benefit of not adding an unnecessary stack
// frame on the client.
var withNoYieldsAllowed=function withNoYieldsAllowed(f){if(typeof Meteor==='undefined'||Meteor.isClient){return f;}else{return function(){var args=arguments;Meteor._noYieldsAllowed(function(){f.apply(null,args);});};}};var nextId=1;// computations whose callbacks we should call at flush time
var pendingComputations=[];// `true` if a Tracker.flush is scheduled, or if we are in Tracker.flush now
var willFlush=false;// `true` if we are in Tracker.flush now
var inFlush=false;// `true` if we are computing a computation now, either first time
// or recompute.  This matches Tracker.active unless we are inside
// Tracker.nonreactive, which nullfies currentComputation even though
// an enclosing computation may still be running.
var inCompute=false;// `true` if the `_throwFirstError` option was passed in to the call
// to Tracker.flush that we are in. When set, throw rather than log the
// first error encountered while flushing. Before throwing the error,
// finish flushing (from a finally block), logging any subsequent
// errors.
var throwFirstError=false;var afterFlushCallbacks=[];var requireFlush=function requireFlush(){if(!willFlush){// We want this code to work without Meteor, see debugFunc above
if(typeof Meteor!=="undefined")Meteor._setImmediate(Tracker._runFlush);else setTimeout(Tracker._runFlush,0);willFlush=true;}};// Tracker.Computation constructor is visible but private
// (throws an error if you try to call it)
var constructingComputation=false;//
// http://docs.meteor.com/#tracker_computation
/**
 * @summary A Computation object represents code that is repeatedly rerun
 * in response to
 * reactive data changes. Computations don't have return values; they just
 * perform actions, such as rerendering a template on the screen. Computations
 * are created using Tracker.autorun. Use stop to prevent further rerunning of a
 * computation.
 * @instancename computation
 */Tracker.Computation=function(f,parent,onError){if(!constructingComputation)throw new Error("Tracker.Computation constructor is private; use Tracker.autorun");constructingComputation=false;var self=this;// http://docs.meteor.com/#computation_stopped
/**
   * @summary True if this computation has been stopped.
   * @locus Client
   * @memberOf Tracker.Computation
   * @instance
   * @name  stopped
   */self.stopped=false;// http://docs.meteor.com/#computation_invalidated
/**
   * @summary True if this computation has been invalidated (and not yet rerun), or if it has been stopped.
   * @locus Client
   * @memberOf Tracker.Computation
   * @instance
   * @name  invalidated
   * @type {Boolean}
   */self.invalidated=false;// http://docs.meteor.com/#computation_firstrun
/**
   * @summary True during the initial run of the computation at the time `Tracker.autorun` is called, and false on subsequent reruns and at other times.
   * @locus Client
   * @memberOf Tracker.Computation
   * @instance
   * @name  firstRun
   * @type {Boolean}
   */self.firstRun=true;self._id=nextId++;self._onInvalidateCallbacks=[];self._onStopCallbacks=[];// the plan is at some point to use the parent relation
// to constrain the order that computations are processed
self._parent=parent;self._func=f;self._onError=onError;self._recomputing=false;// Register the computation within the global Tracker.
Tracker._computations[self._id]=self;var errored=true;try{self._compute();errored=false;}finally{self.firstRun=false;if(errored)self.stop();}};// http://docs.meteor.com/#computation_oninvalidate
/**
 * @summary Registers `callback` to run when this computation is next invalidated, or runs it immediately if the computation is already invalidated.  The callback is run exactly once and not upon future invalidations unless `onInvalidate` is called again after the computation becomes valid again.
 * @locus Client
 * @param {Function} callback Function to be called on invalidation. Receives one argument, the computation that was invalidated.
 */Tracker.Computation.prototype.onInvalidate=function(f){var self=this;if(typeof f!=='function')throw new Error("onInvalidate requires a function");if(self.invalidated){Tracker.nonreactive(function(){withNoYieldsAllowed(f)(self);});}else{self._onInvalidateCallbacks.push(f);}};/**
 * @summary Registers `callback` to run when this computation is stopped, or runs it immediately if the computation is already stopped.  The callback is run after any `onInvalidate` callbacks.
 * @locus Client
 * @param {Function} callback Function to be called on stop. Receives one argument, the computation that was stopped.
 */Tracker.Computation.prototype.onStop=function(f){var self=this;if(typeof f!=='function')throw new Error("onStop requires a function");if(self.stopped){Tracker.nonreactive(function(){withNoYieldsAllowed(f)(self);});}else{self._onStopCallbacks.push(f);}};// http://docs.meteor.com/#computation_invalidate
/**
 * @summary Invalidates this computation so that it will be rerun.
 * @locus Client
 */Tracker.Computation.prototype.invalidate=function(){var self=this;if(!self.invalidated){// if we're currently in _recompute(), don't enqueue
// ourselves, since we'll rerun immediately anyway.
if(!self._recomputing&&!self.stopped){requireFlush();pendingComputations.push(this);}self.invalidated=true;// callbacks can't add callbacks, because
// self.invalidated === true.
for(var i=0,f;f=self._onInvalidateCallbacks[i];i++){Tracker.nonreactive(function(){withNoYieldsAllowed(f)(self);});}self._onInvalidateCallbacks=[];}};// http://docs.meteor.com/#computation_stop
/**
 * @summary Prevents this computation from rerunning.
 * @locus Client
 */Tracker.Computation.prototype.stop=function(){var self=this;if(!self.stopped){self.stopped=true;self.invalidate();// Unregister from global Tracker.
delete Tracker._computations[self._id];for(var i=0,f;f=self._onStopCallbacks[i];i++){Tracker.nonreactive(function(){withNoYieldsAllowed(f)(self);});}self._onStopCallbacks=[];}};Tracker.Computation.prototype._compute=function(){var self=this;self.invalidated=false;var previous=Tracker.currentComputation;setCurrentComputation(self);var previousInCompute=inCompute;inCompute=true;try{withNoYieldsAllowed(self._func)(self);}finally{setCurrentComputation(previous);inCompute=previousInCompute;}};Tracker.Computation.prototype._needsRecompute=function(){var self=this;return self.invalidated&&!self.stopped;};Tracker.Computation.prototype._recompute=function(){var self=this;self._recomputing=true;try{if(self._needsRecompute()){try{self._compute();}catch(e){if(self._onError){self._onError(e);}else{_throwOrLog("recompute",e);}}}}finally{self._recomputing=false;}};//
// http://docs.meteor.com/#tracker_dependency
/**
 * @summary A Dependency represents an atomic unit of reactive data that a
 * computation might depend on. Reactive data sources such as Session or
 * Minimongo internally create different Dependency objects for different
 * pieces of data, each of which may be depended on by multiple computations.
 * When the data changes, the computations are invalidated.
 * @class
 * @instanceName dependency
 */Tracker.Dependency=function(){this._dependentsById={};};// http://docs.meteor.com/#dependency_depend
//
// Adds `computation` to this set if it is not already
// present.  Returns true if `computation` is a new member of the set.
// If no argument, defaults to currentComputation, or does nothing
// if there is no currentComputation.
/**
 * @summary Declares that the current computation (or `fromComputation` if given) depends on `dependency`.  The computation will be invalidated the next time `dependency` changes.

If there is no current computation and `depend()` is called with no arguments, it does nothing and returns false.

Returns true if the computation is a new dependent of `dependency` rather than an existing one.
 * @locus Client
 * @param {Tracker.Computation} [fromComputation] An optional computation declared to depend on `dependency` instead of the current computation.
 * @returns {Boolean}
 */Tracker.Dependency.prototype.depend=function(computation){if(!computation){if(!Tracker.active)return false;computation=Tracker.currentComputation;}var self=this;var id=computation._id;if(!(id in self._dependentsById)){self._dependentsById[id]=computation;computation.onInvalidate(function(){delete self._dependentsById[id];});return true;}return false;};// http://docs.meteor.com/#dependency_changed
/**
 * @summary Invalidate all dependent computations immediately and remove them as dependents.
 * @locus Client
 */Tracker.Dependency.prototype.changed=function(){var self=this;for(var id in self._dependentsById){self._dependentsById[id].invalidate();}};// http://docs.meteor.com/#dependency_hasdependents
/**
 * @summary True if this Dependency has one or more dependent Computations, which would be invalidated if this Dependency were to change.
 * @locus Client
 * @returns {Boolean}
 */Tracker.Dependency.prototype.hasDependents=function(){var self=this;for(var id in self._dependentsById){return true;}return false;};// http://docs.meteor.com/#tracker_flush
/**
 * @summary Process all reactive updates immediately and ensure that all invalidated computations are rerun.
 * @locus Client
 */Tracker.flush=function(options){Tracker._runFlush({finishSynchronously:true,throwFirstError:options&&options._throwFirstError});};// Run all pending computations and afterFlush callbacks.  If we were not called
// directly via Tracker.flush, this may return before they're all done to allow
// the event loop to run a little before continuing.
Tracker._runFlush=function(options){// XXX What part of the comment below is still true? (We no longer
// have Spark)
//
// Nested flush could plausibly happen if, say, a flush causes
// DOM mutation, which causes a "blur" event, which runs an
// app event handler that calls Tracker.flush.  At the moment
// Spark blocks event handlers during DOM mutation anyway,
// because the LiveRange tree isn't valid.  And we don't have
// any useful notion of a nested flush.
//
// https://app.asana.com/0/159908330244/385138233856
if(inFlush)throw new Error("Can't call Tracker.flush while flushing");if(inCompute)throw new Error("Can't flush inside Tracker.autorun");options=options||{};inFlush=true;willFlush=true;throwFirstError=!!options.throwFirstError;var recomputedCount=0;var finishedTry=false;try{while(pendingComputations.length||afterFlushCallbacks.length){// recompute all pending computations
while(pendingComputations.length){var comp=pendingComputations.shift();comp._recompute();if(comp._needsRecompute()){pendingComputations.unshift(comp);}if(!options.finishSynchronously&&++recomputedCount>1000){finishedTry=true;return;}}if(afterFlushCallbacks.length){// call one afterFlush callback, which may
// invalidate more computations
var func=afterFlushCallbacks.shift();try{func();}catch(e){_throwOrLog("afterFlush",e);}}}finishedTry=true;}finally{if(!finishedTry){// we're erroring due to throwFirstError being true.
inFlush=false;// needed before calling `Tracker.flush()` again
// finish flushing
Tracker._runFlush({finishSynchronously:options.finishSynchronously,throwFirstError:false});}willFlush=false;inFlush=false;if(pendingComputations.length||afterFlushCallbacks.length){// We're yielding because we ran a bunch of computations and we aren't
// required to finish synchronously, so we'd like to give the event loop a
// chance. We should flush again soon.
if(options.finishSynchronously){throw new Error("still have more to do?");// shouldn't happen
}setTimeout(requireFlush,10);}}};// http://docs.meteor.com/#tracker_autorun
//
// Run f(). Record its dependencies. Rerun it whenever the
// dependencies change.
//
// Returns a new Computation, which is also passed to f.
//
// Links the computation to the current computation
// so that it is stopped if the current computation is invalidated.
/**
 * @callback Tracker.ComputationFunction
 * @param {Tracker.Computation}
 *//**
 * @summary Run a function now and rerun it later whenever its dependencies
 * change. Returns a Computation object that can be used to stop or observe the
 * rerunning.
 * @locus Client
 * @param {Tracker.ComputationFunction} runFunc The function to run. It receives
 * one argument: the Computation object that will be returned.
 * @param {Object} [options]
 * @param {Function} options.onError Optional. The function to run when an error
 * happens in the Computation. The only argument it recieves is the Error
 * thrown. Defaults to the error being logged to the console.
 * @returns {Tracker.Computation}
 */Tracker.autorun=function(f,options){if(typeof f!=='function')throw new Error('Tracker.autorun requires a function argument');options=options||{};constructingComputation=true;var c=new Tracker.Computation(f,Tracker.currentComputation,options.onError);if(Tracker.active)Tracker.onInvalidate(function(){c.stop();});return c;};// http://docs.meteor.com/#tracker_nonreactive
//
// Run `f` with no current computation, returning the return value
// of `f`.  Used to turn off reactivity for the duration of `f`,
// so that reactive data sources accessed by `f` will not result in any
// computations being invalidated.
/**
 * @summary Run a function without tracking dependencies.
 * @locus Client
 * @param {Function} func A function to call immediately.
 */Tracker.nonreactive=function(f){var previous=Tracker.currentComputation;setCurrentComputation(null);try{return f();}finally{setCurrentComputation(previous);}};// http://docs.meteor.com/#tracker_oninvalidate
/**
 * @summary Registers a new [`onInvalidate`](#computation_oninvalidate) callback on the current computation (which must exist), to be called immediately when the current computation is invalidated or stopped.
 * @locus Client
 * @param {Function} callback A callback function that will be invoked as `func(c)`, where `c` is the computation on which the callback is registered.
 */Tracker.onInvalidate=function(f){if(!Tracker.active)throw new Error("Tracker.onInvalidate requires a currentComputation");Tracker.currentComputation.onInvalidate(f);};// http://docs.meteor.com/#tracker_afterflush
/**
 * @summary Schedules a function to be called during the next flush, or later in the current flush if one is in progress, after all invalidated computations have been rerun.  The function will be run once and not on subsequent flushes unless `afterFlush` is called again.
 * @locus Client
 * @param {Function} callback A function to call at flush time.
 */Tracker.afterFlush=function(f){afterFlushCallbacks.push(f);requireFlush();};Meteor.Tracker=Tracker;};},{}],29:[function(require,module,exports){(function(process){/* globals require, module */'use strict';/**
   * Module dependencies.
   */var pathtoRegexp=require('path-to-regexp');/**
   * Module exports.
   */module.exports=page;/**
   * Detect click event
   */var clickEvent='undefined'!==typeof document&&document.ontouchstart?'touchstart':'click';/**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */var location='undefined'!==typeof window&&(window.history.location||window.location);/**
   * Perform initial dispatch.
   */var dispatch=true;/**
   * Decode URL components (query string, pathname, hash).
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
   */var decodeURLComponents=true;/**
   * Base path.
   */var base='';/**
   * Running flag.
   */var running;/**
   * HashBang option
   */var hashbang=false;/**
   * Previous context, for capturing
   * page exit events.
   */var prevContext;/**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */function page(path,fn){// <callback>
if('function'===typeof path){return page('*',path);}// route <path> to <callback ...>
if('function'===typeof fn){var route=new Route(/** @type {string} */path);for(var i=1;i<arguments.length;++i){page.callbacks.push(route.middleware(arguments[i]));}// show <path> with [state]
}else if('string'===typeof path){page['string'===typeof fn?'redirect':'show'](path,fn);// start [options]
}else{page.start(path);}}/**
   * Callback functions.
   */page.callbacks=[];page.exits=[];/**
   * Current path being processed
   * @type {string}
   */page.current='';/**
   * Number of pages navigated to.
   * @type {number}
   *
   *     page.len == 0;
   *     page('/login');
   *     page.len == 1;
   */page.len=0;/**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */page.base=function(path){if(0===arguments.length)return base;base=path;};/**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */page.start=function(options){options=options||{};if(running)return;running=true;if(false===options.dispatch)dispatch=false;if(false===options.decodeURLComponents)decodeURLComponents=false;if(false!==options.popstate)window.addEventListener('popstate',onpopstate,false);if(false!==options.click){document.addEventListener(clickEvent,onclick,false);}if(true===options.hashbang)hashbang=true;if(!dispatch)return;var url=hashbang&&~location.hash.indexOf('#!')?location.hash.substr(2)+location.search:location.pathname+location.search+location.hash;page.replace(url,null,true,dispatch);};/**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */page.stop=function(){if(!running)return;page.current='';page.len=0;running=false;document.removeEventListener(clickEvent,onclick,false);window.removeEventListener('popstate',onpopstate,false);};/**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */page.show=function(path,state,dispatch,push){var ctx=new Context(path,state);page.current=ctx.path;if(false!==dispatch)page.dispatch(ctx);if(false!==ctx.handled&&false!==push)ctx.pushState();return ctx;};/**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */page.back=function(path,state){if(page.len>0){// this may need more testing to see if all browsers
// wait for the next tick to go back in history
history.back();page.len--;}else if(path){setTimeout(function(){page.show(path,state);});}else{setTimeout(function(){page.show(base,state);});}};/**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */page.redirect=function(from,to){// Define route from a path to another
if('string'===typeof from&&'string'===typeof to){page(from,function(e){setTimeout(function(){page.replace(/** @type {!string} */to);},0);});}// Wait for the push state and replace it with another
if('string'===typeof from&&'undefined'===typeof to){setTimeout(function(){page.replace(from);},0);}};/**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */page.replace=function(path,state,init,dispatch){var ctx=new Context(path,state);page.current=ctx.path;ctx.init=init;ctx.save();// save before dispatching, which may redirect
if(false!==dispatch)page.dispatch(ctx);return ctx;};/**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */page.dispatch=function(ctx){var prev=prevContext,i=0,j=0;prevContext=ctx;function nextExit(){var fn=page.exits[j++];if(!fn)return nextEnter();fn(prev,nextExit);}function nextEnter(){var fn=page.callbacks[i++];if(ctx.path!==page.current){ctx.handled=false;return;}if(!fn)return unhandled(ctx);fn(ctx,nextEnter);}if(prev){nextExit();}else{nextEnter();}};/**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */function unhandled(ctx){if(ctx.handled)return;var current;if(hashbang){current=base+location.hash.replace('#!','');}else{current=location.pathname+location.search;}if(current===ctx.canonicalPath)return;page.stop();ctx.handled=false;location.href=ctx.canonicalPath;}/**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */page.exit=function(path,fn){if(typeof path==='function'){return page.exit('*',path);}var route=new Route(path);for(var i=1;i<arguments.length;++i){page.exits.push(route.middleware(arguments[i]));}};/**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   */function decodeURLEncodedURIComponent(val){if(typeof val!=='string'){return val;}return decodeURLComponents?decodeURIComponent(val.replace(/\+/g,' ')):val;}/**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */function Context(path,state){if('/'===path[0]&&0!==path.indexOf(base))path=base+(hashbang?'#!':'')+path;var i=path.indexOf('?');this.canonicalPath=path;this.path=path.replace(base,'')||'/';if(hashbang)this.path=this.path.replace('#!','')||'/';this.title=document.title;this.state=state||{};this.state.path=path;this.querystring=~i?decodeURLEncodedURIComponent(path.slice(i+1)):'';this.pathname=decodeURLEncodedURIComponent(~i?path.slice(0,i):path);this.params={};// fragment
this.hash='';if(!hashbang){if(!~this.path.indexOf('#'))return;var parts=this.path.split('#');this.path=parts[0];this.hash=decodeURLEncodedURIComponent(parts[1])||'';this.querystring=this.querystring.split('#')[0];}}/**
   * Expose `Context`.
   */page.Context=Context;/**
   * Push state.
   *
   * @api private
   */Context.prototype.pushState=function(){page.len++;history.pushState(this.state,this.title,hashbang&&this.path!=='/'?'#!'+this.path:this.canonicalPath);};/**
   * Save the context state.
   *
   * @api public
   */Context.prototype.save=function(){history.replaceState(this.state,this.title,hashbang&&this.path!=='/'?'#!'+this.path:this.canonicalPath);};/**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */function Route(path,options){options=options||{};this.path=path==='*'?'(.*)':path;this.method='GET';this.regexp=pathtoRegexp(this.path,this.keys=[],options);}/**
   * Expose `Route`.
   */page.Route=Route;/**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */Route.prototype.middleware=function(fn){var self=this;return function(ctx,next){if(self.match(ctx.path,ctx.params))return fn(ctx,next);next();};};/**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */Route.prototype.match=function(path,params){var keys=this.keys,qsIndex=path.indexOf('?'),pathname=~qsIndex?path.slice(0,qsIndex):path,m=this.regexp.exec(decodeURIComponent(pathname));if(!m)return false;for(var i=1,len=m.length;i<len;++i){var key=keys[i-1];var val=decodeURLEncodedURIComponent(m[i]);if(val!==undefined||!hasOwnProperty.call(params,key.name)){params[key.name]=val;}}return true;};/**
   * Handle "populate" events.
   */var onpopstate=function(){var loaded=false;if('undefined'===typeof window){return;}if(document.readyState==='complete'){loaded=true;}else{window.addEventListener('load',function(){setTimeout(function(){loaded=true;},0);});}return function onpopstate(e){if(!loaded)return;if(e.state){var path=e.state.path;page.replace(path,e.state);}else{page.show(location.pathname+location.hash,undefined,undefined,false);}};}();/**
   * Handle "click" events.
   */function onclick(e){if(1!==which(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;// ensure link
// use shadow dom when available
var el=e.path?e.path[0]:e.target;while(el&&'A'!==el.nodeName){el=el.parentNode;}if(!el||'A'!==el.nodeName)return;// Ignore if tag has
// 1. "download" attribute
// 2. rel="external" attribute
if(el.hasAttribute('download')||el.getAttribute('rel')==='external')return;// ensure non-hash for the same path
var link=el.getAttribute('href');if(!hashbang&&el.pathname===location.pathname&&(el.hash||'#'===link))return;// Check for mailto: in the href
if(link&&link.indexOf('mailto:')>-1)return;// check target
if(el.target)return;// x-origin
if(!sameOrigin(el.href))return;// rebuild path
var path=el.pathname+el.search+(el.hash||'');// strip leading "/[drive letter]:" on NW.js on Windows
if(typeof process!=='undefined'&&path.match(/^\/[a-zA-Z]:\//)){path=path.replace(/^\/[a-zA-Z]:\//,'/');}// same page
var orig=path;if(path.indexOf(base)===0){path=path.substr(base.length);}if(hashbang)path=path.replace('#!','');if(base&&orig===path)return;e.preventDefault();page.show(orig);}/**
   * Event button.
   */function which(e){e=e||window.event;return null===e.which?e.button:e.which;}/**
   * Check if `href` is the same origin.
   */function sameOrigin(href){var origin=location.protocol+'//'+location.hostname;if(location.port)origin+=':'+location.port;return href&&0===href.indexOf(origin);}page.sameOrigin=sameOrigin;}).call(this,require("pBGvAp"));},{"pBGvAp":31,"path-to-regexp":30}],30:[function(require,module,exports){var isarray=require('isarray');/**
 * Expose `pathToRegexp`.
 */module.exports=pathToRegexp;module.exports.parse=parse;module.exports.compile=compile;module.exports.tokensToFunction=tokensToFunction;module.exports.tokensToRegExp=tokensToRegExp;/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */var PATH_REGEXP=new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'].join('|'),'g');/**
 * Parse a string for the raw tokens.
 *
 * @param  {String} str
 * @return {Array}
 */function parse(str){var tokens=[];var key=0;var index=0;var path='';var res;while((res=PATH_REGEXP.exec(str))!=null){var m=res[0];var escaped=res[1];var offset=res.index;path+=str.slice(index,offset);index=offset+m.length;// Ignore already escaped sequences.
if(escaped){path+=escaped[1];continue;}// Push the current path onto the tokens.
if(path){tokens.push(path);path='';}var prefix=res[2];var name=res[3];var capture=res[4];var group=res[5];var suffix=res[6];var asterisk=res[7];var repeat=suffix==='+'||suffix==='*';var optional=suffix==='?'||suffix==='*';var delimiter=prefix||'/';var pattern=capture||group||(asterisk?'.*':'[^'+delimiter+']+?');tokens.push({name:name||key++,prefix:prefix||'',delimiter:delimiter,optional:optional,repeat:repeat,pattern:escapeGroup(pattern)});}// Match any characters still remaining.
if(index<str.length){path+=str.substr(index);}// If the path exists, push it onto the end.
if(path){tokens.push(path);}return tokens;}/**
 * Compile a string to a template function for the path.
 *
 * @param  {String}   str
 * @return {Function}
 */function compile(str){return tokensToFunction(parse(str));}/**
 * Expose a method for transforming tokens into the path function.
 */function tokensToFunction(tokens){// Compile all the tokens into regexps.
var matches=new Array(tokens.length);// Compile all the patterns before compilation.
for(var i=0;i<tokens.length;i++){if(_typeof(tokens[i])==='object'){matches[i]=new RegExp('^'+tokens[i].pattern+'$');}}return function(obj){var path='';var data=obj||{};for(var i=0;i<tokens.length;i++){var token=tokens[i];if(typeof token==='string'){path+=token;continue;}var value=data[token.name];var segment;if(value==null){if(token.optional){continue;}else{throw new TypeError('Expected "'+token.name+'" to be defined');}}if(isarray(value)){if(!token.repeat){throw new TypeError('Expected "'+token.name+'" to not repeat, but received "'+value+'"');}if(value.length===0){if(token.optional){continue;}else{throw new TypeError('Expected "'+token.name+'" to not be empty');}}for(var j=0;j<value.length;j++){segment=encodeURIComponent(value[j]);if(!matches[i].test(segment)){throw new TypeError('Expected all "'+token.name+'" to match "'+token.pattern+'", but received "'+segment+'"');}path+=(j===0?token.prefix:token.delimiter)+segment;}continue;}segment=encodeURIComponent(value);if(!matches[i].test(segment)){throw new TypeError('Expected "'+token.name+'" to match "'+token.pattern+'", but received "'+segment+'"');}path+=token.prefix+segment;}return path;};}/**
 * Escape a regular expression string.
 *
 * @param  {String} str
 * @return {String}
 */function escapeString(str){return str.replace(/([.+*?=^!:${}()[\]|\/])/g,'\\$1');}/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */function escapeGroup(group){return group.replace(/([=!:$\/()])/g,'\\$1');}/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */function attachKeys(re,keys){re.keys=keys;return re;}/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */function flags(options){return options.sensitive?'':'i';}/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */function regexpToRegexp(path,keys){// Use a negative lookahead to match only capturing groups.
var groups=path.source.match(/\((?!\?)/g);if(groups){for(var i=0;i<groups.length;i++){keys.push({name:i,prefix:null,delimiter:null,optional:false,repeat:false,pattern:null});}}return attachKeys(path,keys);}/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */function arrayToRegexp(path,keys,options){var parts=[];for(var i=0;i<path.length;i++){parts.push(pathToRegexp(path[i],keys,options).source);}var regexp=new RegExp('(?:'+parts.join('|')+')',flags(options));return attachKeys(regexp,keys);}/**
 * Create a path regexp from string input.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */function stringToRegexp(path,keys,options){var tokens=parse(path);var re=tokensToRegExp(tokens,options);// Attach keys back to the regexp.
for(var i=0;i<tokens.length;i++){if(typeof tokens[i]!=='string'){keys.push(tokens[i]);}}return attachKeys(re,keys);}/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {Array}  tokens
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */function tokensToRegExp(tokens,options){options=options||{};var strict=options.strict;var end=options.end!==false;var route='';var lastToken=tokens[tokens.length-1];var endsWithSlash=typeof lastToken==='string'&&/\/$/.test(lastToken);// Iterate over the tokens and create our regexp string.
for(var i=0;i<tokens.length;i++){var token=tokens[i];if(typeof token==='string'){route+=escapeString(token);}else{var prefix=escapeString(token.prefix);var capture=token.pattern;if(token.repeat){capture+='(?:'+prefix+capture+')*';}if(token.optional){if(prefix){capture='(?:'+prefix+'('+capture+'))?';}else{capture='('+capture+')?';}}else{capture=prefix+'('+capture+')';}route+=capture;}}// In non-strict mode we allow a slash at the end of match. If the path to
// match already ends with a slash, we remove it for consistency. The slash
// is valid at the end of a path match, not in the middle. This is important
// in non-ending mode, where "/test/" shouldn't match "/test//route".
if(!strict){route=(endsWithSlash?route.slice(0,-2):route)+'(?:\\/(?=$))?';}if(end){route+='$';}else{// In non-ending mode, we need the capturing groups to match as much as
// possible by using a positive lookahead to the end or next path segment.
route+=strict&&endsWithSlash?'':'(?=\\/|$)';}return new RegExp('^'+route,flags(options));}/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */function pathToRegexp(path,keys,options){keys=keys||[];if(!isarray(keys)){options=keys;keys=[];}else if(!options){options={};}if(path instanceof RegExp){return regexpToRegexp(path,keys,options);}if(isarray(path)){return arrayToRegexp(path,keys,options);}return stringToRegexp(path,keys,options);}},{"isarray":6}],31:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};process.nextTick=function(){var canSetImmediate=typeof window!=='undefined'&&window.setImmediate;var canPost=typeof window!=='undefined'&&window.postMessage&&window.addEventListener;if(canSetImmediate){return function(f){return window.setImmediate(f);};}if(canPost){var queue=[];window.addEventListener('message',function(ev){var source=ev.source;if((source===window||source===null)&&ev.data==='process-tick'){ev.stopPropagation();if(queue.length>0){var fn=queue.shift();fn();}}},true);return function nextTick(fn){queue.push(fn);window.postMessage('process-tick','*');};}return function nextTick(fn){setTimeout(fn,0);};}();process.title='browser';process.browser=true;process.env={};process.argv=[];function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};// TODO(shtylman)
process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};},{}],32:[function(require,module,exports){//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){// Baseline setup
// --------------
// Establish the root object, `window` in the browser, or `exports` on the server.
var root=this;// Save the previous value of the `_` variable.
var previousUnderscore=root._;// Save bytes in the minified (but not gzipped) version:
var ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;// Create quick reference variables for speed access to core prototypes.
var push=ArrayProto.push,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind,nativeCreate=Object.create;// Naked function reference for surrogate-prototype-swapping.
var Ctor=function Ctor(){};// Create a safe reference to the Underscore object for use below.
var _=function _(obj){if(obj instanceof _)return obj;if(!(this instanceof _))return new _(obj);this._wrapped=obj;};// Export the Underscore object for **Node.js**, with
// backwards-compatibility for the old `require()` API. If we're in
// the browser, add `_` as a global object.
if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=_;}exports._=_;}else{root._=_;}// Current version.
_.VERSION='1.8.3';// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var optimizeCb=function optimizeCb(func,context,argCount){if(context===void 0)return func;switch(argCount==null?3:argCount){case 1:return function(value){return func.call(context,value);};case 2:return function(value,other){return func.call(context,value,other);};case 3:return function(value,index,collection){return func.call(context,value,index,collection);};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection);};}return function(){return func.apply(context,arguments);};};// A mostly-internal function to generate callbacks that can be applied
// to each element in a collection, returning the desired result — either
// identity, an arbitrary callback, a property matcher, or a property accessor.
var cb=function cb(value,context,argCount){if(value==null)return _.identity;if(_.isFunction(value))return optimizeCb(value,context,argCount);if(_.isObject(value))return _.matcher(value);return _.property(value);};_.iteratee=function(value,context){return cb(value,context,Infinity);};// An internal function for creating assigner functions.
var createAssigner=function createAssigner(keysFunc,undefinedOnly){return function(obj){var length=arguments.length;if(length<2||obj==null)return obj;for(var index=1;index<length;index++){var source=arguments[index],keys=keysFunc(source),l=keys.length;for(var i=0;i<l;i++){var key=keys[i];if(!undefinedOnly||obj[key]===void 0)obj[key]=source[key];}}return obj;};};// An internal function for creating a new object that inherits from another.
var baseCreate=function baseCreate(prototype){if(!_.isObject(prototype))return{};if(nativeCreate)return nativeCreate(prototype);Ctor.prototype=prototype;var result=new Ctor();Ctor.prototype=null;return result;};var property=function property(key){return function(obj){return obj==null?void 0:obj[key];};};// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
var MAX_ARRAY_INDEX=Math.pow(2,53)-1;var getLength=property('length');var isArrayLike=function isArrayLike(collection){var length=getLength(collection);return typeof length=='number'&&length>=0&&length<=MAX_ARRAY_INDEX;};// Collection Functions
// --------------------
// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
_.each=_.forEach=function(obj,iteratee,context){iteratee=optimizeCb(iteratee,context);var i,length;if(isArrayLike(obj)){for(i=0,length=obj.length;i<length;i++){iteratee(obj[i],i,obj);}}else{var keys=_.keys(obj);for(i=0,length=keys.length;i<length;i++){iteratee(obj[keys[i]],keys[i],obj);}}return obj;};// Return the results of applying the iteratee to each element.
_.map=_.collect=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,results=Array(length);for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;results[index]=iteratee(obj[currentKey],currentKey,obj);}return results;};// Create a reducing function iterating left or right.
function createReduce(dir){// Optimized iterator function as using arguments.length
// in the main function will deoptimize the, see #1991.
function iterator(obj,iteratee,memo,keys,index,length){for(;index>=0&&index<length;index+=dir){var currentKey=keys?keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj);}return memo;}return function(obj,iteratee,memo,context){iteratee=optimizeCb(iteratee,context,4);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,index=dir>0?0:length-1;// Determine the initial value if none is provided.
if(arguments.length<3){memo=obj[keys?keys[index]:index];index+=dir;}return iterator(obj,iteratee,memo,keys,index,length);};}// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
_.reduce=_.foldl=_.inject=createReduce(1);// The right-associative version of reduce, also known as `foldr`.
_.reduceRight=_.foldr=createReduce(-1);// Return the first value which passes a truth test. Aliased as `detect`.
_.find=_.detect=function(obj,predicate,context){var key;if(isArrayLike(obj)){key=_.findIndex(obj,predicate,context);}else{key=_.findKey(obj,predicate,context);}if(key!==void 0&&key!==-1)return obj[key];};// Return all the elements that pass a truth test.
// Aliased as `select`.
_.filter=_.select=function(obj,predicate,context){var results=[];predicate=cb(predicate,context);_.each(obj,function(value,index,list){if(predicate(value,index,list))results.push(value);});return results;};// Return all the elements for which a truth test fails.
_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(cb(predicate)),context);};// Determine whether all of the elements match a truth test.
// Aliased as `all`.
_.every=_.all=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(!predicate(obj[currentKey],currentKey,obj))return false;}return true;};// Determine if at least one element in the object matches a truth test.
// Aliased as `any`.
_.some=_.any=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(predicate(obj[currentKey],currentKey,obj))return true;}return false;};// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
_.contains=_.includes=_.include=function(obj,item,fromIndex,guard){if(!isArrayLike(obj))obj=_.values(obj);if(typeof fromIndex!='number'||guard)fromIndex=0;return _.indexOf(obj,item,fromIndex)>=0;};// Invoke a method (with arguments) on every item in a collection.
_.invoke=function(obj,method){var args=slice.call(arguments,2);var isFunc=_.isFunction(method);return _.map(obj,function(value){var func=isFunc?method:value[method];return func==null?func:func.apply(value,args);});};// Convenience version of a common use case of `map`: fetching a property.
_.pluck=function(obj,key){return _.map(obj,_.property(key));};// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
_.where=function(obj,attrs){return _.filter(obj,_.matcher(attrs));};// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
_.findWhere=function(obj,attrs){return _.find(obj,_.matcher(attrs));};// Return the maximum element (or element-based computation).
_.max=function(obj,iteratee,context){var result=-Infinity,lastComputed=-Infinity,value,computed;if(iteratee==null&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value>result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed>lastComputed||computed===-Infinity&&result===-Infinity){result=value;lastComputed=computed;}});}return result;};// Return the minimum element (or element-based computation).
_.min=function(obj,iteratee,context){var result=Infinity,lastComputed=Infinity,value,computed;if(iteratee==null&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value<result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed<lastComputed||computed===Infinity&&result===Infinity){result=value;lastComputed=computed;}});}return result;};// Shuffle a collection, using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
_.shuffle=function(obj){var set=isArrayLike(obj)?obj:_.values(obj);var length=set.length;var shuffled=Array(length);for(var index=0,rand;index<length;index++){rand=_.random(0,index);if(rand!==index)shuffled[index]=shuffled[rand];shuffled[rand]=set[index];}return shuffled;};// Sample **n** random values from a collection.
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
_.sample=function(obj,n,guard){if(n==null||guard){if(!isArrayLike(obj))obj=_.values(obj);return obj[_.random(obj.length-1)];}return _.shuffle(obj).slice(0,Math.max(0,n));};// Sort the object's values by a criterion produced by an iteratee.
_.sortBy=function(obj,iteratee,context){iteratee=cb(iteratee,context);return _.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iteratee(value,index,list)};}).sort(function(left,right){var a=left.criteria;var b=right.criteria;if(a!==b){if(a>b||a===void 0)return 1;if(a<b||b===void 0)return-1;}return left.index-right.index;}),'value');};// An internal function used for aggregate "group by" operations.
var group=function group(behavior){return function(obj,iteratee,context){var result={};iteratee=cb(iteratee,context);_.each(obj,function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key);});return result;};};// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
_.groupBy=group(function(result,value,key){if(_.has(result,key))result[key].push(value);else result[key]=[value];});// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
_.indexBy=group(function(result,value,key){result[key]=value;});// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
_.countBy=group(function(result,value,key){if(_.has(result,key))result[key]++;else result[key]=1;});// Safely create a real, live array from anything iterable.
_.toArray=function(obj){if(!obj)return[];if(_.isArray(obj))return slice.call(obj);if(isArrayLike(obj))return _.map(obj,_.identity);return _.values(obj);};// Return the number of elements in an object.
_.size=function(obj){if(obj==null)return 0;return isArrayLike(obj)?obj.length:_.keys(obj).length;};// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
_.partition=function(obj,predicate,context){predicate=cb(predicate,context);var pass=[],fail=[];_.each(obj,function(value,key,obj){(predicate(value,key,obj)?pass:fail).push(value);});return[pass,fail];};// Array Functions
// ---------------
// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
_.first=_.head=_.take=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[0];return _.initial(array,array.length-n);};// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(n==null||guard?1:n)));};// Get the last element of an array. Passing **n** will return the last N
// values in the array.
_.last=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[array.length-1];return _.rest(array,Math.max(0,array.length-n));};// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array.
_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,n==null||guard?1:n);};// Trim out all falsy values from an array.
_.compact=function(array){return _.filter(array,_.identity);};// Internal implementation of a recursive `flatten` function.
var flatten=function flatten(input,shallow,strict,startIndex){var output=[],idx=0;for(var i=startIndex||0,length=getLength(input);i<length;i++){var value=input[i];if(isArrayLike(value)&&(_.isArray(value)||_.isArguments(value))){//flatten current level of array or arguments object
if(!shallow)value=flatten(value,shallow,strict);var j=0,len=value.length;output.length+=len;while(j<len){output[idx++]=value[j++];}}else if(!strict){output[idx++]=value;}}return output;};// Flatten out an array, either recursively (by default), or just one level.
_.flatten=function(array,shallow){return flatten(array,shallow,false);};// Return a version of the array that does not contain the specified value(s).
_.without=function(array){return _.difference(array,slice.call(arguments,1));};// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// Aliased as `unique`.
_.uniq=_.unique=function(array,isSorted,iteratee,context){if(!_.isBoolean(isSorted)){context=iteratee;iteratee=isSorted;isSorted=false;}if(iteratee!=null)iteratee=cb(iteratee,context);var result=[];var seen=[];for(var i=0,length=getLength(array);i<length;i++){var value=array[i],computed=iteratee?iteratee(value,i,array):value;if(isSorted){if(!i||seen!==computed)result.push(value);seen=computed;}else if(iteratee){if(!_.contains(seen,computed)){seen.push(computed);result.push(value);}}else if(!_.contains(result,value)){result.push(value);}}return result;};// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
_.union=function(){return _.uniq(flatten(arguments,true,true));};// Produce an array that contains every item shared between all the
// passed-in arrays.
_.intersection=function(array){var result=[];var argsLength=arguments.length;for(var i=0,length=getLength(array);i<length;i++){var item=array[i];if(_.contains(result,item))continue;for(var j=1;j<argsLength;j++){if(!_.contains(arguments[j],item))break;}if(j===argsLength)result.push(item);}return result;};// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference=function(array){var rest=flatten(arguments,true,true,1);return _.filter(array,function(value){return!_.contains(rest,value);});};// Zip together multiple lists into a single array -- elements that share
// an index go together.
_.zip=function(){return _.unzip(arguments);};// Complement of _.zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices
_.unzip=function(array){var length=array&&_.max(array,getLength).length||0;var result=Array(length);for(var index=0;index<length;index++){result[index]=_.pluck(array,index);}return result;};// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values.
_.object=function(list,values){var result={};for(var i=0,length=getLength(list);i<length;i++){if(values){result[list[i]]=values[i];}else{result[list[i][0]]=list[i][1];}}return result;};// Generator function to create the findIndex and findLastIndex functions
function createPredicateIndexFinder(dir){return function(array,predicate,context){predicate=cb(predicate,context);var length=getLength(array);var index=dir>0?0:length-1;for(;index>=0&&index<length;index+=dir){if(predicate(array[index],index,array))return index;}return-1;};}// Returns the first index on an array-like that passes a predicate test
_.findIndex=createPredicateIndexFinder(1);_.findLastIndex=createPredicateIndexFinder(-1);// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
_.sortedIndex=function(array,obj,iteratee,context){iteratee=cb(iteratee,context,1);var value=iteratee(obj);var low=0,high=getLength(array);while(low<high){var mid=Math.floor((low+high)/2);if(iteratee(array[mid])<value)low=mid+1;else high=mid;}return low;};// Generator function to create the indexOf and lastIndexOf functions
function createIndexFinder(dir,predicateFind,sortedIndex){return function(array,item,idx){var i=0,length=getLength(array);if(typeof idx=='number'){if(dir>0){i=idx>=0?idx:Math.max(idx+length,i);}else{length=idx>=0?Math.min(idx+1,length):idx+length+1;}}else if(sortedIndex&&idx&&length){idx=sortedIndex(array,item);return array[idx]===item?idx:-1;}if(item!==item){idx=predicateFind(slice.call(array,i,length),_.isNaN);return idx>=0?idx+i:-1;}for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir){if(array[idx]===item)return idx;}return-1;};}// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
_.indexOf=createIndexFinder(1,_.findIndex,_.sortedIndex);_.lastIndexOf=createIndexFinder(-1,_.findLastIndex);// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
_.range=function(start,stop,step){if(stop==null){stop=start||0;start=0;}step=step||1;var length=Math.max(Math.ceil((stop-start)/step),0);var range=Array(length);for(var idx=0;idx<length;idx++,start+=step){range[idx]=start;}return range;};// Function (ahem) Functions
// ------------------
// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments
var executeBound=function executeBound(sourceFunc,boundFunc,context,callingContext,args){if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);var self=baseCreate(sourceFunc.prototype);var result=sourceFunc.apply(self,args);if(_.isObject(result))return result;return self;};// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
_.bind=function(func,context){if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError('Bind must be called on a function');var args=slice.call(arguments,2);var bound=function bound(){return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));};return bound;};// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder, allowing any combination of arguments to be pre-filled.
_.partial=function(func){var boundArgs=slice.call(arguments,1);var bound=function bound(){var position=0,length=boundArgs.length;var args=Array(length);for(var i=0;i<length;i++){args[i]=boundArgs[i]===_?arguments[position++]:boundArgs[i];}while(position<arguments.length){args.push(arguments[position++]);}return executeBound(func,bound,this,this,args);};return bound;};// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
_.bindAll=function(obj){var i,length=arguments.length,key;if(length<=1)throw new Error('bindAll must be passed function names');for(i=1;i<length;i++){key=arguments[i];obj[key]=_.bind(obj[key],obj);}return obj;};// Memoize an expensive function by storing its results.
_.memoize=function(func,hasher){var memoize=function memoize(key){var cache=memoize.cache;var address=''+(hasher?hasher.apply(this,arguments):key);if(!_.has(cache,address))cache[address]=func.apply(this,arguments);return cache[address];};memoize.cache={};return memoize;};// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(null,args);},wait);};// Defers a function, scheduling it to run after the current call stack has
// cleared.
_.defer=_.partial(_.delay,_,1);// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle=function(func,wait,options){var context,args,result;var timeout=null;var previous=0;if(!options)options={};var later=function later(){previous=options.leading===false?0:_.now();timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;};return function(){var now=_.now();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){if(timeout){clearTimeout(timeout);timeout=null;}previous=now;result=func.apply(context,args);if(!timeout)context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}return result;};};// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result;var later=function later(){var last=_.now()-timestamp;if(last<wait&&last>=0){timeout=setTimeout(later,wait-last);}else{timeout=null;if(!immediate){result=func.apply(context,args);if(!timeout)context=args=null;}}};return function(){context=this;args=arguments;timestamp=_.now();var callNow=immediate&&!timeout;if(!timeout)timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);context=args=null;}return result;};};// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
_.wrap=function(func,wrapper){return _.partial(wrapper,func);};// Returns a negated version of the passed-in predicate.
_.negate=function(predicate){return function(){return!predicate.apply(this,arguments);};};// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
_.compose=function(){var args=arguments;var start=args.length-1;return function(){var i=start;var result=args[start].apply(this,arguments);while(i--){result=args[i].call(this,result);}return result;};};// Returns a function that will only be executed on and after the Nth call.
_.after=function(times,func){return function(){if(--times<1){return func.apply(this,arguments);}};};// Returns a function that will only be executed up to (but not including) the Nth call.
_.before=function(times,func){var memo;return function(){if(--times>0){memo=func.apply(this,arguments);}if(times<=1)func=null;return memo;};};// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
_.once=_.partial(_.before,2);// Object Functions
// ----------------
// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug=!{toString:null}.propertyIsEnumerable('toString');var nonEnumerableProps=['valueOf','isPrototypeOf','toString','propertyIsEnumerable','hasOwnProperty','toLocaleString'];function collectNonEnumProps(obj,keys){var nonEnumIdx=nonEnumerableProps.length;var constructor=obj.constructor;var proto=_.isFunction(constructor)&&constructor.prototype||ObjProto;// Constructor is a special case.
var prop='constructor';if(_.has(obj,prop)&&!_.contains(keys,prop))keys.push(prop);while(nonEnumIdx--){prop=nonEnumerableProps[nonEnumIdx];if(prop in obj&&obj[prop]!==proto[prop]&&!_.contains(keys,prop)){keys.push(prop);}}}// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
_.keys=function(obj){if(!_.isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj){if(_.has(obj,key))keys.push(key);}// Ahem, IE < 9.
if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};// Retrieve all the property names of an object.
_.allKeys=function(obj){if(!_.isObject(obj))return[];var keys=[];for(var key in obj){keys.push(key);}// Ahem, IE < 9.
if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};// Retrieve the values of an object's properties.
_.values=function(obj){var keys=_.keys(obj);var length=keys.length;var values=Array(length);for(var i=0;i<length;i++){values[i]=obj[keys[i]];}return values;};// Returns the results of applying the iteratee to each element of the object
// In contrast to _.map it returns an object
_.mapObject=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=_.keys(obj),length=keys.length,results={},currentKey;for(var index=0;index<length;index++){currentKey=keys[index];results[currentKey]=iteratee(obj[currentKey],currentKey,obj);}return results;};// Convert an object into a list of `[key, value]` pairs.
_.pairs=function(obj){var keys=_.keys(obj);var length=keys.length;var pairs=Array(length);for(var i=0;i<length;i++){pairs[i]=[keys[i],obj[keys[i]]];}return pairs;};// Invert the keys and values of an object. The values must be serializable.
_.invert=function(obj){var result={};var keys=_.keys(obj);for(var i=0,length=keys.length;i<length;i++){result[obj[keys[i]]]=keys[i];}return result;};// Return a sorted list of the function names available on the object.
// Aliased as `methods`
_.functions=_.methods=function(obj){var names=[];for(var key in obj){if(_.isFunction(obj[key]))names.push(key);}return names.sort();};// Extend a given object with all the properties in passed-in object(s).
_.extend=createAssigner(_.allKeys);// Assigns a given object with all the own properties in the passed-in object(s)
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
_.extendOwn=_.assign=createAssigner(_.keys);// Returns the first key on an object that passes a predicate test
_.findKey=function(obj,predicate,context){predicate=cb(predicate,context);var keys=_.keys(obj),key;for(var i=0,length=keys.length;i<length;i++){key=keys[i];if(predicate(obj[key],key,obj))return key;}};// Return a copy of the object only containing the whitelisted properties.
_.pick=function(object,oiteratee,context){var result={},obj=object,iteratee,keys;if(obj==null)return result;if(_.isFunction(oiteratee)){keys=_.allKeys(obj);iteratee=optimizeCb(oiteratee,context);}else{keys=flatten(arguments,false,false,1);iteratee=function iteratee(value,key,obj){return key in obj;};obj=Object(obj);}for(var i=0,length=keys.length;i<length;i++){var key=keys[i];var value=obj[key];if(iteratee(value,key,obj))result[key]=value;}return result;};// Return a copy of the object without the blacklisted properties.
_.omit=function(obj,iteratee,context){if(_.isFunction(iteratee)){iteratee=_.negate(iteratee);}else{var keys=_.map(flatten(arguments,false,false,1),String);iteratee=function iteratee(value,key){return!_.contains(keys,key);};}return _.pick(obj,iteratee,context);};// Fill in a given object with default properties.
_.defaults=createAssigner(_.allKeys,true);// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
_.create=function(prototype,props){var result=baseCreate(prototype);if(props)_.extendOwn(result,props);return result;};// Create a (shallow-cloned) duplicate of an object.
_.clone=function(obj){if(!_.isObject(obj))return obj;return _.isArray(obj)?obj.slice():_.extend({},obj);};// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
_.tap=function(obj,interceptor){interceptor(obj);return obj;};// Returns whether an object has a given set of `key:value` pairs.
_.isMatch=function(object,attrs){var keys=_.keys(attrs),length=keys.length;if(object==null)return!length;var obj=Object(object);for(var i=0;i<length;i++){var key=keys[i];if(attrs[key]!==obj[key]||!(key in obj))return false;}return true;};// Internal recursive comparison function for `isEqual`.
var eq=function eq(a,b,aStack,bStack){// Identical objects are equal. `0 === -0`, but they aren't identical.
// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
if(a===b)return a!==0||1/a===1/b;// A strict comparison is necessary because `null == undefined`.
if(a==null||b==null)return a===b;// Unwrap any wrapped objects.
if(a instanceof _)a=a._wrapped;if(b instanceof _)b=b._wrapped;// Compare `[[Class]]` names.
var className=toString.call(a);if(className!==toString.call(b))return false;switch(className){// Strings, numbers, regular expressions, dates, and booleans are compared by value.
case'[object RegExp]':// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
case'[object String]':// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
// equivalent to `new String("5")`.
return''+a===''+b;case'[object Number]':// `NaN`s are equivalent, but non-reflexive.
// Object(NaN) is equivalent to NaN
if(+a!==+a)return+b!==+b;// An `egal` comparison is performed for other numeric values.
return+a===0?1/+a===1/b:+a===+b;case'[object Date]':case'[object Boolean]':// Coerce dates and booleans to numeric primitive values. Dates are compared by their
// millisecond representations. Note that invalid dates with millisecond representations
// of `NaN` are not equivalent.
return+a===+b;}var areArrays=className==='[object Array]';if(!areArrays){if((typeof a==="undefined"?"undefined":_typeof(a))!='object'||(typeof b==="undefined"?"undefined":_typeof(b))!='object')return false;// Objects with different constructors are not equivalent, but `Object`s or `Array`s
// from different frames are.
var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor)&&'constructor'in a&&'constructor'in b){return false;}}// Assume equality for cyclic structures. The algorithm for detecting cyclic
// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
// Initializing stack of traversed objects.
// It's done here since we only need them for objects and arrays comparison.
aStack=aStack||[];bStack=bStack||[];var length=aStack.length;while(length--){// Linear search. Performance is inversely proportional to the number of
// unique nested structures.
if(aStack[length]===a)return bStack[length]===b;}// Add the first object to the stack of traversed objects.
aStack.push(a);bStack.push(b);// Recursively compare objects and arrays.
if(areArrays){// Compare array lengths to determine if a deep comparison is necessary.
length=a.length;if(length!==b.length)return false;// Deep compare the contents, ignoring non-numeric properties.
while(length--){if(!eq(a[length],b[length],aStack,bStack))return false;}}else{// Deep compare objects.
var keys=_.keys(a),key;length=keys.length;// Ensure that both objects contain the same number of properties before comparing deep equality.
if(_.keys(b).length!==length)return false;while(length--){// Deep compare each member
key=keys[length];if(!(_.has(b,key)&&eq(a[key],b[key],aStack,bStack)))return false;}}// Remove the first object from the stack of traversed objects.
aStack.pop();bStack.pop();return true;};// Perform a deep comparison to check if two objects are equal.
_.isEqual=function(a,b){return eq(a,b);};// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
_.isEmpty=function(obj){if(obj==null)return true;if(isArrayLike(obj)&&(_.isArray(obj)||_.isString(obj)||_.isArguments(obj)))return obj.length===0;return _.keys(obj).length===0;};// Is a given value a DOM element?
_.isElement=function(obj){return!!(obj&&obj.nodeType===1);};// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
_.isArray=nativeIsArray||function(obj){return toString.call(obj)==='[object Array]';};// Is a given variable an object?
_.isObject=function(obj){var type=typeof obj==="undefined"?"undefined":_typeof(obj);return type==='function'||type==='object'&&!!obj;};// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
_.each(['Arguments','Function','String','Number','Date','RegExp','Error'],function(name){_['is'+name]=function(obj){return toString.call(obj)==='[object '+name+']';};});// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
if(!_.isArguments(arguments)){_.isArguments=function(obj){return _.has(obj,'callee');};}// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), and in Safari 8 (#1929).
if(typeof /./!='function'&&(typeof Int8Array==="undefined"?"undefined":_typeof(Int8Array))!='object'){_.isFunction=function(obj){return typeof obj=='function'||false;};}// Is a given object a finite number?
_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj));};// Is the given value `NaN`? (NaN is the only number which does not equal itself).
_.isNaN=function(obj){return _.isNumber(obj)&&obj!==+obj;};// Is a given value a boolean?
_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)==='[object Boolean]';};// Is a given value equal to null?
_.isNull=function(obj){return obj===null;};// Is a given variable undefined?
_.isUndefined=function(obj){return obj===void 0;};// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
_.has=function(obj,key){return obj!=null&&hasOwnProperty.call(obj,key);};// Utility Functions
// -----------------
// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
_.noConflict=function(){root._=previousUnderscore;return this;};// Keep the identity function around for default iteratees.
_.identity=function(value){return value;};// Predicate-generating functions. Often useful outside of Underscore.
_.constant=function(value){return function(){return value;};};_.noop=function(){};_.property=property;// Generates a function for a given object that returns a given property.
_.propertyOf=function(obj){return obj==null?function(){}:function(key){return obj[key];};};// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
_.matcher=_.matches=function(attrs){attrs=_.extendOwn({},attrs);return function(obj){return _.isMatch(obj,attrs);};};// Run a function **n** times.
_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=optimizeCb(iteratee,context,1);for(var i=0;i<n;i++){accum[i]=iteratee(i);}return accum;};// Return a random integer between min and max (inclusive).
_.random=function(min,max){if(max==null){max=min;min=0;}return min+Math.floor(Math.random()*(max-min+1));};// A (possibly faster) way to get the current timestamp as an integer.
_.now=Date.now||function(){return new Date().getTime();};// List of HTML entities for escaping.
var escapeMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;'};var unescapeMap=_.invert(escapeMap);// Functions for escaping and unescaping strings to/from HTML interpolation.
var createEscaper=function createEscaper(map){var escaper=function escaper(match){return map[match];};// Regexes for identifying a key that needs to be escaped
var source='(?:'+_.keys(map).join('|')+')';var testRegexp=RegExp(source);var replaceRegexp=RegExp(source,'g');return function(string){string=string==null?'':''+string;return testRegexp.test(string)?string.replace(replaceRegexp,escaper):string;};};_.escape=createEscaper(escapeMap);_.unescape=createEscaper(unescapeMap);// If the value of the named `property` is a function then invoke it with the
// `object` as context; otherwise, return it.
_.result=function(object,property,fallback){var value=object==null?void 0:object[property];if(value===void 0){value=fallback;}return _.isFunction(value)?value.call(object):value;};// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+'';return prefix?prefix+id:id;};// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch=/(.)^/;// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes={"'":"'",'\\':'\\','\r':'r','\n':'n',"\u2028":'u2028',"\u2029":'u2029'};var escaper=/\\|'|\r|\n|\u2028|\u2029/g;var escapeChar=function escapeChar(match){return'\\'+escapes[match];};// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
_.template=function(text,settings,oldSettings){if(!settings&&oldSettings)settings=oldSettings;settings=_.defaults({},settings,_.templateSettings);// Combine delimiters into one regular expression via alternation.
var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join('|')+'|$','g');// Compile the template source, escaping string literals appropriately.
var index=0;var source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){source+=text.slice(index,offset).replace(escaper,escapeChar);index=offset+match.length;if(escape){source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'";}else if(interpolate){source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";}else if(evaluate){source+="';\n"+evaluate+"\n__p+='";}// Adobe VMs need the match returned to produce the correct offest.
return match;});source+="';\n";// If a variable is not specified, place data values in local scope.
if(!settings.variable)source='with(obj||{}){\n'+source+'}\n';source="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+source+'return __p;\n';try{var render=new Function(settings.variable||'obj','_',source);}catch(e){e.source=source;throw e;}var template=function template(data){return render.call(this,data,_);};// Provide the compiled source as a convenience for precompilation.
var argument=settings.variable||'obj';template.source='function('+argument+'){\n'+source+'}';return template;};// Add a "chain" function. Start chaining a wrapped Underscore object.
_.chain=function(obj){var instance=_(obj);instance._chain=true;return instance;};// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.
// Helper function to continue chaining intermediate results.
var result=function result(instance,obj){return instance._chain?_(obj).chain():obj;};// Add your own custom functions to the Underscore object.
_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];push.apply(args,arguments);return result(this,func.apply(_,args));};});};// Add all of the Underscore functions to the wrapper object.
_.mixin(_);// Add all mutator Array functions to the wrapper.
_.each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;method.apply(obj,arguments);if((name==='shift'||name==='splice')&&obj.length===0)delete obj[0];return result(this,obj);};});// Add all accessor Array functions to the wrapper.
_.each(['concat','join','slice'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result(this,method.apply(this._wrapped,arguments));};});// Extracts the result from a wrapped and chained object.
_.prototype.value=function(){return this._wrapped;};// Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf=_.prototype.toJSON=_.prototype.value;_.prototype.toString=function(){return''+this._wrapped;};// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
if(typeof define==='function'&&define.amd){define('underscore',[],function(){return _;});}}).call(this);},{}]},{},[1]);