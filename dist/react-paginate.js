!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactPaginate=t(require("react")):e.ReactPaginate=t(e.React)}(global,(function(e){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(t,a){t.exports=e},function(e,t,a){"use strict";var r=a(3);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(0),o=a.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.renderPage,i=e.page,o=e.selected,u=e.activeClassName,p=e.activeLinkClassName,f=e.getEventListener,d=e.pageSelectedHandler,g=e.href,b=e.extraAriaContext,v=e.ariaLabel||"Page "+i+(b?" "+b:""),y=null;return o&&(y="page",v=e.ariaLabel||"Page "+i+" is your current page",t=void 0!==t?t+" "+u:u,void 0!==a?void 0!==p&&(a=a+" "+p):a=p),n.a.createElement("li",{className:t},r?r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({href:g,ariaLabel:v,ariaCurrent:y,pageSelectedHandler:d,page:i},f(d))):n.a.createElement("a",s({role:"button",className:a,href:g,tabIndex:"0","aria-label":v,"aria-current":y,onKeyPress:d},f(d)),i))};u.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var p=u;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var a=void 0!==t?t:exports;if(a)if("function"!=typeof a){for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){var n=void 0;try{n=a[r]}catch(e){continue}e.register(n,r,"/home/pavlo/Sites/carsy/react-paginate/react_components/PageView.js")}}else e.register(a,"module.exports","/home/pavlo/Sites/carsy/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,i=e.breakHandler,o=e.getEventListener,s=a||"break";return n.a.createElement("li",{className:s},n.a.createElement("a",f({className:r,role:"button",tabIndex:"0",onKeyPress:i},o(i)),t))};d.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var g=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function y(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=L(e);if(t){var n=L(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return P(this,a)}}function P(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var a=void 0!==t?t:exports;if(a)if("function"!=typeof a){for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){var n=void 0;try{n=a[r]}catch(e){continue}e.register(n,r,"/home/pavlo/Sites/carsy/react-paginate/react_components/BreakView.js")}}else e.register(a,"module.exports","/home/pavlo/Sites/carsy/react-paginate/react_components/BreakView.js")}}();var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,e);var t,a,r,i=h(o);function o(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),k(C(t=i.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),k(C(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),k(C(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),k(C(t),"getEventListener",(function(e){return k({},t.props.eventListener,e)})),k(C(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),k(C(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),k(C(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,i=a.pageCount,o=a.marginPagesDisplayed,s=a.breakLabel,l=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(i<=r)for(var p=0;p<i;p++)e.push(t.getPageElement(p));else{var f,d,b,v=r/2,y=r-v;u>i-r/2?v=r-(y=i-u):u<r/2&&(y=r-(v=u));var m=function(e){return t.getPageElement(e)};for(f=0;f<i;f++)(d=f+1)<=o||d>i-o||f>=u-v&&f<=u+y?e.push(m(f)):s&&e[e.length-1]!==b&&(b=n.a.createElement(g,{key:f,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,f),getEventListener:t.getEventListener}),e.push(b))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=o,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,i=a.pageLinkClassName,o=a.activeClassName,s=a.activeLinkClassName,l=a.extraAriaContext,c=a.renderPage;return n.a.createElement(p,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener,renderPage:c})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,i=e.previousLabel,o=e.previousClassName,s=e.previousLinkClassName,l=e.previousAriaLabel,c=e.nextLabel,u=e.nextClassName,p=e.nextLinkClassName,f=e.nextAriaLabel,d=this.state.selected,g=o+(0===d?" ".concat(t):""),b=u+(d===a-1?" ".concat(t):""),y=0===d?"true":"false",m=d===a-1?"true":"false";return n.a.createElement("ul",{className:r},n.a.createElement("li",{className:g},n.a.createElement("a",v({className:s,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":l},this.getEventListener(this.handlePreviousPage)),i)),this.pagination(),n.a.createElement("li",{className:b},n.a.createElement("a",v({className:p,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":m,"aria-label":f},this.getEventListener(this.handleNextPage)),c)))}}])&&y(t.prototype,a),r&&y(t,r),o}(r.Component);k(x,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),k(x,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var a=void 0!==t?t:exports;if(a)if("function"!=typeof a){for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){var n=void 0;try{n=a[r]}catch(e){continue}e.register(n,r,"/home/pavlo/Sites/carsy/react-paginate/react_components/PaginationBoxView.js")}}else e.register(a,"module.exports","/home/pavlo/Sites/carsy/react-paginate/react_components/PaginationBoxView.js")}}();t.default=x;!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var a=void 0!==t?t:exports;if(a)if("function"!=typeof a){for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){var n=void 0;try{n=a[r]}catch(e){continue}e.register(n,r,"/home/pavlo/Sites/carsy/react-paginate/react_components/index.js")}}else e.register(a,"module.exports","/home/pavlo/Sites/carsy/react-paginate/react_components/index.js")}}()}])}));
//# sourceMappingURL=react-paginate.js.map