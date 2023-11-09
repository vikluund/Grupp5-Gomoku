import React from 'react'
import styled from 'styled-components'

const FooterMain = styled.footer`
    width: 100%;
    height: 6rem;
    background-color: black;
    margin: 0;
    padding: 0;
    /* margin-top: 3em; */
    display: flex;
    justify-content: end;
    color: #4b767e;
    font-family: 'Montserrat';
`

const FooterContainer = styled.div`
    justify-content: end;
    align-self: center;
    margin-right: 3rem;
`
const FooterContent = styled.div`
    font-size: 14px;
    font-weight: 600;
`
const FooterKontakt = styled.div`
    text-align: end;
    margin-top: 0.5em;
    font-size: 12px;
    font-weight: 500;
`

const Footer = () => {
    return (
        <>
            <FooterMain>
                <FooterContainer>
                    <FooterContent>Go!moku © Grp5 2023</FooterContent>
                    <FooterKontakt>Info | Kontak</FooterKontakt>
                </FooterContainer>
            </FooterMain>
        </>
    )
}

export default Footer
