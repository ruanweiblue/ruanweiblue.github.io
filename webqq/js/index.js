$(function(){bgStyle();$(window).resize(function(){bgStyle();lisNum()});var j=$(window).width();var a=$(window).height();$("#desktop_box>li").css("width",j);var l=$("#desktop_box>li").width()*3;$("#desktop_box").css("width",l,"height",a);$(".navListcet").find("li").click(function(){if($(this).index()==0){$(this).attr("class","active_nav1 fl");$(".navListcet>li").eq(1).attr("class","nav_img2 fl");$(".navListcet>li").eq(2).attr("class","nav_img3 fl");$("#desktop_box").animate({left:0},500)}if($(this).index()==1){$(this).attr("class","active_nav2 fl");$(".navListcet>li").eq(0).attr("class","nav_img1 fl");$(".navListcet>li").eq(2).attr("class","nav_img3 fl");$("#desktop_box").animate({left:-(j*$(this).index())},500)}if($(this).index()==2){$(this).attr("class","active_nav3 fl");$(".navListcet>li").eq(0).attr("class","nav_img1 fl");$(".navListcet>li").eq(1).attr("class","nav_img2 fl");$("#desktop_box").animate({left:-(j*$(this).index())},500)}});$(".bazaar>li").eq(0).hover(function(){move();TheTag()},function(){seout()});$("#bz_box").hover(function(){move()},function(){seout()});var c=$("#bz_list1").height()+$("#bz_list2").height()+$("#bz_list3").height();$(".list_box").css("height",c);var f=$("#bz_list1").height();var g=1;$(".hyp").click(function(){$(".list_box").css("top",-(g*f));g++;if(g>$(".list_box>ul").length-1){g=0}});$(".gd").click(function(){$("#minimize").hide(400);$(".wallpaper").animate({top:"15.78%",left:"30.30%"},500);if($(".wallpaper").css("display")=="none"){$(".wallpaper").animate({top:"15.78%",left:"30.30%"},200);$(".wallpaper").css("display","block")}});$("#bz_option").find("li").click(function(){$("#bz_option").find("li").attr("class","");$("#clear_1").css("display","none");$("#clear").css("display","none");$(this).attr("class","show");$(".bz_cont").find("ul").eq($(this).index()).css("display","block");if($(this).index()==0){$(".scroll_box").css("display","block")}else{$(".scroll_box").css("display","none")}});$(".btus_list").find("li").click(function(){if($(this).index()==0){$(".list_now").find("p").css("left","0")}else{if($(this).index()==1){$(".list_now").find("p").css("left","105px");$(".cok-bg").css({"width":"506px","height":"301px","left":"29px","top":"22px","opacity":"1"})}else{$(".list_now").find("p").css("left","210px");if($("#my_bz>li").length==0){$.ajax({"type":"get","url":"php/data.php","dataType":"json","success":function(q){var r="";for(var p=0;p<q.length;p++){r+='<li><img src="'+q[p].imgA+'"><p><a></a><em title="设为壁纸"></em></p></li>'}$("#my_bz").html(r);exchangeImg($("#my_bz>li>p>em"),$("#my_bz>li"))}})}}}$(".list_cont").find("div").css("display","none");$(".list_cont").find("div").eq($(this).index()).css("display","block")});$.ajax({"type":"get","url":"php/data.php","dataType":"json","success":function(s){var A=$(".li_one");var B=$(".li_tow");var z="",t="";for(var u=0;u<s.length;u++){z+='<div><img src="'+s[u].imgA+'"><p><a></a><em title="设为壁纸"></em><span title="加入收藏"></span></p></div>';t+='<div><img src="'+s[u].imgB+'"><p><a></a><em title="设为壁纸"></em><span title="加入收藏"></span></p></div>'}$(A).html(z);$(B).html(t);exchangeImg($(".li_one>div>p>em"),$(".li_one>div"));exchangeImg($(".li_tow>div>p>em"),$(".li_tow>div"));var x=$("#clear>li");var C=$(".scroll_box");var w=$(".scroll_box>span");var v=$("#clear");var y=0;var p=C.height()-w.height();var r=-x.height();w.mousedown(function(E){var D=w.offset().top;$(document).mousemove(function(F){var H=F.pageY-D;if(H<0){H=0}if(H>p){H=p}var G=H/p;w.css("top",H+"px");x.css("top",G*r+"px")});$(document).mouseup(function(){$(document).off()});return false});q(document,function(D){y-=10;if(y<0){y=0}var E=y/p;w.css("top",y+"px");x.css("top",E*r+"px")},function(D){y+=10;if(y>p){y=p}var E=y/p;w.css("top",y+"px");x.css("top",E*r+"px")});function q(F,E,G){F.addEventListener("DOMMouseScroll",D,false);F.onmousewheel=D;function D(H){var I;if(H.detail){I=-H.detail}else{I=H.wheelDelta}if(I<0){G()}else{E()}}}}});$("#wallpaper_box>h4").mousedown(function(r){var p=true;var s=r.pageX-$(".wallpaper").offset().left;var q=r.pageY-$(".wallpaper").offset().top;$(document).mousemove(function(t){if(p){var u=$(".wallpaper");u.css({"left":t.pageX-s,"top":t.pageY-q})}}).mouseup(function(){p=false})});$(".wallpaper").css({top:-"436",left:"-100%"});$(".q-switch").click(function(){$(".wallpaper").slideUp(400);$("#minimize").show(400);$(".wallpaper").animate({top:"110%"},100)});$(".q-close").click(function(){$(".wallpaper").animate({top:-"536",left:"110%"},500,function(){$(".wallpaper").animate({top:-"536",left:"-100%"},500)})});$("#minimize").hover(function(){$("#minimize>.min_box").animate({top:-40},300);$(".min_img>a").click(function(){$(".wallpaper").animate({top:"15.78%",left:"30.30%"},100);$(".wallpaper").slideDown();$("#minimize").hide(400)});$(".min_img>i").click(function(){$("#minimize").hide(400)})},function(){$("#minimize>.min_box").animate({top:0},300)});var d=0;var b;$("#nav_left").find("li").click(function(){$("#nav_left").find("li").attr("class","");$("#desktop_cont").find("li").eq($(this).index()).prevAll().addClass("hide1");
$(this).attr("class","active");$("#desktop_cont").find("li").eq($(this).index()).addClass("show1").removeClass("hide1");$("#desktop_cont").find("li").eq($(this).index()).nextAll().removeClass("show1");d=$(this).index()});$("#desktop_cont li div").click(function(){var r=[["http://pan.baidu.com/","http://www.kuaipan.cn/","http://www.baidu.com/","https://www.tmall.com/","http://webim.feixin.10086.cn/","http://wannianrili.51240.com/","http://ts.zhaopin.com/jump/index.html?sid=121123457&site=sogoupz_zbt","http://wuhan.anjuke.com/"],["http://web.3366.com/ddz/","http://web.3366.com/","http://baobei.qq.com/","http://www.mangocity.com/","http://map.baidu.com/tuan/?from=tuanbai"],["http://www.kuaidi100.com/","http://note.youdao.com","http://www.1ting.com/rank/pop.html","http://www.appchina.com/","http://id.qq.com/login/ptlogin.html"],["http://www.qidian.com/","http://book.qq.com/","http://www.kuwo.cn/","https://v.qq.com/","http://www.le.com/","http://www.pengyou.com/","http://vip.iqiyi.com/"],["http://qun.qq.com/","http://www.maigoo.com/","http://reg.jiayuan.com/","http://www.immomo.com/"]];var w=$(this).index();var s=r[d][w];var p=$(this).find(".txt").val();var t=$("#PopupWin_box iframe");var q=true;t.each(function(x){if(t.eq(x).attr("src")==s){q=false}});if(q){var v='<div class="PopupWin">'+'<div class="PopupWin_top">'+"<h4>"+p+"</h4>"+'<div class="z_right">'+'<a href="javascript:;" class="reduce"></a><a href="javascript:;" class="magnify"></a><a href="javascript:;" class="close"></a></div></div>'+'<iframe src="'+s+'" frameborder="no"></iframe>'+"</div>";var u='<li class="PopupWin_minimize">'+'<div class="min_box">'+'<h4 class="min_text">'+p+"</h4>"+'<div class="min_img_1">'+"<a></a>"+"<i></i>"+"</div>"+"</div>"+"</li>"}$("#PopupWin_box").append(v);$("#minimize_box").append(u);drag($(".PopupWin h4"));minimizeSort();$(".PopupWin_minimize").hover(function(){$(this).find(".min_box").stop().animate({top:-40},300);$(".min_img_1>a").click(function(){b=$(this).parents(".PopupWin_minimize").index();$("#PopupWin_box").find(".PopupWin").eq(b).slideDown(400);$(this).parents(".PopupWin_minimize").hide(400)});$(".min_img_1>i").unbind("click").click(function(){b=$(this).parents(".PopupWin_minimize").index();$(this).parents(".PopupWin_minimize").hide(400,function(){$(this).remove()});$("#PopupWin_box").find(".PopupWin").eq(b).slideUp(400,function(){$(this).remove()})})},function(){$(this).find(".min_box").stop().animate({top:0},300)})});$("body").on("click",".magnify",function(){$(this).addClass("magnify_1");$(this).parents(".PopupWin").stop().animate({width:"100%",height:"100%",top:0,left:0},400)});$("body").on("click",".magnify_1",function(){$(this).removeClass("magnify_1");$(this).parents(".PopupWin").stop().animate({width:"700px",height:"450px",top:"17%",left:"24%"},400)});$("body").on("click",".z_right .reduce",function(){b=$(this).parents(".PopupWin").index();$(this).parents(".PopupWin").slideUp(400);$("#minimize_box").find(".PopupWin_minimize").eq(b).show(400)});$("body").on("click",".z_right .close",function(){b=$(this).parents(".PopupWin").index();$(this).parents(".PopupWin").slideUp(400,function(){$(this).remove()});$("#minimize_box").find(".PopupWin_minimize").eq(b).slideUp(400,function(){$(this).remove()})});drag1($(".icon"));$("#genhuan").click(function(){$("#minimize").hide(400);$(".wallpaper").animate({top:"15.78%",left:"30.30%"},500);if($(".wallpaper").css("display")=="none"){$(".wallpaper").animate({top:"15.78%",left:"30.30%"},200);$(".wallpaper").css("display","block")}});$(document).click(function(){$("#right_menu").css({"display":"none"})});$(document).bind("contextmenu",function(p){var p=p||event;$("#right_menu").css({"top":p.clientY,"left":p.clientX,"display":"block"});return false});var i=$(".xm");var n=$("#my_gdt");var h=$("#my_gdt").children();var e=n.height()-h.height();h.mousedown(function(q){var p=h.offset().top;$(document).mousemove(function(r){var s=r.pageY-p;if(s<0){s=0}if(s>e){s=e}h.css("top",s+"px");i.css("top",-s+"px")});$(document).mouseup(function(){$(document).off()});return false});var k=true;$("#my_bnt").click(function(){if(k){o();k=false}else{m();k=true}});$(".my_1 .gb").click(function(){$("#my_bnt a").html("项目介绍");$("#Myinformation").stop().animate({top:"15.78%",right:"-100%"},500)});$(".my_2 .gb").click(function(){$("#my_bnt a").html("个人信息");$("#Myinformation").stop().animate({top:"15.78%",right:"-100%"},500)});function o(){$("#my_bnt a").html("个人信息");$("#Myinformation").stop().animate({top:"15.78%",right:"-100%"},500,function(){$(".my_1").css("display","block");$(".my_2").css("display","none");$("#Myinformation").stop().animate({top:"15.78%",right:"30.30%"},500)})}function m(){$("#my_bnt a").html("项目介绍");$("#Myinformation").stop().animate({top:"15.78%",right:"-100%"},500,function(){$(".my_1").css("display","none");$(".my_2").css("display","block");$("#Myinformation").stop().animate({top:"15.78%",right:"30.30%"},500)})}});