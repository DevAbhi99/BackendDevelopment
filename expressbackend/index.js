const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const app=express();
const router=require('../expressbackend/routes/route');

//middleware
app.use(cors());

app.use(bodyparser.json());

const port=2500;


app.use('/user', router);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})