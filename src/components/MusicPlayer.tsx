import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [gateActive, setGateActive] = useState(true);
  const [gateAnimating, setGateAnimating] = useState(false);
  const autoHideTimerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const previousVolumeRef = useRef(0.3);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Configure audio
    audio.volume = volume;
    audio.loop = true;
    audio.muted = false;

    // Keep UI in sync with actual audio state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Start playback on first interaction (scroll/touch/click/keydown)
    const startOnFirstInteraction = () => {
      if (hasInteracted) return;
      setHasInteracted(true);
      try { audio.load(); } catch {}
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      detach();
    };

    const attach = () => {
      window.addEventListener('scroll', startOnFirstInteraction, { passive: true } as any);
      window.addEventListener('touchstart', startOnFirstInteraction, { passive: true } as any);
      window.addEventListener('touchend', startOnFirstInteraction, { passive: true } as any);
      window.addEventListener('click', startOnFirstInteraction, { passive: true } as any);
      window.addEventListener('keydown', startOnFirstInteraction);
      document.addEventListener('scroll', startOnFirstInteraction, { passive: true } as any);
      document.addEventListener('touchend', startOnFirstInteraction, { passive: true } as any);
      document.addEventListener('click', startOnFirstInteraction);
      document.addEventListener('keydown', startOnFirstInteraction);
    };
    const detach = () => {
      window.removeEventListener('scroll', startOnFirstInteraction);
      window.removeEventListener('touchstart', startOnFirstInteraction);
      window.removeEventListener('touchend', startOnFirstInteraction);
      window.removeEventListener('click', startOnFirstInteraction);
      window.removeEventListener('keydown', startOnFirstInteraction);
      document.removeEventListener('scroll', startOnFirstInteraction);
      document.removeEventListener('touchend', startOnFirstInteraction);
      document.removeEventListener('click', startOnFirstInteraction);
      document.removeEventListener('keydown', startOnFirstInteraction);
    };

    attach();

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      detach();
    };
  }, [volume, hasInteracted]);

  // Lock page scroll while the invitation gate is active
  useEffect(() => {
    const previous = document.body.style.overflow;
    if (gateActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previous || '';
    }
    return () => {
      document.body.style.overflow = previous || '';
    };
  }, [gateActive]);

  const handleUnlockAndPlay = () => {
    const audio = audioRef.current;
    setGateAnimating(true);
    setHasInteracted(true);
    setShowSlider(false);
    if (audio) {
      try { audio.load(); } catch {}
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
    window.setTimeout(() => setGateActive(false), 700);
  };

  // Keep audio element volume in sync when slider changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    if (volume === 0) {
      audio.muted = true;
      setIsMuted(true);
    } else {
      audio.muted = false;
      setIsMuted(false);
    }
  }, [volume]);

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
      audio.muted = false;
      const restore = previousVolumeRef.current > 0 ? previousVolumeRef.current : 0.3;
      setVolume(restore);
      setIsMuted(false);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (values: number[]) => {
    const next = Math.max(0, Math.min(1, values[0] ?? 0));
    setVolume(next);
    setShowSlider(true);
    if (autoHideTimerRef.current) {
      window.clearTimeout(autoHideTimerRef.current);
    }
    autoHideTimerRef.current = window.setTimeout(() => {
      setShowSlider(false);
    }, 1200);
  };

  useEffect(() => {
    return () => {
      if (autoHideTimerRef.current) {
        window.clearTimeout(autoHideTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      onMouseEnter={() => setShowSlider(true)}
      onMouseLeave={() => setShowSlider(false)}
    >
      <audio
        ref={audioRef}
        preload="auto"
        playsInline
      >
        {/* Primary: your provided public file */}
        <source src="/iris.mp3" type="audio/mpeg" />
        {/* Fallback royalty-free sample */}
        <source src="https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3" type="audio/mpeg" />
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

      <button
        aria-label="Show volume"
        className="wedding-card p-2 rounded-md border text-sm"
        onClick={() => setShowSlider((s) => !s)}
        onTouchStart={() => setShowSlider(true)}
      >
        <SlidersHorizontal className="h-4 w-4" />
      </button>

      <div
        className={
          `${showSlider ? 'w-28 px-2 py-1 wedding-card opacity-100' : 'w-0 p-0 opacity-0 pointer-events-none'} ` +
          `overflow-hidden transition-all duration-200`
        }
        aria-expanded={showSlider}
      >
        <Slider
          value={[volume]}
          min={0}
          max={1}
          step={0.01}
          onValueChange={handleVolumeChange}
          aria-label="Volume"
        />
      </div>
      {gateActive && (
        <button
        className="fixed inset-0 z-[60] overflow-hidden"
        onClick={handleUnlockAndPlay}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleUnlockAndPlay(); }}
        aria-label="Click to view invitation"
      >
        {/* Sliding panels */}
        <div className="absolute inset-0 flex pointer-events-none">
          <div
            className={`w-1/2 h-full bg-white/80 backdrop-blur-sm border-r border-white/40 transform transition-transform duration-700 ease-out ${gateAnimating ? '-translate-x-full' : 'translate-x-0'} origin-left`}
          />
          <div
            className={`w-1/2 h-full bg-white/80 backdrop-blur-sm border-l border-white/40 transform transition-transform duration-700 ease-out ${gateAnimating ? 'translate-x-full' : 'translate-x-0'} origin-right`}
          />
        </div>

        {/* Center title - Properly sized for card */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <span
            className={
              `wedding-script inline-block w-full text-center leading-tight ` +
              `px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 ` +
              `rounded-lg sm:rounded-xl md:rounded-2xl bg-white/70 border border-white/40 ` +
              `backdrop-blur-md shadow-lg ring-1 ring-white/20 ` +
              `transition-opacity duration-500 ${gateAnimating ? 'opacity-0' : 'opacity-100'} ` +
              `bg-clip-text text-transparent bg-gradient-to-r from-[#7a0a0a] via-[#a1122b] to-[#c58a12] ` +
              `drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] ` +
              `max-w-[95%] mx-auto`
            }
            style={{
              fontSize: 'clamp(1.5rem, 8vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            Click to View Invitation
          </span>
        </div>
      </button>
      )}
      {/* No overlay; slider only appears when its icon is clicked */}
    </div>
  );
};

export default MusicPlayer;