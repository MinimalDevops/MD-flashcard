export interface Flashcard {
  id: string;
  front: {
    title: string;
    content: string;
  };
  back: {
    title: string;
    content: string;
  };
  category?: string;
}

export interface FlashcardDeck {
  name: string;
  description?: string;
  cards: Flashcard[];
}