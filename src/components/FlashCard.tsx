import { Flashcard } from '../types';
import { ArrowLeftRight } from 'lucide-react';

interface FlashCardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

export function FlashCard({ card, isFlipped, onFlip }: FlashCardProps) {
  return (
    <div
      className="perspective-1000 w-[600px] h-[400px] cursor-pointer"
      onClick={onFlip}
    >
      <div className={`relative w-full h-full transform-style-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{card.front.title}</h2>
              <ArrowLeftRight className="text-gray-400" />
            </div>
            <div className="flex-grow overflow-auto">
              <div 
                className="text-xl text-gray-700 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:pl-4 [&>ul>li]:mb-2 last:[&>*]:mb-0"
                dangerouslySetInnerHTML={{ __html: card.front.content }}
              />
            </div>
            {card.category && (
              <div className="mt-auto pt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {card.category}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden bg-blue-50 rounded-lg shadow-lg p-8 rotate-y-180">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{card.back.title}</h2>
              <ArrowLeftRight className="text-gray-400" />
            </div>
            <div className="flex-grow overflow-auto">
              <div 
                className="text-xl text-gray-700 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:pl-4 [&>ul>li]:mb-2 last:[&>*]:mb-0"
                dangerouslySetInnerHTML={{ __html: card.back.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}