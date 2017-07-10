'use strict'
let MongoClient = require('mongodb').MongoClient
let dbConf      = require('./config').database
let connectionString = `mongodb://${dbConf.host}:${dbConf.port}/${dbConf.dbName}`
let initDb = [
  {
    "name"  : "Hotel Emperador",
    "stars" : 3,
    "price" : 1596,
  },
  {
    "name"  : "Petit Palace San Bernardo",
    "stars" : 4,
    "price" : 2145
  },
  {
    "name"  : "Hotel Nuevo Boston",
    "stars" : 2,
    "price" : 861
  }
]


MongoClient.connect(connectionString, {}, (err, conn) => {
  if(err){
    console.error(err)
  } else {
    conn.collection('hotels').insertMany(initDb, (err, result) => {
      if(err) console.error(err)
      console.log(result)
      conn.close()
      process.exit()
    })
  }
})


