"use strict";(self.webpackChunkdeployer_docs=self.webpackChunkdeployer_docs||[]).push([[3167],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(y,l(l({ref:t},u),{},{components:n})):o.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(7462),a=(n(7294),n(4137));const r={},l="CLI Usage",i={unversionedId:"cli",id:"version-6.x/cli",title:"CLI Usage",description:"After installation of Deployer you will have the ability to run the dep command from your terminal.",source:"@site/versioned_docs/version-6.x/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/6.x/cli",draft:!1,editUrl:"https://github.com/deployphp/deployer/edit/master/versioned_docs/version-6.x/cli.md",tags:[],version:"6.x",frontMatter:{},sidebar:"version-6.x/docs",previous:{title:"API Reference",permalink:"/docs/6.x/api"},next:{title:"Deploy and Git",permalink:"/docs/6.x/advanced/deploy-and-git"}},p={},s=[{value:"Overriding configuration options",id:"overriding-configuration-options",level:3},{value:"Running arbitrary commands",id:"running-arbitrary-commands",level:3},{value:"Getting help",id:"getting-help",level:3},{value:"Autocomplete",id:"autocomplete",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli-usage"},"CLI Usage"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.x/installation"},"installation")," of Deployer you will have the ability to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"dep")," command from your terminal."),(0,a.kt)("p",null,"To get list of all available tasks run the ",(0,a.kt)("inlineCode",{parentName:"p"},"dep")," command. You can run it from any subdirectories of you project;\nDeployer will automatically find project root dir. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Deployer\n\nUsage:\n  command [options] [arguments]\n\nOptions:\n  -h, --help            Display this help message\n  -q, --quiet           Do not output any message\n  -V, --version         Display this application version\n      --ansi            Force ANSI output\n      --no-ansi         Disable ANSI output\n  -n, --no-interaction  Do not ask any interactive question\n  -f, --file[=FILE]     Specify Deployer file\n  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug\n\nAvailable commands:\n  help         Displays help for a command\n  init         Initialize deployer system in your project\n  list         Lists commands\n  run          Run any arbitrary command on hosts\n  self-update  Updates deployer.phar to the latest version\n  ssh          Connect to host through ssh\n")),(0,a.kt)("p",null,"The best way to configure your ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.php")," is to automatically deploy to staging on this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dep deploy\n")),(0,a.kt)("p",null,"This is so somebody can't accidentally deploy to production (for production deployment, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dep deploy production")," command explicitly lists the required production stage)."),(0,a.kt)("p",null,"You need info about available options and usage use the ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dep help deploy\nUsage:\n  deploy [options] [--] [<stage>]\n\nArguments:\n  stage                      Stage or hostname\n\nOptions:\n  -p, --parallel             Run tasks in parallel\n  -l, --limit=LIMIT          How many host to run in parallel?\n      --no-hooks             Run task without after/before hooks\n      --log=LOG              Log to file\n      --roles=ROLES          Roles to deploy\n      --hosts=HOSTS          Host to deploy, comma separated, supports ranges [:]\n  -o, --option=OPTION        Sets configuration option (multiple values allowed)\n  -h, --help                 Display this help message\n  -q, --quiet                Do not output any message\n  -V, --version              Display this application version\n      --ansi                 Force ANSI output\n      --no-ansi              Disable ANSI output\n  -n, --no-interaction       Do not ask any interactive question\n  -f, --file[=FILE]          Specify Deployer file\n      --tag[=TAG]            Tag to deploy\n      --revision[=REVISION]  Revision to deploy\n      --branch[=BRANCH]      Branch to deploy\n  -v|vv|vvv, --verbose       Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug\n \nHelp:\n  Deploy your project\n")),(0,a.kt)("h3",{id:"overriding-configuration-options"},"Overriding configuration options"),(0,a.kt)("p",null,"For example, if your ",(0,a.kt)("em",{parentName:"p"},"deploy.php")," file contains this configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"set('ssh_multiplexing', false);\n")),(0,a.kt)("p",null,"And you want to enable ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Multiplexing"},"ssh multiplexing")," without modifying the file, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"-o")," option to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dep")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dep deploy -o ssh_multiplexing=true\n")),(0,a.kt)("p",null,"To override multiple config options, you can pass multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"-o")," args:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dep deploy -o ssh_multiplexing=true -o branch=master\n")),(0,a.kt)("h3",{id:"running-arbitrary-commands"},"Running arbitrary commands"),(0,a.kt)("p",null,"Deployer comes with a command to run any valid command on you server without modifying ",(0,a.kt)("em",{parentName:"p"},"deploy.php")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dep run 'ls -la'\n")),(0,a.kt)("p",null,"To specify the hosts this command has the corresponding options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  --stage=STAGE    Stage to deploy\n  --roles=ROLES    Roles to deploy\n  --hosts=HOSTS    Host to deploy, comma separated, supports ranges [:]\n")),(0,a.kt)("h3",{id:"getting-help"},"Getting help"),(0,a.kt)("p",null,"You can get more info about any commands by using the help command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dep help [command]\n")),(0,a.kt)("h3",{id:"autocomplete"},"Autocomplete"),(0,a.kt)("p",null,"Deployer comes with an autocomplete script for bash/zsh/fish, so you don't need to remember all the tasks and options.\nTo install it run following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dep autocomplete\n")),(0,a.kt)("p",null,"And follow instructions."))}c.isMDXComponent=!0}}]);