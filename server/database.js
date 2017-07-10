/**
 * Created by josecullen on 07/07/17.
 */
'use strict'
let mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

let connect = (dbConf) =>{
  let connectionString = `mongodb://${dbConf.host}:${dbConf.port}/${dbConf.dbName}`

  mongoose.connect(connectionString);
  let db = mongoose.connection;

  db.on(
    'error', (err) => {
    console.error(err.message, 'retry...')
  setTimeout(() => mongoose.connect(connectionString), 3000)
}
);

  db.on('open', function() {
    console.log(`connected to database ${connectionString}`)
  });

}

module.exports = {
  connect 			: connect
};
