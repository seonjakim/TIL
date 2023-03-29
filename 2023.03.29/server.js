const express = require('express')

const app = express()

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server listening on port 3000')
})

app.get('/', (req, res) => {
  res.send('Wellcome')
})