(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{83:function(e,s,t){"use strict";t.d(s,"a",(function(){return g}));var a=t(2),n=t(23),i=t(24),c=t(26),r=t(25),o=t(5),u=t(0),l=t.n(u),j=t(19),d=t(1),m=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){Object(c.a)(u,s);var t=Object(r.a)(u);function u(){return Object(n.a)(this,u),t.apply(this,arguments)}return Object(i.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(a.a)({},this.props)):Object(d.jsx)(o.a,{to:"/login"})}}]),u}(l.a.Component);return Object(j.b)(m)(s)}},88:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__AaO_r",dialogItems:"Dialogs_dialogItems__2Xysb",messagesItems:"Dialogs_messagesItems__221j5",messages:"Dialogs_messages__1kHzU",sendText:"Dialogs_sendText__3CrHq"}},89:function(e,s,t){},90:function(e,s,t){e.exports={dialogItem:"Dialog_dialogItem__5SEh0"}},99:function(e,s,t){"use strict";t.r(s);t(0);var a=t(46),n=t(2),i=t(88),c=t.n(i),r=t(89),o=t.n(r),u=t(1),l=function(e){return Object(u.jsx)("div",{className:o.a.MessageItem,children:e.item})},j=t(90),d=t.n(j),m=function(e){return Object(u.jsx)("div",{className:d.a.dialogItem,children:Object(u.jsx)("p",{children:e.item})})},g=t(85),b=function(e){var s=Object(g.a)(),t=s.register,a=s.handleSubmit;return Object(u.jsxs)("form",{onSubmit:a(e.sendMessage),children:[Object(u.jsx)("textarea",Object(n.a)({placeholder:"Your message..."},t("message"))),Object(u.jsx)("button",{children:"Send"})]})},O=function(e){var s=e.state.dialogsPage.messages.map((function(e){return Object(u.jsx)(l,{item:e.text})})),t=e.state.dialogsPage.dialogs.map((function(e){return Object(u.jsx)(m,{item:e.name})}));return Object(u.jsxs)("div",{className:c.a.dialogs,children:[Object(u.jsx)("div",{className:c.a.dialogItems,children:t}),Object(u.jsxs)("div",{className:c.a.messages,children:[Object(u.jsx)("div",{className:c.a.messagesItems,children:s}),Object(u.jsx)("div",{className:c.a.sendText,children:Object(u.jsx)(b,{sendMessage:function(s){e.sendNewMessageCreator(s.message)}})})]})]})},h=t(19),x=t(83),f=t(15);s.default=Object(f.c)(x.a,Object(h.b)((function(e){return{state:e}}),{sendNewMessageCreator:a.b}))(O)}}]);
//# sourceMappingURL=5.20dcb8c2.chunk.js.map