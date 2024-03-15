(self.webpackChunkstrayferret=self.webpackChunkstrayferret||[]).push([[303],{"./stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_Secondary_parameters,_Secondary_parameters_docs,_Secondary_parameters1,_storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:__webpack_require__("./stories/Button.tsx").$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Primary={args:{primary:!0,label:"Button"}},Secondary={args:{label:"Button"}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:'{\n  args: {\n    primary: true,\n    label: "Button"\n  }\n}',...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}},Secondary.parameters={...Secondary.parameters,docs:{...null===(_Secondary_parameters=Secondary.parameters)||void 0===_Secondary_parameters?void 0:_Secondary_parameters.docs,source:{originalSource:'{\n  args: {\n    label: "Button"\n  }\n}',...null===(_Secondary_parameters1=Secondary.parameters)||void 0===_Secondary_parameters1||null===(_Secondary_parameters_docs=_Secondary_parameters1.docs)||void 0===_Secondary_parameters_docs?void 0:_Secondary_parameters_docs.source}}};const __namedExportsOrder=["Primary","Secondary"]},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cjs_js_stories_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cjs_js_stories_button.A,options);cjs_js_stories_button.A&&cjs_js_stories_button.A.locals&&cjs_js_stories_button.A.locals;const Button=param=>{let{primary=!1,label,...props}=param;const mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button",mode].join(" "),...props,children:label})};Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"Boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"String"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.storybook-button {\n    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n    padding: 16px 25px;\n    transition: 0.3s ease-in-out;\n    min-width: 180px;\n}\n.storybook-button--primary {\n    color: white;\n    background-color: #ce143d;\n    border: 1px solid #ce143d;\n}\n.storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n    border: 1px solid #d3cdc9;\n    color: #020203;\n}\n.storybook-button--primary:hover,\n.storybook-button--secondary:hover {\n    scale: 1.1;\n}\n',"",{version:3,sources:["webpack://./stories/button.css"],names:[],mappings:"AAAA;IACI,0EAA0E;IAC1E,gBAAgB;IAChB,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,cAAc;IACd,kBAAkB;IAClB,4BAA4B;IAC5B,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,6BAA6B;IAC7B,qDAAqD;IACrD,yBAAyB;IACzB,cAAc;AAClB;AACA;;IAEI,UAAU;AACd",sourcesContent:['.storybook-button {\n    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n    padding: 16px 25px;\n    transition: 0.3s ease-in-out;\n    min-width: 180px;\n}\n.storybook-button--primary {\n    color: white;\n    background-color: #ce143d;\n    border: 1px solid #ce143d;\n}\n.storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n    border: 1px solid #d3cdc9;\n    color: #020203;\n}\n.storybook-button--primary:hover,\n.storybook-button--secondary:hover {\n    scale: 1.1;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);