(function(){"use strict";var e={8224:function(e,t,n){var o=n(5130),a=n(6768),r=n.p+"img/chelita-bank.5c1a7425.png";const c={class:"app-container"},u={class:"nav-container"};function l(e,t){const n=(0,a.g2)("router-link"),o=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",c,[t[4]||(t[4]=(0,a.Lk)("div",{class:"logo-container"},[(0,a.Lk)("img",{src:r,alt:"chelita-bank"})],-1)),(0,a.Lk)("nav",u,[(0,a.bF)(n,{class:"nav-item",to:"/CreateAccount"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Crea una cuenta")]))),_:1}),(0,a.bF)(n,{class:"nav-item",to:"/"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Balance")]))),_:1}),(0,a.bF)(n,{class:"nav-item",to:"/deposit"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("Depósito")]))),_:1}),(0,a.bF)(n,{class:"nav-item",to:"/historical"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Historial de movimientos ")]))),_:1})]),(0,a.bF)(o)])}var i=n(1241);const s={},d=(0,i.A)(s,[["render",l]]);var p=d,v=n(1387);function k(e,t,n,o,r,c){const u=(0,a.g2)("AccountForm"),l=(0,a.g2)("AccountDetails");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(u,{onSearch:c.fetchAccountData},null,8,["onSearch"]),r.account?((0,a.uX)(),(0,a.Wv)(l,{key:0,account:r.account},null,8,["account"])):(0,a.Q3)("",!0)])}var h=n(4232);const f={key:0},m={key:1,class:"error"};function b(e,t,n,r,c,u){return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h2",null,"Consulta de Saldo",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.accountId=e),type:"number",placeholder:"Ingrese ID de cuenta"},null,512),[[o.Jo,c.accountId]]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>u.getBalance&&u.getBalance(...e))},"Buscar"),c.account?((0,a.uX)(),(0,a.CE)("div",f,[t[7]||(t[7]=(0,a.Lk)("h3",null,"Detalles de la Cuenta",-1)),(0,a.Lk)("p",null,[t[2]||(t[2]=(0,a.Lk)("strong",null,"ID:",-1)),(0,a.eW)(" "+(0,h.v_)(c.account.id),1)]),(0,a.Lk)("p",null,[t[3]||(t[3]=(0,a.Lk)("strong",null,"Propietario:",-1)),(0,a.eW)(" "+(0,h.v_)(c.account.name),1)]),(0,a.Lk)("p",null,[t[4]||(t[4]=(0,a.Lk)("strong",null,"Saldo:",-1)),(0,a.eW)(" $"+(0,h.v_)(c.account.balance),1)]),(0,a.Lk)("p",null,[t[5]||(t[5]=(0,a.Lk)("strong",null,"Email:",-1)),(0,a.eW)(" "+(0,h.v_)(c.account.email),1)]),(0,a.Lk)("p",null,[t[6]||(t[6]=(0,a.Lk)("strong",null,"Moneda:",-1)),(0,a.eW)(" "+(0,h.v_)(c.account.currency),1)])])):(0,a.Q3)("",!0),c.errorMessage?((0,a.uX)(),(0,a.CE)("p",m,(0,h.v_)(c.errorMessage),1)):(0,a.Q3)("",!0)])}var y={data(){return{accountId:"",account:null,errorMessage:""}},methods:{async getBalance(){this.errorMessage="",this.account=null;try{const e=await fetch(`https://backend-bank-sand.vercel.app/api/get-balance/${this.accountId}`);if(!e.ok)throw new Error("Cuenta no encontrada o error en el servidor");const t=await e.json();this.account=t.balance}catch(e){this.errorMessage=e.message}}}};const L=(0,i.A)(y,[["render",b]]);var g=L;function D(e,t,n,o,r,c){return(0,a.uX)(),(0,a.CE)("div",null,[t[3]||(t[3]=(0,a.Lk)("h2",null,"Datos de la Cuenta",-1)),(0,a.Lk)("p",null,[t[0]||(t[0]=(0,a.Lk)("strong",null,"ID:",-1)),(0,a.eW)(" "+(0,h.v_)(n.account.id),1)]),(0,a.Lk)("p",null,[t[1]||(t[1]=(0,a.Lk)("strong",null,"Titular:",-1)),(0,a.eW)(" "+(0,h.v_)(n.account.owner),1)]),(0,a.Lk)("p",null,[t[2]||(t[2]=(0,a.Lk)("strong",null,"Balance:",-1)),(0,a.eW)(" "+(0,h.v_)(n.account.balance),1)])])}var _={props:["account"]};const C=(0,i.A)(_,[["render",D]]);var w=C,E={components:{AccountForm:g,AccountDetails:w},data(){return{account:null}},methods:{async fetchAccountData(e){try{const t=await fetch(`http://localhost:8000/accounts/${e}`);this.account=await t.json(),print("la cosa en el home",this.account)}catch(t){console.error("Error al obtener la cuenta:",t)}}}};const X=(0,i.A)(E,[["render",k]]);var I=X;const A={class:"deposit-container"},S={key:0,class:"notification"};function M(e,t,n,r,c,u){return(0,a.uX)(),(0,a.CE)("div",A,[t[9]||(t[9]=(0,a.Lk)("h2",null,"Realizar Depósito",-1)),(0,a.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>r.makeDeposit&&r.makeDeposit(...e)),["prevent"]))},[t[5]||(t[5]=(0,a.Lk)("label",{for:"account"},"Número de Cuenta:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>r.depositData.account_id=e),required:""},null,512),[[o.Jo,r.depositData.account_id]]),t[6]||(t[6]=(0,a.Lk)("label",{for:"amount"},"Monto:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>r.depositData.amount=e),required:""},null,512),[[o.Jo,r.depositData.amount]]),t[7]||(t[7]=(0,a.Lk)("label",{for:"currency"},"Moneda:",-1)),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.depositData.currency=e),required:""},t[4]||(t[4]=[(0,a.Lk)("option",{value:"MXN"},"MXN",-1),(0,a.Lk)("option",{value:"USD"},"USD",-1)]),512),[[o.u1,r.depositData.currency]]),t[8]||(t[8]=(0,a.Lk)("button",{type:"submit"},"Depositar",-1))],32),r.message?((0,a.uX)(),(0,a.CE)("div",S,(0,h.v_)(r.message),1)):(0,a.Q3)("",!0)])}var O=n(144),$=n(9309),j=n.n($),T={setup(){const e=(0,O.KR)({account_id:"",amount:"",currency:"MXN",transaction_type:"deposito"}),t=(0,O.KR)(null);let n=null;const o=(0,$.useToast)(),r=async()=>{try{const n=await fetch("https://backend-bank-sand.vercel.app/api/deposit/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.value)}),a=await n.json();n.ok?(t.value="Depósito exitoso",o.success("Depósito exitoso",{duration:5e3})):(t.value=`Error: ${a.detail}`,o.error(`Error: ${a.detail}`,{duration:5e3}))}catch(n){t.value="Error al conectar con el servidor",o.error("Error al conectar con el servidor",{duration:5e3})}},c=()=>{n=new WebSocket("https://backend-bank-sand.vercel.app/api/ws/notifications"),n.onmessage=n=>{console.log("evento recibido en los sockets",n);const a=JSON.parse(n.data);a.account_id===e.value.account_id&&(t.value=`Has recibido un nuevo depósito de ${a.amount} ${a.currency}`,o.info(`Has recibido un nuevo depósito de ${a.amount} ${a.currency}`,{duration:1e4}),o.info(`Tipo de transacción: ${a.transaction_type} --\x3e ID: ${a.transaction_id}`,{duration:1e4}))}};return(0,a.sV)(c),(0,a.hi)((()=>{n&&n.close()})),{depositData:e,makeDeposit:r,message:t}}};const W=(0,i.A)(T,[["render",M]]);var P=W;const x={class:"account-container"},F={key:0,class:"notification"};function J(e,t,n,r,c,u){return(0,a.uX)(),(0,a.CE)("div",x,[t[10]||(t[10]=(0,a.Lk)("h2",null,"Crear Cuenta",-1)),(0,a.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>r.createAccount&&r.createAccount(...e)),["prevent"]))},[t[5]||(t[5]=(0,a.Lk)("label",{for:"name"},"Nombre:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.accountData.name=e),required:""},null,512),[[o.Jo,r.accountData.name]]),t[6]||(t[6]=(0,a.Lk)("label",{for:"email"},"Correo Electrónico:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>r.accountData.email=e),required:""},null,512),[[o.Jo,r.accountData.email]]),t[7]||(t[7]=(0,a.Lk)("label",{for:"password"},"Contraseña:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>r.accountData.password=e),required:""},null,512),[[o.Jo,r.accountData.password]]),t[8]||(t[8]=(0,a.Lk)("label",{for:"confirmPassword"},"Confirmar Contraseña:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>r.accountData.confirmPassword=e),required:""},null,512),[[o.Jo,r.accountData.confirmPassword]]),t[9]||(t[9]=(0,a.Lk)("button",{type:"submit"},"Crear Cuenta",-1))],32),r.message?((0,a.uX)(),(0,a.CE)("div",F,(0,h.v_)(r.message),1)):(0,a.Q3)("",!0)])}var U={setup(){const e=(0,O.KR)({name:"",email:"",password:"",confirmPassword:"",account_type:"debito",initial_balance:0,currency:"MXN"}),t=(0,O.KR)(null),n=(0,$.useToast)(),o=async()=>{if(e.value.password!==e.value.confirmPassword)return t.value="Las contraseñas no coinciden",void n.error("Las contraseñas no coinciden",{duration:5e3});try{const o=await fetch("https://backend-bank-sand.vercel.app/api/create-account/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.value)}),a=await o.json();o.ok?(t.value="Cuenta creada exitosamente",n.success("Cuenta creada exitosamente",{duration:5e3})):(t.value=`Error: ${a.detail}`,n.error(`Error: ${a.detail}`,{duration:5e3}))}catch(o){t.value="Error al conectar con el servidor",n.error("Error al conectar con el servidor",{duration:5e3})}};return{accountData:e,createAccount:o,message:t}}};const V=(0,i.A)(U,[["render",J]]);var N=V;const Q={key:0},q={key:1,class:"error"},B={key:2},H={class:"movement-history"};function K(e,t,n,r,c,u){return(0,a.uX)(),(0,a.CE)("div",null,[t[4]||(t[4]=(0,a.Lk)("h1",null,"Historial de Movimientos",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.accountId=e),placeholder:"Ingrese el ID de la cuenta"},null,512),[[o.Jo,c.accountId]]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>u.fetchHistorical&&u.fetchHistorical(...e))},"Buscar"),c.loading?((0,a.uX)(),(0,a.CE)("div",Q,"Cargando...")):(0,a.Q3)("",!0),c.error?((0,a.uX)(),(0,a.CE)("div",q,(0,h.v_)(c.error),1)):(0,a.Q3)("",!0),c.history.length?((0,a.uX)(),(0,a.CE)("div",B,[t[3]||(t[3]=(0,a.Lk)("h2",null,"Movimientos",-1)),(0,a.Lk)("table",H,[t[2]||(t[2]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"ID"),(0,a.Lk)("th",null,"Monto"),(0,a.Lk)("th",null,"Tipo de Transacción"),(0,a.Lk)("th",null,"Fecha"),(0,a.Lk)("th",null,"Estado")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(c.history,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.id},[(0,a.Lk)("td",null,(0,h.v_)(e.id),1),(0,a.Lk)("td",null,(0,h.v_)(e.amount),1),(0,a.Lk)("td",null,(0,h.v_)(e.transaction_type),1),(0,a.Lk)("td",null,(0,h.v_)(e.performed_at),1),(0,a.Lk)("td",null,(0,h.v_)(e.status),1)])))),128))])])])):(0,a.Q3)("",!0)])}var R={data(){return{accountId:"",history:[],loading:!1,error:null}},methods:{async fetchHistorical(){if(this.accountId){this.loading=!0,this.error=null;try{const e=await fetch(`https://backend-bank-sand.vercel.app/api/get-historical/${this.accountId}`);if(!e.ok)throw new Error("Error al obtener el historial");this.history=await e.json(),this.history=this.history.historical}catch(e){this.error=e.message}finally{this.loading=!1}}else this.error="Por favor, ingrese un ID de cuenta"}}};const z=(0,i.A)(R,[["render",K],["__scopeId","data-v-001553c0"]]);var G=z;const Y=[{path:"/",component:I},{path:"/deposit",component:P},{path:"/createAccount",component:N},{path:"/historical",component:G}],Z=(0,v.aE)({history:(0,v.LA)(),routes:Y});var ee=Z;const te=(0,o.Ef)(p);te.use(j()),te.use(ee),te.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var c=1/0;for(s=0;s<e.length;s++){o=e[s][0],a=e[s][1],r=e[s][2];for(var u=!0,l=0;l<o.length;l++)(!1&r||c>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,r<c&&(c=r));if(u){e.splice(s--,1);var i=a();void 0!==i&&(t=i)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/frontend-bank/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,c=o[0],u=o[1],l=o[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var s=l(n)}for(t&&t(o);i<c.length;i++)r=c[i],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},o=self["webpackChunkchelita_bank"]=self["webpackChunkchelita_bank"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(8224)}));o=n.O(o)})();
//# sourceMappingURL=app.d2d41e30.js.map