const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

const pokemonRouter = require('./routes/pokemons')
app.use('/', pokemonRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
