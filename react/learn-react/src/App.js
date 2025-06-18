  
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <h1>Welcome To React</h1>
      <h5>Kanha pareek</h5>
      <button
        className="animated-btn"
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: '2px solid #000',
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.2s',
        }}
      >
        Save
      </button>
      <a href='https://reactjs.org'>Learn More</a>
    </div>
  );
}

export default App;
