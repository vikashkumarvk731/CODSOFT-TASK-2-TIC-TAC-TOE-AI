import React, { useState } from "react";
import { BrainCircuit, RotateCcw, Trophy, Sparkles } from "lucide-react";
import { AI, HUMAN, findBestMove, getWinner, isDraw } from "./game.js";

const emptyBoard = () => Array(9).fill("");

export default function App() {
  const [board, setBoard] = useState(emptyBoard);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);
  const [scores, setScores] = useState({ human: 0, ai: 0, draw: 0 });
  const [firstMove, setFirstMove] = useState("human");

  function finish(nextBoard) {
    const win = getWinner(nextBoard);
    if (win?.winner === HUMAN) {
      setResult({ title: "You win!", detail: "Great play. You found a winning line.", line: win.line });
      setScores((s) => ({ ...s, human: s.human + 1 }));
      return true;
    }
    if (win?.winner === AI) {
      setResult({ title: "AI wins", detail: "The Minimax AI found the best path.", line: win.line });
      setScores((s) => ({ ...s, ai: s.ai + 1 }));
      return true;
    }
    if (isDraw(nextBoard)) {
      setResult({ title: "It's a draw", detail: "Both players played optimally.", line: [] });
      setScores((s) => ({ ...s, draw: s.draw + 1 }));
      return true;
    }
    return false;
  }

  function makeAiMove(current) {
    setBusy(true);
    window.setTimeout(() => {
      const move = findBestMove(current);
      if (move === null) {
        setBusy(false);
        return;
      }
      const next = [...current];
      next[move] = AI;
      setBoard(next);
      finish(next);
      setBusy(false);
    }, 280);
  }

  function play(index) {
    if (busy || result || board[index]) return;
    const next = [...board];
    next[index] = HUMAN;
    setBoard(next);
    if (!finish(next)) makeAiMove(next);
  }

  function startRound(starter = firstMove) {
    setBoard(emptyBoard());
    setResult(null);
    if (starter === "ai") makeAiMove(emptyBoard());
  }

  function changeStarter(value) {
    setFirstMove(value);
    startRound(value);
  }

  const status = result?.title || (busy ? "AI is thinking..." : "Your turn — choose a square");

  return (
    <main className="page-shell">
      <section className="game-layout">
        <header className="topbar">
          <div className="brand">
            <div className="brand-icon"><BrainCircuit size={23} /></div>
            <div><p className="eyebrow">CODSOFT · TASK 02</p><h1>Tic Tac Toe <span>AI</span></h1></div>
          </div>
          <div className="ai-pill"><span className="pulse-dot" /> MINIMAX ENGINE</div>
        </header>

        <section className="hero">
          <div>
            <p className="eyebrow hero-eyebrow"><Sparkles size={14} /> THINK. PLAY. OUTSMART.</p>
            <h2>A classic game.<br /><span>Smarter opponent.</span></h2>
            <p className="hero-copy">Challenge an AI that evaluates future moves using the Minimax algorithm. It plays optimally, so a draw is a great result.</p>
          </div>
          <div className="hero-mark" aria-hidden="true"><span className="mark-x">×</span><span className="mark-o">○</span></div>
        </section>

        <section className="content-grid">
          <div className="board-card">
            <div className="board-heading">
              <div><p className="eyebrow">GAME BOARD</p><h3>Human <b className="x-text">X</b> <span className="versus">vs</span> AI <b className="o-text">O</b></h3></div>
              <div className={`turn-indicator ${busy ? "thinking" : ""}`}><span /> {busy ? "Thinking" : result ? "Round over" : "Live game"}</div>
            </div>

            <div className="board" role="group" aria-label="Tic Tac Toe board">
              {board.map((cell, index) => (
                <button
                  className={`cell ${cell === HUMAN ? "cell-x" : cell === AI ? "cell-o" : ""} ${result?.line?.includes(index) ? "winning-cell" : ""}`}
                  key={index}
                  onClick={() => play(index)}
                  disabled={Boolean(cell) || busy || Boolean(result)}
                  aria-label={`Square ${index + 1}${cell ? `, ${cell}` : ", empty"}`}
                >{cell}</button>
              ))}
            </div>

            <div className={`status-banner ${result ? "status-finished" : ""}`} aria-live="polite">
              <span className="status-symbol">{result ? <Trophy size={18} /> : <BrainCircuit size={18} />}</span>
              <div><strong>{status}</strong><small>{result?.detail || (busy ? "Calculating the strongest available move." : "You are X. The computer is O.")}</small></div>
            </div>
            <div className="actions">
              <button className="primary-button" onClick={() => startRound()}><RotateCcw size={17} /> New round</button>
              <button className="secondary-button" onClick={() => { setScores({ human: 0, ai: 0, draw: 0 }); startRound(); }}>Reset scores</button>
            </div>
          </div>

          <aside className="side-column">
            <div className="score-card">
              <p className="eyebrow">SESSION SCORE</p>
              <div className="score-row">
                <div className="score-item"><span className="score-token x-text">X</span><strong>{scores.human}</strong><small>You</small></div>
                <div className="score-divider" />
                <div className="score-item"><span className="score-token draw-token">=</span><strong>{scores.draw}</strong><small>Draws</small></div>
                <div className="score-divider" />
                <div className="score-item"><span className="score-token o-text">O</span><strong>{scores.ai}</strong><small>AI</small></div>
              </div>
            </div>

            <div className="settings-card">
              <p className="eyebrow">GAME SETTINGS</p>
              <label htmlFor="first-move">Who plays first?</label>
              <select id="first-move" value={firstMove} onChange={(e) => changeStarter(e.target.value)}>
                <option value="human">You play first (X)</option>
                <option value="ai">AI plays first (O)</option>
              </select>
              <p className="setting-note">The AI evaluates possible outcomes with Minimax.</p>
            </div>

            <div className="how-card">
              <p className="eyebrow">HOW TO PLAY</p>
              <div className="how-step"><span>01</span><p>Click an empty square to place <b className="x-text">X</b>.</p></div>
              <div className="how-step"><span>02</span><p>The AI calculates and places <b className="o-text">O</b>.</p></div>
              <div className="how-step"><span>03</span><p>Make three in a row to win.</p></div>
            </div>
          </aside>
        </section>

        <footer className="footer"><span>BUILT WITH REACT + JAVASCRIPT</span><span>POWERED BY MINIMAX <i>●</i></span></footer>
      </section>
    </main>
  );
}
