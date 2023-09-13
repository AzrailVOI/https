const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log((req.connection.remoteAddress).split(":").pop())
  res.send('Hello World from Polska NodeJS Server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
