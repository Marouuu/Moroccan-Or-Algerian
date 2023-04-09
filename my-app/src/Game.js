import React, { useState } from 'react';
import Image from './components/Image';
import ButtonGroup from './components/Buttons';

const images = [
  {
    id: 1,
    src: 'https://photos.tf1info.fr/images/700/700/hakim-ziyech-maroc-coupe-du-monde-b04c1c-0@1x.jpeg',
    origin: 'Marocain',
  },
  {
    id: 2,
    src: 'https://dzballon.com/wp-content/uploads/2023/03/20230304_170351-1.jpg',
    origin: 'Algérien',
  },
];

const Game = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleButtonClick = (option) => {
    if (option === images[currentImageIndex].origin) {
      setScore(score + 1);
    }
    setCurrentImageIndex(currentImageIndex + 1);
  }

  if (currentImageIndex >= images.length) {
    return (
      <div>
        <p>Fin du jeu. Votre score est de {score} sur {images.length}.</p>
      </div>
    );
  }

  return (
    <div>
      <Image src={images[currentImageIndex].src} />
      <ButtonGroup handleClick={handleButtonClick} />
      <p>Score : {score}</p>
    </div>
  );
}

export default Game;