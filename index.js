const express = require('express');
const app     = express();
const fs      = require('fs');
const mongo   = require('mongodb').MongoClient;
const url     = 'mongodb://localhost:27017/'

const LOG_ERR =

app.get('/', (rrequest, response) => {
  response.send('Hello World!')
})

app.get('/recipes', (request, response) => {
  if(request.query.category != null){

    mongo.connect(url, (err, db) =>{
      if(err) throw err;

      let dbo = db.db('heyceitas'),
          clt = 'recipes_category_' + request.query.category

      dbo.collection(clt).find({}).toArray((err, result) => {
        response.send(result)
      })

    })

  }else{
    response.send('[ ERROR ]: category not defined')
  }
})

app.listen(80, () => console.log('Listing port 80 (HTTP)'))
