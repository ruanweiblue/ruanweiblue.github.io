$(function(){
//默认时候背景图的高度
    bgStyle();
//监听背景图高度的变化改变当前高度的变化
$(window).resize(function(){
         bgStyle();  
         lisNum();
});
//获取桌面推荐网址对应内容的宽高
var windWi=$(window).width();
var windHei=$(window).height();
//console.log(windHei);
$('#desktop_box>li').css('width',windWi);
var ulWid=$('#desktop_box>li').width()*3;
$('#desktop_box').css('width',ulWid,'height',windHei);
//桌面推荐网址点击发生状态
$('.navListcet').find('li').click(function(){
   	    if($(this).index()==0){
           $(this).attr('class','active_nav1 fl');
           $('.navListcet>li').eq(1).attr('class','nav_img2 fl');
           $('.navListcet>li').eq(2).attr('class','nav_img3 fl');
           $('#desktop_box').animate({left:0},500);
   	    }
   	    if($(this).index()==1){
           $(this).attr('class','active_nav2 fl');
           $('.navListcet>li').eq(0).attr('class','nav_img1 fl');
           $('.navListcet>li').eq(2).attr('class','nav_img3 fl');
           $('#desktop_box').animate({left:-(windWi*$(this).index())},500);
   	    }
   	    if($(this).index()==2){
           $(this).attr('class','active_nav3 fl');
           $('.navListcet>li').eq(0).attr('class','nav_img1 fl');
           $('.navListcet>li').eq(1).attr('class','nav_img2 fl');
           $('#desktop_box').animate({left:-(windWi*$(this).index())},500);
   	    }
});   
//移入和移出改变class
$('.bazaar>li').eq(0).hover(function(){
   	      move();
    //创建壁纸下拉菜单标签和壁纸的img标签
         TheTag();
         
    },function(){

    	  seout();
      
    });
$('#bz_box').hover(function(){
    	  move();
    },function(){
    	 seout();
    	
}); 
 //获取壁纸的总高度赋值给list_box
var list_boxHeigt=$('#bz_list1').height()+$('#bz_list2').height()+$('#bz_list3').height();
$('.list_box').css('height',list_boxHeigt);
var listheigt=$('#bz_list1').height();
var num=1;
//点击每次top值向上移动-300px如果超出回到0
$('.hyp').click(function(){
       $('.list_box').css('top',-(num*listheigt));   
       num++;
       if(num>$('.list_box>ul').length-1){
       	  num=0;
       }
});

//点击更多精彩壁纸
$('.gd').click(function(){
    $('#minimize').hide(400); 
    $('.wallpaper').animate({top:'15.78%',left:'30.30%'},500); 
    if($(".wallpaper").css("display") == "none"){
    	 $('.wallpaper').animate({top:'15.78%',left:'30.30%'},200);
    	 $('.wallpaper').css("display","block");
    }
});
//壁纸选项卡
$('#bz_option').find('li').click(function(){
	 $('#bz_option').find('li').attr('class','');
	 $('#clear_1').css('display','none');
	 $('#clear').css('display','none');
	 $(this).attr('class','show');
	 $('.bz_cont').find('ul').eq($(this).index()).css('display','block');
    if($(this).index()==0){
    	$('.scroll_box').css('display','block');
    }else{
    	$('.scroll_box').css('display','none'); 
    }

});
    
//我的壁纸里面的选项卡
$('.btus_list').find('li').click(function(){
	if($(this).index()==0){
		$('.list_now').find('p').css('left','0');
	}else if($(this).index()==1){
        $('.list_now').find('p').css('left','105px');
        $('.cok-bg').css({'width': '506px','height':'301px','left':'29px','top':'22px','opacity': '1'
    });
	}else{
		$('.list_now').find('p').css('left','210px');
		//按钮点击的时候发送ajax请求数据生成标签
		//判断ajax发送数据如果有就停止发送,没有就发送数据
		if($('#my_bz>li').length==0){
			$.ajax({
			   "type":'get',
			   "url":'php/data.php',
			   "dataType" : "json",
			   "success":function(data){
			   var str='';
			   for(var i=0;i<data.length;i++){
			   	   str+='<li><img src="'+data[i].imgA+'"><p><a></a><em title="设为壁纸"></em></p></li>'
			   }
			   $('#my_bz').html(str);
               //设为壁纸
               exchangeImg($('#my_bz>li>p>em'),$('#my_bz>li'));
          }
	   });
     }
	}
   $('.list_cont').find('div').css('display','none');
   $('.list_cont').find('div').eq($(this).index()).css('display','block');
    
});

// 壁纸瀑布流
$.ajax({
   "type":'get',
   "url":'php/data.php',
   "dataType" : "json",
   "success":function(data){
    var ali=$('.li_one');
    var ali_a=$('.li_tow');
    var str='',str1='';
    for(var i=0;i<data.length;i++){
     
       str+='<div><img src="'+data[i].imgA+'"><p><a></a><em title="设为壁纸"></em><span title="加入收藏"></span></p></div>'
       str1+='<div><img src="'+data[i].imgB+'"><p><a></a><em title="设为壁纸"></em><span title="加入收藏"></span></p></div>'
    }

    $(ali).html(str);
    $(ali_a).html(str1);

//点击更换背景图
exchangeImg($('.li_one>div>p>em'),$('.li_one>div'));
exchangeImg($('.li_tow>div>p>em'),$('.li_tow>div'));

//壁纸弹窗自定义滚动条事件
var content=$('#clear>li');
var sliedBar=$('.scroll_box');
var bar=$('.scroll_box>span');
var box=$('#clear');
var _num=0;
//要滚动的总长度减去按钮的长度得到最大滚动位置
var maxY =sliedBar.height()-bar.height();
//容器的高度减去内容的高度
var innerY=-content.height();
//console.log(innerY)
bar.mousedown(function(ev){
  	    //记录按下的位置。
   var disy = bar.offset().top;
   
      $(document).mousemove(function(ev){
      
        //计算移动的位置。
			var y = ev.pageY - disy;
			
	    //移动范围限制
			if(y<0){
				y = 0;
			}
			if(y>maxY){
				y = maxY;
			}
			var scale = y /maxY;
			bar.css('top',y+'px');
			content.css('top',scale*innerY+'px');
			
         
      });  
       
        // 清除事件
$(document).mouseup(function(){
           $(document).off();
        	
    }); 

      return false;

}); 

        //壁纸弹窗滚轮事件 兼容firefox和ie和chrome
mScroll(document,function(ev){
            _num -=10;
			if (_num < 0) {
				_num = 0;
			}
			var scale = _num /maxY;
			bar.css('top',_num+'px');
			content.css('top',scale*innerY+'px');
            

},function(ev){
			_num += 10;
			if (_num > maxY) {
				_num = maxY;
			}
			var scale = _num /maxY;
			bar.css('top',_num+'px');
			content.css('top',scale*innerY+'px');
		
});
 function mScroll(obj,upper,down){
		   obj.addEventListener('DOMMouseScroll', fn, false);
		   obj.onmousewheel  = fn;
function fn(ev){
			var n;	
		 //负数代表向下正数是向上n就是这个数字	
		 //兼容firefox和ie和chrome
			if(ev.detail){
				//firefox
				n = -ev.detail;
			}else{
				//ie和chrome
				n = ev.wheelDelta;
				
			}
			//n小于0向下滚动，否则向上。
			if(n<0){
				down();
			}else{
				upper();
			}
	 }

   }

  }


});
//我的壁纸拖拽功能实现
$('#wallpaper_box>h4').mousedown(
     function (event){
        var isMove = true;
        var abs_x = event.pageX - $('.wallpaper').offset().left;
        var abs_y = event.pageY - $('.wallpaper').offset().top;
        $(document).mousemove(function (event) {
        if (isMove) {
            var obj = $('.wallpaper');
            obj.css({'left':event.pageX - abs_x, 'top':event.pageY - abs_y});
                         
                }
                }
            ).mouseup(
                        function (){
                         isMove = false;
                    }
            );

    }
);
//壁纸弹窗关闭和最小化功能
//默认的时候
$('.wallpaper').css({top:-'436',left:'-100%'});
$('.q-switch').click(function(){
		$('.wallpaper').slideUp(400);
	    $('#minimize').show(400);
	    $('.wallpaper').animate({top:'110%'},100);
});
$('.q-close').click(function(){
    $('.wallpaper').animate({top:-'536',left:'110%'},500,function(){
        $('.wallpaper').animate({top:-'536',left:'-100%'},500);
    });
});
//最小化功能移入移出效果
$('#minimize').hover(function(){
   $('#minimize>.min_box').animate({top:-40},300);
    //点击按钮显示或隐藏
   $('.min_img>a').click(function(){
	      $('.wallpaper').animate({top:'15.78%',left:'30.30%'},100);
	      $('.wallpaper').slideDown();
	      $('#minimize').hide(400);
    });
 $('.min_img>i').click(function(){
      	  $('#minimize').hide(400);
    });
   
},function(){
  $('#minimize>.min_box').animate({top:0},300);

});

 var TR = 0;
 var leng ;
//桌面导航点击的事件桌面内容的动画效果（选项卡）
$('#nav_left').find('li').click(function(){
    $('#nav_left').find('li').attr('class',''); 
    //当前元素之前所有的元素添加class为hide1
    $('#desktop_cont').find('li').eq($(this).index()).prevAll().addClass('hide1');
    $(this).attr('class','active');
    //当前元素添加class为show1并且删除hide1
    $('#desktop_cont').find('li').eq($(this).index()).addClass('show1').removeClass('hide1');
    //当前元素之后所有的元素删除show1的class
    $('#desktop_cont').find('li').eq($(this).index()).nextAll().removeClass('show1');
    //全局变量
    TR=$(this).index();

});


//创建创建桌面弹窗标签
$('#desktop_cont li div').click(function(){

      var url=[
      	['http://pan.baidu.com/','http://www.kuaipan.cn/','http://www.baidu.com/','https://www.tmall.com/','http://webim.feixin.10086.cn/','http://wannianrili.51240.com/','http://ts.zhaopin.com/jump/index.html?sid=121123457&site=sogoupz_zbt','http://wuhan.anjuke.com/'],
      	['http://web.3366.com/ddz/','http://web.3366.com/','http://baobei.qq.com/','http://www.mangocity.com/','http://map.baidu.com/tuan/?from=tuanbai'],
      	['http://www.kuaidi100.com/','http://note.youdao.com','http://www.1ting.com/rank/pop.html','http://www.appchina.com/','http://id.qq.com/login/ptlogin.html'],
      	['http://www.qidian.com/','http://book.qq.com/','http://www.kuwo.cn/','https://v.qq.com/','http://www.le.com/','http://www.pengyou.com/','http://vip.iqiyi.com/'],
      	['http://qun.qq.com/','http://www.maigoo.com/','http://reg.jiayuan.com/','http://www.immomo.com/']
      ];

    
var _this=$(this).index();
var _url=url[TR][_this];
var _value=$(this).find('.txt').val();
var h=$('#PopupWin_box iframe');
var has = true;
//点击判断之前所有地址是否和当前的地址相同
//相同不生成
h.each(function(i){
if(h.eq(i).attr("src")==_url){
          has = false;
    }
});
if(has){
	//生成图标弹窗
    var str='<div class="PopupWin">'+
                   '<div class="PopupWin_top">'+
                     '<h4>'+_value+'</h4>'+
                     '<div class="z_right">'+'<a href="javascript:;" class="reduce"></a><a href="javascript:;" class="magnify"></a><a href="javascript:;" class="close"></a></div></div>'+
                     '<iframe src="'+_url+'" frameborder="no"></iframe>'+
           '</div>'; 
    //生成最小化弹窗
    var str1='<li class="PopupWin_minimize">'+
               '<div class="min_box">'+
                  '<h4 class="min_text">'+_value+'</h4>'+
                      '<div class="min_img_1">'+
                          '<a></a>'+
                          '<i></i>'+
                       '</div>'+
                    '</div>'+
             '</li>'

}
     $('#PopupWin_box').append(str);
     $('#minimize_box').append(str1);
     //拖拽调用
 drag($('.PopupWin h4'));
 minimizeSort();
     //桌面图标弹窗结束
     //桌面图标最小化功能移入移出效果
$('.PopupWin_minimize').hover(function(){
     $(this).find('.min_box').stop().animate({top:-40},300);
     //最小化展开
     $('.min_img_1>a').click(function(){
     	  leng=$(this).parents('.PopupWin_minimize').index();
	      $('#PopupWin_box').find('.PopupWin').eq(leng).slideDown(400);
	      $(this).parents('.PopupWin_minimize').hide(400);
    });
     //最小化关闭(每次点击先解绑避免多次触发)
	 $('.min_img_1>i').unbind('click').click(function(){
		   leng=$(this).parents('.PopupWin_minimize').index();
	     $(this).parents('.PopupWin_minimize').hide(400,function(){
	     	 $(this).remove();
	     });
	      //console.log(leng)
	     $('#PopupWin_box').find('.PopupWin').eq(leng).slideUp(400,function(){
	 	     $(this).remove();
	 	    
	     });
	     
	 });
},function(){
	
          $(this).find('.min_box').stop().animate({top:0},300);

});

 
  		  
});

//桌面图标弹窗开始
//最大化
$('body').on("click",".magnify",function(){
	 $(this).addClass('magnify_1');
	 $(this).parents('.PopupWin').stop().animate({width:"100%",height:"100%",top:0,left:0},400);	
});
//初始状态
$('body').on("click",".magnify_1",function(){
	 $(this).removeClass('magnify_1');
	 $(this).parents('.PopupWin').stop().animate({width:"700px",height:"450px",top:"17%",left:"24%"},400);
});
//最小化
$('body').on("click",".z_right .reduce",function(){
	 leng=$(this).parents('.PopupWin').index();
	 $(this).parents('.PopupWin').slideUp(400);
     $('#minimize_box').find('.PopupWin_minimize').eq(leng).show(400);
    
});
//关闭删除当前窗口
$('body').on("click",".z_right .close",function(){
	   leng=$(this).parents('.PopupWin').index();
	 $(this).parents('.PopupWin').slideUp(400,function(){
	 	   $(this).remove();
	 });
     $('#minimize_box').find('.PopupWin_minimize').eq(leng).slideUp(400,function(){
	 	   $(this).remove();
	 	    
	 });

});
//桌面图标拖拽
drag1($('.icon'));
// 右键菜单更换壁纸
$('#genhuan').click(function(){
     $('#minimize').hide(400); 
    $('.wallpaper').animate({top:'15.78%',left:'30.30%'},500); 
    if($(".wallpaper").css("display") == "none"){
    	 $('.wallpaper').animate({top:'15.78%',left:'30.30%'},200);
    	 $('.wallpaper').css("display","block");
    }
});
$(window).click(function(){
	$('#right_menu').css({'display':'none'});
  $('.z_z_c').css({'display':'none'});
})
// 右键菜单点击
$(window).bind('contextmenu',function(ev){
      var ev = ev || event;

     $('#right_menu').css({'top':ev.clientY,'left':ev.clientX,'display':'block'});
     $('.z_z_c').css({'display':'block'});

     return false;
});







// 刷新
$(".shuxing").click(function(){
        refresh();
});

function refresh(){
  
  parent.location.reload()

}



// 个人信息
var controlbox=$('.xm');
var t=$('#my_gdt');
var t1=$('#my_gdt').children();
var m_y =t.height()-t1.height();
t1.mousedown(function(ev){
  	    //记录按下的位置。
   var disy = t1.offset().top;
   
      $(document).mousemove(function(ev){
      
        //计算移动的位置。
			var y = ev.pageY - disy;
			
	    //移动范围限制
			if(y<0){
				y = 0;
			}
			if(y>m_y){
				y = m_y;
			}
			t1.css('top',y+'px');
			controlbox.css('top',-y+'px');
			
         
      });  
       
        // 清除事件
$(document).mouseup(function(){
           $(document).off();
        	
    }); 

      return false;    

});
var on=true;
$('#my_bnt').click(function(){
       if(on){
       	    Ma();
           on=false;
       }else{
       	    Mb();
       	   on=true;
       }

});
// 个人信息，项目介绍
$('.my_1 .gb').click(function(){

	  $('#my_bnt a').html('项目介绍');

	  $('#Myinformation').stop().animate({top:'15.78%',right:'-100%'},500); 
	       
});
$('.my_2 .gb').click(function(){
	   
	 $('#my_bnt a').html('个人信息');    
     $('#Myinformation').stop().animate({top:'15.78%',right:'-100%'},500);      

});

function Ma(){
	$('#my_bnt a').html('个人信息');
           $('#Myinformation').stop().animate({top:'15.78%',right:'-100%'},500,function(){
                 $('.my_1').css('display','block');
                 $('.my_2').css('display','none');

                 $('#Myinformation').stop().animate({top:'15.78%',right:'30.30%'},500);
           }); 
}
function Mb(){
          $('#my_bnt a').html('项目介绍');
           $('#Myinformation').stop().animate({top:'15.78%',right:'-100%'},500,function(){
                 $('.my_1').css('display','none');
                 $('.my_2').css('display','block');

           	   $('#Myinformation').stop().animate({top:'15.78%',right:'30.30%'},500);
        });

}
























});