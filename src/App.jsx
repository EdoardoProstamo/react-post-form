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

    const { type, name, value, checked } = event.target;

    setFormAction((prev) => ({

      ...prev, [name]: type === "checkbox" ? checked : value,

    }))
  }


  function sendSubmit(event) {

    event.preventdefault();

    axios
      .post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formAction)
      .then(res => {

        setFormAction({ author: "", title: "", body: "", public: false })
        console.log("Post inviato", res.data)

      })
  }


  return (
    <div>
      <h1>Campo testo</h1>
      <form onSubmit={sendSubmit}>

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
          <input type="checkbox" name='public' checked={formAction.public} onChange={sendPost} />
        </div>

        <button type='submit'>Invia</button>

      </form>
    </div>

  )
}

export default App
