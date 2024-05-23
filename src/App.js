import { useState, useEffect } from "react";
import "./index.css"

function App() {
  const[nutri, setNutri] = useState([])

  useEffect(()=>{
    function readApi(){
    
      fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
      .then((r)=> r.json())
      .then((json)=>{
      console.log(json)
      setNutri(json)
      })
    }
    readApi()

  }, [])    
  return (  
    <div>
      <header className="cabecalho">Dicas Nutri React</header>
      {nutri.map((item)=>{
        return(
          <article key={item.id} className="article">
            <strong>{item.titulo}</strong>
            <img alt="capa" src={item.capa}/>
            <p>{item.subtitulo}</p>
            <strong>{item.categoria}</strong>
          </article>
)
      })}
    </div>

  );
}

export default App;
