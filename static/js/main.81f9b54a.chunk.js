(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(18),o=a.n(n),l=(a(25),a(11)),r=a(20),i=a(8),d=a(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}var j=function(e){var t=e.todo,a=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("div",{className:"form-check",children:Object(d.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"})}),Object(d.jsx)("span",{className:"text-warning",children:"Title: "}),Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("span",{className:"text-warning",children:" Description: "}),Object(d.jsx)("p",{className:"fs-6",children:t.desc}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)},children:"Delete"})]}),Object(d.jsx)("hr",{})]})},m=function(e){return Object(d.jsxs)("div",{className:"container my-3",style:{minHeight:"35vh"},children:[Object(d.jsx)("h3",{className:"text-center my-3",children:"Todos List"}),Object(d.jsx)("hr",{className:"w-25 mx-auto"}),0===e.todo.length?"No Todos to Display":e.todo.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.srno)}))]})},h=function(){return Object(d.jsx)("footer",{className:"bg-dark text-white py-2",children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 ToDos.com"})})},u=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),i=r[0],b=r[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{className:"text-center",children:"Add a ToDo"}),Object(d.jsxs)("form",{className:"text-white my-3",onSubmit:function(t){t.preventDefault(),s&&i?(e.addTodo(s,i),n(""),b("")):alert("Title or Description cannot e blank!")},children:[Object(d.jsxs)("div",{className:"mb-3 w-100",children:[Object(d.jsx)("label",{htmlFor:"exampletodotitle",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title","aria-describedby":"todotitle",value:s,onChange:function(e){n(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mb-3 w-100",children:[Object(d.jsx)("label",{htmlFor:"exampletododescription",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"desc",value:i,onChange:function(e){b(e.target.value)}})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-success w-100 my-3",children:"Add ToDo"})]})]})},x=a.p+"static/media/pic.31cebbdd.png",O=a.p+"static/media/sampleTodo.7ab7bcd2.png",p=function(){var e={width:"18 rem"},t={width:"20vw",margin:"auto"};return Object(d.jsxs)("div",{className:"text-white ",children:[Object(d.jsxs)("div",{className:"card  bg-secondary",style:e,children:[Object(d.jsx)("img",{className:"card-img-top my-3",src:x,style:t,alt:"Card image cap"}),Object(d.jsx)("div",{className:"card-body mx-auto",children:Object(d.jsx)("p",{className:"card-text w-50 mx-auto",children:"This is a Todo App which will help you to sort your daily tasks and make your day smooth. You can add your tasks by writing title and a litle bit description about it. You can also delete your tasks or mark it check when it complete."})})]}),Object(d.jsxs)("div",{className:"card  bg-secondary",style:e,children:[Object(d.jsx)("img",{className:"card-img-top my-3",src:O,style:t,alt:"Card image cap"}),Object(d.jsx)("div",{className:"card-body mx-auto",children:Object(d.jsx)("p",{className:"card-text w-50 mx-auto",children:"This is view of sample todo.You can check and delete it according to your need."})})]})]})},g=(a(32),a(2));var v=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){j(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},a=function(e,t){var a={srno:0===o.length?0:o[o.length-1].srno+1,title:e,desc:t};j([].concat(Object(r.a)(o),[a]))},s=Object(c.useState)(e),n=Object(l.a)(s,2),o=n[0],j=n[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"ToDo List"}),Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{addTodo:a}),Object(d.jsx)(m,{todo:o,onDelete:t})]})}}),Object(d.jsx)(g.a,{exact:!0,path:"/about",children:Object(d.jsx)(p,{})})]}),Object(d.jsx)(h,{})]})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.81f9b54a.chunk.js.map