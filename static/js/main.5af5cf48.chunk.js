(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),c=n(1),l=n(2),i=n(4),u=n(3),d=(n(17),n(18),n(5)),p=n.n(d),m=n(6),h=n(11),f=n(10),v=function(e){return fetch(e).then((function(e){return e.json()})).catch((function(e){return e}))},E="https://mate-api.herokuapp.com";var b=n(7),_=n.n(b),y=function(e){var t=e.onUserSelect,n=e.selectedUserId,a=e.completed,s=e.userId,o=e.title;return r.a.createElement("li",{onClick:function(){return t(s)},className:_()("TodoList__item",{"TodoList__item--checked":a,"TodoList__item--unchecked":!a})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,o)),r.a.createElement("button",{className:_()("\n        TodoList__user-button button",{"TodoList__user-button--selected":s===n}),type:"button"},"User #",s))},U=(n(20),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],loadedTodos:[],query:"",option:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r)),e.filterList()},e.filterByOption=function(t){var n=e.state.todos,a=Object(h.a)(n);switch(t){case"all":return e.setState({todos:a.filter((function(e){return e}))});case"completed":return e.setState({todos:a.filter((function(e){return!0===e.completed}))});case"uncompleted":return e.setState({todos:a.filter((function(e){return!1===e.completed}))});default:return!1}},e.filterList=function(){var t=e.state.loadedTodos;e.setState((function(e){return{todos:t.filter((function(t){var n=t.title.toLowerCase(),a=e.query.toLowerCase();return n.includes(a)}))}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("".concat(E,"/todos")).then((function(e){return e.data.filter((function(e){return!Object.values(e).some((function(e){return null===e||""===e}))&&e}))})).then((function(e){return e}));case 2:t=e.sent,this.setState({todos:t,loadedTodos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){t.option!==this.state.option&&this.filterByOption(this.state.option)}},{key:"render",value:function(){var e=this.props,t=e.onUserSelect,n=e.selectedUserId,a=this.state,s=a.todos,o=a.query;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("label",null,"Search:"," "," ",r.a.createElement("input",{type:"text",placeholder:"find ToDo",name:"query",value:o,onChange:this.handleChange})),r.a.createElement("select",{value:this.state.option,name:"option",onChange:this.handleChange},r.a.createElement("option",{value:"initial",disabled:!0},"choose parameter"),r.a.createElement("option",{value:"completed"},"completed"),r.a.createElement("option",{value:"uncompleted"},"uncompleted"),r.a.createElement("option",{value:"all"},"all")),r.a.createElement("ul",{className:"TodoList__list"},s.map((function(e){return r.a.createElement(y,{key:e.id,onUserSelect:t,selectedUserId:n,completed:e.completed,userId:e.userId,title:e.title})})))))}}]),n}(r.a.Component)),C=(n(21),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserDetails:[],userError:!1},e.handleClickClear=function(){e.props.onReset(0)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadData()}},{key:"loadData",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=this.props.userId,v("".concat(E,"/users/").concat(n));case 2:if(null!==(t=e.sent).data){e.next=6;break}return this.setState({userError:!0}),e.abrupt("return",!1);case 6:this.setState({selectedUserDetails:t.data,userError:!1});case 7:case"end":return e.stop()}var n}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.userId,t=this.state.userError,n=this.state.selectedUserDetails,a=n.name,s=n.email,o=n.phone;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Invalid User"))):r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",e)),r.a.createElement("h3",{className:"CurrentUser__name"},a),r.a.createElement("p",{className:"CurrentUser__email"},s),r.a.createElement("p",{className:"CurrentUser__phone"},o)),r.a.createElement("button",{type:"button",onClick:this.handleClickClear},"Clear"))}}]),n}(r.a.Component)),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserId:0},e.selectUserHandler=function(t){t!==e.state.selectedUserId&&e.setState({selectedUserId:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(U,{selectedUserId:e,onUserSelect:this.selectUserHandler})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},e?r.a.createElement(C,{userId:e,onReset:this.selectUserHandler}):"No user selected")))}}]),n}(r.a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.5af5cf48.chunk.js.map