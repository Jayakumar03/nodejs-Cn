const {
    create
} = require('domain');
const http = require('http');
const port = 8000;
const fs = require('fs');
const {
    profile
} = require('console');

const server = http.createServer(serverchecking);

function serverchecking(require, response) {

    response.writeHead(200, {
        'content-type': 'text/html'
});
    let filePath;

    switch (require.url) {
        case './':
            filePath = './index.html';
            break


        case './about':
            filePath = './about.html';
            break;

        case './profile':
            filePath = './profile.html';
            break;

        default:
            filePath = './404.html'
            break;
    }

// fs means file system properties of dom
    fs.readFile(filePath, function (err, data) {

        if (err) {
            response.end('<h1>Error</h1>');
        }

        return response.end(data);

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