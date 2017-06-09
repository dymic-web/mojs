!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mojs=e():t.mojs=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="build/",e(e.s=26)}([function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n={};n.get=function(t){return this._props[t]},n.set=function(t,e){this._props[t]=e},n.setIfNotSet=function(t,e){return void 0===this._o[t]&&this.set(t,e),this},n.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._o=t,this.index=this._o.index||0,delete this._o.index,this._declareDefaults(),this._extendDefaults(),this._vars()},n._declareDefaults=function(){this._defaults={}},n._extendDefaults=function(){this._props=e({},this._defaults,this._o)},n._vars=function(){},t.ClassProto=n})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(16)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(16)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.staggerProperty=void 0;var n=function(t,n){var i=t;return t instanceof Array&&(i=t[n%t.length]),"function"==typeof t&&t.__mojs__isStaggerFunction&&(i=t(n)),(0,e.parseStagger)(i,n)};t.staggerProperty=n})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(0),n(4),n(18),n(5),n(1)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(0),n(4),n(18),n(5),n(1)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n,i,s,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Tweenie=void 0;var r=Object.create(e.ClassProto);r._declareDefaults=function(){this._defaults=n.tweenieDefaults},r.play=function(){return"play"===this._state?this:(this._setState("play"),this._setupPlay("play"),this._playTime=performance.now(),this._speed=this._props.speed,this)},r.pause=function(){return"pause"===this._state||"stop"===this._state?this:(i.tweener.remove(this),this._setState("pause"),this._speed=1,this)},r.stop=function(t){if("stop"===this._state)return this;var e=void 0!==t?t:this._props.isReverse===!0?1:0;return i.tweener.remove(this),this.setProgress(e),this.reset(),this},r.replay=function(t){return this.reset(),this.play(t),this},r.setSpeed=function(t){return this._props.speed=t,"play"===this._state&&(this.setStartTime(),this._speed=t,this._playTime=performance.now()),this},r.reverse=function(){if(this._props.isReverse=!this._props.isReverse,this._reverseCallbacks(),this._elapsed>0){var t=this._props.delay;this._elapsed=this._end-this._spot-(this._elapsed-t)}return this.setStartTime(),this},r.setProgress=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;void 0===this._start&&this.setStartTime();var e=1===t?this._end:this._spot+t*(this._end-this._spot);return void 0===this._prevTime&&(this._prevTime=this._start),this.update(e),this},r.reset=function(){this._isActive=!1,this._elapsed=0,this._repeatCount=0,this._setState("stop"),delete this._prevTime},r._setupPlay=function(t){this.setStartTime(),i.tweener.add(this)},r._vars=function(){var t=this._props,e=t.isReverse,n=t.onStart,i=t.onComplete,s=t.onChimeIn,o=t.onChimeOut,r=t.delay,a=t.duration;this._isActive=!1,this._elapsed=0,this._state="stop",this._speed=1,this._time=r+a,this._repeatCount=0,this._prevTime,this._cbs=[n,i,0,1],this._chCbs=[s,o],e===!0&&this._reverseCallbacks()},r.setStartTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:performance.now(),e=this._props,n=e.delay,i=e.duration,s=(e.repeat,e.shiftTime);this._elapsed>=this._end-this._spot&&(this._elapsed=0),this._spot=t-this._elapsed+s,this._playTime=this._spot,this._start=this._spot+n,this._end=this._start+i},r.update=function(t){var e=this._props,n=e.onUpdate,i=e.isReverse,s=e.index,o=e.easing,r=e.backwardEasing;t=this._playTime+this._speed*(t-this._playTime),this._elapsed=t-this._spot,t<this._start&&this._progress!==this._cbs[2]&&(this._props.onRefresh(!1,s,t),this._progress=this._cbs[2]),t>this._end&&this._progress!==this._cbs[3]&&(this._props.onRefresh(!0,s,t),this._progress=this._cbs[3]);var a=t>this._prevTime,p=a!==i?o:r;if(t>=this._start&&t<=this._end&&void 0!==this._prevTime){var u=void 0,c=(t-this._start)/this._props.duration;return this._progress=i===!1?c:1-c,n(p(this._progress),this._progress,a,t),t>this._start&&this._isActive===!1&&a===!0&&(this._cbs[0](a,i,s),this._chCbs[0](a,i,s,t)),t===this._start&&(this._cbs[0](a,i,s),this._chCbs[0](a,i,s,t),u=a),t<this._end&&this._isActive===!1&&a===!1&&(this._cbs[1](!1,i,s),this._chCbs[1](a,i,s,t)),t===this._end&&(this._cbs[1](a,i,s),this._chCbs[1](a,i,s,t),u=!a),this._isActive=void 0===u||u,this._prevTime=t,!this._isActive}return t>this._end&&this._isActive===!0?(this._progress=this._cbs[3],n(p(this._progress),this._progress,a,t),this._cbs[1](a,i,s),this._chCbs[1](a,i,s,t),this._isActive=!1,this._prevTime=t,!0):t<this._start&&this._isActive===!0?(this._progress=this._cbs[2],n(p(this._progress),this._progress,a,t),this._cbs[0](a,i,s),this._chCbs[0](a,i,s,t),this._isActive=!1,this._prevTime=t,!0):void(this._prevTime=t)},r._reverseCallbacks=function(){this._cbs=[this._cbs[1],this._cbs[0],this._cbs[3],this._cbs[2]]},r._setState=function(t){this._prevState=this._state,this._state=t;var e="pause"===this._prevState,n="stop"===this._prevState,i="play"===this._prevState,s="reverse"===this._prevState,o=i||s,r=n||e;"play"!==t&&"reverse"!==t||!r||this._props.onPlaybackStart(t,this._prevState),"pause"===t&&o&&this._props.onPlaybackPause(),"stop"===t&&(o||e)&&this._props.onPlaybackStop()},r.onTweenerFinish=function(){var t=this._props,e=t.isReverse,n=t.repeat,i=t.isReverseOnRepeat,s=t.onPlaybackComplete,r=this._repeatCount;s(!e,r,n-r),this.reset(),n-r>0&&((0,o.staggerProperty)(i,r)&&this.reverse(),this._repeatCount=r+1,this.play())},r._extendDefaults=function(){e.ClassProto._extendDefaults.call(this);for(var t in this._props)this._props[t]=(0,o.staggerProperty)(this._props[t],this.index);this._props.easing=(0,s.parseEasing)(this._props.easing);var n=this._props,i=n.easing,r=n.backwardEasing;this._props.backwardEasing=null!=r?(0,s.parseEasing)(r):i};var a=function(t){var e=Object.create(r);return e.init(t),e};a.__mojsClass=r,t.Tweenie=a})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(4)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(4)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.separateTweenieOptions=void 0;var n=function(t){var n=void 0;for(var i in e.tweenieDefaults)void 0!==t[i]&&(n=n||{},n[i]=t[i],delete t[i]);return n};t.separateTweenieOptions=n})})},function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e={delay:0,duration:350,speed:1,easing:"Sin.Out",backwardEasing:null,isReverse:!1,repeat:0,isReverseOnRepeat:!1,onUpdate:function(t,e,n){},onStart:function(){},onComplete:function(){},onChimeIn:function(){},onChimeOut:function(){},onRefresh:function(){},onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){},index:0,shiftTime:0};t.tweenieDefaults=e})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(7),n(14)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(7),n(14)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.parseEasing=void 0;var i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.defaultEasingString;switch(typeof t){case"function":return t;case"string":t=t.toLowerCase().split(".");var i=n.easing[t[0]];return i?i[t[1]]:(console.error(e.consoleName+' Easing with name "'+t[0]+'" wasn\'t found, fallback to "'+e.defaultEasingString+'" instead.',n.easing),n.easing[e.defaultEasing[0]][e.defaultEasing[1]])}};t.parseEasing=i})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(0)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(0)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.Tweenable=void 0;var n=e.ClassProto,i=Object.create(n);i.init=function(t){var e=this;n.init.call(this,t);for(var i=["play","pause","stop","replay","setSpeed","reverse","setProgress","reset","setStartTime"],s=function(t){var n=i[t];e[n]=function(){for(var t,i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];(t=e.timeline||e.tween)[n].apply(t,s)}},o=0;o<i.length;o++)s(o)};var s=function(t){var e=Object.create(i);return e.init(t),e};s.__mojsClass=i,t.Tweenable=s})})},function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=t.defaultEasing=["sin","out"],n=(t.defaultEasingString=e.join("."),t.name="mojs");t.consoleName=":"+n+":"})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(0),n(2),n(12),n(11),n(10),n(13),n(1)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(0),n(2),n(12),n(11),n(10),n(13),n(1)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n,i,s,o,r,a){Object.defineProperty(t,"__esModule",{value:!0}),t.Delta=void 0;var p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u={unit:s.parseUnit,number:o.parseNumber},c=Object.create(e.ClassProto);c.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.ClassProto.init.call(this,t),this._parseDelta(),this.update=this["_upd_"+this._delta.type],this._setupTweenie()},c._upd_number=function(t,e,n){var i=this._delta,s=i.curve,o=i.delta,r=i.start,a=(i.end,this._props);return a.target[a.key]=void 0===s?r+t*o:s(e)*r+e*o,this},c._upd_unit=function(t,e,n){var i=this._delta,s=i.curve,o=i.delta,r=i.start,a=(i.end,i.unit),p=this._props,u=p.target,c=p.key,f=void 0===s?r+t*o:s(e)*r+e*o;return u[c]=""+f+a,this},c._setupTweenie=function(){var t=this,e=this._delta.tweenieOptions;void 0!==e&&(this.tween=new n.Tweenie(p({index:this.index},e,{onUpdate:function(n,i,s){t.update(n,i,s),void 0!==e.onUpdate&&e.onUpdate(n,i,s)}})))},c._declareDefaults=function(){this._defaults={key:null,object:null,customProperties:null,target:null}},c._parseDelta=function(){var t=this._props,e=t.key,n=t.customProperties;null!=n&&null!=n[e]?this._parseByCustom():this._parseByGuess()},c._parseByGuess=function(){var t=this._props,e=t.key,n=t.object,i=this._getSplit(n),s=(""+i.start).match(r.unitRegexp)||(""+i.end).toString().match(r.unitRegexp),o=s?"unit":"number";this._delta=u[o](e,i)},c._parseByCustom=function(){var t=this._props,e=t.key,n=t.object,i=t.customProperties,s=i[e],o=s.type;this._delta=u[o](e,this._getSplit(n))},c._getSplit=function(t){var e=(0,i.splitDelta)(t);return e.start=(0,a.staggerProperty)(e.start,this.index),e.end=(0,a.staggerProperty)(e.end,this.index),e};var f=function(t){var e=Object.create(c);return e.init(t),e};f.__mojsClass=c,t.Delta=f})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(13)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(13)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.getRegexpUnit=void 0;var n=function(t){if("string"==typeof t){var n=t.match(e.unitRegexp);return null!==n?n[0]:void 0}};t.getRegexpUnit=n})})},function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n=function(t,n){var i=e({type:"number",name:t},n);return i.start=parseFloat(i.start),i.end=parseFloat(i.end),i.delta=i.end-i.start,i};t.parseNumber=n})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(9)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(9)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.parseUnit=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},i=function(t,i){var s=n({type:"unit",name:t},i),o=(0,e.getRegexpUnit)(s.start),r=(0,e.getRegexpUnit)(s.end);return s.unit=r||o||"px",s.start=parseFloat(s.start),s.end=parseFloat(s.end),s.delta=s.end-s.start,s};t.parseUnit=i})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(5),n(4),n(3)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(5),n(4),n(3)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.splitDelta=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(t){t=s({},t);var n=void 0!==t.curve?(0,e.parseEasing)(t.curve):void 0;delete t.curve;var o=(0,i.separateTweenieOptions)(t),r=Object.keys(t)[0];return{start:r,end:t[r],curve:n,tweenieOptions:o}};t.splitDelta=o})})},function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=/px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg|fr/gim;t.unitRegexp=e})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(15)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(15)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.easing=void 0;var n={linear:{none:function(t){return t}},sin:{in:function(t){return 1-Math.cos(t*Math.PI/2)},out:function(t){return Math.sin(t*Math.PI/2)},inout:function(t){return.5*(1-Math.cos(Math.PI*t))}},pow:e.pow};t.easing=n})})},function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=function(t){return function(e){return Math.pow(e,t)}}(t),n=function(t){return function(e){return 1-Math.abs(Math.pow(e-1,t))}}(t);return{in:e,out:n,inout:function(t){return t<.5?e(2*t)/2:n(2*t-1)/2+.5}}};t.pow=e})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(9)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(9)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.parseStagger=void 0;var n=function(t,n){if("string"!=typeof t)return t;if(!t.match(/^stagger\(/))return t;var i=t.split(/stagger\(|\)$/)[1].toLowerCase(),s=i.split(/([^\(,\s]+)(?=\s*,|\s*$)/gim),o=s[1],r=s[3];s.length<=3&&(o=0,r=s[1]);var a=parseFloat(o),p=(0,e.getRegexpUnit)(o),u=parseFloat(r),c=(0,e.getRegexpUnit)(r),f=p?p:c,l=a+n*u;return f?""+l+f:l};t.parseStagger=n})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(2),n(0),n(7)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(2),n(0),n(7)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.Timeline=void 0;var s=e.Tweenie.__mojsClass,o=Object.create(s);o._declareDefaults=function(){s._declareDefaults.call(this),this._defaults.easing="linear.none"},o.add=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n=Math.abs(n),t instanceof Array)t.forEach(function(t){e.add(t,n)});else{var i=t.timeline||t.tween;i&&(t=i),t.set("shiftTime",n),this._items.push(t);var s=t._props,o=s.delay,r=s.duration,a=s.shiftTime,p=o+r+a;this._props.duration=Math.max(this._props.duration,p)}return this},o.append=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.add(t,this._props.duration+Math.abs(e)),this},o.stop=function(t){s.stop.call(this,t);for(var e=this._items.length-1;e>=0;e--)this._items[e].stop(t);return this},o.reset=function(){return s.reset.call(this),this._callOnItems("reset"),this},o.setStartTime=function(t){return s.setStartTime.call(this,t),this._callOnItems("setStartTime",this._start),this},o._callOnItems=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var s=0;s<this._items.length;s++){var o;(o=this._items[s])[t].apply(o,n)}},o._createUpdate=function(t,e){return function(n,i,s,o){for(var r=0;r<e._items.length;r++)e._items[r].update(o);t(n,i,s,o)}},o._vars=function(){s._vars.call(this),this._items=[],this._props.duration=0},o._extendDefaults=function(){s._extendDefaults.call(this),this._onUpdate=this._props.onUpdate,this._props.onUpdate=this._createUpdate(this._onUpdate,this)};var r=function(t){var e=Object.create(o);return e.init(t),e};r.__mojsClass=o,t.Timeline=r})})},function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=[],n=[],i=!1,s=function(){n=e.slice(0);for(var t=0;t<n.length;t++)n[t].pause()},o=function(){for(var t=0;t<n.length;t++)n[t].play()},r=function(){document.hidden?s():o()},a=function(){e.length=0,i=!1},p=function(t){var n="number"==typeof t?t:e.indexOf(t);n!==-1&&(t=e[n],e.splice(n,1))},u=function(t){for(var n=e.length;n--;){var i=e[n];i.update(t)===!0&&(p(i),i.onTweenerFinish())}},c=function(){if(0===e.length)return a();u(performance.now()),requestAnimationFrame(c)},f=function(){i||(i=!0,requestAnimationFrame(c))},l=function(t){e.push(t),f()},h=function(){document.removeEventListener("visibilitychange",r,!1)};document.addEventListener("visibilitychange",r,!1);var d={add:l,remove:p,caffeinate:h};t.tweener=d})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(2),n(17),n(6),n(8),n(3),n(1)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(2),n(17),n(6),n(8),n(3),n(1)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n,i,s,o,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Deltas=void 0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},p=i.Tweenable.__mojsClass,u=Object.create(p);u.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p.init.call(this,t);var e=a({},t),n=e.timeline;delete e.timeline,this._customProperties=e.customProperties||{},this._render=this._customProperties.render||function(){},delete e.customProperties,this._el=e.el||{},delete e.el,this._setupTweenie(e),this._setupTimeline(n),this._parseProperties(e)},u._setupTweenie=function(t){var n=this,i=(0,o.separateTweenieOptions)(t);this.tween=new e.Tweenie(a({},i,{onUpdate:function(t,e,s){n._upd_deltas(t,e,s),n._render(n._el,t,e,s),i.onUpdate&&i.onUpdate(t,e,s)}}))},u._setupTimeline=function(t){this.timeline=new n.Timeline(t),this.timeline.add(this.tween)},u._parseProperties=function(t){this._tweenDeltas=[],this._plainDeltas=[],this._staticProps={};for(var e in t){var n=t[e];if("object"==typeof n){var i=void 0;i=void 0!==n.path?new mojs.MotionPath(a({el:this._el},n,{property:e,index:this.index})):new s.Delta({key:e,target:this._el,object:n,customProperties:this._customProperties,index:this.index}),i.tween?this._tweenDeltas.push(i):this._plainDeltas.push(i)}else this._el[e]=(0,r.staggerProperty)(n,this.index),this._staticProps[e]=this._el[e]}this.timeline.add(this._tweenDeltas)},u._upd_deltas=function(t,e,n){for(var i=0;i<this._plainDeltas.length;i++)this._plainDeltas[i].update(t,e,n)};var c=function(t){var e=Object.create(u);return e.init(t),e};c.__mojsClass=u,t.Deltas=c})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(2),n(0),n(3)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(2),n(0),n(3)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.MotionPath=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=n.ClassProto,r=Object.create(o);r.update=function(t,e,n){var i=this._props,s=i.el,o=(i.precision,i.coordinate),r=i.property,a=this._samples.step,p=t/a|0,u=p*a,c=(p+1)*a,f=t-u,l=this._samples.get(u)[o],h=l;if(c<=1){h=l+f/a*(this._samples.get(c)[o]-l)}return s[r]=h,this},r._samplePath=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._props.precision,e=this._path.getTotalLength(),n=1/t;this._samples=new Map,this._samples.step=n,this._samples.totalLength=e;for(var i=0;i<t;i++){var s=i*n;this._setForKey(s)}this._setForKey(1)},r._setForKey=function(t){var e=this._samples.totalLength,n=t*e,i=this._path.getPointAtLength(n),s=this._path.getPointAtLength(n-1),o=i.y-s.y,r=i.x-s.x,a=isFinite(Math.atan(o/r))?Math.atan(o/r):0,p=a*(180/Math.PI);this._samples.set(t,{x:i.x,y:i.y,angle:p})},r.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.init.call(this,t),this._parsePath(),this._samplePath(),this._setupTweenie()},r._setupTweenie=function(){var t=this,n=s({},this._o),o=(0,i.separateTweenieOptions)(n);void 0!==o&&(this.tween=new e.Tweenie(s({},o,{onUpdate:function(e,n,i){t.update(e,n,i),void 0!==o.onUpdate&&o.onUpdate(e,n,i)}})))},r._declareDefaults=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._defaults={el:null,path:"M0,0 L100,100",precision:140,coordinate:"x",property:"x"}},r._extendDefaults=function(){n.ClassProto._extendDefaults.call(this);for(var t in this._props)this._props[t]=staggerProperty(this._props[t],this.index);var e=this._props.property;"y"!==e&&"angle"!==e||this.setIfNotSet("coordinate",e)},r._parsePath=function(){var t=this._props.path;this._path=document.createElementNS("http://www.w3.org/2000/svg","path"),this._path.setAttributeNS(null,"d",t)};var a=function(t){var e=Object.create(r);return e.init(t),e};a.__mojsClass=r,t.MotionPath=a})})},function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(){})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(15)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(15)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.addBasicEasing=void 0;var n=function(t){t.easing.quad=(0,e.pow)(2),t.easing.cubic=(0,e.pow)(3),t.easing.quart=(0,e.pow)(4),t.easing.quint=(0,e.pow)(5),t.easing.expo={in:function(t){return 0===t?0:Math.pow(1024,t-1)},out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},inout:function(t){return 0===t||1===t?t:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},t.easing.circ={in:function(t){return 1-Math.sqrt(1-t*t)},out:function(t){return Math.sqrt(1- --t*t)},inout:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},t.easing.elastic={in:function(t){var e=.4,n=e/4;return 0===t||1===t?t:-(1*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e))},out:function(t){var e=.4,n=e/4;return 0===t||1===t?t:1*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/e)+1},inout:function(t){return 0===t||1===t?t:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},t.easing.back={in:function(t){var e=1.70158;return t*t*((e+1)*t-e)},out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},inout:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},t.easing.bounce={in:function(t){return 1-easing.bounce.out(1-t)},out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inout:function(t){return t<.5?.5*easing.bounce.in(2*t):.5*easing.bounce.out(2*t-1)+.5}}};t.addBasicEasing=n})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(27)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(27)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.makeColorObject=void 0;var n=function(t){return 2===t.length?t:t+t},i=function(t){var e=/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t);if(e)return{r:parseInt(n(e[1]),16),g:parseInt(n(e[2]),16),b:parseInt(n(e[3]),16),a:1}},s=function(t){if("#"===t[0])return i(t);"r"===t[0]&&"g"===t[1]&&"b"===t[2]||(e.div.style.color=t,t=window.getComputedStyle(e.div).color);var n="^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),",s="\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$",o=new RegExp(n+s,"gi").exec(t),r=parseFloat(o[4]||1);return o?{r:parseInt(o[1],10),g:parseInt(o[2],10),b:parseInt(o[3],10),a:r}:void 0};t.makeColorObject=s})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[e,n(6),n(1)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,n(6),n(1)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.stagger=void 0;var i=e.Tweenable.__mojsClass,s=Object.create(i);s.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];i.init.call(this,t),this._createTimeline(t.timeline),this._createModules(e)},s._createModules=function(t){this._modules=[];for(var e=this._o,n=e.items,i=e.el,s=void 0===i?{}:i,o=n||s.length||1,r=0;r<o;r++){var a=new t(this._getStaggerOptions(this._o,r));this._modules.push(a),this.timeline.add(a)}},s._getStaggerOptions=function(t,e){var i={index:e};for(var s in t)i[s]=(0,n.staggerProperty)(t[s],e);return i},s._createTimeline=function(t){this.timeline=new Timeline(t),delete this._o.timeline};var o=function(t){return function(e){var n=Object.create(s);return n.init(e,t),n}};t.stagger=o})})},function(t,e,n){var i,s,o,i,s,o;!function(r,a){s=[t,e,n(0),n(2),n(4),n(17),n(18),n(14),n(5),n(8),n(21),n(12),n(10),n(11),n(3),n(6),n(1),n(16),n(23),n(22),n(19),n(20),n(24)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e){"use strict";!function(r,a){s=[t,e,n(0),n(2),n(4),n(17),n(18),n(14),n(5),n(8),n(21),n(12),n(10),n(11),n(3),n(6),n(1),n(16),n(23),n(22),n(19),n(20),n(24)],i=a,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t,e,n,i,s,o,r,a,p,u,c,f,l,h,d,_,v,y,g,m,b,x,w){Object.defineProperty(e,"__esModule",{value:!0});var P={revision:"2.5.0",Tweenie:i.Tweenie,Timeline:o.Timeline,easing:a.easing,__helpers__:{parseEasing:p.parseEasing,ClassProto:n.ClassProto,tweenieDefaults:s.tweenieDefaults,tweener:r.tweener,Delta:u.Delta,parseDelta:c.parseDelta,splitDelta:f.splitDelta,parseNumber:l.parseNumber,parseUnit:h.parseUnit,separateTweenieOptions:d.separateTweenieOptions,Tweenable:_.Tweenable,staggerProperty:v.staggerProperty,parseStagger:y.parseStagger,makeColorObject:g.makeColorObject}};(0,m.addBasicEasing)(P),P.Deltas=b.Deltas,P.MotionPath=x.MotionPath,P.stagger=w.stagger,e.default=P,t.exports=e.default})})},function(t,e,n){t.exports=n(25)},function(t,e,n){var i,s,o,i,s,o;!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(e){"use strict";!function(n,r){s=[e],i=r,void 0!==(o="function"==typeof i?i.apply(e,s):i)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=document.createElement("div");document.body.append(e),t.div=e})})}])});
//# sourceMappingURL=mo.js.map