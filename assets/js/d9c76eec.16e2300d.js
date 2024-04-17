"use strict";(self.webpackChunkdeployer_docs=self.webpackChunkdeployer_docs||[]).push([[5722],{4137:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),u=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return o.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,v=d["".concat(a,".").concat(m)]||d[m]||c[m]||s;return t?o.createElement(v,i(i({ref:r},l),{},{components:t})):o.createElement(v,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<s;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2578:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var o=t(7462),n=(t(7294),t(4137));const s={},i="Supervisord-monitor Recipe",p={unversionedId:"contrib/supervisord-monitor",id:"contrib/supervisord-monitor",title:"Supervisord-monitor Recipe",description:"Source",source:"@site/docs/contrib/supervisord-monitor.md",sourceDirName:"contrib",slug:"/contrib/supervisord-monitor",permalink:"/docs/7.x/contrib/supervisord-monitor",draft:!1,editUrl:"https://github.com/deployphp/deployer/edit/master/docs/contrib/supervisord-monitor.md",tags:[],version:"current",frontMatter:{},sidebar:"contrib",previous:{title:"Slack Recipe",permalink:"/docs/7.x/contrib/slack"},next:{title:"Telegram Recipe",permalink:"/docs/7.x/contrib/telegram"}},a={},u=[{value:"Description",id:"description",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Task",id:"task",level:3},{value:"Usage",id:"usage",level:3},{value:"Tasks",id:"tasks",level:2},{value:"supervisord-monitor:restart",id:"supervisord-monitorrestart",level:3},{value:"supervisord-monitor:stop",id:"supervisord-monitorstop",level:3},{value:"supervisord-monitor:start",id:"supervisord-monitorstart",level:3}],l={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"supervisord-monitor-recipe"},"Supervisord-monitor Recipe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"require 'contrib/supervisord-monitor.php';\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/tree/master/contrib/supervisord-monitor.php"},"Source")),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This is a recipe that uses the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mlazarov/supervisord-monitor"},"Supervisord server monitoring project"),"."),(0,n.kt)("p",null,"With this recipe the possibility is created to restart a supervisord process through the Supervisor Monitor webtool, by using cURL. This workaround is particular usefull when the deployment user has unsuficient rights to restart a daemon process from the cli."),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set('supervisord', [\n    'uri' => 'https://youruri.xyz/supervisor',\n    'basic_auth_user' => 'username',\n    'basic_auth_password' => 'password',\n    'process_name' => 'process01',\n]);\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set('supervisord_uri', 'https://youruri.xyz/supervisor');\nset('supervisord_basic_auth_user', 'username');\nset('supervisord_basic_auth_password', 'password');\nset('supervisord_process_name', 'process01');\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"supervisord")," \u2013 array with configuration for Supervisord",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uri")," \u2013 URI to the Supervisord monitor page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"basic_auth_user")," \u2013 Basic auth username to access the URI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"basic_auth_password")," \u2013 Basic auth password to access the URI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"process_name")," \u2013 the process name, as visible in the Supervisord monitor page. Multiple processes can be listed here, comma separated")))),(0,n.kt)("h3",{id:"task"},"Task"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"supervisord-monitor:restart")," Restarts given processes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"supervisord-monitor:stop")," Stops given processes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"supervisord-monitor:start")," Starts given processes")),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("p",null,"A complete example with configs, staging and deployment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<?php\n\nnamespace Deployer;\nuse Dotenv\\Dotenv;\n\nrequire 'vendor/autoload.php';\n\nrequire 'supervisord_monitor.php';\n\nProject name\nset('application', 'myproject.com');\n\nProject repository\nset('repository', 'git@github.com:myorg/myproject.com');\n\nset('supervisord', [\n    'uri' => 'https://youruri.xyz/supervisor',\n    'basic_auth_user' => 'username',\n    'basic_auth_password' => 'password',\n    'process_name' => 'process01',\n]);\n\nhost('staging.myproject.com')\n    ->set('branch', 'develop')\n    ->set('labels', ['stage' => 'staging']);\n\nhost('myproject.com')\n    ->set('branch', 'main')\n    ->set('labels', ['stage' => 'production']);\n\nTasks\ntask('build', function () {\n    run('cd {{release_path}} && build');\n});\n\ntask('deploy', [\n    'build',\n    'supervisord',\n]);\n\ntask('supervisord', ['supervisord-monitor:restart'])\n    ->select('stage=production');\n")),(0,n.kt)("h2",{id:"tasks"},"Tasks"),(0,n.kt)("h3",{id:"supervisord-monitorrestart"},"supervisord-monitor:restart"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/contrib/supervisord-monitor.php#L133"},"Source")),(0,n.kt)("h3",{id:"supervisord-monitorstop"},"supervisord-monitor:stop"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/contrib/supervisord-monitor.php#L150"},"Source")),(0,n.kt)("h3",{id:"supervisord-monitorstart"},"supervisord-monitor:start"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/deployphp/deployer/blob/master/contrib/supervisord-monitor.php#L164"},"Source")))}c.isMDXComponent=!0}}]);