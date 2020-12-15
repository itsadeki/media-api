import express from 'express'

const server = express()
const port = process.env.PORT || 8080 || 0

server.get('/api', (req, res) => {
  res.json({
    data: "Hello World" 
  })
})

server.listen(port, () => {
  console.log(`Server on port ${port}`)  
})