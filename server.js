import  http  from "http";
import  url from "url";
const PORT = 5000;

const user = [
    {id: 1, name: 'kony'},
    {id: 2, name: 'maasi'},
];

// Identify the Url and there coming through method  
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// middleware
const JSmiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
};

// All user handler
const allUserSection = (req, res) => {
    res.write(JSON.stringify(user));
};

// Handle by each user
const handleByUserBy = (req, res) => {
    const id = req.url.split('/')[3];
    const userDetails = user.find((user) => user.id === parseInt(id));
        if(userDetails){
            res.write(JSON.stringify(userDetails));
            
        }else{
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({message:'User Not Found'}));
            
        }
}

// For work only Post Method
const createUserHandler = (req, res) =>{
let body = "";
req.on('data', (chunk) =>{
    body =+ chunk.tostring();
});
res.on('end', () =>{
    const newUserdata = JSON.stringify(body); // json to javascript
    user.push(newUserdata);
    res.statusCode = 201;
    res.write(JSON.stringify(newUserdata)); //javascript to json
});
};

// Not found 
const notfound = (req, res) => {
        res.statusCode = 404;
        res.write(JSON.stringify({message:'Not Found'}));
}

// Server
const server = http.createServer((req, res) =>{
        logger(req, res, () => {
                JSmiddleware(req, res, () =>{
                     if (req.url === '/api/user/' && req.method === 'GET') {
                        allUserSection(req, res);
                    }
                    else if(req.url === '/api/user/' && req.method === 'POST'){
                        createUserHandler(req, res);
                    }
                     else if (req.url.match(/\/api\/user\/([0-9+])/) && req.method === 'GET') {
                        handleByUserBy(req, res);
                    } 
                    else {
                        notfound(req, res);
                    }
                });
        });

     res.end();
});

server.listen(PORT, () =>{
console.log(`Server provide by PORT: ${PORT}`);
});