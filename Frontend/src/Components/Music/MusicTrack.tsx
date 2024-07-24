// src/components/MusicTrack.js
import React from 'react';
import { TrackListProps } from '../Interface/Props';


const MusicTrack: React.FC<TrackListProps> = ({ tracks }) => {
    return (
        <>
            {tracks?tracks.map((track)=><div key={track.id} className="p-4 bg-white rounded-lg shadow-md">
                <img src="" alt={track.name} className="w-full h-32 object-cover rounded-md" />
                <h3 className="mt-2 text-lg font-semibold">{track.is_playable}</h3>
                <p className="text-gray-600">{track.name}</p>
                <audio controls className="w-full mt-2">
                    <source src={track.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>): <h1>Track not found</h1>}
        </>
    );
}

export default MusicTrack;
