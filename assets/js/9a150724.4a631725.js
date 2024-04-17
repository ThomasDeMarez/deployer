"use strict";(self.webpackChunkdeployer_docs=self.webpackChunkdeployer_docs||[]).push([[5401],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,p=e.originalType,i=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),u=s(r),m=l,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||p;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=r.length,o=new Array(p);o[0]=u;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n.mdxType="string"==typeof e?e:l,o[1]=n;for(var s=2;s<p;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>n,toc:()=>s});var a=r(7462),l=(r(7294),r(4137));const p={},o="How to Deploy a Magento Project",n={unversionedId:"recipe/magento",id:"recipe/magento",title:"How to Deploy a Magento Project",description:"Source",source:"@site/docs/recipe/magento.md",sourceDirName:"recipe",slug:"/recipe/magento",permalink:"/docs/7.x/recipe/magento",draft:!1,editUrl:"https://github.com/deployphp/deployer/edit/master/docs/recipe/magento.md",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"Configuration",id:"configuration",level:2},{value:"shared_dirs",id:"shared_dirs",level:3},{value:"shared_files",id:"shared_files",level:3},{value:"writable_dirs",id:"writable_dirs",level:3},{value:"Tasks",id:"tasks",level:2},{value:"deploy:cache:clear",id:"deploycacheclear",level:3},{value:"deploy:clear_version",id:"deployclear_version",level:3},{value:"deploy",id:"deploy",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-deploy-a-magento-project"},"How to Deploy a Magento Project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"require 'recipe/magento.php';\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/tree/master/recipe/magento.php"},"Source")),(0,l.kt)("p",null,"Deployer is a free and open source deployment tool written in PHP.\nIt helps you to deploy your Magento application to a server.\nIt is very easy to use and has a lot of features. "),(0,l.kt)("p",null,"Three main features of Deployer are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Provisioning")," - provision your server for you."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Zero downtime deployment")," - deploy your application without a downtime."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Rollbacks")," - rollback your application to a previous version, if something goes wrong.")),(0,l.kt)("p",null,"Additionally, Deployer has a lot of other features, like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Easy to use")," - Deployer is very easy to use. It has a simple and intuitive syntax."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Fast")," - Deployer is very fast. It uses parallel connections to deploy your application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Secure")," - Deployer uses SSH to connect to your server."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Supports all major PHP frameworks")," - Deployer supports all major PHP frameworks.")),(0,l.kt)("p",null,"You can read more about Deployer in ",(0,l.kt)("a",{parentName:"p",href:"/docs/7.x/getting-started"},"Getting Started"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"#deploy"},"deploy")," task of ",(0,l.kt)("strong",{parentName:"p"},"Magento")," consists of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/common#deployprepare"},"deploy:prepare")," \u2013 Prepares a new release",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/info#deployinfo"},"deploy:info")," \u2013 Displays info about deployment"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/setup#deploysetup"},"deploy:setup")," \u2013 Prepares host for deploy"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/lock#deploylock"},"deploy:lock")," \u2013 Locks deploy"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/release#deployrelease"},"deploy:release")," \u2013 Prepares release"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/update_code#deployupdate_code"},"deploy:update_code")," \u2013 Updates code"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/shared#deployshared"},"deploy:shared")," \u2013 Creates symlinks for shared files and dirs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/writable#deploywritable"},"deploy:writable")," \u2013 Makes writable dirs"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/magento#deploycacheclear"},"deploy:cache:clear")," \u2013 Clears cache"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/common#deploypublish"},"deploy:publish")," \u2013 Publishes the release",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/symlink#deploysymlink"},"deploy:symlink")," \u2013 Creates symlink to release"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/lock#deployunlock"},"deploy:unlock")," \u2013 Unlocks deploy"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/deploy/cleanup#deploycleanup"},"deploy:cleanup")," \u2013 Cleanup old releases"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/common#deploysuccess"},"deploy:success")," \u2013 ")))),(0,l.kt)("p",null,"The magento recipe is based on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/7.x/recipe/common"},"common")," recipe."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"shared_dirs"},"shared_dirs"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/recipe/magento.php#L13"},"Source")),(0,l.kt)("p",null,"Overrides ",(0,l.kt)("a",{parentName:"p",href:"/docs/7.x/recipe/deploy/shared#shared_dirs"},"shared_dirs")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"recipe/deploy/shared.php"),"."),(0,l.kt)("p",null,"Magento shared dirs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Default value"',title:'"Default','value"':!0},"['var', 'media']\n")),(0,l.kt)("h3",{id:"shared_files"},"shared_files"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/recipe/magento.php#L16"},"Source")),(0,l.kt)("p",null,"Overrides ",(0,l.kt)("a",{parentName:"p",href:"/docs/7.x/recipe/deploy/shared#shared_files"},"shared_files")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"recipe/deploy/shared.php"),"."),(0,l.kt)("p",null,"Magento shared files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Default value"',title:'"Default','value"':!0},"['app/etc/local.xml']\n")),(0,l.kt)("h3",{id:"writable_dirs"},"writable_dirs"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/recipe/magento.php#L19"},"Source")),(0,l.kt)("p",null,"Overrides ",(0,l.kt)("a",{parentName:"p",href:"/docs/7.x/recipe/deploy/writable#writable_dirs"},"writable_dirs")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"recipe/deploy/writable.php"),"."),(0,l.kt)("p",null,"Magento writable dirs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Default value"',title:'"Default','value"':!0},"['var', 'media']\n")),(0,l.kt)("h2",{id:"tasks"},"Tasks"),(0,l.kt)("h3",{id:"deploycacheclear"},"deploy:cache:clear"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/recipe/magento.php#L25"},"Source")),(0,l.kt)("p",null,"Clears cache."),(0,l.kt)("p",null,"Clear cache"),(0,l.kt)("h3",{id:"deployclear_version"},"deploy:clear_version"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/recipe/magento.php#L32"},"Source")),(0,l.kt)("p",null,"Remove files that can be used to compromise Magento"),(0,l.kt)("h3",{id:"deploy"},"deploy"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/recipe/magento.php#L46"},"Source")),(0,l.kt)("p",null,"Deploys your project."),(0,l.kt)("p",null,"Main task"),(0,l.kt)("p",null,"This task is group task which contains next tasks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/common#deployprepare"},"deploy:prepare")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/magento#deploycacheclear"},"deploy:cache:clear")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/7.x/recipe/common#deploypublish"},"deploy:publish"))))}d.isMDXComponent=!0}}]);