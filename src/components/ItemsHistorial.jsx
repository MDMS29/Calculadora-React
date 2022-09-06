import React from 'react'

const ItemsHistorial = ({ setModal, setResult, operaciones }) => {
    
    const {id, operacion} = operaciones

    return (
        <div>
            <button onClick={() => {
                setResult(operacion)
                setModal(false)
                }}>{operacion}</button>
        </div>
    )
}

export default ItemsHistorial