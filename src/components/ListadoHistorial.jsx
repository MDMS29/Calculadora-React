import React from 'react'
import ItemsHistorial from './ItemsHistorial'
import CerrarBtn from '../assets/cerrar.svg'
import styled from '@emotion/styled'

const Modal = styled.div`
    position: absolute;
    background-color: rgb(0 0 0 / 0.92);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DivHistorial = styled.div`
    background-color: white;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 6rem;
    margin: 0 auto;
    width: 80%;
    height: 50%;
    overflow-y: scroll;
    border-radius: 20px;
    padding: 10px;
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

const Titulo = styled.h1`
    position: relative;
    top: 0;
    text-transform: uppercase;
    background-color: white;
    font-weight: 900;
    margin-bottom: 1em;
`

const CerrarModal = styled.div`
    position: absolute;
    right: 3rem;
    top: 2.5rem;
    width: 2rem;
    height: 3rem;
`
const ListadoHistorial = ({ setResult, setModal, setHistorial, historial }) => {

    const resetear = () => {
        let confir = confirm('¿Desea resetear todo el Historial?')
        if (confir){
            setHistorial([])
            location.reload()
            setResult("")
            setModal(false)
        } 
    }

    return (
        <Modal>
            <CerrarModal>
                <img src={CerrarBtn} alt="cerar modal" onClick={e => setModal(false)} />
            </CerrarModal>
            {historial && historial.length ? (
                <DivHistorial>
                    <Titulo>Listado Operaciones</Titulo>
                    <button type='button' onClick={()=>resetear()}>Resetear Hisotrial</button>
                    {historial.map((historia) => {
                        return (
                            <ItemsHistorial
                                setModal={setModal}
                                setResult={setResult}
                                key={historia.id}
                                operaciones={historia}
                            />
                        )
                    })}
                </DivHistorial>
            ) : (
                <DivHistorial>
                    <Titulo>No Hay Operaciones</Titulo>
                </DivHistorial>
            )}
        </Modal>
    )
}

export default ListadoHistorial