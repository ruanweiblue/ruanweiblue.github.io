var init = {
	interlinkageFun: function(_post, requestBody, _url, callback) {
		$.ajax({
			type: _post,
			url: web_http + _url + new Date().getTime(),
			async: false,
			data: {
				"requestBody": JSON.stringify(requestBody)
			},
			success: function(resultData) {

				callback && callback(resultData);
			}
		});
	},
	get: function(requestBody, _url, callback) {
		
		init.interlinkageFun('get', requestBody, _url, callback);
	},
	post: function(requestBody, _url, callback) {
		
		init.interlinkageFun('post', requestBody, _url, callback);
	}
}