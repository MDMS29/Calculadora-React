import React, { useState } from 'react'
import Teclado from './Teclado'

const Calculadora = ({ setModal, result, setResult, historial, setHistorial}) => {
    return (
        <>
            <Teclado
                setModal={setModal}
                result={result}
                setResult={setResult}
                historial={historial}
                setHistorial={setHistorial}
            />
        </>
    )
}

export default Calculadora