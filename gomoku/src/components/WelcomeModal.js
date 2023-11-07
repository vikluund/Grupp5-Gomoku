import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './ButtonPrimary'
import SecondaryButton from './ButtonSecondary'

const WelcomeModal = () => {
    const handlePrimaryButtonClick = () => {
        alert('Clicked Nytt Spelrum')
    }

    const handleSecondaryButtonClick = () => {
        alert('Clicked Välj Spelrum')
    }

    return (
        <>
            <ModalMain>
                <h1>
                    <span>Välkommen till</span> Go!<span>moku</span>
                </h1>
                <p>Här kan du spela online mot en annan spelare eller vän.</p>
                <p>
                    Starta ett nytt spel eller välj ett spelrum från en lista.
                </p>
                <div className="button-container">
                    <PrimaryButton
                        buttonText="Nytt Spelrum"
                        onClick={handlePrimaryButtonClick}
                        disabled={false}
                    />
                    <SecondaryButton
                        buttonText="Välj Spelrum"
                        onClick={handleSecondaryButtonClick}
                        disabled={false}
                    />
                </div>
            </ModalMain>
        </>
    )
}

const ModalMain = styled.div`
    /* Modal box */
    width: 450px;
    height: 400px;
    margin: 1rem;
    padding: 2rem;
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
