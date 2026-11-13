# 🎮 Tic Tac Toe AI – React + Minimax Algorithm

A modern and interactive Tic Tac Toe game where a human player competes against an AI-powered opponent using the **Minimax Algorithm**.

This project was developed as **Task 2 of my CodSoft Internship** to understand Artificial Intelligence, game logic, recursion, and React.js development.

## 🚀 Project Overview

Tic Tac Toe AI is a web-based game that allows users to play against an intelligent computer opponent. The AI evaluates possible future moves and selects the best possible move using the Minimax algorithm.

## ✨ Features

- Human vs AI gameplay
- Intelligent AI using Minimax Algorithm
- AI evaluates possible future moves
- Human and AI win detection
- Automatic draw detection
- Score tracking system
- Choose who plays first
- New round and reset score functionality
- Modern dark-themed user interface
- Responsive game layout

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- React.js
- Vite
- Minimax Algorithm

## 📁 Project Structure

```text
Tic_Tac_Toe_AI_React/
│
├── src/
│   ├── App.jsx
│   ├── game.js
│   ├── main.jsx
│   └── style.css
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/vikashkumarvk731/CODSOFT-TASK-2-TIC-TAC-TOE-AI.git
```

**2. Open the project folder**

```bash
cd CODSOFT-TASK-2-TIC-TAC-TOE-AI
cd Tic_Tac_Toe_AI_React
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local URL**

Open the URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🧠 How Minimax Algorithm Works

The Minimax algorithm is a recursive decision-making algorithm used in two-player games.

- MAX: AI tries to maximize its score.
- MIN: Human opponent is assumed to minimize the AI's score.
- The algorithm explores possible future moves.
- It evaluates winning, losing, and draw outcomes.
- It selects the best available move.

### Scoring System

- AI Win: `10 - depth`
- Human Win: `depth - 10`
- Draw: `0`

## 🎯 Learning Outcomes

Through this project, I improved my understanding of:

- Artificial Intelligence fundamentals
- Minimax algorithm and recursion
- Backtracking and game-tree evaluation
- React components and state management
- JavaScript programming
- Frontend development
- Debugging and problem-solving

## 👨‍💻 Internship Project

**Organization:** CodSoft  
**Task:** Task 2 – Tic Tac Toe Using AI  
**Project Type:** Artificial Intelligence + Web Development

## 📌 Future Improvements

- Difficulty levels
- Alpha-Beta Pruning optimization
- Multiplayer mode
- Online deployment

---

⭐ If you find this project interesting, feel free to explore the repository and share your feedback!

**Thank you for visiting my project!**
