import React, { useState } from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/wood.jpg'
import blackPiece from '../assets/BlackPiece.png'
import whitePiece from '../assets/WhitePiece.png'

const Games = () => {
    const [gamesData, setgamesData] = useState(null)

    const fetchGame = async (path) => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/gomoku/${path}`
            )
            const data = await response.json()
            setgamesData(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const renderBoard = () => {
        if (!gamesData) {
            return <div>No game selected</div>
        }

        return gamesData.board.tiles.map((row, rowIndex) => (
            <BoardRow key={rowIndex}>
                {row.map((col, colIndex) => (
                    <BoardCellBackground key={colIndex}>
                        {col === 0 && <EmptyCell></EmptyCell>}
                        {col === 1 && <Player1Cell></Player1Cell>}
                        {col === 2 && <Player2Cell></Player2Cell>}
                    </BoardCellBackground>
                ))}
            </BoardRow>
        ))
    }

    return (
        <BoardContainer>
            <GameButton>
                <button onClick={() => fetchGame('/full')}>Fetch Full</button>
                <button onClick={() => fetchGame('/white')}>Fetch White</button>
                <button onClick={() => fetchGame('/black')}>Fetch Black</button>
            </GameButton>
            {renderBoard()}
        </BoardContainer>
    )
}

export default Games

const GameButton = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 34%;
    text-align: center;

    button {
        padding: 0.5rem;
        margin-right: 0.5rem;
        width: 129px;
        height: 36px;
        background: #35533d;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        font-size: 15px;
        color: #debd76;
        border: solid #35533d;
        border-radius: 3px;
        cursor: pointer;
    }
`

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
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
    background-size: cover;
    background-position: center;
`

const BoardRow = styled.div`
    display: flex;
`

const EmptyCell = styled(BoardCell)`
    background-color: transparent;
`

const Player1Cell = styled(BoardCell)`
    background-image: url(${blackPiece});
    background-size: cover;
    background-position: center;
    background-color: transparent;
`

const Player2Cell = styled(BoardCell)`
    background-image: url(${whitePiece});
    background-size: cover;
    background-position: center;
    background-color: transparent;
`
