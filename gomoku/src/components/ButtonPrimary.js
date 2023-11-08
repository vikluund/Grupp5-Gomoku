import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PrimaryButton = ({ buttonText, onClick, disabled }) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {buttonText}
        </Button>
    )
}

/*  On parent component:
    <PrimaryButton
        buttonText="Button Text Here"
        onClick={YourHandleClickFunctionHere}
        disabled={false}
    />
*/

PrimaryButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

const Button = styled.button`
    width: 10.5rem;
    height: 4rem;
    padding: 0.5rem 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    color: var(--green-dark);
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.25rem;
    background-color: var(--wood-yellow);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &:hover {
        color: var(--black);
        background-color: #f5c65d;
    }

    &:disabled {
        color: #5b5b5b;
        background-color: #979797;
    }
`

export default PrimaryButton
