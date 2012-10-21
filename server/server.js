// requires
var http      = require('http'),
    xml2js    = require('xml2js');

// server vars
var serverIP    = '127.0.0.1',
    serverPort  = 1337;

http.createServer(function (req, res) {
    requestXMLURL(res, 'ws.audioscrobbler.com', '/1.0/user/Niksterg11/recenttracks.rss');
}).listen(serverPort, serverIP);

console.log('Server running at http://'+serverIP+':'+serverPort+'/');


function requestXMLURL(res, host, path) {
    var options = {
        host: host,
        path: path
    };

    callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            var parser = new xml2js.Parser();
            parser.parseString(str, function(err, result) {
                res.writeHead(200, {'Content-Type': 'text/plain'});

                var stringJSON = JSON.stringify(result);
                stringJSON = 'handleData(' + stringJSON + ')';

                res.end(stringJSON + '\n');
            });
        });
    }

    http.request(options, callback).end();    
}