const express = require("express");
const User = require('./models.js');
const fs=require('fs')
const Picture = require('./models.js').Picture;
const path = require('path');
const multer = require('multer');
const router = express.Router();
const app = express();


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:8088");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Page-Type", "application/json;charset=utf-8");
    next();
});

const storage = multer.diskStorage({
    destination: 'savedImg',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
});
const getNowFormatDate =  ()=> {
    let date = new Date();
    let seperator1 = "-";
    let seperator2 = ":";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = date.getFullYear() + '年' + month + '月' + strDate + '日'
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
};

app.post('/uploadPicture', upload.single('file'), function (req, res, next) {
    const img = req.file;
    Picture.create({
        name: img.originalname,
        path: img.path,
        created: getNowFormatDate()
    }, function (err, doc) {
        if (err) {
            return next(err);
        }
        console.log(doc);
        res.send('图片上传完成');
    });
});

app.get('/getAllPictures', function (req, res, next) {
    Picture.find({}, function (err, doc) {
        if (err) {
            return next(err);
        }
        // console.log(doc.length);
        res.send(doc)
    });

});


app.get('/savedImg/*.*',function(req, res, next){
    console.log(req.url);
    res.sendFile( __dirname  + req.url );
});


app.listen(3000, function () {
    console.log('served at 3000');
});




