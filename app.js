const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000

app.get('/', (req, res) => {
  res.send('')
})
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.post('/bmicalculator', (req, res) => {
    let height = Number(req.body.heght);
    let weight = Number(req.body.weight);
    height2 = height/100;
    let result = (weight / Math.pow(height2, 2)).toFixed(2)
    res.send("<h1>Your BMI is: " + result + "</h1>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`)
})