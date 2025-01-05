import fotoperfil from "./assets/images/fotoPerfil.jpg"
import "./App.css"


function App() {


  return (
    <>
    <div className="container">
      <img src={fotoperfil} alt="fotoPerfil" className="fotoperfil"/>
      <h2 className="h2">Agustín Ceballos</h2>
      <button className="button"><a className="a" href="https://www.linkedin.com/in/agustin-ceballos/" >Linkedin</a></button>
      <button className="button"><a className="a" href="https://wa.me/543543316777"  >Whattapp</a></button>
      <button className="button"><a className="a" href="https://github.com/Agustin197" >Github</a></button>
    </div>
    </>
  )
}

export default App

