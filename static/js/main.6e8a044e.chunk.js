(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{297:function(e,a,t){},298:function(e,a,t){},299:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){},311:function(e,a,t){},312:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(43),l=t.n(c),o=t(8),i=t(9),s=t(11),u=t(10),m=t(78),f=t.n(m),p=t(44),v={particles:{number:{value:100},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},E={ABOUT:{value:0,icon:"fa fa-user"},RESUME:{value:1,icon:"fa fa-list-alt"},WORKS:{value:2,icon:"fa fa-paint-brush"},BLOGS:{value:3,icon:"fa fa-comment-dots"},CONTACT:{value:4,icon:"fa fa-at"}},_=(t(297),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"square"},this.props.children)}}]),t}(n.Component)),d=t(81),b=(t(298),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.children.split(" "),a=Object(d.a)(e),t=a[0],n=a.slice(1);return r.a.createElement("div",{className:"title"},r.a.createElement("span",null,t)," "+n.join(" "))}}]),t}(n.Component)),h=(t(299),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement(b,null,"About Me"),r.a.createElement("div",{className:"about__content"},r.a.createElement("div",{className:"about__content__row"},r.a.createElement(_,null,"I am currently a senior student majoring in the faculty of Information of Technology at the University of Science in Ho Chi Minh city. I am seeking a JAVASCRIPT SOFTWARE ENGINEER INTERN/FRESHER position to learn more practical experiences and begin my career in a high- level professional environment."),r.a.createElement(_,null,"okook"))))}}]),t}(n.Component)),O=(t(300),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.menu;return e===E.ABOUT.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"white"}},r.a.createElement("section",{className:"card__content"},r.a.createElement(h,null)))||e===E.RESUME.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"red"}},r.a.createElement("section",{className:"card__content"},"2"))||e===E.WORKS.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"yellow"}},r.a.createElement("section",{className:"card__content"},"3"))||e===E.BLOGS.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"pink"}},r.a.createElement("section",{className:"card__content"},"4"))||e===E.CONTACT.value&&r.a.createElement("section",{className:"card",style:{backgroundColor:"green"}},r.a.createElement("section",{className:"card__content"},"5"))}}]),t}(n.Component)),N=t(80),g=t(79),y=t.n(g),j=(t(301),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).renderMenu=function(a){for(var t=e.props,n=t.activeMenu,c=t.handleOnChangeMenu,l=[],o=function(){var e=Object(N.a)(s[i],2),a=e[0],t=e[1];l.push(r.a.createElement("li",{key:t.value,className:y()("menu__item",{menu__active:n===t.value}),onClick:function(){return c(t.value)}},r.a.createElement("i",{className:t.icon}),r.a.createElement("span",null,a)))},i=0,s=Object.entries(a);i<s.length;i++)o();return l},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"menu"},r.a.createElement("ul",null,this.renderMenu(E,this.props))))}}]),t}(n.Component)),k=(t(302),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"profile"},r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("div",{className:"profile__avatar"}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h4",null,"Nguyen Huu Gia Tri"),r.a.createElement("span",null,"Web developer"),r.a.createElement("div",{className:"profile__info__icon"}))),r.a.createElement("div",{className:"profile__icons"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/o0liebeo0o/"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/NaKfl"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/nguyen-huu-gia-tri-16225a1a1/"},r.a.createElement("i",{className:"fab fa-linkedin"})))),r.a.createElement("section",{className:"profile__buttons"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.topcv.vn/xem-cv/c82e29e2ee2a244bdd06bfea23082e8b"},r.a.createElement("button",{className:"profile__buttons__single profile__buttons__single--before"},r.a.createElement("span",null,"DOWNLOAD CV"),r.a.createElement("i",{className:"fa fa-download"}))),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/nguyen-huu-gia-tri-16225a1a1/"},r.a.createElement("button",{className:"profile__buttons__single"},r.a.createElement("span",null,"CONTACT ME"),r.a.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))))}}]),t}(n.Component)),w=(t(303),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleOnChangeMenu=function(e){n.setState({activeMenu:e})},n.state={activeMenu:E.ABOUT.value},n.pages=Object.values(E).map((function(e){var a=e.value;return function(e){return r.a.createElement(p.animated.div,{className:"app__container__items__cards__single",style:e},r.a.createElement(O,{menu:a}))}})),n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state.activeMenu;return r.a.createElement("section",{className:"app"},r.a.createElement("section",{className:"app__container"},r.a.createElement("div",{className:"app__container__items"},r.a.createElement("div",{className:"app__container__items__menu"},r.a.createElement(j,{activeMenu:a,handleOnChangeMenu:this.handleOnChangeMenu})),r.a.createElement(k,null),r.a.createElement("div",{className:"app__container__items__cards"},r.a.createElement(p.Transition,{native:!0,unique:!0,items:a,config:{duration:300},from:{opacity:0,transform:"translate3d(-50%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}},(function(a){return e.pages[a]}))))),r.a.createElement(f.a,{className:"app__background",params:v}))}}]),t}(n.Component));t(311),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,a,t){e.exports=t(312)}},[[82,1,2]]]);
//# sourceMappingURL=main.6e8a044e.chunk.js.map