import React from 'react'

const Resultado = ({ numero, resultado}) => {
    return (
        <tr>
            <td><span id="resultado">{resultado}</span></td>
        </tr>
    )
}

export default Resultado