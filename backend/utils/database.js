import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({
    path:"../.env"
})

const databaseConnection = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log(`DB connected successfully`))
    .catch((error)=>console.log(error)
    )
}

export default databaseConnection;