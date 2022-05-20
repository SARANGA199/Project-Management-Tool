require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const colors = require('colors')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/userRoutes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

//routes
app.use('/user',userRouter);

// Connect to mongodb
const URI = process.env.MONGO_URL
mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, err =>{
    if(err) throw err;
    console.log(`MONGODB CONNECTED SUCCESSFULLY `.cyan)
});

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{

  console.log(`Server is up and running on ${PORT}`.blue);

});



