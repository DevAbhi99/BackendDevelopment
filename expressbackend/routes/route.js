const express=require('express');
const router=express.Router();
const db=require('../database/db');


//Crud operations

//create
router.post('/sendData', (req, res)=>{

const {name, email, password}=req.body;

const sql='insert into signup(name, email, password) values(?,?,?);';

db.query(sql, [name, email, password], (error, response)=>{

    if(error){
        console.log(`${error} occurred!`);
        res.status(500).json({message:'Data could not be inserted!'});
   return;
    }

res.status(200).json({message:'Data inserted!'});

})

})

//read

router.get('/getData', (req,res)=>{

const sql='select * from signup;';


db.query(sql, (error, response)=>{

    if(error){
        console.log(`Could not display data due to error ${error}`);
          res.status(500).json({message:'Cannot display data!'});
     return;
        }

        res.status(200).json(response);
});
})

//read specific data

router.get('/getData/:id', (req,res)=>{

    const userId=req.params.id;

    const sql='select * from signup where id=?;';

    db.query(sql, userId, (error, response)=>{
        if(error){
            console.log(`Could not display data due to error ${error}`);
          res.status(500).json({message:'Cannot fetch data!'});
     return;
        }

        res.status(200).json(response);
    } )

})


//update

router.put('/updateData/:id', (req,res)=>{

const {name, email, password}=req.body;

const userId=req.params.id;

const sql='update signup set name=?, email=?, password=? where id=?;';

db.query(sql, [name, email, password, userId], (error, response)=>{

    if(error){
          console.log(`Could not display data due to error ${error}`);
          res.status(500).json({message:'Cannot update data!'});
          return;
    }

    res.status(200).json({message:'Data updated!'});
})

})


//delete 

router.delete('/deleteData/:id', (req,res)=>{

    const userId=req.params.id;

    const sql='delete from signup where id=?;';

    db.query(sql, userId, (error, response)=>{

        if(error){
        console.log(`Could not display data due to error ${error}`);
          res.status(500).json({message:'Cannot delete data!'});
          return;
        }

        res.status(200).json({message:'Data deleted!'});

    })
})

module.exports=router;