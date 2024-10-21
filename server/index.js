import express from 'express';
import cors from 'cors';
import fs from "node:fs";
 
const app = express();
const port = 3000;
 
app.use(cors());


app.get('/', (req, res) => {
 res.send('Hello World!');
});

 app.get('/html-example', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.send('<h1>Hello HTML example!</h1>');
   });

   app.get('/json-example', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.send(JSON.stringify(people));
   });

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
});



app.get("/musicData/juice", (req, res) => {
    res.setHeader("content-type", "application/json;charset=UTF-8");
    fs.readFile("musicData/juice.json", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(data);
    });
});
app.get("/musicData/travis", (req, res) => {
    res.setHeader("content-type", "application/json;charset=UTF-8");
    fs.readFile("musicData/travis.json", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(data);
    });
});
app.get("/musicData/xxx", (req, res) => {
    res.setHeader("content-type", "application/json;charset=UTF-8");
    fs.readFile("musicData/xxx.json", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(data);
    });
});