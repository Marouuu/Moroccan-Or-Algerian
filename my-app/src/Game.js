import React, { useState, useEffect } from 'react';


function Game() {
  const [score, setScore] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([
    { src: '', isMoroccan: true },
    { src: '', isMoroccan: false },
    // ... Ajoutez plus d'images ici
  ]);

  useEffect(() => {
    // Chargez les images et les données de jeu à partir d'une API ou d'une source de données locale
  }, []);

  const handleDragEnd = (e) => {
    const { clientX: startX } = e.targetTouches ? e.targetTouches[0] : e;
    const endX = e.clientX;

    if (endX < startX && images[currentImageIndex].isMoroccan) {
      // Si l'utilisateur a glissé l'image vers la gauche et que c'est un Marocain
      setScore(score + 1);
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (endX > startX && !images[currentImageIndex].isMoroccan) {
      // Si l'utilisateur a glissé l'image vers la droite et que ce n'est pas un Marocain
      setScore(score + 1);
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      // Si l'utilisateur a deviné incorrectement ou n'a pas réussi à deviner avant la fin du temps imparti
      setScore(0);
      setCurrentImageIndex(0);
    }
  };

  return (
    <div className="game-container">
      <h1>Devinez si la personne est marocaine ou algérienne</h1>
      <div className="image-container" onTouchEnd={handleDragEnd} onMouseUp={handleDragEnd}>
        <img src={images[currentImageIndex].src} alt="personne à deviner" />
      </div>
      <div className="score-container">
        <p>Votre score : {score}</p>
      </div>
    </div>
  );
}

export default Game;
