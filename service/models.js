
/*
* mongoose的增加命令
* */
// User.create({
//     user:'zhangyang',
//     age:18
// },function (err,doc) {
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// });

/*
* mongoose 的删除功能
* */
// User.remove({age:18},function (err,doc) {
//     console.log(doc);
// });

/*
* mongoose的修改命令
* */
// User.update({'user':'zhangyang'},{'$set':{age:100}},function(err,doc){
//     console.log(doc);
// });
/*
*mongoose 的find为查找所有符合格式的数据
* 当find的参数为一个空对象的时候，返回所有数据
* mongoose的findOne为查找第一个符合格式的数据
* */

const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/imooc';

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongod connect success');
});



const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, required: true},
    age: {type: Number, required: true}
}));

const Picture= mongoose.model('picture', new mongoose.Schema({
    name: {type: String, required: true},
    path: {type: String, required: true},
    created: {type: String, required: true},
}));

const models={User,Picture};

module.exports = models ;














