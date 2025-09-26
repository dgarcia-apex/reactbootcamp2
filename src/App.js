import './App.css';
import films from './Films.json';


function Movies() {
  return (
    <>
    <ul className=''>  
      {films.map((film, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h3>{film.Title}</h3>
            <p><strong>Género:</strong> {film.Genre}</p>
            <p><strong>Director:</strong> {film.Director}</p>
            <img src={film.Poster} alt={`Poster de ${film.Title}`} style={{ width: '200px' }} />
          </li>
      ))}
    </ul>
    </>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <Movies />
      </div>
    </>
  );
}

export default App;
