var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};

function success(pos) {
	var crd = pos.coords;
	var allmap = crd.latitude + '-' + crd.longitude;
	document.getElementById('imgseConst').innerHTML = allmap;
	var requestBody = {

	}
	//gpsInit(requestBody);
	console.log('Your current position is:');
	console.log(`Latitude : ${crd.latitude}`);
	console.log(`Longitude: ${crd.longitude}`);
	console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
	document.getElementById('imgseConst').innerHTML = returnCitySN["cip"]+','+returnCitySN["cname"];
	console.warn(`ERROR(${err.code}): ${err.message}`);
}
if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success, error, options);
} else {
	alert('浏览器不支持地理定位')
}
//function gpsInit(requestBody) {
//	init.post(requestBody, 'app/api/v1/index/channelPromotion/check?t=', function(resultData) {
//		if(resultData.retCode == SUCCEED) {
//			console.log(resultData);
//		} else {
//			console.log(resultData);
//		}
//	});
//}