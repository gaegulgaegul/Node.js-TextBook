const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req, res) => {
    if(req.method === 'GET') {
        if(req.url === '/') {
            return fs.readFile('./restFront.html', (err, data) => {
                if(err) {
                    throw err;
                }
                res.end(data);
            });
        } else if(req.url === '/about') {
            return fs.readFile('./restFront.html', (err, data) => {
                if(err) {
                    throw err;
                }
                res.end(data);
            });
        }else if(req.url === '/users') {
            return res.end(JSON.stringify);
        }
        return fs.readFile('.${req.url}', (err, data) => {
            if(err) {
                res.writeHead(404, 'NOT FOUND');
                return res.end('NOT FOUND');
            }
            res.end(data);
        });
    } else if(req.method === 'POST') {
        if(req.url === '/users') {
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('POST 본문(Body):', body);
                const { name } = JSON.parse(body);
                const id = +new Date();
                users[id] = name;
                res.writeHead(201);
                res.end('등록 성공');
            });
        }
    } else if(req.method === 'PUT') {
        if(req.url.startsWith('/users/')) {
            const key = req.url.split('/')[2];
            delete users[key];
            return res.end(JSON.stringify(users));
        }
    }
    res.writeHead(404, 'NOT FOUND');
    return res.end('NOT FOUND');
})
    .listen(8085, () => {
        console.log('8085번 포트에서 서버 대기 중입니다');
    });