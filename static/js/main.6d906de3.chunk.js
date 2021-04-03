(this["webpackJsonpbite-bank-client"]=this["webpackJsonpbite-bank-client"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(25),i=a.n(r),o=(a(58),a(21)),s=a(8),l=a(9),u=a(11),j=a(10),h=a(16),d=a(5),b=(a(40),a(2)),p=function(){return Object(b.jsxs)("div",{className:"Nav",children:[Object(b.jsx)(h.c,{activeStyle:{background:"#19d3da"},to:"/",className:"main-nav",exact:!0,children:"Home"}),Object(b.jsx)(h.c,{activeStyle:{background:"#19d3da"},to:"/recipes",className:"main-nav",exact:!0,children:"Meals"}),Object(b.jsx)(h.c,{activeStyle:{background:"#19d3da"},to:"/recipes/new",className:"main-nav",exact:!0,children:"Create Meal"}),Object(b.jsx)(h.c,{activeStyle:{background:"#19d3da"},to:"/about",className:"main-nav",exact:!0,children:"About"})]})},O=(a(64),a(45)),f=a.n(O),m=a(17),g="http://localhost:3000/recipes",x=a(47),v=(a(84),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(t){Object(x.confirmAlert)({title:"Confirm to submit",message:"Are you sure to do this.",buttons:[{label:"Yes",onClick:function(){alert("Your meal has been deleted!"),e.props.removeRecipe(e.props.recipe.id),e.props.history.push("/")}},{label:"No",onClick:function(){return alert("Change your mind? no problem!")}}]})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.recipe,t=e.name,a=e.category,n=e.area,c=e.image_url,r=e.youtube_url,i=e.id;return Object(b.jsxs)("div",{className:"recipe card",children:[Object(b.jsxs)("h2",{children:[" ",t]}),Object(b.jsxs)("div",{className:"meal-info",children:[Object(b.jsxs)("div",{className:"meal-info-left",children:[Object(b.jsxs)("h4",{children:["Category: ",a]}),Object(b.jsxs)("h4",{children:["Ethnicity: ",n]})]}),Object(b.jsx)("div",{className:"meal-info-right",children:Object(b.jsx)("img",{src:c,alt:"food",className:"recipe-image"})})]}),Object(b.jsx)("div",{style:{width:"auto",height:"20rem"},children:Object(b.jsx)(f.a,{url:r,width:"100%",height:"100%",origin:window.location.origin})}),Object(b.jsx)(h.b,{to:"/recipes/".concat(i,"/edit"),children:Object(b.jsx)("button",{className:"button",children:"Edit"})}),Object(b.jsx)("button",{className:"button",onClick:this.handleClick,children:"Delete"})]})}}]),a}(n.Component)),y=Object(d.f)(Object(m.b)(null,{removeRecipe:function(e){return function(t){fetch(g+"/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(a){a.ok?t(function(e){return{type:"DELETE_RECIPE",payload:e}}(e)):window.alert("Unable to delete")})).catch((function(e){return console.log(e)}))}}})(v)),C=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getRecipes",value:function(){return this.props.recipes.map((function(e){return Object(b.jsx)(y,{recipe:e},e.id)}))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"recipes",children:this.props.loading?Object(b.jsx)("h1",{children:"LOADING...."}):this.getRecipes()})}}]),a}(n.Component),N=(a(85),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(t){return e.props.handleSubmit(t)},children:[Object(b.jsx)("label",{className:"foodLabel",children:"Food Name"}),Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Add food name here",value:this.props.value.name,onChange:function(t){return e.props.handleOnChange(t)}}),Object(b.jsx)("label",{className:"foodLabel",children:"Category"}),Object(b.jsx)("input",{type:"text",name:"category",placeholder:"Add a category of food here... ex.Chicken, Breakfast, and Seafood",value:this.props.value.category,onChange:function(t){return e.props.handleOnChange(t)}}),Object(b.jsx)("label",{className:"foodLabel",children:"Ethnicity"}),Object(b.jsx)("input",{type:"text",name:"area",placeholder:"Add the ethnicity of food here... ex.Thai, American, and French",value:this.props.value.area,onChange:function(t){return e.props.handleOnChange(t)}}),Object(b.jsx)("label",{className:"foodLabel",children:"Image Link"}),Object(b.jsx)("input",{type:"text",name:"image_url",placeholder:"Add an image url here",value:this.props.value.image_url,onChange:function(t){return e.props.handleOnChange(t)}}),Object(b.jsx)("label",{className:"foodLabel",children:"Youtube Link"}),Object(b.jsx)("input",{type:"text",name:"youtube_url",placeholder:"Add a youtube url here",value:this.props.value.youtube_url,onChange:function(t){return e.props.handleOnChange(t)}}),Object(b.jsx)("input",{type:"submit",className:"submitButton"})]})})}}]),a}(n.Component)),E=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",category:"",area:"",image_url:"",youtube_url:""},e.handleOnChange=function(t){var a=t.target.value;e.setState(Object(o.a)({},t.target.name,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.createRecipes(e.state),e.props.history.push("/recipes")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(N,{value:this.state,handleOnChange:this.handleOnChange,handleSubmit:this.handleSubmit})})}}]),a}(n.Component),A=Object(d.f)(Object(m.b)(null,(function(e){return{createRecipes:function(t){return e(function(e){return function(t){console.log(t);var a={method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify(e)};fetch(g,a).then((function(e){return e.json()})).then((function(e){t(function(e){return{type:"ADDED_RECIPE",payload:e}}(e))})).catch((function(e){return console.log(e)}))}}(t))}}}))(E)),S=a(39),k=Object(d.f)(Object(m.b)(null,{updateRecipe:function(e,t){return function(a){fetch(g+"/"+e,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){a({type:"UPDATE_RECIPE",payload:e}),a({type:"LOAD_CATEGORIES"}),a({type:"LOAD_AREAS"})}))}}})((function(e){var t=Object(n.useState)({name:"",category:"",area:"",image_url:"",youtube_url:""}),a=Object(S.a)(t,2),c=a[0],r=a[1],i=e.recipes.filter((function(t){return t.id.toString()===e.route.match.params.id.toString()})),s=Object(S.a)(i,1)[0];Object(n.useEffect)((function(){r(s)}),[s]);return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)(N,{value:c,handleOnChange:function(e){var t=e.target.value;r(Object(o.a)({},e.target.name,t))},handleSubmit:function(t){t.preventDefault(),e.updateRecipe(e.route.match.params.id,c),e.history.push("/recipes")}})})})}))),D=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchRecipes()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{id:"recipes-container",children:[Object(b.jsx)(d.a,{exact:!0,path:"/recipes",children:Object(b.jsx)(C,{recipes:this.props.recipes,loading:this.props.loading})}),Object(b.jsx)(d.a,{exact:!0,path:"/recipes/new",component:A}),Object(b.jsx)(d.a,{exact:!0,path:"/recipes/:id/edit",component:function(t){return Object(b.jsx)(k,{route:t,recipes:e.props.recipes})}})]})}}]),a}(n.Component),w=Object(m.b)((function(e,t){return{recipes:e.recipes.filter((function(e){return(e.name.toLowerCase().includes(t.searchTerm.toLowerCase())||e.category.toLowerCase().includes(t.searchTerm.toLowerCase())||e.area.toLowerCase().includes(t.searchTerm.toLowerCase()))&&e.category.toLowerCase().includes(t.filterTerm.toLowerCase())&&e.area.toLowerCase().includes(t.filterAreaTerm.toLowerCase())})),loading:e.loading,categories:e.categories,areas:e.area}}),(function(e){return{fetchRecipes:function(){return e((function(e){e({type:"LOADING"}),fetch(g).then((function(e){return e.json()})).then((function(t){e({type:"LOAD_RECIPES",payload:t}),e({type:"LOAD_CATEGORIES"}),e({type:"LOAD_AREAS"})}))}))}}}))(D),_=a(48),T=a.n(_),L=(a(119),a(120),a.p+"static/media/biteBank2.5ed16b5a.png"),R=a.p+"static/media/pic1.767c7c71.jpg",I=a.p+"static/media/pic2.2e909308.jpg",B=a.p+"static/media/pic3.6bc5608f.jpg",P=a.p+"static/media/pic4.b16bb34d.jpg",M=a.p+"static/media/pic5.d1a875b9.jpg",Y=(a(121),function(e){return e.preventDefault()}),U=[Object(b.jsx)("img",{className:"home",src:L,onDragStart:Y,alt:"biteBank"}),Object(b.jsx)("img",{className:"home-img",src:R,onDragStart:Y,alt:"food"}),Object(b.jsx)("img",{className:"home-img",src:I,onDragStart:Y,alt:"food2"}),Object(b.jsx)("img",{className:"home-img",src:B,onDragStart:Y,alt:"food3"}),Object(b.jsx)("img",{className:"home-img",src:P,onDragStart:Y,alt:"food4"}),Object(b.jsx)("img",{className:"home-img",src:M,onDragStart:Y,alt:"food5"})],F=function(){return Object(b.jsx)(T.a,{mouseTracking:!0,items:U})},G=a.p+"static/media/biteBank.858d3b16.png",H=(a(122),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"about",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:G,alt:"logo",className:"logo-image"})}),Object(b.jsxs)("div",{className:"about-text",children:[Object(b.jsx)("h1",{className:"about-header",children:"About"}),Object(b.jsx)("p",{className:"about-info",children:'Have you ever watched a cooking video on the internet and thought "I would love to cook this later?". Bite Bank is a media storage platform dedicated to the culinary arts. It allows for quick reference to cooking videos of interest by keeping a record of those you would like to flag and return to in the future. Easily searchable by name, category, and ethnicity...Bite Bank is a useful tool for any chef!'})]})]})}}]),a}(n.Component)),J=(a(123),a(32)),W=a(49),Z=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{className:"contact-below",children:"Contact Me!"}),Object(b.jsx)("h3",{className:"contact-below",children:"Hover over the circle below"})]}),Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("div",{id:"button"}),Object(b.jsx)("div",{id:"container",children:Object(b.jsx)("div",{id:"cont",children:Object(b.jsx)("div",{className:"footer_center",children:Object(b.jsxs)("h3",{className:"contact",children:["Copyright Chayanit McCormick 2021 \xa9",Object(b.jsx)("a",{href:"https://github.com/chay-chay/recipes-frontend",children:Object(b.jsx)(J.a,{})}),Object(b.jsx)("a",{href:"mailto:chayanit.chaisri@gmail.com",children:Object(b.jsx)(W.a,{})}),Object(b.jsx)("a",{href:"https://www.youtube.com/channel/UC-wW2rQ7mDnS0K9b7M1RPGA",children:Object(b.jsx)(J.c,{})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/chayanit-chaisri",children:Object(b.jsx)(J.b,{})})]})})})})]})]})},q=(a(124),a(50)),K=a(51),Q=Object(m.b)((function(e){return{categories:e.categories,areas:e.areas,recipes:e.recipes}}),{sortByName:function(e){return function(t){t("sortASC"===e?{type:"SORT_BY_NAME"}:"sortDESC"===e?{type:"SORT_BY_NAME_DESC"}:"sortNew"===e?{type:"SORT_BY_DATE"}:{type:"SORT_BY_NAME"})}}})((function(e){return Object(b.jsx)("div",{className:"box",children:Object(b.jsxs)("div",{className:"filter-info",children:[Object(b.jsxs)("div",{className:"clearfix searchform",children:[Object(b.jsx)("input",{name:"search",type:"search",id:"search-box",placeholder:"What are you looking for?",onChange:e.handleInputChange}),Object(b.jsx)("label",{className:"search-box",children:Object(b.jsx)(q.a,{icon:K.a})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"label-search",children:"Filter By: "}),Object(b.jsxs)("select",{className:"filter-select",name:"filter",onChange:e.handleInputChange,children:[Object(b.jsx)("option",{value:"",children:"Category"}),e.categories.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))]}),Object(b.jsxs)("select",{className:"filter-select",name:"filterArea",onChange:e.handleInputChange,children:[Object(b.jsx)("option",{value:"",children:"Ethnicity"}),e.areas.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))]}),Object(b.jsxs)("select",{className:"filter-select",name:"filter",onChange:function(t){e.sortByName(t.target.value)},children:[Object(b.jsx)("option",{value:"",children:"Sort "}),Object(b.jsx)("option",{value:"sortASC",children:"Sort By A-Z"}),Object(b.jsx)("option",{value:"sortDESC",children:"Sort By Z-A"}),Object(b.jsx)("option",{value:"sortNew",children:"Sort By Latest"})]})]})]})})})),z=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={search:"",filter:"",filterArea:""},e.handleInputChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value),(function(){return console.log(e.state)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)(h.a,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(Q,{handleInputChange:this.handleInputChange}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",component:F}),Object(b.jsx)(d.a,{path:"/recipes",children:Object(b.jsx)(w,{searchTerm:this.state.search,filterTerm:this.state.filter,filterAreaTerm:this.state.filterArea})}),Object(b.jsx)(d.a,{path:"/about",component:H})]})]}),Object(b.jsx)(Z,{})]})}}]),a}(n.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,129)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},X=a(24),$=a(52),ee=a(33),te=a(6),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{recipes:[],categories:[],areas:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(te.a)(Object(te.a)({},e),{},{loading:!0});case"LOAD_RECIPES":return Object(te.a)(Object(te.a)({},e),{},{loading:!1,recipes:t.payload});case"ADDED_RECIPE":return Object(te.a)(Object(te.a)({},e),{},{recipes:[].concat(Object(ee.a)(e.recipes),[t.payload]),categories:[].concat(Object(ee.a)(e.categories),[t.payload.category]),areas:[].concat(Object(ee.a)(e.areas),[t.payload.area])});case"DELETE_RECIPE":var a=e.recipes.filter((function(e){return e.id!==t.payload.id}));return Object(te.a)(Object(te.a)({},e),{},{recipe:a});case"UPDATE_RECIPE":var n=e.recipes.map((function(e){return e.id===t.payload.id?t.payload:e}));return Object(te.a)(Object(te.a)({},e),{},{recipes:n});case"LOAD_CATEGORIES":var c=[],r=function(e,t,a){return a.indexOf(e)===t};e.recipes.forEach((function(e){c.push(e.category)}));var i=c.filter(r);return Object(te.a)(Object(te.a)({},e),{},{loading:!1,categories:i});case"LOAD_AREAS":var o=[],s=function(e,t,a){return a.indexOf(e)===t};e.recipes.forEach((function(e){o.push(e.area)}));var l=o.filter(s);return Object(te.a)(Object(te.a)({},e),{},{loading:!1,areas:l});case"SORT_BY_NAME":var u=function(t){return e.recipes.sort((function(e,a){var n=e[t].toUpperCase(),c=a[t].toUpperCase();return n<c?-1:n>c?1:0}))};return Object(te.a)(Object(te.a)({},e),{},{recipes:u("name")});case"SORT_BY_NAME_DESC":var j=function(t){return e.recipes.sort((function(e,a){var n=e[t].toUpperCase(),c=a[t].toUpperCase();return n<c?-1:n>c?1:0}))};return Object(te.a)(Object(te.a)({},e),{},{recipes:j("name").reverse()});case"SORT_BY_DATE":var h=function(t){return e.recipes.sort((function(e,a){return e[t]-a[t]}))};return Object(te.a)(Object(te.a)({},e),{},{recipes:h("id").reverse()});default:return e}},ne=a(53),ce=Object(X.createStore)(ae,Object(ne.composeWithDevTools)(Object(X.applyMiddleware)($.a)));i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m.a,{store:ce,children:Object(b.jsx)(z,{})})}),document.getElementById("root")),V()},40:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},85:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.6d906de3.chunk.js.map