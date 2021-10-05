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
        <Dictionary/>
          </main>
      <footer className="footer">
        <a href="https://github.com/Kaylaesmith1/shecodes-dictionary-app" target="_blank">Opensourced</a> code by Kayla Smith
      </footer>
      </div>
    </div>
  );
}

