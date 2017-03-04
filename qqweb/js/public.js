      
      /*************************公用样式**********************/

//默认时候背景图的高度
function bgStyle(){
    var windHei=$(window).height();
    var windWi=$(window).width();
    $('#desktop_box').css('height',windHei);
    $('#desktop_box>li').css('width',windWi);
    $('.bg_img').css('height',windHei);
    $('.z_z_c').css('height',windHei);
};
//移入壁纸
function move(){
  	$('.bazaar>li').eq(0).attr('class','bz fl');
    $('#span_pz').attr('class','pi_hover');
    $('#bz_box').stop(true,false).slideDown(400);
};
//移出壁纸
function seout(){
    $('.bazaar>li').eq(0).attr('class','bz_a fl');
    $('#span_pz').attr('class','pi_z');
    $('#bz_box').stop(true,false).slideUp(400);
};
//创建壁纸下拉菜单标签和壁纸的img标签
//如果生成了就禁止重复生成
TheTag();
function TheTag(){
 var onoff=true;
    var str='',str1='',str2='';
    var bzImg=[
                 ['image/bg/zr1.jpg','image/bg/zr2.jpg','image/bg/zr3.jpg','image/bg/zr4.jpg','image/bg/zr5.jpg','image/bg/zr6.jpg','image/bg/zr7.jpg','image/bg/zr8.jpg'],
                 ['image/bg/mv1.jpg','image/bg/mv2.jpg','image/bg/mv3.jpg','image/bg/mv4.jpg','image/bg/mv5.jpg','image/bg/mv6.jpg','image/bg/mv7.jpg','image/bg/mv8.jpg'],
                 ['image/bg/wm1.jpg','image/bg/wm2.jpg','image/bg/wm3.jpg','image/bg/wm4.jpg','image/bg/wm5.jpg','image/bg/wm6.jpg','image/bg/wm7.jpg','image/bg/wm8.jpg']
        ];

      for(var i=0;i<bzImg[0].length;i++){

             str+='<li><img src="'+bzImg[0][i]+'"/></li>';
             str1+='<li><img src="'+bzImg[1][i]+'"/></li>';
             str2+='<li><img src="'+bzImg[2][i]+'"/></li>';
      } 
           
            
            $('#bz_list1').html(str);
            $('#bz_list2').html(str1);
            $('#bz_list3').html(str2);

//壁纸里面图片点击赋值给背景图
$('.list_box>ul>li>img').click(function(){
    var src=$(this).attr('src');
    $('.bg_img').attr("src",src);
});
};
//我的壁纸（设为壁纸功能）
function exchangeImg(obj1,obj2){
  obj1.click(function(){
    var _this=$(this).parent().parent();
    var src=obj2.find('img').eq(_this.index()).attr('src');
    $('.bg_img').attr("src",src);
  });   

}

