(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[1],{673:function(e,t,n){"use strict";var r=n(12),a=(n(0),n(32)),i=n(143),o=n(98),u=n(13);t.a=function(e){var t=Object(o.b)().t,n=Object(i.a)(),s=n.login,c=n.logout,l=Object(a.db)(s,c).onPresentConnectModal;return Object(u.jsx)(a.j,Object(r.a)(Object(r.a)({onClick:l},e),{},{children:t("Unlock Wallet")}))}},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r,a,i=n(12),o=n(140),u=n(72),s=(n(0),n(7)),c=n(32),l=n(223),f=n(13),p=Object(s.e)(c.h)(r||(r=Object(u.a)(["\n  background: ",";\n"])),(function(e){var t=e.theme;return e.background||t.colors.gradients.bubblegum})),d=Object(s.e)(l.a)(a||(a=Object(u.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),m=function(e){var t=e.background,n=e.children,r=Object(o.a)(e,["background","children"]);return Object(f.jsx)(p,Object(i.a)(Object(i.a)({background:t},r),{},{children:Object(f.jsx)(d,{children:n})}))}},675:function(e,t,n){"use strict";var r=n(12),a=(n(0),n(679)),i=n(13);t.a=function(e){return Object(i.jsx)(a.a,Object(r.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}},679:function(e,t,n){"use strict";var r=n(0),a=n(685),i=n(32),o=n(13);t.a=function(e){var t=e.value,n=e.decimals,u=e.fontSize,s=void 0===u?"40px":u,c=e.lineHeight,l=void 0===c?"1":c,f=e.prefix,p=void 0===f?"":f,d=e.bold,m=void 0===d||d,b=e.color,h=void 0===b?"text":b,v=Object(a.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),g=v.countUp,j=v.update,y=Object(r.useRef)(j);return Object(r.useEffect)((function(){y.current(t)}),[t,y]),Object(o.jsxs)(i.R,{bold:m,fontSize:s,style:{lineHeight:l},color:h,children:[p,g]})}},685:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(23)),i=n(0),o=r(i),u=r(n(695)),s=r(n(696));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,i=t.easingFn,o=t.end,u=t.formattingFn,c=t.prefix,l=t.separator,f=t.start,p=t.suffix,d=t.useEasing;return new s(e,f,o,r,a,{decimal:n,easingFn:i,formattingFn:u,separator:l,prefix:c,suffix:p,useEasing:d,useGrouping:!!l})},j=function(e){function t(){var e,n;c(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return f(b(n=h(this,(e=d(t)).call.apply(e,[this].concat(a)))),"createInstance",(function(){return"function"===typeof n.props.children&&u(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),g(n.containerRef.current,n.props)})),f(b(n),"pauseResume",(function(){var e=b(n),t=e.reset,r=e.restart,a=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:r,update:a})})),f(b(n),"reset",(function(){var e=b(n),t=e.pauseResume,r=e.restart,a=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:r,update:a})})),f(b(n),"restart",(function(){n.reset(),n.start()})),f(b(n),"start",(function(){var e=b(n),t=e.pauseResume,r=e.reset,a=e.restart,i=e.update,o=n.props,u=o.delay,s=o.onEnd,c=o.onStart,l=function(){return n.instance.start((function(){return s({pauseResume:t,reset:r,start:a,update:i})}))};u>0?n.timeoutId=setTimeout(l,1e3*u):l(),c({pauseResume:t,reset:r,update:i})})),f(b(n),"update",(function(e){var t=b(n),r=t.pauseResume,a=t.reset,i=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:r,reset:a,start:i})})),f(b(n),"containerRef",o.createRef()),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,i=t.prefix,o=t.redraw,u=t.duration,s=t.separator,c=t.decimals,l=t.decimal;return u!==e.duration||n!==e.end||r!==e.start||a!==e.suffix||i!==e.prefix||s!==e.separator||c!==e.decimals||l!==e.decimal||o}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,i=t.prefix,o=t.duration,u=t.separator,s=t.decimals,c=t.decimal,l=t.preserveValue;o===e.duration&&r===e.start&&a===e.suffix&&i===e.prefix&&u===e.separator&&s===e.decimals&&c===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(l||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,i=this.pauseResume,u=this.reset,s=this.restart,c=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:i,reset:u,start:s,update:c}):o.createElement("span",{className:n,ref:a,style:r})}}])&&l(n.prototype,r),a&&l(n,a),t}(i.Component);f(j,"propTypes",{decimal:a.string,decimals:a.number,delay:a.number,easingFn:a.func,end:a.number.isRequired,formattingFn:a.func,onEnd:a.func,onStart:a.func,prefix:a.string,redraw:a.bool,separator:a.string,start:a.number,startOnMount:a.bool,suffix:a.string,style:a.object,useEasing:a.bool,preserveValue:a.bool}),f(j,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var y={innerHTML:null};t.default=j,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},j.defaultProps,{},e),n=t.start,r=t.formattingFn,a=v(i.useState("function"===typeof r?r(n):n),2),o=a[0],u=a[1],s=i.useRef(null),c=function(){var e=s.current;if(null!==e)return e;var n=function(){var e=g(y,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);u(e)},e}();return s.current=n,n},l=function(){var e=t.onReset;c().reset(),e({pauseResume:m,start:d,update:b})},d=function e(){var n=t.onStart,r=t.onEnd;c().reset(),c().start((function(){r({pauseResume:m,reset:l,start:e,update:b})})),n({pauseResume:m,reset:l,update:b})},m=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:l,start:d,update:b})},b=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:m,reset:l,start:d})};return i.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;if(t.startOnMount)var a=setTimeout((function(){n({pauseResume:m,reset:l,update:b}),c().start((function(){clearTimeout(a),r({pauseResume:m,reset:l,start:d,update:b})}))}),1e3*e);return l}),[]),{countUp:o,start:d,pauseResume:m,reset:l,update:b}}},692:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r,a,i,o=n(72),u=n(0),s=n.n(u),c=n(7),l=n(13),f=c.e.div(r||(r=Object(o.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),p=function(e){var t,n=e.size,r=void 0===n?"md":n,a=Object(u.useContext)(c.a).spacing;switch(r){case"lg":t=a[6];break;case"sm":t=a[2];break;case"md":default:t=a[4]}return Object(l.jsx)(f,{size:t})},d=c.e.div(a||(a=Object(o.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px 0 0;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),m=c.e.div(i||(i=Object(o.a)(["\n  flex: 1;\n"]))),b=function(e){var t=e.children,n=s.a.Children.toArray(t).length;return Object(l.jsx)(d,{children:s.a.Children.map(t,(function(e,t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{children:e}),t<n-1&&Object(l.jsx)(p,{})]})}))})}},695:function(e,t,n){"use strict";var r=function(){};e.exports=r},696:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,i){function o(e){var t,n,r,a,i,o,u=e<0;if(e=Math.abs(e).toFixed(c.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(a="",i=0,o=n.length;i<o;++i)0!==i&&i%3===0&&(a=c.options.separator+a),a=n[o-i-1]+a;n=a}return c.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(u?"-":"")+c.options.prefix+n+r+c.options.suffix}function u(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function s(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:u,formattingFn:o,prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var l in c.options)i.hasOwnProperty(l)&&null!==i[l]&&(c.options[l]=i[l]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var f=0,p=["webkit","moz","ms","o"],d=0;d<p.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[p[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[d]+"CancelAnimationFrame"]||window[p[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-f)),a=window.setTimeout((function(){e(n+r)}),r);return f=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(n),s(c.startVal)&&s(c.endVal)?(c.decimals=Math.max(0,r||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(a)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!s(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)},720:function(e,t,n){"use strict";var r,a=n(72),i=(n(0),n(7)),o=n(32),u=n(98),s=n(13),c=i.e.div(r||(r=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),l=function(e){var t=e.onClick,n=e.expanded,r=Object(u.b)().t;return Object(s.jsxs)(c,{"aria-label":r("Hide or show expandable content"),role:"button",onClick:function(){return t()},children:[Object(s.jsx)(o.R,{color:"primary",bold:!0,children:r(n?"Hide":"Details")}),n?Object(s.jsx)(o.u,{}):Object(s.jsx)(o.t,{})]})};l.defaultProps={expanded:!1},t.a=l}}]);