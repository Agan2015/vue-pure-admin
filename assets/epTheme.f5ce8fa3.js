import{l as h,s as o,m,n as p}from"./index.55de5f83.js";const i=h({id:"pure-epTheme",state:()=>{var t,e,s,r;return{epThemeColor:(e=(t=o.getItem("responsive-layout"))==null?void 0:t.epThemeColor)!=null?e:m().EpThemeColor,epTheme:(r=(s=o.getItem("responsive-layout"))==null?void 0:s.theme)!=null?r:m().Theme}},getters:{getEpThemeColor(){return this.epThemeColor},fill(){return this.epTheme==="light"?"#409eff":this.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=o.getItem("responsive-layout");this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e.epThemeColor=t,o.setItem("responsive-layout",e)}}});function n(){return i(p)}export{n as u};
