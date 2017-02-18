                         
  function footer(){
    var topfud=document.getElementById('top');
    topfud.onclick=function(){
        scroll_To(0);
  }  
    function scroll_To(tar_y){
            timer=setTimeout(function(){
            //解决兼容性的问题
            var current_y = document.body.scrollTop||document.documentElement.scrollTop;
             step=40;
               var dist = Math.floor((tar_y-current_y)/step)  
                var next_y = current_y+dist  
                if(next_y>tar_y){  
                    window.scrollTo(0,next_y)  
                    scroll_To(tar_y)    
                }  
             
           },1)

       };
      
  }  