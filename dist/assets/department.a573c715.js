var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{p as i,h as u}from"./index.6420dcfd.js";import{u as d,a as s,d as v}from"./table.9eaf7aec.js";import{_ as c}from"./lodash.f7f82b9a.js";import{d as p,A as m,B as f,l as y,aD as b,k as g,_ as h,e as k,W as D,a_ as C,aE as O,r as w,o as I,c as j,a as _,w as F}from"./vendor.25688f0d.js";const x=[{key:"parentId",label:"父级部门",value:g(null),optionItems:D([]),render:e=>y(C,{value:e.value.value,onUpdateValue:a=>{e.value.value=a},placeholder:"请选择父级部门",options:e.optionItems})},{key:"name",label:"部门名称",type:"input",value:g(null),render:e=>y(O,{value:e.value.value,onUpdateValue:a=>{e.value.value=a},maxlength:50,placeholder:"请输入部门名称"}),validator:(e,a)=>!!e.value.value||(a.error("请输入部门名称"),!1)},{label:"部门编号",key:"depCode",value:g(null),render:e=>y(O,{value:e.value.value,onUpdateValue:a=>{e.value.value=a},placeholder:"请输入部门编号"},{prefix:()=>"dp_code_"}),validator:(e,a)=>!!e.value.value||(a.error("请输入部门编号"),!1)}];var P=p({name:"Department",setup(){const e=d(),p=m(),D=f(),C=s([{title:"部门名称",key:"name"},{title:"部门编号",key:"depCode"},{title:"排序",key:"order"},{title:"状态",key:"status",render:e=>y(b,{defaultValue:!!e.status})},{title:"操作",key:"actions",render:e=>v([{label:"编辑",onClick:P.bind(null,e)},{label:"删除",type:"error",onClick(){F(e)}}])}],{align:"center"}),O=g(null),w=g(null),I=g(null),j=i;function _(e,a){for(let l=0;l<e.length;l++){const t=e[l];if(t.id===a.id)return c.isEmpty(t.children)?void e.splice(l,1):void p.error("当前部门下有子部门，不能删除");c.isEmpty(t.children)||_(t.children,a)}}const F=a=>{D.warning({title:"提示",content:"确定要删除此信息，删除后不可恢复？",positiveText:"删除",negativeText:"再想想",onPositiveClick:()=>{_(e.dataList,a)}})};function P(e){var a;null==(a=I.value)||a.toggle(),h((()=>{x.forEach((a=>{const l=a.key,t=e[l];t&&("depCode"===a.key?a.value.value=t.replace("dp_code_",""):a.value.value=t)}))}))}return k((function(){j({url:u}).then(e.handleSuccess).then((e=>{var a;const l=x.find((e=>"parentId"===e.key));l.optionItems.length=0,null==(a=null==l?void 0:l.optionItems)||a.push(...e.map((e=>({label:e.name,value:e.id}))))}))})),A=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&r(e,l,a[l]);return e})({itemDataFormRef:O,searchDataFormRef:w,onDataFormConfirm:function(){var e,a;(null==(e=O.value)?void 0:e.validator())&&(null==(a=I.value)||a.toggle(),D.success({title:"提示",positiveText:"确定",content:"模拟部门添加/编辑成功，数据为："+JSON.stringify(O.value.generatorParams())}))},tableColumns:C,onUpdateItem:P},e),a(A,l({onDeleteItem:F,onAddItem:function(){var e;null==(e=I.value)||e.toggle(),h((()=>{var e;null==(e=O.value)||e.reset()}))},itemFormOptions:x,rowKey:function(e){return e.id},modalDialog:I}));var A}});const A={class:"main-container"};P.render=function(e,a,l,t,o,n){const r=w("AddButton"),i=w("TableHeader"),u=w("n-data-table"),d=w("TableBody"),s=w("DataForm"),v=w("ModalDialog");return I(),j("div",A,[_(i,{"show-filter":!1},{"top-right":F((()=>[_(r,{onAdd:e.onAddItem},null,8,["onAdd"])])),_:1}),_(d,null,{default:F((()=>[_(u,{loading:e.tableLoading,data:e.dataList,columns:e.tableColumns,"row-key":e.rowKey},null,8,["loading","data","columns","row-key"])])),_:1}),_(v,{ref:"modalDialog",onConfirm:e.onDataFormConfirm},{content:F((()=>[_(s,{ref:"itemDataFormRef",options:e.itemFormOptions},null,8,["options"])])),_:1},8,["onConfirm"])])};export default P;