import React, { useState } from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/wood.jpg'

const BoardEmptyStatic = () => {
    const [gameData] = useState({
        name: '',
        round: 1,
        player: 1,
        player1: { name: '' },
        player2: { name: '' },
        state: 'playing',
        board: {
            tiles: Array(17).fill(Array(17).fill(0)) // Initialize with an empty board
        }
    })

    const renderBoard = () => {
        if (!gameData) {
            return <div>Loading...</div>
        }

        return gameData.board.tiles.map((row, rowIndex) => (
            <BoardRow key={rowIndex}>
                {row.map((col, colIndex) => (
                    <BoardCellBackground key={colIndex}>
                        {col === 0 && <EmptyCell></EmptyCell>}
                    </BoardCellBackground>
                ))}
            </BoardRow>
        ))
    }

    return <BoardContainer>{renderBoard()}</BoardContainer>
}

export default BoardEmptyStatic

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    .active {
        font-weight: bold;
        font-size: 1.1rem;
    }
    width: 100%;
`

const BoardCell = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BoardCellBackground = styled(BoardCell)`
    width: 40px;
    height: 40px;
    background-image: url(${backgroundImage});
    filter: brightness(40%);
    background-size: cover;
    background-position: center;
`

const BoardRow = styled.div`
    display: flex;
`

const EmptyCell = styled(BoardCell)`
    background-color: transparent;
`
