/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Board = ({ selectedGame }) => {
    const [gameData, setGameData] = useState(null)
    const [player1Name, setPlayer1Name] = useState('')
    const [player2Name, setPlayer2Name] = useState('')

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/gomoku/${selectedGame}`
                )
                const data = await response.json()
                setGameData(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchGame()
    }, [selectedGame])

    const playerNameChange = (playerNumber, newName) => {
        if (playerNumber === 1) {
            setPlayer1Name(newName)
        } else if (playerNumber === 2) {
            setPlayer2Name(newName)
        }
    }

    const renderBoard = () => {
        if (!gameData) {
            return <div>Loading...</div>
        }

        const cellClick = (rowIndex, colIndex) => {
            if (
                gameData?.board?.tiles[rowIndex][colIndex] === 0 &&
                gameData.state === 'playing'
            ) {
                const currentPlayer = gameData.player

                const newTiles = gameData.board.tiles.map((row) => [...row])

                newTiles[rowIndex][colIndex] = currentPlayer

                setGameData((prevGameData) => ({
                    ...prevGameData,
                    board: {
                        ...prevGameData.board,
                        tiles: newTiles
                    }
                }))

                const nextPlayer = currentPlayer === 1 ? 2 : 1
                setGameData((prevGameData) => ({
                    ...prevGameData,
                    player: nextPlayer
                }))
            }
        }

        return gameData.board.tiles.map((row, rowIndex) => (
            <BoardRow key={rowIndex}>
                {row.map((col, colIndex) => (
                    <BoardCell
                        key={colIndex}
                        onClick={() => cellClick(rowIndex, colIndex)}
                    >
                        {col === 0 && <EmptyCell></EmptyCell>}
                        {col === 1 && <Player1Cell>1</Player1Cell>}
                        {col === 2 && <Player2Cell>2</Player2Cell>}
                    </BoardCell>
                ))}
            </BoardRow>
        ))
    }

    return (
        <BoardContainer>
            <h1>{gameData?.name}</h1>
            <p>Round: {gameData?.round}</p>
            <p>Current Player: {gameData?.player}</p>

            <input
                type="text"
                name="Player 1's Name"
                value={player1Name}
                onChange={(e) => playerNameChange(1, e.target.value)}
            />
            <input
                type="text"
                name="Player 2's Name"
                value={player2Name}
                onChange={(e) => playerNameChange(2, e.target.value)}
            />

            {renderBoard()}
        </BoardContainer>
    )
}

export default Board

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const BoardRow = styled.div`
    display: flex;
`

const BoardCell = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmptyCell = styled(BoardCell)`
    background-color: #ffffff;
`

const Player1Cell = styled(BoardCell)`
    background-color: #ff0000; /* Player 1 color */
`

const Player2Cell = styled(BoardCell)`
    background-color: #0000ff; /* Player 2 color */
`
