(function(){"use strict";var e={3445:function(e,t,a){var n=a(9963),l=a(6252),i=a(3577),o=a(1955),s=a.p+"img/shopbag.5381abb7.png";const r={className:"navbg"},c={class:"container"},u={className:"logoflex"},d=(0,l._)("img",{src:o,alt:"Kilishi"},null,-1),m={className:"navflex"},p={className:"navbgg"},_={class:"containerr"},f={className:"navv"},v={className:"logoflex"},g=(0,l._)("img",{src:o,alt:"Best Kilishi In Nigeria"},null,-1),h={className:"cartimg"},b={class:"dot"},N=(0,l._)("img",{src:s,alt:"Buy Kilishi"},null,-1),y={key:0,class:"fa-solid fa-xmark fa-2x"},k={key:1,class:"fa-solid fa-bars fa-2x"},w={key:0,className:"navflexmd"},U=(0,l._)("br",null,null,-1),x=(0,l._)("br",null,null,-1),C=(0,l._)("br",null,null,-1),O={className:"navlinksmd"},q=(0,l._)("br",null,null,-1),j=(0,l._)("br",null,null,-1),D={className:"navlinksmd"},K=(0,l._)("br",null,null,-1),S=(0,l._)("br",null,null,-1),W={className:"navlinksmd"},P=(0,l._)("br",null,null,-1),E=(0,l._)("br",null,null,-1);function A(e,t,a,n,o,s){const A=(0,l.up)("router-link"),T=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",r,[(0,l._)("div",c,[(0,l._)("nav",null,[(0,l._)("div",u,[(0,l.Wm)(A,{to:"/"},{default:(0,l.w5)((()=>[d])),_:1})]),(0,l._)("div",m,[(0,l.Wm)(A,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1}),(0,l.Wm)(A,{to:"/about"},{default:(0,l.w5)((()=>[(0,l.Uk)(" About ")])),_:1}),(0,l.Wm)(A,{to:"/products"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Products ")])),_:1}),(0,l.Wm)(A,{to:"/contactus"},{default:(0,l.w5)((()=>[(0,l.Uk)("Contact Us")])),_:1}),(0,l.Wm)(A,{to:"/cart"},{default:(0,l.w5)((()=>[(0,l.Uk)(" My Cart("+(0,i.zw)(s.total)+")",1)])),_:1})])])])]),(0,l._)("div",p,[(0,l._)("div",_,[(0,l._)("nav",f,[(0,l._)("div",v,[(0,l.Wm)(A,{to:"/"},{default:(0,l.w5)((()=>[g])),_:1})]),(0,l._)("div",h,[(0,l._)("span",b,(0,i.zw)(s.total),1),(0,l.Wm)(A,{to:"/cart"},{default:(0,l.w5)((()=>[N])),_:1})]),(0,l._)("div",{className:"navflexx",onClick:t[0]||(t[0]=e=>s.toggle())},[o.isshow?((0,l.wg)(),(0,l.iD)("i",y)):(0,l.kq)("",!0),o.isshow?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("i",k))])]),o.isshow?((0,l.wg)(),(0,l.iD)("div",w,[U,(0,l._)("div",null,[(0,l.Wm)(A,{to:"/",className:"navlinksmd"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Home ")])),_:1}),(0,l.Uk)(),x,(0,l.Uk)(),C]),(0,l._)("div",O,[(0,l._)("a",null,[(0,l.Wm)(A,{to:"/about",className:"navlinksmd"},{default:(0,l.w5)((()=>[(0,l.Uk)(" About ")])),_:1}),(0,l.Uk)(),q,(0,l.Uk)(),j])]),(0,l._)("div",D,[(0,l.Wm)(A,{to:"/products",className:"navlinksmd"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Products ")])),_:1}),(0,l.Uk)(),K,(0,l.Uk)(),S]),(0,l._)("div",W,[(0,l.Wm)(A,{to:"/contactus",className:"navlinksmd"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Contact Us ")])),_:1}),(0,l.Uk)(),P,(0,l.Uk)(),E])])):(0,l.kq)("",!0)])]),(0,l.Wm)(T,{myproducts:o.products,addtocart:s.addtocart,mycart:o.cart,getprice:s.getprice,remove:s.delete,subt:s.getsubtotal,grandt:s.getgrandtotal},null,8,["myproducts","addtocart","mycart","getprice","remove","subt","grandt"])],64)}a(7658);var T=a(196),F=a.p+"img/kilishipack.19b0a05c.png",H={mounted(){},data(){return{name:"",email:"",cart:{},queue:[],isshow:!1,products:[]}},mounted(){T.ZP.get("http://localhost//index.php").then((e=>{this.products=e.data,console.log(e.data)})).catch((e=>{this.errors.push(e)}))},computed:{total(){return Object.values(this.cart).reduce(((e,t)=>e+t),0)}},methods:{submit(){if(""!==this.namee&&""!==this.email){var e=new FormData;e.append("name",this.namee),e.append("email",this.email),(0,T.ZP)({url:"http://localhost/new.php",method:"post",data:e}).then((e=>{console.log(e.data)}),(e=>{console.log(e)}))}},toggle(){this.isshow=!this.isshow},addtocart(e,t){this.cart[e]=0,this.cart[e]+=t,this.quantity=0},getprice(e){const t=this.products.find((t=>t.name===e));return t.price},delete(e){delete this.cart[e]},getsubtotal(){const e=Object.entries(this.cart).reduce(((e,t)=>e+t[1]*this.getprice(t[0])),0);return e.toFixed(2)},getgrandtotal(){const e=Object.entries(this.cart).reduce(((e,t)=>e+t[1]*this.getprice(t[0])),1e3);return e.toFixed(2)}}},Y=a(3744);const Z=(0,Y.Z)(H,[["render",A]]);var z=Z,M=a(2201),B=a.p+"img/platebg1.bd2044b0.png";const I={class:"herobg"},L={class:"container"},V={className:"heroflex"},G={className:"herotext"},R=(0,l._)("h1",null,[(0,l.Uk)(" Treat yourself with the "),(0,l._)("br"),(0,l.Uk)(" best Kilishi and "),(0,l._)("br"),(0,l.Uk)(" Kuli Kuli.")],-1),Q=(0,l._)("p",null,[(0,l.Uk)(" Get the best quality and most delicious Kilishi and Kulikuli. "),(0,l._)("br"),(0,l.Uk)(" You can do this by quickly placing an order")],-1),J={class:"btn success"},X=(0,l._)("div",{className:"heroimg"},[(0,l._)("img",{src:B})],-1),$=(0,l._)("div",{className:"producttext"},[(0,l._)("p",null," The Best Kilishi and Kuli Kuli for you "),(0,l._)("h3",null,[(0,l.Uk)("Place an "),(0,l._)("span",{className:"order"}," order now ")])],-1),ee={className:"pgrid"},te={className:"pgridc"},ae={className:"pbg"},ne=["src"],le={className:"pname"},ie={className:"infoflex"},oe={className:"pflex"},se=(0,l._)("div",{className:"p"},[(0,l._)("li",null," Price: ")],-1),re={className:"mp"},ce={className:"qflex"},ue=(0,l._)("div",{className:"q"},[(0,l._)("li",null," Quanity: ")],-1),de={className:"mq"},me=["onUpdate:modelValue"],pe=["onClick"];function _e(e,t,a,o,s,r){const c=(0,l.up)("router-link"),u=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",I,[(0,l._)("div",L,[(0,l._)("div",V,[(0,l._)("div",G,[R,Q,(0,l._)("button",J,[(0,l.Wm)(c,{to:"/products"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Order now ! ")])),_:1})])]),X])])]),(0,l._)("div",{className:"ppbg",style:(0,i.j5)({backgroundImage:"url("+s.image+")"})},[$,(0,l._)("div",ee,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.myproducts,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{className:"allproducts",key:t},[(0,l._)("div",te,[(0,l._)("div",ae,[(0,l._)("li",null,[(0,l._)("img",{src:e.image},null,8,ne)]),(0,l._)("li",le,(0,i.zw)(e.name),1),(0,l._)("div",ie,[(0,l._)("div",oe,[se,(0,l._)("div",re,[(0,l._)("li",null,(0,i.zw)(e.price),1)])]),(0,l._)("div",ce,[ue,(0,l._)("div",de,[(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":t=>e.quantity=t},null,8,me),[[n.nr,e.quantity,void 0,{number:!0}]])])]),(0,l._)("button",{className:"atc",onClick:t=>a.addtocart(e.name,e.quantity)}," Add to cart ",8,pe)])])])])))),128))])],4),(0,l.Wm)(u)],64)}var fe=a(3918),ve=a.p+"img/foodbg.405ef830.png",ge={data(){return{image:ve,cart:{}}},components:{Footer:fe.Z},props:["myproducts","addtocart"]};const he=(0,Y.Z)(ge,[["render",_e]]);var be=he;const Ne={className:"noitems"},ye={className:"container"},ke={key:0},we=(0,l._)("h2",null," There are no items in your Cart ",-1),Ue=[we],xe={key:1},Ce=(0,l._)("div",{className:"pimgc"},[(0,l._)("h4",null,[(0,l._)("div",{className:"bg3"},[(0,l._)("img",{src:F,alt:"Kilishi"})])])],-1),Oe={class:"dc"},qe={className:"dcdescription"},je={className:"pc"},De=["onClick"],Ke=(0,l._)("h4",null," X ",-1),Se=[Ke],We=(0,l._)("hr",null,null,-1),Pe=(0,l._)("br",null,null,-1),Ee={className:"gtflex"},Ae=(0,l._)("div",{className:"gttext"},[(0,l._)("h3",null," Subtotal: ")],-1),Te={className:"gttext"},Fe=(0,l._)("div",{className:"gtflex"},[(0,l._)("div",{className:"gttext"},[(0,l._)("h3",null," Delivery Fee: ")]),(0,l._)("div",{className:"gttext"},[(0,l._)("h3",null," N1,000.00")])],-1),He={className:"gtflex"},Ye=(0,l._)("div",{className:"gttext"},[(0,l._)("h3",null," Grand Total: ")],-1),Ze={className:"gttext"},ze={className:"checkout"};function Me(e,t,a,n,o,s){return(0,l.wg)(),(0,l.iD)("div",Ne,[(0,l._)("div",ye,[Object.keys(a.mycart).length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",ke,Ue)),Object.keys(a.mycart).length?((0,l.wg)(),(0,l.iD)("div",xe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.mycart,((e,t,n)=>((0,l.wg)(),(0,l.iD)("div",{className:"cflex",key:n},[Ce,(0,l._)("div",Oe,[(0,l._)("h4",null,(0,i.zw)(t),1),(0,l._)("div",qe,[(0,l._)("h3",null," Quantity: "+(0,i.zw)(e),1)])]),(0,l._)("div",je,[(0,l._)("h4",null,(0,i.zw)(e*a.getprice(t)),1)]),(0,l._)("div",{class:"dec",onClick:e=>a.remove(t)},Se,8,De)])))),128)),We,Pe,(0,l._)("div",Ee,[Ae,(0,l._)("div",Te,[(0,l._)("h3",null," N"+(0,i.zw)(a.subt()),1)])]),Fe,(0,l._)("div",He,[Ye,(0,l._)("div",Ze,[(0,l._)("h3",null," N"+(0,i.zw)(a.grandt()),1)])]),(0,l._)("div",ze,[(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>s.ck&&s.ck(...e))}," CHECKOUT ")])])):(0,l.kq)("",!0)])])}var Be={props:["mycart","getprice","remove","subt","grandt"],data(){return{Fee:this.grandt(),Myarr:[],mypush:{num:this.grandt()}}},methods:{ck(){var e=this.mypush,t=this.mycart,a=Object.assign(e,t);console.log(e),console.log(a),this.Myarr.push(e),console.log(this.Myarr),(0,T.ZP)({url:"http://localhost/payment.php",method:"post",data:this.Myarr}).then((e=>{window.location="http://localhost/payment.php",console.log(e.data)}),(e=>{console.log(e)}))},gi(){console.log(JSON.parse(localStorage.getItem("debit")))}}};const Ie=(0,Y.Z)(Be,[["render",Me]]);var Le=Ie;const Ve=e=>((0,l.dD)("data-v-a84c984e"),e=e(),(0,l.Cn)(),e),Ge={className:"cartpadd"},Re=Ve((()=>(0,l._)("div",{className:"cartcontainer"},[(0,l._)("div",{className:"mainformflex"},[(0,l._)("div",{className:"mycoform"},[(0,l._)("h3",null," Reach out to us "),(0,l._)("p",null," Your opinion is of high value to us, be it criticism, recommendations, or compliments, do well to reach out."),(0,l._)("form",null,[(0,l._)("div",null,[(0,l._)("label",{for:"street address"}," First name "),(0,l.Uk)(),(0,l._)("br"),(0,l._)("input",{className:"formname",Name:"firstname",type:"text"})]),(0,l._)("div",null,[(0,l._)("label",{for:"street address"}," Email "),(0,l.Uk)(),(0,l._)("br"),(0,l._)("input",{className:"formname",Name:"email",type:"text"})]),(0,l._)("div",null,[(0,l._)("label",{for:"phone"}," Phone "),(0,l.Uk)(),(0,l._)("br"),(0,l._)("input",{className:"formname",Name:"phone",type:"text"})]),(0,l._)("div",null,[(0,l._)("label",{for:"subject"}," Subject "),(0,l.Uk)(),(0,l._)("br"),(0,l._)("input",{className:"formname",Name:"subject",type:"text"})]),(0,l._)("div",{className:"contactus"},[(0,l._)("button",null," Send Message ")])])]),(0,l._)("div",{className:"card"},[(0,l._)("h3",null," BUSINESS CARD "),(0,l._)("li",null," Phone: +234 8077525315 "),(0,l._)("li",null," Email: info@kilishifoodsandentrepreneurship.com "),(0,l._)("h3",null," DELIVERY HOURS "),(0,l._)("li",null," Mon – Sun : 11am – 8pm ")])])],-1))),Qe=[Re];function Je(e,t){return(0,l.wg)(),(0,l.iD)("div",Ge,Qe)}const Xe={},$e=(0,Y.Z)(Xe,[["render",Je],["__scopeId","data-v-a84c984e"]]);var et=$e;const tt={className:"pppad"},at={className:"pgrid"},nt={className:"pgridc"},lt={className:"pbg"},it=["src"],ot={className:"pname"},st={className:"infoflex"},rt={className:"pflex"},ct=(0,l._)("div",{className:"p"},[(0,l._)("li",null," Price: ")],-1),ut={className:"mp"},dt={className:"qflex"},mt=(0,l._)("div",{className:"q"},[(0,l._)("li",null," Quanity: ")],-1),pt={className:"mq"},_t=["onUpdate:modelValue"],ft=["onClick"];function vt(e,t,a,o,s,r){const c=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",tt,[(0,l._)("div",{className:"ppbg",style:(0,i.j5)({backgroundImage:"url("+s.image+")"})},[(0,l._)("div",at,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.myproducts,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{className:"allproducts",key:t},[(0,l._)("div",nt,[(0,l._)("div",lt,[(0,l._)("li",null,[(0,l._)("img",{src:e.image},null,8,it)]),(0,l._)("li",ot,(0,i.zw)(e.name),1),(0,l._)("div",st,[(0,l._)("div",rt,[ct,(0,l._)("div",ut,[(0,l._)("li",null,(0,i.zw)(e.price),1)])]),(0,l._)("div",dt,[mt,(0,l._)("div",pt,[(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":t=>e.quantity=t},null,8,_t),[[n.nr,e.quantity,void 0,{number:!0}]])])]),(0,l._)("button",{className:"atc",onClick:t=>a.addtocart(e.name,e.quantity)}," Add to cart ",8,ft)])])])])))),128))])],4)]),(0,l.Wm)(c)],64)}var gt={data(){return{image:ve,cart:{}}},components:{Footer:fe.Z},props:["myproducts","addtocart"]};const ht=(0,Y.Z)(gt,[["render",vt]]);var bt=ht;const Nt=[{path:"/",name:"home",component:be},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,8566))},{path:"/contactus",name:"contactus",component:et},{path:"/products",name:"products",component:bt},{path:"/cart",name:"cart",component:Le}],yt=(0,M.p7)({history:(0,M.PO)(""),routes:Nt,scrollBehavior:function(e,t,a){return a||(e.hash?{el:e.hash,behavior:"smooth"}:void window.scrollTo(0,0))}});var kt=yt,wt=a(3907),Ut=(0,wt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(z).use(Ut).use(kt).mount("#app")},3918:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(6252),l=a(1955),i=a.p+"img/images.410a519d.png",o=a.p+"img/mc.c1bdf32d.png",s=a.p+"img/visa.f8f7f71f.png",r=a.p+"img/cod.2568850c.png";const c={className:"container"},u={className:"footerflex"},d=(0,n._)("div",{className:"finfo"},[(0,n._)("img",{src:l}),(0,n._)("p",null,[(0,n.Uk)(" Get the best quality and most "),(0,n._)("br"),(0,n.Uk)(" delicious Kilishi and Kulikuli. You "),(0,n._)("br"),(0,n.Uk)(" can do this by quickly placing an "),(0,n._)("br"),(0,n.Uk)(" order ")])],-1),m={className:"finfoo"},p=(0,n._)("h3",null," Pages ",-1),_=(0,n._)("li",null,[(0,n._)("a",null," Your cart ")],-1),f=(0,n._)("div",{className:"finfooo"},[(0,n._)("h3",null," Get in touch "),(0,n._)("div",{className:"fcontactinner"},[(0,n._)("div",null,[(0,n._)("img",{src:i})]),(0,n._)("div",null,[(0,n._)("li",{className:"del"},[(0,n._)("a",null," Mon-Sun: 11:00am - 9:00pm ")])])]),(0,n._)("div",{className:"fcontactinner"},[(0,n._)("div",null,[(0,n._)("img",{src:i})]),(0,n._)("div",null,[(0,n._)("li",{className:"dell"},[(0,n._)("a",null," Kilishibeefjerkybites@gmail.com ")])])])],-1),v=(0,n._)("div",{className:"finfoooo"},[(0,n._)("h3",null," We Accept "),(0,n._)("div",{className:"payflex"},[(0,n._)("div",null,[(0,n._)("img",{src:o})]),(0,n._)("div",null,[(0,n._)("img",{src:s})]),(0,n._)("div",null,[(0,n._)("img",{src:r})])])],-1),g=(0,n._)("div",{className:"copy"},[(0,n._)("p",null," Copyright@2022 Kilishi Beef Jerky bites")],-1);function h(e,t){const a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",c,[(0,n._)("div",u,[d,(0,n._)("div",m,[p,(0,n._)("li",null,[(0,n._)("a",null,[(0,n.Wm)(a,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Home ")])),_:1})])]),(0,n._)("li",null,[(0,n._)("a",null,[(0,n.Wm)(a,{to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)(" About ")])),_:1})])]),(0,n._)("li",null,[(0,n.Wm)(a,{to:"/contactus"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Contact Us ")])),_:1})]),_]),f,v])]),g],64)}var b=a(3744);const N={},y=(0,b.Z)(N,[["render",h]]);var k=y},1955:function(e,t,a){e.exports=a.p+"img/bbtlogo.65a3fd47.png"}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],i=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,l,i]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.e9b64d3f.js"}}(),function(){a.miniCssF=function(e){return"css/about.ab110c15.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="foanew:";a.l=function(n,l,i,o){if(e[n])e[n].push(l);else{var s,r;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(r=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[l];var m=function(t,a){s.onerror=s.onload=null,clearTimeout(p);var l=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),l&&l.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),r&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e=function(e,t,a,n){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var i=function(i){if(l.onerror=l.onload=null,"load"===i.type)a();else{var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=o,r.request=s,l.parentNode.removeChild(l),n(r)}};return l.onerror=l.onload=i,l.href=t,document.head.appendChild(l),l},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var l=a[n],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===e||i===t))return l}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){l=o[n],i=l.getAttribute("data-href");if(i===e||i===t)return l}},n=function(n){return new Promise((function(l,i){var o=a.miniCssF(n),s=a.p+o;if(t(o,s))return l();e(n,s,l,i)}))},l={143:0};a.f.miniCss=function(e,t){var a={443:1};l[e]?t.push(l[e]):0!==l[e]&&a[e]&&t.push(l[e]=n(e).then((function(){l[e]=0}),(function(t){throw delete l[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,n){var l=a.o(e,t)?e[t]:void 0;if(0!==l)if(l)n.push(l[2]);else{var i=new Promise((function(a,n){l=e[t]=[a,n]}));n.push(l[2]=i);var o=a.p+a.u(t),s=new Error,r=function(n){if(a.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,l[1](s)}};a.l(o,r,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,i,o=n[0],s=n[1],r=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(r)var u=r(a)}for(t&&t(n);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkfoanew"]=self["webpackChunkfoanew"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3445)}));n=a.O(n)})();
//# sourceMappingURL=app.ea6e85ad.js.map