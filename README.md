# MD Flashcard

Convert your Markdown files into interactive flashcards right in VSCode! MD Flashcard is a simple yet powerful extension that helps you create and study flashcards using familiar Markdown syntax.

## Features

- 🔄 Interactive card flipping
- 📚 Support for multiple cards in a deck
- 🏷️ Category tagging for better organization
- ⌨️ Keyboard navigation (Space, Arrow Keys)
- 🎨 Clean, modern UI with smooth animations

## Installation

### Option 1: Install from VSIX file

1. Download the latest `md-flashcard-x.x.x.vsix` file from the [GitHub Releases](https://github.com/MinimalDevops/MD-flashcard/tree/main/release) page
2. Open VSCode
3. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS)
4. Type "Install from VSIX" and select the command
5. Navigate to the downloaded VSIX file and select it

Alternatively, you can install via command line:
```bash
code --install-extension md-flashcard-x.x.x.vsix
```

### Option 2: Build from Source

If you want to build the extension yourself:

1. Clone the repository
```bash
git clone https://github.com/MinimalDevops/MD-flashcard.git
cd MD-flashcard
```

2. Install dependencies
```bash
npm install
```

3. Build the extension
```bash
npm run build
```

4. Package the extension
```bash
npx @vscode/vsce package
```

This will create a `md-flashcard-x.x.x.vsix` file in your project directory, which you can install using the steps from Option 1.

## Usage

1. Create a markdown file (`.md` extension)
2. Format your flashcards using the template below
3. Click the "Preview Flashcards" button in the editor title bar or use the command palette (`Ctrl/Cmd+Shift+P` and search for "Preview Flashcards")

You can navigate the flashcard preview using keyboard shortcuts: Space bar to flip the card, Left Arrow for the previous card, and Right Arrow for the next card.

### Markdown Format

```
# Sample Deck
_This is a sample flashcard deck_

## Card: Basic Math [Category: Math]

### Front

What is 2 + 2?

### Back

The answer is 4
1. This too

## Card: Geo Knowledge [Category: Geography]

### Front

What is the capital of France?

### Back 

Paris is the capital of France.
This is not printed

## Card: Technology [Category: Technology]

### Front

who are top 4 cloud service provider?

### Back 

Amazon
Google
Microsoft
Oracle
```

The four main principles of OOP are:

- Encapsulation: Bundling data and methods that operate on that data within a single unit
- Inheritance: The mechanism that allows a class to inherit properties and methods from another class
- Polymorphism: The ability to present the same interface for different underlying forms (data types or classes)
- Abstraction: Hiding complex implementation details and showing only the necessary features of an object

## Card: REST API [Category: Web Development]

### Front

What is a REST API and what are its key characteristics?

### Back

REST (Representational State Transfer) is an architectural style for designing networked applications.

Key characteristics include:
- Stateless: Each request contains all necessary information
- Client-Server: Separation of concerns between client and server
- Cacheable: Responses must define themselves as cacheable or not
- Uniform Interface: Standardized way to communicate between client and server
- Layered System: Client cannot tell if it's connected directly to the server

Common HTTP methods used:
- GET: Retrieve data
- POST: Create new data
- PUT/PATCH: Update existing data
- DELETE: Remove data
\`\`\`

## Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Make your changes
4. Test your changes:
   - Press F5 in VSCode to launch a new Extension Development Host window
   - Create a markdown file and try the flashcard preview feature
5. Build and package:
   - Run `npm run build` to build the extension
   - Run `npx @vscode/vsce package` to create a VSIX file

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/MinimalDevops/MD-flashcard/issues) on our GitHub repository. 