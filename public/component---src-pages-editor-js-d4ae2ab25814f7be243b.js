(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(t,o,e){"use strict";e.r(o);var n=e(7),s=e.n(n),r=(e(71),e(73),e(72),e(0)),a=e.n(r),i=e(308),c=e(152),l=e.n(c),u=e(591),d=e.n(u),y=function(t){function o(o){var e;return(e=t.call(this,o)||this).state={story:null},e}s()(o,t);var e=o.prototype;return e.componentDidMount=function(){var t,o,e,n,s=this;t=function(){s.initStoryblokEvents()},o=d.a.plugins.filter(function(t){return"gatsby-source-storyblok"===t.resolve}),e=o.length>0?o[0]:{},(n=document.createElement("script")).type="text/javascript",n.src="//app.storyblok.com/f/storyblok-latest.js?t="+e.options.accessToken,n.onload=t,document.getElementsByTagName("head")[0].appendChild(n)},e.loadStory=function(t){var o=this;window.storyblok.get({slug:t.storyId,version:"draft"},function(t){o.setState({story:t.story})})},e.initStoryblokEvents=function(){var t,o,e,n=this;this.loadStory({storyId:(t="path",o="",e=[],window.location.search.substr(1).split("&").forEach(function(n){(e=n.split("="))[0]===t&&(o=decodeURIComponent(e[1]))}),o)});var s=window.storyblok;s.on(["change","published"],function(t){n.loadStory(t)}),s.on("input",function(t){n.state.story&&t.story.id===n.state.story.id&&(t.story.content=s.addComments(t.story.content,t.story.id),n.setState({story:t.story}))}),s.pingEditor(function(){s.inEditor&&s.enterEditmode()})},e.render=function(){if(null==this.state.story)return a.a.createElement("div",null);var t=this.state.story.content;return a.a.createElement(l.a,{content:t},a.a.createElement("div",null,i.a[t.component]?a.a.createElement(i.a[t.component],{key:t._uid,blok:t}):"Component "+t.component+" not created yet"))},o}(a.a.Component);o.default=y},591:function(t,o,e){(function(o){t.exports={siteMetadata:{title:"Gatsby Default Starter"},plugins:[{resolve:"gatsby-source-storyblok",options:{accessToken:"YsaJ73fHrmMvTdVFGhb3yQtt",homeSlug:"home",version:"published"}},"gatsby-plugin-react-helmet","gatsby-plugin-sass",{resolve:"gatsby-source-filesystem",options:{name:"images",path:o+"/src/images"}}]}}).call(this,"/")}}]);
//# sourceMappingURL=component---src-pages-editor-js-d4ae2ab25814f7be243b.js.map