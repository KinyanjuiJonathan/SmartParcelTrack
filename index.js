const express = require('express')
const app = express()
app.use(express.json())
const cors= require('cors')

app.use(cors({
origin: 'http://localhost:3000'}));


app.use('/parcels', require('./routes/parcelRoutes'))
app.use('/customers', require('./routes/customerRoutes'))

app.listen(5000, () =>{
    console.log("running");
})