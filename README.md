
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
        div{width: 600px;height: 500px;background:#ccc;}
	</style>
</head>
<body>
	<div style="width:600px;height:500px;background:#ccc;">阮 <a href="www.baidu.com">百度</a></div>
</body>
<script type="text/javascript">
    var odiv=document.getElementsByTagName('div')[0]
    odiv.onclick=function(){
    	odiv.style.background="blue";

    }

</script>
</html>
