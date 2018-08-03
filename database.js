import mongoose from 'mongoose';


mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { useNewUrlParser: true }, function (err) {
    if (err) throw err;
  console.log('Mongo Db successfully connected');

});
export const db = mongoose.connection;




