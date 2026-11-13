export const HUMAN = "X";
export const AI = "O";
export const EMPTY = "";

export const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export function getWinner(board) {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return null;
}

export function isDraw(board) {
  return board.every((cell) => cell !== "") && !getWinner(board);
}

function minimax(board, isMaximizing, depth) {
  const result = getWinner(board);
  if (result?.winner === AI) return 10 - depth;
  if (result?.winner === HUMAN) return depth - 10;
  if (board.every((cell) => cell !== "")) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === EMPTY) {
        board[i] = AI;
        const score = minimax(board, false, depth + 1);
        board[i] = EMPTY;
        bestScore = Math.max(bestScore, score);
      }
    }
    return bestScore;
  }

  let bestScore = Infinity;
  for (let i = 0; i < 9; i++) {
    if (board[i] === EMPTY) {
      board[i] = HUMAN;
      const score = minimax(board, true, depth + 1);
      board[i] = EMPTY;
      bestScore = Math.min(bestScore, score);
    }
  }
  return bestScore;
}

export function findBestMove(currentBoard) {
  const board = [...currentBoard];
  let bestScore = -Infinity;
  let bestMove = null;

  for (let i = 0; i < 9; i++) {
    if (board[i] === EMPTY) {
      board[i] = AI;
      const score = minimax(board, false, 1);
      board[i] = EMPTY;
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
}