//创建桌面图标
CreationIco();
function CreationIco(){

var ico={
            Img1:['image/deskicon/d_big_25.png','image/deskicon/big01.png','image/deskicon/big02.png','image/deskicon/tianmao.jpg','image/deskicon/feix.png','image/deskicon/folder_o.png','image/deskicon/imagick.jpg','image/deskicon/imagajk.jpg'],
            Img2:['image/deskicon/d_big_11.png','image/deskicon/d_big_12.png','image/deskicon/d_big_13.png','image/deskicon/d_big_21.png','image/deskicon/d_big_22.png'],
            Img3:['image/deskicon/d_big_23.png','image/deskicon/d_big_24.png','image/deskicon/big04.png','image/deskicon/big05.png','image/deskicon/big06.png'],
            Img4:['image/deskicon/d_big_41.png','image/deskicon/d_big_42.png','image/deskicon/d_big_43.png','image/deskicon/d_big_44.png','image/deskicon/d_big_45.png','image/deskicon/d_big_51.png','image/deskicon/d_big_52.png'],
            Img5:['image/deskicon/d_big_53.png','image/deskicon/d_big_54.png','image/deskicon/d_big_55.png','image/deskicon/imagmm.jpg'],
          title1:['网络硬盘','金山快盘','浏览网页','天猫商城','飞信','同城日历','智联招聘','安居客'],
          title2:['欢乐斗地主','3366','QQ宝贝','芒果旅游','团购地图'],
          title3:['快递查询','便签','一听音乐','应用汇','QQ中心'],
          title4:['起点中文','QQ阅读','音乐盒子','腾讯视频','乐视网','朋友网','爱奇艺'],
          title5:['好友管理','开开','开心交友','陌陌']
   }

   var num='';
    icObj(num,ico.Img1,$('.list1'),ico.title1);
    icObj(num,ico.Img2,$('.list2'),ico.title2);
    icObj(num,ico.Img3,$('.list3'),ico.title3);
    icObj(num,ico.Img4,$('.list4'),ico.title4);
    icObj(num,ico.Img5,$('.list5'),ico.title5);
// 新建文件夹
$('#xinjian').click(function(){
     
    $('.list1').append('<div class="icon"><a href="javascript:;"><img src="image/deskicon/folder_o.png"><input type="text" class="txt" value="重命名"/></a></div>');
     lisNum();
     drag1($('.icon'));
});
//生成桌面图标标签
function icObj(obj1,obj2,obj3,obj4){
    for(var i=0;i<obj2.length;i++){

       obj1+='<div class="icon" title="'+obj4[i]+'"><a href="javascript:;"><img src="'+obj2[i]+'"><input type="text" readonly="readonly" class="txt" value="'+obj4[i]+'"/></a></div>';
    }

       obj3.html(obj1);
}

}

//桌面应用图标的排列
lisNum();
function lisNum(){
$('#desktop_cont>li').each( function(i){
  var j=i+1;
  autoArrange($('.list'+j),$('.list'+j));
});
}

//判断可视区的数值，图标排列相应的调整
function autoArrange(obj1,obj2){
 obj1.find('div').each(function(i){
     var _top=Math.floor(i%4)*140 + "px";
     var _left=Math.floor(i/4)*137 + "px";
     var windHei=$(window).height();
      
  if(windHei<590&&windHei>460){
       _top=Math.floor(i%3)*140 + "px";
       _left=Math.floor(i/3)*137 + "px";
     }
  if(windHei<460&&windHei>330){
        _top=Math.floor(i%2)*140 + "px";
       _left=Math.floor(i/2)*137 + "px";
     }   
   if(windHei<330&&windHei>230){
        _top=Math.floor(i%1)*140 + "px";
       _left=Math.floor(i/1)*137 + "px";
     } 
   if(windHei<230&&windHei>0){
        _top=Math.floor(i%0)*140 + "px";
       _left=Math.floor(i/0)*137 + "px";
     }
   obj2.find('div').eq(i).stop().animate({top:_top,left:_left},600);
 });
}
//桌面图标弹窗拖拽
function drag(obj){
obj.mousedown(
     function (event){
        var isMove = true;
        var abs_x = event.pageX - $(this).offset().left;
        var abs_y = event.pageY - $(this).offset().top;
        var this_s=$(this).parents('.PopupWin');
        //console.log(this_s);
        $(document).mousemove(function (event){
        if (isMove) {
              this_s.css({'left':event.pageX - abs_x, 'top':event.pageY - abs_y});
                         
                }
        }
            ).mouseup(
                        function (){
                         isMove = false;
                    }
            );

    }
);
}
//桌面图标拖拽
function drag1(obj){
    obj.mousedown(function(ev){
        var _this=$(this);
        //console.log(_this)
        var disx = ev.clientX+90 - _this.offset().left;
        var disy = ev.clientY+90 - _this.offset().top;
        $(document).mousemove(function(ev){
            var ev=ev||event;
            var L=ev.clientX - disx;
            var T=ev.clientY - disy;
             // 拖拽限制范围
            if(L<-79){
               L=-79;

            }else if(L>document.documentElement.clientWidth - 188){
                    L=document.documentElement.clientWidth - 170;
            }
            if(T<-70){
               T=-70;
            }else if(T>document.documentElement.clientHeight - 190){
                
                    T=document.documentElement.clientHeight - 190;
            }
            
            var x = L+'px';
            var y = T+'px';
            _this.css({
                left:x,
                top:y
            })
        });
        $(document).mouseup(function(){
            $(this).off();
        });
        return false;
    });
}
//最小化弹窗排序
function minimizeSort(){
   $('#minimize_box').find('li').each(function(i){
        var _bottom=22+Math.floor(i/8)*66 + "px";
        var _left=273+Math.floor(i%8)*110 + "px";
        $('#minimize_box').find('li').eq(i).stop().animate({bottom:_bottom,left:_left},600);
   });   
}
//推荐页面选项卡(轮播图)
var list=$("#recommend_list").children();
for(var i=0;i<list.length;i++){
      RecommenDation(list.eq(i));
}

