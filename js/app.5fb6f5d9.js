(function(){"use strict";var e={5213:function(e,t,a){var n=a(9963),l=a(6252),i=a(3577),s=a(1955),o=a.p+"img/shopbag.5381abb7.png";const r={key:0,className:"pon"},c=(0,l._)("div",{className:"pontext"},[(0,l._)("i",{class:"fa-solid fa-check"}),(0,l.Uk)(),(0,l._)("h3",null," A product has been added to cart ")],-1),u=[c],d={className:"navbg"},m={class:"container"},p={className:"logoflex"},_=(0,l._)("img",{src:s,alt:"Kilishi"},null,-1),f={className:"navflex"},v={className:"navbgg"},g={class:"containerr"},h={className:"navv"},b={className:"logoflex"},N=(0,l._)("img",{src:s,alt:"Best Kilishi In Nigeria"},null,-1),k={className:"cartimg"},y={class:"dot"},w=(0,l._)("img",{src:o,alt:"Buy Kilishi"},null,-1),U={key:0,class:"fa-solid fa-xmark fa-2x"},x={key:1,class:"fa-solid fa-bars fa-2x"},C={key:0,className:"navflexmd"},q=(0,l._)("br",null,null,-1),O=(0,l._)("br",null,null,-1),D=(0,l._)("br",null,null,-1),S={className:"navlinksmd"},j=(0,l._)("br",null,null,-1),E=(0,l._)("br",null,null,-1),P={className:"navlinksmd"},W=(0,l._)("br",null,null,-1),K=(0,l._)("br",null,null,-1),T={className:"navlinksmd"},A=(0,l._)("br",null,null,-1),F=(0,l._)("br",null,null,-1);function H(e,t,a,n,s,o){const c=(0,l.up)("router-link"),H=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s.popupn?((0,l.wg)(),(0,l.iD)("div",r,u)):(0,l.kq)("",!0),(0,l._)("div",d,[(0,l._)("div",m,[(0,l._)("nav",null,[(0,l._)("div",p,[(0,l.Wm)(c,{to:"/"},{default:(0,l.w5)((()=>[_])),_:1})]),(0,l._)("div",f,[(0,l.Wm)(c,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1}),(0,l.Wm)(c,{to:"/about"},{default:(0,l.w5)((()=>[(0,l.Uk)(" About ")])),_:1}),(0,l.Wm)(c,{to:"/products"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Products ")])),_:1}),(0,l.Wm)(c,{to:"/contactus"},{default:(0,l.w5)((()=>[(0,l.Uk)("Contact Us")])),_:1}),(0,l.Wm)(c,{to:"/cart"},{default:(0,l.w5)((()=>[(0,l.Uk)(" My Cart("+(0,i.zw)(o.total)+")",1)])),_:1})])])])]),(0,l._)("div",v,[(0,l._)("div",g,[(0,l._)("nav",h,[(0,l._)("div",b,[(0,l.Wm)(c,{to:"/"},{default:(0,l.w5)((()=>[N])),_:1})]),(0,l._)("div",k,[(0,l._)("span",y,(0,i.zw)(o.total),1),(0,l.Wm)(c,{to:"/cart"},{default:(0,l.w5)((()=>[w])),_:1})]),(0,l._)("div",{className:"navflexx",onClick:t[0]||(t[0]=e=>o.toggle())},[s.isshow?((0,l.wg)(),(0,l.iD)("i",U)):(0,l.kq)("",!0),s.isshow?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("i",x))])]),s.isshow?((0,l.wg)(),(0,l.iD)("div",C,[q,(0,l._)("div",null,[(0,l.Wm)(c,{to:"/",className:"navlinksmd"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Home ")])),_:1}),(0,l.Uk)(),O,(0,l.Uk)(),D]),(0,l._)("div",S,[(0,l._)("a",null,[(0,l.Wm)(c,{to:"/about",className:"navlinksmd"},{default:(0,l.w5)((()=>[(0,l.Uk)(" About ")])),_:1}),(0,l.Uk)(),j,(0,l.Uk)(),E])]),(0,l._)("div",P,[(0,l.Wm)(c,{to:"/products",className:"navlinksmd"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Products ")])),_:1}),(0,l.Uk)(),W,(0,l.Uk)(),K]),(0,l._)("div",T,[(0,l.Wm)(c,{to:"/contactus",className:"navlinksmd"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Contact Us ")])),_:1}),(0,l.Uk)(),A,(0,l.Uk)(),F])])):(0,l.kq)("",!0)])]),(0,l.Wm)(H,{myproducts:s.products,addtocart:o.addtocart,mycart:s.cart,getprice:o.getprice,remove:o.delete,subt:o.getsubtotal,grandt:o.getgrandtotal},null,8,["myproducts","addtocart","mycart","getprice","remove","subt","grandt"])],64)}a(7658);var Z=a(196),Y=a.p+"img/kilishipack.19b0a05c.png",z={mounted(){},data(){return{popupn:!1,name:"",email:"",cart:{},queue:[],isshow:!1,products:[]}},mounted(){Z.ZP.get("bbt.php").then((e=>{this.products=e.data,console.log(e.data)})).catch((e=>{this.errors.push(e)}))},computed:{total(){return Object.values(this.cart).reduce(((e,t)=>e+t),0)}},methods:{submit(){if(""!==this.namee&&""!==this.email){var e=new FormData;e.append("name",this.namee),e.append("email",this.email),(0,Z.ZP)({url:"http://localhost/new.php",method:"post",data:e}).then((e=>{console.log(e.data)}),(e=>{console.log(e)}))}},toggle(){this.isshow=!this.isshow},addtocart(e,t){this.cart[e]=0,this.cart[e]+=t,this.quantity=0,this.popupn=!0,setTimeout((()=>this.popupn=!1),3e3)},getprice(e){const t=this.products.find((t=>t.name===e));return t.price},delete(e){delete this.cart[e]},getsubtotal(){const e=Object.entries(this.cart).reduce(((e,t)=>e+t[1]*this.getprice(t[0])),0);return e.toFixed(2)},getgrandtotal(){const e=Object.entries(this.cart).reduce(((e,t)=>e+t[1]*this.getprice(t[0])),1e3);return e.toFixed(2)}}},M=a(3744);const I=(0,M.Z)(z,[["render",H]]);var B=I,L=a(2201),V=a.p+"img/platebg1.bd2044b0.png";const G={class:"herobg"},Q={class:"container"},R={className:"heroflex"},J={className:"herotext"},X=(0,l._)("h1",null,[(0,l.Uk)(" Treat yourself with the "),(0,l._)("br"),(0,l.Uk)(" best Kilishi and "),(0,l._)("br"),(0,l.Uk)(" Kuli Kuli.")],-1),$=(0,l._)("p",null,[(0,l.Uk)(" Get the best quality and most delicious Kilishi and Kulikuli. "),(0,l._)("br"),(0,l.Uk)(" You can do this by quickly placing an order")],-1),ee={class:"btn success"},te=(0,l._)("div",{className:"heroimg"},[(0,l._)("img",{src:V})],-1),ae=(0,l._)("div",{className:"producttext"},[(0,l._)("p",null," The Best Kilishi and Kuli Kuli for you "),(0,l._)("h3",null,[(0,l.Uk)("Place an "),(0,l._)("span",{className:"order"}," order now ")])],-1),ne={className:"pgrid"},le={className:"pgridc"},ie={className:"pbg"},se=["src"],oe={className:"pname"},re={className:"infoflex"},ce={className:"pflex"},ue=(0,l._)("div",{className:"p"},[(0,l._)("li",null," Price: ")],-1),de={className:"mp"},me={className:"qflex"},pe=(0,l._)("div",{className:"q"},[(0,l._)("li",null," Quanity: ")],-1),_e={className:"mq"},fe=["onUpdate:modelValue"],ve=["onClick"];function ge(e,t,a,s,o,r){const c=(0,l.up)("router-link"),u=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",G,[(0,l._)("div",Q,[(0,l._)("div",R,[(0,l._)("div",J,[X,$,(0,l._)("button",ee,[(0,l.Wm)(c,{to:"/products"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Order now ! ")])),_:1})])]),te])])]),(0,l._)("div",{className:"ppbg",style:(0,i.j5)({backgroundImage:"url("+o.image+")"})},[ae,(0,l._)("div",ne,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.myproducts,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{className:"allproducts",key:t},[(0,l._)("div",le,[(0,l._)("div",ie,[(0,l._)("li",null,[(0,l._)("img",{src:e.image},null,8,se)]),(0,l._)("li",oe,(0,i.zw)(e.name),1),(0,l._)("div",re,[(0,l._)("div",ce,[ue,(0,l._)("div",de,[(0,l._)("li",null,(0,i.zw)(e.price),1)])]),(0,l._)("div",me,[pe,(0,l._)("div",_e,[(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":t=>e.quantity=t},null,8,fe),[[n.nr,e.quantity,void 0,{number:!0}]])])]),(0,l._)("button",{className:"atc",onClick:t=>a.addtocart(e.name,e.quantity)}," Add to cart ",8,ve)])])])])))),128))])],4),(0,l.Wm)(u)],64)}var he=a(186),be=a.p+"img/foodbg.405ef830.png",Ne={data(){return{image:be,cart:{}}},components:{Footer:he.Z},props:["myproducts","addtocart"]};const ke=(0,M.Z)(Ne,[["render",ge]]);var ye=ke;const we={className:"noitems"},Ue={className:"container"},xe={key:0},Ce=(0,l._)("h2",null," There are no items in your Cart ",-1),qe=[Ce],Oe={key:1},De=(0,l._)("div",{className:"pimgc"},[(0,l._)("h4",null,[(0,l._)("div",{className:"bg3"},[(0,l._)("img",{src:Y,alt:"Kilishi"})])])],-1),Se={class:"dc"},je={className:"dcdescription"},Ee={className:"pc"},Pe=["onClick"],We=(0,l._)("h4",null," X ",-1),Ke=[We],Te=(0,l._)("hr",null,null,-1),Ae=(0,l._)("br",null,null,-1),Fe={className:"gtflex"},He=(0,l._)("div",{className:"gttext"},[(0,l._)("h3",null," Subtotal: ")],-1),Ze={className:"gttext"},Ye=(0,l._)("div",{className:"gtflex"},[(0,l._)("div",{className:"gttext"},[(0,l._)("h3",null," Delivery Fee: ")]),(0,l._)("div",{className:"gttext"},[(0,l._)("h3",null," N1,000.00")])],-1),ze={className:"gtflex"},Me=(0,l._)("div",{className:"gttext"},[(0,l._)("h3",null," Grand Total: ")],-1),Ie={className:"gttext"},Be={className:"checkout"};function Le(e,t,a,n,s,o){return(0,l.wg)(),(0,l.iD)("div",we,[(0,l._)("div",Ue,[Object.keys(a.mycart).length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",xe,qe)),Object.keys(a.mycart).length?((0,l.wg)(),(0,l.iD)("div",Oe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.mycart,((e,t,n)=>((0,l.wg)(),(0,l.iD)("div",{className:"cflex",key:n},[De,(0,l._)("div",Se,[(0,l._)("h4",null,(0,i.zw)(t),1),(0,l._)("div",je,[(0,l._)("h3",null," Quantity: "+(0,i.zw)(e),1)])]),(0,l._)("div",Ee,[(0,l._)("h4",null,(0,i.zw)(e*a.getprice(t)),1)]),(0,l._)("div",{class:"dec",onClick:e=>a.remove(t)},Ke,8,Pe)])))),128)),Te,Ae,(0,l._)("div",Fe,[He,(0,l._)("div",Ze,[(0,l._)("h3",null," N"+(0,i.zw)(a.subt()),1)])]),Ye,(0,l._)("div",ze,[Me,(0,l._)("div",Ie,[(0,l._)("h3",null," N"+(0,i.zw)(a.grandt()),1)])]),(0,l._)("div",Be,[(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>o.ck&&o.ck(...e))}," CHECKOUT ")])])):(0,l.kq)("",!0)])])}var Ve={props:["mycart","getprice","remove","subt","grandt"],data(){return{Fee:this.grandt(),Myarr:[],mypush:{num:this.grandt()}}},methods:{ck(){var e=this.mypush,t=this.mycart;Object.assign(e,t);this.Myarr.push(e),(0,Z.ZP)({url:"/payment.php",method:"post",data:this.Myarr}).then((e=>{window.location="/payment.php"}),(e=>{}))},gi(){console.log(JSON.parse(localStorage.getItem("debit")))}}};const Ge=(0,M.Z)(Ve,[["render",Le]]);var Qe=Ge;const Re=e=>((0,l.dD)("data-v-2bc18c9a"),e=e(),(0,l.Cn)(),e),Je={className:"cartpadd"},Xe={className:"cartcontainer"},$e={className:"mainformflex"},et={className:"mycoform"},tt=Re((()=>(0,l._)("h3",null," Reach out to us ",-1))),at=Re((()=>(0,l._)("p",null," Your opinion is of high value to us, be it criticism, recommendations, or compliments, do well to reach out.",-1))),nt=Re((()=>(0,l._)("div",null,[(0,l._)("label",{for:"street address"}," Full Name "),(0,l.Uk)(),(0,l._)("br"),(0,l._)("input",{className:"formname",name:"user_name",type:"text"})],-1))),lt=Re((()=>(0,l._)("div",null,[(0,l._)("label",{for:"street address"}," Email "),(0,l.Uk)(),(0,l._)("br"),(0,l._)("input",{className:"formname",name:"user_email",type:"email"})],-1))),it=Re((()=>(0,l._)("div",null,[(0,l._)("label",{for:"phone"}," Phone "),(0,l.Uk)(),(0,l._)("br"),(0,l._)("input",{className:"formname",name:"user_phone",type:"phone"})],-1))),st=Re((()=>(0,l._)("div",null,[(0,l._)("label",{for:"subject"}," Subject "),(0,l.Uk)(),(0,l._)("br"),(0,l._)("input",{className:"formname",name:"message",type:"text"})],-1))),ot=Re((()=>(0,l._)("div",{className:"contactus"},[(0,l._)("button",{type:"submit"}," Send Message ")],-1))),rt=[nt,lt,it,st,ot],ct=Re((()=>(0,l._)("div",{className:"card"},[(0,l._)("h3",null," BUSINESS CARD "),(0,l._)("li",null," Phone: +234 8077525315 "),(0,l._)("li",null," Email: info@kilishifoodsandentrepreneurship.com "),(0,l._)("h3",null," DELIVERY HOURS "),(0,l._)("li",null," Mon – Sun : 11am – 8pm ")],-1)));function ut(e,t,a,i,s,o){return(0,l.wg)(),(0,l.iD)("div",Je,[(0,l._)("div",Xe,[(0,l._)("div",$e,[(0,l._)("div",et,[tt,at,(0,l._)("form",{id:"myForm",class:"add-form",onSubmit:t[0]||(t[0]=(0,n.iM)(((...e)=>o.sendEmail&&o.sendEmail(...e)),["prevent"]))},rt,32)]),ct])])])}var dt=a(5247),mt={data(){return{form:{name:null,email:null,phone:null,subject:null}}},methods:{sendEmail(){dt.ZP.sendForm("service_13qliew","template_1fdo9cg","#myForm","U0TOaQPrrxPT7U_NI").then((e=>{console.log("SUCCESS!",e.text)}),(e=>{console.log("FAILED...",e.text)}))}}};const pt=(0,M.Z)(mt,[["render",ut],["__scopeId","data-v-2bc18c9a"]]);var _t=pt;const ft={className:"pppad"},vt={className:"pgrid"},gt={className:"pgridc"},ht={className:"pbg"},bt=["src"],Nt={className:"pname"},kt={className:"infoflex"},yt={className:"pflex"},wt=(0,l._)("div",{className:"p"},[(0,l._)("li",null," Price: ")],-1),Ut={className:"mp"},xt={className:"qflex"},Ct=(0,l._)("div",{className:"q"},[(0,l._)("li",null," Quanity: ")],-1),qt={className:"mq"},Ot=["onUpdate:modelValue"],Dt=["onClick"];function St(e,t,a,s,o,r){const c=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",ft,[(0,l._)("div",{className:"ppbg",style:(0,i.j5)({backgroundImage:"url("+o.image+")"})},[(0,l._)("div",vt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.myproducts,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{className:"allproducts",key:t},[(0,l._)("div",gt,[(0,l._)("div",ht,[(0,l._)("li",null,[(0,l._)("img",{src:e.image},null,8,bt)]),(0,l._)("li",Nt,(0,i.zw)(e.name),1),(0,l._)("div",kt,[(0,l._)("div",yt,[wt,(0,l._)("div",Ut,[(0,l._)("li",null,(0,i.zw)(e.price),1)])]),(0,l._)("div",xt,[Ct,(0,l._)("div",qt,[(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":t=>e.quantity=t},null,8,Ot),[[n.nr,e.quantity,void 0,{number:!0}]])])]),(0,l._)("button",{className:"atc",onClick:t=>a.addtocart(e.name,e.quantity)}," Add to cart ",8,Dt)])])])])))),128))])],4)]),(0,l.Wm)(c)],64)}var jt={data(){return{image:be,cart:{}}},components:{Footer:he.Z},props:["myproducts","addtocart"]};const Et=(0,M.Z)(jt,[["render",St]]);var Pt=Et;const Wt=[{path:"/",name:"home",component:ye},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,3925))},{path:"/contactus",name:"contactus",component:_t},{path:"/products",name:"products",component:Pt},{path:"/cart",name:"cart",component:Qe}],Kt=(0,L.p7)({history:(0,L.PO)(""),routes:Wt,scrollBehavior:function(e,t,a){return a||(e.hash?{el:e.hash,behavior:"smooth"}:void window.scrollTo(0,0))}});var Tt=Kt,At=a(3907),Ft=(0,At.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(B).use(Ft).use(Tt).mount("#app")},186:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(6252),l=a(1955),i=a.p+"img/images.410a519d.png",s=a.p+"img/call.88071ac3.png",o=a.p+"img/msg.45945dad.png",r=a.p+"img/mc.c1bdf32d.png",c=a.p+"img/visa.f8f7f71f.png",u=a.p+"img/cod.2568850c.png";const d={className:"container"},m={className:"footerflex"},p=(0,n._)("div",{className:"finfo"},[(0,n._)("img",{src:l}),(0,n._)("p",null,[(0,n.Uk)(" Get the best quality and most "),(0,n._)("br"),(0,n.Uk)(" delicious Kilishi and Kulikuli. You "),(0,n._)("br"),(0,n.Uk)(" can do this by quickly placing an "),(0,n._)("br"),(0,n.Uk)(" order ")])],-1),_={className:"finfoo"},f=(0,n._)("h3",null," Pages ",-1),v=(0,n._)("div",{className:"finfooo"},[(0,n._)("h3",null," Get in touch "),(0,n._)("div",{className:"fcontactinner"},[(0,n._)("div",null,[(0,n._)("img",{src:i})]),(0,n._)("div",null,[(0,n._)("li",{className:"del"},[(0,n._)("a",null," Mon-Sun: 11:00am - 9:00pm ")])])]),(0,n._)("div",{className:"fcontactinner"},[(0,n._)("div",null,[(0,n._)("img",{src:s})]),(0,n._)("div",null,[(0,n._)("li",{className:"del"},[(0,n._)("a",null," +2348033439898, +2347030108085 ")])])]),(0,n._)("div",{className:"fcontactinner"},[(0,n._)("div",null,[(0,n._)("img",{src:o})]),(0,n._)("div",null,[(0,n._)("li",{className:"dell"},[(0,n._)("a",null," info@bbtkilishi.com.ng ")])])])],-1),g=(0,n._)("div",{className:"finfoooo"},[(0,n._)("h3",null," We Accept "),(0,n._)("div",{className:"payflex"},[(0,n._)("div",null,[(0,n._)("img",{src:r})]),(0,n._)("div",null,[(0,n._)("img",{src:c})]),(0,n._)("div",null,[(0,n._)("img",{src:u})])])],-1),h=(0,n._)("div",{className:"copy"},[(0,n._)("p",null," Copyright@2022 Kilishi Beef Jerky bites")],-1);function b(e,t){const a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",d,[(0,n._)("div",m,[p,(0,n._)("div",_,[f,(0,n._)("li",null,[(0,n._)("a",null,[(0,n.Wm)(a,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Home ")])),_:1})])]),(0,n._)("li",null,[(0,n._)("a",null,[(0,n.Wm)(a,{to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)(" About ")])),_:1})])]),(0,n._)("li",null,[(0,n.Wm)(a,{to:"/contactus"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Contact Us ")])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(a,{to:"/cart"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Your cart ")])),_:1})])]),v,g])]),h],64)}var N=a(3744);const k={},y=(0,N.Z)(k,[["render",b]]);var w=y},1955:function(e,t,a){e.exports=a.p+"img/bbtlogo.65a3fd47.png"}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,i){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],i=e[u][2];for(var o=!0,r=0;r<n.length;r++)(!1&i||s>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(o=!1,i<s&&(s=i));if(o){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,l,i]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.87349f6a.js"}}(),function(){a.miniCssF=function(e){return"css/about.ab110c15.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="foanew:";a.l=function(n,l,i,s){if(e[n])e[n].push(l);else{var o,r;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){o=d;break}}o||(r=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+i),o.src=n),e[n]=[l];var m=function(t,a){o.onerror=o.onload=null,clearTimeout(p);var l=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),l&&l.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),r&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e=function(e,t,a,n){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var i=function(i){if(l.onerror=l.onload=null,"load"===i.type)a();else{var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=s,r.request=o,l.parentNode.removeChild(l),n(r)}};return l.onerror=l.onload=i,l.href=t,document.head.appendChild(l),l},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var l=a[n],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===e||i===t))return l}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){l=s[n],i=l.getAttribute("data-href");if(i===e||i===t)return l}},n=function(n){return new Promise((function(l,i){var s=a.miniCssF(n),o=a.p+s;if(t(s,o))return l();e(n,o,l,i)}))},l={143:0};a.f.miniCss=function(e,t){var a={443:1};l[e]?t.push(l[e]):0!==l[e]&&a[e]&&t.push(l[e]=n(e).then((function(){l[e]=0}),(function(t){throw delete l[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,n){var l=a.o(e,t)?e[t]:void 0;if(0!==l)if(l)n.push(l[2]);else{var i=new Promise((function(a,n){l=e[t]=[a,n]}));n.push(l[2]=i);var s=a.p+a.u(t),o=new Error,r=function(n){if(a.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,l[1](o)}};a.l(s,r,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,i,s=n[0],o=n[1],r=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(l in o)a.o(o,l)&&(a.m[l]=o[l]);if(r)var u=r(a)}for(t&&t(n);c<s.length;c++)i=s[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkfoanew"]=self["webpackChunkfoanew"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5213)}));n=a.O(n)})();
//# sourceMappingURL=app.5fb6f5d9.js.map