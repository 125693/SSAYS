const express = require('express')
const app = express()
const sequelize = require('./database/db')
const PORT = process.env.PORT || 3000

const cors = require('cors');
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/movies', require('./routes/movies'))

app.listen(PORT, function () {
    sequelize.sync({ force: false }).then(() => {
        console.log("db connection success")
    }).catch(error => {
        console.log("db connection error", error)
    })
})