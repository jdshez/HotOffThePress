(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{35:function(e,c,s){},64:function(e,c,s){"use strict";s.r(c);var t=s(1),i=s(28),a=s.n(i),l=(s(35),s(4)),n=s(0),r=function(e){var c=e.size,s=Object(l.b)(),t=s.loginWithRedirect,i=s.logout,a=s.isAuthenticated;return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsx)("button",{className:"waves-effect waves-light btn".concat(c),onClick:function(){return i()},children:"Log Out"}):Object(n.jsx)("button",{className:"waves-effect waves-light btn".concat(c),onClick:function(){return t()},children:"Log In"})})},j=s.p+"static/media/news-comp.473869db.mp4",o=s.p+"static/media/b-1.3558c489.png",d=s.p+"static/media/b-2.59bc979b.png",b=s.p+"static/media/gi-1.9c8232f9.png",h=s.p+"static/media/gi-2.778be045.png",m=s.p+"static/media/stories-matter.5e5ce27c.jpg",O=function(){var e=Object(l.b)(),c=(e.user,e.isAuthenticated);return Object(t.useEffect)((function(){window.scrollTo(0,0)}),[]),!c&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"video-container",children:[Object(n.jsx)("video",{className:"responsive-video",src:j,autoPlay:!0,loop:!0,alt:"newspaper being read"}),Object(n.jsx)("h3",{className:"main-hd",children:"Want to keep informed but don't have the time..."}),Object(n.jsx)("div",{className:"arrow-ctr hide-on-small-only",children:Object(n.jsx)("i",{className:"material-icons",children:"expand_more"})}),Object(n.jsx)("div",{className:"main-btn-ctr hide-on-small-only",children:Object(n.jsx)(r,{size:"-large"})})]}),Object(n.jsx)("div",{className:"small-btn-ctr center-align hide-on-med-and-up",children:Object(n.jsx)(r,{size:""})}),Object(n.jsxs)("div",{className:"section row container",children:[Object(n.jsxs)("div",{className:" valign-wrapper sales-row",children:[Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("i",{className:"icon-ctr large material-icons",children:"access_time"})}),Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("h4",{className:"sales-point",children:"Your time is precious, so we do the research for you"})})]}),Object(n.jsxs)("div",{className:" row valign-wrapper sales-row-rev",children:[Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("h4",{className:"sales-point",children:"We bring you the stories that matter"})}),Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("i",{className:"icon-ctr large material-icons",children:"subject"})})]}),Object(n.jsxs)("div",{className:" row valign-wrapper sales-row",children:[Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("i",{className:"icon-ctr large material-icons",children:"language"})}),Object(n.jsx)("div",{className:"col s12 m6 center-align",children:Object(n.jsx)("h4",{className:"sales-point",children:"Get the latest news from across the globe"})})]})]}),Object(n.jsxs)("div",{className:"section banner",children:[Object(n.jsx)("img",{loading:"lazy",className:"responsive-img banner-img",src:m}),Object(n.jsx)("div",{className:"banner-btn-ctr ",children:Object(n.jsx)(r,{size:"-large"})})]}),Object(n.jsxs)("div",{className:"container center staff-main-ctr",children:[Object(n.jsx)("h4",{className:"team-title col s12 ",children:"Meet the Team"}),Object(n.jsxs)("div",{className:"staff-flex",children:[Object(n.jsx)("div",{className:"staff-ctr col s12 m6 l4",children:Object(n.jsxs)("div",{className:"staff-content-ctr",children:[Object(n.jsx)("img",{className:"staff-img",src:o}),Object(n.jsx)("h5",{children:"Jim Smith"}),Object(n.jsx)("p",{children:"Chief & Sports Editor"})]})}),Object(n.jsx)("div",{className:"staff-ctr col s12 m6 l4",children:Object(n.jsxs)("div",{className:"staff-content-ctr",children:[Object(n.jsx)("div",{className:"img-ctr",children:Object(n.jsx)("img",{className:"staff-img",src:h})}),Object(n.jsx)("h5",{children:"Ella Anderson"}),Object(n.jsx)("p",{children:"Tech & Science Editor"})]})}),Object(n.jsx)("div",{className:"staff-ctr col s12 m6 l4",children:Object(n.jsxs)("div",{className:"staff-content-ctr",children:[Object(n.jsx)("img",{className:"staff-img",src:b}),Object(n.jsx)("h5",{children:"Jane Beauford"}),Object(n.jsx)("p",{children:"Politics & Travel Editor"})]})}),Object(n.jsx)("div",{className:"staff-ctr col s12 m6 l4  ",children:Object(n.jsxs)("div",{className:"staff-content-ctr",children:[Object(n.jsx)("img",{className:"staff-img",src:d}),Object(n.jsx)("h5",{children:"Marcelo Salat"}),Object(n.jsx)("p",{children:"Current Affairs & Arts Editor"})]})})]})]})]})},x=s(10),f=Object(t.createContext)(),v=function(e){var c=Object(t.useState)("world"),s=Object(x.a)(c,2),i=s[0],a=s[1];return Object(n.jsx)(f.Provider,{value:{searchValue:i,changeSearch:function(e){a(e)}},children:e.children})},u=function(){var e=Object(t.useContext)(f).changeSearch,c=Object(t.useState)(""),s=Object(x.a)(c,2),i=s[0],a=s[1];return Object(n.jsx)("div",{className:"section center container row",children:Object(n.jsxs)("form",{className:"search-form col s12 m8 offset-m2 input-field",children:[Object(n.jsx)("input",{className:"search-box col s9",placeholder:"Search for a topic",value:i,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("button",{className:"col s3 search-btn waves-effect waves-light btn",onClick:function(c){c.preventDefault(),console.log(i),e(c.target.value),e(i)},children:Object(n.jsx)("i",{class:"material-icons",children:"search"})})]})})},g=s(29),p=s.n(g),N=s(6),w=function(e){var c=e.blog;return Object(n.jsx)("div",{className:"col s12 news-item-ctr",children:Object(n.jsxs)("div",{className:"card hoverable",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{loading:"lazy",src:c.image})}),Object(n.jsx)("div",{className:"card-content valign-wrapper",children:Object(n.jsx)("p",{className:"",children:c.title})}),Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)(N.b,{className:"blog",to:{pathname:"/HotOffThePress/fullstory/".concat(c.publishedAt),state:{blog:c}},children:"Read more here..."})})]})})},k=function(){var e,c,s=Object(t.useContext)(f).searchValue,i="https://gnews.io/api/v4/search?q=".concat(s,"&lang=en&token=6903c39281ce61748f65674fad19538e");console.log(i);var a=Object(t.useState)("null"),l=Object(x.a)(a,2),r=l[0],j=l[1],o=Object(t.useState)(!0),d=Object(x.a)(o,2),b=d[0],h=d[1];return Object(t.useEffect)((function(){p.a.get(i).then((function(e){j(e.data),h(!1)})).catch((function(e){console.log(e.message)}))}),[s]),Object(n.jsx)("div",{className:"row news-list-ctr",children:b?Object(n.jsx)("div",{children:"Loading..."}):Object(n.jsxs)("div",{className:"col l11 offset-l1",children:[" ",(null===r||void 0===r||null===(e=r.articles)||void 0===e?void 0:e.length)?null===r||void 0===r||null===(c=r.articles)||void 0===c?void 0:c.map((function(e){return Object(n.jsx)(w,{blog:e},e.url)})):Object(n.jsx)("div",{children:"No results, please try again"})]})})},T=function(){return Object(l.b)().isAuthenticated&&Object(n.jsxs)("div",{className:"main container",children:[Object(n.jsx)(u,{}),Object(n.jsx)(k,{})]})},P=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(T,{exc:!1}),Object(n.jsx)(O,{})]})},H=s(2),y=s.p+"static/media/earth-globe.f1f2e410.svg",S=s.p+"static/media/facebook.8d51a556.png",C=s.p+"static/media/twitter.67ad063d.png",z=s.p+"static/media/instagram.ac32ec0a.png",E=function(){return Object(n.jsxs)("footer",{class:"page-footer",children:[Object(n.jsxs)("div",{class:"container",children:[Object(n.jsxs)("div",{class:"row valign-wrapper row-1",children:[Object(n.jsxs)("div",{class:"col s12 l6",children:[Object(n.jsx)(N.b,{to:"/HotOffThePress/",className:"logo",children:Object(n.jsxs)("h5",{children:[Object(n.jsx)("img",{className:"globe",src:y}),"Hot Off The Press"]})}),Object(n.jsx)("p",{class:"",children:"Here at Hot Off the Press we aim to provide our users with the latest news from around the globe."})]}),Object(n.jsxs)("div",{class:"col s12 l4 offset-l2",children:[Object(n.jsx)("h5",{class:"social-hd",children:"Social"}),Object(n.jsxs)("ul",{className:"social-icons",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"",href:"#!",children:Object(n.jsx)("img",{src:S})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"",href:"#!",children:Object(n.jsx)("img",{src:C})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{class:"",href:"#!",children:Object(n.jsx)("img",{src:z})})})]})]})]}),Object(n.jsxs)("div",{className:"row valign-wrapper row-2",children:[Object(n.jsx)("div",{className:"col s12 l6 ",children:Object(n.jsx)("a",{class:"store-link",href:"#!",children:Object(n.jsx)("img",{src:"https://adbeus.com/wp-content/uploads/2016/09/ios.png"})})}),Object(n.jsx)("div",{className:"col s12 l4 offset-l2",children:Object(n.jsx)("a",{class:"store-link",href:"#!",children:Object(n.jsx)("img",{src:"https://adbeus.com/wp-content/uploads/2016/09/get-it-on-google-play-vector.png"})})})]})]}),Object(n.jsx)("div",{class:"footer-copyright",children:Object(n.jsx)("div",{class:"container",children:"\xa9 2021 HOTOFFTHEPRESS"})})]})},A=function(){Object(t.useEffect)((function(){window.scrollTo(0,0)}),[]);var e=Object(H.f)(),c=e.state;return console.log(e.state),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"section",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"main-article col l8 s12",children:[Object(n.jsx)("h4",{children:null===c||void 0===c?void 0:c.blog.title}),Object(n.jsx)("img",{className:"responsive-img z-depth-2",src:null===c||void 0===c?void 0:c.blog.image}),Object(n.jsxs)("article",{className:"z-depth-2",children:[Object(n.jsx)("blockquote",{className:"",children:null===c||void 0===c?void 0:c.blog.description}),Object(n.jsx)("div",{className:"article-text ",children:null===c||void 0===c?void 0:c.blog.content}),Object(n.jsx)("div",{className:"article-link",children:Object(n.jsx)("a",{target:"#",href:null===c||void 0===c?void 0:c.blog.url,children:"Go to full article"})})]})]}),Object(n.jsx)("div",{className:"info-card-ctr col l4 s12",children:Object(n.jsxs)("div",{className:"card-panel",children:[Object(n.jsx)("h5",{children:"Details"}),Object(n.jsx)("div",{class:"divider"}),Object(n.jsxs)("p",{className:"",children:["Published by:  ",Object(n.jsx)("span",{className:"info-card-details",children:null===c||void 0===c?void 0:c.blog.source.name})," @ ",Object(n.jsx)("span",{className:"info-card-details",children:null===c||void 0===c?void 0:c.blog.publishedAt})]}),Object(n.jsxs)("p",{children:["URL:  ",Object(n.jsxs)("a",{className:"info-card-link",target:"#",href:null===c||void 0===c?void 0:c.blog.url,children:[" ","  ".concat(null===c||void 0===c?void 0:c.blog.url)]})]}),Object(n.jsx)("div",{class:"divider"})]})})]})})})},L=function(){return Object(n.jsxs)("div",{className:"main container",children:[Object(n.jsx)(u,{}),Object(n.jsx)(k,{})]})},J=function(){var e=Object(l.b)(),c=e.user;return e.isAuthenticated&&Object(n.jsxs)("div",{className:"chip",children:[Object(n.jsx)("img",{src:c.picture,alt:c.name}),c.name]})},D=function(){var e=Object(t.useState)(!1),c=Object(x.a)(e,2),s=c[0],i=c[1],a=function(){return i(!1)},j=Object(l.b)().isAuthenticated;return Object(n.jsxs)("div",{className:"header z-depth-2",children:[Object(n.jsxs)("div",{className:"logo-nav",children:[Object(n.jsx)("div",{className:"logo-container",children:Object(n.jsxs)(N.b,{to:"/HotOffThePress/",className:"logo",children:[Object(n.jsx)("img",{className:"globe",src:y}),"Hot Off The Press"]})}),Object(n.jsxs)("ul",{className:s?"nav-options active":"nav-options",children:[Object(n.jsx)("li",{className:"option",onClick:a,children:Object(n.jsx)(N.b,{to:"/HotOffThePress/",className:"option-txt",children:"Home"})}),Object(n.jsx)("li",{className:"option",onClick:a,children:j?Object(n.jsx)(J,{}):Object(n.jsx)(N.b,{to:"/HotOffThePress/demo",className:"option-txt",children:"Demo"})}),Object(n.jsx)("li",{className:"lgin-btn-ctr",children:Object(n.jsx)(r,{size:""})})]})]}),Object(n.jsxs)("ul",{className:"desk-options",children:[Object(n.jsx)("li",{className:"demo-pro-option",children:j?Object(n.jsx)(J,{}):Object(n.jsx)(N.b,{to:"/HotOffThePress/demo",className:"option-txt",children:"Demo"})}),Object(n.jsx)("li",{className:"lgin-btn-ctr ",onClick:a,children:Object(n.jsx)(r,{size:""})})]}),Object(n.jsx)("div",{className:"mobile-menu",onClick:function(){return i(!s)},children:s?Object(n.jsx)("i",{className:"material-icons menu-icon",children:"close"}):Object(n.jsx)("i",{className:"material-icons menu-icon",children:"menu"})})]})};var F=function(){return Object(l.b)().isLoading?Object(n.jsx)("div",{children:"Loading..."}):Object(n.jsx)(v,{children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)(D,{}),Object(n.jsxs)(H.c,{children:[Object(n.jsx)(H.a,{exact:!0,path:"/HotOffThePress/",children:Object(n.jsx)(P,{})}),Object(n.jsx)(H.a,{path:"/HotOffThePress/demo",children:Object(n.jsx)(L,{})}),Object(n.jsx)(H.a,{path:"/HotOffThePress/fullstory/:id",children:Object(n.jsx)(A,{})})]}),Object(n.jsx)(E,{})]})})};a.a.render(Object(n.jsx)(l.a,{domain:"dev-4r2tftqa.eu.auth0.com",clientId:"nokJa599frem5NtMhosNApdCz6yME2oU",redirectUri:window.location.origin,children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.814bd959.chunk.js.map