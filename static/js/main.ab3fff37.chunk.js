(this["webpackJsonpone-stop-nav"]=this["webpackJsonpone-stop-nav"]||[]).push([[0],{203:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(1),o=t.n(i),a=t(46),c=t.n(a),s=t(98),l=t(13),d=t(16),m=t(10),u=t(5),b=t(6);function h(){var n=Object(u.a)(["\n  margin: 0 auto;\n  width: 8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (max-width: 414px) {\n    width: 4.68rem;\n  }\n  .search {\n    padding-top: 0.91rem;\n    padding-bottom: 0.6rem;\n    width: 100%;\n  }\n  .widgets {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    /* margin-right: 0.24rem; */\n    justify-content: space-between;\n  }\n  .add_widget {\n    position: fixed;\n    bottom: 0.36rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 0.14rem;\n    font-weight: 400;\n    color: #333;\n    line-height: 0.25rem;\n  }\n"]);return h=function(){return n},n}var g=b.default.section(h());function f(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  /* width: 100%; */\n  .input {\n    width: 100%;\n    border-radius: 0.1rem 0rem 0rem 0.1rem;\n    border: 0.02rem solid #c4c7ce;\n    border-right: none;\n    padding: 0.1rem 0.16rem;\n    font-size: 0.16rem;\n    height: 0.44rem;\n    &:focus {\n      border: 0.02rem solid #4e6ef3;\n      border-right: none;\n    }\n  }\n  .btn {\n    /* width: 1.4rem;\n    height: 0.44rem; */\n    word-break: keep-all;\n    background: #4e6ef3;\n    border-radius: 0rem 0.1rem 0.1rem 0rem;\n    padding: 0.1rem 0.34rem 0.09rem 0.35rem;\n    font-size: 0.18rem;\n    font-weight: 600;\n    color: #fff;\n    line-height: 0.25rem;\n  }\n"]);return f=function(){return n},n}var j=b.default.div(f());function p(){var n=Object(i.useState)(""),e=Object(m.a)(n,2),t=e[0],o=e[1];return Object(r.jsxs)(j,{children:[Object(r.jsx)("input",{value:t,onChange:function(n){o(n.target.value)},className:"input"}),Object(r.jsx)("button",{className:"btn",children:"\u767e\u5ea6\u4e00\u4e0b"})]})}function x(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0.16rem;\n  right: 1rem;\n\n  font-size: 0.14rem;\n  font-weight: 400;\n  color: #333333;\n  line-height: 0.22rem;\n"]);return x=function(){return n},n}var v=b.default.div(x());function O(n){var e=n.avator,t=void 0===e?"":e,i=n.nickname,o=void 0===i?"\u6768\u4e8c":i;return Object(r.jsxs)(v,{children:[o,Object(r.jsx)("button",{className:"btn",children:t})]})}function A(){var n=Object(u.a)(["\n  z-index: 999;\n  position: fixed;\n  background: #ffffff;\n\n  box-shadow: 0rem 0.02rem 0.12rem 0rem rgba(153, 153, 153, 0.8);\n  border-radius: 0.03rem;\n  border: 0.01rem solid #e8e8e8;\n  padding: 0.12rem 0.16rem;\n  list-style: none;\n  margin: 0;\n  .item {\n    cursor: pointer;\n    font-size: 0.14rem;\n    font-weight: 400;\n    color: #333333;\n    line-height: 0.2rem;\n    &:not(:last-child) {\n      margin-bottom: 0.12rem;\n    }\n  }\n"]);return A=function(){return n},n}var w=b.default.ul(A()),C=function(n){var e=n.left,t=void 0===e?0:e,i=n.top,o=void 0===i?0:i;return Object(r.jsxs)(w,{style:{left:t,top:o},children:[Object(r.jsx)("li",{className:"item",children:"\u5220\u9664"}),Object(r.jsx)("li",{className:"item",children:"\u6392\u5e8f"}),Object(r.jsx)("li",{className:"item",children:"\u7f16\u8f91"}),Object(r.jsx)("li",{className:"item",children:"\u65b0\u6807\u7b7e\u9875\u6253\u5f00"})]})},y=t(47);function N(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  font-size: 0.2rem;\n  position: relative;\n  padding-bottom: 0.32rem;\n  .icon {\n    width: 1.4rem;\n    height: 1.05rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: ",";\n    box-shadow: 0rem 0.08rem 0.3rem 0rem #ececec, 0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5);\n    border-radius: 0.04rem;\n    border: 0.01rem solid #e8e8e8;\n    transition: all 0.5s;\n    img {\n      height: 0.4rem;\n    }\n  }\n  &:hover .icon {\n    box-shadow: 0rem 0.08rem 0.16rem 0rem #ececec,\n      0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5), 0rem 0.04rem 0.24rem 0rem #a8a8a8;\n  }\n  .title {\n    margin: 0.12rem 0 0 0;\n    font-size: 0.14rem;\n    font-weight: 400;\n    color: #666;\n    line-height: 0.2rem;\n    text-align: center;\n    width: 1.4rem;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  &.add {\n    .icon {\n      background: #f9f9f9;\n      position: relative;\n      &:before,\n      &:after {\n        content: '';\n        position: absolute;\n        display: block;\n        background-color: #999;\n      }\n      &:before {\n        width: 0.28rem;\n        height: 2px;\n      }\n      &:after {\n        width: 2px;\n        height: 0.28rem;\n      }\n    }\n  }\n"]);return N=function(){return n},n}var B=b.default.div(N(),(function(n){return n.bgColor}));function E(n){var e=n.themeColor,t=void 0===e?"#333":e,i=n.icon,o=void 0===i?"https://www.apple.com/favicon.ico":i,a=n.title,c=void 0===a?"\u6807\u9898":a,s=n.showMenu,l=void 0===s?null:s,m=n.add,u=Object(y.a)(n,["themeColor","icon","title","showMenu","add"]);return Object(r.jsxs)(B,Object(d.a)(Object(d.a)({className:m&&"add",bgColor:t,onContextMenu:function(n){if(n.preventDefault(),l){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollLeft||document.body.scrollLeft,r=n.clientX+t,i=n.clientY+e;l({left:r,top:i})}return!1}},u),{},{children:[Object(r.jsx)("div",{className:"icon",children:!m&&Object(r.jsx)("img",{src:o,alt:"logo"})}),Object(r.jsx)("h2",{className:"title",children:m?"\u6dfb\u52a0\u5bfc\u822a":c})]}))}var k=t(207),S=t(206);t(161);function z(){var n=Object(u.a)(["\n  font-size: 0.16rem;\n  .tabs {\n    font-weight: 400;\n    display: flex;\n    border-bottom: 1px solid #e4e4e4;\n    margin: 0 0.2rem;\n    @media screen and (max-width: 414px) {\n      overflow-x: scroll;\n      overflow-y: hidden;\n    }\n    .tab {\n      cursor: pointer;\n      color: #333;\n      line-height: 0.22rem;\n      padding-bottom: 0.1rem;\n      margin-bottom: -1.5px;\n      margin-right: 0.61rem;\n      white-space: nowrap;\n      &.active {\n        font-family: PingFangSC-Medium, PingFang SC;\n        font-weight: 500;\n        color: #4e6df2;\n        border-bottom: 0.03rem solid #4e6df2;\n      }\n    }\n  }\n  .content {\n    .swiper-container {\n      /* overflow: visible; */\n      padding: 0 0.2rem;\n      .swiper-slide {\n        padding: 0.32rem 0;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        > a {\n          margin-right: 0.44rem;\n        }\n      }\n    }\n  }\n"]);return z=function(){return n},n}var q=b.default.div(z()),I=[{title:"\u5e38\u7528",items:[{title:"\u5fae\u535a",icon:"./logos/wb.png",themeColor:"#FFD902"},{title:"\u6296\u97f3",icon:"./logos/dy.png",themeColor:"#888"}]},{title:"\u529e\u516c\u6548\u7387",items:[{title:"\u5fae\u4fe1",icon:"./logos/wx.png",themeColor:"#fff"}]},{title:"\u793e\u4ea4",items:[{title:"\u77e5\u4e4e",icon:"./logos/zh.png",themeColor:"#1787fc"}]},{title:"\u89c6\u9891\u97f3\u4e50",items:[{title:"\u6dd8\u5b9d",icon:"./logos/tb.png",themeColor:"#Ff9"}]},{title:"\u65b0\u95fb\u9605\u8bfb",items:[{title:"\u7231\u5947\u827a",icon:"./logos/iqy.png",themeColor:"#07D302"}]}];function Q(){var n=Object(i.useState)(null),e=Object(m.a)(n,2),t=e[0],o=e[1],a=Object(i.useState)(0),c=Object(m.a)(a,2),s=c[0],l=c[1],u=function(n){var e=n.target;console.log({target:e});var r=e.dataset.idx;t.slideTo(Number(r)),l(r)};return Object(r.jsxs)(q,{children:[Object(r.jsx)("div",{className:"tabs",children:I.map((function(n,e){var t=n.title;return Object(r.jsx)("div",{"data-idx":e,onClick:u,className:"tab ".concat(s==e&&"active"),children:t},t)}))}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)(k.a,{spaceBetween:30,onSlideChange:function(n){var e=n.activeIndex;l(e)},onSwiper:o,children:I.map((function(n,e){var t=n.items;return Object(r.jsx)(S.a,{children:t.map((function(n){return Object(r.jsx)(E,Object(d.a)({},n),n.title)}))},e)}))})})]})}function T(){var n=Object(u.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .modal {\n    position: relative;\n    background: #fff;\n    border-radius: 0.04rem;\n    padding: 0.7rem 0.25rem 0.35rem 0.25rem;\n    width: 8.16rem;\n\n    .add {\n      padding: 0 0.2rem;\n      padding-bottom: 0.8rem;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      .name {\n        width: 1.42rem;\n        margin-right: 0.44rem;\n      }\n      .url {\n        width: 3.24rem;\n        margin-right: 0.44rem;\n      }\n      .url,\n      .name {\n        margin-bottom: 0.1rem;\n        font-size: 0.16rem;\n        font-weight: 400;\n        color: #080808;\n        line-height: 0.22rem;\n        padding: 0.1rem 0.08rem;\n        border-radius: 0.04rem;\n        border: 0.01rem solid #e0e0e0;\n      }\n      .btn {\n        display: inherit;\n        position: relative;\n        margin-bottom: 0.1rem;\n        button {\n          padding: 0.1rem 0.5rem;\n          background: #4e6df2;\n          border-radius: 0.04rem;\n          font-size: 0.16rem;\n          font-weight: 500;\n          color: #ffffff;\n          line-height: 0.22rem;\n          white-space: nowrap;\n        }\n        .tip {\n          position: absolute;\n          left: 0;\n          bottom: -0.26rem;\n          font-size: 0.13rem;\n          font-weight: 400;\n          color: #ff2323;\n          line-height: 0.18rem;\n        }\n      }\n    }\n    .close {\n      cursor: pointer;\n      position: absolute;\n      top: 0.16rem;\n      right: 0.16rem;\n      width: 0.16rem;\n      height: 0.16rem;\n    }\n    @media screen and (max-width: 414px) {\n      width: 5rem;\n      .add {\n        flex-direction: column;\n        align-items: flex-start;\n      }\n    }\n  }\n"]);return T=function(){return n},n}var Z=document.querySelector("#modal-root"),D=b.default.section(T());function R(n){var e=n.visible,t=void 0!==e&&e,i=n.toggleVisible,o=void 0===i?null:i;return console.log({visible:t}),t?Object(r.jsx)(U,{children:Object(r.jsx)(D,{children:Object(r.jsxs)("div",{className:"modal ",children:[Object(r.jsxs)("div",{className:"add",children:[Object(r.jsx)("input",{placeholder:"\u540d\u79f0",className:"name"}),Object(r.jsx)("input",{placeholder:"\u5730\u5740",className:"url"}),Object(r.jsxs)("div",{className:"btn",children:[Object(r.jsx)("button",{children:"\u6dfb \u52a0"}),Object(r.jsx)("div",{className:"tip",children:"\u683c\u5f0f\u6709\u8bef"})]})]}),Object(r.jsx)(Q,{}),Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAmVBMVEUAAAD///+/v7+ZmZmqqqq2trafn5+qqqqcnJydnZ2bm5uenp6bm5udnZ2cnJycnJyZmZmampqZmZmZmZmampqampqZmZmampqZmZmampqampqZmZmampqZmZmampqampqZmZmampqZmZmampqZmZmampqZmZmampqampqZmZmampqampqZmZmZmZmampqZmZmampqZmZmZmZnnHRS/AAAAMnRSTlMAAQQFBgcIDB8nKSouLzE7io2PlpeYmZqbnJ2jqaqrrK2ur7Gys7S1tre4wt/n6Ozt81408RQAAAD1SURBVEjH7dXHEoIwEIBhQhHsDXsBe2/7/g8nkwlByAbWGwdyNP83jmGDhlGtkq1uUMM33F0H7T9wRYV7g3cb7QEuDtoDvFrK5wsAVPAeoK8Aa8s3zg7az5n61dYGEaKfMezHCXFylH7K8OOzwowo6KU42ql+wvTPzgx+BKGX4mDLfszy58NcCyH6ESuaqFhQ+0isQC6fUaY2EbQ+EdQ+Ph/Y2//1VJH0NCH64ZIoRO8zkyZkH50VRaTmgSAy81MolPksEMj85wr0vuQIzf3Vi1Bz34XwFdB8at4/XNw9daPxQN9vXGC9YdR7mvk3B171Z1i29QV+FkQdC+/b/QAAAABJRU5ErkJggg==",onClick:o,className:"close"})]})})}):null}var U=function(n){var e=n.children;return Object(a.createPortal)(e,Z)},G=(t(61),t(121),t(122),t(154),function(n){var e="";try{var t=new URL(n);e="".concat(t.origin).concat(t.pathname).endsWith("/")?n:"".concat(n,"/")}catch(r){console.log({error:r})}return e});function P(){var n=Object(u.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .modal {\n    position: relative;\n    border-radius: 0.04rem;\n    /* padding: 0.08rem; */\n    min-height: 60vh;\n    min-width: 375px;\n    width: ",";\n    height: ",";\n    overflow: scroll;\n    border: 1px solid rgba(22, 22, 22, 0.6);\n    resize: horizontal;\n    background: #fff;\n    transition: all 0.5s ease-in-out;\n\n    .widget-container {\n      z-index: 998;\n      overflow: hidden;\n      /* 16:9 aspect ratio */\n      /* padding-top: 56.25%; */\n      height: 90vh;\n      position: relative;\n    }\n    @media screen and (max-width: 414px) {\n      width: 5rem;\n      .add {\n        flex-direction: column;\n        align-items: flex-start;\n      }\n    }\n  }\n  .setting {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    bottom: 0.2rem;\n    right: 0.2rem;\n    font-size: 0.1rem;\n    .btn {\n      background: #fff;\n      width: 0.4rem;\n      height: 0.4rem;\n      padding: 0.1rem;\n      border: 1px solid ",";\n      border-radius: 50%;\n      box-shadow: 0 0 8px 2px #484848;\n      &:not(:last-child) {\n        margin-bottom: 0.1rem;\n      }\n      img {\n        width: 100%;\n      }\n    }\n  }\n  .close {\n    cursor: pointer;\n    width: 0.4rem;\n    height: 0.4rem;\n    background: #fff;\n    position: absolute;\n    top: 0.2rem;\n    right: 0.2rem;\n    border-radius: 50%;\n    border: 1px solid #222;\n    box-shadow: 0 0 8px 2px #484848;\n    &:before,\n    &:after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) rotate(45deg);\n      display: block;\n      background-color: #333;\n    }\n    &:before {\n      width: 0.24rem;\n      height: 2px;\n    }\n    &:after {\n      width: 2px;\n      height: 0.24rem;\n    }\n  }\n  .info {\n    position: absolute;\n    left: 0.1rem;\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: 0.2rem;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    .logo {\n      width: 0.5rem;\n      height: 0.5rem;\n      border: 1px solid ",";\n      border-radius: 50%;\n      padding: 0.12rem;\n      margin-bottom: 0.2rem;\n      img {\n        width: 100%;\n      }\n    }\n    .title {\n      writing-mode: vertical-lr;\n      letter-spacing: 0.05rem;\n      text-shadow: 0 0 7px ",";\n    }\n  }\n"]);return P=function(){return n},n}var V=document.querySelector("#modal-root"),H=b.default.section(P(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.themeColor}),(function(n){return n.themeColor}),(function(n){return n.themeColor})),F={mobile:{width:"375px",height:"667px"},pc:{width:"100vw",height:"100vh"}};function _(n){var e=n.app,t=e.url,o=void 0===t?"":t,a=e.title,c=void 0===a?"":a,s=e.icon,l=void 0===s?"":s,u=e.themeColor,b=n.visible,h=void 0!==b&&b,g=n.toggleVisible,f=void 0===g?null:g,j=n.children,p=Object(i.useState)({width:"8.16rem",height:"auto"}),x=Object(m.a)(p,2),v=x[0],O=x[1],A=Object(i.useState)(!1),w=Object(m.a)(A,2),C=w[0],y=w[1],N=Object(i.useRef)(null);console.log({visible:h});var B=function(n){O(F[n]||{})};return h?Object(r.jsx)(M,{children:Object(r.jsxs)(H,Object(d.a)(Object(d.a)({},v),{},{themeColor:u,children:[Object(r.jsx)("div",{className:"modal animate__animated animate__zoomIn",onAnimationEnd:function(){console.log("ani end"),setTimeout((function(){y(!0)}),500)},children:Object(r.jsx)("div",{ref:N,className:"widget-container",children:C&&j})}),Object(r.jsx)("div",{onClick:f,className:"close"}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("img",{src:l||"".concat(G(o),"favicon.ico"),alt:"\u56fe\u6807"})}),Object(r.jsx)("h2",{className:"title",children:c})]}),Object(r.jsxs)("div",{className:"setting",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){B("mobile")},children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACAElEQVR4Xu2bsS4FQRSGv1vTKhQaDYmaRkM8A8ELSCg1VKholCReAOEZhEZDLaHRKBRaajKxm9xcS86Zmbtrc/+tbvGfM3P+mdn5TrK3Q9xzAswCU3Hh2aMegFtgzZu54w0APiNi6gxx1eQSA/vAVp3VRIx1AGxb47wGPAIT1uQN6Z6ASevYXgP++/Yv6zbXZRYWmasMmLe63SfddUVec11m4R8GeHPk9qFqUcxzMgtlwLcDSW7nXvoci6Id4FwV7YCUN67TbKs8aVF0BKw253jhOMeyyrUDUo6ljoB1n+kICIREgkJh9QJqhtQNJlGX88q1ypPmJBCy2iwQEggJhARCAiGBkEAoCTqcV65VnjQngZDVZoGQQEggJBASCAmEBEJJ0OG8cq3ypDkJhKw2C4QEQgIhgZBAKD8IzRUv1xvny7hb3sprcAS4ALoNWALeIoxopQHrwFFPsRvA8aAYEL7wLle/rDkcg5gvz1u5A5aBs57VXgHOB2UHjAGHwGJR8CWwCbwMigFlnaPFj9eIwsuQVh6BhHp/hMqACjfNXa5ZqG7w924w5urKeQRq/dPUOzCUc/Z9yPUBDFvzeo/AHTBtTd6Q7h6YsY7tNWAX2LEmb0i3B4R5mh6vASFpaGJKgDENUqMoAFVoqsxPjAEh+SqwAIybR+qv8Bm4Ak69w3wBNR+OQUVD3m0AAAAASUVORK5CYII=",alt:"\u624b\u673a\u89c6\u56fe"})}),Object(r.jsx)("button",{className:"btn",onClick:function(){B("pc")},children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABSElEQVR4Xu2bzVHCQBiGHwqgAzuQDuBgERz0TCO24gm6QIYZOvBuDY53nTACy5oL7EjW/Z6cs0m+J9/P+2Y2I4Ifo+DxIwAzIDgBSyBLgGdgAdw1mhjvwAvQxbk/0gx4BJaNBp6H9QSscgBbYBYEwA6Y5gA+gHEQAJ+HWNMS+MqCb61B9sYngOStmwGWwDkBe0BjE8Em2FfiTgGnwImAY9Ax6Bg8I6AOUAe0RUAhpBDqafIqQZWgSvBIQCmsFFYKK4VTAnqBtpQwSmGlsFL4d5PXC+gF9AJ6gQOB8GYo/BaZ8Jukwm+T63pB6I2St/Y+VTTdIS2vAGr4BGcG3Lrwa/MeZoAZMByBfz8FOtE0B+6HY7i/8yuwSf8CueR5SnrAGni45GZ/eO4bMLnm+gK4htrPmvAlUMCunqUlJVBPFAVPIoACeE0s/QbNaWhB6t+ijAAAAABJRU5ErkJggg==",alt:"PC\u89c6\u56fe"})}),Object(r.jsx)("button",{className:"btn",onClick:function(){N.current.requestFullscreen()},children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABmElEQVR4Xu2bO04EMRBE3x4CJETCHggyToEggXwhJwLBLUjgQBBBsCcgAlkaJI81H6weNFtMOVvJbrery9We9nrFwttq4evHAJgB3QjcAecBcN6AJ+AqYCMf+gCcAnsBey/ASTm+aws8A8eBifKhayCBEWkHwHvEQDb2HrjIbXUB8DXRZMnMrgGQfGqt+a8A2MUt8BPXagDUM0XJaANQqwFmwISiOIcpb4ECdWuANSBD4DfnAIvgHMo14ZwWQYtgGwFnAWeBkSzwChw1fdJ3+OGEgjSHqXw9W2B/jAHXwKbpdAOk38rtFrhsFvAInI0BoLzYPt8Toz+Bj7KD+iEnHCwDEIZQ3IAZIB7AsPtmQBhCcQNmgHgAw+6bAWEIxQ2YAeIBDLtvBoQhFDdgBvQEsLeAIBrwqoLIYAlJEIDqkthgEVEQgOqi6OBVkiAAvhorguabobGyuLfAEGWsAXoIWAQtgm0EnAWcBTIE/C+xDlH3OcDngHiu/1cPJiJwSD6ZWfyjqRTxRT+bi1BebqyrwnIhm9jhxTPgGx7dakGl+95+AAAAAElFTkSuQmCC",alt:"\u5168\u5c4f"})})]})]}))}):null}var M=function(n){var e=n.children;return Object(a.createPortal)(e,V)},J=(t(129),t(48)),Y=t.n(J),K=t(71);t(134);function L(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0.1rem 0.1rem;\n  padding: 0.2rem;\n  border-radius: 10px;\n  border: 1px solid #e6e6e6;\n  background: #ffffff;\n  box-shadow: 34px -34px 68px #e6e6e6, -34px 34px 68px #ffffff;\n  transition: all 0.2s;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);return L=function(){return n},n}var X=b.default.li(L());function W(){var n=Object(u.a)(["\n  .avatar {\n    width: 0.6rem;\n    height: 0.6rem;\n    border: 1px solid #333;\n    border-radius: 50%;\n    margin: 0 0.1rem 0.2rem 0;\n    overflow: hidden;\n    img {\n      width: 100%;\n    }\n  }\n  .detail {\n    display: flex;\n    flex: 2;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    /* @media screen and (max-width: 414px) {\n          flex-direction: column;\n        } */\n    .call,\n    .popular {\n      display: flex;\n      flex-direction: column;\n    }\n    .call {\n      width: 1.8rem;\n      .name {\n        font-size: 0.2rem;\n        margin-bottom: 0.05rem;\n      }\n      .un {\n        font-size: 0.16rem;\n        color: #666;\n      }\n    }\n    .popular {\n      width: 4rem;\n      /* padding-top: 0.1rem; */\n      .repo_name {\n        font-size: 0.2rem;\n        color: #222;\n        margin-bottom: 0.05rem;\n        .label {\n          font-size: 0.16rem;\n        }\n      }\n      .desc {\n        font-size: 0.12rem;\n        color: #666;\n      }\n    }\n  }\n  .follow {\n    font-size: 0.14rem;\n    color: #222;\n    padding: 0.04rem 0.08rem;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n  }\n"]);return W=function(){return n},n}var $=Object(b.default)(X)(W());function nn(n){var e=n.developer,t=void 0===e?{}:e,i=Object(y.a)(n,["developer"]),o=t.username,a=t.name,c=t.avatar,s=t.url,l=t.repo,m=l.repo_name,u=l.description;return Object(r.jsxs)($,Object(d.a)(Object(d.a)({},i),{},{children:[Object(r.jsx)("div",{className:"avatar",children:Object(r.jsx)("img",{src:c,alt:"\u5f00\u53d1\u8005\u5934\u50cf"})}),Object(r.jsxs)("div",{className:"detail",children:[Object(r.jsxs)("div",{className:"call",children:[Object(r.jsxs)("span",{className:"name",children:[" ",a]}),Object(r.jsxs)("span",{className:"un",children:[" ",o]})]}),Object(r.jsxs)("div",{className:"popular",children:[Object(r.jsxs)("div",{className:"repo_name",children:[Object(r.jsx)("span",{className:"label",children:"\u4e3b\u8981\u4f5c\u54c1\uff1a"}),Object(r.jsx)("a",{href:"https://github.com/".concat(o,"/").concat(m),target:"_blank",children:m}),"\ud83d\udd25"]}),Object(r.jsx)("div",{className:"desc",children:u})]}),Object(r.jsx)("a",{className:"follow",href:s,target:"_blank",children:"\u53bb\u5173\u6ce8"})]})]}))}var en=t.p+"static/media/icon.coder.744cb8ab.png";function tn(){var n=Object(u.a)(["\n  .left {\n    display: flex;\n    flex-direction: column;\n    max-width: 6rem;\n    .title {\n      display: flex;\n      align-items: center;\n      font-size: 0.18rem;\n      margin: 0;\n      .icon {\n        width: 0.16rem;\n        margin-right: 0.04rem;\n      }\n    }\n    .desc {\n      color: #666;\n      font-size: 0.12rem;\n      margin: 0.2rem 0;\n      line-height: 1.2;\n    }\n    .items {\n      display: flex;\n      flex-direction: row;\n      .item {\n        font-size: 0.1rem;\n        display: flex;\n        align-items: center;\n        &:not(:last-child) {\n          margin-right: 0.1rem;\n        }\n        &.lang:before {\n          content: '';\n          margin-right: 0.05rem;\n          display: block;\n          width: 0.1rem;\n          height: 0.1rem;\n          border-radius: 50%;\n          background-color: ",";\n        }\n        &.author {\n          .icon {\n            width: 0.1rem;\n            margin-right: 0.04rem;\n          }\n          .head {\n            border: 1px solid #333;\n            width: 0.15rem;\n            height: 0.15rem;\n            border-radius: 50%;\n            overflow: hidden;\n            img {\n              width: 100%;\n            }\n          }\n        }\n      }\n    }\n  }\n  .right {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: space-between;\n\n    .star {\n      font-size: 0.14rem;\n      color: #222;\n      padding: 0.04rem 0.08rem;\n      border-radius: 5px;\n      border: 1px solid #ccc;\n      margin-bottom: 0.2rem;\n    }\n    .period_stars {\n      font-size: 0.14rem;\n    }\n  }\n"]);return tn=function(){return n},n}var rn=Object(b.default)(X)(tn(),(function(n){return n.langColor}));function on(n){n.isFirst;var e=n.repo,t=Object(y.a)(n,["isFirst","repo"]),o=Object(i.useRef)(null),a=e.url,c=e.author,s=e.name,l=e.languageColor,m=e.language,u=e.forks,b=e.stars,h=e.avatar,g=e.currentPeriodStars,f=e.description;return Object(i.useEffect)((function(){o.current.scrollIntoView()}),[]),Object(r.jsxs)(rn,Object(d.a)(Object(d.a)({ref:o,langColor:"#".concat(l)},t),{},{children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsxs)("h2",{className:"title",children:[Object(r.jsx)("img",{className:"icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB90lEQVRoQ+1ZMVLDMBA8Jc8AOir7NCmAAhrIB6jogYqKAj6A8wHoaYCehhcQGmjSZHx2Q8fAM5JjBPaMk0kiGVtxNEhlYq9ub/d0Y50Ax5dwPH74PwTCMAyEEKcAsA0AB5aU6wPAgJnvkiRJTfYwUgARIwC4MgGs8ZmIiHo6PC2BTqezNhqNPnVANv5vt9vrw+HwaxG2lkAYhtdCiIsMpD8ejx/SNL23EXAQBCetVus4tygz3yRJclmJACK+AsBuBtIjImUna2vKrm9EtFeVAOcARKRVrA5miGi8pzagMmB1BK8wyuz5ZwKZ1PtZ0C91WmspBKSUxMyhIiCESOI4RtcUeC40tD4RdV0jEAkhjlTQzPzonIXqyvYsnKXUgCewIANegWJy5mXD94GmLYSIvg/ME8EXsUkR+z7QdBE7r4DvA01byPeBphVwvog9AW+h3wyUuheyaZt52LrbQE/Asiray2QTBd4BYDO7gTuL4/jWctCl4LUEpJRPzHxYQO0SkRoFrcTSEkDEDQD4KEabF1bxy0lXhCbPzsCobiEFKqXcYuZBvsESCUDlUygPOptSnqspJRHtqN9NslqGrDUFTD6+dRayVTDaGli0cRkFXCGg5roT82Sdh6sSq1OBnxNjeii+6gTyCf7EcVcgoT0GG1Wg6uZ1vP8NWmuzQAJ5Xo8AAAAASUVORK5CYII=",alt:"repo icon"}),Object(r.jsxs)("a",{target:"_blank",href:a,children:[c,"/",s]})]}),Object(r.jsx)("div",{className:"desc",children:f}),Object(r.jsxs)("ul",{className:"items",children:[Object(r.jsx)("li",{className:"item lang",children:m}),Object(r.jsxs)("li",{className:"item",children:["\u2728 ",b]}),Object(r.jsxs)("li",{className:"item",children:["\ud83c\udf74 ",u]}),Object(r.jsxs)("li",{className:"item author",children:[Object(r.jsx)("img",{className:"icon",src:en,alt:"\u5934\u50cf\u56fe\u6807"}),Object(r.jsx)("a",{className:"head",href:"http://github.com/".concat(c),target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:h,alt:"\u4f5c\u8005\u5934\u50cf"})})]})]})]}),Object(r.jsxs)("div",{className:"right",children:[Object(r.jsx)("a",{target:"_blank",className:"star",href:a,children:"\u53bb\u6807\u661f"}),Object(r.jsxs)("div",{className:"period_stars",children:["\u4eca\u65e5\u65b0\u589e\uff1a",g,"\u2728"]})]})]}))}function an(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  font-size: 0.22rem;\n"]);return an=function(){return n},n}var cn=b.default.div(an());function sn(){return Object(r.jsx)(cn,{children:"\u52a0\u8f7d\u4e2d..."})}function ln(){var n=Object(u.a)(["\n  /* position: relative; */\n  background: #fff;\n  overflow: scroll;\n  height: 100%;\n  ul {\n    display: flex;\n    flex-direction: column;\n    font-size: 0.18rem;\n    list-style: none;\n    padding-left: 0;\n  }\n  .list {\n    /* border: 1px solid #ccc; */\n    padding-bottom: 0.4rem;\n    margin: 0;\n  }\n  .tabs {\n    z-index: 999;\n    position: absolute;\n    bottom: 0.1rem;\n    left: 0.1rem;\n    flex-direction: row;\n    border-radius: 8px;\n    overflow: hidden;\n    border: 1px solid #888;\n    margin: 0;\n    .tab {\n      background-color: #fff;\n      cursor: pointer;\n      padding: 0.06rem;\n      transition: all 0.5s;\n      &.active {\n        background-color: #333;\n        a {\n          color: #fff;\n        }\n      }\n      a {\n        color: #000;\n      }\n    }\n  }\n"]);return ln=function(){return n},n}var dn=b.default.div(ln()),mn=function(n){var e=n.data;return Object(r.jsx)("ul",{id:"LIST_TOP",className:"list",children:e.map((function(n,e){return Object(r.jsx)(on,{isFirst:0==e,repo:n,className:"animate__animated animate__flipInX",style:{animationDelay:"".concat(.3*e,"s"),animationDuration:".5s"}},n.url)}))})},un=function(n){var e=n.data,t=void 0===e?[]:e;return Object(r.jsx)("ul",{id:"LIST_TOP",className:"list",children:t.map((function(n,e){return Object(r.jsx)(nn,{className:"animate__animated animate__fadeInUp",style:{animationDelay:"".concat(.3*e,"s"),animationDuration:".5s"},developer:n},n.username)}))})};function bn(){var n=Object(i.useState)([]),e=Object(m.a)(n,2),t=e[0],o=e[1],a=Object(i.useState)([]),c=Object(m.a)(a,2),s=c[0],l=c[1],d=Object(i.useState)(!0),u=Object(m.a)(d,2),b=u[0],h=u[1],g=Object(i.useState)("developers"),f=Object(m.a)(g,2),j=f[0],p=f[1];Object(i.useEffect)((function(){(function(){var n=Object(K.a)(Y.a.mark((function n(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://hackertab.pupubird.com/".concat(j));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,h(!1),"developers"==j?l(t):o(t);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[j]);var x=function(n){console.log({t:n}),p(n),h(!0)};return Object(r.jsxs)(dn,{children:[b&&Object(r.jsx)(sn,{}),Object(r.jsxs)("ul",{className:"tabs",children:[Object(r.jsx)("li",{onClick:x.bind(null,"repositories"),className:"tab ".concat("repositories"==j&&"active"),children:Object(r.jsx)("a",{href:"#LIST_TOP",children:"\u70ed\u95e8\u4ed3\u5e93"})}),Object(r.jsx)("li",{onClick:x.bind(null,"developers"),className:"tab ".concat("developers"==j&&"active"),children:Object(r.jsx)("a",{href:"#LIST_TOP",children:"\u70ed\u95e8\u5f00\u53d1\u8005"})})]}),"developers"==j?Object(r.jsx)(un,{data:s}):Object(r.jsx)(mn,{data:t})]})}var hn="GITHUB_OAUTH_TOKEN",gn=function(){var n=Object(i.useState)(localStorage.getItem(hn)||""),e=Object(m.a)(n,2),t=e[0],r=e[1];return Object(i.useEffect)((function(){var n=function(n){var e=n.newValue,t=n.oldValue,i=n.key;console.log({evt:n}),i==hn&&e!=t&&r(e)};return window.addEventListener("storage",n),function(){window.removeEventListener("storage",n)}}),[]),{token:t,setToken:r}},fn=t(35),jn=t(153);function pn(){var n=Object(u.a)(["\n  font-size: 0.12rem;\n  overflow: scroll;\n  height: 100%;\n  padding: 0.1rem;\n  display: flex;\n  position: relative;\n  .auth {\n    position: absolute;\n    top: 0.1rem;\n    right: 0.1rem;\n    padding: 0.1rem;\n    background: #07d302;\n    color: #fff;\n  }\n  .user {\n    margin: 0.1rem;\n    .username {\n      font-size: 0.2rem;\n    }\n    .head {\n      width: 1rem;\n      border-radius: 50%;\n    }\n  }\n  .list {\n    overflow: scroll;\n    height: 6rem;\n    padding: 0;\n    margin: 0.1rem;\n    list-style: none;\n    .item {\n      font-size: 0.16rem;\n      padding: 0.05rem 0.05rem;\n      a {\n        text-decoration: underline;\n      }\n      .timeago {\n        font-size: 0.12rem;\n        color: #666;\n        padding: 0 0.1rem;\n      }\n    }\n  }\n"]);return pn=function(){return n},n}var xn=b.default.div(pn());function vn(){var n=Object(u.a)(["\n  query GetRepos($viewer: String!) {\n    user(login: $viewer) {\n      repositories(isFork: false, first: 30, orderBy: { field: UPDATED_AT, direction: DESC }) {\n        totalCount\n        nodes {\n          name\n          createdAt\n          description\n          updatedAt\n          url\n        }\n      }\n    }\n  }\n"]);return vn=function(){return n},n}function On(){var n=Object(u.a)(["\n  query {\n    viewer {\n      avatarUrl\n      name\n      login\n    }\n  }\n"]);return On=function(){return n},n}var An="https://github.com/login/oauth/authorize?client_id=".concat("f3505bc46977fad4bb33","&scope=repo&redirect_uri=").concat(encodeURI("https://zerosoul.github.io/one-stop-nav/#oauth/github")),wn=Object(fn.gql)(On()),Cn=Object(fn.gql)(vn());function yn(){var n=gn().token,e=Object(i.useState)(null),t=Object(m.a)(e,2),o=t[0],a=t[1],c=Object(fn.useQuery)(wn),s=c.loading,l=c.data,d=Object(fn.useLazyQuery)(Cn,{variables:{viewer:null===o||void 0===o?void 0:o.login}}),u=Object(m.a)(d,2),b=u[0],h=u[1],g=h.loading,f=h.data;return Object(i.useEffect)((function(){l&&(a(l.viewer),b())}),[l,b]),Object(r.jsxs)(xn,{children:[n?Object(r.jsx)("div",{className:"auth",children:"\u5df2\u6388\u6743"}):Object(r.jsxs)("a",{className:"auth",href:An,target:"_blank",children:["\u53bb\u6388\u6743 ",n]}),!s&&o&&Object(r.jsxs)("div",{className:"user",children:[Object(r.jsx)("h2",{className:"username",children:o.name}),Object(r.jsx)("img",{className:"head",src:o.avatarUrl,alt:"\u7528\u6237\u5934\u50cf"})]}),!g&&f&&Object(r.jsx)("ul",{className:"list",children:f.user.repositories.nodes.map((function(n){var e=n.name,t=n.url,i=n.updatedAt;return Object(r.jsxs)("li",{className:"item",children:[Object(r.jsx)("a",{href:t,target:"_blank",children:e}),Object(r.jsxs)("span",{className:"timeago",children:["\u66f4\u65b0\uff1a",Object(jn.a)(new Date(i),"zh_CN")]})]},e)}))})]})}var Nn=[{title:"Github Dashboard",icon:"./logos/repo.png",themeColor:"#fff",widget:"github-dashboard"},{title:"Github Trending",icon:"./logos/github.trending.png",themeColor:"#24292e",widget:"github-trending"},{title:"\u5fae\u535a",icon:"./logos/wb.png",themeColor:"#FFD902",url:"https://m.weibo.cn/"},{title:"\u6296\u97f3",icon:"./logos/dy.png",themeColor:"#888",url:"//douyin.com"},{title:"\u7231\u5947\u827a",icon:"./logos/iqy.png",themeColor:"#07D302",url:"http://iqiyi.com/"},{title:"\u6dd8\u5b9d",icon:"./logos/tb.png",themeColor:"#Ff9",url:"http://taobao.com/"},{title:"\u77e5\u4e4e",icon:"./logos/zh.png",themeColor:"#1787fc",url:"//zhichu.com"},{title:"\u5fae\u4fe1",icon:"./logos/wx.png",themeColor:"#fff",url:"//weixin.com"},{title:"\u6d4b\u8bd5\u6807\u9898\u8d85\u957f\u7684\u60c5\u51b5\u5566\u5566\u5566\u5566",icon:"https://swiperjs.com/i/favicon.png",themeColor:"#898989",url:"https://swiperjs.com/"}],Bn={"github-trending":Object(r.jsx)(bn,{}),"github-dashboard":Object(r.jsx)(yn,{})};function En(){var n=Object(i.useState)(!1),e=Object(m.a)(n,2),t=e[0],o=e[1],a=Object(i.useState)(!1),c=Object(m.a)(a,2),s=c[0],l=c[1],u=Object(i.useState)({}),b=Object(m.a)(u,2),h=b[0],f=b[1],j=function(){var n=Object(i.useState)(!1),e=Object(m.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)({left:0,top:0}),a=Object(m.a)(o,2),c=a[0],s=a[1],l=function(){r(!1)};return Object(i.useEffect)((function(){return document.onclick=function(){l()},function(){document.onclick=null}}),[]),{menuVisible:t,position:c,showMenu:function(n){s(n),r(!0)},hideMenu:l}}(),x=j.menuVisible,v=j.position,A=j.showMenu,w=function(n){n.preventDefault(),o((function(n){return!n}))},y=function(){l((function(n){return!n}))},N=function(n){n.url?window.open(n.url,"_blank"):(f(n),y())};return Object(r.jsxs)(g,{children:[Object(r.jsx)(O,{}),x&&Object(r.jsx)(C,Object(d.a)({},v)),Object(r.jsx)("div",{className:"search",children:Object(r.jsx)(p,{})}),Object(r.jsxs)("div",{className:"widgets",children:[Nn.map((function(n){return Object(r.jsx)(E,Object(d.a)({onClick:N.bind(null,n),showMenu:A},n),n.title)})),Object(r.jsx)(E,{add:!0,onClick:w}),new Array(4).fill(1).map((function(n,e){return Object(r.jsx)("div",{style:{width:"1.4rem",height:"1.05rem"}},e)}))]}),Object(r.jsx)("button",{onClick:w,className:"add_widget",children:"\u6dfb\u52a0\u5c0f\u7ec4\u4ef6"}),Object(r.jsx)(R,{visible:t,toggleVisible:w}),Object(r.jsx)(_,{app:h,visible:s,toggleVisible:y,children:Bn[h.widget]})]})}function kn(){var n=Object(u.a)(["\n  font-size: 0.14rem;\n"]);return kn=function(){return n},n}var Sn=b.default.section(kn());console.log("env",Object({NODE_ENV:"production",PUBLIC_URL:"/one-stop-nav",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GH_OAUTH:"https://api.yangerxiao.com/oauth/github/portal",REACT_APP_GH_REDIRECT:"https://zerosoul.github.io/one-stop-nav/#oauth/github"}));var zn=function(){var n=Object(K.a)(Y.a.mark((function n(){var e,t,r,i=arguments;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=null,n.prev=2,n.next=5,fetch("https://api.yangerxiao.com/oauth/github/portal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})});case 5:return r=n.sent,n.next=8,r.json();case 8:t=n.sent,console.log({result:t}),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(2),console.log({error:n.t0}),t={code:-1,msg:"\u51fa\u9519\u5566"};case 16:return n.abrupt("return",t);case 17:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(){return n.apply(this,arguments)}}(),qn={github:"Github OAuth"};function In(){var n=Object(l.f)().app,e=Object(i.useState)(!0),t=Object(m.a)(e,2),o=t[0],a=t[1],c=Object(i.useState)(!1),s=Object(m.a)(c,2),d=s[0],u=s[1];Object(i.useEffect)((function(){var n=new URLSearchParams(location.search);zn(n.get("code")).then((function(n){console.log({resp:n}),a(!0);var e=n.code,t=n.data;0==e&&t.access_token&&(localStorage.setItem("GITHUB_OAUTH_TOKEN",t.access_token),u(!0),setTimeout((function(){window.close()}),3e3))}))}),[]);return console.log({app:n}),Object(r.jsxs)(Sn,{children:[o?Object(r.jsx)("div",{children:"\u6388\u6743\u4e2d..."}):Object(r.jsxs)("div",{className:"title",children:[qn[n]," oauth"]}),d&&Object(r.jsxs)("div",{className:"tip",children:["3\u79d2\u540e\u5c06\u5173\u95ed\u9875\u9762",Object(r.jsx)("button",{onClick:function(){window.close()},className:"close_btn",children:"\u7acb\u5373\u5173\u95ed"})]})]})}function Qn(){var n=Object(u.a)(["\n  margin: 0 auto;\n  max-width: 8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Qn=function(){return n},n}var Tn=b.default.section(Qn());function Zn(){return Object(r.jsx)(Tn,{children:"404"})}t(202);var Dn=function(){var n=gn().token,e=new fn.ApolloClient({uri:"https://api.github.com/graphql",cache:new fn.InMemoryCache,headers:{Authorization:"bearer ".concat(n)}});return Object(r.jsx)(fn.ApolloProvider,{client:e,children:Object(r.jsx)(s.a,{basename:"one-stop-nav",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",children:Object(r.jsx)(En,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/oauth/:app",children:Object(r.jsx)(In,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(Zn,{})})]})})})},Rn=t(152);function Un(){var n=Object(u.a)(["\n  ",";\n  *{\n    box-sizing:border-box;\n    outline:none;\n    -webkit-text-size-adjust: none;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n  html{\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  html,body{\n    -webkit-overflow-scrolling: touch;\n    overflow:scroll;\n    margin:0 auto;\n    position: relative;\n    min-height: 100%;\n    min-height: -moz-available;\n    min-height: -webkit-fill-available;\n    min-height: fill-available;\n    font-family: PingFangSC-Regular, PingFang SC;\n  }\n  button{\n    outline:none;\n    border:none;\n    background: none;\n    cursor:pointer;\n  }\n  a{\n    text-decoration:none;\n  }\n  #root{\n    background:#fff;\n    max-width:750px;\n        margin: 0 auto;\n  }\n\n  @media screen and (min-width: 320px){\n      html {\n          font-size: 60px;\n      }\n  }\n  @media screen and (min-width: 375px){\n      html {\n          font-size: 70px;\n      }\n  }\n  @media screen and (min-width: 480px){\n      html {\n          font-size: 80px;\n      }\n  }\n  @media screen and (min-width: 768px){\n      html {\n          font-size: 90px;\n      }\n  }\n  @media screen and (min-width: 1000px){\n      html {\n          font-size: 100px;\n      }\n  }\n"]);return Un=function(){return n},n}var Gn=Object(b.createGlobalStyle)(Un(),Rn.normalize);c.a.render(Object(r.jsxs)(o.a.StrictMode,{children:[Object(r.jsx)(Gn,{}),Object(r.jsx)(Dn,{})]}),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.ab3fff37.chunk.js.map