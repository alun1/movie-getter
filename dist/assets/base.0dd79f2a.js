import{d as j,y as x,z as h,E as S,A as _,G as $,H as z,B as y,I as O,J as R,K as b}from"./index.5407ad12.js";var B={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};const M=()=>B,P={name:"Space",self:M};var C=P;const E=Object.assign(Object.assign({},h.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var L=j({name:"Space",props:E,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:r}=x(e),t=h("Space","-space",void 0,C,e,n);return{rtlEnabled:S("Space",r,n),mergedClsPrefix:n,margin:_(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[O("gap",a)]:g}}=t.value,{row:i,col:p}=R(g);return{horizontal:b(p),vertical:b(i)}})}},render(){const{vertical:e,align:n,inline:r,justify:t,itemStyle:d,margin:a,wrap:g,mergedClsPrefix:i,rtlEnabled:p}=this,f=$(z(this));if(!f.length)return null;const m=`${a.horizontal}px`,c=`${a.horizontal/2}px`,v=`${a.vertical}px`,o=`${a.vertical/2}px`,l=f.length-1,u=t.startsWith("space-");return y("div",{role:"none",class:[`${i}-space`,p&&`${i}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!g||e?"nowrap":"wrap",marginTop:e?"":`-${o}`,marginBottom:e?"":`-${o}`,alignItems:n}},f.map((w,s)=>y("div",{role:"none",style:[d,{maxWidth:"100%"},e?{marginBottom:s!==l?v:""}:p?{marginLeft:u?t==="space-between"&&s===l?"":c:s!==l?m:"",marginRight:u?t==="space-between"&&s===0?"":c:"",paddingTop:o,paddingBottom:o}:{marginRight:u?t==="space-between"&&s===l?"":c:s!==l?m:"",marginLeft:u?t==="space-between"&&s===0?"":c:"",paddingTop:o,paddingBottom:o}]},w)))}}),D=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function G(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function I(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})}),n}function W(e){return e.replace(/<[^>]+>|(^\s*)|(\s*$)|&nbsp;/gi,"")}let T;T="/";export{L as _,G as a,T as b,D as c,W as d,I as g};
