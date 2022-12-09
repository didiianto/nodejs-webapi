const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (request, response) => {
    response.send('Home Page')
  })

  app.post('/login', (request, response) => {
    console.log({response: request.body});
    response.send('Login berhasil')
  })

  app.put('/update', (request, response) => {
    console.log({response: request.body});
    response.send('Update berhasil')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})