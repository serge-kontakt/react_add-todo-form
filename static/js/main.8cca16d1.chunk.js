(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),s=a(2),c=a(1),o=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),l=a(8),d=a.n(l),u=a(0),m=function(e){var t=e.user;return t?Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name}):null};function j(e){return o.find((function(t){return t.id===e}))||null}var b=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.userId;return Object(u.jsxs)("article",{"data-id":a,className:d()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:i}),Object(u.jsx)(m,{user:j(r)})]})},h=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(b,{todo:e},e.id)}))})},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],p=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(!1),l=Object(s.a)(i,2),d=l[0],m=l[1],j=Object(c.useState)(0),b=Object(s.a)(j,2),p=b[0],f=b[1],x=Object(c.useState)(!1),v=Object(s.a)(x,2),y=v[0],S=v[1],N=Object(c.useState)(O),I=Object(s.a)(N,2),g=I[0],C=I[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),m(!a),S(!p),a&&p&&(C((function(e){return[].concat(Object(r.a)(e),[{id:(t=g,Math.max.apply(Math,Object(r.a)(t.map((function(e){return e.id}))))+1),title:a,completed:!1,userId:p}]);var t})),n(""),f(0),m(!1),S(!1))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{children:["Title:\xa0",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){var t=e.target.value.replace(/[^A-Za-z0-9\u0400-\u04FF\s]/g,"");n(t),m(!1)}})]}),d&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"user-id",children:"User: "}),Object(u.jsxs)("select",{id:"user-id","data-cy":"userSelect",value:p,onChange:function(e){f(+e.target.value),S(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),y&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(h,{todos:g})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8cca16d1.chunk.js.map