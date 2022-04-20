var P=Object.defineProperty,j=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var R=(a,t,e)=>t in a?P(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,T=(a,t)=>{for(var e in t||(t={}))J.call(t,e)&&R(a,e,t[e]);if(w)for(var e of w(t))Q.call(t,e)&&R(a,e,t[e]);return a},k=(a,t)=>j(a,G(t));import{L as _,P as W,bf as X,_ as M,y as Y,z as Z,ac as ee,c_ as te,W as oe,c$ as b,I as m,o as ne,p as ae,H as n,S as s,C as l,J as f,G as x,q as le,a1 as ue,a2 as se,Q as ie,d0 as C}from"./index.55de5f83.js";import re from"./config.e937aba3.js";function ce(a){const t=_(a||""),e=_(!1),d=_(!1);return W(t,i=>{X(i)&&(d.value=!0,e.value=de(i))},{immediate:!!a,flush:"sync"}),{clipboardRef:t,isSuccessRef:e,copiedRef:d}}function de(a,{target:t=document.body}={}){const e=document.createElement("textarea"),d=document.activeElement;e.value=a,e.setAttribute("readonly",""),e.style.contain="strict",e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="12pt";const i=document.getSelection();let p;i&&i.rangeCount>0&&(p=i.getRangeAt(0)),t.append(e),e.select(),e.selectionStart=0,e.selectionEnd=a.length;let v=!1;try{v=document.execCommand("copy")}catch(h){throw new Error(h)}return e.remove(),p&&i&&(i.removeAllRanges(),i.addRange(p)),d&&d.focus(),v}const me={class:"text-model"},fe=f("\u7F16\u8F91"),pe=f("\u65B0\u589E\u5B50\u7C7B\u578B"),_e=f("\u5B57\u5178\u914D\u7F6E"),ve=f("\u5220\u9664"),be={name:"dict"},xe=Y(k(T({},be),{setup(a){const{t}=Z(),e=ee({submitLoading:!1,showEdit:!1,selectRow:null,filterName:"",tableData:[{id:1,name:"\u72B6\u6001",model:"",children:[{id:"1-1",name:"\u670D\u52A1\u72B6\u6001",model:"serviceStatus"},{id:"1-2",name:"\u5728\u7EBF\u72B6\u6001",model:"onlienStatus"}]},{id:2,name:"\u64CD\u4F5C\u7CFB\u7EDF",model:"operatingSystem"}],formData:{name:"",model:""},formItems:[{field:"name",title:"\u5B57\u5178\u540D\u79F0",span:24,itemRender:{name:"$input",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"}}},{field:"model",title:"\u5B57\u5178\u7C7B\u578B",span:24,itemRender:{name:"$input",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",disabled:!0}}},{align:"right",span:24,itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"\u63D0\u4EA4",status:"primary"}},{props:{type:"reset",content:"\u91CD\u7F6E"}}]}}]});let d=te(e.tableData);const i=oe("xTree",null),p=()=>{const o=b.toValueString(e.filterName).trim();if(o){const u={children:"children"},D=["name"];e.tableData=b.searchTree(d,c=>D.some(y=>b.toValueString(c[y]).indexOf(o)>-1),u),ie(()=>{i.value.setAllTreeExpand(!0)})}else e.tableData=d},v=b.debounce(function(){p()},100,{leading:!1,trailing:!0}),h=async()=>{await await C.modal.confirm("\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F")==="confirm"&&C.modal.message({content:"\u6D4B\u8BD5\u6570\u636E\uFF0C\u4E0D\u53EF\u5220\u9664",status:"error"})};function B(o,u){e.selectRow=o,e.showEdit=!0,e.formItems[1].itemRender.props.disabled=u}function $(){B(null,!1)}function S(o){B(null,!1)}function A(o){e.formData={name:o.name,model:o.model?o.model:"\u6682\u65E0\u5B57\u5178\u7C7B\u578B"},B(o,!0)}const{clipboardRef:V}=ce(),N=({row:o})=>{V.value=l(o).model},q=_({}),I=()=>{e.submitLoading=!0,setTimeout(()=>{const o=q.value;e.submitLoading=!1,e.showEdit=!1,e.selectRow?(C.modal.message({content:"\u4FDD\u5B58\u6210\u529F",status:"success"}),Object.assign(e.selectRow,e.formData)):(C.modal.message({content:"\u65B0\u589E\u6210\u529F",status:"success"}),o.insert(e.formData))},500)};let g=_(!1);function L(o){g.value=!0}function z(){g.value=!1}return(o,u)=>{const D=m("vxe-input"),c=m("vxe-button"),y=m("vxe-toolbar"),F=m("vxe-table-column"),H=m("el-tooltip"),O=m("vxe-table"),U=m("vxe-form"),K=m("vxe-modal");return ne(),ae("div",null,[n(y,null,{buttons:s(()=>[n(D,{modelValue:l(e).filterName,"onUpdate:modelValue":u[0]||(u[0]=r=>l(e).filterName=r),placeholder:l(t)("buttons.hssearch"),onKeyup:l(v)},null,8,["modelValue","placeholder","onKeyup"])]),tools:s(()=>[n(c,{icon:"fa fa-plus-square-o",status:"primary",onClick:$},{default:s(()=>[f(x(l(t)("buttons.hsadd")),1)]),_:1}),n(c,{icon:"fa fa-folder-open-o",status:"primary",onClick:u[1]||(u[1]=r=>o.$refs.xTree.setAllTreeExpand(!0))},{default:s(()=>[f(x(l(t)("buttons.hsexpendAll")),1)]),_:1}),n(c,{icon:"fa fa-folder-o",status:"primary",onClick:u[2]||(u[2]=r=>o.$refs.xTree.clearTreeExpand())},{default:s(()=>[f(x(l(t)("buttons.hscollapseAll")),1)]),_:1})]),_:1}),n(O,{ref_key:"xTree",ref:i,border:"",resizable:"","tree-config":{children:"children",iconOpen:"fa fa-minus-square-o",iconClose:"fa fa-plus-square-o"},data:l(e).tableData,onCellDblclick:N},{default:s(()=>[n(F,{"tree-node":"",field:"name",title:"\u5B57\u5178\u540D\u79F0"}),n(F,{title:"\u5B57\u5178\u7C7B\u578B"},{default:s(({row:r})=>[n(H,{effect:"dark",content:"\u53CC\u51FB\u590D\u5236\uFF1A"+r.model,placement:"right"},{default:s(()=>[le("span",me,x(r.model),1)]),_:2},1032,["content"])]),_:1}),n(F,{title:"\u64CD\u4F5C",width:"330",fixed:"right"},{default:s(({row:r})=>[n(c,{type:"text",icon:"fa fa-pencil-square-o",onClick:E=>A(r)},{default:s(()=>[fe]),_:2},1032,["onClick"]),n(c,{type:"text",icon:"fa fa-plus-square-o",onClick:E=>S()},{default:s(()=>[pe]),_:2},1032,["onClick"]),ue(n(c,{type:"text",icon:"fa fa-cog",onClick:E=>L()},{default:s(()=>[_e]),_:2},1032,["onClick"]),[[se,r.model]]),n(c,{type:"text",icon:"fa fa-trash-o",onClick:h},{default:s(()=>[ve]),_:1})]),_:1})]),_:1},8,["data"]),n(K,{resize:"",width:"450",modelValue:l(e).showEdit,"onUpdate:modelValue":u[3]||(u[3]=r=>l(e).showEdit=r),title:l(e).selectRow?"\u7F16\u8F91":"\u65B0\u589E",loading:l(e).submitLoading,onHide:u[4]||(u[4]=r=>o.$refs.xForm.reset())},{default:s(()=>[n(U,{ref:"xForm",data:l(e).formData,items:l(e).formItems,"title-align":"right","title-width":"100",onSubmit:I},null,8,["data","items"])]),_:1},8,["modelValue","title","loading"]),n(re,{drawer:l(g),drawTitle:"\u5B57\u5178\u5217\u8868",onHandleClose:z},null,8,["drawer"])])}}}));var ge=M(xe,[["__scopeId","data-v-44ff5037"]]);export{ge as default};
