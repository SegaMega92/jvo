import{j as a}from"./iframe-Dxb7Rh0T.js";import{P as s}from"./index-C3DehpbL.js";import"./preload-helper-PPVm8Dsz.js";const u="_awards_zxepu_3",w="_awards__container_zxepu_8",g="_awards__title_zxepu_13",l="_awards__grid_zxepu_22",m="_awards__card_zxepu_28",b="_awards__cardLeft_zxepu_42",h="_awards__icon_zxepu_48",S="_awards__iconImage_zxepu_57",f="_awards__content_zxepu_63",x="_awards__source_zxepu_70",B="_awards__description_zxepu_82",N="_awards__badge_zxepu_91",e={awards:u,awards__container:w,awards__title:g,awards__grid:l,awards__card:m,"awards__card--withIcon":"_awards__card--withIcon_zxepu_38",awards__cardLeft:b,awards__icon:h,awards__iconImage:S,awards__content:f,awards__source:x,"awards__source--uppercase":"_awards__source--uppercase_zxepu_78",awards__description:B,awards__badge:N},j=""+new URL("startech-DuEjj7kb.png",import.meta.url).href,v=""+new URL("oborot-CAhOCNfh.png",import.meta.url).href,z=[{source:"Startech.Base",description:"Победители премии «Startech/awards 2025»",badge:"1 место",icon:j},{source:"Oborot.ru",description:"Победители премии «Startech/awards 2025»",badge:"1 место",icon:v},{source:"РБК 2025",description:"Участник рейтинга работодателей",badge:"Участник"},{source:"RUSSIAN BUISENESS",description:"Самые перспективные компании",badge:"ТОП-100",uppercase:!0},{source:"МойСклад",description:"Лучшие сервисы для e-com",badge:"ТОП-30"},{source:"GDEKURS",description:"Лучшие сервисы для e-com",badge:"ТОП-5"},{source:"Hight time media",description:"B2B SaaS сервисов и продуктовых компаний России",badge:"ТОП-93"},{source:"ФИНАНСЫ KP.RU",description:"Лучших сервисов аналитики маркетплейсов в 2025 году",badge:"ТОП-11",uppercase:!0}];function d({title:i="Награды и премии",awards:_=z}){return a.jsx("section",{className:e.awards,children:a.jsxs("div",{className:e.awards__container,children:[a.jsx("h2",{className:e.awards__title,children:i}),a.jsx("div",{className:e.awards__grid,children:_.map((r,p)=>a.jsxs("div",{className:`${e.awards__card} ${r.icon?e["awards__card--withIcon"]:""}`,children:[a.jsxs("div",{className:e.awards__cardLeft,children:[r.icon&&a.jsx("div",{className:e.awards__icon,children:a.jsx("img",{src:r.icon,alt:r.source,className:e.awards__iconImage})}),a.jsxs("div",{className:e.awards__content,children:[a.jsx("p",{className:`${e.awards__source} ${r.uppercase?e["awards__source--uppercase"]:""}`,children:r.source}),a.jsx("p",{className:e.awards__description,children:r.description})]})]}),a.jsx("span",{className:e.awards__badge,children:r.badge})]},p))})]})})}d.propTypes={title:s.string,awards:s.arrayOf(s.shape({source:s.string.isRequired,description:s.string.isRequired,badge:s.string.isRequired,icon:s.string,uppercase:s.bool}))};d.__docgenInfo={description:"AwardsSection - Displays company awards and rankings\n\nEach award can have an optional `icon` property - path to image file",methods:[],displayName:"AwardsSection",props:{title:{defaultValue:{value:"'Награды и премии'",computed:!1},description:"",type:{name:"string"},required:!1},awards:{defaultValue:{value:`[
  {
    source: 'Startech.Base',
    description: 'Победители премии «Startech/awards 2025»',
    badge: '1 место',
    icon: startechBadge,
  },
  {
    source: 'Oborot.ru',
    description: 'Победители премии «Startech/awards 2025»',
    badge: '1 место',
    icon: oborotBadge,
  },
  {
    source: 'РБК 2025',
    description: 'Участник рейтинга работодателей',
    badge: 'Участник',
  },
  {
    source: 'RUSSIAN BUISENESS',
    description: 'Самые перспективные компании',
    badge: 'ТОП-100',
    uppercase: true,
  },
  {
    source: 'МойСклад',
    description: 'Лучшие сервисы для e-com',
    badge: 'ТОП-30',
  },
  {
    source: 'GDEKURS',
    description: 'Лучшие сервисы для e-com',
    badge: 'ТОП-5',
  },
  {
    source: 'Hight time media',
    description: 'B2B SaaS сервисов и продуктовых компаний России',
    badge: 'ТОП-93',
  },
  {
    source: 'ФИНАНСЫ KP.RU',
    description: 'Лучших сервисов аналитики маркетплейсов в 2025 году',
    badge: 'ТОП-11',
    uppercase: true,
  },
]`,computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{source:{name:"string",required:!0},description:{name:"string",required:!0},badge:{name:"string",required:!0},icon:{name:"string",required:!1},uppercase:{name:"bool",required:!1}}}},required:!1}}};const A={title:"Sections/AwardsSection",component:d,parameters:{layout:"fullscreen",backgrounds:{default:"white",values:[{name:"white",value:"#FFFFFF"}]}},tags:["autodocs"]},n={args:{}},c={args:{awards:[{source:"Startech.Base",description:"Победители премии «Startech/awards 2025»",badge:"1 место"},{source:"Oborot.ru",description:"Победители премии «Startech/awards 2025»",badge:"1 место"},{source:"РБК 2025",description:"Участник рейтинга работодателей",badge:"Участник"}]}},o={args:{title:"Наши достижения",awards:[{source:"Forbes",description:"Лучшие технологические компании",badge:"ТОП-50"},{source:"TechCrunch",description:"Самые инновационные стартапы",badge:"Победитель"},{source:"RBC",description:"Лидеры цифровой трансформации",badge:"1 место"}]}},t={args:{},parameters:{viewport:{defaultViewport:"mobile1"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    awards: [{
      source: 'Startech.Base',
      description: 'Победители премии «Startech/awards 2025»',
      badge: '1 место'
      // icon: startechBadge, // раскомментировать когда будет картинка
    }, {
      source: 'Oborot.ru',
      description: 'Победители премии «Startech/awards 2025»',
      badge: '1 место'
      // icon: oborotBadge, // раскомментировать когда будет картинка
    }, {
      source: 'РБК 2025',
      description: 'Участник рейтинга работодателей',
      badge: 'Участник'
    }]
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Наши достижения',
    awards: [{
      source: 'Forbes',
      description: 'Лучшие технологические компании',
      badge: 'ТОП-50'
    }, {
      source: 'TechCrunch',
      description: 'Самые инновационные стартапы',
      badge: 'Победитель'
    }, {
      source: 'RBC',
      description: 'Лидеры цифровой трансформации',
      badge: '1 место'
    }]
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...t.parameters?.docs?.source}}};const q=["Default","WithIcons","CustomAwards","Mobile"];export{o as CustomAwards,n as Default,t as Mobile,c as WithIcons,q as __namedExportsOrder,A as default};
