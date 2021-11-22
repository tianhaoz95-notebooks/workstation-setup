"use strict";(self.webpackChunkworkstation_setup=self.webpackChunkworkstation_setup||[]).push([[696],{4213:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={sidebar_position:6},u="Linux Workstation Setup",p={unversionedId:"linux-workstation-setup",id:"linux-workstation-setup",isDocsHomePage:!1,title:"Linux Workstation Setup",description:"Mount network drive",source:"@site/docs/linux-workstation-setup.md",sourceDirName:".",slug:"/linux-workstation-setup",permalink:"/workstation-setup/docs/linux-workstation-setup",editUrl:"https://github.com/tianhaoz95-notebooks/workstation-setup/edit/main/docs/linux-workstation-setup.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pi Setup",permalink:"/workstation-setup/docs/pi-setup"}},d=[{value:"Mount network drive",id:"mount-network-drive",children:[],level:2}],l={toc:d};function k(t){var e=t.components,n=(0,o.Z)(t,r);return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linux-workstation-setup"},"Linux Workstation Setup"),(0,a.kt)("h2",{id:"mount-network-drive"},"Mount network drive"),(0,a.kt)("p",null,"Add the following to ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/fstab"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"//192.168.0.[xxx]/[drive_name] /path/to/mounting/point cifs username=[usr],password=[pwd]  0  0\n")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Don't forget to replace:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[xxx]"),": with the IP address of the NAS server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[drive_name]"),": with the shared drive ID"),(0,a.kt)("li",{parentName:"ul"},"Path of the local mounting point"),(0,a.kt)("li",{parentName:"ul"},"Username and password if applicable")))),(0,a.kt)("p",null,"After adding the line, run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo mount -a")," will tell if there is any error."))}k.isMDXComponent=!0}}]);