import { FlashCardDeck } from './components/FlashCardDeck';

declare global {
  interface Window {
    flashcardDeck?: any;
  }
}

export default function App() {
  const deck = window.flashcardDeck;
  
  if (!deck) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">No flashcard deck available</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <FlashCardDeck deck={deck} />
    </div>
  );
}