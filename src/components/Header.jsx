import React from 'react'
import Horario from './Horario'
import TextoAnimado from './TextoAnimado'
const Header = () => {
  return (
    <header>
      <div>
        <TextoAnimado />
      </div>
      <Horario />
    </header>
  )
}

export default Header