var  myMongoose  = require('mongoose');

const mongoURL =  'mongodb://localhost:27017/TodoApp';


myMongoose.Promise = global.Promise;
//myMongoose.connect(mongoURL);
myMongoose.connect(mongoURL, { useNewUrlParser: true });



module.exports = { myMongoose };