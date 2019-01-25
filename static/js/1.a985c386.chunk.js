webpackJsonp([1],{172:function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=t(0),c=t.n(u),l=t(8),s=t(187),d=t.n(s),p=t(174),A=t(50),b=t(24),f=t(23),h=t(177),g=function(){function e(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(o=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(r)throw a}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),v=function(e){function n(){var e,t,i,u;r(this,n);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return t=i=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),i.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email address"},value:"",validation:{required:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!0},i.inputChangedHandler=function(e,n){var t=e.target.value;i.setState(function(e){var r=Object.assign({},e.controls,o({},n,Object.assign({},e.controls[n],{value:t,valid:Object(h.a)(t,e.controls[n].validation),touched:!0})));return{controls:r,formIsValid:Object.values(r).every(function(e){return!e.validation||e.valid})}})},i.submitHandler=function(e){e.preventDefault();var n=i.state.controls.email.value,t=i.state.controls.password.value;i.props.onAuth(n,t,i.state.isSignUp).then(function(){var e=i.props.hasBurger?"/checkout":"/";i.props.history.push(e)})},i.switchAuthModeHandler=function(){i.setState(function(e){return{isSignUp:!e.isSignUp}})},u=t,a(i,u)}return i(n,e),m(n,[{key:"render",value:function(){var e=this,n=Object.entries(this.state.controls).map(function(e){var n=g(e,2);return{id:n[0],config:n[1]}});return c.a.createElement("div",{className:d.a.Auth},this.props.error&&c.a.createElement("p",null,this.props.error.message),this.props.loading?c.a.createElement(b.a,null):c.a.createElement("form",{onSubmit:this.submitHandler},n.map(function(n){return c.a.createElement(p.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,changed:function(t){return e.inputChangedHandler(t,n.id)},invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched})}),c.a.createElement(A.a,{btnType:"Success",type:"submit",disabled:!this.state.formIsValid},"SUBMIT")),c.a.createElement(A.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignUp?"SIGNIN":"SIGNUP"))}}]),n}(u.Component),C=function(e){var n=Object.values(e.burgerBuilder.ingredients).some(function(e){return e>0});return{loading:e.auth.loading,error:e.auth.error,hasBurger:n}},x=function(e){return{onAuth:function(n,t,o){return e(Object(f.b)(n,t,o))}}};n.default=Object(l.b)(C,x)(v)},174:function(e,n,t){"use strict";function o(e){var n=e.label,t=e.elementType,o=e.elementConfig,r=e.value,i=e.changed,c=e.invalid,l=e.shouldValidate,s=e.touched,d=void 0,p=[u.a.InputElement,s&&c&&l&&u.a.Invalid];switch(t){case"input":d=a.a.createElement("input",Object.assign({className:p.join(" ")},o,{value:r,onChange:i}));break;case"textarea":d=a.a.createElement("textarea",Object.assign({className:p.join(" ")},o,{value:r,onChange:i}));break;case"select":d=a.a.createElement("select",{className:p.join(" "),value:r,onChange:i},o.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:d=a.a.createElement("input",Object.assign({className:p.join(" ")},o,{value:r,onChange:i}))}return a.a.createElement("div",{className:u.a.Input},a.a.createElement("label",{className:u.a.Label},n,d))}n.a=o;var r=t(0),a=t.n(r),i=t(175),u=t.n(i)},175:function(e,n,t){var o=t(176);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;t(169)(o,r);o.locals&&(e.exports=o.locals)},176:function(e,n,t){n=e.exports=t(168)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["D:/Projects/burger-builder/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAuB,AACvB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: #fff;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n\n.Invalid {\n    border: 1px solid red;\n    background-color: #fda49a;\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},177:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=!0;return n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=n.minLength<=e.length&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),t}},187:function(e,n,t){var o=t(188);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;t(169)(o,r);o.locals&&(e.exports=o.locals)},188:function(e,n,t){n=e.exports=t(168)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__ContactData__2_pdI{width:500px}}","",{version:3,sources:["D:/Projects/burger-builder/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAA0B,AAC1B,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,yBACE,0BACE,WAAa,CACd,CACF",file:"Auth.css",sourcesContent:[".Auth {\n    margin: 20px auto;\n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eeeeee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  \n  @media (min-width: 600px) {\n    .ContactData {\n      width: 500px;\n    }\n  }\n  "],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt",ContactData:"Auth__ContactData__2_pdI"}}});
//# sourceMappingURL=1.a985c386.chunk.js.map