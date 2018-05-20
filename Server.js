const express = require('express');
const app     = express();

app.get('/', (rrequest, response) => {
  response.send('Hello World!')
})

app.listen(80, () => console.log('Listing port 80 (HTTP)'))
