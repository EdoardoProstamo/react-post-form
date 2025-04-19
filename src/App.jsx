import { useState } from 'react'
import axios from 'axios';

function App() {

  const [formAction, setFormAction] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  });

  function sendPost(event) {

    const { type, name, value } = event.target;

    setFormAction((prev) => ({

      ...prev, [name]: type === "checkbox" ? checked : value,

    }))
  }

  return (
    <div>
      <h1>Campo testo</h1>
      <form>

        <div>
          <label>Autore</label>
          <input type="text" name='author' value={formAction.author} onChange={sendPost} />
        </div>

        <div>
          <label>Titolo</label>
          <input type="text" name='title' value={formAction.title} onChange={sendPost} />
        </div>

        <div>
          <label>Contenuto</label>
          <input type="text" name='body' value={formAction.body} onChange={sendPost} />
        </div>

        <div>
          <label>Pubblica</label>
          <input type="checkbox" name='public' checked={formAction.public} onChange={sendPost} onClick={true} />
        </div>

        <button type='submit'>Invia</button>

      </form>
    </div>

  )
}

export default App
