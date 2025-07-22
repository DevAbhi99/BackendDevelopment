const mysql=require('mysql2');

const connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'Trishala@99',
database:'backendprogram'
});


connection.connect((error)=>{
    if(error){
        console.log(`${error} occurred while connecting to database`);
    }
    else{
        console.log('Successfully connected to database');
    }
})

module.exports=connection;
