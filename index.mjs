// import { geneatedRandomNum, geneatedRandomNum2 } from './utiliti.mjs';
// import { getArryData, arrayLenghtGet } from './TestArryReturn.mjs';

// const geneatedRandomNum_v = geneatedRandomNum();
// const geneatedRandomNum_v2 = geneatedRandomNum2();

// console.log(geneatedRandomNum_v, geneatedRandomNum_v2);
 
// console.log(getArryData(), arrayLenghtGet());

import http from 'http';
import  fs  from "fs/promises";
import  url from "url";
import  path  from "path";

const PORT = 5000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
 
const server = http.createServer(async (req, res) =>{
    try {
        if (req.method === 'GET') {
            let filePath;
            if(req.url === "/"){
                filePath = path.join(__dirname, 'public', 'index.html');
            // res.writeHeader(200, { 'Content-Type': 'text/html' });
            // res.write('<h1>Home Page</h1>');
            //res.end();
        }
        else if (req.url === "/about") {
                filePath = path.join(__dirname, 'public', 'about.html');
            // res.writeHeader(200, { 'Content-Type': 'text/html' });
            // res.write('<h1>About</h1>')
        } else {
            throw new Error("Not Found");
            // res.writeHeader(404, {'Content-Type' : 'text/html'});
            // res.write('<h1>Not Found</h1>')
        } 
        const data = await fs.readFile(filePath);   
        res.writeHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();   
        }else{
            throw new Error("Method Not allow");
        }
    } catch (error) {
        res.writeHeader(500, {'Content-Type' : 'text/plain'});
        res.write('<h1>Server Error</h1>')
    }
});

server.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`);
});


