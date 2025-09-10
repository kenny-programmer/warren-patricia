import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up audio properties
    audio.volume = 0.3; // Set to 30% volume
    audio.loop = true;

    // Try to autoplay after user interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audio) {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(console.error);
        }
      }
    };

    // Listen for any user interaction
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = 0.3;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      <audio
        ref={audioRef}
        preload="auto"
      >
        {/* Wedding music - A Thousand Years by Christina Perri */}
        <source src="https://www.youtube.com/watch?v=nbSM9CdD72E" type="audio/mp4" />
        {/* Fallback for browsers that don't support YouTube direct links */}
        <source src="https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      
      <Button
        variant="secondary"
        size="sm"
        onClick={togglePlay}
        className="wedding-card"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      
      <Button
        variant="secondary"
        size="sm"
        onClick={toggleMute}
        className="wedding-card"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;