"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4392],{4392:function(e,r,t){t.r(r);var n=t(2322),l=t(2868),o=t(3618);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}r.default=function(e){var r=e.body,t=void 0===r?[]:r,f=(e.borders,e.columns),i=s(e,["body","borders","columns"]),u=f.large,c=f.medium,b=f.small,m=f.xsmall,d=f.xlarge;return(0,n.jsx)(l.J,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({xs:m,sm:b,md:c,lg:u,xl:d},i,{children:(0,n.jsx)(o.LU,{bloks:t})}))}},2868:function(e,r,t){t.d(r,{J:function(){return y}});var n=t(7284),l=t(2784),o=t(68),a=t(7896),s=t(1461),f=t(2779),i=t.n(f),u=t(9658),c=["bsPrefix","className","as"],b=["xl","lg","md","sm","xs"],m=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,o=e.as,f=void 0===o?"div":o,m=(0,s.Z)(e,c),d=(0,u.vE)(t,"col"),p=[],g=[];return b.forEach((function(e){var r,t,n,l=m[e];if(delete m[e],"object"===typeof l&&null!=l){var o=l.span;r=void 0===o||o,t=l.offset,n=l.order}else r=l;var a="xs"!==e?"-"+e:"";r&&p.push(!0===r?""+d+a:""+d+a+"-"+r),null!=n&&g.push("order"+a+"-"+n),null!=t&&g.push("offset"+a+"-"+t)})),p.length||p.push(d),l.createElement(f,(0,a.Z)({},m,{ref:r,className:i().apply(void 0,[n].concat(p,g))}))}));m.displayName="Col";var d=m,p=t(3020),g=t(9020),y=l.forwardRef((function(e,r){var t=e.alignSelf,a=e.alignItems,s=e.justifyContent,f=e.flex,i=e.gutterY,u=e.className,c=void 0===u?"":u,b=e.borderLeft,m=e.borderRight,y=e.bordersMobile;e.noAnimate;var v=(0,n._)(e,["alignSelf","alignItems","justifyContent","flex","gutterY","className","borderLeft","borderRight","bordersMobile","noAnimate"]),_=(0,l.useRef)(null),h=(0,p.w)(_).animClasses;return l.createElement(d,(0,n.p)({ref:(0,g.Y)(r,_),className:(0,o.W)("column",h,c,f&&"col__flex",a&&"align-items-"+a,s&&"justify-content-"+s,t&&"align-self-"+t,b&&"col__bl",m&&"col__br",y&&y.top&&"col__md__bt",y&&y.bottom&&"col__md__bb",i&&"col__gutterY"),"data-testid":"Col"},v))}));y.displayName="Col"}}]);