'use strict';

var https = require('https');
var http = require('http');


function getApi(serverReq,serverRes,url){

    https.get(url, function (res) {
        var json = '';
    
        res.on('data', function (chunk) {
            json += chunk;
        });
    
        res.on('end', function () {
            if (res.statusCode === 200) {
                console.log(serverReq.url);
                if(serverReq.url === '/index.html'){
                    serverRes.writeHead(200,{ 'Content-Type' : 'text/html' });
                    serverRes.end(`<h1>qwertyu</h1>`);
                }else{
                    serverRes.writeHead(200,{ 'Content-Type' : 'text/plain' });
                    serverRes.end(json);
                }
            } else {
                console.log('Status:', res.statusCode);
            }
        });
    }).on('error', function (err) {
          console.log('Error:', err);
    });
}

http.createServer((serverReq,serverRes)=>{

            var url;
            
            serverRes.writeHead(200,{ 'Content-Type' : 'text/plain' });
            serverReq.setEncoding('utf-8');
            serverReq.on('data',url => {
                getApi(serverReq,serverRes,url);
            })
            
    }).listen(8050,()=>{console.log('Сервер работает')});





 
    
