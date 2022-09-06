import { useState } from 'react'
import Calendario from '../assets/calendario.png'
import Reloj from '../assets/reloj-de-arena.png'
import styled from '@emotion/styled'

const Img = styled.img`
    display: flex;
    margin: 0 auto;
    width: 50px;
    height: 50px;
`
const ImgReloj = styled.img`
    display: flex;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    animation: giro 2s infinite ease-in-out;
    @keyframes giro {
        to{
            transform: rotate(360deg);
        }
       
    }
`

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    padding: 1em;
`
const Span = styled.span`
    font-size: 1.5em;
    animation: rgb 10s infinite  ease-in-out;
    @keyframes rgb {
        0%{
            color: #e65e5e;
        }
        20%{
            color: #4213c4;
        }
        40%{
            color: #53b653;
        }
        60%{
            color: #e48a37;
        }
        80%{
            color: #630463;
        }
        100%{
            color: #e65e5e;
        }
    }
`

const Horario = () => {

    const [dia, setDia] = useState([])

    const fecha = async () => {
        const hora = await fetch('https://worldtimeapi.org/api/timezone/America/Bogota')
        const respuesta = await hora.json()
        setDia(respuesta.datetime)
    }
    fecha()
    return (
        <Div>
            <div>
                <Span><Img src={Calendario} alt="calendario" /> {`${dia.slice(0, -22)}`} </Span>
            </div>
            <div>
                <Span><ImgReloj src={Reloj} alt="calendario" /> {`${dia.slice(11, -13)}`} </Span>
            </div>
        </Div>
    )
}

export default Horario