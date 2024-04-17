"use strict";(self.webpackChunkdeployer_docs=self.webpackChunkdeployer_docs||[]).push([[4309],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(7462),r=(n(7294),n(4137));const a={},i="Inventory",p={unversionedId:"inventory",id:"version-6.x/inventory",title:"Inventory",description:"You can choose any inventory management you want or use one of next examples.",source:"@site/versioned_docs/version-6.x/inventory.md",sourceDirName:".",slug:"/inventory",permalink:"/docs/6.x/inventory",draft:!1,editUrl:"https://github.com/deployphp/deployer/edit/master/versioned_docs/version-6.x/inventory.md",tags:[],version:"6.x",frontMatter:{},sidebar:"version-6.x/docs",previous:{title:"Flow",permalink:"/docs/6.x/flow"},next:{title:"API Reference",permalink:"/docs/6.x/api"}},l={},s=[{value:"One or two hosts",id:"one-or-two-hosts",level:3},{value:"Separate inventory files",id:"separate-inventory-files",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inventory"},"Inventory"),(0,r.kt)("p",null,"You can choose any inventory management you want or use one of next examples."),(0,r.kt)("h3",{id:"one-or-two-hosts"},"One or two hosts"),(0,r.kt)("p",null,"In most scenarios your project will have one or two hosts: one for production and one for staging.\nSo there is no need to separate inventory file, you can write everything in single ",(0,r.kt)("em",{parentName:"p"},"deploy.php")," file."),(0,r.kt)("p",null,"For single host you don't need anything. Deployer will deploy to all defined hosts if no ",(0,r.kt)("em",{parentName:"p"},"stage")," parameter specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"set('deploy_path', '~/project');\n\nhost('project.com');\n")),(0,r.kt)("p",null,"If you have one host for production and another for staging the next example is sufficient."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Right behavior for ",(0,r.kt)("inlineCode",{parentName:"p"},"dep deploy")," command is to ",(0,r.kt)("em",{parentName:"p"},"deploy staging"),", and to deploy prod is ",(0,r.kt)("inlineCode",{parentName:"p"},"dep deploy production"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"set('application', 'project');\nset('deploy_path', '~/{{application}}');\nset('default_stage', 'staging');\n\nhost('project.com')\n    ->stage('production');\n    \nhost('staging.project.com')\n    ->stage('staging');\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Best practice")," is to leave connecting information for hosts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," file.\nThat way you allow different users to connect in different ways.")),(0,r.kt)("h3",{id:"separate-inventory-files"},"Separate inventory files"),(0,r.kt)("p",null,"TODO"))}u.isMDXComponent=!0}}]);