import React from 'react'
import styled from '@emotion/styled'

const Boton = styled.button`
    border: none;
    margin: 5px auto;
    padding: 10px;
    border-radius: 10px 25px;
    font-size: 1.2em;
    background-color: #cd4218;
    color: white;
`
const Div = styled.div`
    margin: 2px;
`

const ItemsHistorial = ({ setModal, setResult, operaciones }) => {

    const { id, operacion } = operaciones

    return (
        <Div>
            <Boton onClick={() => {
                setResult(operacion)
                setModal(false)
            }}>{operacion}
            </Boton>
        </Div>
    )
}

export default ItemsHistorial