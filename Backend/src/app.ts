// import express from 'express';
// import mongoose from 'mongoose';
// import musicRouter from './routes/music';
// import dotenv from 'dotenv';

// const app = express();
// dotenv.config();

// mongoose.connect('mongodb://localhost/music-api')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

// app.get('/',(req,res)=>{

//     res.send('Hello World');

// })

// app.use(express.json());
// app.use('/music', musicRouter);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import  express ,{ Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

//  cors 
app.use((req:Request, res:Response, next:NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const videos = [
  { id: 1, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721571612/ReelAudio-69742_yxy8vp.mp3", tag: ["dancing", "bollywood", "old"] },
  { id: 2, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721571363/ReelAudio-41634_omdyjq.mp3", tag: ["dancing", "mood"] },
  { id: 3, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721588069/ReelAudio-26108_cubjrt.mp3", tag: ["attitude"] },
  { id: 4, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721590088/ReelAudio-4650_o3hnpg.mp3", tag: ["dancing", "bollywood"] },
  { id: 5, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721590186/ReelAudio-81667_yju5ak.mp3", tag: ["dancing", "bollywood"] },
  { id: 6, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721590261/ReelAudio-33465_ntt6rk.mp3", tag: ["dancing", "bollywood", "mood"] },
  { id: 7, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721590555/sani_deval_ki_body_%24tag%3Dgym.mp3", tag: ["gym", "attitude"] },
  { id: 8, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721591240/bajrangi_bhai_kawali_%24tag%3Dmuslim.mp3", tag: ["muslim", "bollywood"] },
  { id: 9, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721592918/urdu_ayat_recite_%24tag%3Dmuslim.mp3", tag: ["muslim"] }
];

app.get('/videos', (req:Request, res:Response) => {
   

  res.json(videos);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
