const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

const port = process.env.PORT || 7000

app.use(express.static(path.join(__dirname, 'Client/build')))


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/Client/build/index.html'));
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})