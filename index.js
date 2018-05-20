const express = require('express');
const app     = express();

app.get('/', (rrequest, response) => {
  response.send('Hello World!')
})

app.get('/recipes', (request, response) => {
  response.send(request.query.category)
})

app.listen(80, () => console.log('Listing port 80 (HTTP)'))
