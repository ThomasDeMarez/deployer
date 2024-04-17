"use strict";(self.webpackChunkdeployer_docs=self.webpackChunkdeployer_docs||[]).push([[7838],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const i={},a="Known Bugs",l={unversionedId:"KNOWN_BUGS",id:"KNOWN_BUGS",title:"Known Bugs",description:"Ubuntu 14.04, Coreutils 8.21",source:"@site/docs/KNOWN_BUGS.md",sourceDirName:".",slug:"/KNOWN_BUGS",permalink:"/docs/7.x/KNOWN_BUGS",draft:!1,editUrl:"https://github.com/deployphp/deployer/edit/master/docs/KNOWN_BUGS.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Upgrade a major version",permalink:"/docs/7.x/UPGRADE"}},p={},s=[{value:"Ubuntu 14.04, Coreutils 8.21",id:"ubuntu-1404-coreutils-821",level:2},{value:"OpenSSH_7.2p2",id:"openssh_72p2",level:2},{value:"cURL 7.29.0",id:"curl-7290",level:2},{value:"Rsync (3.1.3)",id:"rsync-313",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"known-bugs"},"Known Bugs"),(0,o.kt)("h2",{id:"ubuntu-1404-coreutils-821"},"Ubuntu 14.04, Coreutils 8.21"),(0,o.kt)("p",null,"There are known bugs with relative symlinks ",(0,o.kt)("inlineCode",{parentName:"p"},"ln --relative"),", which may cause the rollback command to fail."),(0,o.kt)("p",null,"Add the following line to your ",(0,o.kt)("em",{parentName:"p"},"deploy.php")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"set('use_relative_symlink', false);\n")),(0,o.kt)("h2",{id:"openssh_72p2"},"OpenSSH_7.2p2"),(0,o.kt)("p",null,"ControlPersist causes stderr to be left open until the master connection times out."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=714526"},"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=714526")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bugzilla.mindrot.org/show_bug.cgi?id=1988"},"https://bugzilla.mindrot.org/show_bug.cgi?id=1988"))),(0,o.kt)("h2",{id:"curl-7290"},"cURL 7.29.0"),(0,o.kt)("p",null,"Certificate verification fails with multiple https urls."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bugzilla.redhat.com/show_bug.cgi?id=1241172"},"https://bugzilla.redhat.com/show_bug.cgi?id=1241172"))),(0,o.kt)("h2",{id:"rsync-313"},"Rsync (3.1.3)"),(0,o.kt)("p",null,"Artifact upload with ",(0,o.kt)("inlineCode",{parentName:"p"},"rsync")," is interrupted after the first chunk of data upload."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The command \"rsync -azP -e 'ssh -A -p *** -o UserKnownHostsFile=/dev/null\n  -o StrictHostKeyChecking=no' 'artifacts/artifact.tar.gz' 'deploy@ssh.XXX.io:/srv/releases/2009076181'\" failed.\n\nExit Code: 255(Unknown error)\n\nOutput:\n================\nsending incremental file list\nartifact.tar.gz\n     32,768   0%    0.00kB/s    0:00:00\n\nError Output:\n================\nclient_loop: send disconnect: Broken pipe\n\nrsync: [sender] write error: Broken pipe (32)\n")),(0,o.kt)("p",null,"In order to resolve (workaround) the issue, you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"--bwlimit=4096")," to the list of options."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"task('artifact:upload', function () {\n    upload(get('artifact_path'), '{{release_path}}', ['options' => ['--bwlimit=4096']]);\n});\n")),(0,o.kt)("p",null,"The issue was also described in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deployphp/action/issues/35"},"Github Action"),"."))}c.isMDXComponent=!0}}]);