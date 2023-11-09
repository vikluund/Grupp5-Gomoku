import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PrimaryButton from './ButtonPrimary'
import Board from './Board'

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

    return (
        <>
                <ModalMain>
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
                        <div className="button-container">
                            <Link to="/" className="buttonLink">
                                <PrimaryButton
                                    buttonText="Startsida"
                                    disabled={false}
                                />
                            </Link>
                        </div>
                    </GameButton>
                </ModalMain>
            <Board gamesData={gamesData} />
        </>
    )
}

Games.propTypes = {
    gamesData: PropTypes.shape({
        name: PropTypes.string,
        round: PropTypes.number,
        player: PropTypes.number,
        player1: PropTypes.shape({
            name: PropTypes.string
        }),
        player2: PropTypes.shape({
            name: PropTypes.string
        }),
        board: PropTypes.shape({
            tiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
        })
    })
}

export default Games

const GameButton = styled.div`
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

const ModalMain = styled.div`
    /* Modal box */
    height: auto;
    margin: 1rem;
    top: 50%;
    left: 18%;
    padding: 2rem;
    border-radius: 0.32rem;
    border: 1px solid var(--black);
    background-color: var(--black-blue);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    p {
        font-family: Abel;
        text-align: center;
        font-size: 1.25rem;
    }

    h1 {
        font-family: Abel;
        text-align: center;
        font-size: 2.25rem;
        font-weight: 400;
        line-height: normal;

        span {
            color: var(--green-light);
        }
    }

    .buttonLink {
        text-decoration: none;
    }

    .button-container {
        margin-top: 2rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
`
