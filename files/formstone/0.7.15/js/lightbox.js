/*! formstone v0.7.15 [lightbox.js] 2015-08-19 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){S=b.$body,T=a("html, body")}function e(){U&&j()}function f(a){this.on(O.click,a,i)}function g(){k(),this.off(O.namespace)}function h(b,c){b instanceof a&&i.apply(Q,[{data:a.extend(!0,{},{$object:b},L,c||{})}])}function i(c){if(!U){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=g.toLowerCase().split(".").pop().split(/\#|\?/),j=i[0],l=e?e.data(K+"-type"):"",m="image"===l||a.inArray(j,d.extensions)>-1||"data:image"===g.substr(0,10),o=I(g),q="url"===l||!m&&!o&&"http"===g.substr(0,4)&&!h,r="element"===l||!m&&!o&&!q&&"#"===h.substr(0,1),t="undefined"!=typeof f;if(r&&(g=h),!(m||o||q||r||t))return;if(P.killEvent(c),U=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),U.margin*=2,U.type=m?"image":o?"video":"element",m||o){var u=e.data(K+"-gallery");u&&(U.gallery.active=!0,U.gallery.id=u,U.gallery.$items=a("a[data-lightbox-gallery= "+U.gallery.id+"], a[rel= "+U.gallery.id+"]"),U.gallery.index=U.gallery.$items.index(U.$el),U.gallery.total=U.gallery.$items.length-1)}var w="";U.isMobile||(w+='<div class="'+[M.raw.overlay,U.customClass].join(" ")+'"></div>');var x=[M.raw.base,M.raw.loading,M.raw.animating,U.customClass];U.fixed&&x.push(M.raw.fixed),U.isMobile&&x.push(M.raw.mobile),U.isTouch&&x.push(M.raw.touch),q&&x.push(M.raw.iframed),(r||t)&&x.push(M.raw.inline),w+='<div class="'+x.join(" ")+'">',w+='<button type="button" class="'+M.raw.close+'">'+U.labels.close+"</button>",w+='<span class="'+M.raw.loading_icon+'"></span>',w+='<div class="'+M.raw.container+'">',w+='<div class="'+M.raw.content+'">',(m||o)&&(w+='<div class="'+M.raw.tools+'">',w+='<div class="'+M.raw.controls+'">',U.gallery.active&&(w+='<button type="button" class="'+[M.raw.control,M.raw.control_previous].join(" ")+'">'+U.labels.previous+"</button>",w+='<button type="button" class="'+[M.raw.control,M.raw.control_next].join(" ")+'">'+U.labels.next+"</button>"),U.isMobile&&U.isTouch&&(w+='<button type="button" class="'+[M.raw.caption_toggle].join(" ")+'">'+U.labels.captionClosed+"</button>"),w+="</div>",w+='<div class="'+M.raw.meta+'">',U.gallery.active&&(w+='<p class="'+M.raw.position+'"',U.gallery.total<1&&(w+=' style="display: none;"'),w+=">",w+='<span class="'+M.raw.position_current+'">'+(U.gallery.index+1)+"</span> ",w+=U.labels.count,w+=' <span class="'+M.raw.position_total+'">'+(U.gallery.total+1)+"</span>",w+="</p>"),w+='<div class="'+M.raw.caption+'">',w+=U.formatter.call(e,d),w+="</div></div>",w+="</div>"),w+="</div></div></div>",S.append(w),U.$overlay=a(M.overlay),U.$lightbox=a(M.base),U.$close=a(M.close),U.$container=a(M.container),U.$content=a(M.content),U.$tools=a(M.tools),U.$meta=a(M.meta),U.$position=a(M.position),U.$caption=a(M.caption),U.$controlBox=a(M.controls),U.$controls=a(M.control),U.isMobile?(U.paddingVertical=U.$close.outerHeight(),U.paddingHorizontal=0,U.mobilePaddingVertical=parseInt(U.$content.css("paddingTop"),10)+parseInt(U.$content.css("paddingBottom"),10),U.mobilePaddingHorizontal=parseInt(U.$content.css("paddingLeft"),10)+parseInt(U.$content.css("paddingRight"),10)):(U.paddingVertical=parseInt(U.$lightbox.css("paddingTop"),10)+parseInt(U.$lightbox.css("paddingBottom"),10),U.paddingHorizontal=parseInt(U.$lightbox.css("paddingLeft"),10)+parseInt(U.$lightbox.css("paddingRight"),10),U.mobilePaddingVertical=0,U.mobilePaddingHorizontal=0),U.contentHeight=U.$lightbox.outerHeight()-U.paddingVertical,U.contentWidth=U.$lightbox.outerWidth()-U.paddingHorizontal,U.controlHeight=U.$controls.outerHeight(),n(),U.gallery.active&&(U.$lightbox.addClass(N.has_controls),z()),R.on(O.keyDown,A),S.on(O.clickTouchStart,[M.overlay,M.close].join(", "),k),U.gallery.active&&U.$lightbox.on(O.clickTouchStart,M.control,y),U.isMobile&&U.isTouch&&U.$lightbox.on(O.clickTouchStart,M.caption_toggle,p),U.$lightbox.fsTransition({property:"opacity"},function(){m?s(g):o?v(g):q?C(g):r?B(g):t&&D(U.$object)}).addClass(M.raw.open),U.$overlay.addClass(M.raw.open)}}function j(a){"object"!=typeof a&&(U.targetHeight=arguments[0],U.targetWidth=arguments[1]),"element"===U.type?E(U.$content.find("> :first-child")):"image"===U.type?t():"video"===U.type&&w(),m()}function k(a){P.killEvent(a),U&&(U.$lightbox.fsTransition("destroy"),U.$container.fsTransition("destroy"),U.$lightbox.addClass(M.raw.animating).fsTransition({property:"opacity"},function(){U.$lightbox.off(O.namespace),U.$container.off(O.namespace),R.off(O.namespace),S.off(O.namespace),U.$overlay.remove(),U.$lightbox.remove(),U=null,R.trigger(O.close)}),U.$lightbox.removeClass(M.raw.open),U.$overlay.removeClass(M.raw.open),U.isMobile&&T.removeClass(N.lock))}function l(){{var a=o();U.isMobile?0:U.duration}U.isMobile||U.$controls.css({marginTop:(U.contentHeight-U.controlHeight-U.metaHeight)/2}),!U.visible&&U.isMobile&&U.gallery.active&&U.$content.fsTouch({axis:"x",swipe:!0}).on(O.swipe,G),U.$lightbox.fsTransition({property:U.contentHeight!==U.oldContentHeight?"height":"width"},function(){U.$container.fsTransition({property:"opacity"},function(){U.$lightbox.removeClass(M.raw.animating),U.isAnimating=!1}),U.$lightbox.removeClass(M.raw.loading),U.visible=!0,R.trigger(O.open),U.gallery.active&&x()}),U.isMobile||U.$lightbox.css({height:U.contentHeight+U.paddingVertical,width:U.contentWidth+U.paddingHorizontal,top:U.fixed?0:a.top});var b=U.oldContentHeight!==U.contentHeight||U.oldContentWidth!==U.contentWidth;(U.isMobile||!b)&&U.$lightbox.fsTransition("resolve"),U.oldContentHeight=U.contentHeight,U.oldContentWidth=U.contentWidth,U.isMobile&&T.addClass(N.lock)}function m(){if(U.visible&&!U.isMobile){var a=o();U.$controls.css({marginTop:(U.contentHeight-U.controlHeight-U.metaHeight)/2}),U.$lightbox.css({height:U.contentHeight+U.paddingVertical,width:U.contentWidth+U.paddingHorizontal,top:U.fixed?0:a.top})}}function n(){var a=o();U.$lightbox.css({top:U.fixed?0:a.top})}function o(){if(U.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-U.contentWidth-U.paddingHorizontal)/2,top:U.top<=0?(b.windowHeight-U.contentHeight-U.paddingVertical)/2:U.top};return U.fixed!==!0&&(a.top+=R.scrollTop()),a}function p(a){P.killEvent(a),U.captionOpen?q():(U.$lightbox.addClass(M.raw.caption_open).find(M.caption_toggle).text(U.labels.captionOpen),U.captionOpen=!0)}function q(){U.$lightbox.removeClass(M.raw.caption_open).find(M.caption_toggle).text(U.labels.captionClosed),U.captionOpen=!1}function r(){var a=this.attr("title"),b=a!==c&&a?a.replace(/^\s+|\s+$/g,""):!1;return b?'<p class="caption">'+b+"</p>":""}function s(b){U.$image=a("<img>"),U.$image.one(O.load,function(){var a=H(U.$image);U.naturalHeight=a.naturalHeight,U.naturalWidth=a.naturalWidth,U.retina&&(U.naturalHeight/=2,U.naturalWidth/=2),U.$content.prepend(U.$image),""===U.$caption.html()?(U.$caption.hide(),U.$lightbox.removeClass(N.has_caption)):(U.$caption.show(),U.$lightbox.addClass(N.has_caption)),t(),l()}).error(F).attr("src",b).addClass(M.raw.image),(U.$image[0].complete||4===U.$image[0].readyState)&&U.$image.trigger(O.load)}function t(){var a=0;for(U.windowHeight=U.viewportHeight=b.windowHeight-U.mobilePaddingVertical-U.paddingVertical,U.windowWidth=U.viewportWidth=b.windowWidth-U.mobilePaddingHorizontal-U.paddingHorizontal,U.contentHeight=1/0,U.contentWidth=1/0,U.imageMarginTop=0,U.imageMarginLeft=0;U.contentHeight>U.viewportHeight&&2>a;)U.imageHeight=0===a?U.naturalHeight:U.$image.outerHeight(),U.imageWidth=0===a?U.naturalWidth:U.$image.outerWidth(),U.metaHeight=0===a?0:U.metaHeight,U.spacerHeight=0===a?0:U.spacerHeight,0===a&&(U.ratioHorizontal=U.imageHeight/U.imageWidth,U.ratioVertical=U.imageWidth/U.imageHeight,U.isWide=U.imageWidth>U.imageHeight),U.imageHeight<U.minHeight&&(U.minHeight=U.imageHeight),U.imageWidth<U.minWidth&&(U.minWidth=U.imageWidth),U.isMobile?(U.isTouch?(U.$controlBox.css({width:b.windowWidth}),U.spacerHeight=U.$controls.outerHeight(!0)):(U.$tools.css({width:b.windowWidth}),U.spacerHeight=U.$tools.outerHeight(!0)),U.contentHeight=U.viewportHeight,U.contentWidth=U.viewportWidth,u(),U.imageMarginTop=(U.contentHeight-U.targetImageHeight-U.spacerHeight)/2,U.imageMarginLeft=(U.contentWidth-U.targetImageWidth)/2):(0===a&&(U.viewportHeight-=U.margin+U.paddingVertical,U.viewportWidth-=U.margin+U.paddingHorizontal),U.viewportHeight-=U.metaHeight,u(),U.contentHeight=U.targetImageHeight,U.contentWidth=U.targetImageWidth),U.isMobile||U.isTouch||U.$meta.css({width:U.contentWidth}),U.$image.css({height:U.targetImageHeight,width:U.targetImageWidth,marginTop:U.imageMarginTop,marginLeft:U.imageMarginLeft}),U.isMobile||(U.metaHeight=U.$meta.outerHeight(!0),U.contentHeight+=U.metaHeight),a++}function u(){var a=U.isMobile?U.contentHeight-U.spacerHeight:U.viewportHeight,b=U.isMobile?U.contentWidth:U.viewportWidth;U.isWide?(U.targetImageWidth=b,U.targetImageHeight=U.targetImageWidth*U.ratioHorizontal,U.targetImageHeight>a&&(U.targetImageHeight=a,U.targetImageWidth=U.targetImageHeight*U.ratioVertical)):(U.targetImageHeight=a,U.targetImageWidth=U.targetImageHeight*U.ratioVertical,U.targetImageWidth>b&&(U.targetImageWidth=b,U.targetImageHeight=U.targetImageWidth*U.ratioHorizontal)),(U.targetImageWidth>U.imageWidth||U.targetImageHeight>U.imageHeight)&&(U.targetImageHeight=U.imageHeight,U.targetImageWidth=U.imageWidth),(U.targetImageWidth<U.minWidth||U.targetImageHeight<U.minHeight)&&(U.targetImageWidth<U.minWidth?(U.targetImageWidth=U.minWidth,U.targetImageHeight=U.targetImageWidth*U.ratioHorizontal):(U.targetImageHeight=U.minHeight,U.targetImageWidth=U.targetImageHeight*U.ratioVertical))}function v(b){var c=b.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),d=b.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/),e=b.split("?"),f=null!==c?"//www.youtube.com/embed/"+c[1]:"//player.vimeo.com/video/"+d[3];e.length>=2&&(f+="?"+e.slice(1)[0].trim()),U.$videoWrapper=a('<div class="'+M.raw.videoWrapper+'"></div>'),U.$video=a('<iframe class="'+M.raw.video+'" seamless="seamless"></iframe>'),U.$video.attr("src",f).addClass(M.raw.video).prependTo(U.$videoWrapper),U.$content.prepend(U.$videoWrapper),w(),l()}function w(){U.windowHeight=U.viewportHeight=b.windowHeight-U.mobilePaddingVertical-U.paddingVertical,U.windowWidth=U.viewportWidth=b.windowWidth-U.mobilePaddingHorizontal-U.paddingHorizontal,U.videoMarginTop=0,U.videoMarginLeft=0,U.isMobile?(U.isTouch?(U.$controlBox.css({width:b.windowWidth}),U.spacerHeight=U.$controls.outerHeight(!0)):(U.$tools.css({width:b.windowWidth}),U.spacerHeight=U.$tools.outerHeight(!0)),U.viewportHeight-=U.spacerHeight,U.targetVideoWidth=U.viewportWidth,U.targetVideoHeight=U.targetVideoWidth*U.videoRatio,U.targetVideoHeight>U.viewportHeight&&(U.targetVideoHeight=U.viewportHeight,U.targetVideoWidth=U.targetVideoHeight/U.videoRatio),U.videoMarginTop=(U.viewportHeight-U.targetVideoHeight)/2,U.videoMarginLeft=(U.viewportWidth-U.targetVideoWidth)/2):(U.viewportHeight=U.windowHeight-U.margin,U.viewportWidth=U.windowWidth-U.margin,U.targetVideoWidth=U.videoWidth>U.viewportWidth?U.viewportWidth:U.videoWidth,U.targetVideoWidth<U.minWidth&&(U.targetVideoWidth=U.minWidth),U.targetVideoHeight=U.targetVideoWidth*U.videoRatio,U.contentHeight=U.targetVideoHeight,U.contentWidth=U.targetVideoWidth),U.isMobile||U.isTouch||U.$meta.css({width:U.contentWidth}),U.$videoWrapper.css({height:U.targetVideoHeight,width:U.targetVideoWidth,marginTop:U.videoMarginTop,marginLeft:U.videoMarginLeft}),U.isMobile||(U.metaHeight=U.$meta.outerHeight(!0),U.contentHeight=U.targetVideoHeight+U.metaHeight)}function x(){var b="";U.gallery.index>0&&(b=U.gallery.$items.eq(U.gallery.index-1).attr("href"),I(b)||a('<img src="'+b+'">')),U.gallery.index<U.gallery.total&&(b=U.gallery.$items.eq(U.gallery.index+1).attr("href"),I(b)||a('<img src="'+b+'">'))}function y(b){P.killEvent(b);var c=a(b.currentTarget);U.isAnimating||c.hasClass(M.raw.control_disabled)||(U.isAnimating=!0,q(),U.gallery.index+=c.hasClass(M.raw.control_next)?1:-1,U.gallery.index>U.gallery.total&&(U.gallery.index=U.infinite?0:U.gallery.total),U.gallery.index<0&&(U.gallery.index=U.infinite?U.gallery.total:0),U.$lightbox.addClass(M.raw.animating),U.$container.fsTransition({property:"opacity"},function(){"undefined"!=typeof U.$image&&U.$image.remove(),"undefined"!=typeof U.$videoWrapper&&U.$videoWrapper.remove(),U.$el=U.gallery.$items.eq(U.gallery.index),U.$caption.html(U.formatter.call(U.$el,U)),U.$position.find(M.position_current).html(U.gallery.index+1);var a=U.$el.attr("href"),b=I(a);b?v(a):s(a),z()}),U.$lightbox.addClass(M.raw.loading))}function z(){U.$controls.removeClass(M.raw.control_disabled),U.infinite||(0===U.gallery.index&&U.$controls.filter(M.control_previous).addClass(N.control_disabled),U.gallery.index===U.gallery.total&&U.$controls.filter(M.control_next).addClass(N.control_disabled))}function A(a){!U.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&U.$close.trigger(O.click):(P.killEvent(a),U.$controls.filter(37===a.keyCode?M.control_previous:M.control_next).trigger(O.click))}function B(b){var c=a(b).find("> :first-child").clone();D(c)}function C(b){b+=b.indexOf("?")>-1?"&"+U.requestKey+"=true":"?"+U.requestKey+"=true";var c=a('<iframe class="'+M.raw.iframe+'" src="'+b+'"></iframe>');D(c)}function D(a){U.$content.append(a),E(a),l()}function E(a){U.windowHeight=b.windowHeight-U.mobilePaddingVertical-U.paddingVertical,U.windowWidth=b.windowWidth-U.mobilePaddingHorizontal-U.paddingHorizontal,U.objectHeight=a.outerHeight(!0),U.objectWidth=a.outerWidth(!0),U.targetHeight=U.targetHeight||(U.$el?U.$el.data(K+"-height"):null),U.targetWidth=U.targetWidth||(U.$el?U.$el.data(K+"-width"):null),U.maxHeight=U.windowHeight<0?U.minHeight:U.windowHeight,U.isIframe=a.is("iframe"),U.objectMarginTop=0,U.objectMarginLeft=0,U.isMobile||(U.windowHeight-=U.margin,U.windowWidth-=U.margin),U.contentHeight=U.targetHeight?U.targetHeight:U.isIframe||U.isMobile?U.windowHeight:U.objectHeight,U.contentWidth=U.targetWidth?U.targetWidth:U.isIframe||U.isMobile?U.windowWidth:U.objectWidth,(U.isIframe||U.isObject)&&U.isMobile?(U.contentHeight=U.windowHeight,U.contentWidth=U.windowWidth):U.isObject&&(U.contentHeight=U.contentHeight>U.windowHeight?U.windowHeight:U.contentHeight,U.contentWidth=U.contentWidth>U.windowWidth?U.windowWidth:U.contentWidth)}function F(){var b=a('<div class="'+M.raw.error+'"><p>Error Loading Resource</p></div>');U.type="element",U.$tools.remove(),U.$image.off(O.namespace),D(b)}function G(a){U.captionOpen||U.$controls.filter("left"===a.directionX?M.control_next:M.control_previous).trigger(O.click)}function H(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function I(a){return a.indexOf("youtube.com")>-1||a.indexOf("youtu.be")>-1||a.indexOf("vimeo.com")>-1}var J=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:r,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",top:0,videoRatio:.5625,videoWidth:800},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","overlay","close","loading_icon","container","content","image","video","video_wrapper","tools","meta","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption_toggle","caption","caption_open","has_controls","has_caption","iframe","error","lock"],events:{open:"open",close:"close",swipe:"swipe"},methods:{_setup:d,_construct:f,_destruct:g,_resize:e,resize:j},utilities:{_initialize:h,close:k}}),K=J.namespace,L=J.defaults,M=J.classes,N=M.raw,O=J.events,P=J.functions,Q=b.window,R=b.$window,S=null,T=null,U=null}(jQuery,Formstone);