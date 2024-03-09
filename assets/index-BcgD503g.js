var EI=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var c8=EI((xt,Ct)=>{function SI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cw={exports:{}},kc={},Tw={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),xI=Symbol.for("react.portal"),CI=Symbol.for("react.fragment"),TI=Symbol.for("react.strict_mode"),II=Symbol.for("react.profiler"),bI=Symbol.for("react.provider"),kI=Symbol.for("react.context"),PI=Symbol.for("react.forward_ref"),RI=Symbol.for("react.suspense"),OI=Symbol.for("react.memo"),NI=Symbol.for("react.lazy"),Ry=Symbol.iterator;function AI(t){return t===null||typeof t!="object"?null:(t=Ry&&t[Ry]||t["@@iterator"],typeof t=="function"?t:null)}var Iw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bw=Object.assign,kw={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=kw,this.updater=n||Iw}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pw(){}Pw.prototype=Gs.prototype;function Jp(t,e,n){this.props=t,this.context=e,this.refs=kw,this.updater=n||Iw}var Zp=Jp.prototype=new Pw;Zp.constructor=Jp;bw(Zp,Gs.prototype);Zp.isPureReactComponent=!0;var Oy=Array.isArray,Rw=Object.prototype.hasOwnProperty,em={current:null},Ow={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rw.call(e,r)&&!Ow.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ja,type:t,key:s,ref:o,props:i,_owner:em.current}}function DI(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tm(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function LI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ny=/\/+/g;function Bd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LI(""+t.key):e.toString(36)}function Fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case xI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bd(o,0):r,Oy(i)?(n="",t!=null&&(n=t.replace(Ny,"$&/")+"/"),Fl(i,e,n,"",function(u){return u})):i!=null&&(tm(i)&&(i=DI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ny,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Oy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Bd(s,a);o+=Fl(s,e,n,l,i)}else if(l=AI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Bd(s,a++),o+=Fl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function al(t,e,n){if(t==null)return t;var r=[],i=0;return Fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function MI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},Ul={transition:null},$I={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:em};K.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!tm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Gs;K.Fragment=CI;K.Profiler=II;K.PureComponent=Jp;K.StrictMode=TI;K.Suspense=RI;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$I;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=em.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rw.call(e,l)&&!Ow.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ja,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:kI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bI,_context:t},t.Consumer=t};K.createElement=Nw;K.createFactory=function(t){var e=Nw.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:PI,render:t}};K.isValidElement=tm;K.lazy=function(t){return{$$typeof:NI,_payload:{_status:-1,_result:t},_init:MI}};K.memo=function(t,e){return{$$typeof:OI,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return it.current.useCallback(t,e)};K.useContext=function(t){return it.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return it.current.useDeferredValue(t)};K.useEffect=function(t,e){return it.current.useEffect(t,e)};K.useId=function(){return it.current.useId()};K.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return it.current.useMemo(t,e)};K.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};K.useRef=function(t){return it.current.useRef(t)};K.useState=function(t){return it.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return it.current.useTransition()};K.version="18.2.0";Tw.exports=K;var E=Tw.exports;const Ce=bc(E),eh=SI({__proto__:null,default:Ce},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jI=E,FI=Symbol.for("react.element"),UI=Symbol.for("react.fragment"),zI=Object.prototype.hasOwnProperty,BI=jI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,WI={key:!0,ref:!0,__self:!0,__source:!0};function Aw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zI.call(e,r)&&!WI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:FI,type:t,key:s,ref:o,props:i,_owner:BI.current}}kc.Fragment=UI;kc.jsx=Aw;kc.jsxs=Aw;Cw.exports=kc;var h=Cw.exports,th={},Dw={exports:{}},Rt={},Lw={exports:{}},Mw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var U=O.length;O.push($);e:for(;0<U;){var X=U-1>>>1,Y=O[X];if(0<i(Y,$))O[X]=$,O[U]=Y,U=X;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var $=O[0],U=O.pop();if(U!==$){O[0]=U;e:for(var X=0,Y=O.length,nn=Y>>>1;X<nn;){var Ze=2*(X+1)-1,et=O[Ze],He=Ze+1,yt=O[He];if(0>i(et,U))He<Y&&0>i(yt,et)?(O[X]=yt,O[He]=U,X=He):(O[X]=et,O[Ze]=U,X=Ze);else if(He<Y&&0>i(yt,U))O[X]=yt,O[He]=U,X=He;else break e}}return $}function i(O,$){var U=O.sortIndex-$.sortIndex;return U!==0?U:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,v=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=O)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function w(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,qr(I);else{var $=n(u);$!==null&&_n(w,$.startTime-O)}}function I(O,$){v=!1,_&&(_=!1,g(P),P=-1),m=!0;var U=f;try{for(y($),d=n(l);d!==null&&(!(d.expirationTime>$)||O&&!B());){var X=d.callback;if(typeof X=="function"){d.callback=null,f=d.priorityLevel;var Y=X(d.expirationTime<=$);$=t.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&r(l),y($)}else r(l);d=n(l)}if(d!==null)var nn=!0;else{var Ze=n(u);Ze!==null&&_n(w,Ze.startTime-$),nn=!1}return nn}finally{d=null,f=U,m=!1}}var x=!1,C=null,P=-1,L=5,M=-1;function B(){return!(t.unstable_now()-M<L)}function ot(){if(C!==null){var O=t.unstable_now();M=O;var $=!0;try{$=C(!0,O)}finally{$?oe():(x=!1,C=null)}}else x=!1}var oe;if(typeof p=="function")oe=function(){p(ot)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,vn=gt.port2;gt.port1.onmessage=ot,oe=function(){vn.postMessage(null)}}else oe=function(){S(ot,0)};function qr(O){C=O,x||(x=!0,oe())}function _n(O,$){P=S(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,qr(I))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var U=f;f=$;try{return O()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return $()}finally{f=U}},t.unstable_scheduleCallback=function(O,$,U){var X=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?X+U:X):U=X,O){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=U+Y,O={id:c++,callback:$,priorityLevel:O,startTime:U,expirationTime:Y,sortIndex:-1},U>X?(O.sortIndex=U,e(u,O),n(l)===null&&O===n(u)&&(_?(g(P),P=-1):_=!0,_n(w,U-X))):(O.sortIndex=Y,e(l,O),v||m||(v=!0,qr(I))),O},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(O){var $=f;return function(){var U=f;f=$;try{return O.apply(this,arguments)}finally{f=U}}}})(Mw);Lw.exports=Mw;var VI=Lw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $w=E,bt=VI;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jw=new Set,Jo={};function Ai(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(Jo[t]=e,t=0;t<e.length;t++)jw.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=Object.prototype.hasOwnProperty,HI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ay={},Dy={};function GI(t){return nh.call(Dy,t)?!0:nh.call(Ay,t)?!1:HI.test(t)?Dy[t]=!0:(Ay[t]=!0,!1)}function KI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qI(t,e,n,r){if(e===null||typeof e>"u"||KI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var nm=/[\-:]([a-z])/g;function rm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nm,rm);Ve[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nm,rm);Ve[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nm,rm);Ve[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function im(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qI(e,n,i,r)&&(n=null),r||i===null?GI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=$w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),sm=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),Fw=Symbol.for("react.provider"),Uw=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),am=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),zw=Symbol.for("react.offscreen"),Ly=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=Ly&&t[Ly]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Wd;function So(t){if(Wd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wd=e&&e[1]||""}return`
`+Wd+t}var Vd=!1;function Hd(t,e){if(!t||Vd)return"";Vd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function YI(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Hd(t.type,!1),t;case 11:return t=Hd(t.type.render,!1),t;case 1:return t=Hd(t.type,!0),t;default:return""}}function oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Qi:return"Portal";case rh:return"Profiler";case sm:return"StrictMode";case ih:return"Suspense";case sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uw:return(t.displayName||"Context")+".Consumer";case Fw:return(t._context.displayName||"Context")+".Provider";case om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case am:return e=t.displayName||null,e!==null?e:oh(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return oh(t(e))}catch{}}return null}function QI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oh(e);case 8:return e===sm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XI(t){var e=Bw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=XI(t))}function Ww(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ah(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function My(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vw(t,e){e=e.checked,e!=null&&im(t,"checked",e,!1)}function lh(t,e){Vw(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $y(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(xo(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function Hw(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,Kw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JI=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){JI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function qw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Yw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ZI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(ZI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function lm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mh=null,ps=null,ms=null;function Uy(t){if(t=za(t)){if(typeof mh!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ac(e),mh(t.stateNode,t.type,e))}}function Qw(t){ps?ms?ms.push(t):ms=[t]:ps=t}function Xw(){if(ps){var t=ps,e=ms;if(ms=ps=null,Uy(t),e)for(t=0;t<e.length;t++)Uy(e[t])}}function Jw(t,e){return t(e)}function Zw(){}var Gd=!1;function eE(t,e,n){if(Gd)return t(e,n);Gd=!0;try{return Jw(t,e,n)}finally{Gd=!1,(ps!==null||ms!==null)&&(Zw(),Xw())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Ac(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var gh=!1;if(Dn)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){gh=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{gh=!1}function eb(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Oo=!1,gu=null,yu=!1,yh=null,tb={onError:function(t){Oo=!0,gu=t}};function nb(t,e,n,r,i,s,o,a,l){Oo=!1,gu=null,eb.apply(tb,arguments)}function rb(t,e,n,r,i,s,o,a,l){if(nb.apply(this,arguments),Oo){if(Oo){var u=gu;Oo=!1,gu=null}else throw Error(b(198));yu||(yu=!0,yh=u)}}function Di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zy(t){if(Di(t)!==t)throw Error(b(188))}function ib(t){var e=t.alternate;if(!e){if(e=Di(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zy(i),t;if(s===r)return zy(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function nE(t){return t=ib(t),t!==null?rE(t):null}function rE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rE(t);if(e!==null)return e;t=t.sibling}return null}var iE=bt.unstable_scheduleCallback,By=bt.unstable_cancelCallback,sb=bt.unstable_shouldYield,ob=bt.unstable_requestPaint,xe=bt.unstable_now,ab=bt.unstable_getCurrentPriorityLevel,um=bt.unstable_ImmediatePriority,sE=bt.unstable_UserBlockingPriority,vu=bt.unstable_NormalPriority,lb=bt.unstable_LowPriority,oE=bt.unstable_IdlePriority,Pc=null,dn=null;function ub(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:fb,cb=Math.log,db=Math.LN2;function fb(t){return t>>>=0,t===0?32:31-(cb(t)/db|0)|0}var dl=64,fl=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _u(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Co(a):(s&=o,s!==0&&(r=Co(s)))}else o=n&~i,o!==0?r=Co(o):s!==0&&(r=Co(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function hb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function aE(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function Kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function mb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function lE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uE,dm,cE,dE,fE,_h=!1,hl=[],pr=null,mr=null,gr=null,ta=new Map,na=new Map,rr=[],gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wy(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function co(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=za(e),e!==null&&dm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yb(t,e,n,r,i){switch(e){case"focusin":return pr=co(pr,t,e,n,r,i),!0;case"dragenter":return mr=co(mr,t,e,n,r,i),!0;case"mouseover":return gr=co(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ta.set(s,co(ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,na.set(s,co(na.get(s)||null,t,e,n,r,i)),!0}return!1}function hE(t){var e=ri(t.target);if(e!==null){var n=Di(e);if(n!==null){if(e=n.tag,e===13){if(e=tE(n),e!==null){t.blockedOn=e,fE(t.priority,function(){cE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ph=r,n.target.dispatchEvent(r),ph=null}else return e=za(n),e!==null&&dm(e),t.blockedOn=n,!1;e.shift()}return!0}function Vy(t,e,n){zl(t)&&n.delete(e)}function vb(){_h=!1,pr!==null&&zl(pr)&&(pr=null),mr!==null&&zl(mr)&&(mr=null),gr!==null&&zl(gr)&&(gr=null),ta.forEach(Vy),na.forEach(Vy)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,vb)))}function ra(t){function e(i){return fo(i,t)}if(0<hl.length){fo(hl[0],t);for(var n=1;n<hl.length;n++){var r=hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&fo(pr,t),mr!==null&&fo(mr,t),gr!==null&&fo(gr,t),ta.forEach(e),na.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)hE(n),n.blockedOn===null&&rr.shift()}var gs=Bn.ReactCurrentBatchConfig,wu=!0;function _b(t,e,n,r){var i=ne,s=gs.transition;gs.transition=null;try{ne=1,fm(t,e,n,r)}finally{ne=i,gs.transition=s}}function wb(t,e,n,r){var i=ne,s=gs.transition;gs.transition=null;try{ne=4,fm(t,e,n,r)}finally{ne=i,gs.transition=s}}function fm(t,e,n,r){if(wu){var i=wh(t,e,n,r);if(i===null)rf(t,e,r,Eu,n),Wy(t,r);else if(yb(i,t,e,n,r))r.stopPropagation();else if(Wy(t,r),e&4&&-1<gb.indexOf(t)){for(;i!==null;){var s=za(i);if(s!==null&&uE(s),s=wh(t,e,n,r),s===null&&rf(t,e,r,Eu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rf(t,e,r,null,n)}}var Eu=null;function wh(t,e,n,r){if(Eu=null,t=lm(r),t=ri(t),t!==null)if(e=Di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Eu=t,null}function pE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ab()){case um:return 1;case sE:return 4;case vu:case lb:return 16;case oE:return 536870912;default:return 16}default:return 16}}var cr=null,hm=null,Bl=null;function mE(){if(Bl)return Bl;var t,e=hm,n=e.length,r,i="value"in cr?cr.value:cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bl=i.slice(t,1<r?1-r:void 0)}function Wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function Hy(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:Hy,this.isPropagationStopped=Hy,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pm=Ot(Ks),Ua=we({},Ks,{view:0,detail:0}),Eb=Ot(Ua),qd,Yd,ho,Rc=we({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(qd=t.screenX-ho.screenX,Yd=t.screenY-ho.screenY):Yd=qd=0,ho=t),qd)},movementY:function(t){return"movementY"in t?t.movementY:Yd}}),Gy=Ot(Rc),Sb=we({},Rc,{dataTransfer:0}),xb=Ot(Sb),Cb=we({},Ua,{relatedTarget:0}),Qd=Ot(Cb),Tb=we({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Ib=Ot(Tb),bb=we({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kb=Ot(bb),Pb=we({},Ks,{data:0}),Ky=Ot(Pb),Rb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ob={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ab(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nb[t])?!!e[t]:!1}function mm(){return Ab}var Db=we({},Ua,{key:function(t){if(t.key){var e=Rb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ob[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mm,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lb=Ot(Db),Mb=we({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qy=Ot(Mb),$b=we({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mm}),jb=Ot($b),Fb=we({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ub=Ot(Fb),zb=we({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bb=Ot(zb),Wb=[9,13,27,32],gm=Dn&&"CompositionEvent"in window,No=null;Dn&&"documentMode"in document&&(No=document.documentMode);var Vb=Dn&&"TextEvent"in window&&!No,gE=Dn&&(!gm||No&&8<No&&11>=No),Yy=" ",Qy=!1;function yE(t,e){switch(t){case"keyup":return Wb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function Hb(t,e){switch(t){case"compositionend":return vE(e);case"keypress":return e.which!==32?null:(Qy=!0,Yy);case"textInput":return t=e.data,t===Yy&&Qy?null:t;default:return null}}function Gb(t,e){if(Ji)return t==="compositionend"||!gm&&yE(t,e)?(t=mE(),Bl=hm=cr=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gE&&e.locale!=="ko"?null:e.data;default:return null}}var Kb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kb[t.type]:e==="textarea"}function _E(t,e,n,r){Qw(r),e=Su(e,"onChange"),0<e.length&&(n=new pm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ao=null,ia=null;function qb(t){RE(t,0)}function Oc(t){var e=ts(t);if(Ww(e))return t}function Yb(t,e){if(t==="change")return e}var wE=!1;if(Dn){var Xd;if(Dn){var Jd="oninput"in document;if(!Jd){var Jy=document.createElement("div");Jy.setAttribute("oninput","return;"),Jd=typeof Jy.oninput=="function"}Xd=Jd}else Xd=!1;wE=Xd&&(!document.documentMode||9<document.documentMode)}function Zy(){Ao&&(Ao.detachEvent("onpropertychange",EE),ia=Ao=null)}function EE(t){if(t.propertyName==="value"&&Oc(ia)){var e=[];_E(e,ia,t,lm(t)),eE(qb,e)}}function Qb(t,e,n){t==="focusin"?(Zy(),Ao=e,ia=n,Ao.attachEvent("onpropertychange",EE)):t==="focusout"&&Zy()}function Xb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oc(ia)}function Jb(t,e){if(t==="click")return Oc(e)}function Zb(t,e){if(t==="input"||t==="change")return Oc(e)}function ek(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:ek;function sa(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nh.call(e,i)||!en(t[i],e[i]))return!1}return!0}function ev(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tv(t,e){var n=ev(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ev(n)}}function SE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?SE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xE(){for(var t=window,e=mu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mu(t.document)}return e}function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tk(t){var e=xE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&SE(n.ownerDocument.documentElement,n)){if(r!==null&&ym(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tv(n,s);var o=tv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nk=Dn&&"documentMode"in document&&11>=document.documentMode,Zi=null,Eh=null,Do=null,Sh=!1;function nv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||Zi==null||Zi!==mu(r)||(r=Zi,"selectionStart"in r&&ym(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&sa(Do,r)||(Do=r,r=Su(Eh,"onSelect"),0<r.length&&(e=new pm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Zd={},CE={};Dn&&(CE=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Nc(t){if(Zd[t])return Zd[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in CE)return Zd[t]=e[n];return t}var TE=Nc("animationend"),IE=Nc("animationiteration"),bE=Nc("animationstart"),kE=Nc("transitionend"),PE=new Map,rv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){PE.set(t,e),Ai(e,[t])}for(var ef=0;ef<rv.length;ef++){var tf=rv[ef],rk=tf.toLowerCase(),ik=tf[0].toUpperCase()+tf.slice(1);Ur(rk,"on"+ik)}Ur(TE,"onAnimationEnd");Ur(IE,"onAnimationIteration");Ur(bE,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(kE,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sk=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function iv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rb(r,e,void 0,t),t.currentTarget=null}function RE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;iv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;iv(i,a,u),s=l}}}if(yu)throw t=yh,yu=!1,yh=null,t}function ce(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||(OE(e,t,2,!1),n.add(r))}function nf(t,e,n){var r=0;e&&(r|=4),OE(n,t,r,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[gl]){t[gl]=!0,jw.forEach(function(n){n!=="selectionchange"&&(sk.has(n)||nf(n,!1,t),nf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gl]||(e[gl]=!0,nf("selectionchange",!1,e))}}function OE(t,e,n,r){switch(pE(e)){case 1:var i=_b;break;case 4:i=wb;break;default:i=fm}n=i.bind(null,e,n,t),i=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}eE(function(){var u=s,c=lm(n),d=[];e:{var f=PE.get(t);if(f!==void 0){var m=pm,v=t;switch(t){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":m=Lb;break;case"focusin":v="focus",m=Qd;break;case"focusout":v="blur",m=Qd;break;case"beforeblur":case"afterblur":m=Qd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=jb;break;case TE:case IE:case bE:m=Ib;break;case kE:m=Ub;break;case"scroll":m=Eb;break;case"wheel":m=Bb;break;case"copy":case"cut":case"paste":m=kb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qy}var _=(e&4)!==0,S=!_&&t==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,g!==null&&(w=ea(p,g),w!=null&&_.push(aa(p,w,y)))),S)break;p=p.return}0<_.length&&(f=new m(f,v,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==ph&&(v=n.relatedTarget||n.fromElement)&&(ri(v)||v[Ln]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?ri(v):null,v!==null&&(S=Di(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=Gy,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=qy,w="onPointerLeave",g="onPointerEnter",p="pointer"),S=m==null?f:ts(m),y=v==null?f:ts(v),f=new _(w,p+"leave",m,n,c),f.target=S,f.relatedTarget=y,w=null,ri(c)===u&&(_=new _(g,p+"enter",v,n,c),_.target=y,_.relatedTarget=S,w=_),S=w,m&&v)t:{for(_=m,g=v,p=0,y=_;y;y=Hi(y))p++;for(y=0,w=g;w;w=Hi(w))y++;for(;0<p-y;)_=Hi(_),p--;for(;0<y-p;)g=Hi(g),y--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=Hi(_),g=Hi(g)}_=null}else _=null;m!==null&&sv(d,f,m,_,!1),v!==null&&S!==null&&sv(d,S,v,_,!0)}}e:{if(f=u?ts(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var I=Yb;else if(Xy(f))if(wE)I=Zb;else{I=Xb;var x=Qb}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=Jb);if(I&&(I=I(t,u))){_E(d,I,n,c);break e}x&&x(t,f,u),t==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&uh(f,"number",f.value)}switch(x=u?ts(u):window,t){case"focusin":(Xy(x)||x.contentEditable==="true")&&(Zi=x,Eh=u,Do=null);break;case"focusout":Do=Eh=Zi=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,nv(d,n,c);break;case"selectionchange":if(nk)break;case"keydown":case"keyup":nv(d,n,c)}var C;if(gm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ji?yE(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(gE&&n.locale!=="ko"&&(Ji||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ji&&(C=mE()):(cr=c,hm="value"in cr?cr.value:cr.textContent,Ji=!0)),x=Su(u,P),0<x.length&&(P=new Ky(P,t,null,n,c),d.push({event:P,listeners:x}),C?P.data=C:(C=vE(n),C!==null&&(P.data=C)))),(C=Vb?Hb(t,n):Gb(t,n))&&(u=Su(u,"onBeforeInput"),0<u.length&&(c=new Ky("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}RE(d,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ea(t,n),s!=null&&r.unshift(aa(t,s,i)),s=ea(t,e),s!=null&&r.push(aa(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ea(n,s),l!=null&&o.unshift(aa(n,l,a))):i||(l=ea(n,s),l!=null&&o.push(aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ok=/\r\n?/g,ak=/\u0000|\uFFFD/g;function ov(t){return(typeof t=="string"?t:""+t).replace(ok,`
`).replace(ak,"")}function yl(t,e,n){if(e=ov(e),ov(t)!==e&&n)throw Error(b(425))}function xu(){}var xh=null,Ch=null;function Th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,lk=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,uk=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(t){return av.resolve(null).then(t).catch(ck)}:Ih;function ck(t){setTimeout(function(){throw t})}function sf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),cn="__reactFiber$"+qs,la="__reactProps$"+qs,Ln="__reactContainer$"+qs,bh="__reactEvents$"+qs,dk="__reactListeners$"+qs,fk="__reactHandles$"+qs;function ri(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lv(t);t!==null;){if(n=t[cn])return n;t=lv(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[cn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ac(t){return t[la]||null}var kh=[],ns=-1;function zr(t){return{current:t}}function pe(t){0>ns||(t.current=kh[ns],kh[ns]=null,ns--)}function ue(t,e){ns++,kh[ns]=t.current,t.current=e}var Ar={},Qe=zr(Ar),dt=zr(!1),gi=Ar;function Is(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Cu(){pe(dt),pe(Qe)}function uv(t,e,n){if(Qe.current!==Ar)throw Error(b(168));ue(Qe,e),ue(dt,n)}function NE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,QI(t)||"Unknown",i));return we({},n,r)}function Tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,gi=Qe.current,ue(Qe,t),ue(dt,dt.current),!0}function cv(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=NE(t,e,gi),r.__reactInternalMemoizedMergedChildContext=t,pe(dt),pe(Qe),ue(Qe,t)):pe(dt),ue(dt,n)}var In=null,Dc=!1,of=!1;function AE(t){In===null?In=[t]:In.push(t)}function hk(t){Dc=!0,AE(t)}function Br(){if(!of&&In!==null){of=!0;var t=0,e=ne;try{var n=In;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,Dc=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),iE(um,Br),i}finally{ne=e,of=!1}}return null}var rs=[],is=0,Iu=null,bu=0,Dt=[],Lt=0,yi=null,bn=1,kn="";function Qr(t,e){rs[is++]=bu,rs[is++]=Iu,Iu=t,bu=e}function DE(t,e,n){Dt[Lt++]=bn,Dt[Lt++]=kn,Dt[Lt++]=yi,yi=t;var r=bn;t=kn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-Qt(e)+i|n<<i|r,kn=s+t}else bn=1<<s|n<<i|r,kn=t}function vm(t){t.return!==null&&(Qr(t,1),DE(t,1,0))}function _m(t){for(;t===Iu;)Iu=rs[--is],rs[is]=null,bu=rs[--is],rs[is]=null;for(;t===yi;)yi=Dt[--Lt],Dt[Lt]=null,kn=Dt[--Lt],Dt[Lt]=null,bn=Dt[--Lt],Dt[Lt]=null}var Tt=null,wt=null,ge=!1,Ht=null;function LE(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:bn,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function Ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rh(t){if(ge){var e=wt;if(e){var n=e;if(!dv(t,e)){if(Ph(t))throw Error(b(418));e=yr(n.nextSibling);var r=Tt;e&&dv(t,e)?LE(r,n):(t.flags=t.flags&-4097|2,ge=!1,Tt=t)}}else{if(Ph(t))throw Error(b(418));t.flags=t.flags&-4097|2,ge=!1,Tt=t}}}function fv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function vl(t){if(t!==Tt)return!1;if(!ge)return fv(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Th(t.type,t.memoizedProps)),e&&(e=wt)){if(Ph(t))throw ME(),Error(b(418));for(;e;)LE(t,e),e=yr(e.nextSibling)}if(fv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?yr(t.stateNode.nextSibling):null;return!0}function ME(){for(var t=wt;t;)t=yr(t.nextSibling)}function bs(){wt=Tt=null,ge=!1}function wm(t){Ht===null?Ht=[t]:Ht.push(t)}var pk=Bn.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ku=zr(null),Pu=null,ss=null,Em=null;function Sm(){Em=ss=Pu=null}function xm(t){var e=ku.current;pe(ku),t._currentValue=e}function Oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Pu=t,Em=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Em!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(Pu===null)throw Error(b(308));ss=t,Pu.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var ii=null;function Cm(t){ii===null?ii=[t]:ii.push(t)}function $E(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Cm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}function hv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ru(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=we({},d,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=d}}function pv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var FE=new $w.Component().refs;function Nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?Di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=wr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(Xt(e,t,i,r),Vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=wr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(Xt(e,t,i,r),Vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=wr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(Xt(e,t,r,n),Vl(e,t,r))}};function mv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function UE(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=ft(e)?gi:Qe.current,r=e.contextTypes,s=(r=r!=null)?Is(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Ah(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=FE,Tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=ft(e)?gi:Qe.current,i.context=Is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lc.enqueueReplaceState(i,i.state,null),Ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===FE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yv(t){var e=t._init;return e(t._payload)}function zE(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Er(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,w){return p===null||p.tag!==6?(p=hf(y,g.mode,w),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,w){var I=y.type;return I===Xi?c(g,p,y.props.children,w,y.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===er&&yv(I)===p.type)?(w=i(p,y.props),w.ref=po(g,p,y),w.return=g,w):(w=Ql(y.type,y.key,y.props,null,g.mode,w),w.ref=po(g,p,y),w.return=g,w)}function u(g,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=pf(y,g.mode,w),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function c(g,p,y,w,I){return p===null||p.tag!==7?(p=ci(y,g.mode,w,I),p.return=g,p):(p=i(p,y),p.return=g,p)}function d(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hf(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ll:return y=Ql(p.type,p.key,p.props,null,g.mode,y),y.ref=po(g,null,p),y.return=g,y;case Qi:return p=pf(p,g.mode,y),p.return=g,p;case er:var w=p._init;return d(g,w(p._payload),y)}if(xo(p)||lo(p))return p=ci(p,g.mode,y,null),p.return=g,p;_l(g,p)}return null}function f(g,p,y,w){var I=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(g,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:return y.key===I?l(g,p,y,w):null;case Qi:return y.key===I?u(g,p,y,w):null;case er:return I=y._init,f(g,p,I(y._payload),w)}if(xo(y)||lo(y))return I!==null?null:c(g,p,y,w,null);_l(g,y)}return null}function m(g,p,y,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(y)||null,a(p,g,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ll:return g=g.get(w.key===null?y:w.key)||null,l(p,g,w,I);case Qi:return g=g.get(w.key===null?y:w.key)||null,u(p,g,w,I);case er:var x=w._init;return m(g,p,y,x(w._payload),I)}if(xo(w)||lo(w))return g=g.get(y)||null,c(p,g,w,I,null);_l(p,w)}return null}function v(g,p,y,w){for(var I=null,x=null,C=p,P=p=0,L=null;C!==null&&P<y.length;P++){C.index>P?(L=C,C=null):L=C.sibling;var M=f(g,C,y[P],w);if(M===null){C===null&&(C=L);break}t&&C&&M.alternate===null&&e(g,C),p=s(M,p,P),x===null?I=M:x.sibling=M,x=M,C=L}if(P===y.length)return n(g,C),ge&&Qr(g,P),I;if(C===null){for(;P<y.length;P++)C=d(g,y[P],w),C!==null&&(p=s(C,p,P),x===null?I=C:x.sibling=C,x=C);return ge&&Qr(g,P),I}for(C=r(g,C);P<y.length;P++)L=m(C,g,P,y[P],w),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?P:L.key),p=s(L,p,P),x===null?I=L:x.sibling=L,x=L);return t&&C.forEach(function(B){return e(g,B)}),ge&&Qr(g,P),I}function _(g,p,y,w){var I=lo(y);if(typeof I!="function")throw Error(b(150));if(y=I.call(y),y==null)throw Error(b(151));for(var x=I=null,C=p,P=p=0,L=null,M=y.next();C!==null&&!M.done;P++,M=y.next()){C.index>P?(L=C,C=null):L=C.sibling;var B=f(g,C,M.value,w);if(B===null){C===null&&(C=L);break}t&&C&&B.alternate===null&&e(g,C),p=s(B,p,P),x===null?I=B:x.sibling=B,x=B,C=L}if(M.done)return n(g,C),ge&&Qr(g,P),I;if(C===null){for(;!M.done;P++,M=y.next())M=d(g,M.value,w),M!==null&&(p=s(M,p,P),x===null?I=M:x.sibling=M,x=M);return ge&&Qr(g,P),I}for(C=r(g,C);!M.done;P++,M=y.next())M=m(C,g,P,M.value,w),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?P:M.key),p=s(M,p,P),x===null?I=M:x.sibling=M,x=M);return t&&C.forEach(function(ot){return e(g,ot)}),ge&&Qr(g,P),I}function S(g,p,y,w){if(typeof y=="object"&&y!==null&&y.type===Xi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:e:{for(var I=y.key,x=p;x!==null;){if(x.key===I){if(I=y.type,I===Xi){if(x.tag===7){n(g,x.sibling),p=i(x,y.props.children),p.return=g,g=p;break e}}else if(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===er&&yv(I)===x.type){n(g,x.sibling),p=i(x,y.props),p.ref=po(g,x,y),p.return=g,g=p;break e}n(g,x);break}else e(g,x);x=x.sibling}y.type===Xi?(p=ci(y.props.children,g.mode,w,y.key),p.return=g,g=p):(w=Ql(y.type,y.key,y.props,null,g.mode,w),w.ref=po(g,p,y),w.return=g,g=w)}return o(g);case Qi:e:{for(x=y.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=pf(y,g.mode,w),p.return=g,g=p}return o(g);case er:return x=y._init,S(g,p,x(y._payload),w)}if(xo(y))return v(g,p,y,w);if(lo(y))return _(g,p,y,w);_l(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=hf(y,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return S}var ks=zE(!0),BE=zE(!1),Ba={},fn=zr(Ba),ua=zr(Ba),ca=zr(Ba);function si(t){if(t===Ba)throw Error(b(174));return t}function Im(t,e){switch(ue(ca,e),ue(ua,t),ue(fn,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}pe(fn),ue(fn,e)}function Ps(){pe(fn),pe(ua),pe(ca)}function WE(t){si(ca.current);var e=si(fn.current),n=dh(e,t.type);e!==n&&(ue(ua,t),ue(fn,n))}function bm(t){ua.current===t&&(pe(fn),pe(ua))}var ye=zr(0);function Ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var af=[];function km(){for(var t=0;t<af.length;t++)af[t]._workInProgressVersionPrimary=null;af.length=0}var Hl=Bn.ReactCurrentDispatcher,lf=Bn.ReactCurrentBatchConfig,vi=0,ve=null,be=null,Ae=null,Nu=!1,Lo=!1,da=0,mk=0;function Ge(){throw Error(b(321))}function Pm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Rm(t,e,n,r,i,s){if(vi=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?_k:wk,t=n(r,i),Lo){s=0;do{if(Lo=!1,da=0,25<=s)throw Error(b(301));s+=1,Ae=be=null,e.updateQueue=null,Hl.current=Ek,t=n(r,i)}while(Lo)}if(Hl.current=Au,e=be!==null&&be.next!==null,vi=0,Ae=be=ve=null,Nu=!1,e)throw Error(b(300));return t}function Om(){var t=da!==0;return da=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ve.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function Ft(){if(be===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ae===null?ve.memoizedState:Ae.next;if(e!==null)Ae=e,be=t;else{if(t===null)throw Error(b(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ae===null?ve.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function fa(t,e){return typeof e=="function"?e(t):e}function uf(t){var e=Ft(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ve.lanes|=c,_i|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cf(t){var e=Ft(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function VE(){}function HE(t,e){var n=ve,r=Ft(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,Nm(qE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,ha(9,KE.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(b(349));vi&30||GE(n,e,i)}return i}function GE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function KE(t,e,n,r){e.value=n,e.getSnapshot=r,YE(e)&&QE(t)}function qE(t,e,n){return n(function(){YE(e)&&QE(t)})}function YE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function QE(t){var e=Mn(t,1);e!==null&&Xt(e,t,1,-1)}function vv(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=vk.bind(null,ve,t),[e.memoizedState,t]}function ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function XE(){return Ft().memoizedState}function Gl(t,e,n,r){var i=an();ve.flags|=t,i.memoizedState=ha(1|e,n,void 0,r===void 0?null:r)}function Mc(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Pm(r,o.deps)){i.memoizedState=ha(e,n,s,r);return}}ve.flags|=t,i.memoizedState=ha(1|e,n,s,r)}function _v(t,e){return Gl(8390656,8,t,e)}function Nm(t,e){return Mc(2048,8,t,e)}function JE(t,e){return Mc(4,2,t,e)}function ZE(t,e){return Mc(4,4,t,e)}function eS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tS(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,eS.bind(null,e,t),n)}function Am(){}function nS(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rS(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iS(t,e,n){return vi&21?(en(n,e)||(n=aE(),ve.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function gk(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=lf.transition;lf.transition={};try{t(!1),e()}finally{ne=n,lf.transition=r}}function sS(){return Ft().memoizedState}function yk(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oS(t))aS(e,n);else if(n=$E(t,e,n,r),n!==null){var i=rt();Xt(n,t,r,i),lS(n,e,r)}}function vk(t,e,n){var r=wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oS(t))aS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,Cm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=$E(t,e,i,r),n!==null&&(i=rt(),Xt(n,t,r,i),lS(n,e,r))}}function oS(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function aS(t,e){Lo=Nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}var Au={readContext:jt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},_k={readContext:jt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:_v,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,eS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yk.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:vv,useDebugValue:Am,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=vv(!1),e=t[0];return t=gk.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=an();if(ge){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),$e===null)throw Error(b(349));vi&30||GE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_v(qE.bind(null,r,s,t),[t]),r.flags|=2048,ha(9,KE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=$e.identifierPrefix;if(ge){var n=kn,r=bn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wk={readContext:jt,useCallback:nS,useContext:jt,useEffect:Nm,useImperativeHandle:tS,useInsertionEffect:JE,useLayoutEffect:ZE,useMemo:rS,useReducer:uf,useRef:XE,useState:function(){return uf(fa)},useDebugValue:Am,useDeferredValue:function(t){var e=Ft();return iS(e,be.memoizedState,t)},useTransition:function(){var t=uf(fa)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:VE,useSyncExternalStore:HE,useId:sS,unstable_isNewReconciler:!1},Ek={readContext:jt,useCallback:nS,useContext:jt,useEffect:Nm,useImperativeHandle:tS,useInsertionEffect:JE,useLayoutEffect:ZE,useMemo:rS,useReducer:cf,useRef:XE,useState:function(){return cf(fa)},useDebugValue:Am,useDeferredValue:function(t){var e=Ft();return be===null?e.memoizedState=t:iS(e,be.memoizedState,t)},useTransition:function(){var t=cf(fa)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:VE,useSyncExternalStore:HE,useId:sS,unstable_isNewReconciler:!1};function Rs(t,e){try{var n="",r=e;do n+=YI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function df(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sk=typeof WeakMap=="function"?WeakMap:Map;function uS(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lu||(Lu=!0,Vh=r),Dh(t,e)},n}function cS(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Sk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Mk.bind(null,t,e,n),e.then(t,t))}function Ev(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var xk=Bn.ReactCurrentOwner,ut=!1;function tt(t,e,n,r){e.child=t===null?BE(e,null,n,r):ks(e,t.child,n,r)}function xv(t,e,n,r,i){n=n.render;var s=e.ref;return ys(e,i),r=Rm(t,e,n,r,s,i),n=Om(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(ge&&n&&vm(e),e.flags|=1,tt(t,e,r,i),e.child)}function Cv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dS(t,e,s,r,i)):(t=Ql(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function dS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sa(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,$n(t,e,i)}return Lh(t,e,n,r,i)}function fS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(as,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(as,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(as,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(as,_t),_t|=r;return tt(t,e,i,n),e.child}function hS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,r,i){var s=ft(n)?gi:Qe.current;return s=Is(e,s),ys(e,i),n=Rm(t,e,n,r,s,i),r=Om(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(ge&&r&&vm(e),e.flags|=1,tt(t,e,n,i),e.child)}function Tv(t,e,n,r,i){if(ft(n)){var s=!0;Tu(e)}else s=!1;if(ys(e,i),e.stateNode===null)Kl(t,e),UE(e,n,r),Ah(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=ft(n)?gi:Qe.current,u=Is(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gv(e,o,r,u),tr=!1;var f=e.memoizedState;o.state=f,Ru(e,r,o,i),l=e.memoizedState,a!==r||f!==l||dt.current||tr?(typeof c=="function"&&(Nh(e,n,c,r),l=e.memoizedState),(a=tr||mv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=ft(n)?gi:Qe.current,l=Is(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&gv(e,o,r,l),tr=!1,f=e.memoizedState,o.state=f,Ru(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||dt.current||tr?(typeof m=="function"&&(Nh(e,n,m,r),v=e.memoizedState),(u=tr||mv(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Mh(t,e,n,r,s,i)}function Mh(t,e,n,r,i,s){hS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cv(e,n,!1),$n(t,e,s);r=e.stateNode,xk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&cv(e,n,!0),e.child}function pS(t){var e=t.stateNode;e.pendingContext?uv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&uv(t,e.context,!1),Im(t,e.containerInfo)}function Iv(t,e,n,r,i){return bs(),wm(i),e.flags|=256,tt(t,e,n,r),e.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function mS(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ye,i&1),t===null)return Rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fc(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jh(n),e.memoizedState=$h,t):Dm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ck(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$h,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dm(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,r){return r!==null&&wm(r),ks(e,t.child,null,n),t=Dm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ck(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=df(Error(b(422))),wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fc({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=jh(o),e.memoizedState=$h,s);if(!(e.mode&1))return wl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=df(s,r,void 0),wl(t,e,o,r)}if(a=(o&t.childLanes)!==0,ut||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Xt(r,t,i,-1))}return Um(),r=df(Error(b(421))),wl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$k.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=yr(i.nextSibling),Tt=e,ge=!0,Ht=null,t!==null&&(Dt[Lt++]=bn,Dt[Lt++]=kn,Dt[Lt++]=yi,bn=t.id,kn=t.overflow,yi=e),e=Dm(e,r.children),e.flags|=4096,e)}function bv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Oh(t.return,e,n)}function ff(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bv(t,n,e);else if(t.tag===19)bv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ff(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ff(e,!0,n,null,s);break;case"together":ff(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Tk(t,e,n){switch(e.tag){case 3:pS(e),bs();break;case 5:WE(e);break;case 1:ft(e.type)&&Tu(e);break;case 4:Im(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(ku,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?mS(t,e,n):(ue(ye,ye.current&1),t=$n(t,e,n),t!==null?t.sibling:null);ue(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,fS(t,e,n)}return $n(t,e,n)}var yS,Fh,vS,_S;yS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fh=function(){};vS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(fn.current);var s=null;switch(n){case"input":i=ah(t,i),r=ah(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=ch(t,i),r=ch(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xu)}fh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_S=function(t,e,n,r){n!==r&&(e.flags|=4)};function mo(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ik(t,e,n){var r=e.pendingProps;switch(_m(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return ft(e.type)&&Cu(),Ke(e),null;case 3:return r=e.stateNode,Ps(),pe(dt),pe(Qe),km(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Kh(Ht),Ht=null))),Fh(t,e),Ke(e),null;case 5:bm(e);var i=si(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)vS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ke(e),null}if(t=si(fn.current),vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[la]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<To.length;i++)ce(To[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":My(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":jy(r,s),ce("invalid",r)}fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":ul(r),$y(r,s,!0);break;case"textarea":ul(r),Fy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[la]=r,yS(t,e,!1,!1),e.stateNode=t;e:{switch(o=hh(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<To.length;i++)ce(To[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":My(t,r),i=ah(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ce("invalid",t);break;case"textarea":jy(t,r),i=ch(t,r),ce("invalid",t);break;default:i=r}fh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zo(t,l):typeof l=="number"&&Zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&im(t,s,l,o))}switch(n){case"input":ul(t),$y(t,r,!1);break;case"textarea":ul(t),Fy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)_S(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=si(ca.current),si(fn.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return Ke(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&wt!==null&&e.mode&1&&!(e.flags&128))ME(),bs(),e.flags|=98560,s=!1;else if(s=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[cn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Ht!==null&&(Kh(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Re===0&&(Re=3):Um())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return Ps(),Fh(t,e),t===null&&oa(e.stateNode.containerInfo),Ke(e),null;case 10:return xm(e.type._context),Ke(e),null;case 17:return ft(e.type)&&Cu(),Ke(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)mo(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ou(t),o!==null){for(e.flags|=128,mo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>Os&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Ke(e),null}else 2*xe()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=ye.current,ue(ye,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Fm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function bk(t,e){switch(_m(e),e.tag){case 1:return ft(e.type)&&Cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),pe(dt),pe(Qe),km(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bm(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Ps(),null;case 10:return xm(e.type._context),null;case 22:case 23:return Fm(),null;case 24:return null;default:return null}}var El=!1,qe=!1,kk=typeof WeakSet=="function"?WeakSet:Set,A=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Uh(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var kv=!1;function Pk(t,e){if(xh=wu,t=xE(),ym(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ch={focusedElem:t,selectionRange:n},wu=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,S=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Wt(e.type,_),S);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){Ee(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=kv,kv=!1,v}function Mo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uh(e,n,s)}i=i.next}while(i!==r)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wS(t){var e=t.alternate;e!==null&&(t.alternate=null,wS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[la],delete e[bh],delete e[dk],delete e[fk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ES(t){return t.tag===5||t.tag===3||t.tag===4}function Pv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ES(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xu));else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function Wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}var Ue=null,Vt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)SS(t,e,n),n=n.sibling}function SS(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:qe||os(n,e);case 6:var r=Ue,i=Vt;Ue=null,Xn(t,e,n),Ue=r,Vt=i,Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?sf(t.parentNode,n):t.nodeType===1&&sf(t,n),ra(t)):sf(Ue,n.stateNode));break;case 4:r=Ue,i=Vt,Ue=n.stateNode.containerInfo,Vt=!0,Xn(t,e,n),Ue=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uh(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!qe&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Xn(t,e,n),qe=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kk),e.forEach(function(r){var i=jk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Vt=!1;break e;case 3:Ue=a.stateNode.containerInfo,Vt=!0;break e;case 4:Ue=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Ue===null)throw Error(b(160));SS(s,o,i),Ue=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xS(e,t),e=e.sibling}function xS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),on(t),r&4){try{Mo(3,t,t.return),$c(3,t)}catch(_){Ee(t,t.return,_)}try{Mo(5,t,t.return)}catch(_){Ee(t,t.return,_)}}break;case 1:zt(e,t),on(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(zt(e,t),on(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var i=t.stateNode;try{Zo(i,"")}catch(_){Ee(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vw(i,s),hh(a,o);var u=hh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Yw(i,d):c==="dangerouslySetInnerHTML"?Kw(i,d):c==="children"?Zo(i,d):im(i,c,d,u)}switch(a){case"input":lh(i,s);break;case"textarea":Hw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?hs(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?hs(i,!!s.multiple,s.defaultValue,!0):hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[la]=s}catch(_){Ee(t,t.return,_)}}break;case 6:if(zt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ee(t,t.return,_)}}break;case 3:if(zt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(_){Ee(t,t.return,_)}break;case 4:zt(e,t),on(t);break;case 13:zt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($m=xe())),r&4&&Rv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||c,zt(e,t),qe=u):zt(e,t),on(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(d=A=c;A!==null;){switch(f=A,m=f.child,f.tag){case 0:case 11:case 14:case 15:Mo(4,f,f.return);break;case 1:os(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ee(r,n,_)}}break;case 5:os(f,f.return);break;case 22:if(f.memoizedState!==null){Nv(d);continue}}m!==null?(m.return=f,A=m):Nv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qw("display",o))}catch(_){Ee(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ee(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zt(e,t),on(t),r&4&&Rv(t);break;case 21:break;default:zt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ES(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var s=Pv(t);Wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pv(t);Bh(t,a,o);break;default:throw Error(b(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rk(t,e,n){A=t,CS(t)}function CS(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||El;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=El;var u=qe;if(El=o,(qe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Av(i):l!==null?(l.return=o,A=l):Av(i);for(;s!==null;)A=s,CS(s),s=s.sibling;A=i,El=a,qe=u}Ov(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Ov(t)}}function Ov(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||$c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}qe||e.flags&512&&zh(e)}catch(f){Ee(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Nv(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Av(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{zh(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{zh(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var Ok=Math.ceil,Du=Bn.ReactCurrentDispatcher,Lm=Bn.ReactCurrentOwner,$t=Bn.ReactCurrentBatchConfig,Q=0,$e=null,Ie=null,We=0,_t=0,as=zr(0),Re=0,pa=null,_i=0,jc=0,Mm=0,$o=null,at=null,$m=0,Os=1/0,Cn=null,Lu=!1,Vh=null,_r=null,Sl=!1,dr=null,Mu=0,jo=0,Hh=null,ql=-1,Yl=0;function rt(){return Q&6?xe():ql!==-1?ql:ql=xe()}function wr(t){return t.mode&1?Q&2&&We!==0?We&-We:pk.transition!==null?(Yl===0&&(Yl=aE()),Yl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:pE(t.type)),t):1}function Xt(t,e,n,r){if(50<jo)throw jo=0,Hh=null,Error(b(185));Fa(t,n,r),(!(Q&2)||t!==$e)&&(t===$e&&(!(Q&2)&&(jc|=n),Re===4&&ir(t,We)),ht(t,r),n===1&&Q===0&&!(e.mode&1)&&(Os=xe()+500,Dc&&Br()))}function ht(t,e){var n=t.callbackNode;pb(t,e);var r=_u(t,t===$e?We:0);if(r===0)n!==null&&By(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&By(n),e===1)t.tag===0?hk(Dv.bind(null,t)):AE(Dv.bind(null,t)),uk(function(){!(Q&6)&&Br()}),n=null;else{switch(lE(r)){case 1:n=um;break;case 4:n=sE;break;case 16:n=vu;break;case 536870912:n=oE;break;default:n=vu}n=NS(n,TS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function TS(t,e){if(ql=-1,Yl=0,Q&6)throw Error(b(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var r=_u(t,t===$e?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$u(t,r);else{e=r;var i=Q;Q|=2;var s=bS();($e!==t||We!==e)&&(Cn=null,Os=xe()+500,ui(t,e));do try{Dk();break}catch(a){IS(t,a)}while(!0);Sm(),Du.current=s,Q=i,Ie!==null?e=0:($e=null,We=0,e=Re)}if(e!==0){if(e===2&&(i=vh(t),i!==0&&(r=i,e=Gh(t,i))),e===1)throw n=pa,ui(t,0),ir(t,r),ht(t,xe()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!Nk(i)&&(e=$u(t,r),e===2&&(s=vh(t),s!==0&&(r=s,e=Gh(t,s))),e===1))throw n=pa,ui(t,0),ir(t,r),ht(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Xr(t,at,Cn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=$m+500-xe(),10<e)){if(_u(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ih(Xr.bind(null,t,at,Cn),e);break}Xr(t,at,Cn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ok(r/1960))-r,10<r){t.timeoutHandle=Ih(Xr.bind(null,t,at,Cn),r);break}Xr(t,at,Cn);break;case 5:Xr(t,at,Cn);break;default:throw Error(b(329))}}}return ht(t,xe()),t.callbackNode===n?TS.bind(null,t):null}function Gh(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=$u(t,e),t!==2&&(e=at,at=n,e!==null&&Kh(e)),t}function Kh(t){at===null?at=t:at.push.apply(at,t)}function Nk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Mm,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function Dv(t){if(Q&6)throw Error(b(327));vs();var e=_u(t,0);if(!(e&1))return ht(t,xe()),null;var n=$u(t,e);if(t.tag!==0&&n===2){var r=vh(t);r!==0&&(e=r,n=Gh(t,r))}if(n===1)throw n=pa,ui(t,0),ir(t,e),ht(t,xe()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,at,Cn),ht(t,xe()),null}function jm(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(Os=xe()+500,Dc&&Br())}}function wi(t){dr!==null&&dr.tag===0&&!(Q&6)&&vs();var e=Q;Q|=1;var n=$t.transition,r=ne;try{if($t.transition=null,ne=1,t)return t()}finally{ne=r,$t.transition=n,Q=e,!(Q&6)&&Br()}}function Fm(){_t=as.current,pe(as)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lk(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(_m(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cu();break;case 3:Ps(),pe(dt),pe(Qe),km();break;case 5:bm(r);break;case 4:Ps();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:xm(r.type._context);break;case 22:case 23:Fm()}n=n.return}if($e=t,Ie=t=Er(t.current,null),We=_t=e,Re=0,pa=null,Mm=jc=_i=0,at=$o=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function IS(t,e){do{var n=Ie;try{if(Sm(),Hl.current=Au,Nu){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nu=!1}if(vi=0,Ae=be=ve=null,Lo=!1,da=0,Lm.current=null,n===null||n.return===null){Re=1,pa=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Ev(o);if(m!==null){m.flags&=-257,Sv(m,o,a,s,e),m.mode&1&&wv(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){wv(s,u,e),Um();break e}l=Error(b(426))}}else if(ge&&a.mode&1){var S=Ev(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Sv(S,o,a,s,e),wm(Rs(l,a));break e}}s=l=Rs(l,a),Re!==4&&(Re=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=uS(s,l,e);hv(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(_r===null||!_r.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=cS(s,a,e);hv(s,w);break e}}s=s.return}while(s!==null)}PS(n)}catch(I){e=I,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function bS(){var t=Du.current;return Du.current=Au,t===null?Au:t}function Um(){(Re===0||Re===3||Re===2)&&(Re=4),$e===null||!(_i&268435455)&&!(jc&268435455)||ir($e,We)}function $u(t,e){var n=Q;Q|=2;var r=bS();($e!==t||We!==e)&&(Cn=null,ui(t,e));do try{Ak();break}catch(i){IS(t,i)}while(!0);if(Sm(),Q=n,Du.current=r,Ie!==null)throw Error(b(261));return $e=null,We=0,Re}function Ak(){for(;Ie!==null;)kS(Ie)}function Dk(){for(;Ie!==null&&!sb();)kS(Ie)}function kS(t){var e=OS(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?PS(t):Ie=e,Lm.current=null}function PS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bk(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Ie=null;return}}else if(n=Ik(n,e,_t),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Re===0&&(Re=5)}function Xr(t,e,n){var r=ne,i=$t.transition;try{$t.transition=null,ne=1,Lk(t,e,n,r)}finally{$t.transition=i,ne=r}return null}function Lk(t,e,n,r){do vs();while(dr!==null);if(Q&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mb(t,s),t===$e&&(Ie=$e=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,NS(vu,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=ne;ne=1;var a=Q;Q|=4,Lm.current=null,Pk(t,n),xS(n,t),tk(Ch),wu=!!xh,Ch=xh=null,t.current=n,Rk(n),ob(),Q=a,ne=o,$t.transition=s}else t.current=n;if(Sl&&(Sl=!1,dr=t,Mu=i),s=t.pendingLanes,s===0&&(_r=null),ub(n.stateNode),ht(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lu)throw Lu=!1,t=Vh,Vh=null,t;return Mu&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===Hh?jo++:(jo=0,Hh=t):jo=0,Br(),null}function vs(){if(dr!==null){var t=lE(Mu),e=$t.transition,n=ne;try{if($t.transition=null,ne=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,Mu=0,Q&6)throw Error(b(331));var i=Q;for(Q|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Mo(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var f=c.sibling,m=c.return;if(wS(c),c===u){A=null;break}if(f!==null){f.return=m,A=f;break}A=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,A=g;break e}A=s.return}}var p=t.current;for(A=p;A!==null;){o=A;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,A=y;else e:for(o=p;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(I){Ee(a,a.return,I)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Q=i,Br(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Pc,t)}catch{}r=!0}return r}finally{ne=n,$t.transition=e}}return!1}function Lv(t,e,n){e=Rs(n,e),e=uS(t,e,1),t=vr(t,e,1),e=rt(),t!==null&&(Fa(t,1,e),ht(t,e))}function Ee(t,e,n){if(t.tag===3)Lv(t,t,n);else for(;e!==null;){if(e.tag===3){Lv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=Rs(n,t),t=cS(e,t,1),e=vr(e,t,1),t=rt(),e!==null&&(Fa(e,1,t),ht(e,t));break}}e=e.return}}function Mk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(We&n)===n&&(Re===4||Re===3&&(We&130023424)===We&&500>xe()-$m?ui(t,0):Mm|=n),ht(t,e)}function RS(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=rt();t=Mn(t,e),t!==null&&(Fa(t,e,n),ht(t,n))}function $k(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),RS(t,n)}function jk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),RS(t,n)}var OS;OS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,Tk(t,e,n);ut=!!(t.flags&131072)}else ut=!1,ge&&e.flags&1048576&&DE(e,bu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Kl(t,e),t=e.pendingProps;var i=Is(e,Qe.current);ys(e,n),i=Rm(null,e,r,t,i,n);var s=Om();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,Tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tm(e),i.updater=Lc,e.stateNode=i,i._reactInternals=e,Ah(e,r,t,n),e=Mh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&vm(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Uk(r),t=Wt(r,t),i){case 0:e=Lh(null,e,r,t,n);break e;case 1:e=Tv(null,e,r,t,n);break e;case 11:e=xv(null,e,r,t,n);break e;case 14:e=Cv(null,e,r,Wt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Lh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Tv(t,e,r,i,n);case 3:e:{if(pS(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jE(t,e),Ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Rs(Error(b(423)),e),e=Iv(t,e,r,n,i);break e}else if(r!==i){i=Rs(Error(b(424)),e),e=Iv(t,e,r,n,i);break e}else for(wt=yr(e.stateNode.containerInfo.firstChild),Tt=e,ge=!0,Ht=null,n=BE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===i){e=$n(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return WE(e),t===null&&Rh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Th(r,i)?o=null:s!==null&&Th(r,s)&&(e.flags|=32),hS(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&Rh(e),null;case 13:return mS(t,e,n);case 4:return Im(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ks(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),xv(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(ku,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!dt.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Oh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Oh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=jt(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Cv(t,e,r,i,n);case 15:return dS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Kl(t,e),e.tag=1,ft(r)?(t=!0,Tu(e)):t=!1,ys(e,n),UE(e,r,i),Ah(e,r,i,n),Mh(null,e,r,!0,t,n);case 19:return gS(t,e,n);case 22:return fS(t,e,n)}throw Error(b(156,e.tag))};function NS(t,e){return iE(t,e)}function Fk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new Fk(t,e,n,r)}function zm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Uk(t){if(typeof t=="function")return zm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===om)return 11;if(t===am)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return ci(n.children,i,s,e);case sm:o=8,i|=8;break;case rh:return t=Mt(12,n,e,i|2),t.elementType=rh,t.lanes=s,t;case ih:return t=Mt(13,n,e,i),t.elementType=ih,t.lanes=s,t;case sh:return t=Mt(19,n,e,i),t.elementType=sh,t.lanes=s,t;case zw:return Fc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fw:o=10;break e;case Uw:o=9;break e;case om:o=11;break e;case am:o=14;break e;case er:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Fc(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=zw,t.lanes=n,t.stateNode={isHidden:!1},t}function hf(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function pf(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kd(0),this.expirationTimes=Kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bm(t,e,n,r,i,s,o,a,l){return t=new zk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tm(s),t}function Bk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function AS(t){if(!t)return Ar;t=t._reactInternals;e:{if(Di(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(ft(n))return NE(t,n,e)}return e}function DS(t,e,n,r,i,s,o,a,l){return t=Bm(n,r,!0,t,i,s,o,a,l),t.context=AS(null),n=t.current,r=rt(),i=wr(n),s=Nn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,Fa(t,i,r),ht(t,r),t}function Uc(t,e,n,r){var i=e.current,s=rt(),o=wr(i);return n=AS(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(Xt(t,i,o,s),Vl(t,i,o)),o}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wm(t,e){Mv(t,e),(t=t.alternate)&&Mv(t,e)}function Wk(){return null}var LS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vm(t){this._internalRoot=t}zc.prototype.render=Vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Uc(t,e,null,null)};zc.prototype.unmount=Vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){Uc(null,t,null,null)}),e[Ln]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=dE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&hE(t)}};function Hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $v(){}function Vk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ju(o);s.call(u)}}var o=DS(e,r,t,0,null,!1,!1,"",$v);return t._reactRootContainer=o,t[Ln]=o.current,oa(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ju(l);a.call(u)}}var l=Bm(t,0,!1,null,null,!1,!1,"",$v);return t._reactRootContainer=l,t[Ln]=l.current,oa(t.nodeType===8?t.parentNode:t),wi(function(){Uc(e,l,n,r)}),l}function Wc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ju(o);a.call(l)}}Uc(e,o,t,i)}else o=Vk(n,e,t,i,r);return ju(o)}uE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(cm(e,n|1),ht(e,xe()),!(Q&6)&&(Os=xe()+500,Br()))}break;case 13:wi(function(){var r=Mn(t,1);if(r!==null){var i=rt();Xt(r,t,1,i)}}),Wm(t,1)}};dm=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=rt();Xt(e,t,134217728,n)}Wm(t,134217728)}};cE=function(t){if(t.tag===13){var e=wr(t),n=Mn(t,e);if(n!==null){var r=rt();Xt(n,t,e,r)}Wm(t,e)}};dE=function(){return ne};fE=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};mh=function(t,e,n){switch(e){case"input":if(lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ac(r);if(!i)throw Error(b(90));Ww(r),lh(r,i)}}}break;case"textarea":Hw(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};Jw=jm;Zw=wi;var Hk={usingClientEntryPoint:!1,Events:[za,ts,Ac,Qw,Xw,jm]},go={findFiberByHostInstance:ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gk={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nE(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||Wk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Pc=xl.inject(Gk),dn=xl}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hm(e))throw Error(b(200));return Bk(t,e,null,n)};Rt.createRoot=function(t,e){if(!Hm(t))throw Error(b(299));var n=!1,r="",i=LS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bm(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,oa(t.nodeType===8?t.parentNode:t),new Vm(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=nE(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return wi(t)};Rt.hydrate=function(t,e,n){if(!Bc(e))throw Error(b(200));return Wc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Hm(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=LS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=DS(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zc(e)};Rt.render=function(t,e,n){if(!Bc(e))throw Error(b(200));return Wc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(b(40));return t._reactRootContainer?(wi(function(){Wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Rt.unstable_batchedUpdates=jm;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bc(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Wc(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function MS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(MS)}catch(t){console.error(t)}}MS(),Dw.exports=Rt;var $S=Dw.exports,jv=$S;th.createRoot=jv.createRoot,th.hydrateRoot=jv.hydrateRoot;/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}var fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fr||(fr={}));const Fv="popstate";function Kk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return qh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fu(i)}return Yk(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qk(){return Math.random().toString(36).substr(2,8)}function Uv(t,e){return{usr:t.state,key:t.key,idx:e}}function qh(t,e,n,r){return n===void 0&&(n=null),ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ys(e):e,{state:n,key:e&&e.key||r||qk()})}function Fu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ys(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Yk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=fr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ma({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=fr.Pop;let S=c(),g=S==null?null:S-u;u=S,l&&l({action:a,location:_.location,delta:g})}function f(S,g){a=fr.Push;let p=qh(_.location,S,g);n&&n(p,S),u=c()+1;let y=Uv(p,u),w=_.createHref(p);try{o.pushState(y,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function m(S,g){a=fr.Replace;let p=qh(_.location,S,g);n&&n(p,S),u=c();let y=Uv(p,u),w=_.createHref(p);o.replaceState(y,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Fu(S);return p=p.replace(/ $/,"%20"),_e(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let _={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fv,d),l=S,()=>{i.removeEventListener(Fv,d),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let g=v(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(S){return o.go(S)}};return _}var zv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zv||(zv={}));function Qk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ys(e):e,i=Ns(r.pathname||"/",n);if(i==null)return null;let s=FS(t);Xk(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=lP(i);o=oP(s[a],l)}return o}function FS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Sr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),FS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:iP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of US(s.path))i(s,o,l)}),e}function US(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=US(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Xk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jk=/^:[\w-]+$/,Zk=3,eP=2,tP=1,nP=10,rP=-2,Bv=t=>t==="*";function iP(t,e){let n=t.split("/"),r=n.length;return n.some(Bv)&&(r+=rP),e&&(r+=eP),n.filter(i=>!Bv(i)).reduce((i,s)=>i+(Jk.test(s)?Zk:s===""?tP:nP),r)}function sP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Yh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Sr([i,c.pathname]),pathnameBase:fP(Sr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Sr([i,c.pathnameBase]))}return s}function Yh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:m}=c;if(f==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[d];return m&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function aP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ns(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ys(t):t;return{pathname:n?n.startsWith("/")?n:cP(n,e):e,search:hP(r),hash:pP(i)}}function cP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gm(t,e){let n=dP(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Km(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ys(t):(i=ma({},t),_e(!i.pathname||!i.pathname.includes("?"),mf("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),mf("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),mf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=uP(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Sr=t=>t.join("/").replace(/\/\/+/g,"/"),fP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zS=["post","put","patch","delete"];new Set(zS);const gP=["get",...zS];new Set(gP);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ga.apply(this,arguments)}const Vc=E.createContext(null),BS=E.createContext(null),Wn=E.createContext(null),Hc=E.createContext(null),Vn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),WS=E.createContext(null);function yP(t,e){let{relative:n}=e===void 0?{}:e;Qs()||_e(!1);let{basename:r,navigator:i}=E.useContext(Wn),{hash:s,pathname:o,search:a}=Kc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Sr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Qs(){return E.useContext(Hc)!=null}function Xs(){return Qs()||_e(!1),E.useContext(Hc).location}function VS(t){E.useContext(Wn).static||E.useLayoutEffect(t)}function Gc(){let{isDataRoute:t}=E.useContext(Vn);return t?NP():vP()}function vP(){Qs()||_e(!1);let t=E.useContext(Vc),{basename:e,future:n,navigator:r}=E.useContext(Wn),{matches:i}=E.useContext(Vn),{pathname:s}=Xs(),o=JSON.stringify(Gm(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return VS(()=>{a.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Km(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Sr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const _P=E.createContext(null);function wP(t){let e=E.useContext(Vn).outlet;return e&&E.createElement(_P.Provider,{value:t},e)}function Kc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Wn),{matches:i}=E.useContext(Vn),{pathname:s}=Xs(),o=JSON.stringify(Gm(i,r.v7_relativeSplatPath));return E.useMemo(()=>Km(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function EP(t,e){return SP(t,e)}function SP(t,e,n,r){Qs()||_e(!1);let{navigator:i}=E.useContext(Wn),{matches:s}=E.useContext(Vn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Xs(),c;if(e){var d;let S=typeof e=="string"?Ys(e):e;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||_e(!1),c=S}else c=u;let f=c.pathname||"/",m=f;if(l!=="/"){let S=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=Qk(t,{pathname:m}),_=bP(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Sr([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Sr([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&_?E.createElement(Hc.Provider,{value:{location:ga({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:fr.Pop}},_):_}function xP(){let t=OP(),e=mP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const CP=E.createElement(xP,null);class TP extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(Vn.Provider,{value:this.props.routeContext},E.createElement(WS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IP(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Vc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Vn.Provider,{value:e},r)}function bP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||_e(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:m}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let m,v=!1,_=null,S=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||CP,l&&(u<0&&f===0?(AP("route-fallback",!1),v=!0,S=null):u===f&&(v=!0,S=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),p=()=>{let y;return m?y=_:v?y=S:d.route.Component?y=E.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,E.createElement(IP,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?E.createElement(TP,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var HS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(HS||{}),Uu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uu||{});function kP(t){let e=E.useContext(Vc);return e||_e(!1),e}function PP(t){let e=E.useContext(BS);return e||_e(!1),e}function RP(t){let e=E.useContext(Vn);return e||_e(!1),e}function GS(t){let e=RP(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function OP(){var t;let e=E.useContext(WS),n=PP(Uu.UseRouteError),r=GS(Uu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function NP(){let{router:t}=kP(HS.UseNavigateStable),e=GS(Uu.UseNavigateStable),n=E.useRef(!1);return VS(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ga({fromRouteId:e},s)))},[t,e])}const Wv={};function AP(t,e,n){!e&&!Wv[t]&&(Wv[t]=!0)}function DP(t){let{to:e,replace:n,state:r,relative:i}=t;Qs()||_e(!1);let{future:s,static:o}=E.useContext(Wn),{matches:a}=E.useContext(Vn),{pathname:l}=Xs(),u=Gc(),c=Km(e,Gm(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return E.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function LP(t){return wP(t.context)}function Yi(t){_e(!1)}function MP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:s,static:o=!1,future:a}=t;Qs()&&_e(!1);let l=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:ga({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ys(r));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:v="default"}=r,_=E.useMemo(()=>{let S=Ns(c,l);return S==null?null:{location:{pathname:S,search:d,hash:f,state:m,key:v},navigationType:i}},[l,c,d,f,m,v,i]);return _==null?null:E.createElement(Wn.Provider,{value:u},E.createElement(Hc.Provider,{children:n,value:_}))}function $P(t){let{children:e,location:n}=t;return EP(Qh(e),n)}new Promise(()=>{});function Qh(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Qh(r.props.children,s));return}r.type!==Yi&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(this,arguments)}function KS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FP(t,e){return t.button===0&&(!e||e==="_self")&&!jP(t)}const UP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],zP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],BP="6";try{window.__reactRouterVersion=BP}catch{}const WP=E.createContext({isTransitioning:!1}),VP="startTransition",Vv=eh[VP];function HP(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=Kk({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(d=>{u&&Vv?Vv(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(MP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const GP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qP=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=KS(e,UP),{basename:m}=E.useContext(Wn),v,_=!1;if(typeof u=="string"&&KP.test(u)&&(v=u,GP))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),I=Ns(w.pathname,m);w.origin===y.origin&&I!=null?u=I+w.search+w.hash:_=!0}catch{}let S=yP(u,{relative:i}),g=QP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function p(y){r&&r(y),y.defaultPrevented||g(y)}return E.createElement("a",zu({},f,{href:v||S,onClick:_||s?r:p,ref:n,target:l}))}),Wa=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=KS(e,zP),f=Kc(l,{relative:d.relative}),m=Xs(),v=E.useContext(BS),{navigator:_,basename:S}=E.useContext(Wn),g=v!=null&&XP(f)&&u===!0,p=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,y=m.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,p=p.toLowerCase()),w&&S&&(w=Ns(w,S)||w);const I=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let x=y===p||!o&&y.startsWith(p)&&y.charAt(I)==="/",C=w!=null&&(w===p||!o&&w.startsWith(p)&&w.charAt(p.length)==="/"),P={isActive:x,isPending:C,isTransitioning:g},L=x?r:void 0,M;typeof s=="function"?M=s(P):M=[s,x?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(P):a;return E.createElement(qP,zu({},d,{"aria-current":L,className:M,ref:n,style:B,to:l,unstable_viewTransition:u}),typeof c=="function"?c(P):c)});var Xh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xh||(Xh={}));var Hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hv||(Hv={}));function YP(t){let e=E.useContext(Vc);return e||_e(!1),e}function QP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Gc(),u=Xs(),c=Kc(t,{relative:o});return E.useCallback(d=>{if(FP(d,n)){d.preventDefault();let f=r!==void 0?r:Fu(u)===Fu(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function XP(t,e){e===void 0&&(e={});let n=E.useContext(WP);n==null&&_e(!1);let{basename:r}=YP(Xh.useViewTransitionState),i=Kc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ns(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ns(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yh(i.pathname,o)!=null||Yh(i.pathname,s)!=null}var Me=function(){return Me=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Me.apply(this,arguments)};function ya(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var de="-ms-",Fo="-moz-",Z="-webkit-",qS="comm",qc="rule",qm="decl",JP="@import",YS="@keyframes",ZP="@layer",QS=Math.abs,Ym=String.fromCharCode,Jh=Object.assign;function eR(t,e){return De(t,0)^45?(((e<<2^De(t,0))<<2^De(t,1))<<2^De(t,2))<<2^De(t,3):0}function XS(t){return t.trim()}function Tn(t,e){return(t=e.exec(t))?t[0]:t}function W(t,e,n){return t.replace(e,n)}function Xl(t,e,n){return t.indexOf(e,n)}function De(t,e){return t.charCodeAt(e)|0}function As(t,e,n){return t.slice(e,n)}function un(t){return t.length}function JS(t){return t.length}function Io(t,e){return e.push(t),t}function tR(t,e){return t.map(e).join("")}function Gv(t,e){return t.filter(function(n){return!Tn(n,e)})}var Yc=1,Ds=1,ZS=0,Ut=0,Te=0,Js="";function Qc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Yc,column:Ds,length:o,return:"",siblings:a}}function Zn(t,e){return Jh(Qc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Gi(t){for(;t.root;)t=Zn(t.root,{children:[t]});Io(t,t.siblings)}function nR(){return Te}function rR(){return Te=Ut>0?De(Js,--Ut):0,Ds--,Te===10&&(Ds=1,Yc--),Te}function Jt(){return Te=Ut<ZS?De(Js,Ut++):0,Ds++,Te===10&&(Ds=1,Yc++),Te}function di(){return De(Js,Ut)}function Jl(){return Ut}function Xc(t,e){return As(Js,t,e)}function Zh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iR(t){return Yc=Ds=1,ZS=un(Js=t),Ut=0,[]}function sR(t){return Js="",t}function gf(t){return XS(Xc(Ut-1,ep(t===91?t+2:t===40?t+1:t)))}function oR(t){for(;(Te=di())&&Te<33;)Jt();return Zh(t)>2||Zh(Te)>3?"":" "}function aR(t,e){for(;--e&&Jt()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Xc(t,Jl()+(e<6&&di()==32&&Jt()==32))}function ep(t){for(;Jt();)switch(Te){case t:return Ut;case 34:case 39:t!==34&&t!==39&&ep(Te);break;case 40:t===41&&ep(t);break;case 92:Jt();break}return Ut}function lR(t,e){for(;Jt()&&t+Te!==57;)if(t+Te===84&&di()===47)break;return"/*"+Xc(e,Ut-1)+"*"+Ym(t===47?t:Jt())}function uR(t){for(;!Zh(di());)Jt();return Xc(t,Ut)}function cR(t){return sR(Zl("",null,null,null,[""],t=iR(t),0,[0],t))}function Zl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,v=0,_=1,S=1,g=1,p=0,y="",w=i,I=s,x=r,C=y;S;)switch(v=p,p=Jt()){case 40:if(v!=108&&De(C,d-1)==58){Xl(C+=W(gf(p),"&","&\f"),"&\f",QS(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=gf(p);break;case 9:case 10:case 13:case 32:C+=oR(v);break;case 92:C+=aR(Jl()-1,7);continue;case 47:switch(di()){case 42:case 47:Io(dR(lR(Jt(),Jl()),e,n,l),l);break;default:C+="/"}break;case 123*_:a[u++]=un(C)*g;case 125*_:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+c:g==-1&&(C=W(C,/\f/g,"")),m>0&&un(C)-d&&Io(m>32?qv(C+";",r,n,d-1,l):qv(W(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(Io(x=Kv(C,e,n,u,c,i,a,y,w=[],I=[],d,s),s),p===123)if(c===0)Zl(C,e,x,x,w,s,d,a,I);else switch(f===99&&De(C,3)===110?100:f){case 100:case 108:case 109:case 115:Zl(t,x,x,r&&Io(Kv(t,x,x,0,0,i,a,y,i,w=[],d,I),I),i,I,d,a,r?w:I);break;default:Zl(C,x,x,x,[""],I,0,a,I)}}u=c=m=0,_=g=1,y=C="",d=o;break;case 58:d=1+un(C),m=v;default:if(_<1){if(p==123)--_;else if(p==125&&_++==0&&rR()==125)continue}switch(C+=Ym(p),p*_){case 38:g=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(un(C)-1)*g,g=1;break;case 64:di()===45&&(C+=gf(Jt())),f=di(),c=d=un(y=C+=uR(Jl())),p++;break;case 45:v===45&&un(C)==2&&(_=0)}}return s}function Kv(t,e,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,m=i===0?s:[""],v=JS(m),_=0,S=0,g=0;_<r;++_)for(var p=0,y=As(t,f+1,f=QS(S=o[_])),w=t;p<v;++p)(w=XS(S>0?m[p]+" "+y:W(y,/&\f/g,m[p])))&&(l[g++]=w);return Qc(t,e,n,i===0?qc:a,l,u,c,d)}function dR(t,e,n,r){return Qc(t,e,n,qS,Ym(nR()),As(t,2,-2),0,r)}function qv(t,e,n,r,i){return Qc(t,e,n,qm,As(t,0,r),As(t,r+1,-1),r,i)}function e1(t,e,n){switch(eR(t,e)){case 5103:return Z+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+t+t;case 4789:return Fo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+t+Fo+t+de+t+t;case 5936:switch(De(t,e+11)){case 114:return Z+t+de+W(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Z+t+de+W(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Z+t+de+W(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Z+t+de+t+t;case 6165:return Z+t+de+"flex-"+t+t;case 5187:return Z+t+W(t,/(\w+).+(:[^]+)/,Z+"box-$1$2"+de+"flex-$1$2")+t;case 5443:return Z+t+de+"flex-item-"+W(t,/flex-|-self/g,"")+(Tn(t,/flex-|baseline/)?"":de+"grid-row-"+W(t,/flex-|-self/g,""))+t;case 4675:return Z+t+de+"flex-line-pack"+W(t,/align-content|flex-|-self/g,"")+t;case 5548:return Z+t+de+W(t,"shrink","negative")+t;case 5292:return Z+t+de+W(t,"basis","preferred-size")+t;case 6060:return Z+"box-"+W(t,"-grow","")+Z+t+de+W(t,"grow","positive")+t;case 4554:return Z+W(t,/([^-])(transform)/g,"$1"+Z+"$2")+t;case 6187:return W(W(W(t,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),t,"")+t;case 5495:case 3959:return W(t,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return W(W(t,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+de+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+t+t;case 4200:if(!Tn(t,/flex-|baseline/))return de+"grid-column-align"+As(t,e)+t;break;case 2592:case 3360:return de+W(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Tn(r.props,/grid-\w+-end/)})?~Xl(t+(n=n[e].value),"span",0)?t:de+W(t,"-start","")+t+de+"grid-row-span:"+(~Xl(n,"span",0)?Tn(n,/\d+/):+Tn(n,/\d+/)-+Tn(t,/\d+/))+";":de+W(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Tn(r.props,/grid-\w+-start/)})?t:de+W(W(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return W(t,/(.+)-inline(.+)/,Z+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(t)-1-e>6)switch(De(t,e+1)){case 109:if(De(t,e+4)!==45)break;case 102:return W(t,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Fo+(De(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Xl(t,"stretch",0)?e1(W(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return W(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return de+i+":"+s+u+(o?de+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(De(t,e+6)===121)return W(t,":",":"+Z)+t;break;case 6444:switch(De(t,De(t,14)===45?18:11)){case 120:return W(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(De(t,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+de+"$2box$3")+t;case 100:return W(t,":",":"+de)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(t,"scroll-","scroll-snap-")+t}return t}function Bu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function fR(t,e,n,r){switch(t.type){case ZP:if(t.children.length)break;case JP:case qm:return t.return=t.return||t.value;case qS:return"";case YS:return t.return=t.value+"{"+Bu(t.children,r)+"}";case qc:if(!un(t.value=t.props.join(",")))return""}return un(n=Bu(t.children,r))?t.return=t.value+"{"+n+"}":""}function hR(t){var e=JS(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function pR(t){return function(e){e.root||(e=e.return)&&t(e)}}function mR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case qm:t.return=e1(t.value,t.length,n);return;case YS:return Bu([Zn(t,{value:W(t.value,"@","@"+Z)})],r);case qc:if(t.length)return tR(n=t.props,function(i){switch(Tn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gi(Zn(t,{props:[W(i,/:(read-\w+)/,":"+Fo+"$1")]})),Gi(Zn(t,{props:[i]})),Jh(t,{props:Gv(n,r)});break;case"::placeholder":Gi(Zn(t,{props:[W(i,/:(plac\w+)/,":"+Z+"input-$1")]})),Gi(Zn(t,{props:[W(i,/:(plac\w+)/,":"+Fo+"$1")]})),Gi(Zn(t,{props:[W(i,/:(plac\w+)/,de+"input-$1")]})),Gi(Zn(t,{props:[i]})),Jh(t,{props:Gv(n,r)});break}return""})}}var gR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},Ls=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",t1="active",n1="data-styled-version",Jc="6.1.8",Qm=`/*!sc*/
`,Xm=typeof window<"u"&&"HTMLElement"in window,yR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),vR={},Zc=Object.freeze([]),Ms=Object.freeze({});function r1(t,e,n){return n===void 0&&(n=Ms),t.theme!==n.theme&&t.theme||e||n.theme}var i1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_R=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wR=/(^-|-$)/g;function Yv(t){return t.replace(_R,"-").replace(wR,"")}var ER=/(a)(d)/gi,Cl=52,Qv=function(t){return String.fromCharCode(t+(t>25?39:97))};function tp(t){var e,n="";for(e=Math.abs(t);e>Cl;e=e/Cl|0)n=Qv(e%Cl)+n;return(Qv(e%Cl)+n).replace(ER,"$1-$2")}var yf,s1=5381,ls=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},o1=function(t){return ls(s1,t)};function a1(t){return tp(o1(t)>>>0)}function SR(t){return t.displayName||t.name||"Component"}function vf(t){return typeof t=="string"&&!0}var l1=typeof Symbol=="function"&&Symbol.for,u1=l1?Symbol.for("react.memo"):60115,xR=l1?Symbol.for("react.forward_ref"):60112,CR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IR=((yf={})[xR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yf[u1]=c1,yf);function Xv(t){return("type"in(e=t)&&e.type.$$typeof)===u1?c1:"$$typeof"in t?IR[t.$$typeof]:CR;var e}var bR=Object.defineProperty,kR=Object.getOwnPropertyNames,Jv=Object.getOwnPropertySymbols,PR=Object.getOwnPropertyDescriptor,RR=Object.getPrototypeOf,Zv=Object.prototype;function d1(t,e,n){if(typeof e!="string"){if(Zv){var r=RR(e);r&&r!==Zv&&d1(t,r,n)}var i=kR(e);Jv&&(i=i.concat(Jv(e)));for(var s=Xv(t),o=Xv(e),a=0;a<i.length;++a){var l=i[a];if(!(l in TR||n&&n[l]||o&&l in o||s&&l in s)){var u=PR(e,l);try{bR(t,l,u)}catch{}}}}return t}function Ei(t){return typeof t=="function"}function Jm(t){return typeof t=="object"&&"styledComponentId"in t}function oi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function np(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function va(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function rp(t,e,n){if(n===void 0&&(n=!1),!n&&!va(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=rp(t[r],e[r]);else if(va(e))for(var r in e)t[r]=rp(t[r],e[r]);return t}function Zm(t,e){Object.defineProperty(t,"toString",{value:e})}function Si(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var OR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Si(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Qm);return n},t}(),eu=new Map,Wu=new Map,tu=1,Tl=function(t){if(eu.has(t))return eu.get(t);for(;Wu.has(tu);)tu++;var e=tu++;return eu.set(t,e),Wu.set(e,t),e},NR=function(t,e){tu=e+1,eu.set(t,e),Wu.set(e,t)},AR="style[".concat(Ls,"][").concat(n1,'="').concat(Jc,'"]'),DR=new RegExp("^".concat(Ls,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),LR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},MR=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Qm),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(DR);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(NR(c,u),LR(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function $R(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var f1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ls,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ls,t1),r.setAttribute(n1,Jc);var o=$R();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},jR=function(){function t(e){this.element=f1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Si(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),FR=function(){function t(e){this.element=f1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),UR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),e_=Xm,zR={isServer:!Xm,useCSSOMInjection:!yR},Vu=function(){function t(e,n,r){e===void 0&&(e=Ms),n===void 0&&(n={});var i=this;this.options=Me(Me({},zR),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Xm&&e_&&(e_=!1,function(s){for(var o=document.querySelectorAll(AR),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ls)!==t1&&(MR(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Zm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(g){return Wu.get(g)}(d);if(f===void 0)return"continue";var m=s.names.get(f),v=o.getGroup(d);if(m===void 0||v.length===0)return"continue";var _="".concat(Ls,".g").concat(d,'[id="').concat(f,'"]'),S="";m!==void 0&&m.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),l+="".concat(v).concat(_,'{content:"').concat(S,'"}').concat(Qm)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Tl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Me(Me({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new UR(i):r?new jR(i):new FR(i)}(this.options),new OR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Tl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Tl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Tl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),BR=/&/g,WR=/^\s*\/\/.*$/gm;function h1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=h1(n.children,e)),n})}function VR(t){var e,n,r,i=t===void 0?Ms:t,s=i.options,o=s===void 0?Ms:s,a=i.plugins,l=a===void 0?Zc:a,u=function(f,m,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===qc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(BR,n).replace(r,u))}),o.prefix&&c.push(mR),c.push(fR);var d=function(f,m,v,_){m===void 0&&(m=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(WR,""),g=cR(v||m?"".concat(v," ").concat(m," { ").concat(S," }"):S);o.namespace&&(g=h1(g,o.namespace));var p=[];return Bu(g,hR(c.concat(pR(function(y){return p.push(y)})))),p};return d.hash=l.length?l.reduce(function(f,m){return m.name||Si(15),ls(f,m.name)},s1).toString():"",d}var HR=new Vu,ip=VR(),p1=Ce.createContext({shouldForwardProp:void 0,styleSheet:HR,stylis:ip});p1.Consumer;Ce.createContext(void 0);function sp(){return E.useContext(p1)}var GR=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ip);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Zm(this,function(){throw Si(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ip),this.name+e.hash},t}(),KR=function(t){return t>="A"&&t<="Z"};function t_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;KR(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var m1=function(t){return t==null||t===!1||t===""},g1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!m1(s)&&(Array.isArray(s)&&s.isCss||Ei(s)?r.push("".concat(t_(i),":"),s,";"):va(s)?r.push.apply(r,ya(ya(["".concat(i," {")],g1(s),!1),["}"],!1)):r.push("".concat(t_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in gR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xr(t,e,n,r){if(m1(t))return[];if(Jm(t))return[".".concat(t.styledComponentId)];if(Ei(t)){if(!Ei(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return xr(i,e,n,r)}var s;return t instanceof GR?n?(t.inject(n,r),[t.getName(r)]):[t]:va(t)?g1(t):Array.isArray(t)?Array.prototype.concat.apply(Zc,t.map(function(o){return xr(o,e,n,r)})):[t.toString()]}function y1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ei(n)&&!Jm(n))return!1}return!0}var qR=o1(Jc),YR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&y1(e),this.componentId=n,this.baseHash=ls(qR,n),this.baseStyle=r,Vu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=oi(i,this.staticRulesId);else{var s=np(xr(this.rules,e,n,r)),o=tp(ls(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=oi(i,o),this.staticRulesId=o}else{for(var l=ls(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=np(xr(d,e,n,r));l=ls(l,f+c),u+=f}}if(u){var m=tp(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=oi(i,m)}}return i},t}(),_a=Ce.createContext(void 0);_a.Consumer;function QR(t){var e=Ce.useContext(_a),n=E.useMemo(function(){return function(r,i){if(!r)throw Si(14);if(Ei(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Si(8);return i?Me(Me({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?Ce.createElement(_a.Provider,{value:n},t.children):null}var _f={};function XR(t,e,n){var r=Jm(t),i=t,s=!vf(t),o=e.attrs,a=o===void 0?Zc:o,l=e.componentId,u=l===void 0?function(w,I){var x=typeof w!="string"?"sc":Yv(w);_f[x]=(_f[x]||0)+1;var C="".concat(x,"-").concat(a1(Jc+x+_f[x]));return I?"".concat(I,"-").concat(C):C}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(w){return vf(w)?"styled.".concat(w):"Styled(".concat(SR(w),")")}(t):c,f=e.displayName&&e.componentId?"".concat(Yv(e.displayName),"-").concat(e.componentId):e.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;v=function(w,I){return _(w,I)&&S(w,I)}}else v=_}var g=new YR(n,f,r?i.componentStyle:void 0);function p(w,I){return function(x,C,P){var L=x.attrs,M=x.componentStyle,B=x.defaultProps,ot=x.foldedComponentIds,oe=x.styledComponentId,gt=x.target,vn=Ce.useContext(_a),qr=sp(),_n=x.shouldForwardProp||qr.shouldForwardProp,O=r1(C,vn,B)||Ms,$=function(et,He,yt){for(var Yn,rn=Me(Me({},He),{className:void 0,theme:yt}),Vi=0;Vi<et.length;Vi+=1){var Qn=Ei(Yn=et[Vi])?Yn(rn):Yn;for(var sn in Qn)rn[sn]=sn==="className"?oi(rn[sn],Qn[sn]):sn==="style"?Me(Me({},rn[sn]),Qn[sn]):Qn[sn]}return He.className&&(rn.className=oi(rn.className,He.className)),rn}(L,C,O),U=$.as||gt,X={};for(var Y in $)$[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&$.theme===O||(Y==="forwardedAs"?X.as=$.forwardedAs:_n&&!_n(Y,U)||(X[Y]=$[Y]));var nn=function(et,He){var yt=sp(),Yn=et.generateAndInjectStyles(He,yt.styleSheet,yt.stylis);return Yn}(M,$),Ze=oi(ot,oe);return nn&&(Ze+=" "+nn),$.className&&(Ze+=" "+$.className),X[vf(U)&&!i1.has(U)?"class":"className"]=Ze,X.ref=P,E.createElement(U,X)}(y,w,I)}p.displayName=d;var y=Ce.forwardRef(p);return y.attrs=m,y.componentStyle=g,y.displayName=d,y.shouldForwardProp=v,y.foldedComponentIds=r?oi(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(I){for(var x=[],C=1;C<arguments.length;C++)x[C-1]=arguments[C];for(var P=0,L=x;P<L.length;P++)rp(I,L[P],!0);return I}({},i.defaultProps,w):w}}),Zm(y,function(){return".".concat(y.styledComponentId)}),s&&d1(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function n_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var r_=function(t){return Object.assign(t,{isCss:!0})};function v1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ei(t)||va(t))return r_(xr(n_(Zc,ya([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?xr(r):r_(xr(n_(r,e)))}function op(t,e,n){if(n===void 0&&(n=Ms),!e)throw Si(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,v1.apply(void 0,ya([i],s,!1)))};return r.attrs=function(i){return op(t,e,Me(Me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return op(t,e,Me(Me({},n),i))},r}var _1=function(t){return op(XR,t)},k=_1;i1.forEach(function(t){k[t]=_1(t)});var JR=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=y1(e),Vu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(np(xr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Vu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function ZR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=v1.apply(void 0,ya([t],e,!1)),i="sc-global-".concat(a1(JSON.stringify(r))),s=new JR(r,i),o=function(l){var u=sp(),c=Ce.useContext(_a),d=Ce.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Ce.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(s.isStatic)s.renderStyles(l,vR,c,f);else{var m=Me(Me({},u),{theme:r1(u,d,o.defaultProps)});s.renderStyles(l,m,c,f)}}return Ce.memo(o)}const eO={colors:{rootBodyColor:"rgb(238, 238, 238)",addBodyColor:"#ffffff",mainBlack:"#121417",accentBlack:"rgba(18, 20, 23, 0.1)",addAccentBlack:"#121417B3",mainBgBlack:"rgba(0, 0, 0, 0.8)",mainWhite:"rgb(255, 255, 255)",mainGrey:"#8A8A89",accentGrey:"#F8F8F8",mainYellow:"#F4C550",accentYellow:"#FBE9BA",mainRed:"#EF5050"},transitions:{cubic:"cubic-bezier(0.4, 0, 0.2, 1)"}},tO=ZR`

body {
font-family: 'Roboto', sans-serif;
line-height: 1.5;
 background-color: ${({theme:{colors:t}})=>t.addBodyColor};

}

h1,
h2, 
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
    text-decoration: none;
       cursor: pointer;
}

button {
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
}

`,Zs=k.section`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 1440px) {
    width: 1214px;
  }
`,w1=k.section`
  padding-top: 96px;
  padding-bottom: 96px;
  min-height: 100vh;
  background-color: ${({theme:{colors:t}})=>t.rootBodyColor};
`;k.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;const nO=k.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    /* gap: 30px; */
  }
`,rO=k.header`
  padding: 20px 128px;
`,i_=k.span`
  margin-right: 8px;
`,iO=k(Wa)`
  display: flex;
  align-items: center;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -2%;
`,sO=k.span`
  margin-right: 28px;
`,wf=k(Wa)`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  transition: color 250ms ${({theme:{transitions:t}})=>t.cubic};

  &.active {
    color: ${({theme:{colors:t}})=>t.mainYellow};
  }
`,oO=k.span`
  margin-left: 28px;
`,s_=k.button`
  padding: 14px 39px;
  border-radius: 12px;
  background-color: ${({theme:{colors:t}})=>t.mainBlack};
  color: ${({theme:{colors:t}})=>t.mainWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`,aO=k.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 14px;
`,lO=k.button`
  display: flex;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;let uO={data:""},cO=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||uO,dO=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,fO=/\/\*[^]*?\*\/|  +/g,o_=/\n+/g,sr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?sr(o,s):s+"{"+sr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=sr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=sr.p?sr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},En={},E1=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+E1(t[n]);return e}return t},hO=(t,e,n,r,i)=>{let s=E1(t),o=En[s]||(En[s]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(s));if(!En[o]){let l=s!==t?t:(u=>{let c,d,f=[{}];for(;c=dO.exec(u.replace(fO,""));)c[4]?f.shift():c[3]?(d=c[3].replace(o_," ").trim(),f.unshift(f[0][d]=f[0][d]||{})):f[0][c[1]]=c[2].replace(o_," ").trim();return f[0]})(t);En[o]=sr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&En.g?En.g:null;return n&&(En.g=En[o]),((l,u,c,d)=>{d?u.data=u.data.replace(d,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(En[o],e,r,a),o},pO=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":sr(a,""):a===!1?"":a}return r+i+(o??"")},"");function ed(t){let e=this||{},n=t.call?t(e.p):t;return hO(n.unshift?n.raw?pO(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,cO(e.target),e.g,e.o,e.k)}let S1,ap,lp;ed.bind({g:1});let jn=ed.bind({k:1});function mO(t,e,n,r){sr.p=e,S1=t,ap=n,lp=r}function Wr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:ap&&ap()},a),n.o=/ *go\d+/.test(l),a.className=ed.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),lp&&u[0]&&lp(a),S1(u,a)}return e?e(i):i}}var gO=t=>typeof t=="function",Hu=(t,e)=>gO(t)?t(e):t,yO=(()=>{let t=0;return()=>(++t).toString()})(),x1=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),vO=20,nu=new Map,_O=1e3,a_=t=>{if(nu.has(t))return;let e=setTimeout(()=>{nu.delete(t),Li({type:4,toastId:t})},_O);nu.set(t,e)},wO=t=>{let e=nu.get(t);e&&clearTimeout(e)},up=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,vO)};case 1:return e.toast.id&&wO(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?up(t,{type:1,toast:n}):up(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?a_(r):t.toasts.forEach(s=>{a_(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},ru=[],iu={toasts:[],pausedAt:void 0},Li=t=>{iu=up(iu,t),ru.forEach(e=>{e(iu)})},EO={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},SO=(t={})=>{let[e,n]=E.useState(iu);E.useEffect(()=>(ru.push(n),()=>{let i=ru.indexOf(n);i>-1&&ru.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||EO[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},xO=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||yO()}),Va=t=>(e,n)=>{let r=xO(e,t,n);return Li({type:2,toast:r}),r.id},Et=(t,e)=>Va("blank")(t,e);Et.error=Va("error");Et.success=Va("success");Et.loading=Va("loading");Et.custom=Va("custom");Et.dismiss=t=>{Li({type:3,toastId:t})};Et.remove=t=>Li({type:4,toastId:t});Et.promise=(t,e,n)=>{let r=Et.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Et.success(Hu(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Et.error(Hu(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var CO=(t,e)=>{Li({type:1,toast:{id:t,height:e}})},TO=()=>{Li({type:5,time:Date.now()})},IO=t=>{let{toasts:e,pausedAt:n}=SO(t);E.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&Et.dismiss(a.id);return}return setTimeout(()=>Et.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=E.useCallback(()=>{n&&Li({type:6,time:Date.now()})},[n]),i=E.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},c=e.filter(m=>(m.position||u)===(s.position||u)&&m.height),d=c.findIndex(m=>m.id===s.id),f=c.filter((m,v)=>v<d&&m.visible).length;return c.filter(m=>m.visible).slice(...a?[f+1]:[0,f]).reduce((m,v)=>m+(v.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:CO,startPause:TO,endPause:r,calculateOffset:i}}},bO=jn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,kO=jn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,PO=jn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,RO=Wr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${kO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${PO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,OO=jn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,NO=Wr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${OO} 1s linear infinite;
`,AO=jn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,DO=jn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,LO=Wr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${AO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${DO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,MO=Wr("div")`
  position: absolute;
`,$O=Wr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,jO=jn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,FO=Wr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${jO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,UO=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(FO,null,e):e:n==="blank"?null:E.createElement($O,null,E.createElement(NO,{...r}),n!=="loading"&&E.createElement(MO,null,n==="error"?E.createElement(RO,{...r}):E.createElement(LO,{...r})))},zO=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,BO=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,WO="0%{opacity:0;} 100%{opacity:1;}",VO="0%{opacity:1;} 100%{opacity:0;}",HO=Wr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,GO=Wr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,KO=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=x1()?[WO,VO]:[zO(n),BO(n)];return{animation:e?`${jn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${jn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},qO=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?KO(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(UO,{toast:t}),o=E.createElement(GO,{...t.ariaProps},Hu(t.message,t));return E.createElement(HO,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});mO(E.createElement);var YO=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},QO=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:x1()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},XO=ed`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Il=16,JO=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=IO(n);return E.createElement("div",{style:{position:"fixed",zIndex:9999,top:Il,left:Il,right:Il,bottom:Il,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let c=u.position||e,d=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),f=QO(c,d);return E.createElement(YO,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?XO:"",style:f},u.type==="custom"?Hu(u.message,u):i?i(u):E.createElement(qO,{toast:u,position:c}))}))},Uo=Et;const ZO="/icons/ukraine_blue_yellow.svg",eN="/icons/log-in-01.svg",tN=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  background-color: ${({theme:{colors:t}})=>t.mainBgBlack};
  z-index: 1200;

  @media screen and (max-height: ${({maxHeight:t})=>t}px) {
    align-items: flex-start;
  }
`,nN=k.div`
  max-width: ${({maxWidth:t})=>t}px;
  position: relative;
  padding: 64px;
  border-radius: 30px;
  background-color: ${({theme:{colors:t}})=>t.mainWhite};
`,rN=k.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  padding: 0;
  top: 20px;
  right: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.2);
  }
`;function iN(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var eg=!1;if(typeof window<"u"){var l_={get passive(){eg=!0}};window.addEventListener("testPassive",null,l_),window.removeEventListener("testPassive",null,l_)}var Gu=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),fi=[],Ku=!1,C1=-1,zo=void 0,ni=void 0,Bo=void 0,T1=function(e){return fi.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},qu=function(e){var n=e||window.event;return T1(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},sN=function(e){if(Bo===void 0){var n=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(n&&r>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Bo=document.body.style.paddingRight,document.body.style.paddingRight=i+r+"px"}}zo===void 0&&(zo=document.body.style.overflow,document.body.style.overflow="hidden")},oN=function(){Bo!==void 0&&(document.body.style.paddingRight=Bo,Bo=void 0),zo!==void 0&&(document.body.style.overflow=zo,zo=void 0)},aN=function(){return window.requestAnimationFrame(function(){if(ni===void 0){ni={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,r=e.scrollX,i=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var s=i-window.innerHeight;s&&n>=i&&(document.body.style.top=-(n+s))})},300)}})},lN=function(){if(ni!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=ni.position,document.body.style.top=ni.top,document.body.style.left=ni.left,window.scrollTo(n,e),ni=void 0}},uN=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},cN=function(e,n){var r=e.targetTouches[0].clientY-C1;return T1(e.target)?!1:n&&n.scrollTop===0&&r>0||uN(n)&&r<0?qu(e):(e.stopPropagation(),!0)},dN=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!fi.some(function(i){return i.targetElement===e})){var r={targetElement:e,options:n||{}};fi=[].concat(iN(fi),[r]),Gu?aN():sN(n),Gu&&(e.ontouchstart=function(i){i.targetTouches.length===1&&(C1=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&cN(i,e)},Ku||(document.addEventListener("touchmove",qu,eg?{passive:!1}:void 0),Ku=!0))}},fN=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}fi=fi.filter(function(n){return n.targetElement!==e}),Gu&&(e.ontouchstart=null,e.ontouchmove=null,Ku&&fi.length===0&&(document.removeEventListener("touchmove",qu,eg?{passive:!1}:void 0),Ku=!1)),Gu?lN():oN()};const hN="/icons/x.svg";var I1={exports:{}},b1={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=E;function pN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mN=typeof Object.is=="function"?Object.is:pN,gN=Ha.useSyncExternalStore,yN=Ha.useRef,vN=Ha.useEffect,_N=Ha.useMemo,wN=Ha.useDebugValue;b1.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=yN(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=_N(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var v=o.value;if(i(v,m))return d=v}return d=m}if(v=d,mN(c,m))return v;var _=r(m);return i!==void 0&&i(v,_)?v:(c=m,d=_)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=gN(t,s[0],s[1]);return vN(function(){o.hasValue=!0,o.value=a},[a]),wN(a),a};I1.exports=b1;var EN=I1.exports,St="default"in eh?Ce:eh,u_=Symbol.for("react-redux-context"),c_=typeof globalThis<"u"?globalThis:{};function SN(){if(!St.createContext)return{};const t=c_[u_]??(c_[u_]=new Map);let e=t.get(St.createContext);return e||(e=St.createContext(null),t.set(St.createContext,e)),e}var Dr=SN(),xN=()=>{throw new Error("uSES not initialized!")};function tg(t=Dr){return function(){return St.useContext(t)}}var k1=tg(),P1=xN,CN=t=>{P1=t},TN=(t,e)=>t===e;function IN(t=Dr){const e=t===Dr?k1:tg(t),n=(r,i={})=>{const{equalityFn:s=TN,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();St.useRef(!0);const f=St.useCallback({[r.name](v){return r(v)}}[r.name],[r,c,o.stabilityCheck]),m=P1(l.addNestedSub,a.getState,u||a.getState,f,s);return St.useDebugValue(m),m};return Object.assign(n,{withTypes:()=>n}),n}var Wo=IN();function bN(t){t()}function kN(){let t=null,e=null;return{clear(){t=null,e=null},notify(){bN(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var d_={notify(){},get:()=>[]};function PN(t,e){let n,r=d_,i=0,s=!1;function o(_){c();const S=r.subscribe(_);let g=!1;return()=>{g||(g=!0,S(),d())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=kN())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=d_)}function f(){s||(s=!0,c())}function m(){s&&(s=!1,d())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:m,getListeners:()=>r};return v}var RN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ON=RN?St.useLayoutEffect:St.useEffect;function NN({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=St.useMemo(()=>{const u=PN(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=St.useMemo(()=>t.getState(),[t]);ON(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Dr;return St.createElement(l.Provider,{value:o},n)}var AN=NN;function R1(t=Dr){const e=t===Dr?k1:tg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var DN=R1();function LN(t=Dr){const e=t===Dr?DN:R1(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var td=LN();CN(EN.useSyncExternalStoreWithSelector);const MN=t=>t.auth.isLoggedIn,$N=t=>t.auth.user,jN=t=>t.auth.isRefresh,eo=()=>{const t=Wo(MN),e=Wo(jN),n=Wo($N);return{isUserLoggedIn:t,isUserRefresh:e,userName:n}},FN=document.querySelector("#modal-root"),cp=({close:t,children:e,maxWidth:n,maxHeight:r})=>{const{isUserLoggedIn:i}=eo();E.useEffect(()=>{const o=({code:a})=>{a==="Escape"&&t()};return i&&t(),window.addEventListener("keydown",o),dN(document.body),()=>{window.removeEventListener("keydown",o),fN(document.body)}},[t,i]);const s=({target:o,currentTarget:a})=>{o===a&&t()};return $S.createPortal(h.jsx(tN,{onClick:s,maxHeight:r,children:h.jsxs(nN,{maxWidth:n,children:[h.jsx(rN,{onClick:t,children:h.jsx("img",{src:hN,alt:"icon_close",width:32,height:32})}),e]})}),FN)};var UN=function(e){return zN(e)&&!BN(e)};function zN(t){return!!t&&typeof t=="object"}function BN(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||HN(t)}var WN=typeof Symbol=="function"&&Symbol.for,VN=WN?Symbol.for("react.element"):60103;function HN(t){return t.$$typeof===VN}function GN(t){return Array.isArray(t)?[]:{}}function Yu(t,e){return e.clone!==!1&&e.isMergeableObject(t)?wa(GN(t),t,e):t}function KN(t,e,n){return t.concat(e).map(function(r){return Yu(r,n)})}function qN(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=Yu(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=Yu(e[i],n):r[i]=wa(t[i],e[i],n)}),r}function wa(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||KN,n.isMergeableObject=n.isMergeableObject||UN;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):qN(t,e,n):Yu(e,n)}wa.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return wa(r,i,n)},{})};var dp=wa,O1=typeof global=="object"&&global&&global.Object===Object&&global,YN=typeof self=="object"&&self&&self.Object===Object&&self,yn=O1||YN||Function("return this")(),Lr=yn.Symbol,N1=Object.prototype,QN=N1.hasOwnProperty,XN=N1.toString,yo=Lr?Lr.toStringTag:void 0;function JN(t){var e=QN.call(t,yo),n=t[yo];try{t[yo]=void 0;var r=!0}catch{}var i=XN.call(t);return r&&(e?t[yo]=n:delete t[yo]),i}var ZN=Object.prototype,eA=ZN.toString;function tA(t){return eA.call(t)}var nA="[object Null]",rA="[object Undefined]",f_=Lr?Lr.toStringTag:void 0;function Mi(t){return t==null?t===void 0?rA:nA:f_&&f_ in Object(t)?JN(t):tA(t)}function A1(t,e){return function(n){return t(e(n))}}var ng=A1(Object.getPrototypeOf,Object);function $i(t){return t!=null&&typeof t=="object"}var iA="[object Object]",sA=Function.prototype,oA=Object.prototype,D1=sA.toString,aA=oA.hasOwnProperty,lA=D1.call(Object);function h_(t){if(!$i(t)||Mi(t)!=iA)return!1;var e=ng(t);if(e===null)return!0;var n=aA.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&D1.call(n)==lA}var p_=Array.isArray,m_=Object.keys,uA=Object.prototype.hasOwnProperty,cA=typeof Element<"u";function fp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=p_(t),r=p_(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!fp(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,c=e instanceof RegExp;if(u!=c)return!1;if(u&&c)return t.toString()==e.toString();var d=m_(t);if(s=d.length,s!==m_(e).length)return!1;for(i=s;i--!==0;)if(!uA.call(e,d[i]))return!1;if(cA&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&t.$$typeof)&&!fp(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var dA=function(e,n){try{return fp(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const nr=bc(dA);function fA(){this.__data__=[],this.size=0}function L1(t,e){return t===e||t!==t&&e!==e}function nd(t,e){for(var n=t.length;n--;)if(L1(t[n][0],e))return n;return-1}var hA=Array.prototype,pA=hA.splice;function mA(t){var e=this.__data__,n=nd(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():pA.call(e,n,1),--this.size,!0}function gA(t){var e=this.__data__,n=nd(e,t);return n<0?void 0:e[n][1]}function yA(t){return nd(this.__data__,t)>-1}function vA(t,e){var n=this.__data__,r=nd(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Hn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Hn.prototype.clear=fA;Hn.prototype.delete=mA;Hn.prototype.get=gA;Hn.prototype.has=yA;Hn.prototype.set=vA;function _A(){this.__data__=new Hn,this.size=0}function wA(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function EA(t){return this.__data__.get(t)}function SA(t){return this.__data__.has(t)}function Ga(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var xA="[object AsyncFunction]",CA="[object Function]",TA="[object GeneratorFunction]",IA="[object Proxy]";function M1(t){if(!Ga(t))return!1;var e=Mi(t);return e==CA||e==TA||e==xA||e==IA}var Ef=yn["__core-js_shared__"],g_=function(){var t=/[^.]+$/.exec(Ef&&Ef.keys&&Ef.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function bA(t){return!!g_&&g_ in t}var kA=Function.prototype,PA=kA.toString;function ji(t){if(t!=null){try{return PA.call(t)}catch{}try{return t+""}catch{}}return""}var RA=/[\\^$.*+?()[\]{}|]/g,OA=/^\[object .+?Constructor\]$/,NA=Function.prototype,AA=Object.prototype,DA=NA.toString,LA=AA.hasOwnProperty,MA=RegExp("^"+DA.call(LA).replace(RA,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $A(t){if(!Ga(t)||bA(t))return!1;var e=M1(t)?MA:OA;return e.test(ji(t))}function jA(t,e){return t==null?void 0:t[e]}function Fi(t,e){var n=jA(t,e);return $A(n)?n:void 0}var Ea=Fi(yn,"Map"),Sa=Fi(Object,"create");function FA(){this.__data__=Sa?Sa(null):{},this.size=0}function UA(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var zA="__lodash_hash_undefined__",BA=Object.prototype,WA=BA.hasOwnProperty;function VA(t){var e=this.__data__;if(Sa){var n=e[t];return n===zA?void 0:n}return WA.call(e,t)?e[t]:void 0}var HA=Object.prototype,GA=HA.hasOwnProperty;function KA(t){var e=this.__data__;return Sa?e[t]!==void 0:GA.call(e,t)}var qA="__lodash_hash_undefined__";function YA(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Sa&&e===void 0?qA:e,this}function xi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}xi.prototype.clear=FA;xi.prototype.delete=UA;xi.prototype.get=VA;xi.prototype.has=KA;xi.prototype.set=YA;function QA(){this.size=0,this.__data__={hash:new xi,map:new(Ea||Hn),string:new xi}}function XA(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function rd(t,e){var n=t.__data__;return XA(e)?n[typeof e=="string"?"string":"hash"]:n.map}function JA(t){var e=rd(this,t).delete(t);return this.size-=e?1:0,e}function ZA(t){return rd(this,t).get(t)}function eD(t){return rd(this,t).has(t)}function tD(t,e){var n=rd(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Vr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Vr.prototype.clear=QA;Vr.prototype.delete=JA;Vr.prototype.get=ZA;Vr.prototype.has=eD;Vr.prototype.set=tD;var nD=200;function rD(t,e){var n=this.__data__;if(n instanceof Hn){var r=n.__data__;if(!Ea||r.length<nD-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Vr(r)}return n.set(t,e),this.size=n.size,this}function to(t){var e=this.__data__=new Hn(t);this.size=e.size}to.prototype.clear=_A;to.prototype.delete=wA;to.prototype.get=EA;to.prototype.has=SA;to.prototype.set=rD;function iD(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var y_=function(){try{var t=Fi(Object,"defineProperty");return t({},"",{}),t}catch{}}();function $1(t,e,n){e=="__proto__"&&y_?y_(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var sD=Object.prototype,oD=sD.hasOwnProperty;function j1(t,e,n){var r=t[e];(!(oD.call(t,e)&&L1(r,n))||n===void 0&&!(e in t))&&$1(t,e,n)}function id(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?$1(n,a,l):j1(n,a,l)}return n}function aD(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var lD="[object Arguments]";function v_(t){return $i(t)&&Mi(t)==lD}var F1=Object.prototype,uD=F1.hasOwnProperty,cD=F1.propertyIsEnumerable,dD=v_(function(){return arguments}())?v_:function(t){return $i(t)&&uD.call(t,"callee")&&!cD.call(t,"callee")},Ka=Array.isArray;function fD(){return!1}var U1=typeof xt=="object"&&xt&&!xt.nodeType&&xt,__=U1&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,hD=__&&__.exports===U1,w_=hD?yn.Buffer:void 0,pD=w_?w_.isBuffer:void 0,z1=pD||fD,mD=9007199254740991,gD=/^(?:0|[1-9]\d*)$/;function yD(t,e){var n=typeof t;return e=e??mD,!!e&&(n=="number"||n!="symbol"&&gD.test(t))&&t>-1&&t%1==0&&t<e}var vD=9007199254740991;function B1(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=vD}var _D="[object Arguments]",wD="[object Array]",ED="[object Boolean]",SD="[object Date]",xD="[object Error]",CD="[object Function]",TD="[object Map]",ID="[object Number]",bD="[object Object]",kD="[object RegExp]",PD="[object Set]",RD="[object String]",OD="[object WeakMap]",ND="[object ArrayBuffer]",AD="[object DataView]",DD="[object Float32Array]",LD="[object Float64Array]",MD="[object Int8Array]",$D="[object Int16Array]",jD="[object Int32Array]",FD="[object Uint8Array]",UD="[object Uint8ClampedArray]",zD="[object Uint16Array]",BD="[object Uint32Array]",fe={};fe[DD]=fe[LD]=fe[MD]=fe[$D]=fe[jD]=fe[FD]=fe[UD]=fe[zD]=fe[BD]=!0;fe[_D]=fe[wD]=fe[ND]=fe[ED]=fe[AD]=fe[SD]=fe[xD]=fe[CD]=fe[TD]=fe[ID]=fe[bD]=fe[kD]=fe[PD]=fe[RD]=fe[OD]=!1;function WD(t){return $i(t)&&B1(t.length)&&!!fe[Mi(t)]}function rg(t){return function(e){return t(e)}}var W1=typeof xt=="object"&&xt&&!xt.nodeType&&xt,Vo=W1&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,VD=Vo&&Vo.exports===W1,Sf=VD&&O1.process,$s=function(){try{var t=Vo&&Vo.require&&Vo.require("util").types;return t||Sf&&Sf.binding&&Sf.binding("util")}catch{}}(),E_=$s&&$s.isTypedArray,HD=E_?rg(E_):WD,GD=Object.prototype,KD=GD.hasOwnProperty;function V1(t,e){var n=Ka(t),r=!n&&dD(t),i=!n&&!r&&z1(t),s=!n&&!r&&!i&&HD(t),o=n||r||i||s,a=o?aD(t.length,String):[],l=a.length;for(var u in t)(e||KD.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||yD(u,l)))&&a.push(u);return a}var qD=Object.prototype;function ig(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||qD;return t===n}var YD=A1(Object.keys,Object),QD=Object.prototype,XD=QD.hasOwnProperty;function JD(t){if(!ig(t))return YD(t);var e=[];for(var n in Object(t))XD.call(t,n)&&n!="constructor"&&e.push(n);return e}function H1(t){return t!=null&&B1(t.length)&&!M1(t)}function sg(t){return H1(t)?V1(t):JD(t)}function ZD(t,e){return t&&id(e,sg(e),t)}function eL(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var tL=Object.prototype,nL=tL.hasOwnProperty;function rL(t){if(!Ga(t))return eL(t);var e=ig(t),n=[];for(var r in t)r=="constructor"&&(e||!nL.call(t,r))||n.push(r);return n}function og(t){return H1(t)?V1(t,!0):rL(t)}function iL(t,e){return t&&id(e,og(e),t)}var G1=typeof xt=="object"&&xt&&!xt.nodeType&&xt,S_=G1&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,sL=S_&&S_.exports===G1,x_=sL?yn.Buffer:void 0,C_=x_?x_.allocUnsafe:void 0;function oL(t,e){if(e)return t.slice();var n=t.length,r=C_?C_(n):new t.constructor(n);return t.copy(r),r}function K1(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function aL(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function q1(){return[]}var lL=Object.prototype,uL=lL.propertyIsEnumerable,T_=Object.getOwnPropertySymbols,ag=T_?function(t){return t==null?[]:(t=Object(t),aL(T_(t),function(e){return uL.call(t,e)}))}:q1;function cL(t,e){return id(t,ag(t),e)}function Y1(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var dL=Object.getOwnPropertySymbols,Q1=dL?function(t){for(var e=[];t;)Y1(e,ag(t)),t=ng(t);return e}:q1;function fL(t,e){return id(t,Q1(t),e)}function X1(t,e,n){var r=e(t);return Ka(t)?r:Y1(r,n(t))}function hL(t){return X1(t,sg,ag)}function pL(t){return X1(t,og,Q1)}var hp=Fi(yn,"DataView"),pp=Fi(yn,"Promise"),mp=Fi(yn,"Set"),gp=Fi(yn,"WeakMap"),I_="[object Map]",mL="[object Object]",b_="[object Promise]",k_="[object Set]",P_="[object WeakMap]",R_="[object DataView]",gL=ji(hp),yL=ji(Ea),vL=ji(pp),_L=ji(mp),wL=ji(gp),Jr=Mi;(hp&&Jr(new hp(new ArrayBuffer(1)))!=R_||Ea&&Jr(new Ea)!=I_||pp&&Jr(pp.resolve())!=b_||mp&&Jr(new mp)!=k_||gp&&Jr(new gp)!=P_)&&(Jr=function(t){var e=Mi(t),n=e==mL?t.constructor:void 0,r=n?ji(n):"";if(r)switch(r){case gL:return R_;case yL:return I_;case vL:return b_;case _L:return k_;case wL:return P_}return e});const lg=Jr;var EL=Object.prototype,SL=EL.hasOwnProperty;function xL(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&SL.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var O_=yn.Uint8Array;function ug(t){var e=new t.constructor(t.byteLength);return new O_(e).set(new O_(t)),e}function CL(t,e){var n=e?ug(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var TL=/\w*$/;function IL(t){var e=new t.constructor(t.source,TL.exec(t));return e.lastIndex=t.lastIndex,e}var N_=Lr?Lr.prototype:void 0,A_=N_?N_.valueOf:void 0;function bL(t){return A_?Object(A_.call(t)):{}}function kL(t,e){var n=e?ug(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var PL="[object Boolean]",RL="[object Date]",OL="[object Map]",NL="[object Number]",AL="[object RegExp]",DL="[object Set]",LL="[object String]",ML="[object Symbol]",$L="[object ArrayBuffer]",jL="[object DataView]",FL="[object Float32Array]",UL="[object Float64Array]",zL="[object Int8Array]",BL="[object Int16Array]",WL="[object Int32Array]",VL="[object Uint8Array]",HL="[object Uint8ClampedArray]",GL="[object Uint16Array]",KL="[object Uint32Array]";function qL(t,e,n){var r=t.constructor;switch(e){case $L:return ug(t);case PL:case RL:return new r(+t);case jL:return CL(t,n);case FL:case UL:case zL:case BL:case WL:case VL:case HL:case GL:case KL:return kL(t,n);case OL:return new r;case NL:case LL:return new r(t);case AL:return IL(t);case DL:return new r;case ML:return bL(t)}}var D_=Object.create,YL=function(){function t(){}return function(e){if(!Ga(e))return{};if(D_)return D_(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function QL(t){return typeof t.constructor=="function"&&!ig(t)?YL(ng(t)):{}}var XL="[object Map]";function JL(t){return $i(t)&&lg(t)==XL}var L_=$s&&$s.isMap,ZL=L_?rg(L_):JL,eM="[object Set]";function tM(t){return $i(t)&&lg(t)==eM}var M_=$s&&$s.isSet,nM=M_?rg(M_):tM,rM=1,iM=2,sM=4,J1="[object Arguments]",oM="[object Array]",aM="[object Boolean]",lM="[object Date]",uM="[object Error]",Z1="[object Function]",cM="[object GeneratorFunction]",dM="[object Map]",fM="[object Number]",ex="[object Object]",hM="[object RegExp]",pM="[object Set]",mM="[object String]",gM="[object Symbol]",yM="[object WeakMap]",vM="[object ArrayBuffer]",_M="[object DataView]",wM="[object Float32Array]",EM="[object Float64Array]",SM="[object Int8Array]",xM="[object Int16Array]",CM="[object Int32Array]",TM="[object Uint8Array]",IM="[object Uint8ClampedArray]",bM="[object Uint16Array]",kM="[object Uint32Array]",ae={};ae[J1]=ae[oM]=ae[vM]=ae[_M]=ae[aM]=ae[lM]=ae[wM]=ae[EM]=ae[SM]=ae[xM]=ae[CM]=ae[dM]=ae[fM]=ae[ex]=ae[hM]=ae[pM]=ae[mM]=ae[gM]=ae[TM]=ae[IM]=ae[bM]=ae[kM]=!0;ae[uM]=ae[Z1]=ae[yM]=!1;function Ho(t,e,n,r,i,s){var o,a=e&rM,l=e&iM,u=e&sM;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Ga(t))return t;var c=Ka(t);if(c){if(o=xL(t),!a)return K1(t,o)}else{var d=lg(t),f=d==Z1||d==cM;if(z1(t))return oL(t,a);if(d==ex||d==J1||f&&!i){if(o=l||f?{}:QL(t),!a)return l?fL(t,iL(o,t)):cL(t,ZD(o,t))}else{if(!ae[d])return i?t:{};o=qL(t,d,a)}}s||(s=new to);var m=s.get(t);if(m)return m;s.set(t,o),nM(t)?t.forEach(function(S){o.add(Ho(S,e,n,S,t,s))}):ZL(t)&&t.forEach(function(S,g){o.set(g,Ho(S,e,n,g,t,s))});var v=u?l?pL:hL:l?og:sg,_=c?void 0:v(t);return iD(_||t,function(S,g){_&&(g=S,S=t[g]),j1(o,g,Ho(S,e,n,g,t,s))}),o}var PM=4;function $_(t){return Ho(t,PM)}function tx(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var RM="[object Symbol]";function cg(t){return typeof t=="symbol"||$i(t)&&Mi(t)==RM}var OM="Expected a function";function dg(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(OM);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(dg.Cache||Vr),n}dg.Cache=Vr;var NM=500;function AM(t){var e=dg(t,function(r){return n.size===NM&&n.clear(),r}),n=e.cache;return e}var DM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,LM=/\\(\\)?/g,MM=AM(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(DM,function(n,r,i,s){e.push(i?s.replace(LM,"$1"):r||n)}),e});const $M=MM;var jM=1/0;function FM(t){if(typeof t=="string"||cg(t))return t;var e=t+"";return e=="0"&&1/t==-jM?"-0":e}var UM=1/0,j_=Lr?Lr.prototype:void 0,F_=j_?j_.toString:void 0;function nx(t){if(typeof t=="string")return t;if(Ka(t))return tx(t,nx)+"";if(cg(t))return F_?F_.call(t):"";var e=t+"";return e=="0"&&1/t==-UM?"-0":e}function zM(t){return t==null?"":nx(t)}function rx(t){return Ka(t)?tx(t,FM):cg(t)?[t]:K1($M(zM(t)))}var ix={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,fg=je?Symbol.for("react.element"):60103,hg=je?Symbol.for("react.portal"):60106,sd=je?Symbol.for("react.fragment"):60107,od=je?Symbol.for("react.strict_mode"):60108,ad=je?Symbol.for("react.profiler"):60114,ld=je?Symbol.for("react.provider"):60109,ud=je?Symbol.for("react.context"):60110,pg=je?Symbol.for("react.async_mode"):60111,cd=je?Symbol.for("react.concurrent_mode"):60111,dd=je?Symbol.for("react.forward_ref"):60112,fd=je?Symbol.for("react.suspense"):60113,BM=je?Symbol.for("react.suspense_list"):60120,hd=je?Symbol.for("react.memo"):60115,pd=je?Symbol.for("react.lazy"):60116,WM=je?Symbol.for("react.block"):60121,VM=je?Symbol.for("react.fundamental"):60117,HM=je?Symbol.for("react.responder"):60118,GM=je?Symbol.for("react.scope"):60119;function Nt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case fg:switch(t=t.type,t){case pg:case cd:case sd:case ad:case od:case fd:return t;default:switch(t=t&&t.$$typeof,t){case ud:case dd:case pd:case hd:case ld:return t;default:return e}}case hg:return e}}}function sx(t){return Nt(t)===cd}re.AsyncMode=pg;re.ConcurrentMode=cd;re.ContextConsumer=ud;re.ContextProvider=ld;re.Element=fg;re.ForwardRef=dd;re.Fragment=sd;re.Lazy=pd;re.Memo=hd;re.Portal=hg;re.Profiler=ad;re.StrictMode=od;re.Suspense=fd;re.isAsyncMode=function(t){return sx(t)||Nt(t)===pg};re.isConcurrentMode=sx;re.isContextConsumer=function(t){return Nt(t)===ud};re.isContextProvider=function(t){return Nt(t)===ld};re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===fg};re.isForwardRef=function(t){return Nt(t)===dd};re.isFragment=function(t){return Nt(t)===sd};re.isLazy=function(t){return Nt(t)===pd};re.isMemo=function(t){return Nt(t)===hd};re.isPortal=function(t){return Nt(t)===hg};re.isProfiler=function(t){return Nt(t)===ad};re.isStrictMode=function(t){return Nt(t)===od};re.isSuspense=function(t){return Nt(t)===fd};re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===sd||t===cd||t===ad||t===od||t===fd||t===BM||typeof t=="object"&&t!==null&&(t.$$typeof===pd||t.$$typeof===hd||t.$$typeof===ld||t.$$typeof===ud||t.$$typeof===dd||t.$$typeof===VM||t.$$typeof===HM||t.$$typeof===GM||t.$$typeof===WM)};re.typeOf=Nt;ix.exports=re;var KM=ix.exports,mg=KM,qM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},QM={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ox={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gg={};gg[mg.ForwardRef]=QM;gg[mg.Memo]=ox;function U_(t){return mg.isMemo(t)?ox:gg[t.$$typeof]||qM}var XM=Object.defineProperty,JM=Object.getOwnPropertyNames,z_=Object.getOwnPropertySymbols,ZM=Object.getOwnPropertyDescriptor,e$=Object.getPrototypeOf,B_=Object.prototype;function ax(t,e,n){if(typeof e!="string"){if(B_){var r=e$(e);r&&r!==B_&&ax(t,r,n)}var i=JM(e);z_&&(i=i.concat(z_(e)));for(var s=U_(t),o=U_(e),a=0;a<i.length;++a){var l=i[a];if(!YM[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=ZM(e,l);try{XM(t,l,u)}catch{}}}}return t}var t$=ax;const n$=bc(t$);var r$=1,i$=4;function s$(t){return Ho(t,r$|i$)}function te(){return te=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},te.apply(this,arguments)}function lx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function hr(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function W_(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var md=E.createContext(void 0);md.displayName="FormikContext";var o$=md.Provider,a$=md.Consumer;function ux(){var t=E.useContext(md);return t}var V_=function(e){return Array.isArray(e)&&e.length===0},ze=function(e){return typeof e=="function"},qa=function(e){return e!==null&&typeof e=="object"},l$=function(e){return String(Math.floor(Number(e)))===e},xf=function(e){return Object.prototype.toString.call(e)==="[object String]"},cx=function(e){return E.Children.count(e)===0},Cf=function(e){return qa(e)&&ze(e.then)};function me(t,e,n,r){r===void 0&&(r=0);for(var i=rx(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function hn(t,e,n){for(var r=$_(t),i=r,s=0,o=rx(e);s<o.length-1;s++){var a=o[s],l=me(t,o.slice(0,s+1));if(l&&(qa(l)||Array.isArray(l)))i=i[a]=$_(l);else{var u=o[s+1];i=i[a]=l$(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function dx(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];qa(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},dx(a,e,n,r[o])):r[o]=e}return r}function u$(t,e){switch(e.type){case"SET_VALUES":return te({},t,{values:e.payload});case"SET_TOUCHED":return te({},t,{touched:e.payload});case"SET_ERRORS":return nr(t.errors,e.payload)?t:te({},t,{errors:e.payload});case"SET_STATUS":return te({},t,{status:e.payload});case"SET_ISSUBMITTING":return te({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return te({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return te({},t,{values:hn(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return te({},t,{touched:hn(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return te({},t,{errors:hn(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return te({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return te({},t,{touched:dx(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return te({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return te({},t,{isSubmitting:!1});default:return t}}var Yr={},bl={};function c$(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,c=t.onSubmit,d=hr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=te({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),m=E.useRef(f.initialValues),v=E.useRef(f.initialErrors||Yr),_=E.useRef(f.initialTouched||bl),S=E.useRef(f.initialStatus),g=E.useRef(!1),p=E.useRef({});E.useEffect(function(){return g.current=!0,function(){g.current=!1}},[]);var y=E.useState(0),w=y[1],I=E.useRef({values:f.initialValues,errors:f.initialErrors||Yr,touched:f.initialTouched||bl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),x=I.current,C=E.useCallback(function(T){var N=I.current;I.current=u$(N,T),N!==I.current&&w(function(D){return D+1})},[]),P=E.useCallback(function(T,N){return new Promise(function(D,j){var V=f.validate(T,N);V==null?D(Yr):Cf(V)?V.then(function(ee){D(ee||Yr)},function(ee){j(ee)}):D(V)})},[f.validate]),L=E.useCallback(function(T,N){var D=f.validationSchema,j=ze(D)?D(N):D,V=N&&j.validateAt?j.validateAt(N,T):f$(T,j);return new Promise(function(ee,Oe){V.then(function(){ee(Yr)},function(wn){wn.name==="ValidationError"?ee(d$(wn)):Oe(wn)})})},[f.validationSchema]),M=E.useCallback(function(T,N){return new Promise(function(D){return D(p.current[T].validate(N))})},[]),B=E.useCallback(function(T){var N=Object.keys(p.current).filter(function(j){return ze(p.current[j].validate)}),D=N.length>0?N.map(function(j){return M(j,me(T,j))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function(j){return j.reduce(function(V,ee,Oe){return ee==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ee&&(V=hn(V,N[Oe],ee)),V},{})})},[M]),ot=E.useCallback(function(T){return Promise.all([B(T),f.validationSchema?L(T):{},f.validate?P(T):{}]).then(function(N){var D=N[0],j=N[1],V=N[2],ee=dp.all([D,j,V],{arrayMerge:h$});return ee})},[f.validate,f.validationSchema,B,P,L]),oe=At(function(T){return T===void 0&&(T=x.values),C({type:"SET_ISVALIDATING",payload:!0}),ot(T).then(function(N){return g.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:N})),N})});E.useEffect(function(){o&&g.current===!0&&nr(m.current,f.initialValues)&&oe(m.current)},[o,oe]);var gt=E.useCallback(function(T){var N=T&&T.values?T.values:m.current,D=T&&T.errors?T.errors:v.current?v.current:f.initialErrors||{},j=T&&T.touched?T.touched:_.current?_.current:f.initialTouched||{},V=T&&T.status?T.status:S.current?S.current:f.initialStatus;m.current=N,v.current=D,_.current=j,S.current=V;var ee=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!T&&!!T.isSubmitting,errors:D,touched:j,status:V,values:N,isValidating:!!T&&!!T.isValidating,submitCount:T&&T.submitCount&&typeof T.submitCount=="number"?T.submitCount:0}})};if(f.onReset){var Oe=f.onReset(x.values,ky);Cf(Oe)?Oe.then(ee):ee()}else ee()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);E.useEffect(function(){g.current===!0&&!nr(m.current,f.initialValues)&&u&&(m.current=f.initialValues,gt(),o&&oe(m.current))},[u,f.initialValues,gt,o,oe]),E.useEffect(function(){u&&g.current===!0&&!nr(v.current,f.initialErrors)&&(v.current=f.initialErrors||Yr,C({type:"SET_ERRORS",payload:f.initialErrors||Yr}))},[u,f.initialErrors]),E.useEffect(function(){u&&g.current===!0&&!nr(_.current,f.initialTouched)&&(_.current=f.initialTouched||bl,C({type:"SET_TOUCHED",payload:f.initialTouched||bl}))},[u,f.initialTouched]),E.useEffect(function(){u&&g.current===!0&&!nr(S.current,f.initialStatus)&&(S.current=f.initialStatus,C({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var vn=At(function(T){if(p.current[T]&&ze(p.current[T].validate)){var N=me(x.values,T),D=p.current[T].validate(N);return Cf(D)?(C({type:"SET_ISVALIDATING",payload:!0}),D.then(function(j){return j}).then(function(j){C({type:"SET_FIELD_ERROR",payload:{field:T,value:j}}),C({type:"SET_ISVALIDATING",payload:!1})})):(C({type:"SET_FIELD_ERROR",payload:{field:T,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return C({type:"SET_ISVALIDATING",payload:!0}),L(x.values,T).then(function(j){return j}).then(function(j){C({type:"SET_FIELD_ERROR",payload:{field:T,value:me(j,T)}}),C({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),qr=E.useCallback(function(T,N){var D=N.validate;p.current[T]={validate:D}},[]),_n=E.useCallback(function(T){delete p.current[T]},[]),O=At(function(T,N){C({type:"SET_TOUCHED",payload:T});var D=N===void 0?i:N;return D?oe(x.values):Promise.resolve()}),$=E.useCallback(function(T){C({type:"SET_ERRORS",payload:T})},[]),U=At(function(T,N){var D=ze(T)?T(x.values):T;C({type:"SET_VALUES",payload:D});var j=N===void 0?n:N;return j?oe(D):Promise.resolve()}),X=E.useCallback(function(T,N){C({type:"SET_FIELD_ERROR",payload:{field:T,value:N}})},[]),Y=At(function(T,N,D){C({type:"SET_FIELD_VALUE",payload:{field:T,value:N}});var j=D===void 0?n:D;return j?oe(hn(x.values,T,N)):Promise.resolve()}),nn=E.useCallback(function(T,N){var D=N,j=T,V;if(!xf(T)){T.persist&&T.persist();var ee=T.target?T.target:T.currentTarget,Oe=ee.type,wn=ee.name,Ud=ee.id,zd=ee.value,_I=ee.checked,d8=ee.outerHTML,Py=ee.options,wI=ee.multiple;D=N||wn||Ud,j=/number|range/.test(Oe)?(V=parseFloat(zd),isNaN(V)?"":V):/checkbox/.test(Oe)?m$(me(x.values,D),_I,zd):Py&&wI?p$(Py):zd}D&&Y(D,j)},[Y,x.values]),Ze=At(function(T){if(xf(T))return function(N){return nn(N,T)};nn(T)}),et=At(function(T,N,D){N===void 0&&(N=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:T,value:N}});var j=D===void 0?i:D;return j?oe(x.values):Promise.resolve()}),He=E.useCallback(function(T,N){T.persist&&T.persist();var D=T.target,j=D.name,V=D.id,ee=D.outerHTML,Oe=N||j||V;et(Oe,!0)},[et]),yt=At(function(T){if(xf(T))return function(N){return He(N,T)};He(T)}),Yn=E.useCallback(function(T){ze(T)?C({type:"SET_FORMIK_STATE",payload:T}):C({type:"SET_FORMIK_STATE",payload:function(){return T}})},[]),rn=E.useCallback(function(T){C({type:"SET_STATUS",payload:T})},[]),Vi=E.useCallback(function(T){C({type:"SET_ISSUBMITTING",payload:T})},[]),Qn=At(function(){return C({type:"SUBMIT_ATTEMPT"}),oe().then(function(T){var N=T instanceof Error,D=!N&&Object.keys(T).length===0;if(D){var j;try{if(j=fI(),j===void 0)return}catch(V){throw V}return Promise.resolve(j).then(function(V){return g.current&&C({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(g.current)throw C({type:"SUBMIT_FAILURE"}),V})}else if(g.current&&(C({type:"SUBMIT_FAILURE"}),N))throw T})}),sn=At(function(T){T&&T.preventDefault&&ze(T.preventDefault)&&T.preventDefault(),T&&T.stopPropagation&&ze(T.stopPropagation)&&T.stopPropagation(),Qn().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),ky={resetForm:gt,validateForm:oe,validateField:vn,setErrors:$,setFieldError:X,setFieldTouched:et,setFieldValue:Y,setStatus:rn,setSubmitting:Vi,setTouched:O,setValues:U,setFormikState:Yn,submitForm:Qn},fI=At(function(){return c(x.values,ky)}),hI=At(function(T){T&&T.preventDefault&&ze(T.preventDefault)&&T.preventDefault(),T&&T.stopPropagation&&ze(T.stopPropagation)&&T.stopPropagation(),gt()}),pI=E.useCallback(function(T){return{value:me(x.values,T),error:me(x.errors,T),touched:!!me(x.touched,T),initialValue:me(m.current,T),initialTouched:!!me(_.current,T),initialError:me(v.current,T)}},[x.errors,x.touched,x.values]),mI=E.useCallback(function(T){return{setValue:function(D,j){return Y(T,D,j)},setTouched:function(D,j){return et(T,D,j)},setError:function(D){return X(T,D)}}},[Y,et,X]),gI=E.useCallback(function(T){var N=qa(T),D=N?T.name:T,j=me(x.values,D),V={name:D,value:j,onChange:Ze,onBlur:yt};if(N){var ee=T.type,Oe=T.value,wn=T.as,Ud=T.multiple;ee==="checkbox"?Oe===void 0?V.checked=!!j:(V.checked=!!(Array.isArray(j)&&~j.indexOf(Oe)),V.value=Oe):ee==="radio"?(V.checked=j===Oe,V.value=Oe):wn==="select"&&Ud&&(V.value=V.value||[],V.multiple=!0)}return V},[yt,Ze,x.values]),Fd=E.useMemo(function(){return!nr(m.current,x.values)},[m.current,x.values]),yI=E.useMemo(function(){return typeof a<"u"?Fd?x.errors&&Object.keys(x.errors).length===0:a!==!1&&ze(a)?a(f):a:x.errors&&Object.keys(x.errors).length===0},[a,Fd,x.errors,f]),vI=te({},x,{initialValues:m.current,initialErrors:v.current,initialTouched:_.current,initialStatus:S.current,handleBlur:yt,handleChange:Ze,handleReset:hI,handleSubmit:sn,resetForm:gt,setErrors:$,setFormikState:Yn,setFieldTouched:et,setFieldValue:Y,setFieldError:X,setStatus:rn,setSubmitting:Vi,setTouched:O,setValues:U,submitForm:Qn,validateForm:oe,validateField:vn,isValid:yI,dirty:Fd,unregisterField:_n,registerField:qr,getFieldProps:gI,getFieldMeta:pI,getFieldHelpers:mI,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return vI}function yg(t){var e=c$(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return E.useImperativeHandle(s,function(){return e}),E.createElement(o$,{value:e},n?E.createElement(n,e):i?i(e):r?ze(r)?r(e):cx(r)?null:E.Children.only(r):null)}function d$(t){var e={};if(t.inner){if(t.inner.length===0)return hn(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;me(e,o.path)||(e=hn(e,o.path,o.message))}}return e}function f$(t,e,n,r){n===void 0&&(n=!1);var i=yp(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function yp(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||h_(i)?yp(i):i!==""?i:void 0}):h_(t[r])?e[r]=yp(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function h$(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?dp(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=dp(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function p$(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function m$(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var g$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?E.useLayoutEffect:E.useEffect;function At(t){var e=E.useRef(t);return g$(function(){e.current=t}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function fx(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=hr(t,["validate","name","render","children","as","component","className"]),u=ux(),c=hr(u,["validate","validationSchema"]),d=c.registerField,f=c.unregisterField;E.useEffect(function(){return d(n,{validate:e}),function(){f(n)}},[d,f,n,e]);var m=c.getFieldProps(te({name:n},l)),v=c.getFieldMeta(n),_={field:m,form:c};if(r)return r(te({},_,{meta:v}));if(ze(i))return i(te({},_,{meta:v}));if(o){if(typeof o=="string"){var S=l.innerRef,g=hr(l,["innerRef"]);return E.createElement(o,te({ref:S},m,g,{className:a}),i)}return E.createElement(o,te({field:m,form:c},l,{className:a}),i)}var p=s||"input";if(typeof p=="string"){var y=l.innerRef,w=hr(l,["innerRef"]);return E.createElement(p,te({ref:y},m,w,{className:a}),i)}return E.createElement(p,te({},m,l,{className:a}),i)}var gd=E.forwardRef(function(t,e){var n=t.action,r=hr(t,["action"]),i=n??"#",s=ux(),o=s.handleReset,a=s.handleSubmit;return E.createElement("form",te({onSubmit:a,ref:e,onReset:o,action:i},r))});gd.displayName="Form";function y$(t){var e=function(i){return E.createElement(a$,null,function(s){return E.createElement(t,te({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",n$(e,t)}var v$=function(e,n,r){var i=Ci(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},_$=function(e,n,r){var i=Ci(e),s=i[n];return i[n]=i[r],i[r]=s,i},Tf=function(e,n,r){var i=Ci(e);return i.splice(n,0,r),i},w$=function(e,n,r){var i=Ci(e);return i[n]=r,i},Ci=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(te({},e,{length:n+1}))}else return[]},H_=function(e,n){var r=typeof e=="function"?e:n;return function(i){if(Array.isArray(i)||qa(i)){var s=Ci(i);return r(s)}return i}},E$=function(t){lx(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,c=l.formik.setFormikState;c(function(d){var f=H_(a,s),m=H_(o,s),v=hn(d.values,u,s(me(d.values,u))),_=a?f(me(d.errors,u)):void 0,S=o?m(me(d.touched,u)):void 0;return V_(_)&&(_=void 0),V_(S)&&(S=void 0),te({},d,{values:v,errors:a?hn(d.errors,u,_):d.errors,touched:o?hn(d.touched,u,S):d.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(Ci(o),[s$(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return _$(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return v$(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return Tf(a,s,o)},function(a){return Tf(a,s,null)},function(a){return Tf(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return w$(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(W_(i)),i.pop=i.pop.bind(W_(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!nr(me(i.formik.values,i.name),me(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?Ci(o):[];return s||(s=a[i]),ze(a.splice)&&a.splice(i,1),ze(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,c=s.formik,d=hr(c,["validate","validationSchema"]),f=te({},i,{form:d,name:u});return o?E.createElement(o,f):a?a(f):l?typeof l=="function"?l(f):cx(l)?null:E.Children.only(l):null},e}(E.Component);E$.defaultProps={validateOnChange:!0};var S$=function(t){lx(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return me(this.props.formik.errors,this.props.name)!==me(i.formik.errors,this.props.name)||me(this.props.formik.touched,this.props.name)!==me(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,c=hr(i,["component","formik","render","children","name"]),d=me(o.touched,u),f=me(o.errors,u);return d&&f?a?ze(a)?a(f):null:l?ze(l)?l(f):null:s?E.createElement(s,c,f):f:null},e}(E.Component),x$=y$(S$);function Ui(t){this._maxSize=t,this.clear()}Ui.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ui.prototype.get=function(t){return this._values[t]};Ui.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var C$=/[^.^\]^[]+|(?=\[\]|\.\.)/g,hx=/^\d+$/,T$=/^\d/,I$=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,b$=/^\s*(['"]?)(.*?)(\1)\s*$/,vg=512,G_=new Ui(vg),K_=new Ui(vg),q_=new Ui(vg),hi={Cache:Ui,split:vp,normalizePath:If,setter:function(t){var e=If(t);return K_.get(t)||K_.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=If(t);return q_.get(t)||q_.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(_g(n)||hx.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){k$(Array.isArray(t)?t:vp(t),e,n)}};function If(t){return G_.get(t)||G_.set(t,vp(t).map(function(e){return e.replace(b$,"$2")}))}function vp(t){return t.match(C$)||[""]}function k$(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(O$(i)&&(i='"'+i+'"'),a=_g(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function _g(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function P$(t){return t.match(T$)&&!t.match(hx)}function R$(t){return I$.test(t)}function O$(t){return!_g(t)&&(P$(t)||R$(t))}const N$=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,yd=t=>t.match(N$)||[],vd=t=>t[0].toUpperCase()+t.slice(1),wg=(t,e)=>yd(t).join(e).toLowerCase(),px=t=>yd(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),A$=t=>vd(px(t)),D$=t=>wg(t,"_"),L$=t=>wg(t,"-"),M$=t=>vd(wg(t," ")),$$=t=>yd(t).map(vd).join(" ");var bf={words:yd,upperFirst:vd,camelCase:px,pascalCase:A$,snakeCase:D$,kebabCase:L$,sentenceCase:M$,titleCase:$$},Eg={exports:{}};Eg.exports=function(t){return mx(j$(t),t)};Eg.exports.array=mx;function mx(t,e){var n=t.length,r=new Array(n),i={},s=n,o=F$(e),a=U$(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var m=o.get(u)||new Set;if(m=Array.from(m),c=m.length){d.add(u);do{var v=m[--c];l(v,a.get(v),d)}while(c);d.delete(u)}r[--n]=u}}}function j$(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function F$(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function U$(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var z$=Eg.exports;const B$=bc(z$),W$=Object.prototype.toString,V$=Error.prototype.toString,H$=RegExp.prototype.toString,G$=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",K$=/^Symbol\((.*)\)(.*)$/;function q$(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Y_(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return q$(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return G$.call(t).replace(K$,"Symbol($1)");const r=W$.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+V$.call(t)+"]":r==="RegExp"?H$.call(t):null}function Cr(t,e){let n=Y_(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=Y_(this[r],e);return s!==null?s:i},2)}function gx(t){return t==null?[]:[].concat(t)}let yx,Y$=/\$\{\s*(\w+)\s*\}/g;yx=Symbol.toStringTag;class lt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(Y$,(i,s)=>Cr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[yx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],gx(e).forEach(o=>{if(lt.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,lt)}}let ln={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Cr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Cr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Cr(n,!0)}\``+i}},Bt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Q$={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},_p={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},X$={isValue:"${path} field must be ${value}"},wp={noUnknown:"${path} field has unspecified keys: ${unknown}"},J$={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Z$={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Cr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Cr(n,!0)}\``}return lt.formatError(ln.notType,t)}};Object.assign(Object.create(null),{mixed:ln,string:Bt,number:Q$,date:_p,object:wp,array:J$,boolean:X$,tuple:Z$});const Sg=t=>t&&t.__isYupSchema__;class Qu{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Qu(e,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!Sg(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const kl={context:"$",value:"."};class zi{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===kl.context,this.isValue=this.key[0]===kl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?kl.context:this.isValue?kl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&hi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}zi.prototype.__isYupRef=!0;const ai=t=>t==null;function Ki(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:m}=t;let{parent:v,context:_,abortEarly:S=o.spec.abortEarly,disableStackTrace:g=o.spec.disableStackTrace}=i;function p(B){return zi.isRef(B)?B.getValue(n,v,_):B}function y(B={}){var ot;const oe=Object.assign({value:n,originalValue:s,label:o.spec.label,path:B.path||r,spec:o.spec},d,B.params);for(const vn of Object.keys(oe))oe[vn]=p(oe[vn]);const gt=new lt(lt.formatError(B.message||f,oe),n,oe.path,B.type||u,(ot=B.disableStackTrace)!=null?ot:g);return gt.params=oe,gt}const w=S?a:l;let I={path:r,parent:v,type:u,from:i.from,createError:y,resolve:p,options:i,originalValue:s,schema:o};const x=B=>{lt.isError(B)?w(B):B?l(null):w(y())},C=B=>{lt.isError(B)?w(B):a(B)};if(m&&ai(n))return x(!0);let L;try{var M;if(L=c.call(I,n,I),typeof((M=L)==null?void 0:M.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${I.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(L).then(x,C)}}catch(B){C(B);return}x(L)}return e.OPTIONS=t,e}function ej(t,e,n,r=n){let i,s,o;return e?(hi.forEach(e,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let d=t.type==="tuple",f=u?parseInt(c,10):0;if(t.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=d?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[c],t=t.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class Xu extends Set{describe(){const e=[];for(const n of this.values())e.push(zi.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new Xu(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function us(t,e=new Map){if(Sg(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=us(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,us(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(us(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=us(i,e)}else throw Error(`Unable to clone ${t}`);return n}class gn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Xu,this._blacklist=new Xu,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ln.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=us(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ai(s))return s;let o=Cr(e),a=Cr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,c=_=>{i||(i=!0,n(_,o))},d=_=>{i||(i=!0,r(_,o))},f=s.length,m=[];if(!f)return d([]);let v={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const S=s[_];S(v,c,function(p){p&&(Array.isArray(p)?m.push(...p):m.push(p)),--f<=0&&d(m)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(d,f,m)=>this.resolve(c)._validate(u,c,f,m)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{lt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new lt(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw lt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new lt(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(lt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(lt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):us(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Ki({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Ki({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=ln.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=ln.notNull){return this.nullability(!1,e)}required(e=ln.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=ln.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ki(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=gx(e).map(s=>new zi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Qu(i,n):Qu.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Ki({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=ln.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ki({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=ln.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ki({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}gn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])gn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=ej(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])gn.prototype[t]=gn.prototype.oneOf;for(const t of["not","nope"])gn.prototype[t]=gn.prototype.notOneOf;let tj=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,nj=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,rj=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,ij=t=>ai(t)||t===t.trim(),sj={}.toString();function _s(){return new vx}class vx extends gn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===sj?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||ln.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Bt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Bt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Bt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Bt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Bt.email){return this.matches(tj,{name:"email",message:e,excludeEmptyString:!0})}url(e=Bt.url){return this.matches(nj,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Bt.uuid){return this.matches(rj,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Bt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:ij})}lowercase(e=Bt.lowercase){return this.transform(n=>ai(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ai(n)||n===n.toLowerCase()})}uppercase(e=Bt.uppercase){return this.transform(n=>ai(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ai(n)||n===n.toUpperCase()})}}_s.prototype=vx.prototype;const oj=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Sn(t,e=0){return Number(t)||e}function aj(t){const e=oj.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:Sn(e[1]),month:Sn(e[2],1)-1,day:Sn(e[3],1),hour:Sn(e[4]),minute:Sn(e[5]),second:Sn(e[6]),millisecond:e[7]?Sn(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:Sn(e[10]),minuteOffset:Sn(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let lj=new Date(""),uj=t=>Object.prototype.toString.call(t)==="[object Date]";class _d extends gn{constructor(){super({type:"date",check(e){return uj(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=aj(e),isNaN(e)?_d.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(zi.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=_p.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=_p.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}_d.INVALID_DATE=lj;_d.prototype;function cj(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=hi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),zi.isRef(a)&&a.isSibling?s(a.path,o):Sg(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return B$.array(Array.from(r),n).reverse()}function Q_(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function _x(t){return(e,n)=>Q_(t,e)-Q_(t,n)}const dj=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function su(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=su(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=su(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(su)}):"optional"in t?t.optional():t}const fj=(t,e)=>{const n=[...hi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=hi.getter(hi.join(n),!0)(t);return!!(i&&r in i)};let X_=t=>Object.prototype.toString.call(t)==="[object Object]";function hj(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const pj=_x([]);function xg(t){return new wx(t)}class wx extends gn{constructor(e){super({type:"object",check(n){return X_(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=pj,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],m=d in i;if(f){let v,_=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:_,context:n.context,parent:l});let S=f instanceof gn?f.spec:void 0,g=S==null?void 0:S.strict;if(S!=null&&S.strip){c=c||d in i;continue}v=!n.__validating||!g?f.cast(i[d],u):i[d],v!==void 0&&(l[d]=v)}else m&&!o&&(l[d]=i[d]);(m!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!X_(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||zi.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=cj(e,n),r._sortErrors=_x(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return su(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=hi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return fj(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(dj)}noUnknown(e=!0,n=wp.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=hj(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=wp.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(bf.camelCase)}snakeCase(){return this.transformKeys(bf.snakeCase)}constantCase(){return this.transformKeys(e=>bf.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}xg.prototype=wx.prototype;const Cg=k.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 18px;
`,Ex=k.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  max-width: 200px;
  margin-bottom: 20px;
`,Sx=k.p`
  color: ${({theme:{colors:t}})=>t.mainBgBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
  margin-bottom: 40px;
`,Tr=k(fx)`
  width: calc(100% - 35px);
  padding: 16px 18px;
  border: 1px solid ${({theme:{colors:t}})=>t.accentBlack};
  border-radius: 12px;

  &::placeholder {
    color: ${({theme:{colors:t}})=>t.mainBlack};
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
`,Tg=k.div`
  position: relative;
`,Ig=k.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`,bg=k.button`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  width: 100%;
  padding: 16px 21px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border: none;
  border-radius: 12px;
  background-color: ${({theme:{colors:t}})=>t.mainYellow};

  transition: background-color 250ms
    ${({theme:{transitions:t}})=>t.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:t}})=>t.accentYellow};
  }
`,Ir=k(x$)`
  color: ${({theme:{colors:t}})=>t.mainRed};
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`,Ju="/icons/eye-off.svg",xx="/icons/eye-on.svg";var J_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw no(e)},no=function(t){return new Error("Firebase Database ("+Cx.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mj=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mj(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new gj;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gj extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ix=function(t){const e=Tx(t);return kg.encodeByteArray(e,!0)},Zu=function(t){return Ix(t).replace(/\./g,"")},ec=function(t){try{return kg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yj(t){return bx(void 0,t)}function bx(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vj(n)||(t[n]=bx(t[n],e[n]));return t}function vj(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _j(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wj=()=>_j().__FIREBASE_DEFAULTS__,Ej=()=>{if(typeof process>"u"||typeof J_>"u")return;const t=J_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sj=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ec(t[1]);return e&&JSON.parse(e)},Pg=()=>{try{return wj()||Ej()||Sj()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kx=t=>{var e,n;return(n=(e=Pg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xj=t=>{const e=kx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Px=()=>{var t;return(t=Pg())===null||t===void 0?void 0:t.config},Rx=t=>{var e;return(e=Pg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cj(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zu(JSON.stringify(n)),Zu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Og(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Tj(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ox(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ij(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nx(){return Cx.NODE_ADMIN===!0}function bj(){try{return typeof indexedDB=="object"}catch{return!1}}function kj(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pj="FirebaseError";class Hr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pj,Object.setPrototypeOf(this,Hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Rj(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hr(i,a,r)}}function Rj(t,e){return t.replace(Oj,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Oj=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=xa(ec(s[0])||""),n=xa(ec(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Nj=function(t){const e=Ax(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Aj=function(t){const e=Ax(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function nc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Z_(s)&&Z_(o)){if(!nc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Z_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Lj(t,e){const n=new Mj(t,e);return n.subscribe.bind(n)}class Mj{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$j(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kf),i.error===void 0&&(i.error=kf),i.complete===void 0&&(i.complete=kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $j(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kf(){}function Dx(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jj=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class Ti{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zj(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uj(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uj(t){return t===Zr?void 0:t}function zj(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fj(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Wj={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Vj=ie.INFO,Hj={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Gj=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Hj[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ng{constructor(e){this.name=e,this._logLevel=Vj,this._logHandler=Gj,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wj[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Kj=(t,e)=>e.some(n=>t instanceof n);let e0,t0;function qj(){return e0||(e0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yj(){return t0||(t0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lx=new WeakMap,Sp=new WeakMap,Mx=new WeakMap,Pf=new WeakMap,Ag=new WeakMap;function Qj(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lx.set(n,t)}).catch(()=>{}),Ag.set(e,t),e}function Xj(t){if(Sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sp.set(t,e)}let xp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jj(t){xp=t(xp)}function Zj(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rf(this),e,...n);return Mx.set(r,e.sort?e.sort():[e]),br(r)}:Yj().includes(t)?function(...e){return t.apply(Rf(this),e),br(Lx.get(this))}:function(...e){return br(t.apply(Rf(this),e))}}function eF(t){return typeof t=="function"?Zj(t):(t instanceof IDBTransaction&&Xj(t),Kj(t,qj())?new Proxy(t,xp):t)}function br(t){if(t instanceof IDBRequest)return Qj(t);if(Pf.has(t))return Pf.get(t);const e=eF(t);return e!==t&&(Pf.set(t,e),Ag.set(e,t)),e}const Rf=t=>Ag.get(t);function tF(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(br(o.result),l.oldVersion,l.newVersion,br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const nF=["get","getKey","getAll","getAllKeys","count"],rF=["put","add","delete","clear"],Of=new Map;function n0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Of.get(e))return Of.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Of.set(e,s),s}Jj(t=>({...t,get:(e,n,r)=>n0(e,n)||t.get(e,n,r),has:(e,n)=>!!n0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sF(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cp="@firebase/app",r0="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Ng("@firebase/app"),oF="@firebase/app-compat",aF="@firebase/analytics-compat",lF="@firebase/analytics",uF="@firebase/app-check-compat",cF="@firebase/app-check",dF="@firebase/auth",fF="@firebase/auth-compat",hF="@firebase/database",pF="@firebase/database-compat",mF="@firebase/functions",gF="@firebase/functions-compat",yF="@firebase/installations",vF="@firebase/installations-compat",_F="@firebase/messaging",wF="@firebase/messaging-compat",EF="@firebase/performance",SF="@firebase/performance-compat",xF="@firebase/remote-config",CF="@firebase/remote-config-compat",TF="@firebase/storage",IF="@firebase/storage-compat",bF="@firebase/firestore",kF="@firebase/firestore-compat",PF="firebase",RF="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="[DEFAULT]",OF={[Cp]:"fire-core",[oF]:"fire-core-compat",[lF]:"fire-analytics",[aF]:"fire-analytics-compat",[cF]:"fire-app-check",[uF]:"fire-app-check-compat",[dF]:"fire-auth",[fF]:"fire-auth-compat",[hF]:"fire-rtdb",[pF]:"fire-rtdb-compat",[mF]:"fire-fn",[gF]:"fire-fn-compat",[yF]:"fire-iid",[vF]:"fire-iid-compat",[_F]:"fire-fcm",[wF]:"fire-fcm-compat",[EF]:"fire-perf",[SF]:"fire-perf-compat",[xF]:"fire-rc",[CF]:"fire-rc-compat",[TF]:"fire-gcs",[IF]:"fire-gcs-compat",[bF]:"fire-fst",[kF]:"fire-fst-compat","fire-js":"fire-js",[PF]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map,Ip=new Map;function NF(t,e){try{t.container.addComponent(e)}catch(n){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fs(t){const e=t.name;if(Ip.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;Ip.set(e,t);for(const n of rc.values())NF(n,t);return!0}function Dg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kr=new Ya("app","Firebase",AF);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=RF;function $x(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=Px()),!n)throw kr.create("no-options");const s=rc.get(i);if(s){if(nc(n,s.options)&&nc(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new Bj(i);for(const l of Ip.values())o.addComponent(l);const a=new DF(n,r,o);return rc.set(i,a),a}function jx(t=Tp){const e=rc.get(t);if(!e&&t===Tp&&Px())return $x();if(!e)throw kr.create("no-app",{appName:t});return e}function Pr(t,e,n){var r;let i=(r=OF[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(a.join(" "));return}Fs(new Ti(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LF="firebase-heartbeat-database",MF=1,Ca="firebase-heartbeat-store";let Nf=null;function Fx(){return Nf||(Nf=tF(LF,MF,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ca)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Nf}async function $F(t){try{const n=(await Fx()).transaction(Ca),r=await n.objectStore(Ca).get(Ux(t));return await n.done,r}catch(e){if(e instanceof Hr)Ii.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ii.warn(n.message)}}}async function i0(t,e){try{const r=(await Fx()).transaction(Ca,"readwrite");await r.objectStore(Ca).put(e,Ux(t)),await r.done}catch(n){if(n instanceof Hr)Ii.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ii.warn(r.message)}}}function Ux(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jF=1024,FF=30*24*60*60*1e3;class UF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=s0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=FF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=s0(),{heartbeatsToSend:r,unsentEntries:i}=zF(this._heartbeatsCache.heartbeats),s=Zu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function s0(){return new Date().toISOString().substring(0,10)}function zF(t,e=jF){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),o0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),o0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bj()?kj().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $F(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function o0(t){return Zu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WF(t){Fs(new Ti("platform-logger",e=>new iF(e),"PRIVATE")),Fs(new Ti("heartbeat",e=>new UF(e),"PRIVATE")),Pr(Cp,r0,t),Pr(Cp,r0,"esm2017"),Pr("fire-js","")}WF("");function Lg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VF=zx,Bx=new Ya("auth","Firebase",zx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Ng("@firebase/auth");function HF(t,...e){ic.logLevel<=ie.WARN&&ic.warn(`Auth (${io}): ${t}`,...e)}function ou(t,...e){ic.logLevel<=ie.ERROR&&ic.error(`Auth (${io}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Mg(t,...e)}function pn(t,...e){return Mg(t,...e)}function GF(t,e,n){const r=Object.assign(Object.assign({},VF()),{[e]:n});return new Ya("auth","Firebase",r).create(e,{appName:t.name})}function Mg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bx.create(t,...e)}function z(t,e,...n){if(!t)throw Mg(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ou(e),new Error(e)}function Fn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KF(){return a0()==="http:"||a0()==="https:"}function a0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KF()||Tj()||"connection"in navigator)?navigator.onLine:!0}function YF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=Og()||Ox()}get(){return qF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XF=new Qa(3e4,6e4);function Gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,i={}){return Vx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Wx.fetch()(Hx(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Vx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QF),e);try{const i=new ZF(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw GF(t,c,u);tn(t,c)}}catch(i){if(i instanceof Hr)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function Xa(t,e,n,r,i={}){const s=await Kn(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$g(t.config,i):`${t.config.apiScheme}://${i}`}function JF(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZF{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),XF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}function l0(t){return t!==void 0&&t.enterprise!==void 0}class e2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JF(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function t2(t,e){return Kn(t,"GET","/v2/recaptchaConfig",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function r2(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i2(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=jg(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Go(Af(i.auth_time)),issuedAtTime:Go(Af(i.iat)),expirationTime:Go(Af(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Af(t){return Number(t)*1e3}function jg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ou("JWT malformed, contained fewer than 3 sections"),null;try{const i=ec(n);return i?JSON.parse(i):(ou("Failed to decode base64 JWT payload"),null)}catch(i){return ou("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function s2(t){const e=jg(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hr&&o2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function o2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Us(t,r2(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?c2(s.providerUserInfo):[],a=u2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Gx(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function l2(t){const e=Je(t);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function c2(t){return t.map(e=>{var{providerId:n}=e,r=Lg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e){const n=await Vx(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Hx(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f2(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):s2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await d2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ta;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ta,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Lg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gx(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i2(this,e)}reload(){return l2(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Us(this,n2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:I,providerData:x,stsTokenManager:C}=n;z(y&&C,e,"internal-error");const P=Ta.fromJSON(this.name,C);z(typeof y=="string",e,"internal-error"),Jn(d,e.name),Jn(f,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof I=="boolean",e,"internal-error"),Jn(m,e.name),Jn(v,e.name),Jn(_,e.name),Jn(S,e.name),Jn(g,e.name),Jn(p,e.name);const L=new pi({uid:y,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:I,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:g,lastLoginAt:p});return x&&Array.isArray(x)&&(L.providerData=x.map(M=>Object.assign({},M))),S&&(L._redirectEventId=S),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ta;i.updateFromServerResponse(n);const s=new pi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;function Rn(t){Fn(t instanceof Function,"Expected a class definition");let e=u0.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,u0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kx.type="NONE";const c0=Kx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=au(this.userKey,i.apiKey,s),this.fullPersistenceKey=au("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(Rn(c0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(c0);const o=au(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=pi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ws(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jx(e))return"Blackberry";if(Zx(e))return"Webos";if(Fg(e))return"Safari";if((e.includes("chrome/")||Yx(e))&&!e.includes("edge/"))return"Chrome";if(Xx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qx(t=Xe()){return/firefox\//i.test(t)}function Fg(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yx(t=Xe()){return/crios\//i.test(t)}function Qx(t=Xe()){return/iemobile/i.test(t)}function Xx(t=Xe()){return/android/i.test(t)}function Jx(t=Xe()){return/blackberry/i.test(t)}function Zx(t=Xe()){return/webos/i.test(t)}function Ed(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function h2(t=Xe()){var e;return Ed(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function p2(){return Ij()&&document.documentMode===10}function eC(t=Xe()){return Ed(t)||Xx(t)||Zx(t)||Jx(t)||/windows phone/i.test(t)||Qx(t)}function m2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e=[]){let n;switch(t){case"Browser":n=d0(Xe());break;case"Worker":n=`${d0(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y2(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",Gr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=6;class _2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:v2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new f0(this),this.idTokenSubscription=new f0(this),this.beforeStateQueue=new g2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y2(this),n=new _2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await f2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bi(t){return Je(t)}class f0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lj(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E2(t){Sd=t}function nC(t){return Sd.loadJS(t)}function S2(){return Sd.recaptchaEnterpriseScript}function x2(){return Sd.gapiScript}function C2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const T2="recaptcha-enterprise",I2="NO_RECAPTCHA";class b2{constructor(e){this.type=T2,this.auth=Bi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{t2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new e2(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;l0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(I2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&l0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=S2();l.length!==0&&(l+=a),nC(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function h0(t,e,n,r=!1){const i=new b2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function kp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await h0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await h0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t,e){const n=Dg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(nc(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function P2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R2(t,e,n){const r=Bi(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rC(e),{host:o,port:a}=O2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||N2()}function rC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function O2(t){const e=rC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:p0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:p0(o)}}}function p0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function A2(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(t,e){return Xa(t,"POST","/v1/accounts:signInWithPassword",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e){return Xa(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}async function M2(t,e){return Xa(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends Ug{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kp(e,n,"signInWithPassword",D2);case"emailLink":return L2(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kp(e,r,"signUpPassword",A2);case"emailLink":return M2(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return Xa(t,"POST","/v1/accounts:signInWithIdp",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="http://localhost";class bi extends Ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Lg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:$2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F2(t){const e=bo(ko(t)).link,n=e?bo(ko(e)).deep_link_id:null,r=bo(ko(t)).deep_link_id;return(r?bo(ko(r)).link:null)||r||n||e||t}class zg{constructor(e){var n,r,i,s,o,a;const l=bo(ko(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=j2((i=l.mode)!==null&&i!==void 0?i:null);z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=F2(e);try{return new zg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,n){return Ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zg.parseLink(n);return z(r,"argument-error"),Ia._fromEmailAndCode(e,r.code,r.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends iC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ja{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ja{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ja{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(t,e){return Xa(t,"POST","/v1/accounts:signUp",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pi._fromIdTokenResponse(e,r,i),o=m0(r);return new ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=m0(r);return new ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function m0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends Hr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oc(e,n,r,i)}}function sC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(t,s,e,r):s})}async function z2(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Us(t,sC(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=jg(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e,n=!1){const r="signIn",i=await sC(t,r,e),s=await ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function W2(t,e){return oC(Bi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t){const e=Bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function V2(t,e,n){const r=Bi(t),o=await kp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",U2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&aC(t),l}),a=await ki._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function H2(t,e,n){return W2(Je(t),so.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&aC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G2(t,e){return Kn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Je(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Us(r,G2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function q2(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function Y2(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function Q2(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function X2(t){return Je(t).signOut()}const ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(){const t=Xe();return Fg(t)||Ed(t)}const Z2=1e3,eU=10;class uC extends lC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=J2()&&m2(),this.fallbackToPolling=eC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);p2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uC.type="LOCAL";const tU=uC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC extends lC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cC.type="SESSION";const dC=cC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await nU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Bg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function iU(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function sU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aU(){return fC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="firebaseLocalStorageDb",lU=1,lc="firebaseLocalStorage",pC="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cd(t,e){return t.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function uU(){const t=indexedDB.deleteDatabase(hC);return new Za(t).toPromise()}function Pp(){const t=indexedDB.open(hC,lU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lc,{keyPath:pC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lc)?e(r):(r.close(),await uU(),e(await Pp()))})})}async function g0(t,e,n){const r=Cd(t,!0).put({[pC]:e,value:n});return new Za(r).toPromise()}async function cU(t,e){const n=Cd(t,!1).get(e),r=await new Za(n).toPromise();return r===void 0?null:r.value}function y0(t,e){const n=Cd(t,!0).delete(e);return new Za(n).toPromise()}const dU=800,fU=3;class mC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xd._getInstance(aU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sU(),!this.activeServiceWorker)return;this.sender=new rU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pp();return await g0(e,ac,"1"),await y0(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>g0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>y0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Cd(i,!1).getAll();return new Za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mC.type="LOCAL";const hU=mC;new Qa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(t,e){return e?Rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mU(t){return oC(t.auth,new Wg(t),t.bypassAuthState)}function gU(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),B2(n,new Wg(t),t.bypassAuthState)}async function yU(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),z2(n,new Wg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mU;case"linkViaPopup":case"linkViaRedirect":return yU;case"reauthViaPopup":case"reauthViaRedirect":return gU;default:tn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vU=new Qa(2e3,1e4);class cs extends gC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Bg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vU.get())};e()}}cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _U="pendingRedirect",lu=new Map;class wU extends gC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lu.get(this.auth._key());if(!e){try{const r=await EU(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lu.set(this.auth._key(),e)}return this.bypassAuthState||lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EU(t,e){const n=CU(e),r=xU(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SU(t,e){lu.set(t._key(),e)}function xU(t){return Rn(t._redirectPersistence)}function CU(t){return au(_U,t.config.apiKey,t.name)}async function TU(t,e,n=!1){const r=Bi(t),i=pU(r,e),o=await new wU(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IU=10*60*1e3;class bU{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kU(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IU&&this.cachedEventUids.clear(),this.cachedEventUids.has(v0(e))}saveEventToCache(e){this.cachedEventUids.add(v0(e)),this.lastProcessedEventTime=Date.now()}}function v0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kU(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PU(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OU=/^https?/;async function NU(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PU(t);for(const n of e)try{if(AU(n))return}catch{}tn(t,"unauthorized-domain")}function AU(t){const e=bp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OU.test(n))return!1;if(RU.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DU=new Qa(3e4,6e4);function _0(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LU(t){return new Promise((e,n)=>{var r,i,s;function o(){_0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_0(),n(pn(t,"network-request-failed"))},timeout:DU.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=C2("iframefcb");return mn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},nC(`${x2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw uu=null,e})}let uu=null;function MU(t){return uu=uu||LU(t),uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $U=new Qa(5e3,15e3),jU="__/auth/iframe",FU="emulator/auth/iframe",UU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BU(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$g(e,FU):`https://${t.config.authDomain}/${jU}`,r={apiKey:e.apiKey,appName:t.name,v:io},i=zU.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ro(r).slice(1)}`}async function WU(t){const e=await MU(t),n=mn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:BU(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UU,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},$U.get());function l(){mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HU=500,GU=600,KU="_blank",qU="http://localhost";class w0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YU(t,e,n,r=HU,i=GU){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},VU),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=Yx(u)?KU:n),qx(u)&&(e=e||qU,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(h2(u)&&a!=="_self")return QU(e||"",a),new w0(null);const d=window.open(e||"",a,c);z(d,t,"popup-blocked");try{d.focus()}catch{}return new w0(d)}function QU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XU="__/auth/handler",JU="emulator/auth/handler",ZU=encodeURIComponent("fac");async function E0(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:io,eventId:i};if(e instanceof iC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ep(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ja){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${ZU}=${encodeURIComponent(l)}`:"";return`${e3(t)}?${ro(a).slice(1)}${u}`}function e3({config:t}){return t.emulator?$g(t,JU):`https://${t.authDomain}/${XU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="webStorageSupport";class t3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dC,this._completeRedirectFn=TU,this._overrideRedirectResult=SU}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await E0(e,n,r,bp(),i);return YU(e,o,Bg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await E0(e,n,r,bp(),i);return iU(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WU(e),r=new bU(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Df,{type:Df},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Df];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NU(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eC()||Fg()||Ed()}}const n3=t3;var S0="@firebase/auth",x0="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function s3(t){Fs(new Ti("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tC(t)},u=new w2(r,i,s,l);return P2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fs(new Ti("auth-internal",e=>{const n=Bi(e.getProvider("auth").getImmediate());return(r=>new r3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(S0,x0,i3(t)),Pr(S0,x0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o3=5*60,a3=Rx("authIdTokenMaxAge")||o3;let C0=null;const l3=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>a3)return;const i=n==null?void 0:n.token;C0!==i&&(C0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function u3(t=jx()){const e=Dg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=k2(t,{popupRedirectResolver:n3,persistence:[hU,tU,dC]}),r=Rx("authTokenSyncURL");if(r){const s=l3(r);Y2(n,s,()=>s(n.currentUser)),q2(n,o=>s(o))}const i=kx("auth");return i&&R2(n,`http://${i}`),n}function c3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}E2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",c3().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});s3("Browser");var d3="firebase",f3="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(d3,f3,"app");var T0={};const I0="@firebase/database",b0="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vC="";function h3(t){vC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new p3(e)}}catch{}return new m3},li=_C("localStorage"),Rp=_C("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Ng("@firebase/database"),g3=function(){let t=1;return function(){return t++}}(),wC=function(t){const e=jj(t),n=new Dj;n.update(e);const r=n.digest();return kg.encodeByteArray(r)},el=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=el.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let mi=null,k0=!0;const y3=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ss.logLevel=ie.VERBOSE,mi=Ss.log.bind(Ss),e&&Rp.set("logging_enabled",!0)):typeof t=="function"?mi=t:(mi=null,Rp.remove("logging_enabled"))},Ye=function(...t){if(k0===!0&&(k0=!1,mi===null&&Rp.get("logging_enabled")===!0&&y3(!0)),mi){const e=el.apply(null,t);mi(e)}},tl=function(t){return function(...e){Ye(t,...e)}},Op=function(...t){const e="FIREBASE INTERNAL ERROR: "+el(...t);Ss.error(e)},Un=function(...t){const e=`FIREBASE FATAL ERROR: ${el(...t)}`;throw Ss.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+el(...t);Ss.warn(e)},v3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},EC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_3=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zs="[MIN_NAME]",Pi="[MAX_NAME]",oo=function(t,e){if(t===e)return 0;if(t===zs||e===Pi)return-1;if(e===zs||t===Pi)return 1;{const n=P0(t),r=P0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},w3=function(t,e){return t===e?0:t<e?-1:1},vo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},Vg=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=Vg(t[e[r]]);return n+="}",n},SC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function mt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xC=function(t){R(!EC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},E3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},S3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function x3(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const C3=new RegExp("^-?(0*)\\d{1,10}$"),T3=-2147483648,I3=2147483647,P0=function(t){if(C3.test(t)){const e=Number(t);if(e>=T3&&e<=I3)return e}return null},nl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},b3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ko=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class xs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="5",CC="v",TC="s",IC="r",bC="f",kC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,PC="ls",RC="p",Np="ac",OC="websocket",NC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=li.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&li.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function R3(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function DC(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===OC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===NC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);R3(t)&&(n.ns=t.namespace);const i=[];return mt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(){this.counters_={}}incrementCounter(e,n=1){Gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yj(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf={},Mf={};function Gg(t){const e=t.toString();return Lf[e]||(Lf[e]=new O3),Lf[e]}function N3(t,e){const n=t.toString();return Mf[n]||(Mf[n]=e()),Mf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&nl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="start",D3="close",L3="pLPCommand",M3="pRTLPCB",LC="id",MC="pw",$C="ser",$3="cb",j3="seg",F3="ts",U3="d",z3="dframe",jC=1870,FC=30,B3=jC-FC,W3=25e3,V3=3e4;class ds{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tl(e),this.stats_=Gg(n),this.urlFn=l=>(this.appCheckToken&&(l[Np]=this.appCheckToken),DC(n,NC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new A3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(V3)),_3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===R0)this.id=a,this.password=l;else if(o===D3)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[R0]="t",r[$C]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$3]=this.scriptTagHolder.uniqueCallbackIdentifier),r[CC]=Hg,this.transportSessionId&&(r[TC]=this.transportSessionId),this.lastSessionId&&(r[PC]=this.lastSessionId),this.applicationId&&(r[RC]=this.applicationId),this.appCheckToken&&(r[Np]=this.appCheckToken),typeof location<"u"&&location.hostname&&kC.test(location.hostname)&&(r[IC]=bC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ds.forceAllow_=!0}static forceDisallow(){ds.forceDisallow_=!0}static isAvailable(){return ds.forceAllow_?!0:!ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!E3()&&!S3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ix(n),i=SC(r,B3);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[z3]="t",r[LC]=e,r[MC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=g3(),window[L3+this.uniqueCallbackIdentifier]=e,window[M3+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[LC]=this.myID,e[MC]=this.myPW,e[$C]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+FC+r.length<=jC;){const o=this.pendingSegs.shift();r=r+"&"+j3+i+"="+o.seg+"&"+F3+i+"="+o.ts+"&"+U3+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(W3)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H3=16384,G3=45e3;let uc=null;typeof MozWebSocket<"u"?uc=MozWebSocket:typeof WebSocket<"u"&&(uc=WebSocket);class Gt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tl(this.connId),this.stats_=Gg(n),this.connURL=Gt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[CC]=Hg,typeof location<"u"&&location.hostname&&kC.test(location.hostname)&&(o[IC]=bC),n&&(o[TC]=n),r&&(o[PC]=r),i&&(o[Np]=i),s&&(o[RC]=s),DC(e,OC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,li.set("previous_websocket_failure",!0);try{let r;Nx(),this.mySock=new uc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&uc!==null&&!Gt.forceDisallow_}static previouslyFailed(){return li.isInMemoryStorage||li.get("previous_websocket_failure")===!0}markConnectionHealthy(){li.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=xa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=SC(n,H3);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(G3))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ds,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let r=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gt];else{const i=this.transports_=[];for(const s of ba.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ba.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ba.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3=6e4,q3=5e3,Y3=10*1024,Q3=100*1024,$f="t",O0="d",X3="s",N0="r",J3="e",A0="o",D0="a",L0="n",M0="p",Z3="h";class e4{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tl("c:"+this.id+":"),this.transportManager_=new ba(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Q3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Y3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($f in e){const n=e[$f];n===D0?this.upgradeIfSecondaryHealthy_():n===N0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===A0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vo("t",e),r=vo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:M0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:D0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:L0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vo("t",e),r=vo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vo($f,e);if(O0 in e){const r=e[O0];if(n===Z3){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===L0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===X3?this.onConnectionShutdown_(r):n===N0?this.onReset_(r):n===J3?Op("Server Error: "+r):n===A0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Op("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hg!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(K3))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(q3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:M0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends zC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Og()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cc}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=32,j0=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new se("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mr(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function BC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function t4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function WC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function VC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function nt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return nt(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function HC(t,e){if(Mr(t)!==Mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mr(t)>Mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class n4{constructor(e,n){this.errorPrefix_=n,this.parts_=WC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=wd(this.parts_[r]);GC(this)}}function r4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wd(e),GC(t)}function i4(t){const e=t.parts_.pop();t.byteLength_-=wd(e),t.parts_.length>0&&(t.byteLength_-=1)}function GC(t){if(t.byteLength_>j0)throw new Error(t.errorPrefix_+"has a key path longer than "+j0+" bytes ("+t.byteLength_+").");if(t.parts_.length>$0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$0+") or object contains a cycle "+ei(t))}function ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg extends zC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qg}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=1e3,s4=60*5*1e3,F0=30*1e3,o4=1.3,a4=3e4,l4="server_kill",U0=3;class An extends UC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=An.nextPersistentConnectionId_++,this.log_=tl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_o,this.maxReconnectDelay_=s4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Nx())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Rg,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;An.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gn(e,"w")){const r=js(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Aj(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=F0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Nj(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Op("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a4&&(this.reconnectDelay_=_o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*o4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+An.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new e4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{It(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(l4)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&It(d),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ep(this.interruptReasons_)&&(this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Vg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=U0&&(this.reconnectDelay_=F0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=U0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vC.replace(/\./g,"-")]=1,Og()?e["framework.cordova"]=1:Ox()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cc.getInstance().currentlyOnline();return Ep(this.interruptReasons_)&&e}}An.nextPersistentConnectionId_=0;An.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(zs,e),i=new H(zs,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class KC extends Td{static get __EMPTY_NODE(){return Rl}static set __EMPTY_NODE(e){Rl=e}compare(e,n){return oo(e.name,n.name)}isDefinedOn(e){throw no("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Pi,Rl)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Rl)}toString(){return".key"}}const Cs=new KC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Le.RED,this.left=i??ct.EMPTY_NODE,this.right=s??ct.EMPTY_NODE}copy(e,n,r,i,s){return new Le(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class u4{copy(e,n,r,i,s){return this}insert(e,n,r){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,n=ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ol(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ol(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ol(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ol(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new u4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(t,e){return oo(t.name,e.name)}function Yg(t,e){return oo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap;function d4(t){Ap=t}const qC=function(t){return typeof t=="number"?"number:"+xC(t):"string:"+t},YC=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gn(e,".sv"),"Priority must be a string or number.")}else R(t===Ap||t.isEmpty(),"priority of unexpected type.");R(t===Ap||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z0;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),YC(this.priorityNode_)}static set __childrenNodeConstructor(e){z0=e}static get __childrenNodeConstructor(){return z0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xC(this.value_):e+=this.value_,this.lazyHash_=wC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QC,XC;function f4(t){QC=t}function h4(t){XC=t}class p4 extends Td{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?oo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Pi,new Ne("[PRIORITY-POST]",XC))}makePost(e,n){const r=QC(e);return new H(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new p4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4=Math.log(2);class g4{constructor(e){const n=s=>parseInt(Math.log(s)/m4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Le(f,d.node,Le.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),_=i(m+1,u);return d=t[m],f=n?n(d):d,new Le(f,d.node,Le.BLACK,v,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(v,_){const S=d-v,g=d;d-=v;const p=i(S+1,g),y=t[S],w=n?n(y):y;m(new Le(w,y.node,_,null,p))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),S=Math.pow(2,l.count-(v+1));_?f(S,Le.BLACK):(f(S,Le.BLACK),f(S,Le.RED))}return c},o=new g4(t.length),a=s(o);return new ct(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf;const qi={};class On{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(qi&&Se,"ChildrenNode.ts has not been loaded"),jf=jf||new On({".priority":qi},{".priority":Se}),jf}get(e){const n=js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ct?n:null}hasIndex(e){return Gn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Cs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=dc(r,e.getCompare()):a=qi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new On(c,u)}addToIndexes(e,n){const r=tc(this.indexes_,(i,s)=>{const o=js(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===qi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),dc(a,o.getCompare())}else return qi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new On(r,this.indexSet_)}removeFromIndexes(e,n){const r=tc(this.indexes_,i=>{if(i===qi)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new On(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&YC(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wo||(wo=new F(new ct(Yg),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wo}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wo:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wo:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{R(q(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qC(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rl?-1:0}withIndex(e){if(e===Cs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cs?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class y4 extends F{constructor(){super(new ct(Yg),F.EMPTY_NODE,On.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const rl=new y4;Object.defineProperties(H,{MIN:{value:new H(zs,F.EMPTY_NODE)},MAX:{value:new H(Pi,rl)}});KC.__EMPTY_NODE=F.EMPTY_NODE;Ne.__childrenNodeConstructor=F;d4(rl);h4(rl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=!0;function Be(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Be(e))}if(!(t instanceof Array)&&v4){const n=[];let r=!1;if(mt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=dc(n,c4,o=>o.name,Yg);if(r){const o=dc(n,Se.getCompare());return new F(s,Be(e),new On({".priority":o},{".priority":Se}))}else return new F(s,Be(e),On.Default)}else{let n=F.EMPTY_NODE;return mt(t,(r,i)=>{if(Gn(t,r)&&r.substring(0,1)!=="."){const s=Be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Be(e))}}f4(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4 extends Td{constructor(e){super(),this.indexPath_=e,R(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?oo(e.name,n.name):s}makePost(e,n){const r=Be(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,rl);return new H(Pi,e)}toString(){return WC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4 extends Td{compare(e,n){const r=e.node.compareTo(n.node);return r===0?oo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Be(e);return new H(n,r)}toString(){return".value"}}const E4=new w4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){return{type:"value",snapshotNode:t}}function Bs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ka(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Pa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function S4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ka(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bs(n,r)):o.trackChildChange(Pa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(ka(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Pa(i,s,o))}else r.trackChildChange(Bs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.indexedFilter_=new Qg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ra.getStartPost_(e),this.endPost_=Ra.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ra(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Pa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ka(n,d));const _=a.updateImmediateChild(n,F.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Bs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ka(u.name,u.node)),s.trackChildChange(Bs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zs}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Xg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function C4(t){return t.loadsAllData()?new Qg(t.getIndex()):t.hasLimit()?new x4(t):new Ra(t)}function T4(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function B0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===E4?n="$value":t.index_===Cs?n="$key":(R(t.index_ instanceof _4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function W0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends UC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=tl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=fc.getListenId_(e,r),a={};this.listens_[o]=a;const l=B0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),js(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=fc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=B0(e._queryParams),r=e._path.toString(),i=new Rg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xa(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){return{value:null,children:new Map}}function ZC(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,hc());const i=t.children.get(r);e=le(e),ZC(i,e,n)}}function Dp(t,e,n){t.value!==null?n(e,t.value):b4(t,(r,i)=>{const s=new se(e.toString()+"/"+r);Dp(i,s,n)})}function b4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&mt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=10*1e3,P4=30*1e3,R4=5*60*1e3;class O4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new k4(e);const r=V0+(P4-V0)*Math.random();Ko(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;mt(e,(i,s)=>{s>0&&Gn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*R4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function eT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yt.ACK_USER_WRITE,this.source=eT()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new pc(J(),n,this.revert)}}else return R(q(this.path)===e,"operationForChild called for unrelated child."),new pc(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Oa(this.source,J()):new Oa(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Yt.OVERWRITE}operationForChild(e){return G(this.path)?new Ri(this.source,J(),this.snap.getImmediateChild(e)):new Ri(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Ri(this.source,J(),n.value):new Na(this.source,J(),n)}else return R(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Na(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function A4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(S4(o.childName,o.snapshotNode))}),Eo(t,i,"child_removed",e,r,n),Eo(t,i,"child_added",e,r,n),Eo(t,i,"child_moved",s,r,n),Eo(t,i,"child_changed",e,r,n),Eo(t,i,"value",e,r,n),i}function Eo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>L4(t,a,l)),o.forEach(a=>{const l=D4(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function D4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function L4(t,e,n){if(e.childName==null||n.childName==null)throw no("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e){return{eventCache:t,serverCache:e}}function qo(t,e,n,r){return Id(new $r(e,n,r),t.serverCache)}function tT(t,e,n,r){return Id(t.eventCache,new $r(e,n,r))}function mc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Oi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ff;const M4=()=>(Ff||(Ff=new ct(w3)),Ff);class he{constructor(e,n=M4()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return mt(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(G(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:Pe(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new he(null)}}set(e,n){if(G(e))return new he(n,this.children);{const r=q(e),s=(this.children.get(r)||new he(null)).set(le(e),n),o=this.children.insert(r,s);return new he(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(G(e))return n;{const r=q(e),s=(this.children.get(r)||new he(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new he(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(le(e),Pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),Pe(n,i),r):new he(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new he(null))}}function Yo(t,e,n){if(G(e))return new Zt(new he(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=nt(i,e);return s=s.updateChild(o,n),new Zt(t.writeTree_.set(i,s))}else{const i=new he(n),s=t.writeTree_.setTree(e,i);return new Zt(s)}}}function H0(t,e,n){let r=t;return mt(n,(i,s)=>{r=Yo(r,Pe(e,i),s)}),r}function G0(t,e){if(G(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new he(null));return new Zt(n)}}function Lp(t,e){return Wi(t,e)!=null}function Wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function K0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Rr(t,e){if(G(e))return t;{const n=Wi(t,e);return n!=null?new Zt(new he(n)):new Zt(t.writeTree_.subtree(e))}}function Mp(t){return t.writeTree_.isEmpty()}function Ws(t,e){return nT(J(),t.writeTree_,e)}function nT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=nT(Pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Pe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){return oT(e,t)}function $4(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Yo(t.visibleWrites,e,n)),t.lastWriteId=r}function j4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function F4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&U4(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return z4(t),!0;if(r.snap)t.visibleWrites=G0(t.visibleWrites,r.path);else{const a=r.children;mt(a,l=>{t.visibleWrites=G0(t.visibleWrites,Pe(r.path,l))})}return!0}else return!1}function U4(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Pe(t.path,n),e))return!0;return!1}function z4(t){t.visibleWrites=rT(t.allWrites,B4,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function B4(t){return t.visible}function rT(t,e,n){let r=Zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=nt(n,o),r=Yo(r,a,s.snap)):qt(o,n)&&(a=nt(o,n),r=Yo(r,J(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=nt(n,o),r=H0(r,a,s.children);else if(qt(o,n))if(a=nt(o,n),G(a))r=H0(r,J(),s.children);else{const l=js(s.children,q(a));if(l){const u=l.getChild(le(a));r=Yo(r,J(),u)}}}else throw no("WriteRecord should have .snap or .children")}}return r}function iT(t,e,n,r,i){if(!r&&!i){const s=Wi(t.visibleWrites,e);if(s!=null)return s;{const o=Rr(t.visibleWrites,e);if(Mp(o))return n;if(n==null&&!Lp(o,J()))return null;{const a=n||F.EMPTY_NODE;return Ws(o,a)}}}else{const s=Rr(t.visibleWrites,e);if(!i&&Mp(s))return n;if(!i&&n==null&&!Lp(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},a=rT(t.allWrites,o,e),l=n||F.EMPTY_NODE;return Ws(a,l)}}}function W4(t,e,n){let r=F.EMPTY_NODE;const i=Wi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rr(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=Ws(Rr(s,new se(o)),a);r=r.updateImmediateChild(o,l)}),K0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rr(t.visibleWrites,e);return K0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function V4(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,n);if(Lp(t.visibleWrites,s))return null;{const o=Rr(t.visibleWrites,s);return Mp(o)?i.getChild(n):Ws(o,i.getChild(n))}}function H4(t,e,n,r){const i=Pe(e,n),s=Wi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rr(t.visibleWrites,i);return Ws(o,r.getNode().getImmediateChild(n))}else return null}function G4(t,e){return Wi(t.visibleWrites,e)}function K4(t,e,n,r,i,s,o){let a;const l=Rr(t.visibleWrites,e),u=Wi(l,J());if(u!=null)a=u;else if(n!=null)a=Ws(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function q4(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function gc(t,e,n,r){return iT(t.writeTree,t.treePath,e,n,r)}function ey(t,e){return W4(t.writeTree,t.treePath,e)}function q0(t,e,n,r){return V4(t.writeTree,t.treePath,e,n,r)}function yc(t,e){return G4(t.writeTree,Pe(t.treePath,e))}function Y4(t,e,n,r,i,s){return K4(t.writeTree,t.treePath,e,n,r,i,s)}function ty(t,e,n){return H4(t.writeTree,t.treePath,e,n)}function sT(t,e){return oT(Pe(t.treePath,e),t.writeTree)}function oT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Pa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ka(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Bs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Pa(r,e.snapshotNode,i.oldSnap));else throw no("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const aT=new X4;class ny{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ty(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Oi(this.viewCache_),s=Y4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J4(t){return{filter:t}}function Z4(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ez(t,e,n,r,i){const s=new Q4;let o,a;if(n.type===Yt.OVERWRITE){const u=n;u.source.fromUser?o=$p(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=vc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Yt.MERGE){const u=n;u.source.fromUser?o=nz(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=jp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Yt.ACK_USER_WRITE){const u=n;u.revert?o=sz(t,e,u.path,r,i,s):o=rz(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Yt.LISTEN_COMPLETE)o=iz(t,e,n.path,r,s);else throw no("Unknown operation type: "+n.type);const l=s.getChanges();return tz(e,o,l),{viewCache:o,changes:l}}function tz(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=mc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(JC(mc(e)))}}function lT(t,e,n,r,i,s){const o=e.eventCache;if(yc(r,n)!=null)return e;{let a,l;if(G(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Oi(e),c=u instanceof F?u:F.EMPTY_NODE,d=ey(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=gc(r,Oi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){R(Mr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=q0(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=le(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=q0(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=ty(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return qo(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function vc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=q(n);if(!l.isCompleteForPath(n)&&Mr(n)>1)return e;const v=le(n),S=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),S):u=c.updateChild(l.getNode(),m,S,v,aT,null)}const d=tT(e,u,l.isFullyInitialized()||G(n),c.filtersNodes()),f=new ny(i,d,s);return lT(t,d,n,i,f,a)}function $p(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new ny(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=qo(e,u,!0,t.filter.filtersNodes());else{const d=q(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=qo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=le(n),m=a.getNode().getImmediateChild(d);let v;if(G(f))v=r;else{const _=c.getCompleteChild(d);_!=null?BC(f)===".priority"&&_.getChild(VC(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=F.EMPTY_NODE}if(m.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),d,v,f,c,o);l=qo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Y0(t,e){return t.eventCache.isCompleteForChild(e)}function nz(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Pe(n,l);Y0(e,q(c))&&(a=$p(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Pe(n,l);Y0(e,q(c))||(a=$p(t,a,c,u,i,s,o))}),a}function Q0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function jp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new he(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=Q0(t,m,f);l=vc(t,l,new se(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),_=Q0(t,v,f);l=vc(t,l,new se(d),_,i,s,o,a)}}),l}function rz(t,e,n,r,i,s,o){if(yc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return vc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new he(null);return l.getNode().forEachChild(Cs,(c,d)=>{u=u.set(new se(c),d)}),jp(t,e,n,u,i,s,a,o)}else return e}else{let u=new he(null);return r.foreach((c,d)=>{const f=Pe(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),jp(t,e,n,u,i,s,a,o)}}function iz(t,e,n,r,i){const s=e.serverCache,o=tT(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return lT(t,o,n,r,aT,i)}function sz(t,e,n,r,i,s){let o;if(yc(r,n)!=null)return e;{const a=new ny(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||q(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=gc(r,Oi(e));else{const d=e.serverCache.getNode();R(d instanceof F,"serverChildren would be complete if leaf node"),c=ey(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=q(n);let d=ty(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,le(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,F.EMPTY_NODE,le(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gc(r,Oi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||yc(r,J())!=null,qo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oz{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Qg(r.getIndex()),s=C4(r);this.processor_=J4(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),c=new $r(l,o.isFullyInitialized(),i.filtersNodes()),d=new $r(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Id(d,c),this.eventGenerator_=new N4(this.query_)}get query(){return this.query_}}function az(t){return t.viewCache_.serverCache.getNode()}function lz(t){return mc(t.viewCache_)}function uz(t,e){const n=Oi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function X0(t){return t.eventRegistrations_.length===0}function cz(t,e){t.eventRegistrations_.push(e)}function J0(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Z0(t,e,n,r){e.type===Yt.MERGE&&e.source.queryId!==null&&(R(Oi(t.viewCache_),"We should always have a full cache before handling merges"),R(mc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ez(t.processor_,i,e,n,r);return Z4(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,uT(t,s.changes,s.viewCache.eventCache.getNode(),null)}function dz(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(Bs(s,o))}),n.isFullyInitialized()&&r.push(JC(n.getNode())),uT(t,r,n.getNode(),e)}function uT(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return A4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c;class cT{constructor(){this.views=new Map}}function fz(t){R(!_c,"__referenceConstructor has already been defined"),_c=t}function hz(){return R(_c,"Reference.ts has not been loaded"),_c}function pz(t){return t.views.size===0}function ry(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Z0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Z0(o,e,n,r));return s}}function dT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=gc(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=ey(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const u=Id(new $r(a,l,!1),new $r(r,i,!1));return new oz(e,u)}return o}function mz(t,e,n,r,i,s){const o=dT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),cz(o,n),dz(o,n)}function gz(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=jr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(J0(u,n,r)),X0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(J0(l,n,r)),X0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!jr(t)&&s.push(new(hz())(e._repo,e._path)),{removed:s,events:o}}function fT(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Or(t,e){let n=null;for(const r of t.views.values())n=n||uz(r,e);return n}function hT(t,e){if(e._queryParams.loadsAllData())return kd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function pT(t,e){return hT(t,e)!=null}function jr(t){return kd(t)!=null}function kd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc;function yz(t){R(!wc,"__referenceConstructor has already been defined"),wc=t}function vz(){return R(wc,"Reference.ts has not been loaded"),wc}let _z=1;class ew{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=q4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wz(t,e,n,r,i){return $4(t.pendingWriteTree_,e,n,r,i),i?sl(t,new Ri(eT(),e,n)):[]}function fs(t,e,n=!1){const r=j4(t.pendingWriteTree_,e);if(F4(t.pendingWriteTree_,e)){let s=new he(null);return r.snap!=null?s=s.set(J(),!0):mt(r.children,o=>{s=s.set(new se(o),!0)}),sl(t,new pc(r.path,s,n))}else return[]}function il(t,e,n){return sl(t,new Ri(Jg(),e,n))}function Ez(t,e,n){const r=he.fromObject(n);return sl(t,new Na(Jg(),e,r))}function Sz(t,e){return sl(t,new Oa(Jg(),e))}function xz(t,e,n){const r=iy(t,n);if(r){const i=sy(r),s=i.path,o=i.queryId,a=nt(s,e),l=new Oa(Zg(o),a);return oy(t,s,l)}else return[]}function mT(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||pT(o,e))){const l=gz(o,e,n,r);pz(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>jr(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=bz(f);for(let v=0;v<m.length;++v){const _=m[v],S=_.query,g=wT(t,_);t.listenProvider_.startListening(Qo(S),Aa(t,S),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Qo(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Pd(f));t.listenProvider_.stopListening(Qo(f),m)}))}kz(t,u)}return a}function gT(t,e,n,r){const i=iy(t,r);if(i!=null){const s=sy(i),o=s.path,a=s.queryId,l=nt(o,e),u=new Ri(Zg(a),l,n);return oy(t,o,u)}else return[]}function Cz(t,e,n,r){const i=iy(t,r);if(i){const s=sy(i),o=s.path,a=s.queryId,l=nt(o,e),u=he.fromObject(n),c=new Na(Zg(a),l,u);return oy(t,o,c)}else return[]}function Tz(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const v=nt(f,i);s=s||Or(m,v),o=o||jr(m)});let a=t.syncPointTree_.get(i);a?(o=o||jr(a),s=s||Or(a,J())):(a=new cT,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const _=Or(v,J());_&&(s=s.updateImmediateChild(m,_))}));const u=pT(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Pd(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=Pz();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=bd(t.pendingWriteTree_,i);let d=mz(a,e,n,c,s,l);if(!u&&!o&&!r){const f=hT(a,e);d=d.concat(Rz(t,e,f))}return d}function yT(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=nt(o,e),u=Or(a,l);if(u)return u});return iT(i,e,s,n,!0)}function Iz(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=nt(u,n);r=r||Or(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Or(i,J()):(i=new cT,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new $r(r,!0,!1):null,a=bd(t.pendingWriteTree_,e._path),l=dT(i,e,a,s?o.getNode():F.EMPTY_NODE,s);return lz(l)}function sl(t,e){return vT(e,t.syncPointTree_,null,bd(t.pendingWriteTree_,J()))}function vT(t,e,n,r){if(G(t.path))return _T(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=Or(i,J()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=sT(r,o);s=s.concat(vT(a,l,u,c))}return i&&(s=s.concat(ry(i,t,r,n))),s}}function _T(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=Or(i,J()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=sT(r,o),c=t.operationForChild(o);c&&(s=s.concat(_T(c,a,l,u)))}),i&&(s=s.concat(ry(i,t,r,n))),s}function wT(t,e){const n=e.query,r=Aa(t,n);return{hashFn:()=>(az(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?xz(t,n._path,r):Sz(t,n._path);{const s=x3(i,n);return mT(t,n,null,s)}}}}function Aa(t,e){const n=Pd(e);return t.queryToTagMap.get(n)}function Pd(t){return t._path.toString()+"$"+t._queryIdentifier}function iy(t,e){return t.tagToQueryMap.get(e)}function sy(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function oy(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=bd(t.pendingWriteTree_,e);return ry(r,n,i,null)}function bz(t){return t.fold((e,n,r)=>{if(n&&jr(n))return[kd(n)];{let i=[];return n&&(i=fT(n)),mt(r,(s,o)=>{i=i.concat(o)}),i}})}function Qo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vz())(t._repo,t._path):t}function kz(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Pd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Pz(){return _z++}function Rz(t,e,n){const r=e._path,i=Aa(t,e),s=wT(t,n),o=t.listenProvider_.startListening(Qo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!jr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!G(u)&&c&&jr(c))return[kd(c).query];{let f=[];return c&&(f=f.concat(fT(c).map(m=>m.query))),mt(d,(m,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Qo(c),Aa(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ay(n)}node(){return this.node_}}class ly{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new ly(this.syncTree_,n)}node(){return yT(this.syncTree_,this.path_)}}const Oz=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},tw=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Nz(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Az(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Nz=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},Az=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Dz=function(t,e,n,r){return uy(e,new ly(n,t),r)},Lz=function(t,e,n){return uy(t,new ay(e),n)};function uy(t,e,n){const r=t.getPriority().val(),i=tw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=tw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(Se,(a,l)=>{const u=uy(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function dy(t,e){let n=e instanceof se?e:new se(e),r=t,i=q(n);for(;i!==null;){const s=js(r.node.children,i)||{children:{},childCount:0};r=new cy(i,r,s),n=le(n),i=q(n)}return r}function ao(t){return t.node.value}function ET(t,e){t.node.value=e,Fp(t)}function ST(t){return t.node.childCount>0}function Mz(t){return ao(t)===void 0&&!ST(t)}function Rd(t,e){mt(t.node.children,(n,r)=>{e(new cy(n,t,r))})}function xT(t,e,n,r){n&&!r&&e(t),Rd(t,i=>{xT(i,e,!0,r)}),n&&r&&e(t)}function $z(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ol(t){return new se(t.parent===null?t.name:ol(t.parent)+"/"+t.name)}function Fp(t){t.parent!==null&&jz(t.parent,t.name,t)}function jz(t,e,n){const r=Mz(n),i=Gn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Fp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fz=/[\[\].#$\/\u0000-\u001F\u007F]/,Uz=/[\[\].#$\u0000-\u001F\u007F]/,Uf=10*1024*1024,CT=function(t){return typeof t=="string"&&t.length!==0&&!Fz.test(t)},TT=function(t){return typeof t=="string"&&t.length!==0&&!Uz.test(t)},zz=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),TT(t)},IT=function(t,e,n){const r=n instanceof se?new n4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+ei(r)+" with contents = "+e.toString());if(EC(e))throw new Error(t+"contains "+e.toString()+" "+ei(r));if(typeof e=="string"&&e.length>Uf/3&&wd(e)>Uf)throw new Error(t+"contains a string greater than "+Uf+" utf8 bytes "+ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(mt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!CT(o)))throw new Error(t+" contains an invalid key ("+o+") "+ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);r4(r,o),IT(t,a,r),i4(r)}),i&&s)throw new Error(t+' contains ".value" child '+ei(r)+" in addition to actual children.")}},bT=function(t,e,n,r){if(!(r&&n===void 0)&&!TT(n))throw new Error(Dx(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Bz=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bT(t,e,n,r)},Wz=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!CT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zz(n))throw new Error(Dx(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vz{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hz(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!HC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Kr(t,e,n){Hz(t,n),Gz(t,r=>qt(r,e)||qt(e,r))}function Gz(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Kz(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Kz(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();mi&&Ye("event: "+n.toString()),nl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qz="repo_interrupt",Yz=25;class Qz{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vz,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hc(),this.transactionQueueTree_=new cy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xz(t,e,n){if(t.stats_=Gg(t.repoInfo_),t.forceRestClient_||b3())t.server_=new fc(t.repoInfo_,(r,i,s,o)=>{nw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new An(t.repoInfo_,e,(r,i,s,o)=>{nw(t,r,i,s,o)},r=>{rw(t,r)},r=>{Zz(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=N3(t.repoInfo_,()=>new O4(t.stats_,t.server_)),t.infoData_=new I4,t.infoSyncTree_=new ew({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=il(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fy(t,"connected",!1),t.serverSyncTree_=new ew({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Kr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Jz(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kT(t){return Oz({timestamp:Jz(t)})}function nw(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=tc(n,u=>Be(u));o=Cz(t.serverSyncTree_,s,l,i)}else{const l=Be(n);o=gT(t.serverSyncTree_,s,l,i)}else if(r){const l=tc(n,u=>Be(u));o=Ez(t.serverSyncTree_,s,l)}else{const l=Be(n);o=il(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=my(t,s)),Kr(t.eventQueue_,a,o)}function rw(t,e){fy(t,"connected",e),e===!1&&n6(t)}function Zz(t,e){mt(e,(n,r)=>{fy(t,n,r)})}function fy(t,e,n){const r=new se("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(r,i);const s=il(t.infoSyncTree_,r,i);Kr(t.eventQueue_,r,s)}function e6(t){return t.nextWriteId_++}function t6(t,e,n){const r=Iz(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Be(i).withIndex(e._queryParams.getIndex());Tz(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=il(t.serverSyncTree_,e._path,s);else{const a=Aa(t.serverSyncTree_,e);o=gT(t.serverSyncTree_,e._path,s,a)}return Kr(t.eventQueue_,e._path,o),mT(t.serverSyncTree_,e,n,null,!0),s},i=>(hy(t,"get for query "+ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function n6(t){hy(t,"onDisconnectEvents");const e=kT(t),n=hc();Dp(t.onDisconnect_,J(),(i,s)=>{const o=Dz(i,s,t.serverSyncTree_,e);ZC(n,i,o)});let r=[];Dp(n,J(),(i,s)=>{r=r.concat(il(t.serverSyncTree_,i,s));const o=o6(t,i);my(t,o)}),t.onDisconnect_=hc(),Kr(t.eventQueue_,J(),r)}function r6(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qz)}function hy(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function PT(t,e,n){return yT(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function py(t,e=t.transactionQueueTree_){if(e||Od(t,e),ao(e)){const n=OT(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&i6(t,ol(e),n)}else ST(e)&&Rd(e,n=>{py(t,n)})}function i6(t,e,n){const r=n.map(u=>u.currentWriteId),i=PT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];R(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=nt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{hy(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(fs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Od(t,dy(t.transactionQueueTree_,e)),py(t,t.transactionQueueTree_),Kr(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)nl(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}my(t,e)}},o)}function my(t,e){const n=RT(t,e),r=ol(n),i=OT(t,n);return s6(t,i,r),r}function s6(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=nt(n,l.path);let c=!1,d;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(fs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Yz)c=!0,d="maxretry",i=i.concat(fs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=PT(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){IT("transaction failed: Data returned ",m,l.path);let v=Be(m);typeof m=="object"&&m!=null&&Gn(m,".priority")||(v=v.updatePriority(f.getPriority()));const S=l.currentWriteId,g=kT(t),p=Lz(v,f,g);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=e6(t),o.splice(o.indexOf(S),1),i=i.concat(wz(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(fs(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(fs(t.serverSyncTree_,l.currentWriteId,!0))}Kr(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Od(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)nl(r[a]);py(t,t.transactionQueueTree_)}function RT(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&ao(r)===void 0;)r=dy(r,n),e=le(e),n=q(e);return r}function OT(t,e){const n=[];return NT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function NT(t,e,n){const r=ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rd(e,i=>{NT(t,i,n)})}function Od(t,e){const n=ao(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ET(e,n.length>0?n:void 0)}Rd(e,r=>{Od(t,r)})}function o6(t,e){const n=ol(RT(t,e)),r=dy(t.transactionQueueTree_,e);return $z(r,i=>{zf(t,i)}),zf(t,r),xT(r,i=>{zf(t,i)}),n}function zf(t,e){const n=ao(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ET(e,void 0):n.length=s+1,Kr(t.eventQueue_,ol(e),i);for(let o=0;o<r.length;o++)nl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function l6(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const iw=function(t,e){const n=u6(t),r=n.namespace;n.domain==="firebase.com"&&Un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||v3();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new AC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},u6=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=a6(t.substring(c,d)));const f=l6(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class d6{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:BC(this._path)}get ref(){return new qn(this._repo,this._path)}get _queryIdentifier(){const e=W0(this._queryParams),n=Vg(e);return n==="{}"?"default":n}get _queryObject(){return W0(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof Nd))return!1;const n=this._repo===e._repo,r=HC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+t4(this._path)}}class qn extends Nd{constructor(e,n){super(e,n,new Xg,!1)}get parent(){const e=VC(this._path);return e===null?null:new qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Da{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Up(this.ref,e);return new Da(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Da(i,Up(this.ref,r),Se)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function h6(t,e){return t=Je(t),t._checkNotDeleted("ref"),e!==void 0?Up(t._root,e):t._root}function Up(t,e){return t=Je(t),q(t._path)===null?Bz("child","path",e,!1):bT("child","path",e,!1),new qn(t._repo,Pe(t._path,e))}function p6(t){t=Je(t);const e=new f6(()=>{}),n=new gy(e);return t6(t._repo,t,n).then(r=>new Da(r,new qn(t._repo,t._path),t._queryParams.getIndex()))}class gy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new c6("value",this,new Da(e.snapshotNode,new qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new d6(this,e,n):null}matches(e){return e instanceof gy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class m6{}class g6 extends m6{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Nd(e._repo,e._path,T4(e._queryParams,this._limit),e._orderByCalled)}}function y6(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new g6(t)}function v6(t,...e){let n=Je(t);for(const r of e)n=r._apply(n);return n}fz(qn);yz(qn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _6="FIREBASE_DATABASE_EMULATOR_HOST",zp={};let w6=!1;function E6(t,e,n,r){t.repoInfo_=new AC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function S6(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=iw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&T0&&(u=T0[_6]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=iw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new xs(xs.OWNER):new P3(t.name,t.options,e);Wz("Invalid Firebase Database URL",o),G(o.path)||Un("Database URL must point to the root of a Firebase Database (not including a child path).");const d=C6(a,t,c,new k3(t.name,n));return new T6(d,t)}function x6(t,e){const n=zp[e];(!n||n[t.key]!==t)&&Un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),r6(t),delete n[t.key]}function C6(t,e,n,r){let i=zp[e.name];i||(i={},zp[e.name]=i);let s=i[t.toURLString()];return s&&Un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Qz(t,w6,n,r),i[t.toURLString()]=s,s}class T6{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xz(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qn(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(x6(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Un("Cannot call "+e+" on a deleted database.")}}function I6(t=jx(),e){const n=Dg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=xj("database");r&&b6(n,...r)}return n}function b6(t,e,n,r={}){t=Je(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new xs(xs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Cj(r.mockUserToken,t.app.options.projectId);s=new xs(o)}E6(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k6(t){h3(io),Fs(new Ti("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return S6(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pr(I0,b0,t),Pr(I0,b0,"esm2017")}An.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};An.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};k6();const P6={apiKey:"AIzaSyA_MfiWlj-UAQOGXJIlHU7cByj3msmgDGg",authDomain:"learn-lingo-pet-project.firebaseapp.com",databaseURL:"https://learn-lingo-pet-project-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"learn-lingo-pet-project",storageBucket:"learn-lingo-pet-project.appspot.com",messagingSenderId:"942087153141",appId:"1:942087153141:web:55319103e47016e9bd2cbc",measurementId:"G-4G8TCGNGP7"},AT=$x(P6),R6=I6(AT),Ad=u3(AT);function Fe(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var O6=typeof Symbol=="function"&&Symbol.observable||"@@observable",sw=O6,Bf=()=>Math.random().toString(36).substring(7).split("").join("."),N6={INIT:`@@redux/INIT${Bf()}`,REPLACE:`@@redux/REPLACE${Bf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Bf()}`},Ec=N6;function yy(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function vy(t,e,n){if(typeof t!="function")throw new Error(Fe(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Fe(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Fe(1));return n(vy)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,g)=>{o.set(g,S)}))}function c(){if(l)throw new Error(Fe(3));return i}function d(S){if(typeof S!="function")throw new Error(Fe(4));if(l)throw new Error(Fe(5));let g=!0;u();const p=a++;return o.set(p,S),function(){if(g){if(l)throw new Error(Fe(6));g=!1,u(),o.delete(p),s=null}}}function f(S){if(!yy(S))throw new Error(Fe(7));if(typeof S.type>"u")throw new Error(Fe(8));if(typeof S.type!="string")throw new Error(Fe(17));if(l)throw new Error(Fe(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(p=>{p()}),S}function m(S){if(typeof S!="function")throw new Error(Fe(10));r=S,f({type:Ec.REPLACE})}function v(){const S=d;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(Fe(11));function p(){const w=g;w.next&&w.next(c())}return p(),{unsubscribe:S(p)}},[sw](){return this}}}return f({type:Ec.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:m,[sw]:v}}function A6(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Ec.INIT})>"u")throw new Error(Fe(12));if(typeof n(void 0,{type:Ec.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Fe(13))})}function D6(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{A6(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],m=o[d],v=f(m,a);if(typeof v>"u")throw a&&a.type,new Error(Fe(14));u[d]=v,l=l||v!==m}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Sc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function L6(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Fe(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Sc(...a)(i.dispatch),{...i,dispatch:s}}}function M6(t){return yy(t)&&"type"in t&&typeof t.type=="string"}var DT=Symbol.for("immer-nothing"),ow=Symbol.for("immer-draftable"),kt=Symbol.for("immer-state");function Kt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Vs=Object.getPrototypeOf;function Fr(t){return!!t&&!!t[kt]}function zn(t){var e;return t?LT(t)||Array.isArray(t)||!!t[ow]||!!((e=t.constructor)!=null&&e[ow])||Ld(t)||Md(t):!1}var $6=Object.prototype.constructor.toString();function LT(t){if(!t||typeof t!="object")return!1;const e=Vs(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===$6}function La(t,e){Dd(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Dd(t){const e=t[kt];return e?e.type_:Array.isArray(t)?1:Ld(t)?2:Md(t)?3:0}function Bp(t,e){return Dd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function MT(t,e,n){const r=Dd(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function j6(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Ld(t){return t instanceof Map}function Md(t){return t instanceof Set}function ti(t){return t.copy_||t.base_}function Wp(t,e){if(Ld(t))return new Map(t);if(Md(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&LT(t))return Vs(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[kt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Vs(t),n)}function _y(t,e=!1){return $d(t)||Fr(t)||!zn(t)||(Dd(t)>1&&(t.set=t.add=t.clear=t.delete=F6),Object.freeze(t),e&&La(t,(n,r)=>_y(r,!0))),t}function F6(){Kt(2)}function $d(t){return Object.isFrozen(t)}var U6={};function Ni(t){const e=U6[t];return e||Kt(0,t),e}var Ma;function $T(){return Ma}function z6(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function aw(t,e){e&&(Ni("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Vp(t){Hp(t),t.drafts_.forEach(B6),t.drafts_=null}function Hp(t){t===Ma&&(Ma=t.parent_)}function lw(t){return Ma=z6(Ma,t)}function B6(t){const e=t[kt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function uw(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[kt].modified_&&(Vp(e),Kt(4)),zn(t)&&(t=xc(e,t),e.parent_||Cc(e,t)),e.patches_&&Ni("Patches").generateReplacementPatches_(n[kt].base_,t,e.patches_,e.inversePatches_)):t=xc(e,n,[]),Vp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==DT?t:void 0}function xc(t,e,n){if($d(e))return e;const r=e[kt];if(!r)return La(e,(i,s)=>cw(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Cc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),La(s,(a,l)=>cw(t,r,i,a,l,n,o)),Cc(t,i,!1),n&&t.patches_&&Ni("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function cw(t,e,n,r,i,s,o){if(Fr(i)){const a=s&&e&&e.type_!==3&&!Bp(e.assigned_,r)?s.concat(r):void 0,l=xc(t,i,a);if(MT(n,r,l),Fr(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(zn(i)&&!$d(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;xc(t,i),(!e||!e.scope_.parent_)&&Cc(t,i)}}function Cc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&_y(e,n)}function W6(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:$T(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=wy;n&&(i=[r],s=$a);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var wy={get(t,e){if(e===kt)return t;const n=ti(t);if(!Bp(n,e))return V6(t,n,e);const r=n[e];return t.finalized_||!zn(r)?r:r===Wf(t.base_,e)?(Vf(t),t.copy_[e]=Kp(r,t)):r},has(t,e){return e in ti(t)},ownKeys(t){return Reflect.ownKeys(ti(t))},set(t,e,n){const r=jT(ti(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Wf(ti(t),e),s=i==null?void 0:i[kt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(j6(n,i)&&(n!==void 0||Bp(t.base_,e)))return!0;Vf(t),Gp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Wf(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Vf(t),Gp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=ti(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Kt(11)},getPrototypeOf(t){return Vs(t.base_)},setPrototypeOf(){Kt(12)}},$a={};La(wy,(t,e)=>{$a[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});$a.deleteProperty=function(t,e){return $a.set.call(this,t,e,void 0)};$a.set=function(t,e,n){return wy.set.call(this,t[0],e,n,t[0])};function Wf(t,e){const n=t[kt];return(n?ti(n):t)[e]}function V6(t,e,n){var i;const r=jT(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function jT(t,e){if(!(e in t))return;let n=Vs(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Vs(n)}}function Gp(t){t.modified_||(t.modified_=!0,t.parent_&&Gp(t.parent_))}function Vf(t){t.copy_||(t.copy_=Wp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var H6=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&Kt(6),r!==void 0&&typeof r!="function"&&Kt(7);let i;if(zn(e)){const s=lw(this),o=Kp(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Vp(s):Hp(s)}return aw(s,r),uw(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===DT&&(i=void 0),this.autoFreeze_&&_y(i,!0),r){const s=[],o=[];Ni("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Kt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){zn(t)||Kt(8),Fr(t)&&(t=FT(t));const e=lw(this),n=Kp(t,void 0);return n[kt].isManual_=!0,Hp(e),n}finishDraft(t,e){const n=t&&t[kt];(!n||!n.isManual_)&&Kt(9);const{scope_:r}=n;return aw(r,e),uw(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Ni("Patches").applyPatches_;return Fr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Kp(t,e){const n=Ld(t)?Ni("MapSet").proxyMap_(t,e):Md(t)?Ni("MapSet").proxySet_(t,e):W6(t,e);return(e?e.scope_:$T()).drafts_.push(n),n}function FT(t){return Fr(t)||Kt(10,t),UT(t)}function UT(t){if(!zn(t)||$d(t))return t;const e=t[kt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Wp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Wp(t,!0);return La(n,(r,i)=>{MT(n,r,UT(i))}),e&&(e.finalized_=!1),n}var Pt=new H6,zT=Pt.produce;Pt.produceWithPatches.bind(Pt);Pt.setAutoFreeze.bind(Pt);Pt.setUseStrictShallowCopy.bind(Pt);Pt.applyPatches.bind(Pt);Pt.createDraft.bind(Pt);Pt.finishDraft.bind(Pt);function G6(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function K6(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function q6(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var dw=t=>Array.isArray(t)?t:[t];function Y6(t){const e=Array.isArray(t[0])?t[0]:t;return q6(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function Q6(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var X6=class{constructor(t){this.value=t}deref(){return this.value}},J6=typeof WeakRef<"u"?WeakRef:X6,Z6=0,fw=1;function Nl(){return{s:Z6,v:void 0,o:null,p:null}}function Ey(t,e={}){let n=Nl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,m=l;f<m;f++){const v=arguments[f];if(typeof v=="function"||typeof v=="object"&&v!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const S=_.get(v);S===void 0?(a=Nl(),_.set(v,a)):a=S}else{let _=a.p;_===null&&(a.p=_=new Map);const S=_.get(v);S===void 0?(a=Nl(),_.set(v,a)):a=S}}const u=a;let c;if(a.s===fw?c=a.v:(c=t.apply(null,arguments),s++),u.s=fw,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new J6(c):c}return u.v=c,c}return o.clearCache=()=>{n=Nl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function BT(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),G6(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:m=Ey,argsMemoizeOptions:v=[],devModeChecks:_={}}=c,S=dw(f),g=dw(v),p=Y6(i),y=d(function(){return s++,u.apply(null,arguments)},...S),w=m(function(){o++;const x=Q6(p,arguments);return a=y.apply(null,x),a},...g);return Object.assign(w,{resultFunc:u,memoizedResultFunc:y,dependencies:p,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:m})};return Object.assign(r,{withTypes:()=>r}),r}var eB=BT(Ey),tB=Object.assign((t,e=eB)=>{K6(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>tB});function WT(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var nB=WT(),rB=WT,iB=(...t)=>{const e=BT(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(Fr(o)?FT(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};iB(Ey);var sB=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Sc:Sc.apply(null,arguments)};function Hs(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(pt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>M6(r)&&r.type===t,n}var VT=class Po extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Po.prototype)}static get[Symbol.species](){return Po}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Po(...e[0].concat(this)):new Po(...e.concat(this))}};function hw(t){return zn(t)?zT(t,()=>{}):t}function pw(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(pt(10));const r=n.insert(e,t);return t.set(e,r),r}function oB(t){return typeof t=="boolean"}var aB=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new VT;return n&&(oB(n)?o.push(nB):o.push(rB(n.extraArgument))),o},lB="RTK_autoBatch",HT=t=>e=>{setTimeout(e,t)},uB=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:HT(10),cB=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?uB:t.type==="callback"?t.queueNotification:HT(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[lB]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},dB=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new VT(t);return r&&i.push(cB(typeof r=="object"?r:void 0)),i},fB=!0;function hB(t){const e=aB(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(yy(n))a=D6(n);else throw new Error(pt(1));let l;typeof r=="function"?l=r(e):l=e();let u=Sc;i&&(u=sB({trace:!fB,...typeof i=="object"&&i}));const c=L6(...l),d=dB(c);let f=typeof o=="function"?o(d):d();const m=u(...f);return vy(a,s,m)}function GT(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(pt(28));if(a in e)throw new Error(pt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function pB(t){return typeof t=="function"}function mB(t,e){let[n,r,i]=GT(e),s;if(pB(t))s=()=>hw(t());else{const a=hw(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Fr(c)){const m=d(c,l);return m===void 0?c:m}else{if(zn(c))return zT(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(pt(9))}return f}}return c},a)}return o.getInitialState=s,o}var gB="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",yB=(t=21)=>{let e="",n=t;for(;n--;)e+=gB[Math.random()*64|0];return e},vB=Symbol.for("rtk-slice-createasyncthunk");function _B(t,e){return`${t}/${e}`}function wB({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[vB];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(pt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(SB()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(y,w){const I=typeof y=="string"?y:y.type;if(!I)throw new Error(pt(12));if(I in u.sliceCaseReducersByType)throw new Error(pt(13));return u.sliceCaseReducersByType[I]=w,c},addMatcher(y,w){return u.sliceMatchers.push({matcher:y,reducer:w}),c},exposeAction(y,w){return u.actionCreators[y]=w,c},exposeCaseReducer(y,w){return u.sliceCaseReducersByName[y]=w,c}};l.forEach(y=>{const w=a[y],I={reducerName:y,type:_B(s,y),createNotation:typeof i.reducers=="function"};CB(w)?IB(I,w,c,e):xB(I,w,c)});function d(){const[y={},w=[],I=void 0]=typeof i.extraReducers=="function"?GT(i.extraReducers):[i.extraReducers],x={...y,...u.sliceCaseReducersByType};return mB(i.initialState,C=>{for(let P in x)C.addCase(P,x[P]);for(let P of u.sliceMatchers)C.addMatcher(P.matcher,P.reducer);for(let P of w)C.addMatcher(P.matcher,P.reducer);I&&C.addDefaultCase(I)})}const f=y=>y,m=new Map;let v;function _(y,w){return v||(v=d()),v(y,w)}function S(){return v||(v=d()),v.getInitialState()}function g(y,w=!1){function I(C){let P=C[y];return typeof P>"u"&&w&&(P=S()),P}function x(C=f){const P=pw(m,w,{insert:()=>new WeakMap});return pw(P,C,{insert:()=>{const L={};for(const[M,B]of Object.entries(i.selectors??{}))L[M]=EB(B,C,S,w);return L}})}return{reducerPath:y,getSelectors:x,get selectors(){return x(I)},selectSlice:I}}const p={name:s,reducer:_,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...g(o),injectInto(y,{reducerPath:w,...I}={}){const x=w??o;return y.inject({reducerPath:x,reducer:_},I),{...p,...g(x,!0)}}};return p}}function EB(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var KT=wB();function SB(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function xB({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!TB(r))throw new Error(pt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Hs(t,o):Hs(t))}function CB(t){return t._reducerDefinitionType==="asyncThunk"}function TB(t){return t._reducerDefinitionType==="reducerWithPrepare"}function IB({type:t,reducerName:e},n,r,i){if(!i)throw new Error(pt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Al,pending:a||Al,rejected:l||Al,settled:u||Al})}function Al(){}var bB=(t,e)=>{if(typeof t!="function")throw new Error(pt(32))},Sy="listenerMiddleware",kB=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=Hs(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(pt(21));return bB(s),{predicate:i,type:e,effect:s}},PB=Object.assign(t=>{const{type:e,predicate:n,effect:r}=kB(t);return{id:yB(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(pt(22))}}},{withTypes:()=>PB}),RB=Object.assign(Hs(`${Sy}/add`),{withTypes:()=>RB});Hs(`${Sy}/removeAll`);var OB=Object.assign(Hs(`${Sy}/remove`),{withTypes:()=>OB});function pt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const NB={user:{name:null,email:null},isLoggedIn:!1,isRefresh:!1,isLoading:!1,error:null},qT=KT({name:"auth",initialState:NB,reducers:{setUser:(t,e)=>({...t,user:{name:e.payload.name,email:e.payload.email}}),signIn:(t,e)=>{t.user=e.payload.user,t.isLoggedIn=!0},signOutUser:t=>({...t,user:{name:null,email:null},isLoggedIn:!1}),getCurrentUser:(t,e)=>{t.user=e.payload,t.isLoggedIn=!0}}}),{signIn:AB,setUser:DB,signOutUser:LB}=qT.actions,MB=qT.reducer,xy=()=>h.jsx(JO,{containerStyle:{top:20,left:20}}),$B={email:"",password:""},jB=xg({email:_s().matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/,"Invalid email").required("Email can't be is empty"),password:_s().min(8,"Too short password").max(48,"Too long password").matches(/[a-zA-Z]/,"Must contain at least one letter").required("Password can't be is empty")}),FB=({onLoginSuccess:t})=>{const[e,n]=E.useState(!1),r=td(),i=Gc(),{isUserLoggedIn:s}=eo(),o=()=>{s&&t()},a=async(u,{resetForm:c})=>{try{const{email:d,password:f}=u,v=(await H2(Ad,d,f)).user;r(AB({name:v.displayName,email:v.email})),i("/teachers"),Uo.success("You are was successfully signed ✅"),c()}catch(d){console.log(d.message)}},l=()=>{n(!e)};return h.jsxs(h.Fragment,{children:[h.jsx(Ex,{children:"Login"}),h.jsx(Sx,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),h.jsx(yg,{initialValues:$B,validationSchema:jB,onSubmit:a,children:h.jsxs(gd,{children:[h.jsxs(Cg,{children:[h.jsxs("div",{children:[" ",h.jsx(Tr,{type:"email",name:"email",placeholder:"Email"}),h.jsx(Ir,{name:"email",component:"p"})]}),h.jsxs(Tg,{children:[h.jsx(Tr,{type:e?"text":"password",name:"password",placeholder:"Password"}),h.jsx(Ig,{onClick:l,children:e?h.jsx("img",{src:xx,alt:"eye-on-icon",width:20,height:20}):h.jsx("img",{src:Ju,alt:"eye-off_icon",width:20,height:20})}),h.jsx(Ir,{name:"password",component:"p"})]})]}),h.jsx(bg,{type:"submit",onClick:o,children:"Log In"})]})}),h.jsx(xy,{})]})},UB=({onLoginSuccess:t})=>h.jsx(FB,{onLoginSuccess:t}),zB={name:"",email:"",password:""},BB=xg({name:_s().required("Name is required field"),email:_s().matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/,"Invalid email").required("Email can't be is empty"),password:_s().min(8,"Too short password").max(48,"Too long password").matches(/[a-zA-Z]/,"Must contain at least one letter").required("Password can't be is empty")}),WB=()=>{const[t,e]=E.useState(!1),n=async(i,{resetForm:s})=>{try{const{name:o,email:a,password:l}=i,u=await V2(Ad,a,l),c=K2(u.user,{displayName:o});console.log(c),s()}catch(o){console.log(o.message)}},r=()=>{e(!t)};return h.jsxs(h.Fragment,{children:[h.jsx(Ex,{children:"Registration"}),h.jsx(Sx,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),h.jsx(yg,{initialValues:zB,validationSchema:BB,onSubmit:n,children:h.jsxs(gd,{children:[h.jsxs(Cg,{children:[h.jsxs("div",{children:[" ",h.jsx(Tr,{type:"text",name:"name",placeholder:"Name"}),h.jsx(Ir,{name:"name",component:"p"})]}),h.jsxs("div",{children:[" ",h.jsx(Tr,{type:"email",name:"email",placeholder:"Email"}),h.jsx(Ir,{name:"email",component:"p"})]}),h.jsxs(Tg,{children:[h.jsx(Tr,{type:t?"text":"password",name:"password",placeholder:"Password"}),h.jsx(Ig,{onClick:r,children:t?h.jsx("img",{src:xx,alt:"eye-on-icon",width:20,height:20}):h.jsx("img",{src:Ju,alt:"eye-off_icon",width:20,height:20})}),h.jsx(Ir,{name:"password",component:"p"})]})]}),h.jsx(bg,{type:"submit",children:"Log In"})]})})]})},VB=()=>h.jsx(WB,{});var jd=(t=>(t.Root="/",t.Favorites="/favorites",t))(jd||{});const HB=["English","Spanish","French","German","Mandarin Chinese","Italian","Korean","Vietnamese"],GB=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],YT={DELETE_SUCCESS:"teacher was successfully deleted ✅",ADD_SUCCESS:"Teacher was added 🧔",AUTH_ERROR:"You need to authenticate",SIGN_OUT_SUCCESS:"You are was successfully logout"},KB=()=>{const[t,e]=E.useState({signIn:!1,signUp:!1}),{isUserLoggedIn:n}=eo(),r=Gc(),i=td(),{SIGN_OUT_SUCCESS:s}=YT,o=u=>{e(c=>({...c,[u]:!c[u]}))},a=()=>{n&&o("signIn")},l=async()=>{try{await X2(Ad),i(LB()),Uo.success(s),r(jd.Root)}catch(u){console.log(u.message)}};return h.jsxs(h.Fragment,{children:[h.jsx("li",{children:h.jsxs(iO,{to:"/",children:[" ",h.jsxs(i_,{children:[h.jsx("img",{src:ZO,width:28,height:28,alt:"logo_ukraine"})," "]}),"Learn Lingo"]})}),h.jsx("li",{children:h.jsx(sO,{children:h.jsx(wf,{to:"/",children:"Home"})})}),h.jsxs("li",{children:[" ",h.jsx(wf,{to:"/teachers",children:"Teachers"}),n&&h.jsx(oO,{children:h.jsx(wf,{to:"/favorites",children:"Favorites"})})]}),h.jsxs(aO,{children:[n?h.jsx(s_,{onClick:l,children:"Logout"}):h.jsxs(h.Fragment,{children:[h.jsx("li",{children:h.jsxs(lO,{onClick:()=>o("signIn"),children:[h.jsxs(i_,{children:[h.jsx("img",{src:eN,width:20,height:20,alt:"icon_login"})," "]}),"Log in"]})}),h.jsxs("li",{children:[" ",h.jsx(s_,{type:"button",onClick:()=>o("signUp"),children:"Registration"})]})]}),t.signIn&&h.jsx(cp,{maxWidth:566,maxHeight:506,close:()=>o("signIn"),children:h.jsx(UB,{onLoginSuccess:a})}),t.signUp&&h.jsxs("div",{children:[" ",h.jsx(cp,{maxWidth:566,maxHeight:600,close:()=>o("signUp"),children:h.jsx(VB,{})})]})]}),h.jsx(xy,{})]})},qB=()=>h.jsx(Zs,{children:h.jsx(rO,{children:h.jsx(nO,{children:h.jsx(KB,{})})})}),YB=()=>h.jsxs(h.Fragment,{children:[h.jsx(Zs,{children:h.jsx(qB,{})}),h.jsx(E.Suspense,{fallback:h.jsx("div",{children:"Loading..."}),children:h.jsx("main",{children:h.jsx(LP,{})})})]}),QB=k.div`
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    /* width: 1340px; */
  }
`,XB=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,JB=k.h2`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  margin-bottom: 32px;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -2%;
`,ZB=k.span`
  font-style: italic;
  font-weight: 400;
  border-radius: 8px;
  background-color: ${({theme:{colors:t}})=>t.accentYellow};
`,e5=k.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  max-width: 471px;
  margin-bottom: 64px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -2%;
`,t5=k(Wa)`
  display: inline-block;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  background-color: ${({theme:{colors:t}})=>t.mainYellow};
  padding: 16px 88px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;

  transition: background-color 250ms
    ${({theme:{transitions:t}})=>t.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:t}})=>t.accentYellow};
  }
`,n5=k.div`
  border-radius: 30px;
  background-color: ${({theme:{colors:t}})=>t.accentGrey};
  padding: 98px 108px 98px 64px;
  @media screen and (min-width: 1440px) {
  }
`,r5=k.div`
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  width: 568px;
  height: 530px;
  border-radius: 30px;
  background-color: ${({theme:{colors:t}})=>t.accentYellow};

  @media screen and (max-width: 1339px) {
    display: none;
  }
`,i5=k.img`
  position: absolute;
  width: 339px;
  height: 339px;
  left: 114px;
  right: 115px;
  top: 80px;
  bottom: 111px;
`,s5=k.img`
  position: absolute;
  top: 354px;
  left: 103.64px;
  width: 359.72px;
  height: 300px;
`,o5="/images/stiker_girl.png",a5="/images/mac.png",l5=()=>h.jsx(QB,{children:h.jsxs(XB,{children:[h.jsxs(n5,{children:[h.jsxs(JB,{children:["Unlock your potential with the best"," ",h.jsx(ZB,{children:"language"})," tutors"]}),h.jsx(e5,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),h.jsx(t5,{to:"/teachers",children:"Get started"})]}),h.jsxs(r5,{children:[h.jsx(i5,{src:o5,alt:"girl_stiker"}),h.jsx(s5,{src:a5,alt:"girl_stiker"})]})]})}),u5=k.div`
  max-width: 100%;
  border: 1.5px dashed ${({theme:{colors:t}})=>t.mainYellow};
  border-radius: 30px;
  padding: 40px 124px;
  margin-bottom: 32px;
`,c5=k.ul`
  display: flex;
  justify-content: space-between;

  align-items: center;

  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`,Dl=k.li`
  display: flex;
  align-items: center;
  gap: 16px;
`,Ll=k.p`
  display: inline-flex;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -2%;
`,Ml=k.p`
  color: ${({theme:{colors:t}})=>t.addAccentBlack};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -2%;
`,d5=()=>h.jsx(h.Fragment,{children:h.jsx(u5,{children:h.jsxs(c5,{children:[h.jsxs(Dl,{children:[h.jsx(Ll,{children:"32,000 +"})," ",h.jsx(Ml,{children:"Experienced tutors"})]}),h.jsxs(Dl,{children:[h.jsx(Ll,{children:"32,000 +"})," ",h.jsx(Ml,{children:"Experienced tutors"})]}),h.jsxs(Dl,{children:[h.jsx(Ll,{children:"32,000 +"})," ",h.jsx(Ml,{children:"Experienced tutors"})]}),h.jsxs(Dl,{children:[h.jsx(Ll,{children:"32,000 +"})," ",h.jsx(Ml,{children:"Experienced tutors"})]})]})})}),f5=()=>h.jsxs(Zs,{children:[h.jsx(l5,{}),h.jsx(d5,{})]}),QT=k.div`
  margin-top: 32px;
`,h5=k.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  padding: 16px 48px;
  border-radius: 12px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  background: ${({theme:{colors:t}})=>t.mainYellow};
  transition: background-color 250ms
    ${({theme:{transitions:t}})=>t.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:t}})=>t.accentYellow};
  }

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;
`,p5=k.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
`,m5=k.div`
  flex-shrink: 0;
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
`,g5=k.div`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 85px;
  right: 23px;
  top: 19px;
  bottom: 89px;
`,y5=k.li`
  display: flex;
  position: relative;
  gap: 48px;
  max-width: 1184px;
  border-radius: 24px;
  background-color: ${({theme:{colors:t}})=>t.mainWhite};
  padding: 24px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,v5=k.div`
  width: 100%;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,_5=k.p`
  color: ${({theme:{colors:t}})=>t.mainGrey};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 8px;
`,w5=k.h3`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 32px;
`,E5=k.button`
  display: block;
  margin-bottom: 16px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: underline;
`;k.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`;const S5=k.button`
  width: 26px;
  height: 26px;
  margin-left: 64px;

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
  transform: scale(0.7);
  transition: all 250ms ${({theme:{transitions:t}})=>t.cubic};

  @media screen and (max-width: 1339px) {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`,x5=k.div`
  display: flex;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,C5=k.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,T5=k.ul`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 16px;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,$l=k.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    width: 1px;
    height: 16px;
    background-color: ${({theme:{colors:t}})=>t.mainGrey};
    margin-left: 16px;
  }
`,jl=k.p`
  margin-left: 4px;
`,I5=k.ul`
  display: flex;
  gap: 8px;
  margin: 32px 0;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`,b5=k.li`
  padding: 8px 12px;
  border-radius: 35px;
  &:first-child {
    background-color: ${({theme:{colors:t}})=>t.mainYellow};
    border: none;
  }
  border: 1px solid ${({theme:{colors:t}})=>t.accentBlack};
  background-color: transparent;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0%;
`,k5=k.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`,P5=k.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`,R5=k.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;k.ul``;const O5=k.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`,N5=k.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,A5=k.div`
  display: flex;
  gap: 8px;
`,D5=k.button`
  display: block;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  background-color: ${({theme:{colors:t}})=>t.mainYellow};
  padding: 16px 48px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;

  transition: background-color 250ms
    ${({theme:{transitions:t}})=>t.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:t}})=>t.accentYellow};
  }
`,L5=k.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,Xo=k.p`
  color: ${({theme:{colors:t}})=>t.mainGrey};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`,qp=k.span`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`,M5=k.span`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: underline;
`,$5="/icons/profile-male.svg",XT="/icons/icon_star.svg",j5=({experience:t,reviews:e})=>h.jsxs(h.Fragment,{children:[h.jsx(P5,{children:t}),h.jsx("ul",{children:e.map(({reviewer_name:n,reviewer_rating:r,comment:i},s)=>h.jsxs(O5,{children:[h.jsxs(N5,{children:[h.jsx("div",{children:h.jsx(R5,{src:$5,alt:n})}),h.jsxs("div",{children:[h.jsx(Xo,{children:n}),h.jsxs(A5,{children:[h.jsx("img",{src:XT,alt:"icon_star",width:16,height:16})," ",h.jsxs("span",{children:[r,".0"]})]})]})]}),h.jsx(qp,{children:i})]},s))})]}),F5=({levels:t})=>h.jsx(h.Fragment,{children:h.jsx(I5,{children:t.map((e,n)=>h.jsx(b5,{children:h.jsxs(k5,{children:["#",e]})},n))})}),U5="/icons/active_status.svg",z5="/icons/heart.svg",B5="/icons/active_icon.svg",W5="/icons/book-open-01.svg",V5=k.h2`
  margin-bottom: 20px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
`,H5=k.p`
  margin-bottom: 20px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`,G5=k.ul`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,K5=k.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`,q5=k.h3`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,Y5=k.h4`
  margin-bottom: 21px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`,Q5=k.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 46px;
`,X5=k.span`
  margin-left: 8px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`,J5=[{id:1,name:"career",value:"Career and business"},{id:2,name:"lesson",value:"Lesson for kids"},{id:3,name:"abroad",value:"Living abroad"},{id:4,name:"exams",value:"Exams and coursework"},{id:5,name:"travel",value:"Culture, travel or hobby"}],Z5=()=>{const[t,e]=E.useState(!1),n=()=>{e(!t)},r=()=>{};return h.jsx(h.Fragment,{children:h.jsx(yg,{initialValues:{picked:""},onSubmit:r,children:h.jsxs(gd,{children:[h.jsxs(Q5,{children:[" ",J5.map(({id:i,value:s,name:o})=>h.jsxs("label",{children:[h.jsx(fx,{type:"radio",name:o,value:s}),h.jsx(X5,{children:s})]},i))]}),h.jsxs(Cg,{children:[h.jsxs("div",{children:[" ",h.jsx(Tr,{type:"text",name:"fullName",placeholder:"Full Name"}),h.jsx(Ir,{name:"name",component:"p"})]}),h.jsxs("div",{children:[" ",h.jsx(Tr,{type:"email",name:"email",placeholder:"Email"}),h.jsx(Ir,{name:"email",component:"p"})]}),h.jsxs(Tg,{children:[h.jsx(Tr,{type:t?"text":"password",name:"password",placeholder:"Password"}),h.jsx(Ig,{onClick:n,children:t?h.jsx("img",{src:Ju,alt:"eye-on-icon",width:20,height:20}):h.jsx("img",{src:Ju,alt:"eye-off_icon",width:20,height:20})}),h.jsx(Ir,{name:"password",component:"p"})]})]}),h.jsx(bg,{children:"Book"})]})})})},eW=({teacher:t})=>{const{name:e,surname:n,avatar_url:r}=t;return h.jsxs(h.Fragment,{children:[h.jsx(V5,{children:"Book trial lesson"}),h.jsx(H5,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),h.jsxs(G5,{children:[h.jsx("li",{children:h.jsx(K5,{src:r,alt:e})}),h.jsxs("li",{children:[h.jsx(Xo,{children:"Your teacher"}),h.jsxs(q5,{children:[e," ",n]})]})]}),h.jsx(Y5,{children:"What is your main reason for learning English?"}),h.jsx(Z5,{})]})},tW="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let nW=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=tW[n[t]&63];return e};const JT=t=>t.teachers.favorites,rW={items:[],favorites:[],isLoading:!1,isFavorite:!1,isError:null},ZT=KT({name:"teachers",initialState:rW,reducers:{addTeacher(t,e){t.favorites.push(e.payload),console.log(t)},deleteTeacher(t,e){t.favorites=t.favorites.filter(n=>n.id!==e.payload)}}}),{addTeacher:iW,deleteTeacher:sW}=ZT.actions,oW=ZT.reducer,aW=({languages:t,conditions:e,lessonInfo:n})=>h.jsxs(L5,{children:[h.jsxs("li",{children:[" ",h.jsxs(Xo,{children:["Speaks: ",h.jsx(M5,{children:t.join(", ")})]})]}),h.jsxs("li",{children:[" ",h.jsxs(Xo,{children:["Lesson Info: ",h.jsx(qp,{children:n})]})]}),h.jsxs("li",{children:[" ",h.jsxs(Xo,{children:["Conditions: ",h.jsx(qp,{children:e})]})]})]}),eI=({teacher:t})=>{const[e,n]=E.useState(!1),[r,i]=E.useState(!1),s=td(),o=Wo(JT),a=()=>{i(!r)},{DELETE_SUCCESS:l,ADD_SUCCESS:u,AUTH_ERROR:c}=YT,d=nW(),{id:f,avatar_url:m,name:v,surname:_,languages:S,lesson_info:g,lessons_done:p,conditions:y,levels:w,experience:I,reviews:x}=t,{isUserLoggedIn:C}=eo(),P=()=>{n(!e)},L=B=>o.some(ot=>ot.id===B),M=()=>{if(!C){Uo.error(c);return}L(f)?(s(sW(t.id)),Uo.success(l)):(s(iW(t)),Uo.success(u))};return h.jsxs(h.Fragment,{children:[h.jsxs(y5,{children:[h.jsxs(m5,{children:[h.jsx(p5,{src:m,width:96,height:96,alt:_}),h.jsx(g5,{children:h.jsx("img",{src:U5,alt:""})})]}),h.jsx(v5,{children:h.jsxs("div",{children:[h.jsxs(C5,{children:[h.jsxs("div",{children:[h.jsx(_5,{children:"Languages"}),h.jsxs(w5,{children:[v," ",_]})]}),h.jsxs(x5,{children:[h.jsxs(T5,{children:[h.jsxs($l,{children:[h.jsxs("span",{children:[" ",h.jsx("img",{src:W5,alt:"book_icon"})]}),h.jsxs(jl,{children:["Lessons online ",h.jsx("span",{})]})]}),h.jsx($l,{children:h.jsxs(jl,{children:["Lessons done: ",h.jsx("span",{children:p})]})}),h.jsxs($l,{children:[h.jsx("span",{children:h.jsx("img",{src:XT,alt:"icon_star"})}),h.jsx(jl,{children:"Rating: 4.8"})]}),h.jsx($l,{children:h.jsx(jl,{children:"Price / 1 hour: 30$"})})," "]}),h.jsx(S5,{type:"button",onClick:M,children:L(f)?h.jsx("img",{src:B5,alt:"active_icon",width:26,height:26}):h.jsx("img",{src:z5,alt:"default_icon",width:26,height:26})})]})]}),h.jsx(aW,{languages:S,lessonInfo:g,conditions:y}),!e&&h.jsx(E5,{onClick:P,children:"Read more"}),e&&h.jsx(j5,{experience:I,reviews:x}),h.jsx(F5,{levels:w}),e&&h.jsx(D5,{type:"button",onClick:a,children:"Book trial lesson"}),r&&h.jsx(cp,{maxWidth:600,maxHeight:972,close:a,children:h.jsx(eW,{teacher:t})})]})})]},d),h.jsx(xy,{})]})},lW=()=>{const[t,e]=E.useState([]);E.useEffect(()=>{const r=v6(h6(R6,"teachers"),y6(4));(async()=>{try{const s=await p6(r);if(s.exists()){const o=Object.entries(s.val()).map(([a,l])=>({id:a,...l}));e(o),console.log(o)}else console.log("No data")}catch(s){console.log(s.message)}})()},[]);const n=async()=>{};return h.jsxs(h.Fragment,{children:[" ",h.jsx(QT,{children:h.jsxs(Zs,{children:[h.jsx("ul",{children:t.length>0?t.map(r=>h.jsx(eI,{teacher:r},r)):h.jsx("div",{children:"Loading..."})}),t.length>0&&h.jsx(h5,{type:"button",onClick:n,children:"Load More"})]})})]})},uW=k.ul`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`,Hf=k.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Gf=k.span`
  color: ${({theme:{colors:t}})=>t.mainGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`;k.div`
  position: relative;
  margin: 0;
  width: 224px;
`;const Kf=k.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 14px;
  pointer-events: none;

  transform-origin: top;
  transition: transform 250ms
    ${({theme:{transitions:t}})=>t.cubic};
`,cW=k.div`
  margin-bottom: 32px;
`,qf=k.div`
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${({theme:{colors:t}})=>t.mainBlack};
`,Yf=k.input`
  border: none;
  width: ${({width:t})=>t}px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  border-radius: 14px;
  padding: 18px 16px;
  background-color: ${({theme:{colors:t}})=>t.mainWhite};
`,Qf=k.li`
  /* background-color: ${({theme:{colors:t}})=>t.mainWhite}; */
`,Xf=k.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(4px);
  padding: 0;
  margin: 0;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
`;var tI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mw=Ce.createContext&&Ce.createContext(tI),dW=["attr","size","title"];function fW(t,e){if(t==null)return{};var n=hW(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function hW(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Tc(){return Tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tc.apply(this,arguments)}function gw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ic(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gw(Object(n),!0).forEach(function(r){pW(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pW(t,e,n){return e=mW(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mW(t){var e=gW(t,"string");return typeof e=="symbol"?e:String(e)}function gW(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nI(t){return t&&t.map((e,n)=>Ce.createElement(e.tag,Ic({key:n},e.attr),nI(e.child)))}function yW(t){return e=>Ce.createElement(vW,Tc({attr:Ic({},t.attr)},e),nI(t.child))}function vW(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=fW(t,dW),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ce.createElement("svg",Tc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ic(Ic({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ce.createElement("title",null,s),t.children)};return mw!==void 0?Ce.createElement(mw.Consumer,null,n=>e(n)):e(tI)}function Jf(t){return yW({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(t)}const _W=Array.from({length:9},(t,e)=>e*5),wW=()=>{//! Дописати скрізь setlanguageSelect,setlevelSelect,setPriceSelect
const[t]=E.useState("All"),[e]=E.useState("All"),[n]=E.useState("All"),[r,i]=E.useState(!1),[s,o]=E.useState(!1),[a,l]=E.useState(!1),u=c=>()=>{c==="language"&&i(!r),c==="level"&&o(!s),c==="price"&&l(!a)};return h.jsx(cW,{children:h.jsxs(uW,{children:[h.jsx("li",{children:h.jsxs(Hf,{children:[h.jsx(Gf,{children:"Languages"}),h.jsxs(qf,{children:[h.jsx(Yf,{name:"language",type:"text",value:t||"All",width:221,onClick:u("language")}),h.jsx(Kf,{onClick:u("language"),children:h.jsx(Jf,{})}),h.jsx(Xf,{children:r&&HB.map(c=>h.jsx(Qf,{children:c},c))})]})]})}),h.jsx("li",{children:h.jsxs(Hf,{children:[h.jsx(Gf,{children:"Level of knowledge"}),h.jsxs(qf,{children:[" ",h.jsx(Yf,{width:194,name:"level",type:"text",value:e||"All"}),h.jsx(Kf,{onClick:u("level"),children:h.jsx(Jf,{})}),h.jsxs(Xf,{children:[" ",s&&GB.map(c=>h.jsx(Qf,{children:c},c))]})]})]})}),h.jsx("li",{children:h.jsxs(Hf,{children:[h.jsx(Gf,{children:"Price"}),h.jsxs(qf,{children:[" ",h.jsx(Yf,{width:123,name:"price",type:"text",value:n||"All"}),h.jsx(Kf,{onClick:u("price"),children:h.jsx(Jf,{})}),h.jsx(Xf,{children:a&&_W.map(c=>h.jsx(Qf,{children:c},c))})]})]})})]})})},EW=()=>h.jsx(h.Fragment,{children:h.jsxs(w1,{children:[" ",h.jsx(Zs,{children:h.jsx(wW,{})}),h.jsx(lW,{})]})}),SW=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`,xW=k.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 24px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`,CW=k(Wa)`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  background-color: ${({theme:{colors:t}})=>t.mainYellow};
  padding: 16px 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;

  transition: background-color 250ms
    ${({theme:{transitions:t}})=>t.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:t}})=>t.accentYellow};
  }
`,TW="/icons/no-data.svg",IW=()=>{const t=Wo(JT);return h.jsx(h.Fragment,{children:h.jsx(QT,{children:h.jsx(w1,{children:h.jsx(Zs,{children:h.jsx("ul",{children:t.length>0?t.map(e=>h.jsx(eI,{teacher:e},e.id)):h.jsxs(SW,{children:[" ",h.jsx(xW,{children:"You don`t have any favorites teachers yet 😢"}),h.jsxs("p",{children:[" ",h.jsx(CW,{to:"/teachers",children:"Go to teachers"})]}),h.jsx("div",{children:h.jsx("img",{src:TW,alt:"empty_icons",width:300})})]})})})})})})},bW=()=>h.jsxs("div",{children:[h.jsx("p",{children:"Such page wasn't found 😢"}),h.jsx(Wa,{to:"/",children:"Back to home page"})]}),kW=({element:t})=>{const{isUserLoggedIn:e,isUserRefresh:n}=eo(),r=!n&&!e;return h.jsx(h.Fragment,{children:r?h.jsx(DP,{to:jd.Root}):t})},PW=()=>{const t=td(),{isUserRefresh:e,isUserLoggedIn:n}=eo();return E.useEffect(()=>{Q2(Ad,r=>{r&&t(DB({name:r==null?void 0:r.displayName,email:r==null?void 0:r.email}))})},[t,n]),e?h.jsx("p",{children:"Refreshing..."}):h.jsxs(h.Fragment,{children:[h.jsx($P,{children:h.jsxs(Yi,{path:"/",element:h.jsx(YB,{}),children:[h.jsx(Yi,{index:!0,element:h.jsx(f5,{})}),h.jsx(Yi,{path:"teachers",element:h.jsx(EW,{})}),h.jsx(Yi,{path:"favorites",element:h.jsx(kW,{element:h.jsx(IW,{}),redirectTo:jd.Root})}),h.jsx(Yi,{path:"*",element:h.jsx(bW,{})})]})}),h.jsx(tO,{})]})};function cu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?cu=function(n){return typeof n}:cu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},cu(t)}function RW(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function OW(t,e,n){return e&&yw(t.prototype,e),n&&yw(t,n),t}function NW(t,e){return e&&(cu(e)==="object"||typeof e=="function")?e:du(t)}function Yp(t){return Yp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Yp(t)}function du(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function AW(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Qp(t,e)}function Qp(t,e){return Qp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Qp(t,e)}function fu(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var rI=function(t){AW(e,t);function e(){var n,r;RW(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=NW(this,(n=Yp(e)).call.apply(n,[this].concat(s))),fu(du(r),"state",{bootstrapped:!1}),fu(du(r),"_unsubscribe",void 0),fu(du(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return OW(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(E.PureComponent);fu(rI,"defaultProps",{children:null,loading:null});var Cy={},Ty={};Ty.__esModule=!0;Ty.default=MW;function hu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hu=function(n){return typeof n}:hu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hu(t)}function Zf(){}var DW={getItem:Zf,setItem:Zf,removeItem:Zf};function LW(t){if((typeof self>"u"?"undefined":hu(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function MW(t){var e="".concat(t,"Storage");return LW(e)?self[e]:DW}Cy.__esModule=!0;Cy.default=FW;var $W=jW(Ty);function jW(t){return t&&t.__esModule?t:{default:t}}function FW(t){var e=(0,$W.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var iI=void 0,UW=zW(Cy);function zW(t){return t&&t.__esModule?t:{default:t}}var BW=(0,UW.default)("local");iI=BW;var Iy="persist:",sI="persist/FLUSH",by="persist/REHYDRATE",oI="persist/PAUSE",aI="persist/PERSIST",lI="persist/PURGE",uI="persist/REGISTER",WW=-1;function pu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pu=function(n){return typeof n}:pu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pu(t)}function vw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function VW(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vw(n,!0).forEach(function(r){HW(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vw(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function HW(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function GW(t,e,n,r){r.debug;var i=VW({},n);return t&&pu(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function KW(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:Iy).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(I){return I}:typeof t.serialize=="function"?a=t.serialize:a=qW;var l=t.writeFailHandler||null,u={},c={},d=[],f=null,m=null,v=function(I){Object.keys(I).forEach(function(x){g(x)&&u[x]!==I[x]&&d.indexOf(x)===-1&&d.push(x)}),Object.keys(u).forEach(function(x){I[x]===void 0&&g(x)&&d.indexOf(x)===-1&&u[x]!==void 0&&d.push(x)}),f===null&&(f=setInterval(_,i)),u=I};function _(){if(d.length===0){f&&clearInterval(f),f=null;return}var w=d.shift(),I=r.reduce(function(x,C){return C.in(x,w,u)},u[w]);if(I!==void 0)try{c[w]=a(I)}catch(x){console.error("redux-persist/createPersistoid: error serializing state",x)}else delete c[w];d.length===0&&S()}function S(){Object.keys(c).forEach(function(w){u[w]===void 0&&delete c[w]}),m=o.setItem(s,a(c)).catch(p)}function g(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||e&&e.indexOf(w)!==-1)}function p(w){l&&l(w)}var y=function(){for(;d.length!==0;)_();return m||Promise.resolve()};return{update:v,flush:y}}function qW(t){return JSON.stringify(t)}function YW(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Iy).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=QW,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function QW(t){return JSON.parse(t)}function XW(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Iy).concat(t.key);return e.removeItem(n,JW)}function JW(t){}function _w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_w(n,!0).forEach(function(r){ZW(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_w(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ZW(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e8(t,e){if(t==null)return{};var n=t8(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function t8(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var n8=5e3;function ww(t,e){var n=t.version!==void 0?t.version:WW;t.debug;var r=t.stateReconciler===void 0?GW:t.stateReconciler,i=t.getStoredState||YW,s=t.timeout!==void 0?t.timeout:n8,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var f=c||{},m=f._persist,v=e8(f,["_persist"]),_=v;if(d.type===aI){var S=!1,g=function(P,L){S||(d.rehydrate(t.key,P,L),S=!0)};if(s&&setTimeout(function(){!S&&g(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=KW(t)),m)return xn({},e(_,d),{_persist:m});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(t.key),i(t).then(function(C){var P=t.migrate||function(L,M){return Promise.resolve(L)};P(C,n).then(function(L){g(L)},function(L){g(void 0,L)})},function(C){g(void 0,C)}),xn({},e(_,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===lI)return a=!0,d.result(XW(t)),xn({},e(_,d),{_persist:m});if(d.type===sI)return d.result(o&&o.flush()),xn({},e(_,d),{_persist:m});if(d.type===oI)l=!0;else if(d.type===by){if(a)return xn({},_,{_persist:xn({},m,{rehydrated:!0})});if(d.key===t.key){var p=e(_,d),y=d.payload,w=r!==!1&&y!==void 0?r(y,c,p,t):p,I=xn({},w,{_persist:xn({},m,{rehydrated:!0})});return u(I)}}}if(!m)return e(c,d);var x=e(_,d);return x===_?c:u(xn({},x,{_persist:m}))}}function Ew(t){return s8(t)||i8(t)||r8()}function r8(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i8(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function s8(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function Sw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sw(n,!0).forEach(function(r){o8(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sw(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function o8(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var cI={registry:[],bootstrapped:!1},a8=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:cI,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case uI:return Xp({},e,{registry:[].concat(Ew(e.registry),[n.key])});case by:var r=e.registry.indexOf(n.key),i=Ew(e.registry);return i.splice(r,1),Xp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function l8(t,e,n){var r=n||!1,i=vy(a8,cI,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:uI,key:u})},o=function(u,c,d){var f={type:by,payload:c,err:d,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Xp({},i,{purge:function(){var u=[];return t.dispatch({type:lI,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:sI,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){t.dispatch({type:oI})},persist:function(){t.dispatch({type:aI,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const xw={key:"teachers",storage:iI,whitelist:["favorites"]},dI=hB({reducer:{auth:ww(xw,MB),teachers:ww(xw,oW)},middleware:t=>t({serializableCheck:{}})}),u8=l8(dI);th.createRoot(document.getElementById("root")).render(h.jsx(Ce.StrictMode,{children:h.jsx(AN,{store:dI,children:h.jsx(rI,{loading:null,persistor:u8,children:h.jsx(HP,{basename:"/learn-lingo-pet-project",children:h.jsx(QR,{theme:eO,children:h.jsx(PW,{})})})})})}))});export default c8();
