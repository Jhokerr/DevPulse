import { useState } from 'react'
import Header from './Components/header.jsx'
import MenuLateral from './Components/menuLateral.jsx'
import Contenedor from './Components/contenedor.jsx'
import Modal from './Components/modal.jsx'


function App() {
  const [isHidden, setIsHidden] = useState(true)

  function cambiarIsHidden(){
    setIsHidden( isHidden => !isHidden)
  }

  return (
    <>
      <Modal  isHidden={isHidden} cambiarIsHidden={cambiarIsHidden} />
      <Header isHidden={isHidden} cambiarIsHidden={cambiarIsHidden} />
      <MenuLateral />
      <Contenedor>
      </Contenedor>

    </>
  )
}

export default App
