import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import http from "http";


dotenv.config();

const app=express();

const server=http.createServer(app);
app.use(cors({
    origin: 'http://localhost:5173',  // Allow only this origin
    credentials: true                // Allow credentials (cookies, authorization headers, etc.)
  }));
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const PORT=process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);



server.listen(PORT,()=>{
    connectDB();
    console.log(`server is running at port ${PORT}`);
})