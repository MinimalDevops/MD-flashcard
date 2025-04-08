import { FlashcardDeck, Flashcard } from '../types';

const DECK_TITLE_REGEX = /^# (.*?)(?:\n|$)/;
const DECK_DESCRIPTION_REGEX = /^_(.*)_(?:\n|$)/;
const CARD_REGEX = /## Card: (.*?)(?:\n|\r\n)[\s]*### Front[\s]*(?:\n|\r\n)([\s\S]*?)(?:\n|\r\n)[\s]*### Back[\s]*(?:\n|\r\n)([\s\S]*?)(?=(?:\n|\r\n)[\s]*## Card:|$)/g;
const CATEGORY_REGEX = /\[Category: (.*?)\]/;

export function formatContent(content: string): string {
  // First, handle bullet points by wrapping them in a ul
  const lines = content.split('\n');
  let inBulletList = false;
  let formattedContent = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      if (inBulletList) {
        formattedContent += '</ul>';
        inBulletList = false;
      }
      continue;
    }

    if (line.startsWith('- ')) {
      if (!inBulletList) {
        formattedContent += '<ul>';
        inBulletList = true;
      }
      formattedContent += `<li>${line.substring(2).trim()}</li>`;
    } else {
      if (inBulletList) {
        formattedContent += '</ul>';
        inBulletList = false;
      }
      formattedContent += `<p>${line}</p>`;
    }
  }

  if (inBulletList) {
    formattedContent += '</ul>';
  }

  return formattedContent;
}

export function parseMarkdownToDeck(markdown: string): FlashcardDeck {
  // Normalize line endings
  const normalizedMarkdown = markdown.replace(/\r\n/g, '\n');
  
  // Extract deck title
  const titleMatch = normalizedMarkdown.match(DECK_TITLE_REGEX);
  const name = titleMatch ? titleMatch[1] : 'Untitled Deck';

  // Extract deck description
  const descriptionMatch = normalizedMarkdown.match(DECK_DESCRIPTION_REGEX);
  const description = descriptionMatch ? descriptionMatch[1] : undefined;

  const cards: Flashcard[] = [];
  let match;
  let id = 1;

  // Reset lastIndex to ensure we catch all matches
  CARD_REGEX.lastIndex = 0;
  
  while ((match = CARD_REGEX.exec(normalizedMarkdown)) !== null) {
    const [_, title, frontContent, backContent] = match;
    
    // Extract category if present
    const categoryMatch = title.match(CATEGORY_REGEX);
    const category = categoryMatch ? categoryMatch[1] : undefined;
    
    // Clean up the title by removing the category if present
    const cleanTitle = title.replace(CATEGORY_REGEX, '').trim();

    cards.push({
      id: String(id++),
      front: {
        title: cleanTitle,
        content: formatContent(frontContent)
      },
      back: {
        title: cleanTitle,
        content: formatContent(backContent)
      },
      category
    });
  }

  return {
    name,
    description,
    cards
  };
}