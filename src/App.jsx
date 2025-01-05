import fotoperfil from "./assets/images/fotoPerfil.jpg"
import "./App.css"
import { useState } from "react"


function App() {

  const [theme, setTheme] = useState("light");

  const cambiartema = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  return (
    <>
    <div className={`container ${theme}`}>
      <button className="theme" onClick={cambiartema}>theme</button>
      <img src={fotoperfil} alt="fotoPerfil" className="fotoperfil"/>
      <h2 className={`h2 ${theme}`}>Agustín Ceballos</h2>
      <button className="button"><a className="a" href="https://www.linkedin.com/in/agustin-ceballos/" >Linkedin</a></button>
      <button className="button"><a className="a" href="https://wa.me/543543316777"  >Whatsapp</a></button>
      <button className="button"><a className="a" href="https://github.com/Agustin197" >Github</a></button>
    </div>
    </>
  )
}

export default App

