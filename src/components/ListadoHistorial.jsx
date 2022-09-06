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
    top: 6rem;
    margin: 0 auto;
    width: 80%;
    border-radius: 20px;
    padding: 10px;
`

const Titulo = styled.h2`
    text-transform: uppercase;
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
const ListadoHistorial = ({ setResult, setModal, historial }) => {

    return (
        <Modal>
            <CerrarModal>
                <img src={CerrarBtn} alt="cerar modal" onClick={e=>setModal(false)} />
            </CerrarModal>
            {historial && historial.length ? (
                <DivHistorial>
                    <Titulo>Listado Operaciones</Titulo>
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