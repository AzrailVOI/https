const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const https = require("https")

app.get('/', (req, res) => {
    const ip = (req.connection.remoteAddress).split(":").pop().toString()
    console.log(ip)
  res.send(`<h1>Your IP: ${ip}</h1>`)
})

/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
https.createServer(options, app).listen(port, console.log(`server runs on port ${port}`))
