const mongoose = require('mongoose');
const server = require('./server');
const port = process.env.PORT || 5050;
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://erik:erik@ds111050.mlab.com:11050/lambdanotedb',
  {},
  err => {
    if (err) throw new Error(err);
    console.log("\n\n***connected to remote myLab's DB***\n\n");
  }
);
server.listen(port, () => {
  console.log(`\n\n***Listening on ${port}***\n\n`);
});
