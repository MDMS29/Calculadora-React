import styled from '@emotion/styled'
import React from 'react'

const PiePag = styled.footer`
    padding: 30px;
    margin: 30px;
    line-height: 1.5em;
    color: #000000;
    font-weight: 700;
    text-transform: uppercase;
`

const Footer = () => {
    return (
        <PiePag>
            Hecho por Moises Mazo :D
        </PiePag>
    )
}

export default Footer