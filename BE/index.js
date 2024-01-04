const express = require('express');
const cors = require('cors');
const { connection } = require('./db');
const UserRouter = require('./Route/user.route');
const ProductRouter = require('./Route/product.route');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api',UserRouter)
app.use('/api/products',ProductRouter)

app.get('/',(req,res)=>{
    res.status(200).send('On')
})

app.listen(3000, async () => {
    try {
        await connection;
        console.log("connected to DB")
    }
    catch (err) {
        console.log(err.message)
    }
    console.log("running on 3000")
})