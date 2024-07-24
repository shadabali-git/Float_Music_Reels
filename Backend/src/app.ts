import  express ,{ Request, Response, NextFunction } from 'express';
import {FRONT_END_URL} from '../config';
const app = express();
const port = process.env.PORT || 4000;

//  cors 
app.use((req:Request, res:Response, next:NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin',FRONT_END_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const videos = [
  { id: 1, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721590261/music_folder/Dancing/ReelAudio-33465_ntt6rk.mp3", tag: ["dancing", "bollywood", "old"] },
  { id: 2, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721590186/music_folder/Dancing/ReelAudio-81667_yju5ak.mp3", tag: ["dancing", "mood"] },
  { id: 3, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721588069/music_folder/Gym/ReelAudio-26108_cubjrt.mp3", tag: ["attitude"] },
  { id: 4, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721590088/music_folder/Dancing/ReelAudio-4650_o3hnpg.mp3", tag: ["dancing", "bollywood"] },
  { id: 5, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721571612/music_folder/Dancing/ReelAudio-69742_yxy8vp.mp3", tag: ["dancing", "bollywood"] },
  { id: 6, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721571363/music_folder/Dancing/ReelAudio-41634_omdyjq.mp3", tag: ["dancing", "bollywood", "mood"] },
  { id: 7, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721590555/music_folder/Gym/sani_deval_ki_body_%24tag%3Dgym.mp3", tag: ["gym", "attitude"] },
  { id: 8, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721592918/music_folder/Musiim/urdu_ayat_recite_%24tag%3Dmuslim.mp3", tag: ["muslim", "bollywood"] },
  { id: 9, videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721591240/music_folder/Musiim/bajrangi_bhai_kawali_%24tag%3Dmuslim.mp3", tag: ["muslim"] },
  { id: 10,videoUrl: "https://res.cloudinary.com/ddnum51yo/video/upload/v1721837552/music_folder/Hindu/Arambhaiprachandtag%3DHindu.mp3", tag: ["hindu","motivation"] },
];

app.get('/videos', (req:Request, res:Response) => {
   

  res.json(videos);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
