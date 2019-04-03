let http = require('http');

let httpd = http.createServer(function (request, response) { // 리퀘스트가 오면 이함수가 실행됨

    console.log("request received");
    console.log("request[" + request.url + "]");
    response.writeHead( 200, {
        "Content-Type": "text/html"
    });

    response.end("<h1>hello world</h1>");
});

httpd.listen(8088, function () { // 서버가 포트를열었을때 실행
    console.log("httpd starts.... ");
})