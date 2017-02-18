
window.onload=function(){
    var content= document.getElementById('content');
    var imgbt = document.getElementById('imgbt');
    var imgbtHie=parseFloat(getComputedStyle(imgbt).height);//获取imgbt的高度
    var imgbtw=parseFloat(getComputedStyle(imgbt).width);//获取imgbt的宽度
    var davbd=about.getElementsByTagName('div')[0];
    var davidHie=parseFloat(getComputedStyle(davbd).height);//获取davbd的高度
    var about_a=document.getElementById('about_a');
    var aboutHie=parseFloat(getComputedStyle(about_a).height);//获取about_a的高度
    var cpabox=document.getElementById('cpa_content');//cpa_content区域
    var listext=cpabox.getElementsByTagName('li');
    var box=document.getElementById('box');
    console.log(imgbtw)
  //导航开始
 navs();
function navs(){
    var onav= document.getElementById('nav');//导航
    var nav_bg= document.getElementById('nav_bg');
    var nav_btn=document.getElementById('nav_btn');//导航按钮
    var imgbt_box = imgbt.getElementsByTagName('div')[0];
    var list=imgbt.getElementsByTagName('li');
    var navTab=document.getElementById('nav_tab');
    var li_Contact=navTab.getElementsByTagName('li')[3];
    
    //获取屏幕的原始宽高
    var winHei=window.innerHeight-17;
    //alert(imgbtHie)
    var winWid=window.innerWidth-17;//减滚动条的宽
    //console.log(imgbtHie)
    box.style.width=winWid-17+'px';
    
    // 点击导航让内容的right回到0;
    onav.onclick=hide;
    //点击任意地方内容的right回到0;
    content.onclick=hide;
    function hide(){
      setTimeout(function(){
        nav_btn.style.display='block';
      },1000)
      
      setTimeout(function(){
        onav.className='formhide';
        content.className='contenthide';
        content.style.right='0%';
      },300)
    };
    //点击按钮让内容的right负300px;
    nav_btn.onclick=function(){
        nav_btn.style.display='none';
        onav.className='formshow';
        content.className="boxshow";
        content.style.right='0%';
    };
    li_Contact.onclick=function(){
        scroll_To(3293)
    };
    function scroll_To(tar_y){
        
            timer=setTimeout(function(){
            //解决兼容性的问题
            var current_y = document.body.scrollTop||document.documentElement.scrollTop;
             step=40;
             if(tar_y>current_y){
              //向上取整计算出每次走多少
              var dist = Math.ceil((tar_y-current_y)/step)  
              var next_y = current_y+dist;
              if(next_y<tar_y){  //向上滚动和向下滚动判定的区别 是这里！！  
                    window.scrollTo(0,next_y)     
                    scroll_To(tar_y)  
                    //console.log('向下')  
                }  
             }
           },1)

       };
//轮播图区域
 carousel();
function carousel(){
     var bu_ul=document.getElementById('annlu');
     var btus=bu_ul.getElementsByTagName('li');
     var img = document.getElementById('imgs');
     var ps=imgbt.getElementsByTagName('p');
     var arr=['images/logo.jpg','images/logo_2015.png','images/logo2.jpg']
     var num=0;
     var timer=null;
     img.src=arr[num];
     //图片的大小随着父级的宽度而改变
     img.style.width=imgbtw+'px';
      
     for(var i=0;i<btus.length;i++){
        btus[i].index=i;
        //按钮点击加颜色清空上一次的
        btus[i].onclick=function(){
         for(var i=0;i<btus.length;i++){
              btus[i].className='';
          }
           this.className='active';
         //index和num互相绑定
           num=this.index
           img.src=arr[this.index];
       }
       }
      //定时器部位
      autoplay();
      function autoplay(){
        timer=setInterval(function(){
        for(var i=0;i<btus.length;i++){
            btus[i].className='';
        }
         num++;
         if(num>btus.length-1){
             num=0;

         }
           img.src=arr[num];
           btus[num].className='active';

        },3000)
        }
       //清除定时器
      imgbt.onmouseover=function(){
         clearInterval(timer);
       }
       //开启定时器
      imgbt.onmouseout=function(){
          autoplay();
      }
    }   
};

//about区域
abouts();
function abouts(){
       var about=document.getElementById('about');
       var david_roll=about.getElementsByTagName('div');//More about us按钮
       var ma_bg_color=about.getElementsByTagName('a')[0];//More about us按钮里面的a
       var is=about.getElementsByTagName('i')[0];//More about us按钮里面的i
       var about_us_b_top=document.getElementById('about_us_b_top');//右边的上面图片
       var p_d=about_us_b_top.getElementsByTagName('div')[0];       
       var about_us_b_bot=document.getElementById('about_us_b_bot');//右边的下面图片
       var p_p=about_us_b_bot.getElementsByTagName('div')[0];
       var ust=about_a.getElementsByTagName('ul')[0];//about_a区域的六个li
       var list=ust.getElementsByTagName('li');
       var lisdiv=ust.getElementsByTagName('div');
        //给按钮添加移入颜色
       david_roll[2].onmouseover=function(){
           ma_bg_color.className='as_bg';
           is.style.color='#f7f7e1';
       }
        //按钮移出恢复颜色
       david_roll[2].onmouseout=function(){
           ma_bg_color.className='ma_bg_color';
           is.style.color='';
       }
       //按钮点击的时候滚动条过渡;
       david_roll[2].onclick=function(){
           scroll_To(1645)
       }
       function scroll_To(tar_y){
        
            timer=setTimeout(function(){
            //解决兼容性的问题
            var current_y = document.body.scrollTop||document.documentElement.scrollTop;
             step=40;
             if(tar_y>current_y){
              //向上取整计算出每次走多少
              var dist = Math.ceil((tar_y-current_y)/step)  
              var next_y = current_y+dist;
              if(next_y<tar_y){  //向上滚动和向下滚动判定的区别 是这里！！  
                    window.scrollTo(0,next_y)     
                    scroll_To(tar_y)  
                    //console.log('向下')  
                }  
             }
           },1)

       }
       //移入改变div的样式
      about_us_b_top.onmouseover=function(){
          
           p_d.className='aboPacity';
           
       };
       //移出还原div的样式
      about_us_b_top.onmouseout=function(){ 
            p_d.className='abo_p';
          
       };
       //移入改变div的样式
      about_us_b_bot.onmouseover=function(){
          
           p_p.className='aboPacity';
           

       };
       //移出改变div的样式
     about_us_b_bot.onmouseout=function(){ 
           p_p.className='abo_p';
          
       };
        //移入给每个li加上样式。移出还原样式
     for(var i=0;i<lisdiv.length;i++){
           list[i].index=i
           list[i].onmouseover=function(){
             lisdiv[this.index].className='aboPacity';
           };
           list[i].onmouseout=function(){
             lisdiv[this.index].className='abo_p';
          };
       }
       
     
};
//strength区域
streng();
function streng(){
          var str_but=document.getElementById('str_but');//Our Clients按钮
          var as=str_but.getElementsByTagName('a')[0];//Our Clients按钮里面的a
          var is_a=str_but.getElementsByTagName('i')[0];//Our Clients按钮里面的i
          var stre=document.getElementById('strength');
          var uls_a=stre.getElementsByTagName('ul')[0];
          var lis_a=uls_a.getElementsByTagName('li');
          var capabilites_a =document.getElementById('capabilites');
          var clients_hie=document.getElementById('clients');//伙伴区域
          var clientsHie=parseFloat(getComputedStyle(clients_hie).height)//获取伙伴区域的高
          var _top=parseFloat(capabilites_a.offsetTop)+clientsHie;//获取点击后的top值
          var streHie=parseFloat(getComputedStyle(stre).height)//获取strength区域的高
          var onoff=true;
          //移入添加背景颜色
          str_but.onmouseover=function(){
             as.className='str_bg';
             is_a.style.color='#e0e0e0';
          }
          str_but.onmouseout=function(){
             as.className='str_but_bg';
             is_a.style.color='';
          }
          //点击按钮改变capabilites_a的top值
          str_but.onclick=function(){
               if(onoff){
                   capabilites_a.style.top=_top+'px';
               }else{
                   capabilites_a.style.top='';   
                }
                 onoff=!onoff;
              };

        //滚动条事件
 window.onscroll=function(){
    var t=document.documentElement.scrollTop||document.body.scrollTop;
    var bodyHie_a=imgbtHie+davidHie;
    var bodyHie_b=imgbtHie+davidHie+aboutHie+streHie;
            //alert(bodyHie_a)
      if( t>=bodyHie_a){
            setTimeout(function(){
                lis_a[0].style.marginTop="0";
              },200)
            setTimeout(function(){
                lis_a[1].style.marginTop="0";
              },600) 
            setTimeout(function(){
                lis_a[2].style.marginTop="0";
              },1200)
           setTimeout(function(){
                lis_a[3].style.marginTop="0";
              },2000)
              
            }
     if(t>=bodyHie_b){
           setTimeout(function(){
                listext[0].style.marginTop="0";
              },200)
           setTimeout(function(){
               listext[1].style.marginTop="0";
              },600) 
           setTimeout(function(){
               listext[2].style.marginTop="0";
              },1200)
           setTimeout(function(){
              cpabox.style.marginBottom="0";  
              listext[3].style.marginTop="0";
              },2000)

           }
               
      };


};
// cpa_img区域 
cpaImg();   
function cpaImg(){
    var cpa_a = document.getElementById('cpa_a');
    var car=cpa_a.getElementsByTagName('div')[0];
    var cpa_b = document.getElementById('cpa_b');
    var house=cpa_b.getElementsByTagName('div')[0];
    var cpa_c = document.getElementById('cpa_c');
    var iPai=cpa_c.getElementsByTagName('div')[0];
    var cpa_d = document.getElementById('cpa_d');
    var phone=cpa_d.getElementsByTagName('div')[0];

    function omsovr(obj){
        obj.style.marginTop='0';
        obj.style.opacity='1';
     };
    function omsout(obj){
        obj.style.marginTop='';
        obj.style.opacity='';
     };
    //鼠标移入加样式
   cpa_a.onmouseover=function(){
         omsovr(car)
    };
    //鼠标移出清空样式
   cpa_a.onmouseout=function(){
         omsout(car)
    };
    //鼠标移入加样式
   cpa_b.onmouseover=function(){
        omsovr(house)
    };
    //鼠标移出清空样式
   cpa_b.onmouseout=function(){
        omsout(house)
    };
    //鼠标移入加样式
   cpa_c.onmouseover=function(){
        omsovr(iPai)
    };
    //鼠标移出清空样式
   cpa_c.onmouseout=function(){
        omsout(iPai)
    };
    //鼠标移入加样式
   cpa_d.onmouseover=function(){
        omsovr(phone)
    };
    //鼠标移出清空样式
   cpa_d.onmouseout=function(){
        omsout(phone)
    };

 };

//contact区域
 Contactleft();
function Contactleft(){
    var busin=document.getElementById('Business');
    var asa=busin.getElementsByTagName('a')[0];
    var iscolr=busin.getElementsByTagName('i')[0];
    var hr=document.getElementById('Hr');
    var asb=hr.getElementsByTagName('a')[0];
    var isco=hr.getElementsByTagName('i')[0];
    //移入添加背景颜色
    busin.onmouseover=function(){
         asa.className="str_bg";
         iscolr.style.color='#e0e0e0';
    };
    //移出还原颜色
    busin.onmouseout=function(){
         asa.className="Busi_bg";
         iscolr.style.color='';
    };
    //移入添加背景颜色
    hr.onmouseover=function(){
         asb.className="str_bg";
         isco.style.color='#e0e0e0';
    };
    //移出还原颜色
    hr.onmouseout=function(){
         asb.className="Busi_bg";
         isco.style.color='';
    };

};  
  
footer(); 




};
