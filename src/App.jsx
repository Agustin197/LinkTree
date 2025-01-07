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
      <button className={`theme ${theme}`} onClick={cambiartema}>
        <span class="icon">{theme === "light" ? "🌛" : "🌞"}</span> 
        </button>
      <img src={fotoperfil} alt="fotoPerfil" className="fotoperfil"/>
      <h2 className={`h2 ${theme}`}>Agustín Ceballos</h2>
      <button className="button">
        <a className="a" href="https://www.linkedin.com/in/agustin-ceballos/" target="_blank">Linkedin</a>
        </button>
      <button className="button">
        <a className="a" href="https://wa.me/543543316777" target="_blank" >Whatsapp</a>
        </button>
      <button className="button">
        <a className="a" href="https://github.com/Agustin197" target="_blank">Github</a>
        </button>
    </div>
    </>
  )
}

export default App

