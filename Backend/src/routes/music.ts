import express, { Request, Response, NextFunction } from 'express';
import { Music } from '../models/music';


const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
  try {
    const music = await Music.find();
    res.json(music);
} catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// POST request to add new music
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, url, tags, likes, dislikes, comments } = req.body;
    
    // Create a new music entry
    const music = new Music({
      title,
      url,
      tags,
      likes: likes || 0,
      dislikes: dislikes || 0,
      comments: comments || [],
    });

    // Save the music entry to the database
    const newMusic = await music.save();

    // Respond with the created music entry
    res.status(201).json(newMusic);
  } catch (err) {
     const error = err as Error;
    res.status(400).json({ message: 'Failed to create music entry.', error: error.message });
  }
});




export default router;
