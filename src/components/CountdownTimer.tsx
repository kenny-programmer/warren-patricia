import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-10-04T15:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 md:gap-8 fade-in-up">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center wedding-card p-4 md:p-6 border border-wedding-gold/20">
          <div className="text-3xl md:text-5xl font-bold mb-2" style={{ color: 'hsl(var(--wedding-maroon))', textShadow: '0 2px 4px hsl(0 0% 0% / 0.1)' }}>
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base capitalize font-medium" style={{ color: 'hsl(var(--wedding-gold))' }}>
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;