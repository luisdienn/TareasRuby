import { Link } from "react-router-dom"
import '../App.css'

function Home() {
  return (
    <>
    <h1>INICIO</h1>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Link 
        to="/contador" 
        className="link-button"
      >
        Contador
      </Link>

      <Link 
        to="/todo" 
        className="link-button"
      >
        To Do List
      </Link>
    </div>
    </>
  )
}

export default Home
