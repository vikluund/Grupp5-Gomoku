import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PrimaryButton from './ButtonPrimary'
import SecondaryButton from './ButtonSecondary'
import BoardEmptyStatic from './BoardEmptyStatic'

const WelcomeModal = () => {
    return (
        <>
            <StartContainer>
                <BoardEmptyStatic />
                <ModalMain>
                    <h1>
                        <span>Välkommen till</span> Go!<span>moku</span>
                    </h1>
                    <p>
                        Här kan du spela online mot en annan spelare eller vän.
                    </p>
                    <p>
                        Starta ett nytt spel eller välj ett spelrum från en
                        lista.
                    </p>
                    <div className="button-container">
                        <Link to="/newRoom" className="buttonLink">
                            <PrimaryButton
                                buttonText="Nytt Spelrum"
                                disabled={false}
                            />
                        </Link>
                        <Link to="/chooseRoom" className="buttonLink">
                            <SecondaryButton
                                buttonText="Välj Spelrum"
                                disabled={false}
                            />
                        </Link>
                    </div>
                </ModalMain>
            </StartContainer>
        </>
    )
}

const StartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const ModalMain = styled.div`
    /* Modal box */
    height: auto;
    margin: 1rem;
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

export default WelcomeModal
