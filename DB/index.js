import express from 'express';
import  mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();
import dotenv from 'dotenv';
import homePageRouter from './router/homepage.router.js';
import doctorRouter from './router/doctorFilter.route.js'
import appointmentSlots from './router/appontmentSlotsCheck.router.js'
dotenv.config();

// import { createClient } from 'redis';
// const client = createClient({
//   socket: {
//     host: "127.0.0.1",
//     port: 6379
//   }
// });



  
//  // client.on("error", (err) => console.error("Redis Error:"));
  
//   await client.connect();
//   console.log("Connected to Redis");

const corsOptions = {
  origin: 'https://681eb043bc4a581bb322d0af--flourishing-cranachan-f5b0f0.netlify.app', // Your frontend URL
  credentials: true,               // Allow cookies to be sent
  methods: ['GET', 'POST', 'PUT','DELETE','PATCH', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type','Authorization'],     // Allowed headers
  optionsSuccessStatus: 204,        // For legacy browser support
  maxAge: 600                       // Cache preflight response for 10 minutes
};
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api',homePageRouter);
app.use('/api',doctorRouter);
app.use('/api',appointmentSlots);
mongoose.connect(process.env.REACT_MongoDB_URI).then(() => {
   // mongodb+srv://bhatvinay74:<db_password>@cluster0.tmhn1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    app.listen(3006, () => {
      console.log('Connected successfully.');
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
