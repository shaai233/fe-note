(this.webpackJsonpktool=this.webpackJsonpktool||[]).push([[43],{1757:function(e,r,t){"use strict";t.r(r);t(271);var n=t(130),c=t(8),a=t(15),s=t(5),u=(t(74),t(27)),i=(t(109),t(41)),l=t(0),o=t(48),m=t(98),d=t.n(m),h=t(630),j=t(49),f=t(993),b=t.n(f),p=t(1),v=function(e){var r,t=e.item,n=null===(r=t.summary)||void 0===r?void 0:r.replace(/summary-keyword-highlight/g,"span").replace(new RegExp(" |\\\x1c|\\\x12","gi"),"");return Object(p.jsxs)("div",{className:b.a.ksearchResultItem,children:[Object(p.jsx)("a",{href:t.uri,className:b.a.title,target:"_blank",rel:"noreferrer",children:t.title}),n&&Object(p.jsx)("div",{className:b.a.summary,dangerouslySetInnerHTML:{__html:n}}),Object(p.jsx)("div",{className:b.a.source,children:t.source})]})},O=function(e){var r=e.item;return Object(p.jsxs)("div",{className:b.a.ksearchResultPeople,children:[Object(p.jsx)("div",{className:b.a.photo,style:{backgroundImage:"url(".concat(r.profile_pic,")")}}),Object(p.jsxs)("div",{className:b.a.detail,children:[Object(p.jsxs)("div",{className:b.a.detailItem,children:[Object(p.jsx)("span",{className:b.a.name,children:r.name}),Object(p.jsx)("a",{className:b.a.kimtalk,href:"kim://username?username=".concat(r.email_token),target:"_blank",rel:"noreferrer",children:"Kim\u5bf9\u8bdd"})]}),Object(p.jsxs)("div",{className:b.a.detailItem,children:[Object(p.jsxs)("div",{className:b.a.email,children:[r.email_token,"@"]}),Object(p.jsx)(d.a,{text:r.email_token,onCopy:k,children:Object(p.jsx)(i.a,{size:"small",children:"\u590d\u5236"})})]}),Object(p.jsx)("div",{className:b.a.department,children:r.department})]})]})},k=function(){u.b.success("\u5df2\u590d\u5236")},x=function(e,r){var t="peoples"===r?O:v;return e.length?Object(p.jsx)("div",{className:b.a.ksearchResultList,children:e.map((function(e,n){return Object(p.jsx)(t,{item:e},"".concat(r,"_").concat(n))}))}):""};r.default=function(){var e=Object(l.useState)(null),r=Object(s.a)(e,2),t=r[0],u=r[1],i=Object(l.useState)(!1),m=Object(s.a)(i,2),d=m[0],f=m[1],v=Object(l.useRef)(null),O=Object(l.useRef)(null),k=Object(h.a)(function(){var e=Object(a.a)(Object(c.a)().mark((function e(r){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===r){e.next=8;break}return f(!0),e.t0=u,e.next=5,(n=r,j.a.get("".concat("https://ksearch.corp.kuaishou.com/api/search","?searchType=all&query=").concat(encodeURIComponent(n))).then((function(e){var r=e.docs,t=e.docs_search_result,n=e.peoples,c=e.message;return{docs:r,docs_search_result:t,peoples:n,noPermissions:!(void 0===c||!c)}})).catch((function(){return{noPermissions:!0}}))).finally((function(){f(!1),Object(o.a)("KSearchInputAction")}));case 5:e.t1=e.sent,(0,e.t0)(e.t1),null===(t=O.current)||void 0===t||t.scrollTo(0,0);case 8:case"end":return e.stop()}var n}),e)})));return function(r){return e.apply(this,arguments)}}(),1e3),g=Object(l.useCallback)((function(e){k(e.target.value)}),[k]);return Object(l.useEffect)((function(){v.current.focus()}),[]),Object(p.jsxs)("div",{className:b.a.ksearch,children:[Object(p.jsx)(n.a,{ref:v,onChange:g,maxLength:50,placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57",allowClear:!0}),d?Object(p.jsx)("div",{className:b.a.loading,children:"\u62fc\u547d\u641c\u7d22\u4e2d..."}):Object(p.jsx)("div",{ref:O,className:b.a.content,children:null!==t&&void 0!==t&&t.noPermissions?Object(p.jsxs)("div",{className:b.a.ksearchNotice,children:["\u8bf7\u5148\u8bbf\u95ee",Object(p.jsx)("a",{href:"https://ksearch.corp.kuaishou.com/",target:"_blank",rel:"noreferrer",children:"\u5feb\u641c"}),Object(p.jsx)("br",{}),"\u4ee5\u6fc0\u6d3b\u63d2\u4ef6\u641c\u7d22\u529f\u80fd\uff0c\u8bbf\u95ee\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86",Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"https://ksearch.corp.kuaishou.com/",target:"_blank",rel:"noreferrer",children:"\u70b9\u51fb\u8bbf\u95ee\u5feb\u641c"})})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:b.a.warning,children:"\u641c\u7d22\u6570\u636e\u6765\u81eaksearch\u5e73\u53f0\u3001\u5df2\u7ecf\u8fc7\u6743\u9650\u5b89\u5168\u8fc7\u6ee4"}),x((null===t||void 0===t?void 0:t.peoples)||[],"peoples"),x((null===t||void 0===t?void 0:t.docs)||[],"docs"),x((null===t||void 0===t?void 0:t.docs_search_result)||[],"docs_search_result")]})})]})}},630:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(0);function c(e,r,t){var c=this,a=Object(n.useRef)(null),s=Object(n.useRef)(0),u=Object(n.useRef)(null),i=Object(n.useRef)([]),l=Object(n.useRef)(),o=Object(n.useRef)(),m=Object(n.useRef)(e),d=Object(n.useRef)(!0);m.current=e;var h=!r&&0!==r&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");r=+r||0;var j=!!(t=t||{}).leading,f=!("trailing"in t)||!!t.trailing,b="maxWait"in t,p=b?Math.max(+t.maxWait||0,r):null;Object(n.useEffect)((function(){return d.current=!0,function(){d.current=!1}}),[]);var v=Object(n.useMemo)((function(){var e=function(e){var r=i.current,t=l.current;return i.current=l.current=null,s.current=e,o.current=m.current.apply(t,r)},t=function(e,r){h&&cancelAnimationFrame(u.current),u.current=h?requestAnimationFrame(e):setTimeout(e,r)},n=function(e){if(!d.current)return!1;var t=e-a.current,n=e-s.current;return!a.current||t>=r||t<0||b&&n>=p},v=function(r){return u.current=null,f&&i.current?e(r):(i.current=l.current=null,o.current)},O=function e(){var c=Date.now();if(n(c))return v(c);if(d.current){var u=c-a.current,i=c-s.current,l=r-u,o=b?Math.min(l,p-i):l;t(e,o)}},k=function(){for(var m=[],h=0;h<arguments.length;h++)m[h]=arguments[h];var f=Date.now(),p=n(f);if(i.current=m,l.current=c,a.current=f,p){if(!u.current&&d.current)return s.current=a.current,t(O,r),j?e(a.current):o.current;if(b)return t(O,r),e(a.current)}return u.current||t(O,r),o.current};return k.cancel=function(){u.current&&(h?cancelAnimationFrame(u.current):clearTimeout(u.current)),s.current=0,i.current=a.current=l.current=u.current=null},k.isPending=function(){return!!u.current},k.flush=function(){return u.current?v(Date.now()):o.current},k}),[j,b,r,p,f,h]);return v}},993:function(e,r,t){e.exports={ksearch:"ksearch--MxBUd",content:"content--kFKsG",warning:"warning--bGVcc",loading:"loading--H4wuZ",resultItemCommon:"resultItemCommon--0z6Av",ksearchResultList:"ksearchResultList--Q7L4a",ksearchResultItem:"ksearchResultItem--QtGAa",title:"title--JOiAL",summary:"summary--fQX9+",source:"source--tv0wT",ksearchResultPeople:"ksearchResultPeople--8yezf",photo:"photo--njd4q",detail:"detail--zPJcv",detailItem:"detailItem--GGXVM",name:"name--oRV0f",email:"email--rQdK5",department:"department--ERPCu",kimtalk:"kimtalk--mL0rD",ksearchNotice:"ksearchNotice--sIbyB"}}}]);