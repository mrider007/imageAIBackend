import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import imageRoutes from "./routes/imageroutes.js"



dotenv.config();


const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));


app.use("/api/v1/post",postRoutes);
app.use("/api/v1/image",imageRoutes);

app.get("/",async(req,res) =>{
    res.send('hello from imageAI 2.0');
})


const startserver = async () =>{


    try {
        connectDB(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error)
    }

    app.listen(8080,() => console.log('server start on post http://localhost:8080'))

}

startserver()