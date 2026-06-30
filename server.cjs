const http=require('http'),fs=require('fs'),path=require('path');
const R=__dirname,P=3000;
const M={'.html':'text/html;charset=utf-8','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.gif':'image/gif','.css':'text/css;charset=utf-8','.js':'text/javascript;charset=utf-8'};
http.createServer((q,r)=>{let u=decodeURIComponent(q.url);if(u==='/')u='/index.html';let f=path.join(R,u);if(!f.startsWith(R)){r.writeHead(403);r.end();return}
fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end('404');return}let t=M[path.extname(f).toLowerCase()]||'application/octet-stream';r.writeHead(200,{'Content-Type':t});r.end(d)})}).listen(P,()=>console.log('http://localhost:'+P))