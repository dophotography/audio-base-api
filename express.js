const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.use('/player/:fileName', (req, res) => {
  const fileName = req.params.fileName
  const filePath = path.join(__dirname, 'player', fileName)

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('File not found')
      return
    }

    res.sendFile(filePath)
  })
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})