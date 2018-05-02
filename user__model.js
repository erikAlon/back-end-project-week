const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT = 11;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    lowercase: true
  }
});
UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT, (err, hash) => {
    if (err) return next(err);
    else {
      this.password = hash;
      return next();
    }
  });
});
UserSchema.methods.checkpassword = function(plaintxtpw) {
  return bcrypt.compare(plaintxtpw, this.password);
};
module.exports = mongoose.model('User', UserSchema);
/*
1. imports

2. schema

3. pre and post

4. exports
*/
