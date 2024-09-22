import React from 'react';
import Cell from '../Cell/Cell.tsx';
import './CellsBoard.css';

const CellsBoard = () => {
    const cellsArray = Array(36).fill(null).map((_, index) => (
        <Cell key={index} />
    ));

    return (
        <div className={'container'}>
            <h1>Find the hidden symbol</h1>
            <div className={'cellsBoard'}>
                {cellsArray}
            </div>
            <p className={'attempt'}>Attempt: </p>
        </div>
    );
};

export default CellsBoard;