(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{0:function(n,t,e){e("J5xr"),n.exports=e("nOHt")},J5xr:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("YNMu")}])},VLDe:function(n,t,e){},YFqc:function(n,t,e){n.exports=e("cTJO")},YNMu:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return c}));var r=e("q1tI"),o=e.n(r),i=(e("byr4"),e("VLDe"),e("hnI/")),a=o.a.createElement;function c(n){var t=n.Component,e=n.pageProps;return a(i.a,null,a(t,e))}},byr4:function(n,t,e){},cTJO:function(n,t,e){"use strict";var r=e("lwsE"),o=e("W8MJ"),i=e("7W2i"),a=e("a1gu"),c=e("Nsbk");function l(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=c(n);if(t){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return a(this,e)}}var s=e("TqRt"),u=e("284h");t.__esModule=!0,t.default=void 0;var f,p=u(e("q1tI")),h=e("QmWs"),d=e("g/15"),v=s(e("nOHt")),b=e("elyg");function g(n){return n&&"object"===typeof n?(0,d.formatWithValidation)(n):n}var m=new Map,y=window.IntersectionObserver,w={};function x(){return f||(y?f=new y((function(n){n.forEach((function(n){if(m.has(n.target)){var t=m.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(f.unobserve(n.target),m.delete(n.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(n){i(e,n);var t=l(e);function e(n){var o;return r(this,e),(o=t.call(this,n)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(n){var t=null,e=null,r=null;return function(o,i){if(r&&o===t&&i===e)return r;var a=n(o,i);return t=o,e=i,r=a,a}}((function(n,t){return{href:(0,b.addBasePath)(g(n)),as:t?(0,b.addBasePath)(g(t)):t}})),o.linkClicked=function(n){var t=n.currentTarget,e=t.nodeName,r=t.target;if("A"!==e||!(r&&"_self"!==r||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(n){var t=(0,h.parse)(n,!1,!0),e=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===e.protocol&&t.host===e.host}(a)){var l=window.location.pathname;a=(0,h.resolve)(l,a),c=c?(0,h.resolve)(l,c):a,n.preventDefault();var s=o.props.scroll;null==s&&(s=c.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(n){n&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==n.prefetch,o}return o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var n=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),e=t.href,r=t.as,o=(0,h.resolve)(n,e);return[o,r?(0,h.resolve)(n,r):o]}},{key:"handleRef",value:function(n){var t=this;this.p&&y&&n&&n.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(n,t){var e=x();return e?(e.observe(n),m.set(n,t),function(){try{e.unobserve(n)}catch(t){console.error(t)}m.delete(n)}):function(){}}(n,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(n){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],n).catch((function(n){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var n=this,t=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){n.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),n.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||n.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),e}(p.Component);t.default=O},g3QL:function(n,t,e){"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function o(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}e.d(t,"a",(function(){return M})),e.d(t,"b",(function(){return D}));var i,a=e("h4VS"),c=e("q1tI"),l=e.n(c),s=e("YFqc"),u=e.n(s),f=e("vOnD"),p=["className","href","as","children","external"],h=l.a.createElement,d=f.b.a(i||(i=Object(a.a)(["\n  .ant-menu-dark .ant-menu-item > a {\n    color: ",";\n  }\n  color: ",";\n  text-align: ",";\n  font-weight: ",";\n  display: ",";\n  font-size: ",";\n  transition: 0.5s;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.align}),(function(n){return n.weight}),(function(n){return n.display}),(function(n){return n.fontSize}),(function(n){return n.hoverColor})),v=function(n){var t=n.className,e=n.href,i=n.as,a=n.children,c=n.external,l=o(n,p);return c?h(d,r({href:e,className:t},l),a):h(u.a,{href:e,as:i},h(d,r({className:t},l),a))};v.defaultProps={href:"/",align:"left",color:"#000",external:!1,fontSize:"16px",display:"table",hoverColor:"#000"};var b,g,m,y,w,x,O,j,k,E,P,N,C,M=v,_=e("ek7M"),R=l.a.createElement,z=_.c.colors,U=_.c.fontSizes,I=_.c.fonts,L=f.b.div(b||(b=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  outline: 0;\n  transition: ",";\n  transform: translateX(","vw);\n  visibility: ",";\n  display: none;\n  ",";\n"])),_.c.transition,(function(n){return n.menuOpen?0:100}),(function(n){return n.menuOpen?"visible":"hidden"}),_.b.tablet(g||(g=Object(a.a)(["display: block;"])))),S=f.b.aside(m||(m=Object(a.a)(["\n  ","\n  flex-direction: column;\n  background-color: ",";\n  padding: 50px;\n  width: 50vw;\n  height: 100%;\n  position: relative;\n  right: 0;\n  margin-left: auto;\n  font-family: ",";\n  box-shadow: -10px 0px 30px -15px ",";\n  ",";\n  ",";\n  ",";\n"])),_.a.flexCenter,z.lightNavy,I.SFMono,z.shadowNavy,_.b.thone(y||(y=Object(a.a)(["padding: 25px;"]))),_.b.phablet(w||(w=Object(a.a)(["width: 75vw;"]))),_.b.tiny(x||(x=Object(a.a)(["padding: 10px;"])))),J=f.b.nav(O||(O=Object(a.a)(["\n  ","\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: ",";\n"])),_.a.flexBetween,z.lightestSlate),T=f.b.ol(j||(j=Object(a.a)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  width: 100%;\n"]))),q=f.b.li(k||(k=Object(a.a)(["\n  margin: 0 auto 20px;\n  position: relative;\n  font-size: ",";\n  ",";\n  ",";\n  &:before {\n    display: block;\n    color: ",";\n    font-size: ",";\n    margin-bottom: 5px;\n  }\n"])),U.lg,_.b.thone(E||(E=Object(a.a)(["\n    margin: 0 auto 10px;\n    font-size: ",";\n  "])),U.md),_.b.tiny(P||(P=Object(a.a)(["font-size: ",";"])),U.smish),z.green,U.sm),B=f.b.a(N||(N=Object(a.a)(["\n  ",";\n  padding: 3px 20px 20px;\n  width: 100%;\n"])),_.a.link),W=f.b.a(C||(C=Object(a.a)(["\n  ",";\n  padding: 18px 50px;\n  margin: 10% auto 0;\n  width: max-content;\n"])),_.a.bigButton),D=function(n){var t=n.menuOpen;n.toggleMenu;return R(L,{menuOpen:t},R(S,null,R(J,null,R(T,null,R(q,null,R(B,{href:"#about"},"About"),R(B,{href:"#work"},"Work"),R(B,{href:"#contact"},"Contact"))),R(W,{href:"/assets/Images/usamaasif-v2.pdf",target:"_blank",rel:"nofollow noopener noreferrer"},"Resume"))))}}},[[0,0,1,2,3,4]]]);