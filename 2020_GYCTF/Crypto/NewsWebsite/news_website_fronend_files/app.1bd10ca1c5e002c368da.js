webpackJsonp([1],{0:function(t,e){},"0m9j":function(t,e){},"5s2W":function(t,e){},CzkY:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o="/api/";function s(){return o}var r={name:"App",data:function(){return{primaryColor:"#409eff",boards:[]}},mounted:function(){this.getBoards()},methods:{getBoards:function(){var t=this;this.$http.get(s()+"/boards",{params:{size:10}}).then(function(e){if(t.boards=t.boards.concat(e.body.content),console.log(e.body.content),e.body.totalPages>1)for(var n=2;n<e.body.totalPages;n++)t.$http.get(s()+"/boards",{params:{size:10,page:n-1}}).then(function(e){t.boards=t.boards.concat(e.body.content)},function(t){})},function(t){})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",{style:{"background-color":t.primaryColor,paddingTop:"10px"},attrs:{height:"95px"}},[n("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[n("el-col",{staticClass:"value",staticStyle:{"font-size":"58px"},attrs:{span:23}},[n("div",{on:{click:function(e){return t.$router.push({name:"Index"})}}},[t._v("新闻网")])]),t._v(" "),n("el-col",{staticClass:"value",staticStyle:{float:"right",position:"absolute",top:"30%"},attrs:{span:7}},t._l(t.boards,function(e,a){return n("div",{key:a,staticStyle:{display:"inline-block","margin-right":"6px"},on:{click:function(n){return t.$router.push({name:"Board",params:{page:1,board_id:e.boardId}})}}},[t._v("\n            "+t._s(e.boardName)+"\n          ")])}),0)],1)],1),t._v(" "),n("el-main",[n("router-view")],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(r,i,!1,function(t){n("qane")},null,null).exports,l=n("/ocq");function d(t){var e=new Date(t),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate(),o=e.getHours()<10?"0"+e.getHours():e.getHours(),s=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),r=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return e.getFullYear()+"-"+n+"-"+a+" "+o+":"+s+":"+r}var m={name:"Index",data:function(){return{boards:[],slideImg:[],link:[]}},mounted:function(){this.getAllImages(),this.getBoards(),this.getAllLinks()},methods:{resolvingDate:function(t){return d(t)},getAllImages:function(){var t=this;this.$http.get(s()+"/news/slide_imgs").then(function(e){console.log(e.body),t.slideImg=e.body},function(t){})},getAllLinks:function(){var t=this;this.$http.get(s()+"/link/").then(function(e){console.log(e.body),t.link=e.body},function(t){})},getBoards:function(){var t=this;this.$http.get(s()+"/boards",{params:{size:10}}).then(function(e){if(t.boards=t.boards.concat(e.body.content),console.log(e.body.content),e.body.totalPages>1)for(var n=function(e){t.$http.get(s()+"/boards",{params:{size:10,page:e-1}}).then(function(n){t.boards=t.boards.concat(n.body.content),e===n.body.totalPages-1&&t.getAllLatestNews()},function(t){})},a=2;a<e.body.totalPages;a++)n(a);else t.getAllLatestNews()},function(t){})},getAllLatestNews:function(){for(var t=this,e=function(e){1===t.boards[e].isShowLatestNews&&t.$http.get(s()+"/news/boards",{params:{size:10,page:0,board_id:t.boards[e].boardId}}).then(function(n){t.boards[e].latestNews=n.body.content,t.boards[e].isShowLatestNews=0,t.boards[e].isShowLatestNews=1},function(t){});for(var n=function(n){1===t.boards[e].boardsByBoardId[n].isShowLatestNews&&t.$http.get(s()+"/news/boards",{params:{size:10,page:0,board_id:t.boards[e].boardsByBoardId[n].boardId}}).then(function(a){t.boards[e].boardsByBoardId[n].latestNews=a.body.content,t.boards[e].boardsByBoardId[n].isShowLatestNews=0,t.boards[e].boardsByBoardId[n].isShowLatestNews=1},function(t){})},a=0;a<t.boards[e].boardsByBoardId.length;a++)n(a)},n=0;n<this.boards.length;n++)e(n)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card"},[n("el-carousel",{attrs:{interval:5e3,type:"card",height:"600px"}},t._l(t.slideImg,function(e,a){return n("el-carousel-item",{key:a},[n("el-image",{attrs:{src:e.newsHeadImgUrl,fit:"fill"},on:{click:function(n){return t.$router.push({name:"News",params:{news_id:e.newsId}})}}})],1)}),1)],1),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("板块列表")])]),t._v(" "),t._l(this.boards,function(e,a){return null===e.parentBoardId&&1===e.isShowChildBoard?n("div",{key:a},[n("p",[n("b",{staticStyle:{color:"#66ccff"},on:{click:function(n){return t.$router.push({name:"Board",params:{page:1,board_id:e.boardId}})}}},[t._v(t._s(e.boardName))])]),e.boardsByBoardId.length>0?n("div",t._l(e.boardsByBoardId,function(e,a){return n("div",{key:a,staticStyle:{display:"inline-block","margin-right":"6px",color:"#66ccff"},on:{click:function(n){return t.$router.push({name:"Board",params:{page:1,board_id:e.boardId}})}}},[t._v("\n          "+t._s(e.boardName)+"\n        ")])}),0):t._e()]):t._e()})],2),t._v(" "),t._l(this.boards,function(e,a){return n("div",{key:a},[1===e.isShowLatestNews?n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(e.boardName))])]),t._v(" "),void 0!==e.latestNews?n("div",t._l(e.latestNews,function(a,o){return n("div",{key:o,staticStyle:{color:"#66ccff"},on:{click:function(e){return t.$router.push({name:"News",params:{news_id:a.newsId}})}}},[n("span",[t._v(t._s(a.newsTitle))]),t._v(" "),n("span",{staticStyle:{float:"right"}},[t._v(t._s(t.resolvingDate(a.newsCreateTime)))]),t._v(" "),o!==e.latestNews.length-1?n("el-divider"):t._e()],1)}),0):t._e()]):t._e(),t._v(" "),t._l(e.boardsByBoardId,function(e,a){return 1===e.isShowLatestNews?n("div",{key:a},[n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(e.boardName))])]),t._v(" "),void 0!==e.latestNews?n("div",t._l(e.latestNews,function(a,o){return n("div",{key:o,staticStyle:{color:"#66ccff"},on:{click:function(e){return t.$router.push({name:"News",params:{news_id:a.newsId}})}}},[n("span",[t._v(t._s(a.newsTitle))]),t._v(" "),n("span",{staticStyle:{float:"right"}},[t._v(t._s(t.resolvingDate(a.newsCreateTime)))]),t._v(" "),o!==e.latestNews.length-1?n("el-divider"):t._e()],1)}),0):t._e()])],1):t._e()})],2)}),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("友情链接")])]),t._v(" "),t._l(t.link,function(e,a){return n("div",{key:"link"+a,staticStyle:{display:"inline-block","margin-right":"6px",color:"#66ccff"}},[n("a",{attrs:{href:e.linkUrl,target:"_blank"}},[t._v(t._s(e.linkTitle))])])})],2)],2)},staticRenderFns:[]};var _=n("VU/8")(m,u,!1,function(t){n("0m9j")},"data-v-a28ebf04",null).exports,p={name:"Board",data:function(){return{latestNews:"",page:this.$route.params.page,board_id:this.$route.params.board_id,board_detail:{boardName:""}}},mounted:function(){this.getAllLatestNews(),this.getBoards()},beforeRouteUpdate:function(t,e,n){this.page=t.params.page,this.board_id=t.params.board_id,this.getAllLatestNews(),this.getBoards(),n()},methods:{resolvingDate:function(t){return d(t)},handleCurrentChange:function(t){this.$router.push({name:"Board",params:{page:t,board_id:this.board_id}})},getAllLatestNews:function(){var t=this;this.$http.get(s()+"/news/boards",{params:{size:10,page:this.page-1,board_id:this.board_id}}).then(function(e){t.latestNews=e.body,console.log(t.latestNews)},function(t){})},getBoards:function(){var t=this;this.$http.get(s()+"/boards/"+this.board_id).then(function(e){t.board_detail=e.body,console.log(t.board_detail)},function(t){})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[""!==t.board_detail.boardName?[t.board_detail.boardsByBoardId.length>0?[n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("子板块列表")])]),t._v(" "),n("b",{staticStyle:{color:"#66ccff"},on:{click:function(e){return t.$router.push({name:"Board",params:{page:1,board_id:t.board_detail.boardId}})}}},[t._v(t._s(t.board_detail.boardName))]),t._v(" "),n("div",[n("p"),t._l(t.board_detail.boardsByBoardId,function(e,a){return n("div",{key:a,staticStyle:{display:"inline-block","margin-right":"6px",color:"#66ccff"},on:{click:function(n){return t.$router.push({name:"Board",params:{page:1,board_id:e.boardId}})}}},[t._v("\n            "+t._s(e.boardName)+"\n          ")])})],2)])]:t._e()]:t._e(),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.board_detail.boardName)+" 新闻列表")])]),t._v(" "),""!==t.latestNews?[t._l(t.latestNews.content,function(e,a){return n("div",{key:a,staticStyle:{color:"#66ccff"},on:{click:function(n){return t.$router.push({name:"News",params:{news_id:e.newsId}})}}},[n("span",[t._v(t._s(e.newsTitle))]),t._v(" "),n("span",{staticStyle:{float:"right"}},[t._v(t._s(t.resolvingDate(e.newsCreateTime)))]),t._v(" "),a!==t.latestNews.content.length-1?n("el-divider"):t._e()],1)}),t._v(" "),n("div",{staticClass:"block",staticStyle:{"text-align":"center"}},[n("el-pagination",{attrs:{layout:"prev, pager, next",total:t.latestNews.totalElements},on:{"current-change":t.handleCurrentChange}})],1)]:t._e()],2)],2)},staticRenderFns:[]};var h=n("VU/8")(p,f,!1,function(t){n("5s2W")},"data-v-583d2989",null).exports,v={name:"News",data:function(){return{news:"",comment:"",news_id:this.$route.params.news_id,comment_key:{},comment_submit:{commentEmail:"",commentContent:"",commentNickname:""},currentPage:0}},mounted:function(){this.getAllLatestNews(),this.getAllLatestComments()},methods:{modifyComment:function(t,e){var n=this;this.$prompt("请输入新的评论内容","修改",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:e}).then(function(e){var a=e.value;n.$http.put(s()+"/comment/"+t,{commentContent:a},{params:{key:n.comment_key[t]}}).then(function(t){t.ok?n.$alert("编辑成功！","成功",{confirmButtonText:"确定"}):n.$alert("编辑失败！","失败",{confirmButtonText:"确定"}),n.getAllLatestComments(n.currentPage)},function(t){})}).catch(function(){})},deleteComment:function(t){var e=this;this.$http.delete(s()+"/comment/"+t,{params:{key:this.comment_key[t]}}).then(function(t){t.ok?e.$alert("删除成功！","成功",{confirmButtonText:"确定"}):e.$alert("删除失败！","失败",{confirmButtonText:"确定"}),e.getAllLatestComments(e.currentPage)},function(t){})},resolvingDate:function(t){return d(t)},handleCurrentChange:function(t){this.getAllLatestComments(t)},getAllLatestNews:function(){var t=this;this.$http.get(s()+"/news/content/"+this.news_id).then(function(e){t.news=e.body,console.log(t.news)},function(t){})},getAllLatestComments:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.currentPage=e,this.$http.get(s()+"/comment/news/"+this.news_id,{params:{size:10,page:e,sort:"commentId,desc"}}).then(function(e){t.comment=e.body,console.log(t.comment)},function(t){})},submitComments:function(){var t=this;this.$http.post(s()+"/comment/news/"+this.news_id,this.comment_submit).then(function(e){e.ok?(t.comment_key[e.body.commentId]=e.body.commentKey,t.comment_submit={commentEmail:"",commentContent:"",commentNickname:""},t.getAllLatestComments(),t.$alert("评论成功！","成功",{confirmButtonText:"确定"})):t.$alert("评论失败！","失败",{confirmButtonText:"确定"})},function(t){})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[""!==t.news?n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.news.newsTitle))]),t._v(" "),n("div",{staticStyle:{float:"right",padding:"3px 0",color:"#66ccff"},attrs:{type:"text"}},[n("i",{staticClass:"el-icon-user"},[t._v("作者："+t._s(t.news.newsAuthorName))]),t._v(" "),n("i",{staticClass:"el-icon-time"},[t._v("发布时间："+t._s(t.resolvingDate(t.news.newsCreateTime)))]),t._v(" "),n("i",{staticClass:"el-icon-mouse"},[t._v("点击数："+t._s(t.news.newsClickCount))])])]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("el-image",{staticStyle:{width:"50%"},attrs:{src:t.news.newsHeadImgUrl}})],1),t._v(" "),n("el-divider"),t._v(" "),n("div",[t._v("\n      "+t._s(t.news.newsContent)+"\n    ")])],1):t._e(),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("发表评论")])]),t._v(" "),n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"昵称"}},[n("el-input",{attrs:{required:""},model:{value:t.comment_submit.commentNickname,callback:function(e){t.$set(t.comment_submit,"commentNickname",e)},expression:"comment_submit.commentNickname"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"电子邮箱"}},[n("el-input",{attrs:{type:"email",required:""},model:{value:t.comment_submit.commentEmail,callback:function(e){t.$set(t.comment_submit,"commentEmail",e)},expression:"comment_submit.commentEmail"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"评论"}},[n("el-input",{attrs:{type:"textarea",required:""},model:{value:t.comment_submit.commentContent,callback:function(e){t.$set(t.comment_submit,"commentContent",e)},expression:"comment_submit.commentContent"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.submitComments}},[t._v("提交")])],1)],1)],1),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("评论")])]),t._v(" "),""!==t.comment?[t._l(t.comment.content,function(e,a){return n("div",{key:a},[n("p",[n("b",[t._v(t._s(e.commentNickname)+" 于 "+t._s(t.resolvingDate(e.commentTime))+" 说：")])]),t._v("\n        "+t._s(e.commentContent)+"\n        "),n("p"),t._v(" "),void 0!==t.comment_key[e.commentId]?n("el-button",{on:{click:function(n){return t.modifyComment(e.commentId,e.commentContent)}}},[t._v("修改")]):t._e(),t._v(" "),void 0!==t.comment_key[e.commentId]?n("el-button",{on:{click:function(n){return t.deleteComment(e.commentId)}}},[t._v("删除")]):t._e(),t._v(" "),a!==t.comment.content.length-1?n("el-divider"):t._e()],1)}),t._v(" "),n("div",{staticClass:"block",staticStyle:{"text-align":"center"}},[n("el-pagination",{attrs:{layout:"prev, pager, next",total:t.comment.totalElements},on:{"current-change":t.handleCurrentChange}})],1)]:t._e()],2)],1)},staticRenderFns:[]};var g=n("VU/8")(v,b,!1,function(t){n("CzkY")},"data-v-d8c7e094",null).exports;a.default.use(l.a);var y=new l.a({routes:[{path:"/",name:"Index",component:_},{path:"/board/:board_id/:page",name:"Board",component:h},{path:"/news/:news_id",name:"News",component:g}]}),w=n("NYxO"),C=n("zL8q"),k=n.n(C),x=(n("tvR6"),n("8+8L"));a.default.config.productionTip=!1,a.default.use(w.a),a.default.use(k.a),a.default.use(x.a),new a.default({el:"#app",router:y,components:{App:c},template:"<App/>"})},qane:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1bd10ca1c5e002c368da.js.map