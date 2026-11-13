# Tic Tac Toe AI — React + Minimax

Responsive Tic Tac Toe game. You play as **X** and the computer plays as **O**. The AI uses Minimax and plays optimally.

## Requirements
- Node.js LTS (npm is included)
- Visual Studio Code

Check installation:
```bash
node --version
npm --version
```

## Run in VS Code
1. Extract this ZIP.
2. In VS Code choose **File → Open Folder** and select `Tic_Tac_Toe_AI_React`.
3. Choose **Terminal → New Terminal**.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start React's development server:
   ```bash
   npm run dev
   ```
6. Open the URL printed in the terminal, usually `http://localhost:5173`.

Keep the terminal running while you play. Press `Ctrl+C` to stop the server.

## Important: Go Live / Live Server
Do **not** use the VS Code Go Live button for this React project. Live Server only serves static files and does not run Vite's React development setup. Use `npm run dev`.

## Production build
```bash
npm run build
npm run preview
```
The production output is created in `dist/`.

## Project structure
```text
Tic_Tac_Toe_AI_React/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── game.js
    ├── main.jsx
    └── style.css
```

## Minimax scoring
- AI win: `10 - depth`
- Human win: `depth - 10`
- Draw: `0`

Minimax recursively tests legal moves. After each simulated move it restores the square (backtracking). AI maximizes the score while the human is assumed to minimize it.
