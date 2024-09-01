import express from "express"
const app=express()
import { configDotenv } from "dotenv"
import { userRouter } from "./routes/userRoute"
configDotenv()

app.use(express.json())
app.use(userRouter)

const PORT=process.env.PORT? process.env.PORT : 3000
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
    
})