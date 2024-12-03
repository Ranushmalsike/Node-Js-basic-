// import fs from "fs";

import fs from "fs/promises";

// Use the async how to read the file

    // fs.readFile('input.txt', function (err, data) {
    //   if (err) return console.error(err);
    //   console.log(data.toString());
    // });

// Use the sync method how to read file

    // var data = fs.readFileSync('input.txt');
    // console.log(data.toString());

// Use the promises How to read file

        // fs.readFile('./input.txt', 'utf8')
        // .then((data) => console.log(data))
        // .catch((err) => console.log(err));

// async + await

    // const getDatafile = async () => {
    //     try {
    //         const data = await fs.readFile('./input.txt', 'utf8');
    //         console.log(data.toString());
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }

    // getDatafile();


// Write file
 
    // const writethefile = async () =>{
    //     try {
    //         await fs.writeFile('./input.txt', 'this is new write line');
    //         console.log('Written the new line in input.txt');
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }

    // writethefile();


// Append line Into file

    // const appendline = async () =>{
    //     try {
    //         await fs.appendFile('./input.txt', '\nThis new line');
    //         console.log("written");
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // appendline();

