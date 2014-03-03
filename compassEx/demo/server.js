var http = require('http');
var fs = require('fs')
var server = http.createServer();
server.on('request',function(req,res){

	 fs.readFile(__dirname + '/index.html', function (err, data) {
		console.log(data);
          if (err) throw err;
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data, 'utf8');
          res.end();
        });

});

var port = 8000;
server.listen(port);

server.once('listening',function(){
	console.log('please wait till port %d get ready',port);
});
