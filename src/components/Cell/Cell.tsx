import * as React from 'react';
import './Cell.css';

interface Props {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const Cell: React.FC<Props> = ({hasItem, clicked, onClick}) => {
    const content = clicked ? (hasItem ? '🔆' : '') : '';
    return (
        <div className="cell" onClick={onClick} style={{backgroundColor: clicked ? '#fff' : '#e0dbdb'}}>
            {content}
        </div>
    );
};

export default Cell;