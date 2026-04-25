import React, { useEffect, useRef, useState } from 'react';

const PulseRunner = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [canReboot, setCanReboot] = useState(true);
  const [rebootTime, setRebootTime] = useState(0);
  const [isStarting, setIsStarting] = useState(false);
  const [startCountdown, setStartCountdown] = useState(0);
  
  // Game engine bridge
  const engineRef = useRef({ jump: () => {}, resetGame: () => {} });
  // State bridge for canvas loop
  const stateRef = useRef({ isPlaying: false, gameOver: false, isStarting: false });

  // Sync React state to stateRef securely
  useEffect(() => {
    stateRef.current = { isPlaying, gameOver, isStarting };
  }, [isPlaying, gameOver, isStarting]);

  const [topScores, setTopScores] = useState(() => {
    try {
      const saved = localStorage.getItem('pulseRunnerTopScores');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [0, 0, 0, 0, 0];
  });

  const saveScore = (newScore) => {
    const newScores = [...topScores, newScore].sort((a, b) => b - a).slice(0, 5);
    setTopScores(newScores);
    localStorage.setItem('pulseRunnerTopScores', JSON.stringify(newScores));
  };

  // Cooldown Timer
  useEffect(() => {
    let timer;
    if (gameOver && !canReboot && rebootTime > 0) {
      timer = setTimeout(() => setRebootTime(prev => prev - 1), 1000);
    } else if (gameOver && !canReboot && rebootTime <= 0) {
      setCanReboot(true);
    }
    return () => clearTimeout(timer);
  }, [gameOver, canReboot, rebootTime]);

  // 3..2..1 Timer
  useEffect(() => {
    let timer;
    if (isStarting && startCountdown > 0) {
      timer = setTimeout(() => setStartCountdown(prev => prev - 1), 1000);
    } else if (isStarting && startCountdown <= 0) {
      setIsStarting(false);
      setIsPlaying(true);
    }
    return () => clearTimeout(timer);
  }, [isStarting, startCountdown]);

  // User Input Handler
  const handleInteraction = (e) => {
    if (e && e.type === 'keydown' && e.code !== 'Space' && e.code !== 'ArrowUp') return;
    if (e && e.type === 'keydown') e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    if (isStarting) return; // ignore input during 3..2..1

    if (!isPlaying && !gameOver) {
      setIsStarting(true);
      setStartCountdown(3);
    } else if (gameOver) {
      if (canReboot) {
        engineRef.current.resetGame();
        setIsStarting(true);
        setStartCountdown(3);
      }
    } else {
      engineRef.current.jump();
    }
  };

  // Global Keydown
  useEffect(() => {
    window.addEventListener('keydown', handleInteraction);
    return () => window.removeEventListener('keydown', handleInteraction);
  }, [isPlaying, gameOver, isStarting, canReboot]);

  // =====================
  // CANVAS ENGINE LOOP (Runs exactly ONCE)
  // =====================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let animationId;
    let frameCount = 0;
    
    const player = {
      x: 60, // Fixed X for better mobile sizing
      y: canvas.height - 40 - 20, 
      width: 40,
      height: 40,
      dy: 0,
      jumpForce: -14, 
      gravity: 0.8,   
      isJumping: false,
      color: '#00f2ff' 
    };

    let obstacles = [];
    let particles = [];
    let currentScore = 0;
    let baseSpeed = 7; 

    // Dynamic floor computation for responsive resizing
    const getFloorY = () => canvas.height - 20;

    engineRef.current.jump = () => {
      const { isPlaying, gameOver, isStarting } = stateRef.current;
      if (!player.isJumping && isPlaying && !gameOver && !isStarting) {
        player.dy = player.jumpForce;
        player.isJumping = true;
      }
    };

    engineRef.current.resetGame = () => {
      player.y = getFloorY() - player.height;
      player.dy = 0;
      player.isJumping = false;
      obstacles = [];
      particles = [];
      currentScore = 0;
      baseSpeed = 7;
      setScore(0);
      setGameOver(false);
    };

    const spawnObstacle = (isDouble = false) => {
      if (obstacles.length > 0) {
        const lastObs = obstacles[obstacles.length - 1];
        if (canvas.width - lastObs.x < 180) return; 
      }
      const floorY = getFloorY();
      obstacles.push({ x: canvas.width, y: floorY - 35, width: 35, height: 35, color: '#ff007f' });
      if (isDouble) obstacles.push({ x: canvas.width + 35, y: floorY - 35, width: 35, height: 35, color: '#ff007f' });
    };

    const createExplosion = () => {
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: player.x + player.width / 2, y: player.y + player.height / 2,
          vx: (Math.random() - 0.5) * 15, vy: (Math.random() - 0.5) * 15,
          life: 1, color: player.color
        });
      }
    };

    const drawGrid = (ctx, speedOffset) => {
      const floorY = getFloorY();
      ctx.strokeStyle = 'rgba(255, 0, 127, 0.4)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ff007f';
      ctx.beginPath();
      ctx.moveTo(0, floorY);
      ctx.lineTo(canvas.width, floorY);
      ctx.stroke();

      ctx.shadowBlur = 0;
      for (let i = -60; i < canvas.width + 60; i += 60) {
        ctx.beginPath();
        const bottomX = i - speedOffset;
        const topX = canvas.width / 2 + (bottomX - canvas.width / 2) * 0.2;
        ctx.moveTo(bottomX, canvas.height);
        ctx.lineTo(topX, floorY);
        ctx.stroke();
      }
    };

    const loop = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { isPlaying, gameOver, isStarting } = stateRef.current;
      let offset = 0;
      const floorY = getFloorY();

      if (isPlaying && !gameOver && !isStarting) {
        frameCount++;
        currentScore++;
        
        if (currentScore % 10 === 0) setScore(currentScore);
        if (currentScore % 200 === 0) baseSpeed *= 1.08;

        const spawnRate = Math.max(35, Math.floor(80 - (baseSpeed * 3)));
        if (frameCount % spawnRate === 0) {
          const shouldDouble = currentScore > 600 && Math.random() > 0.7;
          spawnObstacle(shouldDouble);
        }

        player.dy += player.gravity;
        player.y += player.dy;

        // Dynamic floor snapping for resizing
        if (player.y >= floorY - player.height) {
          player.y = floorY - player.height;
          player.dy = 0;
          player.isJumping = false;
        }

        offset = (frameCount * baseSpeed) % 60;
      } else {
        // Keep player on the ground even if canvas resizes while not playing
        if (!player.isJumping) {
          player.y = floorY - player.height;
        }
      }

      drawGrid(ctx, offset);

      if (!gameOver) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = player.color;
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
        ctx.shadowBlur = 0;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= 0.04;
        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.globalAlpha = p.life;
          ctx.shadowBlur = 10; ctx.shadowColor = p.color; ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, 5, 5);
          ctx.globalAlpha = 1;
        }
      }

      ctx.shadowBlur = 15;
      ctx.shadowColor = '#ff007f';
      ctx.fillStyle = '#ff007f';
      
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        if (isPlaying && !gameOver && !isStarting) {
          obs.x -= baseSpeed;
        }
        
        // Prevent obstacles from floating if canvas resizes vertically
        obs.y = floorY - obs.height;

        ctx.beginPath();
        ctx.moveTo(obs.x + obs.width / 2, obs.y);
        ctx.lineTo(obs.x + obs.width, obs.y + obs.height);
        ctx.lineTo(obs.x, obs.y + obs.height);
        ctx.closePath();
        ctx.fill();

        // Collision detection
        const hitboxShrink = 4;
        if (
          !gameOver && !isStarting &&
          player.x + hitboxShrink < obs.x + obs.width - hitboxShrink &&
          player.x + player.width - hitboxShrink > obs.x + hitboxShrink &&
          player.y + hitboxShrink < obs.y + obs.height - hitboxShrink &&
          player.y + player.height - hitboxShrink > obs.y + hitboxShrink
        ) {
          setGameOver(true);
          setIsPlaying(false);
          setCanReboot(false);
          setRebootTime(5);
          createExplosion();
          saveScore(currentScore);
        }

        if (obs.x + obs.width < 0) obstacles.splice(i, 1);
      }
      ctx.shadowBlur = 0;

      if ((isPlaying && !gameOver) || isStarting) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = 'bold 36px monospace';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#000';
        ctx.fillText(`SCORE: ${currentScore}`, canvas.width - 20, 20);
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []); // <--- EMPTY DEPENDENCY ARRAY. Engine runs securely without capturing stale scope!

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto h-[450px] md:h-auto md:aspect-video rounded-2xl border-2 border-sky-500/30 overflow-hidden shadow-[0_0_30px_rgba(0,242,255,0.15)] bg-[#050505] group select-none"
      onMouseDown={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full touch-none cursor-pointer" 
        style={{ WebkitTapHighlightColor: 'transparent' }}
      />
      
      {/* 3..2..1 Countdown Overlay */}
      {isStarting && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="text-8xl md:text-[150px] font-black text-white drop-shadow-[0_0_30px_rgba(0,242,255,0.8)] animate-pulse">
            {startCountdown}
          </div>
        </div>
      )}

      {/* Start Screen with Leaderboard */}
      {!isPlaying && !gameOver && !isStarting && (
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 bg-black/80 pointer-events-none backdrop-blur-sm p-4 z-10 overflow-y-auto">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-black text-cyan-400 tracking-[0.2em] mb-4 drop-shadow-[0_0_15px_rgba(0,242,255,0.8)] text-center">NEON PULSE</h3>
            <p className="text-white text-base md:text-lg font-medium tracking-widest animate-pulse mt-4 bg-sky-500/20 px-6 py-2 rounded-full border border-sky-500/50 pointer-events-auto cursor-pointer" onClick={handleInteraction}>
              TAP TO START
            </p>
          </div>
          
          <div className="bg-slate-900/90 border border-rose-500/30 p-5 rounded-xl min-w-[200px] shadow-2xl scale-90 md:scale-100 shrink-0">
            <h4 className="text-rose-400 font-bold tracking-widest mb-4 text-center border-b border-rose-500/30 pb-2">TOP 5 SCORES</h4>
            <div className="flex flex-col gap-3 font-mono">
              {topScores.map((s, i) => (
                <div key={i} className="flex justify-between text-base items-center">
                  <span className="text-slate-500 text-sm">#{i + 1}</span>
                  <span className={i === 0 && s > 0 ? "text-yellow-400 font-bold text-lg drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" : "text-slate-200"}>
                    {s > 0 ? s.toLocaleString() : '---'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {gameOver && !isStarting && (
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 bg-black/80 pointer-events-none backdrop-blur-sm z-10 p-4 overflow-y-auto">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-black text-rose-500 tracking-widest mb-2 drop-shadow-[0_0_15px_rgba(255,0,127,0.8)] text-center">GAME OVER</h3>
            <p className="text-white text-2xl md:text-3xl font-bold font-mono bg-rose-500/20 px-6 py-3 rounded-lg border border-rose-500/50 shadow-lg mt-2 mb-6">SCORE: {score.toLocaleString()}</p>
            
            {canReboot ? (
              <p 
                className="text-cyan-400 text-sm md:text-base font-medium tracking-widest animate-pulse border border-cyan-400/50 px-6 py-2 rounded-full pointer-events-auto cursor-pointer hover:bg-cyan-900/30"
                onClick={handleInteraction}
              >
                TAP TO REBOOT
              </p>
            ) : (
              <p className="text-slate-500 text-sm md:text-base font-medium tracking-widest border border-slate-700/50 px-6 py-2 rounded-full pointer-events-auto bg-slate-900/80">
                Game can start again in {rebootTime}s...
              </p>
            )}
          </div>

          <div className="bg-slate-900/90 border border-cyan-500/30 p-5 rounded-xl min-w-[200px] shadow-2xl scale-90 md:scale-100 shrink-0">
            <h4 className="text-cyan-400 font-bold tracking-widest mb-4 text-center border-b border-cyan-500/30 pb-2">LEADERBOARD</h4>
            <div className="flex flex-col gap-3 font-mono">
              {topScores.map((s, i) => (
                <div key={i} className="flex justify-between text-base items-center">
                  <span className="text-slate-500 text-sm">#{i + 1}</span>
                  <span className={s === score ? "text-cyan-400 font-bold text-lg animate-pulse" : (i === 0 ? "text-yellow-400 font-bold text-lg" : "text-slate-200")}>
                    {s > 0 ? s.toLocaleString() : '---'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PulseRunner;
