(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{124:function(t,e,a){"use strict";a.r(e);var i=a(13),n=a(4),s=a(29),c=a(30),l=a(32),r=a(31),o=a(0),b=a(127),u=a(11),j=a(21),_=a(49),m=a(134),h=a.n(m),d=a(1),x=function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))).state={email:"",password:""},t.handleChange=function(e){var a=e.target,i=a.name,s=a.value;t.setState(Object(n.a)({},i,s))},t.handleSubmit=function(e){e.preventDefault(),t.props.onLogin(Object(i.a)({},t.state)),t.setState({email:"",password:""})},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state,e=t.email,a=t.password;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b.a,{}),Object(d.jsxs)("div",{className:h.a.container,children:[Object(d.jsx)(_.a,{error:Boolean(this.props.error),message:"You are not registered yet. Go to Register Page"}),Object(d.jsx)("h1",{className:h.a.title,children:"Login page"}),Object(d.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{className:h.a.label,children:["Email",Object(d.jsx)("input",{type:"email",name:"email",value:e,onChange:this.handleChange,className:h.a.input})]}),Object(d.jsxs)("label",{className:h.a.label,children:["Password",Object(d.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange,className:h.a.input})]}),Object(d.jsx)("button",{className:h.a.button,children:"Log in"})]})]})]})}}]),a}(o.Component);e.default=Object(u.b)((function(t){return{error:j.b.getErrorMessage(t)}}),{onLogin:j.a.login})(x)},127:function(t,e,a){"use strict";var i=a(24),n=a(11),s=a(21),c=a(128),l=a.n(c),r=a(129),o=a.n(r),b=a(1),u={onLogout:s.a.logout},j=Object(n.b)((function(t){return{isAuthenticated:s.b.isAuthenticated(t),email:s.b.getUserEmail(t)}}),u)((function(t){var e=t.email,a=(t.isAuthenticated,t.onLogout);return Object(b.jsxs)("div",{className:o.a.container,children:[Object(b.jsxs)("p",{className:o.a.text,children:["You are logged in as ",Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:o.a.span,children:e})]}),Object(b.jsx)("button",{type:"button",onClick:a,className:o.a.btn,children:"Logout"})]})})),_=a(47),m=a(130),h=a.n(m),d=function(){return Object(b.jsxs)("ul",{className:h.a.list,children:[Object(b.jsx)("li",{className:h.a.listItem,children:Object(b.jsx)(i.b,{exact:!0,to:"/register",className:h.a.listLink,activeClassName:h.a.listLinkActive,children:"Register"})}),Object(b.jsx)("li",{className:h.a.listItem,children:Object(b.jsx)(i.b,{exact:!0,to:"/login",className:h.a.listLink,activeClassName:h.a.listLinkActive,children:"Login"})})]})};a(48),e.a=Object(n.b)((function(t){return{isAuthenticated:s.b.isAuthenticated(t),email:s.b.getUserEmail(t)}}))((function(t){var e=t.isAuthenticated,a=t.email;return Object(b.jsxs)("div",{className:l.a.container,children:[Object(b.jsxs)("ul",{className:l.a.list,children:[Object(b.jsx)("li",{className:l.a.listItem,children:Object(b.jsx)(i.b,{exact:!0,to:"/",className:l.a.listLink,activeClassName:l.a.listLinkActive,children:"Home"})}),e&&Object(b.jsx)("li",{className:l.a.listItem,children:Object(b.jsx)(i.b,{exact:!0,to:"/contacts",className:l.a.listLink,activeClassName:l.a.listLinkActive,children:"Contacts"})})]}),e&&!a&&Object(b.jsx)(_.a,{}),e&&a&&Object(b.jsx)(j,{}),!e&&Object(b.jsx)(d,{})]})}))},128:function(t,e,a){t.exports={container:"NavBar_container__23nMn",list:"NavBar_list__26DXo",listItem:"NavBar_listItem__31RH7",listLink:"NavBar_listLink__2QMS7",listLinkActive:"NavBar_listLinkActive__Xy4qC"}},129:function(t,e,a){t.exports={container:"UserMenu_container__3d-0f",text:"UserMenu_text__3F_kn",span:"UserMenu_span__1TfiL",btn:"UserMenu_btn__315y5"}},130:function(t,e,a){t.exports={container:"AuthNav_container__1Esjq",list:"AuthNav_list__3hXP7",listItem:"AuthNav_listItem__3xrrI",listLink:"AuthNav_listLink__1WcNe",listLinkActive:"AuthNav_listLinkActive__3wKgt"}},134:function(t,e,a){t.exports={container:"Loginization_container__3fb48",title:"Loginization_title__YCAj-",form:"Loginization_form__3ciPT",label:"Loginization_label__1_qLE",input:"Loginization_input__MXQCP",button:"Loginization_button__ldtXZ"}}}]);
//# sourceMappingURL=5.08984cef.chunk.js.map