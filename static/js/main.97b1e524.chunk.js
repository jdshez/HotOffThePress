(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{40:function(e,c,s){},69:function(e,c,s){"use strict";s.r(c);var t=s(1),i=s(28),a=s.n(i),l=(s(40),s(5)),n=s(0),r=function(e){var c=e.size,s=Object(l.b)(),t=s.loginWithRedirect,i=s.logout,a=s.isAuthenticated;return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsx)("button",{className:"waves-effect waves-light btn".concat(c),onClick:function(){return i()},children:"Log Out"}):Object(n.jsx)("button",{className:"waves-effect waves-light btn".concat(c),onClick:function(){return t()},children:"Log In"})})},j=function(){var e=Object(l.b)(),c=e.user;return e.isAuthenticated&&Object(n.jsxs)("div",{className:"chip",children:[Object(n.jsx)("img",{src:c.picture,alt:c.name}),c.name]})},o=s.p+"static/media/news-comp.473869db.mp4",d=s.p+"static/media/b-1.3558c489.png",b=s.p+"static/media/b-2.59bc979b.png",h=s.p+"static/media/gi-1.9c8232f9.png",m=s.p+"static/media/gi-2.778be045.png",O=s.p+"static/media/stories-matter.5e5ce27c.jpg",x=function(){var e=Object(l.b)(),c=(e.user,e.isAuthenticated);return Object(t.useEffect)((function(){window.scrollTo(0,0)}),[]),!c&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"video-container",children:[Object(n.jsx)("video",{className:"responsive-video",src:o,autoPlay:!0,loop:!0,alt:"newspaper being read"}),Object(n.jsx)("h3",{className:"main-hd",children:"Want to keep informed but don't have the time..."}),Object(n.jsx)("div",{className:"arrow-ctr hide-on-small-only",children:Object(n.jsx)("i",{className:"material-icons",children:"expand_more"})}),Object(n.jsx)("div",{className:"main-btn-ctr hide-on-small-only",children:Object(n.jsx)(r,{size:"-large"})})]}),Object(n.jsx)("div",{className:"small-btn-ctr center-align hide-on-med-and-up",children:Object(n.jsx)(r,{size:""})}),Object(n.jsxs)("div",{className:"section row container",children:[Object(n.jsxs)("div",{className:" valign-wrapper sales-row",children:[Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("i",{className:"icon-ctr large material-icons",children:"access_time"})}),Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("h4",{className:"sales-point",children:"Your time is precious, so we do the research for you"})})]}),Object(n.jsxs)("div",{className:" row valign-wrapper sales-row-rev",children:[Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("h4",{className:"sales-point",children:"We bring you the stories that matter"})}),Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("i",{className:"icon-ctr large material-icons",children:"subject"})})]}),Object(n.jsxs)("div",{className:" row valign-wrapper sales-row",children:[Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("i",{className:"icon-ctr large material-icons",children:"language"})}),Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("h4",{className:"sales-point",children:"Get the latest from across the globe"})})]})]}),Object(n.jsxs)("div",{className:"section banner",children:[Object(n.jsx)("img",{loading:"lazy",className:"responsive-img banner-img",src:O}),Object(n.jsx)("div",{className:"banner-btn-ctr ",children:Object(n.jsx)(r,{size:"-large"})})]}),Object(n.jsxs)("div",{className:"container center staff-main-ctr",children:[Object(n.jsx)("h4",{className:"team-title col s12 ",children:"Meet the Team"}),Object(n.jsxs)("div",{className:"staff-flex",children:[Object(n.jsx)("div",{className:"staff-ctr col s12 m6 l4",children:Object(n.jsxs)("div",{className:"staff-content-ctr",children:[Object(n.jsx)("img",{className:"staff-img",src:d}),Object(n.jsx)("h5",{children:"Jim Smith"}),Object(n.jsx)("p",{children:"Chief & Sports Editor"})]})}),Object(n.jsx)("div",{className:"staff-ctr col s12 m6 l4",children:Object(n.jsxs)("div",{className:"staff-content-ctr",children:[Object(n.jsx)("div",{className:"img-ctr",children:Object(n.jsx)("img",{className:"staff-img",src:m})}),Object(n.jsx)("h5",{children:"Ella Anderson"}),Object(n.jsx)("p",{children:"Tech & Science Editor"})]})}),Object(n.jsx)("div",{className:"staff-ctr col s12 m6 l4",children:Object(n.jsxs)("div",{className:"staff-content-ctr",children:[Object(n.jsx)("img",{className:"staff-img",src:h}),Object(n.jsx)("h5",{children:"Jane Beauford"}),Object(n.jsx)("p",{children:"Politics & Travel Editor"})]})}),Object(n.jsx)("div",{className:"staff-ctr col s12 m6 l4  ",children:Object(n.jsxs)("div",{className:"staff-content-ctr",children:[Object(n.jsx)("img",{className:"staff-img",src:b}),Object(n.jsx)("h5",{children:"Marcelo Salat"}),Object(n.jsx)("p",{children:"Current Affairs & Arts Editor"})]})})]})]})]})},u=s(10),v=Object(t.createContext)(),g=function(e){var c=Object(t.useState)("sport"),s=Object(u.a)(c,2),i=s[0],a=s[1];return Object(n.jsx)(v.Provider,{value:{searchValue:i,changeSearch:function(e){a(e)}},children:e.children})},f=function(){var e=Object(t.useContext)(v).changeSearch,c=Object(t.useState)(""),s=Object(u.a)(c,2),i=s[0],a=s[1];return Object(n.jsx)("div",{className:"section center container row",children:Object(n.jsxs)("form",{className:"search-form col s12 m8 offset-m2 input-field",children:[Object(n.jsx)("input",{className:"search-box col s9",placeholder:"Search for a topic",value:i,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("button",{className:"col s3 search-btn waves-effect waves-light btn",onClick:function(c){c.preventDefault(),console.log(i),e(c.target.value),e(i)},children:Object(n.jsx)("i",{class:"material-icons",children:"search"})})]})})},p=s(29),N=s.n(p),w=s(3),k=function(e){var c=e.blog;return Object(n.jsx)("div",{className:"col s12 news-item-ctr",children:Object(n.jsxs)("div",{className:"card hoverable",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{loading:"lazy",src:c.image})}),Object(n.jsx)("div",{className:"card-content valign-wrapper",children:Object(n.jsx)("p",{className:"",children:c.title})}),Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)(w.b,{className:"blog",to:{pathname:"/fullstory/".concat(c.publishedAt),state:{blog:c}},children:"Read more here..."})})]})})},y=function(){var e,c=Object(t.useContext)(v).searchValue,s="https://gnews.io/api/v4/search?q=".concat(c,"&lang=en&token=6903c39281ce61748f65674fad19538e");console.log(s);var i=Object(t.useState)("null"),a=Object(u.a)(i,2),l=a[0],r=a[1],j=Object(t.useState)(!0),o=Object(u.a)(j,2),d=o[0],b=o[1];return Object(t.useEffect)((function(){N.a.get(s).then((function(e){r(e.data),b(!1)})).catch((function(e){console.log(e.message)}))}),[c]),Object(n.jsxs)("div",{className:"row news-list-ctr",children:[d&&Object(n.jsx)("div",{children:"Loading..."}),Object(n.jsxs)("div",{className:"col l11 offset-l1",children:[" ",null===l||void 0===l||null===(e=l.articles)||void 0===e?void 0:e.map((function(e){return Object(n.jsx)(k,{blog:e},e.url)}))]})]})},C=function(e){return Object(l.b)().isAuthenticated&&Object(n.jsxs)("div",{className:"main container",children:[Object(n.jsx)(f,{}),Object(n.jsx)(y,{})]})},S=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C,{exc:!1}),Object(n.jsx)(x,{})]})},z=s(31),E=s(32),A=s(35),T=s(34),H=s.p+"static/media/earth-globe.f1f2e410.svg",P=s(33),D=s.n(P),L=function(e){Object(A.a)(s,e);var c=Object(T.a)(s);function s(){return Object(z.a)(this,s),c.apply(this,arguments)}return Object(E.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");D.a.Sidenav.init(e)}))}},{key:"render",value:function(){var e=this.props.auth0,c=(e.user,e.isAuthenticated);return Object(n.jsx)("nav",{className:"white nav-wrapper",children:Object(n.jsxs)("div",{className:"",children:[Object(n.jsxs)(w.b,{to:"/",className:"logo",children:[Object(n.jsx)("img",{className:"globe",src:H}),"Hot Off The Press"]}),Object(n.jsx)(w.b,{to:"#","data-target":"mobile-menu",className:"sidenav-trigger right",children:Object(n.jsx)("i",{className:"material-icons burger-menu",children:"menu"})}),Object(n.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(n.jsx)("li",{children:Object(n.jsx)(j,{})}),!c&&Object(n.jsx)("li",{children:Object(n.jsx)(w.b,{to:"/demo",className:"black-text",children:"Demo"})}),Object(n.jsx)("li",{className:"lgin-btn-ctr",children:Object(n.jsx)(r,{size:""})})]}),Object(n.jsxs)("ul",{className:"sidenav",id:"mobile-menu",children:[Object(n.jsx)("li",{children:Object(n.jsx)(w.b,{to:"/",className:"mob-home",children:"HOME"})}),Object(n.jsx)("li",{children:Object(n.jsx)(j,{})}),!c&&Object(n.jsx)("li",{children:Object(n.jsx)(w.b,{to:"/demo",className:"",children:"Demo"})}),Object(n.jsx)("li",{className:"mob-lgin-btn-ctr",children:Object(n.jsx)(r,{size:""})})]})]})})}}]),s}(t.Component),M=(Object(l.c)(L),s(2)),J=s.p+"static/media/facebook.8d51a556.png",q=s.p+"static/media/twitter.67ad063d.png",F=s.p+"static/media/instagram.ac32ec0a.png",R=function(){return Object(n.jsxs)("footer",{class:"page-footer",children:[Object(n.jsxs)("div",{class:"container",children:[Object(n.jsxs)("div",{class:"row valign-wrapper row-1",children:[Object(n.jsxs)("div",{class:"col s12 l6",children:[Object(n.jsx)(w.b,{to:"/",className:"logo",children:Object(n.jsxs)("h5",{children:[Object(n.jsx)("img",{className:"globe",src:H}),"Hot Off The Press"]})}),Object(n.jsx)("p",{class:"",children:"Here at Hot Off the Press we aim to provide our users with the latest news sourced from across the globe. We "})]}),Object(n.jsxs)("div",{class:"col s12 l4 offset-l2",children:[Object(n.jsx)("h5",{class:"social-hd",children:"Social"}),Object(n.jsxs)("ul",{className:"social-icons",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"",href:"#!",children:Object(n.jsx)("img",{src:J})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"",href:"#!",children:Object(n.jsx)("img",{src:q})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"",href:"#!",children:Object(n.jsx)("img",{src:F})})})]})]})]}),Object(n.jsxs)("div",{className:"row valign-wrapper row-2",children:[Object(n.jsx)("div",{className:"col s12 l6 ",children:Object(n.jsx)("a",{class:"store-link",href:"#!",children:Object(n.jsx)("img",{src:"https://adbeus.com/wp-content/uploads/2016/09/ios.png"})})}),Object(n.jsx)("div",{className:"col s12 l4 offset-l2",children:Object(n.jsx)("a",{class:"store-link",href:"#!",children:Object(n.jsx)("img",{src:"https://adbeus.com/wp-content/uploads/2016/09/get-it-on-google-play-vector.png"})})})]})]}),Object(n.jsx)("div",{class:"footer-copyright",children:Object(n.jsx)("div",{class:"container",children:"\xa9 2021 Copyright HOTOFFTHEPRESS"})})]})},W=function(){Object(t.useEffect)((function(){window.scrollTo(0,0)}),[]);var e=Object(M.f)(),c=e.state;return console.log(e.state),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"section",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"main-article col l8 s12",children:[Object(n.jsx)("h4",{children:null===c||void 0===c?void 0:c.blog.title}),Object(n.jsx)("img",{className:"responsive-img z-depth-2",src:null===c||void 0===c?void 0:c.blog.image}),Object(n.jsxs)("article",{className:"z-depth-2",children:[Object(n.jsx)("blockquote",{className:"",children:null===c||void 0===c?void 0:c.blog.description}),Object(n.jsx)("div",{className:"article-text ",children:null===c||void 0===c?void 0:c.blog.content}),Object(n.jsx)("div",{className:"article-link",children:Object(n.jsx)("a",{target:"#",href:null===c||void 0===c?void 0:c.blog.url,children:"Go to full article"})})]})]}),Object(n.jsx)("div",{className:"info-card-ctr col l4 s12",children:Object(n.jsxs)("div",{className:"card-panel",children:[Object(n.jsx)("h5",{children:"Details"}),Object(n.jsx)("div",{class:"divider"}),Object(n.jsxs)("p",{className:"",children:["Published by:  ",Object(n.jsx)("span",{className:"info-card-details",children:null===c||void 0===c?void 0:c.blog.source.name})," @ ",Object(n.jsx)("span",{className:"info-card-details",children:null===c||void 0===c?void 0:c.blog.publishedAt})]}),Object(n.jsxs)("p",{children:["URL:  ",Object(n.jsxs)("a",{className:"info-card-link",target:"#",href:null===c||void 0===c?void 0:c.blog.url,children:[" ","  ".concat(null===c||void 0===c?void 0:c.blog.url)]})]}),Object(n.jsx)("div",{class:"divider"})]})})]})})})},I=function(){return Object(n.jsxs)("div",{className:"main container",children:[Object(n.jsx)(f,{}),Object(n.jsx)(y,{})]})},U=function(){var e=Object(t.useState)(!1),c=Object(u.a)(e,2),s=c[0],i=c[1],a=function(){return i(!1)},o=Object(l.b)().isAuthenticated;return Object(n.jsxs)("div",{className:"header z-depth-2",children:[Object(n.jsxs)("div",{className:"logo-nav",children:[Object(n.jsx)("div",{className:"logo-container",children:Object(n.jsxs)(w.b,{to:"/",className:"logo",children:[Object(n.jsx)("img",{className:"globe",src:H}),"Hot Off The Press"]})}),Object(n.jsxs)("ul",{className:s?"nav-options active":"nav-options",children:[Object(n.jsx)("li",{className:"option",onClick:a,children:Object(n.jsx)(w.b,{to:"/",className:"option-txt",children:"Home"})}),Object(n.jsx)("li",{className:"option",onClick:a,children:o?Object(n.jsx)(j,{}):Object(n.jsx)(w.b,{to:"/demo",className:"option-txt",children:"Demo"})}),Object(n.jsx)("li",{className:"lgin-btn-ctr",children:Object(n.jsx)(r,{size:""})})]})]}),Object(n.jsxs)("ul",{className:"desk-options",children:[Object(n.jsx)("li",{className:"demo-pro-option",children:o?Object(n.jsx)(j,{}):Object(n.jsx)(w.b,{to:"/demo",className:"option-txt",children:"Demo"})}),Object(n.jsx)("li",{className:"lgin-btn-ctr ",onClick:a,children:Object(n.jsx)(r,{size:""})})]}),Object(n.jsx)("div",{className:"mobile-menu",onClick:function(){return i(!s)},children:s?Object(n.jsx)("i",{className:"material-icons menu-icon",children:"close"}):Object(n.jsx)("i",{className:"material-icons menu-icon",children:"menu"})})]})};var B=function(){return Object(l.b)().isLoading?Object(n.jsx)("div",{children:"Loading..."}):Object(n.jsx)(g,{children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)(U,{}),Object(n.jsxs)(M.c,{children:[Object(n.jsx)(M.a,{exact:!0,path:"/",children:Object(n.jsx)(S,{})}),Object(n.jsx)(M.a,{path:"/lp",children:Object(n.jsx)(x,{})}),Object(n.jsx)(M.a,{path:"/demo",children:Object(n.jsx)(I,{})}),Object(n.jsx)(M.a,{path:"/fullstory/:id",children:Object(n.jsx)(W,{})})]}),Object(n.jsx)(R,{})]})})};a.a.render(Object(n.jsx)(l.a,{domain:"dev-4r2tftqa.eu.auth0.com",clientId:"nokJa599frem5NtMhosNApdCz6yME2oU",redirectUri:window.location.origin,children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.97b1e524.chunk.js.map