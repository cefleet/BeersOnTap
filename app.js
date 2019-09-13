const fs = require('fs');
const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
//app.use(bodyParser);
process.chdir(__dirname);

app.get("/beers", function (req, res) {
    fs.readFile("beers.json", function (err, data) { 
        res.send(data.toString())
    });
});

app.get("/taps", function (req, res) {
    fs.readFile("taps.json", function (err, data) {
        res.send(data.toString())
    });
});

app.get("/ondeck", function (req, res) {
    fs.readFile("onDeck.json", function (err, data) {
        res.send(data.toString())
    });
});

app.post("/setBeers", function(req,res){
    
    fs.writeFile("beers.json",JSON.stringify(req.body), 'utf8', (err, data)=>{
        res.send(JSON.stringify([{"result":"saved"}]))
    })
});

app.post("/setOnDeck", function(req,res){
    fs.writeFile("onDeck.json",JSON.stringify(req.body), 'utf8', (err, data)=>{
        res.send(JSON.stringify([{"result":"saved"}]))
    })
});

app.post("/setTaps", function(req,res){
    console.log(JSON.stringify(req.body));
    fs.writeFile("taps.json",JSON.stringify(req.body), 'utf8', (err, data)=>{
        res.send(JSON.stringify([{"result":"saved"}]))
    })
});

app.listen(6789, function () {
    console.log('6789')
});
