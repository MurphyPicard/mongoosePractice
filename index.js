var _ = require('underscore');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var uri = 'mongodb://127.0.0.1:27017/movies';



mongodb.MongoClient.connect(uri, (error, db)=>{
  if(error){
    console.log(error);
    process.exit(1);
  }//if

  var doc = {
    title: 'Jaws',
    year: 1975,
    director: 'Steven Speilberg',
    rating: 'PG'
  };//doc

  db.collection('movies').insert(doc, (error, result)=>{
    if(error){
      console.log(error);
      process.exit(1);
    }
    var query = {year: 1975};
    db.collection('movies').find().toArray((error, docs)=>{
      if(error){
        console.log(error);
        process.exit(1);
      }//if
      console.log('Ara found docs: ');
      docs.forEach((doc)=>{
        console.log(JSON.stringify(doc));
      })//forEach
      process.exit(0);
    });//toArray
  });//insert
});//connect



_.each(['Ready?','Set?','GO!'], (v)=>{
  console.log(v);
});


// mongoose.connect('mongodb://127.0.0.1:27017/shoes');
//
// var Schema = mongoose.Schema;
//
// // create a schema
// var userSchema = new Schema({
//   name: String,
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   admin: Boolean,
//   location: String,
//   meta: {
//     age: Number,
//     website: String
//   },
//   created_at: Date,
//   updated_at: Date
// });
//
// // the schema is useless so far
// // we need to create a model using it
// var User = mongoose.model('User', userSchema);
//
// // make this available to our users in our Node applications
// module.exports = User;
