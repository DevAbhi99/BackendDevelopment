import { Injectable } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class UsersService{

//Create
async sendData(data){

try{

await axios.post('http://localhost:2500/user/sendData',data);

}
catch(error){

console.log(`${error} occurred!`);
}

}


//Read

async getData(){
    try{

        const response=await axios.get('http://localhost:2500/user/getData');
    
        return response.data;
    }
    catch(error){
  console.log(`${error} occurred!`);
    }
}


//Read specific data
async getDataById(id:number){
    try{

   const response=await axios.get(`http://localhost:2500/user/getData/${id}`);

   return response.data;

    }
    catch(error){
  console.log(`${error} occurred!`);
    }
}

//update data

async updateData(id:number, data){

    try{
   
        await axios.put(`http://localhost:2500/user/updateData/${id}`,data);
        

    }
    catch(error){
   console.log(`${error} occurred!`);
    }
}

async deleteData(id:number){

    try{

await axios.delete(`http://localhost:2500/user/deleteData/${id}`);

    }
    catch(error){
console.log(`${error} occurred!`);
    }
}

}