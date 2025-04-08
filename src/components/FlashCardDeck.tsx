import { useState, useEffect, useCallback } from 'react';
import { FlashCard } from './FlashCard';
import { FlashcardDeck } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlashCardDeckProps {
  deck: FlashcardDeck;
}

export function FlashCardDeck({ deck }: FlashCardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % deck.cards.length);
    setIsFlipped(false); // Reset flip state when navigating
  }, [deck.cards.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + deck.cards.length) % deck.cards.length);
    setIsFlipped(false); // Reset flip state when navigating
  }, [deck.cards.length]);

  const toggleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key); // Log the key pressed
      if (event.key === 'ArrowLeft') {
        console.log('Attempting to go to previous card');
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        console.log('Attempting to go to next card');
        goToNext();
      } else if (event.key === ' ') { // Space bar
        console.log('Attempting to flip card');
        event.preventDefault(); // Prevent scrolling the page
        toggleFlip();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [goToNext, goToPrevious, toggleFlip]); // Correct dependencies

  return (
    <div className="flex flex-col items-center bg-white min-h-screen gap-4 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{deck.name}</h1>
        {deck.description && (
          <p className="text-gray-600">{deck.description}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">
          Card {currentIndex + 1} of {deck.cards.length}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Shortcuts: Space (flip) • N (next) • P (previous)
        </p>
      </div>

      <div className="flex items-center gap-8">
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          className="p-2 rounded-full hover:bg-gray-100"
          title="Previous card (P)"
        >
          <ChevronLeft size={24} />
        </button>

        <FlashCard 
          key={deck.cards[currentIndex].id} 
          card={deck.cards[currentIndex]}
          isFlipped={isFlipped}
          onFlip={toggleFlip}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="p-2 rounded-full hover:bg-gray-100"
          title="Next card (N)"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}