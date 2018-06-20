var http = require('http');

function serve(ip, port)
{
        http.createServer(function (req, res) {
            res.end("Server is running at http://"+ip+":"+port+"\n");
        }).listen(port, ip);
        console.log('Server is running at http://'+ip+':'+port+'/');
}

// Create three servers for
// the load balancer, listening on any
// network on the following three ports
serve('0.0.0.0', 9000);
serve('0.0.0.0', 9001);
