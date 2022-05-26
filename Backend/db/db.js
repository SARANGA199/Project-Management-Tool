import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {

    console.log(`MONGODB CONNECTED SUCCESSFULLY `.cyan);
}).catch((err) => {


    console.log(`MONGODB CONNECTION FAIL `.red);
    console.log(err);

})