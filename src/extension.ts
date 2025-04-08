import * as vscode from 'vscode';
import { parseMarkdownToDeck } from './utils/markdownParser';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('flashcard-viewer.preview', () => {
    const editor = vscode.window.activeTextEditor;
    
    if (editor) {
      const document = editor.document;
      if (document.languageId === 'markdown') {
        const markdown = document.getText();
        
        // Create and show a new webview
        const panel = vscode.window.createWebviewPanel(
          'flashcardPreview',
          'Flashcard Preview',
          vscode.ViewColumn.Beside,
          {
            enableScripts: true
          }
        );

        try {
          const deck = parseMarkdownToDeck(markdown);
          
          // Get path to our web assets
          const scriptUri = panel.webview.asWebviewUri(
            vscode.Uri.joinPath(context.extensionUri, 'dist', 'assets', 'index.js')
          );
          const styleUri = panel.webview.asWebviewUri(
            vscode.Uri.joinPath(context.extensionUri, 'dist', 'assets', 'index.css')
          );

          // Update the webview content
          panel.webview.html = getWebviewContent(deck, scriptUri.toString(), styleUri.toString());
        } catch (error) {
          vscode.window.showErrorMessage('Failed to parse markdown as flashcards. Please check the format.');
        }
      } else {
        vscode.window.showInformationMessage('Please open a markdown file to preview flashcards.');
      }
    }
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent(deck: any, scriptUri: string, styleUri: string) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashcard Preview</title>
    <link href="${styleUri}" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.flashcardDeck = ${JSON.stringify(deck)};
    </script>
    <script src="${scriptUri}"></script>
  </body>
  </html>`;
}