function RecommenDation(obj){
   var iNow = 0;
   var T_re_cot=obj.find('.re_cot');//获取最大盒子
   var T_re_box=T_re_cot.children();//获取要移动的子元素
   var scrollWidth = T_re_cot.width();//获取盒子的宽度
   var btu=obj.find('.a_btu').children();//获取按钮

    // 初始状态第一个留下其余到300位置
   for(var i=1;i<btu.length;i++){
       T_re_box.eq(i).css("left",scrollWidth);
   }
    //上一张
   obj.find('.recom-prev-btn').click(function(){
        // 清空class
        btu.attr('class','');
        T_re_box.eq(iNow).stop().animate({left:scrollWidth},500);
        --iNow < 0 ?  iNow = T_re_box.length - 1 : iNow;
        T_re_box.eq(iNow).css("left",-scrollWidth);
        T_re_box.eq(iNow).stop().animate({left:0},500);
        //添加class
        btu.eq(iNow).addClass('active');
        
   });
    //下一张
   obj.find('.recom-next-btn').click(function(){
        btu.attr('class','');
        T_re_box.eq(iNow).stop().animate({left:-scrollWidth},500);
        ++iNow > T_re_box.length -1 ?  iNow = 0 : iNow;
        T_re_box.eq(iNow).css("left",scrollWidth);
        T_re_box.eq(iNow).stop().animate({left:0},500);
        btu.eq(iNow).addClass('active');
   });

}

//搜索框里面的下拉菜单
ico($('.search_arr'),$('.search_menu'),$('.search_arr>span'),$('.os'),$('#search_kw'));
ico($('#sear_icons'),$('.search_menu'),$('.search_arr>span'),$('.os'),$('#search_kw'));
function ico(obj,obj1,obj2,obj3,obj4){
    var t=true;
    obj.click(function(){
        if(t){
            obj1.css('display','block');
            obj2.addClass('activess');
            obj1.find('li').click(function(event){
                var aclass=$(this).find('a').attr('class');
                var values=$(this).find('a').html();
                console.log(values)
                obj4.attr('placeholder',values);
                obj3.attr('class',aclass);
                obj1.css('display','none');
                obj2.removeClass('activess');
                t=true;
            });
            t=false;
            event.stopPropagation();
            return false;
        }else{
            obj1.css('display','none');
            obj2.removeClass('activess');
            t=true;
        }
       
    });
}
//搜索导航点击选项卡
var but=$(".search-cat").find("a");
var value_s=$('#search_kw');
var list=$('#ulist');
var oos=$('.os');
//改变输入框提示
    but.click(function(){
       but.attr('class','');
       $(this).attr('class','active');
       if($(this).index()<2||$(this).index()== 3||$(this).index()==5){
           value_s.attr('placeholder','360搜索');
           oos.attr('class','so');
           if($(this).index()==0){
             $('form[id=search_form]').attr('action','https://www.so.com/s?');
           }else if($(this).index()==1){
              $('form[id=search_form]').attr('action','http://news.so.com/ns?');
           }else if($(this).index()==5){
              $('form[id=search_form]').attr('action','http://map.so.com/?k');
           }
        }else if($(this).index()==2){
           value_s.attr('placeholder','谷歌');
           oos.attr('class','goolge');
           $('form[id=search_form]').attr('action','http://www.google.com.hk/search?client=aff-cs-360chromium&ie=UTF-8&tbm=vid');
        }else{
           if($(this).index()==4){
             value_s.attr('placeholder','搜狗');
             oos.attr('class','sougou');
             $('form[id=search_form]').attr('action','http://mp3.sogou.com/music?');
           }else{
             value_s.attr('placeholder','360问答');
             oos.attr('class','so');
             $('form[id=search_form]').attr('action','http://wenda.qihoo.com/search/?');

           }
           
       }
       

});
//搜索框提示下拉list
function creates(data){
 var ahtml='';
 if(data.s.length){
     list.css('display','block');
     for(var i=0;i<data.s.length;i++){
        ahtml+='<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';

     }
    
     list.html(ahtml);
    

 }else{
     list.css('display','none');
 }
}
// 搜索框失去焦点的时候延迟1s隐藏
$('#search_kw').blur(function(){

    if($(document).click()){ 

     setTimeout(function(){

          list.css('display','none');

      },1000); 
         
    }
       
 });
    
