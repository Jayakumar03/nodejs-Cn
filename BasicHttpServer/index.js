const {
    create
} = require('domain');
const http = require('http');
const port = 8000;
const fs = require('fs');

const server = http.createServer(serverchecking);

function serverchecking(require, response) {

    response.writeHead(200, {
        'content-type': 'text/html'
    });

    fs.readFile('./index.html', function (err, data) {

        if (err) {
            response.end('<h1>Error</h1>');
        } else {

            return response.end(data);
        }

    })

}



server.listen(port, function (err) {

    if (err) {
        console.log(err);
        return;
    } else {

        console.log('server is running at port :', port);

    }
})