import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Calculadora from './components/Calculadora'
import Footer from './components/Footer'
import Historial from './components/ListadoHistorial'

function App() {

  const [result, setResult] = useState("")
  const [historial, setHistorial] = useState(JSON.parse(localStorage.getItem('resultados')) ?? [])
  const [modal, setModal] = useState(false)


  return (
    <>
      <Header />
      <main>
        {modal && <Historial
          setResult={setResult}
          setModal={setModal}
          setHistorial={setHistorial}
          historial={historial}
        />}
        <div>
          <Calculadora
            setModal={setModal}
            result={result}
            setResult={setResult}
            historial={historial}
            setHistorial={setHistorial}
          />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
