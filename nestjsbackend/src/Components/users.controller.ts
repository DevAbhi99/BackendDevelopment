import { Controller, Post, Get, Put, Delete, Req, Res, Body, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Request, Response } from "express";



@Controller('/users')
export class UsersController{

constructor(private readonly usersService:UsersService){

}

    @Post('/sendData')
    async sendData(@Body() body:any, @Req() req:Request, @Res() res:Response){

     try{
  
        await this.usersService.sendData(body);

        res.status(200).json({message:'Data inserted Successfully!'});
     }
     catch(error){
      console.log(`${error} occurred!`);
     }

    }

    @Get('/getData')
    async getData(@Res() res:Response){
    
        try{

            const result=await this.usersService.getData();

            res.status(200).json(result);
        }
        catch(error){
          console.log(`${error} occurred!`);
        }
    }

    @Get('/getData/:id')
    async getDataById(@Param('id') id:string, @Req() req:Request, @Res() res:Response){

    try{

     const result=await this.usersService.getDataById(+id);

     res.status(200).json(result);
    }
    catch(error){
    console.log(`${error} occurred!`);
    }

    }

    @Put('updateData/:id')
    async updateData(@Body() body:any, @Param('id') id:string, @Req() req:Request, @Res() res:Response){

        try{

            await this.usersService.updateData(+id, body);

            res.status(200).json({message:'Data updated'});
        }
        catch(error){
            console.log(`${error} occurred!`);
        }
    }


    @Delete('deleteData/:id')
    async deleteData(@Param('id') id:string, @Req() req:Request, @Res() res:Response){

  try{

    await this.usersService.deleteData(+id);

     res.status(200).json({message:'Data deleted'});

  }
  catch(error){
     console.log(`${error} occurred!`);
  }

    }

}