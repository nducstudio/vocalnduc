var akiget_ip, cfget_ip, cfget_loc;

function akigetinfo() {
    $.get('https://cloud.akivn.net/myinfo/', function(data) {
        window.akiget_ip = data.IP;
	})};

function cfgetinfo() {
	$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
	  // Convert key-value pairs to JSON
	  // https://stackoverflow.com/a/39284735/452587
	  data = data.trim().split('\n').reduce(function(obj, pair) {
	    pair = pair.split('=');
	    return obj[pair[0]] = pair[1], obj;
	  }, {});
//	  console.log(data);
        window.cfget_ip = data.ip;
        window.cfget_loc = data.loc;
	});
}
//// run now - for available whenever call information
akigetinfo();
cfgetinfo();