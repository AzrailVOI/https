const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.get('/', (req, res) => {
    console.log((req.connection.remoteAddress).split(":").pop())
  res.send('Hello World from Polska NodeJS Server')
})

/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
https.createServer(options, app).listen(port, console.log(`server runs on port ${port}`))
