const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const https = require("https")
const geoip = require('geoip-lite')

const msg = (ip) =>{
    const loc = geoip.lookup(ip)
    console.log(loc)
    return `
    <h1>Your IP: ${ip}</h1>
    <h1>Your location</h1>:
    <p>Country: ${loc.country}</p> 
    <p>City: ${loc.city}</p>
    `
}

app.get('/', (req, res) => {
    const ip = (req.connection.remoteAddress).split(":").pop().toString()
    console.log(ip)
  res.send(msg(ip))
})

/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
https.createServer(options, app).listen(port, console.log(`server runs on port ${port}`))
