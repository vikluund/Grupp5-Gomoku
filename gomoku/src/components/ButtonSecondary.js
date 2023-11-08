import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SecondaryButton = ({ buttonText, onClick, disabled }) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {buttonText}
        </Button>
    )
}

/*  On parent component:
    <SecondaryButton
        buttonText="Button Text Here"
        onClick={YourHandleClickFunctionHere}
        disabled={false}
    />
*/

SecondaryButton.propTypes = {
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

    color: var(--wood-light);
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.25rem;
    background-color: var(--green-dark);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &:hover {
        color: #fff3d9;
        background-color: #2b4830;
    }

    &:disabled {
        color: #c1c1c0;
        background-color: #595959;
    }
`

export default SecondaryButton
