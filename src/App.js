import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="app">
      <div className="container">
      <header className="App-header">
       Dictionary App
      </header>
      <main className="dictionary">
        <Dictionary defaultKeyword="thunderstorm"/>
          </main>
      <footer className="footer">
        <a href="https://github.com/Kaylaesmith1/shecodes-dictionary-app" target="_blank" rel="noreferrer">Opensourced</a> code by 
        <a href="https://www.linkedin.com/in/kayla-smith-ab1595101/?locale=en_US" target="_blank" rel="noreferrer"> Kayla Smith</a>
      </footer>
      </div>
    </div>
  );
}

