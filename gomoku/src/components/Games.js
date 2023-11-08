import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
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
            return
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
        <>
            <GameButton>
                <h2>Spelrum som är online</h2>
                <section>
                    <button onClick={() => fetchGame('/full')}>
                        Fetch Full
                    </button>
                    <button onClick={() => fetchGame('/white')}>
                        Fetch White
                    </button>
                    <button onClick={() => fetchGame('/black')}>
                        Fetch Black
                    </button>
                </section>
            </GameButton>
            {/* {gamesData && <Board gameData={gamesData} />} */}
            <BoardContainer>{renderBoard()}</BoardContainer>
        </>
    )
}

Games.propTypes = {
    gamesData: PropTypes.shape({
      name: PropTypes.string,
      round: PropTypes.number,
      player: PropTypes.number,
      player1: PropTypes.shape({
        name: PropTypes.string,
      }),
      player2: PropTypes.shape({
        name: PropTypes.string,
      }),
      board: PropTypes.shape({
        tiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
      }),
    }),
  };

export default Games

const GameButton = styled.div`
    position: absolute;
    padding: 2rem;
    top: 50%;
    right: 35%;
    text-align: center;
    background-color: #131d20;
    border-radius: 10px;

    h2 {
        margin-bottom: 1rem;
    }

    section {
        border: 1px solid #f9d584;
        border-radius: 20px;
        padding: 1rem;
        max-height: 150px;
        overflow-y: auto;
    }

    button {
        padding: 0.5rem;
        margin-right: 0.5rem;
        width: 100%;
        height: 36px;
        background: #35533d;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        font-size: 15px;
        color: #debd76;
        border: solid #35533d;
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 1rem;
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
