window.onload=function(){
     var content= document.getElementById('content');
     var contai=document.getElementById('container');
    //导航
    nav();
   function nav(){
       var onav= document.getElementById('nav');//导航
       var nav_bg= document.getElementById('nav_bg');
       var nav_btn=document.getElementById('nav_btn');//导航按钮
       var winWid=window.innerWidth-17;//减滚动条的宽
       var winHei=window.innerHeight-17;//获取屏幕的原始宽高
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
            contai.style.marginRight='0%';
          },300)
        };
        //点击按钮让内容的right负300px;
        nav_btn.onclick=function(){
           nav_btn.style.display='none';
           onav.className='formshow';
           contai.style.marginRight='-22.23%';
        };
        footer(); 
       }

};