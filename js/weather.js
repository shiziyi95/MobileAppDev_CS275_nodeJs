Weather.prototype.getWeather=function(req){ 
	var options = {
            host: 'api.wunderground.com',
			path: '/api/' + key + '/conditions/q/' + req.body.city + '.json' 
	};
var self = this;
http.request(options, function(response){
            var str = '';
            var html='';
            response.on('data', function (chunk) {
                  str += chunk;
            });
				response.on('end', function() {
				var json = JSON.parse(str);
				var city = json.current_observation.display_location.full; var time = json.current_observation.local_time_rfc822; 
				html+=city+" " + time + "<br/><img src='" +
					json.current_observation.icon_url+"'/>" + json.current_observation.temp_f; 
				console.log(html);
			    self.emit('byebye',html);
			});
}).end();
};