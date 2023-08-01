//npm init
//MERN E express
//express middleware
//mongoose
//nodemon -g npm i nodemon -g
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const userRoutes = require('./routes/UserRoutes');
const roleRoutes = require('./routes/RoleRoutes');


//localhost:3000/user/user
app.use('/user',userRoutes);
app.use('/role',roleRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/mernintern",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
})






const PORT = 3000
app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})