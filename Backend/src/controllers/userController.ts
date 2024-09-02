import { Request,Response } from "express";

import { PrismaClient } from "@prisma/client";
import { createToken } from "../middlewares/authenticationUser";
const prisma=new PrismaClient()
import passport from "passport"

export const signup=async (req:Request,res:Response)=>{
    try {
        const {name,email,password}=req.body
        if(!email || !name || !password){
            return res.json({
                message:"Credentials are required"
            })
        }

        const existingUser=await prisma.user.findUnique({
            where:{
                email:req.body.email
            }
        })
        if(existingUser){
            return res.json({
                message:
                "This user already exists"
            })
        }

        const newUser=await prisma.user.create({
            data:{
                email:req.body.email,
                password:req.body.password,
                name:req.body.password
            }
        })
        const token=await createToken({
            email:newUser.email,
            name:newUser.name
        })
        console.log(token);
        

        return res.status(201).json(token)
        
    } catch (error) {
        res.status(409).json({
            message: (error as Error).message,
          });
        
    }

}

export const login=async(req:Request,res:Response)=>{
    try {

        const {email}=req.body
        const existingUser=await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(!existingUser){
            return res.json({
                message:"No such user exists"
            })
        }

        const token=await createToken({
            id:existingUser.id,
            name:existingUser.name,
            email:existingUser.email

        })

        return res.status(201).json(token)
        
    } catch (error) {
    res.status(409).json({
        message: (error as Error).message
    })
        
    }

}