value_s.keyup(function(){
     if($(this).val()!=''){
        var oScript = document.createElement('script');
            oScript.src = 'http://suggestion.baidu.com/su?wd='+this.value+'&cb=creates';
            document.body.appendChild(oScript);
        }else{
            list.css('display','none');
        }
    
});
 // 提交搜索内容
$('.url_btn').click(function(){
      if($('#search_kw').val()==''){
           alert('请输入要搜索的内容');
      }else{
        $('form[id=search_form]').submit(); 
           list.css('display','none');
      }
      
});
baidulist();
function baidulist(){
var str='';
var ico={
           img:["image/topmenu/baidu.jpg","image/topmenu/taobao.jpg","image/topmenu/4399.jpg","image/topmenu/xinlang.jpg","image/topmenu/fenghuang.jpg","image/topmenu/3366.jpg","image/topmenu/tengxun.jpg","image/topmenu/wb.jpg","image/topmenu/youku.jpg","image/topmenu/xinglangs.jpg","image/topmenu/qqkj.jpg","image/topmenu/dangdang.jpg"],
          img1:["image/topmenu/youku.jpg","image/topmenu/tudou.jpg","image/topmenu/ke6.jpg","image/topmenu/aiqiyi.jpg","image/topmenu/qqvideo.jpg","image/topmenu/xunlei.jpg","image/topmenu/pptv.jpg","image/topmenu/dianying.jpg","image/topmenu/leshi.jpg","image/topmenu/souhu.jpg","image/topmenu/pps.jpg"],
          img2:["image/topmenu/3366.jpg","image/topmenu/4399.jpg","image/topmenu/7k7k.jpg","image/topmenu/17173.jpg","image/topmenu/txgame.jpg","image/topmenu/cf.jpg","image/topmenu/dnf.jpg","image/topmenu/zw.jpg","image/topmenu/souhu.jpg","image/topmenu/LOL.jpg"],
          img3:["image/topmenu/taobao.jpg","image/topmenu/dangdang.jpg","image/topmenu/jingdong.jpg","image/topmenu/paipai.jpg","image/topmenu/qqshop.jpg","image/topmenu/fanke.jpg","image/topmenu/suning.jpg","image/topmenu/guomei.jpg","image/topmenu/tm.jpg","image/topmenu/yamaxun.jpg"],
          img4:["image/topmenu/qidian.jpg","image/topmenu/xiaoshuos.jpg","image/topmenu/hongxiu.jpg","image/topmenu/xiaoxiang.jpg","image/topmenu/tx.jpg","image/topmenu/yanqing.jpg","image/topmenu/qqstudy.jpg","image/topmenu/wenxuecheng.jpg","image/topmenu/qdm.jpg","image/topmenu/zl.jpg","image/topmenu/kanshu.jpg"],
          img5:["image/topmenu/xinglangs.jpg","image/topmenu/tengxun.jpg","image/topmenu/xinghua.jpg","image/topmenu/fenghuang.jpg","image/topmenu/lianhe.jpg","image/topmenu/huanqiong.jpg","image/topmenu/renming.jpg","image/topmenu/chinanews.jpg","image/topmenu/suhus.jpg","image/topmenu/wangyi.jpg","image/topmenu/nanfang.jpg"],
          img6:["image/topmenu/qqkj.jpg","image/topmenu/tianya.jpg","image/topmenu/xinghua.jpg","image/topmenu/maopu.jpg","image/topmenu/tieba.jpg","image/topmenu/kaixin.jpg","image/topmenu/friend.jpg","image/topmenu/chinanews.jpg","image/topmenu/souba.jpg","image/topmenu/xinlang.jpg","image/topmenu/renren.jpg"],
          img7:["image/topmenu/qqmusic.jpg","image/topmenu/yiting.jpg","image/topmenu/sougou.jpg","image/topmenu/kuwo.jpg","image/topmenu/qianqian.jpg","image/topmenu/xiami.jpg","image/topmenu/musicz.jpg","image/topmenu/baidump3.jpg","image/topmenu/jiuku.jpg","image/topmenu/jiutian.jpg","image/topmenu/kugou.jpg"],
          img8:["image/topmenu/qqcj.jpg","image/topmenu/caifu.jpg","image/topmenu/xinlangcj.jpg","image/topmenu/zhongjin.jpg","image/topmenu/hexun.jpg","image/topmenu/jinrong.jpg","image/topmenu/zgzhengjuan.jpg","image/topmenu/fenghuang.jpg","image/topmenu/zhengjuan.jpg","image/topmenu/huaerjie.jpg","image/topmenu/wycj.jpg"],
         title:["百度","淘宝","4399","新浪微博","凤凰网","3366小游戏","腾讯网","腾讯微博","优酷","新浪","qq空间","当当网"],
         title1:["优酷","土豆网","酷6网","爱奇艺","腾讯视频","迅雷看看","PPTV","电影网","乐视","搜狐视频","PPS"],
         title2:["3366小游戏","4399小游戏","7k7k小游戏","13137","腾讯游戏","多玩游戏","穿越火线","地下城与勇士","战网","搜狐视频","英雄联盟"],
         title3:["淘宝网","当当网","京东商城","拍拍商城","qq商城","凡客诚品","苏宁易购","国美电器","天猫商城","易迅","亚马逊"],
         title4:["起点中文网","小说阅读器","红袖添香","潇湘书院","天下电子书","言情小说吧","腾讯读书","景江文学城","起点女性网","逐浪小说网","看书网"],
         title5:["新浪","腾讯网","新华网","凤凰网","联合早报网","环球网","人民网","中华新闻网","搜狐","网易","南方网"],
         title6:["qq空间","天涯社区","新华网","猫扑网","百度贴吧","开心网","朋友网","中华新闻网","百度搜吧","新浪微博","人人网"],
         title7:["qq音乐","一听音乐","搜狗音乐","酷我音乐","千千静听","虾米音乐网","音乐之声","百度音乐盒","九酷音乐","九天音乐","酷狗音乐"],
         title8:["腾讯财经","东方财富网","新浪财经网","中金在线","和讯财经","金融界","中国证券网","凤凰财经网","证劵之星","华尔街日报","网易财经"],
         urla:["http://www.baidu.com","http://www.taobao.com","http://www.4399.com","http://weibo.com","http://www.ifeng.com","www.3366.com","http://www.tengxun.com","http://t.qq.com/shouji132112197782","http://www.youku.com","http://www.sina.com.cn","http://user.qzone.qq.com","http://www.dangdang.com"],
         url1:["http://www.youku.com","http://www.tudou.com","http://www.ku6.com","http://www.iqiyi.com","http://v.qq.com","http://www.kankan.com","http://www.pptv.com/","http://www.m1905.com/","http://tv.sohu.com","http://www.pps.tv"],
         url2:["http://www.3366.com","http://www.4399.com","http://www.7k7k.com","http://www.17173.com/","http://games.qq.com","http://www.duowan.com/","http://cf.qq.com/","http://dnf.qq.com/","http://www.battlenet.com.cn/wow/zh","http://tv.sohu.com/","http://lol.qq.com/"],
         url3:["http://www.taobao.com","http://www.dangdang.com","http://www.jd.com/","http://www.paipai.com/","http://www.wanggou.com/","http://www.vancl.com","http://www.suning.com/","http://www.gome.com.cn/","http://www.tmall.com/","http://www.yixun.com/","http://www.amazon.cn/"],
         url4:["http://www.qidian.com","http://www.readnovel.com/","http://www.4399.com","http://weibo.com","http://www.ifeng.com","www.3366.com","http://www.tengxun.com","http://t.qq.com/shouji132112197782","http://www.youku.com","http://www.sina.com.cn","http://user.qzone.qq.com","http://www.dangdang.com"],
         url5:["http://www.sina.com.cn","http://www.tengxun.com/","http://www.4399.com","http://weibo.com","http://www.ifeng.com","www.3366.com","http://www.tengxun.com","http://t.qq.com/shouji132112197782","http://www.youku.com","http://www.sina.com.cn","http://user.qzone.qq.com","http://www.dangdang.com"],
         url6:["http://user.qzone.qq.com/","http://user.qzone.qq.com","http://www.4399.com","http://weibo.com","http://www.ifeng.com","www.3366.com","http://www.tengxun.com","http://t.qq.com/shouji132112197782","http://www.youku.com","http://www.sina.com.cn","http://user.qzone.qq.com","http://www.dangdang.com"],
         url7:["http://y.qq.com/#type=index","http://www.1ting.com/","http://www.4399.com","http://weibo.com","http://www.ifeng.com","www.3366.com","http://www.tengxun.com","http://t.qq.com/shouji132112197782","http://www.youku.com","http://www.sina.com.cn","http://user.qzone.qq.com","http://www.dangdang.com"],
         url8:["http://finance.qq.com/","http://www.eastmoney.com/","http://www.4399.com","http://weibo.com","http://www.ifeng.com","www.3366.com","http://www.tengxun.com","http://t.qq.com/shouji132112197782","http://www.youku.com","http://www.sina.com.cn","http://user.qzone.qq.com","http://www.dangdang.com"]
         
  }   
sc(str,ico.urla,ico.title,$('.q_link_list').children(),ico.img);
hov();
$('#yubox li').click(function(){
    $('#yubox li').attr('class','');
    $(this).attr('class','active');
      switch ($(this).index()) {
                    case 0:sc(str,ico.urla,ico.title,$('.q_link_list').children(),ico.img);
                        hov();
                        break;
                    case 1:sc(str,ico.url1,ico.title1,$('.q_link_list').children(),ico.img1);
                        hov();
                        break;
                    case 2:sc(str,ico.url2,ico.title2,$('.q_link_list').children(),ico.img2);
                        hov();
                        break;
                    case 3:sc(str,ico.url3,ico.title3,$('.q_link_list').children(),ico.img3);
                        hov();
                        break;
                    case 4:sc(str,ico.url4,ico.title4,$('.q_link_list').children(),ico.img4);
                        hov();
                        break;
                    case 5:sc(str,ico.url5,ico.title5,$('.q_link_list').children(),ico.img5);
                        hov();
                        break;
                    case 6:sc(str,ico.url6,ico.title6,$('.q_link_list').children(),ico.img6);
                        hov();
                        break;
                    case 7:sc(str,ico.url7,ico.title7,$('.q_link_list').children(),ico.img7);
                        hov();
                        break;
                    case 8:sc(str,ico.url8,ico.title8,$('.q_link_list').children(),ico.img8);
                        hov();
                        break;
                       
                }
});
//移入显示
function hov(){
$('.q_link_list ul').find('li').hover(function(){
    $(this).attr('class','active');
    $(this).find('.link_cont').css('top',0);
},function(){
    $(this).attr('class','');
    $(this).find('.link_cont').css('top',-27);
});
//点击删除
$('.q_link_list ul li').find('.link_close').click(function(){
       $(this).parent().parent().remove();
});
}
}
//生成标签
function sc(obj,obj1,obj2,obj3,obj4){
    for(var i=0;i<obj4.length;i++){
       obj+='<li style="background:url('+obj4[i]+');"><span class="link_bg"></span><div class="link_cont"><em>'+obj2[i]+'</em><a href="javascript:;" class="link_close"></a><a href="'+obj1[i]+'" target="_blank" class="link_enter"></a></div></li>';
    }
    obj3.html(obj); 
}
