var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/mongotest');
mongoose.connection.on('open', function() {
console.log('Mongoose connected.');
});
var Account = new Schema({
username: { type: String },
date_created: { type: Date, default: Date.now },
visits: { type: Number, default: 0 },
active: { type: Boolean, default: false },
age: {type: Number,required: true,min: 13,max: 120 ,default: 18}
});
Account.statics.findByAgeRange=function(min,max,callback){
  this.find({age: {$gt : min, $lte : max}},callback);
};
Account.virtual('fullname').get(function(){
  return this.first_name + ' ' + this.lastname;
}).set(function(fullname){
  var parts=fullname.split(' ');
  this.firstname=parts[0];
  this.lastname=parts[1];
});
var AccountModel = mongoose.model('Account', Account);
var newUser = new AccountModel({ username: 'randomUser'
});
newUser.save();
console.log(newUser.username);
console.log(newUser.date_created);
console.log(newUser.visits);
console.log(newUser.active);

AccountModel.find({age: {$gt: 18,$lt: 33}},
  function(err,accounts){
    console.log(accounts);
    console.log(accounts[0].username);
   // mongoose.connection.close(); MongoNetworkError: connection establishment was cancelled

  });
var user2=new AccountModel({username: 'randomUser5',age: 11});
user2.validate(function(err){
  console.log(err);
});
AccountModel.findByAgeRange(18,30,function(err,accounts){
  console.log(accounts.length);
});
