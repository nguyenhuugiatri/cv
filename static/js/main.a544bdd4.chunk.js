(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{297:function(e,a,t){},298:function(e,a,t){},299:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},310:function(e,a,t){},311:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=t(43),c=t.n(l),o=t(10),i=t(11),s=t(13),u=t(12),m=t(78),_=t.n(m),E=t(44),p={particles:{number:{value:100},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},f={ABOUT:{value:0,icon:"fa fa-user"},RESUME:{value:1,icon:"fa fa-list-alt"},WORKS:{value:2,icon:"fa fa-paint-brush"},BLOGS:{value:3,icon:"fa fa-comment-dots"},CONTACT:{value:4,icon:"fa fa-at"}},v=t(81),d=(t(297),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.children.split(" "),a=Object(v.a)(e),t=a[0],n=a.slice(1);return r.a.createElement("div",{className:"title"},n.length>0&&r.a.createElement("div",null,r.a.createElement("span",null,t)," "+n.join(" "))||r.a.createElement("div",null,r.a.createElement("span",null,t[0]),t.slice(1)))}}]),t}(n.Component)),b=(t(298),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement(d,null,"About Me"),r.a.createElement("div",{className:"about__content"},r.a.createElement("div",{className:"about__content__row"},r.a.createElement("div",{className:"about__content__row__col"},"I am currently a senior student majoring in the faculty of Information of Technology at the University of Science HCM. I am seeking a WEB DEVELOPER INTERN/FRESHER position to learn more practical experiences and begin my career in a high-level professional environment."),r.a.createElement("div",{className:"about__content__row__col about__content__row__info"},r.a.createElement("div",null,r.a.createElement("strong",null,"DOB . . . . ."),r.a.createElement("span",null,"12/06/1999")),r.a.createElement("div",null,r.a.createElement("strong",null,"Gender . . . . ."),r.a.createElement("span",null,"Male")),r.a.createElement("div",null,r.a.createElement("strong",null,"Phone . . . . ."),r.a.createElement("span",null,"0931467534")),r.a.createElement("div",null,r.a.createElement("strong",null,"Address . . . . ."),r.a.createElement("span",null,"District 8, HCM"))))),r.a.createElement(d,null,"Education"),r.a.createElement("div",{className:"about__content"},r.a.createElement("div",{className:"about__content__row"},r.a.createElement("div",{className:"about__content__row__col about__content__row__university"},r.a.createElement("div",{className:"about__content__row__university__name"},r.a.createElement("span",null,"University of Science HCM"))),r.a.createElement("div",{className:"about__content__row__col about__content__row__info"},r.a.createElement("div",null,r.a.createElement("strong",null,"Major . . . . ."),r.a.createElement("span",null,"Software Engineering")),r.a.createElement("div",null,r.a.createElement("strong",null,"GPA . . . . ."),r.a.createElement("span",null,"8.4/10 (Now)"))))))}}]),t}(n.Component)),h=(t(299),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.menu;return e===f.ABOUT.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"white"}},r.a.createElement("section",{className:"card__content"},r.a.createElement(b,null)))||e===f.RESUME.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"red"}},r.a.createElement("section",{className:"card__content"},"2"))||e===f.WORKS.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"yellow"}},r.a.createElement("section",{className:"card__content"},"3"))||e===f.BLOGS.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"pink"}},r.a.createElement("section",{className:"card__content"},"4"))||e===f.CONTACT.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"green"}},r.a.createElement("section",{className:"card__content"},"5"))}}]),t}(n.Component)),g=t(80),N=t(79),O=t.n(N),w=(t(300),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).renderMenu=function(a){for(var t=e.props,n=t.activeMenu,l=t.handleOnChangeMenu,c=[],o=function(){var e=Object(g.a)(s[i],2),a=e[0],t=e[1];c.push(r.a.createElement("li",{key:t.value,className:O()("menu__item",{menu__active:n===t.value}),onClick:function(){return l(t.value)}},r.a.createElement("i",{className:t.icon}),r.a.createElement("span",null,a)))},i=0,s=Object.entries(a);i<s.length;i++)o();return c},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"menu"},r.a.createElement("ul",null,this.renderMenu(f,this.props))))}}]),t}(n.Component)),y=(t(301),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"profile"},r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("div",{className:"profile__avatar"}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h4",null,"Nguyen Huu Gia Tri"),r.a.createElement("span",null,"Web developer"))),r.a.createElement("div",{className:"profile__icons"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/o0liebeo0o/"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/NaKfl"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/nguyen-huu-gia-tri-16225a1a1/"},r.a.createElement("i",{className:"fab fa-linkedin"})))),r.a.createElement("section",{className:"profile__buttons"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.topcv.vn/xem-cv/c82e29e2ee2a244bdd06bfea23082e8b"},r.a.createElement("button",{className:"profile__buttons__single profile__buttons__single--before"},r.a.createElement("span",null,"DOWNLOAD CV"),r.a.createElement("i",{className:"fa fa-download"}))),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/nguyen-huu-gia-tri-16225a1a1/"},r.a.createElement("button",{className:"profile__buttons__single"},r.a.createElement("span",null,"CONTACT ME"),r.a.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))))}}]),t}(n.Component)),j=(t(302),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleOnChangeMenu=function(e){n.setState({activeMenu:e})},n.state={activeMenu:f.ABOUT.value},n.pages=Object.values(f).map((function(e){var a=e.value;return function(e){return r.a.createElement(E.animated.div,{className:"app__container__items__cards__single",style:e},r.a.createElement(h,{menu:a}))}})),n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state.activeMenu;return r.a.createElement("section",{className:"app"},r.a.createElement("section",{className:"app__container"},r.a.createElement("div",{className:"app__container__items"},r.a.createElement("div",{className:"app__container__items__menu"},r.a.createElement(w,{activeMenu:a,handleOnChangeMenu:this.handleOnChangeMenu})),r.a.createElement("div",{className:"app__container__items__profile"},r.a.createElement(y,null)),r.a.createElement("div",{className:"app__container__items__cards"},r.a.createElement(E.Transition,{native:!0,unique:!0,items:a,config:{duration:300},from:{opacity:0,transform:"translate3d(-50%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}},(function(a){return e.pages[a]}))))),r.a.createElement(_.a,{className:"app__background",params:p}))}}]),t}(n.Component));t(310),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,a,t){e.exports=t(311)}},[[82,1,2]]]);
//# sourceMappingURL=main.a544bdd4.chunk.js.map