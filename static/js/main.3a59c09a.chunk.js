(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),i=n.n(a),r=n(8),c=n.n(r),s=n(7),d=n(2),l=n(3),p=n(5),u=n(4),h=n(17),j=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,a=e.id,i=e.title;return Object(o.jsxs)("li",{className:"todo-item",children:[Object(o.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return t.props.handleChangeProps(a)}}),Object(o.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(a)},children:"Delete"}),Object(o.jsx)("span",{style:n?{fontStlye:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null,children:i})]})}}]),n}(i.a.Component),b=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{children:this.props.todos.map((function(e){return Object(o.jsx)(j,{todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps},e.id)}))})}}]),n}(i.a.Component),O={padding:"20px 0",lineHeight:"2em"},f=function(){return Object(o.jsxs)("header",{style:O,children:[Object(o.jsx)("h1",{style:{fontSize:"25px",marginBottom:"15px"},children:"Simple Todo App"}),Object(o.jsx)("p",{style:{fontSize:"19px"},children:"Please add to-dos item(s) through the input field"})]})},m=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState({title:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addToDoProps(t.state.title),t.setState({title:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(o.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",onChange:this.onChange,value:this.state.title}),Object(o.jsx)("input",{type:"submit",value:"Submit",className:"input-submit"})]})}}]),n}(a.Component),v=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))},t.delTodo=function(e){t.setState({todos:Object(s.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addToDoItem=function(e){var n={id:Object(h.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(s.a)(t.state.todos),[n])})},t.state={todos:[{id:Object(h.a)(),title:"Setup Dev Environment",completed:!0},{id:Object(h.a)(),title:"Develop Website and add content",completed:!1},{id:Object(h.a)(),title:"Deploy to live server",completed:!0}]},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(f,{}),Object(o.jsx)(m,{addToDoProps:this.addToDoItem}),Object(o.jsx)(b,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo})]})}}]),n}(i.a.Component);n(14);c.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3a59c09a.chunk.js.map