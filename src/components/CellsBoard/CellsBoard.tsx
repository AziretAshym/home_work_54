import React, {useState} from 'react';
import Cell from '../Cell/Cell.tsx';
import './CellsBoard.css';

const CellsBoard = () => {
    const createCells = () => {
      const cellsArray = Array(36).fill({hasItem: false, clicked: false});

      const randomCellIndex = Math.floor(Math.random() * 36);
      cellsArray[randomCellIndex] = {hasItem: true, clicked: false};

      return cellsArray;
    };

    const [cells, setCells] = useState(createCells());
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const cellClick = (index: number) => {
        if (gameOver) return;
        const cell = cells[index];

        if (!cell.clicked) {
            const newCell = cells.map((cell, i) =>
                i === index ? { ...cell, clicked: true } : cell
            );

            setCells(newCell);
            setAttempts(attempts + 1);

            if (cell.hasItem) {
                alert('You are win!');
                setGameOver(true);
            }
        }

    };

    const reset = () => {
      setCells(createCells);
      setAttempts(0);
      setGameOver(false);
    };
    return (
        <div className={'container'}>
            <h1>Find the hidden symbol</h1>
            <div className={'cellsBoard'}>
                {cells.map((cell, index) => (
                    <Cell key={index} hasItem={cell.hasItem} clicked={cell.clicked} onClick={() => cellClick(index)} />
                ))}
            </div>
            <p className={'attempt'}>Attempt: {attempts}</p>
            <button type={'button'} className={'resetBtn'} onClick={reset}>Reset</button>
        </div>
    );
};

export default CellsBoard;