var mongoose = require('mongoose');
var cfenv = require("cfenv");
var Schema   = mongoose.Schema;

var Todo = new Schema({
  content    : Buffer,
  updated_at : Date
});
mongoose.model('Todo', Todo);

var appEnv = cfenv.getAppEnv()
var mongoEnvUri = appEnv.getServiceURL('goof-mongo');
console.log("MongoEnvUrl:" + mongoEnvUri)
var mongoUri = 'mongodb://localhost/express-todo';
if (mongoEnvUri) {
	mongoUri = mongoEnvUri;
}
console.log("Mongo URI:" + mongoUri);

mongoose.connect(mongoUri);
