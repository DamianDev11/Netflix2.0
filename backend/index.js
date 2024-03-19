import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import bodyParser from "body-parser"; 
import cors from "cors"

const app = express()

dotenv.config({
    path:".env"
})

const port = process.env.PORT

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true}))
app.set("trust proxy",1)

app.use("/api/v1/user",userRoute);

Promise.all([databaseConnection()])
    .then(()=>
    app.listen(port,()=>console.log(`Server is runing on PORT :${port}`))
    )
    .catch((error)=>{
        console.error(`MongoDB atlas error:${error}`);
        process.exit();
    })

