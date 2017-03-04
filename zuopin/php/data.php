<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$arr= array(

      array('imgA'=>'image/bg/zr1.jpg','imgB'=>'image/bg/zr2.jpg'),
      array('imgA'=>'image/bg/zr3.jpg','imgB'=>'image/bg/zr4.jpg'),
      array('imgA'=>'image/bg/zr5.jpg','imgB'=>'image/bg/zr6.jpg'),
      array('imgA'=>'image/bg/zr7.jpg','imgB'=>'image/bg/zr8.jpg'),
      array('imgA'=>'image/bg/mv1.jpg','imgB'=>'image/bg/mv2.jpg'),
      array('imgA'=>'image/bg/mv3.jpg','imgB'=>'image/bg/mv4.jpg'),
      array('imgA'=>'image/bg/mv5.jpg','imgB'=>'image/bg/mv6.jpg'),
      array('imgA'=>'image/bg/mv7.jpg','imgB'=>'image/bg/mv8.jpg'),
      array('imgA'=>'image/bg/wm1.jpg','imgB'=>'image/bg/wm2.jpg'),
      array('imgA'=>'image/bg/wm3.jpg','imgB'=>'image/bg/wm4.jpg'),
      array('imgA'=>'image/bg/wm5.jpg','imgB'=>'image/bg/wm6.jpg'),
      array('imgA'=>'image/bg/wm7.jpg','imgB'=>'image/bg/wm8.jpg'),
      
	);

      
echo json_encode($arr);