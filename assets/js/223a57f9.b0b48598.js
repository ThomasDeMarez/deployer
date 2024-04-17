"use strict";(self.webpackChunkdeployer_docs=self.webpackChunkdeployer_docs||[]).push([[6449],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,f=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const a={},i="Bugsnag Recipe",p={unversionedId:"contrib/bugsnag",id:"contrib/bugsnag",title:"Bugsnag Recipe",description:"Source",source:"@site/docs/contrib/bugsnag.md",sourceDirName:"contrib",slug:"/contrib/bugsnag",permalink:"/docs/7.x/contrib/bugsnag",draft:!1,editUrl:"https://github.com/deployphp/deployer/edit/master/docs/contrib/bugsnag.md",tags:[],version:"current",frontMatter:{},sidebar:"contrib",previous:{title:"All Contrib Recipes",permalink:"/docs/7.x/contrib/"},next:{title:"Cachetool Recipe",permalink:"/docs/7.x/contrib/cachetool"}},l={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Tasks",id:"tasks",level:2},{value:"bugsnag:notify",id:"bugsnagnotify",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bugsnag-recipe"},"Bugsnag Recipe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"require 'contrib/bugsnag.php';\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/tree/master/contrib/bugsnag.php"},"Source")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"bugsnag_api_key")," \u2013 the API Key associated with the project. Informs Bugsnag which project has been deployed. This is the only required field."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"bugsnag_provider")," \u2013 the name of your source control provider. Required when repository is supplied and only for on-premise services."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"bugsnag_app_version")," \u2013 the app version of the code you are currently deploying. Only set this if you tag your releases with semantic version numbers and deploy infrequently. (Optional.)")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Since you should only notify Bugsnag of a successful deployment, the ",(0,o.kt)("inlineCode",{parentName:"p"},"bugsnag:notify")," task should be executed right at the end."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"after('deploy', 'bugsnag:notify');\n")),(0,o.kt)("h2",{id:"tasks"},"Tasks"),(0,o.kt)("h3",{id:"bugsnagnotify"},"bugsnag:notify"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/contrib/bugsnag.php#L23"},"Source")),(0,o.kt)("p",null,"Notifies Bugsnag of deployment."))}c.isMDXComponent=!0}}]);