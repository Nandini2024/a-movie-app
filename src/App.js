import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Moviecard } from './components/Moviecard';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try{
      const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      setMovies(data);
      //console.log(data);
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <div className='one'>
      <header> 
        <h1> MovieMania </h1>
        <form>
          <div className='bttn'> 
          <input type='text' placeholder='Enter Movie Name' className='inputText'></input>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
          <button><i class="fa fa-search" ></i></button>
          </div>
        </form>
        </header>
      </div>
       
        <main className='main'>
        {
          movies && movies.length > 0 && movies.map(movie => (<Moviecard key={movie.id} movie={movie} />))
        }
        </main>        
    </div>
  );
}

export default App;
