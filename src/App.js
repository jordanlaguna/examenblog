import { useState, useEffect } from "react"
import Loading from "./Loading"
import Profile from "./Profile"

function App() {
  const [items, setItems] = useState([])
  // Change this to any username whose repositories you want to get
  const [user] = useState("jordanlaguna")

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
      )
      const data = await res.json()
      setItems(data)
      console.log(data)
    }

    fetchRepos()
  }, [user])

  return (
    <>
     <header>
      <div className="pageHead">
        <h3 className="title">Blog personal
          <img className="logoBlog" src="/Logo.jpg" alt="not found" />
        </h3>
        </div>
      </header>

      <nav>
        <div>
        <h2 className="title2">
          Hola, mi nombre es Jordan! Tengo 26 años, soy de Río Claro <br /> estudio
          ingeniería en sistemas de la Universidad Nacional <br />de Costa Rica.
          Este es mi blog personal.<br /> En el siguiente enlance podrán ver mi linkedin y abajo mis repositorios.
          <a className="linkedin" href="https://www.linkedin.com/in/jordan-laguna-rodríguez-893921274/">Click Linkedin</a>
          <img className="photo" src="/foto.jpg" alt="Not Found" />
         
        </h2>

        </div>
      </nav>
      <section className="repos">
      <div className="pt-6">
        <h1 className="mb-10 font-bold text-2xl">
          Viendo los repositorios de {user}
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
          {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
      </section>

      <footer>
      <div className="PageFooter">
            <h4 className="text1">Jordan Laguna</h4>
            <img className="face" src="/facebook.png" alt="Not Found" /> 
            
            <h6 className="copy">Copyright ® 2023</h6>
        </div>
        </footer>


    </>
  )
}

export default App
