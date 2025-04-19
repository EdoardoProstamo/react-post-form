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
          <label>Autore</label>
          <input type="text" name='author' value={formAction.author} />
        </div>

        <div>
          <label>Titolo</label>
          <input type="text" name='title' value={formAction.title} />
        </div>

        <div>
          <label>Contenuto</label>
          <input type="text" name='body' value={formAction.body} />
        </div>

        <div>
          <label>Pubblica</label>
          <input type="radio" name='public' value={formAction.public} />
        </div>

        <button type='submit'>Invia</button>

      </form>
    </div>

  )
}

export default App
