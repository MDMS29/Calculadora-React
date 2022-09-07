import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Flecha from '../assets/flecha-izquierda.png'
import generarID from './helpers/funtion.js'
import Historial from '../assets/historia.png'

const Section = styled.section`
    margin-top: 30px;
    padding: 20px;
    display: grid;
    justify-content: center;
    border-radius: 1.5em;
    height: 500px;
    grid-template-columns: repeat(4, 90px);
    grid-template-rows: repeat(7, 1fr);
    background-color: #0d0d0db7;
    box-shadow: inset 0px 0px 19px 1px #000000, 0px 0px 19px 5px #ffffff;
    @media screen and (max-width: 600px){
        grid-template-columns: repeat(4, 65px);
        height: 400px;
    }
`
const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 20px;
    font-size: 2em;
    background-color: #ffffff;
    margin-bottom: 5px;
    width: auto;
    border-radius: 30px;
    grid-column: 1 / span 4;
    overflow-x: scroll;
    &::-webkit-scrollbar{
        -webkit-appearance: none;
        max-height: 7px;
    }
    &::-webkit-scrollbar:vertical{
        width: 0;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #797979;
        border-radius: 20px;
    }
`
const Boton = styled.button`
    color: #ffffff;
    background-color: #0d0d0d52;
    border: 1px  #0d0d0d73;
    border-radius: 50% ;
    margin: 1px;
    font-size: 1.8em;
    transition: expandir 1s ease;
    &:focus{
        animation: expandir 1s ease-out;
    }
    @keyframes expandir {
        0%{
            transform: scale(1);
            transform: rotate(30);
            border-radius: 10px;
            background-color: #e2b6ba;
        }
        50%{
            transform: scale(.8);
            border-radius: 10px;
        }
        100%{
            transform: scale(1);
            border-radius: 50px;
        }
    }
`
const Signos = styled.button`
    height: 90%;
    color: #050505;
    background-color: #fffffff1;
    padding: .5%;
    border: 1px  #0d0d0d73;
    border-radius: 50px;
    margin: 1px;
    font-weight: 500;
    font-size: .8em;
    transition: 1s ease;
    &:focus{
        animation: expandir 1s ease-out;
    }
    @keyframes expandir {
        0%{
            transform: scale(1);
            border-radius: 10px;
            background-color: #e2b6ba;
        }
        50%{
            transform: scale(.8);
            border-radius: 10px;
        }
        100%{
            transform: scale(1);
            border-radius: 50px;
        }
    }
    @media screen and (min-width: 600px){
        font-weight: 700;
        font-size: 1.5rem;
        &>span{
            font-size: 1em;
        }
    }
    &>span{
        color: red;
        font-weight: 800;
    }
    `
const SignoIgual = styled.button`
    grid-row: 7;
    grid-column: 1 / 5;
    border-radius: 50px;
    border: 1px  #0d0d0d73;
    background-color: #fa5a04c5;
    color: white;
    font-weight: 800;
    margin: 1px;
    &:focus{
        animation: expandir 1s ease-out;
    }
    @keyframes expandir {
        0%{
            transform: scale(1);
            border-radius: 10px;
            background-color: #e2b6ba;
        }
        50%{
            transform: scale(.8);
            border-radius: 10px;
        }
        100%{
            transform: scale(1);
            border-radius: 50px;
        }
    }
    @media screen and (min-width: 600px){
        font-weight: 700;
        font-size: 1.5rem;
    }
`
const ImgDele = styled.img`
    width: 30%;
    margin: 0 auto;
`


const BotonHisto = styled.button`
    grid-column: 2/ span 2;
    background-color: #fffffff1;
    border-radius: 40px;
    height: 95%;
    border: none;
`
const ImgHisto = styled.img`
    width: 30%;
    margin: 3.5px auto;
    @media screen and (min-width: 600px) {
        width: 30%;
    }
    `

const Teclado = ({ setModal, result, setResult, historial, setHistorial }) => {

    useEffect(() => {
        localStorage.setItem('resultados', JSON.stringify(historial) ?? [])
    }, [result])

    const handleClick = (e) => setResult(result.concat(e.target.name))
    const Calculate = () => {

        setResult(eval(result).toString())
        const acciones = {
            id:  generarID(),
            operacion: result
        }
        setHistorial([...historial, acciones])


    }
    const Reset = () => setResult("")
    const Delete = () => setResult(result.slice(0, result.length - 1))

    return (
        <Section>
            <Input >{result}</Input>

            <Signos onClick={e => Reset()}><span>C</span></Signos>
            <BotonHisto onClick={e => setModal(true)}><ImgHisto src={Historial} /></BotonHisto>
            <Signos onClick={e => Delete()}><ImgDele src={Flecha} /></Signos>

            <Boton name="7" onClick={handleClick}>7</Boton>
            <Boton name="8" onClick={handleClick}>8</Boton>
            <Boton name="9" onClick={handleClick}>9</Boton>
            <Signos name="/" onClick={handleClick}>/</Signos>

            <Boton name="4" onClick={handleClick}>4</Boton>
            <Boton name="5" onClick={handleClick}>5</Boton>
            <Boton name="6" onClick={handleClick}>6</Boton>
            <Signos name="*" onClick={handleClick}>*</Signos>

            <Boton name="1" onClick={handleClick}>1</Boton>
            <Boton name="2" onClick={handleClick}>2</Boton>
            <Boton name="3" onClick={handleClick}>3</Boton>

            <Signos name="-" onClick={handleClick}>-</Signos>

            <Boton name="00" onClick={handleClick}>00</Boton>
            <Boton name="0" onClick={handleClick}>0</Boton>
            <Signos name="." onClick={handleClick}>.</Signos>
            <Signos name="+" onClick={handleClick}>+</Signos>

            <SignoIgual onClick={Calculate}>=</SignoIgual>

        </Section>
    )
}

export default Teclado
