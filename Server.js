const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://dudtj34:7101@cluster0.o3qfwac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let mydb;
mongoclient.connect(url)
    .then(client => {
        mydb = client.db('myboard');
        app.listen(8080, function(){
            console.log("포트 8080으로 서버 대기중 ...")
        });
    }).catch(err => {
        console.log(err);
});


const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중 ...")
});
app.get('/book', function(req,res){
    res.send('도서 목록 관련 페이지입니다.');
})
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})