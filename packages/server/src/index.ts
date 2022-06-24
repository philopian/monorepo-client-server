import cors from 'cors'
import express from 'express'

import config from './config'

const app = express()
const port = 8080

app.use(cors(config.corsOptions))

app.get('/', (req, res) => {
  setTimeout(() => {
    res.json({ message: 'Hello World!' })
  }, 1000)
})

app.listen(port, () => {
  console.log(`The magic happens at ${config.REST_API_URL}`)
})
