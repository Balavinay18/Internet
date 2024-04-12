import { createServer } from 'node:http';
import { json } from 'stream/consumers';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req,res) => {
    console.log('Received request...',req.url, req.mothod);

    if(req.url == '/') {
        if(req.method == 'GET') {
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            res.setHeader('Access-control-Allow-Origin',"*");
        
        
        res.end("BalaVinay");
        //console.log(res)
        }
    }
    if(req.method == 'OPTION') {
        res.statusCode  = 200;
        res.setHeader('Content-Type', 'appliction/json');
        res.setHeader('Acces-Control-Allow-Orgin','http://127.0.0.1:5500');
        res.setHeader('Acces-Control-Allow-Method',"Post,Get,OPTION");
        res.setHeader('Acces-Control-Allow-Header','*');
        res.end('OK');
    }
    if(req.method == "POST") {
        //console.log(req.boby());
        console.log('post method...')
        res.statusCode =  200;
        res.setHeader('Content-Type','text/plain');
        res.setHeader('Acces-Control-Allow-origin',"*");


        res.end(JSON.stringify({surname: "KUMAR"}));
        //console.log

    }

}