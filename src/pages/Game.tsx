
import React, { useState, useEffect } from "react";
import { Brain, LightBulb, MessageCircle, Puzzle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type ThoughtBubble = {
  id: number;
  icon: JSX.Element;
  points: number;
  position: { x: number; y: number };
  clicked: boolean;
};

const Game = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [thoughtBubbles, setThoughtBubbles] = useState<ThoughtBubble[]>([]);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("thoughtBubbleHighScore");
    return saved ? parseInt(saved) : 0;
  });

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    generateThoughtBubbles();
    toast("Game started! Click on the thought bubbles!");
  };

  const endGame = () => {
    setGameActive(false);
    toast(`Game over! Your score: ${score}`);
    
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("thoughtBubbleHighScore", score.toString());
      toast.success("New high score!");
    }
  };

  const generateThoughtBubbles = () => {
    const bubbles: ThoughtBubble[] = [];
    const icons = [
      <Brain size={24} />,
      <LightBulb size={24} />,
      <MessageCircle size={24} />,
      <Puzzle size={24} />,
      <Star size={24} />
    ];
    
    for (let i = 0; i < 5; i++) {
      bubbles.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        points: Math.floor(Math.random() * 5) + 1,
        position: {
          x: Math.random() * 80 + 10, // 10-90% of width
          y: Math.random() * 70 + 15, // 15-85% of height
        },
        clicked: false
      });
    }
    
    setThoughtBubbles(bubbles);
  };

  const handleBubbleClick = (id: number, points: number) => {
    setScore(prev => prev + points);
    setThoughtBubbles(prev => 
      prev.map(bubble => 
        bubble.id === id ? { ...bubble, clicked: true } : bubble
      )
    );
    
    // Generate a new bubble to replace the clicked one
    setTimeout(() => {
      setThoughtBubbles(prev => {
        const newBubbles = [...prev];
        const icons = [<Brain size={24} />, <LightBulb size={24} />, <MessageCircle size={24} />, <Puzzle size={24} />, <Star size={24} />];
        
        const newBubble = {
          id: Date.now(),
          icon: icons[Math.floor(Math.random() * icons.length)],
          points: Math.floor(Math.random() * 5) + 1,
          position: {
            x: Math.random() * 80 + 10,
            y: Math.random() * 70 + 15,
          },
          clicked: false
        };
        
        return newBubbles.filter(b => !b.clicked).concat(newBubble);
      });
    }, 300);
  };

  // Timer effect
  useEffect(() => {
    let timer: number;
    
    if (gameActive && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameActive) {
      endGame();
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameActive, timeLeft]);

  return (
    <div className="min-h-screen bg-purple-950 flex flex-col relative overflow-hidden py-16 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-purple-800/10 pointer-events-none"></div>
      
      <div 
        className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-black/[0.02]"
        style={{
          backgroundSize: "30px 30px",
          backgroundImage: "linear-gradient(to right, rgba(147, 51, 234, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.05) 1px, transparent 1px)",
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
          Thought Bubble Blitz
        </h1>
        
        {/* Game stats */}
        <div className="glass-card border-purple-500/20 bg-purple-900/30 backdrop-blur-lg p-4 rounded-xl mb-8 w-full max-w-md flex justify-between">
          <div className="text-purple-200">
            <div className="text-sm">Score</div>
            <div className="text-2xl font-bold">{score}</div>
          </div>
          
          <div className="text-purple-200">
            <div className="text-sm">Time Left</div>
            <div className="text-2xl font-bold">{timeLeft}s</div>
          </div>
          
          <div className="text-purple-200">
            <div className="text-sm">High Score</div>
            <div className="text-2xl font-bold">{highScore}</div>
          </div>
        </div>
        
        {/* Game area */}
        <div className="w-full max-w-4xl aspect-video relative border-2 border-purple-500/20 rounded-xl bg-purple-900/10 backdrop-blur-lg overflow-hidden">
          {!gameActive && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-purple-100 mb-4">Click on thought bubbles to score points!</h2>
              <Button 
                onClick={startGame}
                className="bg-purple-700 hover:bg-purple-600 text-white"
              >
                Start Game
              </Button>
            </div>
          )}
          
          {gameActive && thoughtBubbles.map(bubble => !bubble.clicked && (
            <button
              key={bubble.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-700 hover:bg-purple-600 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                left: `${bubble.position.x}%`,
                top: `${bubble.position.y}%`,
              }}
              onClick={() => handleBubbleClick(bubble.id, bubble.points)}
            >
              {bubble.icon}
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-500 text-xs flex items-center justify-center">
                +{bubble.points}
              </span>
            </button>
          ))}
        </div>
        
        <div className="mt-8">
          <Button 
            variant="outline" 
            className="border-purple-500/30 text-purple-200 hover:bg-purple-800"
            asChild
          >
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Game;
