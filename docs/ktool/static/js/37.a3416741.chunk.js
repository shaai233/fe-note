(this.webpackJsonpktool=this.webpackJsonpktool||[]).push([[37],{563:function(e,t,a){"use strict";a(54),a(569)},564:function(e,t,a){"use strict";var n=a(4),c=a(3),r=a(6),o=a.n(r),i=a(0),l=a(70),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){var t,a=i.useContext(l.b),r=a.getPrefixCls,u=a.direction,b=e.prefixCls,d=e.type,j=void 0===d?"horizontal":d,p=e.orientation,O=void 0===p?"center":p,f=e.orientationMargin,v=e.className,h=e.children,m=e.dashed,g=e.plain,x=s(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),y=r("divider",b),N=O.length>0?"-".concat(O):O,C=!!h,w="left"===O&&null!=f,k="right"===O&&null!=f,P=o()(y,"".concat(y,"-").concat(j),(t={},Object(c.a)(t,"".concat(y,"-with-text"),C),Object(c.a)(t,"".concat(y,"-with-text").concat(N),C),Object(c.a)(t,"".concat(y,"-dashed"),!!m),Object(c.a)(t,"".concat(y,"-plain"),!!g),Object(c.a)(t,"".concat(y,"-rtl"),"rtl"===u),Object(c.a)(t,"".concat(y,"-no-default-orientation-margin-left"),w),Object(c.a)(t,"".concat(y,"-no-default-orientation-margin-right"),k),t),v),S=Object(n.a)(Object(n.a)({},w&&{marginLeft:f}),k&&{marginRight:f});return i.createElement("div",Object(n.a)({className:P},x,{role:"separator"}),h&&"vertical"!==j&&i.createElement("span",{className:"".concat(y,"-inner-text"),style:S},h))}},569:function(e,t,a){},844:function(e,t,a){e.exports={digitTrans:"digitTrans--k4WRB",transType:"transType--ZLPr7",radioGroup:"radioGroup--sLLuj",radio:"radio--tqCOP"}},976:function(e,t,a){"use strict";a.r(t);a(430);var n=a(216),c=(a(271),a(130)),r=(a(563),a(564)),o=a(5),i=a(0),l=a(844),s=a.n(l),u=a(1);t.default=function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1],b=Object(i.useState)(""),d=Object(o.a)(b,2),j=d[0],p=d[1],O=Object(i.useState)(""),f=Object(o.a)(O,2),v=f[0],h=f[1],m=Object(i.useCallback)((function(){var e=Number.prototype.toString.call(+j,a);8===a?e="0"+e:16===a&&(e="0x"+e),h(e)}),[a,j]);return Object(i.useEffect)((function(){j&&a&&m()}),[a,j,m]),Object(u.jsxs)("div",{className:s.a.digitTrans,children:[Object(u.jsx)(r.a,{children:"\u5e38\u7528\u7684\u8fdb\u5236\u8f6c\u6362"}),Object(u.jsx)(c.a,{placeholder:"\u8bf7\u8f93\u5165\u9700\u8981\u8f6c\u6362\u7684\u6570\u5b57",value:j,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("div",{className:s.a.transType,children:Object(u.jsx)(n.a.Group,{onChange:function(e){l(e.target.value)},value:a,className:s.a.radioGroup,children:[{name:"2\u8fdb\u5236",value:2},{name:"4\u8fdb\u5236",value:4},{name:"8\u8fdb\u5236",value:8},{name:"10\u8fdb\u5236",value:10},{name:"16\u8fdb\u5236",value:16},{name:"32\u8fdb\u5236",value:32}].map((function(e){return Object(u.jsx)(n.a,{value:e.value,className:s.a.radio,children:e.name},e.value)}))})}),Object(u.jsx)(c.a,{placeholder:"\u8f6c\u6362\u7ed3\u679c",value:v})]})}}}]);