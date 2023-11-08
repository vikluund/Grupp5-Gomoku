import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PrimaryButtonSmall from './ButtonPrimarySmall'

const GameOver = ({ winner }) => {
    const handlePrimaryButtonClick = () => {
        alert('Clicked Till startsidan')
    }

    return (
        <GameOverContainer>
            <p>
                <span>Spelare {winner}</span> vann!
            </p>
            <div className="button-container">
                <PrimaryButtonSmall
                    buttonText="Till startsidan"
                    onClick={handlePrimaryButtonClick}
                    disabled={false}
                />
            </div>
        </GameOverContainer>
    )
}

GameOver.propTypes = {
    winner: PropTypes.number.isRequired
}

const GameOverContainer = styled.div`
    /* Modal box */
    width: auto;
    height: auto;
    margin: 0.5rem;
    padding: 2rem 4rem;
    border-radius: 0.32rem;
    border: 1px solid var(--black);
    background-color: var(--black-blue);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        font-family: Abel;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--wood-yellow);

        span {
            color: var(--green-light);
        }
    }

    .button-container {
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default GameOver
