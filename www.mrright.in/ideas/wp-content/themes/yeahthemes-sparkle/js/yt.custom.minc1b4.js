if("undefined"==typeof wpthms)var wpthms={};!function(e){"use strict";"undefined"!=typeof wpthms&&(wpthms.RitaMagazine={std:{},init:function(){function t(){e("div[data-lazy-src]").on("scrollin",{distance:200},function(){a(this)})}function a(t){var a=jQuery(t),n=a.attr("data-lazy-src");n&&"undefined"!=typeof n&&e('<img src="'+n+'"/>').on("load",function(){var t=e(this);a.css("background-image","url("+n+")"),a.unbind("scrollin").removeAttr("data-lazy-src").attr("data-lazy-loaded","true"),t.remove()})}function n(){e('[data-action="load-more-post"][data-role="milestone"]:not(.all-loaded)').length&&e('[data-action="load-more-post"][data-role="milestone"]:not(.all-loaded)').each(wpthms.General.ux.infiniteScrollPostThumbnailWidget),e("body").hasClass("scroll-fix-header")&&i.ux.stickyHeader()}var i=this,s=wpthms.Framework;this._vars=wpthms.themeVars;var o=wpthms.Framework.helpers.isTouch()?"touch":"mouseover";e(window).on("load",function(){s.ui.socialSharesCount(".shares-counter"),e(".yt-sliding-tabs-header").length&&e(".yt-sliding-tabs-header").each(function(){var t=e(this);wpthms.General.ux.hoverScrollHorizontalHelperRestoreCurrentItem(t,e("> ul",t)),s.helpers.isTouch()||wpthms.General.ux.hoverScrollHorizontal(t,e("> ul",t))}),e("#yt-page-loader").length||e("<span/>",{id:"yt-main-spinner","class":"yt-preloader yt-ajax-loader"}).appendTo("body")}).on("resize",function(){"undefined"!=typeof e&&clearTimeout(e);var e=setTimeout(function(){},100)}).on("srollStop",function(){}),e(document).on("openModal",function(t,a){"search"==a&&e(".site-modal-search input.search-field").focus(),t.preventDefault()}).on("click",".social-share-buttons span",s.ui.socialSharing).on("click",".yt-font-size-changer span",wpthms.General.ux.fontSizeChanger).on("click",".yt-tabby-tabs-header ul li",s.ui.tabbyTabs).on("click",".yt-sliding-tabs-header-trigger",i.ui.toggleSlidingCat).on("click",".site-banner",s.ux.tapToTop).on("click",".yt-ajax-posts-by-cat .yt-sliding-tabs-header ul li a",i.ux.widgetAjaxPostsByCategory).on("click",'[data-action="open-modal"]',wpthms.General.ux.openModal).on("click",'[data-action="close-modal"]',wpthms.General.ux.closeModal).on("input",'.site-modal-search[data-request="ajax"] input.search-field',i.ux.modalAjaxSearch).on("submit","form.yt-mailchimp-subscribe-form",s.widgets.mailchimpSubscription).ready(function(){if(wpthms.Framework.bootstrap.compat(),e("#primary, #secondary, #tertiary").fitVids(),i.ui.articleMetaInfo(),t(),i.ux.mainNavigation(),e(".yeahslider:not(.initialized)").length&&e(".yeahslider:not(.initialized)").each(function(t,a){e(this).is('[data-init="false"]')||wpthms.General.ux.yeahSlider(e(this))}),e("body").hasClass("phone")){e(".site-hero").removeClass("yt-loading").find(".hero-brick").removeClass("visibility-hidden");var a=e(".site-hero");if(a.hasClass("carousel")&&a.find(".yeahslider").length){var n=a.find(".yeahslider");wpthms.General.ux.yeahSlider(n)}}else{var a=e(".site-hero"),s=void 0!==a.data("effect")?a.data("effect"):"flipIn";"undefined"!=typeof imagesLoaded&&"function"==typeof imagesLoaded&&a.imagesLoaded(function(){if(a.removeClass("yt-loading"),"none"!=s&&wpthms.General.ux.animateSequence(".site-hero",".hero-brick",s,100,!1),a.hasClass("carousel")&&a.find(".yeahslider").length){var e=a.find(".yeahslider");wpthms.General.ux.yeahSlider(e)}})}if(e(".yt-vc-accordion").length&&wpthms.Framework.bootstrap.accordion(),e.fn.sharrre&&e(".sharrre-counter").each(function(){e(this)}),!e("#mobile-main-menu").length){var o="",r=e(".top-navigation ul.menu").clone(!0),l=e(".main-navigation ul.menu").clone(!0),d='<a href="javascript:void(0)" class="main-menu-toggle hidden-md hidden-lg"><span class="bar1"></span><span class="bar2"></span><span class="bar3"></span></a>';e(".site-top-menu-right .site-social-networks").length?o=e(".site-top-menu-right .site-social-networks").html():e(".main-navigation .site-social-networks").length&&(o=e(".main-navigation .site-social-networks").html()),l.find(".site-social-networks").remove(),r.find(".site-social-networks").remove(),l.find(".menu-item-logo").remove(),o&&(o='<div class="site-social-networks gray-2-secondary">'+o+"</div>"),r.attr("class","menu").attr("id","mobile-top-menu"),l.attr("class","menu").attr("id","mobile-main-menu"),e('<div id="mobile-menu-nav-wrapper" class="mobile-navigation hidden-md hidden-lg"></div>').insertAfter(".inner-wrapper");var c=e("#mobile-menu-nav-wrapper");c.append(o).append(r).append(l).append(d)}}).on("click",".main-menu-toggle",function(t){t.preventDefault();var a=e("body");"undefined"==typeof a.data("mobile-menu")||"closed"==a.data("mobile-menu")?(a.data("mobile-menu","opening"),e("body").addClass("active-mobile-menu")):(a.data("mobile-menu","closed"),e("body").removeClass("active-mobile-menu"))}).on("click","#mobile-menu-nav-wrapper .menu li:has(ul)",function(t){var a=e(this);a.hasClass("active")||(a.siblings(".active:has(ul)").length&&a.siblings(".active").find(" > ul").slideUp(function(){e(this).closest("li").removeClass("active")}),e("> ul",a).slideToggle(function(){a.toggleClass("active")}),t.preventDefault())}).on("touchstart click",".active-mobile-menu .inner-wrapper",function(t){if(e("body").hasClass("active-mobile-menu")&&"opening"==e("body").data("mobile-menu")){var a=t.target,n=document.querySelector(".inner-wrapper"),i=e("body");a==n&&(i.removeClass("active-mobile-menu"),i.data("mobile-menu","closed"))}}).on("post-load",function(){e(".yeahslider:not(.initialized)").length&&e(".yeahslider:not(.initialized)").each(function(t,a){wpthms.General.ux.yeahSlider(e(this))}),wpthms.Framework.bootstrap.compat(),i.ui.articleMetaInfo(),e("article.format-video").length&&e("article.format-video").fitVids()}).on("touch"==o?"click":"mouseover",".main-navigation .sub-category-menu .sub-menu li",i.ux.mainNavigationSubmenu),e("body").on("post-load",t);var r=null;e(window).on("scroll",function(e){r||(r=setTimeout(function(){n(),r=null},250))})},setup:function(){},ui:{toggleSlidingCat:function(){var t=e(this),a=t.closest(".yt-ajax-posts-by-cat"),n=t.siblings(".yt-ajax-posts-by-cat-header"),i="expanded-header",s="collapsed-header";n.hide().fadeIn(),"expand"===t.data("action")?(a.removeClass(s).addClass(i),t.data("action","collapse")):(a.removeClass(i).addClass(s),t.data("action","expand"))},articleMetaInfo:function(){e('script[data-role="header .entry-meta"]').each(function(){var t=e(this),a=t.closest("article");if("undefined"==typeof a.data("appended")){var n=t.html(),i=e(".entry-header .entry-meta",a);n=n.replace("//<![CDATA[",""),n=n.replace("/*<![CDATA[*/",""),n=n.replace("<![CDATA[",""),n=n.replace("//]]>",""),n=n.replace("/*]]>*/",""),n=n.replace("]]>",""),i.html(n).show(),a.data("appended",!0)}})}},ux:{stickyHeader:function(){var t=e(".site-banner");if(void 0==e("body").data("sHHO")){var a=t.offset().top+t.outerHeight();e("body").data("sHHO",a)}e(window).scrollTop()>=e("body").data("sHHO")?(e("body").addClass("sticky-header"),(void 0==e("body").data("bannerH")||0==e("body").data("bannerH"))&&e("body").data("bannerH",e(".site-banner").outerHeight()),e(".site-banner").css("height",e("body").data("bannerH")),(void 0==e("body").data("sHP")||0==e("body").data("sHP"))&&(e('<div class="main-navigation-placeholder"></div>').css({height:t.outerHeight(),clear:"both"}).insertAfter(".site-banner"),e("body").data("sHP",!0)),e("body").hasClass("admin-bar")&&t.css("top",e("body").offset().top)):(e("body").removeClass("sticky-header"),t.removeAttr("style"),e(".site-banner").css("height",""),e(".main-navigation-placeholder").remove(),e("body").data("sHP",!1))},modalAjaxSearch:function(t){if(wpthms.Framework._eventRunning)return void t.preventDefault();var a=e(this),n=a.closest("form"),i=n.siblings(".site-modal-search-result");a.data("timer")&&clearTimeout(a.data("timer"));var s=setTimeout(function(){a.val()&&(wpthms.Framework._eventRunning=!0,i.addClass("yt-loading").removeClass("hidden"),e.ajax({type:"GET",url:wpthms._vars.ajaxurl,data:{action:"yt-site-ajax-search",s:a.val()},success:function(e){i.removeClass("yt-loading").html(e),wpthms.Framework._eventRunning=!1}}))},1e3);a.data("timer",s)},widgetAjaxPostsByCategory:function(t){if(wpthms.Framework._eventRunning)return void t.preventDefault();var a,n=e(this),i=n.closest(".yt-ajax-posts-by-cat[data-settings]"),s=n.closest("li[data-id]"),o=s.index(),r=0,l=n.closest(".yt-sliding-tabs-header"),d=l.siblings(".yt-sliding-tabs-content");if(i.length){if(wpthms.Framework._eventRunning=!0,d.find('>*[data-index="'+o+'"]').length)return wpthms.Framework._eventRunning=!1,void t.preventDefault();a=i.data("settings"),t.preventDefault(),s.length&&(r=s.data("id")),e("<div/>",{"class":"yt-loading"}).prependTo(d).show(100),e.ajax({type:"GET",url:wpthms._vars.ajaxurl,data:{action:"yt-ajax-posts-by-category",nonce:wpthms.themeVars.widgetAjaxPostsByCatNonce,number:a.number,order:a.order,orderby:a.orderby,cats:r,index:o},success:function(t){d.find(".yt-loading").hide(100,function(){e(this).remove()}),d.find("> *.active").fadeOut(300,function(){s.addClass("active").siblings("li").removeClass("active"),e(this).removeClass("active"),e(t).hide().appendTo(d).fadeIn()}),wpthms.Framework._eventRunning=!1}})}else window.location.href=e(this).attr("href")},mobileNavigation:function(){},mainNavigation:function(){var t,a=(e(this),wpthms.Framework.helpers.isTouch()?"touch":"mouseover"),n=200,i=300;e(".main-navigation").on("mouseover"==a?"mouseenter":"click","li",function(i){var s=e(this);"touch"!=a||s.hasClass("active")||(s.hasClass("default-dropdown")||s.hasClass("mega-menu-dropdown"))&&i.preventDefault(),t=setTimeout(function(){if(s.addClass("active"),s.hasClass("default-dropdown"))e("> ul",s).show();else if(s.hasClass("menu-item-has-children")&&s.hasClass("mega-menu-dropdown")){var t=e("> .mega-menu-container",s),a=void 0!==s.data("cats")&&s.data("cats")?s.data("cats"):!1,n=s.data("atts"),i="yt-loading",o="yt-loaded";if(wpthms.themeVars.megaMenu.ajax&&!t.hasClass(o)&&a){if(t.addClass(i).show(),!a)return;if(wpthms.Framework._eventRunning)return;wpthms.Framework._eventRunning=!0,e.ajax({type:"POST",url:wpthms._vars.ajaxurl,data:{nonce:wpthms.themeVars.megaMenu.nonce,action:"yt-site-mega-menu",data_cats:a,atts:n},success:function(a){t.removeClass(i).addClass(o);var n=t.find("> *");n.hide().append(a.html),n.find(".post-list").children(":not(.child-cat)").addClass(wpthms.themeVars.megaMenu.effect?"animated "+wpthms.themeVars.megaMenu.effect:""),n.show(0,function(){setTimeout(function(){t.find(".post-list").children(":not(.child-cat)").removeClass(wpthms.themeVars.megaMenu.effect?"animated "+wpthms.themeVars.megaMenu.effect:"")},1e3)}),e(document.body).trigger("post-load",a),wpthms.Framework._eventRunning=!1}})}else t.show()}},n)}).on("mouseleave","li",function(a){var n=e(this);clearTimeout(t),n.hasClass("active")&&setTimeout(function(){if(n.removeClass("active"),n.hasClass("default-dropdown"))setTimeout(function(){e("> ul",n).hide()},300);else if(n.hasClass("mega-menu-dropdown")){var t=e("> .mega-menu-container",n),a=e(".sub-category-menu",t);setTimeout(function(){t.hide(),t.find(".post-list").children(":not(.child-cat)").removeClass("animated "+(wpthms.themeVars.megaMenu.effect?wpthms.themeVars.megaMenu.effect:"fadeIn")),a.length&&(a.find('[data-cat="all"]').addClass("current").siblings().removeClass("current"),a.siblings('[data-filter="all"]').show(),a.siblings(':not([data-filter="all"])').hide())},300)}},i)})},mainNavigationSubmenu:function(t){var a=e(this),n=a.data("cat"),i="yt-loading",s=a.closest(".sub-category-menu"),o=a.closest(".mega-menu-container"),r=a.closest(".post-list");if(a.hasClass("current")||t.preventDefault(),a.addClass("current").siblings().removeClass("current"),a.hasClass("loaded"))s.siblings().hide(),s.siblings('[data-filter="'+n+'"]').show();else{if(wpthms.Framework._eventRunning)return;wpthms.Framework._eventRunning=!0,o.addClass(i),e.ajax({type:"GET",url:wpthms._vars.ajaxurl,data:{nonce:wpthms.themeVars.megaMenu.nonce,action:"yt-site-sub-mega-menu",data_cat:n},success:function(e){a.addClass("loaded"),o.removeClass(i);o.find("> *");r.append(e),e&&(s.siblings().hide(),s.siblings('[data-filter="'+n+'"]').show()),wpthms.Framework._eventRunning=!1}})}}}},wpthms.General={ux:{infiniteScrollPostThumbnailWidget:function(){var t=e(this);if(void 0==t.data("event-running")&&t.data("event-running",0),1!=parseInt(t.data("event-running"))&&t.is(":visible")){var a=t.offset();if(window.pageYOffset>=Math.round(a.top-(window.outerHeight+150))){var n=t.siblings(".post-list-with-thumbnail"),i=n.data("settings"),s=parseInt(i.offset);s||(i.offset=i.number);var o=parseInt(t.data("event-running"));t.data("event-running",o+1),t.addClass("yt-loading"),e.ajax({type:"GET",url:wpthms._vars.ajaxurl,data:{action:"yt-site-ajax-load-posts-infinitely",data:i},success:function(a){a&&!a.error&&(a.all_loaded||n.append(a.html),a.all_loaded&&(t.addClass("all-loaded").removeClass("yt-loading").html(a.html),setTimeout(function(){t.fadeOut(function(){e(this).remove()})},3e3))),e(document.body).trigger("post-load",a),o=parseInt(t.data("event-running")),t.data("event-running",o-1)}}),i.offset=i.offset+parseInt(i.number)}}},hoverScrollHorizontalHelperRestoreCurrentItem:function(e,t,a){a=a||"li";var n=t.find(a+".active").length?t.find(a+".active"):t.find(a+":first-child"),i=n.width(),s=e.width()>i?(e.width()-i)/2:0,o=n.is(":first-child")?n.position().left:n.position().left+10-s;e.animate({scrollLeft:o},800,function(){})},hoverScrollHorizontal:function(t,a,n){n=n||"li";var i=100,s=t.width(),o=a.find(n+":last"),r=!1;t.css({overflow:"hidden"}),t.scrollLeft(0);var l;t.on("mousemove",function(e){r=!0;var d=o.position().left+o.outerWidth()+2*i,c=(e.pageX-t.offset().left)*(d-s)/s-i;t.scrollLeft(c),l=setTimeout(function(){o=a.find(n+":last")},2e3)}),t.on("mouseleave",function(e){clearTimeout(l),r=!1,s=t.width(),o=a.find(n+":last"),setTimeout(function(){r||wpthms.General.ux.hoverScrollHorizontalHelperRestoreCurrentItem(t,a,n)},2e3)}),e(window).on("resize focus",function(){clearTimeout(e.data(this,"resizingTimer")),e.data(this,"resizingTimer",setTimeout(function(){s=t.width()},250))})},hoverScrollVertical:function(e,t,a){a=a||"li";var n=100,i=e.height();e.css({overflow:"hidden"});var s=t.find(":last");e.scrollTop(0),e.on("mousemove",function(t){var a=s.position().top+s.outerHeight()+2*n,o=(t.pageY-e.offset().top)*(a-i)/i-n;e.scrollTop(o)})},animateSequence:function(t,a,n,i,s){n=n||"zoomIn",n="animated "+n,i=i&&0==isNaN(parseInt(i))&&parseInt(i)?i:500;var o=1==s||0==s?s:!0,r="visibility-hidden",l=e(t).find(a).length;l&&e(a,e(t)).each(function(t,a){var s=e(this),l=o===!0?Math.floor(Math.random()*(3*i)):t*i;setTimeout(function(){s.removeClass(r).addClass(n),0==t&&s.addClass("fired"),s.addClass("index-"+(t+1)),setTimeout(function(){s.removeClass(n)},5e3)},0!=t||o?l:0)})},yeahSlider:function(t){var a={namespace:"yeahslider-",animation:"slide",init:function(t){t.addClass("initialized"),t.on("mouseenter",function(){e(this).addClass("hover")}),e(t).on("mouseleave",function(){var t=e(this);setTimeout(function(){t.removeClass("hover")},1e3)})},start:function(e){},before:function(e){var t=e.currentSlide==e.count-1?0:e.currentSlide+1,a=e.vars.css3Effect;a&&e.slides.removeClass(a).eq(t).addClass(a)},after:function(e){}},n=void 0!==t.data("settings")?t.data("settings"):{},i=e.extend(a,n);t.flexslider(i)},fontSizeChanger:function(t){var a=e(this),n=e("#content .entry-content"),i=parseInt(n.css("font-size")),s=a.closest(".yt-font-size-changer");void 0==s.attr("data-font-size")&&s.attr("data-font-size",i),a.hasClass("font-size-plus")?20>i&&(i+=1):a.hasClass("font-size-minus")?i>12&&i--:i=parseInt(s.attr("data-font-size")),n.css("font-size",i)},openModal:function(t){var a=e(this),n=a.data("role"),i=a.data("selector"),s=a.data("add-class"),o=a.data("remove-class"),r=a.data("body-active");e("body").addClass(r),e(i+'[data-role="'+n+'"]').removeClass(o).addClass(s),e(document.body).trigger("openModal",n),t.preventDefault()},closeModal:function(t){var a=e(this),n=a.data("role"),i=a.data("selector"),s=a.data("add-class"),o=a.data("remove-class"),r=a.data("body-active");e("body").removeClass(r),e(i+'[data-role="'+n+'"]').removeClass(o).addClass(s),e(document.body).trigger("closeModal",n),t.preventDefault()}}},wpthms.Framework={init:function(){this._eventRunning=!1},ux:{tapToTop:function(t){var a=e(this);void 0!=a.attr("id")&&t.target.id==a.attr("id")&&e("html, body").animate({scrollTop:0},"fast")}},ui:{socialSharesCount:function(t){var a={facebook:"//graph.facebook.com/?id=",pinterest:"//api.pinterest.com/v1/urls/count.json?url="},n=function(e){if("undefined"!=typeof e.data("shares")&&1==parseInt(e.data("shares"))&&e.siblings(".share-text").length){var t=e.siblings(".share-text");t.text(t.data("singular"))}};e(t).each(function(){var i=e(this).find(".shares-count[data-service]"),s="undefined"!=typeof i.data("service")?i.data("service"):"";if(s&&!i.data("init")){var o="undefined"==typeof i.data("url")||0==i.data("url")?i.closest("[data-url]").data("url"):i.data("url");o=encodeURIComponent(o),s in a&&e.ajax({dataType:"jsonp",url:a[s]+o,success:function(a){var o=0;a&&("facebook"===s&&"share"in a&&"share_count"in a.share?o=a.share.share_count:"pinterest"===s&&"count"in a&&(o=a.count),i.text(wpthms.Framework.helpers.shortenTotal(o).replace(".",",")),i.data("shares",o),e(t).attr("data-init",!0),n(i))}})}})},socialSharing:function(t){t.preventDefault();var a=e(this),n=a.data("service"),i=a.closest(".social-share-buttons"),s=560,o=350,r=Number((window.screen.width-s)/2),l=Number((window.screen.height-o)/2),d=encodeURIComponent(i.data("url")),c=encodeURIComponent(i.data("source")),m=encodeURIComponent(i.data("media")),u="undefined"!=typeof a.data("via")?a.data("via"):"",h=i.data("title"),p="";h=encodeURIComponent(h),h=u?h+"&via="+encodeURIComponent(u):h,"twitter"===n?p="https://twitter.com/intent/tweet?url="+d+"&text="+h:"facebook"===n?p="https://www.facebook.com/sharer/sharer.php?u="+d:"google-plus"===n?p="https://plus.google.com/share?url="+d:"linkedin"===n?p="http://www.linkedin.com/shareArticle?mini=true&url="+d+"&title="+h+"&source="+c:"pinterest"===n?p="//pinterest.com/pin/create/button/?url="+d+"&media="+m+"&description="+h:"tumblr"===n?p="//www.tumblr.com/share/photo?source="+m+"&caption="+h+"&clickthru="+d:"stumble-upon"===n&&(p="//www.stumbleupon.com/badge/?url="+d),"more"!==n?window.open(p,"","width="+s+",height="+o+",left="+r+",top="+l+", scrollbars=no,resizable=no"):a.siblings('[data-show="false"]').toggleClass("hidden")},smoothAnchor:function(t){var a=e(this),n=window.location.href.split("#"),i=a.attr("href").split("#"),s="undefined"==typeof i[1]?"":i[1];i[0]!=n[0]&&""!=i[0]||!e("#"+s).length||(e("html, body").animate({scrollTop:e("#"+s).offset().top},800),t.preventDefault())},tabbyTabs:function(t){t.preventDefault();var a=e(this),n=a.closest(".yt-tabby-tabs-header"),i=(n.hasClass("yt-tabby-tabs-header-bottom")?"bottom":"top",n.siblings(".yt-tabby-tabs-content")),s=a.index();i.find(">*[data-index]").length?(a.addClass("active").siblings().removeClass("active"),i.find('>*[data-index="'+s+'"]').fadeIn(200,function(){}).addClass("active").siblings().hide().removeClass("active")):i.find(">*").eq(s).length&&(a.addClass("active").siblings().removeClass("active"),i.find(">*").eq(s).fadeIn(200).addClass("active").siblings().hide().removeClass("active"))}},bootstrap:{compat:function(){e('[type="submit"]:not(.btn)').addClass("btn btn-primary"),e('[type="reset"], [type="button"], button:not([type]), .button:not([type="submit"])').addClass("btn btn-default"),e('[type="text"], [type="password"], [type="search"], [type="email"], [type="number"], [type="url"], textarea').addClass("form-control")},accordion:function(){e(".yt-vc-accordion").each(function(){var t=e(this),a=t.data("settings"),n="undefined"!=typeof a.active_tab&&parseInt(a.active_tab)?parseInt(a.active_tab):0;if(n){var i=t.find(".panel:eq("+(n-1)+")");i.addClass("active"),i.find(".panel-collapse:not(.in)").collapse("show")}e(".panel-heading",t).on("click.bs.collapse.data-api",function(t){t.preventDefault();var n=e(this),i=n.next(),s=(i.data("bs.collapse"),"undefined"!=typeof a.collapsible&&"yes"==a.collapsible?"toggle":"show");n.closest(".panel").addClass("active").siblings().removeClass("active"),n.parent().siblings().find(".panel-collapse.in").collapse("hide"),i.collapse(s)})})}},widgets:{mailchimpSubscription:function(t){if(t.preventDefault(),!wpthms.Framework._eventRunning){var a=e(this).closest(".yt-mailchimp-subscription-form-content"),n=a.find('[name="yt_mailchimp_subscribe_nonce"]').val(),i=a.find('[name="yt_mailchimp_subscribe_list"]').val(),s=a.find('[name="yt_mailchimp_subscribe_check"]').val(),o=a.find('[name="yt_mailchimp_subscribe_email"]').val(),r=a.find('[name="yt_mailchimp_subscribe_fname"]').length?a.find('[name="yt_mailchimp_subscribe_fname"]').val():"",l=a.find('[name="yt_mailchimp_subscribe_lname"]').length?a.find('[name="yt_mailchimp_subscribe_lname"]').val():"",d=a.find(".yt-mailchimp-subscription-result");a.addClass("yt-loading"),wpthms.Framework._eventRunning=!0,d.fadeOut().html(""),e.ajax({type:"POST",url:wpthms._vars.ajaxurl,data:{action:"yt-mailchimp-add-member",nonce:n,email:o,fname:r,lname:l,list:i,checking:s},success:function(e){wpthms.Framework._eventRunning=!1,a.removeClass("yt-loading"),d.html(e).fadeIn(),setTimeout(function(){d.fadeOut()},1e4)}})}}},helpers:{thisBrowserSupportsStyle:function(e){var t=["Webkit","Moz","ms","O"],a=t.length,n=window.document.createElement("div");if(void 0!==n.style[e])return!0;e=e.replace(/./,function(e){return e.toUpperCase()});for(var i=0;a>i;i++){var s=t[i]+e;if(void 0!==n.style[s])return!0}return!1},isValidEmailAddress:function(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},inViewport:function(e,t){if(e.length){t=t||0;var a=window.pageYOffset,n=a-t,i=a+window.outerHeight,s=e.offset().top,o=s+e.outerHeight()-t;return i>=o&&s>=n}},equalHeight:function(t,a,n){if(e(t).css("min-height",""),n=parseInt(n)||992,e(window).width()>n){a&&e(t).siblings().css("min-height",""),a=a||!1;var i=e(t).outerHeight();e(t).siblings().each(function(t,a){var n=e(this).outerHeight();n>i&&(i=n)}),setTimeout(function(){e(t).css("min-height",i+"px"),a&&e(t).siblings().css("min-height",i+"px")},100)}},isTouch:function(){return"ontouchstart"in document.documentElement?!0:!1},isIOS:function(){return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0:!1},isMobile:function(){var e=!1;return function(t){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},isBrowser:function(t){return t&&e("body").hasClass(t+"-browser")?!0:!1},hasParentClass:function(t,a){return t===document?!1:e(t).hasClass(a)?!0:t.parentNode&&yt_hasParentClass(t.parentNode,a)},windowAnimationFrame:function(){for(var e=0,t=["ms","moz","webkit","o"],a=0;a<t.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[t[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[a]+"CancelAnimationFrame"]||window[t[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,a){var n=(new Date).getTime(),i=Math.max(0,16-(n-e)),s=window.setTimeout(function(){t(n+i)},i);return e=n+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})},shortenTotal:function(e,t){return t=t||1,e>=1e9?e=(e/1e9).toFixed(t)+"B":e>=1e6?e=(e/1e6).toFixed(t)+"M":e>=1e3&&(e=(e/1e3).toFixed(t)+"k"),e?e.toString():"0"}}},wpthms.Framework.init(),wpthms.RitaMagazine.init())}(jQuery);