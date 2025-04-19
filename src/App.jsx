import { useState } from 'react'

function App() {

  const [formAction, setFormAction] = useState({
    author: "",
    title: "",
    body: "",
    public: true
  });


  return (
    <div>
      <h1>Campo testo</h1>
      <form>

        <div>
          <label>author</label>
          <input type="text" />
        </div>

        <div>
          <label>title</label>
          <input type="text" />
        </div>

        <div>
          <label>body</label>
          <input type="text" />
        </div>

        <div>
          <label>public</label>
          <input type="radio" />
        </div>

        <button>Invia</button>

      </form>
    </div>

  )
}

export default App
