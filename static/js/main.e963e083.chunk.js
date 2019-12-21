(this["webpackJsonpmy-calc"]=this["webpackJsonpmy-calc"]||[]).push([[0],{18:function(e,t,s){e.exports=s(30)},23:function(e,t,s){},24:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),r=s(4),l=s.n(r),n=(s(23),s(11)),c=s(12),p=s(17),u=s(13),h=s(2),o=s(16),d=(s(24),s(6)),m=/[0-9]+/;function D(e){for(var t,s,a=[],i=function(e){for(var t=[],s=[],a=!0,i=0;i<e.length;i++)if(m.test(e[i]))s.push(e[i]);else switch(e[i]){case"+":case"-":for(;a;)0!==t.length?s.push(t.pop()):(a=!1,t.push(e[i]));a=!0;break;case"*":case"/":for(;a;)"+"!==t[t.length-1]&&"-"!==t[t.length-1]&&0!==t.length?s.push(t.pop()):(a=!1,t.push(e[i]));a=!0;break;default:t.push(e[i])}for(;0!==t.length;)s.push(t.pop());return s}(e);0!==i.length;)if(m.test(i[0]))a.push(i.shift());else switch(t=parseFloat(a.pop()),s=parseFloat(a.pop()),i.shift()){case"+":a.push(s+t);break;case"-":a.push(s-t);break;case"*":a.push(s*t);break;case"/":a.push(s/t);break;case"^":a.push(Math.pow(s,t))}return+parseFloat(a.pop()).toFixed(4)}var b=!1,g=function(e){return i.a.createElement("div",{className:"col-xs-3"},i.a.createElement("button",{id:e.id,className:"btn btn-default btn-block",onClick:e.onClick,value:e.sign,type:e.type},e.sign))},E=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={fullDisp:"",currDisp:"0",lastOp:"",lastNum:"0"},s.handleNumber=s.handleNumber.bind(Object(h.a)(s)),s.handleAction=s.handleAction.bind(Object(h.a)(s)),s.handleEquals=s.handleEquals.bind(Object(h.a)(s)),s.handleDelete=s.handleDelete.bind(Object(h.a)(s)),s}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleNumber",value:function(e){b?("."===e.target.value?(this.props.deleteOper(),this.setState({fullDisp:"",currDisp:"0"+e.target.value,lastOp:""})):(this.props.deleteOper(),this.setState({fullDisp:"",currDisp:e.target.value,lastOp:""})),b=!1):"0"===this.state.currDisp&&"."!==e.target.value?(""!==this.state.lastOp&&this.props.addOper(this.state.lastOp),this.setState({currDisp:e.target.value})):"."===e.target.value&&this.state.currDisp.includes(".")||(""!==this.state.lastOp&&0===this.state.currDisp.length&&this.props.addOper(this.state.lastOp),this.setState({currDisp:this.state.currDisp+e.target.value}))}},{key:"handleAction",value:function(e){switch(e.target.value){case"+/-":""!==this.state.currDisp&&this.setState({currDisp:+(-1*parseFloat(this.state.currDisp)).toFixed(4)});break;case"%":""!==this.state.currDisp&&this.setState({currDisp:+(.01*parseFloat(this.state.currDisp)).toFixed(4)});break;case"1/":""!==this.state.currDisp&&this.setState({currDisp:+(1/parseFloat(this.state.currDisp)).toFixed(4)});break;case"\u221a":""!==this.state.currDisp&&this.setState({currDisp:+Math.sqrt(parseFloat(this.state.currDisp)).toFixed(4)});break;default:b?(this.props.deleteOper(),this.props.addOper(this.state.currDisp),this.setState({fullDisp:this.state.currDisp+e.target.value,currDisp:"",lastOp:e.target.value}),b=!1):""!==this.state.currDisp?(this.props.addOper(this.state.currDisp),this.setState({fullDisp:this.state.fullDisp+this.state.currDisp+e.target.value,currDisp:"",lastOp:e.target.value})):this.setState({fullDisp:this.state.fullDisp.substring(0,this.state.fullDisp.length-1)+e.target.value,lastOp:e.target.value})}}},{key:"handleEquals",value:function(){""===this.state.currDisp?(this.props.addOper(0),this.setState({fullDisp:this.state.fullDisp+"0=",lastNum:this.state.currDisp})):b?(this.props.deleteOper(),this.props.addOper(this.state.currDisp),this.props.addOper(this.state.lastOp),this.props.addOper(this.state.lastNum),this.setState({fullDisp:this.state.currDisp+this.state.lastOp+this.state.lastNum+"="})):(this.props.addOper(this.state.currDisp),this.setState({fullDisp:this.state.fullDisp+this.state.currDisp+"=",lastNum:this.state.currDisp}))}},{key:"handleDelete",value:function(e){"C"===e.target.value?(this.props.deleteOper(),this.setState({fullDisp:"",currDisp:"0",lastOp:""})):"DEL"!==e.target.value||b?"CE"===e.target.value&&(b?(this.props.deleteOper(),this.setState({fullDisp:"",currDisp:"0",lastOp:""})):this.setState({currDisp:"0"})):1===this.state.currDisp.length?this.setState({currDisp:"0"}):this.setState({currDisp:this.state.currDisp.substr(0,this.state.currDisp.length-1)})}},{key:"componentDidUpdate",value:function(e){this.props.result!==e.result&&"="===this.state.fullDisp[this.state.fullDisp.length-1]&&(this.setState({currDisp:D(this.props.result)}),b=!0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Calculator"),i.a.createElement("br",null),i.a.createElement("div",{className:"row displayBox"},i.a.createElement("p",{id:"equation"},this.state.fullDisp),i.a.createElement("p",{id:"display"},this.state.currDisp)),i.a.createElement("div",{className:"row"},i.a.createElement(g,{id:"perc",sign:"%",type:"action",onClick:this.handleAction}),i.a.createElement(g,{id:"CE",sign:"CE",type:"delete",onClick:this.handleDelete}),i.a.createElement(g,{id:"clear",sign:"C",type:"delete",onClick:this.handleDelete}),i.a.createElement(g,{id:"del",sign:"DEL",type:"delete",onClick:this.handleDelete})),i.a.createElement("div",{className:"row"},i.a.createElement(g,{id:"oneDiv",sign:"1/",type:"action",onClick:this.handleAction}),i.a.createElement(g,{id:"sqrt",sign:"\u221a",type:"action",onClick:this.handleAction}),i.a.createElement(g,{id:"pow",sign:"^",type:"action",onClick:this.handleAction}),i.a.createElement(g,{id:"divide",sign:"/",type:"action",onClick:this.handleAction})),i.a.createElement("div",{className:"row"},i.a.createElement(g,{id:"seven",sign:"7",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"eight",sign:"8",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"nine",sign:"9",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"multiply",sign:"*",type:"action",onClick:this.handleAction})),i.a.createElement("div",{className:"row"},i.a.createElement(g,{id:"four",sign:"4",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"five",sign:"5",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"six",sign:"6",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"subtract",sign:"-",type:"action",onClick:this.handleAction})),i.a.createElement("div",{className:"row"},i.a.createElement(g,{id:"one",sign:"1",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"two",sign:"2",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"three",sign:"3",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"add",sign:"+",type:"action",onClick:this.handleAction})),i.a.createElement("div",{className:"row"},i.a.createElement(g,{id:"plusMinus",sign:"+/-",type:"action",onClick:this.handleAction}),i.a.createElement(g,{id:"zero",sign:"0",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"decimal",sign:".",type:"number",onClick:this.handleNumber}),i.a.createElement(g,{id:"equals",sign:"=",type:"action",onClick:this.handleEquals})),i.a.createElement("br",null),i.a.createElement("h6",null,"Made By Daniel Mimoun")))}}]),t}(i.a.Component),f={addOper:function(e){return{type:"ADD",number:e}},deleteOper:function(){return{type:"DELETE"}}},v=Object(d.b)((function(e){return{result:e}}),f)(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=s(5),y=s(15),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return[].concat(Object(y.a)(e),[t.number]);case"DELETE":return[];default:return e}},C=Object(k.b)(O);l.a.render(i.a.createElement(d.a,{store:C},i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e963e083.chunk.js.map