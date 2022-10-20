import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
const PORT = 5000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})


app.post('/auth/login', (req, res) => {
  console.log(req.body)

  const token = jwt.sign({
    email: req.body.email,
    fullName: 'Вася Пупкин',

  }, 'secret123')
  res.json({
    success: true
  })
})


app.listen(PORT, (err) => {
  if(err) {
    return console.log(err)
  }

  console.log(`Server has been started in port ${PORT}`)
})