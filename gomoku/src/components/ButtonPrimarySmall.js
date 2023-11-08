import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PrimaryButtonSmall = ({ buttonText, onClick, disabled }) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {buttonText}
        </Button>
    )
}

/*  On parent component:
    <PrimaryButtonSmall
        buttonText="Button Text Here"
        onClick={YourHandleClickFunctionHere}
        disabled={false}
    />
*/

PrimaryButtonSmall.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

const Button = styled.button`
    width: 9rem;
    height: 2.5rem;
    padding: 0.4rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    color: var(--green-dark);
    font-family: Montserrat;
    font-size: 15px;
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

export default PrimaryButtonSmall
